export interface Project {
  name: string;
  description: string;
  stack: string[];
  links: string[];
  flagship?: boolean;
}

export interface ProjectSection {
  id: string;
  title: string;
  projects: Project[];
}

export const n8nProjects: Project[] = [
  {
    name: "Complete System for Realtors",
    description: "Full-featured automation suite for real estate professionals — lead management, follow-ups, and transaction tracking.",
    stack: ["N8n"],
    links: ["https://tinyurl.com/3hedcpdh"],
  },
  {
    name: "Voice Agent System",
    description: "AI-powered voice agent combining N8n workflow automation with GHL customer data and Retell voice capabilities for automated customer interactions.",
    stack: ["N8n", "GHL", "Retell"],
    links: ["https://tinyurl.com/yu4sx5sd", "https://tinyurl.com/4r98fwvb", "https://tinyurl.com/47x9cmkw"],
  },
  {
    name: "Vendor Portal Automations — Main System",
    description: "Main system for managing vendor interactions, invoicing, and document processing with automated workflows.",
    stack: ["N8n"],
    links: ["https://tinyurl.com/2v8apjhd"],
  },
  {
    name: "Vendor Portal Automations — Invoice OCR",
    description: "OCR capabilities for automated invoice extraction and processing from vendor documents.",
    stack: ["N8n", "OCR"],
    links: ["https://tinyurl.com/4x7hvahm"],
  },
  {
    name: "Telegram Real Estate Chatbot & Forms",
    description: "Telegram-integrated chatbot for real estate inquiries with dynamic form handling and lead capture.",
    stack: ["N8n", "Telegram", "Forms"],
    links: ["https://tinyurl.com/2xzn8bye"],
  },
  {
    name: "AI Email Responder Agent",
    description: "Intelligent email automation that reads incoming emails, analyzes intent, and sends contextually appropriate AI responses.",
    stack: ["N8n", "AI", "Email"],
    links: ["https://tinyurl.com/f9bakew9", "https://www.loom.com/share/81d075b573ed4e2490b69f4eb00ae58b"],
  },
  {
    name: "Social Media Automations — TikTok Video Creation",
    description: "Automated TikTok video creation and scheduling with content generation and posting.",
    stack: ["N8n", "TikTok API"],
    links: ["https://tinyurl.com/5bep9vzk"],
  },
  {
    name: "Social Media Automations — Scraper",
    description: "Web scraper for content harvesting and social media content sourcing.",
    stack: ["N8n", "Web Scraper"],
    links: ["https://tinyurl.com/5fs57vus"],
  },
  {
    name: "Social Media Automations — Image Generators",
    description: "Automated image generation for social media content using AI-powered tools.",
    stack: ["N8n", "Image Generation"],
    links: ["https://tinyurl.com/y5jprkbh"],
  },
  {
    name: "Affiliates Integration",
    description: "N8n, GHL, and Zapier integration for affiliate program management, tracking, and commission calculations.",
    stack: ["N8n", "GHL", "Zapier"],
    links: ["https://tinyurl.com/4n85njwh", "https://www.loom.com/share/48f0ffafbddd4f6b82082df707119579/"],
  },
  {
    name: "Newsletter Automations",
    description: "Automated newsletter creation, segmentation, and distribution with subscriber management and content scheduling.",
    stack: ["N8n", "Email Marketing"],
    links: ["https://www.loom.com/share/0e1ae295050a4949943eda27351d6ef7"],
  },
  {
    name: "AI Post Generator",
    description: "Automated scraping of latest finance, crypto, and AI news — rewrites articles and generates related image posts. On-demand image regeneration.",
    stack: ["N8n", "Blog Post Generation"],
    links: ["https://tinyurl.com/AI-post-generator"],
  },
  {
    name: "Amazon Vendor Central KPI Reporting",
    description: "Fully automated weekly KPI reporting for Amazon Vendor Central. Pulls Shipped Revenue, COGS, Units, Returns from SP-API, Ad metrics from Amazon Ads API v3, and BSR/Reviews from Jungle Scout. Aggregates child→parent ASINs, writes to structured Google Sheets, sends formatted HTML email report every Monday at 6am. Includes GZIP decompression via pure JS DEFLATE decoder.",
    stack: ["n8n", "SP-API", "Ads API", "Jungle Scout", "G-Sheets", "Gmail"],
    links: ["https://tinyurl.com/ynpba5sk"],
  },
  {
    name: "Ziregolf Media — Golf Content Automation",
    description: "Full automation suite for a golf news publisher: 24/7 automated news discovery and rewriting, on-demand article generator, and nightly newsletter draft pipeline with traffic-based story ranking.",
    stack: ["N8n", "Claude", "WordPress", "Beehiiv"],
    links: ["https://tinyurl.com/ziregolf"],
  },
  {
    name: "Multi-Channel PCI DSS Compliance Outreach & CRM Automation",
    description: "End-to-end outbound engine for a cybersecurity compliance firm. Ingests Visa Global Registry and Mastercard SDP leads, enriches with AI, runs synchronized email + LinkedIn cadence with unified suppression. Multi-lead CSV imports, expiry-based campaign routing, AI reply classification, cross-channel stop logic, and scheduled Google Drive backups — all tracked in GoHighLevel.",
    stack: ["n8n", "GHL", "Instantly", "HeyReach", "Apify", "OpenAI", "Google Sheets", "Google Drive", "Microsoft Graph"],
    links: ["https://www.loom.com/share/7def276f608b409dac94966602ae6edc"],
  },
  {
    name: "Multi-Gateway Revenue Reconciliation Engine",
    description: "Idempotent daily reconciliation pipeline for a D2C brand. Ingests Shopify orders, Stripe balance transactions, and PayPal settlements into a single Postgres ledger. Matches orders→gateway charges→payouts by IDs with 1-cent FX tolerance. Detects six edge-case classes with severity-tagged Slack digests, plus a triple safety net: workflow-error trigger, hourly heartbeat monitor, and Healthchecks.io dead-man switch. Paired with a Next.js dashboard.",
    stack: ["n8n", "PostgreSQL", "Node.js", "Shopify", "Stripe", "PayPal", "Slack", "Healthchecks.io", "Next.js"],
    links: [],
  },
  {
    name: "TCA Wireless — Multi-Store Lead Engagement & Reporting",
    description: "Three-track platform for a 4-location Hawaii phone repair chain. Track A: omnichannel AI chatbot across WhatsApp, Instagram, Messenger, and website with shared pricing engine and staff handoff. Track B: RepairDesk → n8n → Supabase → Next.js attribution dashboard with 67-table schema and five dashboard tabs. Track C: full GHL migration with Google Ads, Meta, and GTM layers.",
    stack: ["n8n", "GHL", "WhatsApp API", "Instagram API", "Meta API", "Google Ads", "GTM", "Node.js", "Supabase", "Next.js"],
    links: [],
    flagship: true,
  },
  {
    name: "Arbor Legacy Lawyers — AI Voice Receptionist (Riley)",
    description: "Inbound AI receptionist for a multi-state law firm. Qualifies callers, routes by state and asset thresholds (Georgia callers go through asset qualification, Tennessee callers route directly). Books 15-minute consultations, maps offices to GHL subaccounts, and pushes structured post-call data back to GHL via webhooks.",
    stack: ["Retell AI", "n8n", "GHL", "Supabase"],
    links: [],
  },
];

