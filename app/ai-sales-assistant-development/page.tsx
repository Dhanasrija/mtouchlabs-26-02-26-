import type { Metadata } from "next";
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
        url: `${IMG}/ai-sales-assistant-mtouchlabs.webp`,
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
    images: [`${IMG}/ai-sales-assistant-mtouchlabs.webp`],
  },
  robots: { index: true, follow: true },
};

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

const INDUSTRIES = [
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

export default function AISalesAssistantDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Sales Assistant Development Company",
            description:
              "mTouch Labs builds custom AI sales assistants that engage prospects, qualify leads against your criteria, recommend relevant products, assist sales reps, and sync with your CRM.",
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
                name: "AI Sales Assistant Development Company",
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
  color: #33415C;
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
  color: #1B2A4A;
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
  color: #2F7BF6;
  margin-bottom: 10px;
}
.aip-step__title {
  margin: 0 0 8px;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 28px;
  color: #011D80;
}
.aip-step__text {
  margin: 0;
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 15px;
  line-height: 26px;
  color: var(--ga-text, #444444);
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
            conversational AI, business knowledge, customer data, and sales workflows — connected to your{" "}
            <a href="/custom-crm-software-development-company">CRM</a> and wider{" "}
            <a href="/custom-software-development-company">software ecosystem</a>.
          </>
        }
        primaryLabel="Build Your AI Sales Assistant"
        secondaryLabel="View Case Studies"
      />

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-sales-assistant-mtouchlabs.webp`}
              alt="AI sales assistant by mTouch Labs"
              width={1200}
              height={630}
              fetchPriority="high"
            />
          </div>
          <figcaption className="aip-figure__caption">
            An inbound lead scored against your own criteria &mdash; with the signals behind the score and the recommended next step shown to the rep.
          </figcaption>
        </figure>
      </section>

      <section className="ga-about">
        <div className="ga-container">
          <div className="ga-about__grid">
            <div className="ga-about__content ga-animate--left">
              <h2 className="ga-about__heading">
                AI Sales Assistants Built for <span className="ga-text-accent">Your Sales Workflow</span>
              </h2>
              <p className="ga-about__text">
                Sales teams spend significant time answering repetitive questions, researching prospects, qualifying enquiries, updating customer information, and preparing follow-ups.
              </p>
              <p className="ga-about__text">
                An AI sales assistant can automate or assist with these activities while allowing sales representatives to focus on high-value conversations and relationship building. From website lead capture to CRM-connected automation, we build around how your team actually works.
              </p>
              <p className="ga-about__text">
                The level of automation can be tailored to your business processes and approval requirements — important actions can include defined business rules, permissions, validation, or human approval.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Engage website visitors</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Capture potential leads</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Understand customer requirements</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Qualify sales enquiries</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Answer product questions</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Recommend relevant products or services</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Retrieve sales information</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Assist sales representatives</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Connect with CRM systems</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Support defined follow-up workflows</span></li>
              </ul>
            </div>
            <div className="ga-stats ga-animate--right">
              <div className="ga-stat"><span className="ga-stat__icon">🎯</span><span className="ga-stat__label">Lead Qualification</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">📚</span><span className="ga-stat__label">Product Knowledge</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">🔗</span><span className="ga-stat__label">CRM Sync</span></div>
              <div className="ga-stat"><span className="ga-stat__icon">🤝</span><span className="ga-stat__label">Rep Handoff</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-lead-qualification-workflow.webp`}
              alt="AI lead qualification workflow from enquiry to routed opportunity"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            From raw enquiry to a routed, sales-ready opportunity &mdash; with every score explainable.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Sales Assistant Development <span className="ga-text-accent">Services</span>
            </h2>
            <p className="ga-services__subtitle">
              Seven capabilities that combine into one sales system rather than a set of disconnected tools
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔻</span>
              <h4 className="ga-service-card__title">AI Lead Qualification</h4>
              <p className="ga-service-card__text">
                Qualification workflows that ask relevant questions, understand prospect requirements, and identify leads according to your defined criteria.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💬</span>
              <h4 className="ga-service-card__title">AI Sales Chat Assistant</h4>
              <p className="ga-service-card__text">
                Engage website visitors and prospects through natural conversations while providing relevant information about your products or services. Related:{" "}
                <a href="/ai-chatbot-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>AI Chatbot Development</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🤖</span>
              <h4 className="ga-service-card__title">AI Sales Agent Development</h4>
              <p className="ga-service-card__text">
                AI agents that can retrieve information, interact with approved sales tools, and execute defined sales workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏷️</span>
              <h4 className="ga-service-card__title">AI Product Recommendation</h4>
              <p className="ga-service-card__text">
                Help prospects discover products, plans, or services based on their requirements, preferences, and available business information — often paired with an{" "}
                <a href="/ai-recommendation-engine-development" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>AI recommendation engine</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✨</span>
              <h4 className="ga-service-card__title">AI Sales Copilot</h4>
              <p className="ga-service-card__text">
                An intelligent assistant for your reps that can summarize conversations, retrieve customer information, prepare responses, and assist with sales research.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔗</span>
              <h4 className="ga-service-card__title">CRM-Connected Assistant</h4>
              <p className="ga-service-card__text">
                Connect AI sales workflows with{" "}
                <a href="/custom-crm-software-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>CRM systems</a> to support lead management, customer information retrieval, and defined sales processes.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚙️</span>
              <h4 className="ga-service-card__title">AI Sales Automation</h4>
              <p className="ga-service-card__text">
                Automate repetitive sales activities such as enquiry classification, lead routing, information retrieval, and other predefined workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-sales-assistant-dashboard.webp`}
              alt="AI sales assistant dashboard with lead and pipeline metrics"
              width={1000}
              height={750}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Leads processed, qualified rate, response time and pipeline added &mdash; so sales automation stays measurable.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Sales Assistant <span className="ga-text-accent">Features</span>
            </h2>
            <p className="ga-services__subtitle">
              Six features that decide whether sales AI survives contact with a real pipeline
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎯</span>
              <h4 className="ga-service-card__title">Business-Specific AI</h4>
              <p className="ga-service-card__text">
                Built around your products, customers, qualification process and sales objectives.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚙️</span>
              <h4 className="ga-service-card__title">AI + Sales Automation</h4>
              <p className="ga-service-card__text">
                Conversational AI combined with defined workflows to cut repetitive manual activity.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔌</span>
              <h4 className="ga-service-card__title">CRM Integration</h4>
              <p className="ga-service-card__text">
                Connected to your existing sales systems rather than another disconnected tool.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">👥</span>
              <h4 className="ga-service-card__title">Human + AI Collaboration</h4>
              <p className="ga-service-card__text">
                AI handles suitable repetitive interactions; reps stay in the important conversations.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📐</span>
              <h4 className="ga-service-card__title">Scalable Architecture</h4>
              <p className="ga-service-card__text">
                Evolves as your product catalog, customer base and sales workflows grow.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🚀</span>
              <h4 className="ga-service-card__title">End-to-End Development</h4>
              <p className="ga-service-card__text">
                From AI strategy and UX to development, integrations, testing, deployment and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-delivery">
        <div className="ga-container">
          <h2 className="ga-delivery__heading ga-animate">
            How an AI Sales <span className="ga-text-accent">Assistant Works</span>
          </h2>
          <p className="ga-delivery__text">
            A typical AI sales assistant moves an enquiry from first message to a routed opportunity. For knowledge-intensive applications, Retrieval-Augmented Generation retrieves relevant information from approved sources before generating a response. For higher-risk actions, human approval and predefined controls can be built into the workflow.
          </p>
          <div className="ga-delivery__steps">
            <div className="ga-step"><span className="ga-step__circle">Conversation</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Intent Understanding</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Knowledge Retrieval</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Qualification</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Recommendation / Action</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">CRM</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Human Sales Team</span></div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-sales-assistant-crm-architecture.webp`}
              alt="AI sales assistant and CRM architecture"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Capture, conversation, enrichment, scoring, CRM sync and the sales team as one connected stack.
          </figcaption>
        </figure>
        <p className="aip-note">
          The architecture adapts depending on whether the AI is used primarily for lead generation, sales assistance, product discovery or broader sales automation.
        </p>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Sales Assistant <span className="ga-text-accent">Use Cases</span>
            </h2>
            <p className="ga-services__subtitle">
              Where a sales assistant compounds revenue rather than adding admin
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🌐</span>
              <h4 className="ga-service-card__title">Website Lead Generation</h4>
              <p className="ga-service-card__text">
                Turn passive visitors into conversations by letting prospects ask questions, explain requirements and leave contact details.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏢</span>
              <h4 className="ga-service-card__title">B2B Lead Qualification</h4>
              <p className="ga-service-card__text">
                Ask about company, requirements, budget, timeline or use case, then route qualified opportunities to the right representative.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛒</span>
              <h4 className="ga-service-card__title">E-commerce Sales Assistance</h4>
              <p className="ga-service-card__text">
                Help shoppers discover products, understand features, compare options and receive relevant recommendations across your{" "}
                <a href="/ecommerce-app-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>ecommerce platform</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">☁️</span>
              <h4 className="ga-service-card__title">SaaS Sales</h4>
              <p className="ga-service-card__text">
                Answer questions about features, integrations, plans and capabilities while helping prospects find the right fit for your{" "}
                <a href="/saas-development-services" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>SaaS product</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏠</span>
              <h4 className="ga-service-card__title">Real Estate Sales</h4>
              <p className="ga-service-card__text">
                Assist buyers and renters with property enquiries, preferences, availability information and appointment workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎓</span>
              <h4 className="ga-service-card__title">Education Sales &amp; Admissions</h4>
              <p className="ga-service-card__text">
                Help prospective students discover courses, understand programme information and navigate enquiry or admissions workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">👥</span>
              <h4 className="ga-service-card__title">Enterprise Sales</h4>
              <p className="ga-service-card__text">
                Support sales teams with customer research, information retrieval, conversation summaries and sales-process assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-sales-assistant-use-cases.webp`}
              alt="AI sales assistant use cases across industries"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Inbound qualification, meeting booking, catalog guidance, quotes, pipeline hygiene and SaaS trials.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Sales Assistant vs <span className="ga-text-accent">AI Chatbot</span>
            </h2>
            <p className="ga-services__subtitle">
              They can look similar from the user&rsquo;s side, but their objectives differ
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💬</span>
              <h4 className="ga-service-card__title">Primarily Handles Conversations</h4>
              <p className="ga-service-card__text">
                An AI chatbot is built around the conversation itself — an AI sales assistant is built around the sales outcome behind it.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">❓</span>
              <h4 className="ga-service-card__title">General Questions vs Requirements</h4>
              <p className="ga-service-card__text">
                A chatbot answers what is asked. A sales assistant works out what the prospect actually needs and where they sit in your funnel.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎯</span>
              <h4 className="ga-service-card__title">Interaction vs Qualification</h4>
              <p className="ga-service-card__text">
                Customer interaction is the chatbot's job. Lead generation, qualification and routing are the assistant's.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏷️</span>
              <h4 className="ga-service-card__title">Information vs Recommendation</h4>
              <p className="ga-service-card__text">
                A chatbot can provide information; an assistant can support product discovery and recommend a relevant offering.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔀</span>
              <h4 className="ga-service-card__title">Broad vs Sales-Specific</h4>
              <p className="ga-service-card__text">
                Chatbots span broad conversational use. Sales assistants run sales-specific workflows — and can use a chatbot as their front end.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔗</span>
              <h4 className="ga-service-card__title">Both, Connected</h4>
              <p className="ga-service-card__text">
                The same conversational layer can serve support, sales and self-service. See{" "}
                <a href="/ai-customer-support-system" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>AI customer support</a> for the third intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-reliable">
        <div className="ga-container">
          <div className="ga-reliable__inner ga-animate">
            <h2 className="ga-reliable__heading">
              Why Choose <span className="ga-text-accent">mTouch Labs</span> for AI Sales Assistant Development?
            </h2>
            <p className="ga-reliable__text">
              We combine AI development, software engineering, data technologies and application development
              to create sales AI that fits real business environments. Browse our{" "}
              <a href="/portfolio" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>portfolio</a> and{" "}
              <a href="/case-studies" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>case studies</a> for shipped examples.
            </p>
            <div className="ga-reliable__pillars">
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Business-specific AI — built around your qualification process</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">AI plus sales automation, not conversation for its own sake</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">CRM-connected rather than another disconnected tool</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Human + AI collaboration on the conversations that matter</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Scalable architecture as your catalog and pipeline grow</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">End-to-end development from strategy to optimization</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-whoweare">
        <div className="ga-container">
          <div className="ga-whoweare__grid">
            <div className="ga-whoweare__stats ga-animate--left">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">87</span><span className="ga-stat__label">Lead Score Example</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">RAG</span><span className="ga-stat__label">Grounded Answers</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">LLM</span><span className="ga-stat__label">Model Integration</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">14+</span><span className="ga-stat__label">Years Experience</span></div>
            </div>
            <div className="ga-whoweare__content ga-animate--right">
              <h2 className="ga-whoweare__heading">
                The mTouch Labs <span className="ga-text-accent">AI Sales Assistant</span>
              </h2>
              <p className="ga-whoweare__text">
                Conversation, enrichment, scoring and CRM sync in one working loop rather than four disconnected tools.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Instant response — every inbound lead engaged in minutes, around the clock</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Explainable scoring — each score shows the signals behind it</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Two-way CRM sync — records, notes and owners stay current without manual entry</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Revenue analytics — conversion by source, segment and rep, tracked continuously</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Qualified handoff — reps receive prioritised opportunities with the reasoning shown</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-sales-assistant-solution-mtouchlabs.webp`}
              alt="AI sales assistant solution by mTouch Labs"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Instant response, explainable scoring, two-way CRM sync and revenue analytics around one assistant.
          </figcaption>
        </figure>
      </section>

      <section className="ga-tech">
        <div className="ga-container">
          <div className="ga-tech__grid">
            <div className="ga-animate--left">
              <h2 className="ga-tech__heading">
                AI Sales Assistant <span className="ga-text-accent">Technology</span>
              </h2>
              <p className="ga-tech__text">
                Technology is selected according to the business use case, data requirements, integrations, security, scalability, response quality, latency and cost — not a fixed stack applied to every project.
              </p>
              <div className="ga-tech__tags">
                {[
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
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">7</span><span className="ga-stat__label">Sales Services</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">10</span><span className="ga-stat__label">Stack Integrations</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Sales Assistant <span className="ga-text-accent">Development Process</span>
            </h2>
            <p className="ga-services__subtitle">
              Six stages from sales-process discovery through to continuous optimization
            </p>
          </div>
        </div>
        <div className="aip-flow">
          <ol className="aip-flow__list">
            <li className="aip-step">
              <span className="aip-step__num">01</span>
              <h4 className="aip-step__title">Sales Process Discovery</h4>
              <p className="aip-step__text">Your customer journey, qualification criteria, products, sales workflows, existing tools and business objectives.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">02</span>
              <h4 className="aip-step__title">Conversation &amp; AI Strategy</h4>
              <p className="aip-step__text">The assistant&rsquo;s responsibilities, conversation flows, knowledge sources, qualification logic, escalation paths and integrations.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">03</span>
              <h4 className="aip-step__title">Knowledge &amp; Data Preparation</h4>
              <p className="aip-step__text">Product information, FAQs, sales documentation and other approved data prepared for the AI system.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">04</span>
              <h4 className="aip-step__title">AI Development</h4>
              <p className="aip-step__text">We build the assistant, integrate the required AI capabilities and connect it with your sales technology.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">05</span>
              <h4 className="aip-step__title">Testing &amp; Evaluation</h4>
              <p className="aip-step__text">Conversations, qualification workflows, recommendations, integrations, edge cases and human handoff.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">06</span>
              <h4 className="aip-step__title">Deployment &amp; Optimization</h4>
              <p className="aip-step__text">After launch the system is evaluated and improved against defined performance metrics.</p>
            </li>
          </ol>
        </div>
        <figure className="aip-figure aip-figure--flush">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-sales-assistant-development-process.webp`}
              alt="AI sales assistant development process from discovery to optimization"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Sales Process Discovery &middot; Conversation &amp; AI Strategy &middot; Knowledge &amp; Data Preparation &middot; AI Development &middot; Testing &amp; Evaluation &middot; Deployment &amp; Optimization
          </figcaption>
        </figure>
      </section>

      <section className="ga-industries">
        <div className="ga-container">
          <h2 className="ga-industries__title ga-animate">
            Integrating AI With Your Existing <span className="ga-text-accent">Sales Stack</span>
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
          Your AI sales assistant does not have to operate as an isolated application — AI-generated interactions become part of your existing sales workflow rather than creating another disconnected tool.
        </p>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Explore <span className="ga-text-accent">Related Services</span>
            </h2>
            <p className="ga-services__subtitle">
              Capabilities most often built alongside an AI sales assistant
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <a href="/ai-chatbot-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">AI Chatbot Development <span style={{ float: "right", color: "#2563eb", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The conversational layer an AI sales assistant often uses as its front end.
              </p>
            </a>
            <a href="/ai-customer-support-system" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">AI Customer Support System <span style={{ float: "right", color: "#2563eb", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The same conversational core, pointed at resolution instead of revenue.
              </p>
            </a>
            <a href="/ai-recommendation-engine-development" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">AI Recommendation Engine <span style={{ float: "right", color: "#2563eb", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Product and plan recommendations behind guided selling.
              </p>
            </a>
            <a href="/custom-crm-software-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Custom CRM Development <span style={{ float: "right", color: "#2563eb", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The system your qualified leads and sales activity land in.
              </p>
            </a>
            <a href="/generative-ai-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Generative AI Development <span style={{ float: "right", color: "#2563eb", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                LLM-powered applications, RAG pipelines and production AI automation.
              </p>
            </a>
            <a href="/machine-learning-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Machine Learning Development <span style={{ float: "right", color: "#2563eb", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Scoring and propensity models behind sales intelligence.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="ga-faq">
        <div className="ga-container">
          <div className="ga-faq__wrapper">
            <h3 className="ga-faq__heading ga-animate">
              Frequently Asked <span className="ga-text-accent">Questions</span>
            </h3>
            <p className="ga-faq__subtext">Everything about AI sales assistant development</p>
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

      <section className="ga-cta">
        <div className="ga-container">
          <div className="ga-cta__inner ga-animate--scale">
            <h2 className="ga-cta__heading">
              Turn Your Sales Process Into an <span className="ga-text-accent">AI-Powered</span> Experience
            </h2>
            <p className="ga-cta__text">
              Give prospects faster answers and help your sales team focus on conversations that matter.
              mTouch Labs develops custom AI sales assistants for lead qualification, customer engagement,
              product discovery, sales assistance, and business automation.{" "}
              <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Talk to mTouch Labs</a> about your project.
            </p>
            <button type="button" className="ga-cta__button js-open-modal">
              Build Your AI Sales Assistant
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
