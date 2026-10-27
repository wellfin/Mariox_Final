// Every service page renders through components/final/ServiceDetail, so the
// three older shapes of data are reshaped into the props it expects: the coded
// services in growthServices, whatever the admin panel sends, and the campaign
// landing pages. Nothing is invented here — a field with no source is left out
// and ServiceDetail drops that section.
import { cats, bySlug as designBySlug } from './final/services';
import { allServices, groupRows, parentGroup, urlOf } from './growthServices';

// The design service whose imagery and process cover the same work. Used only
// for the hero picture, the client credit and the five process steps.
const TEMPLATE = {
  'app-development': 'mobile-app-development-company',
  'flutter-app-development-company': 'cross-platform-app-development-company',
  'react-native-app-development-company': 'cross-platform-app-development-company',
  'php-development-company': 'backend-development',
  'laravel-development-company': 'backend-development',
  'website-designing-company': 'product-design',
  'web-and-app-development': 'web-app-development',
  'website-development-company': 'web-app-development',
  'product-engineering': 'custom-software-development-company',
  'saas-platforms': 'saas-product-development',
  'crm-erp': 'crm-development',
  'custom-crm-development': 'crm-development',
  'erp-software-development': 'erp-development',
  'enterprise-software-development-company': 'enterprise-software-development',
  'cloud-infrastructure': 'cloud-migration',
  design: 'product-design',
  'design-solutions': 'product-design',
  'graphic-design-company': 'product-design',
  'qa-testing': 'qa-and-testing',
  'data-analytics': 'data-analytics-and-bi',
  blockchain: 'blockchain-development',
  'managed-it': 'managed-it-services',
};

const OFFICE = { hero: '/assets/company/office-workspace.png', caption: 'Mariox Software · Noida' };

const templateFor = (slug) => designBySlug[TEMPLATE[slug] || slug] || null;

// Hero picture: the template's, credited to its client, or an office photo.
function heroFrom(slug) {
  const t = templateFor(slug);
  return t && t.hero
    ? { hero: t.hero, client: t.client, heroCaption: `Related work · ${t.client.name}` }
    : { hero: OFFICE.hero, client: null, heroCaption: OFFICE.caption };
}

const catOf = (slug) => {
  const t = templateFor(slug);
  return t ? cats.find((c) => c.id === t.cat) || null : null;
};

// Sibling services, for the list at the foot of the page.
const relatedRows = (slug) => {
  const rows = groupRows(slug) || groupRows((parentGroup(slug) || {}).slug) || [];
  return rows
    .filter((r) => r.href !== '/' + slug)
    .map((r) => ({ slug: r.href.replace(/^\//, ''), name: r.name, tagline: r.tag }));
};

const titleCase = (s) => String(s || '').replace(/\b\w/g, (c) => c.toUpperCase());

// --- the coded services in growthServices -------------------------------
export function codedServiceProps(slug) {
  const s = allServices.find((x) => x.includes && urlOf(x) === '/' + slug);
  if (!s) return null;
  const { hero, client, heroCaption } = heroFrom(slug);
  return {
    service: {
      slug,
      name: s.name,
      tagline: s.tag || '',
      desc: s.sub || '',
      offers: (s.includes || []).map((i) => ({ t: i.title, b: i.body })),
      deliverables: (s.deliverables || []).map((d) => ({ t: d.title, b: d.body })),
      tech: s.tech || [],
      techTitle: s.stackTitle || 'Technology we use',
      faq: [],
      hero,
      client,
      heroCaption,
    },
    cat: catOf(slug),
    related: relatedRows(slug),
    panel: { slug, aboutService: s.approach ? `<p>${s.approach}</p>` : '', topServices: [] },
  };
}

// --- a page the admin panel owns, service or city ------------------------
export function panelServiceProps(panel) {
  const slug = panel.slug;
  const base = panel.serviceSlug || slug;
  const own = (panel.images || []).find((b) => b && b.image);
  const t = heroFrom(base);
  // ServiceDetail adds " in <city>" itself, so take it off the panel's name.
  const city = panel.cityName || '';
  const raw = panel.pageName || panel.h1Text || slug.replace(/-/g, ' ');
  const bare = city ? raw.replace(new RegExp(`\s+in\s+${city}\s*$`, 'i'), '') : raw;
  return {
    service: {
      slug,
      name: titleCase(bare),
      tagline: panel.h2Text || '',
      desc: panel.h1Desc || '',
      offers: [],
      tech: (templateFor(base) || {}).tech || [],
      faq: [],
      // The panel's own picture sits on top of this one and is dropped if it
      // fails to load, so a page is never left with an empty hero.
      panelHero: own ? own.image : '',
      hero: t.hero,
      client: t.client,
      heroCaption: t.heroCaption,
    },
    cat: catOf(base),
    related: [],
    panel,
  };
}

// --- the campaign landing pages ------------------------------------------
export function landingServiceProps({ slug, name, tagline, desc, included, cases = [], faq = [], about = '' }) {
  const t = templateFor(slug);
  const fallback = heroFrom(slug);
  const first = cases.find((c) => c.img);
  return {
    service: {
      slug,
      name,
      tagline: tagline || '',
      desc: desc || '',
      offers: ((included && included.items) || []).map((i) => ({ t: i.t, b: i.b })),
      deliverables: ((included && included.get) || []).map((i) => ({ t: i.t, b: i.b })),
      tech: (t || {}).tech || [],
      faq,
      hero: first ? first.img : fallback.hero,
      // The gallery below the hero is this page's own case studies.
      client: first
        ? { name: first.name, sector: first.sector, line: first.body, imgs: cases.filter((c) => c.img).map((c) => c.img) }
        : fallback.client,
      heroCaption: first ? `Related work · ${first.name}` : fallback.heroCaption,
    },
    cat: catOf(slug),
    related: relatedRows(slug),
    panel: { slug, aboutService: about, topServices: [] },
  };
}
