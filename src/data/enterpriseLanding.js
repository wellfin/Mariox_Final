// Content of the "Mariox Enterprise Landing" design (Custom Software & App
// Development Company), copied verbatim. Sections it shares with the SaaS
// landing are re-exported from there; `demo` keys match the App Demo verticals.

export { heroTrust, brands, stats, aiServices, aiStack, stories, steps, certs, trust } from './saasLanding';

export const apps = [
  { name: 'AstroTalk', demo: 'astrotalk', cat: 'Astrology', title: 'Astrology and consultation platforms', body: 'Kundli and horoscope engines, live astrologer consultations and per-minute billing, built to handle peak-hour demand and secure transactions.', features: ['Live consultation', 'Per-minute billing', 'Astrologer panel', 'Wallet & payouts', 'Kundli engine', 'Chat & call'], proof: 'Live sessions · per-minute billing' },
  { name: 'Uber', demo: 'uber', cat: 'Ride-hailing', title: 'Ride-hailing and on-demand mobility', body: 'Rider, driver and operations apps on one dispatch core, with live tracking, surge logic and payouts that reconcile.', features: ['Live tracking', 'Dispatch engine', 'Driver app', 'Surge pricing', 'Trip payments', 'Ops dashboard'], proof: 'Three apps · one dispatch core' },
  { name: 'Zomato', demo: 'zomato', cat: 'Food delivery', title: 'Food delivery and restaurant marketplaces', body: 'Customer, restaurant and rider apps with menu management, order routing and delivery-time promises the system can actually keep.', features: ['Menu management', 'Order routing', 'Rider app', 'Live tracking', 'Payments', 'Restaurant panel'], proof: 'Related: MILKRUN, Zapp', case: 'milkrun' },
  { name: 'Blinkit', demo: 'blinkit', cat: 'Quick commerce', title: 'Quick commerce and dark-store delivery', body: 'Store-level inventory, slot honesty and rider dispatch engineered for ten-minute delivery at scale.', features: ['Dark-store inventory', 'Picking tools', 'Slot logic', 'Rider dispatch', 'Live tracking', 'Ops dashboards'], proof: 'Related: Zapp, Grokart', case: 'zapp' },
  { name: 'Practo', demo: 'practo', cat: 'Healthcare', title: 'Telemedicine and doctor booking', body: 'Patient apps, provider platforms and video consultation with consent, audit trails and practice-system sync built in from day one.', features: ['Appointments', 'Video consults', 'e-Prescriptions', 'Provider platform', 'Records & consent', 'Reminders'], proof: 'Related: HotDoc, Eka Care', case: 'hotdoc' },
  { name: 'Udemy', demo: 'udemy', cat: 'Edtech', title: 'Online learning and course platforms', body: 'Course delivery, live classes, assessment and creator payouts, instrumented so completion rates are visible, not guessed.', features: ['Course delivery', 'Live classes', 'Assessment', 'Creator payouts', 'Progress tracking', 'Certificates'], proof: 'Related: Graphy, Teachmint', case: 'graphy' },
  { name: 'Airbnb', demo: 'airbnb', cat: 'Rentals', title: 'Rental and booking marketplaces', body: 'Two-sided listings, availability calendars, payments held in escrow and the trust mechanics that make strangers transact.', features: ['Listings', 'Availability calendar', 'Escrow payments', 'Reviews & trust', 'Host tooling', 'Messaging'], proof: 'Two-sided marketplace' },
  { name: 'Netflix', demo: 'netflix', cat: 'OTT & streaming', title: 'OTT and video streaming platforms', body: 'Adaptive streaming, subscriptions, DRM and recommendations across mobile, web and TV apps.', features: ['Adaptive streaming', 'DRM', 'Subscriptions', 'Recommendations', 'TV apps', 'Offline downloads'], proof: 'Mobile · web · TV' },
];

export const cases = [
  { name: 'Airwallex', sector: 'Fintech', region: 'Global', scope: 'App + web', img: '/img/cs/airwallex/AirWallex4.png', url: '/case-study/airwallex', body: 'Cross-border payments where the ledger must balance to the cent across providers, currencies and retries.' },
  { name: 'Kogan', sector: 'Marketplace', region: 'Australia', scope: 'Marketplace + web + admin', img: '/img/cs/kogan/kogan2.png', url: '/case-study/kogan', body: 'A large third-party seller base, where catalogue quality and seller tooling decide whether the marketplace scales.' },
  { name: 'HotDoc', sector: 'Healthcare', region: 'Australia', scope: 'App + web + provider platform', img: '/img/cs/hotdoc/hotdoc1.png', url: '/case-study/hotdoc', body: 'Booking and practice management where the provider side decides whether the patient side works at all.' },
];

export const faq = [
  { q: 'Can you handle a project of this size?', a: 'We have 100+ engineers in four countries and run multi-squad programmes. You meet the actual team before signing.' },
  { q: 'How do you price large projects?', a: 'A paid discovery produces a fixed proposal. Change is handled openly and priced before it is built.' },
  { q: 'Will you work with our procurement and security teams?', a: 'Yes. We complete vendor questionnaires, sign NDAs and MSAs, and work inside your security requirements.' },
  { q: 'What happens after launch?', a: 'Most clients keep us on for support and the next phase. Everything is documented so you can also take it in-house.' },
];

export const heroNeeds = ['Mobile app', 'Web app', 'CRM / ERP', 'SaaS', 'AI', 'Dedicated team'];
export const heroBudgets = ['Under $25k', '$25k–$75k', '$75k–$150k', '$150k+', 'Not sure'];
