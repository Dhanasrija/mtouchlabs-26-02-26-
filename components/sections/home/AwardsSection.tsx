import React from "react";

// ─────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────

const awards = [
  {
    img: "/images/home/awards/Award winning designers.png",
    alt: "Award Winning Designers",
  },
  {
    img: "/images/home/awards/Nascom Inspire.png",
    alt: "NASSCOM SME Inspire Awards 2026",
  },
  {
    img: "/images/home/awards/Top Mobile app development.png",
    alt: "Top Mobile App Development Company — DesignRush 2025",
  },
  {
    img: "/images/home/awards/Google rating.png",
    alt: "4.9 Rating in Google Reviews",
  },
  {
    img: "/images/home/awards/Official  NASSCOM Member.png",
    alt: "Official NASSCOM Member",
  },
  {
    img: "/images/home/awards/App development.png",
    alt: "App Development Company of the Year",
  },
];

const col1 = [awards[0], awards[2], awards[4]];
const col2 = [awards[1], awards[3], awards[5]];

/**
 * Vertical looping column of award cards (pure CSS marquee)
 */
function AwardColumn({ items, reverse = false }: { items: typeof awards; reverse?: boolean }) {
  const doubledItems = [...items, ...items];
  return (
    <div className="aw-column-wrapper" style={{
      overflow: "hidden",
      height: "450px",
      width: "100%",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 12%, #000 88%, transparent 100%)",
      maskImage: "linear-gradient(to bottom, transparent 0, #000 12%, #000 88%, transparent 100%)",
    }}>
      <div
        className={`aw-column ${reverse ? "aw-marquee-reverse" : "aw-marquee"}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {doubledItems.map((aw, i) => (
          <div
            key={i}
            className="aw-card"
            style={{
              width: "100%",
              maxWidth: "100%",
              aspectRatio: "1 / 1",
              minHeight: "180px",
              padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "#fff",
              borderRadius: "16px",
              flexShrink: 0,
              opacity: 1,
              transform: "none",
              animation: "none",
              backgroundImage: `url(${encodeURI(aw.img)})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "content-box",
              backgroundClip: "content-box",
            }}
            role="img"
            aria-label={aw.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default function AwardsSection() {
  // Character-level delay counter shared across all SplitText usages
  let charIndex = 0;

  function renderChars(text: string) {
    return text.split("").map((char, i) => {
      const delay = charIndex * 0.02;
      charIndex++;
      return (
        <span
          key={`${text}-${i}`}
          className="aw-char"
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            animationDelay: `${delay}s`,
          }}
        >
          {char}
        </span>
      );
    });
  }

  return (
    <section className="aw-section">
      <div className="aw-container aw-fade-in">

        {/* Left — text */}
        <div className="aw-left">
          <p className="aw-eyebrow aw-text-reveal">
            <span className="aw-eyebrow-dot" />
            <span style={{ display: "inline-flex" }}>
              {renderChars("AWARDS")}
            </span>
          </p>
          <h2 className="aw-heading aw-text-reveal">
            <span className="aw-heading-blue">
              {renderChars("Awards")}
            </span>
            {renderChars(" & Recognition")}
          </h2>
          <p className="aw-desc aw-text-reveal">
            {renderChars(
              "Industry awards that reflect our commitment to innovation, quality, and client success."
            )}
          </p>
        </div>

        {/* Right — award cards grid */}
        <div className="aw-right">
          <div className="aw-grid-marquee">
            <AwardColumn items={col1} />
            <AwardColumn items={col2} reverse />
          </div>
        </div>

      </div>

      {/* Scoped CSS animations */}
      <style>{`
        /* ── Responsive — keep award images uncropped on every screen ── */
        @media (max-width: 1024px) {
          .aw-section .aw-grid-marquee {
            height: 420px !important;
            padding: 12px !important;
          }
          .aw-column-wrapper { height: 396px !important; }
        }
        @media (max-width: 640px) {
          .aw-section .aw-grid-marquee {
            height: 360px !important;
            padding: 10px !important;
            gap: 10px !important;
          }
          .aw-column-wrapper { height: 340px !important; }
          .aw-card { min-height: 140px !important; padding: 14px !important; }
        }

        /* ── Marquee ────────────────────────────────────── */
        @keyframes aw-scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes aw-scroll-down {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        .aw-marquee {
          animation: aw-scroll-up 15s linear infinite;
        }
        .aw-marquee-reverse {
          animation: aw-scroll-down 15s linear infinite;
        }

        /* ── Container fade-in ─────────────────────────── */
        @keyframes aw-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .aw-fade-in {
          opacity: 0;
          animation: aw-fade 0.6s ease-out forwards;
        }

        /* ── Character reveal ──────────────────────────── */
        @keyframes aw-char-reveal {
          from {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
          }
        }
        .aw-char {
          opacity: 0;
          animation: aw-char-reveal 0.4s ease-out forwards;
        }

        /* ── Reduced motion ────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .aw-marquee,
          .aw-marquee-reverse {
            animation: none;
          }
          .aw-fade-in {
            opacity: 1;
            animation: none;
          }
          .aw-char {
            opacity: 1;
            filter: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}