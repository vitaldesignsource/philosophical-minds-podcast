// Starts the production server against the real build and exercises it over HTTP.
//
// A build alone is not enough here: the two outages this site has had were
// runtime module-resolution failures that only surfaced once a request was
// served, while `next build` reported success. Everything below therefore runs
// against a started server.

import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import test, { after, before } from "node:test";
import { fileURLToPath } from "node:url";

const ROUTES = [
  "/",
  "/library",
  "/library/hermeticism",
  "/library/neoplatonism",
  "/library/alchemy",
  "/episodes",
  "/guests",
  "/topics",
  "/projects",
  "/appearances",
  "/journal",
  "/about",
  "/contact",
  "/journal/what-is-theurgy",
  "/topics/alchemy",
];

// Module specifiers that production failed to resolve. If any reappears in the
// server's output the site is down, whatever the build said.
const RESOLUTION_FAILURES = [/Cannot find module/i, /Failed to load external module/i];

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));

let server;
let baseUrl;
let output = "";

async function freePort() {
  const probe = createServer();
  probe.listen(0, "127.0.0.1");
  await once(probe, "listening");
  const { port } = probe.address();
  await new Promise((resolve) => probe.close(resolve));
  return port;
}

before(async () => {
  const port = await freePort();
  baseUrl = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    cwd: projectRoot,
    stdio: ["ignore", "pipe", "pipe"],
    detached: true,
  });
  server.stdout.on("data", (c) => (output += c));
  server.stderr.on("data", (c) => (output += c));

  const deadline = Date.now() + 90_000;
  for (;;) {
    if (server.exitCode !== null) throw new Error(`server exited early:\n${output}`);
    try {
      await fetch(baseUrl, { signal: AbortSignal.timeout(2_000) });
      return;
    } catch {
      if (Date.now() > deadline) throw new Error(`server never became ready:\n${output}`);
      await new Promise((r) => setTimeout(r, 500));
    }
  }
});

after(() => {
  if (!server?.pid) return;
  // A negative pid targets the whole process group, so no child outlives the run.
  try {
    process.kill(-server.pid, "SIGKILL");
  } catch {
    server.kill("SIGKILL");
  }
});

for (const route of ROUTES) {
  test(`serves ${route}`, async () => {
    const response = await fetch(baseUrl + route, { signal: AbortSignal.timeout(20_000) });
    assert.equal(response.status, 200, `${route} returned ${response.status}`);
    const html = await response.text();
    assert.match(html, /<\/html>/i, `${route} did not return a complete document`);
  });
}

test("every page carries the site navigation", async () => {
  const html = await (await fetch(`${baseUrl}/library`)).text();
  assert.match(html, /Philosophical Minds/);
  assert.match(html, /href="\/episodes"/);
});

test("the library lists its reference shelves", async () => {
  const html = await (await fetch(`${baseUrl}/library`)).text();
  assert.match(html, /Hermeticism/);
  assert.match(html, /href="\/library\/hermeticism"/);
});

test("a shelf page renders its full reference entry", async () => {
  const html = await (await fetch(`${baseUrl}/library/hermeticism`)).text();
  for (const expected of ["Corpus Hermeticum", "Emerald Tablet", "Hermes Trismegistus"]) {
    assert.match(html, new RegExp(expected), `shelf page missing ${expected}`);
  }
});

test("shelves cross-link to one another", async () => {
  const hermeticism = await (await fetch(`${baseUrl}/library/hermeticism`)).text();
  assert.match(hermeticism, /href="\/library\/neoplatonism"/);
  const neoplatonism = await (await fetch(`${baseUrl}/library/neoplatonism`)).text();
  assert.match(neoplatonism, /href="\/library\/hermeticism"/);
  assert.match(neoplatonism, /Plotinus/);
});

test("an unknown shelf returns 404 rather than erroring", async () => {
  const response = await fetch(`${baseUrl}/library/not-a-real-shelf`);
  assert.equal(response.status, 404);
});

test("the server resolved every module it needed", () => {
  for (const pattern of RESOLUTION_FAILURES) {
    assert.doesNotMatch(output, pattern, `server reported a module resolution failure:\n${output}`);
  }
});
