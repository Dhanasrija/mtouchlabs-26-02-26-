"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
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