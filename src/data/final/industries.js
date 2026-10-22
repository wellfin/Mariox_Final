// 34 industries (industries-data.js)
// Converted from the design's data file in /final-website; image paths point at
// /public instead of the live site.
export const groups = {
 "fin": "Finance",
 "health": "Health",
 "learn": "Learning",
 "com": "Commerce",
 "move": "Mobility & logistics",
 "place": "Travel & property",
 "ind": "Industry & energy",
 "media": "Media & social",
 "pub": "Public & community",
 "scale": "Company stage"
};

export const fallbackPhoto = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&q=72&auto=format&fit=crop";

export const industries = [
 {
  "slug": "fintech",
  "name": "Fintech",
  "group": "Finance",
  "groupKey": "fin",
  "hook": "Money moves fast. The software has to reconcile.",
  "sub": "Payment apps, wallets and financial platforms built around a ledger that balances to the cent.",
  "challenges": [
   {
    "t": "Reconciliation",
    "b": "Every balance must trace back to a record, across providers that each report differently."
   },
   {
    "t": "Compliance by design",
    "b": "KYC, AML and audit trails cannot be bolted on after launch."
   },
   {
    "t": "Trust at first tap",
    "b": "One failed transfer loses a customer for good."
   }
  ],
  "builds": [
   {
    "t": "Payment apps",
    "b": "Send, receive and settle, with clear status at every step."
   },
   {
    "t": "Digital wallets",
    "b": "Stored value, cards and top-ups with real-time balances."
   },
   {
    "t": "Lending platforms",
    "b": "Applications, scoring, disbursal and collections."
   },
   {
    "t": "Investment apps",
    "b": "Portfolios, market data and order flows."
   },
   {
    "t": "Expense & spend",
    "b": "Cards, approvals and accounting sync for companies."
   },
   {
    "t": "Fintech back-office",
    "b": "Ledgers, admin consoles and reporting."
   }
  ],
  "compliance": [
   "PCI DSS",
   "KYC / AML",
   "RBI guidelines",
   "SOC 2",
   "GDPR"
  ],
  "stack": [
   "Node.js",
   "Java / Spring",
   "PostgreSQL",
   "Kafka",
   "React Native",
   "AWS"
  ],
  "cases": [
   {
    "name": "Airwallex",
    "line": "Global business accounts & FX",
    "img": "/img/cs/airwallex/AirWallex4.png"
   },
   {
    "name": "Zeller",
    "line": "Business payments & settlement",
    "img": "/img/cs/myzelller/myzeller5.png"
   },
   {
    "name": "Skydo",
    "line": "Cross-border payments for exporters",
    "img": "/img/cs/skydo/Skydo1.png"
   },
   {
    "name": "StockGro",
    "line": "Investing & market data platform",
    "img": "/img/cs/stockgro/stockgro1.png"
   }
  ],
  "n": "01",
  "photo": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-fintech.dc.html"
 },
 {
  "slug": "banking",
  "name": "Banking",
  "group": "Finance",
  "groupKey": "fin",
  "hook": "A branch in every pocket.",
  "sub": "Digital banking apps, onboarding and servicing for banks, NBFCs and neobanks.",
  "challenges": [
   {
    "t": "Legacy cores",
    "b": "Modern apps still have to talk to decades-old core banking systems."
   },
   {
    "t": "Onboarding drop-off",
    "b": "Every extra screen in account opening costs customers."
   },
   {
    "t": "Security without friction",
    "b": "Strong authentication that customers do not hate."
   }
  ],
  "builds": [
   {
    "t": "Mobile banking",
    "b": "Accounts, transfers, cards and statements."
   },
   {
    "t": "Digital onboarding",
    "b": "eKYC, video KYC and account opening."
   },
   {
    "t": "Loan origination",
    "b": "Applications to disbursal in one flow."
   },
   {
    "t": "Core integrations",
    "b": "APIs and middleware over legacy cores."
   },
   {
    "t": "Customer servicing",
    "b": "Requests, disputes and support in-app."
   },
   {
    "t": "Internal tools",
    "b": "Branch, ops and risk dashboards."
   }
  ],
  "compliance": [
   "PCI DSS",
   "ISO 27001",
   "RBI guidelines",
   "SOC 2"
  ],
  "stack": [
   "Java / Spring",
   ".NET",
   "Oracle",
   "Kafka",
   "Flutter",
   "Azure"
  ],
  "cases": [
   {
    "name": "Lunar",
    "line": "Digital banking",
    "img": "/img/cs/lunar/luner1.png"
   },
   {
    "name": "Soldo",
    "line": "Company spend management",
    "img": "/img/cs/soldo/soldo.png"
   }
  ],
  "n": "02",
  "photo": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-banking.dc.html"
 },
 {
  "slug": "insurance",
  "name": "Insurance",
  "group": "Finance",
  "groupKey": "fin",
  "hook": "Claims in minutes, not weeks.",
  "sub": "Policy, claims and distribution software for insurers, brokers and insurtechs.",
  "challenges": [
   {
    "t": "Paper-heavy claims",
    "b": "Documents, photos and approvals scattered across email."
   },
   {
    "t": "Distribution sprawl",
    "b": "Agents, partners and direct channels on different systems."
   },
   {
    "t": "Pricing data",
    "b": "Underwriting needs clean data that most insurers cannot reach."
   }
  ],
  "builds": [
   {
    "t": "Policy apps",
    "b": "Quotes, purchase, renewals and documents."
   },
   {
    "t": "Claims platforms",
    "b": "Intake, document capture and status tracking."
   },
   {
    "t": "Agent & broker portals",
    "b": "Leads, quotes and commissions."
   },
   {
    "t": "Underwriting tools",
    "b": "Rules, scoring and referrals."
   },
   {
    "t": "Document AI",
    "b": "Read and classify claim documents automatically."
   },
   {
    "t": "Admin & reporting",
    "b": "Ops dashboards and regulatory reports."
   }
  ],
  "compliance": [
   "IRDAI guidelines",
   "ISO 27001",
   "GDPR",
   "SOC 2"
  ],
  "stack": [
   ".NET",
   "Python",
   "PostgreSQL",
   "React",
   "Azure",
   "OCR / AI"
  ],
  "cases": [],
  "n": "03",
  "photo": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-insurance.dc.html"
 },
 {
  "slug": "healthcare",
  "name": "Healthcare",
  "group": "Health",
  "groupKey": "health",
  "hook": "Care that starts on a phone.",
  "sub": "Patient apps, telemedicine and clinic software built for privacy, uptime and real clinical workflows.",
  "challenges": [
   {
    "t": "Privacy first",
    "b": "Health data needs consent, encryption and access logs everywhere."
   },
   {
    "t": "Clinical workflows",
    "b": "Doctors will not adopt software that adds clicks to a consult."
   },
   {
    "t": "Integration",
    "b": "Labs, pharmacies and records systems all speak different formats."
   }
  ],
  "builds": [
   {
    "t": "Patient apps",
    "b": "Booking, records, reminders and payments."
   },
   {
    "t": "Telemedicine",
    "b": "Video consults, prescriptions and follow-ups."
   },
   {
    "t": "Clinic management",
    "b": "Scheduling, billing and patient records."
   },
   {
    "t": "EHR & records",
    "b": "Structured records with role-based access."
   },
   {
    "t": "Pharmacy & orders",
    "b": "Medicine orders, refills and delivery."
   },
   {
    "t": "Health marketplaces",
    "b": "Doctors, labs and services in one place."
   }
  ],
  "compliance": [
   "HIPAA",
   "ABDM",
   "HL7 / FHIR",
   "GDPR",
   "ISO 27001"
  ],
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "WebRTC",
   "FHIR APIs",
   "AWS"
  ],
  "cases": [
   {
    "name": "HotDoc",
    "line": "Clinic booking & patient engagement",
    "img": "/img/cs/hotdoc/hotdoc1.png"
   },
   {
    "name": "Eka Care",
    "line": "Health records & telemedicine",
    "img": "/img/cs/eka.care/eka.care2.png"
   }
  ],
  "n": "04",
  "photo": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-healthcare.dc.html"
 },
 {
  "slug": "fitness",
  "name": "Fitness & wellness",
  "group": "Health",
  "groupKey": "health",
  "hook": "Habits, built into an app.",
  "sub": "Workout, wellness and coaching apps that keep people coming back after week two.",
  "challenges": [
   {
    "t": "Retention",
    "b": "Most fitness apps lose users within a month."
   },
   {
    "t": "Personalisation",
    "b": "Generic plans do not fit real people."
   },
   {
    "t": "Device data",
    "b": "Wearables and health platforms all report differently."
   }
  ],
  "builds": [
   {
    "t": "Workout apps",
    "b": "Plans, video sessions and progress tracking."
   },
   {
    "t": "Coaching platforms",
    "b": "Trainers, clients, chat and payments."
   },
   {
    "t": "Studio & gym software",
    "b": "Bookings, memberships and check-in."
   },
   {
    "t": "Nutrition apps",
    "b": "Meal plans, logging and goals."
   },
   {
    "t": "Mental wellness",
    "b": "Meditation, journaling and content."
   },
   {
    "t": "Corporate wellness",
    "b": "Challenges and reporting for employers."
   }
  ],
  "compliance": [
   "GDPR",
   "HealthKit / Health Connect",
   "Data consent"
  ],
  "stack": [
   "Flutter",
   "Swift",
   "Kotlin",
   "Node.js",
   "Firebase",
   "HealthKit"
  ],
  "cases": [],
  "n": "05",
  "photo": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-fitness.dc.html"
 },
 {
  "slug": "wearables",
  "name": "Wearables & IoT health",
  "group": "Health",
  "groupKey": "health",
  "hook": "Sensors are easy. Useful data is hard.",
  "sub": "Companion apps and data platforms for wearables, medical devices and connected health.",
  "challenges": [
   {
    "t": "Connectivity",
    "b": "Bluetooth pairing and sync fail in ways users never forgive."
   },
   {
    "t": "Battery & bandwidth",
    "b": "Every byte and every second on-device counts."
   },
   {
    "t": "Turning data into insight",
    "b": "Raw sensor streams mean nothing to a user."
   }
  ],
  "builds": [
   {
    "t": "Companion apps",
    "b": "Pairing, sync and live readings."
   },
   {
    "t": "Device dashboards",
    "b": "Trends, alerts and history."
   },
   {
    "t": "Remote monitoring",
    "b": "Data for clinicians and carers."
   },
   {
    "t": "Firmware OTA",
    "b": "Safe over-the-air updates."
   },
   {
    "t": "Data platforms",
    "b": "Ingest, store and analyse device streams."
   },
   {
    "t": "Admin consoles",
    "b": "Fleet and device management."
   }
  ],
  "compliance": [
   "HIPAA",
   "GDPR",
   "IEC 62304 aware"
  ],
  "stack": [
   "Swift",
   "Kotlin",
   "BLE",
   "MQTT",
   "Python",
   "AWS IoT"
  ],
  "cases": [],
  "n": "06",
  "photo": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-wearables.dc.html"
 },
 {
  "slug": "education",
  "name": "Education & edtech",
  "group": "Learning",
  "groupKey": "learn",
  "hook": "Learning that holds up on exam day.",
  "sub": "Course platforms, assessment and school software built for peak traffic and real classrooms.",
  "challenges": [
   {
    "t": "Exam-day spikes",
    "b": "A whole cohort logs in at the same minute."
   },
   {
    "t": "Engagement",
    "b": "Content alone does not keep learners coming back."
   },
   {
    "t": "Many stakeholders",
    "b": "Students, teachers, parents and admins all need different views."
   }
  ],
  "builds": [
   {
    "t": "Course platforms",
    "b": "Video, live classes and progress."
   },
   {
    "t": "Assessment & testing",
    "b": "Question banks, timed tests and results."
   },
   {
    "t": "School management",
    "b": "Attendance, fees and timetables."
   },
   {
    "t": "Creator & coaching",
    "b": "White-label schools for educators."
   },
   {
    "t": "Adaptive learning",
    "b": "Practice that adjusts to each learner."
   },
   {
    "t": "Corporate LMS",
    "b": "Training, compliance and reporting."
   }
  ],
  "compliance": [
   "GDPR",
   "COPPA",
   "FERPA aware",
   "Accessibility (WCAG)"
  ],
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "WebRTC",
   "GCP"
  ],
  "cases": [
   {
    "name": "Graphy",
    "line": "Creator courses & live cohorts",
    "img": "/img/cs/graphy/graphy1.png"
   },
   {
    "name": "Testbook",
    "line": "Exam prep & assessment",
    "img": "/img/cs/testbook/testbook1.png"
   },
   {
    "name": "Teachmint",
    "line": "School operations platform",
    "img": "/img/cs/teachmint/teachmint.png"
   },
   {
    "name": "Learnosity",
    "line": "Assessment infrastructure",
    "img": "/img/cs/learnosity/learnosity2.png"
   }
  ],
  "n": "07",
  "photo": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-education.dc.html"
 },
 {
  "slug": "ecommerce",
  "name": "E-commerce",
  "group": "Commerce",
  "groupKey": "com",
  "hook": "Storefronts that survive a sale.",
  "sub": "D2C stores, marketplaces and the inventory systems behind them, tuned for peak traffic.",
  "challenges": [
   {
    "t": "Peak traffic",
    "b": "A drop or a festival sale can be ten times normal load."
   },
   {
    "t": "Inventory truth",
    "b": "The store must never sell what the warehouse does not hold."
   },
   {
    "t": "Conversion",
    "b": "Every slow page and extra step costs revenue."
   }
  ],
  "builds": [
   {
    "t": "D2C storefronts",
    "b": "Fast web and app stores with checkout."
   },
   {
    "t": "Marketplaces",
    "b": "Multi-seller listings, payouts and disputes."
   },
   {
    "t": "Seller tools",
    "b": "Catalogue, orders and analytics for sellers."
   },
   {
    "t": "Order & inventory",
    "b": "One source of truth across channels."
   },
   {
    "t": "Loyalty & CRM",
    "b": "Rewards, segments and campaigns."
   },
   {
    "t": "Search & discovery",
    "b": "Search, filters and recommendations."
   }
  ],
  "compliance": [
   "PCI DSS",
   "GDPR",
   "Consumer protection rules"
  ],
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Elasticsearch",
   "Redis",
   "Cloudflare"
  ],
  "cases": [
   {
    "name": "Snitch",
    "line": "Fashion commerce",
    "img": "/img/cs/snitch/snitch1.png"
   },
   {
    "name": "Kogan",
    "line": "Marketplace & seller tools",
    "img": "/img/cs/kogan/kogan2.png"
   },
   {
    "name": "OnBuy",
    "line": "Multi-seller marketplace",
    "img": "/img/cs/onbuy/onbuy1.png"
   },
   {
    "name": "Jaypore",
    "line": "Lifestyle e-commerce",
    "img": "/img/cs/jaypore/jaypore1.png"
   }
  ],
  "n": "08",
  "photo": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-ecommerce.dc.html"
 },
 {
  "slug": "retail",
  "name": "Retail",
  "group": "Commerce",
  "groupKey": "com",
  "hook": "One customer, every channel.",
  "sub": "Omnichannel retail software connecting stores, online and the stock in between.",
  "challenges": [
   {
    "t": "Channel silos",
    "b": "Store, web and app often run on different systems."
   },
   {
    "t": "Stock visibility",
    "b": "Staff and customers need real availability."
   },
   {
    "t": "Store operations",
    "b": "Software has to work for busy floor staff."
   }
  ],
  "builds": [
   {
    "t": "Omnichannel platforms",
    "b": "Order online, pick up or return in store."
   },
   {
    "t": "POS & store apps",
    "b": "Billing, returns and stock lookup."
   },
   {
    "t": "Inventory systems",
    "b": "Stock across stores and warehouses."
   },
   {
    "t": "Loyalty programmes",
    "b": "Points, tiers and offers."
   },
   {
    "t": "Clienteling apps",
    "b": "Staff tools for personal service."
   },
   {
    "t": "Retail analytics",
    "b": "Sales, footfall and stock dashboards."
   }
  ],
  "compliance": [
   "PCI DSS",
   "GST e-invoicing",
   "GDPR"
  ],
  "stack": [
   "React",
   "Node.js",
   ".NET",
   "PostgreSQL",
   "Power BI",
   "Azure"
  ],
  "cases": [
   {
    "name": "Fynd",
    "line": "Omnichannel commerce",
    "img": "/img/cs/fynd/fynd1.png"
   },
   {
    "name": "Jaypore",
    "line": "Lifestyle e-commerce",
    "img": "/img/cs/jaypore/jaypore1.png"
   }
  ],
  "n": "09",
  "photo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-retail.dc.html"
 },
 {
  "slug": "food-delivery",
  "name": "Food & grocery delivery",
  "group": "Commerce",
  "groupKey": "com",
  "hook": "Ten minutes is a systems problem.",
  "sub": "Customer apps, store tools and rider dispatch for food and quick-commerce delivery.",
  "challenges": [
   {
    "t": "Promise vs. reality",
    "b": "The app must never show a slot the system cannot deliver."
   },
   {
    "t": "Three apps, one order",
    "b": "Customer, store and rider must stay in sync."
   },
   {
    "t": "Peak hours",
    "b": "Dinner rush and weekends multiply load."
   }
  ],
  "builds": [
   {
    "t": "Customer apps",
    "b": "Browse, order, pay and track live."
   },
   {
    "t": "Store & kitchen panels",
    "b": "Accept, prepare and hand over."
   },
   {
    "t": "Rider apps",
    "b": "Dispatch, routing and proof of delivery."
   },
   {
    "t": "Dark-store tools",
    "b": "Picking, packing and stock."
   },
   {
    "t": "Admin & ops",
    "b": "Zones, pricing and live monitoring."
   },
   {
    "t": "Promotions engine",
    "b": "Coupons, offers and loyalty."
   }
  ],
  "compliance": [
   "PCI DSS",
   "FSSAI aware",
   "GDPR"
  ],
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Maps APIs"
  ],
  "cases": [
   {
    "name": "MILKRUN",
    "line": "Quick-commerce & rider dispatch",
    "img": "/img/cs/milkrun/milkrun1.png"
   },
   {
    "name": "Zupit",
    "line": "Quick commerce",
    "img": "/img/cs/zypit/zypit2.png"
   },
   {
    "name": "Voly",
    "line": "Dark-store operations",
    "img": "/img/cs/volygroup/volygroup2.png"
   },
   {
    "name": "Grokart",
    "line": "Grocery delivery",
    "img": "/img/cs/thegrocart/thegrocart1.png"
   }
  ],
  "n": "10",
  "photo": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-food-delivery.dc.html"
 },
 {
  "slug": "restaurant",
  "name": "Restaurants",
  "group": "Commerce",
  "groupKey": "com",
  "hook": "Own your orders, not the aggregator.",
  "sub": "Ordering apps, table booking and restaurant management for single outlets and chains.",
  "challenges": [
   {
    "t": "Aggregator dependence",
    "b": "Commissions eat margins on every order."
   },
   {
    "t": "Kitchen flow",
    "b": "Orders from five channels landing in one kitchen."
   },
   {
    "t": "Repeat guests",
    "b": "Most restaurants know nothing about their regulars."
   }
  ],
  "builds": [
   {
    "t": "Ordering apps",
    "b": "Branded delivery and pickup."
   },
   {
    "t": "Table reservations",
    "b": "Booking, waitlists and reminders."
   },
   {
    "t": "QR menus & dine-in",
    "b": "Scan, order and pay at the table."
   },
   {
    "t": "Kitchen display",
    "b": "Orders routed to the right station."
   },
   {
    "t": "Loyalty & CRM",
    "b": "Rewards and repeat-guest marketing."
   },
   {
    "t": "Multi-outlet admin",
    "b": "Menus, pricing and reports per outlet."
   }
  ],
  "compliance": [
   "PCI DSS",
   "GST",
   "FSSAI aware"
  ],
  "stack": [
   "Flutter",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Razorpay",
   "AWS"
  ],
  "cases": [],
  "n": "11",
  "photo": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-restaurant.dc.html"
 },
 {
  "slug": "on-demand",
  "name": "On-demand services",
  "group": "Commerce",
  "groupKey": "com",
  "hook": "Supply, demand and a map.",
  "sub": "Booking and marketplace apps for home services, rides, rentals and anything on demand.",
  "challenges": [
   {
    "t": "Matching",
    "b": "Getting the right provider to the right job quickly."
   },
   {
    "t": "Two-sided growth",
    "b": "Customers and providers both need reasons to stay."
   },
   {
    "t": "Trust & safety",
    "b": "Verification, ratings and dispute handling."
   }
  ],
  "builds": [
   {
    "t": "Customer apps",
    "b": "Search, book, pay and rate."
   },
   {
    "t": "Provider apps",
    "b": "Jobs, schedules, earnings and payouts."
   },
   {
    "t": "Matching & dispatch",
    "b": "Assignment rules and live tracking."
   },
   {
    "t": "Admin console",
    "b": "Verification, pricing and support."
   },
   {
    "t": "Payments & payouts",
    "b": "Split payments, wallets and settlements."
   },
   {
    "t": "Ratings & disputes",
    "b": "Reviews, refunds and moderation."
   }
  ],
  "compliance": [
   "PCI DSS",
   "KYC",
   "GDPR"
  ],
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Maps APIs",
   "GCP"
  ],
  "cases": [
   {
    "name": "MILKRUN",
    "line": "Quick-commerce & rider dispatch",
    "img": "/img/cs/milkrun/milkrun1.png"
   },
   {
    "name": "Voly",
    "line": "Dark-store operations",
    "img": "/img/cs/volygroup/volygroup2.png"
   },
   {
    "name": "Grokart",
    "line": "Grocery delivery",
    "img": "/img/cs/thegrocart/thegrocart1.png"
   }
  ],
  "n": "12",
  "photo": "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-on-demand.dc.html"
 },
 {
  "slug": "logistics",
  "name": "Logistics",
  "group": "Mobility & logistics",
  "groupKey": "move",
  "hook": "Every parcel, every minute, accounted for.",
  "sub": "Fleet, dispatch, tracking and warehouse software for carriers, 3PLs and delivery networks.",
  "challenges": [
   {
    "t": "Live visibility",
    "b": "Customers expect to see their shipment move."
   },
   {
    "t": "Route economics",
    "b": "Every extra kilometre comes out of margin."
   },
   {
    "t": "Proof & exceptions",
    "b": "Failed deliveries need evidence and a fast fix."
   }
  ],
  "builds": [
   {
    "t": "Fleet management",
    "b": "Vehicles, drivers, trips and maintenance."
   },
   {
    "t": "Dispatch & routing",
    "b": "Assignment and route optimisation."
   },
   {
    "t": "Tracking portals",
    "b": "Live status for customers and partners."
   },
   {
    "t": "Driver apps",
    "b": "Jobs, navigation and proof of delivery."
   },
   {
    "t": "Warehouse systems",
    "b": "Receiving, picking and stock."
   },
   {
    "t": "Freight marketplaces",
    "b": "Loads, bids and carriers."
   }
  ],
  "compliance": [
   "E-way bill",
   "GST",
   "ISO 27001"
  ],
  "stack": [
   "Kotlin",
   "React",
   "Node.js",
   "PostgreSQL",
   "Kafka",
   "Maps APIs"
  ],
  "cases": [
   {
    "name": "MILKRUN",
    "line": "Quick-commerce & rider dispatch",
    "img": "/img/cs/milkrun/milkrun1.png"
   },
   {
    "name": "Voly",
    "line": "Dark-store operations",
    "img": "/img/cs/volygroup/volygroup2.png"
   }
  ],
  "n": "13",
  "photo": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-logistics.dc.html"
 },
 {
  "slug": "supply-chain",
  "name": "Supply chain",
  "group": "Mobility & logistics",
  "groupKey": "move",
  "hook": "Know where everything is, before you need it.",
  "sub": "Planning, procurement and visibility software from supplier to shelf.",
  "challenges": [
   {
    "t": "Fragmented data",
    "b": "Suppliers, warehouses and transporters all keep separate records."
   },
   {
    "t": "Forecasting",
    "b": "Too much stock ties up cash; too little loses sales."
   },
   {
    "t": "Supplier coordination",
    "b": "Purchase orders and changes buried in email."
   }
  ],
  "builds": [
   {
    "t": "Procurement portals",
    "b": "POs, approvals and supplier onboarding."
   },
   {
    "t": "Inventory planning",
    "b": "Forecasts, reorder points and alerts."
   },
   {
    "t": "Control towers",
    "b": "One view of orders in transit."
   },
   {
    "t": "Supplier portals",
    "b": "Confirmations, invoices and documents."
   },
   {
    "t": "Traceability",
    "b": "Batch and lot tracking end to end."
   },
   {
    "t": "Analytics",
    "b": "Lead times, fill rates and costs."
   }
  ],
  "compliance": [
   "GST e-invoicing",
   "ISO 27001",
   "SOC 2"
  ],
  "stack": [
   ".NET",
   "React",
   "PostgreSQL",
   "Kafka",
   "Power BI",
   "Azure"
  ],
  "cases": [
   {
    "name": "Fynd",
    "line": "Omnichannel commerce",
    "img": "/img/cs/fynd/fynd1.png"
   },
   {
    "name": "Voly",
    "line": "Dark-store operations",
    "img": "/img/cs/volygroup/volygroup2.png"
   }
  ],
  "n": "14",
  "photo": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-supply-chain.dc.html"
 },
 {
  "slug": "automotive",
  "name": "Automotive",
  "group": "Mobility & logistics",
  "groupKey": "move",
  "hook": "The car is now a software product.",
  "sub": "Dealer, service and connected-car software for manufacturers, dealers and mobility brands.",
  "challenges": [
   {
    "t": "Dealer networks",
    "b": "Hundreds of dealers on different processes."
   },
   {
    "t": "Service experience",
    "b": "Booking and updates still happen by phone."
   },
   {
    "t": "Vehicle data",
    "b": "Connected cars generate data few teams can use."
   }
  ],
  "builds": [
   {
    "t": "Dealer management",
    "b": "Leads, stock, sales and finance."
   },
   {
    "t": "Service booking apps",
    "b": "Appointments, updates and payment."
   },
   {
    "t": "Connected-car apps",
    "b": "Remote controls, status and alerts."
   },
   {
    "t": "Sales configurators",
    "b": "Models, options and pricing online."
   },
   {
    "t": "Parts & inventory",
    "b": "Stock across warehouses and dealers."
   },
   {
    "t": "Owner apps",
    "b": "Documents, reminders and offers."
   }
  ],
  "compliance": [
   "ISO 27001",
   "GDPR",
   "UNECE cyber aware"
  ],
  "stack": [
   "React",
   "Kotlin",
   "Swift",
   "Node.js",
   "PostgreSQL",
   "AWS IoT"
  ],
  "cases": [],
  "n": "15",
  "photo": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-automotive.dc.html"
 },
 {
  "slug": "ev",
  "name": "EMobility",
  "group": "Mobility & logistics",
  "groupKey": "move",
  "hook": "Charging, range and confidence.",
  "sub": "Charging networks, fleet and companion apps for the EV ecosystem.",
  "challenges": [
   {
    "t": "Range anxiety",
    "b": "Drivers need reliable charger data, not guesses."
   },
   {
    "t": "Charger uptime",
    "b": "Broken chargers kill trust in the network."
   },
   {
    "t": "Interoperability",
    "b": "Chargers, roaming and payments follow different standards."
   }
  ],
  "builds": [
   {
    "t": "Charging apps",
    "b": "Find, start, pay and track sessions."
   },
   {
    "t": "CPO platforms",
    "b": "Charger monitoring and pricing."
   },
   {
    "t": "EV fleet tools",
    "b": "Battery, range and charging schedules."
   },
   {
    "t": "Battery analytics",
    "b": "Health and degradation insight."
   },
   {
    "t": "Roaming & billing",
    "b": "Partner networks and settlements."
   },
   {
    "t": "Owner apps",
    "b": "Remote climate, status and trips."
   }
  ],
  "compliance": [
   "OCPP",
   "OCPI",
   "ISO 27001"
  ],
  "stack": [
   "Kotlin",
   "Swift",
   "Node.js",
   "PostgreSQL",
   "MQTT",
   "AWS"
  ],
  "cases": [],
  "n": "16",
  "photo": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-ev.dc.html"
 },
 {
  "slug": "travel",
  "name": "Travel & hospitality",
  "group": "Travel & property",
  "groupKey": "place",
  "hook": "The trip starts long before the airport.",
  "sub": "Booking engines, travel marketplaces and hotel technology for operators and OTAs.",
  "challenges": [
   {
    "t": "Inventory feeds",
    "b": "Flights, hotels and activities all come from different suppliers."
   },
   {
    "t": "Price changes",
    "b": "Fares and rates move by the minute."
   },
   {
    "t": "Service on the move",
    "b": "Travellers need help at the worst possible moments."
   }
  ],
  "builds": [
   {
    "t": "Booking engines",
    "b": "Search, compare, book and pay."
   },
   {
    "t": "Travel marketplaces",
    "b": "Operators, packages and reviews."
   },
   {
    "t": "Hotel tech",
    "b": "Reservations, check-in and guest apps."
   },
   {
    "t": "Trip planners",
    "b": "Itineraries, documents and alerts."
   },
   {
    "t": "Concierge & support",
    "b": "Chat, changes and refunds."
   },
   {
    "t": "Channel managers",
    "b": "Rates and availability across OTAs."
   }
  ],
  "compliance": [
   "PCI DSS",
   "GDPR",
   "IATA aware"
  ],
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Elasticsearch",
   "Redis",
   "GCP"
  ],
  "cases": [],
  "n": "17",
  "photo": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-travel.dc.html"
 },
 {
  "slug": "aviation",
  "name": "Aviation",
  "group": "Travel & property",
  "groupKey": "place",
  "hook": "Software that keeps aircraft on time.",
  "sub": "Passenger, crew and maintenance software for airlines, airports and MROs.",
  "challenges": [
   {
    "t": "On-time pressure",
    "b": "Delays cascade across the whole network."
   },
   {
    "t": "Regulated maintenance",
    "b": "Every task needs records and sign-off."
   },
   {
    "t": "Passenger expectations",
    "b": "Travellers compare airline apps to the best apps they use."
   }
  ],
  "builds": [
   {
    "t": "Passenger apps",
    "b": "Booking, check-in and boarding passes."
   },
   {
    "t": "Crew apps",
    "b": "Rosters, briefings and documents."
   },
   {
    "t": "MRO systems",
    "b": "Work orders, parts and compliance."
   },
   {
    "t": "Airport ops",
    "b": "Gates, turnarounds and resources."
   },
   {
    "t": "Loyalty platforms",
    "b": "Miles, tiers and partners."
   },
   {
    "t": "Disruption tools",
    "b": "Rebooking and notifications."
   }
  ],
  "compliance": [
   "DGCA / EASA aware",
   "ISO 27001",
   "PCI DSS"
  ],
  "stack": [
   "Java / Spring",
   "React",
   "Swift",
   "Kotlin",
   "PostgreSQL",
   "Azure"
  ],
  "cases": [],
  "n": "18",
  "photo": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-aviation.dc.html"
 },
 {
  "slug": "real-estate",
  "name": "Real estate",
  "group": "Travel & property",
  "groupKey": "place",
  "hook": "From listing to keys, in one place.",
  "sub": "Property platforms, CRMs and management software for developers, brokers and landlords.",
  "challenges": [
   {
    "t": "Lead leakage",
    "b": "Enquiries from portals and ads get lost between agents."
   },
   {
    "t": "Long sales cycles",
    "b": "Months of follow-ups for one booking."
   },
   {
    "t": "After-sales",
    "b": "Payments, documents and handover still run on paper."
   }
  ],
  "builds": [
   {
    "t": "Property portals",
    "b": "Listings, search, maps and enquiries."
   },
   {
    "t": "Real estate CRM",
    "b": "Leads, site visits and follow-ups."
   },
   {
    "t": "Developer sales apps",
    "b": "Inventory, bookings and payment plans."
   },
   {
    "t": "Property management",
    "b": "Rent, maintenance and tenants."
   },
   {
    "t": "Virtual tours",
    "b": "3D walkthroughs and floor plans."
   },
   {
    "t": "Customer portals",
    "b": "Demand letters, documents and handover."
   }
  ],
  "compliance": [
   "RERA",
   "GDPR",
   "ISO 27001"
  ],
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Mapbox",
   "WhatsApp API",
   "AWS"
  ],
  "cases": [],
  "n": "19",
  "photo": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-real-estate.dc.html"
 },
 {
  "slug": "construction",
  "name": "Construction",
  "group": "Travel & property",
  "groupKey": "place",
  "hook": "Sites run on paper. They should not.",
  "sub": "Project, site and contractor software for builders and infrastructure firms.",
  "challenges": [
   {
    "t": "Site visibility",
    "b": "Head office cannot see what happened on site today."
   },
   {
    "t": "Cost overruns",
    "b": "Material and labour costs drift without anyone noticing."
   },
   {
    "t": "Many contractors",
    "b": "Dozens of parties sharing drawings and updates."
   }
  ],
  "builds": [
   {
    "t": "Project management",
    "b": "Schedules, milestones and progress."
   },
   {
    "t": "Site apps",
    "b": "Daily reports, photos and attendance."
   },
   {
    "t": "Material tracking",
    "b": "Requests, deliveries and stock."
   },
   {
    "t": "Contractor portals",
    "b": "Bills, approvals and documents."
   },
   {
    "t": "Safety & quality",
    "b": "Inspections and incident reports."
   },
   {
    "t": "Cost dashboards",
    "b": "Budget versus actual by project."
   }
  ],
  "compliance": [
   "ISO 9001",
   "ISO 45001 aware",
   "GST"
  ],
  "stack": [
   "React",
   "Flutter",
   ".NET",
   "PostgreSQL",
   "Power BI",
   "Azure"
  ],
  "cases": [],
  "n": "20",
  "photo": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-construction.dc.html"
 },
 {
  "slug": "manufacturing",
  "name": "Manufacturing",
  "group": "Industry & energy",
  "groupKey": "ind",
  "hook": "The factory floor, finally connected.",
  "sub": "Production, quality and ERP software for manufacturers moving off spreadsheets.",
  "challenges": [
   {
    "t": "Spreadsheet planning",
    "b": "Production plans live in files nobody trusts."
   },
   {
    "t": "Downtime",
    "b": "Machines stop and nobody knows why until it is too late."
   },
   {
    "t": "Traceability",
    "b": "Customers and regulators want batch history on demand."
   }
  ],
  "builds": [
   {
    "t": "Production planning",
    "b": "Schedules, capacity and work orders."
   },
   {
    "t": "MES & shop-floor apps",
    "b": "Operator screens and machine data."
   },
   {
    "t": "Quality management",
    "b": "Inspections, NCRs and CAPA."
   },
   {
    "t": "Inventory & procurement",
    "b": "Raw material to finished goods."
   },
   {
    "t": "Predictive maintenance",
    "b": "Alerts before machines fail."
   },
   {
    "t": "Manufacturing ERP",
    "b": "Finance, sales and production in one model."
   }
  ],
  "compliance": [
   "ISO 9001",
   "GST",
   "IATF aware"
  ],
  "stack": [
   ".NET",
   "React",
   "PostgreSQL",
   "MQTT",
   "Power BI",
   "Azure"
  ],
  "cases": [
   {
    "name": "Voly",
    "line": "Dark-store operations",
    "img": "/img/cs/volygroup/volygroup2.png"
   }
  ],
  "n": "21",
  "photo": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-manufacturing.dc.html"
 },
 {
  "slug": "energy",
  "name": "Energy & utilities",
  "group": "Industry & energy",
  "groupKey": "ind",
  "hook": "Grids, meters and the data between them.",
  "sub": "Field, asset and customer software for energy, oil & gas and utility companies.",
  "challenges": [
   {
    "t": "Remote assets",
    "b": "Pipelines, plants and meters spread over huge areas."
   },
   {
    "t": "Field crews",
    "b": "Work orders still travel on paper and phone calls."
   },
   {
    "t": "Customer billing",
    "b": "Usage, tariffs and payments are complex."
   }
  ],
  "builds": [
   {
    "t": "Asset monitoring",
    "b": "Sensors, alerts and health dashboards."
   },
   {
    "t": "Field service apps",
    "b": "Work orders, checklists and photos."
   },
   {
    "t": "Customer portals",
    "b": "Usage, bills and payments."
   },
   {
    "t": "Smart metering",
    "b": "Meter data collection and analytics."
   },
   {
    "t": "Maintenance planning",
    "b": "Schedules and spare parts."
   },
   {
    "t": "Energy trading tools",
    "b": "Positions, prices and reporting."
   }
  ],
  "compliance": [
   "ISO 27001",
   "ISO 14001 aware",
   "IEC 62443 aware"
  ],
  "stack": [
   "React",
   "Python",
   "Kotlin",
   "PostgreSQL",
   "MQTT",
   "Azure"
  ],
  "cases": [],
  "n": "22",
  "photo": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-energy.dc.html"
 },
 {
  "slug": "agriculture",
  "name": "Agriculture",
  "group": "Industry & energy",
  "groupKey": "ind",
  "hook": "Better decisions, field by field.",
  "sub": "Farm, supply and marketplace software for agribusinesses, FPOs and agritech startups.",
  "challenges": [
   {
    "t": "Low connectivity",
    "b": "Apps must work in fields with weak signal."
   },
   {
    "t": "Fragmented supply",
    "b": "Farmers, traders and buyers rarely share one system."
   },
   {
    "t": "Local languages",
    "b": "Interfaces have to work for every user."
   }
  ],
  "builds": [
   {
    "t": "Farm management",
    "b": "Crops, inputs and field records."
   },
   {
    "t": "Agri marketplaces",
    "b": "Buy inputs, sell produce."
   },
   {
    "t": "Advisory apps",
    "b": "Weather, pests and crop guidance."
   },
   {
    "t": "Procurement tools",
    "b": "Collection, grading and payments."
   },
   {
    "t": "Traceability",
    "b": "Farm-to-shelf batch records."
   },
   {
    "t": "FPO software",
    "b": "Members, stock and accounts."
   }
  ],
  "compliance": [
   "GST",
   "Data consent",
   "FSSAI aware"
  ],
  "stack": [
   "Flutter",
   "Node.js",
   "PostgreSQL",
   "Offline-first sync",
   "GCP"
  ],
  "cases": [],
  "n": "23",
  "photo": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-agriculture.dc.html"
 },
 {
  "slug": "media",
  "name": "OTT & Streaming",
  "group": "Media & social",
  "groupKey": "media",
  "hook": "Streams that do not buffer.",
  "sub": "Streaming, OTT and content platforms for broadcasters, studios and creators.",
  "challenges": [
   {
    "t": "Playback quality",
    "b": "One buffering wheel and viewers leave."
   },
   {
    "t": "Device sprawl",
    "b": "Phones, TVs, web and set-top boxes."
   },
   {
    "t": "Monetisation",
    "b": "Subscriptions, ads and rentals in one product."
   }
  ],
  "builds": [
   {
    "t": "OTT apps",
    "b": "Mobile, web and smart-TV apps."
   },
   {
    "t": "Live streaming",
    "b": "Low-latency events and sports."
   },
   {
    "t": "Content management",
    "b": "Catalogue, rights and scheduling."
   },
   {
    "t": "Subscriptions & paywalls",
    "b": "Plans, trials and payments."
   },
   {
    "t": "Ad insertion",
    "b": "Server-side ads and reporting."
   },
   {
    "t": "Recommendations",
    "b": "Personalised rows and search."
   }
  ],
  "compliance": [
   "DRM (Widevine / FairPlay)",
   "GDPR",
   "COPPA"
  ],
  "stack": [
   "React",
   "Kotlin",
   "Swift",
   "HLS / DASH",
   "Node.js",
   "AWS"
  ],
  "cases": [],
  "n": "24",
  "photo": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-media.dc.html"
 },
 {
  "slug": "entertainment",
  "name": "Entertainment",
  "group": "Media & social",
  "groupKey": "media",
  "hook": "Audiences decide in seconds.",
  "sub": "Ticketing, fan apps and entertainment platforms for studios, venues, artists and promoters.",
  "challenges": [
   {
    "t": "Launch-day spikes",
    "b": "A ticket drop or premiere sends a year of traffic in an hour."
   },
   {
    "t": "Fans on every screen",
    "b": "Mobile, web, TV and social, each expecting the same account."
   },
   {
    "t": "Rights and payouts",
    "b": "Revenue splits between artists, labels and partners must be exact."
   }
  ],
  "builds": [
   {
    "t": "Ticketing platforms",
    "b": "Seat maps, queues and fraud-resistant checkout."
   },
   {
    "t": "Fan & membership apps",
    "b": "Exclusive content, rewards and community."
   },
   {
    "t": "Music & audio apps",
    "b": "Streaming, playlists and offline listening."
   },
   {
    "t": "Venue operations",
    "b": "Access control, F&B ordering and staff tools."
   },
   {
    "t": "Creator payouts",
    "b": "Royalty statements and split payments."
   },
   {
    "t": "Interactive experiences",
    "b": "Live polls, AR filters and second-screen features."
   }
  ],
  "compliance": [
   "PCI DSS",
   "GDPR",
   "COPPA",
   "Accessibility (WCAG 2.2)"
  ],
  "stack": [
   "React",
   "React Native",
   "Node.js",
   "Redis",
   "Kafka",
   "AWS"
  ],
  "cases": [],
  "n": "25",
  "photo": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-entertainment.dc.html"
 },
 {
  "slug": "gaming",
  "name": "Gaming",
  "group": "Media & social",
  "groupKey": "media",
  "hook": "Fair, fast and live.",
  "sub": "Real-money, fantasy, casual and social gaming platforms with the backend to match.",
  "challenges": [
   {
    "t": "Real-time load",
    "b": "Thousands of players acting in the same second."
   },
   {
    "t": "Fair play",
    "b": "Fraud and collusion have to be caught fast."
   },
   {
    "t": "Payments & payouts",
    "b": "Wallets, withdrawals and compliance."
   }
  ],
  "builds": [
   {
    "t": "Fantasy sports",
    "b": "Contests, scoring and leaderboards."
   },
   {
    "t": "Casual games",
    "b": "Mobile games and live ops."
   },
   {
    "t": "Real-money platforms",
    "b": "Wallets, KYC and payouts."
   },
   {
    "t": "Multiplayer backends",
    "b": "Matchmaking and game servers."
   },
   {
    "t": "Live-ops tools",
    "b": "Events, offers and analytics."
   },
   {
    "t": "Community features",
    "b": "Chat, clans and tournaments."
   }
  ],
  "compliance": [
   "KYC",
   "Responsible gaming",
   "PCI DSS"
  ],
  "stack": [
   "Unity",
   "Node.js",
   "Go",
   "Redis",
   "WebSockets",
   "AWS"
  ],
  "cases": [],
  "n": "26",
  "photo": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-gaming.dc.html"
 },
 {
  "slug": "social-media",
  "name": "Social & community",
  "group": "Media & social",
  "groupKey": "media",
  "hook": "Communities people come back to.",
  "sub": "Social apps, creator platforms and community products with feeds, chat and moderation.",
  "challenges": [
   {
    "t": "Cold start",
    "b": "An empty feed kills a new app."
   },
   {
    "t": "Moderation",
    "b": "Growth brings spam, abuse and legal risk."
   },
   {
    "t": "Scale",
    "b": "Feeds and chat get expensive fast."
   }
  ],
  "builds": [
   {
    "t": "Social apps",
    "b": "Profiles, feeds and follows."
   },
   {
    "t": "Creator platforms",
    "b": "Posts, memberships and payouts."
   },
   {
    "t": "Chat & messaging",
    "b": "1:1, groups and media."
   },
   {
    "t": "Community apps",
    "b": "Groups, events and roles."
   },
   {
    "t": "Moderation tools",
    "b": "Reports, queues and AI filters."
   },
   {
    "t": "Dating apps",
    "b": "Matching, chat and safety."
   }
  ],
  "compliance": [
   "IT Rules 2021",
   "GDPR",
   "COPPA"
  ],
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "WebSockets",
   "GCP"
  ],
  "cases": [],
  "n": "27",
  "photo": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-social-media.dc.html"
 },
 {
  "slug": "publishing",
  "name": "News & publishing",
  "group": "Media & social",
  "groupKey": "media",
  "hook": "Readers first, then everything else.",
  "sub": "Digital publishing, paywalls and newsroom tools for publishers and magazines.",
  "challenges": [
   {
    "t": "Ad dependence",
    "b": "Display ad revenue keeps shrinking."
   },
   {
    "t": "Speed",
    "b": "Breaking news has to publish in seconds."
   },
   {
    "t": "Reader loyalty",
    "b": "Search and social traffic does not convert on its own."
   }
  ],
  "builds": [
   {
    "t": "News apps",
    "b": "Fast reading on web and mobile."
   },
   {
    "t": "Paywalls & subscriptions",
    "b": "Metering, plans and payments."
   },
   {
    "t": "Newsroom CMS",
    "b": "Write, edit, approve and publish."
   },
   {
    "t": "Newsletters",
    "b": "Lists, sends and analytics."
   },
   {
    "t": "Podcast & video",
    "b": "Hosting and players."
   },
   {
    "t": "Audience data",
    "b": "Segments and recommendations."
   }
  ],
  "compliance": [
   "GDPR",
   "Accessibility (WCAG)"
  ],
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Elasticsearch",
   "Cloudflare"
  ],
  "cases": [],
  "n": "28",
  "photo": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-publishing.dc.html"
 },
 {
  "slug": "events",
  "name": "Events",
  "group": "Media & social",
  "groupKey": "media",
  "hook": "Before, during and after the event.",
  "sub": "Ticketing, event apps and venue software for organisers, venues and conferences.",
  "challenges": [
   {
    "t": "Spiky demand",
    "b": "Ticket launches sell out in minutes."
   },
   {
    "t": "On-site experience",
    "b": "Entry, schedules and updates in real time."
   },
   {
    "t": "Sponsor value",
    "b": "Sponsors want proof of reach and leads."
   }
  ],
  "builds": [
   {
    "t": "Ticketing platforms",
    "b": "Sales, seats and QR entry."
   },
   {
    "t": "Event apps",
    "b": "Agenda, maps and networking."
   },
   {
    "t": "Check-in systems",
    "b": "Fast scanning and badges."
   },
   {
    "t": "Virtual & hybrid",
    "b": "Streams, chat and booths."
   },
   {
    "t": "Sponsor tools",
    "b": "Lead capture and reports."
   },
   {
    "t": "Venue management",
    "b": "Bookings and resources."
   }
  ],
  "compliance": [
   "PCI DSS",
   "GDPR"
  ],
  "stack": [
   "React",
   "Flutter",
   "Node.js",
   "Redis",
   "WebSockets",
   "AWS"
  ],
  "cases": [],
  "n": "29",
  "photo": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-events.dc.html"
 },
 {
  "slug": "telecom",
  "name": "Telecom",
  "group": "Public & community",
  "groupKey": "pub",
  "hook": "Self-service that actually serves.",
  "sub": "Customer, billing and network software for operators, ISPs and MVNOs.",
  "challenges": [
   {
    "t": "Call-centre load",
    "b": "Most support calls could be self-served."
   },
   {
    "t": "Billing complexity",
    "b": "Plans, add-ons and usage are hard to explain."
   },
   {
    "t": "Legacy OSS/BSS",
    "b": "Modern apps still depend on old systems."
   }
  ],
  "builds": [
   {
    "t": "Self-care apps",
    "b": "Plans, recharge, usage and support."
   },
   {
    "t": "Billing & usage",
    "b": "Real-time balances and invoices."
   },
   {
    "t": "Field service",
    "b": "Installations and repairs."
   },
   {
    "t": "Network dashboards",
    "b": "Monitoring and alerts."
   },
   {
    "t": "Retail & partner tools",
    "b": "SIM activation and KYC."
   },
   {
    "t": "Customer analytics",
    "b": "Churn and upsell insight."
   }
  ],
  "compliance": [
   "TRAI guidelines",
   "ISO 27001",
   "GDPR"
  ],
  "stack": [
   "Java / Spring",
   "React",
   "Kotlin",
   "Kafka",
   "PostgreSQL",
   "Azure"
  ],
  "cases": [],
  "n": "30",
  "photo": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-telecom.dc.html"
 },
 {
  "slug": "government",
  "name": "Politics & Government",
  "group": "Public & community",
  "groupKey": "pub",
  "hook": "Public services, without the queue.",
  "sub": "Citizen portals, case management and civic apps for governments and public bodies.",
  "challenges": [
   {
    "t": "Accessibility",
    "b": "Services must work for every citizen and every device."
   },
   {
    "t": "Security",
    "b": "Citizen data needs the highest protection."
   },
   {
    "t": "Legacy departments",
    "b": "Many systems, few shared records."
   }
  ],
  "builds": [
   {
    "t": "Citizen portals",
    "b": "Applications, payments and status."
   },
   {
    "t": "Case management",
    "b": "Workflows for departments."
   },
   {
    "t": "Grievance systems",
    "b": "Complaints, routing and SLAs."
   },
   {
    "t": "Civic apps",
    "b": "Alerts, reports and information."
   },
   {
    "t": "Campaign & outreach",
    "b": "Volunteers, events and messaging."
   },
   {
    "t": "Dashboards",
    "b": "Programme and performance reporting."
   }
  ],
  "compliance": [
   "Accessibility (GIGW / WCAG)",
   "ISO 27001",
   "Data residency"
  ],
  "stack": [
   "React",
   "Java / Spring",
   "PostgreSQL",
   "Kafka",
   "On-prem / GovCloud"
  ],
  "cases": [],
  "n": "31",
  "photo": "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-government.dc.html"
 },
 {
  "slug": "nonprofit",
  "name": "CSR & Nonprofit",
  "group": "Public & community",
  "groupKey": "pub",
  "hook": "More impact per rupee.",
  "sub": "Donation, volunteer and programme software for NGOs, foundations and CSR teams.",
  "challenges": [
   {
    "t": "Donor trust",
    "b": "Donors want to see where money goes."
   },
   {
    "t": "Field reporting",
    "b": "Programme data arrives late and incomplete."
   },
   {
    "t": "Tight budgets",
    "b": "Software has to be affordable to run."
   }
  ],
  "builds": [
   {
    "t": "Donation platforms",
    "b": "One-time and recurring giving."
   },
   {
    "t": "Volunteer apps",
    "b": "Sign-ups, shifts and hours."
   },
   {
    "t": "Programme tracking",
    "b": "Beneficiaries and outcomes."
   },
   {
    "t": "CSR portals",
    "b": "Grants, approvals and reports."
   },
   {
    "t": "Impact dashboards",
    "b": "Live reporting for donors."
   },
   {
    "t": "Field data apps",
    "b": "Offline surveys and photos."
   }
  ],
  "compliance": [
   "80G / FCRA aware",
   "GDPR"
  ],
  "stack": [
   "Next.js",
   "Flutter",
   "Supabase",
   "PostgreSQL",
   "Vercel"
  ],
  "cases": [],
  "n": "32",
  "photo": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-nonprofit.dc.html"
 },
 {
  "slug": "startups",
  "name": "Startups",
  "group": "Company stage",
  "groupKey": "scale",
  "hook": "From idea to first thousand users.",
  "sub": "MVPs, SaaS and marketplaces for founders who need a product, not a slide deck.",
  "challenges": [
   {
    "t": "Runway",
    "b": "Every week spent building the wrong thing is gone."
   },
   {
    "t": "Foundations",
    "b": "The MVP should not need a rewrite at Series A."
   },
   {
    "t": "Investor proof",
    "b": "Traction needs a product people can actually use."
   }
  ],
  "builds": [
   {
    "t": "MVP development",
    "b": "A focused first release in weeks."
   },
   {
    "t": "SaaS products",
    "b": "Multi-tenancy, billing and onboarding."
   },
   {
    "t": "Marketplaces",
    "b": "Two-sided platforms with payments."
   },
   {
    "t": "Mobile apps",
    "b": "iOS and Android from one codebase."
   },
   {
    "t": "AI features",
    "b": "Assistants and automation in the product."
   },
   {
    "t": "Scalable backends",
    "b": "APIs and infra that grow with you."
   }
  ],
  "compliance": [
   "SOC 2 ready",
   "GDPR"
  ],
  "stack": [
   "Next.js",
   "Flutter",
   "Supabase",
   "Node.js",
   "Vercel",
   "AWS"
  ],
  "cases": [
   {
    "name": "Skydo",
    "line": "Cross-border payments for exporters",
    "img": "/img/cs/skydo/Skydo1.png"
   },
   {
    "name": "Zupit",
    "line": "Quick commerce",
    "img": "/img/cs/zypit/zypit2.png"
   },
   {
    "name": "Grokart",
    "line": "Grocery delivery",
    "img": "/img/cs/thegrocart/thegrocart1.png"
   }
  ],
  "n": "33",
  "photo": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-startups.dc.html"
 },
 {
  "slug": "enterprise",
  "name": "Enterprise",
  "group": "Company stage",
  "groupKey": "scale",
  "hook": "Many systems. One way of working.",
  "sub": "ERP, CRM, internal platforms and integrations for large organisations.",
  "challenges": [
   {
    "t": "System sprawl",
    "b": "Dozens of tools that do not share data."
   },
   {
    "t": "Change management",
    "b": "New software fails if teams do not adopt it."
   },
   {
    "t": "Security & audit",
    "b": "Every system needs SSO, roles and logs."
   }
  ],
  "builds": [
   {
    "t": "ERP systems",
    "b": "Finance, inventory, HR on one model."
   },
   {
    "t": "CRM platforms",
    "b": "Sales, service and partners."
   },
   {
    "t": "Internal tools",
    "b": "Approvals, requests and dashboards."
   },
   {
    "t": "Workflow automation",
    "b": "Remove manual handoffs."
   },
   {
    "t": "Enterprise integration",
    "b": "APIs between core systems."
   },
   {
    "t": "Data platforms",
    "b": "Warehouses and BI."
   }
  ],
  "compliance": [
   "ISO 27001",
   "SOC 2",
   "GDPR",
   "SSO / SAML"
  ],
  "stack": [
   ".NET",
   "Java / Spring",
   "React",
   "PostgreSQL",
   "Kafka",
   "Azure"
  ],
  "cases": [
   {
    "name": "Fynd",
    "line": "Omnichannel commerce",
    "img": "/img/cs/fynd/fynd1.png"
   },
   {
    "name": "Soldo",
    "line": "Company spend management",
    "img": "/img/cs/soldo/soldo.png"
   }
  ],
  "n": "34",
  "photo": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=72&auto=format&fit=crop",
  "page": "industry-enterprise.dc.html"
 }
];

export const bySlug = industries.reduce((m, s) => { m[s.slug] = s; return m; }, {});
