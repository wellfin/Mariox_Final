const caseStudy = {
  slug: 'clueylearning',
  companyName: 'Cluey Learning',
  tagline: '— Online Tutoring Platform',
  metaTags: [
    'Australia',
    'EdTech',
    'App + Web',
  ],
  heroImage: '/img/cs/clueylearning/clueylearning.png',
  galleryImages: [
    '/img/cs/clueylearning/clueylearning1.png',
    '/img/cs/clueylearning/clueylearning2.png',
    '/img/cs/clueylearning/clueylearning3.png',
  ],
  sections: [
    {
      title: 'Product Overview',
      paragraphs: [
        'Cluey Learning connects students and tutors through online tutoring workflows, turning what is normally a manual, back-and-forth process into a structured digital experience. The platform needed to support the full journey on both sides — students building a profile and finding the right tutor, and tutors managing their own profile, availability and sessions. Mariox worked across student profiles, tutor discovery, booking and session management so that the process of finding a tutor, scheduling a session and actually attending it felt like a single connected flow rather than a series of separate steps.',
      ],
      list: [
        'Student profiles',
        'Tutor profiles',
        'Tutor discovery',
        'Availability',
        'Booking',
        'Sessions',
        'Notifications',
        'Reports',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Scheduling is more complicated than a normal calendar because both students and tutors have availability constraints that need to line up before a session can happen. A tutor might only be available at certain hours across certain subjects, while a student needs to find a slot that fits both their own schedule and the tutor they want. Any mismatch, double-booking or stale availability data directly affects whether a session can take place, so the scheduling logic needed to stay accurate and synchronized between both sides at all times.',
      ],
      list: [
        'Two-sided availability constraints',
        'Risk of double-booking',
        'Keeping tutor availability up to date',
        'Matching students with the right tutor',
        'Session rescheduling and cancellations',
        'Synchronizing schedules in real time',
      ],
    },
    {
      title: 'Mariox Solution',
      paragraphs: [
        'Availability, booking and session management were connected into a single workflow so that a change on one side — a tutor updating their availability, or a student booking a slot — was reflected immediately everywhere it mattered. Rather than treating discovery, booking and the session itself as separate features, we designed them to share the same underlying data, so a booked slot was automatically removed from a tutor\'s open availability and a session\'s details stayed consistent from confirmation through to completion. This reduced the chance of scheduling conflicts and kept both students and tutors working from the same source of truth.',
      ],
      list: [
        'Unified availability and booking data',
        'Real-time schedule updates',
        'Conflict prevention',
        'Consistent session details',
        'Automated notifications',
        'Streamlined tutor discovery to booking flow',
      ],
    },
    {
      title: 'App',
      paragraphs: [
        'The app was focused on the student\'s tutoring journey — discovering tutors, checking availability, booking sessions and staying informed through notifications. The experience was designed to guide a student from finding the right tutor to confirming a session without unnecessary friction, since the ease of that flow directly affected whether students kept coming back to the platform. Session history and upcoming bookings were kept visible so students always knew where things stood.',
      ],
      list: [
        'Tutor discovery and search',
        'Availability browsing',
        'Session booking',
        'Notifications and reminders',
        'Session history',
        'Profile management',
      ],
    },
    {
      title: 'Web',
      paragraphs: [
        'The web platform was focused on tutor and operational management, giving tutors the tools to manage their own availability and sessions while giving the operational team visibility across the whole platform. Tutors needed a straightforward way to set and update their availability, view upcoming bookings and manage their profile, while operations needed reporting and oversight to keep the marketplace running smoothly. Separating this from the student-facing app allowed each side to be built around its own workflows.',
      ],
      list: [
        'Tutor availability management',
        'Session oversight',
        'Profile management',
        'Booking administration',
        'Reporting',
        'Operational visibility',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result was a connected tutoring platform where booking and availability remained synchronized across the student app, tutor tools and web platform. Students could find and book tutors with confidence that availability was accurate, and tutors could trust that their schedule reflected reality without manual double-checking. That reliability in scheduling was central to making the overall tutoring experience feel dependable for both sides of the marketplace.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Cluey Learning Case Study | Mariox',
  seoDescription: 'How Mariox built Cluey Learning\'s online tutoring platform, connecting availability, booking and session management into one workflow.',
};

export default caseStudy;
