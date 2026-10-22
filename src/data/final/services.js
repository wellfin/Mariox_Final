// 72 services in 7 categories (services-data.js)
// Converted from the design's data file in /final-website; image paths point at
// /public instead of the live site.
export const cats = [
 {
  "id": "product-engineering",
  "n": "01",
  "name": "Product engineering",
  "short": "Design, build and test the product",
  "intro": "Apps, platforms and SaaS products designed and engineered by senior people, from first wireframe to store release.",
  "steps": [
   [
    "Discover",
    "Goals, users and constraints turned into a prioritised scope and a fixed estimate."
   ],
   [
    "Design",
    "Flows, interface and a clickable prototype tested with real users."
   ],
   [
    "Build",
    "Two-week sprints, a demo at the end of each, production code from week one."
   ],
   [
    "Launch",
    "Store release, monitoring and a staged rollout."
   ],
   [
    "Grow",
    "Analytics, iteration and the roadmap for version two."
   ]
  ]
 },
 {
  "id": "ai-data",
  "n": "02",
  "name": "AI & data",
  "short": "Intelligence built into the product",
  "intro": "AI features, agents and data platforms connected to your systems, evaluated before launch and monitored after it.",
  "steps": [
   [
    "Assess",
    "Use cases ranked by value and feasibility, with the data each one needs."
   ],
   [
    "Prototype",
    "A working proof on your data, measured against a baseline."
   ],
   [
    "Evaluate",
    "Test sets, guardrails and cost per request agreed before scale."
   ],
   [
    "Ship",
    "Integrated into the product with logging and human review where it matters."
   ],
   [
    "Monitor",
    "Quality, drift and cost tracked in production."
   ]
  ]
 },
 {
  "id": "emerging-tech",
  "n": "03",
  "name": "Blockchain & emerging tech",
  "short": "Blockchain, IoT, AR/VR and games",
  "intro": "Blockchain, smart contracts, IoT, AR/VR, wearables and games, built with the same testing and security discipline as the rest of our work.",
  "steps": [
   [
    "Assess",
    "Whether the technology fits the problem, answered honestly."
   ],
   [
    "Prototype",
    "A working proof on testnet, device or headset."
   ],
   [
    "Secure",
    "Audits, threat models and hardware tests before launch."
   ],
   [
    "Launch",
    "Mainnet, store or device rollout in stages."
   ],
   [
    "Operate",
    "Monitoring, upgrades and support after launch."
   ]
  ]
 },
 {
  "id": "business-software",
  "n": "04",
  "name": "Enterprise & business software",
  "short": "ERP, CRM, HRMS, LMS and commerce",
  "intro": "The systems your teams use every day, from ERP and CRM to HR, learning, content and commerce, built or customised around how you work.",
  "steps": [
   [
    "Map",
    "Processes, users and data mapped with each department."
   ],
   [
    "Configure",
    "Platform or custom build chosen, then set up around your rules."
   ],
   [
    "Migrate",
    "Data moved from spreadsheets and old systems, validated."
   ],
   [
    "Train",
    "Role-based training and adoption support."
   ],
   [
    "Support",
    "Changes, upgrades and help after go-live."
   ]
  ]
 },
 {
  "id": "digital-transformation",
  "n": "05",
  "name": "Digital transformation",
  "short": "Modernise the systems you run on",
  "intro": "Legacy systems, cloud, security and the business platforms underneath your operations, modernised without stopping the business.",
  "steps": [
   [
    "Audit",
    "Current systems, data and dependencies mapped and risk-ranked."
   ],
   [
    "Plan",
    "A target architecture and a migration path that keeps the business running."
   ],
   [
    "Migrate",
    "Moved in slices, with rollbacks rehearsed before every cutover."
   ],
   [
    "Integrate",
    "New systems connected to the ones that stay."
   ],
   [
    "Operate",
    "Monitoring, cost control and support after go-live."
   ]
  ]
 },
 {
  "id": "consulting",
  "n": "06",
  "name": "Consulting",
  "short": "Decide before you build",
  "intro": "Senior architects and product people who help you choose what to build, how to build it and what will break first.",
  "steps": [
   [
    "Listen",
    "Stakeholder interviews and a review of what already exists."
   ],
   [
    "Analyse",
    "Technology, cost and risk assessed against your goals."
   ],
   [
    "Recommend",
    "A written plan with options, trade-offs and numbers."
   ],
   [
    "Roadmap",
    "Sequenced work with owners, timelines and budgets."
   ],
   [
    "Support",
    "Help executing, with your team or ours."
   ]
  ]
 },
 {
  "id": "teams-managed",
  "n": "07",
  "name": "Teams & managed services",
  "short": "People and operations, by the month",
  "intro": "Dedicated squads, senior engineers and managed operations from our in-house team of 100+.",
  "steps": [
   [
    "Brief",
    "Skills, seniority, time-zone overlap and ways of working agreed."
   ],
   [
    "Match",
    "Profiles from our in-house team, interviewed by you."
   ],
   [
    "Onboard",
    "Access, tools and a first sprint within days."
   ],
   [
    "Deliver",
    "Daily standups, sprint reporting and a Mariox delivery lead."
   ],
   [
    "Scale",
    "Add or reduce people month to month."
   ]
  ]
 }
];

