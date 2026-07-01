import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/Bruchou" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/Bruchou" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.figma.com" },
    ],
  },
};

export default nextConfig;
