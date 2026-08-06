"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
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
    <div
      className="aw-column-wrapper"
      style={{
        overflow: "hidden",
        height: "450px",
        width: "100%",
        /* Softer fade so award cards entering / exiting the visible window
           are NOT clipped sharply at the edges. Mobile breakpoint below
           removes the fade entirely on small screens so every card is
           visible end-to-end. */
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)",
      }}
    >
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
              /* No fixed min-height — let the aspect ratio collapse the card
                 on narrow screens so the image never has to be cropped to
                 fit. The fade-mask above + container height handle vertical
                 framing. */
              minHeight: 0,
              padding: "16px",
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
      
    </section>
  );
}