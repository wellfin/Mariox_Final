// Content of the "Mariox Home v4" design, copied verbatim from the design file.
// Case-study imagery points at local files instead of the live site.

import { caseStudies } from './caseStudies';

const B = '/img/cs/';

// Each image sits in a folder named after the client, so the case-study page
// for a row is found by matching that folder against the case-study keys.
const norm = (x) => x.toLowerCase().replace(/[^a-z0-9]/g, '');
const SLUGS = Object.keys(caseStudies).reduce((m, k) => { m[norm(k)] = k; return m; }, {});
const caseHref = (path) => {
  const k = SLUGS[norm(String(path).split('/')[0])];
  return k ? '/work/' + k : '/work';
};

export const clients = ['Airwallex', 'Zeller', 'Kogan', 'HotDoc', 'Fynd', 'Graphy', 'Testbook', 'Teachmint', 'Learnosity', 'Eka Care', 'Skydo', 'Lunar', 'Snitch', 'OnBuy', 'StockGro', 'MILKRUN'];

export const chapters = [['work', 'Work'], ['services', 'Services'], ['ai', 'AI'], ['technology', 'Tech'], ['industries', 'Industries'], ['process', 'Process'], ['proof', 'Proof'], ['contact', 'Start']]
  .map((c, i) => ({ id: c[0], label: c[1], href: '#' + c[0], n: String(i + 1).padStart(2, '0') }));

export const navLinks = [['Work', '#work'], ['Services', '#services'], ['AI', '#ai'], ['Industries', '#industries'], ['Company', '#proof']].map((l) => ({ label: l[0], href: l[1] }));

// Statement words: the serif ones are italic, "you." is accent-coloured.
const STATEMENT = 'We are a senior engineering team that designs, builds and scales digital products. We stay after launch, and everything we build belongs to you.';
const SERIF = { stay: 1, after: 1, 'launch,': 1, 'you.': 1 };
export const words = STATEMENT.split(' ').map((w) => ({
  t: w,
  f: SERIF[w] ? "'Instrument Serif',serif" : 'inherit',
  s: SERIF[w] ? 'italic' : 'normal',
  wt: SERIF[w] ? 400 : 500,
  c: w === 'you.' ? '#F04423' : '#08070A',
}));

export const stats = [{ v: 100, suf: '+', l: 'Engineers' }, { v: 300, suf: '+', l: 'Products shipped' }, { v: 10, suf: '+', l: 'Industries served' }, { v: 4, suf: '', l: 'Countries, one team' }];

// Five deep-dive case panels.
export const SV = [
      ['Custom software development','Bespoke platforms and internal systems built around your process, with architecture any engineer can pick up.',['Architecture','Build','Handover docs'],'fynd/fynd1.png','Fynd'],
      ['Web app development','Fast, accessible web applications that stay easy to change long after launch.',['React / Next.js','Admin panels','Performance'],'onbuy/onbuy1.png','OnBuy'],
      ['Mobile app development','Native and cross-platform apps for iOS and Android, from first wireframe to store release.',['iOS & Android','Flutter / React Native','Store release'],'milkrun/milkrun1.png','MILKRUN'],
      ['SaaS product development','Multi-tenancy, billing, onboarding and admin tooling, built for the thousandth customer.',['Multi-tenancy','Billing','Admin console'],'graphy/graphy1.png','Graphy'],
      ['AI & automation','Copilots, agents and automation wired into the products and workflows you already run.',['Agents','RAG','Workflow automation'],'learnosity/learnosity2.png','Learnosity'],
      ['CRM development','Pipelines, follow-ups, WhatsApp and calling in one place, built around how your team sells.',['Pipelines','WhatsApp & calling','Lead scoring'],'myzelller/myzeller5.png','Zeller'],
      ['ERP development','Inventory, finance, procurement and HR on one data model, so the numbers never disagree.',['Inventory','Finance & GST','Production'],'volygroup/volygroup2.png','Voly'],
      ['UI/UX & product design','Research, flows and interface systems delivered as design your engineers can actually build.',['Research','Interface design','Design systems'],'jaypore/jaypore1.png','Jaypore'],
      ['Cloud & DevOps','Migration, infrastructure as code, CI/CD and cost control. Deployments that stop being an event.',['AWS / Azure / GCP','Terraform','CI/CD'],'airwallex/AirWallex4.png','Airwallex'],
      ['QA & testing','Manual and automated coverage, performance and security testing, with release gates.',['Automation','Load testing','Security'],'testbook/testbook1.png','Testbook'],
      ['MVP development','A focused first version in weeks, on foundations you will not have to throw away.',['Discovery','MVP build','Launch'],'zypit/zypit2.png','Zupit'],
      ['E-commerce development','Storefronts, marketplaces and the inventory systems behind them, tuned for peak traffic.',['Storefronts','Marketplaces','Inventory'],'snitch/snitch1.png','Snitch'],
      ['API & integrations','Payment rails, ERPs, CRMs and partner APIs connected behind clean, versioned interfaces.',['Payments','Partner APIs','Webhooks'],'skydo/Skydo1.png','Skydo'],
      ['Data engineering & analytics','Pipelines, warehouses and dashboards that leadership actually opens.',['Pipelines','Warehousing','Dashboards'],'stockgro/stockgro1.png','StockGro'],
      ['Dedicated teams','A senior squad working as part of your company, in your tools and your standups.',['Squad of 4–12','Delivery lead','Monthly'],'lunar/luner1.png','Lunar'],
      ['Staff augmentation','Vetted engineers added to your team by the month, without the hiring cycle.',['Vetted seniors','Flexible','Fast start'],'famapp/famapp4.png','Fampay'],
      ['IT support & managed services','Monitoring, patching and incident response, so your team can work on the roadmap.',['24/7 monitoring','Incident response','Patching'],'soldo/soldo.png','Soldo']
    ];

