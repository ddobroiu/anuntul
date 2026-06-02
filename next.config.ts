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
  async redirects() {
    return [
      {
        source: '/stiri/pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect',
        destination: '/stiri/digitalizare-to-ti-construct-srl',
        permanent: true,
      },
      {
        source: '/stiri/pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect.pdf',
        destination: '/stiri/digitalizare-to-ti-construct-srl',
        permanent: true,
      },
      {
        source: '/comunicate/pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect',
        destination: '/stiri/digitalizare-to-ti-construct-srl',
        permanent: true,
      },
      {
        source: '/stiri/pdf-DIGITALIZAREA-SOCIETATII-TO-TI-CONSTRUCT-SRL.pdf',
        destination: '/stiri/digitalizare-to-ti-construct-srl',
        permanent: true,
      },
      {
        source: '/stiri/pdf-DIGITALIZAREA-SOCIETATII-TO-TI-CONSTRUCT-SRL',
        destination: '/stiri/digitalizare-to-ti-construct-srl',
        permanent: true,
      },
      {
        source: '/stiri/pdf-Comunicat_de_presa_finalizare_ROYAL_COLORS_PAINTING_S.R.L._',
        destination: '/stiri/royal-colors-painting-finalizare',
        permanent: true,
      },
      {
        source: '/stiri/pdf-Comunicat_de_presa_finalizare_ROYAL_COLORS_PAINTING_S.R.L.,',
        destination: '/stiri/royal-colors-painting-finalizare',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' blob: data: res.cloudinary.com images.unsplash.com poze.prynt.ro *.r2.dev shop.printcenter.ro www.printcenter.ro dotcomcanvas.de *.hotnews.ro hotnews.ro; font-src 'self' fonts.gstatic.com; connect-src 'self' *.google-analytics.com *.googletagmanager.com; frame-src 'self';",
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          }
        ],
      },
    ]
  },
};

export default nextConfig;
