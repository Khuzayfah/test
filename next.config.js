/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  // Optimize output for Vercel deployment
  output: 'standalone',
  // Enable modular import for increased performance
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{member}}',
    },
  },
  experimental: {
    // Enable React Server Components optimizations
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig; 