export const CASES = [
      ['Airwallex','Fintech','App + web','airwallex/AirWallex4.png','Fintech'],['Zeller','Fintech','App + web','myzelller/myzeller5.png','Fintech'],['Skydo','Fintech','App + web + admin','skydo/Skydo1.png','Fintech'],['Fampay','Fintech','App + web + admin','famapp/famapp4.png','Fintech'],['StockGro','Fintech','App + web','stockgro/stockgro1.png','Fintech'],['Soldo','Fintech','App + web','soldo/soldo.png','Fintech'],['Yonder','Fintech','App + web','yonder/yonder2.png','Fintech'],['Lunar','Digital banking','App + web','lunar/luner1.png','Fintech'],
      ['Graphy','Edtech','App + web','graphy/graphy1.png','Edtech'],['Testbook','Edtech','App + web','testbook/testbook1.png','Edtech'],['Teachmint','Edtech','App + web','teachmint/teachmint.png','Edtech'],['Learnosity','Edtech','Web','learnosity/learnosity2.png','Edtech'],['Cluey Learning','Edtech','App + web','clueylearning/clueylearning1.png','Edtech'],['Seneca Learning','Edtech','App + web','senecalearning/senecalearning1.png','Edtech'],['Sunstone','Edtech','App + web','sunstone/sunstone1.png','Edtech'],
      ['Snitch','E-commerce','App + web + admin','snitch/snitch1.png','Commerce'],['Fynd','Commerce technology','App + web + admin','fynd/fynd1.png','Commerce'],['Jaypore','Lifestyle e-commerce','App + web + admin','jaypore/jaypore1.png','Commerce'],['Kogan','Marketplace','Marketplace + web + admin','kogan/kogan2.png','Commerce'],['OnBuy','Marketplace','Marketplace + web + admin','onbuy/onbuy1.png','Commerce'],['Onceit','E-commerce','App + web + admin','onceit/onceit2.png','Commerce'],['MILKRUN','Quick commerce','App + web + admin','milkrun/milkrun1.png','Commerce'],['Zupit','Quick commerce','App + web + admin','zypit/zypit2.png','Commerce'],['Voly','Quick commerce','App + web + admin','volygroup/volygroup2.png','Commerce'],['Grokart','Grocery, quick commerce','App + web + admin','thegrocart/thegrocart1.png','Commerce'],
      ['HotDoc','Healthcare','App + web','hotdoc/hotdoc1.png','Healthcare'],['Eka Care','Healthcare','App + web','eka.care/eka.care2.png','Healthcare']
    ];

export const TECH = [['Frontend',['React','Next.js','Vue','Angular','TypeScript']],['Backend',['Node.js','.NET','Java / Spring','Python','Go']],['Mobile',['React Native','Flutter','Swift','Kotlin']],['Cloud',['AWS','Azure','Google Cloud','Cloudflare']],['Data',['PostgreSQL','Redis','Kafka','Elasticsearch','MongoDB']],['AI',['OpenAI','Claude','LangChain','PyTorch','Vector DBs']],['DevOps',['Kubernetes','Terraform','Docker','GitHub Actions']]];

