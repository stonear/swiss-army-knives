import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  output: 'export',
  basePath: '/swiss-army-knives',
  images: {
    unoptimized: true,
  },
  /* config options here */
}

export default nextConfig
