import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Company Australia | mTouch Labs",
  description: "mTouch Labs provides custom software development services for Australian businesses including SaaS platforms, cloud solutions, AI systems, and scalable digital products.",
  keywords: ["software development company Australia","custom software development Australia","SaaS development company Australia","offshore development Australia","mobile app development Australia"],
  openGraph: {
    title: "Software Development Company Australia | mTouch Labs",
    description: "Scalable SaaS, cloud-native applications, and AI-powered software solutions for Australian startups and enterprises.",
    url: "https://www.mtouchlabs.com/software-development-company-australia",
    type: "website",
  },
  alternates: { canonical: "https://www.mtouchlabs.com/software-development-company-australia" },
};

const CITY = "Australia";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/YourAustraliaLink";

const STATS = [
  { number: "2000+", label: "Projects Delivered" },
  { number: "1500+", label: "Enterprise Clients" },
  { number: "14+", label: "Years Experience" },
  { number: "99%", label: "Client Retention" },
];

const SERVICES = [{icon: "\u2699\ufe0f", title: "Custom Business Applications", desc: "Tailored systems designed to streamline operations and improve productivity."}, {icon: "\u2601\ufe0f", title: "SaaS & Subscription Platforms", desc: "Multi-tenant applications built for scalability and recurring revenue models."}, {icon: "\ud83d\udd04", title: "Cloud & DevOps Enablement", desc: "Infrastructure optimization, CI/CD pipelines, and secure cloud migration."}, {icon: "\ud83e\udd16", title: "AI & Intelligent Automation", desc: "Smart dashboards, analytics engines, and predictive automation tools."}, {icon: "\ud83d\udcf1", title: "Mobile & Web Solutions", desc: "User-focused digital products optimized for performance and engagement."}];
const WHY_US = [{icon: "\ud83d\udcb0", title: "Cost-Efficient Development", text: "High-quality offshore development that maximizes your technology investment."}, {icon: "\ud83d\udd50", title: "AEST Time-Zone Collaboration", text: "Work schedules aligned with Australian Eastern Standard Time."}, {icon: "\ud83d\udd04", title: "Transparent Agile Process", text: "Iterative delivery with regular demos, sprint reviews, and clear documentation."}, {icon: "\ud83d\udcd0", title: "Scalable Architecture", text: "Systems designed for growth \u2014 from startup to enterprise scale."}, {icon: "\ud83d\udc65", title: "Dedicated Engineering Teams", text: "Full-time teams working exclusively on your projects."}, {icon: "\ud83d\udee0\ufe0f", title: "Long-Term Support", text: "Continuous monitoring, maintenance, and optimization services."}];
const INDUSTRIES = [{emoji: "\ud83d\uded2", name: "E-commerce & Retail"}, {emoji: "\ud83d\udcb3", name: "Fintech & Payments"}, {emoji: "\ud83d\ude9a", name: "Logistics & Supply Chain"}, {emoji: "\ud83c\udfe5", name: "Healthcare & HealthTech"}, {emoji: "\ud83c\udfea", name: "Marketplace Platforms"}, {emoji: "\ud83d\udcbc", name: "Enterprise Solutions"}];

const PROCESS = [
  { title: "Requirement Analysis & Consultation", desc: "Deep-dive into your business goals, technical requirements, and user expectations." },
  { title: "Architecture Planning", desc: "Designing scalable, secure system architecture tailored to your needs." },
  { title: "UI/UX Design & Prototyping", desc: "Creating intuitive, user-centered interfaces validated through prototyping." },
  { title: "Agile Development Sprints", desc: "Iterative feature development with regular demos and feedback loops." },
  { title: "Quality Testing & Optimization", desc: "Comprehensive QA, performance tuning, and security testing." },
  { title: "Deployment & Ongoing Support", desc: "Smooth go-live with continuous monitoring, maintenance, and support." },
];

const FAQS = [{q: "Do you provide software development services for Australian businesses?", a: "Yes, we collaborate with startups and enterprises across Australia through structured offshore engagement models."}, {q: "How do you manage time-zone differences with Australia?", a: "We align our work schedules with AEST to ensure overlapping collaboration hours and smooth communication."}, {q: "Can Australian startups hire dedicated developers?", a: "Yes, we offer flexible hiring models including dedicated offshore development teams."}, {q: "Do you develop SaaS platforms for Australian companies?", a: "Yes, we build scalable SaaS and subscription-based cloud platforms."}, {q: "Do you provide long-term maintenance and support?", a: "Yes, we provide continuous monitoring, upgrades, and technical support."}];

