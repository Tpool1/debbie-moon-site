import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a fully static site to out/ — no Node server needed at runtime.
  output: "export",
  // The next/image optimizer requires a server, so images ship pre-sized.
  images: { unoptimized: true },
  // Produces about/index.html rather than about.html, which every static host
  // serves correctly without extra rewrite rules.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
