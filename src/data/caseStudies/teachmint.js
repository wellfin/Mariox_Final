const caseStudy = {
  slug: 'teachmint',
  companyName: 'Teachmint',
  tagline: '— School & Classroom Management',
  metaTags: [
    'India',
    'EdTech',
    'App + Web',
  ],
  heroImage: '/img/cs/teachmint/teachmint.png',
  galleryImages: [
    '/img/cs/teachmint/teachmint1.png',
    '/img/cs/teachmint/teachmint2.png',
    '/img/cs/teachmint/teachmint3.png',
    '/img/cs/teachmint/teachmint4.png',
    '/img/cs/teachmint/teachmint5.png',
  ],
  sections: [
    {
      title: 'Product Overview',
      paragraphs: [
        'Teachmint connects schools, teachers, students and parents through a common digital ecosystem rather than a collection of disconnected tools. A single school day generates information that many different people need to see — a class taken by a teacher, an assignment submitted by a student, an attendance record a parent wants to check — and Teachmint was built to keep all of that information flowing through one system. Mariox worked on bringing these everyday school activities together so that classes, assignments, attendance and communication all lived on the same platform instead of being scattered across separate apps or manual processes.',
      ],
      list: [
        'Attendance',
        'Classes',
        'Assignments',
        'Communication',
        'Student records',
        'Notifications',
        'Reports',
        'School administration',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Every user type requires different information and permissions, and a school management platform has to serve several of these user types at once. A student needs to see their own classes, assignments and attendance; a parent needs visibility into their child\'s progress without access to the wider school; a teacher needs classroom and grading tools; and a school administrator needs oversight across the entire institution. Building a single platform that could serve all of these audiences without leaking information between them, or forcing everyone through the same generic interface, was the core challenge behind the product.',
      ],
      list: [
        'Multiple distinct user types in one platform',
        'Different information needs per role',
        'Strict data boundaries between students and parents',
        'Classroom-level versus school-level visibility',
        'Consistent communication across all roles',
        'Avoiding a one-size-fits-all interface',
      ],
    },
    {
      title: 'Solution',
      paragraphs: [
        'We designed the system around role-based workflows so that each type of user was given an experience shaped around what they actually needed to do, rather than a generic view of the same data. Students, parents, teachers and school administrators each moved through their own tailored flows for attendance, classes, assignments and communication, while the underlying data stayed connected across the platform. This meant a single change — like an attendance mark or an assignment grade — was recorded once and reflected correctly for every role that had permission to see it.',
      ],
      list: [
        'Student',
        'Parent',
        'Teacher',
        'School Administrator',
      ],
    },
    {
      title: 'App',
      paragraphs: [
        'The mobile app was focused on classroom and student activities — the parts of school life that students, parents and teachers interact with most often. Attendance, assignments, classes and notifications were designed to be simple and immediate, so a parent could check on their child\'s day or a student could see an assignment without navigating administrative complexity. Keeping the app centered on these everyday touchpoints made it fast and approachable for the people who used it most frequently.',
      ],
      list: [
        'Attendance tracking',
        'Class schedules',
        'Assignments',
        'Notifications',
        'Parent-teacher communication',
        'Student records access',
      ],
    },
    {
      title: 'Web',
      paragraphs: [
        'The web platform was focused on school and administrative management, giving staff and administrators the broader tools needed to run an institution rather than a single classroom. It handled the heavier workflows — managing student records, coordinating across classes and teachers, and overseeing school-wide reporting — that were less suited to a phone screen. This division let the mobile app stay lightweight for everyday use while the web platform carried the operational weight of running the school.',
      ],
      list: [
        'School administration',
        'Student record management',
        'Class and teacher coordination',
        'Reporting',
        'Communication management',
        'Institution-wide oversight',
      ],
    },
    {
      title: 'Security',
      paragraphs: [
        'Backend-level role validation ensured that users could only access their permitted information, rather than relying on the app interface alone to hide data a role should not see. Every request was checked against the requesting user\'s role and relationship to the data — a parent could only view their own child\'s records, and a teacher could only access their own classes — before any information was returned. This approach meant that even if a user tried to reach data outside their scope, the restriction was enforced consistently at the source rather than depending on frontend logic.',
      ],
      list: [
        'Backend role validation',
        'Parent-to-student data boundaries',
        'Teacher-to-classroom scoping',
        'Administrator-level access controls',
        'Consistent enforcement across app and web',
        'Protection against unauthorized data access',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result was a connected school management ecosystem rather than separate tools for each user group. Students, parents, teachers and administrators all worked within the same platform, seeing the version of it built for their role, while the underlying attendance, class and assignment data stayed consistent across the entire system. That connection removed the friction of juggling multiple disconnected tools and gave every part of the school community a single, reliable place to stay informed.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Teachmint Case Study | Mariox',
  seoDescription: 'How Mariox built Teachmint\'s school and classroom management ecosystem with role-based workflows for students, parents, teachers and administrators.',
};

export default caseStudy;
