// Copy and figures for the /app-development landing page, taken verbatim from
// the design file (mariox-code/app-development-page/index.html). Image paths
// point at /public, and the two animation iframes at /public/app-demo.

const CS = 'https://www.marioxsoftware.com/';

export const DEMO = '/app-demo/app-demos.html';
export const FILM = '/app-demo/brand-film.html';

// Digits allowed after each dial code: [min, max, adjective for the error].
export const PHONE_LEN = {
  '+91': [10, 10, 'Indian'], '+1': [10, 10, 'US / Canada'], '+44': [10, 10, 'UK'],
  '+61': [9, 9, 'Australian'], '+971': [9, 9, 'UAE'], '+966': [9, 9, 'Saudi'],
  '+974': [8, 8, 'Qatar'], '+965': [8, 8, 'Kuwait'], '+968': [8, 8, 'Oman'],
  '+973': [8, 8, 'Bahrain'], '+65': [8, 8, 'Singapore'], '+60': [9, 10, 'Malaysian'],
  '+64': [8, 10, 'New Zealand'], '+27': [9, 9, 'South African'], '+234': [10, 10, 'Nigerian'],
  '+254': [9, 9, 'Kenyan'], '+49': [10, 11, 'German'], '+33': [9, 9, 'French'],
  '+31': [9, 9, 'Dutch'], '+41': [9, 9, 'Swiss'], '+46': [7, 9, 'Swedish'],
  '+353': [9, 9, 'Irish'], '+34': [9, 9, 'Spanish'], '+39': [9, 10, 'Italian'],
  '+977': [10, 10, 'Nepali'], '+880': [10, 10, 'Bangladeshi'], '+94': [9, 9, 'Sri Lankan'],
};

export const DIAL_CODES = [
  ['+91', 'India +91'], ['+1', 'USA / Canada +1'], ['+44', 'UK +44'], ['+61', 'Australia +61'],
  ['+971', 'UAE +971'], ['+966', 'Saudi Arabia +966'], ['+974', 'Qatar +974'], ['+965', 'Kuwait +965'],
  ['+968', 'Oman +968'], ['+973', 'Bahrain +973'], ['+65', 'Singapore +65'], ['+60', 'Malaysia +60'],
  ['+64', 'New Zealand +64'], ['+27', 'South Africa +27'], ['+234', 'Nigeria +234'], ['+254', 'Kenya +254'],
  ['+49', 'Germany +49'], ['+33', 'France +33'], ['+31', 'Netherlands +31'], ['+41', 'Switzerland +41'],
  ['+46', 'Sweden +46'], ['+353', 'Ireland +353'], ['+34', 'Spain +34'], ['+39', 'Italy +39'],
  ['+977', 'Nepal +977'], ['+880', 'Bangladesh +880'], ['+94', 'Sri Lanka +94'],
].map(([v, l]) => ({ v, l }));

export const heroTrust = [
  { b: '300+', t: 'products shipped' },
  { b: '4.8★', t: 'from 138 Google reviews' },
  { b: 'AWS · Azure · GCP', t: 'certified' },
  { b: 'NDA', t: 'before the first call' },
];

export const heroBadges = [
  { t: 'AWS', s: 'Certified', c: '#9B968F' },
  { t: 'Azure', s: 'Certified', c: '#9B968F' },
  { t: 'Google Cloud', s: 'Certified', c: '#9B968F' },
  { t: 'Google', s: '4.8 ★ · 138', c: '#F04423' },
  { t: 'Clutch', s: 'Verified', c: '#9B968F' },
  { t: 'ISO 27001', s: 'Practices', c: '#9B968F' },
];

export const heroNeeds = ['iOS app', 'Android app', 'Flutter / React Native', 'App + admin panel', 'App redesign', 'AI features'];
export const heroBudgets = ['Under $25k', '$25k–$75k', '$75k–$150k', '$150k+', 'Not sure'];

