// Content of the "Mariox SaaS Landing" design, copied verbatim.
// Case-study images point at local files instead of the live site.

export const heroTrust = [
  { b: '300+', t: 'products shipped' },
  { b: '4.8★', t: 'from 138 Google reviews' },
  { b: 'AWS · Azure · GCP', t: 'certified' },
  { b: 'NDA', t: 'before the first call' },
];

// Certification and review badges under the hero.
export const heroBadges = [
  { t: 'AWS', s: 'Certified', c: '#9B968F' },
  { t: 'Azure', s: 'Certified', c: '#9B968F' },
  { t: 'Google Cloud', s: 'Certified', c: '#9B968F' },
  { t: 'Google', s: '4.8 ★ · 138', c: '#F04423' },
  { t: 'Clutch', s: 'Verified', c: '#9B968F' },
  { t: 'ISO 27001', s: 'Practices', c: '#9B968F' },
];

export const brands = ['Airwallex', 'Zeller', 'Kogan', 'Lunar', 'Soldo', 'HotDoc', 'Healthengine', 'Fynd', 'Testbook', 'Teachmint', 'OnBuy', 'Livi', 'Skydo', 'Learnosity'];

export const stats = [
  { v: '100+', l: 'Engineers on staff' },
  { v: '300+', l: 'Products shipped' },
  { v: '42', l: 'Published case studies' },
  { v: '4', l: 'Countries, one team' },
];

export const saasIncluded = [
  { n: '01', t: 'Tenancy model', b: 'Isolation, sharing and migration decided before launch.' },
  { n: '02', t: 'Billing', b: 'Plans, trials, proration, dunning and revenue reporting.' },
  { n: '03', t: 'Onboarding', b: 'Signup, provisioning and time-to-first-value flows.' },
  { n: '04', t: 'Admin tooling', b: 'The internal console your support team needs on day one.' },
  { n: '05', t: 'Usage metering', b: 'Limits, quotas and the data behind usage-based pricing.' },
  { n: '06', t: 'Scale work', b: 'Caching, queues and read replicas ahead of the curve.' },
];

export const saasGet = [
  { n: '01', t: 'Multi-tenant platform', b: 'Provisioned, metered and billable.' },
  { n: '02', t: 'Billing integration', b: 'Reconciled against your provider, not approximated.' },
  { n: '03', t: 'Admin console', b: 'Support actions without database access.' },
  { n: '04', t: 'Capacity plan', b: 'What breaks first, and at what number.' },
];

export const apps = [
  { name: 'HubSpot', cat: 'CRM SaaS', title: 'CRM and sales platforms', body: 'Contacts, pipelines, email sequences and reporting, multi-tenant from day one with per-seat billing and role-based access.', features: ['Pipelines', 'Email sequences', 'Role-based access', 'Per-seat billing', 'Reporting', 'Integrations API'], proof: 'Multi-tenant + per-seat' },
  { name: 'Shopify', cat: 'Commerce platform', title: 'Commerce and storefront platforms', body: 'Merchant onboarding, storefronts, payments and an app ecosystem, with tenant isolation that survives one merchant going viral.', features: ['Merchant onboarding', 'Storefront builder', 'Payments', 'Apps & webhooks', 'Inventory', 'Payouts'], proof: 'Related: Fynd', case: 'fynd' },
  { name: 'Teachable', cat: 'Creator SaaS', title: 'Course and creator platforms', body: 'Creators get their own branded school, payments and analytics, while you run one platform underneath.', features: ['White-label schools', 'Course builder', 'Live cohorts', 'Creator payouts', 'Analytics', 'Custom domains'], proof: 'Related: Graphy', case: 'graphy' },
  { name: 'Zoho', cat: 'Business suite', title: 'ERP, HR and back-office SaaS', body: 'Modules that share one data model, so invoicing, inventory and HR never disagree, sold per module and per seat.', features: ['Modular plans', 'Invoicing', 'Inventory', 'HR & payroll', 'Audit trail', 'SSO'], proof: 'Modular billing' },
  { name: 'Zoom', cat: 'Communication', title: 'Video and communication SaaS', body: 'Meetings, recordings and transcripts with usage-metered plans and the infrastructure to hold quality at peak.', features: ['Video rooms', 'Recording', 'Transcripts', 'Usage metering', 'Admin console', 'Webhooks'], proof: 'Usage-based pricing' },
  { name: 'Calendly', cat: 'Scheduling', title: 'Booking and scheduling SaaS', body: 'Availability, booking pages, reminders and calendar sync, with a free tier that converts to paid without friction.', features: ['Booking pages', 'Calendar sync', 'Reminders', 'Team routing', 'Freemium plans', 'Payments'], proof: 'Freemium to paid' },
  { name: 'Freshdesk', cat: 'Support desk', title: 'Helpdesk and ticketing SaaS', body: 'Ticketing, SLAs, knowledge base and AI-assisted replies, each tenant with its own branding, rules and data.', features: ['Ticketing', 'SLA rules', 'Knowledge base', 'AI replies', 'Multi-brand', 'Reporting'], proof: 'AI + multi-tenant' },
  { name: 'Assessment', cat: 'Edtech platform', title: 'Assessment and testing platforms', body: 'Question banks, timed tests and marking that hold up when a whole cohort logs in at once, embedded by other products via API.', features: ['Question banks', 'Timed tests', 'Auto-marking', 'Proctoring', 'Embeddable API', 'Analytics'], proof: 'Related: Learnosity, Testbook', case: 'learnosity' },
];

