// Service detail pages, ported verbatim from the Mariox Software Site design.
export const services = [
  { slug:'product-engineering', name:'Product engineering', tag:'Discovery, architecture, build, handover', stage:0,
    label:'Service 01 / Product engineering',
    h1a:'Products built', h1b:'to be owned.',
    sub:'Full-cycle product work: the discovery that decides what to build, the architecture that survives contact with users, and a handover that leaves your team able to run it without us.',
    includes:[
      {n:'01', title:'Paid discovery', body:'A brief turned into architecture, a plan and a fixed number.'},
      {n:'02', title:'Architecture', body:'Data model, service boundaries and the decisions written down.'},
      {n:'03', title:'Build', body:'Two-week sprints, a demo at the end of each, a board open daily.'},
      {n:'04', title:'Release engineering', body:'Pipelines, environments and staged rollout from sprint one.'},
      {n:'05', title:'Observability', body:'Logging, metrics and alerting in place before real users arrive.'},
      {n:'06', title:'Handover', body:'Documentation and walkthroughs so your team can take it over.'}
    ],
    deliverables:[
      {n:'01', title:'Working software', body:'Deployed, monitored and in your cloud account.'},
      {n:'02', title:'Architecture record', body:'Decisions and their reasons, not just diagrams.'},
      {n:'03', title:'Test coverage', body:'Automated suites you can trust to gate a release.'},
      {n:'04', title:'Runbook', body:'What to do when something breaks at 3am.'}
    ],
    tech:['TypeScript','Node.js','React','PostgreSQL','Docker','Terraform','AWS','GitHub Actions'],
    approach:'Discovery is paid and short, because free discovery produces optimistic estimates. After that we work in two-week sprints with a demo at the end of every one, and you see the same board we do.'
  },
  { slug:'web-mobile', name:'Web & mobile', tag:'React, Next.js, React Native, Flutter', stage:1, href:'/web-and-app-development',
    label:'Service 02 / Web & mobile',
    h1a:'Interfaces', h1b:'that stay fast.',
    sub:'Web applications and native apps from first wireframe to store release, engineered to stay quick under load and easy to change six months later.',
    includes:[
      {n:'01', title:'Web applications', body:'Portals, dashboards and products built on React or Next.js.'},
      {n:'02', title:'Native mobile', body:'iOS and Android via React Native, Flutter or platform native.'},
      {n:'03', title:'Design systems', body:'Component libraries your team can extend without us.'},
      {n:'04', title:'Performance work', body:'Core Web Vitals, bundle budgets and render profiling.'},
      {n:'05', title:'Accessibility', body:'Keyboard, screen reader and contrast to WCAG AA.'},
      {n:'06', title:'Store release', body:'Submission, review handling and staged rollout.'}
    ],
    deliverables:[
      {n:'01', title:'Shipped app', body:'Live on the web or in both app stores.'},
      {n:'02', title:'Component library', body:'Documented and reusable across your products.'},
      {n:'03', title:'Performance budget', body:'Targets wired into CI so regressions fail the build.'},
      {n:'04', title:'Release pipeline', body:'Automated builds and signing you control.'}
    ],
    tech:['React','Next.js','TypeScript','React Native','Flutter','Tailwind','Vite','Playwright'],
    approach:'We set performance and accessibility budgets at the start and enforce them in CI, because both are cheap to hold and expensive to retrofit. Design and engineering work in the same sprint, not in sequence.'
  },
  { slug:'saas-platforms', name:'SaaS & platforms', tag:'Multi-tenancy, billing, scale', stage:2,
    label:'Service 03 / SaaS & platforms',
    h1a:'Platforms built', h1b:'for the thousandth customer.',
    sub:'Multi-tenancy, billing, onboarding and the operational tooling that decides whether a SaaS product is a business or a demo.',
    includes:[
      {n:'01', title:'Tenancy model', body:'Isolation, sharing and migration decided before launch.'},
      {n:'02', title:'Billing', body:'Plans, trials, proration, dunning and revenue reporting.'},
      {n:'03', title:'Onboarding', body:'Signup, provisioning and time-to-first-value flows.'},
      {n:'04', title:'Admin tooling', body:'The internal console your support team needs on day one.'},
      {n:'05', title:'Usage metering', body:'Limits, quotas and the data behind usage-based pricing.'},
      {n:'06', title:'Scale work', body:'Caching, queues and read replicas ahead of the curve.'}
    ],
    deliverables:[
      {n:'01', title:'Multi-tenant platform', body:'Provisioned, metered and billable.'},
      {n:'02', title:'Billing integration', body:'Reconciled against your provider, not approximated.'},
      {n:'03', title:'Admin console', body:'Support actions without database access.'},
      {n:'04', title:'Capacity plan', body:'What breaks first, and at what number.'}
    ],
    tech:['Next.js','Node.js','PostgreSQL','Redis','Stripe','Kubernetes','Terraform','Grafana'],
    approach:'The tenancy and billing model gets decided in week one, because both are painful to change later. We build the admin console early so support never needs production database access.'
  },
  { slug:'crm-erp', name:'CRM & ERP', tag:'Implementation, customisation, integration', stage:3,
    label:'Service 04 / CRM & ERP',
    h1a:'The systems', h1b:'your operations live in.',
    sub:'Implementation, customisation and the integration work that connects the systems your sales and operations teams use all day to everything else you own.',
    includes:[
      {n:'01', title:'Implementation', body:'Configuration and rollout fitted to your actual process.'},
      {n:'02', title:'Customisation', body:'Modules and workflows the standard product will not do.'},
      {n:'03', title:'Integration', body:'APIs and pipelines to finance, commerce and logistics.'},
      {n:'04', title:'Data migration', body:'Cleaned, mapped and rehearsed before cutover.'},
      {n:'05', title:'Reporting', body:'Dashboards built on one agreed definition of each metric.'},
      {n:'06', title:'Training', body:'Sessions and documentation so adoption actually happens.'}
    ],
    deliverables:[
      {n:'01', title:'Live system', body:'In use by the teams it was built for.'},
      {n:'02', title:'Integration map', body:'Every connection documented and monitored.'},
      {n:'03', title:'Migration record', body:'What moved, what did not, and why.'},
      {n:'04', title:'Training material', body:'Written for your process, not the vendor manual.'}
    ],
    tech:['.NET','Java / Spring','React','PostgreSQL','Azure','Kafka','Power BI','Terraform'],
    approach:'We map the current process before proposing the new one, run old and new in parallel where possible, and rehearse cutover until it is boring. Training and documentation are in scope, not an afterthought.'
  },
  { slug:'cloud-infrastructure', name:'Cloud & infrastructure', tag:'AWS, Azure, GCP, Kubernetes, IaC', stage:4,
    label:'Service 05 / Cloud & infrastructure',
    h1a:'Deployment', h1b:'stops being an event.',
    sub:'Migration, infrastructure as code, CI/CD and cost control, so releasing becomes routine and your cloud bill stops being a surprise.',
    includes:[
      {n:'01', title:'Cloud migration', body:'Staged, reversible moves to AWS, Azure or GCP.'},
      {n:'02', title:'Infrastructure as code', body:'Terraform modules, reviewed like application code.'},
      {n:'03', title:'CI/CD', body:'Build, test and deploy pipelines with real gates.'},
      {n:'04', title:'Kubernetes', body:'Clusters, autoscaling and workload isolation.'},
      {n:'05', title:'Observability', body:'Metrics, traces, logs and alerts that page a human.'},
      {n:'06', title:'Cost control', body:'Rightsizing, reserved capacity and per-team visibility.'}
    ],
    deliverables:[
      {n:'01', title:'Reproducible infrastructure', body:'Every environment created from code.'},
      {n:'02', title:'Deployment pipeline', body:'Push to production without a ceremony.'},
      {n:'03', title:'Monitoring stack', body:'Dashboards and alerts tied to real thresholds.'},
      {n:'04', title:'Cost baseline', body:'What you spend, on what, and where the waste is.'}
    ],
    tech:['AWS','Azure','GCP','Kubernetes','Terraform','Docker','Datadog','GitHub Actions'],
    approach:'Nothing is configured by hand. Every environment is created from the same code, so staging genuinely resembles production and a rollback is a deploy rather than a rescue operation.'
  },
  { slug:'design', name:'UI/UX & product design', tag:'Research, flows, interface systems', stage:1,
    label:'Service 06 / UI/UX & product design',
    h1a:'Design your engineers', h1b:'can actually build.',
    sub:'Research, flows, interface systems and prototypes, delivered as specifications rather than pictures. Design and engineering work in the same sprint, not in sequence.',
    includes:[
      {n:'01', title:'Product discovery', body:'Interviews, jobs-to-be-done and the problem worth solving.'},
      {n:'02', title:'Flows and wireframes', body:'Structure agreed before anything gets styled.'},
      {n:'03', title:'Interface design', body:'High-fidelity screens with real content and edge cases.'},
      {n:'04', title:'Design systems', body:'Tokens, components and rules your team can extend.'},
      {n:'05', title:'Prototypes', body:'Clickable builds you can put in front of users this week.'},
      {n:'06', title:'Usability testing', body:'Sessions with real users and a written list of fixes.'}
    ],
    deliverables:[
      {n:'01', title:'Design system', body:'Documented components, not a folder of artboards.'},
      {n:'02', title:'Annotated screens', body:'States, errors and empty cases specified.'},
      {n:'03', title:'Research findings', body:'What users actually did, with recordings.'},
      {n:'04', title:'Handover spec', body:'Spacing, behaviour and motion your devs can read.'}
    ],
    tech:['Figma','Design tokens','Storybook','Framer','Maze','Tailwind'],
    approach:'We design against real content and real constraints, including the ugly states most portfolios skip. Every screen ships with its loading, empty and error case, because those are where products actually fail.'
  },
  { slug:'qa-testing', name:'QA & test automation', tag:'Coverage, performance, security, release gates', stage:2,
    label:'Service 07 / QA & test automation',
    h1a:'Find it before', h1b:'your users do.',
    sub:'Manual and automated coverage, performance and security testing, and release gates that stop a bad build reaching production.',
    includes:[
      {n:'01', title:'Test strategy', body:'What to automate, what to test by hand, and why.'},
      {n:'02', title:'Automation suites', body:'Unit, integration and end-to-end running in CI.'},
      {n:'03', title:'Manual and exploratory', body:'Human testing where judgment beats a script.'},
      {n:'04', title:'Performance testing', body:'Load, soak and spike against realistic traffic.'},
      {n:'05', title:'Security testing', body:'OWASP coverage, dependency and penetration testing.'},
      {n:'06', title:'Release gates', body:'Quality thresholds that fail the build, not a meeting.'}
    ],
    deliverables:[
      {n:'01', title:'Automated suite', body:'Running on every commit, owned by your team.'},
      {n:'02', title:'Coverage report', body:'What is tested, what is not, and the risk.'},
      {n:'03', title:'Performance baseline', body:'Numbers to compare every future release against.'},
      {n:'04', title:'Defect register', body:'Prioritised, reproducible and tracked to closure.'}
    ],
    tech:['Playwright','Cypress','Jest','k6','JMeter','Appium','OWASP ZAP','GitHub Actions'],
    approach:'Automation goes where the risk and repetition are, not everywhere. We put quality gates in the pipeline so a failing build cannot be argued past, and we hand the suite to your team rather than keeping it.'
  },
  { slug:'data-analytics', name:'Data & analytics', tag:'Pipelines, warehousing, BI, reporting', stage:3,
    label:'Service 08 / Data & analytics',
    h1a:'One number', h1b:'everyone agrees on.',
    sub:'Pipelines, warehousing and reporting built on a single agreed definition of each metric, so your teams stop arguing about whose dashboard is right.',
    includes:[
      {n:'01', title:'Data pipelines', body:'Ingestion from your products, tools and third parties.'},
      {n:'02', title:'Warehouse modelling', body:'Facts, dimensions and a semantic layer that holds up.'},
      {n:'03', title:'Metric definitions', body:'One agreed formula per metric, version controlled.'},
      {n:'04', title:'Dashboards', body:'Reporting built for the decision, not the data.'},
      {n:'05', title:'Data quality', body:'Tests, freshness checks and alerts on the pipeline.'},
      {n:'06', title:'Self-serve access', body:'Tooling so analysts stop queuing behind engineering.'}
    ],
    deliverables:[
      {n:'01', title:'Working warehouse', body:'Modelled, tested and documented.'},
      {n:'02', title:'Metric layer', body:'Definitions in code, reviewed like any other change.'},
      {n:'03', title:'Dashboard set', body:'The reports your leadership actually opens.'},
      {n:'04', title:'Quality monitors', body:'Alerts before a stakeholder spots the gap.'}
    ],
    tech:['dbt','Airflow','Snowflake','BigQuery','PostgreSQL','Metabase','Power BI','Python'],
    approach:'We start from the decisions you need to make and work backwards to the data, which usually means building far fewer dashboards than requested. Metric definitions live in code so a change is reviewable.'
  },
  { slug:'blockchain', name:'Blockchain & Web3', tag:'Contracts, wallets, audits, tokenised systems', stage:0,
    label:'Service 09 / Blockchain & Web3',
    h1a:'On-chain systems,', h1b:'off-chain discipline.',
    sub:'Smart contracts, wallets and tokenised systems built with the same review, testing and audit standards we apply to anything holding money.',
    includes:[
      {n:'01', title:'Smart contracts', body:'Written, reviewed and tested before any deployment.'},
      {n:'02', title:'Wallet integration', body:'Custodial and non-custodial flows users can follow.'},
      {n:'03', title:'Token systems', body:'Issuance, distribution and vesting mechanics.'},
      {n:'04', title:'Audit preparation', body:'Documentation and fixes ahead of external audit.'},
      {n:'05', title:'Indexing and APIs', body:'On-chain data made queryable for your product.'},
      {n:'06', title:'Off-chain services', body:'The conventional backend most Web3 products still need.'}
    ],
    deliverables:[
      {n:'01', title:'Deployed contracts', body:'Verified, documented and version tagged.'},
      {n:'02', title:'Test suite', body:'Including adversarial and edge-case scenarios.'},
      {n:'03', title:'Audit-ready package', body:'Specification, threat model and known tradeoffs.'},
      {n:'04', title:'Integration layer', body:'APIs your existing product can consume.'}
    ],
    tech:['Solidity','Hardhat','Foundry','ethers.js','The Graph','Node.js','IPFS'],
    approach:'Contracts are immutable once deployed, so review and testing come before enthusiasm. We are equally willing to tell you the problem does not need a chain, which is often the honest answer.'
  },
  { slug:'managed-it', name:'Managed IT & support', tag:'Monitoring, helpdesk, patching, incident response', stage:4,
    label:'Service 10 / Managed IT & support',
    h1a:'Someone awake', h1b:'when it breaks.',
    sub:'Monitoring, helpdesk, patching and incident response, so your internal team can work on the roadmap instead of the queue.',
    includes:[
      {n:'01', title:'Monitoring', body:'Uptime, performance and error tracking with real alerts.'},
      {n:'02', title:'Helpdesk', body:'Tiered support with defined response and resolution SLAs.'},
      {n:'03', title:'Patching', body:'Operating systems, dependencies and security updates.'},
      {n:'04', title:'Incident response', body:'On-call rotation, escalation and written postmortems.'},
      {n:'05', title:'Backup and recovery', body:'Tested restores, not just scheduled backups.'},
      {n:'06', title:'Improvement plan', body:'Quarterly review of what keeps breaking, and why.'}
    ],
    deliverables:[
      {n:'01', title:'Coverage schedule', body:'Who is on, when, and what they can action.'},
      {n:'02', title:'SLA report', body:'Response and resolution times, published monthly.'},
      {n:'03', title:'Postmortems', body:'Root cause and the fix, for every real incident.'},
      {n:'04', title:'Recovery plan', body:'Rehearsed, timed and documented.'}
    ],
    tech:['Datadog','Grafana','PagerDuty','Zabbix','Ansible','Terraform','Jira Service Management'],
    approach:'We measure response and resolution and publish both, including the months we miss. Recurring incidents get engineering time rather than another runbook entry, because a queue that never shrinks is a design problem.'
  }
];