// Clients with a site get their favicon; the rest get an orange initials tile.
export const logoWall = [
  ['Airwallex', 'airwallex.com'], ['Zeller', 'myzeller.com'], ['Kogan', 'kogan.com'],
  ['HotDoc', 'hotdoc.com.au'], ['Graphy', 'graphy.com'], ['MILKRUN', 'milkrun.com'],
  ['Snitch', 'snitch.co.in'], ['Fynd', 'fynd.com'], ['Testbook', 'testbook.com'],
  ['Skydo', 'skydo.com'], ['Teachmint', 'teachmint.com'], ['Learnosity', 'learnosity.com'],
  ['Eka Care', 'eka.care'], ['Lunar', 'lunar.app'], ['OnBuy', 'onbuy.com'],
  ['Fampay', 'fampay.in'], ['StockGro', 'stockgro.club'], ['Soldo', 'soldo.com'],
  ['Yonder', 'yonder.cards'], ['Sunstone', 'sunstone.in'], ['Cluey Learning', 'clueylearning.com.au'],
  ['Seneca Learning', 'senecalearning.com'], ['Jaypore', 'jaypore.com'], ['Onceit', 'onceit.co.nz'],
  ['Oda', 'oda.com'], ['NirogStreet', 'nirogstreet.com'], ['Healthengine', 'healthengine.com.au'],
  ['ZAVA', 'zavamed.com'], ['Livi', 'livi.co.uk'], ['Tend', 'hellotend.com'],
  ['Magicfinserv', 'magicfinserv.com'], ['EdTech Hub', 'edtechhub.org'], ['Weezy', ''],
  ['Zapp', ''], ['Voly', ''], ['Zupit', ''], ['Grokart', ''], ['Number Dekho', ''],
  ['Broopi', ''], ['Milanoa', ''], ['Starstell', ''], ['Vimal Wires', ''],
].map(([name, d]) => ({
  name,
  icon: d ? `url("https://www.google.com/s2/favicons?domain=${d}&sz=128")` : 'none',
  bgc: d ? '#FFFFFF' : '#F04423',
  ini: d ? '' : name.split(' ').map((x) => x[0]).join('').slice(0, 2).toUpperCase(),
}));

export const brands = ['Airwallex', 'Zeller', 'Kogan', 'Lunar', 'Soldo', 'HotDoc', 'Healthengine', 'Fynd', 'Testbook', 'Teachmint', 'OnBuy', 'Livi', 'Skydo', 'Learnosity'];

export const stats = [
  { v: '100+', l: 'Engineers on staff' },
  { v: '300+', l: 'Products shipped' },
  { v: '42', l: 'Published case studies' },
  { v: '4', l: 'Countries, one team' },
];

export const teamFacts = [
  { v: '100+', l: 'In-house engineers', c: '#F04423' },
  { v: '4', l: 'Offices', c: '#F4F1EA' },
  { v: '2016', l: 'Founded', c: '#F4F1EA' },
  { v: '1', l: 'Team on your product', c: '#F4F1EA' },
];

export const appIncluded = [
  { n: '01', t: 'Native-feel UI', b: 'Interfaces designed for each platform, tested on real devices.' },
  { n: '02', t: 'Backend & APIs', b: 'The services, database and auth the app depends on.' },
  { n: '03', t: 'Admin panel', b: 'Users, orders, content and support tools for your team.' },
  { n: '04', t: 'Payments', b: 'UPI, cards, wallets and subscriptions, reconciled.' },
  { n: '05', t: 'Push & analytics', b: 'Notifications, events and funnels from day one.' },
  { n: '06', t: 'Store release', b: 'App Store and Play Store submission, then updates.' },
];

export const appPlatforms = [
  { n: 'iOS', t: 'Swift / SwiftUI', b: 'For products where iPhone experience matters most.' },
  { n: 'Android', t: 'Kotlin', b: 'For device features and the widest reach in India.' },
  { n: 'Cross-platform', t: 'Flutter / React Native', b: 'One codebase, both stores, faster to market.' },
  { n: 'After launch', t: 'Support & iteration', b: 'Crash monitoring, OS updates and new releases.' },
];

