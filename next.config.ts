import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json in the
  // home directory otherwise makes Turbopack infer ~ as the root and fail to
  // resolve project dependencies (e.g. tailwindcss).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
