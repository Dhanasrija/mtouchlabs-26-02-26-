import type { Metadata } from "next";
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

const INDUSTRIES = [
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

export default function AICustomerSupportSystem() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Customer Support System Development",
            description:
              "mTouch Labs builds AI customer support systems that automate customer queries, retrieve answers from approved business knowledge, classify and route tickets, assist support agents, and escalate to humans when needed.",
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
            solutions across websites, applications, and digital channels — connected to your{" "}
            <a href="/custom-crm-software-development-company">CRM</a> and wider{" "}
            <a href="/custom-software-development-company">software ecosystem</a>.
          </>
        }
        primaryLabel="Build Your AI Customer Support System"
        secondaryLabel="View Case Studies"
      />

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-customer-support-system-mtouchlabs.webp`}
              alt="AI customer support system by mTouch Labs"
              width={1200}
              height={630}
              fetchPriority="high"
            />
          </div>
          <figcaption className="aip-figure__caption">
            An AI support conversation resolving a real request &mdash; grounded in policy, with intent, priority and routing surfaced alongside it.
          </figcaption>
        </figure>
      </section>

      <section className="ga-about">
        <div className="ga-container">
          <div className="ga-about__grid">
            <div className="ga-about__content ga-animate--left">
              <h2 className="ga-about__heading">
                AI-Powered Customer Support for <span className="ga-text-accent">Modern Businesses</span>
              </h2>
              <p className="ga-about__text">
                Traditional customer support often depends on repetitive manual responses, large ticket volumes, and customers waiting for assistance.
              </p>
              <p className="ga-about__text">
                An AI customer support system can help automate common interactions, understand customer intent, retrieve information from approved business knowledge, classify support requests, and assist human support teams.
              </p>
              <p className="ga-about__text">
                mTouch Labs builds AI-powered customer support systems around your products, services, customers, knowledge base, workflows, and existing{" "}
                <a href="/custom-software-development-company">business applications</a>.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Customer query automation</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>AI-powered support conversations</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Ticket classification and routing</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>FAQ automation</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Product and service assistance</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Knowledge-base search</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Customer issue summarization</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Support-agent assistance</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>CRM and helpdesk integration</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Human-agent escalation</span></li>
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

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-human-customer-support-workflow.webp`}
              alt="AI and human customer support workflow"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            The AI lane resolves what it can; low-confidence conversations cross into the human lane with full context intact.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Customer Support Development <span className="ga-text-accent">Services</span>
            </h2>
            <p className="ga-services__subtitle">
              Ten capabilities that combine into one support system rather than a set of disconnected tools
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">💬</span>
              <h4 className="ga-service-card__title">AI Support Chatbots</h4>
              <p className="ga-service-card__text">
                Conversational AI experiences that answer customer questions using your approved business information and predefined support workflows. Related:{" "}
                <a href="/ai-chatbot-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>AI Chatbot Development</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🤖</span>
              <h4 className="ga-service-card__title">AI Support Agents</h4>
              <p className="ga-service-card__text">
                AI agents that can retrieve information, use connected tools, and perform defined support tasks rather than only answering questions.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎫</span>
              <h4 className="ga-service-card__title">AI Ticket Automation</h4>
              <p className="ga-service-card__text">
                Automatically understand incoming support requests, categorize them, prioritize them, and route them to the appropriate workflow or support team.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📚</span>
              <h4 className="ga-service-card__title">AI Knowledge Base Integration</h4>
              <p className="ga-service-card__text">
                Connect your support system with product documentation, FAQs, manuals, policies, and other approved business information.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎧</span>
              <h4 className="ga-service-card__title">AI Agent Assist</h4>
              <p className="ga-service-card__text">
                Help human support representatives find information, summarize conversations, draft responses, and handle repetitive support activities more efficiently.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">⚙️</span>
              <h4 className="ga-service-card__title">Customer Support Automation</h4>
              <p className="ga-service-card__text">
                Automate repetitive customer service workflows while keeping human intervention available for complex or sensitive requests.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔗</span>
              <h4 className="ga-service-card__title">CRM &amp; Helpdesk Integration</h4>
              <p className="ga-service-card__text">
                Connect AI support systems with your existing{" "}
                <a href="/custom-crm-software-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>CRM</a>, helpdesk, customer portal, databases, and business APIs.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📱</span>
              <h4 className="ga-service-card__title">Omnichannel Support Deployment</h4>
              <p className="ga-service-card__text">
                Serve customers across your website, mobile app, customer portal, email, and messaging channels such as WhatsApp — from one AI support core and one knowledge source.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🌐</span>
              <h4 className="ga-service-card__title">Multilingual AI Support</h4>
              <p className="ga-service-card__text">
                Handle customer conversations in multiple languages from the same approved knowledge base, so support coverage expands without duplicating content or teams.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎙️</span>
              <h4 className="ga-service-card__title">Voice AI Support</h4>
              <p className="ga-service-card__text">
                Extend the same support intelligence to phone and IVR conversations — transcribe calls, understand intent, answer routine questions, and hand off to an agent with the transcript attached.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-customer-support-dashboard.webp`}
              alt="AI customer support dashboard with resolution and CSAT metrics"
              width={1000}
              height={750}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Resolution volume, first-response time, deflection rate and CSAT &mdash; so support automation stays measurable.
          </figcaption>
        </figure>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Key Features of AI Customer Support <span className="ga-text-accent">Software</span>
            </h2>
            <p className="ga-services__subtitle">
              Eight features that decide whether support automation actually holds up in production
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🕐</span>
              <h4 className="ga-service-card__title">24/7 AI Assistance</h4>
              <p className="ga-service-card__text">
                Immediate responses to common questions outside traditional support hours.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧠</span>
              <h4 className="ga-service-card__title">Context-Aware Conversations</h4>
              <p className="ga-service-card__text">
                Maintain relevant conversational context for more natural interactions.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📖</span>
              <h4 className="ga-service-card__title">Knowledge-Based Responses</h4>
              <p className="ga-service-card__text">
                Ground responses in approved business information and documentation.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🚦</span>
              <h4 className="ga-service-card__title">Intelligent Ticket Routing</h4>
              <p className="ga-service-card__text">
                Classify customer requests and route them by your support workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🤝</span>
              <h4 className="ga-service-card__title">Human Handoff</h4>
              <p className="ga-service-card__text">
                Transfer to human representatives when the request needs more assistance.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✨</span>
              <h4 className="ga-service-card__title">Support Agent Copilot</h4>
              <p className="ga-service-card__text">
                AI help for searching information, summarizing threads and drafting replies.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔌</span>
              <h4 className="ga-service-card__title">CRM Integration</h4>
              <p className="ga-service-card__text">
                Connect support conversations with customer records and business workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📊</span>
              <h4 className="ga-service-card__title">Analytics</h4>
              <p className="ga-service-card__text">
                Track conversations, common queries, resolution patterns and defined metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-delivery">
        <div className="ga-container">
          <h2 className="ga-delivery__heading ga-animate">
            How AI Customer <span className="ga-text-accent">Support Works</span>
          </h2>
          <p className="ga-delivery__text">
            For knowledge-based support, the system retrieves relevant information from approved business sources before generating a response. For workflow-based support, it can connect with APIs or business applications to retrieve or update information according to defined permissions and rules.
          </p>
          <div className="ga-delivery__steps">
            <div className="ga-step"><span className="ga-step__circle">Customer Question</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Intent Detection</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Knowledge Retrieval</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">AI Response</span></div>
            <span className="ga-step__arrow">→</span>
            <div className="ga-step"><span className="ga-step__circle">Action or Human Escalation</span></div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Customer Support <span className="ga-text-accent">Architecture</span>
            </h2>
            <p className="ga-services__subtitle">
              Five layers that let AI automation and human support work together rather than as separate systems
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🖥️</span>
              <h4 className="ga-service-card__title">Customer Interface</h4>
              <p className="ga-service-card__text">
                Website, mobile application, customer portal, or messaging channel.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🧠</span>
              <h4 className="ga-service-card__title">AI Conversation Layer</h4>
              <p className="ga-service-card__text">
                Understands the customer&rsquo;s request and maintains conversational context.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📚</span>
              <h4 className="ga-service-card__title">Knowledge &amp; Retrieval Layer</h4>
              <p className="ga-service-card__text">
                Retrieves relevant information from approved documents, FAQs, databases, or knowledge repositories.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🔗</span>
              <h4 className="ga-service-card__title">Business Integration Layer</h4>
              <p className="ga-service-card__text">
                Connects with CRM, helpdesk, APIs, databases, and other systems.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🤝</span>
              <h4 className="ga-service-card__title">Human Support Layer</h4>
              <p className="ga-service-card__text">
                Escalates conversations when human intervention is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-customer-support-architecture.webp`}
              alt="AI customer support architecture with knowledge retrieval and CRM integration"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Customer interface, AI conversation, knowledge retrieval, business integration and human support as one connected stack.
          </figcaption>
        </figure>
        <p className="aip-note">
          This architecture allows AI automation and human support to work together rather than treating them as separate systems.
        </p>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Customer Support <span className="ga-text-accent">Use Cases</span>
            </h2>
            <p className="ga-services__subtitle">
              The same platform, adapted to each industry&rsquo;s knowledge sources and workflows
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛒</span>
              <h4 className="ga-service-card__title">E-commerce Customer Support</h4>
              <p className="ga-service-card__text">
                Product questions, order-related enquiries, returns, shipping information, and common purchasing questions across your{" "}
                <a href="/ecommerce-app-development-company" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>ecommerce platform</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">☁️</span>
              <h4 className="ga-service-card__title">SaaS Customer Support</h4>
              <p className="ga-service-card__text">
                Help users understand product features, search documentation, troubleshoot common issues, and navigate support resources inside your{" "}
                <a href="/saas-development-services" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>SaaS product</a>.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏦</span>
              <h4 className="ga-service-card__title">Banking &amp; Financial Services</h4>
              <p className="ga-service-card__text">
                Approved informational workflows such as account-related FAQs, product information, and service navigation. Sensitive financial decisions should remain subject to appropriate human and system controls.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🩺</span>
              <h4 className="ga-service-card__title">Healthcare Support</h4>
              <p className="ga-service-card__text">
                Approved administrative and informational workflows such as appointment-related enquiries and service information. AI should not replace qualified professionals for diagnosis or treatment decisions.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">✈️</span>
              <h4 className="ga-service-card__title">Travel &amp; Hospitality</h4>
              <p className="ga-service-card__text">
                Automate questions about bookings, services, policies, destinations, and customer requests.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏠</span>
              <h4 className="ga-service-card__title">Real Estate</h4>
              <p className="ga-service-card__text">
                Assist customers with property-related enquiries, listing information, lead qualification, and appointment workflows.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🎓</span>
              <h4 className="ga-service-card__title">Education</h4>
              <p className="ga-service-card__text">
                Help students and users find information about courses, programs, admissions, schedules, and other approved resources.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🛡️</span>
              <h4 className="ga-service-card__title">Insurance</h4>
              <p className="ga-service-card__text">
                Policy coverage questions, document requirements, renewal and claim-status enquiries, with complex cases routed to licensed staff. Coverage and claim decisions stay under human and system control.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🚚</span>
              <h4 className="ga-service-card__title">Logistics &amp; Delivery</h4>
              <p className="ga-service-card__text">
                Shipment tracking, delivery-window questions, address changes, and delayed or failed delivery exceptions — with live status pulled from your own systems.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📶</span>
              <h4 className="ga-service-card__title">Telecom &amp; Utilities</h4>
              <p className="ga-service-card__text">
                Plan and billing enquiries, usage questions, outage and service status, SIM or connection requests, and appointment booking for field visits.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏬</span>
              <h4 className="ga-service-card__title">Retail &amp; Consumer Brands</h4>
              <p className="ga-service-card__text">
                Store hours and locations, stock availability, order pickup, warranty and returns, and loyalty programme questions across online and in-store customers.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🍽️</span>
              <h4 className="ga-service-card__title">Food Delivery &amp; Restaurants</h4>
              <p className="ga-service-card__text">
                Order status, menu and allergen questions, refunds for missing or late items, and delivery issues — wired into your{" "}
                <a href="/food-delivery-app-development-service" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>food delivery platform</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-customer-support-use-cases.webp`}
              alt="AI customer support use cases across industries"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            AI customer support across e-commerce, SaaS, finance, healthcare, travel, real estate and education.
          </figcaption>
        </figure>
      </section>

      <section className="ga-reliable">
        <div className="ga-container">
          <div className="ga-reliable__inner ga-animate">
            <h2 className="ga-reliable__heading">
              Why Choose <span className="ga-text-accent">mTouch Labs</span> for AI Customer Support Development?
            </h2>
            <p className="ga-reliable__text">
              mTouch Labs combines AI development, software engineering, application development, data
              technologies, and system integration to build customer support solutions around real business
              requirements. Browse our{" "}
              <a href="/portfolio" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>portfolio</a> and{" "}
              <a href="/case-studies" style={{ color: "#3E8CFB", textDecoration: "none", fontWeight: 600 }}>case studies</a> for shipped examples.
            </p>
            <div className="ga-reliable__pillars">
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Business-specific AI — designed around your products, customers and knowledge</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Connected support systems — CRM, helpdesks, APIs, databases and applications</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Human + AI collaboration — automation where it fits, people where they matter</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Scalable architecture for changing volumes and knowledge sources</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">End-to-end development from AI strategy through to optimization</span></div>
              <div className="ga-pillar"><span className="ga-pillar__dot"></span><span className="ga-pillar__label">Measured, not assumed — quality and escalation evaluated before launch</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Customer Support for Different <span className="ga-text-accent">Business Sizes</span>
            </h2>
            <p className="ga-services__subtitle">
              The same architecture, scoped to the size of the support operation around it
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🚀</span>
              <h4 className="ga-service-card__title">Startups</h4>
              <p className="ga-service-card__text">
                Automate repetitive customer questions without requiring a large support operation.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">📈</span>
              <h4 className="ga-service-card__title">Growing Businesses</h4>
              <p className="ga-service-card__text">
                Combine AI automation with human support to handle increasing customer interaction volumes.
              </p>
            </div>
            <div className="ga-service-card ga-animate--scale">
              <span className="ga-service-card__badge ga-service-card__badge--icon">🏢</span>
              <h4 className="ga-service-card__title">Enterprises</h4>
              <p className="ga-service-card__text">
                Integrate AI customer support with existing knowledge systems, CRM platforms, helpdesks, applications, and enterprise workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-whoweare">
        <div className="ga-container">
          <div className="ga-whoweare__grid">
            <div className="ga-whoweare__stats ga-animate--left">
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">24/7</span><span className="ga-stat__label">Automated Coverage</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">RAG</span><span className="ga-stat__label">Grounded Answers</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">LLM</span><span className="ga-stat__label">Model Integration</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">14+</span><span className="ga-stat__label">Years Experience</span></div>
            </div>
            <div className="ga-whoweare__content ga-animate--right">
              <h2 className="ga-whoweare__heading">
                The mTouch Labs <span className="ga-text-accent">AI Support Solution</span>
              </h2>
              <p className="ga-whoweare__text">
                Conversational AI, business knowledge, automation and integration built around one support core rather than a set of disconnected tools.
              </p>
              <ul className="ga-checklist">
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>24/7 assistance for common questions outside support hours</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Knowledge-grounded responses cited from approved business sources</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Intelligent routing by intent and priority to the right team</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Agent copilot with summaries, draft replies and resolution insight</span></li>
                <li className="ga-checklist__item"><span className="ga-checklist__icon">✓</span><span>Human escalation with the full conversation context attached</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="aip-figure-band">
        <figure className="aip-figure">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-customer-support-solution-mtouchlabs.webp`}
              alt="AI customer support solution by mTouch Labs"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            24/7 assistance, knowledge-grounded answers, intelligent routing, and agent copilot with analytics &mdash; around one AI support core.
          </figcaption>
        </figure>
      </section>

      <section className="ga-tech">
        <div className="ga-container">
          <div className="ga-tech__grid">
            <div className="ga-animate--left">
              <h2 className="ga-tech__heading">
                AI Customer Support <span className="ga-text-accent">Technology</span>
              </h2>
              <p className="ga-tech__text">
                The stack is selected according to the required accuracy, latency, scalability, security, integrations, and operating cost — not a fixed architecture applied to every project.
              </p>
              <div className="ga-tech__tags">
                {[
                  "Large Language Models (LLMs)",
                  "Retrieval-Augmented Generation (RAG)",
                  "Embeddings",
                  "AI orchestration frameworks",
                  "Vector databases",
                  "Knowledge indexing",
                  "Cloud infrastructure",
                  "Python",
                  "Node.js",
                  "React",
                  "REST APIs",
                  "CRM integrations",
                  "Helpdesk integrations",
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
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">10</span><span className="ga-stat__label">Support Services</span></div>
              <div className="ga-stat ga-stat--dark"><span className="ga-stat__number">12</span><span className="ga-stat__label">Industry Use Cases</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              AI Customer Support <span className="ga-text-accent">Development Process</span>
            </h2>
            <p className="ga-services__subtitle">
              Six stages from support workflow discovery through to continuous optimization
            </p>
          </div>
        </div>
        <div className="aip-flow">
          <ol className="aip-flow__list">
            <li className="aip-step">
              <span className="aip-step__num">01</span>
              <h4 className="aip-step__title">Support Workflow Discovery</h4>
              <p className="aip-step__text">We analyze your customer journeys, support requests, existing systems, knowledge sources, and automation opportunities.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">02</span>
              <h4 className="aip-step__title">AI Solution Architecture</h4>
              <p className="aip-step__text">We define the AI model strategy, knowledge architecture, integrations, workflows, escalation logic, and security requirements.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">03</span>
              <h4 className="aip-step__title">Knowledge Integration</h4>
              <p className="aip-step__text">Your approved FAQs, documentation, product information, policies, and other relevant sources can be prepared for AI retrieval.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">04</span>
              <h4 className="aip-step__title">AI Development</h4>
              <p className="aip-step__text">We build the conversational experience, support workflows, integrations, and AI capabilities required for your use case.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">05</span>
              <h4 className="aip-step__title">Testing &amp; Evaluation</h4>
              <p className="aip-step__text">We evaluate response quality, retrieval accuracy, conversation flows, edge cases, integrations, and escalation behaviour.</p>
            </li>
            <li className="aip-step">
              <span className="aip-step__num">06</span>
              <h4 className="aip-step__title">Deployment &amp; Optimization</h4>
              <p className="aip-step__text">After deployment, the system can be monitored and refined based on customer interactions, support requirements, and business feedback.</p>
            </li>
          </ol>
        </div>
        <figure className="aip-figure aip-figure--flush">
          <div className="aip-figure__frame">
            <img
              src={`${IMG}/ai-customer-support-development-process.webp`}
              alt="AI customer support development process from discovery to optimization"
              width={1200}
              height={700}
              loading="lazy"
            />
          </div>
          <figcaption className="aip-figure__caption">
            Support Workflow Discovery &middot; AI Solution Architecture &middot; Knowledge Integration &middot; AI Development &middot; Testing &amp; Evaluation &middot; Deployment &amp; Optimization
          </figcaption>
        </figure>
      </section>

      <section className="ga-industries">
        <div className="ga-container">
          <h2 className="ga-industries__title ga-animate">
            What Can an AI Customer Support <span className="ga-text-accent">System Do?</span>
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
          The exact capabilities depend on your business workflows, data, integrations, and required level of automation.
        </p>
      </section>

      <section className="ga-services">
        <div className="ga-container">
          <div className="ga-services__header ga-animate">
            <h2 className="ga-services__title">
              Explore <span className="ga-text-accent">Related Services</span>
            </h2>
            <p className="ga-services__subtitle">
              Capabilities most often built alongside an AI customer support system
            </p>
          </div>
          <div className="ga-services__grid ga-stagger">
            <a href="/ai-chatbot-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">AI Chatbot Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Custom AI chatbots with RAG, LLM integration and enterprise connectors.
              </p>
            </a>
            <a href="/generative-ai-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Generative AI Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                LLM-powered applications, RAG pipelines and production AI automation.
              </p>
            </a>
            <a href="/custom-crm-software-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Custom CRM Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                The system your support conversations and qualified leads land in.
              </p>
            </a>
            <a href="/machine-learning-development-company" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">Machine Learning Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Prediction, classification and scoring models behind support intelligence.
              </p>
            </a>
            <a href="/saas-development-services" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">SaaS Development <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                In-product support assistants for your software platform.
              </p>
            </a>
            <a href="/quality-assurance-and-testing-services" className="ga-service-card ga-animate--scale" style={{ color: "inherit", textDecoration: "none", display: "block", position: "relative" }}>
              <h4 className="ga-service-card__title">QA &amp; Testing Services <span style={{ float: "right", color: "#3E8CFB", fontWeight: 700 }} aria-hidden>→</span></h4>
              <p className="ga-service-card__text">
                Independent evaluation of AI responses, retrieval quality and edge cases.
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
            <p className="ga-faq__subtext">Everything about AI customer support system development</p>
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
              Build Your AI Customer Support System with <span className="ga-text-accent">mTouch Labs</span>
            </h2>
            <p className="ga-cta__text">
              Give customers faster access to information while helping your support team spend less time on
              repetitive tasks. mTouch Labs develops custom AI customer support systems that combine
              conversational AI, business knowledge, automation, and software integrations.{" "}
              <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Talk to mTouch Labs</a> about your project.
            </p>
            <button type="button" className="ga-cta__button js-open-modal">
              Start Your AI Support Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
