// export default function WhyChooseSection() {
//   return (
//     <section className="About-section">
//       <div className="About-container">
//         {/* Left Side Content */}
//         <div className="left-content">
//           <div className="About-text">
//   <div className="section-tag-container">
//     <div className="section-tag">Why Choose mTouch Labs</div>
//   </div>

//   <h2>Your Trusted Enterprise Digital Solutions Partner</h2>

//   <p>
//     mTouch Labs is a leading software development company and IT solutions provider delivering innovative, scalable, and performance-driven digital products for startups, enterprises, and growing businesses.
//   </p>

//   <p>
//     We combine technology expertise, strategic thinking, and user-centric design to build solutions that accelerate digital transformation.
//   </p>

//   <p>
//     From custom software development to enterprise IT services, we help businesses streamline operations, enhance customer experiences, and drive measurable growth.
//   </p>

//   <p>
//     ISO Certified.
//   </p>
// </div>

//           {/* Cards Section */}
//           <div className="cards-section">
//             {/* Card 1: Specialized Expertise */}
//             <div className="card-container">
//               <div className="card-flip">
//                 <div className="card-front">
//                   <div className="card-graphic">
//                     <div className="circles-graphic">
//                       <div className="circle"></div>
//                       <div className="circle"></div>
//                       <div className="circle"></div>
//                     </div>
//                   </div>
//                   <div className="card-title">Specialized expertise in</div>
//                 </div>
//                 <div className="card-back">
//                   <div className="card-title">Our Specialized Expertise</div>
//                   <div className="card-content">
//                     <ul className="card-list">
//                       <li>Custom software &amp; SaaS development</li>
//                       <li>Salesforce consulting &amp; CRM solutions</li>
//                       <li>Cloud &amp; DevOps engineering</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 2: Business Empowerment */}
//             <div className="card-container">
//               <div className="card-flip">
//                 <div className="card-front">
//                   <div className="card-graphic">
//                     <div className="arrows-graphic">
//                       <div className="arrow"></div>
//                       <div className="arrow"></div>
//                       <div className="arrow"></div>
//                     </div>
//                   </div>
//                   <div className="card-title">Business empowerment through</div>
//                 </div>
//                 <div className="card-back">
//                   <div className="card-title">Business Empowerment</div>
//                   <div className="card-content">
//                     <ul className="card-list">
//                       <li>Enterprise digital transformation</li>
//                       <li>Scalable cloud-native architecture</li>
//                       <li>Agile &amp; DevOps-driven delivery</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Image with Stats */}
//         <div className="right-content">
//           <div className="stats-image-container">
//             <img src="/images/new_home/about.png" className="img-desktop" alt="About mTouch Labs" />
//             <img src="/images/new_home/count_about.png" className="img-mobile" alt="About mTouch Labs" />

//             <div className="stat-card card-success" data-target="14" data-suffix="+">
//               <div className="plus-icon">+</div>
//               <span className="stat-number">0+</span>
//               <span className="stat-label">Success Years</span>
//             </div>

//             <div className="stat-card card-apps" data-target="1500" data-suffix="+">
//               <div className="plus-icon">+</div>
//               <span className="stat-number">0+</span>
//               <span className="stat-label">Apps Developed</span>
//             </div>

//             <div className="stat-card card-support" data-target="24" data-suffix="/7">
//               <div className="plus-icon">+</div>
//               <span className="stat-number">0/7</span>
//               <span className="stat-label">Team Support</span>
//             </div>

//             <div className="stat-card card-satisfaction" data-target="100" data-suffix="%">
//               <div className="plus-icon">+</div>
//               <span className="stat-number">0%</span>
//               <span className="stat-label">Client satisfaction</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useRef } from 'react';

function useCountUp(ref: React.RefObject<HTMLElement>, target: number, suffix: string, duration = 2000) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix, duration]);
}

function CountNum({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref as React.RefObject<HTMLElement>, target, suffix);
  return <span ref={ref}>0{suffix}</span>;
}

const avatars = [
  { initials: 'JM', bg: '#2d6a4f' },
  { initials: 'SR', bg: '#b5451b' },
  { initials: 'AK', bg: '#1d4e89' },
  { initials: 'PL', bg: '#6b2d8b' },
];

