// import Link from "next/link";

// export default function DigitalSolutionsSection() {
//   let letterIndex = 0;

//   function renderLetters(text: string, className: string, baseDelay: number) {
//     return (
//       <span className={className} style={{ display: "inline-block" }}>
//         {text.split("").map((char, i) => {
//           const d = baseDelay + letterIndex * 0.025;
//           letterIndex++;
//           return (
//             <span
//               key={i}
//               className="fds-letter"
//               style={{
//                 display: "inline-block",
//                 whiteSpace: char === " " ? "pre" : "normal",
//                 animationDelay: `${d}s`,
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </span>
//           );
//         })}
//       </span>
//     );
//   }

//   return (
//     <section className="fds-section">
      
//       <div className="fds-container">

//         {/* ── Header ── */}
//         <div className="fds-header">
//           <p className="fds-label fds-fade-up">
//             <span className="fds-label-dot" aria-hidden="true">•</span>
//             {" "}SERVICES
//           </p>

//           <h2 className="fds-title">
//             {renderLetters("Our Software ", "fds-title-line1", 0)}
//             {renderLetters("Development", "fds-title-cyan", 0.2)}
//             <br />
//             {renderLetters("& IT Services", "fds-title-cyan", 0.5)}
//             <span className="fds-bulb" aria-hidden="true">
//               <span className="fds-bulb-inner"><img loading="lazy" decoding="async" src="/images/home/services/bulb.webp" alt="bulb" width={50} height={50} /></span>
//             </span>
//           </h2>

//           <p className="fds-subtitle fds-fade-up" style={{ animationDelay: "0.9s" }}>
//             ISO-Certified Enterprise IT company
//           </p>
//         </div>

//         {/* ── 3-column bento ── */}
//         <div className="fds-bento pt-5">

//           {/* COL A */}
//           <div className="fds-col">
//             <Link
//               href="/custom-software-development-company"
//               className="fds-card fds-card-1 fds-card-enter fds-card-hoverable"
//               style={{ flex: 0.9, minHeight: '200px', padding: 0, background: 'transparent', overflow: 'hidden', position: 'relative', animationDelay: '0.6s' }}
//             >
//               <img width={1248} height={920} loading="lazy" decoding="async"
//                 src="/images/home/services/web_development.webp"
//                 alt="Custom Software Development Services"
//                 style={{
//                   position: 'absolute', inset: 0,
//                   width: '100%', height: '100%',
//                   objectFit: 'cover', objectPosition: 'center top',
//                   display: 'block', zIndex: 1,
//                 }}
//               />
//               <div style={{
//                 position: 'absolute', top: 10, right: 10, zIndex: 3,
//                 width: 30, height: 30,
//                 background: '#fff', borderRadius: 8,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 color: '#0a0a1a',
//               }}>
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
//                   stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                   <line x1="18" y1="20" x2="18" y2="10" />
//                   <line x1="12" y1="20" x2="12" y2="4" />
//                   <line x1="6" y1="20" x2="6" y2="14" />
//                 </svg>
//               </div>
//               <div style={{
//                 position: 'absolute', bottom: 10, left: 10, right: 10, zIndex: 3,
//                 background: '#fff', borderRadius: 14,
//                 padding: '12px 14px 10px',
//               }}>
//                 <h3 className="fds-info-title">Custom Software<br />Development</h3>
//                 <p className="fds-info-desc">Build scalable, secure, and high-performance applications tailored to your business needs.</p>
//               </div>
//             </Link>

//             <Link
//               href="/mobile-app-development-company"
//               className="fds-card fds-card-lime fds-card-4 fds-card-enter fds-card-hoverable"
//               style={{ flex: 1, minHeight: '220px', position: 'relative', overflow: 'hidden', animationDelay: '0.75s' }}
//             >
//               <span className="fds-card-noise" aria-hidden="true" />
//               <h3 className="fds-ttl-navy">Mobile App<br />Development</h3>
//               <div className="fds-avatars">
//                 <span className="fds-av fds-av1"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/devicon_apple.webp" alt="Apple" /></span>
//                 <span className="fds-av fds-av2"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/ic_outline-android.webp" alt="Android" /></span>
//                 <span className="fds-av fds-av3"><img width={59} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/logos_flutter.webp" alt="Flutter" /></span>
//                 <span className="fds-av fds-av4"><img width={81} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/logos_react.webp" alt="React Native" /></span>
//               </div>
//               <ul className="fds-bullet-list fds-2col">
//                 <li>Android &amp; iOS apps</li>
//                 <li>Cross-platform apps</li>
//                 <li>Enterprise mobility solutions</li>
//               </ul>
//             </Link>

