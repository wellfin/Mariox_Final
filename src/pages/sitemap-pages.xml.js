import { SITE_URL } from '@/data/site';
import { services } from '@/data/final/services';
import { industries } from '@/data/final/industries';
import { cases } from '@/data/final/cases';
import { aiServices } from '@/data/final/ai';
import { industries as legacyIndustries } from '@/data/industries';
import { growthServices } from '@/data/growthServices';

// Sitemap for the pages this app renders. The keyword sitemaps the old site
// shipped stay in /public and are listed from sitemap.xml; this one covers the
// new services, industries, work, AI, hire and company pages.

const STATIC = ['', '/services', '/industries', '/work', '/ai', '/hire', '/company', '/contact', '/career', '/process', '/technologies', '/terms-and-conditions', '/saas-platforms', '/app-development', '/custom-crm-development', '/erp-software-development', '/enterprise-software-development-company'];

function urlset(paths) {
  const today = new Date().toISOString().slice(0, 10);
  const body = paths
    .map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export async function getServerSideProps({ res }) {
  const legacy = (growthServices || []).map((s) => s.href || `/${s.slug}`);
  const paths = [
    ...STATIC,
    ...services.map((s) => `/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...cases.map((c) => `/work/${c.slug}`),
    ...aiServices.map((a) => `/ai/${a.slug}`),
    ...(legacyIndustries || []).map((i) => `/industries/${i.slug}`),
    ...legacy,
  ].filter((p, i, a) => a.indexOf(p) === i);

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.write(urlset(paths));
  res.end();
  return { props: {} };
}

export default function SitemapPages() {
  return null;
}
