const caseStudy = {
  slug: 'sunstone',
  companyName: 'Sunstone',
  tagline: '— Higher Education Platform',
  metaTags: [
    'India',
    'EdTech',
    'App + Web',
  ],
  heroImage: '/img/cs/sunstone/sunstone.png',
  galleryImages: [
    '/img/cs/sunstone/sunstone1.png',
    '/img/cs/sunstone/sunstone2.png',
    '/img/cs/sunstone/sunstone3.png',
    '/img/cs/sunstone/sunstone4.png',
    '/img/cs/sunstone/sunstone5.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Sunstone required a broader digital ecosystem covering students, academics and institutional operations, rather than a single standalone application. As a higher education platform, it needed to bring together everyday student life — attendance, academic records, communication — with the back-office reality of running a multi-department institution. Mariox worked across both the student-facing and administrative sides of the product, building a system where information created in one place stayed accurate and available everywhere else it was needed. The goal was not just to digitize individual processes, but to connect them into a single coherent ecosystem that could support the full academic lifecycle.',
      ],
      list: [
        'Student management',
        'Academic information',
        'Attendance',
        'Communication',
        'Notifications',
        'Reports',
        'Administration',
        'Institutional operations',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Higher education involves multiple departments working with the same student information, and each department typically needs a different view of that data. Academic staff care about coursework and attendance, while administrative teams focus on enrollment, records and institutional reporting. Without a common structure, a single student\'s information tends to fragment across separate tools or department-specific processes, creating inconsistencies and duplicated effort. Sunstone needed a way to let every department work from the same underlying student data while still respecting the boundaries of what each role should be able to see and change.',
      ],
      list: [
        'Fragmented student records across departments',
        'Inconsistent data between academic and admin teams',
        'Role-specific access requirements',
        'Cross-department communication gaps',
        'Duplicated data entry',
        'Need for a single source of truth',
        'Institutional reporting complexity',
      ],
    },
    {
      title: 'Solution',
      paragraphs: [
        'We created shared data structures with role and department-specific access rather than building separate, disconnected tools for each team. A student\'s academic and administrative information was modeled once and then exposed differently depending on who was viewing it — academic staff, administrators or the student themselves. This meant updates made in one part of the system were reflected everywhere that data was used, removing the need for manual syncing between departments. The approach kept the platform consistent while still giving each department focused, role-appropriate workflows.',
      ],
      list: [
        'Shared student data model',
        'Role-based access control',
        'Department-specific views',
        'Consistent data across the platform',
        'Centralized academic records',
        'Unified communication layer',
        'Reduced manual synchronization',
      ],
    },
    {
      title: 'Mobile',
      paragraphs: [
        'The mobile experience was focused on the student\'s everyday academic experience — the moments a student actually interacts with day to day, such as checking attendance, viewing academic updates and receiving communication from the institution. Rather than replicating every administrative capability, the app concentrated on making these routine touchpoints fast, clear and accessible from a phone. This kept the student-facing surface lightweight while staying connected to the same underlying data used across the rest of the platform.',
      ],
      list: [
        'Attendance visibility',
        'Academic updates',
        'Notifications',
        'Communication with the institution',
        'Personal academic information',
        'Simple, everyday student workflows',
      ],
    },
    {
      title: 'Web',
      paragraphs: [
        'The web platform was focused on institutional and administrative workflows, giving staff and departments the tools needed to manage students, records and communication at scale. Where the mobile app prioritized simplicity for individual students, the web experience was built for the operational needs of an institution — handling larger volumes of data, cross-department coordination and reporting. This split allowed each surface to be optimized for its actual users rather than forcing one interface to serve both audiences.',
      ],
      list: [
        'Student record management',
        'Administrative workflows',
        'Departmental coordination',
        'Reporting',
        'Communication management',
        'Institutional oversight',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result was a connected platform linking student-facing services with institutional operations, rather than two separate systems that happened to share a name. Students got a simple, mobile-first way to stay on top of their academic life, while departments and administrators got the shared data and role-based tools needed to run the institution efficiently. Because both sides drew from the same underlying data structures, the platform could support more students, more departments and more processes without fragmenting the information that connected them.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Sunstone Case Study | Mariox',
  seoDescription: 'How Mariox built Sunstone\'s higher education platform connecting student-facing services with institutional and departmental operations.',
};

export default caseStudy;
