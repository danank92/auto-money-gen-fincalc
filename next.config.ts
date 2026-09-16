import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/auto-money-gen-fincalc",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
