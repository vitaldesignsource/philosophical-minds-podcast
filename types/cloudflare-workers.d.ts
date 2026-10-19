// Ambient types for worker/index.ts, which is Cloudflare Workers scaffolding
// left over from the project template. The site builds and deploys with
// `next build`, so this file is not part of the production bundle; it exists
// so the worker entry point still typechecks.

declare module "cloudflare:workers" {
  export const env: {
    DB?: D1Database;
  };
}

interface Fetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

interface D1Database {
  prepare(query: string): unknown;
  exec(query: string): Promise<unknown>;
  batch(statements: unknown[]): Promise<unknown[]>;
}