// The "build an app like…" tabs. `demo` is the scene the animation plays.
export const apps = [
  { name: 'AstroTalk', cat: 'Astrology', demo: 'astrotalk', title: 'Astrology and consultation platforms', body: 'Kundli and horoscope engines, live astrologer consultations and per-minute billing, built to handle peak-hour demand and secure transactions.', features: ['Audio & video calls', 'Live chat', 'Per-minute billing', 'Wallet', 'Astrologer onboarding', 'Admin console'], proof: 'Real-time sessions + payments' },
  { name: 'Uber', cat: 'Ride-hailing', demo: 'uber', title: 'Ride-hailing and on-demand mobility', body: 'Rider, driver and operations apps on one dispatch core, with live tracking, surge logic and payouts that reconcile.', features: ['Live tracking', 'Dispatch engine', 'Surge pricing', 'Driver payouts', 'Ratings', 'Ops dashboard'], proof: 'Related: Number Dekho' },
  { name: 'Zomato', cat: 'Food delivery', demo: 'zomato', title: 'Food delivery and restaurant marketplaces', body: 'Customer, restaurant and rider apps with menu management, order routing and delivery-time promises the system can actually keep.', features: ['Restaurant panel', 'Order routing', 'Rider app', 'Promotions', 'Reviews', 'Settlements'], proof: 'Related: Zupit, Weezy' },
  { name: 'Blinkit', cat: 'Quick commerce', demo: 'blinkit', title: 'Quick commerce and dark-store delivery', body: 'Store-level inventory, slot honesty and rider dispatch engineered for ten-minute delivery at scale.', features: ['Dark-store inventory', 'Picking app', 'Rider dispatch', 'Slot logic', 'Substitutions', 'Live ETA'], proof: 'Related: MILKRUN, Grokart, Zapp' },
  { name: 'Practo', cat: 'Healthcare', demo: 'practo', title: 'Telemedicine and doctor booking', body: 'Patient apps, provider platforms and video consultation with consent, audit trails and practice-system sync built in from day one.', features: ['Doctor discovery', 'Booking', 'Video consult', 'E-prescriptions', 'Health records', 'Clinic panel'], proof: 'Related: Eka Care, HotDoc, Healthengine' },
  { name: 'Udemy', cat: 'Edtech', demo: 'udemy', title: 'Online learning and course platforms', body: 'Course delivery, live classes, assessment and creator payouts, instrumented so completion rates are visible, not guessed.', features: ['Video courses', 'Live classes', 'Quizzes', 'Certificates', 'Creator payouts', 'Analytics'], proof: 'Related: Graphy, Testbook, Teachmint' },
  { name: 'Airbnb', cat: 'Rentals', demo: 'airbnb', title: 'Rental and booking marketplaces', body: 'Two-sided listings, availability calendars, payments held in escrow and the trust mechanics that make strangers transact.', features: ['Listings', 'Availability calendar', 'Escrow payments', 'Host dashboard', 'Reviews', 'Dispute handling'], proof: 'Marketplace engineering' },
  { name: 'Netflix', cat: 'OTT & streaming', demo: 'netflix', title: 'OTT and video streaming platforms', body: 'Adaptive streaming, subscriptions, DRM and recommendations across mobile, web and TV apps.', features: ['Adaptive streaming', 'DRM', 'Subscriptions', 'Recommendations', 'Smart TV apps', 'Content CMS'], proof: 'Streaming + subscriptions' },
];

