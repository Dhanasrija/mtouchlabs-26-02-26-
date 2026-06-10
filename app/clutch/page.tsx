import type { Metadata } from "next";
import Script from "next/script";
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
  title: "Review Us on Clutch",
  description: "Your feedback matters! Leave mTouch Labs a review on Clutch. 14+ years of delivering enterprise software, mobile apps, and AI solutions across 20+ countries.",
  keywords: ["mTouch Labs Clutch review", "mTouch Labs rating", "software development company review", "mTouch Labs feedback", "Clutch review mTouch Labs"],
  alternates: { canonical: "https://www.mtouchlabs.com/clutch" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Review Us on Clutch | mTouch Labs",
    description: "Your feedback matters! Leave mTouch Labs a review on Clutch. 14+ years of delivering enterprise software, mobile apps, and AI solutions.",
    url: "https://www.mtouchlabs.com/clutch",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs - Review Us on Clutch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Review Us on Clutch | mTouch Labs",
    description: "Your feedback matters! Leave mTouch Labs a review on Clutch.",
    images: ["/images/Light.png"],
  },
};

const clutchSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Review mTouch Labs on Clutch",
  description: "Leave a review for mTouch Labs on Clutch. Your feedback helps us grow and serve you better.",
  url: "https://www.mtouchlabs.com/clutch",
  mainEntity: {
    "@type": "Organization",
    name: "mTouch Labs",
    url: "https://www.mtouchlabs.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "50",
    },
  },
};

const stats = [
  { number: "1500+", label: "Projects Delivered" },
  { number: "14+", label: "Years of Excellence" },
  { number: "98%", label: "Client Retention Rate" },
  { number: "4.9", label: "Average Rating" },
];

const reasons = [
  { icon: "⭐", title: "Help Others Decide", desc: "Your honest experience helps other businesses make informed decisions about their technology partner." },
  { icon: "📈", title: "Drive Our Improvement", desc: "Your feedback — positive or constructive — directly shapes how we improve our services and delivery." },
  { icon: "🤝", title: "Strengthen Our Partnership", desc: "Reviews build transparency and trust, reinforcing the relationship we've built together." },
  { icon: "🏆", title: "Celebrate Great Work", desc: "If we delivered something you're proud of, let the world know. Your team's success is our success." },
];

const testimonials = [
  { text: "mTouch Labs transformed our digital infrastructure with exceptional attention to detail and timely delivery.", name: "Enterprise Client", project: "Cloud Migration" },
  { text: "From concept to deployment in 8 weeks. The team's technical expertise and communication were outstanding.", name: "Startup Founder", project: "Mobile App Development" },
  { text: "Professional, reliable, and incredibly talented. They've been our technology partner for over 3 years.", name: "CTO, FinTech Company", project: "SaaS Platform" },
];

export default function ClutchPage() {
  return (
    <>
      <Script src="https://widget.clutch.co/static/js/widget.js" strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clutchSchema) }} />
      <link href="/css/clutch.css" rel="stylesheet" />

      {/* ════════ HERO ════════ */}
      <ServiceHero
        badge="Clutch Reviews"
        titleLead="Love What We Do?"
        titleAccent="Rate Us!"
        description={<>Your honest feedback helps us improve and helps other businesses find the right technology partner.</>}
        primaryHref="/contact-us"
        primaryLabel="Get in Touch"
        secondaryHref="https://review.clutch.co/review/?provider_id=1209509"
        secondaryLabel="Review Us on Clutch"
        secondaryAsPrimary
      />

      {/* ════════ STATS ════════ */}
      <section className="clutch-stats">
        <div className="clutch-stats__inner">
          {stats.map((s, i) => (
            <div className="clutch-stats__item" key={i}>
              <div className="clutch-stats__number">{s.number}</div>
              <div className="clutch-stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ WHY REVIEW + CLUTCH WIDGET ════════ */}
      <section className="clutch-why">
        <div className="clutch-why__inner">
          <h2 className="clutch-why__heading">Why Your <span>Review Matters</span></h2>
          <p className="clutch-why__sub">A few minutes of your time makes a big difference for our team and for future clients.</p>
          <div className="clutch-why__grid">
            {reasons.map((r, i) => (
              <div className="clutch-why__card" key={i}>
                <span className="clutch-why__card-icon">{r.icon}</span>
                <h3 className="clutch-why__card-title">{r.title}</h3>
                <p className="clutch-why__card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
          {/* Clutch Review Widget */}
          <div className="clutch-review-cta">
            <h3 className="clutch-review-cta__title">Ready to Share Your <span>Experience</span>?</h3>
            <p className="clutch-review-cta__sub">Click the button below to leave your review on Clutch — it only takes a few minutes.</p>
            <div className="clutch-review-cta__widget-wrap">
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="7"
                data-height="65"
                data-nofollow="true"
                data-expandifr="true"
                data-clutchcompany-id="1209509"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="clutch-testimonials">
        <div className="clutch-testimonials__inner">
          <h2 className="clutch-testimonials__heading">What Our Clients <span>Say</span></h2>
          <p className="clutch-testimonials__sub">Real feedback from real partnerships</p>
          <div className="clutch-testimonials__grid">
            {testimonials.map((t, i) => (
              <div className="clutch-testimonials__card" key={i}>
                <span className="clutch-testimonials__quote">&ldquo;</span>
                <div className="clutch-testimonials__stars">★★★★★</div>
                <p className="clutch-testimonials__text">&ldquo;{t.text}&rdquo;</p>
                <div className="clutch-testimonials__name">{t.name}</div>
                <div className="clutch-testimonials__project">{t.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="clutch-cta">
        <div className="clutch-cta__inner">
          <h2 className="clutch-cta__title">Ready to Start Your <span>Next Project</span>?</h2>
          <p className="clutch-cta__text">Whether you&apos;ve worked with us before or you&apos;re just getting started — we&apos;d love to hear from you.</p>
          <a href="https://review.clutch.co/review/?provider_id=1209509" target="_blank" rel="noopener noreferrer" className="clutch-cta__btn">Review Us on Clutch →</a>
        </div>
      </section>
    </>
  );
}