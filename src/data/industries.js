// Industry pages, ported verbatim from the Mariox Software Site design.
const cs = (name, slug, img, body) => ({ name, slug, url: '/case-study/' + slug, img: '/' + img, body });

export const industries = [
  { slug:'healthcare', name:'Healthcare', stage:0,
    h1a:'Digital products for', h1b:'modern healthcare.',
    blurb:'Patient platforms, telemedicine, provider systems',
    sub:'Clinical software carries consequences most products do not. We build patient-facing platforms and provider systems that hold up to both a load test and an audit.',
    challenges:[
      {n:'01', title:'Consent and audit', body:'Every read and write against a patient record has to be attributable, reversible and explainable months later.'},
      {n:'02', title:'Fragmented systems', body:'Records sit across practice software, labs and insurers, each with its own format and appetite for integration.'},
      {n:'03', title:'Clinician time', body:'If a workflow adds thirty seconds per patient, adoption dies quietly regardless of how good the product is.'},
      {n:'04', title:'Regulatory surface', body:'HIPAA, GDPR and local health regulation change what you can store, where and for how long.'}
    ],
    builds:[
      {n:'01', title:'Patient platforms', body:'Records, history and results in a place patients can actually use.'},
      {n:'02', title:'Telemedicine', body:'Video consultation with scheduling, notes and prescriptions attached.'},
      {n:'03', title:'Appointment systems', body:'Availability, reminders and no-show handling across multiple sites.'},
      {n:'04', title:'Hospital systems', body:'Admissions, departments and internal operations tooling.'},
      {n:'05', title:'Healthcare marketplaces', body:'Practitioner discovery, booking and payment in one flow.'},
      {n:'06', title:'Health SaaS', body:'Multi-tenant clinical products with per-clinic configuration.'}
    ],
    tech:['Flutter','React','Node.js','Python','PostgreSQL','Azure','FHIR / HL7','Kubernetes'],
    approach:'We start with the data model and the consent rules, because they constrain everything after. Prototypes go in front of clinicians before a single production endpoint is written, and we assume every integration will be slower to land than promised.',
    caseNote:'Six healthcare platforms shipped',
    cases:[
      cs('Eka Care','ekacare','img/cs/eka.care/eka.care2.png','Patient records and telemedicine at national scale.'),
      cs('Healthengine','healthengine','img/cs/healthengine/healthengine1.png','Appointment booking across a national provider network.'),
      cs('ZAVA','zava','img/cs/zava/zavamed1.png','Digital-first consultation and prescription delivery.')
    ]
  },
  { slug:'fintech', name:'Fintech', stage:1,
    h1a:'Software for money', h1b:'that has to move.',
    blurb:'Payments, banking, wallets, investment platforms',
    sub:'Eight shipped platforms across payments, banking and investing. In this sector an outage is a regulatory event, so we build for reconciliation first and features second.',
    challenges:[
      {n:'01', title:'Reconciliation', body:'Ledgers must balance to the cent across providers, currencies and retries. Approximate is the same as wrong.'},
      {n:'02', title:'KYC and AML', body:'Onboarding has to satisfy compliance without becoming the reason users abandon signup.'},
      {n:'03', title:'Provider dependency', body:'Payment rails fail in ways you do not control. The system has to degrade without losing money.'},
      {n:'04', title:'Audit expectations', body:'Regulators ask what happened on a specific date to a specific account. You need the answer in minutes.'}
    ],
    builds:[
      {n:'01', title:'Banking platforms', body:'Accounts, statements and transfers on a ledger you can defend.'},
      {n:'02', title:'Payment systems', body:'Orchestration across providers with retries and failover.'},
      {n:'03', title:'Wallets', body:'Balance, top-up and payout flows with dispute handling.'},
      {n:'04', title:'Investment platforms', body:'Portfolio, order routing and market data at retail scale.'},
      {n:'05', title:'Cross-border payments', body:'FX, compliance and settlement across jurisdictions.'},
      {n:'06', title:'Financial SaaS', body:'Multi-tenant tooling for lenders, brokers and finance teams.'}
    ],
    tech:['TypeScript','Java / Spring','Node.js','PostgreSQL','Redis','Kafka','AWS','Terraform'],
    approach:'Double-entry from day one, idempotency on every money-moving endpoint, and a reconciliation job that runs whether or not anyone is watching. We design the failure paths before the happy path.',
    caseNote:'Eight fintech platforms shipped',
    cases:[
      cs('Skydo','skydo','img/cs/skydo/Skydo1.png','Cross-border payments for exporters.'),
      cs('Airwallex','airwallex','img/cs/airwallex/AirWallex4.png','Global business accounts and FX.'),
      cs('StockGro','stockgro','img/cs/stockgro/stockgro1.png','Social investing at retail scale.')
    ]
  },
  { slug:'real-estate', name:'Real estate', stage:3,
    h1a:'Platforms for property', h1b:'and the people selling it.',
    blurb:'Listings, CRM, property management, marketplaces',
    sub:'Property runs on listings, leads and paperwork. We build the platforms that keep all three in one system instead of four spreadsheets and an inbox.',
    challenges:[
      {n:'01', title:'Listing data quality', body:'Feeds arrive duplicated, stale and inconsistently geocoded. Search is only as good as the cleanup.'},
      {n:'02', title:'Lead leakage', body:'Enquiries scatter across portals, email and phone, then go cold before anyone follows up.'},
      {n:'03', title:'Document load', body:'Agreements, compliance and approvals still move as attachments unless the product absorbs them.'},
      {n:'04', title:'Search that works', body:'Buyers filter on things the schema was never designed for. Search needs room to change.'}
    ],
    builds:[
      {n:'01', title:'Property platforms', body:'Listings, media, search and enquiry in one product.'},
      {n:'02', title:'Real estate CRM', body:'Pipeline, follow-up and agent performance in one place.'},
      {n:'03', title:'Property management', body:'Tenancies, rent, maintenance and owner reporting.'},
      {n:'04', title:'Marketplaces', body:'Two-sided platforms connecting buyers, sellers and agents.'},
      {n:'05', title:'Document workflows', body:'Agreements, approvals and e-signature built into the flow.'},
      {n:'06', title:'Real estate SaaS', body:'Multi-tenant products for agencies and developers.'}
    ],
    tech:['Next.js','Node.js','PostgreSQL','Elasticsearch','Mapbox','AWS','Redis'],
    approach:'We treat search and lead routing as the product, not features of it. The data pipeline that dedupes and geocodes listings gets built before the interface, because everything downstream depends on it.'
  },
  { slug:'education', name:'Education', stage:2,
    h1a:'Learning platforms', h1b:'people finish.',
    blurb:'LMS, edtech products, assessment, student systems',
    sub:'Eight edtech platforms shipped. Completion is the only metric that matters, and it is decided by structure and pace long before it is decided by content.',
    challenges:[
      {n:'01', title:'Completion rates', body:'Most learners stop early. Structure, pacing and reminders move the number more than features do.'},
      {n:'02', title:'Live at scale', body:'A cohort session with thousands of concurrent learners is an infrastructure problem, not a video problem.'},
      {n:'03', title:'Assessment integrity', body:'Marking has to be fast, consistent and hard to game across large cohorts.'},
      {n:'04', title:'Many stakeholders', body:'Students, teachers, parents and administrators need different views of the same data.'}
    ],
    builds:[
      {n:'01', title:'Learning platforms', body:'Course delivery, progress and certification.'},
      {n:'02', title:'Live cohorts', body:'Scheduled sessions, attendance and recordings at scale.'},
      {n:'03', title:'Assessment platforms', body:'Question banks, marking and analytics.'},
      {n:'04', title:'Student management', body:'Enrolment, records, fees and reporting.'},
      {n:'05', title:'Learning apps', body:'Mobile-first practice and revision with offline support.'},
      {n:'06', title:'Creator platforms', body:'Course authoring, pricing and payouts for educators.'}
    ],
    tech:['React','Node.js','React Native','PostgreSQL','Redis','GCP','WebRTC'],
    approach:'We instrument the funnel from enrolment to completion and design against the drop-off points we find. Live infrastructure gets load-tested at the number you hope for, not the number you have.',
    caseNote:'Eight edtech platforms shipped',
    cases:[
      cs('Graphy','graphy','img/cs/graphy/graphy1.png','Course delivery, live cohorts and creator payouts.'),
      cs('Teachmint','teachmint','img/cs/teachmint/teachmint.png','Classroom and school management at scale.'),
      cs('Testbook','testbook','img/cs/testbook/testbook1.png','Test preparation with large-cohort assessment.')
    ]
  },
  { slug:'ecommerce', name:'E-commerce', stage:1,
    h1a:'Commerce that survives', h1b:'the day it matters.',
    blurb:'Storefronts, marketplaces, seller platforms, operations',
    sub:'Six commerce platforms shipped, including marketplaces running third-party sellers. Most of the year is easy. We build for the four days that are not.',
    challenges:[
      {n:'01', title:'Peak traffic', body:'A drop or sale concentrates a month of load into twenty minutes. Caching strategy is the product.'},
      {n:'02', title:'Inventory truth', body:'Overselling is a support problem that scales faster than revenue does.'},
      {n:'03', title:'Checkout friction', body:'Every additional field costs conversion. Payment coverage has to be broad and fast.'},
      {n:'04', title:'Seller operations', body:'Marketplaces live or die on how well the seller side works, and nobody demos that.'}
    ],
    builds:[
      {n:'01', title:'Commerce platforms', body:'Catalogue, cart, checkout and post-purchase.'},
      {n:'02', title:'Marketplaces', body:'Multi-seller listings, payouts and dispute handling.'},
      {n:'03', title:'Seller platforms', body:'Onboarding, inventory and performance tooling.'},
      {n:'04', title:'Customer apps', body:'Native shopping with notifications and reorder flows.'},
      {n:'05', title:'Logistics integration', body:'Fulfilment, shipping rates and tracking wired in.'},
      {n:'06', title:'Order management', body:'Returns, refunds and exceptions handled properly.'}
    ],
    tech:['Next.js','Node.js','PostgreSQL','Redis','Elasticsearch','Stripe','Cloudflare','Kubernetes'],
    approach:'We load-test at three times the expected peak and treat inventory as a single source of truth with everything else reading from it. Checkout gets the most engineering attention because it converts.',
    caseNote:'Six commerce platforms shipped',
    cases:[
      cs('Snitch','snitch','img/cs/snitch/snitch1.png','Fashion commerce engineered for drops.'),
      cs('Kogan','kogan','img/cs/kogan/kogan2.png','Marketplace with large third-party seller base.'),
      cs('Fynd','fynd','img/cs/fynd/fynd1.png','Commerce technology across online and retail.')
    ]
  },
  { slug:'travel', name:'Travel', stage:4,
    h1a:'Booking systems', h1b:'that hold together.',
    blurb:'Booking platforms, marketplaces, hotel technology',
    sub:'Travel products depend on inventory you do not own and prices that change while the user is looking at them. The engineering problem is consistency, not screens.',
    challenges:[
      {n:'01', title:'Third-party inventory', body:'Availability comes from suppliers with different latency, formats and reliability.'},
      {n:'02', title:'Price volatility', body:'Quotes go stale mid-session. Users blame you, not the supplier.'},
      {n:'03', title:'Cancellation logic', body:'Refund rules vary per supplier, per fare, per date. Most of the complexity lives here.'},
      {n:'04', title:'Itinerary state', body:'One trip spans flights, stays and transfers that all change independently.'}
    ],
    builds:[
      {n:'01', title:'Booking platforms', body:'Search, hold, book and pay across suppliers.'},
      {n:'02', title:'Travel marketplaces', body:'Multi-supplier inventory with unified checkout.'},
      {n:'03', title:'Hotel technology', body:'Property management, rates and channel integration.'},
      {n:'04', title:'Itinerary management', body:'Trip state, changes and traveller notifications.'},
      {n:'05', title:'Concierge platforms', body:'Requests, agents and fulfilment tracking.'},
      {n:'06', title:'Operator tooling', body:'Capacity, pricing and reporting for tour operators.'}
    ],
    tech:['React','Node.js','PostgreSQL','Redis','GraphQL','AWS','Elasticsearch'],
    approach:'We build a normalisation layer over supplier feeds so the product has one shape to work with, cache aggressively with explicit staleness, and make cancellation rules data rather than code.'
  },
  { slug:'logistics', name:'Logistics', stage:3,
    h1a:'Software for things', h1b:'that are moving.',
    blurb:'Fleet, dispatch, tracking, route optimisation',
    sub:'Six delivery and quick-commerce platforms shipped, several promising sub-ten-minute delivery. Dispatch is a real-time problem and it is where these systems succeed or fail.',
    challenges:[
      {n:'01', title:'Real-time dispatch', body:'Assignment decisions have to be made in seconds with incomplete information.'},
      {n:'02', title:'Location accuracy', body:'GPS drifts, phones sleep and drivers go through tunnels. The map has to stay believable.'},
      {n:'03', title:'Battery and data', body:'Driver apps run all day on cheap handsets and patchy networks.'},
      {n:'04', title:'Exception handling', body:'Failed deliveries, returns and reassignment are the majority of operational cost.'}
    ],
    builds:[
      {n:'01', title:'Dispatch systems', body:'Assignment, batching and live rebalancing.'},
      {n:'02', title:'Fleet management', body:'Vehicles, drivers, shifts and compliance.'},
      {n:'03', title:'Tracking', body:'Live location for customers and operations.'},
      {n:'04', title:'Route optimisation', body:'Multi-stop sequencing under real constraints.'},
      {n:'05', title:'Warehouse tooling', body:'Picking, packing and stock movement.'},
      {n:'06', title:'Logistics SaaS', body:'Multi-tenant products for 3PLs and operators.'}
    ],
    tech:['React Native','Node.js','PostgreSQL','Redis','Kafka','Kubernetes','Maps APIs'],
    approach:'Dispatch gets built as a service with its own tests and replay tooling so decisions can be audited after the fact. Driver apps are engineered for low-end devices and intermittent connectivity from the start.',
    caseNote:'Six delivery platforms shipped',
    cases:[
      cs('MILKRUN','milkrun','img/cs/milkrun/milkrun1.png','Grocery delivery with rider dispatch and live tracking.'),
      cs('Voly','volygroup','img/cs/volygroup/volygroup2.png','Quick commerce across app, web and operations.'),
      cs('Zapp','zapp','img/cs/zapp/zaap2.png','On-demand delivery at metropolitan scale.')
    ]
  },
  { slug:'media', name:'Media', stage:2,
    h1a:'Platforms for content', h1b:'and the people making it.',
    blurb:'OTT, streaming, content and creator platforms',
    sub:'Media products are judged on playback and discovery. Both are infrastructure problems dressed as design problems.',
    challenges:[
      {n:'01', title:'Playback quality', body:'Startup time and rebuffering decide retention more than catalogue size does.'},
      {n:'02', title:'Delivery cost', body:'Bandwidth is the dominant line item. Encoding and CDN strategy is a business decision.'},
      {n:'03', title:'Rights and windows', body:'Content availability varies by territory and date, and the system has to enforce it.'},
      {n:'04', title:'Discovery', body:'A large catalogue without good discovery performs worse than a small one.'}
    ],
    builds:[
      {n:'01', title:'OTT platforms', body:'Catalogue, playback and entitlement across devices.'},
      {n:'02', title:'Streaming infrastructure', body:'Encoding, packaging and delivery pipelines.'},
      {n:'03', title:'Content platforms', body:'Publishing, editorial workflow and syndication.'},
      {n:'04', title:'Creator platforms', body:'Upload, monetisation and audience tooling.'},
      {n:'05', title:'Subscription billing', body:'Plans, trials, churn handling and dunning.'},
      {n:'06', title:'Recommendation', body:'Discovery driven by behaviour rather than editorial alone.'}
    ],
    tech:['React','Next.js','Node.js','Python','PostgreSQL','AWS','Cloudflare','HLS / DASH'],
    approach:'We instrument playback before anything else, because startup time and rebuffer rate tell you what to fix. Rights and windowing get modelled as data so business teams can change them without a release.'
  },
  { slug:'startups', name:'Startups', stage:0,
    h1a:'From idea', h1b:'to something real.',
    blurb:'MVPs, SaaS, marketplaces, scalable backends',
    sub:'Founders come to us with a product to prove. The job is finding the smallest version that answers the question, building it properly, and not painting you into a corner.',
    challenges:[
      {n:'01', title:'Scope discipline', body:'The first version usually contains three products. Deciding which one ships is most of the value.'},
      {n:'02', title:'Runway', body:'Every week of build is a week of runway. Sequencing matters more than velocity.'},
      {n:'03', title:'Premature scale', body:'Architecture built for a million users you do not have slows down the ten you do.'},
      {n:'04', title:'Handover', body:'When you hire your own team, they inherit our decisions. They should be able to live with them.'}
    ],
    builds:[
      {n:'01', title:'MVP development', body:'The smallest build that tests the real assumption.'},
      {n:'02', title:'SaaS products', body:'Multi-tenancy, billing and onboarding done once, properly.'},
      {n:'03', title:'Marketplaces', body:'Two-sided products with payments and trust mechanics.'},
      {n:'04', title:'Mobile applications', body:'Native and cross-platform from wireframe to store.'},
      {n:'05', title:'Scalable backends', body:'Services that grow without a rewrite at the first inflection.'},
      {n:'06', title:'Technical due diligence', body:'An honest read on an existing codebase before you raise.'}
    ],
    tech:['Next.js','React Native','Node.js','TypeScript','PostgreSQL','Supabase','AWS','Stripe'],
    approach:'We run a short paid discovery, cut the scope to what tests the assumption, and give you a fixed number. Boring technology by default, because your advantage is the product and not the stack.'
  },
  { slug:'enterprise', name:'Enterprise', stage:3,
    h1a:'Systems the business', h1b:'actually runs on.',
    blurb:'ERP, CRM, internal platforms, integrations',
    sub:'Enterprise work is mostly integration and migration under a constraint nobody can relax: the current system has to keep running while you change it.',
    challenges:[
      {n:'01', title:'Legacy dependency', body:'The system you want to replace is load-bearing and undocumented.'},
      {n:'02', title:'Integration surface', body:'A dozen systems, several vendors and no single owner of the data model.'},
      {n:'03', title:'Change resistance', body:'Adoption fails on process and training long before it fails on software.'},
      {n:'04', title:'Migration risk', body:'Cutover is the moment everything is exposed. It has to be rehearsed and reversible.'}
    ],
    builds:[
      {n:'01', title:'ERP implementation', body:'Configuration, customisation and rollout.'},
      {n:'02', title:'CRM platforms', body:'Pipeline, service and reporting fitted to your process.'},
      {n:'03', title:'Internal platforms', body:'Tools your operations teams live inside all day.'},
      {n:'04', title:'Workflow automation', body:'Approvals and handoffs that stop living in email.'},
      {n:'05', title:'System integration', body:'APIs and pipelines connecting what you already own.'},
      {n:'06', title:'Migration', body:'Staged, rehearsed and reversible cutover.'}
    ],
    tech:['.NET','Java / Spring','React','PostgreSQL','Azure','Terraform','Kafka','Power BI'],
    approach:'We map the current system before proposing the next one, run new and old in parallel where we can, and rehearse cutover until it is boring. Training and documentation are part of scope, not an afterthought.'
  },
  { slug:'quick-commerce', name:'Quick commerce', stage:3,
    h1a:'Ten-minute promises,', h1b:'kept.',
    blurb:'Dark stores, rider dispatch, sub-hour delivery',
    sub:'Seven quick-commerce platforms shipped. The promise on the homepage is an engineering commitment: inventory accuracy, rider supply and dispatch have to hold simultaneously.',
    challenges:[
      {n:'01', title:'Dark store inventory', body:'Stock accuracy per store decides whether the promise is deliverable or a cancellation.'},
      {n:'02', title:'Rider supply', body:'Demand spikes in twenty-minute windows. Supply has to be forecast, not reacted to.'},
      {n:'03', title:'Slot honesty', body:'Showing a delivery window you cannot meet costs more than showing a longer one.'},
      {n:'04', title:'Unit economics', body:'Every extra minute and every failed drop is measurable margin.'}
    ],
    builds:[
      {n:'01', title:'Customer apps', body:'Browse, order and live tracking on iOS and Android.'},
      {n:'02', title:'Rider apps', body:'Assignment, navigation and proof of delivery.'},
      {n:'03', title:'Dark store tooling', body:'Picking, stock counts and store-level availability.'},
      {n:'04', title:'Dispatch engine', body:'Batching and assignment under time pressure.'},
      {n:'05', title:'Slot and pricing logic', body:'Dynamic windows and fees tied to real capacity.'},
      {n:'06', title:'Operations dashboards', body:'Live performance per store and per rider.'}
    ],
    tech:['React Native','Node.js','PostgreSQL','Redis','Kafka','Kubernetes','Maps APIs'],
    approach:'We model store-level inventory as the source of truth and refuse to show a slot the system cannot back. Dispatch is a service with replay tooling so any assignment decision can be audited later.',
    caseNote:'Seven quick-commerce platforms shipped',
    cases:[
      cs('MILKRUN','milkrun','img/cs/milkrun/milkrun1.png','Grocery delivery with rider dispatch and live tracking.'),
      cs('Zapp','zapp','img/cs/zapp/zaap2.png','On-demand delivery at metropolitan scale.'),
      cs('Grokart','thegrocart','img/cs/thegrocart/thegrocart1.png','Grocery commerce with store-level fulfilment.')
    ]
  },
  { slug:'insurance', name:'Insurance', stage:1,
    h1a:'Insurance software', h1b:'without the paper.',
    blurb:'Quoting, policy admin, claims, distribution',
    sub:'Insurance runs on rules that change by product, territory and regulator. We build systems where those rules are configurable data rather than hard-coded logic.',
    challenges:[
      {n:'01', title:'Rating complexity', body:'Premium logic varies per product and changes often. Hard-coding it guarantees release pressure.'},
      {n:'02', title:'Claims turnaround', body:'Customers judge insurers on claims, and claims are mostly document handling.'},
      {n:'03', title:'Legacy policy systems', body:'The core admin platform is old, load-bearing and rarely well documented.'},
      {n:'04', title:'Regulatory reporting', body:'Returns and disclosures have fixed formats and unforgiving deadlines.'}
    ],
    builds:[
      {n:'01', title:'Quote and buy', body:'Rating, underwriting questions and checkout.'},
      {n:'02', title:'Policy administration', body:'Issuance, endorsements, renewals and cancellation.'},
      {n:'03', title:'Claims platforms', body:'Intake, document handling, assessment and settlement.'},
      {n:'04', title:'Agent and broker portals', body:'Distribution tooling with commission tracking.'},
      {n:'05', title:'Customer self-service', body:'Documents, changes and claims without a phone call.'},
      {n:'06', title:'Regulatory reporting', body:'Scheduled returns generated from the system of record.'}
    ],
    tech:['Java / Spring','.NET','React','PostgreSQL','Azure','Kafka','Power BI'],
    approach:'Rating and underwriting rules get modelled as versioned configuration so product teams can change them without a deployment. Claims work starts with the document pipeline, because that is where the days go.'
  },
  { slug:'manufacturing', name:'Manufacturing', stage:3,
    h1a:'Connecting the floor', h1b:'to the back office.',
    blurb:'ERP, MES, IoT telemetry, production planning',
    sub:'Manufacturing software has to survive an environment that engineering offices do not: intermittent networks, hostile conditions and machines that predate the internet.',
    challenges:[
      {n:'01', title:'Machine integration', body:'Equipment speaks proprietary protocols, or nothing at all, and cannot be replaced.'},
      {n:'02', title:'Shop-floor conditions', body:'Dust, gloves, noise and poor connectivity break conventional interfaces.'},
      {n:'03', title:'Planning accuracy', body:'Schedules built on stale data create the shortages they were meant to prevent.'},
      {n:'04', title:'Traceability', body:'Recalls and audits require knowing which batch went where, months later.'}
    ],
    builds:[
      {n:'01', title:'ERP systems', body:'Orders, inventory, procurement and finance integration.'},
      {n:'02', title:'Production tracking', body:'Work orders, output and downtime capture.'},
      {n:'03', title:'IoT telemetry', body:'Machine data collected, buffered and made useful.'},
      {n:'04', title:'Quality management', body:'Inspections, non-conformance and corrective actions.'},
      {n:'05', title:'Maintenance systems', body:'Preventive schedules and breakdown handling.'},
      {n:'06', title:'Traceability', body:'Batch and serial history end to end.'}
    ],
    tech:['.NET','Java','React','PostgreSQL','MQTT','Azure IoT','Power BI','Docker'],
    approach:'Interfaces are designed for gloves and glare, and every shop-floor tool works offline with local buffering. We integrate with machines as they are rather than proposing capital expenditure we cannot justify.',
    caseNote:'ERP delivered for Vimal Wires & Cable',
    cases:[
      cs('Vimal Wires & Cable','vimal-wires-and-cable','img/vimal-cables-thumb.webp','ERP system covering production and operations.')
    ]
  },
  { slug:'public-sector', name:'Public sector', stage:2,
    h1a:'Services citizens', h1b:'can actually use.',
    blurb:'Citizen portals, case management, accessibility',
    sub:'Public software is judged on whether the least confident user can complete the task. Accessibility and documentation are requirements here, not improvements.',
    challenges:[
      {n:'01', title:'Universal accessibility', body:'The service must work for every citizen, on old devices and assistive technology.'},
      {n:'02', title:'Procurement constraints', body:'Scope, reporting and evidence obligations are fixed before work starts.'},
      {n:'03', title:'Legacy integration', body:'Records live in systems that predate the web and cannot be switched off.'},
      {n:'04', title:'Transparency', body:'Decisions and data handling have to be explainable to the public.'}
    ],
    builds:[
      {n:'01', title:'Citizen portals', body:'Applications, payments and status tracking.'},
      {n:'02', title:'Case management', body:'Workflow, assessment and decision recording.'},
      {n:'03', title:'Licensing systems', body:'Permits, renewals and inspection scheduling.'},
      {n:'04', title:'Internal platforms', body:'Tooling for caseworkers and administrators.'},
      {n:'05', title:'Open data', body:'Published datasets and documented APIs.'},
      {n:'06', title:'Legacy integration', body:'Bridges to existing systems of record.'}
    ],
    tech:['React','Node.js','.NET','PostgreSQL','Azure','Terraform','GOV-style patterns'],
    approach:'We build to WCAG AA and test with assistive technology rather than a checklist. Everything ships with the documentation and evidence procurement requires, produced as we go rather than at the end.'
  },
  { slug:'agritech', name:'Agritech', stage:0,
    h1a:'Software for fields,', h1b:'not just offices.',
    blurb:'Farm management, supply chain, advisory, marketplaces',
    sub:'Agricultural software runs where connectivity is unreliable and the user may not be reading in English. Offline-first is a requirement, not a feature.',
    challenges:[
      {n:'01', title:'Connectivity', body:'Fields have patchy coverage. Anything requiring a live connection will fail in use.'},
      {n:'02', title:'Language and literacy', body:'Interfaces need multiple languages and to work with minimal reading.'},
      {n:'03', title:'Seasonality', body:'Usage concentrates into short windows, so releases must land between them.'},
      {n:'04', title:'Fragmented supply chain', body:'Many small intermediaries, little digitisation and inconsistent records.'}
    ],
    builds:[
      {n:'01', title:'Farm management', body:'Plots, crops, inputs and activity records.'},
      {n:'02', title:'Advisory apps', body:'Guidance, alerts and diagnostics in local languages.'},
      {n:'03', title:'Supply chain platforms', body:'Procurement, grading and payment tracking.'},
      {n:'04', title:'Marketplaces', body:'Connecting producers to buyers with price transparency.'},
      {n:'05', title:'Traceability', body:'Origin records from farm to buyer.'},
      {n:'06', title:'Field data capture', body:'Offline-first collection that syncs when it can.'}
    ],
    tech:['React Native','Flutter','Node.js','PostgreSQL','SQLite','Firebase','Maps APIs'],
    approach:'Every field-facing app is offline-first with conflict resolution designed in from the start. We test on low-end devices and in local languages, because that is what is actually in the user\'s hand.'
  },
  { slug:'fitness', name:'Sports & fitness', stage:4,
    h1a:'Products people', h1b:'come back to.',
    blurb:'Training apps, class booking, wearables, communities',
    sub:'Fitness products are retention businesses. Habit mechanics and honest data matter more than feature count.',
    challenges:[
      {n:'01', title:'Retention', body:'Most users lapse within weeks. Streaks, reminders and social pressure move the number.'},
      {n:'02', title:'Wearable data', body:'Device APIs disagree, sync late and report the same activity differently.'},
      {n:'03', title:'Background tracking', body:'Continuous tracking has to work without destroying battery life.'},
      {n:'04', title:'Trust in numbers', body:'Users abandon a product the moment its data contradicts their own sense of effort.'}
    ],
    builds:[
      {n:'01', title:'Training apps', body:'Programmes, progression and workout logging.'},
      {n:'02', title:'Class booking', body:'Schedules, capacity, waitlists and memberships.'},
      {n:'03', title:'Wearable integration', body:'Apple Health, Google Fit and device SDKs reconciled.'},
      {n:'04', title:'Community features', body:'Challenges, leaderboards and social accountability.'},
      {n:'05', title:'Coach platforms', body:'Client management, plan building and messaging.'},
      {n:'06', title:'Subscription billing', body:'Plans, pauses, trials and churn handling.'}
    ],
    tech:['React Native','Swift','Kotlin','Node.js','PostgreSQL','Firebase','HealthKit','Stripe'],
    approach:'We instrument the retention curve first and design against the week where users drop off. Wearable data gets reconciled through one normalisation layer so the product shows a single believable number.'
  }
];