export const industries = [
  ['Ride-hailing & taxi', 'Mobility', 'Rider app, driver app, live dispatch and fare engine', '', 'Watch the demo', `${DEMO}?app=uber`, '/assets/ai/robot-workflow-office.jpg'],
  ['Grocery & quick commerce', 'Delivery', 'Customer app, picker app, rider app and store inventory', 'MILKRUN · Zupit · Grokart', 'See the work', '/work', `${CS}img/cs/milkrun/milkrun1.png`],
  ['Food delivery', 'Delivery', 'Ordering app, restaurant panel and rider tracking', '', 'Watch the demo', `${DEMO}?app=zomato`, `${CS}img/cs/volygroup/volygroup2.png`],
  ['Fintech & payments', 'Finance', 'Wallets, business accounts, cards and payouts', 'Airwallex · Zeller · Skydo', 'See the work', '/industries/fintech', `${CS}img/cs/skydo/Skydo1.png`],
  ['Healthcare', 'Health', 'Appointments, telemedicine and patient records', 'HotDoc · Eka Care', 'See the work', '/industries/healthcare', `${CS}img/cs/hotdoc/hotdoc1.png`],
  ['Education', 'Learning', 'Course apps, live classes and test prep', 'Graphy · Testbook · Teachmint', 'See the work', '/industries/education', `${CS}img/cs/graphy/graphy1.png`],
  ['E-commerce & fashion', 'Retail', 'Shopping apps that survive a sale or a drop', 'Snitch · Kogan · OnBuy', 'See the work', '/industries/ecommerce', `${CS}img/cs/snitch/snitch1.png`],
  ['AI-powered apps', 'AI', 'Copilots, voice, vision and recommendations inside the app', 'Built on your data', 'Explore AI', '/ai', '/assets/ai/robot-arm-brain.jpg'],
].map((r, k) => ({ n: String(k + 1).padStart(2, '0'), name: r[0], tag: r[1], apps: r[2], proof: r[3] || 'Example build', cta: r[4], href: r[5], bg: `url("${r[6]}")` }));

export const aiServices = [
  { n: '01', t: 'AI assistants & copilots', b: 'Chat and voice assistants inside your app or support desk, grounded in your own data and handing off to humans cleanly.' },
  { n: '02', t: 'Retrieval over your documents', b: 'Search and answers across contracts, manuals and tickets, with sources shown so people can check the answer.' },
  { n: '03', t: 'Workflow automation & agents', b: 'Agents that read, classify, route and act on invoices, emails and forms, with approval steps where it matters.' },
  { n: '04', t: 'Custom models & fine-tuning', b: 'Classification, forecasting and recommendation models trained on your data when an off-the-shelf model is not enough.' },
  { n: '05', t: 'Evaluation & guardrails', b: 'Test sets, accuracy tracking, content filters and PII handling, so you know how it performs before and after launch.' },
  { n: '06', t: 'AI cost & infrastructure', b: 'Model selection, caching and hosting on AWS, Azure or GCP that keep per-request cost predictable at scale.' },
];

export const aiStack = ['OpenAI', 'Anthropic Claude', 'Gemini', 'Llama', 'Azure OpenAI', 'AWS Bedrock', 'LangChain', 'Vector DBs'];

export const howCards = [
  { n: '01', t: 'Discovery workshops', b: 'A week with your team to agree what goes in version one and what it costs.', bg: 'url("/assets/company/office-meeting-room.jpg")', alt: 'Client workshop' },
  { n: '02', t: 'Demos every two weeks', b: 'You see the app on your phone at the end of every sprint, not at the end of the project.', bg: 'url("/assets/company/team-office-seated.jpg")', alt: 'Sprint demo' },
  { n: '03', t: 'Training and handover', b: 'Your team learns to run, release and support the app before we step back.', bg: 'url("/assets/company/team-offsite-event.jpg")', alt: 'Training session' },
];

export const stories = [
  { src: '/work', length: '0:16', quote: 'They brought our vision to life with a modern, user-friendly UI/UX design and delivered the mobile app exactly as we had imagined — on time and with top-notch quality.', name: 'Sangeeta Chaudhary', role: 'Google review' },
  { src: '/work', length: '0:16', quote: 'Their honest, reliable, and hardworking team delivers a flawless product beyond expectations.', name: 'Akhil Malhotra', role: 'Client' },
  { src: '/work', length: '0:16', quote: '…he displayed clear understanding of the project, deliverables which made me initiate project with Mariox Software. I really appreciate him and his team.', name: 'Startup founder', role: 'Trustpilot review' },
];

