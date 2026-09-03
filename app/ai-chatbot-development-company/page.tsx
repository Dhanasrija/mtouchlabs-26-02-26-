import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";

const IMG = "/images/products/ai_chatbot_development";

export const metadata: Metadata = {
  title: { absolute: "AI Chatbot Development Company | Custom AI Chatbots | mTouch Labs" },
  description:
    "Build intelligent AI chatbots with mTouch Labs. Get custom AI chatbot development for customer support, lead generation, knowledge retrieval, and business automation.",
  keywords: [
    "AI Chatbot Development Company",
    "AI chatbot development",
    "AI chatbot development services",
    "custom AI chatbot development",
    "AI chatbot company",
    "AI chatbot solutions",
    "business AI chatbot",
    "generative AI chatbot",
  ],
  alternates: {
    canonical: "/ai-chatbot-development-company",
  },
  openGraph: {
    title: "AI Chatbot Development Company | Custom AI Chatbots | mTouch Labs",
    description:
      "Custom AI chatbot development using LLMs, RAG architecture, and enterprise integrations — built around your business workflows.",
    url: "https://www.mtouchlabs.com/ai-chatbot-development-company",
    siteName: "mTouch Labs",
    images: [
      {
        url: `${IMG}/ai-chatbot-development-company-mtouchlabs.webp`,
        width: 1600,
        height: 900,
        alt: "AI chatbot development company by mTouch Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot Development Company | Custom AI Chatbots | mTouch Labs",
    description:
      "Custom AI chatbots for customer support, lead generation, knowledge retrieval, and business automation.",
    images: [`${IMG}/ai-chatbot-development-company-mtouchlabs.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI chatbot?",
    a: "An AI chatbot is a conversational software system that uses artificial intelligence to understand user messages and generate relevant responses. Modern AI chatbots can also retrieve information from business data and interact with connected systems.",
  },
  {
    q: "How much does AI chatbot development cost?",
    a: "The cost depends on factors such as chatbot complexity, AI model, number of integrations, knowledge-base requirements, channels, security requirements, and expected usage. mTouch Labs can define the scope and provide a project-specific estimate.",
  },
  {
    q: "Can you build a custom AI chatbot for my business?",
    a: "Yes. mTouch Labs develops custom AI chatbot solutions based on your business requirements, data, users, workflows, and existing software ecosystem.",
  },
  {
    q: "Can an AI chatbot use our company documents?",
    a: "Yes. A chatbot can be connected to approved company documents and knowledge sources using approaches such as Retrieval-Augmented Generation (RAG).",
  },
  {
    q: "Can an AI chatbot connect with our CRM?",
    a: "Yes. AI chatbots can be integrated with CRMs and other business systems through APIs, subject to the capabilities and security requirements of the systems involved.",
  },
  {
    q: "Can you build a WhatsApp AI chatbot?",
    a: "Yes. AI chatbot solutions can be designed for messaging platforms such as WhatsApp, depending on the required APIs, business account setup, and workflow integrations.",
  },
  {
    q: "Can the chatbot transfer a conversation to a human?",
    a: "Yes. Human handoff can be incorporated into the chatbot workflow for situations requiring human assistance.",
  },
  {
    q: "How long does it take to develop an AI chatbot?",
    a: "The timeline depends on the chatbot's features, integrations, AI architecture, data preparation, testing requirements, and deployment environment.",
  },
];

const INDUSTRIES = [
  "E-commerce",
  "SaaS",
  "Healthcare",
  "Finance",
  "Education",
  "Real Estate",
  "Retail",
  "Enterprise",
  "Customer Support",
  "Professional Services",
];

export default function AIChatbotDevelopmentCompany() {
  return (
    <>
      {/* ═════════════ STRUCTURED DATA ═════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Chatbot Development Company",
            description:
              "mTouch Labs builds custom AI chatbots for customer support, lead generation, knowledge retrieval, and business automation using LLMs, RAG architecture, and enterprise integrations.",
            url: "https://www.mtouchlabs.com/ai-chatbot-development-company",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "AI Chatbot Development Company",
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
                name: "AI Chatbot Development Company",
                item: "https://www.mtouchlabs.com/ai-chatbot-development-company",
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

      {/* ═════════════ PAGE-LOCAL FIGURE STYLES ═════════════
          Scoped to .aip-* so nothing here can leak into other pages.
          Kept inline (same pattern as ServiceHero) so no CSS bundle
          rebuild is needed to ship this page. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
.aip-figure {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}
.aip-figure--tight { max-width: 900px; }
.aip-figure--flush { margin-top: 8px; }
.aip-figure__frame {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #E5E9F2;
  background: #F7FAFF;
  box-shadow: 0 18px 50px -28px rgba(1, 29, 128, .28);
  line-height: 0;
}
.aip-figure__frame img {
  display: block;
  width: 100%;
  height: auto;
}
.aip-figure__caption {
  margin: 14px 0 0;
  text-align: center;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 14px;
  line-height: 22px;
  color: var(--color-slate-grey, #777777);
}
.aip-figure-band {
  padding: 54px 0 10px;
  background: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);
}
.aip-note {
  max-width: 900px;
  margin: 30px auto 0;
  padding: 18px 22px;
  border-left: 3px solid #3E8CFB;
  border-radius: 0 12px 12px 0;
  background: #F2F7FF;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  line-height: 26px;
  color: #222222;
}
.aip-industries {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.aip-industry-pill {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid #E5E9F2;
  background: #FFFFFF;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  font-weight: 500;
  color: #0D1117;
  box-shadow: 0 8px 22px -18px rgba(1, 29, 128, .45);
  cursor: default;
}
.aip-flow {
  max-width: 1140px;
  margin: 0 auto 6px;
  padding: 0 24px;
}
.aip-flow__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.aip-step {
  position: relative;
  padding: 26px 24px 24px;
  border-radius: 16px;
  border: 1px solid #E5E9F2;
  background: #FFFFFF;
  box-shadow: 0 18px 44px -32px rgba(1, 29, 128, .32);
}
.aip-step__num {
  display: block;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: #3E8CFB;
  margin-bottom: 10px;
}
.aip-step__title {
  margin: 0 0 8px;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 28px;
  color: #3E8CFB;
}
.aip-step__text {
  margin: 0;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  line-height: 26px;
  color: var(--ga-text, #222222);
}
@media (max-width: 1024px) {
  .aip-flow__list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .aip-flow__list { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .aip-figure, .aip-industries, .aip-flow { padding: 0 18px; }
  .aip-figure-band { padding: 38px 0 6px; }
}
`,
        }}
      />

      {/* ═════════════ HERO ═════════════ */}
      <ServiceHero
        badge="AI CHATBOT"
        titleLead="AI Chatbot"
        titleAccent="Development"
        titleTail="Company"
        description={
          <>
            Build intelligent, context-aware AI chatbots that understand your business, assist customers,
            automate conversations, and connect with your existing digital platforms. mTouch Labs develops
            custom AI chatbot solutions using modern large language models, RAG architecture, APIs, and
            enterprise integrations — from customer support and lead qualification to knowledge management,
            embedded directly into your{" "}
            <a href="/mobile-app-development-company">mobile apps</a> and web platforms.
          </>
        }
        primaryLabel="Build Your AI Chatbot"
        secondaryLabel="View Case Studies"
      />

      {/* ═════════════ HERO FIGURE ═════════════ */}
      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-chatbot-development-company-mtouchlabs.webp`}
              alt="AI chatbot development ecosystem by mTouch Labs — NLP, knowledge base, automation and multi-channel deployment"
              width={1600}
              height={900}
              loading="eager"
            />
          </div>
          <figcaption className="aip-figure__caption">
            The mTouch Labs AI chatbot development ecosystem — NLP &amp; NLU, knowledge retrieval,
            intelligent automation, and multi-channel deployment.
          </figcaption>
        </figure>
      </section>

      {/* ═════════════ ABOUT / REAL BUSINESS CONVERSATIONS ═════════════ */}
      <section className="ga-about">
        <div className="ga-container">
          <div className="ga-about__grid">
            <div className="ga-about__content ga-animate--left">
              <h2 className="ga-about__heading">
                AI Chatbots Built for <span className="ga-text-accent">Real Business Conversations</span>
              </h2>
              <p className="ga-about__text">
                Traditional chatbots depend on predefined questions and fixed responses. Modern AI chatbots
                can understand natural language, maintain conversational context, retrieve information from
                business data, and generate relevant responses.
              </p>
              <p className="ga-about__text">
                At mTouch Labs, we design AI chatbot solutions around your business objectives, data, users,
                and existing technology stack — not generic scripted flows. Where it helps, we connect the
                chatbot to your{" "}
                <a href="/custom-crm-software-development-company">CRM</a> and wider{" "}
                <a href="/custom-software-development-company">software ecosystem</a>.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Customer support automation</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Lead generation and qualification</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Product and service recommendations</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Business knowledge retrieval &amp; FAQ automation</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Appointment and enquiry handling</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Internal employee assistance</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>E-commerce and SaaS product support</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>WhatsApp and web-based conversations</span></li>
              </ul>
            </div>
            <div className="ga-stats ga-animate--right">
              <div className="ga-stat"><span className="ga-stat__icon">💬</span><span className="ga-stat__label">Natural Language</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">📚</span><span className="ga-stat__label">Knowledge Retrieval</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">🔗</span><span className="ga-stat__label">System Integration</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">🤝</span><span className="ga-stat__label">Human Handoff</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ AI VS TRADITIONAL FIGURE ═════════════ */}
      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-chatbot-vs-traditional-chatbot.webp`}
              alt="AI chatbot vs traditional rule-based chatbot comparison"
              width={1600}
              height={957}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Rule-based chatbots dead-end into keyword matching. An AI chatbot understands the query,
            retrieves the right knowledge, and resolves it.
          </figcaption>
        </figure>
      </section>

      {/* ═════════════ WHAT WE BUILD ═════════════ */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              What We <span className="ga-text-accent">Build</span>
            </h2>
            <p className="ga-services__subtitle">
              Conversational AI solutions designed around your business processes, users, and data
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧩</span>
              <h4 className="ga-service-card__title">Custom AI Chatbots</h4>
              <p className="ga-service-card__text">
                Purpose-built conversational AI solutions designed around your business processes, users, and data.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✨</span>
              <h4 className="ga-service-card__title">Generative AI Chatbots</h4>
              <p className="ga-service-card__text">
                Chatbots powered by large language models that can understand questions and generate natural,
                context-aware responses. See our{" "}
                <a href="/generative-ai-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>generative AI development</a> capabilities.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔍</span>
              <h4 className="ga-service-card__title">RAG-Based AI Chatbots</h4>
              <p className="ga-service-card__text">
                Connect your chatbot to documents, knowledge bases, FAQs, product information, and other
                approved business data using Retrieval-Augmented Generation (RAG).
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎧</span>
              <h4 className="ga-service-card__title">Customer Support Chatbots</h4>
              <p className="ga-service-card__text">
                Automate repetitive customer questions while allowing complex conversations to be transferred
                to human support teams.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎯</span>
              <h4 className="ga-service-card__title">AI Lead Generation Chatbots</h4>
              <p className="ga-service-card__text">
                Engage website visitors, understand their requirements, collect relevant information, qualify
                leads, and route them to the appropriate sales team.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏢</span>
              <h4 className="ga-service-card__title">Internal AI Assistants</h4>
              <p className="ga-service-card__text">
                Give employees conversational access to company policies, documentation, processes, and
                internal knowledge.
              </p>
            </div>
            <div className="ga-service-card ga-service-card--wide ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📱</span>
              <h4 className="ga-service-card__title">WhatsApp AI Chatbots</h4>
              <p className="ga-service-card__text">
                Build conversational experiences for customer enquiries, support, lead qualification, and
                business workflows through WhatsApp integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ DASHBOARD FIGURE ═════════════ */}
      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/custom-ai-chatbot-development.webp`}
              alt="Custom AI chatbot development interface"
              width={1000}
              height={750}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            A custom chatbot console: live conversation volume, CSAT, resolution rate, and response time —
            so conversational AI stays measurable.
          </figcaption>
        </figure>
      </section>

      {/* ═════════════ SERVICES ═════════════ */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Chatbot <span className="ga-text-accent">Development Services</span>
            </h2>
            <p className="ga-services__subtitle">
              End-to-end delivery — from conversational strategy to deployment and ongoing optimization
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧭</span>
              <h4 className="ga-service-card__title">AI Chatbot Strategy &amp; Consultation</h4>
              <p className="ga-service-card__text">
                We identify where conversational AI can create measurable value and define the chatbot&apos;s
                role, users, data sources, integrations, and success criteria.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💬</span>
              <h4 className="ga-service-card__title">Conversational AI Development</h4>
              <p className="ga-service-card__text">
                We develop chatbot experiences capable of understanding natural language and responding
                according to your business context.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📚</span>
              <h4 className="ga-service-card__title">Knowledge Base Integration</h4>
              <p className="ga-service-card__text">
                Connect your chatbot with approved business information such as FAQs, product documentation,
                policies, manuals, and support content.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔎</span>
              <h4 className="ga-service-card__title">RAG Implementation</h4>
              <p className="ga-service-card__text">
                RAG allows an AI chatbot to retrieve relevant information from your data before generating an
                answer, making it suitable for knowledge-intensive business applications.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧠</span>
              <h4 className="ga-service-card__title">LLM Integration</h4>
              <p className="ga-service-card__text">
                We integrate suitable large language models based on your requirements for response quality,
                latency, scalability, privacy, and cost.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔗</span>
              <h4 className="ga-service-card__title">API &amp; System Integration</h4>
              <p className="ga-service-card__text">
                Connect your chatbot with CRMs, websites, mobile applications, databases, helpdesk platforms,
                business systems, and other APIs.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🤝</span>
              <h4 className="ga-service-card__title">Human Handoff</h4>
              <p className="ga-service-card__text">
                When automation is not appropriate, the chatbot can route conversations to human agents while
                preserving relevant conversation context.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧪</span>
              <h4 className="ga-service-card__title">Testing &amp; Optimization</h4>
              <p className="ga-service-card__text">
                We evaluate chatbot responses, retrieval quality, conversation flows, edge cases, performance,
                and integration behaviour before and after deployment — backed by our{" "}
                <a href="/quality-assurance-and-testing-services" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>QA and testing</a> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ HOW IT WORKS ═════════════ */}
      <section className="ga-delivery">
        <div className="ga-container">
          <h2 className="ga-delivery__heading ga-animate">
            How an <span className="ga-text-accent">AI Chatbot Works</span>
          </h2>
          <p className="ga-delivery__text">
            A modern AI chatbot combines conversational AI with your business data and software systems. For
            knowledge-based use cases, RAG retrieves relevant information before the language model generates
            a response.
          </p>
          <div className="ga-delivery__steps">
            <div className="ga-step"><span className="ga-step__circle">User Question</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Intent Understanding</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Knowledge Retrieval</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">AI Response</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Action or Human Handoff</span></div>
          </div>
        </div>
      </section>

      {/* ═════════════ ARCHITECTURE FIGURE ═════════════ */}
      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-chatbot-architecture-rag-llm.webp`}
              alt="AI chatbot architecture with LLM and RAG"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            AI chatbot architecture — user interaction layer, NLU and orchestration, knowledge and business
            system connectors, and a secured cloud deployment layer.
          </figcaption>
        </figure>
        <p className="aip-note">
          This architecture helps businesses create more useful conversational experiences without forcing
          customers to navigate rigid menus.
        </p>
      </section>

      {/* ═════════════ USE CASES ═════════════ */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Chatbot <span className="ga-text-accent">Use Cases</span>
            </h2>
            <p className="ga-services__subtitle">
              Use-case driven delivery — the architecture and knowledge sources follow the business problem
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎧</span>
              <h4 className="ga-service-card__title">Customer Service</h4>
              <p className="ga-service-card__text">
                Answer frequently asked questions, provide product information, assist customers, and route
                complex requests to support teams.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📈</span>
              <h4 className="ga-service-card__title">Sales &amp; Lead Qualification</h4>
              <p className="ga-service-card__text">
                Engage prospects, understand requirements, qualify enquiries, and connect high-intent leads
                with sales representatives.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛒</span>
              <h4 className="ga-service-card__title">E-Commerce</h4>
              <p className="ga-service-card__text">
                Help customers discover products, answer product questions, provide recommendations, and assist
                throughout the buying journey across your{" "}
                <a href="/ecommerce-app-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>ecommerce platform</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💻</span>
              <h4 className="ga-service-card__title">SaaS &amp; Software Products</h4>
              <p className="ga-service-card__text">
                Create in-product assistants that help users understand features, search documentation,
                troubleshoot issues, and complete tasks inside your{" "}
                <a href="/saas-development-services" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>SaaS product</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏥</span>
              <h4 className="ga-service-card__title">Healthcare</h4>
              <p className="ga-service-card__text">
                Support non-clinical information discovery, appointment-related enquiries, and navigation of
                approved healthcare information. AI chatbots should not replace qualified medical professionals
                for diagnosis or treatment decisions.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎓</span>
              <h4 className="ga-service-card__title">Education</h4>
              <p className="ga-service-card__text">
                Assist students with course information, learning resources, FAQs, and administrative
                enquiries.
              </p>
            </div>
            <div className="ga-service-card ga-service-card--wide ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏛️</span>
              <h4 className="ga-service-card__title">Enterprise</h4>
              <p className="ga-service-card__text">
                Provide employees with conversational access to approved internal knowledge, policies,
                processes, and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ USE CASES FIGURE ═════════════ */}
      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-chatbot-use-cases-business.webp`}
              alt="AI chatbot use cases for customer support and sales"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Four high-value AI chatbot use cases — customer support, sales qualification, HR automation, and
            IT service desk.
          </figcaption>
        </figure>
      </section>

      {/* ═════════════ WHY CHOOSE ═════════════ */}
      <section className="ga-reliable">
        <div className="ga-container">
          <div className="ga-reliable__inner ga-animate">
            <h2 className="ga-reliable__heading">
              Why Choose <span className="ga-text-accent">mTouch Labs</span> for AI Chatbot Development?
            </h2>
            <p className="ga-reliable__text">
              mTouch Labs combines AI engineering with full-scale software product development, allowing
              chatbot capabilities to be integrated into websites, mobile applications, SaaS products, and
              enterprise systems. Browse our{" "}
              <a href="/portfolio" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>portfolio</a> and{" "}
              <a href="/case-studies" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>case studies</a> for shipped examples.
            </p>
            <div className="ga-reliable__pillars">
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Business-first AI — the problem before the model</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Context-aware conversational experiences</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Scalable architecture for your data volume</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Modern AI stack — LLMs, RAG, embeddings, vector DBs</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">End-to-end product development</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Ongoing evaluation and improvement</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ CASE STUDY ═════════════ */}
      <section className="ga-whoweare">
        <div className="ga-container">
          <div className="ga-whoweare__grid">
            <div className="ga-whoweare__stats ga-animate--left">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">RAG</span><span className="ga-stat__label">Grounded Answers</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">LLM</span><span className="ga-stat__label">Model Integration</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">14+</span><span className="ga-stat__label">Years Experience</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">24/7</span><span className="ga-stat__label">Automated Coverage</span></div>
            </div>
            <div className="ga-whoweare__content ga-animate--right">
              <h2 className="ga-whoweare__heading">
                A <span className="ga-text-accent">Generative AI Chatbot</span> We Built
              </h2>
              <p className="ga-whoweare__text">
                mTouch Labs developed a generative AI chatbot using LLMs, RAG, LangChain, pgvector, React,
                Node.js, and Redis.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Contextual, multi-turn conversations</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Source citations on generated answers</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Streaming responses for faster perceived latency</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Personalization per user and workspace</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Automated knowledge-base re-indexing</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/generative-ai-chatbot-case-study-mtouchlabs.webp`}
              alt="Generative AI chatbot developed by mTouch Labs"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            What our chatbot builds are engineered around — omnichannel deployment, retrieval and context,
            secure enterprise integration, and actionable analytics.
          </figcaption>
        </figure>
      </section>

      {/* ═════════════ TECH STACK ═════════════ */}
      <section className="ga-tech">
        <div className="ga-container">
          <div className="ga-tech__grid">
            <div className="ga-animate--left">
              <h2 className="ga-tech__heading">
                AI Chatbot <span className="ga-text-accent">Technology Stack</span>
              </h2>
              <p className="ga-tech__text">
                The stack is selected according to your use case rather than forcing every project onto the
                same architecture.
              </p>
              <div className="ga-tech__tags">
                {[
                  "OpenAI",
                  "Anthropic",
                  "Large Language Models",
                  "LangChain",
                  "LlamaIndex",
                  "RAG",
                  "Embeddings",
                  "Semantic Search",
                  "pgvector",
                  "Pinecone",
                  "ChromaDB",
                  "Python",
                  "Node.js",
                  "React",
                  "Redis",
                  "AWS",
                  "Google Cloud",
                  "REST APIs",
                  "WhatsApp Business API",
                ].map((t) => (
                  <span key={t} className="ga-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="ga-tech__stats ga-animate--right">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">LLM</span><span className="ga-stat__label">Integration</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">RAG</span><span className="ga-stat__label">Architecture</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">3+</span><span className="ga-stat__label">Vector Databases</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">2</span><span className="ga-stat__label">Cloud Platforms</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ PROCESS ═════════════ */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Our AI Chatbot <span className="ga-text-accent">Development Process</span>
            </h2>
            <p className="ga-services__subtitle">
              Six stages from discovery to continuous optimization
            </p>
          </div>
        </div>
        <div className="aip-flow">
          <ol className="aip-flow__list">
            <li className="aip-step">
              <span className="aip-step__num">01</span>
              <h4 className="aip-step__title">Discovery</h4>
              <p className="aip-step__text">Understand your users, business objectives, conversation requirements, data sources, and existing systems.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">02</span>
              <h4 className="aip-step__title">AI &amp; Solution Architecture</h4>
              <p className="aip-step__text">Select the model strategy, design the knowledge and retrieval layer, and define integrations and escalation rules.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">03</span>
              <h4 className="aip-step__title">Data &amp; Knowledge Preparation</h4>
              <p className="aip-step__text">Clean, chunk, embed, and index your approved content so every answer can be retrieved reliably.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">04</span>
              <h4 className="aip-step__title">Development &amp; Integration</h4>
              <p className="aip-step__text">Build the conversation logic, LLM wiring, APIs, and connectors into your business systems.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">05</span>
              <h4 className="aip-step__title">Testing &amp; Evaluation</h4>
              <p className="aip-step__text">Evaluate answer quality, retrieval accuracy, edge cases, and fallback behaviour before launch.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">06</span>
              <h4 className="aip-step__title">Deployment &amp; Optimization</h4>
              <p className="aip-step__text">Ship to production, monitor real conversations, and keep improving accuracy and coverage.</p>
            </li>
          </ol>
        </div>
        <figure className="aip-figure aip-figure--flush">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-chatbot-development-process.webp`}
              alt="AI chatbot development process from discovery to deployment"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Discovery &middot; AI &amp; Solution Architecture &middot; Data &amp; Knowledge Preparation
            &middot; Development &amp; Integration &middot; Testing &amp; Evaluation &middot; Deployment
            &amp; Optimization
          </figcaption>
        </figure>
      </section>

      {/* ═════════════ INDUSTRIES ═════════════ */}
      <section className="ga-industries">
        <div className="ga-container">
          <h2 className="ga-industries__title ga-animate">
            AI Chatbot Development for <span className="ga-text-accent">Multiple Industries</span>
          </h2>
        </div>
        <div className="aip-industries">
          {INDUSTRIES.map((ind) => (
            <span key={ind} className="aip-industry-pill">
              {ind}
            </span>
          ))}
        </div>
        <p className="aip-note">
          The chatbot architecture and knowledge sources are adapted to the specific requirements of each
          business.
        </p>
      </section>

      {/* ═════════════ RELATED SERVICES ═════════════ */}
      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Explore <span className="ga-text-accent">Related Services</span>
            </h2>
            <p className="ga-services__subtitle">
              A chatbot rarely ships alone — these are the capabilities most often built alongside it
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <a href="/generative-ai-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Generative AI Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                LLM-powered applications, RAG pipelines, and AI automation built for production — not demos.
              </p>
            </a>
            <a href="/machine-learning-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Machine Learning Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Predictive models, classification, and intelligence layers that sit behind conversational
                experiences.
              </p>
            </a>
            <a href="/custom-software-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Custom Software Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Tailor-made software that aligns with your workflows, integrates with your systems, and scales.
              </p>
            </a>
            <a href="/custom-crm-software-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Custom CRM Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The system your lead-qualification chatbot hands qualified conversations off to.
              </p>
            </a>
            <a href="/mobile-app-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Mobile App Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Android and iOS delivery, ready to embed in-app AI assistants and intelligent workflows.
              </p>
            </a>
            <a href="/ui-ux-design-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">UI/UX Design Services <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Conversation and interface design that makes AI features feel natural and trustworthy.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ═════════════ FAQ ═════════════ */}
      <section className="ga-faq">
        <div className="ga-container">
          <div className="ga-faq__wrapper">
            <h3 className="ga-faq__heading ga-animate">
              Frequently Asked <span className="ga-text-accent">Questions</span>
            </h3>
            <p className="ga-faq__subtext">Everything about AI chatbot development</p>
            <div className="ga-faq__list">
              {FAQS.map((f) => (
                <details className="ga-faq__item" key={f.q}>
                  <summary className="ga-faq__question">
                    <span>{f.q}</span>
                    <span className="ga-faq__chevron"></span>
                  </summary>
                  <div className="ga-faq__answer">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ CTA ═════════════ */}
      <section className="ga-cta">
        <div className="ga-container">
          <div className="ga-cta__inner ga-animate--scale">
            <h2 className="ga-cta__heading">
              Build an AI Chatbot That <span className="ga-text-accent">Actually Helps</span> Your Business
            </h2>
            <p className="ga-cta__text">
              Don&apos;t build another chatbot that simply follows scripted flows. Build a conversational AI
              solution that understands your business, connects with your data, and fits into the way your
              customers and teams already work.{" "}
              <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Talk to mTouch Labs</a> about your AI chatbot project.
            </p>
            <button type="button" className="ga-cta__button js-open-modal">
              Start Your AI Chatbot Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
