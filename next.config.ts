import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true, // ✅ disables the Image Optimization API
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'book-pic.webnovel.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.lightnovelworld.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
