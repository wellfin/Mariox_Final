const caseStudy = {
  slug: 'myzeller',
  companyName: 'Zeller',
  tagline: '— Business Banking & Payments',
  metaTags: [
    'Australia',
    'FinTech',
    'App + Web',
  ],
  heroImage: '/img/cs/myzelller/myzeller.png',
  galleryImages: [
    '/img/cs/myzelller/myzeller1.png',
    '/img/cs/myzelller/myzeller2.png',
    '/img/cs/myzelller/myzeller3.png',
    '/img/cs/myzelller/myzeller4.png',
    '/img/cs/myzelller/myzeller5.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Zeller is focused on business banking and payments, which meant building a platform where companies can manage their day-to-day financial activity while giving employees and administrators access that\'s scoped to what they actually need. Mariox worked across the customer application, the business web platform and the underlying permission and reporting systems that connect them. The goal was a single coherent platform where a business owner, an employee and an administrator each see the right slice of the same underlying data, without the complexity of managing multiple disconnected tools.',
      ],
      list: [
        'Business accounts',
        'Transactions',
        'Payments',
        'Employees',
        'Permissions',
        'Reports',
        'Notifications',
        'Administration',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'The product needed to support everyday business activity — payments going out, transactions coming in, employees swiping cards — while maintaining financial accuracy and controlled access at every step. As more employees and roles get added to a business account, the risk of the wrong person seeing or acting on the wrong data grows, so access control could not be an afterthought. At the same time, reporting and dashboard views needed to stay accurate and responsive even as transaction volume grew, without slowing down the core process of moving money.',
      ],
      list: [
        'Multi-employee access control',
        'Real-time transaction accuracy',
        'Role-appropriate visibility',
        'Reporting under growing volume',
        'Consistent permission enforcement',
        'Balancing usability with control',
      ],
    },
    {
      title: 'Mariox Solution',
      paragraphs: [
        'We separated transactional operations from reporting and dashboard workloads so that reporting requirements would not unnecessarily affect core financial processing. Payments and transaction handling were treated as the platform\'s critical path and kept isolated from the heavier queries and aggregations that reports and dashboards require. This meant a slow or complex report could not introduce latency into an actual payment, and reporting features could evolve independently of the core transaction engine.',
      ],
      list: [
        'Separated transactional and reporting workloads',
        'Independent scaling of reports',
        'Role-based data access',
        'Consistent core processing',
        'Isolated administrative operations',
        'Extensible reporting layer',
      ],
    },
    {
      title: 'App',
      paragraphs: [
        'The mobile application gave business owners and employees a straightforward view of their account, transactions and payments, scoped to what their role allows. Rather than exposing every administrative capability on the app, it focused on the actions and information relevant to daily use, keeping the day-to-day experience quick even for users who aren\'t managing the business\'s finances directly.',
      ],
      list: [
        'Account',
        'Transactions',
        'Payments',
        'Notifications',
        'Profile',
        'Business activity',
        'Card management',
        'Balance overview',
      ],
    },
    {
      title: 'Web',
      paragraphs: [
        'The web platform was where business owners and administrators managed the broader picture — employees, permissions, reporting and administrative settings that don\'t belong in a lightweight mobile flow. Because permissions were enforced from the backend rather than the interface, the same web platform could safely present different levels of access to an owner versus an employee with limited administrative rights.',
      ],
      list: [
        'Business management',
        'Employee management',
        'Permissions',
        'Reports',
        'Transactions',
        'Administration',
        'Role configuration',
        'Audit visibility',
      ],
    },
    {
      title: 'Security',
      paragraphs: [
        'Because the platform handles real business funds and multiple employees may share access to the same account, security and permission enforcement were treated as core architecture rather than an add-on. Every sensitive financial operation was validated against the acting user\'s role and permissions from the backend, so the level of access granted through the interface always matched what the backend was willing to authorize.',
      ],
      list: [
        'Role-based access',
        'Secure APIs',
        'Authentication',
        'Permission validation',
        'Controlled financial operations',
        'Auditable activity',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result is a business-focused financial ecosystem combining everyday banking activity with deeper management and reporting capabilities. Business owners get the oversight and control they need across employees, permissions and reporting, while employees get a simple, scoped experience for day-to-day spending and transactions. For Zeller, this means the platform can support businesses of varying size and complexity without asking every user to navigate the same undifferentiated set of features.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Zeller Case Study | Mariox',
  seoDescription: 'How Mariox built Zeller\'s business banking and payments platform with role-based access for employees, business owners and administrators.',
};

export default caseStudy;
