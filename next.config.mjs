/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Video Editor Portfolio optimizations
  images: {
    unoptimized: false,
    domains: ['img.youtube.com', 'i.ytimg.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
  },

  // Video streaming support
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // Video file headers
      {
        source: '/videos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize GSAP bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },

  // Environment variables for video editor portfolio
  env: {
    SITE_NAME: 'SUNNY EDITORAX',
    SITE_DESCRIPTION: 'Professional Video Editor specializing in Instagram Reels & YouTube Shorts',
    SITE_URL: process.env.NODE_ENV === 'production' ? 'https://sunny-editorax.com' : 'http://localhost:3000',
  },

  // Compile optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // PWA ready configuration
  generateEtags: false,
  poweredByHeader: false,
}

export default nextConfig