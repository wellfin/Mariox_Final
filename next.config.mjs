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
      // Service pages moved from /services/<slug> to /<slug>.
      { source: '/services/web-mobile', destination: '/web-and-app-development', permanent: true },
      { source: '/services/web-development', destination: '/website-development-company', permanent: true },
      { source: '/services/digital-marketing', destination: '/digital-marketing-agency', permanent: true },
      { source: '/web-development', destination: '/website-development-company', permanent: true },
      { source: '/digital-marketing', destination: '/digital-marketing-agency', permanent: true },
      { source: '/services/:slug', destination: '/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
