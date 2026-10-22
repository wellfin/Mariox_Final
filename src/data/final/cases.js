// 42 case studies (cases-data.js)
// Converted from the design's data file in /final-website; image paths point at
// /public instead of the live site.
export const cases = [
 {
  "slug": "starstell",
  "name": "Starstell",
  "sector": "Consumer web & app",
  "scope": "App + web",
  "key": "web",
  "img": "/img/starstell-thumb.webp",
  "gallery": [
   "/img/starstell-thumb.webp"
  ],
  "body": "A consumer-facing app and website sharing one content and account layer, so a change lands in both without a second build.",
  "proposition": "A consumer product is judged in the first thirty seconds, on a phone, on a bad connection.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "The first version usually contains three products. Deciding which one ships is most of the value."
   },
   {
    "label": "The product",
    "body": "A consumer-facing app and website sharing one content and account layer, so a change lands in both without a second build."
   },
   {
    "label": "The build",
    "body": "Performance and accessibility budgets are set at the start and enforced in CI, because both are cheap to hold and expensive to retrofit."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Content ownership",
    "body": "If routine changes need a developer, the site stops being updated within a quarter."
   },
   {
    "title": "Performance",
    "body": "Consumer patience is measured in hundreds of milliseconds on a mid-range phone."
   },
   {
    "title": "Handover",
    "body": "Whoever maintains it next inherits these decisions and should be able to live with them."
   }
  ],
  "system": "One API serves app and web, with content modelled so non-technical staff can change it without a release.",
  "stack": [
   "Next.js",
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Cloudflare",
   "AWS"
  ]
 },
 {
  "slug": "magicfinserv",
  "name": "Magicfinserv",
  "sector": "Fintech platform",
  "scope": "E-commerce platform",
  "key": "fintech",
  "img": "/img/magicfinserv-thumb.webp",
  "gallery": [
   "/img/magicfinserv-thumb.webp"
  ],
  "body": "A commerce and platform build for a financial technology business, spanning the customer-facing storefront and the administration behind it.",
  "proposition": "Financial platforms carry the risk; the interface only carries the blame.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong."
   },
   {
    "label": "The product",
    "body": "A commerce and platform build for a financial technology business, spanning the customer-facing storefront and the administration behind it."
   },
   {
    "label": "The build",
    "body": "Double-entry from the first commit, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Transactional paths are idempotent and separately monitored from the content layer, so a marketing change cannot affect money movement.",
  "stack": [
   "TypeScript",
   "Node.js",
   "React",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "vimal-wires-and-cable",
  "name": "Vimal Wires & Cable",
  "sector": "Manufacturing",
  "scope": "ERP system",
  "key": "erp",
  "img": "/img/vimal-cables-thumb.webp",
  "gallery": [
   "/img/vimal-cables-thumb.webp"
  ],
  "body": "An ERP covering production, inventory, procurement and operational reporting for a wires and cable manufacturer.",
  "proposition": "The system that runs a factory cannot be switched off to be improved.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "The system being replaced is load-bearing, undocumented and cannot stop."
   },
   {
    "label": "The product",
    "body": "An ERP covering production, inventory, procurement and operational reporting for a wires and cable manufacturer."
   },
   {
    "label": "The build",
    "body": "The current process is mapped before the new one is proposed, old and new run in parallel where possible, and cutover is rehearsed until it is boring."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Integration surface",
    "body": "Several systems, several vendors, and no single owner of the data model."
   },
   {
    "title": "Change resistance",
    "body": "Adoption fails on process and training long before it fails on software."
   },
   {
    "title": "Migration risk",
    "body": "Cutover is the moment everything is exposed. It has to be rehearsed and reversible."
   }
  ],
  "system": "Modules read from one stock and order model rather than keeping their own copies, so the shop floor and the back office cannot disagree.",
  "stack": [
   ".NET",
   "Java",
   "React",
   "PostgreSQL",
   "Azure",
   "Kafka",
   "Power BI"
  ]
 },
 {
  "slug": "skydo",
  "name": "Skydo",
  "sector": "Fintech",
  "scope": "App + web + admin",
  "key": "fintech",
  "img": "/img/cs/skydo/Skydo1.png",
  "gallery": [
   "/img/cs/skydo/Skydo1.png",
   "/img/cs/skydo/Skydo2.png",
   "/img/cs/skydo/Skydo3.png",
   "/img/cs/skydo/Skydo4.png"
  ],
  "body": "Cross-border payments for exporters. App, web and admin built around a ledger that has to reconcile to the cent.",
  "proposition": "Money crossing a border is a reconciliation problem wearing a product’s clothes.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Cross-border payments touch multiple providers, currencies and regulators before settling. Every hop can fail, retry or partially succeed, and the customer sees one number that has to be correct regardless."
   },
   {
    "label": "The product",
    "body": "A payments platform across mobile, web and an internal admin console, covering onboarding and compliance checks, quoting, transfer initiation and settlement tracking."
   },
   {
    "label": "The build",
    "body": "Double-entry accounting from the first commit, idempotency on every money-moving endpoint, and a reconciliation job running independently of anyone watching a dashboard."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and architecture documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "The ledger is the source of truth and everything else reads from it. Provider integrations sit behind a normalisation layer so a rail changing its API is a contained change, and failure paths were designed before the successful ones.",
  "stack": [
   "React",
   "Node.js",
   "TypeScript",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "famapp",
  "name": "Fampay",
  "sector": "Fintech",
  "scope": "App + web + admin",
  "key": "fintech",
  "img": "/img/cs/famapp/famapp4.png",
  "gallery": [
   "/img/cs/famapp/famapp4.png",
   "/img/cs/famapp/famapp1.png",
   "/img/cs/famapp/famapp2.png",
   "/img/cs/famapp/famapp3.png"
  ],
  "body": "A fintech product across app, web and an internal admin console, covering onboarding, spending and the controls behind it.",
  "proposition": "Building for younger users means the compliance work is harder, not easier.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong."
   },
   {
    "label": "The product",
    "body": "A fintech product across app, web and an internal admin console, covering onboarding, spending and the controls behind it."
   },
   {
    "label": "The build",
    "body": "Double-entry from the first commit, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Card and ledger events are append-only, so a balance can always be reconstructed from what actually happened.",
  "stack": [
   "TypeScript",
   "Node.js",
   "React",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "stockgro",
  "name": "StockGro",
  "sector": "Fintech",
  "scope": "App + web",
  "key": "fintech",
  "img": "/img/cs/stockgro/stockgro1.png",
  "gallery": [
   "/img/cs/stockgro/stockgro1.png",
   "/img/cs/stockgro/stockgro2.png",
   "/img/cs/stockgro/stockgro3.png"
  ],
  "body": "An investing platform on app and web, covering portfolios, market data and the social layer around them.",
  "proposition": "Market data is unforgiving: late is the same as wrong.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong."
   },
   {
    "label": "The product",
    "body": "An investing platform on app and web, covering portfolios, market data and the social layer around them."
   },
   {
    "label": "The build",
    "body": "Double-entry from the first commit, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Price and portfolio reads are cached with explicit staleness and separated from order paths, so a data spike cannot delay a trade.",
  "stack": [
   "TypeScript",
   "Node.js",
   "React",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "myzeller",
  "name": "Zeller",
  "sector": "Fintech",
  "scope": "App + web",
  "key": "fintech",
  "img": "/img/cs/myzelller/myzeller5.png",
  "gallery": [
   "/img/cs/myzelller/myzeller5.png",
   "/img/cs/myzelller/myzeller1.png",
   "/img/cs/myzelller/myzeller2.png",
   "/img/cs/myzelller/myzeller3.png"
  ],
  "body": "A fintech product on app and web for business payments, spanning merchant onboarding, transactions and reporting.",
  "proposition": "Payments hardware and software fail differently, and both reach the same merchant.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong."
   },
   {
    "label": "The product",
    "body": "A fintech product on app and web for business payments, spanning merchant onboarding, transactions and reporting."
   },
   {
    "label": "The build",
    "body": "Double-entry from the first commit, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Settlement and reporting derive from one transaction record, so what a merchant sees matches what was banked.",
  "stack": [
   "TypeScript",
   "Node.js",
   "React",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "airwallex",
  "name": "Airwallex",
  "sector": "Fintech",
  "scope": "App + web",
  "key": "fintech",
  "img": "/img/cs/airwallex/AirWallex4.png",
  "gallery": [
   "/img/cs/airwallex/AirWallex4.png",
   "/img/cs/airwallex/AirWallex1.png",
   "/img/cs/airwallex/AirWallex2.png",
   "/img/cs/airwallex/AirWallex3.png"
  ],
  "body": "Global business accounts and FX. Interfaces and services for money moving across borders.",
  "proposition": "Business accounts across currencies mean the boring parts carry all the risk.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Multi-currency business accounts combine FX, compliance and settlement across jurisdictions, each with its own rules. An outage here is a regulatory event rather than an inconvenience."
   },
   {
    "label": "The product",
    "body": "Account interfaces and the services behind them: balances, transfers, FX quoting and the operational tooling that supports them."
   },
   {
    "label": "The build",
    "body": "Idempotent money-moving endpoints, audit trails written on the same transaction as the change, and failure modes specified alongside the happy path."
   },
   {
    "label": "Standards",
    "body": "Regulators ask what happened to a specific account on a specific date. The system is built so that answer takes minutes."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Every balance is derived from an append-only record rather than stored and mutated, so history can be reconstructed at any point. Provider dependencies degrade without losing money.",
  "stack": [
   "TypeScript",
   "Java / Spring",
   "React",
   "PostgreSQL",
   "Kafka",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "soldo",
  "name": "Soldo",
  "sector": "Fintech",
  "scope": "App + web",
  "key": "fintech",
  "img": "/img/cs/soldo/soldo.png",
  "gallery": [
   "/img/cs/soldo/soldo.png"
  ],
  "body": "A spend management product on app and web, covering cards, budgets, approvals and expense reporting.",
  "proposition": "Spend controls are only useful if they hold at the moment of purchase.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong."
   },
   {
    "label": "The product",
    "body": "A spend management product on app and web, covering cards, budgets, approvals and expense reporting."
   },
   {
    "label": "The build",
    "body": "Double-entry from the first commit, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Authorisation rules are evaluated server-side at transaction time rather than enforced in the interface, so no client can bypass them.",
  "stack": [
   "TypeScript",
   "Node.js",
   "React",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "yonder",
  "name": "Yonder",
  "sector": "Fintech",
  "scope": "App + web",
  "key": "fintech",
  "img": "/img/cs/yonder/yonder2.png",
  "gallery": [
   "/img/cs/yonder/yonder2.png",
   "/img/cs/yonder/yonder1.png",
   "/img/cs/yonder/yonder3.png",
   "/img/cs/yonder/yonder4.png"
  ],
  "body": "A card and rewards product across app and web, covering onboarding, spending and the rewards mechanics behind it.",
  "proposition": "A rewards product is a ledger problem wearing a lifestyle brand.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong."
   },
   {
    "label": "The product",
    "body": "A card and rewards product across app and web, covering onboarding, spending and the rewards mechanics behind it."
   },
   {
    "label": "The build",
    "body": "Double-entry from the first commit, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Onboarding compliance",
    "body": "KYC and AML checks have to satisfy regulation without becoming the reason users abandon signup."
   },
   {
    "title": "Provider dependency",
    "body": "Payment rails fail in ways you do not control. The system has to degrade without losing money."
   },
   {
    "title": "Audit expectations",
    "body": "Regulators ask what happened on a specific date to a specific account. The answer has to take minutes."
   }
  ],
  "system": "Rewards accrual is computed from immutable transaction events, so a retroactive rule change can be replayed rather than patched.",
  "stack": [
   "TypeScript",
   "Node.js",
   "React",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "lunar",
  "name": "Lunar",
  "sector": "Digital banking",
  "scope": "App + web",
  "key": "banking",
  "img": "/img/cs/lunar/luner1.png",
  "gallery": [
   "/img/cs/lunar/luner1.png",
   "/img/cs/lunar/luner2.png",
   "/img/cs/lunar/luner3.png"
  ],
  "body": "A digital banking product on app and web, covering accounts, payments and the servicing customers expect without a branch.",
  "proposition": "Digital banking has no branch to absorb a bad release.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every balance has to be reconstructable from the events behind it, not stored and mutated in place."
   },
   {
    "label": "The product",
    "body": "A digital banking product on app and web, covering accounts, payments and the servicing customers expect without a branch."
   },
   {
    "label": "The build",
    "body": "Append-only records behind every balance, provider failover designed before the happy path, and audit trails written on the same transaction as the change."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Regulatory reporting",
    "body": "Returns and disclosures have fixed formats and deadlines that do not move."
   },
   {
    "title": "Scheme rules",
    "body": "Card and payment scheme requirements constrain flows before any product decision is made."
   },
   {
    "title": "Uptime expectation",
    "body": "There is no branch to fall back on, so an outage is the whole service being unavailable."
   }
  ],
  "system": "Every balance is derived from an append-only record, and provider dependencies degrade without losing money.",
  "stack": [
   "Java / Spring",
   "TypeScript",
   "React",
   "PostgreSQL",
   "Kafka",
   "AWS",
   "Terraform"
  ]
 },
 {
  "slug": "graphy",
  "name": "Graphy",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/graphy/graphy1.png",
  "gallery": [
   "/img/cs/graphy/graphy1.png",
   "/img/cs/graphy/graphy2.png",
   "/img/cs/graphy/graphy3.png",
   "/img/cs/graphy/graphy4.png"
  ],
  "body": "Course delivery, live cohorts and creator payouts inside one platform, on web and mobile.",
  "proposition": "Completion is the only metric that matters, and structure decides it before content does.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. A live cohort session with thousands of concurrent participants is an infrastructure problem rather than a video problem, and creators need to be paid accurately."
   },
   {
    "label": "The product",
    "body": "Course authoring and delivery, scheduled live cohorts with attendance and recordings, progress tracking, and creator pricing and payouts."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion was instrumented first, then designed against the drop-off points that showed up in the data."
   },
   {
    "label": "Capacity",
    "body": "Live infrastructure was load tested at the number the client hoped for rather than the number they had."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "Live sessions and course delivery are separate services so a spike in one cannot degrade the other. Payout calculations are derived from immutable event records rather than mutable balances.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "edtechhub",
  "name": "EdTech Hub",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/edtechhub/edtechhub2.png",
  "gallery": [
   "/img/cs/edtechhub/edtechhub2.png",
   "/img/cs/edtechhub/edtechhub1.png",
   "/img/cs/edtechhub/edtechhub3.png"
  ],
  "body": "An education platform on app and web, covering content publishing, discovery and the workflow behind it.",
  "proposition": "Research only changes practice if the platform makes it findable.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "An education platform on app and web, covering content publishing, discovery and the workflow behind it."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "Content and taxonomy are modelled separately from presentation, so the same material can be surfaced through several routes.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "testbook",
  "name": "Testbook",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/testbook/testbook1.png",
  "gallery": [
   "/img/cs/testbook/testbook1.png",
   "/img/cs/testbook/testbook2.png",
   "/img/cs/testbook/testbook3.png"
  ],
  "body": "A test preparation platform on app and web, covering question banks, timed assessment, marking and analytics.",
  "proposition": "Assessment at cohort scale is an infrastructure problem, not a quiz feature.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "A test preparation platform on app and web, covering question banks, timed assessment, marking and analytics."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "Assessment delivery is isolated from content browsing so an exam window cannot be affected by general traffic.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "teachmint",
  "name": "Teachmint",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/teachmint/teachmint.png",
  "gallery": [
   "/img/cs/teachmint/teachmint.png"
  ],
  "body": "A classroom and school management platform on app and web, serving teachers, students, parents and administrators.",
  "proposition": "School software has four audiences who all think they are the primary one.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "A classroom and school management platform on app and web, serving teachers, students, parents and administrators."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "One data model with role-scoped views, rather than four products sharing a database.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "sunstone",
  "name": "Sunstone",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/sunstone/sunstone1.png",
  "gallery": [
   "/img/cs/sunstone/sunstone1.png",
   "/img/cs/sunstone/sunstone2.png",
   "/img/cs/sunstone/sunstone3.png",
   "/img/cs/sunstone/sunstone4.png"
  ],
  "body": "An education platform on app and web, covering enrolment, learning delivery and student records.",
  "proposition": "Enrolment and outcomes are the same funnel viewed from different ends.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "An education platform on app and web, covering enrolment, learning delivery and student records."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "The enrolment funnel is instrumented end to end so drop-off is visible where it happens, not inferred at the end.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "learnosity",
  "name": "Learnosity",
  "sector": "Edtech",
  "scope": "Web",
  "key": "edtech",
  "img": "/img/cs/learnosity/learnosity2.png",
  "gallery": [
   "/img/cs/learnosity/learnosity2.png",
   "/img/cs/learnosity/learnosity1.png",
   "/img/cs/learnosity/learnosity3.png",
   "/img/cs/learnosity/learnosity4.png"
  ],
  "body": "A web platform for assessment delivery, built to be embedded and extended by the teams integrating it.",
  "proposition": "Assessment infrastructure is judged by the products built on top of it.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "A web platform for assessment delivery, built to be embedded and extended by the teams integrating it."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "A documented API surface with versioning, because breaking a consumer is worse than shipping late.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "clueylearning",
  "name": "Cluey Learning",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/clueylearning/clueylearning1.png",
  "gallery": [
   "/img/cs/clueylearning/clueylearning1.png",
   "/img/cs/clueylearning/clueylearning2.png",
   "/img/cs/clueylearning/clueylearning3.png"
  ],
  "body": "A tutoring platform on app and web, covering session scheduling, delivery, progress and parent visibility.",
  "proposition": "Live tutoring at scale is a scheduling problem before it is a teaching one.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "A tutoring platform on app and web, covering session scheduling, delivery, progress and parent visibility."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "Scheduling and live session infrastructure are separate services, so a booking spike cannot degrade a lesson in progress.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "senecalearning",
  "name": "Seneca Learning",
  "sector": "Edtech",
  "scope": "App + web",
  "key": "edtech",
  "img": "/img/cs/senecalearning/senecalearning1.png",
  "gallery": [
   "/img/cs/senecalearning/senecalearning1.png",
   "/img/cs/senecalearning/senecalearning2.png",
   "/img/cs/senecalearning/senecalearning3.png",
   "/img/cs/senecalearning/senecalearning4.png"
  ],
  "body": "A learning platform on app and web, covering course content, practice, progress and the mechanics that bring learners back.",
  "proposition": "Revision products win on habit mechanics, not content volume.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Most learners stop early. Structure, pacing and reminders move the number more than features do."
   },
   {
    "label": "The product",
    "body": "A learning platform on app and web, covering course content, practice, progress and the mechanics that bring learners back."
   },
   {
    "label": "The build",
    "body": "The funnel from enrolment to completion is instrumented first, then designed against the drop-off points the data actually shows."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Live at scale",
    "body": "A session with thousands of concurrent learners is an infrastructure problem, not a video problem."
   },
   {
    "title": "Assessment integrity",
    "body": "Marking has to be fast, consistent and hard to game across large cohorts."
   },
   {
    "title": "Many stakeholders",
    "body": "Students, teachers, parents and administrators each need a different view of the same data."
   }
  ],
  "system": "Progress is stored per learner as an event stream, which makes streaks, spaced repetition and analytics the same data.",
  "stack": [
   "React",
   "Node.js",
   "React Native",
   "PostgreSQL",
   "Redis",
   "WebRTC",
   "GCP"
  ]
 },
 {
  "slug": "snitch",
  "name": "Snitch",
  "sector": "E-commerce",
  "scope": "App + web + admin",
  "key": "ecommerce",
  "img": "/img/cs/snitch/snitch1.png",
  "gallery": [
   "/img/cs/snitch/snitch1.png"
  ],
  "body": "Fashion commerce that survives a drop. Storefront, ordering and operations tuned for peak traffic.",
  "proposition": "Most of the year is easy. The engineering exists for the twenty minutes that are not.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "A fashion drop concentrates a month of traffic into a short window. Overselling becomes a support problem that scales faster than revenue, and every extra checkout field costs conversion."
   },
   {
    "label": "The product",
    "body": "Storefront, catalogue, cart and checkout with the order management and operations tooling that handles returns, refunds and exceptions behind it."
   },
   {
    "label": "The build",
    "body": "Load tested well above expected peak, with caching strategy treated as part of the product rather than an optimisation applied afterwards."
   },
   {
    "label": "Focus",
    "body": "Checkout received the most engineering attention, on the basis that it is the only screen that converts."
   }
  ],
  "constraints": [
   {
    "title": "Inventory truth",
    "body": "Overselling is a support problem that scales faster than revenue does."
   },
   {
    "title": "Checkout friction",
    "body": "Every additional field costs conversion, and payment coverage has to be broad and fast."
   },
   {
    "title": "Post-purchase",
    "body": "Returns, refunds and exceptions are most of the operational cost and none of the demo."
   }
  ],
  "system": "Inventory is a single source of truth and every surface reads from it, so the storefront cannot promise stock the warehouse does not hold. Read paths are cached aggressively with explicit staleness rather than hopeful expiry.",
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Elasticsearch",
   "Cloudflare",
   "Kubernetes"
  ]
 },
 {
  "slug": "fynd",
  "name": "Fynd",
  "sector": "Commerce technology",
  "scope": "App + web + admin",
  "key": "ecommerce",
  "img": "/img/cs/fynd/fynd1.png",
  "gallery": [
   "/img/cs/fynd/fynd1.png",
   "/img/cs/fynd/fynd2.png",
   "/img/cs/fynd/fynd3.png",
   "/img/cs/fynd/fynd4.png"
  ],
  "body": "A commerce technology build across app, web and admin, connecting online ordering with retail operations.",
  "proposition": "Commerce technology has to work for the store as well as the storefront.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "A drop or sale concentrates a month of load into twenty minutes. Caching strategy is the product."
   },
   {
    "label": "The product",
    "body": "A commerce technology build across app, web and admin, connecting online ordering with retail operations."
   },
   {
    "label": "The build",
    "body": "Load tested well above expected peak, with inventory as a single source of truth and checkout given the most engineering attention because it converts."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Inventory truth",
    "body": "Overselling is a support problem that scales faster than revenue does."
   },
   {
    "title": "Checkout friction",
    "body": "Every additional field costs conversion, and payment coverage has to be broad and fast."
   },
   {
    "title": "Post-purchase",
    "body": "Returns, refunds and exceptions are most of the operational cost and none of the demo."
   }
  ],
  "system": "One inventory service is read by every channel, with reservations rather than optimistic promises.",
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Elasticsearch",
   "Cloudflare",
   "Kubernetes"
  ]
 },
 {
  "slug": "jaypore",
  "name": "Jaypore",
  "sector": "Lifestyle e-commerce",
  "scope": "App + web + admin",
  "key": "ecommerce",
  "img": "/img/cs/jaypore/jaypore1.png",
  "gallery": [
   "/img/cs/jaypore/jaypore1.png"
  ],
  "body": "A lifestyle commerce build across app, web and admin, covering catalogue, checkout and merchandising.",
  "proposition": "Lifestyle commerce sells on imagery, which is exactly what slows a page down.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "A drop or sale concentrates a month of load into twenty minutes. Caching strategy is the product."
   },
   {
    "label": "The product",
    "body": "A lifestyle commerce build across app, web and admin, covering catalogue, checkout and merchandising."
   },
   {
    "label": "The build",
    "body": "Load tested well above expected peak, with inventory as a single source of truth and checkout given the most engineering attention because it converts."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Inventory truth",
    "body": "Overselling is a support problem that scales faster than revenue does."
   },
   {
    "title": "Checkout friction",
    "body": "Every additional field costs conversion, and payment coverage has to be broad and fast."
   },
   {
    "title": "Post-purchase",
    "body": "Returns, refunds and exceptions are most of the operational cost and none of the demo."
   }
  ],
  "system": "Media is processed into responsive derivatives at upload, so editorial ambition does not become a performance cost.",
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Elasticsearch",
   "Cloudflare",
   "Kubernetes"
  ]
 },
 {
  "slug": "kogan",
  "name": "Kogan",
  "sector": "E-commerce marketplace",
  "scope": "Marketplace + web + admin",
  "key": "marketplace",
  "img": "/img/cs/kogan/kogan2.png",
  "gallery": [
   "/img/cs/kogan/kogan2.png",
   "/img/cs/kogan/kogan1.png",
   "/img/cs/kogan/kogan3.png",
   "/img/cs/kogan/kogan4.png"
  ],
  "body": "A marketplace build across web and admin with a large third-party seller base, covering listings, orders and seller tooling.",
  "proposition": "A marketplace lives or dies on the seller side, and nobody demos that.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Marketplaces live or die on how well the seller side works, and nobody demos that."
   },
   {
    "label": "The product",
    "body": "A marketplace build across web and admin with a large third-party seller base, covering listings, orders and seller tooling."
   },
   {
    "label": "The build",
    "body": "Seller tooling is built as a first-class product, and catalogue ingestion dedupes and validates before anything reaches search."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Catalogue quality",
    "body": "Third-party listings arrive duplicated, mis-categorised and inconsistently described."
   },
   {
    "title": "Trust and disputes",
    "body": "Ratings, verification and dispute handling are core mechanics rather than admin features."
   },
   {
    "title": "Payout accuracy",
    "body": "Commission, refunds and settlement have to be correct and explainable at volume."
   }
  ],
  "system": "Seller operations get first-class tooling, and catalogue ingestion dedupes and validates before anything reaches search.",
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Elasticsearch",
   "Redis",
   "Kafka",
   "AWS"
  ]
 },
 {
  "slug": "onbuy",
  "name": "OnBuy",
  "sector": "E-commerce marketplace",
  "scope": "Marketplace + web + admin",
  "key": "marketplace",
  "img": "/img/cs/onbuy/onbuy1.png",
  "gallery": [
   "/img/cs/onbuy/onbuy1.png",
   "/img/cs/onbuy/onbuy2.png",
   "/img/cs/onbuy/onbuy3.png"
  ],
  "body": "A marketplace build across web and admin, covering multi-seller listings, checkout, payouts and dispute handling.",
  "proposition": "Two-sided platforms fail on trust mechanics long before they fail on traffic.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Marketplaces live or die on how well the seller side works, and nobody demos that."
   },
   {
    "label": "The product",
    "body": "A marketplace build across web and admin, covering multi-seller listings, checkout, payouts and dispute handling."
   },
   {
    "label": "The build",
    "body": "Seller tooling is built as a first-class product, and catalogue ingestion dedupes and validates before anything reaches search."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Catalogue quality",
    "body": "Third-party listings arrive duplicated, mis-categorised and inconsistently described."
   },
   {
    "title": "Trust and disputes",
    "body": "Ratings, verification and dispute handling are core mechanics rather than admin features."
   },
   {
    "title": "Payout accuracy",
    "body": "Commission, refunds and settlement have to be correct and explainable at volume."
   }
  ],
  "system": "Payouts and disputes are modelled as first-class flows with audit trails, not support exceptions.",
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Elasticsearch",
   "Redis",
   "Kafka",
   "AWS"
  ]
 },
 {
  "slug": "onceit",
  "name": "Onceit",
  "sector": "E-commerce",
  "scope": "App + web + admin",
  "key": "ecommerce",
  "img": "/img/cs/onceit/onceit2.png",
  "gallery": [
   "/img/cs/onceit/onceit2.png",
   "/img/cs/onceit/onceit1.png",
   "/img/cs/onceit/onceit3.png",
   "/img/cs/onceit/onceit4.png"
  ],
  "body": "A commerce build across app, web and admin for time-limited sales, covering inventory holds, checkout and fulfilment.",
  "proposition": "A timed sale concentrates a month of traffic into an hour.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "A drop or sale concentrates a month of load into twenty minutes. Caching strategy is the product."
   },
   {
    "label": "The product",
    "body": "A commerce build across app, web and admin for time-limited sales, covering inventory holds, checkout and fulfilment."
   },
   {
    "label": "The build",
    "body": "Load tested well above expected peak, with inventory as a single source of truth and checkout given the most engineering attention because it converts."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Inventory truth",
    "body": "Overselling is a support problem that scales faster than revenue does."
   },
   {
    "title": "Checkout friction",
    "body": "Every additional field costs conversion, and payment coverage has to be broad and fast."
   },
   {
    "title": "Post-purchase",
    "body": "Returns, refunds and exceptions are most of the operational cost and none of the demo."
   }
  ],
  "system": "Inventory holds are atomic and short-lived, and the sale path is load-tested well above the expected peak.",
  "stack": [
   "Next.js",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Elasticsearch",
   "Cloudflare",
   "Kubernetes"
  ]
 },
 {
  "slug": "zypit",
  "name": "Zupit",
  "sector": "Quick commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/zypit/zypit2.png",
  "gallery": [
   "/img/cs/zypit/zypit2.png",
   "/img/cs/zypit/zypit1.png",
   "/img/cs/zypit/zypit3.png",
   "/img/cs/zypit/zypit4.png"
  ],
  "body": "A quick commerce build across app, web and admin, covering ordering, dispatch and store operations.",
  "proposition": "Fast delivery is a promise the software has to be able to keep.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Stock accuracy per store decides whether the delivery promise is deliverable or a cancellation."
   },
   {
    "label": "The product",
    "body": "A quick commerce build across app, web and admin, covering ordering, dispatch and store operations."
   },
   {
    "label": "The build",
    "body": "Dispatch is built as its own service with replay tooling, and rider apps are engineered for low-end handsets and intermittent connectivity from the start."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Store-level stock is the source of truth, and the product refuses to show a slot the system cannot back.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "thegrocart",
  "name": "Grokart",
  "sector": "Grocery, quick commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/thegrocart/thegrocart1.png",
  "gallery": [
   "/img/cs/thegrocart/thegrocart1.png",
   "/img/cs/thegrocart/thegrocart2.png",
   "/img/cs/thegrocart/thegrocart3.png",
   "/img/cs/thegrocart/thegrocart4.png"
  ],
  "body": "A grocery commerce build across app, web and admin, covering catalogue, ordering, picking and fulfilment.",
  "proposition": "Grocery has the widest catalogue and the least tolerance for a substitution.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Stock accuracy per store decides whether the delivery promise is deliverable or a cancellation."
   },
   {
    "label": "The product",
    "body": "A grocery commerce build across app, web and admin, covering catalogue, ordering, picking and fulfilment."
   },
   {
    "label": "The build",
    "body": "Dispatch is built as its own service with replay tooling, and rider apps are engineered for low-end handsets and intermittent connectivity from the start."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Availability is computed per store rather than centrally, because a national stock figure is meaningless to a shopper.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "milkrun",
  "name": "MILKRUN",
  "sector": "Grocery, quick commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/milkrun/milkrun1.png",
  "gallery": [
   "/img/cs/milkrun/milkrun1.png",
   "/img/cs/milkrun/milkrun2.png",
   "/img/cs/milkrun/milkrun3.png",
   "/img/cs/milkrun/milkrun4.png"
  ],
  "body": "Grocery delivery with rider dispatch and live tracking, engineered for sub-ten-minute promises.",
  "proposition": "The promise on the homepage is an engineering commitment, not a marketing one.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "A short delivery window requires store-level inventory accuracy, forecast rider supply and dispatch decisions made in seconds, all holding at once. Any one of them failing cancels the order."
   },
   {
    "label": "The product",
    "body": "Customer ordering and live tracking, a rider app with assignment and proof of delivery, dark store picking tools, and operations dashboards per store."
   },
   {
    "label": "The build",
    "body": "Dispatch was built as its own service with replay tooling, so any assignment decision can be audited after the fact rather than argued about."
   },
   {
    "label": "Conditions",
    "body": "Rider apps were engineered for low-end handsets and intermittent connectivity from the start, not adapted to them later."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Store-level inventory is the source of truth and the product refuses to display a delivery slot the system cannot back. Location data passes through smoothing before it reaches a customer-facing map.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "volygroup",
  "name": "Voly",
  "sector": "Quick commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/volygroup/volygroup2.png",
  "gallery": [
   "/img/cs/volygroup/volygroup2.png",
   "/img/cs/volygroup/volygroup1.png",
   "/img/cs/volygroup/volygroup3.png",
   "/img/cs/volygroup/volygroup4.png"
  ],
  "body": "A quick commerce build across app, web and admin, covering customer ordering, rider dispatch and operations.",
  "proposition": "Quick commerce margins are decided in minutes and metres.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Stock accuracy per store decides whether the delivery promise is deliverable or a cancellation."
   },
   {
    "label": "The product",
    "body": "A quick commerce build across app, web and admin, covering customer ordering, rider dispatch and operations."
   },
   {
    "label": "The build",
    "body": "Dispatch is built as its own service with replay tooling, and rider apps are engineered for low-end handsets and intermittent connectivity from the start."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Dispatch is its own service with replay tooling, so any assignment decision can be audited after the fact.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "weezy",
  "name": "Weezy",
  "sector": "Quick commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/weezy/weezy2.png",
  "gallery": [
   "/img/cs/weezy/weezy2.png",
   "/img/cs/weezy/weezy1.png",
   "/img/cs/weezy/weezy3.png",
   "/img/cs/weezy/weezy4.png"
  ],
  "body": "A quick commerce build across app, web and admin, covering ordering, rider assignment and live tracking.",
  "proposition": "Rider supply, not demand, is the constraint that breaks the promise.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Stock accuracy per store decides whether the delivery promise is deliverable or a cancellation."
   },
   {
    "label": "The product",
    "body": "A quick commerce build across app, web and admin, covering ordering, rider assignment and live tracking."
   },
   {
    "label": "The build",
    "body": "Dispatch is built as its own service with replay tooling, and rider apps are engineered for low-end handsets and intermittent connectivity from the start."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Rider apps are engineered for low-end devices and intermittent connectivity, with local buffering throughout.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "zapp",
  "name": "Zapp",
  "sector": "Quick commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/zapp/zaap2.png",
  "gallery": [
   "/img/cs/zapp/zaap2.png",
   "/img/cs/zapp/zaap1.png",
   "/img/cs/zapp/zaap3.png",
   "/img/cs/zapp/zaap4.png"
  ],
  "body": "A quick commerce build across app, web and admin, covering ordering, rider dispatch and live tracking at metropolitan scale.",
  "proposition": "On-demand delivery in a dense city is a dispatch problem with a storefront.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Stock accuracy per store decides whether the delivery promise is deliverable or a cancellation."
   },
   {
    "label": "The product",
    "body": "A quick commerce build across app, web and admin, covering ordering, rider dispatch and live tracking at metropolitan scale."
   },
   {
    "label": "The build",
    "body": "Dispatch is built as its own service with replay tooling, and rider apps are engineered for low-end handsets and intermittent connectivity from the start."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Assignment batches orders by proximity and time cost, and every decision is replayable for later audit.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "oda",
  "name": "Oda",
  "sector": "Grocery e-commerce",
  "scope": "App + web + admin",
  "key": "qcommerce",
  "img": "/img/cs/oda/oda2.png",
  "gallery": [
   "/img/cs/oda/oda2.png",
   "/img/cs/oda/oda1.png",
   "/img/cs/oda/oda3.png",
   "/img/cs/oda/oda4.png"
  ],
  "body": "A grocery commerce build across app, web and admin, covering large baskets, scheduled delivery and fulfilment.",
  "proposition": "Grocery at basket scale is a logistics product with a storefront attached.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Stock accuracy per store decides whether the delivery promise is deliverable or a cancellation."
   },
   {
    "label": "The product",
    "body": "A grocery commerce build across app, web and admin, covering large baskets, scheduled delivery and fulfilment."
   },
   {
    "label": "The build",
    "body": "Dispatch is built as its own service with replay tooling, and rider apps are engineered for low-end handsets and intermittent connectivity from the start."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Rider supply",
    "body": "Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to."
   },
   {
    "title": "Slot honesty",
    "body": "Showing a delivery window you cannot meet costs more than showing a longer one."
   },
   {
    "title": "Unit economics",
    "body": "Every extra minute and every failed drop is measurable margin."
   }
  ],
  "system": "Order composition and fulfilment are separate domains, so warehouse constraints shape delivery slots directly.",
  "stack": [
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "Kafka",
   "Kubernetes",
   "Maps APIs"
  ]
 },
 {
  "slug": "ekacare",
  "name": "Eka Care",
  "sector": "Healthcare",
  "scope": "App + web",
  "key": "healthcare",
  "img": "/img/cs/eka.care/eka.care2.png",
  "gallery": [
   "/img/cs/eka.care/eka.care2.png",
   "/img/cs/eka.care/eka.care1.png",
   "/img/cs/eka.care/eka.care3.png",
   "/img/cs/eka.care/eka.care4.png"
  ],
  "body": "Patient records and telemedicine at national scale, with the consent and audit model the category demands.",
  "proposition": "A patient record is only useful if every read and write can be explained months later.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Clinical data carries consequences ordinary products do not. Records sit across practice software, labs and insurers, and every access has to be attributable, reversible and defensible under audit."
   },
   {
    "label": "The product",
    "body": "Patient-facing records, history and results alongside telemedicine consultation with scheduling, notes and prescriptions attached to the encounter."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules were settled before any endpoint was written, because both constrain everything downstream. Prototypes went in front of clinicians early."
   },
   {
    "label": "Constraints",
    "body": "Built to the storage, retention and access expectations the category requires, with every integration assumed to land slower than promised."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "Consent is modelled as data rather than logic, so a rule change does not require a release. The audit trail is written on the same transaction as the record itself, which means it cannot drift from what actually happened.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "nirogstreet",
  "name": "NirogStreet",
  "sector": "Healthcare, ayurveda",
  "scope": "App + web",
  "key": "healthcare",
  "img": "/img/cs/nirogstreet/nirogstreet1.png",
  "gallery": [
   "/img/cs/nirogstreet/nirogstreet1.png",
   "/img/cs/nirogstreet/nirogstreet2.png"
  ],
  "body": "A healthcare platform on app and web serving practitioners and patients, covering consultation, records and supply.",
  "proposition": "Digitising a traditional practice means respecting how it already works.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every read and write against a patient record has to be attributable, reversible and explainable months later."
   },
   {
    "label": "The product",
    "body": "A healthcare platform on app and web serving practitioners and patients, covering consultation, records and supply."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules are settled before any endpoint is written, because both constrain everything downstream. Prototypes go in front of clinicians early."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "Practitioner and patient data are separated with explicit consent boundaries between them.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "healthengine",
  "name": "Healthengine",
  "sector": "Healthcare",
  "scope": "App + web + provider platform",
  "key": "healthcare",
  "img": "/img/cs/healthengine/healthengine1.png",
  "gallery": [
   "/img/cs/healthengine/healthengine1.png",
   "/img/cs/healthengine/healthengine2.png",
   "/img/cs/healthengine/healthengine3.png",
   "/img/cs/healthengine/healthengine4.png"
  ],
  "body": "A healthcare platform across app, web and a provider platform, covering discovery, booking and practice-side management.",
  "proposition": "Appointment booking is a two-sided product where one side is a busy clinic.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every read and write against a patient record has to be attributable, reversible and explainable months later."
   },
   {
    "label": "The product",
    "body": "A healthcare platform across app, web and a provider platform, covering discovery, booking and practice-side management."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules are settled before any endpoint is written, because both constrain everything downstream. Prototypes go in front of clinicians early."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "Availability syncs bidirectionally with practice systems, and the booking flow assumes those integrations will be slow.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "zava",
  "name": "ZAVA",
  "sector": "Digital healthcare",
  "scope": "Web + app",
  "key": "healthcare",
  "img": "/img/cs/zava/zavamed1.png",
  "gallery": [
   "/img/cs/zava/zavamed1.png",
   "/img/cs/zava/zavamed2.png",
   "/img/cs/zava/zavamed3.png",
   "/img/cs/zava/zavamed4.png"
  ],
  "body": "A digital healthcare build on web and app, covering assessment, consultation and prescription fulfilment.",
  "proposition": "Remote prescribing puts a clinical decision inside a product flow.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every read and write against a patient record has to be attributable, reversible and explainable months later."
   },
   {
    "label": "The product",
    "body": "A digital healthcare build on web and app, covering assessment, consultation and prescription fulfilment."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules are settled before any endpoint is written, because both constrain everything downstream. Prototypes go in front of clinicians early."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "Clinical assessment logic is versioned configuration, so a protocol change is reviewable and auditable.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "livi",
  "name": "Livi",
  "sector": "Digital healthcare",
  "scope": "App + web",
  "key": "healthcare",
  "img": "/img/cs/livi/livi3.png",
  "gallery": [
   "/img/cs/livi/livi3.png",
   "/img/cs/livi/livi1.png",
   "/img/cs/livi/livi2.png"
  ],
  "body": "A digital healthcare product on app and web, covering appointment booking, video consultation and clinical notes.",
  "proposition": "Video consultation is judged on the first thirty seconds of connection.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every read and write against a patient record has to be attributable, reversible and explainable months later."
   },
   {
    "label": "The product",
    "body": "A digital healthcare product on app and web, covering appointment booking, video consultation and clinical notes."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules are settled before any endpoint is written, because both constrain everything downstream. Prototypes go in front of clinicians early."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "Session quality is instrumented before anything else, because connection failure is the only defect patients remember.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "tend",
  "name": "Tend",
  "sector": "Healthcare, dental",
  "scope": "App + web + clinics",
  "key": "healthcare",
  "img": "/img/cs/tend/tend1.png",
  "gallery": [
   "/img/cs/tend/tend1.png",
   "/img/cs/tend/tend2.png",
   "/img/cs/tend/tend3.png",
   "/img/cs/tend/tend4.png"
  ],
  "body": "A healthcare build across app, web and clinic-facing systems, covering booking, records and in-clinic workflow.",
  "proposition": "Dental care spans an app, a website and a physical chair.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every read and write against a patient record has to be attributable, reversible and explainable months later."
   },
   {
    "label": "The product",
    "body": "A healthcare build across app, web and clinic-facing systems, covering booking, records and in-clinic workflow."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules are settled before any endpoint is written, because both constrain everything downstream. Prototypes go in front of clinicians early."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "Clinic tooling works offline with local persistence, because an appointment cannot wait for a network.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "hotdoc",
  "name": "HotDoc",
  "sector": "Healthcare",
  "scope": "App + web + provider platform",
  "key": "healthcare",
  "img": "/img/cs/hotdoc/hotdoc1.png",
  "gallery": [
   "/img/cs/hotdoc/hotdoc1.png",
   "/img/cs/hotdoc/hotdoc2.png",
   "/img/cs/hotdoc/hotdoc3.png",
   "/img/cs/hotdoc/hotdoc4.png"
  ],
  "body": "A healthcare platform across app, web and a provider platform, covering booking, reminders and practice management.",
  "proposition": "Provider-side software decides whether patient-side software gets used.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "Every read and write against a patient record has to be attributable, reversible and explainable months later."
   },
   {
    "label": "The product",
    "body": "A healthcare platform across app, web and a provider platform, covering booking, reminders and practice management."
   },
   {
    "label": "The build",
    "body": "The data model and consent rules are settled before any endpoint is written, because both constrain everything downstream. Prototypes go in front of clinicians early."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Fragmented systems",
    "body": "Records sit across practice software, labs and insurers, each with its own format."
   },
   {
    "title": "Clinician time",
    "body": "If a workflow adds thirty seconds per patient, adoption dies quietly however good the product is."
   },
   {
    "title": "Regulatory surface",
    "body": "Health regulation changes what you can store, where, and for how long."
   }
  ],
  "system": "The provider platform is treated as the primary product, since clinic adoption determines patient availability.",
  "stack": [
   "Flutter",
   "React",
   "Python",
   "PostgreSQL",
   "Azure",
   "FHIR / HL7",
   "Kubernetes"
  ]
 },
 {
  "slug": "numberdekho",
  "name": "Number Dekho",
  "sector": "On-demand service",
  "scope": "App + web",
  "key": "web",
  "img": "/img/numberdekho.webp",
  "gallery": [
   "/img/numberdekho.webp"
  ],
  "body": "An on-demand service build on app and web, covering discovery, booking, fulfilment and the operations behind it.",
  "proposition": "On-demand products are two apps: the one people praise and the one that works.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "The first version usually contains three products. Deciding which one ships is most of the value."
   },
   {
    "label": "The product",
    "body": "An on-demand service build on app and web, covering discovery, booking, fulfilment and the operations behind it."
   },
   {
    "label": "The build",
    "body": "Performance and accessibility budgets are set at the start and enforced in CI, because both are cheap to hold and expensive to retrofit."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Content ownership",
    "body": "If routine changes need a developer, the site stops being updated within a quarter."
   },
   {
    "title": "Performance",
    "body": "Consumer patience is measured in hundreds of milliseconds on a mid-range phone."
   },
   {
    "title": "Handover",
    "body": "Whoever maintains it next inherits these decisions and should be able to live with them."
   }
  ],
  "system": "Matching runs as its own service, and the provider-facing app gets the same engineering attention as the customer app.",
  "stack": [
   "Next.js",
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Cloudflare",
   "AWS"
  ]
 },
 {
  "slug": "broopi",
  "name": "Broopi",
  "sector": "Consumer web & app",
  "scope": "App + web",
  "key": "web",
  "img": "/img/broopi-thumb.webp",
  "gallery": [
   "/img/broopi-thumb.webp"
  ],
  "body": "A consumer app and website built from first wireframe to launch, covering the core flow and the admin behind it.",
  "proposition": "A product with no users yet needs the smallest honest version of itself.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "The first version usually contains three products. Deciding which one ships is most of the value."
   },
   {
    "label": "The product",
    "body": "A consumer app and website built from first wireframe to launch, covering the core flow and the admin behind it."
   },
   {
    "label": "The build",
    "body": "Performance and accessibility budgets are set at the start and enforced in CI, because both are cheap to hold and expensive to retrofit."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Content ownership",
    "body": "If routine changes need a developer, the site stops being updated within a quarter."
   },
   {
    "title": "Performance",
    "body": "Consumer patience is measured in hundreds of milliseconds on a mid-range phone."
   },
   {
    "title": "Handover",
    "body": "Whoever maintains it next inherits these decisions and should be able to live with them."
   }
  ],
  "system": "Boring technology by default, structured so the first inflection point does not require a rewrite.",
  "stack": [
   "Next.js",
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Cloudflare",
   "AWS"
  ]
 },
 {
  "slug": "milanoa",
  "name": "Milanoa",
  "sector": "Consumer web",
  "scope": "Web",
  "key": "web",
  "img": "/img/milanoa-thumb.webp",
  "gallery": [
   "/img/milanoa-thumb.webp"
  ],
  "body": "A website build covering content structure, editorial control and the performance work that keeps it fast.",
  "proposition": "A website is a performance budget with content in it.",
  "chapters": [
   {
    "label": "The challenge",
    "body": "The first version usually contains three products. Deciding which one ships is most of the value."
   },
   {
    "label": "The product",
    "body": "A website build covering content structure, editorial control and the performance work that keeps it fast."
   },
   {
    "label": "The build",
    "body": "Performance and accessibility budgets are set at the start and enforced in CI, because both are cheap to hold and expensive to retrofit."
   },
   {
    "label": "Ownership",
    "body": "Repositories, cloud accounts and documentation sat with the client throughout. Senior engineers wrote the production code rather than specifying it."
   }
  ],
  "constraints": [
   {
    "title": "Content ownership",
    "body": "If routine changes need a developer, the site stops being updated within a quarter."
   },
   {
    "title": "Performance",
    "body": "Consumer patience is measured in hundreds of milliseconds on a mid-range phone."
   },
   {
    "title": "Handover",
    "body": "Whoever maintains it next inherits these decisions and should be able to live with them."
   }
  ],
  "system": "Content is modelled for editors rather than developers, so routine changes never require engineering time.",
  "stack": [
   "Next.js",
   "React Native",
   "Node.js",
   "PostgreSQL",
   "Cloudflare",
   "AWS"
  ]
 }
];

export const bySlug = cases.reduce((m, c) => { m[c.slug] = c; return m; }, {});
