import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    reactCompiler: true,
  },
  turbopack: {},
  devIndicators: false,
  output: "standalone",
};

export default nextConfig;
