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
  "/library/alchemies",
  "/library/qabalah-and-kabbalah",
  "/library/sacred-architecture",
  "/library/philosophies",
  "/library/recommended-books",
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

test("the recommended books page aggregates every shelf's reading path", async () => {
  const html = await (await fetch(`${baseUrl}/library/recommended-books`)).text();
  // One title drawn from each shelf, so a shelf dropping out of the aggregate fails here.
  for (const title of ["Hermetica", "Simplicity of Vision", "Secrets of Alchemy", "Very Short Introduction", "Gothic Cathedral"]) {
    assert.match(html, new RegExp(title), `aggregate missing ${title}`);
  }
});

test("announced shelves are never clickable before they are written", async () => {
  // Planned shelves are advertised on the Library index on purpose. What must
  // not happen is one of them linking somewhere, because there is nothing to
  // link to yet and the reader would land on a 404.
  const html = await (await fetch(`${baseUrl}/library`)).text();
  const cards = [...html.matchAll(/<(a|article)\b[^>]*class="[^"]*route-card[^"]*"[^>]*>(.*?)<\/\1>/gs)];
  assert.ok(cards.length > 0, "no shelf cards found on the Library index");

  const planned = cards.filter(([, , body]) => /In preparation/.test(body));
  for (const [, tag] of planned) {
    assert.equal(tag, "article", "an announced shelf is a link but has no page yet");
  }

  // And every card that IS a link must resolve.
  const hrefs = [...html.matchAll(/class="[^"]*route-card[^"]*"\s+href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    const status = (await fetch(baseUrl + href)).status;
    assert.equal(status, 200, `${href} is linked from the Library but returned ${status}`);
  }
});

test("shelves cross-link to one another", async () => {
  const hermeticism = await (await fetch(`${baseUrl}/library/hermeticism`)).text();
  assert.match(hermeticism, /href="\/library\/neoplatonism"/);
  const neoplatonism = await (await fetch(`${baseUrl}/library/neoplatonism`)).text();
  assert.match(neoplatonism, /href="\/library\/hermeticism"/);
  assert.match(neoplatonism, /Plotinus/);
});

test("the retired alchemy slug still reaches the Alchemies shelf", async () => {
  const response = await fetch(`${baseUrl}/library/alchemy`, { redirect: "manual" });
  assert.ok([301, 308].includes(response.status), `/library/alchemy returned ${response.status}`);
  assert.equal(response.headers.get("location"), "/library/alchemies");
});

test("an unknown shelf returns 404 rather than erroring", async () => {
  const response = await fetch(`${baseUrl}/library/not-a-real-shelf`);
  assert.equal(response.status, 404);
});

test("every indexable page declares a canonical URL", async () => {
  for (const route of ROUTES) {
    const html = await (await fetch(baseUrl + route)).text();
    const match = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(match, `${route} has no canonical link`);
    assert.equal(
      match[1],
      `https://philosophicalmindspodcast.com${route === "/" ? "" : route}`,
      `${route} canonical points elsewhere`,
    );
  }
});

test("the site declares its podcast and website structured data", async () => {
  const html = await (await fetch(`${baseUrl}/`)).text();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  assert.ok(blocks.length > 0, "no JSON-LD on the homepage");
  const graph = blocks.map((b) => JSON.parse(b[1])).flatMap((d) => d["@graph"] ?? [d]);
  const types = graph.map((t) => t["@type"]);
  assert.ok(types.includes("PodcastSeries"), `expected PodcastSeries, got ${types}`);
  assert.ok(types.includes("WebSite"), `expected WebSite, got ${types}`);
});

test("content pages carry their own structured data and breadcrumbs", async () => {
  const cases = [
    ["/journal/what-is-theurgy", "Article"],
    ["/library/hermeticism", "Article"],
  ];
  for (const [route, expected] of cases) {
    const html = await (await fetch(baseUrl + route)).text();
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
    const graph = blocks.map((b) => JSON.parse(b[1])).flatMap((d) => d["@graph"] ?? [d]);
    const types = graph.map((t) => t["@type"]);
    assert.ok(types.includes(expected), `${route} missing ${expected}, got ${types}`);
    assert.ok(types.includes("BreadcrumbList"), `${route} missing BreadcrumbList`);
  }
});

test("every page has a unique title and a social card", async () => {
  const titles = new Map();
  for (const route of ROUTES) {
    const html = await (await fetch(baseUrl + route)).text();
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
    assert.ok(title, `${route} has no title`);
    assert.ok(!titles.has(title), `${route} duplicates the title of ${titles.get(title)}`);
    titles.set(title, route);
    assert.match(html, /property="og:title"/, `${route} has no OpenGraph title`);
    assert.match(html, /name="twitter:card"/, `${route} has no Twitter card`);
  }
});

test("the advertised feed URL resolves to the real feed", async () => {
  const response = await fetch(`${baseUrl}/rss`, { redirect: "manual" });
  assert.ok([301, 302, 307, 308].includes(response.status), `/rss returned ${response.status}`);
  assert.match(response.headers.get("location") ?? "", /libsyn\.com/);
});

test("the document head offers feed autodiscovery", async () => {
  const html = await (await fetch(`${baseUrl}/`)).text();
  assert.match(html, /type="application\/rss\+xml"/);
});

test("topic pages lead into the Library", async () => {
  const html = await (await fetch(`${baseUrl}/topics/alchemy`)).text();
  assert.match(html, /href="\/library\/alchemies"/, "alchemy topic does not link to its shelf");
  assert.match(html, /href="\/library\/hermeticism"/, "alchemy topic does not link to Hermeticism");
});

test("most episode pages lead into the topic map", async () => {
  // Some episodes arrive from the feed with no categories and no description,
  // so full coverage is not achievable here. This guards against the matching
  // regressing to the point where the archive is mostly orphaned.
  const index = await (await fetch(`${baseUrl}/episodes`)).text();
  const slugs = [...new Set([...index.matchAll(/href="\/episodes\/([a-z0-9-]+)"/g)].map((m) => m[1]))].slice(0, 12);
  assert.ok(slugs.length >= 6, "could not find enough episodes to sample");

  let linked = 0;
  for (const slug of slugs) {
    const html = await (await fetch(`${baseUrl}/episodes/${slug}`)).text();
    if (/href="\/topics\//.test(html)) linked++;
  }
  assert.ok(
    linked >= Math.ceil(slugs.length / 2),
    `only ${linked} of ${slugs.length} sampled episodes link to a topic`,
  );
});

test("the Hermeticism topic exists and reaches its shelf", async () => {
  const html = await (await fetch(`${baseUrl}/topics/hermeticism`)).text();
  assert.match(html, /href="\/library\/hermeticism"/);
});

test("the server resolved every module it needed", () => {
  for (const pattern of RESOLUTION_FAILURES) {
    assert.doesNotMatch(output, pattern, `server reported a module resolution failure:\n${output}`);
  }
});