export const makeProjects: Project[] = [
  {
    name: "Retell Voice Integration",
    description: "Make.com workflows integrating Retell AI voice capabilities for automated call handling, transcription, and voice-to-action workflows.",
    stack: ["Make.com", "Retell AI"],
    links: ["https://tinyurl.com/p758xmjv", "https://tinyurl.com/55h9x8re"],
  },
  {
    name: "Sales & Operations Hub — Retell → GHL",
    description: "Integration of Retell voice agent with GHL CRM for automatic lead and call data synchronization.",
    stack: ["Make.com", "Retell", "GHL"],
    links: ["https://tinyurl.com/3zdezmj5"],
  },
  {
    name: "Sales & Operations Hub — Followups → GHL",
    description: "Automated follow-up workflow syncing GHL follow-up actions and tracking lead engagement.",
    stack: ["Make.com", "GHL"],
    links: ["https://tinyurl.com/yu5ek9pu"],
  },
  {
    name: "Sales & Operations Hub — Stripe Payment Tracking",
    description: "Automated Stripe payment tracking and CRM synchronization for sales and revenue monitoring.",
    stack: ["Make.com", "Stripe", "GHL"],
    links: ["https://tinyurl.com/59872ww9"],
  },
  {
    name: "Sales & Operations Hub — AI Proposal Drafter",
    description: "AI-powered proposal generation system creating customized proposals from customer data.",
    stack: ["Make.com", "AI", "GHL"],
    links: ["https://tinyurl.com/3rsej33a"],
  },
  {
    name: "Flip Ready — Real Estate Dispositions System",
    description: "When a property goes under contract, the system markets it to investor buyers via two paths: an internal vetted-buyer campaign with county matching and auto email/SMS, and an Investor Base scraper (Selenium/FastAPI on Railway). All buyers feed into WAVV calling pipelines. Includes duplicate checks, cross-account property copies, and 7 live Make.com scenarios.",
    stack: ["GHL", "Make.com", "Railway", "FastAPI", "Selenium", "PostgreSQL", "WAVV"],
    links: [],
    flagship: true,
  },
];

