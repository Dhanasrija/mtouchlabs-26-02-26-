import type { Metadata } from "next";
import type { ReactNode } from "react";
import ServiceHero from "@/components/sections/ServiceHero";

const IMG = "/images/products/ai_customer_support";

export const metadata: Metadata = {
  title: "AI Customer Support System Development | mTouch Labs",
  description:
    "Build an AI customer support system with mTouch Labs to automate customer queries, assist support teams, resolve tickets, and deliver faster service.",
  keywords: [
    "AI Customer Support System Development",
    "AI customer support",
    "AI customer service",
    "AI customer support software",
    "AI support chatbot",
    "AI customer service automation",
    "AI support agent",
    "customer support automation",
    "AI customer support solution",
  ],
  alternates: { canonical: "/ai-customer-support-system" },
  openGraph: {
    title: "AI Customer Support System Development | mTouch Labs",
    description:
      "Custom AI customer support systems that automate queries, resolve tickets, assist agents, and escalate to humans when needed.",
    url: "https://www.mtouchlabs.com/ai-customer-support-system",
    siteName: "mTouch Labs",
    images: [
      {
        url: `${IMG}/ai-customer-support-system-mtouchlabs.webp`,
        width: 1200,
        height: 630,
        alt: "AI customer support system by mTouch Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Support System Development | mTouch Labs",
    description:
      "Automate customer queries, assist support teams, and resolve tickets faster with a custom AI customer support system.",
    images: [`${IMG}/ai-customer-support-system-mtouchlabs.webp`],
  },
  robots: { index: true, follow: true },
};

/* ════════════════════════════════════════════════════════════
   ICONS — monoline, inherit currentColor
   ════════════════════════════════════════════════════════════ */
const I = {
  chat: (
    <>
      <path d="M20.5 4H3.5A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16H7l4 4 4-4h5.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 20.5 4z" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4v4M8.5 13h.01M15.5 13h.01M9 17h6" />
    </>
  ),
  ticket: (
    <>
      <path d="M3.5 8.5V6.4A1.4 1.4 0 0 1 4.9 5h14.2a1.4 1.4 0 0 1 1.4 1.4v2.1a2.6 2.6 0 0 0 0 7v2.1a1.4 1.4 0 0 1-1.4 1.4H4.9a1.4 1.4 0 0 1-1.4-1.4v-2.1a2.6 2.6 0 0 0 0-7z" />
      <path d="M9.5 10.5h5M9.5 14h3" />
    </>
  ),
  book: (
    <>
      <path d="M4.4 5.4a2 2 0 0 1 2-2H12v17.2H6.4a2 2 0 0 1-2-2V5.4z" />
      <path d="M19.6 5.4a2 2 0 0 0-2-2H12v17.2h5.6a2 2 0 0 0 2-2V5.4z" />
    </>
  ),
  assist: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20.2a6.2 6.2 0 0 1 12.4 0" />
      <path d="M18 4.6l1.2 3.2 3.2 1.2-3.2 1.2L18 13.4l-1.2-3.2L13.6 9l3.2-1.2L18 4.6z" />
    </>
  ),
  gear: (
    <>
      <path d="M20.4 12a8.4 8.4 0 1 1-2.5-6" />
      <path d="M18 3.2v3.4h-3.4" />
      <path d="M9.6 12.2l1.9 1.9 3.6-3.6" />
    </>
  ),
  plug: <path d="M8.5 3.5v5M15.5 3.5v5M6 8.5h12v3a6 6 0 0 1-12 0v-3zM12 17.5v3" />,
  devices: (
    <>
      <rect x="2.6" y="4.2" width="13" height="10" rx="2" />
      <rect x="16.6" y="9.2" width="5.4" height="11" rx="1.8" />
      <path d="M6 17.6h6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2M12 3.4c2.3 2.4 3.4 5.4 3.4 8.6s-1.1 6.2-3.4 8.6c-2.3-2.4-3.4-5.4-3.4-8.6S9.7 5.8 12 3.4z" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2.6" width="6" height="11" rx="3" />
      <path d="M5.4 11.4a6.6 6.6 0 0 0 13.2 0M12 18v3.4M8.6 21.4h6.8" />
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
  bank: (
    <>
      <path d="M3.4 9.6 12 4.4l8.6 5.2" />
      <path d="M5.4 11v7.4M10 11v7.4M14 11v7.4M18.6 11v7.4M2.8 20.4h18.4" />
    </>
  ),
  health: (
    <>
      <path d="M12 20.5S4 15.9 4 10.3A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 8 2.3c0 5.6-8 10.2-8 10.2z" />
      <path d="M12 11v3.4M10.3 12.7h3.4" />
    </>
  ),
  plane: <path d="M2.6 13.4l18.8-6.2-6.2 13.4-2.6-5.4-5.4-2.6z" />,
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
  shield: (
    <>
      <path d="M12 2.8l7.6 3v6.1c0 4.6-3.1 8.2-7.6 9.3-4.5-1.1-7.6-4.7-7.6-9.3V5.8l7.6-3z" />
      <path d="M8.9 12.1l2 2 4.2-4.2" />
    </>
  ),
  truck: (
    <>
      <path d="M2.6 6.6h10.8v9.8H2.6zM13.4 10h4l3 3.2v3.2h-7z" />
      <circle cx="6.6" cy="18.4" r="1.8" />
      <circle cx="16.8" cy="18.4" r="1.8" />
    </>
  ),
  signal: (
    <>
      <path d="M4 20V9M9.4 20V4M14.8 20v-8M20.2 20V6.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2V12l3.4 2" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 3.5A3.5 3.5 0 0 0 6 7v.6A3.4 3.4 0 0 0 3.4 11a3.4 3.4 0 0 0 1.2 2.6A3.4 3.4 0 0 0 8 20.5h1.5V3.5z" />
      <path d="M14.5 3.5A3.5 3.5 0 0 1 18 7v.6A3.4 3.4 0 0 1 20.6 11a3.4 3.4 0 0 1-1.2 2.6A3.4 3.4 0 0 1 16 20.5h-1.5V3.5z" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="M8.6 6h4.8a3 3 0 0 1 0 6H10a3 3 0 0 0 0 6h5.4" />
    </>
  ),
  hands: (
    <>
      <path d="M4.4 14v-1.8a7.6 7.6 0 0 1 15.2 0V14" />
      <rect x="2.6" y="13.4" width="3.8" height="6.2" rx="1.9" />
      <rect x="17.6" y="13.4" width="3.8" height="6.2" rx="1.9" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" />
      <path d="M18.5 3.5v3M20 5h-3" />
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
  check2: (
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
  building: (
    <>
      <path d="M4 20.4V5.2a1 1 0 0 1 1-1h7.4a1 1 0 0 1 1 1v15.2" />
      <path d="M13.4 20.4V10h5.6a1 1 0 0 1 1 1v9.4M2.6 20.4h18.8" />
      <path d="M7 8h3M7 11.6h3M7 15.2h3" />
    </>
  ),
  trend: <path d="M3 17.5 9 11l4 3.4 8-9M15 5.5h6v6" />,
  store: (
    <>
      <path d="M3.4 9.2 5 4.4h14l1.6 4.8" />
      <path d="M4.4 9.2v10.4a.8.8 0 0 0 .8.8h13.6a.8.8 0 0 0 .8-.8V9.2" />
      <path d="M3.4 9.2h17.2M9.4 20.4v-5.6h5.2v5.6" />
    </>
  ),
  food: (
    <>
      <path d="M6 3v7a2.4 2.4 0 0 0 4.8 0V3M8.4 12.4v8.2" />
      <path d="M16.4 3c1.8 0 3.2 1.8 3.2 4.2s-1.4 4-3.2 4.2v9.2" />
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

const SERVICES: [ReactNode, string, ReactNode][] = [
  [
    I.chat,
    "AI Support Chatbots",
    <>
      Conversational AI experiences that answer customer questions using your approved business information
      and predefined support workflows. Related:{" "}
      <a href="/ai-chatbot-development-company" className="acs-a">
        AI Chatbot Development
      </a>
      .
    </>,
  ],
  [
    I.bot,
    "AI Support Agents",
    "AI agents that can retrieve information, use connected tools, and perform defined support tasks rather than only answering questions.",
  ],
  [
    I.ticket,
    "AI Ticket Automation",
    "Automatically understand incoming support requests, categorize them, prioritize them, and route them to the appropriate workflow or support team.",
  ],
  [
    I.book,
    "AI Knowledge Base Integration",
    "Connect your support system with product documentation, FAQs, manuals, policies, and other approved business information.",
  ],
  [
    I.assist,
    "AI Agent Assist",
    "Help human support representatives find information, summarize conversations, draft responses, and handle repetitive support activities more efficiently.",
  ],
  [
    I.gear,
    "Customer Support Automation",
    "Automate repetitive customer service workflows while keeping human intervention available for complex or sensitive requests.",
  ],
  [
    I.plug,
    "CRM & Helpdesk Integration",
    <>
      Connect AI support systems with your existing{" "}
      <a href="/custom-crm-software-development-company" className="acs-a">
        CRM
      </a>
      , helpdesk, customer portal, databases, and business APIs.
    </>,
  ],
  [
    I.devices,
    "Omnichannel Support Deployment",
    "Serve customers across your website, mobile app, customer portal, email, and messaging channels such as WhatsApp — from one AI support core and one knowledge source.",
  ],
  [
    I.globe,
    "Multilingual AI Support",
    "Handle customer conversations in multiple languages from the same approved knowledge base, so support coverage expands without duplicating content or teams.",
  ],
  [
    I.mic,
    "Voice AI Support",
    "Extend the same support intelligence to phone and IVR conversations — transcribe calls, understand intent, answer routine questions, and hand off to an agent with the transcript attached.",
  ],
];

const USE_CASES: [ReactNode, string, ReactNode][] = [
  [
    I.cart,
    "E-commerce Customer Support",
    <>
      Product questions, order-related enquiries, returns, shipping information, and common purchasing
      questions across your{" "}
      <a href="/ecommerce-app-development-company" className="acs-a">
        ecommerce platform
      </a>
      .
    </>,
  ],
  [
    I.cloud,
    "SaaS Customer Support",
    <>
      Help users understand product features, search documentation, troubleshoot common issues, and navigate
      support resources inside your{" "}
      <a href="/saas-development-services" className="acs-a">
        SaaS product
      </a>
      .
    </>,
  ],
  [
    I.bank,
    "Banking & Financial Services",
    "Approved informational workflows such as account-related FAQs, product information, and service navigation. Sensitive financial decisions should remain subject to appropriate human and system controls.",
  ],
  [
    I.health,
    "Healthcare Support",
    "Approved administrative and informational workflows such as appointment-related enquiries and service information. AI should not replace qualified professionals for diagnosis or treatment decisions.",
  ],
  [
    I.plane,
    "Travel & Hospitality",
    "Automate questions about bookings, services, policies, destinations, and customer requests.",
  ],
  [
    I.home,
    "Real Estate",
    "Assist customers with property-related enquiries, listing information, lead qualification, and appointment workflows.",
  ],
  [
    I.cap,
    "Education",
    "Help students and users find information about courses, programs, admissions, schedules, and other approved resources.",
  ],
  [
    I.shield,
    "Insurance",
    "Policy coverage questions, document requirements, renewal and claim-status enquiries, with complex cases routed to licensed staff. Coverage and claim decisions stay under human and system control.",
  ],
  [
    I.truck,
    "Logistics & Delivery",
    "Shipment tracking, delivery-window questions, address changes, and delayed or failed delivery exceptions — with live status pulled from your own systems.",
  ],
  [
    I.signal,
    "Telecom & Utilities",
    "Plan and billing enquiries, usage questions, outage and service status, SIM or connection requests, and appointment booking for field visits.",
  ],
  [
    I.store,
    "Retail & Consumer Brands",
    "Store hours and locations, stock availability, order pickup, warranty and returns, and loyalty programme questions across online and in-store customers.",
  ],
  [
    I.food,
    "Food Delivery & Restaurants",
    <>
      Order status, menu and allergen questions, refunds for missing or late items, and delivery issues &mdash;
      wired into your{" "}
      <a href="/food-delivery-app-development-service" className="acs-a">
        food delivery platform
      </a>
      .
    </>,
  ],
];

const SUPPORTS: string[] = [
  "Customer query automation",
  "AI-powered support conversations",
  "Ticket classification and routing",
  "FAQ automation",
  "Product and service assistance",
  "Knowledge-base search",
  "Customer issue summarization",
  "Support-agent assistance",
  "CRM and helpdesk integration",
  "Human-agent escalation",
];

const CAPABILITIES: string[] = [
  "Answer frequently asked questions",
  "Understand customer intent",
  "Retrieve relevant product information",
  "Classify support tickets",
  "Route requests to the right team",
  "Summarize customer conversations",
  "Suggest responses to support agents",
  "Search company knowledge",
  "Assist with product troubleshooting",
  "Collect customer information",
  "Track support requests",
  "Escalate complex conversations",
  "Connect with CRM and helpdesk systems",
];

const FLOW: string[] = [
  "Customer Question",
  "Intent Detection",
  "Knowledge Retrieval",
  "AI Response",
  "Action or Human Escalation",
];

const LAYERS: [ReactNode, string, string][] = [
  [I.chat, "Customer Interface", "Website, mobile application, customer portal, or messaging channel."],
  [I.brain, "AI Conversation Layer", "Understands the customer's request and maintains conversational context."],
  [
    I.book,
    "Knowledge & Retrieval Layer",
    "Retrieves relevant information from approved documents, FAQs, databases, or knowledge repositories.",
  ],
  [I.plug, "Business Integration Layer", "Connects with CRM, helpdesk, APIs, databases, and other systems."],
  [I.hands, "Human Support Layer", "Escalates conversations when human intervention is required."],
];

const FEATURES: [ReactNode, string, string][] = [
  [I.clock, "24/7 AI Assistance", "Immediate responses to common questions outside traditional support hours."],
  [I.brain, "Context-Aware Conversations", "Maintain relevant conversational context for more natural interactions."],
  [I.book, "Knowledge-Based Responses", "Ground responses in approved business information and documentation."],
  [I.route, "Intelligent Ticket Routing", "Classify customer requests and route them by your support workflows."],
  [I.hands, "Human Handoff", "Transfer to human representatives when the request needs more assistance."],
  [I.spark, "Support Agent Copilot", "AI help for searching information, summarizing threads and drafting replies."],
  [I.plug, "CRM Integration", "Connect support conversations with customer records and business workflows."],
  [I.chart, "Analytics", "Track conversations, common queries, resolution patterns and defined metrics."],
];

const PROCESS: [string, ReactNode, string, string][] = [
  [
    "01",
    I.search,
    "Support Workflow Discovery",
    "We analyze your customer journeys, support requests, existing systems, knowledge sources, and automation opportunities.",
  ],
  [
    "02",
    I.layers,
    "AI Solution Architecture",
    "We define the AI model strategy, knowledge architecture, integrations, workflows, escalation logic, and security requirements.",
  ],
  [
    "03",
    I.db,
    "Knowledge Integration",
    "Your approved FAQs, documentation, product information, policies, and other relevant sources can be prepared for AI retrieval.",
  ],
  [
    "04",
    I.code,
    "AI Development",
    "We build the conversational experience, support workflows, integrations, and AI capabilities required for your use case.",
  ],
  [
    "05",
    I.check2,
    "Testing & Evaluation",
    "We evaluate response quality, retrieval accuracy, conversation flows, edge cases, integrations, and escalation behaviour.",
  ],
  [
    "06",
    I.rocket,
    "Deployment & Optimization",
    "After deployment, the system can be monitored and refined based on customer interactions, support requirements, and business feedback.",
  ],
];

const WHY: [string, string][] = [
  [
    "Business-specific AI",
    "Your AI support system is designed around your products, customers, workflows, and knowledge.",
  ],
  [
    "Connected support systems",
    "Integrate AI with CRM platforms, helpdesks, APIs, databases, and customer applications.",
  ],
  [
    "Human + AI collaboration",
    "Automate suitable interactions while keeping human representatives involved where required.",
  ],
  [
    "Scalable architecture",
    "Design the solution to support changing customer volumes, knowledge sources, and business requirements.",
  ],
  [
    "End-to-end development",
    "From AI strategy and UX to development, integration, testing, deployment, and optimization.",
  ],
  [
    "Measured, not assumed",
    "Response quality, retrieval accuracy and escalation behaviour are evaluated before launch and monitored after it.",
  ],
];

const TECH: [string, string[]][] = [
  ["AI & models", ["Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Embeddings", "AI orchestration frameworks"]],
  ["Data", ["Vector databases", "Knowledge indexing", "Cloud infrastructure"]],
  ["Engineering", ["Python", "Node.js", "React", "REST APIs"]],
  ["Business systems", ["CRM integrations", "Helpdesk integrations"]],
];

const SIZES: [ReactNode, string, string][] = [
  [I.rocket, "Startups", "Automate repetitive customer questions without requiring a large support operation."],
  [
    I.trend,
    "Growing Businesses",
    "Combine AI automation with human support to handle increasing customer interaction volumes.",
  ],
  [
    I.building,
    "Enterprises",
    "Integrate AI customer support with existing knowledge systems, CRM platforms, helpdesks, applications, and enterprise workflows.",
  ],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI customer support system?",
    a: "An AI customer support system is software that uses artificial intelligence to understand customer requests, retrieve information, provide responses, automate support workflows, and assist human support teams.",
  },
  {
    q: "How does AI improve customer support?",
    a: "AI can automate repetitive interactions, provide faster responses, help agents find information, classify support requests, and support customers outside traditional service hours.",
  },
  {
    q: "Can AI customer support use our existing knowledge base?",
    a: "Yes. Approved FAQs, documentation, policies, product information, and other business knowledge can be connected to an AI support system.",
  },
  {
    q: "Can AI customer support integrate with our CRM?",
    a: "Yes. AI support systems can integrate with CRM platforms and other business applications through available APIs and appropriate access controls.",
  },
  {
    q: "Can an AI support system transfer customers to human agents?",
    a: "Yes. Human escalation can be incorporated when a conversation requires human expertise or falls outside the AI system's defined capabilities.",
  },
  {
    q: "Is an AI customer support system the same as an AI chatbot?",
    a: "Not necessarily. An AI chatbot is primarily a conversational interface, while an AI customer support system can include chat, knowledge retrieval, ticket automation, CRM integration, agent assistance, analytics, and human escalation.",
  },
  {
    q: "How much does AI customer support software cost?",
    a: "Development cost depends on the required features, AI architecture, integrations, data sources, security requirements, channels, and expected usage.",
  },
];

const RELATED: [string, string, string][] = [
  ["/ai-chatbot-development-company", "AI Chatbot Development", "Custom AI chatbots with RAG, LLM integration and enterprise connectors."],
  ["/generative-ai-development-company", "Generative AI Development", "LLM-powered applications, RAG pipelines and production AI automation."],
  ["/custom-crm-software-development-company", "Custom CRM Development", "The system your support conversations and qualified leads land in."],
  ["/machine-learning-development-company", "Machine Learning Development", "Prediction, classification and scoring models behind support intelligence."],
  ["/saas-development-services", "SaaS Development", "In-product support assistants for your software platform."],
  ["/quality-assurance-and-testing-services", "QA & Testing Services", "Independent evaluation of AI responses, retrieval quality and edge cases."],
];

export default function AICustomerSupportSystem() {
  return (
    <>
      {/* ═════════════ STRUCTURED DATA ═════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Customer Support System Development",
            description:
              "mTouch Labs develops custom AI customer support systems that automate customer queries, retrieve knowledge, classify and route tickets, assist support agents, and escalate to humans when required.",
            url: "https://www.mtouchlabs.com/ai-customer-support-system",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "AI Customer Support System Development",
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
                name: "AI Customer Support System Development",
                item: "https://www.mtouchlabs.com/ai-customer-support-system",
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

      {/* ═════════════ PAGE-LOCAL STYLES ═════════════
          A layout system unique to this page — hairline service rows,
          a horizontal stepper, a left-rail architecture timeline, an
          alternating process timeline, a dark "why us" band and a warm
          amber CTA. Palette is the site's own (amber #e8a025 on warm
          neutrals) so it stays on-brand without copying the chatbot
          page's card-grid layout.

          Scoped entirely under .acs so it cannot affect other pages.
          NOTE: global .ga-animate* classes are overridden to
          `animation:none` in bundle.css, so reveals use .acs-rv +
          an IntersectionObserver instead. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
.acs{
  --a:#e8a025; --a2:#d4911e; --a-soft:rgba(232,160,37,.12);
  --ink:#26262b; --txt:#5f5f66; --mut:#8a8a91;
  --bd:#e8e6e1; --warm:#faf8f4; --dark:#17171b;
  --ff: var(--font-primary, 'Poppins', system-ui, sans-serif);
}
.acs *, .acs *::before, .acs *::after { box-sizing:border-box; }

/* ── reveal ─────────────────────────────────────────────── */
.acs .acs-rv{opacity:1;}
html.acs-on .acs .acs-rv{
  opacity:0; transform:translateY(24px);
  transition:opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1);
  will-change:opacity,transform;
}
html.acs-on .acs .acs-rv.in{opacity:1;transform:none;}
html.acs-on .acs .acs-rv .acs-c{opacity:0;transform:translateY(18px);
  transition:opacity .55s cubic-bezier(.22,.61,.36,1), transform .55s cubic-bezier(.22,.61,.36,1);}
html.acs-on .acs .acs-rv.in .acs-c{opacity:1;transform:none;}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(1){transition-delay:.03s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(2){transition-delay:.07s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(3){transition-delay:.11s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(4){transition-delay:.15s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(5){transition-delay:.19s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(6){transition-delay:.23s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(7){transition-delay:.27s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(8){transition-delay:.31s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(9){transition-delay:.35s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(10){transition-delay:.39s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(11){transition-delay:.43s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(12){transition-delay:.47s}
html.acs-on .acs .acs-rv.in .acs-c:nth-child(13){transition-delay:.51s}

/* ── shell ──────────────────────────────────────────────── */
.acs-s{padding:84px 0;background:#fff;}
.acs-s--warm{background:var(--warm);}
.acs-w{max-width:1160px;margin:0 auto;padding:0 28px;}
.acs-eyebrow{
  display:inline-flex;align-items:center;gap:9px;margin:0 0 16px;
  font-family:var(--ff);font-size:.72rem;font-weight:700;letter-spacing:.16em;
  text-transform:uppercase;color:var(--a2);
}
.acs-eyebrow::before{content:'';width:26px;height:2px;background:var(--a);border-radius:2px;}
.acs-h2{
  font-family:var(--ff);font-size:2.15rem;line-height:1.28;font-weight:700;
  color:var(--ink);margin:0 0 16px;letter-spacing:-.02em;
}
.acs-h2 em{font-style:normal;color:var(--a);}
.acs-lead{font-family:var(--ff);font-size:1.02rem;line-height:1.75;color:var(--txt);margin:0 0 14px;max-width:66ch;}
.acs-lead:last-child{margin-bottom:0;}
.acs-hd{max-width:720px;margin-bottom:52px;}
.acs-hd--mid{margin-left:auto;margin-right:auto;text-align:center;}
.acs-hd--mid .acs-eyebrow{justify-content:center;}
.acs-hd--mid .acs-lead{margin-left:auto;margin-right:auto;}
.acs a.acs-a,.acs a.acs-a:link,.acs a.acs-a:visited{color:#2563eb;text-decoration:none;font-weight:600;}
.acs a.acs-a:hover{text-decoration:none;color:#1d4ed8;}
.acs-dark a.acs-a:hover{color:var(--a2);}

/* ── split intro ────────────────────────────────────────── */
.acs-split{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:start;}
.acs-panel{
  border:1px solid var(--bd);border-radius:16px;background:#fff;overflow:hidden;
  box-shadow:0 1px 2px rgba(0,0,0,.03);
}
.acs-panel__hd{
  padding:18px 24px;background:var(--warm);border-bottom:1px solid var(--bd);
  font-family:var(--ff);font-size:.82rem;font-weight:700;letter-spacing:.09em;
  text-transform:uppercase;color:var(--ink);
}
.acs-panel__b{padding:8px 24px 14px;}
.acs-tick{
  display:flex;align-items:flex-start;gap:13px;padding:12px 0;
  border-bottom:1px dashed var(--bd);
  font-family:var(--ff);font-size:.95rem;line-height:1.6;color:var(--txt);
}
.acs-tick:last-child{border-bottom:0;}
.acs-tick__i{
  flex:0 0 20px;width:20px;height:20px;border-radius:50%;margin-top:1px;
  display:flex;align-items:center;justify-content:center;
  background:var(--a-soft);color:var(--a2);font-size:.66rem;font-weight:800;
}

/* ── hairline service rows (unique to this page) ─────────── */
.acs-rows{display:grid;grid-template-columns:1fr 1fr;gap:0 52px;border-top:1px solid var(--bd);}
.acs-row{
  display:flex;gap:20px;padding:26px 18px 26px 0;border-bottom:1px solid var(--bd);
  position:relative;transition:padding-left .38s cubic-bezier(.22,.61,.36,1), background .38s ease;
}
.acs-row::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--a);
  transform:scaleY(0);transform-origin:top;transition:transform .38s cubic-bezier(.22,.61,.36,1);
}
.acs-row:hover{padding-left:18px;background:linear-gradient(90deg,var(--warm),rgba(250,248,244,0));}
.acs-row:hover::before{transform:scaleY(1);}
.acs-row__i{
  flex:0 0 44px;width:44px;height:44px;border-radius:12px;
  display:flex;align-items:center;justify-content:center;
  border:1px solid var(--bd);background:#fff;color:var(--a2);
  transition:background .38s ease,color .38s ease,border-color .38s ease,transform .38s ease;
}
.acs-row:hover .acs-row__i{
  background:var(--a);color:#fff;border-color:var(--a);transform:scale(1.06) rotate(-4deg);
  box-shadow:0 8px 20px rgba(232,160,37,.35);
}
.acs-row__t{font-family:var(--ff);font-size:1.06rem;font-weight:600;color:var(--ink);margin:2px 0 7px;}
.acs-row__d{font-family:var(--ff);font-size:.92rem;line-height:1.7;color:var(--txt);margin:0;}

/* ── capability columns ─────────────────────────────────── */
.acs-caps{
  list-style:none;margin:0;padding:0;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(276px,1fr));gap:0 44px;
}
.acs-caps li{
  display:flex;align-items:flex-start;gap:12px;padding:13px 0;border-bottom:1px solid var(--bd);
  font-family:var(--ff);font-size:.95rem;line-height:1.6;color:var(--txt);
  transition:color .3s ease,padding-left .3s ease;
}
.acs-caps li:hover{color:var(--ink);padding-left:6px;}
.acs-caps svg{flex:0 0 17px;color:var(--a);margin-top:3px;}

/* ── use-case tiles (top-rail accent) ───────────────────── */
.acs-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.acs-tile{
  position:relative;overflow:hidden;padding:28px 26px;
  border:1px solid var(--bd);border-radius:14px;background:#fff;
  transition:transform .38s cubic-bezier(.22,.61,.36,1),box-shadow .38s ease,border-color .38s ease;
}
.acs-tile::after{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,var(--a),var(--a2));
  transform:scaleX(0);transform-origin:left;transition:transform .42s cubic-bezier(.22,.61,.36,1);
}
.acs-tile:hover{
  transform:translateY(-6px);border-color:rgba(232,160,37,.42);
  box-shadow:0 20px 44px rgba(232,160,37,.15);
}
.acs-tile:hover::after{transform:scaleX(1);}
.acs-tile__i{
  width:46px;height:46px;border-radius:12px;margin-bottom:18px;
  display:flex;align-items:center;justify-content:center;
  background:var(--a-soft);color:var(--a2);
  transition:transform .38s cubic-bezier(.22,.61,.36,1);
}
.acs-tile:hover .acs-tile__i{transform:scale(1.1) rotate(-5deg);}
.acs-tile__t{font-family:var(--ff);font-size:1.06rem;font-weight:600;color:var(--ink);margin:0 0 9px;}
.acs-tile__d{font-family:var(--ff);font-size:.92rem;line-height:1.7;color:var(--txt);margin:0;}

/* ── horizontal stepper ─────────────────────────────────── */
.acs-step{position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:0;padding-top:8px;}
.acs-step::before{
  content:'';position:absolute;left:10%;right:10%;top:31px;height:2px;
  background:linear-gradient(90deg,var(--bd),var(--a),var(--bd));
}
.acs-stepi{position:relative;text-align:center;padding:0 10px;}
.acs-stepi__n{
  position:relative;z-index:1;width:46px;height:46px;margin:0 auto 16px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  background:#fff;border:2px solid var(--a);color:var(--a2);
  font-family:var(--ff);font-size:.86rem;font-weight:800;
  box-shadow:0 0 0 6px #fff, 0 6px 16px rgba(232,160,37,.24);
  transition:transform .38s cubic-bezier(.22,.61,.36,1),background .38s ease,color .38s ease;
}
.acs-stepi:hover .acs-stepi__n{background:var(--a);color:#fff;transform:translateY(-4px) scale(1.06);}
.acs-stepi__t{font-family:var(--ff);font-size:.92rem;font-weight:600;line-height:1.5;color:var(--ink);}

/* ── architecture: left-rail timeline ───────────────────── */
.acs-rail{position:relative;max-width:880px;margin:0 auto;padding-left:70px;}
.acs-rail::before{
  content:'';position:absolute;left:23px;top:14px;bottom:14px;width:2px;
  background:linear-gradient(180deg,var(--a),rgba(232,160,37,.18));
}
.acs-node{position:relative;padding:0 0 30px;}
.acs-node:last-child{padding-bottom:0;}
.acs-node__dot{
  position:absolute;left:-70px;top:0;width:48px;height:48px;border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  background:#fff;border:1px solid var(--bd);color:var(--a2);
  transition:background .38s ease,color .38s ease,transform .38s ease,box-shadow .38s ease;
}
.acs-node:hover .acs-node__dot{
  background:var(--a);color:#fff;border-color:var(--a);transform:scale(1.07);
  box-shadow:0 8px 22px rgba(232,160,37,.36);
}
.acs-node__k{
  font-family:var(--ff);font-size:.7rem;font-weight:800;letter-spacing:.14em;
  text-transform:uppercase;color:var(--mut);margin-bottom:5px;
}
.acs-node__t{font-family:var(--ff);font-size:1.14rem;font-weight:600;color:var(--ink);margin:0 0 7px;}
.acs-node__d{font-family:var(--ff);font-size:.94rem;line-height:1.72;color:var(--txt);margin:0;}

/* ── feature strip (borderless, divided) ────────────────── */
.acs-feats{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:0;}
.acs-feat{
  padding:26px 26px 26px 0;border-top:1px solid var(--bd);
  transition:background .34s ease;
}
.acs-feat:hover{background:var(--warm);}
.acs-feat__i{
  width:40px;height:40px;border-radius:11px;margin-bottom:15px;
  display:flex;align-items:center;justify-content:center;
  background:var(--a-soft);color:var(--a2);transition:transform .34s ease;
}
.acs-feat:hover .acs-feat__i{transform:translateY(-3px);}
.acs-feat__t{font-family:var(--ff);font-size:1rem;font-weight:600;color:var(--ink);margin:0 0 8px;}
.acs-feat__d{font-family:var(--ff);font-size:.9rem;line-height:1.68;color:var(--txt);margin:0;}

/* ── process: alternating timeline ──────────────────────── */
.acs-tl{position:relative;max-width:1000px;margin:0 auto;}
.acs-tl::before{
  content:'';position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;
  background:linear-gradient(180deg,rgba(232,160,37,.2),var(--a),rgba(232,160,37,.2));
}
.acs-tli{position:relative;width:50%;padding:0 46px 40px 0;}
.acs-tli:nth-child(even){margin-left:50%;padding:0 0 40px 46px;}
.acs-tli:last-child,.acs-tli:nth-last-child(2){padding-bottom:0;}
.acs-tli__b{
  border:1px solid var(--bd);border-radius:14px;background:#fff;padding:24px 26px;
  transition:transform .38s cubic-bezier(.22,.61,.36,1),box-shadow .38s ease,border-color .38s ease;
}
.acs-tli:hover .acs-tli__b{
  border-color:rgba(232,160,37,.42);box-shadow:0 18px 40px rgba(232,160,37,.14);
  transform:translateY(-4px);
}
.acs-tli__dot{
  position:absolute;top:22px;right:-15px;width:30px;height:30px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  background:var(--a);color:#fff;border:4px solid #fff;
  box-shadow:0 4px 12px rgba(232,160,37,.4);
  transition:transform .38s cubic-bezier(.22,.61,.36,1);
}
.acs-tli:nth-child(even) .acs-tli__dot{right:auto;left:-15px;}
.acs-tli:hover .acs-tli__dot{transform:scale(1.22);}
.acs-tli__n{
  font-family:var(--ff);font-size:.72rem;font-weight:800;letter-spacing:.14em;
  color:var(--a2);margin-bottom:9px;display:flex;align-items:center;gap:9px;
}
.acs-tli__t{font-family:var(--ff);font-size:1.08rem;font-weight:600;color:var(--ink);margin:0 0 8px;}
.acs-tli__d{font-family:var(--ff);font-size:.92rem;line-height:1.7;color:var(--txt);margin:0;}

/* ── dark "why us" band ─────────────────────────────────── */
.acs-dark{padding:84px 0;background:var(--dark);position:relative;overflow:hidden;}
.acs-dark::before{
  content:'';position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;
  background:radial-gradient(circle,rgba(232,160,37,.16) 0%,transparent 66%);pointer-events:none;
}
.acs-dark .acs-h2{color:#fff;}
.acs-dark .acs-lead{color:rgba(255,255,255,.7);}
.acs-dark .acs-eyebrow{color:var(--a);}
.acs-dark a.acs-a,.acs-dark a.acs-a:link,.acs-dark a.acs-a:visited{color:var(--a);}
.acs-why{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2px;
  background:rgba(255,255,255,.08);border-radius:14px;overflow:hidden;}
.acs-whyi{background:var(--dark);padding:28px 26px;transition:background .36s ease;}
.acs-whyi:hover{background:#1f1f24;}
.acs-whyi__t{
  font-family:var(--ff);font-size:1.02rem;font-weight:600;color:#fff;margin:0 0 9px;
  display:flex;align-items:center;gap:11px;
}
.acs-whyi__t span{
  width:7px;height:7px;border-radius:50%;background:var(--a);flex:0 0 7px;
  transition:transform .36s ease,box-shadow .36s ease;
}
.acs-whyi:hover .acs-whyi__t span{transform:scale(1.6);box-shadow:0 0 12px rgba(232,160,37,.9);}
.acs-whyi__d{font-family:var(--ff);font-size:.91rem;line-height:1.7;color:rgba(255,255,255,.62);margin:0;}

/* ── tech groups ────────────────────────────────────────── */
.acs-tech{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:32px;}
.acs-tech__k{
  font-family:var(--ff);font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;
  color:var(--a2);padding-bottom:12px;margin-bottom:16px;border-bottom:2px solid var(--a-soft);
}
.acs-tech__l{display:flex;flex-wrap:wrap;gap:9px;}
.acs-chip{
  font-family:var(--ff);font-size:.86rem;font-weight:500;color:var(--ink);
  background:#fff;border:1px solid var(--bd);border-radius:8px;padding:8px 14px;
  transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease,background .3s ease;
}
.acs-chip:hover{
  transform:translateY(-2px);border-color:rgba(232,160,37,.5);background:var(--warm);
  box-shadow:0 10px 22px rgba(232,160,37,.16);
}

/* ── size cards ─────────────────────────────────────────── */
.acs-sizes{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
.acs-size{
  padding:34px 30px;border-radius:16px;border:1px solid var(--bd);background:#fff;text-align:center;
  transition:transform .38s cubic-bezier(.22,.61,.36,1),box-shadow .38s ease,border-color .38s ease;
}
.acs-size:hover{
  transform:translateY(-6px);border-color:rgba(232,160,37,.42);
  box-shadow:0 20px 44px rgba(232,160,37,.15);
}
.acs-size__i{
  width:56px;height:56px;margin:0 auto 20px;border-radius:16px;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(140deg,var(--a),var(--a2));color:#fff;
  box-shadow:0 10px 24px rgba(232,160,37,.34);
  transition:transform .38s cubic-bezier(.22,.61,.36,1);
}
.acs-size:hover .acs-size__i{transform:scale(1.09) rotate(-6deg);}
.acs-size__t{font-family:var(--ff);font-size:1.16rem;font-weight:600;color:var(--ink);margin:0 0 10px;}
.acs-size__d{font-family:var(--ff);font-size:.93rem;line-height:1.7;color:var(--txt);margin:0;}

/* ── related links ──────────────────────────────────────── */
.acs-rel{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;border-top:1px solid var(--bd);}
.acs-rel a{
  display:block;text-decoration:none;padding:24px 0;border-bottom:1px solid var(--bd);
  transition:padding-left .36s cubic-bezier(.22,.61,.36,1);
}
.acs-rel a:hover{padding-left:12px;}
.acs-rel__t{
  font-family:var(--ff);font-size:1.02rem;font-weight:600;color:var(--ink);margin:0 0 7px;
  display:flex;align-items:center;justify-content:space-between;gap:14px;transition:color .3s ease;
}
.acs-rel a:hover .acs-rel__t{color:var(--a2);}
.acs-rel__t i{font-style:normal;color:var(--a);transition:transform .36s ease;}
.acs-rel a:hover .acs-rel__t i{transform:translateX(6px);}
.acs-rel__d{font-family:var(--ff);font-size:.9rem;line-height:1.65;color:var(--txt);margin:0;}

/* ── FAQ ────────────────────────────────────────────────── */
.acs-faq{max-width:880px;margin:0 auto;}
.acs-fq{
  border:1px solid var(--bd);border-radius:12px;background:#fff;margin-bottom:12px;overflow:hidden;
  transition:border-color .3s ease,box-shadow .3s ease;
}
.acs-fq[open]{border-color:rgba(232,160,37,.45);box-shadow:0 14px 34px rgba(232,160,37,.12);}
.acs-fq__q{
  display:flex;align-items:center;justify-content:space-between;gap:18px;
  padding:20px 24px;cursor:pointer;list-style:none;
  font-family:var(--ff);font-size:1rem;line-height:1.55;font-weight:600;color:var(--ink);
  transition:color .26s ease;
}
.acs-fq__q::-webkit-details-marker{display:none;}
.acs-fq__q:hover{color:var(--a2);}
.acs-fq__s{
  position:relative;flex:0 0 24px;width:24px;height:24px;border-radius:50%;
  background:var(--a-soft);transition:background .3s ease,transform .34s ease;
}
.acs-fq__s::before,.acs-fq__s::after{
  content:'';position:absolute;top:50%;left:50%;background:var(--a2);border-radius:2px;
  transform:translate(-50%,-50%);transition:opacity .3s ease,background .3s ease;
}
.acs-fq__s::before{width:11px;height:2px;}
.acs-fq__s::after{width:2px;height:11px;}
.acs-fq[open] .acs-fq__s{background:var(--a);transform:rotate(180deg);}
.acs-fq[open] .acs-fq__s::before{background:#fff;}
.acs-fq[open] .acs-fq__s::after{opacity:0;}
.acs-fq__a{padding:0 24px 22px;font-family:var(--ff);font-size:.94rem;line-height:1.75;color:var(--txt);}
html.acs-on .acs-fq[open] .acs-fq__a{animation:acs-in .36s ease both;}
@keyframes acs-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}

/* ── warm CTA ───────────────────────────────────────────── */
.acs-cta{padding:82px 0;background:linear-gradient(135deg,#f7e2ba 0%,#e8a025 58%,#d4911e 100%);}
.acs-cta__in{max-width:800px;margin:0 auto;padding:0 28px;text-align:center;}
.acs-cta__h{
  font-family:var(--ff);font-size:2.05rem;line-height:1.3;font-weight:700;
  color:#22190a;margin:0 0 18px;letter-spacing:-.02em;
}
.acs-cta__t{font-family:var(--ff);font-size:1.02rem;line-height:1.8;color:#4a3813;margin:0 0 32px;}
.acs-cta__t a{color:#22190a;text-decoration:underline;font-weight:600;}
.acs button.acs-cta__b{
  display:inline-flex;align-items:center;gap:11px;
  padding:16px 36px;border-radius:10px;border:0;cursor:pointer;
  font-family:var(--ff);font-size:1rem;font-weight:600;color:#fff;background:var(--dark);
  box-shadow:0 14px 32px rgba(0,0,0,.24);
  transition:transform .32s cubic-bezier(.22,.61,.36,1),box-shadow .32s ease,background .32s ease;
}
.acs button.acs-cta__b:hover{
  transform:translateY(-3px);background:#000;box-shadow:0 22px 46px rgba(0,0,0,.32);
}
.acs button.acs-cta__b i{font-style:normal;transition:transform .32s ease;}
.acs button.acs-cta__b:hover i{transform:translateX(5px);}

/* ── figures ────────────────────────────────────────────── */
.acs-fig{max-width:1060px;margin:0 auto;padding:0 28px;}
.acs-fig--sm{max-width:840px;}
.acs-fig__f{
  border-radius:14px;overflow:hidden;line-height:0;border:1px solid var(--bd);background:var(--warm);
  box-shadow:0 10px 30px rgba(0,0,0,.06);
  transition:transform .44s ease,box-shadow .44s ease,border-color .44s ease;
}
.acs-fig__f:hover{
  transform:translateY(-5px);border-color:rgba(232,160,37,.48);
  box-shadow:0 20px 46px rgba(232,160,37,.17);
}
.acs-fig__f img{display:block;width:100%;height:auto;}
.acs-fig__c{
  margin:15px 0 0;text-align:center;font-family:var(--ff);
  font-size:.86rem;line-height:1.65;color:var(--mut);
}
.acs-figtop{padding-top:56px;}

/* ── note ───────────────────────────────────────────────── */
.acs-note{
  max-width:860px;margin:36px auto 0;padding:20px 26px;
  border-left:3px solid var(--a);border-radius:0 12px 12px 0;background:var(--warm);
  font-family:var(--ff);font-size:.95rem;line-height:1.75;color:var(--txt);
}
.acs-s--warm .acs-note{background:#fff;}

/* ── responsive ─────────────────────────────────────────── */
@media (max-width:1000px){
  .acs-split{grid-template-columns:1fr;gap:38px;}
  .acs-rows,.acs-rel{grid-template-columns:1fr;gap:0;}
  .acs-step{grid-auto-flow:row;grid-auto-columns:auto;gap:26px;}
  .acs-step::before{left:32px;right:auto;top:8%;bottom:8%;width:2px;height:auto;
    background:linear-gradient(180deg,var(--bd),var(--a),var(--bd));}
  .acs-stepi{display:flex;align-items:center;gap:20px;text-align:left;padding:0;}
  .acs-stepi__n{margin:0;flex:0 0 46px;}
  .acs-tl::before{left:19px;}
  .acs-tli,.acs-tli:nth-child(even){width:100%;margin-left:0;padding:0 0 26px 52px;}
  .acs-tli__dot,.acs-tli:nth-child(even) .acs-tli__dot{left:4px;right:auto;}
  .acs-tiles{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:768px){
  .acs-s,.acs-dark,.acs-cta{padding:54px 0;}
  .acs-w,.acs-fig{padding:0 20px;}
  .acs-h2{font-size:1.6rem;}
  .acs-cta__h{font-size:1.5rem;}
  .acs-hd{margin-bottom:34px;}
  .acs-rail{padding-left:54px;}
  .acs-rail::before{left:17px;}
  .acs-node__dot{left:-54px;width:38px;height:38px;}
  .acs-figtop{padding-top:36px;}
  .acs-tiles{grid-template-columns:1fr;}
}
@media (prefers-reduced-motion:reduce){
  .acs *{animation:none!important;transition:none!important;}
  .acs .acs-tile:hover,.acs .acs-size:hover,.acs .acs-fig__f:hover,
  .acs .acs-tli:hover .acs-tli__b,.acs button.acs-cta__b:hover{transform:none;}
}
`,
        }}
      />

      {/* Arm reveals before first paint; force-reveal after 2.6s as a safety net. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var w=window,d=document,r=d.documentElement;
if(!('IntersectionObserver' in w))return;
try{if(w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
r.classList.add('acs-on');
w.setTimeout(function(){var n=d.querySelectorAll('.acs .acs-rv:not(.in)');for(var i=0;i<n.length;i++)n[i].classList.add('in');},2600);})();`,
        }}
      />

      <div className="acs">
        {/* ═════════════ HERO ═════════════ */}
        <ServiceHero
          badge="AI CUSTOMER SUPPORT"
          titleLead="AI Customer Support"
          titleAccent="System"
          titleTail="Development"
          description={
            <>
              Deliver faster, smarter customer service with an AI customer support system that understands
              customer questions, retrieves relevant information, automates repetitive requests, and connects
              customers with human support when needed. mTouch Labs develops custom AI customer support
              solutions across websites, applications, and digital channels.
            </>
          }
          primaryLabel="Build Your AI Customer Support System"
          secondaryLabel="View Case Studies"
        />

        {/* ═════════════ HERO FIGURE ═════════════ */}
        <div className="acs-figtop" style={{ background: "#fff", paddingBottom: 8 }}>
          <figure className="acs-fig acs-rv">
            <div className="acs-fig__f">
              <img
                src={`${IMG}/ai-customer-support-system-mtouchlabs.webp`}
                alt="AI customer support system by mTouch Labs"
                width={1200}
                height={630}
                loading="eager"
              />
            </div>
            <figcaption className="acs-fig__c">
              An AI support conversation resolving a real request &mdash; grounded in policy, with intent,
              priority and routing surfaced alongside it.
            </figcaption>
          </figure>
        </div>

        {/* ═════════════ INTRO SPLIT ═════════════ */}
        <section className="acs-s">
          <div className="acs-w">
            <div className="acs-split">
              <div className="acs-rv">
                <span className="acs-eyebrow">Why it matters</span>
                <h2 className="acs-h2">
                  AI-Powered Customer Support for <em>Modern Businesses</em>
                </h2>
                <p className="acs-lead">
                  Traditional customer support often depends on repetitive manual responses, large ticket
                  volumes, and customers waiting for assistance.
                </p>
                <p className="acs-lead">
                  An AI customer support system can help automate common interactions, understand customer
                  intent, retrieve information from approved business knowledge, classify support requests, and
                  assist human support teams.
                </p>
                <p className="acs-lead">
                  mTouch Labs builds AI-powered customer support systems around your products, services,
                  customers, knowledge base, workflows, and existing{" "}
                  <a href="/custom-software-development-company" className="acs-a">
                    business applications
                  </a>
                  .
                </p>
              </div>
              <div className="acs-panel acs-rv">
                <div className="acs-panel__hd">Our solutions can support</div>
                <div className="acs-panel__b">
                  {SUPPORTS.map((s) => (
                    <div className="acs-tick acs-c" key={s}>
                      <span className="acs-tick__i">✓</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ SERVICES (10) — hairline rows ═════════════ */}
        <section className="acs-s acs-s--warm">
          <div className="acs-w">
            <div className="acs-hd acs-rv">
              <span className="acs-eyebrow">What we build</span>
              <h2 className="acs-h2">
                AI Customer Support <em>Development Services</em>
              </h2>
              <p className="acs-lead">
                Ten capabilities that combine into one support system rather than a set of disconnected tools.
              </p>
            </div>
            <div className="acs-rows acs-rv">
              {SERVICES.map(([ico, t, d]) => (
                <div className="acs-row acs-c" key={t}>
                  <span className="acs-row__i">
                    <Ic d={ico} />
                  </span>
                  <span>
                    <h3 className="acs-row__t">{t}</h3>
                    <p className="acs-row__d">{d}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ WHAT IT CAN DO ═════════════ */}
        <section className="acs-s">
          <div className="acs-w">
            <div className="acs-hd acs-hd--mid acs-rv">
              <span className="acs-eyebrow">Capabilities</span>
              <h2 className="acs-h2">
                What Can an AI Customer Support System <em>Do?</em>
              </h2>
              <p className="acs-lead">An AI customer support solution can be designed to:</p>
            </div>
            <ul className="acs-caps acs-rv">
              {CAPABILITIES.map((c) => (
                <li className="acs-c" key={c}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12.5l5 5 11-11" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="acs-note acs-rv">
              The exact capabilities depend on your business workflows, data, integrations, and required level
              of automation.
            </p>
          </div>
        </section>

        {/* ═════════════ HOW IT WORKS — stepper ═════════════ */}
        <section className="acs-s acs-s--warm">
          <div className="acs-w">
            <div className="acs-hd acs-hd--mid acs-rv">
              <span className="acs-eyebrow">How it works</span>
              <h2 className="acs-h2">
                How AI Customer <em>Support Works</em>
              </h2>
              <p className="acs-lead">
                For knowledge-based support, the system retrieves relevant information from approved business
                sources before generating a response. For workflow-based support, it can connect with APIs or
                business applications to retrieve or update information according to defined permissions and
                rules.
              </p>
            </div>
            <div className="acs-step acs-rv">
              {FLOW.map((f, i) => (
                <div className="acs-stepi acs-c" key={f}>
                  <span className="acs-stepi__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acs-stepi__t">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="acs-figtop">
            <figure className="acs-fig acs-rv">
              <div className="acs-fig__f">
                <img
                  src={`${IMG}/ai-human-customer-support-workflow.webp`}
                  alt="AI and human customer support workflow"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
              </div>
              <figcaption className="acs-fig__c">
                The AI lane resolves what it can; low-confidence conversations cross into the human lane with
                full context intact.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ ARCHITECTURE — left rail ═════════════ */}
        <section className="acs-s">
          <div className="acs-w">
            <div className="acs-hd acs-hd--mid acs-rv">
              <span className="acs-eyebrow">Architecture</span>
              <h2 className="acs-h2">
                AI Customer Support <em>Architecture</em>
              </h2>
              <p className="acs-lead">A typical AI customer support solution can include:</p>
            </div>
            <div className="acs-rail acs-rv">
              {LAYERS.map(([ico, t, d], i) => (
                <div className="acs-node acs-c" key={t}>
                  <span className="acs-node__dot">
                    <Ic d={ico} />
                  </span>
                  <div className="acs-node__k">Layer {i + 1}</div>
                  <h3 className="acs-node__t">{t}</h3>
                  <p className="acs-node__d">{d}</p>
                </div>
              ))}
            </div>
            <p className="acs-note acs-rv">
              This architecture allows AI automation and human support to work together rather than treating
              them as separate systems.
            </p>
          </div>
          <div className="acs-figtop">
            <figure className="acs-fig acs-rv">
              <div className="acs-fig__f">
                <img
                  src={`${IMG}/ai-customer-support-architecture.webp`}
                  alt="AI customer support system architecture"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
              </div>
              <figcaption className="acs-fig__c">
                Customer interface, AI conversation, knowledge retrieval, business integration and human
                support as one connected stack.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ USE CASES (10) — tiles ═════════════ */}
        <section className="acs-s acs-s--warm">
          <div className="acs-w">
            <div className="acs-hd acs-rv">
              <span className="acs-eyebrow">Industries</span>
              <h2 className="acs-h2">
                AI Customer Support <em>Use Cases</em>
              </h2>
              <p className="acs-lead">
                The same platform, adapted to each industry&rsquo;s knowledge sources and workflows.
              </p>
            </div>
            <div className="acs-tiles acs-rv">
              {USE_CASES.map(([ico, t, d]) => (
                <div className="acs-tile acs-c" key={t}>
                  <span className="acs-tile__i">
                    <Ic d={ico} s={23} />
                  </span>
                  <h3 className="acs-tile__t">{t}</h3>
                  <p className="acs-tile__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="acs-figtop">
            <figure className="acs-fig acs-rv">
              <div className="acs-fig__f">
                <img
                  src={`${IMG}/ai-customer-support-use-cases.webp`}
                  alt="AI customer support use cases for businesses"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <figcaption className="acs-fig__c">
                AI customer support across e-commerce, SaaS, finance, healthcare, travel, real estate and
                education.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ KEY FEATURES — divided strip ═════════════ */}
        <section className="acs-s">
          <div className="acs-w">
            <div className="acs-hd acs-rv">
              <span className="acs-eyebrow">Features</span>
              <h2 className="acs-h2">
                Key Features of AI Customer <em>Support Software</em>
              </h2>
            </div>
            <div className="acs-feats acs-rv">
              {FEATURES.map(([ico, t, d]) => (
                <div className="acs-feat acs-c" key={t}>
                  <span className="acs-feat__i">
                    <Ic d={ico} s={20} />
                  </span>
                  <h3 className="acs-feat__t">{t}</h3>
                  <p className="acs-feat__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="acs-figtop">
            <figure className="acs-fig acs-fig--sm acs-rv">
              <div className="acs-fig__f">
                <img
                  src={`${IMG}/ai-customer-support-dashboard.webp`}
                  alt="AI customer support dashboard"
                  width={1000}
                  height={750}
                  loading="lazy"
                />
              </div>
              <figcaption className="acs-fig__c">
                Resolution volume, first-response time, deflection rate and CSAT &mdash; so support automation
                stays measurable.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ PROCESS — alternating timeline ═════════════ */}
        <section className="acs-s acs-s--warm">
          <div className="acs-w">
            <div className="acs-hd acs-hd--mid acs-rv">
              <span className="acs-eyebrow">Process</span>
              <h2 className="acs-h2">
                AI Customer Support <em>Development Process</em>
              </h2>
              <p className="acs-lead">
                Six stages from support workflow discovery through to continuous optimization.
              </p>
            </div>
            <div className="acs-tl acs-rv">
              {PROCESS.map(([n, ico, t, d]) => (
                <div className="acs-tli acs-c" key={n}>
                  <span className="acs-tli__dot">
                    <Ic d={ico} s={15} />
                  </span>
                  <div className="acs-tli__b">
                    <div className="acs-tli__n">STAGE {n}</div>
                    <h3 className="acs-tli__t">{t}</h3>
                    <p className="acs-tli__d">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="acs-figtop">
            <figure className="acs-fig acs-rv">
              <div className="acs-fig__f">
                <img
                  src={`${IMG}/ai-customer-support-development-process.webp`}
                  alt="AI customer support development process"
                  width={1200}
                  height={700}
                  loading="lazy"
                />
              </div>
              <figcaption className="acs-fig__c">
                Six stages from support workflow discovery through to continuous optimization.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ═════════════ WHY US — dark band ═════════════ */}
        <section className="acs-dark">
          <div className="acs-w" style={{ position: "relative" }}>
            <div className="acs-hd acs-rv">
              <span className="acs-eyebrow">Why mTouch Labs</span>
              <h2 className="acs-h2">
                Built by a team that ships <em>support systems</em>, not demos
              </h2>
              <p className="acs-lead">
                mTouch Labs combines AI development, software engineering, application development, data
                technologies, and system integration to build customer support solutions around real business
                requirements. Browse our{" "}
                <a href="/portfolio" className="acs-a">
                  portfolio
                </a>{" "}
                and{" "}
                <a href="/case-studies" className="acs-a">
                  case studies
                </a>{" "}
                for shipped examples.
              </p>
            </div>
            <div className="acs-why acs-rv">
              {WHY.map(([t, d]) => (
                <div className="acs-whyi acs-c" key={t}>
                  <h3 className="acs-whyi__t">
                    <span />
                    {t}
                  </h3>
                  <p className="acs-whyi__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ SOLUTION FIGURE ═════════════ */}
        <section className="acs-s" style={{ paddingBottom: 0 }}>
          <figure className="acs-fig acs-rv">
            <div className="acs-fig__f">
              <img
                src={`${IMG}/ai-customer-support-solution-mtouchlabs.webp`}
                alt="AI customer support solution developed by mTouch Labs"
                width={1200}
                height={800}
                loading="lazy"
              />
            </div>
            <figcaption className="acs-fig__c">
              24/7 assistance, knowledge-grounded answers, intelligent routing, and agent copilot with
              analytics &mdash; around one AI support core.
            </figcaption>
          </figure>
        </section>

        {/* ═════════════ TECHNOLOGY — grouped chips ═════════════ */}
        <section className="acs-s">
          <div className="acs-w">
            <div className="acs-hd acs-rv">
              <span className="acs-eyebrow">Technology</span>
              <h2 className="acs-h2">
                AI Customer Support <em>Technology</em>
              </h2>
              <p className="acs-lead">
                Depending on your requirements, an AI customer support system may use:
              </p>
            </div>
            <div className="acs-tech acs-rv">
              {TECH.map(([group, items]) => (
                <div className="acs-c" key={group}>
                  <div className="acs-tech__k">{group}</div>
                  <div className="acs-tech__l">
                    {items.map((it) => (
                      <span className="acs-chip" key={it}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="acs-note acs-rv">
              The technology stack should be selected according to the required accuracy, latency, scalability,
              security, integrations, and operating cost. Related:{" "}
              <a href="/generative-ai-development-company" className="acs-a">
                Generative AI Development
              </a>
              .
            </p>
          </div>
        </section>

        {/* ═════════════ BUSINESS SIZES ═════════════ */}
        <section className="acs-s acs-s--warm">
          <div className="acs-w">
            <div className="acs-hd acs-hd--mid acs-rv">
              <span className="acs-eyebrow">Fit</span>
              <h2 className="acs-h2">
                AI Customer Support for <em>Different Business Sizes</em>
              </h2>
            </div>
            <div className="acs-sizes acs-rv">
              {SIZES.map(([ico, t, d]) => (
                <div className="acs-size acs-c" key={t}>
                  <span className="acs-size__i">
                    <Ic d={ico} s={26} />
                  </span>
                  <h3 className="acs-size__t">{t}</h3>
                  <p className="acs-size__d">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ RELATED ═════════════ */}
        <section className="acs-s">
          <div className="acs-w">
            <div className="acs-hd acs-rv">
              <span className="acs-eyebrow">Related</span>
              <h2 className="acs-h2">
                Explore <em>Related Services</em>
              </h2>
              <p className="acs-lead">
                Capabilities most often built alongside an AI customer support system.
              </p>
            </div>
            <div className="acs-rel acs-rv">
              {RELATED.map(([href, t, d]) => (
                <a href={href} className="acs-c" key={href}>
                  <h3 className="acs-rel__t">
                    {t}
                    <i aria-hidden>→</i>
                  </h3>
                  <p className="acs-rel__d">{d}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ FAQ ═════════════ */}
        <section className="acs-s acs-s--warm">
          <div className="acs-w">
            <div className="acs-hd acs-hd--mid acs-rv">
              <span className="acs-eyebrow">FAQ</span>
              <h2 className="acs-h2">
                Frequently Asked <em>Questions</em>
              </h2>
              <p className="acs-lead">Everything about AI customer support system development.</p>
            </div>
            <div className="acs-faq acs-rv">
              {FAQS.map((f) => (
                <details className="acs-fq acs-c" key={f.q}>
                  <summary className="acs-fq__q">
                    <span>{f.q}</span>
                    <span className="acs-fq__s" aria-hidden />
                  </summary>
                  <div className="acs-fq__a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ CTA ═════════════ */}
        <section className="acs-cta">
          <div className="acs-cta__in acs-rv">
            <h2 className="acs-cta__h">Build Your AI Customer Support System with mTouch Labs</h2>
            <p className="acs-cta__t">
              Give customers faster access to information while helping your support team spend less time on
              repetitive tasks. mTouch Labs develops custom AI customer support systems that combine
              conversational AI, business knowledge, automation, and software integrations.{" "}
              <a href="/contact-us">Talk to mTouch Labs</a> about your AI customer support solution.
            </p>
            <button type="button" className="acs-cta__b js-open-modal">
              Start Your AI Support Project <i aria-hidden>→</i>
            </button>
          </div>
        </section>
      </div>

      {/* Reveal observer — runs after the markup above exists. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var d=document;
if(!d.documentElement.classList.contains('acs-on'))return;
var n=d.querySelectorAll('.acs .acs-rv');
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
