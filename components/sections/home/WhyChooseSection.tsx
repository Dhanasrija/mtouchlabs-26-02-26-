// 'use client';

// import { useEffect, useRef } from 'react';

// function useCountUp(
//   ref: React.RefObject<HTMLElement>,
//   target: number,
//   suffix: string,
//   duration = 2000
// ) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         observer.disconnect();
//         let start = 0;
//         const step = 16;
//         const increment = target / (duration / step);
//         const timer = setInterval(() => {
//           start += increment;
//           if (start >= target) { start = target; clearInterval(timer); }
//           el.textContent = Math.floor(start) + suffix;
//         }, step);
//       },
//       { threshold: 0.3 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [ref, target, suffix, duration]);
// }

// function CountNum({ target, suffix }: { target: number; suffix: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   useCountUp(ref as React.RefObject<HTMLElement>, target, suffix);
//   return <span ref={ref}>0{suffix}</span>;
// }

// export default function WhyChooseSection() {
//   return (
//     <section className="wcs-section">
//       <div className="wcs-inner">

//         {/* ── LEFT — Text ── */}
//         <div className="wcs-left">
//           <div className="wcs-label-row">
//             <span className="wcs-label-dot" />
//             <span className="wcs-label-text">WHY CHOOSE&nbsp; mTouch Labs</span>
//           </div>

//           <h2 className="wcs-heading">
//             Your Trusted<br />
//             <span className="wcs-heading-cyan">Enterprise</span> Digital<br />
//             Solutions Partner
//           </h2>

//           <p className="wcs-desc">
//             mTouch Labs delivers scalable, high-performance digital solutions
//             for startups and enterprises, combining technology, strategy, and
//             user-centric design to drive growth. ISO-certified.
//           </p>
//         </div>

//         {/* ── RIGHT — Bento ── */}
//         <div className="wcs-bento-outer">

//           {/* Top row: stat | photo | stat */}
//           <div className="wcs-bento-top">

//             {/* 15+ Success Years */}
//             <div className="wcs-stat-card">
//               <div className="wcs-stat-num">
//                 <CountNum target={15} suffix="+" />
//               </div>
//               <div className="wcs-stat-label">Success Years</div>
//             </div>

//             {/* Center — Photo + 24/7 badge */}
//             <div className="wcs-photo-card">
//               <img
//                 src="/images/banner/boy.webp"
//                 alt="mTouch Labs team"
//                 className="wcs-photo-img"
//               />
//               <div className="wcs-support-badge">
//                 <div className="wcs-support-icon">
//                   {/* Headset icon */}
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
//                     stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
//                     <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3
//                              a2 2 0 0 1 2-2h3z" />
//                     <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3
//                              a2 2 0 0 0-2-2H3z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="wcs-badge-num">24/7</div>
//                   <div className="wcs-badge-sub">Team Support</div>
//                 </div>
//               </div>
//             </div>

//             {/* 1500+ Apps Developed */}
//             <div className="wcs-stat-card">
//               <div className="wcs-stat-num">
//                 <CountNum target={1500} suffix="+" />
//               </div>
//               <div className="wcs-stat-label">Apps<br />Developed</div>
//             </div>

//           </div>

//           {/* Bottom row: 2 dark cards */}
//           <div className="wcs-bento-bottom">

//             <div className="wcs-dark-card">
//               <div className="wcs-dark-title">Our Expertise</div>
//               <div className="wcs-dark-desc">
//                 SaaS, Salesforce, cloud &amp; DevOps.
//               </div>
//             </div>

//             <div className="wcs-dark-card">
//               <div className="wcs-dark-title">Business<br />Empowerment</div>
//               <div className="wcs-dark-desc">
//                 Digital transformation, scalable cloud, agile DevOps.
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



'use client';

import { useEffect, useRef } from 'react';

function useCountUp(
  ref: React.RefObject<HTMLElement>,
  target: number,
  suffix: string,
  duration = 2000
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const step = 16;
        const increment = target / (duration / step);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) { start = target; clearInterval(timer); }
          el.textContent = Math.floor(start) + suffix;
        }, step);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix, duration]);
}

function CountNum({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref as React.RefObject<HTMLElement>, target, suffix);
  return <span ref={ref}>0{suffix}</span>;
}

export default function WhyChooseSection() {
  return (
    <section className="wcs-section">
      <div className="wcs-inner">

        {/* ── LEFT — Text ── */}
        <div className="wcs-left">
          <div className="wcs-label-row">
            <span className="wcs-label-dot" />
            <span className="wcs-label-text">WHY CHOOSE&nbsp; mTouch Labs</span>
          </div>

<h2 className="wcs-heading">
  Your Trusted<br />
  <span className="wcs-heading-cyan line-2">Enterprise Digital</span><br />
  <span className="line-3">Solutions Partner</span>
</h2>
          <p className="wcs-desc">
            mTouch Labs delivers scalable, high-performance digital solutions
            for startups and enterprises, combining technology, strategy, and
            user-centric design to drive growth. ISO-certified.
          </p>
        </div>

        {/* ── RIGHT — Bento ── */}
        <div className="wcs-bento-outer">

          {/* Top row: stat | photo | stat */}
          <div className="wcs-bento-top">

            {/* 15+ Success Years */}
            <div className="wcs-stat-card">
              <div className="wcs-stat-num">
                <CountNum target={15} suffix="+" />
              </div>
              <div className="wcs-stat-label">Success Years</div>
            </div>

            {/* Center — Photo + 24/7 badge */}
            <div className="wcs-photo-card">
              <img
                src="/images/banner/boy.webp"
                alt="mTouch Labs team"
                className="wcs-photo-img"
              />
              <div className="wcs-support-badge">
                <div className="wcs-support-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div>
                  <div className="wcs-badge-num">24/7</div>
                  <div className="wcs-badge-sub">Team Support</div>
                </div>
              </div>
            </div>

            {/* 1500+ Apps Developed */}
            <div className="wcs-stat-card">
              <div className="wcs-stat-num">
                <CountNum target={1500} suffix="+" />
              </div>
              <div className="wcs-stat-label">Apps<br />Developed</div>
            </div>

          </div>

          {/* Bottom row: 2 dark cards */}
          <div className="wcs-bento-bottom">

            <div className="wcs-dark-card">
              <div className="wcs-dark-title">Our Expertise</div>
              <div className="wcs-dark-desc">
                SaaS, Salesforce, cloud &amp; DevOps.
              </div>
            </div>

            <div className="wcs-dark-card">
              <div className="wcs-dark-title">Business<br />Empowerment</div>
              <div className="wcs-dark-desc">
                Digital transformation, scalable cloud, agile DevOps.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
