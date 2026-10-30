import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // The Alchemies shelf was published at /library/alchemy before it was
  // broadened past the European tradition. The old path is in the wild and in
  // search indexes, so it redirects permanently rather than 404ing.
  async redirects() {
    return [{ source: "/library/alchemy", destination: "/library/alchemies", permanent: true }];
  },
  allowedDevOrigins: ["127.0.0.1", "192.168.0.253", "total-absorption-near-waters.trycloudflare.com"],
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
