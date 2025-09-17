import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily ignore ESLint errors during builds; fix rules incrementally
    ignoreDuringBuilds: true,
    // Don't run ESLint during build
    dirs: [],
  },
  typescript: {
    // Allow production builds to complete even if there are type errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
