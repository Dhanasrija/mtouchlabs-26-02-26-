"use client";

import { useState, ReactNode } from "react";

/* ───────────────────────── Types ───────────────────────── */

export type FAQ = { q: string; a: string };

export type ProductPageData = {
  /* Breadcrumb label */
  crumbLabel: string;

  /* Hero */
  hero: {
    h1Top: string;            // e.g. "Milk Delivery App"
    h1Accent: string;         // e.g. "Development Company"
    h1Tail?: string;          // e.g. "in Hyderabad"
    subtitle: string;
    demoHref: string;         // demo video / CTA link
    leftPhoneImg?: string;    // defaults to phoneframe1
    rightPhoneImg?: string;   // defaults to phoneframe2
  };

  /* Features banner (single wide image) */
  featuresBannerImg?: string;
  featuresBannerAlt?: string;

  /* Intro two-col */
  intro: {
    img: string;
    label: string;
    h3: string;
    body: ReactNode[];        // paragraphs
    ctaText?: string;         // defaults to "Request a Quote →"
    ctaHref?: string;         // defaults to "/contact-us"
  };

  /* Section divider */
  dividerTitle: string;
  dividerImg?: string;        // small side image, defaults to food11

  /* End-to-end two-col (reversed image) */
  endToEnd: {
    img: string;
    label: string;
    h3: string;
    body: ReactNode[];
  };

  /* "What We Build" — service cards (up to 8) */
  cardsSection: {
    label: string;
    h2: string;
    intro: string;
    cards: { icon: string; title: string; desc: string }[];
  };

  /* App screens marquee (5 images by convention) */
  screens: {
    title?: string;           // defaults to "App Screens"
    subtitle?: string;        // defaults to "App Screen Design and User Interface"
    images: string[];         // 5 images recommended
    alt: string;
  };

  /* Core features tabs (one tab per panel) */
  tabs: {
    label: string;
    h2: string;
    intro: string;
    panels: { id: string; title: string; items: string[] }[]; // id must be unique per page
  };

  /* AI section */
  ai: {
    label: string;
    h2: string;
    desc: ReactNode;
    cards: { icon: string; title: string; desc: string }[];
  };

  /* Why choose */
  why: {
    label: string;
    h2: string;
    intro: string;
    cards: { icon: string; title: string; desc: ReactNode }[];
    footer?: string;
  };

  /* Cost tiers */
  cost: {
    label?: string;
    h2: string;
    intro: string;
    tiers: { name: string; desc: string; highlight?: boolean }[];
    note?: string;
    ctaText?: string;
    ctaHref?: string;
  };

  /* Process steps */
  process: {
    label?: string;
    h2: string;
    intro: string;
    steps: { n: string; title: string; desc: string }[];
  };

  /* Industries pills */
  industries: {
    label?: string;
    h2: string;
    items: { icon: string; name: string }[];
  };

  /* FAQs (also used for JSON-LD) */
  faqs: FAQ[];

  /* Final CTA */
  cta: {
    img: string;
    label?: string;
    h2: string;
    body: string;
    buttonText?: string;
    buttonHref?: string;
  };
};

/* ───────────────────────── Constants ───────────────────────── */

const DEFAULT_TECH = [
  { src: "/images/products/html.png",             w: 65, alt: "HTML5" },
  { src: "/images/products/css.png",              w: 45, alt: "CSS3" },
  { src: "/images/products/js.png",               w: 75, alt: "JavaScript" },
  { src: "/images/products/boot.png",             w: 75, alt: "Bootstrap" },
  { src: "/images/products/php.png",              w: 75, alt: "PHP" },
  { src: "/images/products/laverl.png",           w: 75, alt: "Laravel" },
  { src: "/images/products/flutter.png",          w: 75, alt: "Flutter" },
  { src: "/images/products/firebase.png",         w: 75, alt: "Firebase" },
  { src: "/images/products/MySQL.png",            w: 75, alt: "MySQL" },
  { src: "/images/products/crashlytics.png",      w: 75, alt: "Crashlytics" },
  { src: "/images/products/Google_Analytics.png", w: 75, alt: "Google Analytics" },
  { src: "/images/products/aws.png",              w: 75, alt: "AWS" },
];

const ICON_CLASSES = ["ic1","ic2","ic3","ic4","ic5","ic6","ic7","ic8"];

/* ───────────────────────── Component ───────────────────────── */

