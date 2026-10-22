// 30 hireable roles (hire-data.js)
// Converted from the design's data file in /final-website; image paths point at
// /public instead of the live site.
export const groups = {
 "frontend": "Frontend",
 "backend": "Backend",
 "mobile": "Mobile",
 "fullstack": "Full-stack",
 "ai": "AI & data",
 "cloud": "Cloud & DevOps",
 "platforms": "Platforms",
 "design": "Design & QA",
 "lead": "Leadership"
};

export const roles = [
 {
  "slug": "react",
  "name": "React developers",
  "groupKey": "frontend",
  "group": "Frontend",
  "skills": [
   "React",
   "TypeScript",
   "Redux",
   "React Query",
   "Next.js"
  ],
  "uses": "Dashboards, SaaS front ends, design systems",
  "n": "01"
 },
 {
  "slug": "angular",
  "name": "Angular developers",
  "groupKey": "frontend",
  "group": "Frontend",
  "skills": [
   "Angular",
   "RxJS",
   "NgRx",
   "TypeScript"
  ],
  "uses": "Enterprise portals, admin tools",
  "n": "02"
 },
 {
  "slug": "vue",
  "name": "Vue.js developers",
  "groupKey": "frontend",
  "group": "Frontend",
  "skills": [
   "Vue 3",
   "Nuxt",
   "Pinia",
   "TypeScript"
  ],
  "uses": "Content sites, product UIs",
  "n": "03"
 },
 {
  "slug": "nextjs",
  "name": "Next.js developers",
  "groupKey": "frontend",
  "group": "Frontend",
  "skills": [
   "Next.js",
   "React",
   "SSR/ISR",
   "Vercel"
  ],
  "uses": "SEO-heavy sites, storefronts, SaaS",
  "n": "04"
 },
 {
  "slug": "nodejs",
  "name": "Node.js developers",
  "groupKey": "backend",
  "group": "Backend",
  "skills": [
   "Node.js",
   "NestJS",
   "Express",
   "PostgreSQL",
   "Redis"
  ],
  "uses": "APIs, real-time apps, microservices",
  "n": "05"
 },
 {
  "slug": "python",
  "name": "Python developers",
  "groupKey": "backend",
  "group": "Backend",
  "skills": [
   "Python",
   "Django",
   "FastAPI",
   "Celery"
  ],
  "uses": "APIs, data tools, AI backends",
  "n": "06"
 },
 {
  "slug": "java",
  "name": "Java developers",
  "groupKey": "backend",
  "group": "Backend",
  "skills": [
   "Java",
   "Spring Boot",
   "Kafka",
   "Microservices"
  ],
  "uses": "Banking, enterprise platforms",
  "n": "07"
 },
 {
  "slug": "dotnet",
  "name": ".NET developers",
  "groupKey": "backend",
  "group": "Backend",
  "skills": [
   "C#",
   ".NET 8",
   "ASP.NET Core",
   "Azure"
  ],
  "uses": "ERP, enterprise and Microsoft stacks",
  "n": "08"
 },
 {
  "slug": "php",
  "name": "PHP & Laravel developers",
  "groupKey": "backend",
  "group": "Backend",
  "skills": [
   "PHP 8",
   "Laravel",
   "MySQL",
   "Livewire"
  ],
  "uses": "Portals, CMS, marketplaces",
  "n": "09"
 },
 {
  "slug": "golang",
  "name": "Go developers",
  "groupKey": "backend",
  "group": "Backend",
  "skills": [
   "Go",
   "gRPC",
   "Kubernetes",
   "PostgreSQL"
  ],
  "uses": "High-throughput services, infra tools",
  "n": "10"
 },
 {
  "slug": "ios",
  "name": "iOS developers",
  "groupKey": "mobile",
  "group": "Mobile",
  "skills": [
   "Swift",
   "SwiftUI",
   "Combine",
   "Core Data"
  ],
  "uses": "Native iPhone and iPad apps",
  "n": "11"
 },
 {
  "slug": "android",
  "name": "Android developers",
  "groupKey": "mobile",
  "group": "Mobile",
  "skills": [
   "Kotlin",
   "Jetpack Compose",
   "Coroutines"
  ],
  "uses": "Native Android apps",
  "n": "12"
 },
 {
  "slug": "flutter",
  "name": "Flutter developers",
  "groupKey": "mobile",
  "group": "Mobile",
  "skills": [
   "Flutter",
   "Dart",
   "Riverpod",
   "Firebase"
  ],
  "uses": "Cross-platform apps from one codebase",
  "n": "13"
 },
 {
  "slug": "react-native",
  "name": "React Native developers",
  "groupKey": "mobile",
  "group": "Mobile",
  "skills": [
   "React Native",
   "TypeScript",
   "Expo"
  ],
  "uses": "Cross-platform apps sharing web code",
  "n": "14"
 },
 {
  "slug": "mern",
  "name": "MERN stack developers",
  "groupKey": "fullstack",
  "group": "Full-stack",
  "skills": [
   "MongoDB",
   "Express",
   "React",
   "Node.js"
  ],
  "uses": "MVPs, SaaS, internal tools",
  "n": "15"
 },
 {
  "slug": "fullstack-ts",
  "name": "Full-stack TypeScript developers",
  "groupKey": "fullstack",
  "group": "Full-stack",
  "skills": [
   "Next.js",
   "Node.js",
   "Prisma",
   "PostgreSQL"
  ],
  "uses": "End-to-end product features",
  "n": "16"
 },
 {
  "slug": "ai-engineer",
  "name": "AI engineers",
  "groupKey": "ai",
  "group": "AI & data",
  "skills": [
   "LLMs",
   "RAG",
   "LangChain",
   "vector DBs",
   "evals"
  ],
  "uses": "Copilots, agents, AI features",
  "n": "17"
 },
 {
  "slug": "ml-engineer",
  "name": "Machine learning engineers",
  "groupKey": "ai",
  "group": "AI & data",
  "skills": [
   "PyTorch",
   "scikit-learn",
   "MLflow",
   "SageMaker"
  ],
  "uses": "Forecasting, scoring, recommendations",
  "n": "18"
 },
 {
  "slug": "data-engineer",
  "name": "Data engineers",
  "groupKey": "ai",
  "group": "AI & data",
  "skills": [
   "Airflow",
   "dbt",
   "Snowflake",
   "BigQuery",
   "Kafka"
  ],
  "uses": "Pipelines, warehouses, analytics",
  "n": "19"
 },
 {
  "slug": "devops",
  "name": "DevOps engineers",
  "groupKey": "cloud",
  "group": "Cloud & DevOps",
  "skills": [
   "Terraform",
   "Kubernetes",
   "CI/CD",
   "Docker"
  ],
  "uses": "Pipelines, infrastructure, reliability",
  "n": "20"
 },
 {
  "slug": "aws",
  "name": "AWS engineers",
  "groupKey": "cloud",
  "group": "Cloud & DevOps",
  "skills": [
   "AWS",
   "CDK",
   "Lambda",
   "ECS",
   "RDS"
  ],
  "uses": "Migrations, serverless, cost control",
  "n": "21"
 },
 {
  "slug": "azure",
  "name": "Azure engineers",
  "groupKey": "cloud",
  "group": "Cloud & DevOps",
  "skills": [
   "Azure",
   "AKS",
   "Functions",
   "Entra ID"
  ],
  "uses": "Microsoft-stack cloud builds",
  "n": "22"
 },
 {
  "slug": "salesforce",
  "name": "Salesforce developers",
  "groupKey": "platforms",
  "group": "Platforms",
  "skills": [
   "Apex",
   "LWC",
   "Flows",
   "integrations"
  ],
  "uses": "CRM customisation and integration",
  "n": "23"
 },
 {
  "slug": "shopify",
  "name": "Shopify developers",
  "groupKey": "platforms",
  "group": "Platforms",
  "skills": [
   "Liquid",
   "Hydrogen",
   "Shopify apps"
  ],
  "uses": "Storefronts, custom apps",
  "n": "24"
 },
 {
  "slug": "blockchain",
  "name": "Blockchain developers",
  "groupKey": "platforms",
  "group": "Platforms",
  "skills": [
   "Solidity",
   "EVM",
   "Web3.js",
   "audits"
  ],
  "uses": "Smart contracts, wallets",
  "n": "25"
 },
 {
  "slug": "uiux",
  "name": "UI/UX designers",
  "groupKey": "design",
  "group": "Design & QA",
  "skills": [
   "Figma",
   "research",
   "prototyping",
   "design systems"
  ],
  "uses": "Product design, redesigns",
  "n": "26"
 },
 {
  "slug": "qa",
  "name": "QA automation engineers",
  "groupKey": "design",
  "group": "Design & QA",
  "skills": [
   "Playwright",
   "Appium",
   "Cypress",
   "k6"
  ],
  "uses": "Test automation, release gates",
  "n": "27"
 },
 {
  "slug": "architect",
  "name": "Solution architects",
  "groupKey": "lead",
  "group": "Leadership",
  "skills": [
   "System design",
   "cloud",
   "security",
   "reviews"
  ],
  "uses": "Architecture, audits, scale planning",
  "n": "28"
 },
 {
  "slug": "pm",
  "name": "Project managers",
  "groupKey": "lead",
  "group": "Leadership",
  "skills": [
   "Agile",
   "Scrum",
   "Jira",
   "delivery reporting"
  ],
  "uses": "Delivery for distributed teams",
  "n": "29"
 },
 {
  "slug": "ba",
  "name": "Business analysts",
  "groupKey": "lead",
  "group": "Leadership",
  "skills": [
   "Requirements",
   "process mapping",
   "UAT"
  ],
  "uses": "ERP, CRM and enterprise projects",
  "n": "30"
 }
];
