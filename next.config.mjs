/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['mariox-website.s3.ap-south-1.amazonaws.com'],
  },
  async redirects() {
    return [
      // Design routes map onto the URLs the live site already ranks for.
      { source: '/work', destination: '/case-study', permanent: true },
      { source: '/company', destination: '/about', permanent: true },
      { source: '/technology', destination: '/technologies', permanent: true },
      // Legacy duplicates of case studies and industry pages.
      { source: '/industry', destination: '/industries', permanent: true },
      { source: '/cs-detail', destination: '/case-study', permanent: true },
      { source: '/case-study-starstell', destination: '/case-study/starstell', permanent: true },
      { source: '/case-study-magicfinserv', destination: '/case-study/magicfinserv', permanent: true },
      { source: '/case-study-numberdekho', destination: '/case-study/numberdekho', permanent: true },
      { source: '/case-study-vimal-wires-and-cable', destination: '/case-study/vimal-wires-and-cable', permanent: true },
    ];
  },
};

export default nextConfig;
