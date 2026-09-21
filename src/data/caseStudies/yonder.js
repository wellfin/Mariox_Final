const caseStudy = {
  slug: 'yonder',
  companyName: 'Yonder',
  tagline: '— Credit & Lifestyle Finance',
  metaTags: [
    'UK',
    'FinTech',
    'App + Web',
  ],
  heroImage: '/img/cs/yonder/yonder.png',
  galleryImages: [
    '/img/cs/yonder/yonder1.png',
    '/img/cs/yonder/yonder2.png',
    '/img/cs/yonder/yonder3.png',
    '/img/cs/yonder/yonder4.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Yonder combines credit services with lifestyle benefits, which meant Mariox had to design a product that feels like a straightforward consumer app on the surface while managing genuinely complex financial logic underneath. We worked across customer-facing financial workflows — onboarding, account management, credit activity, payments — as well as the lifestyle benefits layer and the operational systems supporting both. The challenge was less about any single feature and more about making credit decisions, transaction handling and benefit redemption feel like one coherent product rather than two systems stitched together.',
      ],
      list: [
        'Customer onboarding',
        'Account',
        'Credit workflows',
        'Transactions',
        'Payments',
        'Lifestyle benefits',
        'Notifications',
        'Support',
        'Administration',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Financial decision-making — credit checks, limits, repayments — needed to remain tightly controlled and auditable, while the customer-facing experience had to stay simple enough for everyday use. These two requirements pull in different directions: the more rigorous the financial logic, the easier it is for that complexity to leak into the interface and slow users down. Yonder\'s lifestyle benefits added a further layer, since benefit eligibility and redemption often depend on the same underlying account and credit data. Keeping the experience approachable meant finding a way to enforce strict financial rules without exposing their complexity directly to the customer.',
      ],
      list: [
        'Credit decision accuracy',
        'Regulatory-grade auditability',
        'Simple customer experience',
        'Benefit eligibility tied to account data',
        'Consistent behavior across features',
        'Avoiding logic leaking into the UI',
      ],
    },
    {
      title: 'Mariox Approach',
      paragraphs: [
        'We separated financial business logic from the presentation layer so that changes to financial rules would not require rebuilding the complete customer application. Credit logic, limits and eligibility rules lived in the backend as their own layer, exposed to the app and web experiences through well-defined APIs rather than being duplicated in the frontend. This meant a change to how credit limits are calculated, or how a benefit is redeemed, could be made once in the backend and would apply consistently everywhere it mattered, without touching the customer-facing code.',
      ],
      list: [
        'Backend-owned financial logic',
        'API-driven frontend',
        'Single source of truth for credit rules',
        'Decoupled benefit redemption logic',
        'Consistent enforcement across surfaces',
        'Independent release cycles for app vs. rules',
      ],
    },
    {
      title: 'Security',
      paragraphs: [
        'Because Yonder sits at the intersection of credit and payments, security had to be built into the architecture rather than layered on top of it. Authentication, authorization and access to sensitive financial data were enforced from the backend, so protections did not depend solely on how the frontend happened to be built. Role-based access controls ensured that only the right systems and services could act on credit and account data, and every sensitive operation was handled through protected, auditable APIs.',
      ],
      list: [
        'Authentication',
        'Authorization',
        'API protection',
        'Role-based access',
        'Sensitive data handling',
        'Auditable operations',
        'Secure third-party communication',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result is a consumer-friendly financial platform with a backend structure capable of supporting evolving financial and lifestyle services. Customers get a credit and benefits experience that feels simple and fast, while the underlying architecture keeps decisioning, compliance and data handling properly controlled. For Yonder, this means new credit products or lifestyle partnerships can be added without compromising the rigor of the financial logic that sits underneath the consumer experience.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Yonder Case Study | Mariox',
  seoDescription: 'How Mariox built Yonder\'s credit and lifestyle finance platform, separating financial business logic from a simple consumer-facing experience.',
};

export default caseStudy;
