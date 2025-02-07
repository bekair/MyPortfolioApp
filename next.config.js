/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

// Using dynamic import for next-intl plugin
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig);