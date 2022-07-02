/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
      
    },
  },
  images: {
    domains: ['media.graphassets.com']
  }
};

module.exports = nextConfig;
