const caseStudy = {
  slug: 'skydo',
  companyName: 'Skydo',
  tagline: '— Cross-Border Payments Platform',
  metaTags: [
    'India',
    'FinTech',
    'Mobile App + Web + Admin',
  ],
  heroImage: '/img/cs/skydo/Skydo.png',
  galleryImages: [
    '/img/cs/skydo/Skydo1.png',
    '/img/cs/skydo/Skydo2.png',
    '/img/cs/skydo/Skydo3.png',
    '/img/cs/skydo/Skydo4.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Skydo is a cross-border payment platform designed to make international transactions simpler for businesses and professionals. Mariox worked across the customer-facing application, web platform and backend ecosystem, focusing on creating a smooth payment experience while keeping the operational and transaction-management side of the platform structured and reliable.',
      ],
      list: [
        'Customer onboarding',
        'Payment initiation',
        'Transaction tracking',
        'Customer account management',
        'Notifications',
        'Admin operations',
        'Transaction monitoring',
        'Reporting',
        'Backend APIs',
        'Third-party service integration',
      ],
    },
    {
      title: 'The Challenge',
      paragraphs: [
        'The biggest challenge was hiding the complexity of international payments from the end user. A transaction can move through several states, receive delayed responses from external services or require operational intervention. The customer, however, simply expects to know whether the payment is successful, processing or requires action.',
      ],
      list: [
        'Multiple transaction states',
        'External API dependencies',
        'Payment failures and retries',
        'Transaction reconciliation',
        'Synchronization between app and admin',
        'Secure financial data handling',
        'Operational visibility',
      ],
    },
    {
      title: 'What Mariox Built',
      paragraphs: [
        'Mariox approached the product as a complete ecosystem rather than developing the mobile application separately from the operational platform. The customer application was connected to a centralized backend responsible for transaction processing, account management and communication with external services. The web platform gave the internal team visibility into customers, transactions and operational exceptions.',
      ],
      list: [
        'Mobile application',
        'Customer web experience',
        'Admin dashboard',
        'Backend API layer',
        'Transaction management',
        'Notification system',
        'Reporting layer',
        'Integration layer',
      ],
    },
    {
      title: 'Mobile Application',
      paragraphs: [
        'The mobile application was designed around the actual customer journey. Instead of exposing the complexity of the payment infrastructure, users were given a clear flow from onboarding to payment initiation and transaction tracking. Statuses, notifications and account information were presented in a simple way so users could understand what was happening without needing technical knowledge.',
      ],
      list: [
        'Registration & onboarding',
        'Login & authentication',
        'Profile management',
        'Payment workflows',
        'Transaction history',
        'Transaction status',
        'Notifications',
        'Account information',
        'Support-related workflows',
      ],
    },
    {
      title: 'Web & Admin Platform',
      paragraphs: [
        'The web platform was built for the operational team. While customers needed simplicity, the internal team needed much deeper visibility. The dashboard therefore provided access to customer records, transactions, statuses, operational actions, reports and other controls required to manage the platform.',
      ],
      list: [
        'Customer management',
        'Transaction monitoring',
        'Status management',
        'Operational review',
        'Reports',
        'User management',
        'Activity tracking',
        'Configuration controls',
      ],
    },
    {
      title: 'Technical Challenge',
      paragraphs: [
        'One of the most important technical challenges was maintaining a consistent transaction state across different systems. A payment could be initiated in the mobile application while the actual processing happened through external services. This meant the backend needed to remain the central source of truth.',
        'We designed the transaction lifecycle so that every important state could be tracked and reflected consistently across the customer application and internal platform.',
      ],
    },
    {
      title: 'How We Solved It',
      paragraphs: [
        'Instead of allowing the application to directly depend on multiple external services, we placed the core business logic within the backend layer. External integrations were handled through controlled APIs, while transaction processing, status updates and customer-facing responses were managed centrally.',
      ],
      list: [
        'Centralized transaction lifecycle',
        'Controlled API integrations',
        'Retry handling',
        'Error handling',
        'Background processing',
        'Transaction logging',
        'Status synchronization',
        'Role-based access',
      ],
    },
    {
      title: 'Security & Data Protection',
      paragraphs: [
        'Since the platform operates in the financial domain, security was considered throughout the product lifecycle. Authentication, authorization, sensitive data handling and administrative access were controlled from the backend rather than depending only on frontend restrictions.',
      ],
      list: [
        'Secure authentication',
        'Role-based permissions',
        'API authorization',
        'Protected administrative operations',
        'Controlled data access',
        'Activity tracking',
        'Secure third-party communication',
      ],
    },
    {
      title: 'QA & Testing',
      paragraphs: [
        'Testing was performed across the complete transaction lifecycle rather than only testing successful payments. We considered failed transactions, delayed responses, incorrect inputs, duplicate requests, API failures and different user roles.',
      ],
      list: [
        'Functional testing',
        'API testing',
        'Integration testing',
        'Regression testing',
        'Role & permission testing',
        'Negative scenarios',
        'Device testing',
        'Performance validation',
      ],
    },
    {
      title: 'Infrastructure & Scalability',
      paragraphs: [
        'The platform was structured so that the customer application, transaction processing, background operations and reporting workloads could be handled independently where required. This reduces unnecessary pressure on the primary application layer and provides room for the platform to grow as transaction volume increases.',
      ],
      list: [
        'Cloud deployment',
        'API scalability',
        'Database optimization',
        'Media/file handling',
        'Background processing',
        'Monitoring',
        'Environment management',
        'Production deployment',
      ],
    },
    {
      title: 'The Outcome',
      paragraphs: [
        'The final product provided customers with a simple cross-border payment experience while giving the internal team the visibility and control required to operate the platform. The biggest achievement from an engineering perspective was keeping the customer experience simple while managing the underlying financial complexity through a structured backend and operational ecosystem.',
      ],
    },
  ],
  technology: [
    {
      label: 'Mobile',
      value: 'React Native',
    },
    {
      label: 'Web',
      value: 'React.js',
    },
    {
      label: 'Backend',
      value: 'Node.js',
    },
    {
      label: 'Database',
      value: 'MongoDB / PostgreSQL',
    },
    {
      label: 'Infrastructure',
      value: 'AWS',
    },
    {
      label: 'API',
      value: 'REST APIs',
    },
    {
      label: 'Testing',
      value: 'Postman / Automated Testing',
    },
    {
      label: 'Design',
      value: 'Figma',
    },
  ],
  seoTitle: 'Skydo Case Study | Mariox',
  seoDescription: 'How Mariox built Skydo\'s cross-border payments platform across mobile, web and admin — customer onboarding, transaction management and secure backend infrastructure.',
};

export default caseStudy;
