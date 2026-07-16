"use client";


import { useState } from "react";
import ServiceHero from "@/components/sections/ServiceHero";

// export const metadata: Metadata = { ... }  // move to a separate layout or page meta file when using "use client"

const faqs = [
  { q: "What is food delivery app development?", a: "Food delivery app development is the process of building mobile or web applications that allow users to order food online, track deliveries in real time, and make secure payments. These apps connect customers, restaurants, and delivery partners on a single platform." },
  { q: "How much does it cost to develop a food delivery app?", a: "The cost of food delivery app development depends on features, platforms, and business model. Basic apps are more affordable, while advanced multi-vendor platforms with real-time tracking, analytics, and integrations require higher investment." },
  { q: "How long does it take to build a food delivery app?", a: "A food delivery app typically takes 4 to 12 weeks to develop, depending on features and complexity. Simple apps take less time, while custom multi-vendor or enterprise platforms require additional development and testing." },
  { q: "Can you build apps like Zomato or Uber Eats?", a: "Yes, mTouch Labs develops scalable food delivery apps similar to Zomato, Swiggy, and Uber Eats, with custom features, real-time tracking, and seamless user experience tailored to your business model." },
  { q: "What features are essential in a food delivery app?", a: "Key features include restaurant listings, menu browsing, real-time order tracking, secure payments, delivery management, and notifications. Advanced apps also include AI recommendations, analytics, and loyalty programs." },
  { q: "What business models are supported in food delivery apps?", a: "Food delivery apps support multiple business models such as single restaurant apps, multi-vendor marketplaces, cloud kitchens, and subscription-based delivery platforms, depending on your business goals." },
  { q: "Do you provide maintenance and support after launch?", a: "Yes, mTouch Labs provides ongoing support and maintenance, including updates, performance optimization, bug fixes, and feature enhancements to ensure smooth operation." },
  { q: "Can AI be integrated into food delivery apps?", a: "Yes, food delivery apps can include AI-powered features such as personalized recommendations, demand forecasting, smart search, and chatbot support to improve user engagement and efficiency." },
];

