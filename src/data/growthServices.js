// App, web, SEO, marketing and design services. Same shape as `services` so they
// render through /services/[slug]; a group page also lists its `children`.
// Every service lives at a root URL, /<slug> unless `href` says otherwise.
// Entries with content are rendered by pages/[serviceCity].jsx; entries with only
// row fields link to live pages that route serves from the content API.
import { services } from './services';

export const serviceGroups = [
  { slug: 'app-development', children: ['android-app-development', 'ios-app-development', 'ecommerce-app-development', 'flutter-app-development', 'react-native-app-development', 'mobile-app-development', 'web-mobile'] },
  { slug: 'web-development', children: ['cms-development', 'php-website-development', 'shopify-website-development', 'wordpress-website-development', 'laravel-website-development'] },
  { slug: 'seo-services', children: ['fully-managed-seo-services', 'enterprise-seo-services', 'local-seo-services', 'ecommerce-seo-services'] },
  { slug: 'digital-marketing', children: ['seo-services', 'social-media-marketing', 'content-writing-services', 'paid-marketing', 'ppc-services'] },
  { slug: 'design-solutions', children: ['graphic-design', 'website-design'] },
];

const MKT = 'Tools';

export const growthServices = [
  // ---------- App development ----------
  { slug:'app-development', name:'App development', tag:'Android, iOS, Flutter, React Native, commerce', stage:1, href:'/app-development' },
  { slug:'android-app-development', name:'Android app development', tag:'Kotlin, Jetpack Compose, Play Store', stage:1, href:'/android-app-development-company' },
  { slug:'ios-app-development', name:'iOS app development', tag:'Swift, SwiftUI, App Store', stage:1, href:'/ios-app-development-company' },
  { slug:'ecommerce-app-development', name:'E-commerce app development', tag:'Catalogue, cart, payments, orders', stage:3, href:'/e-commerce-app-development-company' },
  { slug:'flutter-app-development', name:'Flutter app development', tag:'One codebase, Android and iOS', stage:2, href:'/flutter-app-development-company' },
  { slug:'react-native-app-development', name:'React Native app development', tag:'JavaScript, Expo, shared web code', stage:2, href:'/react-native-app-development-company' },

  { slug:'mobile-app-development', name:'Mobile app development', tag:'Apps for Android and iOS', stage:1, href:'/mobile-app-development-company' },

  // ---------- Web development ----------
  { slug:'web-development', name:'Web development', tag:'CMS, PHP, Laravel, WordPress, Shopify', stage:1, href:'/website-development-company' },
  { slug:'cms-development', name:'CMS development', tag:'WordPress, headless CMS, custom admin', stage:3, href:'/cms-development-company' },
  { slug:'php-website-development', name:'PHP website development', tag:'Custom PHP, APIs, portals', stage:0, href:'/php-development-company' },
  { slug:'shopify-website-development', name:'Shopify website development', tag:'Themes, apps, store setup', stage:3, href:'/shopify-development-company' },
  { slug:'wordpress-website-development', name:'WordPress website development', tag:'Custom themes, WooCommerce, plugins', stage:3, href:'/wordpress-development-company' },
  { slug:'laravel-website-development', name:'Laravel website development', tag:'Web apps, portals, APIs', stage:0, href:'/laravel-development-company' },

  // ---------- SEO services ----------
  { slug:'seo-services', name:'SEO services', tag:'Technical, on-page, content, links', stage:2, href:'/seo-services',
    label:'Services / SEO',
    h1a:'Found by people', h1b:'looking for you.',
    sub:'Search engine optimisation that grows organic traffic and enquiries, reported in leads and revenue, not just rankings.',
    includes:[
      {n:'01', title:'SEO audit', body:'Technical, content and backlink review.'},
      {n:'02', title:'Keyword research', body:'Terms your buyers actually search for.'},
      {n:'03', title:'Technical SEO', body:'Speed, crawling, indexing and structured data.'},
      {n:'04', title:'On-page SEO', body:'Titles, headings, content and internal links.'},
      {n:'05', title:'Content', body:'Pages and articles that answer search intent.'},
      {n:'06', title:'Link building', body:'Relevant, earned links, no link farms.'}
    ],
    deliverables:[
      {n:'01', title:'Audit report', body:'Issues ranked by impact and effort.'},
      {n:'02', title:'Keyword map', body:'Which page targets which search.'},
      {n:'03', title:'Monthly report', body:'Traffic, rankings and enquiries.'},
      {n:'04', title:'Action plan', body:'What we are doing next, and why.'}
    ],
    stackTitle:MKT,
    tech:['Google Search Console','GA4','Ahrefs','Semrush','Screaming Frog','PageSpeed Insights','Looker Studio'],
    approach:'We fix the technical problems first, because great content on a site Google struggles to crawl goes nowhere. Every month you see what changed, what it did to traffic and enquiries, and what comes next.'
  },
  { slug:'fully-managed-seo-services', name:'Fully managed SEO services', tag:'Strategy, execution and reporting', stage:2, href:'/fully-manage-seo-services',
    label:'SEO services / Fully managed',
    h1a:'SEO handled,', h1b:'end to end.',
    sub:'A dedicated SEO team that plans, executes and reports on everything, so you get the results without managing the work.',
    includes:[
      {n:'01', title:'Dedicated SEO manager', body:'One point of contact who owns results.'},
      {n:'02', title:'Strategy', body:'A 6-month plan tied to your business goals.'},
      {n:'03', title:'Technical fixes', body:'Done by our developers, not just reported.'},
      {n:'04', title:'Content production', body:'Pages and blogs written and published.'},
      {n:'05', title:'Link building', body:'Outreach and digital PR every month.'},
      {n:'06', title:'Reporting', body:'Monthly report and review call.'}
    ],
    deliverables:[
      {n:'01', title:'SEO roadmap', body:'Priorities for the next six months.'},
      {n:'02', title:'Monthly work log', body:'Every task completed, listed.'},
      {n:'03', title:'Performance dashboard', body:'Live traffic, rankings and leads.'},
      {n:'04', title:'Quarterly review', body:'What worked and where to invest next.'}
    ],
    stackTitle:MKT,
    tech:['Google Search Console','GA4','Ahrefs','Semrush','Screaming Frog','Surfer','Looker Studio'],
    approach:'Many SEO reports list problems and leave the fixing to you. We have developers and writers on the same team, so fixes and content get done, not just recommended.'
  },
  { slug:'enterprise-seo-services', name:'Enterprise SEO services', tag:'Large sites, many teams, many markets', stage:3, href:'/enterprise-seo-services',
    label:'SEO services / Enterprise',
    h1a:'SEO at the scale', h1b:'of big websites.',
    sub:'SEO for large websites with thousands of pages, multiple markets and several teams publishing at once.',
    includes:[
      {n:'01', title:'Crawl and index control', body:'Crawl budget, faceted navigation and duplicates.'},
      {n:'02', title:'Templates at scale', body:'SEO fixes applied across thousands of pages.'},
      {n:'03', title:'International SEO', body:'Hreflang, regions and language versions.'},
      {n:'04', title:'Migrations', body:'Replatforms and redesigns without losing traffic.'},
      {n:'05', title:'Governance', body:'SEO checks built into your release process.'},
      {n:'06', title:'Team training', body:'Content and dev teams taught what matters.'}
    ],
    deliverables:[
      {n:'01', title:'Enterprise audit', body:'Issues sized by traffic at risk.'},
      {n:'02', title:'Tickets for your devs', body:'Written, prioritised and ready to build.'},
      {n:'03', title:'Migration plan', body:'Redirect maps and launch checklists.'},
      {n:'04', title:'Executive reporting', body:'Organic revenue by market and section.'}
    ],
    stackTitle:MKT,
    tech:['Google Search Console','GA4','BigQuery','Botify','Screaming Frog','Ahrefs','Looker Studio'],
    approach:'On a large site, one template change can move thousands of pages up or down. We work inside your release process, so SEO problems are caught before they go live rather than found in a report afterwards.'
  },
  { slug:'local-seo-services', name:'Local SEO services', tag:'Google Business Profile, maps, reviews', stage:4, href:'/local-seo-services',
    label:'SEO services / Local',
    h1a:'Top of the map', h1b:'in your city.',
    sub:'Local SEO that gets your business into Google Maps and “near me” searches in the areas you serve.',
    includes:[
      {n:'01', title:'Google Business Profile', body:'Set up, verified and fully optimised.'},
      {n:'02', title:'Location pages', body:'A useful page for each city or branch.'},
      {n:'03', title:'Citations', body:'Consistent name, address and phone everywhere.'},
      {n:'04', title:'Reviews', body:'A simple process to earn and answer reviews.'},
      {n:'05', title:'Local links', body:'Mentions from local sites and directories.'},
      {n:'06', title:'Map rank tracking', body:'Rankings checked across your service area.'}
    ],
    deliverables:[
      {n:'01', title:'Optimised profile', body:'Photos, services, posts and Q&A.'},
      {n:'02', title:'Citation report', body:'Listings built and cleaned up.'},
      {n:'03', title:'Review system', body:'Links and templates for asking customers.'},
      {n:'04', title:'Monthly report', body:'Calls, direction requests and rankings.'}
    ],
    stackTitle:MKT,
    tech:['Google Business Profile','Google Search Console','GA4','BrightLocal','Local Falcon','Semrush'],
    approach:'For local businesses, calls and direction requests matter more than traffic, so that is what we report. We start with your Google Business Profile, because it is usually the quickest win.'
  },
  { slug:'ecommerce-seo-services', name:'E-commerce SEO services', tag:'Category, product and feed SEO', stage:3, href:'/ecommerce-seo-services',
    label:'SEO services / E-commerce',
    h1a:'Product pages', h1b:'that rank.',
    sub:'SEO for online stores: category and product pages, site structure and shopping feeds that bring buyers, not just browsers.',
    includes:[
      {n:'01', title:'Category optimisation', body:'The pages that rank for high-value searches.'},
      {n:'02', title:'Product pages', body:'Unique descriptions, schema and reviews.'},
      {n:'03', title:'Site structure', body:'Filters and pagination that do not waste crawl budget.'},
      {n:'04', title:'Technical SEO', body:'Speed, duplicates and out-of-stock handling.'},
      {n:'05', title:'Shopping feeds', body:'Google Merchant Center feeds kept clean.'},
      {n:'06', title:'Content', body:'Buying guides that link to products.'}
    ],
    deliverables:[
      {n:'01', title:'Store audit', body:'Issues ranked by revenue impact.'},
      {n:'02', title:'Category keyword map', body:'Which page targets which search.'},
      {n:'03', title:'Schema setup', body:'Product, price and review rich results.'},
      {n:'04', title:'Revenue report', body:'Organic sales, not just visits.'}
    ],
    stackTitle:MKT,
    tech:['Google Search Console','GA4','Google Merchant Center','Ahrefs','Screaming Frog','Shopify','WooCommerce'],
    approach:'Category pages usually drive most organic revenue in a store, so we start there. We measure success in organic orders and revenue, which is what you care about.'
  },

  // ---------- Digital marketing ----------
  { slug:'digital-marketing', name:'Digital marketing', tag:'SEO, social, content, paid ads', stage:2, href:'/digital-marketing-agency' },
  { slug:'social-media-marketing', name:'Social media marketing', tag:'Instagram, LinkedIn, Facebook, YouTube', stage:1,
    label:'Digital marketing / Social media',
    h1a:'Social media', h1b:'that brings business.',
    sub:'Content, community and paid social on the platforms your customers use, planned around business goals rather than likes.',
    includes:[
      {n:'01', title:'Social strategy', body:'Platforms, audience and tone of voice.'},
      {n:'02', title:'Content calendar', body:'Posts planned a month ahead.'},
      {n:'03', title:'Creative', body:'Graphics, carousels, reels and short video.'},
      {n:'04', title:'Community', body:'Comments and messages answered.'},
      {n:'05', title:'Paid social', body:'Meta and LinkedIn ad campaigns.'},
      {n:'06', title:'Reporting', body:'Reach, engagement and leads each month.'}
    ],
    deliverables:[
      {n:'01', title:'Monthly calendar', body:'Approved before anything is posted.'},
      {n:'02', title:'Ready-to-post creative', body:'Designed for each platform.'},
      {n:'03', title:'Ad campaigns', body:'Set up, run and optimised.'},
      {n:'04', title:'Performance report', body:'What worked and what we change.'}
    ],
    stackTitle:MKT,
    tech:['Meta Business Suite','LinkedIn Campaign Manager','Instagram','YouTube','Canva','Figma','Buffer'],
    approach:'We focus on the one or two platforms where your customers actually spend time instead of posting everywhere. Every post has a purpose, and we report on leads as well as likes.'
  },
  { slug:'content-writing-services', name:'Content writing services', tag:'Website copy, blogs, SEO content', stage:0, href:'/content-writing-services',
    label:'Digital marketing / Content writing',
    h1a:'Words that', h1b:'do the selling.',
    sub:'Website copy, blogs, case studies and SEO content written by people who research your industry before they write.',
    includes:[
      {n:'01', title:'Website copy', body:'Home, service and landing pages.'},
      {n:'02', title:'Blog articles', body:'SEO-led articles that answer real questions.'},
      {n:'03', title:'Case studies', body:'Customer stories that build trust.'},
      {n:'04', title:'Product descriptions', body:'Clear, unique copy for every product.'},
      {n:'05', title:'Email and ad copy', body:'Campaign copy that gets clicks.'},
      {n:'06', title:'Editing', body:'Existing content tightened and updated.'}
    ],
    deliverables:[
      {n:'01', title:'Content plan', body:'Topics mapped to keywords and goals.'},
      {n:'02', title:'Original content', body:'Written for you, checked for plagiarism.'},
      {n:'03', title:'SEO optimisation', body:'Titles, meta descriptions and headings.'},
      {n:'04', title:'Revisions', body:'Edits until it sounds like you.'}
    ],
    stackTitle:MKT,
    tech:['Google Docs','Grammarly','Surfer','Semrush','Ahrefs','Copyscape','WordPress'],
    approach:'Good content starts with research: your customers, their questions and what already ranks. We write in your brand’s voice and edit every piece before you see it.'
  },
  { slug:'paid-marketing', name:'Paid marketing', tag:'Google, Meta, LinkedIn ad campaigns', stage:4, href:'/performance-marketing-company' },
  { slug:'ppc-services', name:'PPC services', tag:'Google Ads search, shopping, display', stage:4,
    label:'Digital marketing / PPC',
    h1a:'Pay per click,', h1b:'not per guess.',
    sub:'Pay-per-click campaigns on Google and Bing, managed for the lowest cost per lead and the highest return on spend.',
    includes:[
      {n:'01', title:'Account audit', body:'Wasted spend found in existing campaigns.'},
      {n:'02', title:'Keyword research', body:'High-intent searches and negative keywords.'},
      {n:'03', title:'Search campaigns', body:'Ads for people searching right now.'},
      {n:'04', title:'Shopping and Performance Max', body:'Product ads for online stores.'},
      {n:'05', title:'Display and remarketing', body:'Bringing back visitors who did not convert.'},
      {n:'06', title:'Bid management', body:'Smart bidding set up and monitored.'}
    ],
    deliverables:[
      {n:'01', title:'Account structure', body:'Clean campaigns and ad groups.'},
      {n:'02', title:'Ad copy and extensions', body:'Tested variations running.'},
      {n:'03', title:'Conversion tracking', body:'Calls, forms and sales measured.'},
      {n:'04', title:'Monthly report', body:'Spend, conversions and cost per conversion.'}
    ],
    stackTitle:MKT,
    tech:['Google Ads','Microsoft Ads','Google Merchant Center','GA4','Google Tag Manager','Optmyzr','Looker Studio'],
    approach:'Most wasted PPC spend comes from broad keywords and missing negatives, so we check search terms every week. We report cost per lead and return on spend, not just clicks.'
  },

  // ---------- Design solutions ----------
  { slug:'design-solutions', name:'Design solutions', tag:'Graphic design, website design, branding', stage:1,
    label:'Services / Design solutions',
    h1a:'Design that', h1b:'makes you memorable.',
    sub:'Graphic design, website design and brand identity that make your business look as good as it is.',
    includes:[
      {n:'01', title:'Brand identity', body:'Logo, colours, type and brand guidelines.'},
      {n:'02', title:'Website design', body:'Responsive designs ready to build.'},
      {n:'03', title:'Graphic design', body:'Print, digital and social media creative.'},
      {n:'04', title:'Marketing material', body:'Brochures, decks and ad creative.'},
      {n:'05', title:'App and UI design', body:'Screens for web and mobile products.'},
      {n:'06', title:'Illustration and icons', body:'Custom visuals in your style.'}
    ],
    deliverables:[
      {n:'01', title:'Design files', body:'Editable source files you own.'},
      {n:'02', title:'Brand guidelines', body:'How to use your brand consistently.'},
      {n:'03', title:'Export-ready assets', body:'Every size and format you need.'},
      {n:'04', title:'Templates', body:'Reusable layouts for your team.'}
    ],
    stackTitle:MKT,
    tech:['Figma','Adobe Illustrator','Adobe Photoshop','Adobe InDesign','After Effects','Canva'],
    approach:'We start with your business and your customers, not a mood board. You see early concepts, give feedback and get final files you fully own.'
  },
  { slug:'graphic-design', name:'Graphic design', tag:'Logos, print, social, marketing creative', stage:0, href:'/graphic-design-company',
    label:'Design solutions / Graphic design',
    h1a:'Graphics that', h1b:'get noticed.',
    sub:'Logos, brochures, social media posts, packaging and ad creative, designed to be consistent with your brand.',
    includes:[
      {n:'01', title:'Logo design', body:'Original concepts, refined to a final mark.'},
      {n:'02', title:'Brand stationery', body:'Business cards, letterheads and email signatures.'},
      {n:'03', title:'Print design', body:'Brochures, flyers, banners and packaging.'},
      {n:'04', title:'Social media creative', body:'Posts, stories and ad designs.'},
      {n:'05', title:'Presentations', body:'Sales and pitch decks.'},
      {n:'06', title:'Infographics', body:'Complex information made easy to read.'}
    ],
    deliverables:[
      {n:'01', title:'Source files', body:'AI, PSD or Figma files you own.'},
      {n:'02', title:'Print-ready files', body:'Correct size, bleed and colour.'},
      {n:'03', title:'Web-ready files', body:'PNG, JPG and SVG exports.'},
      {n:'04', title:'Brand kit', body:'Logo versions, colours and fonts.'}
    ],
    stackTitle:MKT,
    tech:['Adobe Illustrator','Adobe Photoshop','Adobe InDesign','Figma','After Effects','Canva'],
    approach:'Each project starts with a short brief on audience, message and where the design will be used. You get a few directions to choose from, then we refine the one that fits.'
  },
  { slug:'website-design', name:'Website design', tag:'UI design, responsive layouts, prototypes', stage:1, href:'/website-designing-company' },
];

