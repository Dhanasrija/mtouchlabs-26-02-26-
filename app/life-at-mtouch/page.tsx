import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Life at mTouch – Culture, People & Work Environment | mTouch Labs",
  description:
    "Explore Life at mTouch — our vibrant culture, employee experiences, and teamwork that make mTouch Labs a great place to grow and innovate.",
  keywords:
    "life at mTouch, company culture, employee experience, work environment, team culture, mTouch Labs life, career culture, workplace innovation",
  alternates: { canonical: "https://www.mtouchlabs.com/life-at-mtouch" },
  openGraph: {
    title: "Life at mTouch – Culture, People & Work Environment",
    description: "Explore our vibrant culture, employee experiences, and teamwork that make mTouch Labs a great place to grow.",
    url: "https://www.mtouchlabs.com/life-at-mtouch",
    siteName: "mTouch Labs",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Life at mTouch – Culture, People & Work Environment | mTouch Labs",
    description: "Explore Life at mTouch — our vibrant culture, employee experiences, and teamwork that make mTouch Labs a great place to grow and innovate.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

const culturePoints = [
  { icon: "🤝", title: "Collaboration First", text: "Our culture is built on collaboration, curiosity, and inclusivity — creating an environment where individuals are encouraged to learn, experiment, and grow." },
  { icon: "💡", title: "Innovation Mindset", text: "We encourage team members to think differently, challenge conventions, and take ownership of ideas. Creativity and problem-solving are deeply embedded in how we work." },
  { icon: "🌍", title: "Diverse Perspectives", text: "We foster a workplace where diverse perspectives are valued, open communication is encouraged, and achievements are celebrated across the organization." },
  { icon: "📚", title: "Continuous Learning", text: "Through mentorship, skill-building initiatives, and exposure to emerging technologies, our teams stay future-ready while growing both personally and professionally." },
];

const benefits = [
  { icon: "🚀", title: "Global Projects", text: "Work on projects for clients across 12+ countries using emerging technologies like AI, cloud, and mobile." },
  { icon: "📈", title: "Professional Growth", text: "Structured career paths, regular skill development workshops, and mentorship from industry leaders." },
  { icon: "🏢", title: "Transparent Leadership", text: "Supportive management, open-door policy, and a work environment built on mutual respect and trust." },
  { icon: "🎉", title: "Fun at Work", text: "Team outings, workshops, fun Fridays, celebrations, and creative sessions that keep energy high." },
  { icon: "⚖️", title: "Work-Life Balance", text: "Flexible processes, reasonable timelines, and a culture that respects personal time and well-being." },
  { icon: "🛡️", title: "Employee Benefits", text: "Competitive compensation, health coverage, performance bonuses, and continuous learning opportunities." },
];

const numbers = [
  { num: "100+", label: "Team Members" },
  { num: "14+", label: "Years Strong" },
  { num: "12+", label: "Countries Served" },
  { num: "4.9★", label: "Employee Rating" },
];

const faqs = [
  { q: "What is the work culture like at mTouch Labs?", a: "mTouch Labs fosters a collaborative, creative, and inclusive work environment where innovation, teamwork, and continuous learning are deeply encouraged." },
  { q: "Why should I consider a career at mTouch Labs?", a: "We offer opportunities to work on global projects, hands-on exposure to emerging technologies, a growth-driven culture, supportive leadership, and a transparent work ecosystem." },
  { q: "What kind of projects do employees work on?", a: "Our teams work on diverse projects including mobile apps, web platforms, enterprise systems, AI-driven solutions, and digital transformation initiatives for clients across India, USA, UK, and UAE." },
  { q: "Does mTouch Labs support learning and upskilling?", a: "Absolutely. We promote continuous learning through workshops, training sessions, mentorship, and real-time exposure to cutting-edge technologies." },
  { q: "Is the work environment flexible?", a: "Yes. We value work-life balance with structured work processes, open communication, and a supportive environment that helps employees thrive." },
  { q: "Are there team-building or fun activities at mTouch Labs?", a: "Definitely! We regularly host team outings, workshops, fun Fridays, celebrations, and creative sessions to keep the energy high and strengthen team bonding." },
];

export default function LifeAtMtouch() {
  return (
    <>
      <section className="lam-hero"><div className="lam-hero__inner">
        <Breadcrumb pagePath="/life-at-mtouch" />
        <h1 className="lam-hero__title">Life at <span className="lam-hero__accent">mTouch Labs</span></h1>
        <p className="lam-hero__subtitle">A culture where creativity thrives, talent grows, and people build meaningful careers</p>
        <div className="lam-hero__stats">
          {numbers.map((n, i) => (
            <div className="lam-hero__stat" key={i}>
              <span className="lam-hero__stat-num">{n.num}</span>
              <span className="lam-hero__stat-label">{n.label}</span>
            </div>
          ))}
        </div>
      </div></section>

      <section className="lam-intro"><div className="lam-container"><div className="lam-intro__grid">
        <div className="lam-intro__content">
          <h2 className="lam-intro__heading">Our Culture. Our People. <span className="lam-accent">Our Pride.</span></h2>
          <p className="lam-intro__text">At <strong>mTouch Labs</strong>, we believe that great ideas are born from great minds. We don&apos;t just hire talent; we invest in people and empower them to reach their full potential.</p>
          <p className="lam-intro__text">Our people are our strongest asset. From <a href="/web-development-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>web development</a> to <a href="/mobile-app-development-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>mobile app development</a>, our teams deliver excellence by promoting work-life balance, mutual respect, and continuous feedback.</p>
        </div>
        <div className="lam-intro__image-wrap">
          <img src="/images/about/life_at_mtouch1.png" alt="mTouch Labs team" className="lam-intro__image" />
        </div>
      </div></div></section>

      <section className="lam-culture"><div className="lam-container">
        <h2 className="lam-section-title">What Makes Us <span className="lam-accent">Different</span></h2>
        <p className="lam-section-subtitle">The values and practices that define life at mTouch Labs</p>
        <div className="lam-culture__grid">
          {culturePoints.map((c, i) => (
            <div className="lam-culture-card" key={i}>
              <span className="lam-culture-card__icon">{c.icon}</span>
              <h3 className="lam-culture-card__title">{c.title}</h3>
              <p className="lam-culture-card__text">{c.text}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="lam-why"><div className="lam-container">
        <h2 className="lam-section-title">Why Work <span className="lam-accent">With Us</span></h2>
        <p className="lam-section-subtitle">More than a workplace — a launchpad for your career in <a href="/custom-software-development-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>custom software development</a> and innovation</p>
        <div className="lam-why__grid">
          {benefits.map((b, i) => (
            <div className="lam-why-card" key={i}>
              <span className="lam-why-card__icon">{b.icon}</span>
              <h4 className="lam-why-card__title">{b.title}</h4>
              <p className="lam-why-card__text">{b.text}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="lam-team"><div className="lam-container"><div className="lam-team__grid">
        <div className="lam-team__content">
          <h2 className="lam-team__heading">Work is More Than <span className="lam-accent">Code</span></h2>
          <p className="lam-team__text">It&apos;s collaboration, creativity, and community. At mTouch Labs, every voice matters, every idea counts, and every person contributes to something bigger.</p>
          <p className="lam-team__text">We celebrate wins together, learn from challenges together, and grow together as one team building <a href="/digital-marketing-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>digital solutions</a> that impact millions.</p>
          <a href="/careers" className="lam-team__btn">View Open Positions →</a>
        </div>
        <div className="lam-team__image-wrap">
          <img src="/images/about/life_at_mtouch2.png" alt="Professional at mTouch Labs" className="lam-team__image" />
        </div>
      </div></div></section>

      <section className="lam-faq"><div className="lam-container lam-container--narrow">
        <h2 className="lam-section-title">Frequently Asked <span className="lam-accent">Questions</span></h2>
        <div className="lam-faq__list">
          {faqs.map((f, i) => (
            <details className="lam-faq__item" key={i}>
              <summary className="lam-faq__question"><span>{f.q}</span><span className="lam-faq__chevron"></span></summary>
              <div className="lam-faq__answer"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div></section>

      <section className="lam-cta"><div className="lam-container"><div className="lam-cta__inner">
        <h2 className="lam-cta__heading">Ready to Start Your <span className="lam-accent">Journey</span>?</h2>
        <p className="lam-cta__text">Explore career opportunities and become part of a team that&apos;s shaping the future of technology.</p>
        <div className="lam-cta__buttons">
          <a href="/careers" className="lam-cta__btn lam-cta__btn--primary">Explore Careers</a>
          <a className="lam-cta__btn lam-cta__btn--outline js-open-modal">Get in Touch</a>
        </div>
      </div></div></section>
    </>
  );
}