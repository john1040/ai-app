/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.runpod.ai/v1/stable-diffusion-v1/run/:path*',
      },
    ]
  },
}

module.exports = nextConfig
