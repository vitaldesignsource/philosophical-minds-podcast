import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "192.168.0.253", "total-absorption-near-waters.trycloudflare.com"],
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
