import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Company Hyderabad | mTouch Labs",
  description: "mTouch Labs is a leading Software Development Company in Hyderabad offering custom software, enterprise applications, mobile apps, cloud services, and AI solutions.",
  keywords: ["software development company Hyderabad","custom software development Hyderabad","mobile app development company Hyderabad","enterprise application development Hyderabad","AI development company Hyderabad"],
  openGraph: {
    title: "Software Development Company Hyderabad - mTouch Labs",
    description: "Delivering scalable custom software, mobile apps, enterprise solutions, and AI-powered systems for Hyderabad businesses.",
    url: "https://www.mtouchlabs.com/software-development-company-hyderabad",
    type: "website",
  },
  alternates: { canonical: "https://www.mtouchlabs.com/software-development-company-hyderabad" },
};

const CITY = "Hyderabad";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/11vMEchQeBgqjSgk9";

const STATS = [
  { number: "2000+", label: "Projects Delivered" },
  { number: "1500+", label: "Enterprise Clients" },
  { number: "14+", label: "Years Experience" },
  { number: "99%", label: "Client Retention" },
];

const SERVICES = [{icon: "\u2699\ufe0f", title: "Custom Software Development", desc: "Tailored enterprise-grade software solutions designed for scalability, performance, and security."}, {icon: "\ud83c\udfe2", title: "Enterprise Application Development", desc: "Robust ERP, CRM, and workflow automation platforms for operational efficiency."}, {icon: "\ud83d\udcf1", title: "Mobile App Development", desc: "iOS, Android, and cross-platform applications for startups and enterprises."}, {icon: "\u2601\ufe0f", title: "Cloud Services & Migration", desc: "Cloud-native architecture, infrastructure management, and secure migration strategies."}, {icon: "\ud83e\udd16", title: "AI & Intelligent Automation", desc: "AI-powered analytics, automation tools, and predictive systems for smarter business decisions."}];
const WHY_US = [{icon: "\ud83d\udc65", title: "Experienced Local Team", text: "Senior developers who understand the regional market and technology landscape."}, {icon: "\ud83d\udd04", title: "Agile & DevOps-Driven", text: "Iterative delivery with continuous integration and transparent progress tracking."}, {icon: "\u2601\ufe0f", title: "Cloud-First Architecture", text: "Scalable, resilient infrastructure designed for growth from day one."}, {icon: "\ud83d\udd12", title: "Enterprise-Grade Security", text: "Industry-standard security protocols and compliance built into every solution."}, {icon: "\ud83d\udcca", title: "Transparent Management", text: "Real-time dashboards, regular updates, and full visibility into your project."}, {icon: "\ud83d\udee0\ufe0f", title: "Long-Term Support", text: "Dedicated maintenance and support to ensure optimal performance post-launch."}];
const INDUSTRIES = [{emoji: "\ud83c\udfe5", name: "Healthcare & HealthTech"}, {emoji: "\ud83d\udcb3", name: "Fintech & Banking"}, {emoji: "\ud83d\uded2", name: "E-commerce & Retail"}, {emoji: "\ud83d\ude9a", name: "Logistics & Supply Chain"}, {emoji: "\ud83d\udcda", name: "Education Technology"}, {emoji: "\ud83d\udcbc", name: "Enterprise SaaS"}];

const PROCESS = [
  { title: "Requirement Analysis & Consultation", desc: "Deep-dive into your business goals, technical requirements, and user expectations." },
  { title: "Architecture Planning", desc: "Designing scalable, secure system architecture tailored to your needs." },
  { title: "UI/UX Design & Prototyping", desc: "Creating intuitive, user-centered interfaces validated through prototyping." },
  { title: "Agile Development Sprints", desc: "Iterative feature development with regular demos and feedback loops." },
  { title: "Quality Testing & Optimization", desc: "Comprehensive QA, performance tuning, and security testing." },
  { title: "Deployment & Ongoing Support", desc: "Smooth go-live with continuous monitoring, maintenance, and support." },
];

const FAQS = [{q: "Why choose a software development company in Hyderabad?", a: "Hyderabad offers a strong IT ecosystem, experienced talent pool, and cost-effective development solutions, making it an ideal technology hub for building reliable, scalable software."}, {q: "Does mTouch Labs provide custom software development in Hyderabad?", a: "Yes, we provide fully customized software development services tailored to startups, SMEs, and enterprises in Hyderabad. Every solution is built from scratch to match your unique requirements."}, {q: "Do you offer mobile app development services in Hyderabad?", a: "Yes, we develop iOS, Android, and cross-platform mobile applications for businesses across Hyderabad. Our apps are built for performance, scalability, and great user experience."}, {q: "Can you help with cloud migration and AI solutions?", a: "Absolutely. We offer end-to-end cloud migration services and AI-powered automation solutions for Hyderabad-based businesses looking to modernize their technology stack."}, {q: "Do you provide ongoing support after project completion?", a: "Yes, we offer comprehensive application maintenance and long-term support services to ensure your software continues to perform optimally after launch."}];

export default function SoftwareDevelopmentCompanyHyderabad() {
  return (
    <div className="loc-pageWrapper">
      <section className="loc-hero">
        <div className="loc-heroBg" aria-hidden="true" />
        <div className="loc-heroContent">
          <span className="loc-heroBadge"><span className="loc-heroBadgeDot" />Software Development Company in {CITY}</span>
          <h1 className="loc-heroTitle">
            Software Development Company <span className="loc-highlight">Hyderabad</span>
          </h1>
          <p className="loc-heroDesc">Empowering Hyderabad businesses with scalable, secure, and performance-driven digital solutions for startups, SMEs, and enterprises.</p>
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
          <h2 className="loc-sectionTitle">Supporting {CITY}&apos;s <span className="loc-highlight">Growing Tech Ecosystem</span></h2>
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">Hyderabad has rapidly emerged as a major IT and innovation hub in India. With thriving startups, global enterprises, and expanding digital-first businesses, companies require reliable technology partners to scale efficiently.</p>
              <p className="loc-introText">Our team understands the regional market dynamics and helps organizations modernize legacy systems, launch SaaS platforms, and implement AI-driven automation.</p>
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
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Software Development Services</span></h2>
          <p className="loc-sectionDesc">We build future-ready technology platforms tailored to local and global markets. <Link href="/services" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>View all services →</Link></p>
          <div className="loc-servicesGrid">
            {SERVICES.map((svc, i) => (<div key={svc.title} className="loc-serviceCard"><span className="loc-serviceNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="loc-serviceIcon">{svc.icon}</div><h3 className="loc-serviceTitle">{svc.title}</h3><p className="loc-serviceDesc">{svc.desc}</p></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Why Businesses Choose Us</span></h2>
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