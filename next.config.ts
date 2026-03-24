import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.hotnews.ro',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hotnews.ro',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
