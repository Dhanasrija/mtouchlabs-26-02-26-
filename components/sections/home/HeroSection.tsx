"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
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