export const services = [
 {
  "slug": "product-design",
  "name": "Product design (UI/UX)",
  "cat": "product-engineering",
  "tagline": "Design your engineers can build",
  "desc": "Research, flows and interface systems for web and mobile products. Every screen is delivered with the states, specs and components engineers need, so nothing is guessed in the build.",
  "offers": [
   {
    "t": "User research",
    "b": "Interviews and usability tests that show what users actually need."
   },
   {
    "t": "Information architecture",
    "b": "Navigation and content structure that scales with the product."
   },
   {
    "t": "Wireframes & flows",
    "b": "Every journey mapped before visual design starts."
   },
   {
    "t": "Interface design",
    "b": "Visual design for every state, breakpoint and edge case."
   },
   {
    "t": "Prototypes",
    "b": "Clickable prototypes for stakeholder sign-off and user testing."
   },
   {
    "t": "Design systems",
    "b": "Tokens and components shared by design and code."
   }
  ],
  "tech": [
   "Figma",
   "FigJam",
   "Maze",
   "Storybook",
   "Lottie"
  ],
  "client": {
   "key": "jaypore",
   "name": "Jaypore",
   "sector": "Lifestyle e-commerce",
   "line": "A craft-led lifestyle storefront with editorial merchandising and operations behind it.",
   "imgs": [
    "/img/cs/jaypore/jaypore1.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you design only, or design and build?",
    "a": "Both. Many clients start with design, then keep the same team for the build."
   },
   {
    "q": "Do we own the Figma files?",
    "a": "Yes. Files, libraries and assets sit in your workspace."
   }
  ],
  "hero": "/img/cs/jaypore/jaypore1.png"
 },
 {
  "slug": "custom-software-development-company",
  "name": "Custom software development",
  "cat": "product-engineering",
  "tagline": "Software shaped around your business",
  "desc": "Bespoke platforms, portals and internal systems built around how your business actually works. Clean architecture, tested code and documentation any engineer can pick up.",
  "offers": [
   {
    "t": "Architecture & system design",
    "b": "Services, data model and infrastructure planned for the next five years."
   },
   {
    "t": "Web platforms",
    "b": "Customer portals and internal tools with role-based access."
   },
   {
    "t": "Backend & APIs",
    "b": "Secure, versioned APIs that other systems can rely on."
   },
   {
    "t": "Workflow automation",
    "b": "Manual steps replaced with rules, queues and notifications."
   },
   {
    "t": "Integrations",
    "b": "Payments, ERPs, CRMs and partner systems connected cleanly."
   },
   {
    "t": "Handover",
    "b": "Documentation, runbooks and training for your team."
   }
  ],
  "tech": [
   "TypeScript",
   "Node.js",
   ".NET",
   "Java",
   "PostgreSQL",
   "AWS",
   "Docker"
  ],
  "client": {
   "key": "fynd",
   "name": "Fynd",
   "sector": "Commerce technology",
   "line": "Online ordering connected to retail operations through one inventory service.",
   "imgs": [
    "/img/cs/fynd/fynd1.png"
   ]
  },
  "time": "12–24 weeks",
  "model": "Fixed scope or dedicated team",
  "faq": [
   {
    "q": "How do you estimate custom software?",
    "a": "A short paid discovery produces a scope, architecture and fixed estimate you can hold us to."
   },
   {
    "q": "Can you work with our existing systems?",
    "a": "Yes. Most custom builds integrate with ERPs, CRMs or legacy databases."
   }
  ],
  "hero": "/img/cs/fynd/fynd1.png"
 },
 {
  "slug": "web-app-development",
  "name": "Web app development",
  "cat": "product-engineering",
  "tagline": "Fast, accessible, easy to change",
  "desc": "Web applications, dashboards and admin panels that stay fast under load and simple to change long after launch.",
  "offers": [
   {
    "t": "Single-page apps",
    "b": "Responsive React and Next.js apps with app-like speed."
   },
   {
    "t": "Admin panels",
    "b": "Operations tooling your team actually wants to use."
   },
   {
    "t": "Customer portals",
    "b": "Self-service accounts, billing and support."
   },
   {
    "t": "Performance",
    "b": "Core Web Vitals budgets enforced in CI."
   },
   {
    "t": "SEO-ready builds",
    "b": "Server rendering, structured data and clean URLs."
   },
   {
    "t": "Accessibility",
    "b": "WCAG-compliant interfaces tested with assistive tech."
   }
  ],
  "tech": [
   "React",
   "Next.js",
   "Vue",
   "Node.js",
   "PostgreSQL",
   "Vercel",
   "Cloudflare"
  ],
  "client": {
   "key": "onbuy",
   "name": "OnBuy",
   "sector": "Marketplace",
   "line": "Multi-seller listings, checkout, payouts and dispute handling.",
   "imgs": [
    "/img/cs/onbuy/onbuy1.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Which framework do you use?",
    "a": "Usually React with Next.js. We choose per project and explain why."
   },
   {
    "q": "Will the site rank on Google?",
    "a": "We build with server rendering, fast loads and clean markup, which search engines reward."
   }
  ],
  "hero": "/img/cs/onbuy/onbuy1.png"
 },
 {
  "slug": "mobile-app-development-company",
  "name": "Mobile app development",
  "cat": "product-engineering",
  "tagline": "iOS and Android, all the way to the store",
  "desc": "Native and cross-platform apps with the backend, admin panel and release pipeline behind them. Built to pass store review the first time and stay stable at scale.",
  "offers": [
   {
    "t": "Product strategy",
    "b": "Scope, platforms and monetisation decided up front."
   },
   {
    "t": "App design",
    "b": "Platform-native interfaces for iOS and Android."
   },
   {
    "t": "iOS & Android builds",
    "b": "Native or cross-platform, chosen per product."
   },
   {
    "t": "Backend & admin",
    "b": "APIs, databases and the panel your team runs the app from."
   },
   {
    "t": "Payments & integrations",
    "b": "Wallets, maps, chat and analytics wired in."
   },
   {
    "t": "Store launch",
    "b": "Submission, review and staged rollout handled for you."
   }
  ],
  "tech": [
   "Swift",
   "Kotlin",
   "Flutter",
   "React Native",
   "Firebase",
   "Node.js",
   "AWS"
  ],
  "client": {
   "key": "milkrun",
   "name": "MILKRUN",
   "sector": "Quick commerce",
   "line": "Grocery delivery with rider dispatch and live tracking, engineered for sub-ten-minute promises.",
   "imgs": [
    "/img/cs/milkrun/milkrun1.png",
    "/img/cs/milkrun/milkrun2.png",
    "/img/cs/milkrun/milkrun3.png",
    "/img/cs/milkrun/milkrun4.png"
   ]
  },
  "time": "10–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Native or cross-platform?",
    "a": "Cross-platform for most products"
   },
   {
    "q": " native when performance or device features demand it."
   },
   {
    "q": "Do you handle App Store submission?",
    "a": "Yes, including review responses and release management."
   }
  ],
  "hero": "/img/cs/milkrun/milkrun1.png"
 },
 {
  "slug": "ios-app-development-company",
  "name": "iOS app development",
  "cat": "product-engineering",
  "tagline": "Native Swift apps for iPhone and iPad",
  "desc": "Native iOS apps in Swift and SwiftUI that feel at home on Apple devices, from widgets and Apple Pay to watch and iPad layouts.",
  "offers": [
   {
    "t": "SwiftUI interfaces",
    "b": "Modern, accessible UI that follows Apple’s guidelines."
   },
   {
    "t": "Apple integrations",
    "b": "Apple Pay, HealthKit, Sign in with Apple and more."
   },
   {
    "t": "Widgets & extensions",
    "b": "Home-screen widgets, notifications and share extensions."
   },
   {
    "t": "iPad & Watch",
    "b": "Layouts and companion apps beyond the iPhone."
   },
   {
    "t": "Offline & sync",
    "b": "Core Data and background sync for unreliable networks."
   },
   {
    "t": "TestFlight & release",
    "b": "Beta programmes and App Store release management."
   }
  ],
  "tech": [
   "Swift",
   "SwiftUI",
   "Combine",
   "Core Data",
   "Xcode Cloud",
   "Firebase"
  ],
  "client": {
   "key": "lunar",
   "name": "Lunar",
   "sector": "Digital banking",
   "line": "Accounts, payments and servicing customers expect without a branch.",
   "imgs": [
    "/img/cs/lunar/luner1.png"
   ]
  },
  "time": "10–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you support older iOS versions?",
    "a": "We agree a minimum version up front based on your audience data."
   },
   {
    "q": "Can you take over an existing iOS app?",
    "a": "Yes. We start with a code audit and stabilise before adding features."
   }
  ],
  "hero": "/img/cs/lunar/luner1.png"
 },
 {
  "slug": "android-app-development-company",
  "name": "Android app development",
  "cat": "product-engineering",
  "tagline": "Native Kotlin apps for every Android device",
  "desc": "Native Android apps in Kotlin and Jetpack Compose, tested across the device range your users actually own.",
  "offers": [
   {
    "t": "Jetpack Compose UI",
    "b": "Material-based interfaces that adapt to every screen."
   },
   {
    "t": "Device coverage",
    "b": "Testing across manufacturers, sizes and OS versions."
   },
   {
    "t": "Play integrations",
    "b": "Billing, in-app updates and Play Integrity."
   },
   {
    "t": "Offline-first",
    "b": "Room storage and background work for patchy networks."
   },
   {
    "t": "Performance",
    "b": "Startup time, battery and app size optimised."
   },
   {
    "t": "Play Store release",
    "b": "Staged rollouts and crash monitoring."
   }
  ],
  "tech": [
   "Kotlin",
   "Jetpack Compose",
   "Room",
   "Coroutines",
   "Firebase",
   "Play Console"
  ],
  "client": {
   "key": "fampay",
   "name": "Fampay",
   "sector": "Youth payments",
   "line": "Payments and cards for a young audience, with parental controls built in.",
   "imgs": [
    "/img/cs/famapp/famapp4.png"
   ]
  },
  "time": "10–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How do you test on so many devices?",
    "a": "Device farms plus a physical device lab for the models your users own most."
   },
   {
    "q": "Can the app work offline?",
    "a": "Yes. We design offline-first when the use case needs it."
   }
  ],
  "hero": "/img/cs/famapp/famapp4.png"
 },
 {
  "slug": "cross-platform-app-development-company",
  "name": "Cross-platform apps",
  "cat": "product-engineering",
  "tagline": "One codebase, iOS and Android",
  "desc": "Flutter and React Native apps that ship to both stores from one codebase, without feeling like a compromise.",
  "offers": [
   {
    "t": "Flutter apps",
    "b": "Pixel-consistent apps with a single Dart codebase."
   },
   {
    "t": "React Native apps",
    "b": "JavaScript teams shipping native apps."
   },
   {
    "t": "Native modules",
    "b": "Platform code where the framework stops."
   },
   {
    "t": "Shared design system",
    "b": "One component library across both platforms."
   },
   {
    "t": "Over-the-air updates",
    "b": "Fixes shipped without waiting for store review."
   },
   {
    "t": "Store releases",
    "b": "Both stores, managed together."
   }
  ],
  "tech": [
   "Flutter",
   "Dart",
   "React Native",
   "TypeScript",
   "Expo",
   "Firebase"
  ],
  "client": {
   "key": "graphy",
   "name": "Graphy",
   "sector": "Creator edtech",
   "line": "Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.",
   "imgs": [
    "/img/cs/graphy/graphy1.png",
    "/img/cs/graphy/graphy2.png",
    "/img/cs/graphy/graphy3.png",
    "/img/cs/graphy/graphy4.png"
   ]
  },
  "time": "8–14 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Flutter or React Native?",
    "a": "Flutter for design-heavy apps, React Native when your team already writes React."
   },
   {
    "q": "Does cross-platform cost less?",
    "a": "Usually 30–40% less than two native apps, depending on scope."
   }
  ],
  "hero": "/img/cs/graphy/graphy1.png"
 },
 {
  "slug": "pwa-development",
  "name": "PWA development",
  "cat": "product-engineering",
  "tagline": "App-like experiences in the browser",
  "desc": "Progressive web apps that install from the browser, work offline and load instantly, without an app store in the way.",
  "offers": [
   {
    "t": "Installable apps",
    "b": "Add-to-home-screen with app icons and splash screens."
   },
   {
    "t": "Offline support",
    "b": "Service workers that cache what matters."
   },
   {
    "t": "Push notifications",
    "b": "Re-engagement without a native app."
   },
   {
    "t": "Performance",
    "b": "Sub-second loads on mid-range phones."
   },
   {
    "t": "Web-to-app parity",
    "b": "Camera, location and payments from the browser."
   },
   {
    "t": "Analytics",
    "b": "Install, retention and engagement tracking."
   }
  ],
  "tech": [
   "React",
   "Next.js",
   "Workbox",
   "IndexedDB",
   "Web Push",
   "Lighthouse"
  ],
  "client": {
   "key": "snitch",
   "name": "Snitch",
   "sector": "Fashion e-commerce",
   "line": "Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.",
   "imgs": [
    "/img/cs/snitch/snitch1.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Can a PWA replace a native app?",
    "a": "For many commerce and content products, yes. We advise honestly when it cannot."
   },
   {
    "q": "Do PWAs work on iPhone?",
    "a": "Yes, including install and push notifications on recent iOS versions."
   }
  ],
  "hero": "/img/cs/snitch/snitch1.png"
 },
 {
  "slug": "saas-product-development",
  "name": "SaaS product development",
  "cat": "product-engineering",
  "tagline": "Built for the thousandth customer",
  "desc": "Multi-tenancy, billing, onboarding and admin tooling decided early, because they are the parts that are painful to change later.",
  "offers": [
   {
    "t": "Multi-tenant architecture",
    "b": "Isolation, sharing and migration planned before launch."
   },
   {
    "t": "Subscription billing",
    "b": "Plans, trials, proration and dunning."
   },
   {
    "t": "Onboarding",
    "b": "Signup, provisioning and time-to-first-value."
   },
   {
    "t": "Admin console",
    "b": "Support actions without database access."
   },
   {
    "t": "Usage metering",
    "b": "Quotas and data for usage-based pricing."
   },
   {
    "t": "Scale work",
    "b": "Caching, queues and read replicas ahead of the curve."
   }
  ],
  "tech": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Stripe",
   "AWS",
   "Terraform"
  ],
  "client": {
   "key": "graphy",
   "name": "Graphy",
   "sector": "Creator edtech",
   "line": "Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.",
   "imgs": [
    "/img/cs/graphy/graphy1.png",
    "/img/cs/graphy/graphy2.png",
    "/img/cs/graphy/graphy3.png",
    "/img/cs/graphy/graphy4.png"
   ]
  },
  "time": "12–20 weeks",
  "model": "Fixed scope or dedicated team",
  "faq": [
   {
    "q": "Single-tenant or multi-tenant?",
    "a": "Decided in week one, based on your customers, compliance and price point."
   },
   {
    "q": "Which billing providers do you support?",
    "a": "Stripe, Razorpay, Chargebee and Paddle."
   }
  ],
  "hero": "/img/cs/graphy/graphy1.png"
 },
 {
  "slug": "mvp-development",
  "name": "MVP development",
  "cat": "product-engineering",
  "tagline": "A first version you will not throw away",
  "desc": "A focused first release in weeks, built on foundations that carry version two. Scope is cut to what proves the idea, not to what is cheap.",
  "offers": [
   {
    "t": "Discovery sprint",
    "b": "The smallest version worth building, agreed in days."
   },
   {
    "t": "Clickable prototype",
    "b": "Tested with real users before code."
   },
   {
    "t": "MVP build",
    "b": "Web, app or both, production-ready."
   },
   {
    "t": "Analytics",
    "b": "The numbers that tell you what to build next."
   },
   {
    "t": "Launch support",
    "b": "Store release, landing page and first users."
   },
   {
    "t": "Version-two roadmap",
    "b": "What to build after launch, in order."
   }
  ],
  "tech": [
   "Next.js",
   "Flutter",
   "Supabase",
   "Firebase",
   "Vercel",
   "Stripe"
  ],
  "client": {
   "key": "zupit",
   "name": "Zupit",
   "sector": "Quick commerce",
   "line": "A focused first release for rapid delivery, built to carry version two.",
   "imgs": [
    "/img/cs/zypit/zypit2.png"
   ]
  },
  "time": "6–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How small is an MVP?",
    "a": "Small enough to launch in weeks, complete enough that users can do the one thing that matters."
   },
   {
    "q": "Will we need to rebuild later?",
    "a": "No. We build MVPs on the same architecture we would use at scale."
   }
  ],
  "hero": "/img/cs/zypit/zypit2.png"
 },
 {
  "slug": "qa-and-testing",
  "name": "QA & testing",
  "cat": "product-engineering",
  "tagline": "Catch it before your users do",
  "desc": "Manual and automated testing, performance and security checks, with release gates that stop regressions reaching production.",
  "offers": [
   {
    "t": "Test strategy",
    "b": "What to automate, what to test by hand and why."
   },
   {
    "t": "Automation suites",
    "b": "End-to-end, API and unit tests in CI."
   },
   {
    "t": "Mobile testing",
    "b": "Real devices, OS versions and networks."
   },
   {
    "t": "Performance testing",
    "b": "Load, stress and soak tests before launch."
   },
   {
    "t": "Security testing",
    "b": "OWASP checks and dependency scanning."
   },
   {
    "t": "Release gates",
    "b": "Quality thresholds every release must pass."
   }
  ],
  "tech": [
   "Playwright",
   "Cypress",
   "Appium",
   "k6",
   "Postman",
   "OWASP ZAP"
  ],
  "client": {
   "key": "testbook",
   "name": "Testbook",
   "sector": "Edtech",
   "line": "Question banks, timed assessment and analytics for exam-day traffic.",
   "imgs": [
    "/img/cs/testbook/testbook1.png"
   ]
  },
  "time": "Ongoing",
  "model": "Monthly",
  "faq": [
   {
    "q": "Can you test an app built by someone else?",
    "a": "Yes. We start with an audit and a risk-based test plan."
   },
   {
    "q": "How much should we automate?",
    "a": "Usually the critical paths and regressions. We advise per product."
   }
  ],
  "hero": "/img/cs/testbook/testbook1.png"
 },
 {
  "slug": "product-management",
  "name": "Product management",
  "cat": "product-engineering",
  "tagline": "Someone who owns the roadmap",
  "desc": "Experienced product managers who turn goals into a prioritised backlog, keep stakeholders aligned and measure what ships.",
  "offers": [
   {
    "t": "Product strategy",
    "b": "Goals, metrics and the bets worth making."
   },
   {
    "t": "Roadmapping",
    "b": "Sequenced work tied to business outcomes."
   },
   {
    "t": "Backlog ownership",
    "b": "Clear stories with acceptance criteria."
   },
   {
    "t": "Stakeholder alignment",
    "b": "One voice between business and engineering."
   },
   {
    "t": "Analytics",
    "b": "Instrumentation and the numbers behind decisions."
   },
   {
    "t": "Release planning",
    "b": "What ships, when and to whom."
   }
  ],
  "tech": [
   "Jira",
   "Linear",
   "Notion",
   "Amplitude",
   "Mixpanel",
   "Productboard"
  ],
  "client": {
   "key": "stockgro",
   "name": "StockGro",
   "sector": "Investing",
   "line": "Portfolios, market data and the social layer around investing.",
   "imgs": [
    "/img/cs/stockgro/stockgro1.png"
   ]
  },
  "time": "Ongoing",
  "model": "Monthly",
  "faq": [
   {
    "q": "Can your PM work with our engineers?",
    "a": "Yes. Our PMs regularly lead mixed client and Mariox teams."
   },
   {
    "q": "Is this full-time?",
    "a": "Full-time or part-time, depending on product stage."
   }
  ],
  "hero": "/img/cs/stockgro/stockgro1.png"
 },
 {
  "slug": "ai-development",
  "name": "AI development",
  "cat": "ai-data",
  "tagline": "AI that ships inside the product",
  "desc": "AI features built into your product and workflows, connected to your data, evaluated before launch and monitored in production.",
  "offers": [
   {
    "t": "Use-case discovery",
    "b": "Where AI saves time or makes money, ranked."
   },
   {
    "t": "AI features",
    "b": "Search, summarisation, classification and recommendations."
   },
   {
    "t": "Model integration",
    "b": "OpenAI, Claude, Llama or open-source, chosen per use case."
   },
   {
    "t": "Data pipelines",
    "b": "Your data cleaned, embedded and kept fresh."
   },
   {
    "t": "Evaluation",
    "b": "Test sets and quality gates before scale."
   },
   {
    "t": "Monitoring",
    "b": "Quality, latency and cost tracked live."
   }
  ],
  "tech": [
   "Python",
   "OpenAI",
   "Claude",
   "Llama",
   "LangChain",
   "pgvector",
   "AWS Bedrock"
  ],
  "client": {
   "key": "learnosity",
   "name": "Learnosity",
   "sector": "Assessment platform",
   "line": "Assessment infrastructure embedded by the products that integrate it.",
   "imgs": [
    "/img/cs/learnosity/learnosity2.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Is our data safe with AI models?",
    "a": "We use enterprise APIs with no training on your data, or self-hosted models where required."
   },
   {
    "q": "How do you measure AI quality?",
    "a": "Agreed test sets and metrics before launch, tracked continuously after."
   }
  ],
  "hero": "/img/cs/learnosity/learnosity2.png"
 },
 {
  "slug": "generative-ai-and-llm-apps",
  "name": "Generative AI & LLM apps",
  "cat": "ai-data",
  "tagline": "Copilots and assistants grounded in your data",
  "desc": "Chat assistants, copilots and content tools built on large language models and grounded in your own documents and databases, with sources shown.",
  "offers": [
   {
    "t": "RAG systems",
    "b": "Answers from your documents, with citations."
   },
   {
    "t": "Copilots",
    "b": "Assistants that draft, search and act inside your product."
   },
   {
    "t": "Content generation",
    "b": "On-brand drafts with human review."
   },
   {
    "t": "Fine-tuning",
    "b": "Models adapted to your domain where it pays off."
   },
   {
    "t": "Guardrails",
    "b": "Safety, privacy and output checks."
   },
   {
    "t": "Cost control",
    "b": "Caching, routing and model choice per request."
   }
  ],
  "tech": [
   "OpenAI",
   "Claude",
   "Llama",
   "LangChain",
   "LlamaIndex",
   "pgvector",
   "Pinecone"
  ],
  "client": {
   "key": "graphy",
   "name": "Graphy",
   "sector": "Creator edtech",
   "line": "Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.",
   "imgs": [
    "/img/cs/graphy/graphy1.png",
    "/img/cs/graphy/graphy2.png",
    "/img/cs/graphy/graphy3.png",
    "/img/cs/graphy/graphy4.png"
   ]
  },
  "time": "6–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Will it make things up?",
    "a": "Grounding, citations and evaluation keep answers tied to your sources."
   },
   {
    "q": "Which model do you use?",
    "a": "Whichever fits quality, cost and privacy needs. Often more than one."
   }
  ],
  "hero": "/img/cs/graphy/graphy1.png"
 },
 {
  "slug": "ai-agents-and-automation",
  "name": "AI agents & automation",
  "cat": "ai-data",
  "tagline": "Work done, not just answered",
  "desc": "Agents that take actions across your tools, and automation that reads, classifies and routes documents without someone copying fields between systems.",
  "offers": [
   {
    "t": "AI agents",
    "b": "Multi-step tasks across CRM, email and internal tools."
   },
   {
    "t": "Document processing",
    "b": "Invoices, forms and contracts read and filed."
   },
   {
    "t": "Workflow automation",
    "b": "Rules plus AI for the cases rules cannot handle."
   },
   {
    "t": "Human-in-the-loop",
    "b": "Review steps where mistakes are costly."
   },
   {
    "t": "Integrations",
    "b": "Connected to the systems you already use."
   },
   {
    "t": "Audit trail",
    "b": "Every action logged and reversible."
   }
  ],
  "tech": [
   "Python",
   "LangGraph",
   "OpenAI",
   "Claude",
   "n8n",
   "Temporal",
   "Zapier"
  ],
  "client": {
   "key": "soldo",
   "name": "Soldo",
   "sector": "Spend management",
   "line": "Company cards, budgets and expense reporting for finance teams.",
   "imgs": [
    "/img/cs/soldo/soldo.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Can an agent make mistakes?",
    "a": "Yes, so we add approvals, limits and logs for anything consequential."
   },
   {
    "q": "What should we automate first?",
    "a": "The repetitive, high-volume task with clear rules and measurable time saved."
   }
  ],
  "hero": "/img/cs/soldo/soldo.png"
 },
 {
  "slug": "machine-learning",
  "name": "Machine learning",
  "cat": "ai-data",
  "tagline": "Predictions you can act on",
  "desc": "Forecasting, scoring and recommendation models built on the data you already hold, deployed where your team makes decisions.",
  "offers": [
   {
    "t": "Forecasting",
    "b": "Demand, revenue and capacity predictions."
   },
   {
    "t": "Scoring",
    "b": "Lead, credit and risk scores."
   },
   {
    "t": "Recommendations",
    "b": "Products and content users actually want."
   },
   {
    "t": "Computer vision",
    "b": "Image and video classification and detection."
   },
   {
    "t": "MLOps",
    "b": "Training, deployment and retraining pipelines."
   },
   {
    "t": "Explainability",
    "b": "Why the model decided what it did."
   }
  ],
  "tech": [
   "Python",
   "PyTorch",
   "scikit-learn",
   "XGBoost",
   "MLflow",
   "SageMaker"
  ],
  "client": {
   "key": "stockgro",
   "name": "StockGro",
   "sector": "Investing",
   "line": "Portfolios, market data and the social layer around investing.",
   "imgs": [
    "/img/cs/stockgro/stockgro1.png"
   ]
  },
  "time": "8–14 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How much data do we need?",
    "a": "Less than most expect. We assess your data before promising results."
   },
   {
    "q": "Who maintains the model?",
    "a": "We set up retraining and monitoring, and can run it or hand it over."
   }
  ],
  "hero": "/img/cs/stockgro/stockgro1.png"
 },
 {
  "slug": "data-engineering",
  "name": "Data engineering",
  "cat": "ai-data",
  "tagline": "Data you can trust, in one place",
  "desc": "Pipelines and warehouses that pull data from every system into one reliable source, ready for reporting and AI.",
  "offers": [
   {
    "t": "Data pipelines",
    "b": "Batch and streaming ingestion from every source."
   },
   {
    "t": "Warehouse design",
    "b": "Models that answer business questions quickly."
   },
   {
    "t": "Data quality",
    "b": "Tests and alerts when numbers look wrong."
   },
   {
    "t": "Real-time data",
    "b": "Event streams for live dashboards and features."
   },
   {
    "t": "Governance",
    "b": "Access control, lineage and retention."
   },
   {
    "t": "AI readiness",
    "b": "Clean, documented data for models."
   }
  ],
  "tech": [
   "dbt",
   "Airflow",
   "Kafka",
   "BigQuery",
   "Snowflake",
   "Databricks",
   "Fivetran"
  ],
  "client": {
   "key": "skydo",
   "name": "Skydo",
   "sector": "Fintech",
   "line": "Cross-border payments for exporters, built around a ledger that reconciles to the cent.",
   "imgs": [
    "/img/cs/skydo/Skydo1.png",
    "/img/cs/skydo/Skydo2.png",
    "/img/cs/skydo/Skydo3.png",
    "/img/cs/skydo/Skydo4.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Which warehouse should we use?",
    "a": "BigQuery, Snowflake or Postgres, chosen by volume, cost and your cloud."
   },
   {
    "q": "Can you work with messy data?",
    "a": "Yes. Cleaning and documenting it is usually the first job."
   }
  ],
  "hero": "/img/cs/skydo/Skydo1.png"
 },
 {
  "slug": "data-analytics-and-bi",
  "name": "Data analytics & BI",
  "cat": "ai-data",
  "tagline": "Dashboards leadership actually opens",
  "desc": "Metrics, dashboards and self-serve analytics built on a single definition of every number, so meetings stop arguing about whose figure is right.",
  "offers": [
   {
    "t": "Metric definitions",
    "b": "One agreed meaning for every KPI."
   },
   {
    "t": "Executive dashboards",
    "b": "The numbers that run the business, daily."
   },
   {
    "t": "Self-serve analytics",
    "b": "Teams answer their own questions."
   },
   {
    "t": "Product analytics",
    "b": "Funnels, retention and feature usage."
   },
   {
    "t": "Embedded analytics",
    "b": "Dashboards inside your product for customers."
   },
   {
    "t": "Alerts",
    "b": "Notifications when a metric moves."
   }
  ],
  "tech": [
   "Power BI",
   "Looker",
   "Metabase",
   "Tableau",
   "dbt",
   "Amplitude"
  ],
  "client": {
   "key": "zeller",
   "name": "Zeller",
   "sector": "Business payments",
   "line": "Business payments on app and web, from merchant onboarding to settlement reporting.",
   "imgs": [
    "/img/cs/myzelller/myzeller5.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Can you use our existing BI tool?",
    "a": "Yes. We work with Power BI, Looker, Tableau and Metabase."
   },
   {
    "q": "How do we keep numbers consistent?",
    "a": "A shared metrics layer that every dashboard reads from."
   }
  ],
  "hero": "/img/cs/myzelller/myzeller5.png"
 },
 {
  "slug": "big-data-engineering",
  "name": "Big data engineering",
  "cat": "ai-data",
  "tagline": "Data at a scale spreadsheets cannot touch",
  "desc": "Streaming and batch platforms that process billions of events, so product, finance and operations work from the same numbers in near real time.",
  "offers": [
   {
    "t": "Streaming pipelines",
    "b": "Events processed as they happen."
   },
   {
    "t": "Data lakes",
    "b": "Raw data stored cheaply and queryable."
   },
   {
    "t": "Batch processing",
    "b": "Large jobs scheduled and monitored."
   },
   {
    "t": "Real-time dashboards",
    "b": "Metrics that update in seconds."
   },
   {
    "t": "Data governance",
    "b": "Access, lineage and retention rules."
   },
   {
    "t": "Cost control",
    "b": "Storage and compute sized to the workload."
   }
  ],
  "tech": [
   "Kafka",
   "Spark",
   "Databricks",
   "Snowflake",
   "BigQuery",
   "Airflow"
  ],
  "client": {
   "key": "stockgro",
   "name": "StockGro",
   "sector": "Investing",
   "line": "Portfolios, market data and the social layer around investing.",
   "imgs": [
    "/img/cs/stockgro/stockgro1.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "How much data is big data?",
    "a": "When daily volume outgrows a single database or reports take hours to run."
   },
   {
    "q": "Cloud or on-premise?",
    "a": "Either. Most clients choose AWS, Azure or Google Cloud."
   }
  ],
  "hero": "/img/cs/stockgro/stockgro1.png"
 },
 {
  "slug": "legacy-modernization",
  "name": "Legacy modernization",
  "cat": "digital-transformation",
  "tagline": "Modernise without stopping the business",
  "desc": "Old systems rebuilt or re-platformed in slices, so the business keeps running while the new system takes over piece by piece.",
  "offers": [
   {
    "t": "System assessment",
    "b": "What to keep, rebuild or retire."
   },
   {
    "t": "Re-architecture",
    "b": "Monoliths broken into maintainable services."
   },
   {
    "t": "Data migration",
    "b": "Records moved, verified and reconciled."
   },
   {
    "t": "UI modernisation",
    "b": "Old screens replaced with modern interfaces."
   },
   {
    "t": "Strangler rollout",
    "b": "New parts take over gradually, with rollback."
   },
   {
    "t": "Knowledge capture",
    "b": "Undocumented logic written down before it is lost."
   }
  ],
  "tech": [
   ".NET",
   "Java",
   "Node.js",
   "PostgreSQL",
   "Kubernetes",
   "Azure",
   "AWS"
  ],
  "client": {
   "key": "kogan",
   "name": "Kogan",
   "sector": "Marketplace",
   "line": "A marketplace with a large third-party seller base and the seller tooling behind it.",
   "imgs": [
    "/img/cs/kogan/kogan2.png"
   ]
  },
  "time": "12–36 weeks",
  "model": "Dedicated team",
  "faq": [
   {
    "q": "Do we have to stop using the old system?",
    "a": "No. We migrate in slices so both run until the new one is proven."
   },
   {
    "q": "What if nobody knows how the old code works?",
    "a": "Reverse-engineering and documenting it is part of the assessment."
   }
  ],
  "hero": "/img/cs/kogan/kogan2.png"
 },
 {
  "slug": "cloud-migration",
  "name": "Cloud migration",
  "cat": "digital-transformation",
  "tagline": "Move to the cloud, keep control of the bill",
  "desc": "Migration to AWS, Azure or Google Cloud with infrastructure as code, tested rollbacks and a cost plan agreed before the first server moves.",
  "offers": [
   {
    "t": "Readiness assessment",
    "b": "Workloads ranked by effort and benefit."
   },
   {
    "t": "Landing zone",
    "b": "Accounts, networking and security set up properly."
   },
   {
    "t": "Migration",
    "b": "Rehost, re-platform or refactor, per workload."
   },
   {
    "t": "Infrastructure as code",
    "b": "Every resource reproducible in Terraform."
   },
   {
    "t": "Cost optimisation",
    "b": "Right-sizing, reservations and alerts."
   },
   {
    "t": "Disaster recovery",
    "b": "Backups and failover tested, not assumed."
   }
  ],
  "tech": [
   "AWS",
   "Azure",
   "Google Cloud",
   "Terraform",
   "Kubernetes",
   "Docker"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "6–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Which cloud should we choose?",
    "a": "The one that fits your stack, compliance and team. We work across all three."
   },
   {
    "q": "Will there be downtime?",
    "a": "We plan cutovers for minimal or zero downtime and rehearse them first."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "devops-and-ci-cd",
  "name": "DevOps & CI/CD",
  "cat": "digital-transformation",
  "tagline": "Deployments that stop being an event",
  "desc": "Pipelines, infrastructure as code and observability that let your team ship many times a day without holding their breath.",
  "offers": [
   {
    "t": "CI/CD pipelines",
    "b": "Build, test and deploy on every merge."
   },
   {
    "t": "Infrastructure as code",
    "b": "Environments created and changed by code."
   },
   {
    "t": "Containers & Kubernetes",
    "b": "Workloads that scale and heal themselves."
   },
   {
    "t": "Observability",
    "b": "Logs, metrics and traces in one place."
   },
   {
    "t": "Release strategies",
    "b": "Blue-green, canary and feature flags."
   },
   {
    "t": "Cost control",
    "b": "Spend tracked per service and team."
   }
  ],
  "tech": [
   "GitHub Actions",
   "GitLab CI",
   "Terraform",
   "Kubernetes",
   "Helm",
   "Datadog",
   "Grafana"
  ],
  "client": {
   "key": "skydo",
   "name": "Skydo",
   "sector": "Fintech",
   "line": "Cross-border payments for exporters, built around a ledger that reconciles to the cent.",
   "imgs": [
    "/img/cs/skydo/Skydo1.png",
    "/img/cs/skydo/Skydo2.png",
    "/img/cs/skydo/Skydo3.png",
    "/img/cs/skydo/Skydo4.png"
   ]
  },
  "time": "4–12 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Do we need Kubernetes?",
    "a": "Not always. We recommend the simplest platform that meets your scale."
   },
   {
    "q": "Can you work with our existing pipelines?",
    "a": "Yes. We improve what you have before replacing anything."
   }
  ],
  "hero": "/img/cs/skydo/Skydo1.png"
 },
 {
  "slug": "cybersecurity",
  "name": "Cybersecurity",
  "cat": "digital-transformation",
  "tagline": "Secure by design, not by patch",
  "desc": "Security reviews, penetration testing and hardening for applications and cloud, with fixes prioritised by real risk.",
  "offers": [
   {
    "t": "Security audit",
    "b": "Code, cloud and access reviewed against best practice."
   },
   {
    "t": "Penetration testing",
    "b": "Web, mobile and API attacks simulated."
   },
   {
    "t": "Cloud hardening",
    "b": "Least-privilege access, encryption and logging."
   },
   {
    "t": "Secure SDLC",
    "b": "Scanning and reviews built into development."
   },
   {
    "t": "Compliance readiness",
    "b": "Groundwork for ISO 27001, SOC 2 and HIPAA."
   },
   {
    "t": "Incident response",
    "b": "Plans and drills before you need them."
   }
  ],
  "tech": [
   "OWASP ZAP",
   "Burp Suite",
   "Snyk",
   "AWS Security Hub",
   "Wazuh",
   "Vault"
  ],
  "client": {
   "key": "lunar",
   "name": "Lunar",
   "sector": "Digital banking",
   "line": "Accounts, payments and servicing customers expect without a branch.",
   "imgs": [
    "/img/cs/lunar/luner1.png"
   ]
  },
  "time": "2–8 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you provide a report?",
    "a": "Yes, with findings ranked by risk and clear steps to fix each one."
   },
   {
    "q": "Can you fix the issues too?",
    "a": "Yes. Our engineers can remediate and retest."
   }
  ],
  "hero": "/img/cs/lunar/luner1.png"
 },
 {
  "slug": "erp-development",
  "name": "ERP development",
  "cat": "business-software",
  "tagline": "One data model for the whole business",
  "desc": "Custom ERP modules for inventory, finance, procurement and HR on one data model, so the numbers never disagree between teams.",
  "offers": [
   {
    "t": "Inventory & warehousing",
    "b": "Stock, batches and locations in real time."
   },
   {
    "t": "Finance & GST",
    "b": "Invoicing, ledgers and tax-ready reports."
   },
   {
    "t": "Procurement",
    "b": "Purchase orders, approvals and vendor management."
   },
   {
    "t": "HR & payroll",
    "b": "Attendance, leave and salary runs."
   },
   {
    "t": "Manufacturing",
    "b": "BOMs, production orders and costing."
   },
   {
    "t": "Reporting",
    "b": "Dashboards across every module."
   }
  ],
  "tech": [
   "React",
   ".NET",
   "Node.js",
   "PostgreSQL",
   "Power BI",
   "Azure"
  ],
  "client": {
   "key": "voly",
   "name": "Voly",
   "sector": "Quick commerce",
   "line": "Ordering, inventory and fulfilment operations for rapid grocery delivery.",
   "imgs": [
    "/img/cs/volygroup/volygroup2.png"
   ]
  },
  "time": "14–28 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Custom ERP or Odoo/SAP?",
    "a": "We advise honestly. Custom fits when your process is your advantage."
   },
   {
    "q": "Can it connect to our accounting software?",
    "a": "Yes, including Tally, Zoho Books and QuickBooks."
   }
  ],
  "hero": "/img/cs/volygroup/volygroup2.png"
 },
 {
  "slug": "crm-development",
  "name": "CRM development",
  "cat": "business-software",
  "tagline": "Built around how your team sells",
  "desc": "A CRM shaped to your sales process, with pipelines, follow-ups, WhatsApp and calling in one place, and dashboards the team actually uses.",
  "offers": [
   {
    "t": "Pipelines",
    "b": "Stages, owners and next steps that match your process."
   },
   {
    "t": "Lead routing",
    "b": "The right lead to the right rep, instantly."
   },
   {
    "t": "WhatsApp & calling",
    "b": "Conversations logged against every contact."
   },
   {
    "t": "Automation",
    "b": "Follow-ups and reminders that send themselves."
   },
   {
    "t": "Field-team app",
    "b": "Mobile CRM for sales on the move."
   },
   {
    "t": "Dashboards",
    "b": "Pipeline, conversion and rep performance."
   }
  ],
  "tech": [
   "React",
   "Node.js",
   "PostgreSQL",
   "WhatsApp API",
   "Twilio",
   "Redis"
  ],
  "client": {
   "key": "zeller",
   "name": "Zeller",
   "sector": "Business payments",
   "line": "Business payments on app and web, from merchant onboarding to settlement reporting.",
   "imgs": [
    "/img/cs/myzelller/myzeller5.png"
   ]
  },
  "time": "8–14 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Custom CRM or Salesforce/HubSpot?",
    "a": "Custom when per-seat costs or your process make off-the-shelf a poor fit."
   },
   {
    "q": "Can you migrate our existing data?",
    "a": "Yes, contacts, deals and history included."
   }
  ],
  "hero": "/img/cs/myzelller/myzeller5.png"
 },
 {
  "slug": "e-commerce-app-development-company",
  "name": "E-commerce development",
  "cat": "business-software",
  "tagline": "Storefronts that survive a sale",
  "desc": "Storefronts, marketplaces and the inventory and order systems behind them, tuned for peak traffic and fast checkout.",
  "offers": [
   {
    "t": "Storefronts",
    "b": "Fast, conversion-focused shopping experiences."
   },
   {
    "t": "Marketplaces",
    "b": "Multi-vendor listings, payouts and disputes."
   },
   {
    "t": "Checkout & payments",
    "b": "UPI, cards, wallets and BNPL."
   },
   {
    "t": "Order management",
    "b": "Orders, returns and fulfilment in one place."
   },
   {
    "t": "Inventory",
    "b": "One stock source for every channel."
   },
   {
    "t": "Headless commerce",
    "b": "Shopify or custom backends with any front end."
   }
  ],
  "tech": [
   "Next.js",
   "Shopify",
   "Medusa",
   "Node.js",
   "Elasticsearch",
   "Razorpay",
   "Stripe"
  ],
  "client": {
   "key": "snitch",
   "name": "Snitch",
   "sector": "Fashion e-commerce",
   "line": "Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.",
   "imgs": [
    "/img/cs/snitch/snitch1.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Shopify or custom?",
    "a": "Shopify for speed, custom when your catalogue or operations need it."
   },
   {
    "q": "Can it handle sale-day traffic?",
    "a": "Yes. We load-test to your peak and beyond before launch."
   }
  ],
  "hero": "/img/cs/snitch/snitch1.png"
 },
 {
  "slug": "api-and-integrations",
  "name": "API & integrations",
  "cat": "digital-transformation",
  "tagline": "Systems that talk to each other",
  "desc": "Payment rails, ERPs, CRMs and partner APIs connected behind clean, versioned interfaces with retries and monitoring.",
  "offers": [
   {
    "t": "API design",
    "b": "Versioned, documented REST and GraphQL APIs."
   },
   {
    "t": "Payment integrations",
    "b": "Gateways, payouts and reconciliation."
   },
   {
    "t": "ERP & CRM sync",
    "b": "Two-way sync without duplicate records."
   },
   {
    "t": "Webhooks & events",
    "b": "Reliable delivery with retries."
   },
   {
    "t": "API gateways",
    "b": "Auth, rate limits and analytics."
   },
   {
    "t": "Monitoring",
    "b": "Alerts when an integration fails."
   }
  ],
  "tech": [
   "REST",
   "GraphQL",
   "Kafka",
   "RabbitMQ",
   "Node.js",
   "Kong",
   "Postman"
  ],
  "client": {
   "key": "skydo",
   "name": "Skydo",
   "sector": "Fintech",
   "line": "Cross-border payments for exporters, built around a ledger that reconciles to the cent.",
   "imgs": [
    "/img/cs/skydo/Skydo1.png",
    "/img/cs/skydo/Skydo2.png",
    "/img/cs/skydo/Skydo3.png",
    "/img/cs/skydo/Skydo4.png"
   ]
  },
  "time": "3–8 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "What if a partner API changes?",
    "a": "Integrations sit behind an adapter layer so changes stay contained."
   },
   {
    "q": "Do you write API documentation?",
    "a": "Yes, OpenAPI specs and developer guides."
   }
  ],
  "hero": "/img/cs/skydo/Skydo1.png"
 },
 {
  "slug": "blockchain-development",
  "name": "Blockchain development",
  "cat": "emerging-tech",
  "tagline": "Ledgers where trust matters",
  "desc": "Smart contracts, wallets and tokenised systems built with the same testing and security discipline as the rest of our work.",
  "offers": [
   {
    "t": "Smart contracts",
    "b": "Solidity and Rust contracts, tested and audited."
   },
   {
    "t": "Wallets",
    "b": "Custodial and non-custodial wallet apps."
   },
   {
    "t": "Tokenisation",
    "b": "Assets, loyalty and payments on-chain."
   },
   {
    "t": "dApps",
    "b": "Web front ends connected to the chain."
   },
   {
    "t": "Security audits",
    "b": "Contract reviews before mainnet."
   },
   {
    "t": "Integrations",
    "b": "On-chain events connected to your systems."
   }
  ],
  "tech": [
   "Solidity",
   "Rust",
   "Ethereum",
   "Polygon",
   "Hardhat",
   "ethers.js"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do we really need blockchain?",
    "a": "Often not. We will tell you if a database does the job better."
   },
   {
    "q": "Which chain do you use?",
    "a": "Chosen by cost, speed and ecosystem. Ethereum, Polygon and others."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "iot-development",
  "name": "IoT development",
  "cat": "emerging-tech",
  "tagline": "Devices, data and the apps around them",
  "desc": "Connected-device platforms covering firmware links, data ingestion, dashboards and the mobile apps people use to control them.",
  "offers": [
   {
    "t": "Device connectivity",
    "b": "MQTT and BLE links to hardware."
   },
   {
    "t": "Data ingestion",
    "b": "Telemetry stored and processed at scale."
   },
   {
    "t": "Dashboards",
    "b": "Live device status and alerts."
   },
   {
    "t": "Mobile control apps",
    "b": "Pair, configure and control devices."
   },
   {
    "t": "Fleet management",
    "b": "Updates and monitoring across thousands of devices."
   },
   {
    "t": "Edge processing",
    "b": "Decisions made close to the device."
   }
  ],
  "tech": [
   "MQTT",
   "AWS IoT",
   "Azure IoT Hub",
   "Node.js",
   "Flutter",
   "InfluxDB"
  ],
  "client": {
   "key": "milkrun",
   "name": "MILKRUN",
   "sector": "Quick commerce",
   "line": "Grocery delivery with rider dispatch and live tracking, engineered for sub-ten-minute promises.",
   "imgs": [
    "/img/cs/milkrun/milkrun1.png",
    "/img/cs/milkrun/milkrun2.png",
    "/img/cs/milkrun/milkrun3.png",
    "/img/cs/milkrun/milkrun4.png"
   ]
  },
  "time": "10–20 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you build hardware?",
    "a": "We build the software side and work with your hardware partners."
   },
   {
    "q": "Can it work with poor connectivity?",
    "a": "Yes, with buffering and edge processing."
   }
  ],
  "hero": "/img/cs/milkrun/milkrun1.png"
 },
 {
  "slug": "ar-vr-development",
  "name": "AR/VR development",
  "cat": "emerging-tech",
  "tagline": "Experiences people can step into",
  "desc": "Augmented and virtual reality apps for training, retail, real estate and field work, on phones, headsets and the web.",
  "offers": [
   {
    "t": "AR mobile apps",
    "b": "3D objects placed in the real world on iOS and Android."
   },
   {
    "t": "VR training",
    "b": "Safe, repeatable practice for real procedures."
   },
   {
    "t": "Virtual try-on",
    "b": "Products tried before they are bought."
   },
   {
    "t": "3D product viewers",
    "b": "Rotate, zoom and configure in the browser."
   },
   {
    "t": "Virtual tours",
    "b": "Spaces explored remotely."
   },
   {
    "t": "Headset apps",
    "b": "Built for Meta Quest and Apple Vision Pro."
   }
  ],
  "tech": [
   "Unity",
   "Unreal Engine",
   "ARKit",
   "ARCore",
   "WebXR",
   "Three.js"
  ],
  "client": {
   "key": "jaypore",
   "name": "Jaypore",
   "sector": "Lifestyle e-commerce",
   "line": "A craft-led lifestyle storefront with editorial merchandising and operations behind it.",
   "imgs": [
    "/img/cs/jaypore/jaypore1.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do users need a headset?",
    "a": "No. Most AR runs on the phone people already own."
   },
   {
    "q": "Can you create the 3D models?",
    "a": "Yes, or work from your existing CAD and product files."
   }
  ],
  "hero": "/img/cs/jaypore/jaypore1.png"
 },
 {
  "slug": "it-consulting",
  "name": "IT consulting",
  "cat": "consulting",
  "tagline": "Technology decisions you will not regret",
  "desc": "Senior advice on systems, vendors and architecture, so technology spending matches business goals and nothing is bought twice.",
  "offers": [
   {
    "t": "IT strategy",
    "b": "Technology plans tied to business goals."
   },
   {
    "t": "Vendor selection",
    "b": "Build, buy or partner, compared honestly."
   },
   {
    "t": "Architecture review",
    "b": "Current systems assessed for risk and cost."
   },
   {
    "t": "Cost optimisation",
    "b": "Licences, cloud and contracts reviewed."
   },
   {
    "t": "Digital roadmap",
    "b": "Sequenced projects with budgets."
   },
   {
    "t": "Fractional CTO",
    "b": "Senior technology leadership, part-time."
   }
  ],
  "tech": [
   "AWS",
   "Azure",
   "Google Cloud",
   "Microsoft 365",
   "Atlassian"
  ],
  "client": {
   "key": "fynd",
   "name": "Fynd",
   "sector": "Commerce technology",
   "line": "Online ordering connected to retail operations through one inventory service.",
   "imgs": [
    "/img/cs/fynd/fynd1.png"
   ]
  },
  "time": "2–6 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Are you vendor-neutral?",
    "a": "Yes. We recommend what fits, including tools we do not build."
   },
   {
    "q": "Can you act as our CTO?",
    "a": "Yes, as a fractional CTO for startups and growing companies."
   }
  ],
  "hero": "/assets/company/team-offsite-event.png"
 },
 {
  "slug": "software-consulting",
  "name": "Software consulting",
  "cat": "consulting",
  "tagline": "The right architecture, before the first line",
  "desc": "Architecture, stack and delivery advice from engineers who have shipped 300+ products, for teams about to build or rebuild.",
  "offers": [
   {
    "t": "Architecture design",
    "b": "Services, data and infrastructure planned."
   },
   {
    "t": "Stack selection",
    "b": "Languages and frameworks chosen with reasons."
   },
   {
    "t": "Code review",
    "b": "Quality, security and maintainability assessed."
   },
   {
    "t": "Scalability planning",
    "b": "What breaks first, and at what number."
   },
   {
    "t": "Delivery practices",
    "b": "Process, CI and team structure."
   },
   {
    "t": "Hiring support",
    "b": "Interviews and role definitions for your team."
   }
  ],
  "tech": [
   "TypeScript",
   "Node.js",
   "Java",
   ".NET",
   "Python",
   "Kubernetes"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "2–6 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Is this only for new products?",
    "a": "No. Rebuilds and scaling problems are common reasons teams call us."
   },
   {
    "q": "Do we get a written report?",
    "a": "Yes, with options, trade-offs and recommendations."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "fintech-software-development-company",
  "name": "Fintech consulting",
  "cat": "consulting",
  "tagline": "Money products, designed to pass the audit",
  "desc": "Advice on payments, lending, wallets and banking products from engineers who have built them, covering architecture, compliance and partner choice.",
  "offers": [
   {
    "t": "Product strategy",
    "b": "Which financial product to launch first, and why."
   },
   {
    "t": "Regulatory readiness",
    "b": "RBI, PCI DSS and KYC requirements mapped early."
   },
   {
    "t": "Partner selection",
    "b": "Banks, payment rails and KYC vendors compared."
   },
   {
    "t": "Ledger architecture",
    "b": "Balances that reconcile to the cent."
   },
   {
    "t": "Risk & fraud",
    "b": "Controls designed in, not bolted on."
   },
   {
    "t": "Launch roadmap",
    "b": "Sandbox to production, step by step."
   }
  ],
  "tech": [
   "Stripe",
   "Razorpay",
   "Plaid",
   "PostgreSQL",
   "Kafka",
   "AWS"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "3–6 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you advise on compliance?",
    "a": "We map technical requirements and work alongside your legal and compliance advisers."
   },
   {
    "q": "Can you build what you recommend?",
    "a": "Yes. Our fintech team can take the plan straight into build."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "mobile-app-consulting",
  "name": "Mobile app consulting",
  "cat": "consulting",
  "tagline": "Decide native, cross-platform or neither",
  "desc": "Senior mobile engineers review your idea or existing app and recommend the platform, architecture and release plan before you spend on the build.",
  "offers": [
   {
    "t": "Platform choice",
    "b": "Native, Flutter or React Native, with reasons."
   },
   {
    "t": "App audit",
    "b": "Crashes, performance and store ratings reviewed."
   },
   {
    "t": "Architecture review",
    "b": "Offline, sync and backend design."
   },
   {
    "t": "Store strategy",
    "b": "Listings, reviews and release cadence."
   },
   {
    "t": "Cost estimate",
    "b": "What it takes to build or fix."
   },
   {
    "t": "Growth review",
    "b": "Analytics and retention gaps found."
   }
  ],
  "tech": [
   "Swift",
   "Kotlin",
   "Flutter",
   "React Native",
   "Firebase"
  ],
  "client": {
   "key": "milkrun",
   "name": "MILKRUN",
   "sector": "Quick commerce",
   "line": "Grocery delivery with rider dispatch and live tracking, engineered for sub-ten-minute promises.",
   "imgs": [
    "/img/cs/milkrun/milkrun1.png",
    "/img/cs/milkrun/milkrun2.png",
    "/img/cs/milkrun/milkrun3.png",
    "/img/cs/milkrun/milkrun4.png"
   ]
  },
  "time": "1–3 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Can you review an app another team built?",
    "a": "Yes. We need read-only code access and analytics under NDA."
   },
   {
    "q": "Do we get a written report?",
    "a": "Yes, with ranked recommendations and costs."
   }
  ],
  "hero": "/img/cs/milkrun/milkrun1.png"
 },
 {
  "slug": "product-discovery",
  "name": "Product discovery",
  "cat": "consulting",
  "tagline": "Find the version worth building",
  "desc": "Workshops, user interviews and technical planning that turn an idea or brief into a prioritised scope and a fixed number.",
  "offers": [
   {
    "t": "Stakeholder workshops",
    "b": "Goals and constraints agreed in days."
   },
   {
    "t": "User research",
    "b": "Interviews that test assumptions early."
   },
   {
    "t": "Competitive review",
    "b": "What exists, and where the gap is."
   },
   {
    "t": "Scope & priorities",
    "b": "Must-haves separated from nice-to-haves."
   },
   {
    "t": "Architecture outline",
    "b": "How it will be built, at high level."
   },
   {
    "t": "Fixed estimate",
    "b": "A number and timeline you can plan around."
   }
  ],
  "tech": [
   "FigJam",
   "Miro",
   "Notion",
   "Figma",
   "Maze"
  ],
  "client": {
   "key": "zupit",
   "name": "Zupit",
   "sector": "Quick commerce",
   "line": "A focused first release for rapid delivery, built to carry version two.",
   "imgs": [
    "/img/cs/zypit/zypit2.png"
   ]
  },
  "time": "2–4 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Why pay for discovery?",
    "a": "It prevents building the wrong thing, which costs far more."
   },
   {
    "q": "What do we get at the end?",
    "a": "A scope, prototype, architecture outline and fixed estimate."
   }
  ],
  "hero": "/assets/company/team-offsite-event.png"
 },
 {
  "slug": "technical-audit",
  "name": "Technical audit",
  "cat": "consulting",
  "tagline": "Know what will break first",
  "desc": "A review of code, infrastructure, security and delivery practices, with a ranked list of fixes before you add anything new.",
  "offers": [
   {
    "t": "Code review",
    "b": "Quality, structure and test coverage assessed."
   },
   {
    "t": "Infrastructure review",
    "b": "Cloud setup, cost and reliability."
   },
   {
    "t": "Security findings",
    "b": "Vulnerabilities ranked by risk."
   },
   {
    "t": "Performance review",
    "b": "Bottlenecks found and measured."
   },
   {
    "t": "Process review",
    "b": "How code moves from idea to production."
   },
   {
    "t": "Fix plan",
    "b": "What to fix, in what order, and what it costs."
   }
  ],
  "tech": [
   "SonarQube",
   "Snyk",
   "OWASP ZAP",
   "k6",
   "AWS",
   "Datadog"
  ],
  "client": {
   "key": "learnosity",
   "name": "Learnosity",
   "sector": "Assessment platform",
   "line": "Assessment infrastructure embedded by the products that integrate it.",
   "imgs": [
    "/img/cs/learnosity/learnosity2.png"
   ]
  },
  "time": "2–3 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Will you need access to our code?",
    "a": "Read-only access under NDA is enough for the audit."
   },
   {
    "q": "Can you fix what you find?",
    "a": "Yes, or hand the plan to your own team."
   }
  ],
  "hero": "/img/cs/learnosity/learnosity2.png"
 },
 {
  "slug": "dedicated-teams",
  "name": "Dedicated teams",
  "cat": "teams-managed",
  "tagline": "A squad that works only on your product",
  "desc": "A cross-functional team of 4 to 12 from our in-house staff, in your tools and standups, led by a Mariox delivery lead.",
  "offers": [
   {
    "t": "Team design",
    "b": "Roles and seniority matched to your roadmap."
   },
   {
    "t": "Delivery lead",
    "b": "One accountable person on our side."
   },
   {
    "t": "Sprint delivery",
    "b": "Planning, demos and retrospectives."
   },
   {
    "t": "Reporting",
    "b": "Velocity, quality and spend, every sprint."
   },
   {
    "t": "Flexible scale",
    "b": "Add or remove people month to month."
   },
   {
    "t": "Knowledge retention",
    "b": "Documentation so nothing lives in one head."
   }
  ],
  "tech": [
   "Your stack",
   "Jira",
   "Slack",
   "GitHub",
   "Confluence"
  ],
  "client": {
   "key": "lunar",
   "name": "Lunar",
   "sector": "Digital banking",
   "line": "Accounts, payments and servicing customers expect without a branch.",
   "imgs": [
    "/img/cs/lunar/luner1.png"
   ]
  },
  "time": "Start in 2–3 weeks",
  "model": "Monthly",
  "faq": [
   {
    "q": "Are the engineers your employees?",
    "a": "Yes. Every team member is on Mariox’s in-house payroll."
   },
   {
    "q": "Can we interview the team?",
    "a": "Yes. You approve every person before they join."
   }
  ],
  "hero": "/assets/company/team-office-group.png"
 },
 {
  "slug": "staff-augmentation",
  "name": "Staff augmentation",
  "cat": "teams-managed",
  "tagline": "Senior engineers, by the month",
  "desc": "Vetted engineers from our in-house team added to yours, working in your process and tools, without the hiring cycle.",
  "offers": [
   {
    "t": "Vetted seniors",
    "b": "Engineers screened on real work, not trivia."
   },
   {
    "t": "Fast start",
    "b": "Profiles shared quickly, start within weeks."
   },
   {
    "t": "Your process",
    "b": "They join your standups and tools."
   },
   {
    "t": "Time-zone overlap",
    "b": "Working hours agreed up front."
   },
   {
    "t": "Replacement guarantee",
    "b": "A swap if the fit is not right."
   },
   {
    "t": "Flexible terms",
    "b": "Month to month, no long lock-in."
   }
  ],
  "tech": [
   "React",
   "Node.js",
   "Python",
   "Java",
   "Flutter",
   "AWS"
  ],
  "client": {
   "key": "fampay",
   "name": "Fampay",
   "sector": "Youth payments",
   "line": "Payments and cards for a young audience, with parental controls built in.",
   "imgs": [
    "/img/cs/famapp/famapp4.png"
   ]
  },
  "time": "Start in 1–2 weeks",
  "model": "Monthly",
  "faq": [
   {
    "q": "How quickly can someone start?",
    "a": "Typically within one to two weeks of approval."
   },
   {
    "q": "What if it is not a good fit?",
    "a": "We replace the engineer at no extra cost."
   }
  ],
  "hero": "/assets/company/team-office-seated.png"
 },
 {
  "slug": "managed-it-services",
  "name": "Managed IT services",
  "cat": "teams-managed",
  "tagline": "So your team can work on the roadmap",
  "desc": "Monitoring, patching, backups and incident response for your applications and cloud, run by our team and reported monthly.",
  "offers": [
   {
    "t": "24/7 monitoring",
    "b": "Uptime and performance watched around the clock."
   },
   {
    "t": "Incident response",
    "b": "Agreed response times with escalation."
   },
   {
    "t": "Patching & updates",
    "b": "Security updates applied on schedule."
   },
   {
    "t": "Backups",
    "b": "Tested restores, not just backups."
   },
   {
    "t": "Cloud management",
    "b": "Cost, access and configuration kept tidy."
   },
   {
    "t": "Monthly reporting",
    "b": "Uptime, incidents and spend in one report."
   }
  ],
  "tech": [
   "Datadog",
   "PagerDuty",
   "Grafana",
   "AWS",
   "Azure",
   "Terraform"
  ],
  "client": {
   "key": "soldo",
   "name": "Soldo",
   "sector": "Spend management",
   "line": "Company cards, budgets and expense reporting for finance teams.",
   "imgs": [
    "/img/cs/soldo/soldo.png"
   ]
  },
  "time": "Ongoing",
  "model": "Monthly",
  "faq": [
   {
    "q": "What response times do you offer?",
    "a": "Agreed per system in an SLA, from critical to low priority."
   },
   {
    "q": "Can you manage systems we did not build?",
    "a": "Yes, after an onboarding review."
   }
  ],
  "hero": "/assets/company/team-office-wide.png"
 },
 {
  "slug": "support-and-maintenance",
  "name": "Support & maintenance",
  "cat": "teams-managed",
  "tagline": "Your product, looked after",
  "desc": "Bug fixes, updates, OS upgrades and small improvements for live products, so they stay secure, fast and compatible.",
  "offers": [
   {
    "t": "Bug fixing",
    "b": "Issues triaged and fixed by priority."
   },
   {
    "t": "OS & library updates",
    "b": "Compatibility kept current."
   },
   {
    "t": "Security patches",
    "b": "Vulnerabilities fixed quickly."
   },
   {
    "t": "Performance tuning",
    "b": "Slow screens and queries improved."
   },
   {
    "t": "Small enhancements",
    "b": "Hours each month for improvements."
   },
   {
    "t": "Health reports",
    "b": "Crash rates, uptime and open issues."
   }
  ],
  "tech": [
   "Sentry",
   "Firebase Crashlytics",
   "Jira",
   "GitHub",
   "Datadog"
  ],
  "client": {
   "key": "hotdoc",
   "name": "HotDoc",
   "sector": "Healthcare",
   "line": "Appointment booking and patient engagement across a national clinic network.",
   "imgs": [
    "/img/cs/hotdoc/hotdoc1.png"
   ]
  },
  "time": "Ongoing",
  "model": "Monthly",
  "faq": [
   {
    "q": "Do you support apps built elsewhere?",
    "a": "Yes, after a short code and infrastructure review."
   },
   {
    "q": "How are hours billed?",
    "a": "A monthly retainer with a set number of hours, unused hours reported."
   }
  ],
  "hero": "/assets/company/team-office-wide.png"
 },
 {
  "slug": "website-development-company",
  "name": "Website development",
  "cat": "product-engineering",
  "tagline": "Websites that load fast and rank",
  "desc": "Marketing and corporate websites built for speed, SEO and easy editing by your own team.",
  "offers": [
   {
    "t": "Corporate websites",
    "b": "Brand sites that explain what you do in seconds."
   },
   {
    "t": "Landing pages",
    "b": "Campaign pages built to convert paid traffic."
   },
   {
    "t": "CMS setup",
    "b": "Pages your team edits without a developer."
   },
   {
    "t": "SEO foundations",
    "b": "Technical SEO, schema and Core Web Vitals."
   },
   {
    "t": "Multilingual sites",
    "b": "Content in every language you sell in."
   },
   {
    "t": "Hosting & care",
    "b": "Updates, backups and uptime monitoring."
   }
  ],
  "tech": [
   "Next.js",
   "WordPress",
   "Webflow",
   "Sanity",
   "Vercel",
   "Cloudflare"
  ],
  "client": {
   "key": "snitch",
   "name": "Snitch",
   "sector": "Fashion e-commerce",
   "line": "Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.",
   "imgs": [
    "/img/cs/snitch/snitch1.png"
   ]
  },
  "time": "3–8 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Will we be able to edit the site?",
    "a": "Yes. Every page is editable in a CMS your team is trained on."
   },
   {
    "q": "Do you handle SEO?",
    "a": "We build the technical SEO foundations and work with your marketing team on content."
   }
  ],
  "hero": "/img/cs/snitch/snitch1.png"
 },
 {
  "slug": "frontend-development",
  "name": "Frontend development",
  "cat": "product-engineering",
  "tagline": "Interfaces that feel instant",
  "desc": "React, Next.js and Vue frontends with design systems, accessibility and performance budgets built in.",
  "offers": [
   {
    "t": "React & Next.js apps",
    "b": "Component-driven interfaces that scale."
   },
   {
    "t": "Design system build",
    "b": "Figma components turned into code."
   },
   {
    "t": "Performance tuning",
    "b": "Faster loads and smoother interactions."
   },
   {
    "t": "Accessibility",
    "b": "WCAG 2.2 AA as a default."
   },
   {
    "t": "Frontend migrations",
    "b": "Old jQuery or AngularJS moved to modern stacks."
   },
   {
    "t": "Micro-frontends",
    "b": "Large apps split for independent teams."
   }
  ],
  "tech": [
   "React",
   "Next.js",
   "Vue",
   "TypeScript",
   "Tailwind",
   "Storybook"
  ],
  "client": {
   "key": "onbuy",
   "name": "OnBuy",
   "sector": "Marketplace",
   "line": "Multi-seller listings, checkout, payouts and dispute handling.",
   "imgs": [
    "/img/cs/onbuy/onbuy1.png"
   ]
  },
  "time": "6–14 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Can you work with our backend team?",
    "a": "Yes. We agree API contracts first so both teams move in parallel."
   },
   {
    "q": "Do you write tests?",
    "a": "Yes. Unit, component and end-to-end tests are part of every build."
   }
  ],
  "hero": "/img/cs/onbuy/onbuy1.png"
 },
 {
  "slug": "backend-development",
  "name": "Backend development",
  "cat": "product-engineering",
  "tagline": "APIs and services that hold under load",
  "desc": "Scalable APIs, services and databases in Node.js, Python, Java, Go and .NET, with monitoring from day one.",
  "offers": [
   {
    "t": "API development",
    "b": "REST and GraphQL APIs with versioning."
   },
   {
    "t": "Microservices",
    "b": "Services split where it helps, not by default."
   },
   {
    "t": "Database design",
    "b": "Schemas built for the queries you run."
   },
   {
    "t": "Queues & events",
    "b": "Background jobs and event streams."
   },
   {
    "t": "Performance & scaling",
    "b": "Caching, indexing and horizontal scale."
   },
   {
    "t": "Observability",
    "b": "Logs, metrics and traces in place."
   }
  ],
  "tech": [
   "Node.js",
   "Python",
   "Java",
   "Go",
   ".NET",
   "PostgreSQL"
  ],
  "client": {
   "key": "skydo",
   "name": "Skydo",
   "sector": "Fintech",
   "line": "Cross-border payments for exporters, built around a ledger that reconciles to the cent.",
   "imgs": [
    "/img/cs/skydo/Skydo1.png",
    "/img/cs/skydo/Skydo2.png",
    "/img/cs/skydo/Skydo3.png",
    "/img/cs/skydo/Skydo4.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Which language do you recommend?",
    "a": "The one your team can maintain. We explain the trade-offs before choosing."
   },
   {
    "q": "Can you scale an existing backend?",
    "a": "Yes. We start with a performance review and fix the biggest bottleneck first."
   }
  ],
  "hero": "/img/cs/skydo/Skydo1.png"
 },
 {
  "slug": "enterprise-software-development",
  "name": "Enterprise software development",
  "cat": "product-engineering",
  "tagline": "Systems large organisations run on",
  "desc": "Secure, audited platforms for large teams, with single sign-on, role-based access and integrations into what you already run.",
  "offers": [
   {
    "t": "Enterprise portals",
    "b": "One place for employees, partners or customers."
   },
   {
    "t": "Workflow systems",
    "b": "Approvals and processes digitised."
   },
   {
    "t": "SSO & access control",
    "b": "Azure AD, Okta and role-based permissions."
   },
   {
    "t": "Audit trails",
    "b": "Every change recorded."
   },
   {
    "t": "System integration",
    "b": "SAP, Oracle and Microsoft connected."
   },
   {
    "t": "Long-term support",
    "b": "SLAs for business-critical systems."
   }
  ],
  "tech": [
   ".NET",
   "Java",
   "Angular",
   "SQL Server",
   "Azure",
   "Kubernetes"
  ],
  "client": {
   "key": "fynd",
   "name": "Fynd",
   "sector": "Commerce technology",
   "line": "Online ordering connected to retail operations through one inventory service.",
   "imgs": [
    "/img/cs/fynd/fynd1.png"
   ]
  },
  "time": "16–32 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Can you meet our security reviews?",
    "a": "Yes. We regularly work through vendor security questionnaires and penetration tests."
   },
   {
    "q": "Do you work on-premise?",
    "a": "Yes, as well as private and public cloud."
   }
  ],
  "hero": "/img/cs/fynd/fynd1.png"
 },
 {
  "slug": "ai-chatbot-development",
  "name": "AI chatbot development",
  "cat": "ai-data",
  "tagline": "Chatbots that answer from your data",
  "desc": "Customer and employee chatbots on web, WhatsApp and Slack that answer from your documents, with hand-off to a person when needed.",
  "offers": [
   {
    "t": "Customer support bots",
    "b": "Answers from your help centre and policies."
   },
   {
    "t": "WhatsApp chatbots",
    "b": "Orders, bookings and support on WhatsApp."
   },
   {
    "t": "Internal assistants",
    "b": "HR, IT and policy questions answered."
   },
   {
    "t": "Knowledge search",
    "b": "Answers with sources shown."
   },
   {
    "t": "Human hand-off",
    "b": "Escalation to an agent with full context."
   },
   {
    "t": "Analytics",
    "b": "What people ask and where the bot fails."
   }
  ],
  "tech": [
   "OpenAI",
   "Claude",
   "LangChain",
   "WhatsApp API",
   "Pinecone",
   "Python"
  ],
  "client": {
   "key": "hotdoc",
   "name": "HotDoc",
   "sector": "Healthcare",
   "line": "Appointment booking and patient engagement across a national clinic network.",
   "imgs": [
    "/img/cs/hotdoc/hotdoc1.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Will it make things up?",
    "a": "We ground answers in your content, show sources and test against real questions before launch."
   },
   {
    "q": "Which channels does it work on?",
    "a": "Web, mobile apps, WhatsApp, Slack and Microsoft Teams."
   }
  ],
  "hero": "/img/cs/hotdoc/hotdoc1.png"
 },
 {
  "slug": "computer-vision",
  "name": "Computer vision",
  "cat": "ai-data",
  "tagline": "Cameras that understand what they see",
  "desc": "Detection, recognition and inspection models for retail, manufacturing, healthcare and logistics, in the cloud or on the edge.",
  "offers": [
   {
    "t": "Object detection",
    "b": "Products, people and vehicles found in images."
   },
   {
    "t": "Quality inspection",
    "b": "Defects caught on the production line."
   },
   {
    "t": "OCR & document capture",
    "b": "Text pulled from forms and invoices."
   },
   {
    "t": "Video analytics",
    "b": "Footfall, safety and queue monitoring."
   },
   {
    "t": "Edge deployment",
    "b": "Models running on cameras and devices."
   },
   {
    "t": "Model monitoring",
    "b": "Accuracy tracked in production."
   }
  ],
  "tech": [
   "PyTorch",
   "OpenCV",
   "YOLO",
   "TensorRT",
   "AWS Rekognition",
   "NVIDIA Jetson"
  ],
  "client": {
   "key": "voly",
   "name": "Voly",
   "sector": "Quick commerce",
   "line": "Ordering, inventory and fulfilment operations for rapid grocery delivery.",
   "imgs": [
    "/img/cs/volygroup/volygroup2.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How much data do we need?",
    "a": "Often a few thousand labelled images to start. We help collect and label them."
   },
   {
    "q": "Can it run without the internet?",
    "a": "Yes. Models can run on edge devices on site."
   }
  ],
  "hero": "/img/cs/volygroup/volygroup2.png"
 },
 {
  "slug": "nlp-development",
  "name": "NLP development",
  "cat": "ai-data",
  "tagline": "Language understood at scale",
  "desc": "Text classification, extraction, summarisation and translation for documents, tickets, reviews and conversations.",
  "offers": [
   {
    "t": "Document extraction",
    "b": "Fields pulled from contracts and forms."
   },
   {
    "t": "Text classification",
    "b": "Tickets and emails routed automatically."
   },
   {
    "t": "Sentiment analysis",
    "b": "Reviews and feedback scored."
   },
   {
    "t": "Summarisation",
    "b": "Long documents reduced to what matters."
   },
   {
    "t": "Translation",
    "b": "Content localised for Indian and global languages."
   },
   {
    "t": "Speech to text",
    "b": "Calls transcribed and analysed."
   }
  ],
  "tech": [
   "Python",
   "Hugging Face",
   "spaCy",
   "OpenAI",
   "Whisper",
   "Elasticsearch"
  ],
  "client": {
   "key": "learnosity",
   "name": "Learnosity",
   "sector": "Assessment platform",
   "line": "Assessment infrastructure embedded by the products that integrate it.",
   "imgs": [
    "/img/cs/learnosity/learnosity2.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you support Indian languages?",
    "a": "Yes, including Hindi and other major Indian languages."
   },
   {
    "q": "Can it run on our own servers?",
    "a": "Yes. Open-source models can run privately on your infrastructure."
   }
  ],
  "hero": "/img/cs/learnosity/learnosity2.png"
 },
 {
  "slug": "rpa-and-process-automation",
  "name": "RPA & process automation",
  "cat": "ai-data",
  "tagline": "Repetitive work, done by software",
  "desc": "Bots and workflows that take copy-paste work off your team, from invoice entry to report generation.",
  "offers": [
   {
    "t": "Process discovery",
    "b": "Which tasks are worth automating first."
   },
   {
    "t": "RPA bots",
    "b": "UiPath and Power Automate bots built and tested."
   },
   {
    "t": "Document automation",
    "b": "Invoices and forms read and entered."
   },
   {
    "t": "Workflow automation",
    "b": "Approvals and hand-offs automated."
   },
   {
    "t": "AI + RPA",
    "b": "Bots that handle unstructured inputs."
   },
   {
    "t": "Bot support",
    "b": "Monitoring and fixes when systems change."
   }
  ],
  "tech": [
   "UiPath",
   "Power Automate",
   "Zapier",
   "n8n",
   "Python",
   "OpenAI"
  ],
  "client": {
   "key": "soldo",
   "name": "Soldo",
   "sector": "Spend management",
   "line": "Company cards, budgets and expense reporting for finance teams.",
   "imgs": [
    "/img/cs/soldo/soldo.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Which processes can be automated?",
    "a": "Rule-based, repetitive tasks across systems are the best start."
   },
   {
    "q": "What happens when a system changes?",
    "a": "We monitor bots and update them under a support plan."
   }
  ],
  "hero": "/img/cs/soldo/soldo.png"
 },
 {
  "slug": "data-science",
  "name": "Data science",
  "cat": "ai-data",
  "tagline": "Answers hidden in your data",
  "desc": "Statistical analysis, experiments and models that explain what drives revenue, churn and cost.",
  "offers": [
   {
    "t": "Exploratory analysis",
    "b": "What the data actually says."
   },
   {
    "t": "Churn & retention models",
    "b": "Who is likely to leave and why."
   },
   {
    "t": "Pricing analysis",
    "b": "Price points tested with data."
   },
   {
    "t": "A/B testing",
    "b": "Experiments designed and read correctly."
   },
   {
    "t": "Forecasting",
    "b": "Demand and revenue projected."
   },
   {
    "t": "Insight reports",
    "b": "Findings leadership can act on."
   }
  ],
  "tech": [
   "Python",
   "Pandas",
   "scikit-learn",
   "Jupyter",
   "BigQuery",
   "Tableau"
  ],
  "client": {
   "key": "stockgro",
   "name": "StockGro",
   "sector": "Investing",
   "line": "Portfolios, market data and the social layer around investing.",
   "imgs": [
    "/img/cs/stockgro/stockgro1.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Do we need a data warehouse first?",
    "a": "Not always. We can start from exports and recommend a warehouse if needed."
   },
   {
    "q": "Will we get the code?",
    "a": "Yes. Notebooks and models are handed over with documentation."
   }
  ],
  "hero": "/img/cs/stockgro/stockgro1.png"
 },
 {
  "slug": "mlops-and-llmops",
  "name": "MLOps & LLMOps",
  "cat": "ai-data",
  "tagline": "Models that stay good in production",
  "desc": "Pipelines to train, deploy, monitor and retrain models, so machine learning keeps working after the demo.",
  "offers": [
   {
    "t": "Training pipelines",
    "b": "Repeatable model training."
   },
   {
    "t": "Model deployment",
    "b": "APIs and batch jobs in production."
   },
   {
    "t": "Monitoring & drift",
    "b": "Accuracy watched over time."
   },
   {
    "t": "Feature stores",
    "b": "Shared features for every model."
   },
   {
    "t": "LLMOps",
    "b": "Prompt versioning, evaluation and cost tracking."
   },
   {
    "t": "GPU cost control",
    "b": "Compute sized to the workload."
   }
  ],
  "tech": [
   "MLflow",
   "Kubeflow",
   "SageMaker",
   "Vertex AI",
   "Docker",
   "Kubernetes"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "We already have models. Can you deploy them?",
    "a": "Yes. We wrap, test and deploy existing models."
   },
   {
    "q": "Do you cover LLM applications?",
    "a": "Yes, including evaluation, guardrails and cost monitoring."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "smart-contract-development",
  "name": "Smart contract development",
  "cat": "emerging-tech",
  "tagline": "Contracts that execute exactly as written",
  "desc": "Solidity and Rust smart contracts for tokens, escrow, staking and governance, tested and audit-ready before mainnet.",
  "offers": [
   {
    "t": "Token contracts",
    "b": "ERC-20, ERC-721 and ERC-1155."
   },
   {
    "t": "Escrow & payments",
    "b": "Funds released on agreed conditions."
   },
   {
    "t": "Staking & rewards",
    "b": "Yield and reward logic."
   },
   {
    "t": "DAO governance",
    "b": "Voting and treasury contracts."
   },
   {
    "t": "Testing",
    "b": "Unit, fuzz and fork tests."
   },
   {
    "t": "Audit preparation",
    "b": "Code ready for external auditors."
   }
  ],
  "tech": [
   "Solidity",
   "Rust",
   "Hardhat",
   "Foundry",
   "OpenZeppelin",
   "Ethereum"
  ],
  "client": {
   "key": "skydo",
   "name": "Skydo",
   "sector": "Fintech",
   "line": "Cross-border payments for exporters, built around a ledger that reconciles to the cent.",
   "imgs": [
    "/img/cs/skydo/Skydo1.png",
    "/img/cs/skydo/Skydo2.png",
    "/img/cs/skydo/Skydo3.png",
    "/img/cs/skydo/Skydo4.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you audit contracts?",
    "a": "We test thoroughly and prepare for an external audit, which we always recommend before mainnet."
   },
   {
    "q": "Which chains do you support?",
    "a": "Ethereum, Polygon, BNB Chain, Arbitrum, Base and Solana."
   }
  ],
  "hero": "/img/cs/skydo/Skydo1.png"
 },
 {
  "slug": "defi-development",
  "name": "DeFi development",
  "cat": "emerging-tech",
  "tagline": "Financial products without the middleman",
  "desc": "Lending, staking, swaps and yield products on public blockchains, with the dashboards and security they need.",
  "offers": [
   {
    "t": "DEX & swaps",
    "b": "Token exchange with liquidity pools."
   },
   {
    "t": "Lending protocols",
    "b": "Collateral, interest and liquidation logic."
   },
   {
    "t": "Staking platforms",
    "b": "Stake, earn and withdraw."
   },
   {
    "t": "Yield aggregators",
    "b": "Strategies across protocols."
   },
   {
    "t": "DeFi dashboards",
    "b": "Positions and returns in one view."
   },
   {
    "t": "Security reviews",
    "b": "Economic and code risks tested."
   }
  ],
  "tech": [
   "Solidity",
   "Foundry",
   "The Graph",
   "Ethers.js",
   "React",
   "Chainlink"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "10–20 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How do you handle security?",
    "a": "Thorough testing, external audits and staged launches with limits."
   },
   {
    "q": "Can you fork an existing protocol?",
    "a": "Yes, with the changes, testing and licence checks that requires."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "nft-marketplace-development",
  "name": "NFT marketplace development",
  "cat": "emerging-tech",
  "tagline": "Digital ownership, bought and sold",
  "desc": "NFT marketplaces for art, gaming, tickets and loyalty, with minting, auctions, royalties and wallet login.",
  "offers": [
   {
    "t": "Minting",
    "b": "Single and batch minting flows."
   },
   {
    "t": "Auctions & listings",
    "b": "Fixed price, auctions and offers."
   },
   {
    "t": "Royalties",
    "b": "Creator payouts on resale."
   },
   {
    "t": "Wallet login",
    "b": "MetaMask, WalletConnect and email wallets."
   },
   {
    "t": "Admin panel",
    "b": "Moderation, fees and reporting."
   },
   {
    "t": "Lazy minting",
    "b": "Lower costs for creators."
   }
  ],
  "tech": [
   "Solidity",
   "IPFS",
   "Next.js",
   "Node.js",
   "Polygon",
   "Alchemy"
  ],
  "client": {
   "key": "onbuy",
   "name": "OnBuy",
   "sector": "Marketplace",
   "line": "Multi-seller listings, checkout, payouts and dispute handling.",
   "imgs": [
    "/img/cs/onbuy/onbuy1.png"
   ]
  },
  "time": "8–14 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Can users pay by card?",
    "a": "Yes, through fiat on-ramp partners."
   },
   {
    "q": "Which blockchain should we use?",
    "a": "We compare fees, speed and audience, and often recommend Polygon or Base."
   }
  ],
  "hero": "/img/cs/onbuy/onbuy1.png"
 },
 {
  "slug": "crypto-wallet-development",
  "name": "Crypto wallet development",
  "cat": "emerging-tech",
  "tagline": "Keys kept safe, transfers kept simple",
  "desc": "Custodial and non-custodial wallets for mobile and web, with multi-chain support, swaps and strong key security.",
  "offers": [
   {
    "t": "Non-custodial wallets",
    "b": "Users hold their own keys."
   },
   {
    "t": "Custodial wallets",
    "b": "Managed keys with compliance controls."
   },
   {
    "t": "Multi-chain support",
    "b": "Bitcoin, Ethereum and EVM chains."
   },
   {
    "t": "In-app swaps",
    "b": "Token exchange built in."
   },
   {
    "t": "Key security",
    "b": "Biometrics, MPC and secure enclaves."
   },
   {
    "t": "Transaction history",
    "b": "Clear records and exports."
   }
  ],
  "tech": [
   "Swift",
   "Kotlin",
   "React Native",
   "Web3.js",
   "MPC",
   "Node.js"
  ],
  "client": {
   "key": "fampay",
   "name": "Fampay",
   "sector": "Youth payments",
   "line": "Payments and cards for a young audience, with parental controls built in.",
   "imgs": [
    "/img/cs/famapp/famapp4.png"
   ]
  },
  "time": "10–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How are keys protected?",
    "a": "Secure enclaves, biometrics and optional MPC, so no single device holds the full key."
   },
   {
    "q": "Can you add KYC?",
    "a": "Yes, through KYC partners for custodial products."
   }
  ],
  "hero": "/img/cs/famapp/famapp4.png"
 },
 {
  "slug": "web3-and-dapp-development",
  "name": "Web3 & dApp development",
  "cat": "emerging-tech",
  "tagline": "Apps that connect to the chain",
  "desc": "dApps, token-gated communities and on-chain loyalty, with interfaces as simple as a normal app.",
  "offers": [
   {
    "t": "dApp development",
    "b": "Web and mobile apps on the blockchain."
   },
   {
    "t": "Token gating",
    "b": "Access tied to wallet holdings."
   },
   {
    "t": "On-chain loyalty",
    "b": "Points and rewards as tokens."
   },
   {
    "t": "Wallet integration",
    "b": "Connect, sign and pay."
   },
   {
    "t": "Indexing",
    "b": "On-chain data made searchable."
   },
   {
    "t": "Gasless UX",
    "b": "Fees sponsored so users never see them."
   }
  ],
  "tech": [
   "Ethers.js",
   "wagmi",
   "The Graph",
   "Next.js",
   "Solidity",
   "Base"
  ],
  "client": {
   "key": "graphy",
   "name": "Graphy",
   "sector": "Creator edtech",
   "line": "Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.",
   "imgs": [
    "/img/cs/graphy/graphy1.png",
    "/img/cs/graphy/graphy2.png",
    "/img/cs/graphy/graphy3.png",
    "/img/cs/graphy/graphy4.png"
   ]
  },
  "time": "8–16 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do users need crypto to use it?",
    "a": "No. Gasless transactions and email wallets hide the complexity."
   },
   {
    "q": "Is Web3 right for our business?",
    "a": "We will tell you honestly. Often a normal database is the better choice."
   }
  ],
  "hero": "/img/cs/graphy/graphy1.png"
 },
 {
  "slug": "metaverse-and-3d-experiences",
  "name": "Metaverse & 3D experiences",
  "cat": "emerging-tech",
  "tagline": "Spaces people can visit online",
  "desc": "Virtual showrooms, events and training spaces in the browser and on headsets, with avatars and real-time interaction.",
  "offers": [
   {
    "t": "Virtual showrooms",
    "b": "Products explored in 3D."
   },
   {
    "t": "Virtual events",
    "b": "Launches and conferences online."
   },
   {
    "t": "Training spaces",
    "b": "Practice in a simulated environment."
   },
   {
    "t": "Avatars",
    "b": "Custom avatars and identity."
   },
   {
    "t": "Multiplayer",
    "b": "Real-time presence and voice."
   },
   {
    "t": "Web 3D",
    "b": "No download, runs in the browser."
   }
  ],
  "tech": [
   "Unity",
   "Unreal Engine",
   "Three.js",
   "WebXR",
   "Photon",
   "Ready Player Me"
  ],
  "client": {
   "key": "jaypore",
   "name": "Jaypore",
   "sector": "Lifestyle e-commerce",
   "line": "A craft-led lifestyle storefront with editorial merchandising and operations behind it.",
   "imgs": [
    "/img/cs/jaypore/jaypore1.png"
   ]
  },
  "time": "10–20 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Does it need a VR headset?",
    "a": "No. Most experiences run in a normal browser and work on headsets too."
   },
   {
    "q": "Can you reuse our 3D files?",
    "a": "Yes, from CAD, product renders or existing models."
   }
  ],
  "hero": "/img/cs/jaypore/jaypore1.png"
 },
 {
  "slug": "wearable-app-development",
  "name": "Wearable app development",
  "cat": "emerging-tech",
  "tagline": "Apps on the wrist",
  "desc": "Apps for Apple Watch, Wear OS and fitness devices, synced with your mobile app and health platforms.",
  "offers": [
   {
    "t": "Apple Watch apps",
    "b": "watchOS apps and complications."
   },
   {
    "t": "Wear OS apps",
    "b": "Android smartwatch apps."
   },
   {
    "t": "Health integrations",
    "b": "Apple Health and Google Fit."
   },
   {
    "t": "Fitness tracking",
    "b": "Workouts, steps and heart rate."
   },
   {
    "t": "Device sync",
    "b": "Bluetooth links to bands and sensors."
   },
   {
    "t": "Notifications",
    "b": "Glanceable alerts that matter."
   }
  ],
  "tech": [
   "Swift",
   "watchOS",
   "Kotlin",
   "Wear OS",
   "HealthKit",
   "BLE"
  ],
  "client": {
   "key": "ekacare",
   "name": "Eka Care",
   "sector": "Healthcare",
   "line": "Patient records and telemedicine at national scale.",
   "imgs": [
    "/img/cs/eka.care/eka.care2.png"
   ]
  },
  "time": "8–14 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do we need a phone app too?",
    "a": "Usually yes. Most wearables pair with a phone app for setup and sync."
   },
   {
    "q": "Can you connect our custom device?",
    "a": "Yes, over Bluetooth Low Energy, working with your hardware team."
   }
  ],
  "hero": "/img/cs/eka.care/eka.care2.png"
 },
 {
  "slug": "game-development",
  "name": "Game development",
  "cat": "emerging-tech",
  "tagline": "Games people come back to",
  "desc": "Mobile, web and casual games, plus gamified features for existing apps, built in Unity and HTML5.",
  "offers": [
   {
    "t": "Mobile games",
    "b": "iOS and Android in Unity."
   },
   {
    "t": "Web & HTML5 games",
    "b": "Play instantly in the browser."
   },
   {
    "t": "Gamification",
    "b": "Points, streaks and rewards in your app."
   },
   {
    "t": "Multiplayer",
    "b": "Real-time play and leaderboards."
   },
   {
    "t": "Game backend",
    "b": "Accounts, economy and live ops."
   },
   {
    "t": "Monetisation",
    "b": "Ads and in-app purchases."
   }
  ],
  "tech": [
   "Unity",
   "C#",
   "Phaser",
   "PlayFab",
   "Firebase",
   "Photon"
  ],
  "client": {
   "key": "seneca",
   "name": "Seneca Learning",
   "sector": "Edtech",
   "line": "Course content, practice and the mechanics that bring learners back.",
   "imgs": [
    "/img/cs/senecalearning/senecalearning1.png"
   ]
  },
  "time": "10–24 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you do art and design?",
    "a": "Yes, with 2D and 3D artists alongside our engineers."
   },
   {
    "q": "Can you add games to our existing app?",
    "a": "Yes. Gamification modules fit into most apps."
   }
  ],
  "hero": "/img/cs/senecalearning/senecalearning1.png"
 },
 {
  "slug": "hrms-development",
  "name": "HRMS development",
  "cat": "business-software",
  "tagline": "People, payroll and attendance in one place",
  "desc": "Custom HR systems covering hiring, attendance, payroll, leave and performance, built around your policies.",
  "offers": [
   {
    "t": "Employee records",
    "b": "One profile for every employee."
   },
   {
    "t": "Attendance & leave",
    "b": "Biometric, GPS and shift support."
   },
   {
    "t": "Payroll",
    "b": "Salary, PF, ESI and TDS calculated."
   },
   {
    "t": "Recruitment",
    "b": "Jobs, applicants and interviews."
   },
   {
    "t": "Performance",
    "b": "Goals, reviews and feedback."
   },
   {
    "t": "Employee app",
    "b": "Payslips and requests on mobile."
   }
  ],
  "tech": [
   "React",
   "Node.js",
   "PostgreSQL",
   "Flutter",
   "AWS",
   "Power BI"
  ],
  "client": {
   "key": "zeller",
   "name": "Zeller",
   "sector": "Business payments",
   "line": "Business payments on app and web, from merchant onboarding to settlement reporting.",
   "imgs": [
    "/img/cs/myzelller/myzeller5.png"
   ]
  },
  "time": "10–20 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Does it handle Indian payroll rules?",
    "a": "Yes, including PF, ESI, PT and TDS."
   },
   {
    "q": "Can it connect to our biometric devices?",
    "a": "Yes, most attendance devices can be integrated."
   }
  ],
  "hero": "/img/cs/myzelller/myzeller5.png"
 },
 {
  "slug": "lms-development",
  "name": "LMS development",
  "cat": "business-software",
  "tagline": "Learning platforms people finish",
  "desc": "Learning management systems for schools, coaching institutes and corporate training, with courses, tests and certificates.",
  "offers": [
   {
    "t": "Course builder",
    "b": "Video, text and quizzes."
   },
   {
    "t": "Live classes",
    "b": "Zoom and in-app live sessions."
   },
   {
    "t": "Assessments",
    "b": "Tests, grading and analytics."
   },
   {
    "t": "Certificates",
    "b": "Issued automatically on completion."
   },
   {
    "t": "Corporate training",
    "b": "Assign, track and report."
   },
   {
    "t": "Mobile learning",
    "b": "Offline video on phones."
   }
  ],
  "tech": [
   "React",
   "Node.js",
   "Flutter",
   "PostgreSQL",
   "AWS",
   "SCORM"
  ],
  "client": {
   "key": "graphy",
   "name": "Graphy",
   "sector": "Creator edtech",
   "line": "Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.",
   "imgs": [
    "/img/cs/graphy/graphy1.png",
    "/img/cs/graphy/graphy2.png",
    "/img/cs/graphy/graphy3.png",
    "/img/cs/graphy/graphy4.png"
   ]
  },
  "time": "10–20 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you support SCORM?",
    "a": "Yes, SCORM and xAPI content can be imported."
   },
   {
    "q": "Can learners pay for courses?",
    "a": "Yes, with payments, coupons and subscriptions."
   }
  ],
  "hero": "/img/cs/graphy/graphy1.png"
 },
 {
  "slug": "cms-development-company",
  "name": "CMS development",
  "cat": "business-software",
  "tagline": "Content your team can publish alone",
  "desc": "Headless and traditional CMS builds that let editors publish across website, app and email without waiting on developers.",
  "offers": [
   {
    "t": "Headless CMS",
    "b": "Content served to web and apps."
   },
   {
    "t": "Editorial workflow",
    "b": "Drafts, review and scheduling."
   },
   {
    "t": "Multi-site",
    "b": "Many brands from one CMS."
   },
   {
    "t": "Media management",
    "b": "Images and video organised."
   },
   {
    "t": "Personalisation",
    "b": "Content tailored by audience."
   },
   {
    "t": "Migrations",
    "b": "Old CMS content moved safely."
   }
  ],
  "tech": [
   "Sanity",
   "Strapi",
   "Contentful",
   "WordPress",
   "Next.js",
   "Algolia"
  ],
  "client": {
   "key": "seneca",
   "name": "Seneca Learning",
   "sector": "Edtech",
   "line": "Course content, practice and the mechanics that bring learners back.",
   "imgs": [
    "/img/cs/senecalearning/senecalearning1.png"
   ]
  },
  "time": "6–12 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Headless or WordPress?",
    "a": "Headless for apps and many channels, WordPress for simpler marketing sites."
   },
   {
    "q": "Can you move our old content?",
    "a": "Yes, with redirects so search rankings are kept."
   }
  ],
  "hero": "/img/cs/senecalearning/senecalearning1.png"
 },
 {
  "slug": "salesforce-development",
  "name": "Salesforce development",
  "cat": "business-software",
  "tagline": "Salesforce that fits how you sell",
  "desc": "Salesforce setup, customisation and integration across Sales, Service and Marketing Cloud.",
  "offers": [
   {
    "t": "Implementation",
    "b": "Salesforce set up around your process."
   },
   {
    "t": "Custom development",
    "b": "Apex, Lightning and flows."
   },
   {
    "t": "Integrations",
    "b": "ERP, website and telephony connected."
   },
   {
    "t": "Data migration",
    "b": "Records moved from old CRMs."
   },
   {
    "t": "Marketing Cloud",
    "b": "Journeys and email automation."
   },
   {
    "t": "Admin support",
    "b": "Monthly changes and user support."
   }
  ],
  "tech": [
   "Salesforce",
   "Apex",
   "Lightning",
   "MuleSoft",
   "Marketing Cloud",
   "Tableau"
  ],
  "client": {
   "key": "kogan",
   "name": "Kogan",
   "sector": "Marketplace",
   "line": "A marketplace with a large third-party seller base and the seller tooling behind it.",
   "imgs": [
    "/img/cs/kogan/kogan2.png"
   ]
  },
  "time": "6–16 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Salesforce or a custom CRM?",
    "a": "We compare both honestly. A custom CRM often costs less for focused needs."
   },
   {
    "q": "Can you fix an existing setup?",
    "a": "Yes, starting with an org health check."
   }
  ],
  "hero": "/img/cs/kogan/kogan2.png"
 },
 {
  "slug": "microsoft-dynamics-365",
  "name": "Microsoft Dynamics 365",
  "cat": "business-software",
  "tagline": "Dynamics 365, set up and connected",
  "desc": "Implementation and customisation of Dynamics 365 Business Central, Sales and Customer Service, with Power Platform apps around it.",
  "offers": [
   {
    "t": "Business Central",
    "b": "Finance and operations for growing firms."
   },
   {
    "t": "Dynamics 365 Sales",
    "b": "Pipelines inside the Microsoft stack."
   },
   {
    "t": "Power Apps",
    "b": "Internal apps built fast."
   },
   {
    "t": "Power BI",
    "b": "Dashboards on Dynamics data."
   },
   {
    "t": "Integrations",
    "b": "Connected to your other systems."
   },
   {
    "t": "Support",
    "b": "Updates, training and changes."
   }
  ],
  "tech": [
   "Dynamics 365",
   "Power Apps",
   "Power BI",
   "Power Automate",
   "Azure",
   "C#"
  ],
  "client": {
   "key": "lunar",
   "name": "Lunar",
   "sector": "Digital banking",
   "line": "Accounts, payments and servicing customers expect without a branch.",
   "imgs": [
    "/img/cs/lunar/luner1.png"
   ]
  },
  "time": "8–20 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Can you migrate us from Tally or Excel?",
    "a": "Yes, with opening balances and history moved."
   },
   {
    "q": "Do you provide training?",
    "a": "Yes, role-based training for every team that uses it."
   }
  ],
  "hero": "/img/cs/lunar/luner1.png"
 },
 {
  "slug": "shopify-development-company",
  "name": "Shopify development",
  "cat": "business-software",
  "tagline": "Shopify stores built to convert",
  "desc": "Custom Shopify and Shopify Plus themes, apps and integrations for brands that have outgrown templates.",
  "offers": [
   {
    "t": "Custom themes",
    "b": "Brand-led storefronts."
   },
   {
    "t": "Shopify Plus",
    "b": "Checkout and scripts for scale."
   },
   {
    "t": "Custom apps",
    "b": "Features the app store does not have."
   },
   {
    "t": "Headless Shopify",
    "b": "Hydrogen and Next.js storefronts."
   },
   {
    "t": "Integrations",
    "b": "ERP, logistics and marketing tools."
   },
   {
    "t": "Migrations",
    "b": "From WooCommerce or Magento."
   }
  ],
  "tech": [
   "Shopify",
   "Liquid",
   "Hydrogen",
   "Next.js",
   "GraphQL",
   "Klaviyo"
  ],
  "client": {
   "key": "snitch",
   "name": "Snitch",
   "sector": "Fashion e-commerce",
   "line": "Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.",
   "imgs": [
    "/img/cs/snitch/snitch1.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Theme or headless?",
    "a": "A custom theme suits most brands. Headless suits very custom experiences."
   },
   {
    "q": "Can you move us from WooCommerce?",
    "a": "Yes, including products, customers and order history."
   }
  ],
  "hero": "/img/cs/snitch/snitch1.png"
 },
 {
  "slug": "wordpress-development-company",
  "name": "WordPress development",
  "cat": "business-software",
  "tagline": "WordPress, done properly",
  "desc": "Fast, secure WordPress and WooCommerce sites with custom themes and plugins, without page-builder bloat.",
  "offers": [
   {
    "t": "Custom themes",
    "b": "Built from your design."
   },
   {
    "t": "WooCommerce",
    "b": "Stores with payments and shipping."
   },
   {
    "t": "Custom plugins",
    "b": "Features built for your site."
   },
   {
    "t": "Speed optimisation",
    "b": "Core Web Vitals fixed."
   },
   {
    "t": "Security hardening",
    "b": "Updates, firewall and backups."
   },
   {
    "t": "Maintenance",
    "b": "Monthly care plans."
   }
  ],
  "tech": [
   "WordPress",
   "PHP",
   "WooCommerce",
   "ACF",
   "Gutenberg",
   "Cloudflare"
  ],
  "client": {
   "key": "jaypore",
   "name": "Jaypore",
   "sector": "Lifestyle e-commerce",
   "line": "A craft-led lifestyle storefront with editorial merchandising and operations behind it.",
   "imgs": [
    "/img/cs/jaypore/jaypore1.png"
   ]
  },
  "time": "3–8 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Do you use page builders?",
    "a": "Only if you ask. Custom blocks are faster and easier to maintain."
   },
   {
    "q": "Can you speed up our current site?",
    "a": "Yes. We audit it and fix the biggest causes first."
   }
  ],
  "hero": "/img/cs/jaypore/jaypore1.png"
 },
 {
  "slug": "cloud-consulting",
  "name": "Cloud consulting",
  "cat": "digital-transformation",
  "tagline": "The right cloud, the right size",
  "desc": "AWS, Azure and Google Cloud strategy, architecture and cost reviews from certified engineers.",
  "offers": [
   {
    "t": "Cloud strategy",
    "b": "Which cloud, which services, and why."
   },
   {
    "t": "Architecture review",
    "b": "Reliability and security checked."
   },
   {
    "t": "Cost optimisation",
    "b": "Bills cut without cutting reliability."
   },
   {
    "t": "Multi-cloud",
    "b": "Workloads split where it helps."
   },
   {
    "t": "Landing zones",
    "b": "Accounts, networks and guardrails set up."
   },
   {
    "t": "Well-Architected reviews",
    "b": "Formal reviews against best practice."
   }
  ],
  "tech": [
   "AWS",
   "Azure",
   "Google Cloud",
   "Terraform",
   "Kubernetes",
   "CloudHealth"
  ],
  "client": {
   "key": "airwallex",
   "name": "Airwallex",
   "sector": "Fintech",
   "line": "Global business accounts and FX. Interfaces and services for money moving across borders.",
   "imgs": [
    "/img/cs/airwallex/AirWallex4.png",
    "/img/cs/airwallex/AirWallex1.png",
    "/img/cs/airwallex/AirWallex2.png",
    "/img/cs/airwallex/AirWallex3.png"
   ]
  },
  "time": "2–6 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "How much can we save?",
    "a": "Most reviews find savings in idle resources and oversized instances. We share numbers after the review."
   },
   {
    "q": "Are you tied to one cloud?",
    "a": "No. We work across AWS, Azure and Google Cloud."
   }
  ],
  "hero": "/img/cs/airwallex/AirWallex4.png"
 },
 {
  "slug": "kubernetes-and-containers",
  "name": "Kubernetes & containers",
  "cat": "digital-transformation",
  "tagline": "Containers that run themselves",
  "desc": "Docker and Kubernetes setup, migration and management on EKS, AKS and GKE, deployed through GitOps.",
  "offers": [
   {
    "t": "Containerisation",
    "b": "Apps packaged with Docker."
   },
   {
    "t": "Cluster setup",
    "b": "EKS, AKS and GKE built right."
   },
   {
    "t": "Helm & GitOps",
    "b": "Deployments from code."
   },
   {
    "t": "Autoscaling",
    "b": "Capacity that follows traffic."
   },
   {
    "t": "Service mesh",
    "b": "Traffic and security between services."
   },
   {
    "t": "Cluster support",
    "b": "Upgrades and monitoring."
   }
  ],
  "tech": [
   "Kubernetes",
   "Docker",
   "Helm",
   "Argo CD",
   "Istio",
   "Prometheus"
  ],
  "client": {
   "key": "milkrun",
   "name": "MILKRUN",
   "sector": "Quick commerce",
   "line": "Grocery delivery with rider dispatch and live tracking, engineered for sub-ten-minute promises.",
   "imgs": [
    "/img/cs/milkrun/milkrun1.png",
    "/img/cs/milkrun/milkrun2.png",
    "/img/cs/milkrun/milkrun3.png",
    "/img/cs/milkrun/milkrun4.png"
   ]
  },
  "time": "4–10 weeks",
  "model": "Fixed or monthly",
  "faq": [
   {
    "q": "Do we need Kubernetes?",
    "a": "Not always. Smaller apps often run better on simpler platforms, and we will say so."
   },
   {
    "q": "Can you manage our clusters?",
    "a": "Yes, under a monthly managed plan."
   }
  ],
  "hero": "/img/cs/milkrun/milkrun1.png"
 },
 {
  "slug": "penetration-testing",
  "name": "Penetration testing",
  "cat": "digital-transformation",
  "tagline": "Find the holes before attackers do",
  "desc": "Web, mobile, API and cloud penetration tests with a clear report and help fixing what we find.",
  "offers": [
   {
    "t": "Web app testing",
    "b": "OWASP Top 10 and beyond."
   },
   {
    "t": "Mobile app testing",
    "b": "iOS and Android security reviewed."
   },
   {
    "t": "API testing",
    "b": "Authentication and data exposure checked."
   },
   {
    "t": "Cloud security review",
    "b": "Misconfigurations found."
   },
   {
    "t": "Retesting",
    "b": "Fixes verified."
   },
   {
    "t": "Compliance support",
    "b": "Evidence for ISO 27001 and SOC 2."
   }
  ],
  "tech": [
   "Burp Suite",
   "OWASP ZAP",
   "Nmap",
   "MobSF",
   "Metasploit",
   "Prowler"
  ],
  "client": {
   "key": "lunar",
   "name": "Lunar",
   "sector": "Digital banking",
   "line": "Accounts, payments and servicing customers expect without a branch.",
   "imgs": [
    "/img/cs/lunar/luner1.png"
   ]
  },
  "time": "1–4 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Will testing break our live system?",
    "a": "We agree scope and timing, and test staging where possible."
   },
   {
    "q": "What do we receive?",
    "a": "A detailed report, a retest after fixes and a summary letter for customers and auditors."
   }
  ],
  "hero": "/img/cs/lunar/luner1.png"
 },
 {
  "slug": "data-migration",
  "name": "Data migration",
  "cat": "digital-transformation",
  "tagline": "Move data without losing any",
  "desc": "Data moved between databases, CRMs, ERPs and clouds, with validation and rollback plans.",
  "offers": [
   {
    "t": "Migration planning",
    "b": "Mapping and cleanup rules."
   },
   {
    "t": "Database migration",
    "b": "Oracle, SQL Server, MySQL and PostgreSQL."
   },
   {
    "t": "CRM & ERP migration",
    "b": "Records, history and attachments."
   },
   {
    "t": "Validation",
    "b": "Counts and checksums verified."
   },
   {
    "t": "Zero-downtime cutover",
    "b": "Sync until switch-over."
   },
   {
    "t": "Rollback plans",
    "b": "A tested way back."
   }
  ],
  "tech": [
   "AWS DMS",
   "Azure Data Factory",
   "PostgreSQL",
   "Python",
   "dbt",
   "Airflow"
  ],
  "client": {
   "key": "fynd",
   "name": "Fynd",
   "sector": "Commerce technology",
   "line": "Online ordering connected to retail operations through one inventory service.",
   "imgs": [
    "/img/cs/fynd/fynd1.png"
   ]
  },
  "time": "2–8 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Will there be downtime?",
    "a": "Usually minutes or none, using continuous sync before cutover."
   },
   {
    "q": "How do we know nothing was lost?",
    "a": "Every table is validated with counts and checksums."
   }
  ],
  "hero": "/img/cs/fynd/fynd1.png"
 },
 {
  "slug": "ai-consulting",
  "name": "AI consulting",
  "cat": "consulting",
  "tagline": "Where AI will pay off, and where it will not",
  "desc": "Use cases ranked by value and feasibility, a data readiness check and a plan for pilots that can reach production.",
  "offers": [
   {
    "t": "AI opportunity map",
    "b": "Use cases ranked by value."
   },
   {
    "t": "Data readiness",
    "b": "What data you have and what is missing."
   },
   {
    "t": "Build vs buy",
    "b": "Tools compared honestly."
   },
   {
    "t": "Pilot design",
    "b": "A proof with clear success measures."
   },
   {
    "t": "Governance",
    "b": "Privacy, risk and usage policies."
   },
   {
    "t": "Team enablement",
    "b": "Training for your people."
   }
  ],
  "tech": [
   "OpenAI",
   "Claude",
   "Azure AI",
   "AWS Bedrock",
   "Python",
   "LangChain"
  ],
  "client": {
   "key": "learnosity",
   "name": "Learnosity",
   "sector": "Assessment platform",
   "line": "Assessment infrastructure embedded by the products that integrate it.",
   "imgs": [
    "/img/cs/learnosity/learnosity2.png"
   ]
  },
  "time": "2–6 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "We do not know where to start. Can you help?",
    "a": "Yes. A two-week assessment usually produces a ranked list of use cases."
   },
   {
    "q": "Will you push us to build custom AI?",
    "a": "No. Often an existing tool is the right answer."
   }
  ],
  "hero": "/img/cs/learnosity/learnosity2.png"
 },
 {
  "slug": "digital-transformation-consulting",
  "name": "Digital transformation consulting",
  "cat": "consulting",
  "tagline": "Change that sticks",
  "desc": "A plan to move processes, systems and teams to digital, sequenced so value arrives early.",
  "offers": [
   {
    "t": "Current-state review",
    "b": "Processes and systems mapped."
   },
   {
    "t": "Opportunity sizing",
    "b": "Where digital saves or earns most."
   },
   {
    "t": "Target operating model",
    "b": "How teams and tools will work."
   },
   {
    "t": "Roadmap",
    "b": "Sequenced projects with budgets."
   },
   {
    "t": "Change management",
    "b": "Training and adoption plans."
   },
   {
    "t": "Delivery oversight",
    "b": "Help running the programme."
   }
  ],
  "tech": [
   "Miro",
   "Power BI",
   "Jira",
   "Confluence",
   "Azure",
   "AWS"
  ],
  "client": {
   "key": "fynd",
   "name": "Fynd",
   "sector": "Commerce technology",
   "line": "Online ordering connected to retail operations through one inventory service.",
   "imgs": [
    "/img/cs/fynd/fynd1.png"
   ]
  },
  "time": "3–8 weeks",
  "model": "Fixed scope",
  "faq": [
   {
    "q": "Is this only for large companies?",
    "a": "No. Growing businesses often benefit most."
   },
   {
    "q": "Can you deliver the plan too?",
    "a": "Yes. Our engineering team can build what the roadmap recommends."
   }
  ],
  "hero": "/img/cs/fynd/fynd1.png"
 },
 {
  "slug": "offshore-development-centre",
  "name": "Offshore development centre",
  "cat": "teams-managed",
  "tagline": "Your own team in India",
  "desc": "A dedicated development centre staffed from our in-house team, with your processes, your tools and room to scale.",
  "offers": [
   {
    "t": "Team setup",
    "b": "Roles hired and onboarded for you."
   },
   {
    "t": "Dedicated workspace",
    "b": "A secure, separate team space."
   },
   {
    "t": "Your processes",
    "b": "Your tools, rituals and standards."
   },
   {
    "t": "Delivery management",
    "b": "A Mariox lead accountable for output."
   },
   {
    "t": "Scale on demand",
    "b": "Grow from 5 to 50 people."
   },
   {
    "t": "Build-operate-transfer",
    "b": "Option to take the team in-house."
   }
  ],
  "tech": [
   "Your stack",
   "Jira",
   "Slack",
   "GitHub",
   "Azure DevOps"
  ],
  "client": {
   "key": "kogan",
   "name": "Kogan",
   "sector": "Marketplace",
   "line": "A marketplace with a large third-party seller base and the seller tooling behind it.",
   "imgs": [
    "/img/cs/kogan/kogan2.png"
   ]
  },
  "time": "Start in 3–6 weeks",
  "model": "Monthly",
  "faq": [
   {
    "q": "How is this different from a dedicated team?",
    "a": "An ODC is larger and longer-term, often with its own space and a transfer option."
   },
   {
    "q": "Can we visit the team?",
    "a": "Yes. Clients visit our Noida and Bangalore offices."
   }
  ],
  "hero": "/img/cs/kogan/kogan2.png"
 }
];

export const bySlug = services.reduce((m, s) => { m[s.slug] = s; return m; }, {});
export const byCat = (id) => services.filter((s) => s.cat === id);