export const allServices = [...services, ...growthServices];

const bySlug = (slug) => allServices.find((s) => s.slug === slug);
const isGroup = (slug) => serviceGroups.some((g) => g.slug === slug);

export const urlOf = (s) => s.href || '/' + s.slug;

const toRow = (s, i) => ({ n: String(i + 1).padStart(2, '0'), name: s.name, tag: s.tag, stage: s.stage, href: urlOf(s) });

// Rows for a group page, or null when the slug is not a group.
export function groupRows(slug) {
  const g = serviceGroups.find((x) => x.slug === slug);
  return g ? g.children.map(bySlug).map(toRow) : null;
}

// The group a service sits under; groups themselves sit under /services.
export function parentGroup(slug) {
  if (isGroup(slug)) return null;
  const g = serviceGroups.find((x) => x.children.includes(slug));
  return g ? { name: bySlug(g.slug).name, href: urlOf(bySlug(g.slug)) } : null;
}

// Group headings with their rows, for the /services index and footer.
export const groupedServices = serviceGroups.map((g) => ({
  slug: g.slug,
  name: bySlug(g.slug).name,
  href: urlOf(bySlug(g.slug)),
  rows: g.children.map(bySlug).map(toRow),
}));

// Service props for a page that renders one entry.
export function servicePageProps(slug) {
  const svc = bySlug(slug);
  return { props: { svc, rows: groupRows(slug), parent: parentGroup(slug) } };
}

// The entry rendered at a root URL segment, if any.
export const localServiceAt = (segment) => allServices.find((s) => s.includes && urlOf(s) === '/' + segment);
