# Philosophical Minds Podcast

The website for the Philosophical Minds Podcast: episodes, guest profiles, a
topic map, a journal, and a reference library of philosophical and esoteric
traditions.

Built with Next.js 16 and React 19. Episode data comes from the podcast's RSS
feed at request time, with a bundled snapshot as a fallback.

## Running locally

Requires Node.js 22.13.0 or newer.

```bash
pnpm install
pnpm run dev     # http://localhost:3000
```

Other commands:

| Command | What it does |
| --- | --- |
| `pnpm run build` | Production build |
| `pnpm run start` | Serve the production build |
| `pnpm run lint` | ESLint |
| `pnpm test` | Build, then smoke-test the running server |
| `pnpm run test:smoke` | Smoke test only, against an existing build |

## Deployment

The site is hosted on Hostinger and **deploys automatically on every push to
`main`**. There is no manual upload step. Hostinger clones the repository,
runs `pnpm run build`, and serves `.next` from a per-deploy directory.

Because a push goes straight to production, `.github/workflows/ci.yml` runs
lint, build, and the smoke test on every push and pull request.

### Two settings that production depends on

Both of these were the cause of a full site outage. Please don't remove either
without testing a real deployment.

**1. `"build": "next build --webpack"` in `package.json`**

Next 16 builds with Turbopack by default. The server code Turbopack emits
resolves its runtime through `externalRequire` at request time, which fails on
Hostinger because each deploy runs from a fresh versioned directory. The build
succeeds and the process starts, then every request fails with:

```
Failed to load external module next/dist/compiled/next-server/app-page-turbo.runtime.prod.js
```

**2. `nodeLinker: hoisted` in `pnpm-workspace.yaml`**

pnpm's default layout keeps transitive dependencies inside `node_modules/.pnpm`
and links only direct dependencies at the top level. Next's compiled server
code requires `@swc/helpers` from the application root, which only resolves
under a flat, npm-style layout. Without this setting production fails with:

```
Cannot find module '@swc/helpers/_/_interop_require_default'
```

This setting lives in `pnpm-workspace.yaml` rather than `.npmrc` because pnpm
10+ reads its configuration from the workspace file when one is present, and
silently ignores `.npmrc`.

Both failures happen at runtime, after a successful build, which is why the
smoke test starts the server and makes real requests instead of only building.

## Layout

```
app/              routes (App Router)
  library/        the Library index and its [slug] shelf pages
components/       shared UI, including the site header and global player
lib/              content and data
  shelves.ts      the Library's shelf registry
  library.ts      the Shelf type every shelf conforms to
  hermeticism.ts  the Hermeticism shelf
  guests.ts       guest profiles
  journal.ts      journal articles
  rss.ts          podcast feed, with rssSnapshot.ts as fallback
  topics.ts       the topic map
tests/            smoke test against the built server
```

### Adding a Library shelf

1. Write `lib/<tradition>.ts` exporting a `Shelf` (see `lib/hermeticism.ts`).
2. Add it to `shelves` in `lib/shelves.ts` and remove the matching entry from
   `plannedShelves`.

The index card, the `/library/<slug>` page, the sitemap entry, and the metadata
all follow from that.