//             <Link
//               href="/saas-development-services"
//               className="fds-card fds-card-saas-bg fds-card-enter fds-card-hoverable"
//               style={{ flex: 1, minHeight: '220px', position: 'relative', overflow: 'hidden', animationDelay: '0.9s' }}
//             >
//               <h3 className="fds-ttl-dark">SaaS Product<br />Development</h3>
//               <div className="fds-avatars">
//                 <span className="fds-av fds-av1"><img width={84} height={84} loading="lazy" decoding="async" src="/images/home/services/saas/image-6869.webp" alt="SaaS Architecture" /></span>
//                 <span className="fds-av fds-av2"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/saas/image-6870.webp" alt="Multi-tenant Platform" /></span>
//                 <span className="fds-av fds-av3"><img width={63} height={63} loading="lazy" decoding="async" src="/images/home/services/saas/image-6871.webp" alt="Cloud Infrastructure" /></span>
//                 <span className="fds-av fds-av4"><img width={66} height={66} loading="lazy" decoding="async" src="/images/home/services/saas/image-6872.webp" alt="API Integration" /></span>
//               </div>
//               <ul className="fds-bullet-list fds-2col">
//                 <li>Multi-tenant SaaS platforms</li>
//                 <li>Subscription systems</li>
//                 <li>AI-powered SaaS tools</li>
//               </ul>
//             </Link>
//           </div>

//           {/* COL B */}
//           <div className="fds-col">
//             <Link
//               href="/web-development-company"
//               className="fds-card fds-card-web-dev-bg fds-card-2 fds-card-enter fds-card-hoverable"
//               style={{ flex: 0.7, position: 'relative', overflow: 'hidden', animationDelay: '0.65s' }}
//             >
//               <h3 className="fds-ttl-dark">Web Development<br />Services</h3>
//               <div className="fds-avatars">
//                 <span className="fds-av fds-av1"><img width={66} height={66} loading="lazy" decoding="async" src="/images/home/services/saas/image-6872.webp" alt="Web Technology" /></span>
//                 <span className="fds-av fds-av2"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/www.webp" alt="World Wide Web" /></span>
//                 <span className="fds-av fds-av3"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/ecommerce.webp" alt="E-commerce" /></span>
//                 <span className="fds-av fds-av4"><img width={84} height={84} loading="lazy" decoding="async" src="/images/home/services/saas/image-6869.webp" alt="Web Platform" /></span>
//               </div>
//               <ul className="fds-bullet-list fds-2col">
//                 <li>Business websites</li>
//                 <li>SaaS platforms</li>
//                 <li>Web applications</li>
//                 <li>E-commerce development</li>
//               </ul>
//             </Link>

//             <Link
//               href="/generative-ai-development-company"
//               className="fds-card fds-card-ai-bg fds-card-ai fds-card-5-v fds-card-enter fds-card-hoverable"
//               style={{ flex: 1.3, position: 'relative', overflow: 'hidden', animationDelay: '0.8s' }}
//             >
//               <div className="fds-ai-top-row">
//                 <h3 className="fds-ttl-dark" style={{ margin: 0 }}>AI Development<br />Company Services</h3>
//                 <div className="fds-ai-img-v">
//                   <img width={135} height={166} loading="lazy" decoding="async"
//                     src="/images/we_deliver_the_best_digital_solutions/generative_ai_solutions.svg"
//                     alt="Generative AI"
//                   />
//                 </div>
//               </div>
//               <div className="fds-avatars">
//                 <span className="fds-av fds-av1"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6873.webp" alt="Machine Learning" /></span>
//                 <span className="fds-av fds-av2"><img width={66} height={66} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6874.webp" alt="Neural Networks" /></span>
//                 <span className="fds-av fds-av3"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6876.webp" alt="AI Automation" /></span>
//                 <span className="fds-av fds-av4"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6878.webp" alt="Data Science" /></span>
//               </div>
//               <ul className="fds-bullet-list fds-2col">
//                 <li>Generative AI solutions</li>
//                 <li>AI-powered applications</li>
//                 <li>Automation tools</li>
//                 <li>Machine learning models</li>
//               </ul>
//             </Link>
//           </div>

