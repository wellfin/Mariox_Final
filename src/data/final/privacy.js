// Privacy policy copy, ported verbatim from the design's `privacy-policy`.
// Each section is [heading, ...paragraphs]; the page numbers and anchors them.
export const updated = '30 October 2026';

export const summary = [
  'We only collect what you send us through our forms, plus basic analytics about how the site is used.',
  'We use it to reply to you, prepare proposals, deliver work and improve our marketing.',
  'We never sell your data.',
  'You can ask us to see, correct or delete your data at any time: admin@marioxsoftware.com.',
];

const SECTIONS = [
  [
    'Who we are',
    'This website is run by Mariox Software Pvt. Ltd. ("Mariox", "we", "us"), a software development company with its registered office at 202, Tower 4, Assotech Business Cresterra, Sector 135, Noida, Uttar Pradesh 201304, India. We also have offices in Bengaluru, Dallas (USA) and Victoria (Australia).',
    'For any privacy question or request, email admin@marioxsoftware.com with the subject "Privacy request".',
  ],
  [
    'What we collect',
    'Information you give us: your name, email, phone number, company, budget range and anything you write in a message when you fill in a contact, estimate or booking form. If you apply for a job, we also receive your CV, links and anything else you send.',
    'Information collected automatically: pages visited, time on page, device and browser type, approximate location (city or country) and the advert or link that brought you here. We collect this through cookies and similar tools from Google Analytics and Google Ads.',
    'Communications: emails, call notes and messages exchanged with our team.',
  ],
  [
    'How we use it',
    'To reply to your enquiry, arrange calls and prepare proposals or estimates.',
    'To deliver and support the services you engage us for, under a written agreement.',
    'To consider job applications.',
    'To understand how visitors use the site and measure which adverts work, so we can improve both.',
    'To meet legal, tax and accounting obligations.',
  ],
  [
    'Legal basis',
    'We process personal data on the basis of your consent (for example, when you submit a form), to take steps before or under a contract with you, for our legitimate interests in running and promoting our business, and to comply with the law. Visitors in India are covered by the Digital Personal Data Protection Act, 2023. Visitors in the EU or UK are covered by the GDPR or UK GDPR.',
  ],
  [
    'Cookies and analytics',
    'We use Google Analytics to measure site traffic and Google Ads conversion tracking to see which adverts lead to enquiries. These tools set cookies in your browser. You can block or delete cookies in your browser settings, or opt out of Google Analytics using Google’s browser add-on. The site still works without them.',
  ],
  [
    'Who we share it with',
    'We share personal data only with service providers that help us run the business, such as hosting, email, CRM, analytics and video-call tools, and only under contracts that require them to protect it.',
    'We may disclose information if the law requires it, or as part of a merger or sale of the business, in which case the same protections continue to apply.',
    'We do not sell or rent personal data to anyone.',
  ],
  [
    'International transfers',
    'Our team works across India, the United States and Australia, and some of our service providers store data in other countries. When data moves between countries, we use contractual and technical safeguards to keep it protected.',
  ],
  [
    'How long we keep it',
    'Enquiries that do not lead to a project: up to 24 months, then deleted. Job applications: up to 12 months unless you ask us to delete them sooner. Client and contract records: for as long as the contract requires and as long as tax and accounting law requires after that.',
  ],
  [
    'How we protect it',
    'Access is limited to the people who need it, using named accounts and multi-factor authentication. Data is encrypted in transit. Our team works under confidentiality agreements, and we sign an NDA with clients on request.',
  ],
  [
    'Your rights',
    'You can ask us to: tell you what personal data we hold about you; correct it; delete it; stop using it for marketing; or withdraw consent you gave earlier. Email admin@marioxsoftware.com and we will respond within 30 days.',
    'If you are not satisfied with our response, you can complain to the Data Protection Board of India or to the data protection authority where you live.',
  ],
  [
    'Children',
    'This website and our services are meant for businesses and adults. We do not knowingly collect personal data from anyone under 18.',
  ],
  [
    'Changes to this policy',
    'We may update this policy from time to time. The date at the top shows when it last changed. Significant changes will be highlighted on this page.',
  ],
  [
    'Contact and grievance officer',
    'Grievance Officer, Mariox Software Pvt. Ltd., 202, Tower 4, Assotech Business Cresterra, Sector 135, Noida, Uttar Pradesh 201304, India. Email: admin@marioxsoftware.com. Phone: +91 95992 87045.',
  ],
];

export const sections = SECTIONS.map((s, i) => ({
  n: String(i + 1).padStart(2, '0'),
  id: `s-${i + 1}`,
  heading: s[0],
  paras: s.slice(1),
}));