export const ghlProjects: Project[] = [
  {
    name: "PDS Complete Lifecycle — Lead Capture",
    description: "Initial lead capture system for Professional Detailing Services. Collects customer info and qualifies leads for service interest.",
    stack: ["GHL", "Forms"],
    links: ["https://tinyurl.com/5fepk7sh"],
  },
  {
    name: "Interior Path Router",
    description: "Captures customers interested in interior detailing and segments into 4 specialized options: Deep Cleaning, Decontamination, Dog Hair Removal, or Newborn Prep. Routes each lead to the correct service path.",
    stack: ["GHL", "Chatbot", "Router"],
    links: ["https://tinyurl.com/yf5kcxd6"],
  },
  {
    name: "Exterior Path Router",
    description: "Segments leads interested in exterior detailing and routes them based on vehicle type and service needs.",
    stack: ["GHL", "Chatbot", "Router"],
    links: ["https://tinyurl.com/4ewpfjey"],
  },
  {
    name: "Follow-ups Automation",
    description: "Automated follow-up sequences based on engagement level and service type. SMS and email reminders.",
    stack: ["GHL", "Automation", "SMS/Email"],
    links: ["https://tinyurl.com/yef57vdz"],
  },
  {
    name: "Service Segregation & Completion — Workflow 1",
    description: "Advanced lead segmentation and pipeline organization based on service type and job completion status.",
    stack: ["GHL", "Tagging", "Pipeline"],
    links: ["https://tinyurl.com/mtmpmfy6"],
  },
  {
    name: "Service Segregation & Completion — Workflow 2",
    description: "Secondary workflow for service-based lead segregation and tracking.",
    stack: ["GHL", "Tagging", "Pipeline"],
    links: ["https://tinyurl.com/y4cffw6v"],
  },
  {
    name: "Service Segregation & Completion — Workflow 3",
    description: "Tertiary workflow for completion status tracking and customer journey segmentation.",
    stack: ["GHL", "Tagging", "Pipeline"],
    links: ["https://tinyurl.com/2s45mwm8"],
  },
  {
    name: "Images Handling — Workflow 1",
    description: "Automated image collection, storage, and management for before/after service photos.",
    stack: ["GHL", "Media Management"],
    links: ["https://tinyurl.com/ytwt5fea"],
  },
  {
    name: "Images Handling — Workflow 2",
    description: "Customer profile integration with image management system.",
    stack: ["GHL", "Media Management"],
    links: ["https://tinyurl.com/vb62366e"],
  },
  {
    name: "Images Handling — Workflow 3",
    description: "Advanced image processing and gallery organization.",
    stack: ["GHL", "Media Management"],
    links: ["https://tinyurl.com/yhhnnmhh"],
  },
  {
    name: "Funnels & Pipelines — Funnel 1",
    description: "Complete funnel setup including sales funnels and automated sequences.",
    stack: ["GHL", "Funnels"],
    links: ["https://tinyurl.com/8tps7vf8"],
  },
  {
    name: "Funnels & Pipelines — Funnel 2",
    description: "Secondary funnel for alternative customer journey paths.",
    stack: ["GHL", "Funnels"],
    links: ["https://tinyurl.com/56cvwkcr"],
  },
  {
    name: "Funnels & Pipelines — Pipeline 1",
    description: "Pipeline configuration for end-to-end customer journey management.",
    stack: ["GHL", "Pipeline"],
    links: ["https://tinyurl.com/yrpva2az"],
  },
  {
    name: "Funnels & Pipelines — Pipeline 2",
    description: "Secondary pipeline with advanced automation sequences.",
    stack: ["GHL", "Pipeline"],
    links: ["https://tinyurl.com/yucayuz7"],
  },
  {
    name: "GHL SaaS App",
    description: "Complete SaaS application handling course video hosting, tiered onboarding, and full lifecycle management.",
    stack: ["GHL"],
    links: [],
  },
  {
    name: "Car Detailing Services Chatbot",
    description: "Multi-agent SMS system that qualifies leads by service type, books via Google Calendar, and syncs contacts/notes/opportunities to GHL with persistent conversation memory.",
    stack: ["n8n", "LangChain", "Claude", "OpenAI", "MongoDB", "GHL", "Webhooks"],
    links: [],
  },
  {
    name: "Metric Dashboards",
    description: "SDR, Revenue, and Ad Spend tracking dashboards.",
    stack: ["GHL", "n8n", "Airtable"],
    links: [],
  },
  {
    name: "Missed Call Revenue System",
    description: "Speed to lead → disposition and handoffs with long-term nurture sequences.",
    stack: ["GHL"],
    links: [],
  },
];

export const zapierProjects: Project[] = [
  {
    name: "Power Dialers with Close.com — Integration 1",
    description: "Integration of Zapier with Close.com power dialer for automated call logging and lead updating.",
    stack: ["Zapier", "Close.com", "Power Dialer"],
    links: ["https://tinyurl.com/4x346ej9"],
  },
  {
    name: "Power Dialers with Close.com — Integration 2",
    description: "CRM data synchronization with power dialer system.",
    stack: ["Zapier", "Close.com"],
    links: ["https://tinyurl.com/yc6hvs24"],
  },
  {
    name: "Power Dialers with Close.com — Integration 3",
    description: "Sales workflow automation and lead management integration.",
    stack: ["Zapier", "Close.com"],
    links: ["https://tinyurl.com/wekptdry"],
  },
  {
    name: "Complete SDR System",
    description: "Full SDR pipeline — speed to lead → handoff with nurture sequences.",
    stack: ["Zapier", "Close.com", "n8n", "GHL"],
    links: [],
  },
  {
    name: "Paint Cabin — AI Voice Agent, CRM & Booking",
    description: "Full business system rebuild for a corporate events venue. AI voice agent handles calls and bookings, feeds a structured CRM, and syncs pricing from QuickBooks automatically.",
    stack: ["JustCall", "Zapier", "Monday.com", "QuickBooks", "GetSign", "Calendly", "Gmail"],
    links: ["https://tinyurl.com/paint-cabin"],
  },
  {
    name: "Cheryl Porter Method — Email Marketing Migration",
    description: "Event-based email automation replacing ActiveCampaign list-triggered automations with Klaviyo. Covers Teachable and ClickFunnels purchase paths with 15 Zapier workflows and a Klaviyo flow for course progress tracking.",
    stack: ["Zapier", "Klaviyo", "Teachable", "ClickFunnels", "ActiveCampaign"],
    links: [],
  },
];

export const customApps: Project[] = [
  {
    name: "Sayvi",
    description: "Full-stack platform that turns a photo or character concept into a talking/animated avatar, auto-generates a script, renders short vertical video, and publishes directly to TikTok, Instagram, and Facebook. Built with Next.js 16, React 19, raw Postgres, HMAC-signed session auth, custom animated UI (WebGL shaders, Framer Motion). Integrates HeyGen, fal.ai, ElevenLabs. Ships with a public developer API, Stripe billing across three tiers, and a mock-first architecture.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "PostgreSQL", "HeyGen", "fal.ai", "ElevenLabs", "OpenAI", "Stripe", "TikTok API", "Meta Graph API"],
    links: ["https://say-vi.com/"],
    flagship: true,
  },
  {
    name: "Logic One AI",
    description: "Full AI sales communication suite: AI voice agents that qualify leads and warm-transfer to reps, power/predictive dialer, SMS/MMS campaigns, AI SMS auto-replies, role-scoped CRM chatbot, call QA & coaching, sales training roleplay, pipeline/CRM sync, white-label agency sub-accounts, and GHL embed support. Pay-as-you-go wallet billing.",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Twilio", "Retell AI", "Gemini Live", "OpenAI", "GHL", "Stripe", "Merge.dev"],
    links: ["https://logicone.ai/"],
    flagship: true,
  },
  {
    name: "LiftOps",
    description: "Mobile-first field operations platform (installable PWA) for a heavy-duty vehicle lift company. Replaces paper-based workflows with digital system spanning customer records, equipment registry, digital lift inspections, 3,000+ part catalog with AI-assisted estimate building, job scheduling, and role-aware dashboards. Syncs with GHL, uses n8n for automation, enforces row-level security across seven user roles.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "shadcn/ui", "Supabase", "n8n", "GHL", "Claude API", "Vercel"],
    links: ["https://liftops-drab.vercel.app"],
    flagship: true,
  },
  {
    name: "IKONIC Marketers",
    description: "Ad-intelligence platform for marketers. Taps the Meta Ad Library in real time so users can spy on competitor ad campaigns. Search by keyword or Page URL, filter by region, pull creatives, ad copy, and spend signals. Includes swipe-file library, search history, video-ad transcription, and page discovery with role-based admin console.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Supabase", "Upstash", "Redis", "Apify", "ElevenLabs", "Vercel"],
    links: ["https://ikonic-marketers.vercel.app"],
    flagship: true,
  },
  {
    name: "AdaptAI",
    description: "AI-powered SaaS to automate content generation for social platforms and websites. Integrated hub for content generation, multi-platform social linking, automated post scheduling, and centralized performance monitoring.",
    stack: ["Next.js", "MongoDB", "Redis", "BullQ", "TypeScript", "Tailwind", "Framer Motion", "N8N", "RAG"],
    links: ["https://adapt.ainewspower.com/"],
    flagship: true,
  },
  {
    name: "AlphaVenue AI",
    description: "AI-Powered SaaS for venue owners — manage complete venue operations via AI agents. From inquiries to delivery, all automatically handled by AI agents with complete planning capabilities.",
    stack: ["MERN", "Agentic AI", "RAG", "Redis", "AI Bots"],
    links: ["https://app.alphavenue.ai/"],
    flagship: true,
  },
  {
    name: "FoxReach",
    description: "Cold email outreach SaaS with inbox warmup, rotation, AI reply sorting, deliverability monitoring, multi-workspace support, and API-first architecture. Paid plans from $27/mo.",
    stack: ["FastAPI", "Celery", "PostgreSQL", "Redis", "Next.js", "nginx", "Python"],
    links: [],
    flagship: true,
  },
];

export const revopsProjects: Project[] = [
  {
    name: "TCA Wireless — Multi-Store Repair Shop Analytics Dashboard",
    description: "Syncs RepairDesk data into a normalized SQL layer, blends in GHL, Google Ads, and Meta data for a full analytics dashboard. Covers margin analysis, technician performance metrics, buyback pipeline tracking, and attribution health scoring across 4 store locations.",
    stack: ["n8n", "RepairDesk API", "GHL", "Google Ads API", "Meta Graph API", "PostgreSQL", "Next.js"],
    links: [],
    flagship: true,
  },
  {
    name: "Odyssey Function Energy Dashboard",
    description: "Consolidates sales and marketing data from multiple channels into a unified Supabase database — one row per channel per day. Provides blended performance overview, channel-level breakdowns, and margin trend analysis for executive reporting.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Shopify GraphQL", "ShopifyQL", "QuickBooks", "TikTok Shop", "Meta Ads", "Impact.com"],
    links: [],
    flagship: true,
  },
];

export const projectSections: ProjectSection[] = [
  { id: "n8n", title: "N8N Projects", projects: n8nProjects },
  { id: "make", title: "Make.com Projects", projects: makeProjects },
  { id: "ghl", title: "GHL Complete Setups", projects: ghlProjects },
  { id: "zapier", title: "Zapier Integrations", projects: zapierProjects },
  { id: "custom", title: "Custom Apps / SaaS", projects: customApps },
  { id: "revops", title: "RevOps & Analytics", projects: revopsProjects },
];
