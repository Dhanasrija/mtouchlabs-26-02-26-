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
//               <img
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
      <span key={i}>
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
      </span>
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
      ` }} />

      <section className="mtl-new-hero">
        <div className="hero-inner">
          <div className="mtl-new-hero-badge">
            <img
              src="/images/brand-logo/nasscom.svg"
              alt="NASSCOM Award Winner 2026"
            />
          </div>

          <h1 className="mtl-new-hero-h1">
            <span>{renderWords(line1, 0)}</span>
            <br />
            <span>{renderWords(line2, line1.length)}</span>
          </h1>

          <p className="mtl-new-hero-sub">
            {subtitle.map((word, i) => (
              <span key={i}>
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
              </span>
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


