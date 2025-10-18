import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static imports for SVG
  eslint:{
<<<<<<< HEAD
    ignoreDuringBuilds: true
=======
    ignoreDuringBuilds: true,
>>>>>>> cdcf92e4c71edf15520a67206d6d1617549882b7
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default withNextVideo(nextConfig);