export const cases = [
  { name: 'MILKRUN', sector: 'Quick commerce app', region: 'Australia', scope: 'App + web + admin', img: `${CS}img/cs/milkrun/milkrun1.png`, body: 'Grocery delivery with rider dispatch and live tracking, engineered for a sub-ten-minute promise.' },
  { name: 'Fampay', sector: 'Fintech app', region: 'India', scope: 'App + web + admin', img: `${CS}img/cs/famapp/famapp4.png`, body: 'A payments app for teenagers, with UPI, cards and parental controls on one account.' },
  { name: 'Graphy', sector: 'Creator app', region: 'India', scope: 'App + web', img: `${CS}img/cs/graphy/graphy1.png`, body: 'Course delivery, live cohorts and creator payouts across web and mobile.' },
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

export const leaders = [
  ['Rahul Garg', 'Founder', 'Engineering & vision', 'Started Mariox in 2016. Still reviews the architecture of every major build.', '/assets/company/rahul-garg-crop.jpg', 'center 20%'],
  ['Tripta Mittal', 'Co-founder', 'AI', 'Leads the AI practice. Turns agents, copilots and models into systems that run in production, not demos.', '/assets/company/tripta-mittal-crop.jpg', 'center 20%'],
  ['Saswat Sahu', 'Co-founder', 'Product', 'The product mind behind our builds. Shapes briefs into roadmaps, flows and products people use every day.', '/assets/company/saswat-sahu.jpg', 'center 20%'],
  ['Akash Bhardwaj', 'Business Head', 'Business & partnerships', 'Leads growth and client partnerships. The first call for every new client, and the one who keeps it simple.', '/assets/company/akash-bhardwaj.jpg', 'center 20%'],
].map((r) => ({ name: r[0], role: r[1], spec: r[2], bio: r[3], bg: `url("${r[4]}")`, pos: r[5] }));

export const offices = [
  ['Noida', 'Headquarters · India', 'Tower 4, Assotech Business Cresterra, 202, Sector 135, Noida, Uttar Pradesh 201304', 'Asia/Kolkata', 'IST'],
  ['Bengaluru', 'India', 'Block L, Embassy TechVillage, Outer Ring Rd, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103', 'Asia/Kolkata', 'IST'],
  ['Dallas', 'Texas · USA', '539 W Commerce St, Suite 5589, Dallas, TX 75208, United States', 'America/Chicago', 'CT'],
  ['Melbourne', 'Victoria · Australia', '2 Nichollii Ct, Wyndham Vale VIC 3024, Australia', 'Australia/Melbourne', 'AET'],
].map((o, k) => ({ n: String(k + 1).padStart(2, '0'), city: o[0], region: o[1], addr: o[2], tz: o[3], tzLabel: o[4] }));

export const enterpriseBudgets = ['$25k – $75k', '$75k – $150k', '$150k – $500k', '$500k+', 'Not decided'];
export const enterpriseTimelines = ['This quarter', 'Next quarter', 'This year', 'Exploring'];

export const faq = [
  { q: 'How much does an app cost?', a: 'It depends on screens, integrations and platforms. After a short call we send a fixed-scope estimate with a range for each feature, so you can decide what goes into version one.' },
  { q: 'How long does it take to build an app?', a: 'A focused first version usually takes 10 to 16 weeks after discovery, including backend, admin panel and store release.' },
  { q: 'Native or Flutter / React Native?', a: 'Cross-platform suits most products and reaches both stores faster. We recommend native when the app depends on heavy device features or platform-specific performance.' },
  { q: 'Do you publish the app to the stores?', a: 'Yes. We handle App Store and Play Store submission from your accounts, and the releases after it.' },
  { q: 'Who owns the code?', a: 'You do, from the first commit. Repositories, store accounts and infrastructure stay in your name.' },
];
