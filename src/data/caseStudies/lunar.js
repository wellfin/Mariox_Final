const caseStudy = {
  slug: 'lunar',
  companyName: 'Lunar',
  tagline: '— Digital Banking Platform',
  metaTags: [
    'Denmark',
    'Digital Banking',
    'App + Web',
  ],
  heroImage: '/img/cs/lunar/lunar.png',
  galleryImages: [
    '/img/cs/lunar/luner1.png',
    '/img/cs/lunar/luner2.png',
    '/img/cs/lunar/luner3.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Lunar required a modern banking ecosystem covering both the customer-facing banking experience and the operational tooling needed to manage it. Mariox worked across digital onboarding, account and transaction management, payments and the administrative systems used internally to support customers and monitor the platform. The goal was to give customers a fast, contemporary digital banking experience while giving the operations team the visibility and controls needed to run a regulated financial product responsibly.',
      ],
      list: [
        'Digital onboarding',
        'Accounts',
        'Transactions',
        'Payments',
        'Notifications',
        'Customer management',
        'Reports',
        'Administration',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'A digital bank has to feel effortless to its customers — quick onboarding, clear balances, simple transfers — while every one of those actions sits on top of sensitive financial operations that require strict control. The challenge was maintaining that contrast: keeping the customer experience light and fast without loosening the rigor applied to authentication, permissions and transaction handling behind it. Any shortcut taken to simplify the interface risked weakening the controls the platform depends on, so the two priorities had to be designed together rather than traded off against each other.',
      ],
      list: [
        'Fast, simple onboarding',
        'Strict authentication requirements',
        'Sensitive transaction handling',
        'Permission control at scale',
        'Consistent behavior under load',
        'Balancing simplicity with compliance',
      ],
    },
    {
      title: 'Mariox Solution',
      paragraphs: [
        'Mariox incorporated security and permissions into the core architecture from the start rather than adding them as a later layer. Authentication, session handling and role-based access were treated as foundational parts of the system that every feature had to be built on top of, not optional checks bolted on afterward. This meant every sensitive action — from initiating a transaction to accessing customer data — passed through the same consistent authorization path, making the platform\'s behavior predictable and its access controls easier to reason about and audit.',
      ],
      list: [
        'Authentication',
        'Authorization',
        'Session management',
        'Role-based access',
        'Transaction controls',
        'Activity tracking',
        'Secure APIs',
        'Consistent enforcement across features',
      ],
    },
    {
      title: 'QA',
      paragraphs: [
        'Testing covered authentication, permissions, financial workflows, failure scenarios and administrative access rather than focusing only on the happy path. We validated that transactions behaved correctly under normal conditions and also that the system responded sensibly to failed logins, expired sessions, invalid permissions and interrupted transactions. Administrative access was tested with the same rigor as customer-facing flows, since a gap in internal tooling can be just as damaging as one in the customer app.',
      ],
      list: [
        'Functional testing',
        'Authentication & session testing',
        'Permission & role testing',
        'Transaction workflow testing',
        'Failure & edge-case scenarios',
        'Administrative access testing',
        'Regression testing',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result is a clean digital banking experience supported by a controlled operational backend. Customers get the fast, simple interactions expected of a modern digital bank, while the platform underneath enforces the authentication, permissioning and transaction controls a regulated financial product requires. For Lunar, this means the customer-facing simplicity isn\'t achieved by cutting corners on control — it\'s the product of a backend built specifically to carry that complexity so the interface doesn\'t have to.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Lunar Case Study | Mariox',
  seoDescription: 'How Mariox built Lunar\'s digital banking platform with security and permissions incorporated into the core architecture.',
};

export default caseStudy;
