/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any external image domains here if needed
    unoptimized: false,
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
    // Enable server actions
    serverActions: true,
    // Enable React Server Components optimizations
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig; 