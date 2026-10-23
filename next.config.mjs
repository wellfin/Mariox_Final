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
      { source: '/technology', destination: '/technologies', permanent: true },
      // Careers moved to /careers with the new design.
      { source: '/career', destination: '/careers', permanent: true },
      // The company page replaces the old about page.
      { source: '/about', destination: '/company', permanent: true },
      { source: '/about-us', destination: '/company', permanent: true },
      // Legacy duplicates of case studies and industry pages.
      { source: '/industry', destination: '/industries', permanent: true },
      // Industries the new design folds into a broader sector page.
      { source: '/industries/quick-commerce', destination: '/industries/on-demand', permanent: true },
      { source: '/industries/public-sector', destination: '/industries/government', permanent: true },
      { source: '/industries/agritech', destination: '/industries/agriculture', permanent: true },
      { source: '/cs-detail', destination: '/work', permanent: true },
      // Case studies moved to /work/<slug> with the new design.
      { source: '/case-study', destination: '/work', permanent: true },
      { source: '/case-study/:slug', destination: '/work/:slug', permanent: true },
      { source: '/case-study-starstell', destination: '/work/starstell', permanent: true },
      { source: '/case-study-magicfinserv', destination: '/work/magicfinserv', permanent: true },
      { source: '/case-study-numberdekho', destination: '/work/numberdekho', permanent: true },
      { source: '/case-study-vimal-wires-and-cable', destination: '/work/vimal-wires-and-cable', permanent: true },
      // Service pages moved from /services/<slug> to /<slug>.
      { source: '/services/web-mobile', destination: '/web-and-app-development', permanent: true },
      { source: '/services/web-development', destination: '/website-development-company', permanent: true },
      { source: '/services/digital-marketing', destination: '/digital-marketing-agency', permanent: true },
      { source: '/web-development', destination: '/website-development-company', permanent: true },
      { source: '/digital-marketing', destination: '/digital-marketing-agency', permanent: true },
      // The design's service pages live at the root, e.g. /crm-development.
      { source: '/services/:slug', destination: '/:slug', permanent: true },
      // Service slugs renamed to the agreed URLs.
      { source: '/website-development', destination: '/website-development-company', permanent: true },
      { source: '/custom-software-development', destination: '/custom-software-development-company', permanent: true },
      { source: '/mobile-app-development', destination: '/mobile-app-development-company', permanent: true },
      { source: '/ios-app-development', destination: '/ios-app-development-company', permanent: true },
      { source: '/android-app-development', destination: '/android-app-development-company', permanent: true },
      { source: '/cross-platform-app-development', destination: '/cross-platform-app-development-company', permanent: true },
      { source: '/qa-testing', destination: '/qa-and-testing', permanent: true },
      { source: '/fintech-consulting', destination: '/fintech-software-development-company', permanent: true },
      { source: '/generative-ai-development', destination: '/generative-ai-and-llm-apps', permanent: true },
      { source: '/ai-agents-automation', destination: '/ai-agents-and-automation', permanent: true },
      { source: '/data-analytics-bi', destination: '/data-analytics-and-bi', permanent: true },
      { source: '/big-data', destination: '/big-data-engineering', permanent: true },
      { source: '/chatbot-development', destination: '/ai-chatbot-development', permanent: true },
      { source: '/rpa-automation', destination: '/rpa-and-process-automation', permanent: true },
      { source: '/mlops', destination: '/mlops-and-llmops', permanent: true },
      { source: '/support-maintenance', destination: '/support-and-maintenance', permanent: true },
      { source: '/offshore-development-center', destination: '/offshore-development-centre', permanent: true },
      { source: '/web3-development', destination: '/web3-and-dapp-development', permanent: true },
      { source: '/metaverse-development', destination: '/metaverse-and-3d-experiences', permanent: true },
      { source: '/ecommerce-development', destination: '/e-commerce-app-development-company', permanent: true },
      { source: '/cms-development', destination: '/cms-development-company', permanent: true },
      { source: '/microsoft-dynamics-development', destination: '/microsoft-dynamics-365', permanent: true },
      { source: '/shopify-development', destination: '/shopify-development-company', permanent: true },
      { source: '/wordpress-development', destination: '/wordpress-development-company', permanent: true },
      { source: '/devops', destination: '/devops-and-ci-cd', permanent: true },
      { source: '/api-integrations', destination: '/api-and-integrations', permanent: true },
      { source: '/kubernetes-services', destination: '/kubernetes-and-containers', permanent: true },
    ];
  },
};

export default nextConfig;
