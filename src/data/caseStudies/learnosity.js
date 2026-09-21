const caseStudy = {
  slug: 'learnosity',
  companyName: 'Learnosity',
  tagline: '— Digital Assessment Platform',
  metaTags: [
    'Australia',
    'EdTech',
    'Web',
  ],
  heroImage: '/img/cs/learnosity/learnosity.png',
  galleryImages: [
    '/img/cs/learnosity/learnosity1.png',
    '/img/cs/learnosity/learnosity2.png',
    '/img/cs/learnosity/learnosity3.png',
    '/img/cs/learnosity/learnosity4.png',
  ],
  sections: [
    {
      title: 'Product Overview',
      paragraphs: [
        'Learnosity focuses on digital assessment, requiring reliable question management, assessment delivery and scoring across the full lifecycle of a test. Every stage — authoring and managing questions, assembling them into assessments, delivering the test to a student and scoring the result — needed to work correctly on its own and stay consistent with every other stage. Mariox worked across this pipeline, from question management through to reporting, with reliability treated as a core requirement rather than an afterthought, since assessment platforms are ultimately judged on whether their results can be trusted.',
      ],
      list: [
        'Question management',
        'Assessment creation',
        'Test delivery',
        'Scoring',
        'Results',
        'Reporting',
      ],
    },
    {
      title: 'Challenge',
      paragraphs: [
        'Assessment systems require extremely high accuracy because incorrect scoring can directly affect the validity of a test, and by extension, real decisions made about a student\'s performance. A scoring error, a misconfigured question or an inconsistency between how an assessment was authored and how it was delivered could quietly undermine results without being immediately obvious. This made accuracy and predictability the top priority throughout the platform, since even small, hard-to-notice mistakes could have outsized consequences.',
      ],
      list: [
        'Zero tolerance for scoring errors',
        'Consistency between authoring and delivery',
        'Complex question and assessment configurations',
        'Risk of subtle, hard-to-detect mistakes',
        'Maintaining trust in results and reporting',
        'Reliability across a wide range of question types',
      ],
    },
    {
      title: 'Solution',
      paragraphs: [
        'We separated question content, assessment configuration and scoring logic so that each part of the system could be built, tested and changed independently without risking the others. Question content stayed distinct from how an assessment was assembled, and both were kept separate from the logic that actually scored a student\'s responses. This separation reduced the risk that a change in one area — such as adding new question content — could unintentionally affect scoring behavior elsewhere in the platform.',
      ],
      list: [
        'Separated question content layer',
        'Independent assessment configuration',
        'Isolated scoring logic',
        'Reduced risk of cross-impact changes',
        'Clearer ownership of each system layer',
        'Easier auditing of scoring behavior',
      ],
    },
    {
      title: 'QA',
      paragraphs: [
        'Major testing areas covered every stage where an error could compromise a result. Question behavior was tested in isolation, assessment logic was verified to combine questions correctly, and scoring was checked for accuracy across a wide range of scenarios rather than just the common cases. Result generation and regression testing rounded this out, catching any change that might have unintentionally affected previously validated behavior, alongside dedicated coverage for edge cases that could otherwise slip through standard testing.',
      ],
      list: [
        'Question behavior',
        'Assessment logic',
        'Scoring',
        'Result generation',
        'Edge cases',
        'Regression',
      ],
    },
    {
      title: 'Outcome',
      paragraphs: [
        'The result was a maintainable assessment platform designed around reliability and accuracy from the ground up. By keeping question content, assessment configuration and scoring logic cleanly separated, and backing that structure with rigorous testing, Learnosity gained a platform where changes could be made confidently without putting the accuracy of existing assessments at risk. That combination of maintainability and trustworthy scoring was central to the platform\'s long-term reliability.',
      ],
    },
  ],
  technology: [],
  seoTitle: 'Learnosity Case Study | Mariox',
  seoDescription: 'How Mariox built Learnosity\'s digital assessment platform, separating question content, configuration and scoring logic for reliability and accuracy.',
};

export default caseStudy;
