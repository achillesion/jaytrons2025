import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static imports for SVG
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