//           {/* COL C */}
//           <div className="fds-col">
//             <Link
//               href="/it-solutions-company"
//               className="fds-card fds-card-cyan fds-card-3 fds-card-enter fds-card-hoverable"
//               style={{ flex: 2, position: 'relative', overflow: 'hidden', animationDelay: '0.7s' }}
//             >
//               <span className="fds-card-noise" aria-hidden="true" />
//               <span className="fds-card-orb fds-orb-cyan" aria-hidden="true" />
//               <h3 className="fds-ttl-white fds-ttl-xl">IT Solutions &amp;<br />Consulting</h3>
//               <ul className="fds-bullet-list fds-2col">
//                 <li>Digital transformation</li>
//                 <li>Cloud solutions</li>
//                 <li>System integration</li>
//                 <li>IT strategy consulting</li>
//               </ul>
//               <div className="fds-illus">
//                 <img width={310} height={177} loading="lazy" decoding="async"
//                   src="/images/we_deliver_the_best_digital_solutions/salesforce_development_consulting.svg"
//                   alt="IT Solutions"
//                 />
//               </div>
//             </Link>

//             <Link
//               href="/ecommerce-app-development-company"
//               className="fds-card fds-card-dark fds-card-6 fds-card-enter fds-card-hoverable"
//               style={{ flex: 1, position: 'relative', overflow: 'hidden', animationDelay: '0.85s' }}
//             >
//               <span className="fds-card-noise" aria-hidden="true" />
//               <h3 className="fds-ttl-white" style={{ position: 'relative', zIndex: 2 }}>E-commerce<br />Development</h3>
//               <ul className="fds-bullet-list" style={{ color: '#fff', position: 'relative', zIndex: 2 }}>
//                 <li>Custom eCommerce platforms</li>
//                 <li>Marketplace development</li>
//                 <li>Payment integrations</li>
//               </ul>
//               <div
//                 className="fds-ecommerce-img"
//                 style={{
//                   position: 'absolute',
//                   right: -10,
//                   bottom: -5,
//                   width: '140px',
//                   zIndex: 1,
//                   pointerEvents: 'none'
//                 }}
//               >
//                 <img width={624} height={675} loading="lazy" decoding="async"
//                   src="/images/home/services/ecommerce_bg.webp"
//                   alt="E-commerce Development Platform"
//                   style={{ width: '100%', height: 'auto', display: 'block' }}
//                 />
//               </div>
//             </Link>
//           </div>

//         </div>
//       </div>w
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";