export default function FoodDeliveryClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      {/* ── JSON-LD FAQ Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── Inline Styles ── */}
      <style>{`
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

        /* Global body dark-bg override — product pages use light theme. */
        html:has(.fd-root), body:has(.fd-root) { background: #ffffff !important; }
        .fd-root * { box-sizing: border-box; }
        .fd-root { font-family: var(--fp); color: #1a1a2e; background: #ffffff; }

        /* ── BREADCRUMB ── */
        .fd-breadcrumb {
          padding: 14px 48px;
          font-family: var(--fp);
          font-size: 13px;
          font-weight: 500;
          background: #f8f9fd;
          border-bottom: 1px solid #e5e8f5;
          color: #444;
        }
        .fd-breadcrumb a { color: #444; text-decoration: none; transition: color .2s; }
        .fd-breadcrumb a:hover { color: var(--blue); }
        .fd-breadcrumb a.active { color: var(--blue); font-weight: 600; }
        .fd-sep { margin: 0 8px; color: #bbb; }

        /* ── HERO ── */
        .fd-hero {
          padding: 72px 48px 64px;
          background: linear-gradient(160deg, #eef4ff 0%, #f8f9fd 60%, #fff8ec 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
        }
        .fd-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -100px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(62,140,251,.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .fd-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(250,199,89,.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .fd-hero-phone {
          flex: 0 0 auto;
          position: relative;
          z-index: 1;
        }
        .fd-hero-phone img {
          width: 210px;
          height: auto;
          border-radius: 28px;
          filter: drop-shadow(0 20px 52px rgba(62,140,251,.22));
          animation: fd-float 3.5s ease-in-out infinite;
        }
        .fd-hero-phone.right img { animation-delay: 1.75s; }

        @keyframes fd-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .fd-hero-center {
          flex: 1;
          text-align: center;
          max-width: 580px;
          position: relative;
          z-index: 1;
        }

        .fd-h1 {
          font-family: var(--fp);
          font-size: clamp(30px, 4.5vw, 52px);
          line-height: 1.18;
          font-weight: 800;
          color: var(--indigo);
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }
        .fd-h1 .accent { color: var(--blue); }

        .fd-hero-sub {
          font-family: var(--fp);
          font-size: 16px;
          line-height: 1.75;
          color: #5a6480;
          max-width: 480px;
          margin: 0 auto 32px;
          font-weight: 400;
        }

        /* ── BUTTONS ── */
        .fd-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--fp);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 14px 30px;
          border-radius: 10px;
          border: 2px solid var(--blue);
          background: var(--blue);
          color: #ffffff !important;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
          line-height: 1;
        }
        .fd-btn:hover {
          background: var(--navy);
          border-color: var(--navy);
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(62,140,251,.38);
        }

        .fd-btn-outline {
          background: transparent;
          color: var(--blue) !important;
          border-color: var(--blue);
        }
        .fd-btn-outline:hover {
          background: var(--blue);
          color: #ffffff !important;
          border-color: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(62,140,251,.25);
        }

        .fd-btn-gold {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--navy) !important;
        }
        .fd-btn-gold:hover {
          background: #e6b340;
          border-color: #e6b340;
          color: var(--navy) !important;
          box-shadow: 0 8px 24px rgba(250,199,89,.4);
          transform: translateY(-2px);
        }

        /* ── LABEL PILL ── */
        .fd-label {
          display: inline-block;
          font-family: var(--fp);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--blue);
          background: rgba(62,140,251,.1);
          padding: 5px 14px;
          border-radius: 40px;
          margin-bottom: 12px;
        }

        /* ── HEADINGS ── */
        .fd-h2 {
          font-family: var(--fp);
          font-size: clamp(24px, 3.2vw, 40px);
          line-height: 1.22;
          font-weight: 700;
          color: var(--indigo);
          margin-bottom: 14px;
          letter-spacing: -0.3px;
        }
        .fd-h3 {
          font-family: var(--fp);
          font-size: clamp(20px, 2.8vw, 32px);
          line-height: 1.28;
          font-weight: 700;
          margin-bottom: 14px;
        }
        /* Default .fd-body is used on LIGHT bg only.
           Dark bg sections use their own classes: .fd-ai-desc and .fd-cta-text p (white text). */
        .fd-body {
          font-family: var(--fp);
          font-size: 16px;
          line-height: 1.75;
          color: #1a1a2e;
          font-weight: 400;
        }
        .fd-body-light { color: #1a1a2e; }
        .fd-body-dark { color: #ffffff; }

        /* ── FEATURES BANNER ── */
        .fd-features-banner {
          text-align: center;
          padding: 52px 24px 0;
          background: #fff;
        }
        .fd-features-banner img {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          width: 960px;
          height: auto;
          object-fit: contain;
          object-position: center;
          border-radius: 16px;
          box-shadow: 0 4px 32px rgba(0,0,0,.08);
        }

        /* ── TWO-COL ── */
        .fd-twocol {
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 72px 80px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .fd-twocol.reverse { flex-direction: row-reverse; }
        .fd-twocol-img { flex: 0 0 auto; }
        .fd-phone-img {
          width: 230px;
          height: auto;
          border-radius: 28px;
          filter: drop-shadow(0 16px 48px rgba(62,140,251,.18));
        }
        .fd-twocol-text { flex: 1; }
        .fd-twocol-text p { margin-bottom: 14px; }
        .fd-twocol-text a { color: var(--blue); text-decoration: none; font-weight: 600; }
        .fd-twocol-text a:hover,
        .fd-twocol-text a:focus,
        .fd-twocol-text a:visited,
        .fd-twocol-text a:active { color: var(--blue); text-decoration: none; }

        /* ── SECTION DIVIDER ── */
        .fd-section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 16px 48px 24px;
          background: #fff;
        }
        .fd-section-divider h2 {
          font-family: var(--fp);
          font-size: clamp(20px, 2.8vw, 34px);
          font-weight: 700;
          color: var(--indigo);
          text-align: center;
        }
        .fd-section-divider img { width: 200px; height: auto; }

        /* ── SERVICE CARDS ── */
        .fd-cards-section { background: var(--light); padding: 64px 24px; }
        .fd-cards-inner { max-width: 1200px; margin: 0 auto; text-align: center; }
        .fd-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
        }
        .fd-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px 20px 24px;
          text-align: center;
          border: 1px solid #eaeeff;
          transition: transform .22s, box-shadow .22s, border-color .22s;
        }
        .fd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(62,140,251,.13);
          border-color: rgba(62,140,251,.25);
        }
        .fd-card-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          margin: 0 auto 16px;
        }
        .ic1{background:#e8f0ff}.ic2{background:#e8f9f0}.ic3{background:#fff4e6}
        .ic4{background:#fef9e7}.ic5{background:#f3e8ff}.ic6{background:#e8fcff}
        .ic7{background:#fde8ee}.ic8{background:#e8fff3}
        .fd-card h6 { font-family:var(--fp); font-size:15px; font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-card p  { font-family:var(--fp); font-size:13px; line-height:1.65; color:var(--grey); }

        /* ── APP SCREENS ── */
        .fd-screens {
          background: var(--light);
          padding: 72px 0 64px;
          text-align: center;
          overflow: hidden;
        }
        .fd-screens h3 { font-family:var(--fp); font-size:clamp(22px,3vw,32px); font-weight:700; color:var(--indigo); margin-bottom:8px; }
        .fd-screens > p { font-family:var(--fp); font-size:15px; color:var(--grey); margin-bottom:48px; }

        /* marquee track */
        .fd-screens-track-wrap {
          position: relative;
          overflow: hidden;
          padding: 12px 0 24px;
        }
        .fd-screens-track-wrap::before,
        .fd-screens-track-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .fd-screens-track-wrap::before { left: 0;  background: linear-gradient(to right,  var(--light), transparent); }
        .fd-screens-track-wrap::after  { right: 0; background: linear-gradient(to left,   var(--light), transparent); }

        .fd-screens-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: fd-scroll 22s linear infinite;
        }
        .fd-screens-track:hover { animation-play-state: paused; }

        @keyframes fd-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .fd-screen-wrap {
          border: 2px solid rgba(62,140,251,.18);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(62,140,251,.1);
          transition: transform .25s, box-shadow .25s;
          background: #fff;
          flex-shrink: 0;
        }
        .fd-screen-wrap:hover {
          transform: scale(1.05) translateY(-6px);
          box-shadow: 0 14px 40px rgba(62,140,251,.2);
        }
        .fd-screen-wrap img {
          width: 190px;
          height: auto;
          display: block;
        }

        /* ── CORE FEATURES TABS ── */
        .fd-tabs-section { padding: 72px 24px; background: #fff; }
        .fd-tabs-inner { max-width: 860px; margin: 0 auto; text-align: center; }
        .fd-tabs-inner .fd-body { max-width: 640px; margin: 0 auto 36px; }
        .fd-tab-radio { display: none; }
        .fd-tab-btns {
          display: flex; gap: 10px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 32px;
        }
        .fd-tab-btn {
          font-family:var(--fp); font-size:13px; font-weight:600;
          padding:10px 22px; border-radius:40px; cursor:pointer;
          border:2px solid var(--blue); color:var(--blue); background:transparent;
          transition:all .2s; user-select:none;
        }
        #tab-customer:checked  ~ .fd-tab-btns label[for="tab-customer"],
        #tab-admin:checked     ~ .fd-tab-btns label[for="tab-admin"],
        #tab-delivery:checked  ~ .fd-tab-btns label[for="tab-delivery"],
        #tab-restaurant:checked ~ .fd-tab-btns label[for="tab-restaurant"] {
          background:var(--blue); color:#fff; box-shadow:0 4px 14px rgba(62,140,251,.3);
        }
        .fd-tab-panel { display:none; }
        #tab-customer:checked   ~ .fd-tab-btns ~ #panel-customer,
        #tab-admin:checked      ~ .fd-tab-btns ~ #panel-admin,
        #tab-delivery:checked   ~ .fd-tab-btns ~ #panel-delivery,
        #tab-restaurant:checked ~ .fd-tab-btns ~ #panel-restaurant { display:block; }
        .fd-tab-panel {
          background:var(--light); border-radius:20px; padding:36px 40px;
          text-align:left; border:1px solid #dce4f8;
        }
        .fd-tab-panel ul { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .fd-tab-panel ul li {
          font-family:var(--fp); font-size:15px; line-height:1.6;
          color:var(--indigo); font-weight:500; padding-left:26px; position:relative;
        }
        .fd-tab-panel ul li::before { content:'✓'; position:absolute; left:0; color:var(--blue); font-weight:800; font-size:14px; }

        /* ── AI ── */
        .fd-ai { background:linear-gradient(140deg,#020e3a 0%,var(--indigo) 50%,#040d1c 100%); padding:72px 24px; text-align:center; color:#ffffff; }
        .fd-ai h1, .fd-ai h2, .fd-ai h3, .fd-ai h4, .fd-ai h5, .fd-ai h6,
        .fd-ai p, .fd-ai li { color:#ffffff; }
        .fd-ai .fd-ai-card p { color: rgba(255,255,255,.75); }
        .fd-ai .fd-ai-desc { color: rgba(255,255,255,.8); }
        .fd-ai-inner { max-width:1100px; margin:0 auto; }
        .fd-ai .fd-h2 { color:var(--white); }
        .fd-ai .fd-label { background:rgba(250,199,89,.15); color:var(--gold); }
        .fd-ai-desc {
          font-family:var(--fp); font-size:16px; line-height:1.75;
          color:rgba(255,255,255,.7); max-width:680px; margin:0 auto 40px;
        }
        .fd-ai-desc a { color: var(--gold); text-decoration: none; font-weight: 600; }
        .fd-ai-desc a:hover,
        .fd-ai-desc a:focus,
        .fd-ai-desc a:visited,
        .fd-ai-desc a:active { color: var(--gold); text-decoration: none; }
        .fd-ai-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; text-align:left; }
        .fd-ai-card {
          background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1);
          border-radius:18px; padding:28px 24px; transition:background .22s,transform .22s;
        }
        .fd-ai-card:hover { background:rgba(255,255,255,.11); transform:translateY(-4px); }
        .fd-ai-icon { font-size:34px; display:block; margin-bottom:14px; }
        .fd-ai-card h6 { font-family:var(--fp); font-size:16px; font-weight:700; color:var(--white); margin-bottom:8px; }
        .fd-ai-card p  { font-family:var(--fp); font-size:14px; line-height:1.65; color:rgba(255,255,255,.6); }

        /* ── WHY ── */
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

        /* ── COST ── */
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

        /* ── PROCESS ── */
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

        /* ── TECH ── */
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

        /* ── INDUSTRIES ── */
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

        /* ── FAQ ACCORDION ── */
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
          cursor:pointer; user-select:none;
          transition:background .15s;
        }
        .fd-faq-item.open .fd-faq-q { background:rgba(62,140,251,.04); color:var(--blue); }
        .fd-faq-q:hover { background:rgba(62,140,251,.04); }
        .fd-faq-icon {
          width:28px; height:28px; border-radius:50%;
          background:rgba(62,140,251,.1); color:var(--blue);
          display:flex; align-items:center; justify-content:center;
          font-size:18px; font-weight:400; flex-shrink:0;
          transition:transform .25s, background .2s;
          line-height:1;
        }
        .fd-faq-item.open .fd-faq-icon { transform:rotate(45deg); background:var(--blue); color:#fff; }
        .fd-faq-body {
          max-height:0;
          overflow:hidden;
          transition:max-height .35s ease, padding .3s ease;
        }
        .fd-faq-item.open .fd-faq-body { max-height:300px; }
        .fd-faq-a {
          font-family:var(--fp); font-size:14px; line-height:1.8;
          color:var(--grey); padding:0 24px 20px;
        }

        /* ── FINAL CTA ── */
        .fd-cta {
          background:linear-gradient(130deg,var(--navy) 0%,var(--indigo) 60%,#020b24 100%);
          padding:72px 80px; display:flex; align-items:center; gap:64px; color:#ffffff;
        }
        .fd-cta h1, .fd-cta h2, .fd-cta h3, .fd-cta h4, .fd-cta h5, .fd-cta h6,
        .fd-cta-text h2, .fd-cta-text p { color:#ffffff; }
        .fd-cta-text p { color: rgba(255,255,255,.8); }
        .fd-cta-img-wrap { flex:0 0 auto; }
        .fd-cta-img { width:300px; height:auto; border-radius:24px; filter:drop-shadow(0 16px 48px rgba(0,0,0,.5)); }
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

        /* ── RESPONSIVE ── */
        @media (max-width:1024px){
          .fd-hero { padding:52px 32px 48px; gap:32px; }
          .fd-hero-phone img { width:170px; }
          .fd-twocol { padding:48px 40px; gap:40px; }
          .fd-cards-grid { grid-template-columns:repeat(2,1fr); }
          .fd-ai-grid { grid-template-columns:repeat(2,1fr); }
          .fd-why-grid { grid-template-columns:repeat(2,1fr); }
          .fd-cta { padding:56px 40px; gap:40px; }
          .fd-cta-img { width:240px; }
        }
        @media (max-width:768px){
          .fd-breadcrumb { padding:12px 20px; }
          .fd-hero { flex-direction:column; padding:48px 20px 40px; }
          .fd-hero-phone { display:none; }
          .fd-twocol,.fd-twocol.reverse { flex-direction:column; padding:40px 20px; gap:32px; text-align:center; }
          .fd-phone-img { width:200px; }
          .fd-section-divider img { display:none; }
          .fd-cards-grid { grid-template-columns:repeat(2,1fr); }
          .fd-ai-grid { grid-template-columns:1fr; }
          .fd-why-grid { grid-template-columns:repeat(2,1fr); }
          .fd-cost-grid { grid-template-columns:1fr; }
          .fd-process-grid { flex-direction:column; align-items:center; gap:24px; }
          .fd-process-grid::before { display:none; }
          .fd-cta { flex-direction:column; padding:52px 24px; text-align:center; gap:32px; }
          .fd-cta-img { width:220px; }
          .fd-cta-btns { justify-content:center; }
          .fd-tab-panel ul { grid-template-columns:1fr; }
          .fd-tab-panel { padding:24px; }
          .fd-screen-wrap img { width:140px; }
        }
        @media (max-width:480px){
          .fd-cards-grid { grid-template-columns:1fr; }
          .fd-why-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="fd-root">

        {/* ── BREADCRUMB ── */}
        <div className="fd-breadcrumb">
          <a href="/">Home</a>
          <span className="fd-sep">/</span>
          <a href="/on-demand-products-development-company-hyderabad">Products</a>
          <span className="fd-sep">/</span>
          <a className="active">Food Delivery App Development Service</a>
        </div>

        {/* ── HERO ── */}
        <ServiceHero
          badge="Food Delivery App Development"
          titleLead="Food Delivery App"
          titleAccent="Development Company"
          titleTail="in Hyderabad"
          description={<>Launch a scalable, user-friendly food delivery app with advanced features, seamless ordering, real-time tracking, and secure payment integration.</>}
        />

        {/* ── FEATURES BANNER ── */}
        <div className="fd-features-banner">
          <img width={1706} height={696} loading="lazy" decoding="async" src="/images/products/foodservices.webp" alt="food delivery app development company in Hyderabad" />
        </div>

        {/* ── INTRO TWO-COL ── */}
        <div className="fd-twocol">
          <div className="fd-twocol-img">
            <img width={346} height={750} src="/images/products/phoneframe1.webp" alt="food delivery app development" className="fd-phone-img" loading="lazy" />
          </div>
          <div className="fd-twocol-text">
            <span className="fd-label">NASSCOM Award-Winning</span>
            <h3 className="fd-h3">Food Delivery App Development</h3>
            <p className="fd-body">
              mTouch Labs is a NASSCOM award-winning{" "}
              <a href="/food-delivery-app-development-service" target="_blank" rel="noopener noreferrer">food delivery app development service</a>{" "}
              provider in Hyderabad, helping startups, restaurants, cloud kitchens, and enterprises build powerful digital ordering and delivery platforms.
            </p>
            <p className="fd-body">
              Whether you want to launch a single restaurant ordering app, a multi-vendor delivery platform, or a complete on-demand food delivery marketplace, our team delivers tailored solutions. As an experienced{" "}
              <a href="/mobile-app-development-company" target="_blank" rel="noopener noreferrer">food delivery app development company</a>{" "}
              in Hyderabad, we focus on usability, performance, scalability, and long-term success.
            </p>
            <a href="/contact-us" className="fd-btn" style={{ marginTop: "8px" }}>
              Request a Quote &nbsp;→
            </a>
          </div>
        </div>

        {/* ── SECTION DIVIDER ──
        <div className="fd-section-divider">
          <img width={301} height={288} src="/images/products/food11.webp" loading="lazy" alt="" />
          <h2>Custom Food Delivery App Development Services</h2>
          <img width={301} height={288} src="/images/products/food11.webp" loading="lazy" alt="" />
        </div> */}

        {/* ── END-TO-END TWO-COL ── */}
        <div className="fd-twocol reverse">
          <div className="fd-twocol-img">
            <img width={382} height={787} src="/images/products/phoneframe2.webp" alt="custom food delivery app development" className="fd-phone-img" loading="lazy" />
          </div>
          <div className="fd-twocol-text">
            <span className="fd-label">End-to-End Solutions</span>
            <h3 className="fd-h3">Complete Food Delivery Development</h3>
            <p className="fd-body">
              We provide end-to-end{" "}
              <a href="/on-demand-service-mobile-app-development" target="_blank" rel="noopener noreferrer">food delivery app development services</a>{" "}
              for businesses looking to streamline food ordering, improve customer experience, and increase revenue.
            </p>
            <p className="fd-body">
              Our solutions include single restaurant app development, multi-restaurant delivery platform development, cloud kitchen app development, on-demand food delivery app development, restaurant aggregator app development, subscription-based food delivery solutions, and white-label food delivery app development.
            </p>
          </div>
        </div>

        {/* ── FOOD22 IMAGE ──
        <div style={{ textAlign: "center", padding: "0 40px 32px", background: "#fff" }}>
          <img width={222} height={254} src="/images/products/food22.webp" loading="lazy" alt="multi-vendor food delivery app solutions" style={{ maxWidth: "100%", width: "960px", borderRadius: "16px", boxShadow: "0 4px 32px rgba(0,0,0,.08)" }} />
        </div> */}

        {/* ── SERVICE CARDS ── */}
        <div className="fd-cards-section">
          <div className="fd-cards-inner">
            <span className="fd-label">What We Build</span>
            <h2 className="fd-h2">Food Delivery Apps We Build</h2>
            <p className="fd-body" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Our team develops scalable food delivery applications tailored to different business models.
            </p>
            <div className="fd-cards-grid">
              {[
                { icon: "🍽️", cls: "ic1", title: "Single Restaurant Ordering",    desc: "Perfect for restaurants that want direct online ordering, delivery management, and customer retention without third-party marketplaces." },
                { icon: "🌐", cls: "ic2", title: "Multi-Vendor Platforms",          desc: "Build aggregator platforms allowing multiple restaurants to onboard, manage menus, and process orders from one system." },
                { icon: "☁️", cls: "ic3", title: "Cloud Kitchen Solutions",         desc: "Designed for delivery-only brands that need efficient order handling, kitchen coordination, and customer engagement." },
                { icon: "⚡", cls: "ic4", title: "Custom On-Demand Apps",           desc: "From startups to enterprises, we build custom solutions with unique features, branding, and workflows." },
                { icon: "📅", cls: "ic5", title: "Subscription-Based Delivery",     desc: "Offer meal plan apps with recurring food deliveries for loyal customers and predictable revenue." },
                { icon: "🔍", cls: "ic6", title: "Restaurant Aggregator",           desc: "Build a comprehensive restaurant discovery and ordering platform connecting diners with local eateries." },
                { icon: "🏷️", cls: "ic7", title: "White-Label Solutions",           desc: "Pre-built, customizable food delivery apps ready for your branding and quick market launch." },
                { icon: "💳", cls: "ic8", title: "API & Payment Integration",       desc: "Incorporate third-party APIs, GPS, and secure payment gateways for a seamless experience." },
              ].map((c) => (
                <div key={c.title} className="fd-card">
                  <div className={`fd-card-icon ${c.cls}`}>{c.icon}</div>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── APP SCREENS — light bg, uniform size, infinite scroll ── */}
        <div className="fd-screens">
          <h3>App Screens</h3>
          <p>App Screen Design and User Interface</p>
          <div className="fd-screens-track-wrap">
            {/* duplicate the set so the scroll loops seamlessly */}
            <div className="fd-screens-track">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                <div key={i} className="fd-screen-wrap">
                  <img src={`/images/products/silder${n}.png`} alt={`Food delivery app screen ${n}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CORE FEATURES TABS ── */}
        <div className="fd-tabs-section">
          <div className="fd-tabs-inner">
            <span className="fd-label">Features</span>
            <h2 className="fd-h2">Core Features of Our Food Delivery App</h2>
            {/* <p className="fd-body">Our custom food delivery app development services cover every part of the ecosystem.</p> */}

            <input type="radio" name="panel-tab" id="tab-customer" className="fd-tab-radio" defaultChecked />
            <input type="radio" name="panel-tab" id="tab-admin" className="fd-tab-radio" />
            <input type="radio" name="panel-tab" id="tab-delivery" className="fd-tab-radio" />
            <input type="radio" name="panel-tab" id="tab-restaurant" className="fd-tab-radio" />

            <div className="fd-tab-btns">
              <label htmlFor="tab-customer" className="fd-tab-btn">Customer App</label>
              <label htmlFor="tab-admin" className="fd-tab-btn">Admin Panel</label>
              <label htmlFor="tab-delivery" className="fd-tab-btn">Delivery Partner</label>
              <label htmlFor="tab-restaurant" className="fd-tab-btn">Restaurant Panel</label>
            </div>

            <div className="fd-tab-panel" id="panel-customer">
              <ul>
                <li>Easy Sign-Up and Login</li><li>Smart Search and Filters</li>
                <li>Restaurant Listings and Menu Browsing</li><li>Add to Cart and Quick Checkout</li>
                <li>Multiple Payment Options</li><li>Real-Time Order Tracking</li>
                <li>Ratings and Reviews</li><li>Push Notifications and Offers</li>
              </ul>
            </div>
            <div className="fd-tab-panel" id="panel-admin">
              <ul>
                <li>User and Restaurant Management</li><li>Commission Management</li>
                <li>Delivery Tracking</li><li>Reports and Analytics</li>
                <li>Payment and Settlement Management</li>
              </ul>
            </div>
            <div className="fd-tab-panel" id="panel-delivery">
              <ul>
                <li>Order Alerts and Acceptance</li><li>Live Navigation and Route Tracking</li>
                <li>Delivery Status Updates</li><li>Earnings Dashboard</li>
                <li>Availability Management</li>
              </ul>
            </div>
            <div className="fd-tab-panel" id="panel-restaurant">
              <ul>
                <li>Menu Management</li><li>Order Acceptance and Preparation Updates</li>
                <li>Offer and Discount Management</li><li>Inventory Visibility</li>
                <li>Sales Tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── AI SECTION ── */}
        <div className="fd-ai">
          <div className="fd-ai-inner">
            <span className="fd-label">AI-Powered</span>
            <h2 className="fd-h2">AI-Powered Food Delivery App Development</h2>
            <p className="fd-ai-desc">
              At mTouch Labs, we go beyond standard app development by integrating smart features that improve efficiency and user experience. Our{" "}
              <a href="/generative-ai-development-company" target="_blank" rel="noopener noreferrer">AI-powered food delivery app development</a>{" "}
              solutions help businesses personalize customer journeys and optimize operations.
            </p>
            <div className="fd-ai-grid">
              {[
                { icon: "🎯", title: "Personalized Recommendations",   desc: "AI-driven food suggestions based on user preferences and order history." },
                { icon: "🔍", title: "Smart Search Results",            desc: "Intelligent search that understands intent and delivers relevant results." },
                { icon: "📊", title: "Demand Forecasting",              desc: "Predict order volumes and optimize inventory and staffing accordingly." },
                { icon: "🗺️", title: "Delivery Route Optimization",    desc: "Faster deliveries with AI-optimized routing for delivery partners." },
                { icon: "🤖", title: "Chatbot Support",                 desc: "24/7 automated customer support for orders, queries, and complaints." },
                { icon: "📈", title: "Customer Behavior Insights",      desc: "Deep analytics on customer habits to improve engagement and retention." },
              ].map((c) => (
                <div key={c.title} className="fd-ai-card">
                  <span className="fd-ai-icon">{c.icon}</span>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY CHOOSE ── */}
        <div className="fd-why">
          <div className="fd-why-inner">
            <span className="fd-label">Why mTouch Labs</span>
            <h2 className="fd-h2">Why Choose mTouch Labs for Food Delivery App Development?</h2>
            {/* <p className="fd-body">Choosing the right development partner is critical when launching a food delivery platform. mTouch Labs combines mobile, software, and AI expertise to deliver reliable and growth-focused applications.</p> */}
            <div className="fd-why-grid">
              {[
                { icon: "🏆", title: "NASSCOM Award-Winning",          desc: "Recognized technology company with proven excellence." },
                { icon: "📱", title: "Mobile, Software & AI Expertise", desc: "Full-stack capabilities across all technology domains." },
                { icon: "⚡", title: "Scalable Architecture",           desc: "Solutions built to grow with startups and enterprises." },
                { icon: "🎨", title: "Custom UI/UX Design",             desc: <span>Engaging interfaces crafted by our <a href="/ui-ux-design-company" target="_blank" rel="noopener noreferrer">UI/UX design team</a>.</span> },
                { icon: "🔒", title: "Secure Payment Integration",      desc: "PCI-compliant payment gateways and third-party API integration." },
                { icon: "🔄", title: "Agile Development",               desc: "Transparent communication with iterative development cycles." },
                { icon: "🛠️", title: "Post-Launch Support",            desc: "Ongoing maintenance, updates, and feature enhancements." },
                { 
  icon: "🚀", 
  title: "Fast Deployment", 
  desc: "Quick and efficient release cycles to get your product to market faster." 
}
              ].map((c) => (
                <div key={c.title} className="fd-why-card">
                  <span className="fd-why-icon">{c.icon}</span>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="fd-why-footer">As a trusted food delivery app development company in Hyderabad, we help businesses launch faster and scale with confidence.</p>
          </div>
        </div>

        {/* ── COST ── */}
        <div className="fd-cost">
          <div className="fd-cost-inner">
            <span className="fd-label">Pricing</span>
            <h2 className="fd-h2">Food Delivery App Development Cost</h2>
            <p className="fd-body">The cost depends on the business model, number of user panels, custom features, integrations, and platform requirements.</p>
            <div className="fd-cost-grid">
              <div className="fd-cost-card">
                <span className="fd-cost-tier">Basic</span>
                <p>Suitable for startups with core ordering features and essential functionality.</p>
              </div>
              <div className="fd-cost-card highlight">
                <span className="fd-cost-tier">Mid-Level</span>
                <p>Suitable for growing restaurants and cloud kitchens with advanced features.</p>
              </div>
              <div className="fd-cost-card">
                <span className="fd-cost-tier">Advanced</span>
                <p>Multi-vendor platform with analytics, automation, and scale-ready infrastructure.</p>
              </div>
            </div>
            <p className="fd-cost-note">We provide custom development plans based on your goals, feature list, and launch roadmap.</p>
            <a href="/contact-us" className="fd-btn fd-btn-gold">Talk to Our Experts for a Custom Quote</a>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div className="fd-process">
          <div className="fd-process-inner">
            <span className="fd-label">Our Process</span>
            <h2 className="fd-h2">Our Food Delivery App Development Process</h2>
            <p className="fd-body">We follow a clear and efficient process to ensure timely delivery and quality outcomes.</p>
            <div className="fd-process-grid">
              {[
                { n: "01", title: "Discovery & Planning",  desc: "We understand your business model, audience, workflows, and goals." },
                { n: "02", title: "UI/UX Design",          desc: "Our team creates a user-friendly interface for customers, restaurant partners, and delivery agents." },
                { n: "03", title: "Development",           desc: "We build secure, scalable, and feature-rich applications using modern technologies." },
                { n: "04", title: "Testing & QA",          desc: "Every module is tested for performance, usability, and reliability." },
                { n: "05", title: "Launch & Support",      desc: "We help you launch smoothly and continue with upgrades, maintenance, and optimization." },
              ].map((s) => (
                <div key={s.n} className="fd-process-step">
                  <div className="fd-step-num">{s.n}</div>
                  <h6>{s.title}</h6>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TECH ── */}
        <div className="fd-tech">
          <h3>Technology We Use</h3>
          <p className="fd-body">Advanced Tools &amp; Frameworks for Food Delivery App Development</p>
          <div className="fd-tech-grid">
            {[
              { src: "/images/products/html.webp",             w: 65, alt: "HTML5" },
              { src: "/images/products/css.webp",              w: 45, alt: "CSS3" },
              { src: "/images/products/js.webp",               w: 75, alt: "JavaScript" },
              { src: "/images/products/boot.webp",             w: 75, alt: "Bootstrap" },
              { src: "/images/products/php.webp",              w: 75, alt: "PHP" },
              { src: "/images/products/laverl.webp",           w: 75, alt: "Laravel" },
              { src: "/images/products/flutter.webp",          w: 75, alt: "Flutter" },
              { src: "/images/products/firebase.webp",         w: 75, alt: "Firebase" },
              { src: "/images/products/MySQL.webp",            w: 75, alt: "MySQL" },
              { src: "/images/products/crashlytics.webp",      w: 75, alt: "Crashlytics" },
              { src: "/images/products/Google_Analytics.webp", w: 75, alt: "Google Analytics" },
              { src: "/images/products/aws.webp",              w: 75, alt: "AWS" },
            ].map((t) => (
              <div key={t.alt} className="fd-tech-item">
                <img src={t.src} width={t.w} alt={t.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* ── INDUSTRIES ── */}
        <div className="fd-industries">
          <span className="fd-label">Industries</span>
          <h2 className="fd-h2">Industries and Business Models We Support</h2>
          <div className="fd-industries-grid">
            {[
              { icon: "🍽️", name: "Restaurants" },
              { icon: "👨‍🍳", name: "Cloud Kitchens" },
              { icon: "🏪",  name: "Multi-Vendor Marketplaces" },
              { icon: "⚡",  name: "Quick Commerce" },
              { icon: "📦",  name: "Meal Subscription" },
              { icon: "🛒",  name: "Grocery & Food Combo" },
            ].map((i) => (
              <div key={i.name} className="fd-industry-card">
                <span className="fd-industry-icon">{i.icon}</span>
                <h6>{i.name}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ — accordion, one open at a time ── */}
        <div className="fd-faq">
          <span className="fd-label">FAQ</span>
          <h2 className="fd-h2">Frequently Asked Questions</h2>
          <div className="fd-faq-list">
            {faqs.map((f, i) => (
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

        {/* ── FINAL CTA ── */}
        <div className="fd-cta">
          <div className="fd-cta-img-wrap">
            <img width={685} height={480} loading="lazy" decoding="async" src="/images/products/delivery.webp" alt="AI-powered food ordering app development" className="fd-cta-img" />
          </div>
          <div className="fd-cta-text">
            <span className="fd-label">Get Started</span>
            <h2>Build a Food Delivery App That Customers Love</h2>
            <p>
              If you are planning to launch a modern food delivery platform, mTouch Labs can help you build a solution that is scalable, user-friendly, and ready for growth. From restaurant ordering apps to large multi-vendor marketplaces, we develop platforms that deliver real business value.
            </p>
            <div className="fd-cta-btns">
              <a className="fd-btn fd-btn-gold" href="/contact-us" target="_blank" rel="noopener noreferrer">
                Book a Free Consultation &nbsp;→
              </a>
              {/* <a
                className="fd-btn"
                href="/contact"
                target="_blank" rel="noopener noreferrer"
                style={{ background: "transparent", borderColor: "rgba(255,255,255,.55)", color: "#ffffff" }}
              >
                /* Get a Free Demo &nbsp;→ 
              </a> */}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
