import Image from "next/image";
import { BlurText } from "@/components/sections/home/ui/BlurText";

const row1 = [
  {
    iconSrc: "/images/home/why/image 6900.png",
    iconAlt: "End-to-end IT solutions",
    title: "End-to-end IT solutions",
    description: "Complete digital solutions from idea to launch.",
    image: "/images/home/why/End-to-end IT solutions.png",
  },
  {
    iconSrc: "/images/home/why/image 6901.png",
    iconAlt: "AI & emerging technologies",
    title: "Strong expertise in AI & emerging technologies",
    description: "Building smart solutions using AI and modern technologies",
    image: "/images/home/why/Strong expertise in AI & emerging technologies.png",
  },
  {
    iconSrc: "/images/home/why/image 6899.png",
    iconAlt: "Agile development methodology",
    title: "Agile development methodology",
    description: "Fast, flexible delivery with continuous improvements.",
    image: "/images/home/why/rear-view-programmer-working-all-night-long 1.png",
  },
];

const row2 = [
  {
    iconSrc: "/images/home/why/image 6889 (1).png",
    iconAlt: "Transparent communication",
    title: "Transparent communication",
    description: "Clear updates and seamless collaboration at every stage",
    image: "/images/home/why/Transparent_communication.png",
  },
  {
    iconSrc: "/images/home/why/maximise 1 (1).png",
    iconAlt: "Scalable and future-ready solutions",
    title: "Scalable and future-ready solutions",
    description: "Systems designed to grow with your business.",
    image: "/images/home/why/Scalable and future-ready solutions.png",
  },
  {
    iconSrc: "/images/home/why/image 6886 (1).png",
    iconAlt: "Proven Industry Experience",
    title: "Proven Industry Experience & Global Delivery",
    description: "Trusted by startups and enterprises worldwide.",
    image: "/images/home/why/Proven Industry Experience & Global Delivery.png",
  },
];

export default function WhatMakesDifferentSection() {
  return (
    <>
      <style>{`
        @keyframes wmFadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes wmBlurIn {
          from { opacity: 0; filter: blur(6px); transform: translateX(-24px); }
          to   { opacity: 1; filter: blur(0);   transform: translateX(0);     }
        }

        /* Image panel hidden by default — opacity:0 prevents any sliver bleed */
        .wm-apart-img-panel {
          transform: translateX(100%);
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        /* Any card hover reveals its image */
        .wm-apart-card:hover .wm-apart-img-panel {
          transform: translateX(0);
          opacity: 1;
        }

        /* Row 1 first card: show image by default */
        .wm-apart-row--first .wm-apart-card:first-child .wm-apart-img-panel {
          transform: translateX(0);
          opacity: 1;
        }

        /* When any card in the grid is hovered, hide first card's default image */
        .wm-apart-grid:has(.wm-apart-card:hover) .wm-apart-row--first .wm-apart-card:first-child:not(:hover) .wm-apart-img-panel {
          transform: translateX(100%);
          opacity: 0;
        }

        /* Card hover lift */
        .wm-apart-card {
          transition: box-shadow 0.3s ease, flex 0.4s ease;
        }
        .wm-apart-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        /* ── First card in row 1: always looks hovered (matches global CSS hover state) ── */
        .wm-apart-row--first .wm-apart-card:first-child {
          flex: 2;
          border-color: #d0d9f0;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.08);
        }
        .wm-apart-row--first .wm-apart-card:first-child .wm-apart-card-content {
          width: 48%;
        }

        /* When any card in the grid is hovered, reset first card's state */
        .wm-apart-grid:has(.wm-apart-card:hover) .wm-apart-row--first .wm-apart-card:first-child:not(:hover) {
          flex: 1;
          border-color: #e2e8f0;
          box-shadow: none;
        }
        .wm-apart-grid:has(.wm-apart-card:hover) .wm-apart-row--first .wm-apart-card:first-child:not(:hover) .wm-apart-card-content {
          width: 100%;
        }

        /* ── Remove the blue icon-box background on hover (global CSS override) ── */
        .wm-apart-card:hover .wm-apart-icon-box {
          background: #EEF4FF !important;
        }
        .wm-apart-card:hover .wm-apart-icon-box svg {
          stroke: inherit !important;
        }
      `}</style>
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
