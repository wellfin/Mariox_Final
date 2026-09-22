// Shared content from the Mariox Software Site design (renderVals), with
// hash routes replaced by real URLs and case-study links pointed at local pages.

export const CONTACT = {
  email: 'admin@marioxsoftware.com',
  phone: '+91 9599287045',
  tel: 'tel:+919599287045',
};

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marioxsoftware.com';

// Primary navigation. As in the design, an item lights up on its own route;
// `prefix` also lights it on child routes (industry detail pages).
export const navLinks = [
  { href: '/case-study', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries', prefix: true },
  { href: '/ai', label: 'AI' },
  { href: '/hire', label: 'Hire' },
  { href: '/technologies', label: 'Technology' },
  { href: '/about', label: 'Company' },
];

export const tech = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Vue', 'Angular', 'Tailwind', 'GSAP', 'Three.js'],
  Backend: ['Node.js', '.NET', 'Java / Spring', 'Python / Django', 'Laravel', 'Go', 'GraphQL', 'REST'],
  Mobile: ['React Native', 'Flutter', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Expo'],
  AI: ['OpenAI', 'Anthropic', 'Llama', 'PyTorch', 'LangChain', 'Hugging Face', 'Vector search'],
  Cloud: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker', 'Cloudflare'],
  Database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Snowflake', 'Elasticsearch'],
  DevOps: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Datadog', 'Grafana', 'Sentry'],
};

export const roles = [
  { n: '01', title: 'Frontend engineers', stack: 'React, Next.js, TypeScript, Vue' },
  { n: '02', title: 'Backend engineers', stack: 'Node.js, Java, .NET, Python, Go' },
  { n: '03', title: 'Full-stack engineers', stack: 'TypeScript across the whole surface' },
  { n: '04', title: 'Mobile engineers', stack: 'React Native, Flutter, Swift, Kotlin' },
  { n: '05', title: 'AI / ML engineers', stack: 'LLM integration, RAG, PyTorch, evaluation' },
  { n: '06', title: 'DevOps / SRE', stack: 'AWS, Azure, GCP, Kubernetes, Terraform' },
  { n: '07', title: 'Data engineers', stack: 'Airflow, dbt, Snowflake, Kafka' },
  { n: '08', title: 'QA engineers', stack: 'Playwright, Cypress, load and security testing' },
  { n: '09', title: 'Product designers', stack: 'Research, flows, interface systems' },
  { n: '10', title: 'Tech leads', stack: 'Architecture, code review, delivery ownership' },
];

export const hireModels = [
  { n: 'Model 01', title: 'Dedicated team', body: 'A full squad reserved for you, working as one unit with a lead who owns delivery.', points: ['Monthly rate per person', 'Lead included', 'You set the roadmap'] },
  { n: 'Model 02', title: 'Team extension', body: 'Individual engineers embedded into your existing team, tools and rituals.', points: ['Start with one, add as needed', 'Your process, your board', 'Direct access, no account layer'] },
  { n: 'Model 03', title: 'Managed delivery', body: 'We take a defined outcome and own it end to end, reporting against milestones.', points: ['Scope and milestones agreed up front', 'Our process and tooling', 'Fixed or capped pricing'] },
];

export const hireSteps = [
  { n: '01', title: 'Brief', body: 'A short call on roles, stack, seniority and the time zones you need covered.' },
  { n: '02', title: 'Shortlist', body: 'CVs and availability within a few days, drawn from people already on staff.' },
  { n: '03', title: 'Interview', body: 'You interview them yourself. No proxy assessments, no substitutions later.' },
  { n: '04', title: 'Onboard', body: 'They join your standups and boards. Most placements start within two to three weeks.' },
];

export const aiLayer = [
  { n: '01', tag: 'In-product', title: 'Assistants & copilots', body: 'Intelligence inside the product your users already open: drafting, summarising, searching and answering in the flow of the work.', proof: 'Shipped across fintech and edtech products' },
  { n: '02', tag: 'Agentic', title: 'Agents that act', body: 'Multi-step agents wired to your tools and APIs, with permissions, human review gates and a record of every action taken.', proof: 'Tool use, orchestration, audit trail' },
  { n: '03', tag: 'Retrieval', title: 'Knowledge that answers', body: 'Your documents, tickets and databases made answerable, with citations back to source so people can verify what they are told.', proof: 'Chunking, embeddings, reranking, citations' },
  { n: '04', tag: 'Operations', title: 'Evals & guardrails', body: 'The unglamorous half. Test sets, accuracy scoring, red-teaming, cost per call and drift alerts running continuously.', proof: 'Quality tracked after launch, not before' },
];

export const readiness = [
  { label: 'Data readiness', note: 'Volume, labels, access', w: '82%' },
  { label: 'Tolerance for error', note: 'What a wrong answer costs', w: '64%' },
  { label: 'Cost per call at scale', note: 'Unit economics at volume', w: '73%' },
  { label: 'Integration surface', note: 'Systems it must reach', w: '58%' },
];

export const aiTech = ['OpenAI', 'Anthropic', 'Llama', 'Mistral', 'LangGraph', 'Hugging Face', 'pgvector', 'Pinecone', 'PyTorch', 'vLLM'];

export const aiFaqs = [
  { q: 'How do we know AI is the right answer?', a: 'Often it is not, and we will say so. Discovery scores your use case on data readiness, tolerance for error and cost per call before anyone writes code.' },
  { q: 'What happens to our data?', a: 'It stays yours. We deploy inside your cloud account or use zero-retention endpoints, and we never train shared models on client data.' },
  { q: 'How do you stop it making things up?', a: 'Retrieval with citations, output validation, and an evaluation suite that runs on every change. Where accuracy matters most, a human approves before the action commits.' },
];

export const offices = [
  { country: 'India', city: 'Noida', address: '202, Assotech Business Cresterra, Tower-4, Sector 135, Noida, Uttar Pradesh 201301' },
  { country: 'India', city: 'Hyderabad', address: '10th Floor, SmartPace, Suite-B 1003, The Platina, Wing-B, Gachibowli, Hyderabad, Telangana 500032' },
  { country: 'USA', city: 'Dallas', address: '539 W Commerce St, Suite 5589, Dallas, TX 75208' },
  { country: 'Australia', city: 'Wyndham Vale', address: '2 Nichollii Ct, Wyndham Vale VIC 3024' },
];

export const ticker = ['Product engineering', 'Web & mobile', 'AI & automation', 'SaaS platforms', 'CRM & ERP', 'Cloud & DevOps', '100+ engineers', '42 case studies', 'Noida', 'Hyderabad', 'Dallas', 'Melbourne'];

export const serviceList = [
  { n: '01', name: 'Product engineering', tag: 'Discovery, architecture, build, handover', stage: 0, href: '/product-engineering' },
  { n: '02', name: 'Web & mobile', tag: 'React, Next.js, React Native, Flutter', stage: 1, href: '/web-and-app-development' },
  { n: '03', name: 'AI & automation', tag: 'Assistants, agents, retrieval, evaluation', stage: 2, href: '/ai' },
  { n: '04', name: 'SaaS & platforms', tag: 'Multi-tenancy, billing, scale', stage: 2, href: '/saas-platforms' },
  { n: '05', name: 'CRM & ERP', tag: 'Implementation, customisation, integration', stage: 3, href: '/crm-erp' },
  { n: '06', name: 'Cloud & infrastructure', tag: 'AWS, Azure, GCP, Kubernetes, IaC', stage: 4, href: '/cloud-infrastructure' },
  { n: '07', name: 'UI/UX & product design', tag: 'Research, flows, interface systems', stage: 1, href: '/design' },
  { n: '08', name: 'QA & test automation', tag: 'Coverage, performance, security, gates', stage: 2, href: '/qa-testing' },
  { n: '09', name: 'Data & analytics', tag: 'Pipelines, warehousing, BI, reporting', stage: 3, href: '/data-analytics' },
  { n: '10', name: 'Blockchain & Web3', tag: 'Contracts, wallets, audits, tokens', stage: 0, href: '/blockchain' },
  { n: '11', name: 'Managed IT & support', tag: 'Monitoring, helpdesk, incident response', stage: 4, href: '/managed-it' },
  { n: '12', name: 'Software development', tag: 'Custom software, end to end', stage: 0, href: '/software-development-company' },
  { n: '13', name: 'Hire resources', tag: 'Dedicated teams and staff augmentation', stage: 0, href: '/hire' },
];

export const featuredWork = [
  { n: '01', name: 'Skydo', sector: 'Fintech', body: 'Cross-border payments for exporters. App, web and admin built around a ledger that has to reconcile to the cent.', img: '/img/cs/skydo/Skydo1.png', url: '/case-study/skydo', stack: ['React', 'Node', 'AWS'] },
  { n: '02', name: 'Eka Care', sector: 'Healthcare', body: 'Patient records and telemedicine at national scale, with the consent and audit model the category demands.', img: '/img/cs/eka.care/eka.care2.png', url: '/case-study/ekacare', stack: ['Flutter', 'Python', 'Azure'] },
  { n: '03', name: 'Snitch', sector: 'E-commerce', body: 'Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.', img: '/img/cs/snitch/snitch1.png', url: '/case-study/snitch', stack: ['Next.js', 'Postgres', 'Redis'] },
  { n: '04', name: 'Graphy', sector: 'Edtech', body: 'Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.', img: '/img/cs/graphy/graphy1.png', url: '/case-study/graphy', stack: ['React', 'Node', 'GCP'] },
  { n: '05', name: 'MILKRUN', sector: 'Quick commerce', body: 'Grocery delivery with rider dispatch and live tracking, engineered for sub-ten-minute promises.', img: '/img/cs/milkrun/milkrun1.png', url: '/case-study/milkrun', stack: ['React Native', 'Kubernetes', 'Maps'] },
  { n: '06', name: 'Airwallex', sector: 'Fintech', body: 'Global business accounts and FX. Interfaces and services for money moving across borders.', img: '/img/cs/airwallex/AirWallex4.png', url: '/case-study/airwallex', stack: ['TypeScript', 'Java', 'AWS'] },
];

export const stats = [
  { value: 100, suffix: '+', display: '100+', label: 'Engineers on staff' },
  { value: 300, suffix: '+', display: '300+', label: 'Products shipped' },
  { value: 10, suffix: '+', display: '10+', label: 'Industries served' },
  { value: 4, suffix: '', display: '4', label: 'Countries, one team' },
];

export const pillars = [
  { n: '01', title: 'Strategy', body: 'We start by finding the version of the product that is worth building, then price it honestly.' },
  { n: '02', title: 'Design', body: 'Research, flows and interface systems delivered as design your engineers can actually build.' },
  { n: '03', title: 'Engineering', body: 'Senior people writing production code from week one. No juniors hidden behind an account manager.' },
  { n: '04', title: 'Scale', body: 'The infrastructure, monitoring and support to keep it running long after launch week.' },
];

export const processSteps = [
  { n: '01', title: 'Discover', body: 'Paid discovery that turns a brief into architecture and a fixed number.' },
  { n: '02', title: 'Define', body: 'Scope, milestones and the tradeoffs written down before anyone commits.' },
  { n: '03', title: 'Design', body: 'Flows and interfaces prototyped against real constraints.' },
  { n: '04', title: 'Build', body: 'Two-week sprints, a demo at the end of each, a board open every day.' },
  { n: '05', title: 'Launch', body: 'Staged rollout with pipelines and monitoring already in place.' },
  { n: '06', title: 'Scale', body: 'Capacity that flexes and a team that stays past year one.' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/marioxsoftwares' },
  { label: 'Instagram', href: 'https://www.instagram.com/marioxsoftware' },
  { label: 'YouTube', href: 'https://www.youtube.com/@MarioxSoftware' },
];

// Organization structured data (real addresses, replaces the placeholder schema
// that the old _app.js shipped).
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mariox Software',
  url: 'https://www.marioxsoftware.com',
  logo: 'https://www.marioxsoftware.com/logo.png',
  email: 'admin@marioxsoftware.com',
  telephone: '+91-9599287045',
  founder: [
    { '@type': 'Person', name: 'Mohit Garg' },
    { '@type': 'Person', name: 'Rahul Garg' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9599287045',
    contactType: 'Customer Service',
    areaServed: 'Global',
    availableLanguage: 'English',
  },
  address: [
    { '@type': 'PostalAddress', streetAddress: '202, Assotech Business Cresterra, Tower-4, Sector 135', addressLocality: 'Noida', addressRegion: 'Uttar Pradesh', postalCode: '201301', addressCountry: 'IN' },
    { '@type': 'PostalAddress', streetAddress: '539 W Commerce St, Suite 5589', addressLocality: 'Dallas', addressRegion: 'TX', postalCode: '75208', addressCountry: 'US' },
    { '@type': 'PostalAddress', streetAddress: '2 Nichollii Ct', addressLocality: 'Wyndham Vale', addressRegion: 'VIC', postalCode: '3024', addressCountry: 'AU' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/marioxsoftwares',
    'https://www.facebook.com/Marioxsoftware',
    'https://www.instagram.com/marioxsoftware',
    'https://twitter.com/MarioxSoftwares',
    'https://www.youtube.com/@MarioxSoftware',
  ],
};
