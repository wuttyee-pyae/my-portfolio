/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.externals.push({
      'nodemailer': 'nodemailer',
    });
    return config;
  },
}

module.exports = nextConfig