export default function SoftwareDevelopmentCompanyAustralia() {
  return (
    <div className="loc-pageWrapper">
      <section className="loc-hero">
        <div className="loc-heroBg" aria-hidden="true" />
        <div className="loc-heroContent">
          <span className="loc-heroBadge"><span className="loc-heroBadgeDot" />Software Development Company in {CITY}</span>
          <h1 className="loc-heroTitle">
            Software Development Company <span className="loc-highlight">Australia</span>
          </h1>
          <p className="loc-heroDesc">Helping Australian businesses build future-ready digital platforms. We collaborate with startups, SMEs, and enterprises across Australia.</p>
          <div className="loc-heroCtas">
            <Link href="/contact-us" className="loc-btnPrimary">Start Your Project →</Link>
            <Link href="/portfolio" className="loc-btnSecondary">View Our Work</Link>
          </div>
        </div>
        <div className="loc-heroScroll"><span>Scroll</span><span className="loc-scrollLine" /></div>
      </section>

      <div className="loc-linksBanner">
        <div className="loc-linksBannerInner">
          <span className="loc-linksBannerLabel">Explore →</span>
          <Link href="/services" className="loc-internalLink">Our Services</Link>
          <Link href="/about" className="loc-internalLink">About Us</Link>
          <Link href="/contact-us" className="loc-internalLink">Contact Us</Link>
          <Link href="/portfolio" className="loc-internalLink">Portfolio</Link>
        </div>
      </div>

      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Supporting {CITY}&apos;s <span className="loc-highlight">Growing Digital Economy</span></h2>
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">Australia's business landscape is rapidly evolving with strong growth in e-commerce, fintech, logistics, healthcare, and marketplace platforms.</p>
              <p className="loc-introText">To stay competitive, businesses need scalable digital infrastructure. We design cloud-native systems and intelligent platforms that adapt to changing market demands.</p>
            </div>
            <div className="loc-introVisual">
              <div className="loc-introVisualOrb" aria-hidden="true" />
              <div className="loc-introVisualOrb" aria-hidden="true" />
              <div className="loc-introStats">
                {STATS.map((stat) => (<div key={stat.label} className="loc-statCard"><div className="loc-statNumber">{stat.number}</div><div className="loc-statLabel">{stat.label}</div></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">What We Deliver for Australian Companies</span></h2>
          <p className="loc-sectionDesc">We build future-ready technology platforms tailored to local and global markets. <Link href="/services" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>View all services →</Link></p>
          <div className="loc-servicesGrid">
            {SERVICES.map((svc, i) => (<div key={svc.title} className="loc-serviceCard"><span className="loc-serviceNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="loc-serviceIcon">{svc.icon}</div><h3 className="loc-serviceTitle">{svc.title}</h3><p className="loc-serviceDesc">{svc.desc}</p></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Why Australian Businesses Work with Us</span></h2>
          <p className="loc-sectionDesc">Measurable business impact through reliable and innovative software solutions. <Link href="/about" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>Learn more about us →</Link></p>
          <div className="loc-whyGrid">
            {WHY_US.map((item) => (<div key={item.title} className="loc-whyCard"><div className="loc-whyIcon">{item.icon}</div><div><h3 className="loc-whyTitle">{item.title}</h3><p className="loc-whyText">{item.text}</p></div></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Industries We Serve in <span className="loc-highlight">{CITY}</span></h2>
          <p className="loc-sectionDesc">Delivering domain-specific solutions across {CITY}&apos;s key industries.</p>
          <div className="loc-industriesGrid">
            {INDUSTRIES.map((ind) => (<div key={ind.name} className="loc-industryCard"><span className="loc-industryEmoji" aria-hidden="true">{ind.emoji}</span><h3 className="loc-industryName">{ind.name}</h3></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Our <span className="loc-highlight">Development Approach</span></h2>
          <p className="loc-sectionDesc">A structured process delivering measurable ROI through scalable digital systems.</p>
          <div className="loc-processTimeline">
            {PROCESS.map((step, i) => (<div key={step.title} className="loc-processStep"><div className="loc-processStepNum">{String(i + 1).padStart(2, "0")}</div><div className="loc-processStepContent"><h3 className="loc-processStepTitle">{step.title}</h3><p className="loc-processStepDesc">{step.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Frequently Asked Questions</h2>
          <p className="loc-sectionDesc">Common questions about <span className="loc-highlight">software development</span> services in {CITY}.</p>
          <div className="loc-faqList">
            {FAQS.map((faq, i) => (<details key={i} className="loc-faqAccordion"><summary className="loc-faqSummary"><span className="loc-faqNum">{String(i + 1).padStart(2, "0")}</span><span className="loc-faqQuestionText">{faq.q}</span><span className="loc-faqChevron" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></span></summary><div className="loc-faqAnswerWrap"><p className="loc-faqAnswer">{faq.a}</p></div></details>))}
          </div>
        </div>
      </section>

      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Build Your Next <span className="loc-highlight">Digital Product</span>?</h2>
          <p className="loc-ctaDesc">Partner with {CITY}&apos;s trusted software development team. Let&apos;s turn your vision into a scalable reality.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-btnPrimary">Get a Free Consultation →</Link>
            <Link href="/services" className="loc-btnSecondary">Explore Services</Link>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="loc-btnYellow">📍 Visit Our {CITY} Office</a>
          </div>
        </div>
      </section>
    </div>
  );
}