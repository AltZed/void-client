import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
    eslint: {
    // ВНИМАНИЕ: Это для демо
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
