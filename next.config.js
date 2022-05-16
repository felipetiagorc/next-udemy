/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !isProd
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  images: {
    domains: ['media.graphassets.com']
  }
})
