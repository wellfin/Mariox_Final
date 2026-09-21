const caseStudy = {
  slug: 'testbook',
  companyName: 'Testbook',
  tagline: '— Exam Preparation Platform',
  metaTags: [
    'India',
    'EdTech',
    'App + Web',
  ],
  heroImage: '/img/cs/testbook/testbook.png',
  galleryImages: [
    '/img/cs/testbook/testbook1.png',
    '/img/cs/testbook/testbook2.png',
    '/img/cs/testbook/testbook3.png',
  ],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Testbook provides students with preparation material, mock tests and performance tracking, built to support the full exam preparation cycle rather than a single piece of it. Students needed access to courses and question content while preparing, followed by mock tests that closely mirrored real exam conditions, and then results and rankings that told them exactly where they stood. Mariox worked across this entire flow — from content and courses through to assessments, results and performance tracking — so that preparation, testing and feedback formed one continuous experience rather than disconnected features.',
      ],
      list: [
        'Courses',
        'Questions',
        'Mock tests',
        'Assessments',
        'Results',
        'Rankings',
        'Performance',
        'Content management',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Exam platforms experience unpredictable traffic spikes, especially when thousands of students begin a test simultaneously at a scheduled time. Unlike typical daily usage, which tends to spread out over a day, exam traffic arrives in short, intense bursts where a large share of users hit the same endpoints — starting a test, submitting answers, loading results — at nearly the same moment. This concentrated load put pressure on APIs, databases and session handling all at once, and any slowdown or failure during a live exam directly affected a student\'s ability to complete it fairly.',
      ],
      list: [
        'Sudden, large-scale concurrent traffic',
        'Simultaneous exam start times',
        'Pressure on APIs during peak load',
        'Database strain from concurrent queries',
        'Session reliability under load',
        'Fairness risk from slowdowns during live exams',
      ],
    },
    {
      title: 'Solution',
      paragraphs: [
        'Mariox focused on optimized APIs, database queries, caching and assessment workflows to make sure the platform could absorb these spikes without degrading the exam experience. Instead of designing for average daily load, the system was built and tuned around worst-case, high-concurrency scenarios — the moments when the most students would be active at once. Caching reduced repeated load on the database for frequently accessed content, while optimized queries and session handling kept response times stable even as concurrent activity increased.',
      ],
      list: [
        'High-concurrency handling',
        'API optimization',
        'Database optimization',
        'Caching',
        'Session management',
        'Result processing',
      ],
    },
    {
      title: 'QA',
      paragraphs: [
        'Testing included the scenarios that mattered most under real exam conditions rather than just standard functional checks. Timed exams needed to behave correctly under pressure, scoring needed to be accurate regardless of load, and question delivery and result generation needed to hold up when many students were active simultaneously. We also tested interrupted sessions and concurrent activity specifically, since these were the situations most likely to expose issues that would not show up under light, everyday usage.',
      ],
      list: [
        'Timed exams',
        'Scoring',
        'Question delivery',
        'Result generation',
        'Interrupted sessions',
        'Concurrent activity',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result was a platform designed around peak examination traffic rather than average daily usage, giving Testbook confidence that the system would hold up at the exact moments it mattered most. Students could rely on the platform to deliver tests, capture answers and generate results consistently, even when thousands of them were testing at the same time. Building for these peak conditions from the outset meant the platform did not need to be reworked under pressure as exam volumes grew.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Testbook Case Study | Mariox',
  seoDescription: 'How Mariox built Testbook\'s exam preparation platform to handle high-concurrency exam traffic with optimized APIs, caching and assessment workflows.',
};

export default caseStudy;
