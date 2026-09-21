const caseStudy = {
  slug: 'graphy',
  companyName: 'Graphy',
  tagline: '— Online Learning Platform',
  metaTags: [
    'India',
    'EdTech',
    'App + Web',
  ],
  heroImage: '/img/cs/graphy/graphy.png',
  galleryImages: [
    '/img/cs/graphy/graphy1.png',
    '/img/cs/graphy/graphy2.png',
    '/img/cs/graphy/graphy3.png',
    '/img/cs/graphy/graphy4.png',
    '/img/cs/graphy/graphy5.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Graphy connects educators and learners through an online course ecosystem, bringing together everything needed to create, sell and consume a course in one place. On one side, creators needed tools to build and manage courses, assessments and their student base; on the other, learners needed a smooth way to discover courses, learn through video, track progress and earn certificates. Mariox worked across both sides of this ecosystem so that the creator and student experiences stayed connected through the same underlying course, progress and assessment data.',
      ],
      list: [
        'Course discovery',
        'Course management',
        'Video learning',
        'Assessments',
        'Progress',
        'Certificates',
        'Student management',
        'Creator management',
        'Reports',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'The platform was heavily dependent on digital content, particularly video and files, since video lessons and course materials were at the core of the learning experience. Handling large media directly through application servers can create unnecessary infrastructure pressure, slowing down the rest of the platform every time a learner streams a video or a creator uploads new course content. As the volume of courses, video content and concurrent learners grew, this dependency on heavy media risked becoming a bottleneck for the entire application rather than staying contained to just the content layer.',
      ],
      list: [
        'Heavy reliance on video and file content',
        'Risk of media load impacting application performance',
        'Growing volume of course content over time',
        'Concurrent video streaming by learners',
        'Keeping upload and delivery reliable at scale',
        'Avoiding a single bottleneck for both app and media',
      ],
    },
    {
      title: 'Mariox Solution',
      paragraphs: [
        'We separated application processing from media storage and delivery so that video and file handling would not compete with the core application for the same resources. Course logic, progress tracking, assessments and reporting were handled by the application layer, while video and file content were stored and served through infrastructure built specifically for that purpose. This meant a spike in video streaming or content uploads would not slow down unrelated parts of the platform, such as a learner checking their progress or a creator reviewing reports.',
      ],
      list: [
        'Separated media storage from application logic',
        'Dedicated handling for video and file delivery',
        'Reduced load on core application servers',
        'Independent scaling for content and application layers',
        'Reliable video streaming under concurrent usage',
        'Protected performance for non-media workflows',
      ],
    },
    {
      title: 'Student App',
      paragraphs: [
        'The student experience was built around the actual learning journey — finding a course, working through video lessons, completing assessments and tracking progress toward a certificate. Notifications kept learners informed of new content and milestones along the way, while progress and assessment data stayed connected so students always had a clear picture of where they stood in a course.',
      ],
      list: [
        'Courses',
        'Learning',
        'Video',
        'Progress',
        'Assessments',
        'Certificates',
        'Notifications',
      ],
    },
    {
      title: 'Creator/Admin Web',
      paragraphs: [
        'The creator and admin web platform gave educators and operators the tools to build and run their courses, from creating content and managing assessments to tracking students and reviewing reports. Because it shared the same underlying data as the student app, changes made by a creator — publishing a new lesson, updating an assessment — were reflected immediately on the learner side without extra manual steps.',
      ],
      list: [
        'Course creation',
        'Content management',
        'Students',
        'Reports',
        'Assessments',
        'Platform management',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result was a scalable learning platform where educational content and application operations could grow independently rather than being tied to each other\'s limits. Growth in video content, course volume or concurrent learners could be absorbed by the media layer without putting pressure on the core application, and vice versa. That separation gave Graphy room to expand its course catalog and learner base without needing to re-architect the platform as usage increased.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Graphy Case Study | Mariox',
  seoDescription: 'How Mariox built Graphy\'s online learning platform, separating media-heavy course delivery from application and creator/admin workflows.',
};

export default caseStudy;
