import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2xtzufx9mvgbo.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
