/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [
      375,
      425,
      640,
      768,
      1024,
      1170,
      1536,
      1920,
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frontend-test-assignment-api.abz.agency',
      },
    ],
  },
};

module.exports = nextConfig;
