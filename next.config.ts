import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cursor's browser opens the forwarded dev server as 127.0.0.1.
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
