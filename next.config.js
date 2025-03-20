/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tiktok',
  assetPrefix: '/tiktok/',
}

module.exports = nextConfig 