// Deep-dive panels (sticky, full-screen).
export const stack = [
        { name: 'Skydo', sector: 'Fintech', scope: 'App + web + admin', img: 'Skydo1.png', path: 'skydo/', body: 'Cross-border payments for exporters, built around a ledger that has to reconcile to the cent.', system: 'The ledger is the source of truth and everything else reads from it. Payment rails sit behind a normalisation layer, so an API change upstream stays contained.', tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'] },
        { name: 'MILKRUN', sector: 'Quick commerce', scope: 'App + web + admin', img: 'milkrun1.png', path: 'milkrun/', body: 'Grocery delivery with rider dispatch and live tracking, engineered for a sub-ten-minute promise.', system: 'Store-level inventory is the source of truth, and the product refuses to show a delivery slot the system cannot back.', tech: ['React Native', 'Node.js', 'Kafka', 'Kubernetes', 'Maps APIs'] },
        { name: 'Graphy', sector: 'Creator SaaS', scope: 'App + web', img: 'graphy1.png', path: 'graphy/', body: 'Course delivery, live cohorts and creator payouts, where every creator runs their own branded school.', system: 'Live sessions and course delivery are separate services, so a spike in one cannot degrade the other. Payouts derive from immutable event records.', tech: ['React', 'React Native', 'Node.js', 'WebRTC', 'GCP'] },
        { name: 'Airwallex', sector: 'Fintech', scope: 'App + web', img: 'AirWallex4.png', path: 'airwallex/', body: 'Global business accounts and FX: interfaces and services for money moving across borders.', system: 'Every balance is derived from an append-only record rather than stored and mutated, so history can be rebuilt at any point.', tech: ['TypeScript', 'Java / Spring', 'Kafka', 'AWS', 'Terraform'] },
        { name: 'Snitch', sector: 'E-commerce', scope: 'App + web + admin', img: 'snitch1.png', path: 'snitch/', body: 'Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.', system: 'One inventory service feeds every surface, so the storefront cannot promise stock the warehouse does not hold.', tech: ['Next.js', 'Node.js', 'Elasticsearch', 'Redis', 'Cloudflare'] }
      ].map((c, i) => ({ ...c, n: String(i + 1).padStart(2, '0'), img: B + c.path + c.img, alt: c.name + ' product screen', href: caseHref(c.path) }));

export const pillars = [
        { n: '01', t: 'Strategy', b: 'We start by finding the version of the product that is worth building, then price it honestly.', list: ['Product discovery', 'Technical audits', 'Roadmaps & estimates'], img: 'fynd/fynd1.png' },
        { n: '02', t: 'Design', b: 'Research, flows and interface systems delivered as design your engineers can actually build.', list: ['UX research', 'Interface design', 'Design systems'], img: 'jaypore/jaypore1.png' },
        { n: '03', t: 'Engineering', b: 'Senior people writing production code from week one. No juniors hidden behind an account manager.', list: ['Web & mobile apps', 'SaaS platforms', 'CRM & ERP', 'AI & automation'], img: 'graphy/graphy1.png' },
        { n: '04', t: 'Scale', b: 'The infrastructure, monitoring and support to keep it running long after launch week.', list: ['Cloud & DevOps', 'QA & testing', 'Managed support', 'Dedicated teams'], img: 'airwallex/AirWallex4.png' }
      ].map((p) => ({ ...p, img: B + p.img }));

export const ai = [
        { n: '01', t: 'Agents & copilots', b: 'Assistants that act inside your product: drafting, searching, filing and following up.', e: 'support replies, sales follow-ups' },
        { n: '02', t: 'Search over your data', b: 'Retrieval systems that answer from your documents and databases, with sources shown.', e: 'policy search, product knowledge' },
        { n: '03', t: 'Workflow automation', b: 'Documents read, classified and routed without anyone copying fields between systems.', e: 'invoices, KYC, claims' },
        { n: '04', t: 'Prediction & scoring', b: 'Demand forecasts, lead scores and risk flags built on the data you already hold.', e: 'churn, demand, fraud' }
];

export const aiStack = ['OpenAI', 'Anthropic Claude', 'Llama', 'LangChain', 'pgvector', 'Evals & monitoring'];


// The ten sectors in the design all have a page on the site.
const INDUSTRY_SLUG = {
  Healthcare: 'healthcare', Fintech: 'fintech', Education: 'education', 'E-commerce': 'ecommerce',
  Logistics: 'logistics', Startups: 'startups', Enterprise: 'enterprise', 'Real Estate': 'real-estate',
  Travel: 'travel', Media: 'media',
};

export const industries = [
        ['Healthcare', 'Patient platforms, telemedicine, booking', 'HotDoc · Eka Care', 'hotdoc/hotdoc1.png'],
        ['Fintech', 'Payments, wallets, banking, investing', 'Airwallex · Zeller · Skydo', 'skydo/Skydo1.png'],
        ['Education', 'LMS, assessment, school ERP', 'Graphy · Testbook · Teachmint', 'testbook/testbook1.png'],
        ['E-commerce', 'Marketplaces, storefronts, seller tools', 'Snitch · Kogan · OnBuy', 'snitch/snitch1.png'],
        ['Logistics', 'Fleet, dispatch, live tracking', 'MILKRUN · Voly', 'milkrun/milkrun1.png'],
        ['Startups', 'MVPs, SaaS, scale-up engineering', 'Zupit · Grokart', 'zypit/zypit2.png'],
        ['Enterprise', 'ERP, CRM, integrations', 'Fynd', 'fynd/fynd1.png'],
        ['Real Estate', 'Property platforms, CRM, marketplaces', '', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=70&auto=format&fit=crop'],
        ['Travel', 'Booking, concierge, hotel technology', '', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=70&auto=format&fit=crop'],
        ['Media', 'OTT, streaming, creator platforms', '', 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=70&auto=format&fit=crop']
].map((r, i) => ({ n: String(i + 1).padStart(2, '0'), name: r[0], what: r[1], clients: r[2], img: r[3].indexOf('http') === 0 ? r[3] : B + r[3], href: '/industries/' + INDUSTRY_SLUG[r[0]] }));

export const steps = [
        { n: '01', t: 'Discover', b: 'Workshops, research and a technical audit of what already exists.', out: 'Findings report' },
        { n: '02', t: 'Define', b: 'Scope, architecture and a fixed number you can plan around.', out: 'Fixed estimate' },
        { n: '03', t: 'Design', b: 'Flows and interfaces tested with users before they are built.', out: 'Clickable prototype' },
        { n: '04', t: 'Build', b: 'Two-week sprints with a working demo at the end of each.', out: 'Demo every sprint' },
        { n: '05', t: 'Launch', b: 'Staged rollout, with monitoring live before the first user arrives.', out: 'Production release' },
        { n: '06', t: 'Scale', b: 'Support, iteration and capacity that grows with you.', out: 'SLA-backed support' }
];

export const engage = [
        { n: '01', t: 'Fixed-scope project', b: 'A defined outcome, a fixed price and a delivery date, agreed after discovery.', best: 'MVPs and well-understood builds' },
        { n: '02', t: 'Dedicated team', b: 'A cross-functional squad that works only on your product, led by a Mariox delivery lead.', best: 'Ongoing product development' },
        { n: '03', t: 'Staff augmentation', b: 'Senior engineers added to your team, working in your tools and your process.', best: 'Filling skill gaps fast' }
];

export const trust = [
        { k: 'Cloud', t: 'AWS', s: 'Certified engineers' }, { k: 'Cloud', t: 'Microsoft Azure', s: 'Certified engineers' }, { k: 'Cloud', t: 'Google Cloud', s: 'Certified engineers' },
        { k: 'Ownership', t: 'Your code', s: 'Repos and infra are yours' }, { k: 'Confidential', t: 'NDA first', s: 'Before the first call' }, { k: 'Reach', t: '4 countries', s: 'One delivery team' }
];

export const faq = [
        ['How do you price projects?', 'Fixed scope for well-defined builds, monthly for dedicated teams. Every estimate follows a short discovery, so the number holds.'],
        ['Who owns the code?', 'You do, from the first commit. Repositories, infrastructure and documentation sit in your accounts.'],
        ['Do you sign an NDA?', 'Yes, before the first detailed conversation.'],
        ['Can you take over an existing product?', 'Yes. We start with a code and infrastructure audit, then fix what will break first before adding features.'],
        ['How quickly can you start?', 'We confirm a start date on the first call. It depends on the team the project needs.']
].map((q) => ({ q: q[0], a: q[1] }));

export const needs = ['Mobile app', 'Web app', 'SaaS', 'CRM / ERP', 'AI', 'Dedicated team'];
export const budgets = ['Under $25k', '$25k–$75k', '$75k–$150k', '$150k+', 'Not sure'];

export const footerCols = [
  { h: 'Explore', links: [{ t: 'Work', href: '#work' }, { t: 'Services', href: '#services' }, { t: 'AI', href: '#ai' }, { t: 'Industries', href: '#industries' }] },
  { h: 'Contact', links: [{ t: 'admin@marioxsoftware.com', href: 'mailto:admin@marioxsoftware.com' }, { t: '+91 95992 87045', href: 'tel:+919599287045' }] },
  { h: 'Social', links: [{ t: 'LinkedIn', href: 'https://www.linkedin.com/company/marioxsoftwares' }, { t: 'Instagram', href: 'https://www.instagram.com/marioxsoftware' }] },
];

export const filterNames = ['All', 'Fintech', 'Edtech', 'Commerce', 'Healthcare'];

// Shaped for rendering.
export const services = SV.map((s, i) => ({
  n: String(i + 1).padStart(2, '0'), name: s[0], desc: s[1], get: s[2], img: B + s[3], client: s[4], alt: s[4] + ' product screen',
}));

export const caseRows = CASES.map((c) => ({ name: c[0], sector: c[1], scope: c[2], img: B + c[3], group: c[4], href: caseHref(c[3]) }));

export const techTabs = TECH.map((t) => ({ label: t[0], items: t[1] }));
