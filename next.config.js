/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'd2xtzufx9mvgbo.cloudfront.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2xtzufx9mvgbo.cloudfront.net',
        pathname: '/events/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 