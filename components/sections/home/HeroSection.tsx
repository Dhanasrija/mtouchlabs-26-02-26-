// import Link from "next/link";

// export default function HeroSection() {
//   const line1 = "Software Development Company Delivering".split(" ");
//   const line2 = "Scalable IT Solutions & AI Innovation".split(" ");
//   const subtitle =
//     "We help startups and enterprises build powerful digital products with custom software development, AI solutions, mobile apps, and web platforms.".split(" ");

//   const h1WordDelay = (i: number) => `${0.3 + i * 0.04}s`;
//   const subDelay = (i: number) => `${0.65 + i * 0.03}s`;

//   return (
//     <>
//       <div>
        

//         <section className="mtl-new-hero">
//           <div className="hero-inner">

//             <div className="mtl-new-hero-badge">
//               <img width={266} height={70}
//                 src="/images/brand-logo/nasscom.svg"
//                 alt="Nasscom Award Winner 2026"
//               />
//             </div>

//             <h1 className="mtl-new-hero-h1">
//               <span>
//                 {line1.map((word, i) => (
//                   <span key={i} className="hero-word" style={{ animationDelay: h1WordDelay(i), display: "inline-block", marginRight: "0.28em" }}>
//                     {word}
//                   </span>
//                 ))}
//               </span>
//               <br />
//               <span>
//                 {line2.map((word, i) => (
//                   <span key={i} className="hero-word" style={{ animationDelay: h1WordDelay(line1.length + i), display: "inline-block", marginRight: "0.28em" }}>
//                     {word}
//                   </span>
//                 ))}
//               </span>
//             </h1>

//             <p className="mtl-new-hero-sub">
//               {subtitle.map((word, i) => (
//                 <span key={i} className="hero-sub-word" style={{ animationDelay: subDelay(i), display: "inline-block", marginRight: "0.28em" }}>
//                   {word}
//                 </span>
//               ))}
//             </p>

//             <div className="hero-btn-anim">
//               <Link href="/contact-us" className="mtl-new-hero-btn">
//                 Get Started →
//               </Link>
//             </div>

//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

