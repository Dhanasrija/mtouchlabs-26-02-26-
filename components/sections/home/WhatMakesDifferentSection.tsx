"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
import Image from "next/image";
import { BlurText } from "@/components/sections/home/ui/BlurText";

const row1 = [
  {
    iconSrc: "/images/home/why/image-6900.webp",
    iconAlt: "End-to-end IT solutions",
    title: "End-to-End IT Solutions",
    description: "Complete digital solutions from idea to launch.",
    image: "/images/home/why/End-to-end IT solutions.png",
  },
  {
    iconSrc: "/images/home/why/image-6901.webp",
    iconAlt: "AI & emerging technologies",
    title: "Strong expertise in AI & emerging technologies",
    description: "Building smart solutions using AI and modern technologies.",
    image: "/images/home/why/Strong expertise in AI & emerging technologies.png",
  },
  {
    iconSrc: "/images/home/why/image-6899.webp",
    iconAlt: "Agile development methodology",
    title: "Agile & Scalable Development Approach",
    description: "Fast, flexible delivery with continuous improvements.",
    image: "/images/home/why/rear-view-programmer-working-all-night-long 1.png",
  },
];

const row2 = [
  {
    iconSrc: "/images/home/why/image-6889-1.webp",
    iconAlt: "Transparent communication",
    title: "Transparent communication",
    description: "Clear updates and seamless collaboration at every stage.",
    image: "/images/home/why/Transparent_communication.webp",
  },
  {
    iconSrc: "/images/home/why/maximise 1 (1).png",
    iconAlt: "Scalable and future-ready solutions",
    title: "Scalable and future-ready solutions",
    description: "Systems designed to grow with your business.",
    image: "/images/home/why/Scalable and future-ready solutions.png",
  },
  {
    iconSrc: "/images/home/why/image-6886-1.webp",
    iconAlt: "Proven Industry Experience",
    title: "Proven Industry Experience & Global Delivery",
    description: "Trusted by startups and enterprises worldwide.",
    image: "/images/home/why/Proven Industry Experience & Global Delivery.png",
  },
];

export default function WhatMakesDifferentSection() {
  return (
    <>
      
      <section className="wm-apart-section">
        <div className="wm-apart-container">

          {/* Eyebrow */}
          <div
            className="wm-apart-eyebrow"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {/* <span className="wm-apart-dot" style={{ margin: 0 }} /> */}
            <BlurText text="• WHY US" delay={0} />
          </div>

          {/* Heading */}
          <h2 className="wm-apart-heading">
            <BlurText text="Why" delay={0.1} />{" "}
            <BlurText 
              text="mTouch Labs" 
              delay={0.2} 
              style={{ color: "#3E8CFB" }}
            />{" "}
            <BlurText text="is a Top Software" delay={0.3} />
            <br />
            <BlurText text="Development Company" delay={0.5} />
          </h2>

          {/* Subheading */}
          <div className="wm-apart-subheading">
            <BlurText 
              text="Whether you're optimizing today or building for tomorrow, we help you move faster with confidence."
              delay={0.7}
            />
          </div>

          {/* Cards grid */}
          <div className="wm-apart-grid">
            {/* Row 1 — first card active by default via CSS */}
            <div className="wm-apart-row wm-apart-row--first">
              {row1.map((card, i) => (
                <div
                  key={i}
                  className="wm-apart-card"
                  style={{
                    animation: "wmFadeUp 0.55s ease-out both",
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div className="wm-apart-img-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="280px"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div className="wm-apart-card-content">
                    <div className="wm-apart-icon-box">
                      <Image src={card.iconSrc} alt={card.iconAlt} width={28} height={28} />
                    </div>
                    <div className="wm-apart-card-text">
                      <h3 className="wm-apart-card-title">
                        <BlurText text={card.title} delay={0.2 + i * 0.1} />
                      </h3>
                      <p className="wm-apart-card-desc">
                        <BlurText text={card.description} delay={0.3 + i * 0.1} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 — no default active */}
            <div className="wm-apart-row">
              {row2.map((card, i) => (
                <div
                  key={i}
                  className="wm-apart-card"
                  style={{
                    animation: "wmFadeUp 0.55s ease-out both",
                    animationDelay: `${0.36 + i * 0.12}s`,
                  }}
                >
                  <div className="wm-apart-img-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="280px"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <div className="wm-apart-card-content">
                    <div className="wm-apart-icon-box">
                      <Image src={card.iconSrc} alt={card.iconAlt} width={28} height={28} />
                    </div>
                    <div className="wm-apart-card-text">
                      <h3 className="wm-apart-card-title">
                        <BlurText text={card.title} delay={0.5 + i * 0.1} />
                      </h3>
                      <p className="wm-apart-card-desc">
                        <BlurText text={card.description} delay={0.6 + i * 0.1} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