export default function ProductPageTemplate({ data }: { data: ProductPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>(data.tabs.panels[0]?.id ?? "");
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const leftPhone  = data.hero.leftPhoneImg  ?? "/images/products/phoneframe1.png";
  const rightPhone = data.hero.rightPhoneImg ?? "/images/products/phoneframe2.png";
  const dividerImg = data.dividerImg ?? "/images/products/food11.png";

  return (
    <>
      {/* ── JSON-LD FAQ Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── Inline Styles (shared fd-* namespace) ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        :root {
          --fp:     'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          --blue:   #3E8CFB;
          --navy:   #011D80;
          --indigo: #0C1C32;
          --black:  #0D1117;
          --gold:   #FAC759;
          --grey:   #777777;
          --white:  #FFFFFF;
          --light:  #F4F7FF;
        }

        .fd-root * { box-sizing: border-box; }
        .fd-root { font-family: var(--fp); color: #1a1a2e; }

        .fd-breadcrumb {
          padding: 14px 48px; font-family: var(--fp); font-size: 13px;
          font-weight: 500; background: #f8f9fd; border-bottom: 1px solid #e5e8f5; color: #444;
        }
        .fd-breadcrumb a { color: #444; text-decoration: none; transition: color .2s; }
        .fd-breadcrumb a:hover { color: var(--blue); }
        .fd-breadcrumb a.active { color: var(--blue); font-weight: 600; }
        .fd-sep { margin: 0 8px; color: #bbb; }

        .fd-hero {
          padding: 72px 48px 64px;
          background: linear-gradient(160deg, #eef4ff 0%, #f8f9fd 60%, #fff8ec 100%);
          position: relative; overflow: hidden; display: flex;
          align-items: center; justify-content: center; gap: 48px;
        }
        .fd-hero::before {
          content: ''; position: absolute; top: -120px; right: -100px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(62,140,251,.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .fd-hero::after {
          content: ''; position: absolute; bottom: -80px; left: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(250,199,89,.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .fd-hero-phone { flex: 0 0 auto; position: relative; z-index: 1; }
        .fd-hero-phone img {
          width: 210px; height: auto; border-radius: 28px;
          filter: drop-shadow(0 20px 52px rgba(62,140,251,.22));
          animation: fd-float 3.5s ease-in-out infinite;
        }
        .fd-hero-phone.right img { animation-delay: 1.75s; }

        @keyframes fd-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .fd-hero-center { flex: 1; text-align: center; max-width: 580px; position: relative; z-index: 1; }
        .fd-h1 {
          font-family: var(--fp); font-size: clamp(30px, 4.5vw, 52px); line-height: 1.18;
          font-weight: 800; color: var(--indigo); margin-bottom: 18px; letter-spacing: -0.5px;
        }
        .fd-h1 .accent { color: var(--blue); }
        .fd-hero-sub {
          font-family: var(--fp); font-size: 16px; line-height: 1.75; color: #5a6480;
          max-width: 480px; margin: 0 auto 32px; font-weight: 400;
        }

        .fd-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--fp); font-size: 14px; font-weight: 600; letter-spacing: 0.3px;
          padding: 14px 30px; border-radius: 10px;
          border: 2px solid var(--blue); background: var(--blue);
          color: #ffffff !important; cursor: pointer; text-decoration: none;
          transition: all 0.22s ease; line-height: 1;
        }
        .fd-btn:hover {
          background: var(--navy); border-color: var(--navy); color: #ffffff !important;
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(62,140,251,.38);
        }
        .fd-btn-outline { background: transparent; color: var(--blue) !important; border-color: var(--blue); }
        .fd-btn-outline:hover {
          background: var(--blue); color: #ffffff !important; border-color: var(--blue);
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(62,140,251,.25);
        }
        .fd-btn-gold { background: var(--gold); border-color: var(--gold); color: var(--navy) !important; }
        .fd-btn-gold:hover {
          background: #e6b340; border-color: #e6b340; color: var(--navy) !important;
          box-shadow: 0 8px 24px rgba(250,199,89,.4); transform: translateY(-2px);
        }

        .fd-label {
          display: inline-block; font-family: var(--fp); font-size: 11px; font-weight: 700;
          letter-spacing: 1.8px; text-transform: uppercase; color: var(--blue);
          background: rgba(62,140,251,.1); padding: 6px 14px; border-radius: 40px; margin-bottom: 12px;
          white-space: normal; line-height: 1.4; max-width: 100%; word-break: break-word;
        }
        @media (max-width:768px){
          .fd-label { font-size: 10px; letter-spacing: 1.2px; padding: 6px 12px; }
        }
        @media (max-width:480px){
          .fd-label { font-size: 9.5px; letter-spacing: 0.8px; padding: 5px 11px; }
        }

        .fd-h2 {
          font-family: var(--fp); font-size: clamp(24px, 3.2vw, 40px); line-height: 1.22;
          font-weight: 700; color: var(--indigo); margin-bottom: 14px; letter-spacing: -0.3px;
        }
        .fd-h3 {
          font-family: var(--fp); font-size: clamp(20px, 2.8vw, 32px); line-height: 1.28;
          font-weight: 700; color: var(--indigo); margin-bottom: 14px;
        }
        .fd-body { font-family: var(--fp); font-size: 16px; line-height: 1.75; color: #5a6480; font-weight: 400; }

        .fd-features-banner { text-align: center; padding: 52px 24px 0; background: #fff; }
        .fd-features-banner img {
          width: 100%; max-width: 960px; height: 420px;
          object-fit: contain; object-position: center;
          border-radius: 16px; box-shadow: 0 4px 32px rgba(0,0,0,.08);
          background: #f4f6fb;
        }
        @media (max-width: 1024px) { .fd-features-banner img { height: 360px; } }
        @media (max-width: 768px)  { .fd-features-banner img { height: 280px; } }
        @media (max-width: 480px)  { .fd-features-banner img { height: 220px; border-radius: 12px; } }

        .fd-twocol { display: flex; align-items: center; gap: 60px; padding: 72px 80px; max-width: 1240px; margin: 0 auto; }
        .fd-twocol.reverse { flex-direction: row-reverse; }
        .fd-twocol-img { flex: 0 0 auto; }
        .fd-phone-img { width: 230px; height: auto; border-radius: 28px; filter: drop-shadow(0 16px 48px rgba(62,140,251,.18)); }
        .fd-twocol-text { flex: 1; }
        .fd-twocol-text p { margin-bottom: 14px; }
        .fd-twocol-text a { color: var(--blue); text-decoration: underline; text-underline-offset: 2px; }

        .fd-section-divider {
          display: flex; align-items: center; justify-content: center; gap: 24px;
          padding: 16px 48px 24px; background: #fff;
        }
        .fd-section-divider h2 {
          font-family: var(--fp); font-size: clamp(20px, 2.8vw, 34px);
          font-weight: 700; color: var(--indigo); text-align: center;
        }
        .fd-section-divider img { width: 200px; height: auto; }

        .fd-cards-section { background: var(--light); padding: 64px 24px; }
        .fd-cards-inner { max-width: 1200px; margin: 0 auto; text-align: center; }
        .fd-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px; }
        .fd-card {
          background: #fff; border-radius: 18px; padding: 28px 20px 24px; text-align: center;
          border: 1px solid #eaeeff; transition: transform .22s, box-shadow .22s, border-color .22s;
        }
        .fd-card:hover {
          transform: translateY(-6px); box-shadow: 0 12px 36px rgba(62,140,251,.13);
          border-color: rgba(62,140,251,.25);
        }
        .fd-card-icon {
          width: 64px; height: 64px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; margin: 0 auto 16px;
        }
        .ic1{background:#e8f0ff}.ic2{background:#e8f9f0}.ic3{background:#fff4e6}
        .ic4{background:#fef9e7}.ic5{background:#f3e8ff}.ic6{background:#e8fcff}
        .ic7{background:#fde8ee}.ic8{background:#e8fff3}
        .fd-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-card p  { font-family:var(--fp); font-size:13px; line-height:1.65; color:var(--grey); }

        .fd-screens { background: var(--light); padding: 72px 0 64px; text-align: center; overflow: hidden; }
        .fd-screens h3 { font-family:var(--fp); font-size:clamp(22px,3vw,32px); font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-screens > p { font-family:var(--fp); font-size:15px; color:var(--grey); margin-bottom:48px; }
        .fd-screens-track-wrap { position: relative; overflow: hidden; padding: 12px 0 24px; }
        .fd-screens-track-wrap::before, .fd-screens-track-wrap::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none;
        }
        .fd-screens-track-wrap::before { left: 0;  background: linear-gradient(to right,  var(--light), transparent); }
        .fd-screens-track-wrap::after  { right: 0; background: linear-gradient(to left,   var(--light), transparent); }
        .fd-screens-track { display: flex; gap: 24px; width: max-content; animation: fd-scroll 22s linear infinite; }
        .fd-screens-track:hover { animation-play-state: paused; }
        @keyframes fd-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .fd-screen-wrap {
          border: 2px solid rgba(62,140,251,.18); border-radius: 22px; overflow: hidden;
          box-shadow: 0 6px 24px rgba(62,140,251,.1);
          transition: transform .25s, box-shadow .25s; background: #fff; flex-shrink: 0;
        }
        .fd-screen-wrap:hover { transform: scale(1.05) translateY(-6px); box-shadow: 0 14px 40px rgba(62,140,251,.2); }
        .fd-screen-wrap img { width: 190px; height: auto; display: block; }

        .fd-tabs-section { padding: 72px 24px; background: #fff; }
        .fd-tabs-inner { max-width: 860px; margin: 0 auto; text-align: center; }
        .fd-tabs-inner .fd-body { max-width: 640px; margin: 0 auto 36px; }
        .fd-tab-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
        .fd-tab-btn {
          font-family:var(--fp); font-size:13px; font-weight:600;
          padding:10px 22px; border-radius:40px; cursor:pointer;
          border:2px solid var(--blue); color:var(--blue); background:transparent;
          transition:all .2s; user-select:none;
        }
        .fd-tab-btn.active { background: var(--blue); color:#fff; box-shadow:0 4px 14px rgba(62,140,251,.3); }
        .fd-tab-panel {
          background:var(--light); border-radius:20px; padding:36px 40px;
          text-align:left; border:1px solid #dce4f8;
        }
        .fd-tab-panel ul { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:0; margin:0; }
        .fd-tab-panel ul li {
          font-family:var(--fp); font-size:15px; line-height:1.6;
          color:var(--indigo); font-weight:500; padding-left:26px; position:relative;
        }
        .fd-tab-panel ul li::before { content:'✓'; position:absolute; left:0; color:var(--blue); font-weight:800; font-size:14px; }

        .fd-ai { background:linear-gradient(140deg,#020e3a 0%,var(--indigo) 50%,#040d1c 100%); padding:72px 24px; text-align:center; }
        .fd-ai-inner { max-width:1100px; margin:0 auto; }
        .fd-ai .fd-h2 { color:var(--white); }
        .fd-ai .fd-label { background:rgba(250,199,89,.15); color:var(--gold); }
        .fd-ai-desc { font-family:var(--fp); font-size:16px; line-height:1.75; color:rgba(255,255,255,.7); max-width:680px; margin:0 auto 40px; }
        .fd-ai-desc a { color:var(--gold); text-decoration:underline; }
        .fd-ai-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; text-align:left; }
        .fd-ai-card {
          background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1);
          border-radius:18px; padding:28px 24px; transition:background .22s,transform .22s;
        }
        .fd-ai-card:hover { background:rgba(255,255,255,.11); transform:translateY(-4px); }
        .fd-ai-icon { font-size:34px; display:block; margin-bottom:14px; }
        .fd-ai-card h6 { font-family:var(--fp); font-size:16px; font-weight:700; color:var(--white); margin-bottom:8px; }
        .fd-ai-card p  { font-family:var(--fp); font-size:14px; line-height:1.65; color:rgba(255,255,255,.6); }

        .fd-why { padding:72px 24px; background:#fff; text-align:center; }
        .fd-why-inner { max-width:1100px; margin:0 auto; }
        .fd-why .fd-body { max-width:660px; margin:0 auto 40px; }
        .fd-why-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .fd-why-card {
          background:var(--light); border-radius:18px; padding:28px 18px 24px;
          border:1px solid #e3eaff; transition:transform .22s,box-shadow .22s;
        }
        .fd-why-card:hover { transform:translateY(-5px); box-shadow:0 10px 32px rgba(62,140,251,.12); }
        .fd-why-icon { font-size:34px; display:block; margin-bottom:12px; }
        .fd-why-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-why-card p  { font-family:var(--fp); font-size:13px; line-height:1.65; color:var(--grey); }
        .fd-why-card a  { color:var(--blue); }
        .fd-why-footer  { font-family:var(--fp); font-size:15px; color:var(--grey); margin-top:32px; }

        .fd-cost { background:var(--light); padding:72px 24px; text-align:center; }
        .fd-cost-inner { max-width:960px; margin:0 auto; }
        .fd-cost .fd-body { margin-bottom:36px; }
        .fd-cost-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-bottom:28px; }
        .fd-cost-card { background:#fff; border-radius:18px; padding:36px 24px; border:1px solid #e0e8ff; transition:transform .22s; }
        .fd-cost-card:hover { transform:translateY(-5px); }
        .fd-cost-card.highlight { background:var(--blue); border-color:var(--blue); box-shadow:0 12px 36px rgba(62,140,251,.3); }
        .fd-cost-card.highlight .fd-cost-tier,
        .fd-cost-card.highlight p { color:rgba(255,255,255,.92) !important; }
        .fd-cost-tier { display:block; font-family:var(--fp); font-size:22px; font-weight:800; color:var(--indigo); margin-bottom:12px; }
        .fd-cost-card p { font-family:var(--fp); font-size:14px; line-height:1.65; color:var(--grey); }
        .fd-cost-note { font-family:var(--fp); font-size:14px; color:var(--grey); margin-bottom:24px; }

        .fd-process { padding:72px 24px; background:#fff; text-align:center; }
        .fd-process-inner { max-width:1100px; margin:0 auto; }
        .fd-process .fd-body { max-width:580px; margin:0 auto 56px; }
        .fd-process-grid { display:flex; justify-content:center; gap:0; position:relative; }
        .fd-process-grid::before {
          content:''; position:absolute; top:36px; left:10%; right:10%;
          height:2px; background:linear-gradient(90deg,var(--blue),var(--gold)); opacity:.25;
        }
        .fd-process-step { flex:1; padding:0 16px; text-align:center; position:relative; }
        .fd-step-num {
          width:72px; height:72px; border-radius:50%; background:var(--blue);
          color:#fff; font-family:var(--fp); font-size:20px; font-weight:800;
          display:flex; align-items:center; justify-content:center;
          margin:0 auto 18px; box-shadow:0 6px 20px rgba(62,140,251,.3);
          position:relative; z-index:1;
        }
        .fd-process-step h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-process-step p  { font-family:var(--fp); font-size:13px; line-height:1.6; color:var(--grey); }

        .fd-tech { background:var(--light); padding:60px 24px; text-align:center; }
        .fd-tech h3 { font-family:var(--fp); font-size:clamp(22px,3vw,32px); font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-tech .fd-body { margin-bottom:36px; }
        .fd-tech-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:16px; max-width:1000px; margin:0 auto; }
        .fd-tech-item {
          background:#fff; border-radius:14px; padding:16px 20px;
          box-shadow:0 2px 10px rgba(0,0,0,.06); display:flex;
          align-items:center; justify-content:center;
          transition:transform .2s,box-shadow .2s; border:1px solid #e8eaf5;
        }
        .fd-tech-item:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,.1); }

        .fd-industries { padding:72px 24px; background:#fff; text-align:center; }
        .fd-industries-grid { display:flex; flex-wrap:wrap; gap:16px; justify-content:center; max-width:960px; margin:36px auto 0; }
        .fd-industry-card {
          background:var(--light); border-radius:14px; padding:20px 28px;
          display:flex; align-items:center; gap:12px; border:1px solid #e0e8ff;
          transition:transform .2s,box-shadow .2s;
        }
        .fd-industry-card:hover { transform:translateY(-3px); box-shadow:0 6px 20px rgba(62,140,251,.12); }
        .fd-industry-icon { font-size:26px; }
        .fd-industry-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); }

        .fd-faq { padding:72px 24px; background:var(--light); text-align:center; }
        .fd-faq-list { max-width:800px; margin:36px auto 0; display:flex; flex-direction:column; gap:10px; text-align:left; }
        .fd-faq-item {
          background:#fff; border-radius:14px; overflow:hidden;
          border:1px solid #e0e8ff; box-shadow:0 2px 8px rgba(0,0,0,.04);
          transition:box-shadow .2s;
        }
        .fd-faq-item.open { box-shadow:0 4px 20px rgba(62,140,251,.12); border-color:rgba(62,140,251,.3); }
        .fd-faq-q {
          font-family:var(--fp); font-size:15px; font-weight:600;
          color:var(--indigo); padding:20px 24px; display:flex;
          align-items:center; justify-content:space-between; gap:12px;
          cursor:pointer; user-select:none; transition:background .15s;
        }
        .fd-faq-item.open .fd-faq-q { background:rgba(62,140,251,.04); color:var(--blue); }
        .fd-faq-q:hover { background:rgba(62,140,251,.04); }
        .fd-faq-icon {
          width:28px; height:28px; border-radius:50%;
          background:rgba(62,140,251,.1); color:var(--blue);
          display:flex; align-items:center; justify-content:center;
          font-size:18px; font-weight:400; flex-shrink:0;
          transition:transform .25s, background .2s; line-height:1;
        }
        .fd-faq-item.open .fd-faq-icon { transform:rotate(45deg); background:var(--blue); color:#fff; }
        .fd-faq-body { max-height:0; overflow:hidden; transition:max-height .35s ease, padding .3s ease; }
        .fd-faq-item.open .fd-faq-body { max-height:500px; }
        .fd-faq-a { font-family:var(--fp); font-size:14px; line-height:1.8; color:var(--grey); padding:0 24px 20px; }

        .fd-cta {
          background:linear-gradient(130deg,var(--navy) 0%,var(--indigo) 60%,#020b24 100%);
          padding:72px 80px; display:flex; align-items:center; gap:64px;
        }
        .fd-cta-img-wrap { flex:0 0 auto; }
        .fd-cta-img {
          width: 360px; height: 360px; object-fit: cover;
          border-radius: 24px; box-shadow: 0 16px 48px rgba(0,0,0,.5);
          background: #0a1744;
        }
        .fd-cta-text { flex:1; }
        .fd-cta-text .fd-label { background:rgba(250,199,89,.15); color:var(--gold); }
        .fd-cta-text h2 {
          font-family:var(--fp); font-size:clamp(24px,3.2vw,40px);
          line-height:1.22; font-weight:700; color:var(--white); margin-bottom:16px;
        }
        .fd-cta-text p {
          font-family:var(--fp); font-size:16px; line-height:1.75;
          color:rgba(255,255,255,.75); margin-bottom:32px; max-width:520px;
        }
        .fd-cta-btns { display:flex; gap:14px; flex-wrap:wrap; }

        @media (max-width:1024px){
          .fd-hero { padding:52px 32px 48px; gap:32px; }
          .fd-hero-phone img { width:170px; }
          .fd-twocol { padding:48px 40px; gap:40px; }
          .fd-cards-grid { grid-template-columns:repeat(2,1fr); }
          .fd-ai-grid { grid-template-columns:repeat(2,1fr); }
          .fd-why-grid { grid-template-columns:repeat(2,1fr); }
          .fd-cta { padding:56px 40px; gap:40px; }
          .fd-cta-img { width:280px; height:280px; }
        }
        @media (max-width:768px){
          .fd-breadcrumb { padding:12px 20px; }
          .fd-hero { flex-direction:column; padding:48px 20px 40px; }
          .fd-hero-phone { display:none; }
          .fd-twocol, .fd-twocol.reverse { flex-direction:column; padding:40px 20px; gap:32px; text-align:center; }
          .fd-phone-img { width:200px; }
          .fd-section-divider img { display:none; }
          .fd-cards-grid { grid-template-columns:repeat(2,1fr); }
          .fd-ai-grid { grid-template-columns:1fr; }
          .fd-why-grid { grid-template-columns:repeat(2,1fr); }
          .fd-cost-grid { grid-template-columns:1fr; }
          .fd-process-grid { flex-direction:column; align-items:center; gap:24px; }
          .fd-process-grid::before { display:none; }
          .fd-cta { flex-direction:column; padding:52px 24px; text-align:center; gap:32px; }
          .fd-cta-img { width:260px; height:260px; }
          .fd-cta-btns { justify-content:center; }
          .fd-tab-panel ul { grid-template-columns:1fr; }
          .fd-tab-panel { padding:24px; }
          .fd-screen-wrap img { width:140px; }
        }
        @media (max-width:480px){
          .fd-cards-grid { grid-template-columns:1fr; }
          .fd-why-grid { grid-template-columns:1fr; }
        }
      ` }} />

      <div className="fd-root">

        {/* Breadcrumb */}
        <div className="fd-breadcrumb">
          <a href="/">Home</a>
          <span className="fd-sep">/</span>
          <a href="/on-demand-products-development-company-hyderabad">Products</a>
          <span className="fd-sep">/</span>
          <a className="active">{data.crumbLabel}</a>
        </div>

        {/* Hero */}
        <section className="fd-hero">
          <div className="fd-hero-phone left">
            <img src={leftPhone} alt={`${data.crumbLabel} app screen`} loading="lazy" />
          </div>
          <div className="fd-hero-center">
            <h1 className="fd-h1">
              {data.hero.h1Top}<br />
              <span className="accent">{data.hero.h1Accent}</span>
              {data.hero.h1Tail ? <><br />{data.hero.h1Tail}</> : null}
            </h1>
            <p className="fd-hero-sub">{data.hero.subtitle}</p>
            <a href={data.hero.demoHref} target="_blank" className="fd-btn">View Demo &nbsp;▶</a>
          </div>
          <div className="fd-hero-phone right">
            <img src={rightPhone} alt={`${data.crumbLabel} app screen`} loading="lazy" />
          </div>
        </section>

        {/* Features banner */}
        {data.featuresBannerImg ? (
          <div className="fd-features-banner">
            <img src={data.featuresBannerImg} alt={data.featuresBannerAlt ?? ""} />
          </div>
        ) : null}

        {/* Intro two-col */}
        <div className="fd-twocol">
          <div className="fd-twocol-img">
            <img src={data.intro.img} alt={data.intro.h3} className="fd-phone-img" loading="lazy" />
          </div>
          <div className="fd-twocol-text">
            <span className="fd-label">{data.intro.label}</span>
            <h3 className="fd-h3">{data.intro.h3}</h3>
            {data.intro.body.map((p, i) => <p key={i} className="fd-body">{p}</p>)}
            <a href={data.intro.ctaHref ?? "/contact-us"} className="fd-btn" style={{ marginTop: "8px" }}>
              {data.intro.ctaText ?? "Request a Quote"} &nbsp;→
            </a>
          </div>
        </div>

       {/* Section divider */}
{data.dividerTitle ? (
  <div className="fd-section-divider">
    <img src={data.dividerImg ?? "/images/products/food11.png"} loading="lazy" alt="" />
    <h2>{data.dividerTitle}</h2>
    <img src={data.dividerImg ?? "/images/products/food11.png"} loading="lazy" alt="" />
  </div>
) : null}

        {/* End-to-end two-col (reverse) */}
        <div className="fd-twocol reverse">
          <div className="fd-twocol-img">
            <img src={data.endToEnd.img} alt={data.endToEnd.h3} className="fd-phone-img" loading="lazy" />
          </div>
          <div className="fd-twocol-text">
            <span className="fd-label">{data.endToEnd.label}</span>
            <h3 className="fd-h3">{data.endToEnd.h3}</h3>
            {data.endToEnd.body.map((p, i) => <p key={i} className="fd-body">{p}</p>)}
          </div>
        </div>

        {/* Service cards */}
        <div className="fd-cards-section">
          <div className="fd-cards-inner">
            <span className="fd-label">{data.cardsSection.label}</span>
            <h2 className="fd-h2">{data.cardsSection.h2}</h2>
            <p className="fd-body" style={{ maxWidth: "600px", margin: "0 auto" }}>{data.cardsSection.intro}</p>
            <div className="fd-cards-grid">
              {data.cardsSection.cards.map((c, i) => (
                <div key={c.title} className="fd-card">
                  <div className={`fd-card-icon ${ICON_CLASSES[i % ICON_CLASSES.length]}`}>{c.icon}</div>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App screens marquee */}
        <div className="fd-screens">
          <h3>{data.screens.title ?? "App Screens"}</h3>
          <p>{data.screens.subtitle ?? "App Screen Design and User Interface"}</p>
          <div className="fd-screens-track-wrap">
            <div className="fd-screens-track">
              {[...data.screens.images, ...data.screens.images].map((src, i) => (
                <div key={i} className="fd-screen-wrap">
                  <img src={src} alt={`${data.screens.alt} ${(i % data.screens.images.length) + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core features tabs */}
        <div className="fd-tabs-section">
          <div className="fd-tabs-inner">
            <span className="fd-label">{data.tabs.label}</span>
            <h2 className="fd-h2">{data.tabs.h2}</h2>
            <p className="fd-body">{data.tabs.intro}</p>
            <div className="fd-tab-btns">
              {data.tabs.panels.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`fd-tab-btn${activeTab === p.id ? " active" : ""}`}
                  onClick={() => setActiveTab(p.id)}
                >
                  {p.title}
                </button>
              ))}
            </div>
            {data.tabs.panels.map((p) =>
              activeTab === p.id ? (
                <div key={p.id} className="fd-tab-panel">
                  <ul>
                    {p.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* AI */}
        <div className="fd-ai">
          <div className="fd-ai-inner">
            <span className="fd-label">{data.ai.label}</span>
            <h2 className="fd-h2">{data.ai.h2}</h2>
            <p className="fd-ai-desc">{data.ai.desc}</p>
            <div className="fd-ai-grid">
              {data.ai.cards.map((c) => (
                <div key={c.title} className="fd-ai-card">
                  <span className="fd-ai-icon">{c.icon}</span>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why */}
        <div className="fd-why">
          <div className="fd-why-inner">
            <span className="fd-label">{data.why.label}</span>
            <h2 className="fd-h2">{data.why.h2}</h2>
            <p className="fd-body">{data.why.intro}</p>
            <div className="fd-why-grid">
              {data.why.cards.map((c) => (
                <div key={c.title} className="fd-why-card">
                  <span className="fd-why-icon">{c.icon}</span>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
            {data.why.footer ? <p className="fd-why-footer">{data.why.footer}</p> : null}
          </div>
        </div>

        {/* Cost */}
        <div className="fd-cost">
          <div className="fd-cost-inner">
            <span className="fd-label">{data.cost.label ?? "Pricing"}</span>
            <h2 className="fd-h2">{data.cost.h2}</h2>
            <p className="fd-body">{data.cost.intro}</p>
            <div className="fd-cost-grid">
              {data.cost.tiers.map((t) => (
                <div key={t.name} className={`fd-cost-card${t.highlight ? " highlight" : ""}`}>
                  <span className="fd-cost-tier">{t.name}</span>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
            {data.cost.note ? <p className="fd-cost-note">{data.cost.note}</p> : null}
            <a href={data.cost.ctaHref ?? "/contact-us"} className="fd-btn fd-btn-gold">
              {data.cost.ctaText ?? "Talk to Our Experts for a Custom Quote"}
            </a>
          </div>
        </div>

        {/* Process */}
        <div className="fd-process">
          <div className="fd-process-inner">
            <span className="fd-label">{data.process.label ?? "Our Process"}</span>
            <h2 className="fd-h2">{data.process.h2}</h2>
            <p className="fd-body">{data.process.intro}</p>
            <div className="fd-process-grid">
              {data.process.steps.map((s) => (
                <div key={s.n} className="fd-process-step">
                  <div className="fd-step-num">{s.n}</div>
                  <h6>{s.title}</h6>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech */}
        <div className="fd-tech">
          <h3>Technology We Use</h3>
          <p className="fd-body">Advanced Tools &amp; Frameworks for App Development</p>
          <div className="fd-tech-grid">
            {DEFAULT_TECH.map((t) => (
              <div key={t.alt} className="fd-tech-item">
                <img src={t.src} width={t.w} alt={t.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="fd-industries">
          <span className="fd-label">{data.industries.label ?? "Industries"}</span>
          <h2 className="fd-h2">{data.industries.h2}</h2>
          <div className="fd-industries-grid">
            {data.industries.items.map((i) => (
              <div key={i.name} className="fd-industry-card">
                <span className="fd-industry-icon">{i.icon}</span>
                <h6>{i.name}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="fd-faq">
          <span className="fd-label">FAQ</span>
          <h2 className="fd-h2">Frequently Asked Questions</h2>
          <div className="fd-faq-list">
            {data.faqs.map((f, i) => (
              <div key={i} className={`fd-faq-item${openFaq === i ? " open" : ""}`}>
                <div className="fd-faq-q" onClick={() => toggleFaq(i)}>
                  {f.q}
                  <span className="fd-faq-icon">+</span>
                </div>
                <div className="fd-faq-body">
                  <p className="fd-faq-a">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="fd-cta">
          <div className="fd-cta-img-wrap">
            <img src={data.cta.img} alt={data.cta.h2} className="fd-cta-img" />
          </div>
          <div className="fd-cta-text">
            <span className="fd-label">{data.cta.label ?? "Get Started"}</span>
            <h2>{data.cta.h2}</h2>
            <p>{data.cta.body}</p>
            <div className="fd-cta-btns">
              <a className="fd-btn fd-btn-gold" href={data.cta.buttonHref ?? "/contact-us"} target="_blank">
                {data.cta.buttonText ?? "Book a Free Consultation"} &nbsp;→
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