export default function WhyChooseSection() {
  return (
    <section className="wcs-section">
      <div className="wcs-inner">

        {/* Label */}
        <div className="wcs-label-row">
          <span className="wcs-label-dot"></span>
          <span className="wcs-label-text">WHY CHOOSE MTOUCH LABS</span>
        </div>

        {/* Heading */}
        <h2 className="wcs-big-heading">
          Your Trusted Enterprise
          <br />
          <span className="wcs-big-heading-muted">Digital Solutions Partner</span>
        </h2>

        {/* Bento — exactly like aeline: 3 cols, blue spans 2 rows */}
        <div className="wcs-bento">

          {/* COL 1 — Blue tall card (spans 2 rows) */}
          <div className="wcs-card wcs-card--blue">
            <div className="wcs-card-top">
              <span className="wcs-card-brand">mTouch Labs</span>
              <span className="wcs-card-icon-btn">📊</span>
            </div>
            <div className="wcs-card-visual">
              <div className="wcs-visual-orb wcs-orb1"></div>
              <div className="wcs-visual-orb wcs-orb2"></div>
              <div className="wcs-visual-orb wcs-orb3"></div>
              <div className="wcs-visual-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                Growth Analytics
              </div>
              <div className="wcs-visual-grid">
                <div className="wcs-visual-bar" style={{ height: '40%' }}></div>
                <div className="wcs-visual-bar" style={{ height: '65%' }}></div>
                <div className="wcs-visual-bar" style={{ height: '50%' }}></div>
                <div className="wcs-visual-bar wcs-bar-bright" style={{ height: '90%' }}></div>
                <div className="wcs-visual-bar" style={{ height: '70%' }}></div>
                <div className="wcs-visual-bar" style={{ height: '80%' }}></div>
              </div>
            </div>
            <div className="wcs-card-bottom-white">
              <div className="wcs-card-big-num wcs-num-dark">
                <CountNum target={1500} suffix="+" />
              </div>
<div className="wcs-card-sub wcs-sub-dark">
  NASSCOM Award Winner • ISO Certified • Apps &amp; Platforms Shipped Globally
</div>            </div>
          </div>

          {/* COL 2 — Commitment (full height, spans 2 rows) */}
          <div className="wcs-card wcs-card--light wcs-card--mid">
            <div className="wcs-card-label">Commitment to excellence</div>
            <div className="wcs-card-big-num wcs-num-dark">
              <CountNum target={100} suffix="%" />
            </div>
            <div className="wcs-card-avatars">
              {avatars.map((a) => (
                <div key={a.initials} className="wcs-avatar" style={{ background: a.bg }}>
                  <span className="wcs-avatar-init">{a.initials}</span>
                </div>
              ))}
              <div className="wcs-avatar wcs-avatar-more">
                <span className="wcs-avatar-init" style={{ color: '#555' }}>+12</span>
              </div>
            </div>
            <p className="wcs-card-quote">&ldquo;mTouch Labs is a leading software development company and IT solutions provider delivering innovative, scalable, and performance-driven digital products for startups, enterprises, and growing businesses.&rdquo;</p>
          </div>

          {/* COL 3 TOP — Years of Experience (yellow) */}
          <div className="wcs-card wcs-card--yellow">
            <div className="wcs-card-label wcs-sub-dark">Years of Experience</div>
            <div className="wcs-card-big-num wcs-num-dark">
              <CountNum target={14} suffix="+" />
            </div>
            <div className="wcs-card-sub wcs-sub-dark">We combine technology expertise, strategic thinking, and user-centric design to build solutions that accelerate digital transformation.

From custom software development to enterprise IT services, we help businesses streamline operations, enhance customer experiences, and drive measurable growth.</div>
          </div>

          {/* COL 3 BOTTOM — Countries (dark pill) */}
          <div className="wcs-card wcs-card--dark">
            <span className="wcs-card-label wcs-label-light">Global Reach</span>
            <div className="wcs-card-inline">
              <span className="wcs-card-inline-label">Countries served</span>
              <span className="wcs-card-big-num wcs-num-white">
                <CountNum target={20} suffix="+" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}