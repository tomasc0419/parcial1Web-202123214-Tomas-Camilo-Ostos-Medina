import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {remotePatterns: [
      {
        protocol: "https",
        hostname: "www.clipartmax.com",
        port: "",
        pathname: "/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
