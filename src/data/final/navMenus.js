// The six mega menus in the header, from the design's `Mariox Nav`. Each menu
// has a left rail of groups, a grid of items for the hovered group, and a
// feature card. Everything is derived from the data the pages already use, so
// a new service or case study appears here without touching this file.
import { cats, services } from './services';
import { industries, groups as industryGroups } from './industries';
import { cases } from './cases';
import { roles as hireRoles, groups as hireGroups } from './hire';
import { posts } from './blog';
import { conceptIndex } from './conceptIndex';

export const logoFor = (domain) => (domain
  ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
  : '');

const CAT_NAMES = {
  'product-engineering': 'Product engineering',
  'ai-data': 'AI & data',
  'emerging-tech': 'Blockchain & emerging tech',
  'business-software': 'Enterprise & business software',
  'digital-transformation': 'Digital transformation',
  consulting: 'Consulting',
  'teams-managed': 'Teams & managed IT',
};

// The AI menu re-groups the AI & data services into three stories.
const AI_GROUPS = [
  ['build', 'GenAI & agents', 'Copilots, agents and assistants that act inside your product.',
    ['ai-development', 'generative-ai-and-llm-apps', 'ai-agents-and-automation', 'ai-chatbot-development', 'nlp-development']],
  ['ml', 'ML & vision', 'Models trained on your data, shipped and monitored in production.',
    ['machine-learning', 'computer-vision', 'mlops-and-llmops', 'data-science']],
  ['data', 'Data & automation', 'Pipelines, dashboards and automation that feed and use your AI.',
    ['data-engineering', 'big-data-engineering', 'data-analytics-and-bi', 'rpa-and-process-automation']],
];

// The case studies and concepts are shown by market, not by the sector key the
// data carries, so the two are folded together here.
const WORK_CATS = [
  ['fintech', 'Fintech'], ['edtech', 'Edtech'], ['commerce', 'E-commerce'],
  ['qcommerce', 'Quick commerce'], ['healthcare', 'Healthcare'], ['other', 'Consumer & SaaS'],
];

const CASE_CAT = {
  fintech: 'fintech', banking: 'fintech', edtech: 'edtech', ecommerce: 'commerce',
  marketplace: 'commerce', qcommerce: 'qcommerce', healthcare: 'healthcare',
};

// Client domains, for the logo on each card.
const CASE_DOMAIN = {
  starstell: 'starstell.com', magicfinserv: 'magicfinserv.com', 'vimal-wires-and-cable': 'vimalcables.com',
  skydo: 'skydo.com', famapp: 'famapp.in', stockgro: 'stockgro.club', myzeller: 'myzeller.com',
  airwallex: 'airwallex.com', soldo: 'soldo.com', yonder: 'yonder.cards', lunar: 'lunar.app',
  graphy: 'graphy.com', edtechhub: 'edtechhub.org', testbook: 'testbook.com', teachmint: 'teachmint.com',
  sunstone: 'sunstone.in', learnosity: 'learnosity.com', clueylearning: 'clueylearning.com.au',
  senecalearning: 'senecalearning.com', snitch: 'snitch.co.in', fynd: 'fynd.com', jaypore: 'jaypore.com',
  kogan: 'kogan.com', onbuy: 'onbuy.com', onceit: 'onceit.co.nz', milkrun: 'milkrun.com',
  volygroup: 'voly.co', weezy: 'weezy.co.uk', oda: 'oda.com', ekacare: 'eka.care',
  nirogstreet: 'nirogstreet.com', healthengine: 'healthengine.com.au', zava: 'zavamed.com',
  livi: 'livi.co.uk', tend: 'hellotend.com', hotdoc: 'hotdoc.com.au',
};

const FEATURED = [
  ['Airwallex', 'airwallex.com', 'Global business accounts and FX for money moving across borders'],
  ['Zeller', 'myzeller.com', 'Business payments on app and web, from onboarding to settlement'],
  ['Kogan', 'kogan.com', 'A marketplace with a large third-party seller base and seller tooling'],
  ['HotDoc', 'hotdoc.com.au', 'Appointment booking across a national clinic network'],
  ['Fynd', 'fynd.com', 'Online ordering connected to retail operations'],
  ['Graphy', 'graphy.com', 'Course delivery, live cohorts and creator payouts'],
  ['Testbook', 'testbook.com', 'Question banks and timed tests for exam-day traffic'],
  ['MILKRUN', 'milkrun.com', 'Grocery delivery with rider dispatch and live tracking'],
];

