import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cursor's browser reaches the dev server as 127.0.0.1 and as this VM's address.
  allowedDevOrigins: ["127.0.0.1", "localhost", "172.30.0.2"],
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