export const aiServices = [
  { n: '01', t: 'AI assistants & copilots', b: 'Chat and voice assistants inside your app or support desk, grounded in your own data and handing off to humans cleanly.' },
  { n: '02', t: 'Retrieval over your documents', b: 'Search and answers across contracts, manuals and tickets, with sources shown so people can check the answer.' },
  { n: '03', t: 'Workflow automation & agents', b: 'Agents that read, classify, route and act on invoices, emails and forms, with approval steps where it matters.' },
  { n: '04', t: 'Custom models & fine-tuning', b: 'Classification, forecasting and recommendation models trained on your data when an off-the-shelf model is not enough.' },
  { n: '05', t: 'Evaluation & guardrails', b: 'Test sets, accuracy tracking, content filters and PII handling, so you know how it performs before and after launch.' },
  { n: '06', t: 'AI cost & infrastructure', b: 'Model selection, caching and hosting on AWS, Azure or GCP that keep per-request cost predictable at scale.' },
];

export const aiStack = ['OpenAI', 'Anthropic Claude', 'Gemini', 'Llama', 'Azure OpenAI', 'AWS Bedrock', 'LangChain', 'Vector DBs'];

// Client testimonials. `video` is empty for now — the card shows an empty frame
// with the play button; paste a YouTube, Vimeo or .mp4 URL to make it play.
export const stories = [
  { quote: 'They brought our vision to life with a modern, user-friendly UI/UX design and delivered the mobile app exactly as we had imagined — on time and with top-notch quality.', name: 'Sangeeta Chaudhary', role: 'Google review', video: '', length: '0:16' },
  { quote: 'Their honest, reliable, and hardworking team delivers a flawless product beyond expectations.', name: 'Akhil Malhotra', role: 'Client', video: '', length: '0:16' },
  { quote: '…he displayed clear understanding of the project, deliverables which made me initiate project with Mariox Software. I really appreciate him and his team.', name: 'Startup founder', role: 'Trustpilot review', video: '', length: '0:16' },
];

export const cases = [
  { name: 'Graphy', sector: 'Creator SaaS', region: 'India', scope: 'App + web', img: '/img/cs/graphy/graphy1.png', url: '/case-study/graphy', body: 'Course delivery, live cohorts and creator payouts inside one platform, where every creator runs their own branded school.' },
  { name: 'Learnosity', sector: 'Assessment platform', region: 'Global', scope: 'Web', img: '/img/cs/learnosity/learnosity2.png', url: '/case-study/learnosity', body: 'Assessment infrastructure embedded and extended by the teams integrating it, behind a versioned API surface.' },
  { name: 'Fynd', sector: 'Commerce technology', region: 'India', scope: 'App + web + admin', img: '/img/cs/fynd/fynd1.png', url: '/case-study/fynd', body: 'Commerce technology connecting online ordering with retail operations, with one inventory service read by every channel.' },
];

export const steps = [
  { n: '01', t: 'NDA and discovery workshop', b: 'Two to three weeks with your stakeholders. Requirements, constraints, integrations and risks, written down.' },
  { n: '02', t: 'Architecture and fixed proposal', b: 'A costed plan your board and procurement can defend. You keep it whether or not we build it.' },
  { n: '03', t: 'Dedicated senior squad', b: 'Architect, engineers, QA and a delivery lead. Fortnightly demos and a board you can open any day.' },
  { n: '04', t: 'Launch, run and scale', b: 'Staged rollout, monitoring in place before go-live, and support terms agreed up front.' },
];

export const certs = [
  { n: '01', group: 'Amazon Web Services', items: ['Solutions Architect', 'DevOps Engineer', 'Developer Associate', 'SysOps Administrator'] },
  { n: '02', group: 'Microsoft Azure', items: ['Solutions Architect Expert', 'Azure Administrator', 'Azure Developer', 'Azure AI Engineer'] },
  { n: '03', group: 'Google Cloud', items: ['Professional Cloud Architect', 'Cloud Developer', 'Data Engineer', 'Machine Learning Engineer'] },
  { n: '04', group: 'Platform & practice', items: ['Certified Kubernetes Administrator', 'Scrum / Agile', 'Salesforce certified', 'ISTQB tester'] },
];

export const trust = [
  { t: 'Cloud certified', b: 'AWS, Azure and Google Cloud credentials held by engineers across the team, verifiable on request.' },
  { t: 'Your IP, from day one', b: 'Code lives in your repositories and cloud accounts. Full IP assignment in the contract.' },
  { t: 'NDA before first call', b: 'Share nothing sensitive until you are covered. We sign yours or provide ours.' },
  { t: 'Timezone overlap', b: 'Teams in India, the US and Australia, so your working day always has cover.' },
];

export const faq = [
  { q: 'How long does a SaaS MVP take?', a: 'A focused MVP with signup, one core workflow, billing and an admin console usually takes 8 to 12 weeks after discovery.' },
  { q: 'Single-tenant or multi-tenant?', a: 'We decide it in week one with you, based on your customers, compliance needs and price point. Both are painful to change later.' },
  { q: 'Which billing providers do you work with?', a: 'Stripe, Razorpay, Chargebee and Paddle, including trials, proration, dunning and usage-based plans.' },
  { q: 'Can you take over an existing SaaS?', a: 'Yes. We assess the codebase and infrastructure first, then fix what will break first before adding features.' },
];

export const heroNeeds = ['SaaS MVP', 'Multi-tenant platform', 'Billing & subscriptions', 'Admin console', 'AI features', 'Scale existing SaaS'];
export const heroBudgets = ['Under $25k', '$25k–$75k', '$75k–$150k', '$150k+', 'Not sure'];
export const architectBudgets = ['$25k – $75k', '$75k – $150k', '$150k – $500k', '$500k+', 'Not decided'];
export const architectTimelines = ['This quarter', 'Next quarter', 'This year', 'Exploring'];