// The concepts worth showing in the menu, in the order the design lists them.
const TOP_CONCEPTS = ['ikea', 'decathlon', 'huel', 'tonys-chocolonely', 'liquid-death', 'ulta-beauty',
  'hostie', 'marico', 'mokobara', 'grove-collaborative', 'aignosis', 'who-gives-a-crap'];

const pad = (n) => String(n).padStart(2, '0');
const serviceItem = (s) => ({ key: s.slug, name: s.name, tag: s.tagline || '', href: `/${s.slug}`, img: s.hero || '' });

// A coloured tile with the company's initial, for concepts that have no logo.
const initialTile = (p) => `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="${p.brand || '#F04423'}"/><text x="32" y="42" font-family="Helvetica,Arial,sans-serif" font-size="28" font-weight="600" text-anchor="middle" fill="#ffffff">${p.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 1).toUpperCase()}</text></svg>`,
)}`;

const CONCEPT_ITEMS = conceptIndex.map((p) => ({
  cat: p.cat,
  key: `p-${p.slug}`,
  name: p.name,
  tag: `Idea, not a client project · ${p.proposition}`,
  href: `/concepts/${p.slug}`,
  thumb: logoFor(p.domain) || initialTile(p),
  logo: true,
  img: initialTile(p),
  cta: 'See the idea',
  kicker: `Idea · ${p.country}`,
}));

const caseItem = (c) => ({
  key: c.slug,
  name: c.name,
  tag: c.proposition || c.body || c.sector,
  href: `/work/${c.slug}`,
  img: c.img,
  thumb: logoFor(CASE_DOMAIN[c.slug]),
  logo: !!CASE_DOMAIN[c.slug],
  kicker: c.sector,
});

const pairs = (o) => Object.keys(o).map((k) => [k, o[k]]);
const HIRE_PAIRS = pairs(hireGroups);
const INDUSTRY_PAIRS = pairs(industryGroups);

const COMPANY_RAIL = [
  ['about', 'About Mariox', '/company'],
  ['leadership', 'Leadership', '/company#leadership'],
  ['offices', 'Offices', '/company#offices'],
  ['process', 'How we work', '/process'],
  ['trust', 'Trust & reviews', '/testimonials'],
  ['careers', 'Careers', '/careers'],
  ['blog', 'Blog', '/blog'],
  ['contact', 'Contact', '/contact'],
];

const COMPANY_BODIES = {
  leadership: {
    title: 'The people who lead Mariox',
    intro: 'Founders who still sit with the teams that build your product.',
    over: '/company#leadership',
    items: [
      ['rahul', 'Rahul Garg', 'Founder · sets the engineering bar across every Mariox product', 'rahul-garg-crop.jpg'],
      ['tripta', 'Tripta Mittal', 'Co-founder · senior in AI, leads applied AI and ML delivery', 'tripta-mittal-crop.jpg'],
      ['saswat', 'Saswat Sahu', 'Co-founder · top product skills, from discovery to launch', 'saswat-sahu.jpg'],
      ['akash', 'Akash Bhardwaj', 'Business head · partnerships, growth and client success', 'akash-bhardwaj.jpg'],
    ].map(([key, name, tag, img]) => ({ key, name, tag, href: '/company#leadership', thumb: `/assets/company/${img}` })),
  },
  offices: {
    title: 'Four offices, one team',
    intro: 'Delivery from India, with teams close to clients in the US and Australia.',
    over: '/company#offices',
    items: [
      ['noida', 'Noida · Headquarters', 'Tower 4, Assotech Business Cresterra, 202, Sector 135, Noida, Uttar Pradesh 201304'],
      ['blr', 'Bengaluru', 'Block-L, Embassy TechVillage, Outer Ring Rd, Bellandur, Bengaluru, Karnataka 560103'],
      ['dallas', 'Dallas · United States', 'Client delivery and partnerships for North America'],
      ['aus', 'Australia', 'Wyndham Vale, Victoria · client delivery for Australia and New Zealand'],
    ].map(([key, name, tag]) => ({ key, name, tag, href: '/company#offices' })),
  },
  careers: {
    title: 'Build with Mariox',
    intro: 'We hire engineers, designers and product people who like shipping real products.',
    over: '/careers',
    items: [
      ['open', 'Open positions', 'See the roles we are hiring for right now', '/careers#roles'],
      ['life', 'Life at Mariox', 'Offsites, launch nights and an in-house team of 100+', '/careers'],
      ['grow', 'How you grow', 'Senior mentors, real products and clear career paths', '/careers'],
      ['apply', 'Apply by email', 'career@marioxsoftware.com', 'mailto:career@marioxsoftware.com'],
    ].map(([key, name, tag, href]) => ({ key, name, tag, href })),
  },
  process: {
    title: 'How we work',
    intro: 'One team, six stages and a demo every two weeks.',
    over: '/process',
    items: [
      ['stages', 'Our process', 'Discover, define, design, build, launch, scale', '/process'],
      ['models', 'Engagement models', 'Fixed scope, dedicated team or time & materials', '/engagement-models'],
      ['tech', 'Technologies', 'Frontend, mobile, backend, cloud, data and AI', '/technologies'],
      ['book', 'Book a free consultation', '30 minutes with a senior engineer', '/book-consultation'],
    ].map(([key, name, tag, href]) => ({ key, name, tag, href })),
  },
  trust: {
    title: 'Why clients trust Mariox',
    intro: 'Public reviews, certified engineers and security built into every project.',
    over: '/testimonials',
    items: [
      ['reviews', 'Client reviews', '4.8 ★ from 138 Google reviews', '/testimonials'],
      ['certs', 'Certifications & partners', 'AWS, Azure, Google Cloud, Salesforce and more', '/awards-certifications'],
      ['security', 'Security & compliance', 'NDA first, your IP, your accounts', '/security'],
      ['privacy', 'Privacy policy', 'How we handle your data', '/privacy-policy'],
    ].map(([key, name, tag, href]) => ({ key, name, tag, href })),
  },
  contact: {
    title: 'Talk to Mariox',
    intro: 'A senior engineer replies within one business day.',
    over: '/contact',
    items: [
      ['estimate', 'Get a free estimate', 'Share your idea and get scope, timeline and cost', '/contact'],
      ['book', 'Book a free consultation', 'Pick a 30-minute slot with a senior engineer', '/book-consultation'],
      ['email', 'admin@marioxsoftware.com', 'New projects and partnerships', 'mailto:admin@marioxsoftware.com'],
      ['phone', '+91 95992 87045', 'Call or WhatsApp, Monday to Saturday', 'tel:+919599287045'],
      ['jobs', 'career@marioxsoftware.com', 'Jobs and internships', 'mailto:career@marioxsoftware.com'],
    ].map(([key, name, tag, href]) => ({ key, name, tag, href })),
  },
  about: {
    title: 'About Mariox',
    intro: 'A software engineering company building products for startups and enterprises since 2016.',
    over: '/company',
    items: [
      ['story', 'Our story', 'Founded in 2016 in Noida, now a team of 100+ engineers', '/company'],
      ['work', 'How we work', 'Six stages from first call to live product', '/process'],
      ['models', 'Engagement models', 'Fixed scope, dedicated team or time & materials', '/engagement-models'],
      ['tech', 'Technologies', 'The stack our 100+ engineers use every day', '/technologies'],
      ['reviews', '4.8 ★ on Google', 'From 138 client reviews', '/testimonials'],
      ['certs', 'Certified engineers', 'AWS, Azure and Google Cloud certifications', '/awards-certifications'],
    ].map(([key, name, tag, href]) => ({ key, name, tag, href })),
  },
};

const COMPANY_FEATURES = {
  about: { img: '/assets/company/team-group-2026.jpg', kicker: 'Since 2016', title: '100+ engineers. All in-house.', text: 'One team across Noida, Bengaluru, Dallas and Australia.', href: '/company', cta: 'About Mariox' },
  leadership: { img: '/assets/company/rahul-garg-crop.jpg', kicker: 'Leadership', title: 'Founders who still build', text: 'Rahul Garg, Tripta Mittal, Saswat Sahu and Akash Bhardwaj.', href: '/company#leadership', cta: 'Meet the team' },
  offices: { img: '/assets/company/office-workspace.jpg', kicker: 'Offices', title: 'Noida · Bengaluru · Dallas · Australia', text: 'Delivery hubs in India, client teams in the US and Australia.', href: '/company#offices', cta: 'See offices' },
  careers: { img: '/assets/company/team-offsite-group.jpg', kicker: 'Careers', title: 'We are hiring', text: 'Engineers, designers and product people. career@marioxsoftware.com', href: '/careers', cta: 'View open roles' },
  blog: { img: '/assets/ai/robot-arm-brain.jpg', kicker: 'Blog', title: 'Notes from the Mariox team', text: 'AI, mobile, web and product engineering.', href: '/blog', cta: 'Read the blog' },
  contact: { img: '/assets/company/team-office-wide.jpg', kicker: 'Contact', title: 'Reply within one business day', text: 'admin@marioxsoftware.com · +91 95992 87045', href: '/contact', cta: 'Get a free estimate' },
  process: { img: '/assets/company/team-office-wide.jpg', kicker: 'How we work', title: 'A demo every two weeks', text: 'You always know what is being built and what comes next.', href: '/process', cta: 'See the process' },
  trust: { img: '/assets/company/team-group-2026.jpg', kicker: 'Trust', title: '4.8 ★ from 138 reviews', text: 'Certified engineers, NDA first, your code in your accounts.', href: '/testimonials', cta: 'Read reviews' },
};

export const MENU_ORDER = ['ai', 'services', 'industries', 'work', 'hire', 'company'];

export const MENUS = {
  ai: {
    label: 'AI',
    desc: 'Agents, copilots and machine learning that ship to production.',
    rail: AI_GROUPS.map(([key, label, , slugs]) => ({
      key,
      label,
      right: pad(slugs.filter((x) => services.some((s) => s.slug === x)).length),
      href: '/ai',
    })),
    body: (k) => {
      const g = AI_GROUPS.find((x) => x[0] === k) || AI_GROUPS[0];
      return { title: g[1], intro: g[2], items: g[3].map((x) => services.find((s) => s.slug === x)).filter(Boolean).map(serviceItem) };
    },
    foot: ['Explore the AI hub', '/ai'],
    over: '/ai',
    feat: { img: '/assets/ai/robot-arm-brain.jpg', kicker: 'Mariox AI', title: 'AI that ships to production', text: 'Agents, copilots and machine learning built on your data, evaluated before launch and monitored after it.', href: '/ai', cta: 'Explore Mariox AI' },
  },

  services: {
    label: 'Services',
    desc: 'Strategy, design, engineering and scale from one senior team.',
    rail: cats.map((c) => ({
      key: c.id,
      label: CAT_NAMES[c.id] || c.name,
      right: pad(services.filter((s) => s.cat === c.id).length),
      href: `/services#${c.id}`,
    })),
    body: (k) => {
      const c = cats.find((x) => x.id === k) || cats[0] || {};
      return {
        title: CAT_NAMES[c.id] || c.name || '',
        intro: c.intro || '',
        items: services.filter((s) => s.cat === c.id).map(serviceItem),
        over: `/services#${c.id}`,
      };
    },
    foot: [`All ${services.length} services`, '/services'],
    over: '/services',
    hoverFeat: 'Service',
    cta: 'Explore service',
  },

  industries: {
    label: 'Industries',
    desc: 'Products for the industries where software decides who wins.',
    rail: INDUSTRY_PAIRS.map(([key, label]) => ({
      key,
      label,
      right: pad(industries.filter((x) => x.groupKey === key).length),
      href: '/industries',
    })),
    body: (k) => {
      const g = INDUSTRY_PAIRS.find((x) => x[0] === k) || INDUSTRY_PAIRS[0] || ['', ''];
      return {
        title: g[1],
        intro: `Products we design and engineer for ${String(g[1]).toLowerCase()}.`,
        items: industries.filter((x) => x.groupKey === g[0]).map((x) => ({
          key: x.slug,
          name: x.name,
          tag: x.hook || '',
          href: `/industries/${x.slug}`,
          img: (x.photo || '').replace('w=2000', 'w=900'),
        })),
      };
    },
    foot: [`All ${industries.length} industries`, '/industries'],
    over: '/industries',
    hoverFeat: 'Industry',
    cta: 'Explore industry',
  },

  work: {
    label: 'Portfolio',
    desc: 'Products we have designed, engineered and kept running.',
    rail: [{ key: 'featured', label: 'Featured clients', right: pad(FEATURED.length), href: '/work' }]
      .concat(WORK_CATS.map(([key, label]) => ({
        key,
        label,
        right: pad(cases.filter((x) => (CASE_CAT[x.key] || 'other') === key).length
          + CONCEPT_ITEMS.filter((x) => x.cat === key).length),
        href: `/work?cat=${key}`,
      })))
      .concat([{ key: 'concepts', label: 'Product ideas', right: pad(conceptIndex.length), href: '/concepts' }]),
    body: (k) => {
      if (k === 'concepts') {
        const picked = TOP_CONCEPTS.map((t) => conceptIndex.find((p) => p.slug === t)).filter(Boolean);
        return {
          title: 'Product ideas',
          intro: `Free ideas for ${conceptIndex.length} brands, from IKEA to Huel: the gap we see, what we would build and how long it would take. Ideas, not client projects.`,
          over: '/concepts',
          items: picked.map((p) => ({
            key: `p-${p.slug}`,
            name: `What we'd build for ${p.name}`,
            tag: `${p.modules} modules · ${p.weeks} weeks · ${p.service}`,
            href: `/concepts/${p.slug}`,
            thumb: initialTile(p),
            img: initialTile(p),
            cta: 'See the idea',
            kicker: `Product idea · ${p.country}`,
          })),
        };
      }
      if (k === 'featured' || !k) {
        return {
          title: 'Featured clients',
          intro: 'Brands and products we have worked on.',
          over: '/work',
          items: FEATURED.map(([name, domain, tag]) => {
            const c = cases.find((y) => y.name.toLowerCase() === name.toLowerCase()) || {};
            return {
              key: `f-${name}`,
              name,
              tag,
              href: c.slug ? `/work/${c.slug}` : '/work',
              thumb: logoFor(domain),
              logo: true,
              img: c.img || '',
              kicker: c.sector || 'Case study',
            };
          }),
        };
      }
      const c = WORK_CATS.find((x) => x[0] === k) || WORK_CATS[0];
      return {
        title: c[1],
        intro: `Products we have designed and engineered for ${c[1].toLowerCase()} teams.`,
        over: `/work?cat=${c[0]}`,
        items: cases.filter((x) => (CASE_CAT[x.key] || 'other') === c[0]).map(caseItem)
          .concat(CONCEPT_ITEMS.filter((x) => x.cat === c[0])),
      };
    },
    foot: [`All ${cases.length} case studies`, '/work'],
    over: '/work',
    hoverFeat: 'Case study',
    cta: 'Read case study',
  },

  hire: {
    label: 'Hire talent',
    desc: 'Senior, in-house engineers who join your team by the month.',
    rail: HIRE_PAIRS.map(([key, label]) => ({
      key,
      label,
      right: pad(hireRoles.filter((r) => r.groupKey === key).length),
      href: '/hire',
    })),
    body: (k) => {
      const g = HIRE_PAIRS.find((x) => x[0] === k) || HIRE_PAIRS[0] || ['', ''];
      return {
        title: `${g[1]} engineers`,
        intro: 'Vetted, in-house Mariox engineers who work in your tools and standups.',
        items: hireRoles.filter((r) => r.groupKey === g[0]).map((r) => ({
          key: r.slug,
          name: r.name,
          tag: (r.skills || []).slice(0, 4).join(' · '),
          href: `/hire#${r.slug}`,
        })),
      };
    },
    foot: ['Hire talent overview', '/hire'],
    over: '/hire',
    feat: { img: '/assets/company/office-workspace.jpg', kicker: 'Hire talent', title: 'Senior engineers in 1–2 weeks', text: 'Add vetted Mariox engineers to your team by the month, without the hiring cycle.', href: '/hire', cta: 'Build your team' },
  },

  company: {
    label: 'Company',
    desc: 'Since 2016. 100+ engineers across four offices.',
    rail: COMPANY_RAIL.map(([key, label, href]) => ({ key, label, href, right: '' })),
    body: (k) => {
      if (k === 'blog') {
        return {
          title: 'From the blog',
          intro: 'Notes on AI, product and engineering from the Mariox team.',
          over: '/blog',
          items: posts.slice(0, 6).map((p) => ({ key: p.slug, name: p.title, tag: p.excerpt, href: `/blog/${p.slug}` })),
        };
      }
      return COMPANY_BODIES[k] || COMPANY_BODIES.about;
    },
    foot: ['We are hiring', '/careers'],
    over: '/company',
    featFor: (k) => COMPANY_FEATURES[k] || COMPANY_FEATURES.about,
  },
};

// /careers and /blog live under Company in the menu.
export const activeMenuFor = (active) => ({ careers: 'company', blog: 'company' }[active] || active);
