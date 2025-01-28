import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/swiss-army-knives',
  images: {
    unoptimized: true,
  },
  /* config options here */
}

export default nextConfig
