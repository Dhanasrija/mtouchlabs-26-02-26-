import React from "react";
import PortfolioCarousel from "./ui/PortfolioCarousel";

const portfolioItems = [
  { href: "/telangana-ecommerce-mobile-app-development",                     img: "/images/portfolio/golkonda.webp",                 imgAlt: "Telangana E-commerce App",   title: "Telangana State Government E-commerce online",         tags: "UX, UI, Website, Android and iOS", isDefault: true  },
  { href: "/abu-dhabi-judicial-department-mobile-app-development",           img: "/images/portfolio/abudhabi government app.jpg",  imgAlt: "ADJD Abu Dhabi App",         title: "ADJD :- Abu Dhabi Judicial Department App",            tags: "UX, UI, Android",                  isDefault: false },
  { href: "/on-demand-chef-management-web-development",                      img: "/images/portfolio/cook a doodle.jpg",            imgAlt: "Chef Management Website",    title: "UK's On-Demand Chef Management Website",               tags: "UX, UI, Website",                  isDefault: false },
  { href: "/multi-vendor-ecommerce-mobile-app-development",                  img: "/images/portfolio/khidkee.webp",                  imgAlt: "Khidkee E-Commerce App",     title: "Khidkee :- An E-Commerce Retail Store Mobile App",     tags: "UX, UI, Android and iOS",          isDefault: false },
  { href: "/bikers-community-social-networking-app-development",             img: "/images/portfolio/Rev your soul.jpg",            imgAlt: "Rev Your Soul Bikers App",   title: "Rev your soul :- Bikers Community App",                tags: "UX, UI, Android and iOS",          isDefault: false },
  { href: "/staff-and-student-management-enterprise-mobile-app-development", img: "/images/portfolio/InstiServe.webp",               imgAlt: "InstiServe Management App",  title: "Instiserv :- Staff And Student Management App",        tags: "UX, UI, Android and iOS",          isDefault: false },
  { href: "/online-astrology-consultation-mobile-app-development",           img: "/images/portfolio/astrograha.webp",               imgAlt: "AstroGraha Astrology App",   title: "AstroGraha - Online Astrology Consultation App",       tags: "UX, UI, Website, Android and iOS", isDefault: false },
];

export default function PortfolioSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .pf-section {
          padding: 80px 0;
          background: #F3F1FF;
          overflow: hidden;
        }
        .pf-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .pf-eyebrow {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #1A1A1A;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .pf-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 44px;
          line-height: 1.18;
          letter-spacing: -.04em;
          color: #1A1A1A;
          text-align: center;
          margin-bottom: 14px;
        }
        .pf-heading-accent { color: #3E8CFB; }
        .pf-subtext {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.65;
          color: #585858;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 48px;
        }

        .pf-carousel {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .pf-nav {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          border: 1.5px solid #ddd;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #111;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .pf-nav:hover { background: #11c1ed; border-color: #11c1ed; color: #fff; }
        .pf-nav:disabled { opacity: 0.35; cursor: default; }
        .pf-nav svg { stroke: currentColor; }

        /* ── Track ── */
        .pf-track {
          flex: 1;
          display: flex;
          gap: 14px;
          overflow: hidden;
          padding: 8px 0;
        }

        /*
          CARD SIZING — matches reference image:
          • All 3 cards same base width (flex: 1 1 0 = equal thirds)
          • Active card gets +40% extra via flex-grow boost
          • Inactive cards shrink slightly to compensate
        */
        .pf-card {
          flex: 1 1 0;              /* equal thirds by default */
          min-width: 0;
          height: 300px;
          border-radius: 18px;
          border: 1.5px solid #e8e8e8;
          background: #fff;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
          transition:
            flex 0.4s cubic-bezier(.4,0,.2,1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        /* active card = 2× the width of an inactive card */
        .pf-card--active {
          flex: 2 1 0;
          border-color: #dde8ff;
          box-shadow: 0 8px 28px rgba(0,0,0,.10);
        }

        /* ── Image: right half, slides in on active ── */
        .pf-img {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 50%;
          border-radius: 0 16px 16px 0;
          overflow: hidden;
          transform: translateX(110%);
          opacity: 0;
          transition:
            transform 0.4s cubic-bezier(.4,0,.2,1),
            opacity 0.3s ease;
        }
        .pf-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pf-card--active .pf-img {
          transform: translateX(0);
          opacity: 1;
        }

        /* ── Icon ── */
        .pf-icon {
          position: absolute;
          top: 14px;
          left: 14px;
          width: 34px;
          height: 34px;
          background: #11c1ed;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .pf-card--active .pf-icon { background: #0dafd9; }

        /* ── Text ── */
        .pf-info {
          position: absolute;
          bottom: 20px;
          left: 18px;
          right: 18px;
          z-index: 3;
          transition: right 0.4s cubic-bezier(.4,0,.2,1);
        }
        .pf-card--active .pf-info {
          right: calc(50% + 14px);
        }
        .pf-card-title,
        .pf-card-title a {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 1.35;
          letter-spacing: -.02em;
          color: #111 !important;
          text-decoration: none;
          display: block;
          margin-bottom: 4px;
        }
        .pf-card-tags {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #888;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .pf-heading { font-size: 34px !important; }
          .pf-card    { height: 260px; }
        }
        @media (max-width: 768px) {
          .pf-heading { font-size: 26px !important; }
          .pf-card    { height: 220px; }
          .pf-card-title, .pf-card-title a { font-size: 14px !important; }
        }
        @media (max-width: 480px) {
          .pf-container { padding: 0 12px; }
          .pf-card      { height: 180px; }
          .pf-nav       { width: 32px !important; min-width: 32px !important; height: 32px !important; }
        }
      `}} />

      <section className="pf-section">
        <div className="pf-container">
          <p className="pf-eyebrow"><span>&#8226;</span> QUALITY WORK</p>
          <h2 className="pf-heading">
            What Sets <span className="pf-heading-accent">mTouch Labs</span> Apart
          </h2>
          <p className="pf-subtext">
            Whether you&apos;re optimizing today or building for tomorrow, we help you move faster with confidence.
          </p>
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </section>
    </>
  );
}