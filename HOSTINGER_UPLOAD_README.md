# Philosophical Minds Site Handoff

This archive contains the complete site source and the latest build output.

## Important hosting note

This site is built as a Vinext/Next-style application. To function exactly like
the local preview, it needs a Node-capable hosting setup, not only a flat
`public_html` upload.

Use this package with Hostinger's Node.js app hosting, VPS, or another
Node-compatible deployment option. A basic static-only file manager upload will
not run the server-rendered routes, RSS-powered pages, forms, and interactive
player exactly as intended.

## Main folders

- `app/`, `components/`, `lib/`, `public/`: editable site source and assets.
- `dist/`: latest production build output generated from the current source.
- `package.json` and `pnpm-lock.yaml`: dependency and command definitions.
- `.openai/hosting.json`: project hosting metadata.

## Typical Node setup

1. Upload and extract the archive on the hosting account.
2. Use Node.js 22.13.0 or newer.
3. Install dependencies with `pnpm install --frozen-lockfile`.
4. Build with `pnpm run build`.
5. Start with `pnpm run start`.

If Hostinger asks for a start command, use:

```bash
pnpm run start
```

If Hostinger does not support `pnpm` directly, enable Corepack first:

```bash
corepack enable
```

