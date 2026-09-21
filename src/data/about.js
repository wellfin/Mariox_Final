// Extracted verbatim from marioxwebsite/src/pages/about.jsx.
// NextSeo on the source page only sets `canonical` (title/description are commented out),
// so seo.title / seo.description are null. The commented-out values are kept for reference.

export const aboutContent = {
  seo: {
    title: null,
    description: null,
    canonicalPath: '/about',
    commentedOutTitle: 'Website And Mobile App Development Company | Web Development Services',
    commentedOutDescription:
      "Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand's internet presence.",
  },

  hero: {
    h1: 'Innovation, Excellence, & Commitment',
    h1Bold: 'Commitment',
    sub: 'Discover Unmatched Excellence in Web and Mobile Development',
    tags: ['[Data visualisation]', '[Mobile development]', '[Web development]'],
    image: '/img/about-thumb.webp',
  },

  mission: {
    label: '[mission & Vision]',
    statement:
      'We synergize cutting-edge technology, strategic insights, captivating design, and compelling content to propel brands to new heights in the digital landscape.',
  },

  timeline: {
    heading: 'Backend story',
    items: [
      {
        title: '[Founded]',
        description:
          'Founded by Mr Mohit Garg & Rahul Garg with an aim to fill the gaps between business needs and the digital world',
        image: '/img/founded.webp',
      },
      {
        title: '[Our vision]',
        description:
          'Mariox Software Pvt. Ltd. envisions a better tomorrow where innovation extends beyond boundaries.',
        image: '/img/our-vision.webp',
      },
      {
        title: '[Our Mission]',
        // Source text is truncated mid-sentence ("... that improve ").
        description:
          'At Mariox Software Pvt. Ltd., we aspire to empower businesses with evolving technological solutions that improve',
        image: '/img/our-mission.webp',
      },
    ],
  },

  philosophy: {
    images: ['/img/team-group-image.webp', '/img/about-thumb-3.webp'],
    heading:
      'Crafting Technology with Purpose, Unveiling Our Philosophical Foundations and Guiding Principles',
  },

  team: {
    label: '[Our Team]',
    members: [
      { name: 'Rahul Garg', designation: 'CEO', image: '/img/rahul-garg.webp' },
      { name: 'Mohit Garg', designation: 'MANAGING DIRECTOR', image: '/img/mohit-garg.webp' },
      { name: 'Akash Bhardwaj', designation: 'SALES HEAD', image: '/img/akash-bhardwaj.webp' },
      { name: 'Parveen Jakhar', designation: 'SR. DEVELOPER', image: '/img/parveen-jakhar.webp' },
      { name: 'Rahul Tiwari', designation: 'SEO TEAM LEAD', image: '/img/rahul-tiwari.webp' },
      { name: 'Ishant Sharma', designation: 'SR SEO SPECIALIST', image: '/img/ishant-sharma.webp' },
      { name: 'Akshay', designation: 'SEO OUTREACH SPECIALIST', image: '/img/akshay.webp' },
      // Source maps Trisha to /img/akshay-2.webp
      { name: 'Trisha', designation: 'CONTENT WRITER', image: '/img/akshay-2.webp' },
      { name: 'Ekta', designation: 'HUMAN RESOURCES', image: '/img/ekta.webp' },
      { name: 'Saurabh Sharma', designation: 'SUPPLY AND OPS LEAD', image: '/img/saurabh-sharma.webp' },
      { name: 'Tulsi', designation: 'CUSTOMER SUPPORT', image: '/img/tulsi.webp' },
      { name: 'Laxmi', designation: 'CUSTOMER SUPPORT', image: '/img/laxmi.webp' },
    ],
  },

  coreValues: {
    heading: 'Core values',
    items: [
      {
        number: '01',
        title: 'Innovation',
        description:
          'We embrace innovation as a driving force behind everything we do. We continuously seek new ideas, technologies, and approaches to solve complex problems and deliver cutting-edge solutions to our clients. Innovation fuels our creativity and propels us forward in a rapidly evolving industry.',
      },
      {
        number: '02',
        title: 'Integrity',
        description:
          'We uphold the highest standards of integrity in all aspects of our business. Honesty, transparency, and ethical behavior are non-negotiable principles that govern our interactions with clients, partners, and colleagues. We believe that integrity builds trust and fosters strong, long-lasting relationships.',
      },
      {
        number: '03',
        title: 'Collaboration',
        description:
          'Collaboration is at the heart of our success. We believe in the power of teamwork and leverage the diverse skills and perspectives of our team members to achieve common goals. By fostering an environment of trust, respect, and open communication.',
      },
      {
        number: '04',
        title: 'Excellence',
        description:
          'We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for excellence in every aspect of our business. We set high standards for ourselves and continuously raise the bar to exceed expectations and deliver exceptional results for our clients.',
      },
    ],
  },

  // Page also renders: TestimonialSliderSection (same 3 as data/testimonials.js defaultTestimonials),
  // FaqSection (defaults -> data/faqs.js) and ContactUsSection.
  testimonialsHeading: 'Our Clients {Love} us',
};
