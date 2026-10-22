// 20 AI services (ai-data.js)
// Converted from the design's data file in /final-website; image paths point at
// /public instead of the live site.
export const groups = {
 "build": "Build with AI",
 "gen": "Generative AI",
 "agents": "Agents & automation",
 "perceive": "Vision, voice & documents",
 "data": "Data & machine learning",
 "strat": "Strategy & governance"
};

export const aiServices = [
 {
  "slug": "ai-development",
  "name": "AI development",
  "groupKey": "build",
  "group": "Build with AI",
  "hook": "Production AI, not demos.",
  "sub": "Custom AI features and products designed, built, evaluated and run by one senior team.",
  "problems": [
   {
    "t": "Demo-to-production gap",
    "b": "Most AI pilots never survive real users, real data and real costs."
   },
   {
    "t": "Unclear ROI",
    "b": "Teams build what the model can do, not what the business needs."
   },
   {
    "t": "No evaluation",
    "b": "Without tests, nobody knows if the next change made it worse."
   }
  ],
  "builds": [
   {
    "t": "AI feature build",
    "b": "Assistants, search and automation inside your product."
   },
   {
    "t": "Model selection",
    "b": "The right model per task, measured on your data."
   },
   {
    "t": "Evaluation suite",
    "b": "Automated tests for accuracy, safety and cost."
   },
   {
    "t": "Production infra",
    "b": "Caching, fallbacks, rate limits and monitoring."
   },
   {
    "t": "Cost control",
    "b": "Token budgets, routing and caching that cut spend."
   },
   {
    "t": "Handover",
    "b": "Docs, dashboards and runbooks your team can own."
   }
  ],
  "uses": [
   {
    "ind": "Fintech",
    "t": "Fraud explanations and dispute triage"
   },
   {
    "ind": "Healthcare",
    "t": "Clinical note summaries for doctors"
   },
   {
    "ind": "E-commerce",
    "t": "Product Q&A and size advice"
   },
   {
    "ind": "Logistics",
    "t": "Exception handling for late shipments"
   },
   {
    "ind": "Education",
    "t": "Personalised practice questions"
   },
   {
    "ind": "Enterprise",
    "t": "Internal knowledge assistant"
   }
  ],
  "stack": [
   "OpenAI",
   "Claude",
   "Llama",
   "LangChain",
   "pgvector",
   "Python"
  ],
  "time": "6–12 weeks",
  "n": "01"
 },
 {
  "slug": "ai-product-engineering",
  "name": "AI product engineering",
  "groupKey": "build",
  "group": "Build with AI",
  "hook": "Products where AI is the product.",
  "sub": "New AI-native products from idea to launch: UX, models, backend and growth.",
  "problems": [
   {
    "t": "AI UX is new",
    "b": "Chat is not always the right interface."
   },
   {
    "t": "Moving models",
    "b": "Model prices and abilities change every quarter."
   },
   {
    "t": "Trust",
    "b": "Users need to see why the AI did what it did."
   }
  ],
  "builds": [
   {
    "t": "Product discovery",
    "b": "Find the use case people will pay for."
   },
   {
    "t": "AI-native UX",
    "b": "Interfaces for uncertainty, streaming and review."
   },
   {
    "t": "Model layer",
    "b": "Provider-agnostic, swappable model routing."
   },
   {
    "t": "Backend & data",
    "b": "APIs, vector stores and user data."
   },
   {
    "t": "Launch & metrics",
    "b": "Activation, quality and cost dashboards."
   },
   {
    "t": "Iteration loop",
    "b": "Feedback captured and turned into evals."
   }
  ],
  "uses": [
   {
    "ind": "Startups",
    "t": "AI writing and research tools"
   },
   {
    "ind": "Legal",
    "t": "Contract review products"
   },
   {
    "ind": "HR",
    "t": "Interview and screening assistants"
   },
   {
    "ind": "Real estate",
    "t": "Listing description generators"
   },
   {
    "ind": "Media",
    "t": "AI video and caption tools"
   },
   {
    "ind": "Education",
    "t": "AI tutors"
   }
  ],
  "stack": [
   "Next.js",
   "Python",
   "OpenAI",
   "Claude",
   "Supabase",
   "Vercel"
  ],
  "time": "8–16 weeks",
  "n": "02"
 },
 {
  "slug": "ai-integration",
  "name": "AI integration",
  "groupKey": "build",
  "group": "Build with AI",
  "hook": "Add AI to the systems you already run.",
  "sub": "AI connected into your CRM, ERP, support desk and apps, without a rebuild.",
  "problems": [
   {
    "t": "Data silos",
    "b": "The useful data sits in five different systems."
   },
   {
    "t": "Security",
    "b": "Sensitive data cannot leak to public models."
   },
   {
    "t": "Adoption",
    "b": "AI tools outside the workflow do not get used."
   }
  ],
  "builds": [
   {
    "t": "System audit",
    "b": "Where AI saves the most time, ranked."
   },
   {
    "t": "Connectors",
    "b": "CRM, ERP, helpdesk and database integrations."
   },
   {
    "t": "Private deployment",
    "b": "Azure OpenAI, Bedrock or self-hosted models."
   },
   {
    "t": "Access controls",
    "b": "Users see only what they are allowed to."
   },
   {
    "t": "Workflow embedding",
    "b": "AI inside the screens teams already use."
   },
   {
    "t": "Monitoring",
    "b": "Usage, quality and cost per team."
   }
  ],
  "uses": [
   {
    "ind": "Sales",
    "t": "CRM summaries and next-step suggestions"
   },
   {
    "ind": "Support",
    "t": "Reply drafts inside the helpdesk"
   },
   {
    "ind": "Finance",
    "t": "Invoice matching in the ERP"
   },
   {
    "ind": "HR",
    "t": "Policy answers in Slack or Teams"
   },
   {
    "ind": "Operations",
    "t": "Report generation from dashboards"
   },
   {
    "ind": "Retail",
    "t": "Inventory questions in plain language"
   }
  ],
  "stack": [
   "Azure OpenAI",
   "AWS Bedrock",
   "Salesforce",
   "HubSpot",
   "Zapier",
   "Node.js"
  ],
  "time": "4–10 weeks",
  "n": "03"
 },
 {
  "slug": "generative-ai",
  "name": "Generative AI development",
  "groupKey": "gen",
  "group": "Generative AI",
  "hook": "Text, images and code, generated on brand.",
  "sub": "Generative AI features for content, design, code and communication, with guardrails.",
  "problems": [
   {
    "t": "Brand risk",
    "b": "Generated content must sound like you, every time."
   },
   {
    "t": "Hallucination",
    "b": "Wrong facts in customer-facing text are expensive."
   },
   {
    "t": "Scale",
    "b": "Generating one thing is easy; a million is not."
   }
  ],
  "builds": [
   {
    "t": "Content generation",
    "b": "Copy, descriptions and emails on brand."
   },
   {
    "t": "Image & media",
    "b": "Images, banners and video assets."
   },
   {
    "t": "Code generation",
    "b": "Internal tools that write and review code."
   },
   {
    "t": "Personalisation",
    "b": "Messages tailored per user or segment."
   },
   {
    "t": "Guardrails",
    "b": "Fact checks, filters and approval steps."
   },
   {
    "t": "Pipelines",
    "b": "Batch generation with quality sampling."
   }
  ],
  "uses": [
   {
    "ind": "E-commerce",
    "t": "Product descriptions at catalogue scale"
   },
   {
    "ind": "Marketing",
    "t": "Ad variants and landing copy"
   },
   {
    "ind": "Media",
    "t": "Article summaries and headlines"
   },
   {
    "ind": "Real estate",
    "t": "Listing copy and floor plan notes"
   },
   {
    "ind": "Education",
    "t": "Lesson and quiz generation"
   },
   {
    "ind": "Software",
    "t": "Test and documentation generation"
   }
  ],
  "stack": [
   "OpenAI",
   "Claude",
   "Gemini",
   "Stable Diffusion",
   "LangChain",
   "Python"
  ],
  "time": "4–10 weeks",
  "n": "04"
 },
 {
  "slug": "rag",
  "name": "RAG & knowledge search",
  "groupKey": "gen",
  "group": "Generative AI",
  "hook": "Answers from your data, with sources.",
  "sub": "Retrieval systems that answer questions from your documents and databases, and show where every answer came from.",
  "problems": [
   {
    "t": "Scattered knowledge",
    "b": "Policies, manuals and tickets spread across tools."
   },
   {
    "t": "Wrong answers",
    "b": "Models invent facts when retrieval is weak."
   },
   {
    "t": "Permissions",
    "b": "Not every user should see every document."
   }
  ],
  "builds": [
   {
    "t": "Ingestion pipeline",
    "b": "PDFs, sites, drives and databases indexed."
   },
   {
    "t": "Chunking & embeddings",
    "b": "Tuned for your content type."
   },
   {
    "t": "Hybrid search",
    "b": "Keyword and vector search combined."
   },
   {
    "t": "Cited answers",
    "b": "Every answer links to its source."
   },
   {
    "t": "Access-aware retrieval",
    "b": "Results filtered by user permissions."
   },
   {
    "t": "Quality evals",
    "b": "Measured answer accuracy before launch."
   }
  ],
  "uses": [
   {
    "ind": "Enterprise",
    "t": "Employee knowledge assistant"
   },
   {
    "ind": "Legal",
    "t": "Clause search across contracts"
   },
   {
    "ind": "Healthcare",
    "t": "Protocol and guideline lookup"
   },
   {
    "ind": "Support",
    "t": "Answers from manuals and past tickets"
   },
   {
    "ind": "Insurance",
    "t": "Policy wording questions"
   },
   {
    "ind": "Education",
    "t": "Course-material Q&A"
   }
  ],
  "stack": [
   "pgvector",
   "Pinecone",
   "LlamaIndex",
   "OpenAI",
   "Claude",
   "Elasticsearch"
  ],
  "time": "4–8 weeks",
  "n": "05"
 },
 {
  "slug": "llm-fine-tuning",
  "name": "LLM fine-tuning",
  "groupKey": "gen",
  "group": "Generative AI",
  "hook": "A model that speaks your domain.",
  "sub": "Fine-tuned and distilled models for tasks where general models are too slow, costly or vague.",
  "problems": [
   {
    "t": "Cost at scale",
    "b": "Large models are expensive for high-volume tasks."
   },
   {
    "t": "Domain language",
    "b": "General models miss industry terms."
   },
   {
    "t": "Latency",
    "b": "Some tasks need answers in milliseconds."
   }
  ],
  "builds": [
   {
    "t": "Dataset building",
    "b": "Clean, labelled training data from your records."
   },
   {
    "t": "Fine-tuning",
    "b": "Supervised and preference tuning."
   },
   {
    "t": "Distillation",
    "b": "Smaller, cheaper models from larger ones."
   },
   {
    "t": "Benchmarking",
    "b": "Before-and-after accuracy and cost."
   },
   {
    "t": "Deployment",
    "b": "Hosted on your cloud or a provider."
   },
   {
    "t": "Retraining loop",
    "b": "Scheduled updates as data grows."
   }
  ],
  "uses": [
   {
    "ind": "Fintech",
    "t": "Transaction categorisation"
   },
   {
    "ind": "Healthcare",
    "t": "Medical coding suggestions"
   },
   {
    "ind": "E-commerce",
    "t": "Product attribute extraction"
   },
   {
    "ind": "Legal",
    "t": "Clause classification"
   },
   {
    "ind": "Support",
    "t": "Ticket routing"
   },
   {
    "ind": "Telecom",
    "t": "Intent detection"
   }
  ],
  "stack": [
   "PyTorch",
   "Hugging Face",
   "Llama",
   "Mistral",
   "OpenAI fine-tuning",
   "AWS SageMaker"
  ],
  "time": "6–12 weeks",
  "n": "06"
 },
 {
  "slug": "ai-agents",
  "name": "AI agent development",
  "groupKey": "agents",
  "group": "Agents & automation",
  "hook": "Software that does the work, not just the talking.",
  "sub": "Agents that plan, use tools and complete multi-step tasks across your systems, with people in the loop.",
  "problems": [
   {
    "t": "Reliability",
    "b": "Agents fail silently when a step goes wrong."
   },
   {
    "t": "Control",
    "b": "Businesses need approval steps and limits."
   },
   {
    "t": "Tool access",
    "b": "Agents need safe access to real systems."
   }
  ],
  "builds": [
   {
    "t": "Agent design",
    "b": "Goals, tools, limits and escalation rules."
   },
   {
    "t": "Tool integrations",
    "b": "APIs, databases and browsers the agent can use."
   },
   {
    "t": "Human-in-the-loop",
    "b": "Approval steps for risky actions."
   },
   {
    "t": "Multi-agent systems",
    "b": "Specialist agents that hand off work."
   },
   {
    "t": "Observability",
    "b": "Every step, call and decision logged."
   },
   {
    "t": "Safety tests",
    "b": "Red-teaming and failure-mode tests."
   }
  ],
  "uses": [
   {
    "ind": "Sales",
    "t": "Lead research and outreach drafts"
   },
   {
    "ind": "Finance",
    "t": "Invoice processing and reconciliation"
   },
   {
    "ind": "Recruiting",
    "t": "Candidate screening and scheduling"
   },
   {
    "ind": "Support",
    "t": "Refunds and order changes end to end"
   },
   {
    "ind": "Operations",
    "t": "Vendor follow-ups"
   },
   {
    "ind": "IT",
    "t": "Access requests and resets"
   }
  ],
  "stack": [
   "LangGraph",
   "OpenAI Agents",
   "Claude",
   "Temporal",
   "Python",
   "Postgres"
  ],
  "time": "6–12 weeks",
  "n": "07"
 },
 {
  "slug": "ai-copilots",
  "name": "AI copilots",
  "groupKey": "agents",
  "group": "Agents & automation",
  "hook": "An expert beside every user.",
  "sub": "In-product copilots that help users write, analyse, decide and act faster.",
  "problems": [
   {
    "t": "Context",
    "b": "A copilot is only useful if it knows the user’s data."
   },
   {
    "t": "Interruption",
    "b": "Help must appear at the right moment."
   },
   {
    "t": "Measuring value",
    "b": "Usage is not the same as time saved."
   }
  ],
  "builds": [
   {
    "t": "Copilot UX",
    "b": "Side panels, inline suggestions and commands."
   },
   {
    "t": "Context engine",
    "b": "User, account and document context."
   },
   {
    "t": "Actions",
    "b": "Copilot can fill forms and run tasks."
   },
   {
    "t": "Personalisation",
    "b": "Learns preferences over time."
   },
   {
    "t": "Analytics",
    "b": "Time saved and adoption per feature."
   },
   {
    "t": "Admin controls",
    "b": "What the copilot can see and do."
   }
  ],
  "uses": [
   {
    "ind": "SaaS",
    "t": "In-app help and setup guidance"
   },
   {
    "ind": "Finance",
    "t": "Analyst report drafting"
   },
   {
    "ind": "Healthcare",
    "t": "Clinician documentation"
   },
   {
    "ind": "Sales",
    "t": "Call prep and follow-ups"
   },
   {
    "ind": "Legal",
    "t": "Drafting and redlining"
   },
   {
    "ind": "Engineering",
    "t": "Code review assistant"
   }
  ],
  "stack": [
   "OpenAI",
   "Claude",
   "React",
   "Node.js",
   "pgvector",
   "Segment"
  ],
  "time": "6–10 weeks",
  "n": "08"
 },
 {
  "slug": "ai-chatbots",
  "name": "AI chatbot development",
  "groupKey": "agents",
  "group": "Agents & automation",
  "hook": "Support that resolves, not deflects.",
  "sub": "Customer and employee chatbots on web, app and WhatsApp that answer, act and hand over cleanly.",
  "problems": [
   {
    "t": "Old bots frustrate",
    "b": "Scripted bots trap customers in loops."
   },
   {
    "t": "Handover",
    "b": "Escalation to humans loses context."
   },
   {
    "t": "Channels",
    "b": "Customers use web, app and WhatsApp interchangeably."
   }
  ],
  "builds": [
   {
    "t": "Web & app chat",
    "b": "Embedded chat with your brand."
   },
   {
    "t": "WhatsApp bots",
    "b": "Business API flows and templates."
   },
   {
    "t": "Knowledge base",
    "b": "Answers from your docs and FAQs."
   },
   {
    "t": "Actions",
    "b": "Order status, bookings and refunds."
   },
   {
    "t": "Human handover",
    "b": "Full context passed to agents."
   },
   {
    "t": "Analytics",
    "b": "Resolution rate and unanswered questions."
   }
  ],
  "uses": [
   {
    "ind": "E-commerce",
    "t": "Order tracking and returns"
   },
   {
    "ind": "Banking",
    "t": "Balance and card queries"
   },
   {
    "ind": "Healthcare",
    "t": "Appointment booking"
   },
   {
    "ind": "Travel",
    "t": "Booking changes"
   },
   {
    "ind": "Real estate",
    "t": "Lead qualification on WhatsApp"
   },
   {
    "ind": "Education",
    "t": "Admission enquiries"
   }
  ],
  "stack": [
   "OpenAI",
   "Claude",
   "WhatsApp API",
   "Twilio",
   "Node.js",
   "React"
  ],
  "time": "4–8 weeks",
  "n": "09"
 },
 {
  "slug": "voice-agents",
  "name": "AI voice agents",
  "groupKey": "agents",
  "group": "Agents & automation",
  "hook": "Phone calls, handled.",
  "sub": "Voice agents that answer, qualify and book over the phone in natural conversation, in multiple languages.",
  "problems": [
   {
    "t": "Missed calls",
    "b": "Every unanswered call is a lost customer."
   },
   {
    "t": "Latency",
    "b": "Voice needs replies in under a second."
   },
   {
    "t": "Languages",
    "b": "Customers switch between languages mid-call."
   }
  ],
  "builds": [
   {
    "t": "Inbound agents",
    "b": "Answer, route and resolve calls."
   },
   {
    "t": "Outbound agents",
    "b": "Reminders, follow-ups and surveys."
   },
   {
    "t": "Telephony",
    "b": "SIP, Twilio and Exotel integration."
   },
   {
    "t": "Multilingual",
    "b": "Hindi, English and regional languages."
   },
   {
    "t": "CRM sync",
    "b": "Calls logged with summaries."
   },
   {
    "t": "Quality review",
    "b": "Recordings, transcripts and scores."
   }
  ],
  "uses": [
   {
    "ind": "Healthcare",
    "t": "Appointment booking and reminders"
   },
   {
    "ind": "Real estate",
    "t": "Lead calls and site-visit booking"
   },
   {
    "ind": "Lending",
    "t": "Payment reminders"
   },
   {
    "ind": "Restaurants",
    "t": "Table reservations"
   },
   {
    "ind": "Logistics",
    "t": "Delivery confirmation"
   },
   {
    "ind": "Insurance",
    "t": "Renewal calls"
   }
  ],
  "stack": [
   "OpenAI Realtime",
   "Deepgram",
   "ElevenLabs",
   "Twilio",
   "Exotel",
   "Python"
  ],
  "time": "4–8 weeks",
  "n": "10"
 },
 {
  "slug": "ai-automation",
  "name": "AI workflow automation",
  "groupKey": "agents",
  "group": "Agents & automation",
  "hook": "Remove the copy-paste work.",
  "sub": "Automation that reads, decides and routes work across your tools, with every step logged.",
  "problems": [
   {
    "t": "Manual handoffs",
    "b": "People copy data between systems all day."
   },
   {
    "t": "Exceptions",
    "b": "Rules break when inputs vary."
   },
   {
    "t": "Audit",
    "b": "Automated work still needs a paper trail."
   }
  ],
  "builds": [
   {
    "t": "Process mapping",
    "b": "Find the hours worth automating."
   },
   {
    "t": "AI decisions",
    "b": "Classify, extract and route with models."
   },
   {
    "t": "Integrations",
    "b": "Email, sheets, CRM, ERP and APIs."
   },
   {
    "t": "Exception queues",
    "b": "Unclear cases go to people."
   },
   {
    "t": "Audit logs",
    "b": "Every action recorded."
   },
   {
    "t": "ROI tracking",
    "b": "Hours and cost saved per workflow."
   }
  ],
  "uses": [
   {
    "ind": "Finance",
    "t": "Invoice and expense processing"
   },
   {
    "ind": "HR",
    "t": "Onboarding paperwork"
   },
   {
    "ind": "Sales",
    "t": "Lead enrichment and routing"
   },
   {
    "ind": "Operations",
    "t": "Order entry from emails"
   },
   {
    "ind": "Insurance",
    "t": "Claim intake"
   },
   {
    "ind": "Logistics",
    "t": "Shipment document checks"
   }
  ],
  "stack": [
   "n8n",
   "Temporal",
   "OpenAI",
   "Python",
   "Zapier",
   "Postgres"
  ],
  "time": "3–8 weeks",
  "n": "11"
 },
 {
  "slug": "rpa",
  "name": "RPA development",
  "groupKey": "agents",
  "group": "Agents & automation",
  "hook": "Bots for the systems without APIs.",
  "sub": "Robotic process automation for legacy screens and portals, upgraded with AI where rules are not enough.",
  "problems": [
   {
    "t": "Legacy systems",
    "b": "Old software has no APIs to connect to."
   },
   {
    "t": "Fragile bots",
    "b": "Screen changes break traditional RPA."
   },
   {
    "t": "Scale",
    "b": "Hundreds of bots are hard to manage."
   }
  ],
  "builds": [
   {
    "t": "Bot development",
    "b": "UI automation for legacy apps."
   },
   {
    "t": "AI-assisted RPA",
    "b": "Models handle unstructured inputs."
   },
   {
    "t": "Orchestration",
    "b": "Scheduling, queues and retries."
   },
   {
    "t": "Monitoring",
    "b": "Bot health and failure alerts."
   },
   {
    "t": "Migration",
    "b": "Move bots to APIs over time."
   },
   {
    "t": "Governance",
    "b": "Bot inventory and access control."
   }
  ],
  "uses": [
   {
    "ind": "Banking",
    "t": "Account opening across old systems"
   },
   {
    "ind": "Insurance",
    "t": "Policy admin data entry"
   },
   {
    "ind": "Healthcare",
    "t": "Claims portal submissions"
   },
   {
    "ind": "Government",
    "t": "Form processing"
   },
   {
    "ind": "Manufacturing",
    "t": "ERP data entry"
   },
   {
    "ind": "Telecom",
    "t": "Order provisioning"
   }
  ],
  "stack": [
   "UiPath",
   "Power Automate",
   "Playwright",
   "Python",
   "OpenAI"
  ],
  "time": "4–10 weeks",
  "n": "12"
 },
 {
  "slug": "computer-vision",
  "name": "Computer vision",
  "groupKey": "perceive",
  "group": "Vision, voice & documents",
  "hook": "Cameras that understand what they see.",
  "sub": "Vision systems for inspection, counting, safety and identity, on cloud or edge devices.",
  "problems": [
   {
    "t": "Real-world conditions",
    "b": "Lighting, angles and motion break lab models."
   },
   {
    "t": "Edge limits",
    "b": "Factory and store devices have little compute."
   },
   {
    "t": "Labelled data",
    "b": "Most teams do not have training images ready."
   }
  ],
  "builds": [
   {
    "t": "Data collection",
    "b": "Image capture and labelling plans."
   },
   {
    "t": "Model training",
    "b": "Detection, segmentation and classification."
   },
   {
    "t": "Edge deployment",
    "b": "Models on cameras and devices."
   },
   {
    "t": "Dashboards",
    "b": "Alerts, counts and trends."
   },
   {
    "t": "Integration",
    "b": "Results sent to ERP or ops tools."
   },
   {
    "t": "Retraining",
    "b": "New images improve the model."
   }
  ],
  "uses": [
   {
    "ind": "Manufacturing",
    "t": "Defect detection on the line"
   },
   {
    "ind": "Retail",
    "t": "Shelf and stock monitoring"
   },
   {
    "ind": "Construction",
    "t": "Safety gear checks"
   },
   {
    "ind": "Logistics",
    "t": "Parcel damage detection"
   },
   {
    "ind": "Agriculture",
    "t": "Crop disease spotting"
   },
   {
    "ind": "Fintech",
    "t": "ID and selfie verification"
   }
  ],
  "stack": [
   "PyTorch",
   "YOLO",
   "OpenCV",
   "NVIDIA Jetson",
   "AWS",
   "Python"
  ],
  "time": "8–16 weeks",
  "n": "13"
 },
 {
  "slug": "document-ai",
  "name": "Document AI & OCR",
  "groupKey": "perceive",
  "group": "Vision, voice & documents",
  "hook": "Paper in, structured data out.",
  "sub": "Reading, classifying and extracting data from invoices, forms, IDs and contracts, at volume.",
  "problems": [
   {
    "t": "Variety",
    "b": "Every supplier’s invoice looks different."
   },
   {
    "t": "Accuracy",
    "b": "A wrong number in finance is costly."
   },
   {
    "t": "Volume",
    "b": "Thousands of documents a day."
   }
  ],
  "builds": [
   {
    "t": "Classification",
    "b": "Sort documents by type automatically."
   },
   {
    "t": "Extraction",
    "b": "Fields, tables and line items."
   },
   {
    "t": "Validation",
    "b": "Rules and cross-checks on extracted data."
   },
   {
    "t": "Review queue",
    "b": "People check low-confidence fields."
   },
   {
    "t": "Integration",
    "b": "Data pushed to ERP, CRM or DB."
   },
   {
    "t": "Accuracy reports",
    "b": "Field-level accuracy tracked."
   }
  ],
  "uses": [
   {
    "ind": "Finance",
    "t": "Invoice and receipt capture"
   },
   {
    "ind": "Lending",
    "t": "Bank statement analysis"
   },
   {
    "ind": "Insurance",
    "t": "Claim document intake"
   },
   {
    "ind": "Healthcare",
    "t": "Lab report digitisation"
   },
   {
    "ind": "Logistics",
    "t": "Bills of lading"
   },
   {
    "ind": "Legal",
    "t": "Contract data extraction"
   }
  ],
  "stack": [
   "Azure Document Intelligence",
   "AWS Textract",
   "OpenAI",
   "Claude",
   "Python"
  ],
  "time": "4–8 weeks",
  "n": "14"
 },
 {
  "slug": "speech-ai",
  "name": "Speech & conversation AI",
  "groupKey": "perceive",
  "group": "Vision, voice & documents",
  "hook": "Every call, transcribed and understood.",
  "sub": "Transcription, call analytics and meeting intelligence across languages.",
  "problems": [
   {
    "t": "Unheard calls",
    "b": "Managers review a tiny sample of calls."
   },
   {
    "t": "Accents & languages",
    "b": "Generic speech models miss local speech."
   },
   {
    "t": "Compliance",
    "b": "Calls must be checked for required statements."
   }
  ],
  "builds": [
   {
    "t": "Transcription",
    "b": "Accurate, speaker-labelled text."
   },
   {
    "t": "Call analytics",
    "b": "Sentiment, topics and outcomes."
   },
   {
    "t": "Compliance checks",
    "b": "Required phrases detected."
   },
   {
    "t": "Summaries",
    "b": "Action items after every call."
   },
   {
    "t": "Search",
    "b": "Find any moment across recordings."
   },
   {
    "t": "Coaching",
    "b": "Scorecards for sales and support."
   }
  ],
  "uses": [
   {
    "ind": "Sales",
    "t": "Call scoring and coaching"
   },
   {
    "ind": "Lending",
    "t": "Collections compliance"
   },
   {
    "ind": "Healthcare",
    "t": "Consultation notes"
   },
   {
    "ind": "Support",
    "t": "Quality assurance"
   },
   {
    "ind": "Education",
    "t": "Lecture transcripts"
   },
   {
    "ind": "Media",
    "t": "Podcast and video captions"
   }
  ],
  "stack": [
   "Whisper",
   "Deepgram",
   "AssemblyAI",
   "OpenAI",
   "Python"
  ],
  "time": "4–8 weeks",
  "n": "15"
 },
 {
  "slug": "machine-learning",
  "name": "Machine learning development",
  "groupKey": "data",
  "group": "Data & machine learning",
  "hook": "Predictions your business can act on.",
  "sub": "Custom ML models for forecasting, scoring, recommendation and detection, deployed and monitored.",
  "problems": [
   {
    "t": "Data quality",
    "b": "Models are only as good as the data behind them."
   },
   {
    "t": "Explainability",
    "b": "Business teams need to understand predictions."
   },
   {
    "t": "Drift",
    "b": "Models degrade as the world changes."
   }
  ],
  "builds": [
   {
    "t": "Feature engineering",
    "b": "Signals built from your data."
   },
   {
    "t": "Model training",
    "b": "Forecasting, classification and ranking."
   },
   {
    "t": "Explainability",
    "b": "Reasons behind each prediction."
   },
   {
    "t": "MLOps",
    "b": "Pipelines, versioning and deployment."
   },
   {
    "t": "Monitoring",
    "b": "Accuracy and drift alerts."
   },
   {
    "t": "A/B testing",
    "b": "Measured business impact."
   }
  ],
  "uses": [
   {
    "ind": "Fintech",
    "t": "Credit scoring"
   },
   {
    "ind": "E-commerce",
    "t": "Recommendations"
   },
   {
    "ind": "Retail",
    "t": "Demand forecasting"
   },
   {
    "ind": "Insurance",
    "t": "Claim fraud scores"
   },
   {
    "ind": "Telecom",
    "t": "Churn prediction"
   },
   {
    "ind": "Logistics",
    "t": "ETA prediction"
   }
  ],
  "stack": [
   "Python",
   "scikit-learn",
   "XGBoost",
   "PyTorch",
   "MLflow",
   "AWS SageMaker"
  ],
  "time": "8–16 weeks",
  "n": "16"
 },
 {
  "slug": "predictive-analytics",
  "name": "Predictive analytics",
  "groupKey": "data",
  "group": "Data & machine learning",
  "hook": "See next quarter, this quarter.",
  "sub": "Forecasts and risk scores built into dashboards and workflows leadership already uses.",
  "problems": [
   {
    "t": "Spreadsheet forecasts",
    "b": "Plans built on last year plus a guess."
   },
   {
    "t": "Too many dashboards",
    "b": "Insight lost in reports nobody opens."
   },
   {
    "t": "Trust",
    "b": "Leaders ignore numbers they cannot explain."
   }
  ],
  "builds": [
   {
    "t": "Forecast models",
    "b": "Sales, demand and cash flow."
   },
   {
    "t": "Risk scores",
    "b": "Churn, default and fraud risk."
   },
   {
    "t": "Scenario tools",
    "b": "What-if planning."
   },
   {
    "t": "Dashboards",
    "b": "Predictions in BI tools."
   },
   {
    "t": "Alerts",
    "b": "Notifications when numbers move."
   },
   {
    "t": "Accuracy tracking",
    "b": "Forecast versus actual."
   }
  ],
  "uses": [
   {
    "ind": "Retail",
    "t": "Store-level demand"
   },
   {
    "ind": "Manufacturing",
    "t": "Maintenance prediction"
   },
   {
    "ind": "SaaS",
    "t": "Churn and expansion"
   },
   {
    "ind": "Healthcare",
    "t": "Appointment no-shows"
   },
   {
    "ind": "Energy",
    "t": "Load forecasting"
   },
   {
    "ind": "Fintech",
    "t": "Cash-flow forecasting"
   }
  ],
  "stack": [
   "Python",
   "dbt",
   "BigQuery",
   "Snowflake",
   "Power BI",
   "Prophet"
  ],
  "time": "6–12 weeks",
  "n": "17"
 },
 {
  "slug": "data-for-ai",
  "name": "Data engineering for AI",
  "groupKey": "data",
  "group": "Data & machine learning",
  "hook": "AI-ready data, first.",
  "sub": "Pipelines, warehouses and vector stores that give AI clean, current and permitted data.",
  "problems": [
   {
    "t": "Messy data",
    "b": "Duplicates, gaps and conflicting records."
   },
   {
    "t": "Freshness",
    "b": "Yesterday’s data gives yesterday’s answers."
   },
   {
    "t": "Governance",
    "b": "Who can use which data, for what."
   }
  ],
  "builds": [
   {
    "t": "Data pipelines",
    "b": "Ingestion from apps and SaaS tools."
   },
   {
    "t": "Warehouse",
    "b": "Modelled, documented tables."
   },
   {
    "t": "Vector stores",
    "b": "Embeddings kept in sync."
   },
   {
    "t": "Data quality",
    "b": "Tests and alerts on bad data."
   },
   {
    "t": "Governance",
    "b": "Access, lineage and retention."
   },
   {
    "t": "Feature store",
    "b": "Reusable ML features."
   }
  ],
  "uses": [
   {
    "ind": "Enterprise",
    "t": "Single customer view"
   },
   {
    "ind": "Fintech",
    "t": "Transaction data platform"
   },
   {
    "ind": "Healthcare",
    "t": "Patient data pipelines"
   },
   {
    "ind": "Retail",
    "t": "Unified sales data"
   },
   {
    "ind": "SaaS",
    "t": "Product analytics"
   },
   {
    "ind": "Logistics",
    "t": "Shipment data lake"
   }
  ],
  "stack": [
   "Airflow",
   "dbt",
   "Snowflake",
   "BigQuery",
   "pgvector",
   "Kafka"
  ],
  "time": "6–12 weeks",
  "n": "18"
 },
 {
  "slug": "ai-consulting",
  "name": "AI consulting & strategy",
  "groupKey": "strat",
  "group": "Strategy & governance",
  "hook": "Know what to build before you build it.",
  "sub": "A short, practical engagement that finds your highest-value AI use cases and a plan to ship them.",
  "problems": [
   {
    "t": "Hype",
    "b": "Every vendor promises AI will change everything."
   },
   {
    "t": "Prioritisation",
    "b": "Dozens of ideas, no way to rank them."
   },
   {
    "t": "Readiness",
    "b": "Data and teams may not be ready yet."
   }
  ],
  "builds": [
   {
    "t": "Use-case workshop",
    "b": "Ideas collected across teams."
   },
   {
    "t": "Value scoring",
    "b": "Impact, effort and risk ranked."
   },
   {
    "t": "Data readiness",
    "b": "What data exists and its quality."
   },
   {
    "t": "Prototype",
    "b": "One use case working in two weeks."
   },
   {
    "t": "Roadmap",
    "b": "Phased plan with budgets."
   },
   {
    "t": "Build vs buy",
    "b": "When to use tools versus custom."
   }
  ],
  "uses": [
   {
    "ind": "Enterprise",
    "t": "Company-wide AI roadmap"
   },
   {
    "ind": "Banking",
    "t": "AI risk and opportunity review"
   },
   {
    "ind": "Healthcare",
    "t": "Clinical AI assessment"
   },
   {
    "ind": "Retail",
    "t": "AI for merchandising"
   },
   {
    "ind": "Manufacturing",
    "t": "AI on the factory floor"
   },
   {
    "ind": "Startups",
    "t": "AI product strategy"
   }
  ],
  "stack": [
   "Workshops",
   "Prototypes",
   "OpenAI",
   "Claude",
   "Notion"
  ],
  "time": "2–4 weeks",
  "n": "19"
 },
 {
  "slug": "ai-governance",
  "name": "AI governance & safety",
  "groupKey": "strat",
  "group": "Strategy & governance",
  "hook": "AI your auditors can sign off.",
  "sub": "Policies, controls, testing and monitoring so AI is safe, compliant and explainable.",
  "problems": [
   {
    "t": "Regulation",
    "b": "AI rules are arriving in every market."
   },
   {
    "t": "Shadow AI",
    "b": "Teams use AI tools nobody approved."
   },
   {
    "t": "Risk",
    "b": "Bias, leaks and errors can reach customers."
   }
  ],
  "builds": [
   {
    "t": "AI policy",
    "b": "Clear rules for teams and vendors."
   },
   {
    "t": "Model inventory",
    "b": "Every AI system listed and owned."
   },
   {
    "t": "Risk assessment",
    "b": "Bias, privacy and safety reviews."
   },
   {
    "t": "Red-teaming",
    "b": "Attacks and failure tests."
   },
   {
    "t": "Monitoring",
    "b": "Live quality and safety checks."
   },
   {
    "t": "Compliance mapping",
    "b": "EU AI Act, ISO 42001, DPDP."
   }
  ],
  "uses": [
   {
    "ind": "Banking",
    "t": "Model risk management"
   },
   {
    "ind": "Healthcare",
    "t": "Clinical safety review"
   },
   {
    "ind": "Insurance",
    "t": "Fair pricing checks"
   },
   {
    "ind": "HR",
    "t": "Bias testing in screening"
   },
   {
    "ind": "Government",
    "t": "Public-sector AI policy"
   },
   {
    "ind": "Enterprise",
    "t": "Approved AI tool list"
   }
  ],
  "stack": [
   "ISO 42001",
   "NIST AI RMF",
   "EU AI Act",
   "Guardrails",
   "Langfuse"
  ],
  "time": "3–6 weeks",
  "n": "20"
 }
];

export const bySlug = aiServices.reduce((m, s) => { m[s.slug] = s; return m; }, {});
