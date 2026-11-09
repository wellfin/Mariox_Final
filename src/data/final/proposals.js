// 99 product-idea proposals, converted from the design's proposals-data.js.
// Each entry is one company we would like to build for: the researched facts
// (with sources), the gaps we see, the three modules, a week-by-week plan, the
// five lines of the concept film and the Mariox cases that back it up.
// None of these companies are Mariox clients.
export const proposals = [
 {
  "slug": "aignosis",
  "name": "Aignosis",
  "site": "https://aignosis.in",
  "domain": "aignosis.in",
  "country": "India",
  "city": "Jaipur",
  "sector": "Healthtech",
  "service": "App + partner portal",
  "brand": "#5B6CFF",
  "weeks": 14,
  "proposition": "Taking AI autism screening from 8,000 children to 100,000 needs software that every clinic, school and health centre can run.",
  "summary": "Aignosis uses a laptop webcam and AI to screen young children for signs associated with autism, and runs a clinic-in-clinic model so paediatricians can add developmental screening to their practice. After a Rs 4 crore seed round led by Antler and Nikhil Kamath, the company is moving from validation to deployment across public and private healthcare in seven more states.",
  "facts": [
   {
    "k": "Seed round",
    "v": "Rs 4 Cr",
    "s": "Led by Antler and Nikhil Kamath, Oct 2026",
    "url": "https://entrackr.com/snippets/antler-nikhil-kamath-back-healthtech-startup-aignosis-with-rs-4-cr-seed-round-12611813"
   },
   {
    "k": "Screenings done",
    "v": "8,000+",
    "s": "Running in 20+ government PHCs in Rajasthan",
    "url": "https://www.medianama.com/2026/10/223-ai-autism-screener-rajasthans-health-centres/"
   },
   {
    "k": "FY26-27 target",
    "v": "100,000",
    "s": "Screenings through public and private networks",
    "url": "https://www.whalesbook.com/news/English/healthcarebiotech/Aignosis-Raises-Rs-4-Crore-to-Expand-AI-Autism-Screening/6ac0d4cb5aacb956d08a3c7e"
   },
   {
    "k": "Regulatory",
    "v": "CDSCO Class B",
    "s": "Regulatory process completed",
    "url": "https://entrackr.com/snippets/antler-nikhil-kamath-back-healthtech-startup-aignosis-with-rs-4-cr-seed-round-12611813"
   }
  ],
  "opportunity": "Screening now arrives through several channels at once: government health centres, about 125 schools with the Apollo SHINE Foundation, Mankind Pharma screening camps with paediatricians, and private clinics in Punjab, NCR, Haryana, Tamil Nadu, Jharkhand, Karnataka and Maharashtra. Each channel books, consents, screens and refers differently. A twelve-fold jump in volume puts the most strain on the parts around the AI model: scheduling, referral follow-up and partner reporting.",
  "gaps": [
   {
    "t": "Partner onboarding",
    "b": "Every new clinic, school or camp needs to go live without an engineer configuring it by hand."
   },
   {
    "t": "Referral loss",
    "b": "A flagged screening only helps if the family reaches a specialist. Follow-up needs to be tracked, not assumed."
   },
   {
    "t": "Proof for funders",
    "b": "Government, CSR and pharma partners will ask for district-level numbers on a regular schedule."
   }
  ],
  "modules": [
   {
    "t": "Partner and clinic portal",
    "b": "One web portal for paediatricians, PHCs, schools and camp organisers.",
    "f": [
     "Self-serve onboarding with role-based access",
     "Session scheduling and device allocation",
     "Multi-state configuration for language and referral rules"
    ]
   },
   {
    "t": "Parent app",
    "b": "A light Android-first app and WhatsApp flow for families.",
    "f": [
     "Booking, digital consent and reminders",
     "Plain-language results in Hindi, Tamil, Kannada, Marathi and more",
     "Referral follow-up nudges until a specialist visit is logged"
    ]
   },
   {
    "t": "Programme dashboards",
    "b": "Reporting that partners can open themselves.",
    "f": [
     "Screenings, flags and referral completion by district",
     "Exports for government and CSR reporting",
     "Audit trail aligned with CDSCO and DPDP requirements"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Shadow two clinics and one school camp; map every channel's flow."
   },
   {
    "w": "Weeks 3-8",
    "t": "Portal and app build",
    "b": "Partner portal, parent app and WhatsApp flows on one shared API."
   },
   {
    "w": "Weeks 9-12",
    "t": "Dashboards and integrations",
    "b": "Reporting layer, exports, and connection to the existing screening engine."
   },
   {
    "w": "Weeks 13-14",
    "t": "Pilot and handover",
    "b": "Live in one new state, then documentation and code handed to your team."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "hotdoc"
  ],
  "film": [
   "8,000 screenings so far",
   "Partner portal",
   "Parent app",
   "District dashboards",
   "Built for 100,000"
  ]
 },
 {
  "slug": "mokobara",
  "name": "Mokobara",
  "site": "https://mokobara.com",
  "domain": "mokobara.com",
  "country": "India",
  "city": "Bengaluru",
  "sector": "D2C travel and lifestyle",
  "service": "AI shopping assistant",
  "brand": "#C9A56A",
  "weeks": 12,
  "proposition": "Luggage is bought a few times a decade. An AI assistant can make each of those decisions feel personal, online and in store.",
  "summary": "Mokobara is a design-led travel brand founded in 2019 by Sangeet Agrawal and Navin Parwal, selling luggage, backpacks and accessories online and through its own stores. Operating revenue nearly doubled to Rs 230 crore in FY25, and in September 2026 the brand raised Rs 170 crore in a Series C led by Sauce.vc.",
  "facts": [
   {
    "k": "FY25 revenue",
    "v": "Rs 230 Cr",
    "s": "Up from Rs 117 Cr in FY24",
    "url": "https://inc42.com/buzz/d2c-luggage-brand-mokobara-bags-%E2%82%B9170-cr/"
   },
   {
    "k": "Series C",
    "v": "Rs 170 Cr",
    "s": "Led by Sauce.vc, Sep 2026",
    "url": "https://inc42.com/buzz/d2c-luggage-brand-mokobara-bags-%E2%82%B9170-cr/"
   },
   {
    "k": "Team size",
    "v": "324",
    "s": "Employees as of May 2026",
    "url": "https://tracxn.com/d/companies/mokobara/__Q0udPPaej0fygydpCQ8Hd-tolTGf-3Pxk7GnEFOwUW4"
   },
   {
    "k": "Founded",
    "v": "2019",
    "s": "Bengaluru",
    "url": "https://www.cbinsights.com/company/mokobara"
   }
  ],
  "opportunity": "Luggage is a low-frequency, considered purchase. Shoppers compare cabin dimensions against airline rules, weigh shell against fabric, and often research online before buying in store. Product procurement and advertising together take about two-thirds of revenue, so every visit that converts on the first try matters. An assistant that knows the catalogue, the customer and the trip can help with both conversion and repeat purchase.",
  "gaps": [
   {
    "t": "Decision friction",
    "b": "Questions about size, airline limits and materials are answered across many separate product pages."
   },
   {
    "t": "Online and store split",
    "b": "A customer who browses online and buys in store looks like two different people."
   },
   {
    "t": "After the sale",
    "b": "Warranty, repairs and accessories are the main reasons to come back, and today they are handled outside the shopping experience."
   }
  ],
  "modules": [
   {
    "t": "Trip-fit assistant",
    "b": "A conversational guide on the site and in WhatsApp.",
    "f": [
     "Recommends sets by trip length, airline and travel style",
     "Grounded only in Mokobara's catalogue and policies",
     "Hands off to a human with full context"
    ]
   },
   {
    "t": "Unified customer profile",
    "b": "One profile across online orders and store purchases.",
    "f": [
     "Store-side lookup for associates",
     "Personalised accessory and upgrade suggestions",
     "Consent-first data handling"
    ]
   },
   {
    "t": "Ownership hub",
    "b": "A post-purchase space for every bag sold.",
    "f": [
     "Warranty registration via QR on the tag",
     "Repair requests with photo upload",
     "Care guides and matched accessories"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Catalogue, support transcripts and store journeys reviewed."
   },
   {
    "w": "Weeks 3-7",
    "t": "Assistant build",
    "b": "Retrieval over catalogue and policies, evaluation set, guardrails."
   },
   {
    "w": "Weeks 8-10",
    "t": "Profile and ownership hub",
    "b": "Shopify and POS data joined; QR warranty flow live."
   },
   {
    "w": "Weeks 11-12",
    "t": "A/B launch",
    "b": "Rolled out to a share of traffic with conversion tracking, then handover."
   }
  ],
  "related": [
   "snitch",
   "fynd",
   "jaypore"
  ],
  "film": [
   "Rs 230 Cr and growing",
   "Trip-fit assistant",
   "One customer profile",
   "Ownership hub",
   "Every journey, personal"
  ]
 },
 {
  "slug": "hostie",
  "name": "Hostie",
  "site": "https://hostie.ai",
  "domain": "hostie.ai",
  "country": "USA",
  "city": "San Francisco",
  "sector": "Restaurant AI",
  "service": "Integrations squad",
  "brand": "#FF7A45",
  "weeks": 12,
  "proposition": "Hostie's AI already answers the phone. The next stage depends on how quickly it can connect to every POS and reservation system a restaurant uses.",
  "summary": "Hostie is an AI guest-communication platform that answers restaurant calls and texts around the clock, books tables, handles private-event enquiries and takes orders. After a $4M seed led by Gradient Ventures, it raised a $12M Series A led by Obvious Ventures in July 2026 to expand integrations, launch new products and grow nationally.",
  "facts": [
   {
    "k": "Guest conversations",
    "v": "2M+",
    "s": "Plus 24M messages processed",
    "url": "https://thetopvoices.com/story/hostie-secures-dollar12m-to-expand-ai-powered-restaurant-communication-platform"
   },
   {
    "k": "Reservations booked",
    "v": "400,000+",
    "s": "And 50,000+ private event enquiries",
    "url": "https://thetopvoices.com/story/hostie-secures-dollar12m-to-expand-ai-powered-restaurant-communication-platform"
   },
   {
    "k": "Series A",
    "v": "$12M",
    "s": "Led by Obvious Ventures, Jul 2026",
    "url": "https://parsers.vc/startup/hostie.ai/"
   },
   {
    "k": "Total raised",
    "v": "$16M",
    "s": "Seed led by Gradient Ventures",
    "url": "https://www.hostie.ai/blogs/4m-seed-round-gradient"
   }
  ],
  "opportunity": "Hostie's own plans focus on deeper links with reservation systems, POS platforms and event tools, workflows for multi-location groups, and direct takeout ordering. Each integration is slow to build and costly to maintain, and every new restaurant group brings a different combination of systems. A dedicated squad that builds integrations on a shared adapter framework would let the core team stay focused on the AI.",
  "gaps": [
   {
    "t": "Integration backlog",
    "b": "Each new POS or reservation partner is a separate project with its own edge cases."
   },
   {
    "t": "Multi-location groups",
    "b": "Operators with many venues need one view, with rules set per location."
   },
   {
    "t": "Takeout ordering",
    "b": "Phone orders have to reach the kitchen with no manual entry and no surprises at the till."
   }
  ],
  "modules": [
   {
    "t": "Adapter framework",
    "b": "One contract that every POS and reservation integration implements.",
    "f": [
     "Shared auth, retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks, not quarters"
    ]
   },
   {
    "t": "Group owner console",
    "b": "A dashboard for multi-venue operators.",
    "f": [
     "Calls, bookings and revenue captured by location",
     "Per-venue rules and escalation",
     "Private-events pipeline across the group"
    ]
   },
   {
    "t": "Takeout order bridge",
    "b": "Voice orders pushed straight into the POS.",
    "f": [
     "Menu sync with modifiers and 86'd items",
     "Payment links by text",
     "Kitchen ticket confirmation loop"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Embed with the team",
    "b": "Join standups, review the integration roadmap, agree on the adapter contract."
   },
   {
    "w": "Weeks 3-6",
    "t": "Framework and first two adapters",
    "b": "Two priority POS or reservation systems shipped on the new contract."
   },
   {
    "w": "Weeks 7-10",
    "t": "Owner console",
    "b": "Multi-location dashboard and the takeout bridge in beta."
   },
   {
    "w": "Weeks 11-12",
    "t": "Scale-out",
    "b": "Playbook for further adapters; squad continues monthly if it is working."
   }
  ],
  "related": [
   "skydo",
   "fynd",
   "airwallex"
  ],
  "film": [
   "2 million guest conversations",
   "Adapter framework",
   "Group owner console",
   "Takeout bridge",
   "Every system, connected"
  ]
 },
 {
  "slug": "sprout-family",
  "name": "Sprout Family",
  "site": "https://www.sproutfamily.ca",
  "domain": "sproutfamily.ca",
  "country": "Canada",
  "city": "Toronto",
  "sector": "Benefits and HR tech",
  "service": "App + HR console",
  "brand": "#3E8E6A",
  "weeks": 14,
  "proposition": "Sprout is expanding from fertility to the full family-building journey. Parental leave and return to work are where employees and HR need each other most.",
  "summary": "Sprout Family is Canada's first integrated family benefits platform, founded in 2023 by Jackie Hanson and Suzanne Mason. In October 2026 it closed an oversubscribed C$3.55M seed round led by BDC Thrive Venture Fund to expand into pregnancy, postpartum, parental leave and return to work, and to deepen partnerships with insurers and benefits providers.",
  "facts": [
   {
    "k": "Seed round",
    "v": "C$3.55M",
    "s": "Led by BDC Thrive Venture Fund, Oct 2026",
    "url": "https://www.newswire.ca/news-releases/sprout-family-closes-3-55m-cad-oversubscribed-seed-round-to-build-canada-s-infrastructure-for-family-building-benefits--832880352.html"
   },
   {
    "k": "Employee access",
    "v": "11x",
    "s": "Growth in employees with access to the platform",
    "url": "https://www.finsmes.com/2026/10/sprout-family-closes-cad3-55m-seed-funding.html"
   },
   {
    "k": "Employers",
    "v": "Wealthsimple",
    "s": "Also EllisDon and Lazer Technologies",
    "url": "https://www.finsmes.com/2026/10/sprout-family-closes-cad3-55m-seed-funding.html"
   },
   {
    "k": "Founded",
    "v": "2023",
    "s": "Toronto",
    "url": "https://femtechinsider.com/sprout-family-raises-cad-3-55m-to-expand-family-building-benefits/"
   }
  ],
  "opportunity": "Leave and return to work involve more parties than fertility support: the employee, their manager, HR, payroll, the insurer and government EI benefits. Gaps in parental leave and return-to-work policies can lead to talent loss. The new modules have to work for the employee on a phone and for HR on a desktop, and connect to the insurers and advisors Sprout already partners with.",
  "gaps": [
   {
    "t": "Leave is a project",
    "b": "Dates, top-ups, EI and handover plans currently live in emails and spreadsheets."
   },
   {
    "t": "HR visibility",
    "b": "People teams need to see who is on leave and when they return, without seeing private health details."
   },
   {
    "t": "Partner data",
    "b": "Insurers and advisors need eligibility and claims data in formats they already accept."
   }
  ],
  "modules": [
   {
    "t": "Leave planner",
    "b": "A guided plan inside the Sprout employee app.",
    "f": [
     "EI and employer top-up estimates by province",
     "Shared timeline with manager and HR",
     "Keep-in-touch and phased return scheduling"
    ]
   },
   {
    "t": "HR console",
    "b": "One place for people teams to manage every family-building benefit.",
    "f": [
     "Leave calendar and return-readiness view",
     "Policy builder for top-ups and return programmes",
     "Privacy boundaries between health data and HR data"
    ]
   },
   {
    "t": "Partner integration layer",
    "b": "Clean APIs for insurers, advisors and HRIS.",
    "f": [
     "Eligibility and enrolment feeds",
     "HRIS connectors for leave dates",
     "PIPEDA-aligned audit logging"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews with HR leads at two client employers and one insurer partner."
   },
   {
    "w": "Weeks 3-8",
    "t": "Leave planner",
    "b": "Employee-side planner built into the existing app."
   },
   {
    "w": "Weeks 9-12",
    "t": "HR console and APIs",
    "b": "Console, policy builder and the first HRIS connector."
   },
   {
    "w": "Weeks 13-14",
    "t": "Pilot",
    "b": "Live with one employer, then handover to Sprout's engineering team."
   }
  ],
  "related": [
   "livi",
   "zava",
   "tend"
  ],
  "film": [
   "11x more employees reached",
   "Leave planner",
   "HR console",
   "Partner APIs",
   "Every family moment"
  ]
 },
 {
  "slug": "huel",
  "name": "Huel",
  "site": "https://huel.com",
  "domain": "huel.com",
  "country": "UK",
  "city": "London",
  "sector": "D2C nutrition",
  "service": "AI personalisation + CX",
  "brand": "#E5E5E5",
  "weeks": 12,
  "proposition": "Four million customers in over 100 countries, and most of them buy on subscription. Personalisation and support automation help keep those subscriptions running.",
  "summary": "Huel makes nutritionally complete food and has sold more than 500 million meals since launch. Revenue rose 19% to £254 million in its tenth financial year. Danone agreed to acquire the business in 2026, and the UK Competition and Markets Authority approved the deal in August.",
  "facts": [
   {
    "k": "FY25 revenue",
    "v": "£254M",
    "s": "Up 19%, with pre-tax profit up 40%",
    "url": "https://www.onflairgroup.com/blogs/huel-breakdown"
   },
   {
    "k": "Meals sold",
    "v": "500M+",
    "s": "Since launch",
    "url": "https://www.onflairgroup.com/blogs/huel-breakdown"
   },
   {
    "k": "UK retail",
    "v": "17,000+",
    "s": "Stores, with over 100,000 stocking points",
    "url": "https://www.foodnavigator.com/Article/2026/08/20/danone-granted-greenlight-for-860-million-huel-acquisition/"
   },
   {
    "k": "Ownership",
    "v": "Danone",
    "s": "Acquisition approved by the CMA, Aug 2026",
    "url": "https://www.foodnavigator.com/Article/2026/08/20/danone-granted-greenlight-for-860-million-huel-acquisition/"
   }
  ],
  "opportunity": "Huel's range now goes well beyond powders, with Daily Greens, Complete Protein and a wider bar range, and it sells through both its own site and retail. More products mean more possible combinations for each customer, and more reasons for a subscription to drift away from what they need. A scoped AI pilot in personalisation and support can show results within a quarter, and can work alongside whatever Danone integration is planned.",
  "gaps": [
   {
    "t": "Range complexity",
    "b": "Choosing between products, flavours and quantities is harder than it was with one powder."
   },
   {
    "t": "Subscription churn",
    "b": "Customers often cancel because they are tired of a flavour or have too much stock, both of which can be fixed."
   },
   {
    "t": "Support volume",
    "b": "Delivery, billing and swap requests are repetitive and well suited to safe automation."
   }
  ],
  "modules": [
   {
    "t": "Nutrition and plan assistant",
    "b": "A guided assistant for building and adjusting a plan.",
    "f": [
     "Recommendations by goal, diet and budget",
     "Grounded in Huel's nutritional data and claims policy",
     "Available on site and in the account area"
    ]
   },
   {
    "t": "Smart save flows",
    "b": "Retention offers based on the reason a customer gives for cancelling.",
    "f": [
     "Flavour swap, skip, or frequency change",
     "Experiments measured against a control group",
     "Works with the existing subscription platform"
    ]
   },
   {
    "t": "CX automation",
    "b": "AI-drafted and auto-resolved tickets with human review.",
    "f": [
     "Order, delivery and billing intents",
     "Confidence thresholds and escalation",
     "Quality dashboard for the CX team"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Churn reasons, ticket taxonomy and catalogue data reviewed with the CX team."
   },
   {
    "w": "Weeks 3-7",
    "t": "Assistant and save flows",
    "b": "Built and evaluated in one market first."
   },
   {
    "w": "Weeks 8-10",
    "t": "CX automation",
    "b": "Top five ticket intents automated with human review."
   },
   {
    "w": "Weeks 11-12",
    "t": "Measure and hand over",
    "b": "Retention and deflection results reported, code handed to Huel."
   }
  ],
  "related": [
   "oda",
   "snitch",
   "onbuy"
  ],
  "film": [
   "500 million meals",
   "Plan assistant",
   "Smart save flows",
   "CX automation",
   "Nutrition, personalised"
  ]
 },
 {
  "slug": "tonys-chocolonely",
  "name": "Tony's Chocolonely",
  "site": "https://tonyschocolonely.com",
  "domain": "tonyschocolonely.com",
  "country": "Netherlands",
  "city": "Amsterdam",
  "sector": "Impact food brand",
  "service": "Traceability data + AI",
  "brand": "#E2231A",
  "weeks": 14,
  "proposition": "Tony's traces every bean from farm to bar. Software can make that data useful to fans, Mission Allies and the FAIR report team.",
  "summary": "Tony's Chocolonely exists to end exploitation in cocoa. Net revenue grew 20% to €240 million in the year to September 2025, and the US became its biggest market. Through Tony's Open Chain, the company sourced nearly 27,000 tonnes of beans and paid 32,133 farmers at least the Living Income Reference Price.",
  "facts": [
   {
    "k": "Net revenue",
    "v": "€240M",
    "s": "Up 20%; US up 50% and now the largest market",
    "url": "https://www.snackandbakery.com/articles/115155-tonys-chocolonely-reports-double-digit-growth"
   },
   {
    "k": "Farmers paid",
    "v": "32,133",
    "s": "At least the Living Income Reference Price",
    "url": "https://us.tonyschocolonely.com/blogs/serious-stuff/annual-fair-report-2024-2025-article"
   },
   {
    "k": "Farms verified",
    "v": "42,538",
    "s": "99.99% deforestation-free",
    "url": "https://nl.tonyschocolonely.com/en/blogs/news/annual-fair-report-2024-2025-article"
   },
   {
    "k": "Child labour",
    "v": "< 5%",
    "s": "At long-term partner co-ops, vs 46.7% industry average",
    "url": "https://nl.tonyschocolonely.com/en/blogs/news/annual-fair-report-2024-2025-article"
   }
  ],
  "opportunity": "Tony's Open Chain now serves 20+ Mission Allies who source cocoa under the same five principles, and every year the FAIR report gathers farm, co-op and payment data. As volumes grow, collecting, checking and sharing this data takes more work, and most fans never see it. A shared data layer could feed the FAIR report, the Allies and a consumer experience from one source.",
  "gaps": [
   {
    "t": "Report assembly",
    "b": "FAIR report figures are compiled from many co-op and partner sources every year."
   },
   {
    "t": "Ally reporting",
    "b": "Each Mission Ally needs its own traceability and premium data, cut to its volumes."
   },
   {
    "t": "Fan connection",
    "b": "The bean-to-bar story is told in reports. Fans could see it from the wrapper."
   }
  ],
  "modules": [
   {
    "t": "Open Chain data platform",
    "b": "One validated dataset for farms, co-ops, volumes and premiums.",
    "f": [
     "Ingestion from co-op and partner systems",
     "Validation rules and anomaly flags",
     "Versioned figures behind the FAIR report"
    ]
   },
   {
    "t": "Mission Ally portal",
    "b": "Self-serve traceability reporting for partners.",
    "f": [
     "Per-Ally volumes, premiums and co-op impact",
     "Downloadable evidence packs for EUDR and audits",
     "Role-based access"
    ]
   },
   {
    "t": "Bar-to-farm experience",
    "b": "Scan a wrapper, meet the co-operative.",
    "f": [
     "Batch-level co-op stories and photos",
     "AI-assisted Q&A grounded in the FAIR report",
     "Localised for NL, US, UK and DE"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-3",
    "t": "Data discovery",
    "b": "Map current sources for the FAIR report and Open Chain."
   },
   {
    "w": "Weeks 4-9",
    "t": "Data platform",
    "b": "Ingestion, validation and the core dataset."
   },
   {
    "w": "Weeks 10-12",
    "t": "Ally portal",
    "b": "Pilot with two Mission Allies."
   },
   {
    "w": "Weeks 13-14",
    "t": "Fan experience pilot",
    "b": "Scan-to-co-op on one bar line, then handover."
   }
  ],
  "related": [
   "stockgro",
   "learnosity",
   "oda"
  ],
  "film": [
   "32,133 farmers paid",
   "Open Chain data platform",
   "Mission Ally portal",
   "Bar-to-farm",
   "Crazy about traceable chocolate"
  ]
 },
 {
  "slug": "so-facet",
  "name": "So/Facet",
  "site": "https://sofacet.com",
  "domain": "sofacet.com",
  "country": "India",
  "city": "India",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#B08D57",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "So/Facet is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "So/Facet is a new Indian consumer brand preparing its online launch and an omnichannel retail build. Raised Rs10 Cr seed (Oct 2026), and online launch Nov 2026 + omnichannel build.",
  "facts": [
   {
    "k": "Seed",
    "v": "Rs10 Cr",
    "s": "Oct 2026",
    "url": "https://sofacet.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Seed led by Sauce; funds earmarked for design & technology",
    "url": "https://sofacet.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "online launch Nov 2026 + omnichannel build",
    "url": "https://sofacet.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/so-facet"
   }
  ],
  "opportunity": "online launch Nov 2026 + omnichannel build. Seed led by Sauce. funds earmarked for design & technology. This is the point where the right software decisions are cheapest to make. We would start with the module that moves So/Facet's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt So/Facet site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Rs10 Cr seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for So/Facet"
  ]
 },
 {
  "slug": "formial-labs",
  "name": "Formial Labs",
  "site": "https://formial.in",
  "domain": "formial.in",
  "country": "India",
  "city": "India",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#D98C7A",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Formial Labs already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Formial Labs is a Bangalore skincare lab whose model centres on an online skin assessment followed by a dermatologist consultation. Rs2.88 Cr pre-seed (Oct 2026), and online skin-assessment + derm consult flow is core.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "Rs2.88 Cr",
    "s": "Oct 2026",
    "url": "https://formial.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Bangalore lab; AI skin analysis / patient dashboard angle",
    "url": "https://formial.in"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "online skin-assessment + derm consult flow is core",
    "url": "https://formial.in"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://formial.in"
   }
  ],
  "opportunity": "online skin-assessment + derm consult flow is core. Bangalore lab. AI skin analysis / patient dashboard angle. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Formial Labs's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Formial Labs's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "Rs2.88 Cr pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Formial Labs"
  ]
 },
 {
  "slug": "maasi",
  "name": "Maasi",
  "site": "https://mymaasi.com",
  "domain": "mymaasi.com",
  "country": "India",
  "city": "Bengaluru",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#E07A2E",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Maasi's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Maasi is a Bengaluru on-demand booking platform with a waitlist of over 4,000 people. Rs6 Cr pre-seed (Oct 2026), and funds go to building its tech platform.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "Rs6 Cr",
    "s": "Oct 2026",
    "url": "https://mymaasi.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Bengaluru; 4,000+ waitlist; on-demand booking app fit",
    "url": "https://mymaasi.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "funds go to building its tech platform",
    "url": "https://mymaasi.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/mymaasi"
   }
  ],
  "opportunity": "funds go to building its tech platform. Bengaluru. 4,000+ waitlist. on-demand booking app fit. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Maasi's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Maasi.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "Rs6 Cr pre-seed",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Maasi"
  ]
 },
 {
  "slug": "bucketlistt",
  "name": "Bucketlistt",
  "site": "https://www.bucketlistt.com",
  "domain": "bucketlistt.com",
  "country": "India",
  "city": "India",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2FA37A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Bucketlistt is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Bucketlistt is an Indian marketplace for booking experiences and activities. $799K seed (Oct 2026), and booking marketplace needs product scale-up.",
  "facts": [
   {
    "k": "Seed",
    "v": "$799K",
    "s": "Oct 2026",
    "url": "https://www.bucketlistt.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Seed led by Kairon Capital",
    "url": "https://www.bucketlistt.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "booking marketplace needs product scale-up",
    "url": "https://www.bucketlistt.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/bucket-listt"
   }
  ],
  "opportunity": "booking marketplace needs product scale-up. Seed led by Kairon Capital. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Bucketlistt's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Bucketlistt site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$799K seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Bucketlistt"
  ]
 },
 {
  "slug": "island-beauty",
  "name": "ISLAND Beauty",
  "site": "https://www.islandbeauty.in",
  "domain": "islandbeauty.in",
  "country": "India",
  "city": "India",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "ISLAND Beauty already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "ISLAND Beauty is a barrier-first skincare brand built for Indian skin. $271K round (Oct 2026, AJVC), and early D2C store, room for AI personalisation.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$271K",
    "s": "Oct 2026, AJVC",
    "url": "https://www.islandbeauty.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Barrier-first skincare for Indian skin",
    "url": "https://www.islandbeauty.in"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "early D2C store, room for AI personalisation",
    "url": "https://www.islandbeauty.in"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.islandbeauty.in"
   }
  ],
  "opportunity": "early D2C store, room for AI personalisation. Barrier-first skincare for Indian skin. This is the point where the right software decisions are cheapest to make. We would start with the module that moves ISLAND Beauty's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from ISLAND Beauty's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$271K latest raise",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for ISLAND Beauty"
  ]
 },
 {
  "slug": "qiroko",
  "name": "Qiroko",
  "site": "https://www.qiroko.in",
  "domain": "qiroko.in",
  "country": "India",
  "city": "Bengaluru",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#C9A56A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Qiroko is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Qiroko is a Bengaluru D2C accessories brand expanding into watches and bags. Rs1.5 Cr pre-seed (Oct 2026), and expanding D2C site into watches & bags.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "Rs1.5 Cr",
    "s": "Oct 2026",
    "url": "https://www.qiroko.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Bengaluru; Rs6 Cr ARR claimed in year one",
    "url": "https://www.qiroko.in"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "expanding D2C site into watches & bags",
    "url": "https://www.qiroko.in"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.qiroko.in"
   }
  ],
  "opportunity": "expanding D2C site into watches & bags. Bengaluru. Rs6 Cr ARR claimed in year one. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Qiroko's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Qiroko site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Rs1.5 Cr pre-seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Qiroko"
  ]
 },
 {
  "slug": "coratia-technologies",
  "name": "Coratia Technologies",
  "site": "https://coratia.com",
  "domain": "coratia.com",
  "country": "India",
  "city": "India",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#1F9E9E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Coratia Technologies is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Coratia Technologies works on marine inspection for B2B and government customers, generating large volumes of inspection data. $1.9M round (Oct 2026), and inspection data needs software/AI dashboards.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$1.9M",
    "s": "Oct 2026",
    "url": "https://coratia.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "B2B/B2G marine inspection",
    "url": "https://coratia.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "inspection data needs software/AI dashboards",
    "url": "https://coratia.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/coratia-technologies-pvt-ltd"
   }
  ],
  "opportunity": "inspection data needs software/AI dashboards. B2B/B2G marine inspection. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Coratia Technologies's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Coratia Technologies's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "$1.9M latest raise",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Coratia Technologies"
  ]
 },
 {
  "slug": "fixxly",
  "name": "Fixxly",
  "site": "https://fixxly.in",
  "domain": "fixxly.in",
  "country": "India",
  "city": "India",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#F2B705",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Fixxly's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Fixxly runs a 30-minute delivery model with riders, dispatch and inventory all moving at once. $5.5M seed (Oct 2026), and 30-min delivery needs ordering & logistics apps.",
  "facts": [
   {
    "k": "Seed",
    "v": "$5.5M",
    "s": "Oct 2026",
    "url": "https://fixxly.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Ops-heavy model: rider, dispatch, inventory software",
    "url": "https://fixxly.in"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "30-min delivery needs ordering & logistics apps",
    "url": "https://fixxly.in"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://fixxly.in"
   }
  ],
  "opportunity": "30-min delivery needs ordering & logistics apps. Ops-heavy model: rider, dispatch, inventory software. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Fixxly's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Fixxly.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "$5.5M seed",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Fixxly"
  ]
 },
 {
  "slug": "vitonnix",
  "name": "Vitonnix",
  "site": "https://vitonnix.in",
  "domain": "vitonnix.in",
  "country": "India",
  "city": "India",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#7A5CFA",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Vitonnix is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Vitonnix is a celebrity-backed Indian consumer brand building its direct-to-consumer growth engine. Seed from Inflection Point Ventures (Oct 2026), and building consumer-growth engine.",
  "facts": [
   {
    "k": "Stage",
    "v": "Early stage",
    "s": "Seed from Inflection Point Ventures (Oct 2026)",
    "url": "https://vitonnix.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Celebrity-backed round; D2C store + CRM fit",
    "url": "https://vitonnix.in"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "building consumer-growth engine",
    "url": "https://vitonnix.in"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://vitonnix.in"
   }
  ],
  "opportunity": "building consumer-growth engine. Celebrity-backed round. D2C store + CRM fit. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Vitonnix's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Vitonnix site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Vitonnix, India",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Vitonnix"
  ]
 },
 {
  "slug": "sorry-sugar",
  "name": "Sorry Sugar",
  "site": "https://sosorrysugar.com",
  "domain": "sosorrysugar.com",
  "country": "India",
  "city": "India",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#E2574C",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Sorry Sugar is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Sorry Sugar makes monk-fruit sweetened coffee drinks. $1M seed (2026), and d2C store and retention tooling.",
  "facts": [
   {
    "k": "Seed",
    "v": "$1M",
    "s": "2026",
    "url": "https://sosorrysugar.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Monk-fruit sweetened coffee drinks",
    "url": "https://sosorrysugar.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "D2C store and retention tooling",
    "url": "https://sosorrysugar.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://sosorrysugar.com"
   }
  ],
  "opportunity": "D2C store and retention tooling. Monk-fruit sweetened coffee drinks. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Sorry Sugar's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Sorry Sugar site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$1M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Sorry Sugar"
  ]
 },
 {
  "slug": "zinara",
  "name": "Zinara",
  "site": "https://zinara.in",
  "domain": "zinara.in",
  "country": "India",
  "city": "India",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#B08D57",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Zinara already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Zinara is a digital-first jewellery brand with more than 400 designs. Rs3.61 Cr pre-seed (Oct 2026, IPV), and digital-first, 400+ designs.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "Rs3.61 Cr",
    "s": "Oct 2026, IPV",
    "url": "https://zinara.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "AI try-on / product discovery angle",
    "url": "https://zinara.in"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "digital-first, 400+ designs",
    "url": "https://zinara.in"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://zinara.in"
   }
  ],
  "opportunity": "digital-first, 400+ designs. AI try-on / product discovery angle. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Zinara's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Zinara's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Rs3.61 Cr pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Zinara"
  ]
 },
 {
  "slug": "the-stack",
  "name": "The Stack",
  "site": "https://thestack.club",
  "domain": "thestack.club",
  "country": "India",
  "city": "Goa",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#2FA37A",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "The Stack's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "The Stack is a Goa-based subscription business growing about five times over. Rs21.5 Cr seed (Oct 2026), and subscription-heavy, growing 5x.",
  "facts": [
   {
    "k": "Seed",
    "v": "Rs21.5 Cr",
    "s": "Oct 2026",
    "url": "https://thestack.club"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Goa-based; subscription & retention app fit",
    "url": "https://thestack.club"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "subscription-heavy, growing 5x",
    "url": "https://thestack.club"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/the-stack-club"
   }
  ],
  "opportunity": "subscription-heavy, growing 5x. Goa-based. subscription & retention app fit. This is the point where the right software decisions are cheapest to make. We would start with the module that moves The Stack's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for The Stack.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "Rs21.5 Cr seed",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for The Stack"
  ]
 },
 {
  "slug": "indian-walker",
  "name": "Indian Walker",
  "site": "https://indianwalker.in",
  "domain": "indianwalker.in",
  "country": "India",
  "city": "India",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#8A6A4A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Indian Walker is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Indian Walker is a footwear brand from the CoFounder Circle venture studio selling through its own site, with marketplaces next. Pre-seed (Sep 2026), and sells via own D2C site, marketplace launch next.",
  "facts": [
   {
    "k": "Stage",
    "v": "Early stage",
    "s": "Pre-seed (Sep 2026)",
    "url": "https://indianwalker.in"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Part of CoFounder Circle venture studio",
    "url": "https://indianwalker.in"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "sells via own D2C site, marketplace launch next",
    "url": "https://indianwalker.in"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://indianwalker.in"
   }
  ],
  "opportunity": "sells via own D2C site, marketplace launch next. Part of CoFounder Circle venture studio. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Indian Walker's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Indian Walker site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Indian Walker, India",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Indian Walker"
  ]
 },
 {
  "slug": "the-whole-truth-foods",
  "name": "The Whole Truth Foods",
  "site": "https://thewholetruthfoods.com",
  "domain": "thewholetruthfoods.com",
  "country": "India",
  "city": "India",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#2B2B2B",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "The Whole Truth Foods already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "The Whole Truth Foods is a content-led Indian food brand known for clean labels. Content-led D2C brand, and personalisation & AI customer support.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Content-led D2C brand",
    "url": "https://thewholetruthfoods.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "India",
    "url": "https://thewholetruthfoods.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "personalisation & AI customer support",
    "url": "https://thewholetruthfoods.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/thewholetruth"
   }
  ],
  "opportunity": "personalisation & AI customer support. This is the point where the right software decisions are cheapest to make. We would start with the module that moves The Whole Truth Foods's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from The Whole Truth Foods's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "The Whole Truth Foods, India",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for The Whole Truth Foods"
  ]
 },
 {
  "slug": "sleepy-owl-coffee",
  "name": "Sleepy Owl Coffee",
  "site": "https://sleepyowl.co",
  "domain": "sleepyowl.co",
  "country": "India",
  "city": "India",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#D9542B",
  "weeks": 10,
  "draft": true,
  "size": "Mid",
  "proposition": "Sleepy Owl Coffee is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Sleepy Owl Coffee is an Indian coffee brand selling direct to consumers and on subscription. D2C store & subscriptions, and aI support / retention flows.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "D2C store & subscriptions",
    "url": "https://sleepyowl.co"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "India",
    "url": "https://sleepyowl.co"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "AI support / retention flows",
    "url": "https://sleepyowl.co"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://sleepyowl.co"
   }
  ],
  "opportunity": "AI support / retention flows. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Sleepy Owl Coffee's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Sleepy Owl Coffee site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Sleepy Owl Coffee, India",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Sleepy Owl Coffee"
  ]
 },
 {
  "slug": "cent",
  "name": "Cent",
  "site": "https://www.cent.health",
  "domain": "cent.health",
  "country": "India",
  "city": "India",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Cent already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Cent is a healthcare company scaling test booking and patient reports. $15M Series A (Oct 2026, Blume, South Park Commons), and scaling booking & reports.",
  "facts": [
   {
    "k": "Series A",
    "v": "$15M",
    "s": "Oct 2026, Blume, South Park Commons",
    "url": "https://www.cent.health"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "AI report summaries for patients",
    "url": "https://www.cent.health"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "scaling booking & reports",
    "url": "https://www.cent.health"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.cent.health"
   }
  ],
  "opportunity": "scaling booking & reports. AI report summaries for patients. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Cent's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Cent's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$15M series a",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Cent"
  ]
 },
 {
  "slug": "marico",
  "name": "Marico",
  "site": "https://marico.com",
  "domain": "marico.com",
  "country": "India",
  "city": "India",
  "sector": "AI and data",
  "service": "Scoped AI pilot",
  "brand": "#E31E24",
  "weeks": 8,
  "draft": true,
  "size": "Big",
  "proposition": "A scoped pilot, delivered in 8 weeks, that Marico's digital team can measure before deciding to scale.",
  "summary": "Marico is a large Indian FMCG company with an active portfolio of digital-first and D2C brands. Large FMCG with active digital & D2C brand portfolio, and pilot-sized AI projects.",
  "facts": [
   {
    "k": "Stage",
    "v": "Enterprise",
    "s": "Large FMCG with active digital & D2C brand portfolio",
    "url": "https://marico.com"
   },
   {
    "k": "Market",
    "v": "India",
    "s": "Approach via digital/innovation team for a small pilot",
    "url": "https://marico.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "pilot-sized AI projects",
    "url": "https://marico.com"
   },
   {
    "k": "Timeline",
    "v": "8 weeks",
    "s": "Scoped pilot",
    "url": "https://www.linkedin.com/company/maricolimited"
   }
  ],
  "opportunity": "pilot-sized AI projects. Approach via digital/innovation team for a small pilot. Large organisations rarely start with a big programme. A tightly scoped pilot with one team, one metric and a fixed timeline gives Marico evidence before committing further.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Marico's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Scope",
    "b": "One team, one metric, one data source agreed."
   },
   {
    "w": "Weeks 3-6",
    "t": "Pilot build",
    "b": "Built inside your security and procurement rules."
   },
   {
    "w": "Weeks 7-8",
    "t": "Measure",
    "b": "Results against a control group, with a scale-up plan."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Marico, India",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Marico"
  ]
 },
 {
  "slug": "neuron-industries",
  "name": "Neuron Industries",
  "site": "https://neuronindustries.com",
  "domain": "neuronindustries.com",
  "country": "USA",
  "city": "Gardena",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#5B6CFF",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Neuron Industries is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Neuron Industries is a Gardena, California company founded in May 2026, building the HMI and interface layer plus developer tools for hardware. $10M seed (Oct 2026), and building HMI/UI layer and dev tools.",
  "facts": [
   {
    "k": "Seed",
    "v": "$10M",
    "s": "Oct 2026",
    "url": "https://neuronindustries.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Gardena, CA; founded May 2026",
    "url": "https://neuronindustries.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "building HMI/UI layer and dev tools",
    "url": "https://neuronindustries.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/neuron-industries-1"
   }
  ],
  "opportunity": "building HMI/UI layer and dev tools. Gardena, CA. founded May 2026. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Neuron Industries's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Neuron Industries's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "$10M seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Neuron Industries"
  ]
 },
 {
  "slug": "altro-health",
  "name": "Altro Health",
  "site": "https://altrohealth.com",
  "domain": "altrohealth.com",
  "country": "USA",
  "city": "New York",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2FA37A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Altro Health is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Altro Health is a New York company building a white-label health platform for gyms and medspas. $7M seed (Oct 2026, NFX), and white-label platform for gyms & medspas.",
  "facts": [
   {
    "k": "Seed",
    "v": "$7M",
    "s": "Oct 2026, NFX",
    "url": "https://altrohealth.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "New York; product/team growth from funds",
    "url": "https://altrohealth.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "white-label platform for gyms & medspas",
    "url": "https://altrohealth.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/altro-health"
   }
  ],
  "opportunity": "white-label platform for gyms & medspas. New York. product/team growth from funds. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Altro Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Altro Health site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$7M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Altro Health"
  ]
 },
 {
  "slug": "moodr-health",
  "name": "Moodr Health",
  "site": "https://moodrhealth.com",
  "domain": "moodrhealth.com",
  "country": "USA",
  "city": "Morgantown",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#7A5CFA",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Moodr Health already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Moodr Health is a Morgantown, West Virginia health company hiring for a nationwide expansion. $3M seed (Oct 2026), and press release says hiring + nationwide expansion.",
  "facts": [
   {
    "k": "Seed",
    "v": "$3M",
    "s": "Oct 2026",
    "url": "https://moodrhealth.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Morgantown, WV",
    "url": "https://moodrhealth.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "press release says hiring + nationwide expansion",
    "url": "https://moodrhealth.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/moodr-health"
   }
  ],
  "opportunity": "press release says hiring + nationwide expansion. Morgantown, WV. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Moodr Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Moodr Health's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$3M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Moodr Health"
  ]
 },
 {
  "slug": "doctours",
  "name": "Doctours",
  "site": "https://www.doctours.com",
  "domain": "doctours.com",
  "country": "USA",
  "city": "San Francisco",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#1F9E9E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Doctours already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Doctours is a San Francisco AI coordination platform for medical journeys, starting with hair restoration and moving into fertility. $2M pre-seed (Oct 2026, Draper, LAUNCH), and expanding AI coordination platform.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "$2M",
    "s": "Oct 2026, Draper, LAUNCH",
    "url": "https://www.doctours.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "San Francisco; hair restoration first, fertility next",
    "url": "https://www.doctours.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "expanding AI coordination platform",
    "url": "https://www.doctours.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/105512408"
   }
  ],
  "opportunity": "expanding AI coordination platform. San Francisco. hair restoration first, fertility next. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Doctours's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Doctours's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$2M pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Doctours"
  ]
 },
 {
  "slug": "otter-health",
  "name": "Otter Health",
  "site": "https://www.otter-health.com",
  "domain": "otter-health.com",
  "country": "USA",
  "city": "USA",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#2F6FDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Otter Health is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Otter Health is building an EHR-agnostic platform that is scaling to more health plans. $8M seed launch (Oct 2026), and eHR-agnostic platform scaling to more plans.",
  "facts": [
   {
    "k": "Seed",
    "v": "$8M",
    "s": "Oct 2026",
    "url": "https://www.otter-health.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Fika Ventures, Evidenced co-led",
    "url": "https://www.otter-health.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "EHR-agnostic platform scaling to more plans",
    "url": "https://www.otter-health.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.otter-health.com"
   }
  ],
  "opportunity": "EHR-agnostic platform scaling to more plans. Fika Ventures, Evidenced co-led. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Otter Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Otter Health's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$8M seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Otter Health"
  ]
 },
 {
  "slug": "sunlight-ai",
  "name": "Sunlight AI",
  "site": "https://sunlightai.com",
  "domain": "sunlightai.com",
  "country": "USA",
  "city": "New York",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#F2B705",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Sunlight AI is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Sunlight AI is building an operating system for independent physicians from New York and Miami. $17.4M seed (Oct 2026), and building OS for independent physicians.",
  "facts": [
   {
    "k": "Seed",
    "v": "$17.4M",
    "s": "Oct 2026",
    "url": "https://sunlightai.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "New York & Miami",
    "url": "https://sunlightai.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "building OS for independent physicians",
    "url": "https://sunlightai.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://sunlightai.com"
   }
  ],
  "opportunity": "building OS for independent physicians. New York & Miami. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Sunlight AI's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Sunlight AI's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$17.4M seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Sunlight AI"
  ]
 },
 {
  "slug": "fave",
  "name": "Fave",
  "site": "https://drinkfave.com",
  "domain": "drinkfave.com",
  "country": "USA",
  "city": "USA",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#E2574C",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Fave is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Fave is a beverage brand that recently launched nationally in Sprouts. $1M seed (2026) + national Sprouts launch, and d2C site & retention.",
  "facts": [
   {
    "k": "Seed",
    "v": "$1M",
    "s": "2026",
    "url": "https://drinkfave.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Founder Ryan Raish",
    "url": "https://drinkfave.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "D2C site & retention",
    "url": "https://drinkfave.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://drinkfave.com"
   }
  ],
  "opportunity": "D2C site & retention. Founder Ryan Raish. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Fave's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Fave site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$1M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Fave"
  ]
 },
 {
  "slug": "bare-beans",
  "name": "Bare Beans",
  "site": "https://barebeans.com",
  "domain": "barebeans.com",
  "country": "USA",
  "city": "Idaho",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#8A6A4A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Bare Beans is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Bare Beans is an Indigenous-founded food brand from Idaho launching direct-to-consumer sales nationwide. $2.79M seed, and launching direct-to-consumer sales nationwide.",
  "facts": [
   {
    "k": "Seed",
    "v": "$2.79M",
    "s": "2026",
    "url": "https://barebeans.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Idaho; Indigenous-founded",
    "url": "https://barebeans.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "launching direct-to-consumer sales nationwide",
    "url": "https://barebeans.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://barebeans.com"
   }
  ],
  "opportunity": "launching direct-to-consumer sales nationwide. Idaho. Indigenous-founded. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Bare Beans's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Bare Beans site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$2.79M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Bare Beans"
  ]
 },
 {
  "slug": "metabolize",
  "name": "Metabolize",
  "site": "https://metabolize.life",
  "domain": "metabolize.life",
  "country": "USA",
  "city": "USA",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2FA37A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Metabolize is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Metabolize is a Stanford research spinout preparing a product launch for January 2027. $3.2M seed (Oct 2026), and product launch planned Jan 2027.",
  "facts": [
   {
    "k": "Seed",
    "v": "$3.2M",
    "s": "Oct 2026",
    "url": "https://metabolize.life"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Stanford research spinout",
    "url": "https://metabolize.life"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "product launch planned Jan 2027",
    "url": "https://metabolize.life"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/metabolize-life"
   }
  ],
  "opportunity": "product launch planned Jan 2027. Stanford research spinout. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Metabolize's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Metabolize site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$3.2M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Metabolize"
  ]
 },
 {
  "slug": "rxactuator",
  "name": "RxActuator",
  "site": "https://rx-actuator.com",
  "domain": "rx-actuator.com",
  "country": "USA",
  "city": "Raleigh",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#3A8DDE",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "RxActuator's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "RxActuator is a Raleigh, North Carolina infusion company planning 'intelligent infusion' technology and clinic growth. Seed from Waypoint (Oct 2026), and plans 'intelligent infusion' tech + clinic growth.",
  "facts": [
   {
    "k": "Stage",
    "v": "Early stage",
    "s": "Seed from Waypoint (Oct 2026)",
    "url": "https://rx-actuator.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Raleigh, NC; relaunched brand Oct 2026",
    "url": "https://rx-actuator.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "plans 'intelligent infusion' tech + clinic growth",
    "url": "https://rx-actuator.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/rxactuator"
   }
  ],
  "opportunity": "plans 'intelligent infusion' tech + clinic growth. Raleigh, NC. relaunched brand Oct 2026. This is the point where the right software decisions are cheapest to make. We would start with the module that moves RxActuator's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for RxActuator.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "RxActuator, USA",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for RxActuator"
  ]
 },
 {
  "slug": "familiar-therapeutics",
  "name": "Familiar Therapeutics",
  "site": "https://familiartx.com",
  "domain": "familiartx.com",
  "country": "USA",
  "city": "Redwood City",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#5B6CFF",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Familiar Therapeutics is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Familiar Therapeutics is a Redwood City, California therapeutics company. $5M seed launch (Oct 2026), and needs web presence & data tooling.",
  "facts": [
   {
    "k": "Seed",
    "v": "$5M",
    "s": "Oct 2026",
    "url": "https://familiartx.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Redwood City, CA",
    "url": "https://familiartx.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "needs web presence & data tooling",
    "url": "https://familiartx.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/familiartx"
   }
  ],
  "opportunity": "needs web presence & data tooling. Redwood City, CA. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Familiar Therapeutics's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Familiar Therapeutics site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$5M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Familiar Therapeutics"
  ]
 },
 {
  "slug": "sharewillow",
  "name": "ShareWillow",
  "site": "https://www.sharewillow.com",
  "domain": "sharewillow.com",
  "country": "USA",
  "city": "New York",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#2FA37A",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "ShareWillow already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "ShareWillow is a New York company with a new AI agent product due in early 2027. $8.5M seed (Oct 2026), and new AI agent product due early 2027.",
  "facts": [
   {
    "k": "Seed",
    "v": "$8.5M",
    "s": "Oct 2026",
    "url": "https://www.sharewillow.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "New York",
    "url": "https://www.sharewillow.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "new AI agent product due early 2027",
    "url": "https://www.sharewillow.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.sharewillow.com"
   }
  ],
  "opportunity": "new AI agent product due early 2027. New York. This is the point where the right software decisions are cheapest to make. We would start with the module that moves ShareWillow's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from ShareWillow's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "$8.5M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for ShareWillow"
  ]
 },
 {
  "slug": "estatemin",
  "name": "EstateMin",
  "site": "https://www.estatemin.com",
  "domain": "estatemin.com",
  "country": "USA",
  "city": "New York",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#1F3A5F",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "EstateMin is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "EstateMin is a New York company with Irish roots building software for law firms. $1.1M pre-seed (Oct 2026), and small team building law-firm product.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "$1.1M",
    "s": "Oct 2026",
    "url": "https://www.estatemin.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "New York, Irish roots",
    "url": "https://www.estatemin.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "small team building law-firm product",
    "url": "https://www.estatemin.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/estatemin"
   }
  ],
  "opportunity": "small team building law-firm product. New York, Irish roots. This is the point where the right software decisions are cheapest to make. We would start with the module that moves EstateMin's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around EstateMin's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "$1.1M pre-seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for EstateMin"
  ]
 },
 {
  "slug": "drizzlex",
  "name": "DrizzleX",
  "site": "https://www.drizzlex.com",
  "domain": "drizzlex.com",
  "country": "USA",
  "city": "Santa Fe Springs",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "DrizzleX already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "DrizzleX is a Santa Fe Springs, California company whose operators need owner dashboards and analytics. $6.8M Series A (Oct 2026), and owner dashboards and analytics.",
  "facts": [
   {
    "k": "Series A",
    "v": "$6.8M",
    "s": "Oct 2026",
    "url": "https://www.drizzlex.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Santa Fe Springs, CA",
    "url": "https://www.drizzlex.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "owner dashboards and analytics",
    "url": "https://www.drizzlex.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/drizzlex"
   }
  ],
  "opportunity": "owner dashboards and analytics. Santa Fe Springs, CA. This is the point where the right software decisions are cheapest to make. We would start with the module that moves DrizzleX's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from DrizzleX's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "$6.8M series a",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for DrizzleX"
  ]
 },
 {
  "slug": "prescalar",
  "name": "PreScalar",
  "site": "https://www.prescalar.ai",
  "domain": "prescalar.ai",
  "country": "USA",
  "city": "San Francisco",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#2F6FDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "PreScalar is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "PreScalar is a San Francisco company founded in 2025 and backed by BMW i Ventures, growing its team and deployments. $7M seed (Oct 2026, BMW i Ventures), and growing team & deployments.",
  "facts": [
   {
    "k": "Seed",
    "v": "$7M",
    "s": "Oct 2026, BMW i Ventures",
    "url": "https://www.prescalar.ai"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "San Francisco; founded 2025",
    "url": "https://www.prescalar.ai"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "growing team & deployments",
    "url": "https://www.prescalar.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/prescalar"
   }
  ],
  "opportunity": "growing team & deployments. San Francisco. founded 2025. This is the point where the right software decisions are cheapest to make. We would start with the module that moves PreScalar's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around PreScalar's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "$7M seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for PreScalar"
  ]
 },
 {
  "slug": "imio",
  "name": "IMIO",
  "site": "https://www.imio.co",
  "domain": "imio.co",
  "country": "USA",
  "city": "Chicago",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2FA37A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "IMIO is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "IMIO is a Chicago agriculture company with farmer-facing products and growing data needs. $12M seed (Oct 2026, Sofinnova), and farmer-facing web/app & data needs.",
  "facts": [
   {
    "k": "Seed",
    "v": "$12M",
    "s": "Oct 2026, Sofinnova",
    "url": "https://www.imio.co"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Chicago",
    "url": "https://www.imio.co"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "farmer-facing web/app & data needs",
    "url": "https://www.imio.co"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/imio-co"
   }
  ],
  "opportunity": "farmer-facing web/app & data needs. Chicago. This is the point where the right software decisions are cheapest to make. We would start with the module that moves IMIO's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt IMIO site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$12M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for IMIO"
  ]
 },
 {
  "slug": "collective-x-health",
  "name": "Collective X Health",
  "site": "https://www.collectivex.health",
  "domain": "collectivex.health",
  "country": "USA",
  "city": "San Francisco",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#7A5CFA",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Collective X Health already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Collective X Health is a San Francisco health company in its early product build. $3.2M pre-seed (Oct 2026, Anthemis), and early product build.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "$3.2M",
    "s": "Oct 2026, Anthemis",
    "url": "https://www.collectivex.health"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "San Francisco",
    "url": "https://www.collectivex.health"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "early product build",
    "url": "https://www.collectivex.health"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/collectivexhealth"
   }
  ],
  "opportunity": "early product build. San Francisco. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Collective X Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Collective X Health's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$3.2M pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Collective X Health"
  ]
 },
 {
  "slug": "puppy-sphere",
  "name": "Puppy Sphere",
  "site": "https://thepuppysphere.com",
  "domain": "thepuppysphere.com",
  "country": "USA",
  "city": "New York",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#F28FAD",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Puppy Sphere's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Puppy Sphere runs puppy studios and events in New York, with booking and membership across cities. Reported seed round (2026), and multi-city booking & membership flows.",
  "facts": [
   {
    "k": "Stage",
    "v": "Early stage",
    "s": "Reported seed round (2026)",
    "url": "https://thepuppysphere.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "New York studios; verify round size before pitching",
    "url": "https://thepuppysphere.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "multi-city booking & membership flows",
    "url": "https://thepuppysphere.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/doggos-events"
   }
  ],
  "opportunity": "multi-city booking & membership flows. New York studios. verify round size before pitching. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Puppy Sphere's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Puppy Sphere.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "Puppy Sphere, USA",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Puppy Sphere"
  ]
 },
 {
  "slug": "stratum-biosciences",
  "name": "Stratum Biosciences",
  "site": "https://stratumbio.com",
  "domain": "stratumbio.com",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#1F9E9E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Stratum Biosciences already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Stratum Biosciences is a Chicago biosciences company expanding R&D partnerships and its SkinSync platform. $2M seed (2026), and expanding R&D partnerships & SkinSync platform.",
  "facts": [
   {
    "k": "Seed",
    "v": "$2M",
    "s": "2026",
    "url": "https://stratumbio.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Moved to Chicago",
    "url": "https://stratumbio.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "expanding R&D partnerships & SkinSync platform",
    "url": "https://stratumbio.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://stratumbio.com"
   }
  ],
  "opportunity": "expanding R&D partnerships & SkinSync platform. Moved to Chicago. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Stratum Biosciences's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Stratum Biosciences's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$2M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Stratum Biosciences"
  ]
 },
 {
  "slug": "flashpass",
  "name": "Flashpass",
  "site": "https://flashpass.com",
  "domain": "flashpass.com",
  "country": "USA",
  "city": "Delaware",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#E07A2E",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Flashpass is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Flashpass is a Delaware education company with a $2.3M healthcare-support training programme. $2.3M healthcare-support education deal in Delaware (2026).",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$2.3M",
    "s": "2026",
    "url": "https://flashpass.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Delaware",
    "url": "https://flashpass.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "$2.3M healthcare-support education deal in Delaware (2026)",
    "url": "https://flashpass.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/flashpass-education"
   }
  ],
  "opportunity": "$2.3M healthcare-support education deal in Delaware (2026). Delaware. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Flashpass's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Flashpass site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$2.3M latest raise",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Flashpass"
  ]
 },
 {
  "slug": "brodie-sports",
  "name": "Brodie Sports",
  "site": "https://www.brodierec.com",
  "domain": "brodierec.com",
  "country": "USA",
  "city": "Chicago",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#E2574C",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Brodie Sports's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Brodie Sports runs recreational sports leagues in Chicago and New York. $3.6M raise (Oct 2026), and league app, registrations, stats.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$3.6M",
    "s": "Oct 2026",
    "url": "https://www.brodierec.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Chicago & New York leagues",
    "url": "https://www.brodierec.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "league app, registrations, stats",
    "url": "https://www.brodierec.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/brodiesports"
   }
  ],
  "opportunity": "league app, registrations, stats. Chicago & New York leagues. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Brodie Sports's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Brodie Sports.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "$3.6M latest raise",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Brodie Sports"
  ]
 },
 {
  "slug": "ultra-security",
  "name": "Ultra Security",
  "site": "https://ultra.security",
  "domain": "ultra.security",
  "country": "USA",
  "city": "Birmingham",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#5B6CFF",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Ultra Security is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Ultra Security is a Birmingham, Michigan security company that recently came out of stealth. $10M seed (Oct 2026), and out of stealth, needs marketing site & docs.",
  "facts": [
   {
    "k": "Seed",
    "v": "$10M",
    "s": "Oct 2026",
    "url": "https://ultra.security"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Birmingham, MI",
    "url": "https://ultra.security"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "out of stealth, needs marketing site & docs",
    "url": "https://ultra.security"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/ultrasecurityhq"
   }
  ],
  "opportunity": "out of stealth, needs marketing site & docs. Birmingham, MI. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Ultra Security's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Ultra Security site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$10M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Ultra Security"
  ]
 },
 {
  "slug": "loopx",
  "name": "LoopX",
  "site": "https://loopx.ai",
  "domain": "loopx.ai",
  "country": "Canada",
  "city": "Toronto",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#2FA37A",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "LoopX already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "LoopX is an applied AI company based in Toronto and Sudbury, growing its customer success team. C$4.05M seed (Aug 2026), and growing applied AI & customer success.",
  "facts": [
   {
    "k": "Seed",
    "v": "C$4.05M",
    "s": "Aug 2026",
    "url": "https://loopx.ai"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Toronto & Sudbury",
    "url": "https://loopx.ai"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "growing applied AI & customer success",
    "url": "https://loopx.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/loopx-ai"
   }
  ],
  "opportunity": "growing applied AI & customer success. Toronto & Sudbury. This is the point where the right software decisions are cheapest to make. We would start with the module that moves LoopX's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from LoopX's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "C$4.05M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for LoopX"
  ]
 },
 {
  "slug": "peripheral",
  "name": "Peripheral",
  "site": "https://www.peripheral.so",
  "domain": "peripheral.so",
  "country": "Canada",
  "city": "Toronto",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#7A5CFA",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Peripheral is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Peripheral is a Toronto sports technology company launching browser-based consumer replay after an NBA Launchpad pilot. $8.7M seed (Aug 2026), and launching browser-based consumer replay.",
  "facts": [
   {
    "k": "Seed",
    "v": "$8.7M",
    "s": "Aug 2026",
    "url": "https://www.peripheral.so"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Toronto; NBA Launchpad pilot",
    "url": "https://www.peripheral.so"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "launching browser-based consumer replay",
    "url": "https://www.peripheral.so"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.peripheral.so"
   }
  ],
  "opportunity": "launching browser-based consumer replay. Toronto. NBA Launchpad pilot. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Peripheral's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Peripheral site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$8.7M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Peripheral"
  ]
 },
 {
  "slug": "bloomsco",
  "name": "Bloomsco",
  "site": "https://bloomsco.com",
  "domain": "bloomsco.com",
  "country": "Canada",
  "city": "Montréal",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#E07A2E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Bloomsco is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Bloomsco is a Montréal company growing its engineering team. C$1M pre-seed (Oct 2026), and growing engineering team.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "C$1M",
    "s": "Oct 2026",
    "url": "https://bloomsco.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Montréal",
    "url": "https://bloomsco.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "growing engineering team",
    "url": "https://bloomsco.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/bloomsco"
   }
  ],
  "opportunity": "growing engineering team. Montréal. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Bloomsco's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Bloomsco's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "C$1M pre-seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Bloomsco"
  ]
 },
 {
  "slug": "molagri",
  "name": "Molagri",
  "site": "https://molagri.com",
  "domain": "molagri.com",
  "country": "Canada",
  "city": "Toronto",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2FA37A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Molagri is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Molagri is a Toronto agriculture company and YC alum, doubling from a team of four. US$5.2M seed (Oct 2026), and team of four doubling.",
  "facts": [
   {
    "k": "Seed",
    "v": "US$5.2M",
    "s": "Oct 2026",
    "url": "https://molagri.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Toronto; YC alum",
    "url": "https://molagri.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "team of four doubling",
    "url": "https://molagri.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/molagri"
   }
  ],
  "opportunity": "team of four doubling. Toronto. YC alum. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Molagri's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Molagri site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "US$5.2M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Molagri"
  ]
 },
 {
  "slug": "rozvelt",
  "name": "Rozvelt",
  "site": "https://www.rozvelt.com",
  "domain": "rozvelt.com",
  "country": "Canada",
  "city": "Montréal",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#4A5A3A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Rozvelt is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Rozvelt is a Montréal company expanding from hunting into defence and first-responder markets. C$3.1M seed (Oct 2026), and expanding into defence & first responders.",
  "facts": [
   {
    "k": "Seed",
    "v": "C$3.1M",
    "s": "Oct 2026",
    "url": "https://www.rozvelt.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Montréal; dated hunting-focused site vs new B2B markets",
    "url": "https://www.rozvelt.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "expanding into defence & first responders",
    "url": "https://www.rozvelt.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/rozvelt"
   }
  ],
  "opportunity": "expanding into defence & first responders. Montréal. dated hunting-focused site vs new B2B markets. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Rozvelt's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Rozvelt site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "C$3.1M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Rozvelt"
  ]
 },
 {
  "slug": "patabid",
  "name": "PataBid",
  "site": "https://www.patabid.com",
  "domain": "patabid.com",
  "country": "Canada",
  "city": "Calgary",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "PataBid already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "PataBid is a Calgary company in its product build-out. C$2M pre-seed (Oct 2026), and product build-out.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "C$2M",
    "s": "Oct 2026",
    "url": "https://www.patabid.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Calgary",
    "url": "https://www.patabid.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "product build-out",
    "url": "https://www.patabid.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/patabid"
   }
  ],
  "opportunity": "product build-out. Calgary. This is the point where the right software decisions are cheapest to make. We would start with the module that moves PataBid's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from PataBid's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "C$2M pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for PataBid"
  ]
 },
 {
  "slug": "variablegrid",
  "name": "Variablegrid",
  "site": "https://www.variablegrid.com",
  "domain": "variablegrid.com",
  "country": "Canada",
  "city": "Alberta",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#F2B705",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Variablegrid's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Variablegrid is an Alberta adaptive power company scaling across Canada. Climate investor backing (2026), and scaling across Canada.",
  "facts": [
   {
    "k": "Stage",
    "v": "Early stage",
    "s": "Climate investor backing (2026)",
    "url": "https://www.variablegrid.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Alberta",
    "url": "https://www.variablegrid.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "scaling across Canada",
    "url": "https://www.variablegrid.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/variablegrid-adaptive-power-inc"
   }
  ],
  "opportunity": "scaling across Canada. Alberta. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Variablegrid's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Variablegrid.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "Variablegrid, Canada",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Variablegrid"
  ]
 },
 {
  "slug": "tydra-labs",
  "name": "Tydra Labs",
  "site": "https://tydralabs.com",
  "domain": "tydralabs.com",
  "country": "Canada",
  "city": "Vancouver",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#1F9E9E",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Tydra Labs is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Tydra Labs is an early-stage Vancouver company building its brand and web presence. C$420K seed (Oct 2026), and early brand & web presence.",
  "facts": [
   {
    "k": "Seed",
    "v": "C$420K",
    "s": "Oct 2026",
    "url": "https://tydralabs.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Vancouver",
    "url": "https://tydralabs.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "early brand & web presence",
    "url": "https://tydralabs.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/tydralab"
   }
  ],
  "opportunity": "early brand & web presence. Vancouver. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Tydra Labs's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Tydra Labs site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "C$420K seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Tydra Labs"
  ]
 },
 {
  "slug": "drive-hockey-analytics",
  "name": "Drive Hockey Analytics",
  "site": "https://drivehockey.com",
  "domain": "drivehockey.com",
  "country": "Canada",
  "city": "Vancouver",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#2F6FDE",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Drive Hockey Analytics's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Drive Hockey Analytics is a Vancouver hockey analytics company building an app for amateur teams. Recently funded (FundedIQ, 2026), and app for amateur teams.",
  "facts": [
   {
    "k": "Stage",
    "v": "Early stage",
    "s": "Recently funded (FundedIQ, 2026)",
    "url": "https://drivehockey.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Vancouver",
    "url": "https://drivehockey.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "app for amateur teams",
    "url": "https://drivehockey.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/drivehockey"
   }
  ],
  "opportunity": "app for amateur teams. Vancouver. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Drive Hockey Analytics's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Drive Hockey Analytics.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "Drive Hockey Analytics, Canada",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Drive Hockey Analytics"
  ]
 },
 {
  "slug": "blair-health",
  "name": "Blair Health",
  "site": "https://blairhealth.com",
  "domain": "blairhealth.com",
  "country": "Canada",
  "city": "Canada",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#2FA37A",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Blair Health's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Blair Health is a Canadian health company working on patient booking and virtual care. $4.2M raise (2026, BetaKit), and patient booking & virtual care.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$4.2M",
    "s": "2026, BetaKit",
    "url": "https://blairhealth.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Canada",
    "url": "https://blairhealth.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "patient booking & virtual care",
    "url": "https://blairhealth.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/blair-health"
   }
  ],
  "opportunity": "patient booking & virtual care. Canada. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Blair Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Blair Health.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$4.2M latest raise",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Blair Health"
  ]
 },
 {
  "slug": "dropgenie",
  "name": "DropGenie",
  "site": "https://dropgenie.com",
  "domain": "dropgenie.com",
  "country": "Canada",
  "city": "Montréal",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#7A5CFA",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "DropGenie is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "DropGenie is a Montréal and Boston health company preparing a broader rollout in early 2027. $5M Seed+ (Oct 2026, BDC Thrive, Merck GHI), and broader rollout early 2027.",
  "facts": [
   {
    "k": "Seed+",
    "v": "$5M",
    "s": "Oct 2026, BDC Thrive, Merck GHI",
    "url": "https://dropgenie.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Montréal & Boston; data-partnership portal fit",
    "url": "https://dropgenie.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "broader rollout early 2027",
    "url": "https://dropgenie.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://dropgenie.com"
   }
  ],
  "opportunity": "broader rollout early 2027. Montréal & Boston. data-partnership portal fit. This is the point where the right software decisions are cheapest to make. We would start with the module that moves DropGenie's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around DropGenie's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$5M seed+",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for DropGenie"
  ]
 },
 {
  "slug": "liquid-death",
  "name": "Liquid Death",
  "site": "https://liquiddeath.com",
  "domain": "liquiddeath.com",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#9A9A9A",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Liquid Death already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Liquid Death is a canned water brand built on heavy digital and brand-led commerce. Heavy digital/brand-led commerce, and aI campaign & e-com tooling.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Heavy digital/brand-led commerce",
    "url": "https://liquiddeath.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://liquiddeath.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI campaign & e-com tooling",
    "url": "https://liquiddeath.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://liquiddeath.com"
   }
  ],
  "opportunity": "AI campaign & e-com tooling. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Liquid Death's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Liquid Death's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Liquid Death, USA",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Liquid Death"
  ]
 },
 {
  "slug": "brooklinen",
  "name": "Brooklinen",
  "site": "https://www.brooklinen.com",
  "domain": "brooklinen.com",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#1F3A5F",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Brooklinen already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Brooklinen is a D2C bedding brand. D2C bedding brand, and aI product finder, CX automation.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "D2C bedding brand",
    "url": "https://www.brooklinen.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://www.brooklinen.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI product finder, CX automation",
    "url": "https://www.brooklinen.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.brooklinen.com"
   }
  ],
  "opportunity": "AI product finder, CX automation. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Brooklinen's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Brooklinen's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Brooklinen, USA",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Brooklinen"
  ]
 },
 {
  "slug": "grove-collaborative",
  "name": "Grove Collaborative",
  "site": "https://www.grove.co",
  "domain": "grove.co",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#2FA37A",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Grove Collaborative already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Grove Collaborative is a subscription commerce company for household essentials. Subscription commerce, and personalisation & retention AI.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Subscription commerce",
    "url": "https://www.grove.co"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://www.grove.co"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "personalisation & retention AI",
    "url": "https://www.grove.co"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/grove-collaborative"
   }
  ],
  "opportunity": "personalisation & retention AI. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Grove Collaborative's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Grove Collaborative's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Grove Collaborative, USA",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Grove Collaborative"
  ]
 },
 {
  "slug": "magic-spoon",
  "name": "Magic Spoon",
  "site": "https://magicspoon.com",
  "domain": "magicspoon.com",
  "country": "USA",
  "city": "USA",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#7A5CFA",
  "weeks": 10,
  "draft": true,
  "size": "Mid",
  "proposition": "Magic Spoon is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Magic Spoon is a cereal brand selling direct and through retail. D2C + retail, and subscription & site optimisation.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "D2C + retail",
    "url": "https://magicspoon.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://magicspoon.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "subscription & site optimisation",
    "url": "https://magicspoon.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://magicspoon.com"
   }
  ],
  "opportunity": "subscription & site optimisation. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Magic Spoon's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Magic Spoon site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Magic Spoon, USA",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Magic Spoon"
  ]
 },
 {
  "slug": "intake-breathing",
  "name": "Intake Breathing",
  "site": "https://www.intakebreathing.com",
  "domain": "intakebreathing.com",
  "country": "USA",
  "city": "USA",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#3A8DDE",
  "weeks": 10,
  "draft": true,
  "size": "Mid",
  "proposition": "Intake Breathing is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Intake Breathing is a breathing-aid brand expanding into the cold and sinus aisle. $62M raise (Oct 2026, Camino Partners), and expanding into cold & sinus aisle.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$62M",
    "s": "Oct 2026, Camino Partners",
    "url": "https://www.intakebreathing.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://www.intakebreathing.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "expanding into cold & sinus aisle",
    "url": "https://www.intakebreathing.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.intakebreathing.com"
   }
  ],
  "opportunity": "expanding into cold & sinus aisle. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Intake Breathing's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Intake Breathing site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$62M latest raise",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Intake Breathing"
  ]
 },
 {
  "slug": "teal-health",
  "name": "Teal Health",
  "site": "https://www.getteal.com",
  "domain": "getteal.com",
  "country": "USA",
  "city": "USA",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#1F9E9E",
  "weeks": 14,
  "draft": true,
  "size": "Mid",
  "proposition": "Teal Health's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Teal Health is a women's health company scaling its patient app and telehealth flow. $22M raise (2026), and scaling patient app & telehealth flow.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$22M",
    "s": "2026",
    "url": "https://www.getteal.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://www.getteal.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "scaling patient app & telehealth flow",
    "url": "https://www.getteal.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/teal-health"
   }
  ],
  "opportunity": "scaling patient app & telehealth flow. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Teal Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Teal Health.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$22M latest raise",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Teal Health"
  ]
 },
 {
  "slug": "ablepay-health",
  "name": "AblePay Health",
  "site": "https://ablepayhealth.com",
  "domain": "ablepayhealth.com",
  "country": "USA",
  "city": "Allentown",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#2F6FDE",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "AblePay Health is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "AblePay Health is an Allentown, Pennsylvania healthcare billing platform. $20M Series A (Oct 2026), and billing platform scale-up.",
  "facts": [
   {
    "k": "Series A",
    "v": "$20M",
    "s": "Oct 2026",
    "url": "https://ablepayhealth.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Allentown, PA",
    "url": "https://ablepayhealth.com"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "billing platform scale-up",
    "url": "https://ablepayhealth.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://ablepayhealth.com"
   }
  ],
  "opportunity": "billing platform scale-up. Allentown, PA. This is the point where the right software decisions are cheapest to make. We would start with the module that moves AblePay Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around AblePay Health's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$20M series a",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for AblePay Health"
  ]
 },
 {
  "slug": "graza",
  "name": "Graza",
  "site": "https://www.graza.co",
  "domain": "graza.co",
  "country": "USA",
  "city": "USA",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#9BB03A",
  "weeks": 10,
  "draft": true,
  "size": "Mid",
  "proposition": "Graza is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Graza is a fast-growing D2C olive oil brand. Fast-growing D2C food brand, and site & retention tooling.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Fast-growing D2C food brand",
    "url": "https://www.graza.co"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://www.graza.co"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "site & retention tooling",
    "url": "https://www.graza.co"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.graza.co"
   }
  ],
  "opportunity": "site & retention tooling. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Graza's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Graza site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "Graza, USA",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Graza"
  ]
 },
 {
  "slug": "blueland",
  "name": "Blueland",
  "site": "https://www.blueland.com",
  "domain": "blueland.com",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Blueland already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Blueland sells refillable cleaning products on subscription. Refill subscriptions, and personalisation & CX automation.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Refill subscriptions",
    "url": "https://www.blueland.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://www.blueland.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "personalisation & CX automation",
    "url": "https://www.blueland.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/liveblueland"
   }
  ],
  "opportunity": "personalisation & CX automation. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Blueland's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Blueland's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Blueland, USA",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Blueland"
  ]
 },
 {
  "slug": "fly-by-jing",
  "name": "Fly By Jing",
  "site": "https://flybyjing.com",
  "domain": "flybyjing.com",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#E2574C",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Fly By Jing already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Fly By Jing is a Sichuan-inspired food brand selling direct and through retail. D2C + retail, and aI recipe/product discovery.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "D2C + retail",
    "url": "https://flybyjing.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "USA",
    "url": "https://flybyjing.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI recipe/product discovery",
    "url": "https://flybyjing.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://flybyjing.com"
   }
  ],
  "opportunity": "AI recipe/product discovery. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Fly By Jing's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Fly By Jing's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Fly By Jing, USA",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Fly By Jing"
  ]
 },
 {
  "slug": "kotn",
  "name": "Kotn",
  "site": "https://kotn.com",
  "domain": "kotn.com",
  "country": "Canada",
  "city": "Toronto",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#8A6A4A",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Kotn already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Kotn is a Toronto apparel brand selling online and in its own stores. D2C apparel + stores, and aI merchandising & site work.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "D2C apparel + stores",
    "url": "https://kotn.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Toronto",
    "url": "https://kotn.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI merchandising & site work",
    "url": "https://kotn.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://kotn.com"
   }
  ],
  "opportunity": "AI merchandising & site work. Toronto. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Kotn's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Kotn's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Kotn, Canada",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Kotn"
  ]
 },
 {
  "slug": "davidstea",
  "name": "DAVIDsTEA",
  "site": "https://davidstea.com",
  "domain": "davidstea.com",
  "country": "Canada",
  "city": "Montréal",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#2FA37A",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "DAVIDsTEA already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "DAVIDsTEA is a Montréal tea retailer that has moved online-first. Online-first after store cuts, and e-com & AI support.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Online-first after store cuts",
    "url": "https://davidstea.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Montréal",
    "url": "https://davidstea.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "e-com & AI support",
    "url": "https://davidstea.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/davidstea"
   }
  ],
  "opportunity": "e-com & AI support. Montréal. This is the point where the right software decisions are cheapest to make. We would start with the module that moves DAVIDsTEA's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from DAVIDsTEA's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "DAVIDsTEA, Canada",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for DAVIDsTEA"
  ]
 },
 {
  "slug": "frank-and-oak",
  "name": "Frank And Oak",
  "site": "https://www.frankandoak.com",
  "domain": "frankandoak.com",
  "country": "Canada",
  "city": "Montréal",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#1F3A5F",
  "weeks": 14,
  "draft": true,
  "size": "Mid",
  "proposition": "Frank And Oak's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Frank And Oak is a Montréal apparel brand selling online. Apparel e-com, and personalisation & app.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Apparel e-com",
    "url": "https://www.frankandoak.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Montréal",
    "url": "https://www.frankandoak.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "personalisation & app",
    "url": "https://www.frankandoak.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.frankandoak.com"
   }
  ],
  "opportunity": "personalisation & app. Montréal. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Frank And Oak's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Frank And Oak.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "Frank And Oak, Canada",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Frank And Oak"
  ]
 },
 {
  "slug": "ulta-beauty",
  "name": "Ulta Beauty",
  "site": "https://www.ulta.com",
  "domain": "ulta.com",
  "country": "USA",
  "city": "USA",
  "sector": "AI and data",
  "service": "Scoped AI pilot",
  "brand": "#F26B21",
  "weeks": 8,
  "draft": true,
  "size": "Big",
  "proposition": "A scoped pilot, delivered in 8 weeks, that Ulta Beauty's digital team can measure before deciding to scale.",
  "summary": "Ulta Beauty is a large US beauty retailer investing in digital. Large retailer investing in digital, and target a scoped AI/app pilot.",
  "facts": [
   {
    "k": "Stage",
    "v": "Enterprise",
    "s": "Large retailer investing in digital",
    "url": "https://www.ulta.com"
   },
   {
    "k": "Market",
    "v": "USA",
    "s": "Approach innovation/vendor team",
    "url": "https://www.ulta.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "target a scoped AI/app pilot",
    "url": "https://www.ulta.com"
   },
   {
    "k": "Timeline",
    "v": "8 weeks",
    "s": "Scoped pilot",
    "url": "https://www.ulta.com"
   }
  ],
  "opportunity": "target a scoped AI/app pilot. Approach innovation/vendor team. Large organisations rarely start with a big programme. A tightly scoped pilot with one team, one metric and a fixed timeline gives Ulta Beauty evidence before committing further.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Ulta Beauty's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Scope",
    "b": "One team, one metric, one data source agreed."
   },
   {
    "w": "Weeks 3-6",
    "t": "Pilot build",
    "b": "Built inside your security and procurement rules."
   },
   {
    "w": "Weeks 7-8",
    "t": "Measure",
    "b": "Results against a control group, with a scale-up plan."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Ulta Beauty, USA",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Ulta Beauty"
  ]
 },
 {
  "slug": "restaurant-brands-international",
  "name": "Restaurant Brands International",
  "site": "https://rbi.com",
  "domain": "rbi.com",
  "country": "Canada",
  "city": "Canada",
  "sector": "AI and data",
  "service": "Scoped AI pilot",
  "brand": "#D9282F",
  "weeks": 8,
  "draft": true,
  "size": "Big",
  "proposition": "A scoped pilot, delivered in 8 weeks, that Restaurant Brands International's digital team can measure before deciding to scale.",
  "summary": "Restaurant Brands International runs digital ordering and loyalty at scale across its restaurant brands. Digital ordering & loyalty at scale, and pitch a small AI pilot.",
  "facts": [
   {
    "k": "Stage",
    "v": "Enterprise",
    "s": "Digital ordering & loyalty at scale",
    "url": "https://rbi.com"
   },
   {
    "k": "Market",
    "v": "Canada",
    "s": "Approach digital/vendor team",
    "url": "https://rbi.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "pitch a small AI pilot",
    "url": "https://rbi.com"
   },
   {
    "k": "Timeline",
    "v": "8 weeks",
    "s": "Scoped pilot",
    "url": "https://rbi.com"
   }
  ],
  "opportunity": "pitch a small AI pilot. Approach digital/vendor team. Large organisations rarely start with a big programme. A tightly scoped pilot with one team, one metric and a fixed timeline gives Restaurant Brands International evidence before committing further.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Restaurant Brands International's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Scope",
    "b": "One team, one metric, one data source agreed."
   },
   {
    "w": "Weeks 3-6",
    "t": "Pilot build",
    "b": "Built inside your security and procurement rules."
   },
   {
    "w": "Weeks 7-8",
    "t": "Measure",
    "b": "Results against a control group, with a scale-up plan."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Restaurant Brands International, Canada",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Restaurant Brands International"
  ]
 },
 {
  "slug": "huppa",
  "name": "Huppa",
  "site": "https://www.huppa.app",
  "domain": "huppa.app",
  "country": "Netherlands",
  "city": "Amsterdam",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#E07A2E",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Huppa's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Huppa is an Amsterdam company building a member app. €1M pre-seed (Oct 2026), and member app & features to build.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€1M",
    "s": "Oct 2026",
    "url": "https://www.huppa.app"
   },
   {
    "k": "Market",
    "v": "Netherlands",
    "s": "Amsterdam",
    "url": "https://www.huppa.app"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "member app & features to build",
    "url": "https://www.huppa.app"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/huppa-app"
   }
  ],
  "opportunity": "member app & features to build. Amsterdam. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Huppa's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Huppa.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "€1M pre-seed",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Huppa"
  ]
 },
 {
  "slug": "intuitivo",
  "name": "Intuitivo",
  "site": "https://intuitivo.pt",
  "domain": "intuitivo.pt",
  "country": "Portugal",
  "city": "Portugal",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Intuitivo already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Intuitivo is a Portuguese education company adding AI grading and feedback. €1.35M seed (Oct 2026), and aI grading/feedback features.",
  "facts": [
   {
    "k": "Seed",
    "v": "€1.35M",
    "s": "Oct 2026",
    "url": "https://intuitivo.pt"
   },
   {
    "k": "Market",
    "v": "Portugal",
    "s": "Portugal",
    "url": "https://intuitivo.pt"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI grading/feedback features",
    "url": "https://intuitivo.pt"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/intuitivo-edu"
   }
  ],
  "opportunity": "AI grading/feedback features. Portugal. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Intuitivo's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Intuitivo's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "€1.35M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Intuitivo"
  ]
 },
 {
  "slug": "carbonfarm",
  "name": "CarbonFarm",
  "site": "https://carbonfarm.tech",
  "domain": "carbonfarm.tech",
  "country": "France",
  "city": "Paris",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#2FA37A",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "CarbonFarm's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "CarbonFarm is a Paris company building MRV tools for farmers. €7M Series A (Oct 2026), and farmer MRV apps & dashboards.",
  "facts": [
   {
    "k": "Series A",
    "v": "€7M",
    "s": "Oct 2026",
    "url": "https://carbonfarm.tech"
   },
   {
    "k": "Market",
    "v": "France",
    "s": "Paris",
    "url": "https://carbonfarm.tech"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "farmer MRV apps & dashboards",
    "url": "https://carbonfarm.tech"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://carbonfarm.tech"
   }
  ],
  "opportunity": "farmer MRV apps & dashboards. Paris. This is the point where the right software decisions are cheapest to make. We would start with the module that moves CarbonFarm's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for CarbonFarm.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "€7M series a",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for CarbonFarm"
  ]
 },
 {
  "slug": "ambio",
  "name": "Ambio",
  "site": "https://www.ambiomaterials.com",
  "domain": "ambiomaterials.com",
  "country": "Finland",
  "city": "Helsinki",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#1F9E9E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Ambio already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Ambio is a Helsinki company building an AI-native procurement service for materials. €5.1M seed (Oct 2026), and aI-native procurement service build.",
  "facts": [
   {
    "k": "Seed",
    "v": "€5.1M",
    "s": "Oct 2026",
    "url": "https://www.ambiomaterials.com"
   },
   {
    "k": "Market",
    "v": "Finland",
    "s": "Helsinki",
    "url": "https://www.ambiomaterials.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI-native procurement service build",
    "url": "https://www.ambiomaterials.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/ambio-materials"
   }
  ],
  "opportunity": "AI-native procurement service build. Helsinki. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Ambio's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Ambio's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "€5.1M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Ambio"
  ]
 },
 {
  "slug": "finches",
  "name": "Finches",
  "site": "https://www.finches.ai",
  "domain": "finches.ai",
  "country": "Germany",
  "city": "Bavaria",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#F2B705",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Finches is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Finches is a Bavarian company in its early product and web build. €2M pre-seed (Oct 2026), and early product & web.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€2M",
    "s": "Oct 2026",
    "url": "https://www.finches.ai"
   },
   {
    "k": "Market",
    "v": "Germany",
    "s": "Bavaria",
    "url": "https://www.finches.ai"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "early product & web",
    "url": "https://www.finches.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/finchesai"
   }
  ],
  "opportunity": "early product & web. Bavaria. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Finches's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Finches's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "€2M pre-seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Finches"
  ]
 },
 {
  "slug": "solvera",
  "name": "Solvera",
  "site": "https://www.solvera.ai",
  "domain": "solvera.ai",
  "country": "Norway",
  "city": "Oslo",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#5B6CFF",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Solvera is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Solvera is an Oslo company founded in July 2026 and backed by Seedcamp. €5.62M pre-seed (Oct 2026, Seedcamp), and new firm building tooling.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€5.62M",
    "s": "Oct 2026, Seedcamp",
    "url": "https://www.solvera.ai"
   },
   {
    "k": "Market",
    "v": "Norway",
    "s": "Oslo; founded Jul 2026",
    "url": "https://www.solvera.ai"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "new firm building tooling",
    "url": "https://www.solvera.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.solvera.ai"
   }
  ],
  "opportunity": "new firm building tooling. Oslo. founded Jul 2026. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Solvera's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Solvera's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "€5.62M pre-seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Solvera"
  ]
 },
 {
  "slug": "vessla",
  "name": "Vessla",
  "site": "https://vessla.ai",
  "domain": "vessla.ai",
  "country": "Sweden",
  "city": "Stockholm",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#2F6FDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Vessla is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Vessla is a Stockholm company whose product depends on many integrations. €2.94M pre-seed (Oct 2026), and integrations-heavy build.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€2.94M",
    "s": "Oct 2026",
    "url": "https://vessla.ai"
   },
   {
    "k": "Market",
    "v": "Sweden",
    "s": "Stockholm",
    "url": "https://vessla.ai"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "integrations-heavy build",
    "url": "https://vessla.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/vesslaai"
   }
  ],
  "opportunity": "integrations-heavy build. Stockholm. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Vessla's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Vessla's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "€2.94M pre-seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Vessla"
  ]
 },
 {
  "slug": "reebuild",
  "name": "reebuild",
  "site": "https://www.reebuild.com",
  "domain": "reebuild.com",
  "country": "Austria",
  "city": "Vienna",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#E07A2E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "reebuild already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "reebuild is a Vienna company scaling document automation. €3M seed (Oct 2026), and scaling document automation.",
  "facts": [
   {
    "k": "Seed",
    "v": "€3M",
    "s": "Oct 2026",
    "url": "https://www.reebuild.com"
   },
   {
    "k": "Market",
    "v": "Austria",
    "s": "Vienna",
    "url": "https://www.reebuild.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "scaling document automation",
    "url": "https://www.reebuild.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/ree-build"
   }
  ],
  "opportunity": "scaling document automation. Vienna. This is the point where the right software decisions are cheapest to make. We would start with the module that moves reebuild's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from reebuild's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "€3M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for reebuild"
  ]
 },
 {
  "slug": "today",
  "name": "TODAY",
  "site": "https://www.usetoday.io",
  "domain": "usetoday.io",
  "country": "Denmark",
  "city": "Copenhagen",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#F2B705",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "TODAY is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "TODAY is a Copenhagen company building its product and integrations. €2.8M seed (Oct 2026), and product & integrations.",
  "facts": [
   {
    "k": "Seed",
    "v": "€2.8M",
    "s": "Oct 2026",
    "url": "https://www.usetoday.io"
   },
   {
    "k": "Market",
    "v": "Denmark",
    "s": "Copenhagen",
    "url": "https://www.usetoday.io"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "product & integrations",
    "url": "https://www.usetoday.io"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/usetoday"
   }
  ],
  "opportunity": "product & integrations. Copenhagen. This is the point where the right software decisions are cheapest to make. We would start with the module that moves TODAY's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around TODAY's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "€2.8M seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for TODAY"
  ]
 },
 {
  "slug": "fronted",
  "name": "Fronted",
  "site": "https://fronted.com",
  "domain": "fronted.com",
  "country": "Norway",
  "city": "Norway",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2FA37A",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Fronted is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Fronted is a Norwegian company building a customer portal and automation. 18 MNOK seed (Oct 2026), and customer portal & automation.",
  "facts": [
   {
    "k": "Seed",
    "v": "18 MNOK",
    "s": "Oct 2026",
    "url": "https://fronted.com"
   },
   {
    "k": "Market",
    "v": "Norway",
    "s": "Norway",
    "url": "https://fronted.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "customer portal & automation",
    "url": "https://fronted.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/frontedhr"
   }
  ],
  "opportunity": "customer portal & automation. Norway. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Fronted's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Fronted site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "18 MNOK seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Fronted"
  ]
 },
 {
  "slug": "elevatry",
  "name": "Elevatry",
  "site": "https://www.elevatry.ai",
  "domain": "elevatry.ai",
  "country": "Germany",
  "city": "Munich",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#7A5CFA",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Elevatry already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Elevatry is a Munich-area company in its early product build. €3M pre-seed (Oct 2026), and early product build.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€3M",
    "s": "Oct 2026",
    "url": "https://www.elevatry.ai"
   },
   {
    "k": "Market",
    "v": "Germany",
    "s": "Munich area",
    "url": "https://www.elevatry.ai"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "early product build",
    "url": "https://www.elevatry.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/elevatry"
   }
  ],
  "opportunity": "early product build. Munich area. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Elevatry's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Elevatry's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "€3M pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Elevatry"
  ]
 },
 {
  "slug": "artiso",
  "name": "ARTISO",
  "site": "https://www.artiso.ai",
  "domain": "artiso.ai",
  "country": "Spain",
  "city": "Barcelona",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#E2574C",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "ARTISO already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "ARTISO is a Barcelona company scaling its AI product to brands worldwide. €3M+ pre-seed (Oct 2026), and scaling to brands worldwide.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€3M+",
    "s": "Oct 2026",
    "url": "https://www.artiso.ai"
   },
   {
    "k": "Market",
    "v": "Spain",
    "s": "Barcelona",
    "url": "https://www.artiso.ai"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "scaling to brands worldwide",
    "url": "https://www.artiso.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/artiso-ai"
   }
  ],
  "opportunity": "scaling to brands worldwide. Barcelona. This is the point where the right software decisions are cheapest to make. We would start with the module that moves ARTISO's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from ARTISO's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "€3M+ pre-seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for ARTISO"
  ]
 },
 {
  "slug": "plinto",
  "name": "Plinto",
  "site": "https://plinto.ai",
  "domain": "plinto.ai",
  "country": "Denmark",
  "city": "Copenhagen",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#1F9E9E",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Plinto is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Plinto is a Copenhagen company building ERP integrations. €2.9M pre-seed (Oct 2026), and eRP integrations.",
  "facts": [
   {
    "k": "Pre-seed",
    "v": "€2.9M",
    "s": "Oct 2026",
    "url": "https://plinto.ai"
   },
   {
    "k": "Market",
    "v": "Denmark",
    "s": "Copenhagen",
    "url": "https://plinto.ai"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "ERP integrations",
    "url": "https://plinto.ai"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://plinto.ai"
   }
  ],
  "opportunity": "ERP integrations. Copenhagen. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Plinto's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Plinto's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "€2.9M pre-seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Plinto"
  ]
 },
 {
  "slug": "stride",
  "name": "Stride",
  "site": "https://www.getstride.com",
  "domain": "getstride.com",
  "country": "UK",
  "city": "UK",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#2FA37A",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Stride's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Stride is a UK company combining DNA methylation testing with a coaching app. £4.6M seed (Oct 2026), and testing + coaching app.",
  "facts": [
   {
    "k": "Seed",
    "v": "£4.6M",
    "s": "Oct 2026",
    "url": "https://www.getstride.com"
   },
   {
    "k": "Market",
    "v": "UK",
    "s": "DNA methylation testing",
    "url": "https://www.getstride.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "testing + coaching app",
    "url": "https://www.getstride.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/stridebiolabs"
   }
  ],
  "opportunity": "testing + coaching app. DNA methylation testing. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Stride's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Stride.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "£4.6M seed",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Stride"
  ]
 },
 {
  "slug": "something-and-nothing",
  "name": "Something & Nothing",
  "site": "https://somethingandnothing.co",
  "domain": "somethingandnothing.co",
  "country": "UK",
  "city": "UK",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#E07A2E",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Something & Nothing is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Something & Nothing is a B Corp soda brand growing direct-to-consumer and in the US. $6.4M seed (Oct 2026, Venrex), and d2C & US growth.",
  "facts": [
   {
    "k": "Seed",
    "v": "$6.4M",
    "s": "Oct 2026, Venrex",
    "url": "https://somethingandnothing.co"
   },
   {
    "k": "Market",
    "v": "UK",
    "s": "B Corp soda brand",
    "url": "https://somethingandnothing.co"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "D2C & US growth",
    "url": "https://somethingandnothing.co"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://somethingandnothing.co"
   }
  ],
  "opportunity": "D2C & US growth. B Corp soda brand. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Something & Nothing's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Something & Nothing site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$6.4M seed",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Something & Nothing"
  ]
 },
 {
  "slug": "genie-health",
  "name": "Genie Health",
  "site": "https://geniehealth.care",
  "domain": "geniehealth.care",
  "country": "Singapore",
  "city": "Singapore",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "Genie Health already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Genie Health is a Singapore health company founded by a former PropertyGuru CEO. US$3M seed (Oct 2026), and app & AI features.",
  "facts": [
   {
    "k": "Seed",
    "v": "US$3M",
    "s": "Oct 2026",
    "url": "https://geniehealth.care"
   },
   {
    "k": "Market",
    "v": "Singapore",
    "s": "Founded by ex-PropertyGuru CEO",
    "url": "https://geniehealth.care"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "app & AI features",
    "url": "https://geniehealth.care"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://geniehealth.care"
   }
  ],
  "opportunity": "app & AI features. Founded by ex-PropertyGuru CEO. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Genie Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Genie Health's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "US$3M seed",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Genie Health"
  ]
 },
 {
  "slug": "blue-whale-energy",
  "name": "Blue Whale Energy",
  "site": "https://www.bluewhaleenergy.com",
  "domain": "bluewhaleenergy.com",
  "country": "Singapore",
  "city": "Singapore",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#2F6FDE",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Blue Whale Energy is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Blue Whale Energy is a Singapore energy company that needs project dashboards and a stronger web presence. $4M raise (Oct 2026), and project dashboards & web.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "$4M",
    "s": "Oct 2026",
    "url": "https://www.bluewhaleenergy.com"
   },
   {
    "k": "Market",
    "v": "Singapore",
    "s": "Singapore",
    "url": "https://www.bluewhaleenergy.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "project dashboards & web",
    "url": "https://www.bluewhaleenergy.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/bluewhaleenergy"
   }
  ],
  "opportunity": "project dashboards & web. Singapore. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Blue Whale Energy's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Blue Whale Energy site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$4M latest raise",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Blue Whale Energy"
  ]
 },
 {
  "slug": "nabta-health",
  "name": "Nabta Health",
  "site": "https://nabtahealth.com",
  "domain": "nabtahealth.com",
  "country": "UAE",
  "city": "UAE",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#7A5CFA",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Nabta Health's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Nabta Health is a UAE health company building partnerships with employers and insurers. $3M pre-Series A close (Oct 2026), and employer/insurer partnerships.",
  "facts": [
   {
    "k": "Series A",
    "v": "$3M",
    "s": "Oct 2026",
    "url": "https://nabtahealth.com"
   },
   {
    "k": "Market",
    "v": "UAE",
    "s": "UAE",
    "url": "https://nabtahealth.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "employer/insurer partnerships",
    "url": "https://nabtahealth.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://nabtahealth.com"
   }
  ],
  "opportunity": "employer/insurer partnerships. UAE. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Nabta Health's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Nabta Health.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$3M series a",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Nabta Health"
  ]
 },
 {
  "slug": "vitalls",
  "name": "Vitalls",
  "site": "https://vitalls.ai",
  "domain": "vitalls.ai",
  "country": "UAE",
  "city": "UAE",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#2FA37A",
  "weeks": 14,
  "draft": true,
  "size": "Very small",
  "proposition": "Vitalls's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "Vitalls is a UAE health company founded in 2023, now in product development. $1.5M seed commitment (Oct 2026), and product development.",
  "facts": [
   {
    "k": "Seed",
    "v": "$1.5M",
    "s": "Oct 2026",
    "url": "https://vitalls.ai"
   },
   {
    "k": "Market",
    "v": "UAE",
    "s": "Founded 2023",
    "url": "https://vitalls.ai"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "product development",
    "url": "https://vitalls.ai"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/vitalls-ai"
   }
  ],
  "opportunity": "product development. Founded 2023. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Vitalls's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for Vitalls.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "ekacare",
   "healthengine",
   "livi"
  ],
  "film": [
   "$1.5M seed",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for Vitalls"
  ]
 },
 {
  "slug": "mp-space",
  "name": "MP Space",
  "site": "https://mpspace.io",
  "domain": "mpspace.io",
  "country": "Australia",
  "city": "Sydney",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#5B6CFF",
  "weeks": 12,
  "draft": true,
  "size": "Very small",
  "proposition": "MP Space is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "MP Space is a Sydney space company building a hardware and software platform. A$23M seed (Oct 2026, Blackbird), and hardware + software platform.",
  "facts": [
   {
    "k": "Seed",
    "v": "A$23M",
    "s": "Oct 2026, Blackbird",
    "url": "https://mpspace.io"
   },
   {
    "k": "Market",
    "v": "Australia",
    "s": "Sydney",
    "url": "https://mpspace.io"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "hardware + software platform",
    "url": "https://mpspace.io"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://mpspace.io"
   }
  ],
  "opportunity": "hardware + software platform. Sydney. This is the point where the right software decisions are cheapest to make. We would start with the module that moves MP Space's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around MP Space's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "A$23M seed",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for MP Space"
  ]
 },
 {
  "slug": "eudaemon",
  "name": "Eudaemon",
  "site": "https://eudaemontech.com",
  "domain": "eudaemontech.com",
  "country": "Australia",
  "city": "Australia",
  "sector": "Web and growth",
  "service": "Website + growth stack",
  "brand": "#E2574C",
  "weeks": 10,
  "draft": true,
  "size": "Very small",
  "proposition": "Eudaemon is getting new attention. A faster, sharper site turns more of it into customers who come back.",
  "summary": "Eudaemon is an Australian company raising with a global consumer campaign. Raising $10M with global consumer campaign (2026).",
  "facts": [
   {
    "k": "Position",
    "v": "$10M",
    "s": "2026",
    "url": "https://eudaemontech.com"
   },
   {
    "k": "Market",
    "v": "Australia",
    "s": "Australia",
    "url": "https://eudaemontech.com"
   },
   {
    "k": "Proposed",
    "v": "Website + growth stack",
    "s": "Raising $10M with global consumer campaign (2026)",
    "url": "https://eudaemontech.com"
   },
   {
    "k": "Timeline",
    "v": "10 weeks",
    "s": "To first release",
    "url": "https://eudaemontech.com"
   }
  ],
  "opportunity": "Raising $10M with global consumer campaign (2026). Australia. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Eudaemon's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "First visit",
    "b": "Most visitors arrive on a phone, from a social post or press, and decide within seconds."
   },
   {
    "t": "Content speed",
    "b": "Launches, drops and campaigns should not wait for a developer."
   },
   {
    "t": "Second purchase",
    "b": "Retention flows decide whether growth compounds or has to be bought again."
   }
  ],
  "modules": [
   {
    "t": "Conversion-first site",
    "b": "A rebuilt Eudaemon site, tuned for mobile and speed.",
    "f": [
     "Core Web Vitals in the green on mid-range phones",
     "Product and landing templates the team can edit",
     "Analytics and A/B testing from day one"
    ]
   },
   {
    "t": "Content and campaign engine",
    "b": "A headless CMS for launches and stories.",
    "f": [
     "Reusable page blocks",
     "Scheduled drops and campaigns",
     "Localisation-ready"
    ]
   },
   {
    "t": "Retention and CRM flows",
    "b": "Email, WhatsApp and SMS journeys tied to behaviour.",
    "f": [
     "Welcome, replenish and win-back flows",
     "Subscription and loyalty hooks",
     "Single customer view"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-10",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "jaypore",
   "onbuy",
   "starstell"
  ],
  "film": [
   "$10M position",
   "Conversion-first site",
   "Content and campaign engine",
   "Retention and CRM flows",
   "Built for Eudaemon"
  ]
 },
 {
  "slug": "procuros",
  "name": "Procuros",
  "site": "https://procuros.io",
  "domain": "procuros.io",
  "country": "Germany",
  "city": "Hamburg",
  "sector": "Software platform",
  "service": "Platform engineering squad",
  "brand": "#1F9E9E",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Procuros is building something new. A senior Mariox squad can ship the platform around it while the core team stays on the product.",
  "summary": "Procuros is a Hamburg company scaling integrations for B2B commerce. €20M Series A (Oct 2026, XAnge), and scaling integrations.",
  "facts": [
   {
    "k": "Series A",
    "v": "€20M",
    "s": "Oct 2026, XAnge",
    "url": "https://procuros.io"
   },
   {
    "k": "Market",
    "v": "Germany",
    "s": "Hamburg",
    "url": "https://procuros.io"
   },
   {
    "k": "Proposed",
    "v": "Platform engineering squad",
    "s": "scaling integrations",
    "url": "https://procuros.io"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://procuros.io"
   }
  ],
  "opportunity": "scaling integrations. Hamburg. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Procuros's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Integration load",
    "b": "Every customer brings different systems to connect."
   },
   {
    "t": "Dashboards",
    "b": "Customers and operators need to see results without asking for a report."
   },
   {
    "t": "Hiring speed",
    "b": "The roadmap moves faster than senior hiring."
   }
  ],
  "modules": [
   {
    "t": "Core platform services",
    "b": "Well-structured services around Procuros's core product.",
    "f": [
     "Multi-tenant architecture",
     "Auth, roles and audit",
     "CI/CD and observability"
    ]
   },
   {
    "t": "Integrations layer",
    "b": "One contract every integration implements.",
    "f": [
     "Shared retries, rate limits and webhooks",
     "Contract tests against partner sandboxes",
     "New integration in weeks"
    ]
   },
   {
    "t": "Customer dashboards",
    "b": "Reporting customers can open themselves.",
    "f": [
     "Live metrics and exports",
     "Embedded analytics",
     "White-label ready"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "skydo",
   "airwallex",
   "stockgro"
  ],
  "film": [
   "€20M series a",
   "Core platform services",
   "Integrations layer",
   "Customer dashboards",
   "Built for Procuros"
  ]
 },
 {
  "slug": "pandektes",
  "name": "Pandektes",
  "site": "https://pandektes.com",
  "domain": "pandektes.com",
  "country": "Denmark",
  "city": "Copenhagen",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#1F3A5F",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Pandektes already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Pandektes is a Copenhagen legal technology company expanding its product. €13.5M Series A (Oct 2026), and product expansion.",
  "facts": [
   {
    "k": "Series A",
    "v": "€13.5M",
    "s": "Oct 2026",
    "url": "https://pandektes.com"
   },
   {
    "k": "Market",
    "v": "Denmark",
    "s": "Copenhagen",
    "url": "https://pandektes.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "product expansion",
    "url": "https://pandektes.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/pandektes"
   }
  ],
  "opportunity": "product expansion. Copenhagen. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Pandektes's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Pandektes's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "€13.5M series a",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Pandektes"
  ]
 },
 {
  "slug": "strollme",
  "name": "StrollMe",
  "site": "https://strollme.com",
  "domain": "strollme.com",
  "country": "Germany",
  "city": "Frankfurt",
  "sector": "Consumer and ops apps",
  "service": "App + ops console",
  "brand": "#F28FAD",
  "weeks": 14,
  "draft": true,
  "size": "Mid",
  "proposition": "StrollMe's next stage runs on a phone: booking, membership and repeat use in one app, with an ops console behind it.",
  "summary": "StrollMe is a Frankfurt subscription platform growing in Germany, Austria and the Netherlands. €22M raise (Oct 2026), and subscription platform growth in DE/AT/NL.",
  "facts": [
   {
    "k": "Latest raise",
    "v": "€22M",
    "s": "Oct 2026",
    "url": "https://strollme.com"
   },
   {
    "k": "Market",
    "v": "Germany",
    "s": "Frankfurt",
    "url": "https://strollme.com"
   },
   {
    "k": "Proposed",
    "v": "App + ops console",
    "s": "subscription platform growth in DE/AT/NL",
    "url": "https://strollme.com"
   },
   {
    "k": "Timeline",
    "v": "14 weeks",
    "s": "To first release",
    "url": "https://strollme.com"
   }
  ],
  "opportunity": "subscription platform growth in DE/AT/NL. Frankfurt. This is the point where the right software decisions are cheapest to make. We would start with the module that moves StrollMe's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Booking friction",
    "b": "Each extra step between intent and confirmation costs customers."
   },
   {
    "t": "Ops visibility",
    "b": "Teams need one live view of bookings, people and capacity."
   },
   {
    "t": "Repeat use",
    "b": "Memberships and reminders decide lifetime value."
   }
  ],
  "modules": [
   {
    "t": "Customer app",
    "b": "Native iOS and Android app for StrollMe.",
    "f": [
     "Booking, payments and receipts",
     "Memberships and subscriptions",
     "Push and WhatsApp reminders"
    ]
   },
   {
    "t": "Ops and partner console",
    "b": "A web console for the team and partners.",
    "f": [
     "Live schedule and capacity",
     "Role-based access",
     "Exports and reporting"
    ]
   },
   {
    "t": "Platform and analytics",
    "b": "One API behind app and console.",
    "f": [
     "Event tracking and cohorts",
     "Payment and notification integrations",
     "Scales city by city"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-8",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 9-12",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 13-14",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "milkrun",
   "hotdoc",
   "zypit"
  ],
  "film": [
   "€22M latest raise",
   "Customer app",
   "Ops and partner console",
   "Platform and analytics",
   "Built for StrollMe"
  ]
 },
 {
  "slug": "koala",
  "name": "Koala",
  "site": "https://au.koala.com",
  "domain": "au.koala.com",
  "country": "Australia",
  "city": "Australia",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#2FA37A",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Koala already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Koala is an online-first furniture brand. Online-first furniture, and aI product finder & AR.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Online-first furniture",
    "url": "https://au.koala.com"
   },
   {
    "k": "Market",
    "v": "Australia",
    "s": "Australia",
    "url": "https://au.koala.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "AI product finder & AR",
    "url": "https://au.koala.com"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://au.koala.com"
   }
  ],
  "opportunity": "AI product finder & AR. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Koala's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Koala's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Koala, Australia",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Koala"
  ]
 },
 {
  "slug": "who-gives-a-crap",
  "name": "Who Gives A Crap",
  "site": "https://whogivesacrap.org",
  "domain": "whogivesacrap.org",
  "country": "Australia",
  "city": "Australia",
  "sector": "AI and data",
  "service": "AI pilot",
  "brand": "#3A8DDE",
  "weeks": 12,
  "draft": true,
  "size": "Mid",
  "proposition": "Who Gives A Crap already has the customers and the data. A scoped AI pilot can show measurable value within a quarter.",
  "summary": "Who Gives A Crap is a subscription commerce brand for household paper products. Subscription commerce, and retention & AI support.",
  "facts": [
   {
    "k": "Stage",
    "v": "Growth stage",
    "s": "Subscription commerce",
    "url": "https://whogivesacrap.org"
   },
   {
    "k": "Market",
    "v": "Australia",
    "s": "Australia",
    "url": "https://whogivesacrap.org"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "retention & AI support",
    "url": "https://whogivesacrap.org"
   },
   {
    "k": "Timeline",
    "v": "12 weeks",
    "s": "To first release",
    "url": "https://www.linkedin.com/company/who-gives-a-crap"
   }
  ],
  "opportunity": "retention & AI support. This is the point where the right software decisions are cheapest to make. We would start with the module that moves Who Gives A Crap's main metric and build the rest on the same foundation.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Who Gives A Crap's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Discovery",
    "b": "Interviews, data review and a fixed scope."
   },
   {
    "w": "Weeks 3-7",
    "t": "Core build",
    "b": "The first module built and in your hands every week."
   },
   {
    "w": "Weeks 8-10",
    "t": "Modules two and three",
    "b": "Remaining modules and integrations."
   },
   {
    "w": "Weeks 11-12",
    "t": "Launch and handover",
    "b": "Live with real users, then code and docs handed over."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Who Gives A Crap, Australia",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Who Gives A Crap"
  ]
 },
 {
  "slug": "decathlon",
  "name": "Decathlon",
  "site": "https://www.decathlon.com",
  "domain": "decathlon.com",
  "country": "France",
  "city": "France",
  "sector": "AI and data",
  "service": "Scoped AI pilot",
  "brand": "#3643BA",
  "weeks": 8,
  "draft": true,
  "size": "Big",
  "proposition": "A scoped pilot, delivered in 8 weeks, that Decathlon's digital team can measure before deciding to scale.",
  "summary": "Decathlon is a global sports retailer with digital and innovation teams. Global retailer with digital/innovation teams, and pitch a scoped AI pilot.",
  "facts": [
   {
    "k": "Stage",
    "v": "Enterprise",
    "s": "Global retailer with digital/innovation teams",
    "url": "https://www.decathlon.com"
   },
   {
    "k": "Market",
    "v": "France",
    "s": "Approach regional digital team",
    "url": "https://www.decathlon.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "pitch a scoped AI pilot",
    "url": "https://www.decathlon.com"
   },
   {
    "k": "Timeline",
    "v": "8 weeks",
    "s": "Scoped pilot",
    "url": "https://www.decathlon.com"
   }
  ],
  "opportunity": "pitch a scoped AI pilot. Approach regional digital team. Large organisations rarely start with a big programme. A tightly scoped pilot with one team, one metric and a fixed timeline gives Decathlon evidence before committing further.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from Decathlon's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Scope",
    "b": "One team, one metric, one data source agreed."
   },
   {
    "w": "Weeks 3-6",
    "t": "Pilot build",
    "b": "Built inside your security and procurement rules."
   },
   {
    "w": "Weeks 7-8",
    "t": "Measure",
    "b": "Results against a control group, with a scale-up plan."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "Decathlon, France",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for Decathlon"
  ]
 },
 {
  "slug": "ikea",
  "name": "IKEA",
  "site": "https://www.ikea.com",
  "domain": "ikea.com",
  "country": "Sweden",
  "city": "Sweden",
  "sector": "AI and data",
  "service": "Scoped AI pilot",
  "brand": "#0058A3",
  "weeks": 8,
  "draft": true,
  "size": "Big",
  "proposition": "A scoped pilot, delivered in 8 weeks, that IKEA's digital team can measure before deciding to scale.",
  "summary": "IKEA is a global home furnishings retailer with large digital and AI programmes. Large digital/AI programmes, and aim for a small vendor pilot.",
  "facts": [
   {
    "k": "Stage",
    "v": "Enterprise",
    "s": "Large digital/AI programmes",
    "url": "https://www.ikea.com"
   },
   {
    "k": "Market",
    "v": "Sweden",
    "s": "Approach via local market digital team",
    "url": "https://www.ikea.com"
   },
   {
    "k": "Proposed",
    "v": "AI pilot",
    "s": "aim for a small vendor pilot",
    "url": "https://www.ikea.com"
   },
   {
    "k": "Timeline",
    "v": "8 weeks",
    "s": "Scoped pilot",
    "url": "https://www.linkedin.com/company/ikea"
   }
  ],
  "opportunity": "aim for a small vendor pilot. Approach via local market digital team. Large organisations rarely start with a big programme. A tightly scoped pilot with one team, one metric and a fixed timeline gives IKEA evidence before committing further.",
  "gaps": [
   {
    "t": "Generic journeys",
    "b": "Every visitor sees the same experience, whatever they came for."
   },
   {
    "t": "Repetitive support",
    "b": "A large share of questions are routine and well suited to safe automation."
   },
   {
    "t": "Unused data",
    "b": "Orders, tickets and content hold patterns the team has no time to act on."
   }
  ],
  "modules": [
   {
    "t": "Grounded AI assistant",
    "b": "An assistant that only answers from IKEA's own catalogue, policies and content.",
    "f": [
     "Retrieval with citations and guardrails",
     "Hands off to a human with context",
     "Evaluation set before launch"
    ]
   },
   {
    "t": "Personalisation engine",
    "b": "Recommendations and content matched to each customer.",
    "f": [
     "Behaviour and purchase signals",
     "Experiments against a control group",
     "Privacy-first data handling"
    ]
   },
   {
    "t": "Operations automation",
    "b": "AI-drafted and auto-resolved work with human review.",
    "f": [
     "Ticket triage and drafting",
     "Confidence thresholds and escalation",
     "Quality dashboard"
    ]
   }
  ],
  "phases": [
   {
    "w": "Weeks 1-2",
    "t": "Scope",
    "b": "One team, one metric, one data source agreed."
   },
   {
    "w": "Weeks 3-6",
    "t": "Pilot build",
    "b": "Built inside your security and procurement rules."
   },
   {
    "w": "Weeks 7-8",
    "t": "Measure",
    "b": "Results against a control group, with a scale-up plan."
   }
  ],
  "related": [
   "learnosity",
   "fynd",
   "oda"
  ],
  "film": [
   "IKEA, Sweden",
   "Grounded AI assistant",
   "Personalisation engine",
   "Operations automation",
   "Built for IKEA"
  ]
 }
];

export const bySlug = proposals.reduce((m, p) => { m[p.slug] = p; return m; }, {});