export default function HeroSection() {
  // Strictly two lines on the homepage hero.
  // Line 1: "Software Development Company Delivering"
  // Line 2: "Scalable IT Solutions & AI Innovation"
  const line1 = "Software Development Company Delivering".split(" ");
  const line2 = "Scalable IT Solutions & AI Innovation".split(" ");

  const subtitle =
    "We help startups and enterprises build powerful digital products with custom software development, AI solutions, mobile apps, and web platforms.".split(
      " "
    );

  // Highlight only these 2 words in blue
  const highlightWords = ["Development", "AI"];

  const h1WordDelay = (i: number) => `${0.3 + i * 0.04}s`;
  const subDelay = (i: number) => `${0.65 + i * 0.03}s`;

  const renderWords = (words: string[], offset = 0) =>
    words.map((word, i) => (
      <Fragment key={i}>
        <span
          className={`hero-word ${
            highlightWords.includes(word.replace("&", "")) ? "highlight-word" : ""
          }`}
          style={{
            animationDelay: h1WordDelay(offset + i),
            display: "inline-block",
          }}
        >
          {word}
        </span>
        {i < words.length - 1 ? " " : ""}
      </Fragment>
    ));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .mtl-new-hero-h1 {
          color: #000000;
        }

        .highlight-word {
          color: var(--color-signature-blue);
          font-weight: 700;
        }

        .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background-color: #3E8CFB;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          padding: 10px 10px 10px 24px;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(62, 140, 251, 0.3);
          transition: transform 0.2s ease;
        }

        .hero-cta-btn:hover {
          transform: scale(1.04);
        }

        .hero-cta-btn:active {
          transform: scale(0.97);
        }

        .hero-cta-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #fff;
          color: #3E8CFB;
          font-size: 18px;
          line-height: 1;
          flex-shrink: 0;
        }

        /* ────────────────────────────────────────────────────────
           NASSCOM HERO BADGE — final, simplest possible setup.
           SIZING PRINCIPLE: width drives everything, height follows
           the IMG natural aspect ratio. NO aspect-ratio on the
           container, NO height:100% on the IMG, NO max-height
           anywhere. That combination is what was breaking it
           before — when the hero had limited vertical space (the
           "minimised" case), aspect-ratio + height:100% forced the
           IMG into a smaller-than-natural box and the content got
           clipped. Using height:auto on the IMG is mathematically
           incapable of cropping.

           SIZE RANGE: 180px on the smallest phones → 280px on huge
           desktops (around the PNG own intrinsic 266px width, so
           it stays crisp and never looks oversized).
           ────────────────────────────────────────────────────── */
        .nasscom-badge-wrap {
          display: block !important;
          width: 100% !important;
          /* Smooth fluid sizing — no breakpoint cliffs. */
          max-width: clamp(180px, 18vw + 60px, 280px) !important;
          /* Also guard the absolute width: it can never exceed
             the viewport with a comfortable side margin. */
          max-width: min(clamp(180px, 18vw + 60px, 280px), calc(100vw - 32px)) !important;
          height: auto !important;
          max-height: none !important;
          min-height: 0 !important;
          margin: 0 auto 14px !important;
          padding: 0 !important;
          overflow: visible !important;
          box-sizing: border-box !important;
          opacity: 1 !important;
          visibility: visible !important;
          position: relative;
          flex: 0 0 auto !important;
          flex-shrink: 0 !important;
        }
        .nasscom-badge-wrap img {
          display: block !important;
          /* Width drives the layout; height follows the PNG
             intrinsic 1064x280 ratio via height:auto. This is
             the simplest possible setup and CANNOT crop. */
          width: 100% !important;
          height: auto !important;
          max-width: 100% !important;
          max-height: none !important;
          min-width: 0 !important;
          min-height: 0 !important;
          object-fit: contain !important;
          object-position: center center !important;
          margin: 0 auto !important;
          padding: 0 !important;
          border: 0 !important;
        }

        /* ──────────────────────────────────────────────────────────
           LCP / FCP FIX — the hero <h1> is the Largest Contentful
           Paint element on the homepage. The shared .hero-word rule
           in style.css starts each word at opacity:0 and fades it in
           with a staggered animation-delay, which means the browser
           does NOT register the H1 as "painted" until the animation
           finishes (~1s+). That pushed LCP to ~4.7s. We keep a subtle
           slide-in but paint the text at FULL opacity from frame 0 so
           LCP fires immediately. Higher specificity + !important wins
           over the staggered animation and inline animation-delay.
           ────────────────────────────────────────────────────────── */
        .mtl-new-hero .mtl-new-hero-h1 .hero-word {
          opacity: 1 !important;
          filter: none !important;
          animation: heroWordLcpIn 0.4s ease-out both !important;
        }
        @keyframes heroWordLcpIn {
          from { transform: translateX(-8px); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mtl-new-hero .mtl-new-hero-h1 .hero-word {
            animation: none !important;
            transform: none !important;
          }
        }
      ` }} />

      {/* Preload the hero background (homepage LCP/FCP). Next.js hoists
          rel="preload" links into <head>, so this only loads on the home
          page and not site-wide. */}
      <link
        rel="preload"
        as="image"
        href="/images/home/hero_bg.webp"
        fetchPriority="high"
      />

      <section className="mtl-new-hero">
        <div className="hero-inner">
          {/* NASSCOM badge — uses BOTH the legacy class (so any
              external rule that targets it still finds the element)
              AND a new component-scoped class that owns the sizing.
              The inline `style` attribute is the final belt-and-
              braces guarantee — inline styles have the highest
              specificity short of !important, so even a broken
              external stylesheet cannot override these.
          */}
         <a
  href="https://nasscom.in/sme-inspire-awards/pdf/Compendium-2026-Digital-compressed.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View NASSCOM SME Inspire Awards 2026 Compendium PDF"
  className="mtl-new-hero-badge nasscom-badge-wrap"
  style={{
    width: "100%",
    maxWidth: "min(clamp(180px, 18vw + 60px, 280px), calc(100vw - 32px))",
    height: "auto",
    maxHeight: "none",
    margin: "0 auto 14px",
    padding: 0,
    overflow: "visible",
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
  }}
>
  <Image
    src="/images/brand-logo/nasscom-award-winner-2026.webp"
    alt="NASSCOM Award Winner 2026"
    width={1064}
    height={280}
    priority
    sizes="(max-width: 480px) 70vw, (max-width: 768px) 240px, 280px"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "none",
      objectFit: "contain",
      objectPosition: "center center",
      margin: "0 auto",
      padding: 0,
      border: 0,
    }}
  />
</a>

          <h1 className="mtl-new-hero-h1">
            <span>{renderWords(line1, 0)}</span>
            <br />
            <span>{renderWords(line2, line1.length)}</span>
          </h1>

          <p className="mtl-new-hero-sub">
            {subtitle.map((word, i) => (
              <Fragment key={i}>
                <span
                  className="hero-sub-word"
                  style={{
                    animationDelay: subDelay(i),
                    display: "inline-block",
                  }}
                >
                  {word}
                </span>
                {i < subtitle.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </p>

          <div className="hero-btn-anim">
            <Link
              href="/contact-us"
              prefetch={true}
              scroll={true}
              className="hero-cta-btn"
            >
              Get Started
              <span className="hero-cta-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


