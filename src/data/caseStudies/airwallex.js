const caseStudy = {
  slug: 'airwallex',
  companyName: 'Airwallex',
  tagline: '— Global Business Payments',
  metaTags: [
    'Australia / Global',
    'FinTech',
    'App + Web',
  ],
  heroImage: '/img/cs/airwallex/AirWallex.png',
  galleryImages: [
    '/img/cs/airwallex/AirWallex1.png',
    '/img/cs/airwallex/AirWallex2.png',
    '/img/cs/airwallex/AirWallex3.png',
    '/img/cs/airwallex/AirWallex4.png',
    '/img/cs/airwallex/AirWallex5.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Airwallex needed an international financial ecosystem capable of supporting business payments, multiple currencies and market-specific requirements from day one. Rather than treating every new market as a one-off engineering effort, Mariox focused on creating a modular product structure that could support expansion without repeated rework. The goal was a foundation where new currencies, payment rails and business workflows could be added through configuration instead of separate parallel builds. This meant approaching the platform less as a single application and more as a set of reusable business capabilities that could be assembled differently for different markets and customer segments.',
      ],
      list: [
        'Business accounts',
        'Payments',
        'Transactions',
        'Multi-currency workflows',
        'User management',
        'Reports',
        'Notifications',
        'Integrations',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Different markets can carry very different financial and operational requirements — from the currencies and payment methods supported to the compliance checks, reporting formats and business rules that apply locally. Building every market as an independent, hand-crafted implementation creates long-term maintenance problems: fixes and improvements have to be repeated across multiple codebases, and small inconsistencies between markets compound into a growing support burden. The challenge for Mariox was designing a system flexible enough to absorb this variation without letting the core application balloon into unmanageable complexity. At the same time, the platform still needed to behave predictably and consistently for a global business customer operating across several regions at once.',
      ],
      list: [
        'Market-specific payment rails',
        'Multi-currency handling',
        'Regional compliance variation',
        'Divergent reporting requirements',
        'Duplicated logic across markets',
        'Consistency across regions',
        'Long-term maintainability',
      ],
    },
    {
      title: 'Mariox Approach',
      paragraphs: [
        'To address this, Mariox designed the major business workflows — accounts, payments, transactions, reporting — as configurable components built around a common backend foundation rather than as market-specific code paths. Shared business logic lived in one place, while market-specific behavior was expressed through configuration and controlled extension points. This allowed the platform to onboard new currencies, payment methods or regional rules without re-implementing the underlying transaction and account logic each time. External dependencies were isolated behind clear API boundaries so that changes to third-party or regional services would not ripple through the wider system.',
      ],
      list: [
        'Modular architecture',
        'API abstraction',
        'Configurable workflows',
        'Centralized business logic',
        'External service isolation',
        'Scalable infrastructure',
        'Reusable business components',
        'Controlled extension points',
      ],
    },
    {
      title: 'App & Web',
      paragraphs: [
        'The application was built around the everyday actions a business user needs — checking balances, reviewing recent activity, initiating and tracking payments — kept fast and simple even as the underlying platform supported many markets and currencies behind the scenes. The web platform complemented this by giving finance and operations teams deeper financial and administrative controls: managing accounts, reviewing transactions in detail, configuring settings and handling exceptions that don\'t belong in a lightweight mobile flow. Together, the two surfaces kept day-to-day usage simple while more complex administrative and financial work happened where it made sense.',
      ],
      list: [
        'Account overview',
        'Payment initiation',
        'Transaction tracking',
        'Multi-currency balances',
        'Notifications',
        'Administrative controls',
        'Reporting access',
        'User & permission management',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result is a platform architecture capable of supporting additional financial services and markets without rebuilding the entire system each time. New currencies, payment methods and regional requirements can be layered onto the existing foundation through configuration rather than duplication, keeping engineering effort proportional to what\'s actually new about each market. For Airwallex, this means the product can expand its global footprint while keeping a single, coherent codebase underneath — reducing long-term maintenance cost and letting the team move faster as the business grows into new regions.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Airwallex Case Study | Mariox',
  seoDescription: 'How Mariox designed a modular global business payments architecture for Airwallex across app, web and backend, built to scale across markets.',
};

export default caseStudy;
