import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NASSCOM Membership – Industry Recognition | mTouch Labs",
  description:
    "mTouch Labs' NASSCOM membership reinforces our credibility, industry recognition, and commitment to innovation.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/nasscom-membership",
  },
  openGraph: {
    title: "NASSCOM Membership – Industry Recognition | mTouch Labs",
    description:
      "mTouch Labs' NASSCOM membership reinforces our credibility, industry recognition, and commitment to innovation.",
    url: "https://www.mtouchlabs.com/nasscom-membership",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "NASSCOM Membership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NASSCOM Membership – Industry Recognition | mTouch Labs",
    description:
      "mTouch Labs' NASSCOM membership reinforces our credibility, industry recognition, and commitment to innovation.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

const strengthCards = [
  {
    img: "/images/about/icon_1.png",
    title: "Credibility and Global Recognition",
    desc: "Instills confidence in businesses seeking dependable software development and digital transformation partners.",
  },
  {
    img: "/images/about/icon_2.png",
    title: "Commitment to Industry Standards",
    desc: "Ensures our development processes, data security, and quality benchmarks are consistent with globally recognised best practices.",
  },
  {
    img: "/images/about/icon_3.png",
    title: "Innovation in Emerging Technology",
    desc: "Provides access to insights and frameworks that help us advance our capabilities in AI, cloud, automation, and SaaS solutions.",
  },
  {
    img: "/images/about/icon_4.png",
    title: "Collaboration and Growth Opportunities",
    desc: "Facilitates collaboration, networking, and knowledge exchange with premier technology firms and specialists.",
  },
  {
    img: "/images/about/icon_5.png",
    title: "Contributing to India's IT Leadership",
    desc: "Enables us to shape the future of IT developments and policy environments.",
  },
];

const clientBenefits = [
  "Trusted and verified technology expertise",
  "Transparent and ethical business practices",
  "Enhanced data security & compliance",
  "Commitment to continuous improvement",
  "Capability to deliver on global standards",
];

const drivingInnovation = [
  "Custom Software Development",
  "Mobile App Development",
  "Salesforce CRM Integration & Development",
  "AI-driven Automation & Cloud Solutions",
  "Enterprise SaaS Platforms",
  "eCommerce & Web Product Engineering",
];

const empowerCards = [
  { img: "/images/about/nascom_1.png", text: "Stay ahead of emerging technologies and market trends." },
  { img: "/images/about/nascom_2.png", text: "Build sustainable and inclusive digital ecosystems." },
  { img: "/images/about/nascom_3.png", text: "Contribute to India's growing digital economy." },
];

const faqs = [
  {
    q: "What is NASSCOM and why is it significant?",
    a: "NASSCOM is India's premier IT industry body, representing leading technology and business process organizations. Being part of NASSCOM reflects credibility, trust, and high-quality standards.",
  },
  {
    q: "Is mTouch Labs a NASSCOM member?",
    a: "Yes. mTouch Labs is an official NASSCOM member, reinforcing our commitment to excellence, ethics, innovation, and global technology standards.",
  },
  {
    q: "What does NASSCOM membership mean for clients?",
    a: "Clients gain the assurance that mTouch Labs follows certified best practices, strong governance, ethical operations, and industry-approved quality frameworks for software development.",
  },
  {
    q: "How does NASSCOM membership benefit mTouch Labs?",
    a: "As a member, we gain access to industry insights, emerging tech trends, collaborative initiatives, and networking opportunities that help us stay at the forefront of innovation.",
  },
  {
    q: "What values does NASSCOM membership align with at mTouch Labs?",
    a: "It aligns with our principles of transparency, ethical business conduct, quality-driven development, and continuous learning.",
  },
];

export default function NasscomPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link rel="stylesheet" href="/css/nasscom-page.css" />

      {/* Hero */}
      <section className="nsc-hero">
        <div className="nsc-hero__bg"><div className="nsc-hero__gradient"></div></div>
        <div className="nsc-hero__content container">
          <nav className="nsc-crumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span className="nsc-crumb__sep">/</span></li>
              <li className="nsc-crumb__current">NASSCOM Membership</li>
            </ol>
          </nav>
          <span className="nsc-hero__badge">Industry Recognition</span>
          <h1 className="nsc-hero__title">NASSCOM <span className="nsc-accent">Membership</span></h1>
          <p className="nsc-hero__sub">
            Proud NASSCOM member driving innovation and contributing to India&apos;s evolving tech ecosystem.
          </p>
          <div className="nsc-hero__btns">
            <Link href="/contact-us" className="nsc-btn nsc-btn--primary">Get In Touch <i className="fas fa-arrow-right"></i></Link>
            <Link href="/leadership-team" className="nsc-btn nsc-btn--ghost">Our Team</Link>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="nsc-section">
        <div className="container">
          <div className="nsc-split">
            <div className="nsc-split__text">
              <h2>Our Commitment to <span className="nsc-accent">Industry Excellence</span></h2>
              <p>
                mTouch Labs is an official member of NASSCOM — the premier trade body representing India&apos;s IT and business process management industry. This membership reflects our commitment to maintaining global quality standards, ethical business practices, and continuous innovation.
              </p>
              <p>
                As a part of the NASSCOM ecosystem, we gain access to collaborative initiatives that shape the future of technology in India and beyond.
              </p>
            </div>
            <div className="nsc-split__img">
              <img src="/images/about/nasscom.png" alt="NASSCOM Membership" />
            </div>
          </div>
        </div>
      </section>

      {/* Strength Cards */}
      <section className="nsc-section nsc-section--alt">
        <div className="container">
          <h2 className="nsc-section__title">Our NASSCOM Membership <span className="nsc-accent">Strengthens</span></h2>
          <div className="nsc-grid nsc-grid--3">
            {strengthCards.map((c, i) => (
              <div key={i} className="nsc-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="nsc-card__icon"><img src={c.img} alt={c.title} /></div>
                <h3 className="nsc-card__title">{c.title}</h3>
                <p className="nsc-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About mTouch Labs */}
      <section className="nsc-section">
        <div className="container">
          <div className="nsc-split nsc-split--reverse">
            <div className="nsc-split__text">
              <h2>About <span className="nsc-accent">mTouch Labs</span></h2>
              <p>
                At mTouch Labs, innovation is at the heart of everything we do. We are a leading <Link href="/mobile-app-development-company">mobile app development company</Link> in India offering end-to-end digital transformation services to help businesses succeed in a technology-driven world.
              </p>
            </div>
            <div className="nsc-split__img">
              <img src="/images/about/aboutMtouch.png" alt="About mTouch Labs" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="nsc-section nsc-section--alt">
        <div className="container">
          <div className="nsc-split">
            <div className="nsc-split__text">
              <h2>What It Means for <span className="nsc-accent">Our Clients</span></h2>
              <p>Partnering with a NASSCOM-affiliated software company means:</p>
              <ul className="nsc-checklist">
                {clientBenefits.map((b, i) => (
                  <li key={i}><i className="fas fa-check"></i><span>{b}</span></li>
                ))}
              </ul>
              <p className="nsc-note">Clients choosing mTouch Labs gain a technology partner who is recognized, accountable, and driven by excellence.</p>
            </div>
            <div className="nsc-split__img">
              <img src="/images/whatitMeans.png" alt="What it means for our clients" />
            </div>
          </div>
        </div>
      </section>

      {/* Driving Innovation */}
      <section className="nsc-section">
        <div className="container">
          <div className="nsc-split nsc-split--reverse">
            <div className="nsc-split__text">
              <h2>Driving Digital Innovation with <span className="nsc-accent">Industry Leadership</span></h2>
              <p>As a NASSCOM Member, we are inspired to push boundaries in:</p>
              <ul className="nsc-checklist">
                {drivingInnovation.map((d, i) => (
                  <li key={i}><i className="fas fa-check"></i><span>{d}</span></li>
                ))}
              </ul>
            </div>
            <div className="nsc-split__img">
              <img src="/images/drivingDigital.png" alt="Driving Digital Innovation" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="nsc-banner">
        <div className="container">
          <div className="nsc-banner__inner">
            <p>We are not just building apps — we are helping enterprises scale smarter, innovate faster, and stay ahead in a digitally competitive world.</p>
            <p>Our NASSCOM membership symbolizes our ambition and our responsibility to empower businesses, strengthen India&apos;s tech leadership, and contribute to a sustainable digital future.</p>
          </div>
        </div>
      </section>

      {/* Empower Cards */}
      <section className="nsc-section">
        <div className="container">
          <h2 className="nsc-section__title">Being a NASSCOM member <span className="nsc-accent">empowers us to</span></h2>
          <div className="nsc-grid nsc-grid--3">
            {empowerCards.map((c, i) => (
              <div key={i} className="nsc-card nsc-card--center" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="nsc-card__icon"><img src={c.img} alt={c.text} /></div>
                <p className="nsc-card__desc">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="nsc-closing">At mTouch Labs, we take pride in being recognized among India&apos;s most credible IT organizations, aligned with the nation&apos;s digital-first mission.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="nsc-section nsc-section--alt">
        <div className="container">
          <h2 className="nsc-section__title">Frequently Asked <span className="nsc-accent">Questions</span></h2>
          <div className="nsc-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="nsc-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nsc-cta">
        <div className="container nsc-cta__inner">
          <span className="nsc-tag">NASSCOM Member</span>
          <h2>Proud NASSCOM Member &amp; Global Technology Partner</h2>
          <p>Partner with a recognized and trusted technology company.</p>
          <div className="nsc-cta__btns">
            <Link href="/contact-us" className="nsc-btn nsc-btn--white">Contact Us <i className="fas fa-arrow-right"></i></Link>
            <Link href="/awards-recognition" className="nsc-btn nsc-btn--ghost-light">Awards &amp; Recognition</Link>
          </div>
        </div>
      </section>
    </>
  );
}