export default function DigitalSolutionsSection() {
  let letterIndex = 0;

  function renderLetters(text: string, className: string, baseDelay: number) {
    return (
      <span className={className} style={{ display: "inline-block" }}>
        {text.split("").map((char, i) => {
          const d = baseDelay + letterIndex * 0.025;
          letterIndex++;
          return (
            <span
              key={i}
              className="fds-letter"
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal",
                animationDelay: `${d}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    );
  }

  const noFocusStyle: React.CSSProperties = {
    outline: "none",
    boxShadow: "none",
    WebkitTapHighlightColor: "transparent",
  };

  const preventFocus = (e: React.MouseEvent) => e.preventDefault();

  return (
    <section className="fds-section">
      
      <div className="fds-container">

        {/* ── Header ── */}
        <div className="fds-header">
          <p className="fds-label fds-fade-up">
            <span className="fds-label-dot" aria-hidden="true">•</span>
            {" "}SERVICES
          </p>

          <h2 className="fds-title">
            {renderLetters("Our Software ", "fds-title-line1", 0)}
            {renderLetters("Development", "fds-title-cyan", 0.2)}
            <br />
            {renderLetters("& IT Services", "fds-title-cyan", 0.5)}
            <span className="fds-bulb" aria-hidden="true">
              <span className="fds-bulb-inner"><img loading="lazy" decoding="async" src="/images/home/services/bulb.webp" alt="bulb" width={50} height={50} /></span>
            </span>
          </h2>

          <p className="fds-subtitle fds-fade-up" style={{ animationDelay: "0.9s" }}>
            ISO-Certified Enterprise IT Company
          </p>
        </div>

        {/* ── 3-column bento ── */}
        <div className="fds-bento pt-5">

          {/* COL A */}
          <div className="fds-col">
            <Link
              href="/custom-software-development-company"
              className="fds-card fds-card-1 fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 0.9, minHeight: '200px', padding: 0, background: 'transparent', overflow: 'hidden', position: 'relative', animationDelay: '0.6s', ...noFocusStyle }}
            >
              <Image
                fill
                src="/images/home/services/web_development.webp"
                alt="Custom Software Development Services"
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block', zIndex: 1,
                }}
              />
              <div style={{
                position: 'absolute', top: 10, right: 10, zIndex: 3,
                width: 30, height: 30,
                background: '#fff', borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#0a0a1a',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <div style={{
                position: 'absolute', bottom: 10, left: 10, right: 10, zIndex: 3,
                background: '#fff', borderRadius: 14,
                padding: '12px 14px 10px',
              }}>
                <h3 className="fds-info-title">Custom Software<br />Development</h3>
                <p className="fds-info-desc">Build scalable, secure, and high-performance applications tailored to your business needs.</p>
              </div>
            </Link>

            <Link
              href="/mobile-app-development-company"
              className="fds-card fds-card-lime fds-card-4 fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 1, minHeight: '220px', position: 'relative', overflow: 'hidden', animationDelay: '0.75s', ...noFocusStyle }}
            >
              <span className="fds-card-noise" aria-hidden="true" />
              <h3 className="fds-ttl-navy">Mobile App<br />Development</h3>
              <div className="fds-avatars">
                <span className="fds-av fds-av1"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/devicon_apple.webp" alt="Apple" /></span>
                <span className="fds-av fds-av2"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/ic_outline-android.webp" alt="Android" /></span>
                <span className="fds-av fds-av3"><img width={59} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/logos_flutter.webp" alt="Flutter" /></span>
                <span className="fds-av fds-av4"><img width={81} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/logos_react.webp" alt="React Native" /></span>
              </div>
              <ul className="fds-bullet-list fds-2col">
                <li>Android &amp; iOS apps</li>
                <li>Cross-platform apps</li>
                <li>Enterprise mobility solutions</li>
              </ul>
            </Link>

            <Link
              href="/saas-development-services"
              className="fds-card fds-card-saas-bg fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 1, minHeight: '220px', position: 'relative', overflow: 'hidden', animationDelay: '0.9s', ...noFocusStyle }}
            >
              <h3 className="fds-ttl-dark">SaaS Product<br />Development</h3>
              <div className="fds-avatars">
                <span className="fds-av fds-av1"><img width={84} height={84} loading="lazy" decoding="async" src="/images/home/services/saas/image-6869.webp" alt="SaaS Architecture" /></span>
                <span className="fds-av fds-av2"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/saas/image-6870.webp" alt="Multi-tenant Platform" /></span>
                <span className="fds-av fds-av3"><img width={63} height={63} loading="lazy" decoding="async" src="/images/home/services/saas/image-6871.webp" alt="Cloud Infrastructure" /></span>
                <span className="fds-av fds-av4"><img width={66} height={66} loading="lazy" decoding="async" src="/images/home/services/saas/image-6872.webp" alt="API Integration" /></span>
              </div>
              <ul className="fds-bullet-list fds-2col">
                <li>Multi-tenant SaaS platforms</li>
                <li>Subscription systems</li>
                <li>AI-powered SaaS tools</li>
              </ul>
            </Link>
          </div>

          {/* COL B */}
          <div className="fds-col">
            <Link
              href="/web-development-company"
              className="fds-card fds-card-web-dev-bg fds-card-2 fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 0.7, position: 'relative', overflow: 'hidden', animationDelay: '0.65s', ...noFocusStyle }}
            >
              <h3 className="fds-ttl-dark">Web Development<br />Services</h3>
              <div className="fds-avatars">
                <span className="fds-av fds-av1"><img width={66} height={66} loading="lazy" decoding="async" src="/images/home/services/saas/image-6872.webp" alt="Web Technology" /></span>
                <span className="fds-av fds-av2"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/www.webp" alt="World Wide Web" /></span>
                <span className="fds-av fds-av3"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/mobile/ecommerce.webp" alt="E-commerce" /></span>
                <span className="fds-av fds-av4"><img width={84} height={84} loading="lazy" decoding="async" src="/images/home/services/saas/image-6869.webp" alt="Web Platform" /></span>
              </div>
              <ul className="fds-bullet-list fds-2col">
                <li>Business websites</li>
                <li>SaaS platforms</li>
                <li>Web applications</li>
                <li>E-commerce development</li>
              </ul>
            </Link>

            <Link
              href="/generative-ai-development-company"
              className="fds-card fds-card-ai-bg fds-card-ai fds-card-5-v fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 1.3, position: 'relative', overflow: 'hidden', animationDelay: '0.8s', ...noFocusStyle }}
            >
              <div className="fds-ai-top-row">
                <h3 className="fds-ttl-dark" style={{ margin: 0 }}>AI Development<br />Company Services</h3>
                <div className="fds-ai-img-v">
                  <img width={135} height={166} loading="lazy" decoding="async"
                    src="/images/we_deliver_the_best_digital_solutions/generative_ai_solutions.svg"
                    alt="Generative AI"
                  />
                </div>
              </div>
              <div className="fds-avatars">
                <span className="fds-av fds-av1"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6873.webp" alt="Machine Learning" /></span>
                <span className="fds-av fds-av2"><img width={66} height={66} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6874.webp" alt="Neural Networks" /></span>
                <span className="fds-av fds-av3"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6876.webp" alt="AI Automation" /></span>
                <span className="fds-av fds-av4"><img width={72} height={72} loading="lazy" decoding="async" src="/images/home/services/ai_solutions/image-6878.webp" alt="Data Science" /></span>
              </div>
              <ul className="fds-bullet-list fds-2col">
                <li>Generative AI solutions</li>
                <li>AI-powered applications</li>
                <li>Automation tools</li>
                <li>Machine learning models</li>
              </ul>
            </Link>
          </div>

          {/* COL C */}
          <div className="fds-col">
            <Link
              href="/it-solutions-company"
              className="fds-card fds-card-cyan fds-card-3 fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 2, position: 'relative', overflow: 'hidden', animationDelay: '0.7s', ...noFocusStyle }}
            >
              <span className="fds-card-noise" aria-hidden="true" />
              <span className="fds-card-orb fds-orb-cyan" aria-hidden="true" />
              <h3 className="fds-ttl-white fds-ttl-xl">IT Solutions &amp;<br />Consulting</h3>
              <ul className="fds-bullet-list fds-2col">
                <li>Digital transformation</li>
                <li>Cloud solutions</li>
                <li>System integration</li>
                <li>IT strategy consulting</li>
              </ul>
              <div className="fds-illus">
                <img width={310} height={177} loading="lazy" decoding="async"
                  src="/images/we_deliver_the_best_digital_solutions/salesforce_development_consulting.svg"
                  alt="IT Solutions"
                />
              </div>
            </Link>

            <Link
              href="/ecommerce-app-development-company"
              className="fds-card fds-card-dark fds-card-6 fds-card-enter fds-card-hoverable"
              onMouseDown={preventFocus}
              style={{ flex: 1, position: 'relative', overflow: 'hidden', animationDelay: '0.85s', ...noFocusStyle }}
            >
              <span className="fds-card-noise" aria-hidden="true" />
              <h3 className="fds-ttl-white" style={{ position: 'relative', zIndex: 2 }}>E-commerce<br />Development</h3>
              <ul className="fds-bullet-list" style={{ color: '#fff', position: 'relative', zIndex: 2 }}>
                <li>Custom eCommerce platforms</li>
                <li>Marketplace development</li>
                <li>Payment integrations</li>
              </ul>
              <div
                className="fds-ecommerce-img"
                style={{
                  position: 'absolute',
                  right: -10,
                  bottom: -5,
                  width: '140px',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              >
                <img width={624} height={675} loading="lazy" decoding="async"
                  src="/images/home/services/ecommerce_bg.webp"
                  alt="E-commerce Development Platform"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
