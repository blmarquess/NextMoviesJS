/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://image.tmdb.org'],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig
