import type { Metadata } from "next";
import type { ReactNode } from "react";
import ServiceHero from "@/components/sections/ServiceHero";

const IMG = "/images/products/ai_sales_assistant";

export const metadata: Metadata = {
  title: "AI Sales Assistant Development Company | AI Sales Automation | mTouch Labs",
  description:
    "Build an AI sales assistant with mTouch Labs to qualify leads, engage prospects, recommend solutions, automate sales tasks, and support your sales team.",
  keywords: [
    "AI Sales Assistant Development Company",
    "AI sales assistant",
    "AI sales assistant development",
    "AI sales automation",
    "AI sales agent",
    "AI sales software",
    "AI sales assistant software",
    "AI lead qualification",
    "AI sales automation software",
    "AI-powered sales assistant",
  ],
  alternates: { canonical: "/ai-sales-assistant-development" },
  openGraph: {
    title: "AI Sales Assistant Development Company | AI Sales Automation | mTouch Labs",
    description:
      "Custom AI sales assistants for lead qualification, prospect engagement, product discovery and CRM-connected sales automation.",
    url: "https://www.mtouchlabs.com/ai-sales-assistant-development",
    siteName: "mTouch Labs",
    images: [
      {
        url: `${IMG}/ai-sales-assistant-development-company-mtouchlabs.webp`,
        width: 1200,
        height: 630,
        alt: "AI sales assistant development company by mTouch Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Assistant Development Company | mTouch Labs",
    description:
      "Qualify leads, engage prospects, recommend solutions and automate sales tasks with a custom AI sales assistant.",
    images: [`${IMG}/ai-sales-assistant-development-company-mtouchlabs.webp`],
  },
  robots: { index: true, follow: true },
};

/* ════════════════════════════════════════════════════════════
   ICONS
   ════════════════════════════════════════════════════════════ */
const P = {
  funnel: <path d="M3.4 4.6h17.2l-6.6 8v7l-4-2.4v-4.6z" />,
  chat: (
    <path d="M20.5 4H3.5A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16H7l4 4 4-4h5.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 20.5 4z" />
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4v4M8.5 13h.01M15.5 13h.01M9 17h6" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 12.6 12.6 20.6a2 2 0 0 1-2.8 0l-6.4-6.4a2 2 0 0 1 0-2.8l8-8 9.2.8z" />
      <circle cx="16.6" cy="7.4" r="1.4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" />
      <path d="M18.5 3.5v3M20 5h-3" />
    </>
  ),
  plug: <path d="M8.5 3.5v5M15.5 3.5v5M6 8.5h12v3a6 6 0 0 1-12 0v-3zM12 17.5v3" />,
  gear: (
    <>
      <path d="M20.4 12a8.4 8.4 0 1 1-2.5-6" />
      <path d="M18 3.2v3.4h-3.4" />
      <path d="M9.6 12.2l1.9 1.9 3.6-3.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2M12 3.4c2.3 2.4 3.4 5.4 3.4 8.6s-1.1 6.2-3.4 8.6c-2.3-2.4-3.4-5.4-3.4-8.6S9.7 5.8 12 3.4z" />
    </>
  ),
  building: (
    <>
      <path d="M4 20.4V5.2a1 1 0 0 1 1-1h7.4a1 1 0 0 1 1 1v15.2" />
      <path d="M13.4 20.4V10h5.6a1 1 0 0 1 1 1v9.4M2.6 20.4h18.8" />
      <path d="M7 8h3M7 11.6h3M7 15.2h3" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 2-1.55L21 8H6" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
    </>
  ),
  cloud: <path d="M17.6 18H7a4.4 4.4 0 0 1-.7-8.75A5.6 5.6 0 0 1 17.1 9.6a4.2 4.2 0 0 1 .5 8.4z" />,
  home: (
    <>
      <path d="M3.4 10.4 12 3.8l8.6 6.6" />
      <path d="M5.6 12v7.4a.8.8 0 0 0 .8.8h11.2a.8.8 0 0 0 .8-.8V12" />
      <path d="M10 20.2v-5h4v5" />
    </>
  ),
  cap: (
    <>
      <path d="M12 4 2.8 8.4 12 12.8l9.2-4.4L12 4z" />
      <path d="M6 10.6v4.6c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9v-4.6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="M8.6 6h4.8a3 3 0 0 1 0 6H10a3 3 0 0 0 0 6h5.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20.2a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.6M18.2 20.2a6.4 6.4 0 0 0-2.1-4.6" />
    </>
  ),
  doc: (
    <>
      <path d="M13.4 3.4H6.6a2 2 0 0 0-2 2v13.2a2 2 0 0 0 2 2h10.8a2 2 0 0 0 2-2V9.4z" />
      <path d="M13.4 3.4v6h6M8.4 13.4h7M8.4 16.8h4.6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V4M4 19h16" />
      <path d="M7.6 15.2l3.4-4.1 3 2.6 4.4-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7.2" />
      <path d="M20.5 20.5 16.1 16.1" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3z" />
      <path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  code: <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.6 5l-3.2 14" />,
  check: (
    <>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
      <path d="M8.5 9.5l1.8 1.8 3.4-3.4M8.5 15.5h7" />
    </>
  ),
  rocket: (
    <>
      <path d="M13.5 3.5c3.6.5 6.5 3.4 7 7l-9 9-5-5 7-11z" />
      <circle cx="14.8" cy="9.2" r="1.9" />
      <path d="M6.5 17.5 4 20" />
    </>
  ),
  bolt: <path d="M13.5 2.5 5 13.5h5l-1.5 8 8.5-11h-5l1.5-8z" />,
  shield: (
    <>
      <path d="M12 2.8l7.6 3v6.1c0 4.6-3.1 8.2-7.6 9.3-4.5-1.1-7.6-4.7-7.6-9.3V5.8l7.6-3z" />
      <path d="M8.9 12.1l2 2 4.2-4.2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3.4v17.2M5 20.6h14" />
      <path d="M3 9.4h6l-3 5.4zM15 9.4h6l-3 5.4zM6 9.4 12 6l6 3.4" />
    </>
  ),
};

const Ic = ({ d, s = 22 }: { d: ReactNode; s?: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {d}
  </svg>
);

/* ════════════════════════════════════════════════════════════
   CONTENT
   ════════════════════════════════════════════════════════════ */

const CAN_DO: string[] = [
  "Engage website visitors",
  "Capture potential leads",
  "Understand customer requirements",
  "Qualify sales enquiries",
  "Answer product questions",
  "Recommend relevant products or services",
  "Retrieve sales information",
  "Assist sales representatives",
  "Connect with CRM systems",
  "Support defined follow-up workflows",
];

const SERVICES: [ReactNode, string, ReactNode][] = [
  [
    P.funnel,
    "AI Lead Qualification",
    "Qualification workflows that ask relevant questions, understand prospect requirements, and identify leads according to your defined criteria.",
  ],
  [
    P.chat,
    "AI Sales Chat Assistant",
    <>
      Engage website visitors and prospects through natural conversations while providing relevant
      information about your products or services. Related:{" "}
      <a href="/ai-chatbot-development-company" className="asa-a">
        AI Chatbot Development
      </a>
      .
    </>,
  ],
  [
    P.bot,
    "AI Sales Agent Development",
    "AI agents that can retrieve information, interact with approved sales tools, and execute defined sales workflows.",
  ],
  [
    P.tag,
    "AI Product Recommendation",
    "Help prospects discover products, plans, or services based on their requirements, preferences, and available business information.",
  ],
  [
    P.spark,
    "AI Sales Copilot",
    "An intelligent assistant for your reps that can summarize conversations, retrieve customer information, prepare responses, and assist with sales research.",
  ],
  [
    P.plug,
    "CRM-Connected Assistant",
    <>
      Connect AI sales workflows with{" "}
      <a href="/custom-crm-software-development-company" className="asa-a">
        CRM systems
      </a>{" "}
      to support lead management, customer information retrieval, and defined sales processes.
    </>,
  ],
  [
    P.gear,
    "AI Sales Automation",
    "Automate repetitive sales activities such as enquiry classification, lead routing, information retrieval, and other predefined workflows.",
  ],
];

const ABILITIES: string[] = [
  "Engage potential customers",
  "Identify buying intent",
  "Ask qualification questions",
  "Capture lead information",
  "Qualify inbound leads",
  "Answer product questions",
  "Compare available solutions",
  "Recommend relevant offerings",
  "Retrieve customer information",
  "Summarize sales conversations",
  "Assist sales representatives",
  "Classify incoming enquiries",
  "Route leads to sales teams",
  "Support follow-up workflows",
  "Update connected systems through approved integrations",
];

const USE_CASES: [ReactNode, string, ReactNode][] = [
  [
    P.globe,
    "Website Lead Generation",
    "Turn passive visitors into conversations by letting prospects ask questions, explain requirements and leave contact details.",
  ],
  [
    P.building,
    "B2B Lead Qualification",
    "Ask about company, requirements, budget, timeline or use case, then route qualified opportunities to the right representative.",
  ],
  [
    P.cart,
    "E-commerce Sales Assistance",
    <>
      Help shoppers discover products, understand features, compare options and receive relevant
      recommendations across your{" "}
      <a href="/ecommerce-app-development-company" className="asa-a">
        ecommerce platform
      </a>
      .
    </>,
  ],
  [
    P.cloud,
    "SaaS Sales",
    <>
      Answer questions about features, integrations, plans and capabilities while helping prospects find the
      right fit for your{" "}
      <a href="/saas-development-services" className="asa-a">
        SaaS product
      </a>
      .
    </>,
  ],
  [
    P.home,
    "Real Estate Sales",
    "Assist buyers and renters with property enquiries, preferences, availability information and appointment workflows.",
  ],
  [
    P.cap,
    "Education Sales & Admissions",
    "Help prospective students discover courses, understand programme information and navigate enquiry or admissions workflows.",
  ],
  [
    P.users,
    "Enterprise Sales",
    "Support sales teams with customer research, information retrieval, conversation summaries and sales-process assistance.",
  ],
];

const QUAL_FLOW: string[] = [
  "Visitor Enquiry",
  "Requirement Discovery",
  "Qualification",
  "Lead Scoring",
  "CRM",
  "Sales Representative",
];

const CONTEXT: [string, string[]][] = [
  ["Product & offer data", ["Product information", "Service documentation", "Pricing information", "Sales content"]],
  ["Customer context", ["Customer information", "CRM records", "Previous conversations"]],
  ["Knowledge sources", ["FAQs", "Knowledge bases", "Approved business APIs"]],
];

const FEATURES: [ReactNode, string, string][] = [
  [P.funnel, "Intelligent Lead Capture", "Collect prospect information conversationally instead of relying only on traditional forms."],
  [P.target, "Intent Detection", "Understand whether a visitor wants information, a demo, a comparison, or is showing purchase intent."],
  [P.tag, "Personalized Recommendations", "Present relevant products, services, plans or resources based on available information."],
  [P.db, "Sales Knowledge Retrieval", "Natural-language access to approved product and service information for prospects and reps."],
  [P.plug, "CRM Integration", "Connect the assistant with your CRM and other sales systems through appropriate APIs."],
  [P.doc, "Conversation Summaries", "Structured summaries that help reps understand previous customer interactions."],
  [P.users, "Human Handoff", "Transfer high-value or complex conversations to a representative when human involvement fits."],
  [P.chart, "Sales Analytics", "Capture defined conversation and workflow metrics to understand common customer questions."],
];

const ARCH_FLOW: string[] = [
  "Prospect",
  "Conversation",
  "Intent Understanding",
  "Knowledge Retrieval",
  "Qualification",
  "Recommendation / Action",
  "CRM",
  "Human Sales Team",
];

const COMPARE: [string, string][] = [
  ["Primarily handles conversations", "Designed around sales outcomes"],
  ["Answers general questions", "Focuses on prospect requirements"],
  ["Supports customer interaction", "Supports lead generation and qualification"],
  ["May provide information", "Can support product discovery and recommendations"],
  ["Broad conversational use", "Sales-specific workflows"],
];

const STACK: string[] = [
  "CRM platforms",
  "Websites",
  "Mobile applications",
  "Lead management systems",
  "Marketing platforms",
  "Product catalogs",
  "Databases",
  "Customer portals",
  "Business APIs",
  "Analytics systems",
];

const PROCESS: [string, ReactNode, string, string][] = [
  ["01", P.search, "Sales Process Discovery", "Your customer journey, qualification criteria, products, sales workflows, existing tools and business objectives."],
  ["02", P.layers, "Conversation & AI Strategy", "The assistant's responsibilities, conversation flows, knowledge sources, qualification logic, escalation paths and integrations."],
  ["03", P.db, "Knowledge & Data Preparation", "Product information, FAQs, sales documentation and other approved data prepared for the AI system."],
  ["04", P.code, "AI Development", "We build the assistant, integrate the required AI capabilities and connect it with your sales technology."],
  ["05", P.check, "Testing & Evaluation", "Conversations, qualification workflows, recommendations, integrations, edge cases and human handoff."],
  ["06", P.rocket, "Deployment & Optimization", "After launch the system is evaluated and improved against defined performance metrics."],
];

const WHY: [ReactNode, string, string][] = [
  [P.target, "Business-Specific AI", "Built around your products, customers, qualification process and sales objectives."],
  [P.gear, "AI + Sales Automation", "Conversational AI combined with defined workflows to cut repetitive manual activity."],
  [P.plug, "CRM Integration", "Connected to your existing sales systems rather than another disconnected tool."],
  [P.users, "Human + AI Collaboration", "AI handles suitable repetitive interactions; reps stay in the important conversations."],
  [P.scale, "Scalable Architecture", "Evolves as your product catalog, customer base and sales workflows grow."],
  [P.rocket, "End-to-End Development", "From AI strategy and UX to development, integrations, testing, deployment and optimization."],
];

const TECH: string[] = [
  "Large Language Models (LLMs)",
  "Generative AI",
  "Retrieval-Augmented Generation (RAG)",
  "Embeddings",
  "Vector databases",
  "AI agents",
  "Python",
  "Node.js",
  "React",
  "REST APIs",
  "CRM APIs",
  "Cloud infrastructure",
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI sales assistant?",
    a: "An AI sales assistant is an AI-powered software solution designed to help businesses engage prospects, answer questions, qualify leads, recommend solutions, and support sales workflows.",
  },
  {
    q: "Can an AI sales assistant qualify leads?",
    a: "Yes. It can ask predefined qualification questions, understand responses, apply business criteria, and route or classify leads according to your sales process.",
  },
  {
    q: "Can an AI sales assistant integrate with a CRM?",
    a: "Yes. CRM integration can allow the assistant to retrieve or send relevant information through available APIs and appropriate permissions.",
  },
  {
    q: "Can an AI sales assistant recommend products?",
    a: "Yes. Product recommendations can be based on customer requirements, product information, business rules, and, where appropriate, recommendation or AI models.",
  },
  {
    q: "Can an AI sales assistant replace salespeople?",
    a: "AI is generally better positioned as a sales-support and automation layer rather than a complete replacement for sales representatives. Human involvement can remain part of important sales conversations and decisions.",
  },
  {
    q: "Can you build an AI sales assistant for a SaaS product?",
    a: "Yes. An AI sales assistant can help SaaS businesses answer product questions, explain features, qualify prospects, and support demo or sales workflows.",
  },
  {
    q: "How much does AI sales assistant development cost?",
    a: "The cost depends on the required AI capabilities, integrations, data sources, workflows, channels, security requirements, and expected usage.",
  },
];

export default function AISalesAssistantDevelopment() {
  return (
    <>
      {/* ═════════════ STRUCTURED DATA ═════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Sales Assistant Development Company",
            description:
              "mTouch Labs develops custom AI sales assistants that engage prospects, qualify leads, recommend solutions, automate sales tasks and support sales teams through CRM-connected workflows.",
            url: "https://www.mtouchlabs.com/ai-sales-assistant-development",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "AI Sales Assistant Development",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "AI Sales Assistant Development",
                item: "https://www.mtouchlabs.com/ai-sales-assistant-development",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ═════════════ PAGE STYLES ═════════════
          A layout unique to this page, on the navy / electric-blue /
          cyan system so it sits natively with the product imagery:
          deep-navy feature bands, glass cards, chevron ribbons and a
          real comparison table. All scoped under .asa.

          NOTE: global .ga-animate* are overridden to `animation:none`
          in bundle.css, so reveals use .asa-rv + IntersectionObserver. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
.asa{
  --nv:#0B1220; --nv2:#111C31; --bl:#2563EB; --bl2:#1D4FD8;
  --cy:#06B6D4; --cyl:#67E8F9; --vi:#7C3AED;
  --lb:#F5F8FC; --bd:#E2E9F2;
  --ink:#0B1220; --txt:#4A5A75; --mut:#7C8AA3;
  --ff:var(--font-primary,'Poppins',system-ui,sans-serif);
}
.asa *,.asa *::before,.asa *::after{box-sizing:border-box;}

/* ── reveal ───────────────────────────────────────────────── */
.asa .asa-rv{opacity:1;}
html.asa-on .asa .asa-rv{opacity:0;transform:translateY(24px);
  transition:opacity .7s cubic-bezier(.22,.61,.36,1),transform .7s cubic-bezier(.22,.61,.36,1);
  will-change:opacity,transform;}
html.asa-on .asa .asa-rv.in{opacity:1;transform:none;}
html.asa-on .asa .asa-rv .asa-c{opacity:0;transform:translateY(18px);
  transition:opacity .55s cubic-bezier(.22,.61,.36,1),transform .55s cubic-bezier(.22,.61,.36,1);}
html.asa-on .asa .asa-rv.in .asa-c{opacity:1;transform:none;}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(1){transition-delay:.03s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(2){transition-delay:.07s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(3){transition-delay:.11s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(4){transition-delay:.15s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(5){transition-delay:.19s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(6){transition-delay:.23s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(7){transition-delay:.27s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(8){transition-delay:.31s}
html.asa-on .asa .asa-rv.in .asa-c:nth-child(n+9){transition-delay:.35s}

/* ── shell ────────────────────────────────────────────────── */
.asa-s{padding:86px 0;background:#fff;}
.asa-s--lb{background:var(--lb);}
.asa-s--nv{background:var(--nv);position:relative;overflow:hidden;}
.asa-s--nv::before{content:'';position:absolute;top:-200px;right:-140px;width:620px;height:620px;
  border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(37,99,235,.22) 0%,transparent 64%);}
.asa-s--nv::after{content:'';position:absolute;bottom:-220px;left:-160px;width:560px;height:560px;
  border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(6,182,212,.14) 0%,transparent 62%);}
.asa-w{max-width:1180px;margin:0 auto;padding:0 28px;position:relative;z-index:2;}

.asa-eb{display:inline-flex;align-items:center;gap:9px;margin:0 0 15px;
  font-family:var(--ff);font-size:.72rem;font-weight:700;letter-spacing:.18em;
  text-transform:uppercase;color:var(--bl);}
.asa-eb::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--cy);
  box-shadow:0 0 0 4px rgba(6,182,212,.18);}
.asa-s--nv .asa-eb{color:var(--cyl);}
.asa-h2{font-family:var(--ff);font-size:2.2rem;line-height:1.26;font-weight:700;
  color:var(--ink);margin:0 0 16px;letter-spacing:-.025em;}
.asa-s--nv .asa-h2{color:#fff;}
.asa-h2 em{font-style:normal;
  background:linear-gradient(95deg,var(--bl) 0%,var(--cy) 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;}
.asa-s--nv .asa-h2 em{background:linear-gradient(95deg,#60A5FA 0%,var(--cyl) 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;}
.asa-p{font-family:var(--ff);font-size:1.02rem;line-height:1.78;color:var(--txt);
  margin:0 0 15px;max-width:68ch;}
.asa-p:last-child{margin-bottom:0;}
.asa-s--nv .asa-p{color:#9FB3CE;}
.asa-hd{max-width:730px;margin-bottom:52px;}
.asa-hd--mid{margin-left:auto;margin-right:auto;text-align:center;}
.asa-hd--mid .asa-eb{justify-content:center;}
.asa-hd--mid .asa-p{margin-left:auto;margin-right:auto;}
.asa a.asa-a,.asa a.asa-a:link,.asa a.asa-a:visited{color:var(--bl);text-decoration:none;font-weight:600;}
.asa a.asa-a:hover{color:var(--bl2);text-decoration:none;}
.asa-s--nv a.asa-a,.asa-s--nv a.asa-a:link,.asa-s--nv a.asa-a:visited{color:var(--cyl);}
.asa-s--nv a.asa-a:hover{color:#A5F3FC;}

/* ── split intro with ledger ───────────────────────────────── */
.asa-split{display:grid;grid-template-columns:1fr 1fr;gap:58px;align-items:start;}
.asa-ledger{list-style:none;margin:0;padding:0;counter-reset:lg;}
.asa-lg{counter-increment:lg;display:flex;align-items:flex-start;gap:16px;padding:13px 0;
  border-bottom:1px solid var(--bd);font-family:var(--ff);font-size:.97rem;line-height:1.6;
  color:var(--txt);transition:color .3s ease,padding-left .3s ease;}
.asa-lg:last-child{border-bottom:0;}
.asa-lg::before{content:counter(lg,decimal-leading-zero);flex:0 0 auto;
  font-size:.74rem;font-weight:800;color:var(--bl);letter-spacing:.06em;margin-top:4px;
  font-variant-numeric:tabular-nums;}
.asa-lg:hover{color:var(--ink);padding-left:6px;}

/* ── glass cards on navy ───────────────────────────────────── */
.asa-glass{display:grid;grid-template-columns:repeat(auto-fit,minmax(316px,1fr));gap:20px;}
.asa-gc{position:relative;padding:28px 26px;border-radius:16px;
  background:linear-gradient(158deg,rgba(255,255,255,.055) 0%,rgba(255,255,255,.02) 100%);
  border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(2px);
  transition:transform .38s cubic-bezier(.22,.61,.36,1),border-color .38s ease,box-shadow .38s ease;}
.asa-gc::after{content:'';position:absolute;top:0;left:26px;right:26px;height:1px;
  background:linear-gradient(90deg,transparent,rgba(6,182,212,.6),transparent);
  opacity:0;transition:opacity .38s ease;}
.asa-gc:hover{transform:translateY(-6px);border-color:rgba(6,182,212,.4);
  box-shadow:0 26px 56px -26px rgba(0,0,0,.6);}
.asa-gc:hover::after{opacity:1;}
.asa-gc__i{width:50px;height:50px;border-radius:14px;margin-bottom:18px;
  display:flex;align-items:center;justify-content:center;
  background:rgba(6,182,212,.12);border:1px solid rgba(6,182,212,.26);color:var(--cyl);
  transition:transform .38s cubic-bezier(.22,.61,.36,1),background .38s ease;}
.asa-gc:hover .asa-gc__i{transform:scale(1.08) rotate(-4deg);background:rgba(6,182,212,.2);}
.asa-gc__t{font-family:var(--ff);font-size:1.08rem;font-weight:600;color:#fff;margin:0 0 9px;}
.asa-gc__d{font-family:var(--ff);font-size:.93rem;line-height:1.7;color:#9FB3CE;margin:0;}

/* ── ability grid ──────────────────────────────────────────── */
.asa-ab{list-style:none;margin:0;padding:0;display:grid;
  grid-template-columns:repeat(auto-fit,minmax(272px,1fr));gap:0 40px;}
.asa-ab li{display:flex;align-items:flex-start;gap:12px;padding:12px 0;
  border-bottom:1px solid var(--bd);font-family:var(--ff);font-size:.95rem;line-height:1.6;
  color:var(--txt);transition:color .3s ease,padding-left .3s ease;}
.asa-ab li:hover{color:var(--ink);padding-left:6px;}
.asa-ab svg{flex:0 0 16px;color:var(--cy);margin-top:4px;}

/* ── numbered use-case tiles ───────────────────────────────── */
.asa-uc{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.asa-ut{position:relative;overflow:hidden;padding:28px 26px;border-radius:16px;
  background:#fff;border:1px solid var(--bd);
  box-shadow:0 2px 6px rgba(11,18,32,.03);
  transition:transform .38s cubic-bezier(.22,.61,.36,1),box-shadow .38s ease,border-color .38s ease;}
.asa-ut::before{content:'';position:absolute;top:-46px;right:-46px;width:96px;height:96px;
  border-radius:50%;background:linear-gradient(135deg,rgba(37,99,235,.14),rgba(6,182,212,.10));
  transition:transform .45s cubic-bezier(.22,.61,.36,1);}
.asa-ut:hover{transform:translateY(-6px);border-color:rgba(37,99,235,.38);
  box-shadow:0 24px 50px -26px rgba(37,99,235,.3);}
.asa-ut:hover::before{transform:scale(1.5);}
.asa-ut__i{position:relative;width:46px;height:46px;border-radius:13px;margin-bottom:17px;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(140deg,var(--bl),var(--bl2));color:#fff;
  box-shadow:0 10px 22px -10px rgba(37,99,235,.6);
  transition:transform .38s cubic-bezier(.22,.61,.36,1);}
.asa-ut:hover .asa-ut__i{transform:scale(1.09) rotate(-5deg);}
.asa-ut__n{position:absolute;top:22px;right:26px;font-family:var(--ff);font-size:.76rem;
  font-weight:800;color:var(--bl);letter-spacing:.06em;font-variant-numeric:tabular-nums;}
.asa-ut__t{position:relative;font-family:var(--ff);font-size:1.06rem;font-weight:600;
  color:var(--ink);margin:0 0 9px;}
.asa-ut__d{position:relative;font-family:var(--ff);font-size:.92rem;line-height:1.7;
  color:var(--txt);margin:0;}

/* ── chevron ribbon flow ───────────────────────────────────── */
.asa-rib{display:flex;flex-wrap:wrap;gap:9px;align-items:center;justify-content:center;}
.asa-rib__n{font-family:var(--ff);font-size:.9rem;font-weight:600;padding:11px 20px;
  border-radius:9px;background:#fff;border:1px solid var(--bd);color:var(--ink);
  box-shadow:0 2px 6px rgba(11,18,32,.04);
  transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease;}
.asa-rib__n:hover{transform:translateY(-3px);border-color:rgba(37,99,235,.4);
  box-shadow:0 12px 26px -12px rgba(37,99,235,.4);}
.asa-s--nv .asa-rib__n{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1);color:#fff;}
.asa-rib__a{color:var(--bl);font-weight:700;font-size:1rem;line-height:1;}
.asa-s--nv .asa-rib__a{color:var(--cyl);}

/* ── context groups ────────────────────────────────────────── */
.asa-ctx{display:grid;grid-template-columns:repeat(auto-fit,minmax(268px,1fr));gap:34px;}
.asa-ctx__k{font-family:var(--ff);font-size:.72rem;font-weight:800;letter-spacing:.15em;
  text-transform:uppercase;color:var(--bl);padding-bottom:12px;margin-bottom:16px;
  border-bottom:2px solid rgba(37,99,235,.16);}
.asa-chips{display:flex;flex-wrap:wrap;gap:9px;}
.asa-chip{font-family:var(--ff);font-size:.87rem;font-weight:500;color:var(--ink);
  background:#fff;border:1px solid var(--bd);border-radius:9px;padding:8px 14px;
  transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease;}
.asa-chip:hover{transform:translateY(-2px);border-color:rgba(6,182,212,.5);
  box-shadow:0 10px 22px -12px rgba(6,182,212,.4);}
.asa-s--lb .asa-chip{background:#fff;}

/* ── feature rows ──────────────────────────────────────────── */
.asa-ft{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:0 44px;}
.asa-fr{display:flex;gap:17px;padding:24px 0;border-bottom:1px solid var(--bd);
  transition:padding-left .34s cubic-bezier(.22,.61,.36,1);}
.asa-fr:hover{padding-left:8px;}
.asa-fr__i{flex:0 0 42px;width:42px;height:42px;border-radius:12px;
  display:flex;align-items:center;justify-content:center;
  background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.18);color:var(--bl);
  transition:background .34s ease,color .34s ease,transform .34s ease;}
.asa-fr:hover .asa-fr__i{background:var(--bl);color:#fff;transform:scale(1.06);
  box-shadow:0 10px 22px -10px rgba(37,99,235,.6);}
.asa-fr__t{font-family:var(--ff);font-size:1rem;font-weight:600;color:var(--ink);margin:2px 0 7px;}
.asa-fr__d{font-family:var(--ff);font-size:.91rem;line-height:1.68;color:var(--txt);margin:0;}

/* ── comparison table ──────────────────────────────────────── */
.asa-tbl{max-width:980px;margin:0 auto;border-radius:16px;overflow:hidden;
  border:1px solid rgba(255,255,255,.1);}
.asa-tr{display:grid;grid-template-columns:1fr 1fr;}
.asa-tr--h .asa-td{font-weight:700;font-size:.98rem;padding:19px 26px;}
.asa-tr--h .asa-td:first-child{background:rgba(255,255,255,.05);color:#C6D6EA;}
.asa-tr--h .asa-td:last-child{background:rgba(37,99,235,.2);color:#fff;}
.asa-td{font-family:var(--ff);font-size:.93rem;line-height:1.6;padding:16px 26px;
  border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:11px;}
.asa-td:first-child{color:#8FA3BE;background:rgba(255,255,255,.018);}
.asa-td:last-child{color:#DCE8F6;background:rgba(37,99,235,.07);}
.asa-td svg{flex:0 0 15px;}
.asa-td:first-child svg{color:#5D6C82;}
.asa-td:last-child svg{color:var(--cyl);}
.asa-tnote{max-width:980px;margin:22px auto 0;font-family:var(--ff);font-size:.93rem;
  line-height:1.7;color:#9FB3CE;text-align:center;}

/* ── process cards ─────────────────────────────────────────── */
.asa-pr{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:20px;}
.asa-pc{position:relative;overflow:hidden;padding:26px 26px;border-radius:16px;background:#fff;
  border:1px solid var(--bd);box-shadow:0 2px 6px rgba(11,18,32,.03);
  transition:transform .38s cubic-bezier(.22,.61,.36,1),box-shadow .38s ease,border-color .38s ease;}
.asa-pc:hover{transform:translateY(-5px);border-color:rgba(6,182,212,.42);
  box-shadow:0 22px 46px -24px rgba(6,182,212,.34);}
.asa-pc__n{position:absolute;top:14px;right:20px;font-family:var(--ff);font-size:2.7rem;
  font-weight:800;color:rgba(37,99,235,.09);letter-spacing:-.04em;line-height:1;}
.asa-pc__i{width:44px;height:44px;border-radius:12px;margin-bottom:16px;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(140deg,var(--cy),#0891B2);color:#fff;
  box-shadow:0 10px 22px -10px rgba(6,182,212,.6);
  transition:transform .38s cubic-bezier(.22,.61,.36,1);}
.asa-pc:hover .asa-pc__i{transform:scale(1.08) rotate(-5deg);}
.asa-pc__t{font-family:var(--ff);font-size:1.04rem;font-weight:600;color:var(--ink);margin:0 0 8px;}
.asa-pc__d{font-family:var(--ff);font-size:.91rem;line-height:1.68;color:var(--txt);margin:0;}

/* ── figures ───────────────────────────────────────────────── */
.asa-fig{max-width:1080px;margin:0 auto;padding:0 28px;}
.asa-fig--sm{max-width:860px;}
.asa-fig__f{border-radius:16px;overflow:hidden;line-height:0;border:1px solid var(--bd);
  background:var(--lb);box-shadow:0 14px 38px -18px rgba(11,18,32,.2);
  transition:transform .44s ease,box-shadow .44s ease,border-color .44s ease;}
.asa-fig__f:hover{transform:translateY(-5px);border-color:rgba(37,99,235,.4);
  box-shadow:0 26px 56px -24px rgba(37,99,235,.32);}
.asa-s--nv .asa-fig__f{border-color:rgba(255,255,255,.1);background:rgba(255,255,255,.03);}
.asa-fig__f img{display:block;width:100%;height:auto;}
.asa-fig__c{margin:15px 0 0;text-align:center;font-family:var(--ff);font-size:.87rem;
  line-height:1.65;color:var(--mut);}
.asa-s--nv .asa-fig__c{color:#7F93AE;}
.asa-figtop{padding-top:58px;}

/* ── note ──────────────────────────────────────────────────── */
.asa-note{max-width:900px;margin:34px auto 0;padding:20px 26px;
  border-left:3px solid var(--cy);border-radius:0 12px 12px 0;background:var(--lb);
  font-family:var(--ff);font-size:.95rem;line-height:1.75;color:var(--txt);}
.asa-s--lb .asa-note{background:#fff;}
.asa-s--nv .asa-note{background:rgba(255,255,255,.04);color:#9FB3CE;
  border-left-color:var(--cyl);}

/* ── FAQ ───────────────────────────────────────────────────── */
.asa-faq{max-width:900px;margin:0 auto;}
.asa-fq{border:1px solid var(--bd);border-radius:13px;background:#fff;margin-bottom:12px;
  overflow:hidden;transition:border-color .3s ease,box-shadow .3s ease;}
.asa-fq[open]{border-color:rgba(37,99,235,.42);box-shadow:0 16px 38px -26px rgba(37,99,235,.44);}
.asa-fq__q{display:flex;align-items:center;justify-content:space-between;gap:18px;
  padding:20px 24px;cursor:pointer;list-style:none;font-family:var(--ff);font-size:1rem;
  line-height:1.55;font-weight:600;color:var(--ink);transition:color .26s ease;}
.asa-fq__q::-webkit-details-marker{display:none;}
.asa-fq__q:hover{color:var(--bl);}
.asa-fq__s{position:relative;flex:0 0 24px;width:24px;height:24px;border-radius:8px;
  background:rgba(37,99,235,.1);transition:background .3s ease,transform .34s ease;}
.asa-fq__s::before,.asa-fq__s::after{content:'';position:absolute;top:50%;left:50%;
  background:var(--bl);border-radius:2px;transform:translate(-50%,-50%);
  transition:opacity .3s ease,background .3s ease;}
.asa-fq__s::before{width:11px;height:2px;}
.asa-fq__s::after{width:2px;height:11px;}
.asa-fq[open] .asa-fq__s{background:var(--bl);transform:rotate(180deg);}
.asa-fq[open] .asa-fq__s::before{background:#fff;}
.asa-fq[open] .asa-fq__s::after{opacity:0;}
.asa-fq__a{padding:0 24px 22px;font-family:var(--ff);font-size:.94rem;line-height:1.75;
  color:var(--txt);}
html.asa-on .asa-fq[open] .asa-fq__a{animation:asa-in .36s ease both;}
@keyframes asa-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}

/* ── CTA ───────────────────────────────────────────────────── */
.asa-cta{padding:88px 0;position:relative;overflow:hidden;
  background:linear-gradient(140deg,#0B1220 0%,#132244 52%,#0B1220 100%);}
.asa-cta::before{content:'';position:absolute;top:-180px;left:50%;margin-left:-320px;
  width:640px;height:640px;border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(6,182,212,.2) 0%,transparent 62%);}
.asa-cta__in{max-width:820px;margin:0 auto;padding:0 28px;text-align:center;position:relative;z-index:2;}
.asa-cta__h{font-family:var(--ff);font-size:2.1rem;line-height:1.3;font-weight:700;color:#fff;
  margin:0 0 18px;letter-spacing:-.025em;}
.asa-cta__t{font-family:var(--ff);font-size:1.02rem;line-height:1.8;color:#A9BDD6;margin:0 0 32px;}
.asa-cta__t a{color:#fff;text-decoration:underline;font-weight:600;}
.asa button.asa-cta__b{display:inline-flex;align-items:center;gap:11px;padding:16px 36px;
  border-radius:11px;border:0;cursor:pointer;font-family:var(--ff);font-size:1rem;
  font-weight:600;color:#fff;background:linear-gradient(135deg,var(--bl) 0%,var(--bl2) 100%);
  box-shadow:0 16px 36px -14px rgba(37,99,235,.75);
  transition:transform .32s cubic-bezier(.22,.61,.36,1),box-shadow .32s ease;}
.asa button.asa-cta__b:hover{transform:translateY(-3px);
  box-shadow:0 24px 52px -16px rgba(37,99,235,.9);}
.asa button.asa-cta__b i{font-style:normal;transition:transform .32s ease;}
.asa button.asa-cta__b:hover i{transform:translateX(5px);}

/* ── responsive ────────────────────────────────────────────── */
@media (max-width:1000px){
  .asa-split{grid-template-columns:1fr;gap:38px;}
  .asa-uc{grid-template-columns:repeat(2,1fr);}
  .asa-ft{grid-template-columns:1fr;gap:0;}
  .asa-tbl{border-radius:13px;}
}
@media (max-width:768px){
  .asa-s,.asa-cta{padding:56px 0;}
  .asa-w,.asa-fig{padding:0 20px;}
  .asa-h2{font-size:1.62rem;}
  .asa-cta__h{font-size:1.55rem;}
  .asa-hd{margin-bottom:34px;}
  .asa-uc{grid-template-columns:1fr;}
  .asa-figtop{padding-top:38px;}
  .asa-td{padding:14px 18px;font-size:.88rem;}
  .asa-tr--h .asa-td{padding:16px 18px;font-size:.9rem;}
}
@media (prefers-reduced-motion:reduce){
  .asa *{animation:none!important;transition:none!important;}
  .asa .asa-gc:hover,.asa .asa-ut:hover,.asa .asa-pc:hover,.asa .asa-fig__f:hover,
  .asa .asa-rib__n:hover,.asa button.asa-cta__b:hover{transform:none;}
}
`,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var w=window,d=document,r=d.documentElement;
if(!('IntersectionObserver' in w))return;
try{if(w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
r.classList.add('asa-on');
w.setTimeout(function(){var n=d.querySelectorAll('.asa .asa-rv:not(.in)');for(var i=0;i<n.length;i++)n[i].classList.add('in');},2600);})();`,
        }}
      />

      <div className="asa">
        {/* ═════════════ HERO ═════════════ */}
        <ServiceHero
          badge="AI SALES ASSISTANT"
          titleLead="AI Sales Assistant"
          titleAccent="Development"
          titleTail="Company"
          description={
            <>
              Turn more conversations into qualified opportunities with an AI sales assistant that can engage
              prospects, understand their requirements, answer product questions, qualify leads, and support
              your sales team. mTouch Labs develops custom AI sales assistant solutions that combine
              conversational AI, business knowledge, customer data, and sales workflows.
            </>
          }
          primaryLabel="Build Your AI Sales Assistant"
          secondaryLabel="View Case Studies"
        />

        <div className="asa-figtop" style={{ background: "#fff", paddingBottom: 6 }}>
          <figure className="asa-fig asa-rv">
            <div className="asa-fig__f">
              <img
                src={`${IMG}/ai-sales-assistant-development-company-mtouchlabs.webp`}
                alt="AI sales assistant development company by mTouch Labs"
                width={1200}
                height={630}
                loading="eager"
              />
            </div>
            <figcaption className="asa-fig__c">
              An inbound lead scored against your own criteria &mdash; with the signals behind the score and
              the recommended next step shown to the rep.
            </figcaption>
          </figure>
        </div>

        {/* ═════════════ INTRO ═════════════ */}
        <section className="asa-s">
          <div className="asa-w">
            <div className="asa-split">
              <div className="asa-rv">
                <span className="asa-eb">The problem</span>
                <h2 className="asa-h2">
                  AI Sales Assistants Built for <em>Your Sales Workflow</em>
                </h2>
                <p className="asa-p">
                  Sales teams spend significant time answering repetitive questions, researching prospects,
                  qualifying enquiries, updating customer information, and preparing follow-ups.
                </p>
                <p className="asa-p">
                  An AI sales assistant can automate or assist with these activities while allowing sales
                  representatives to focus on high-value conversations and relationship building. From website
                  lead capture to CRM-connected automation, we build around how your team actually works.
                </p>
                <p className="asa-p">
                  The level of automation can be tailored to your business processes and approval requirements.
                </p>
              </div>
              <div className="asa-rv">
                <span className="asa-eb">With a custom assistant, you can</span>
                <ul className="asa-ledger">
                  {CAN_DO.map((c) => (
                    <li className="asa-lg asa-c" key={c}>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ SERVICES — navy band ═════════════ */}
        <section className="asa-s asa-s--nv">
          <div className="asa-w">
            <div className="asa-hd asa-rv">
              <span className="asa-eb">What we build</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>Development Services</em>
              </h2>
              <p className="asa-p">
                Seven capabilities that combine into one sales system rather than a set of disconnected tools.
              </p>
            </div>
            <div className="asa-glass asa-rv">
              {SERVICES.map(([ico, t, d]) => (
                <div className="asa-gc asa-c" key={t}>
                  <span className="asa-gc__i">
                    <Ic d={ico} />
                  </span>
                  <h3 className="asa-gc__t">{t}</h3>
                  <p className="asa-gc__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ WHAT IT CAN DO ═════════════ */}
        <section className="asa-s">
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv">
              <span className="asa-eb">Capabilities</span>
              <h2 className="asa-h2">
                What Can an AI Sales Assistant <em>Do?</em>
              </h2>
              <p className="asa-p">A custom AI sales assistant can be designed to:</p>
            </div>
            <ul className="asa-ab asa-rv">
              {ABILITIES.map((a) => (
                <li className="asa-c" key={a}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12.5l5 5 11-11" />
                  </svg>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <p className="asa-note asa-rv">
              AI should support your sales process rather than make unrestricted business decisions. Important
              actions can include defined business rules, permissions, validation, or human approval.
            </p>
          </div>
        </section>

        {/* ═════════════ USE CASES ═════════════ */}
        <section className="asa-s asa-s--lb">
          <div className="asa-w">
            <div className="asa-hd asa-rv">
              <span className="asa-eb">Use cases</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>Use Cases</em>
              </h2>
              <p className="asa-p">
                Where a sales assistant compounds revenue rather than adding admin.
              </p>
            </div>
            <div className="asa-uc asa-rv">
              {USE_CASES.map(([ico, t, d], i) => (
                <div className="asa-ut asa-c" key={t}>
                  <span className="asa-ut__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="asa-ut__i">
                    <Ic d={ico} s={21} />
                  </span>
                  <h3 className="asa-ut__t">{t}</h3>
                  <p className="asa-ut__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="asa-figtop">
            <figure className="asa-fig asa-rv">
              <div className="asa-fig__f">
                <img
                  src={`${IMG}/ai-sales-assistant-use-cases.webp`}
                  alt="AI sales assistant use cases for businesses"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <figcaption className="asa-fig__c">
                Inbound qualification, meeting booking, catalog guidance, quotes, pipeline hygiene and SaaS
                trials.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ LEAD QUALIFICATION ═════════════ */}
        <section className="asa-s">
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv">
              <span className="asa-eb">Lead qualification</span>
              <h2 className="asa-h2">
                AI-Powered <em>Lead Qualification</em>
              </h2>
              <p className="asa-p">
                One of the most valuable applications of an AI sales assistant. Instead of sending every
                website enquiry straight to a representative, the system collects relevant information and
                applies your predefined qualification criteria.
              </p>
            </div>
            <div className="asa-rib asa-rv">
              {QUAL_FLOW.map((f, i) => (
                <span key={f} className="asa-c" style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                  {i > 0 ? (
                    <span className="asa-rib__a" aria-hidden>
                      →
                    </span>
                  ) : null}
                  <span className="asa-rib__n">{f}</span>
                </span>
              ))}
            </div>
            <p className="asa-note asa-rv">
              The exact qualification logic is designed around your sales process. This lets your team spend
              more time on relevant opportunities while keeping the experience responsive for every prospect.
            </p>
          </div>
          <div className="asa-figtop">
            <figure className="asa-fig asa-rv">
              <div className="asa-fig__f">
                <img
                  src={`${IMG}/ai-lead-qualification-workflow.webp`}
                  alt="AI-powered lead qualification workflow"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
              </div>
              <figcaption className="asa-fig__c">
                From raw enquiry to a routed, sales-ready opportunity &mdash; with every score explainable.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ PERSONALIZED CONVERSATIONS ═════════════ */}
        <section className="asa-s asa-s--lb">
          <div className="asa-w">
            <div className="asa-hd asa-rv">
              <span className="asa-eb">Context</span>
              <h2 className="asa-h2">
                Assistants That Use <em>Real Business Context</em>
              </h2>
              <p className="asa-p">
                Depending on your architecture and available data, an AI sales assistant can work with:
              </p>
            </div>
            <div className="asa-ctx asa-rv">
              {CONTEXT.map(([group, items]) => (
                <div className="asa-c" key={group}>
                  <div className="asa-ctx__k">{group}</div>
                  <div className="asa-chips">
                    {items.map((it) => (
                      <span className="asa-chip" key={it}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="asa-note asa-rv">
              For knowledge-intensive applications, Retrieval-Augmented Generation retrieves relevant
              information from approved sources before generating a response &mdash; the same approach behind
              our{" "}
              <a href="/ai-chatbot-development-company" className="asa-a">
                AI chatbot work
              </a>{" "}
              and{" "}
              <a href="/generative-ai-development-company" className="asa-a">
                generative AI development
              </a>
              .
            </p>
          </div>
        </section>

        {/* ═════════════ FEATURES ═════════════ */}
        <section className="asa-s">
          <div className="asa-w">
            <div className="asa-hd asa-rv">
              <span className="asa-eb">Features</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>Features</em>
              </h2>
            </div>
            <div className="asa-ft asa-rv">
              {FEATURES.map(([ico, t, d]) => (
                <div className="asa-fr asa-c" key={t}>
                  <span className="asa-fr__i">
                    <Ic d={ico} s={20} />
                  </span>
                  <span>
                    <h3 className="asa-fr__t">{t}</h3>
                    <p className="asa-fr__d">{d}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="asa-figtop">
            <figure className="asa-fig asa-fig--sm asa-rv">
              <div className="asa-fig__f">
                <img
                  src={`${IMG}/ai-sales-assistant-dashboard.webp`}
                  alt="AI sales assistant dashboard for lead management"
                  width={1000}
                  height={750}
                  loading="lazy"
                />
              </div>
              <figcaption className="asa-fig__c">
                Leads processed, qualified rate, response time and pipeline added &mdash; so sales automation
                stays measurable.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ ARCHITECTURE ═════════════ */}
        <section className="asa-s asa-s--nv">
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv">
              <span className="asa-eb">Architecture</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>Architecture</em>
              </h2>
              <p className="asa-p">A typical AI sales assistant follows this workflow:</p>
            </div>
            <div className="asa-rib asa-rv">
              {ARCH_FLOW.map((f, i) => (
                <span key={f} className="asa-c" style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                  {i > 0 ? (
                    <span className="asa-rib__a" aria-hidden>
                      →
                    </span>
                  ) : null}
                  <span className="asa-rib__n">{f}</span>
                </span>
              ))}
            </div>
            <p className="asa-note asa-rv">
              The architecture adapts depending on whether the AI is used primarily for lead generation, sales
              assistance, product discovery or broader sales automation. For higher-risk or business-critical
              actions, human approval and predefined controls can be built into the workflow.
            </p>
          </div>
          <div className="asa-figtop">
            <figure className="asa-fig asa-rv">
              <div className="asa-fig__f">
                <img
                  src={`${IMG}/ai-sales-assistant-architecture.webp`}
                  alt="AI sales assistant architecture with CRM integration"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
              </div>
              <figcaption className="asa-fig__c">
                Capture, conversation, enrichment, scoring, CRM sync and the sales team as one connected stack.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ VS AI CHATBOT — table on navy ═════════════ */}
        <section className="asa-s asa-s--nv" style={{ paddingTop: 0 }}>
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv" style={{ paddingTop: 20 }}>
              <span className="asa-eb">Comparison</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>vs AI Chatbot</em>
              </h2>
              <p className="asa-p">
                They can look similar from the user&rsquo;s side, but their objectives differ.
              </p>
            </div>
            <div className="asa-tbl asa-rv">
              <div className="asa-tr asa-tr--h">
                <div className="asa-td">AI Chatbot</div>
                <div className="asa-td">AI Sales Assistant</div>
              </div>
              {COMPARE.map(([l, r]) => (
                <div className="asa-tr" key={r}>
                  <div className="asa-td">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                    {l}
                  </div>
                  <div className="asa-td">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12.5l5 5 11-11" />
                    </svg>
                    {r}
                  </div>
                </div>
              ))}
            </div>
            <p className="asa-tnote asa-rv">
              An AI sales assistant can also use a chatbot interface as its customer-facing layer &mdash; see
              our{" "}
              <a href="/ai-chatbot-development-company" className="asa-a">
                AI chatbot development
              </a>{" "}
              and{" "}
              <a href="/ai-customer-support-system" className="asa-a">
                AI customer support
              </a>{" "}
              pages for the other two intents.
            </p>
          </div>
        </section>

        {/* ═════════════ SALES STACK ═════════════ */}
        <section className="asa-s asa-s--lb">
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv">
              <span className="asa-eb">Integration</span>
              <h2 className="asa-h2">
                Integrating AI With Your <em>Existing Sales Stack</em>
              </h2>
              <p className="asa-p">
                Your AI sales assistant does not have to operate as an isolated application. Depending on your
                systems, it can integrate with:
              </p>
            </div>
            <div className="asa-chips asa-rv" style={{ justifyContent: "center", maxWidth: 900, margin: "0 auto" }}>
              {STACK.map((s) => (
                <span className="asa-chip asa-c" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <p className="asa-note asa-rv">
              This allows AI-generated interactions to become part of your existing sales workflow rather than
              creating another disconnected tool.
            </p>
          </div>
        </section>

        {/* ═════════════ PROCESS ═════════════ */}
        <section className="asa-s">
          <div className="asa-w">
            <div className="asa-hd asa-rv">
              <span className="asa-eb">Process</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>Development Process</em>
              </h2>
              <p className="asa-p">
                Six stages from sales-process discovery through to continuous optimization.
              </p>
            </div>
            <div className="asa-pr asa-rv">
              {PROCESS.map(([n, ico, t, d]) => (
                <div className="asa-pc asa-c" key={n}>
                  <span className="asa-pc__n">{n}</span>
                  <span className="asa-pc__i">
                    <Ic d={ico} s={20} />
                  </span>
                  <h3 className="asa-pc__t">{t}</h3>
                  <p className="asa-pc__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="asa-figtop">
            <figure className="asa-fig asa-rv">
              <div className="asa-fig__f">
                <img
                  src={`${IMG}/ai-sales-assistant-development-process.webp`}
                  alt="AI sales assistant development process"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
              </div>
              <figcaption className="asa-fig__c">
                Six stages from revenue discovery through validation against closed-won history.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ WHY US ═════════════ */}
        <section className="asa-s asa-s--lb">
          <div className="asa-w">
            <div className="asa-hd asa-rv">
              <span className="asa-eb">Why mTouch Labs</span>
              <h2 className="asa-h2">
                Why Choose Us for <em>AI Sales Assistant Development?</em>
              </h2>
              <p className="asa-p">
                We combine AI development, software engineering, data technologies and application development
                to create sales AI that fits real business environments. Browse our{" "}
                <a href="/portfolio" className="asa-a">
                  portfolio
                </a>{" "}
                and{" "}
                <a href="/case-studies" className="asa-a">
                  case studies
                </a>{" "}
                for shipped examples.
              </p>
            </div>
            <div className="asa-pr asa-rv">
              {WHY.map(([ico, t, d]) => (
                <div className="asa-pc asa-c" key={t}>
                  <span className="asa-pc__i">
                    <Ic d={ico} s={20} />
                  </span>
                  <h3 className="asa-pc__t">{t}</h3>
                  <p className="asa-pc__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="asa-figtop">
            <figure className="asa-fig asa-rv">
              <div className="asa-fig__f">
                <img
                  src={`${IMG}/ai-sales-assistant-solution-mtouchlabs.webp`}
                  alt="AI sales assistant solution developed by mTouch Labs"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <figcaption className="asa-fig__c">
                Instant response, explainable scoring, two-way CRM sync and revenue analytics around one
                assistant.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ TECHNOLOGY ═════════════ */}
        <section className="asa-s">
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv">
              <span className="asa-eb">Technology</span>
              <h2 className="asa-h2">
                AI Sales Assistant <em>Technology</em>
              </h2>
              <p className="asa-p">Depending on your requirements, the solution may use:</p>
            </div>
            <div className="asa-chips asa-rv" style={{ justifyContent: "center", maxWidth: 940, margin: "0 auto" }}>
              {TECH.map((t) => (
                <span className="asa-chip asa-c" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p className="asa-note asa-rv">
              Technology is selected according to the business use case, data requirements, integrations,
              security, scalability, response quality, latency and cost &mdash; not a fixed stack applied to
              every project. Related:{" "}
              <a href="/generative-ai-development-company" className="asa-a">
                Generative AI Development
              </a>{" "}
              and{" "}
              <a href="/machine-learning-development-company" className="asa-a">
                Machine Learning Development
              </a>
              .
            </p>
          </div>
        </section>

        {/* ═════════════ FAQ ═════════════ */}
        <section className="asa-s asa-s--lb">
          <div className="asa-w">
            <div className="asa-hd asa-hd--mid asa-rv">
              <span className="asa-eb">FAQ</span>
              <h2 className="asa-h2">
                Frequently Asked <em>Questions</em>
              </h2>
            </div>
            <div className="asa-faq asa-rv">
              {FAQS.map((f) => (
                <details className="asa-fq asa-c" key={f.q}>
                  <summary className="asa-fq__q">
                    <span>{f.q}</span>
                    <span className="asa-fq__s" aria-hidden />
                  </summary>
                  <div className="asa-fq__a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ CTA ═════════════ */}
        <section className="asa-cta">
          <div className="asa-cta__in asa-rv">
            <h2 className="asa-cta__h">Turn Your Sales Process Into an AI-Powered Experience</h2>
            <p className="asa-cta__t">
              Give prospects faster answers and help your sales team focus on conversations that matter.
              mTouch Labs develops custom AI sales assistants for lead qualification, customer engagement,
              product discovery, sales assistance, and business automation.{" "}
              <a href="/contact-us">Talk to mTouch Labs</a> about your AI sales assistant.
            </p>
            <button type="button" className="asa-cta__b js-open-modal">
              Build Your AI Sales Assistant <i aria-hidden>→</i>
            </button>
          </div>
        </section>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var d=document;
if(!d.documentElement.classList.contains('asa-on'))return;
var n=d.querySelectorAll('.asa .asa-rv');
if(!n.length)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},
{rootMargin:'0px 0px -10% 0px',threshold:0.06});
for(var i=0;i<n.length;i++)io.observe(n[i]);})();`,
        }}
      />
    </>
  );
}
