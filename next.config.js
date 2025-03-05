/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
    // Enable optimized font loading
    optimizeFonts: true,
    // Enable modern bundle splitting
    bundlePagesDir: false,
    // Reduce bundle size
    staticallyExtractDynamicImageImports: true,
    // Minimize server-components
    optimizeServerReact: true,
  },
}

module.exports = nextConfig; 