import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js dev indicator badge in the corner.
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
