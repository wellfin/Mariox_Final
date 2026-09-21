// Structured data carried over from the live site (components/Schema/*).

const organizationAbout = (id) => ({
  '@type': 'Organization',
  '@id': id + '#organization',
  name: 'Mariox Software',
  url: 'https://www.marioxsoftware.com',
  logo: {
    '@type': 'ImageObject',
    '@id': id + '#logo',
    url: 'https://www.marioxsoftware.com/wp-content/uploads/2023/05/cropped-340120-mariox-logo-1.png',
    caption: 'Mariox Software',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 9599287045',
    contactType: 'Customer Service',
    email: 'admin@marioxsoftware.com',
  },
  sameAs: [
    'https://www.facebook.com/MarioxSoftware',
    'https://twitter.com/MarioxSoftware',
    'https://www.instagram.com/MarioxSoftware',
    'https://www.linkedin.com/company/MarioxSoftware',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '202, Assotech Business Cresterra, Tower-4, Sector 135',
    addressLocality: 'Noida',
    addressRegion: 'UP',
    postalCode: '201301',
    addressCountry: 'IN',
  },
});

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mariox Software',
  image: 'https://www.marioxsoftware.com/wp-content/uploads/2023/11/Android-App-development-1.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '202, Assotech Business Cresterra, Tower-4, Sector 135',
    addressLocality: 'Noida',
    addressRegion: 'UP',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.5355, longitude: 77.391 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '23:00',
    },
  ],
};

export const homeWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.marioxsoftware.com/#webpage',
  url: 'https://www.marioxsoftware.com',
  name: 'Mariox Software',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.marioxsoftware.com/#website',
    url: 'https://www.marioxsoftware.com',
    name: 'Mariox Software',
    publisher: { '@id': 'https://www.marioxsoftware.com/#organization' },
    inLanguage: 'en-US',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    '@id': 'https://www.marioxsoftware.com/#primaryimage',
    url: 'https://www.marioxsoftware.com/wp-content/uploads/2023/11/Android-App-development-1.png',
    caption: 'Mariox Software',
  },
  about: organizationAbout('https://www.marioxsoftware.com/'),
  inLanguage: 'en-US',
};

export const serviceWebPageSchema = (slug) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://www.marioxsoftware.com/${slug}#webpage`,
  url: `https://www.marioxsoftware.com/${slug}`,
  name: 'Mariox Software',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `https://www.marioxsoftware.com/${slug}/#website`,
    url: `https://www.marioxsoftware.com/${slug}`,
    name: 'Mariox Software',
    publisher: { '@id': `https://www.marioxsoftware.com/${slug}#organization` },
    inLanguage: 'en-US',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    '@id': `https://www.marioxsoftware.com/${slug}#primaryimage`,
    url: 'https://www.marioxsoftware.com/wp-content/uploads/2023/11/Android-App-development-1.png',
    caption: 'Mariox Software',
  },
  about: organizationAbout(`https://www.marioxsoftware.com/${slug}`),
  inLanguage: 'en-US',
});

export const breadcrumbSchema = (items, base) =>
  items && items.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${base}${item.slug}`,
        })),
      }
    : null;
