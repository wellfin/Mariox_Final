const caseStudy = {
  slug: 'soldo',
  companyName: 'Soldo',
  tagline: '— Corporate Spending Platform',
  metaTags: [
    'UK',
    'FinTech',
    'App + Web',
  ],
  heroImage: '/img/cs/soldo/soldo.png',
  galleryImages: [
    '/img/cs/soldo/soldo1.png',
    '/img/cs/soldo/soldo2.png',
    '/img/cs/soldo/soldo4.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Soldo is a corporate spending platform designed to give companies control over employee expenses without slowing teams down with manual processes. Mariox worked across both the employee-facing application and the business administration platform, building a system where individual card and spending activity connects directly to company-wide policies, budgets and approval flows. The aim was to make everyday spending simple for employees while giving finance and management teams the oversight they need to keep spending within policy. This meant designing the employee experience and the administrative controls as two views into the same underlying data, rather than as separate, loosely connected products.',
      ],
      list: [
        'Employees',
        'Cards',
        'Spending',
        'Transactions',
        'Policies',
        'Approvals',
        'Reports',
        'Administration',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Every company that uses Soldo can have very different spending rules — different limits by role or department, different approval chains, different categories that need tracking for accounting or tax purposes. A system built around one fixed set of rules would work for some customers and fail for others, so the platform needed real flexibility rather than a single hard-coded spending model. This flexibility had to be balanced against consistency: however customizable the rules became, the underlying spending, approval and reporting logic still needed to behave predictably so finance teams could trust the numbers. Getting this balance right meant separating what the rules are from how spending is processed, so policy changes would never require touching the core transaction logic.',
      ],
      list: [
        'Variable spending limits',
        'Department-specific rules',
        'Custom approval chains',
        'Expense categorization',
        'Policy changes without redeployment',
        'Consistent transaction processing',
        'Auditable spending history',
      ],
    },
    {
      title: 'Solution',
      paragraphs: [
        'Mariox introduced configurable spending policies that could be defined and adjusted directly through the platform, rather than being hard-coded into the application. Limits, categories, employee permissions, approval workflows and department-level controls were all modeled as data the platform could read and enforce, not logic baked into the app itself. This meant a company could change its spending rules — tightening a limit, adding an approval step, restructuring departments — without waiting on a new release. It also meant the same core application could serve companies with very different policy structures, since the differences lived in configuration rather than in separate code paths.',
      ],
      list: [
        'Spending limits',
        'Categories',
        'Employee permissions',
        'Approval workflows',
        'Department controls',
        'Policy templates',
        'Real-time enforcement',
        'Audit trail',
      ],
    },
    {
      title: 'Mobile',
      paragraphs: [
        'The mobile application focused on what an employee actually needs day to day: visibility into their card, real-time spending information and enough context to understand what they can and can\'t spend against. Rather than exposing the full policy engine, the app surfaced only the information relevant to that individual — their limits, recent transactions and any approvals pending on their spending. This kept the day-to-day experience lightweight even though a much more complex policy system was operating behind the scenes.',
      ],
      list: [
        'Card details',
        'Spending limits',
        'Transaction history',
        'Notifications',
        'Approval status',
        'Profile & account info',
        'Category breakdown',
      ],
    },
    {
      title: 'Web',
      paragraphs: [
        'The web platform was built for finance and management teams who need a company-wide view rather than an individual one. From here, teams could manage employees, configure and adjust spending policies, review transactions across the organization, and generate the reports needed for accounting and oversight. Because the policy engine lived in shared backend logic rather than in the interface itself, changes made through the web platform took effect consistently across every employee\'s app without any extra engineering work.',
      ],
      list: [
        'Employee management',
        'Policy configuration',
        'Transaction review',
        'Department controls',
        'Approval oversight',
        'Reporting & exports',
        'Administration',
        'Audit visibility',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result is a flexible corporate spending platform where financial policies can evolve without requiring constant application redevelopment. Companies can adapt their spending rules, approval chains and department structures as their organization changes, while employees continue to get a simple, consistent card and spending experience. For Soldo, this separation between policy and product means new customer requirements can usually be met through configuration rather than a new release cycle, keeping the platform both flexible for finance teams and dependable for everyday users.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Soldo Case Study | Mariox',
  seoDescription: 'How Mariox built Soldo\'s corporate spending platform with configurable spending policies across employee app and business admin web.',
};

export default caseStudy;
