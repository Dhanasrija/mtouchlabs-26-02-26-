/* ─────────────────────────────────────────
   DigitalSolutionsSection — matches Figma
───────────────────────────────────────── */

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.523 15.341a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5.341a1 1 0 0 1-1 1zm-11.046 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5.341a1 1 0 0 1-1 1zM7.5 7h9a4.5 4.5 0 0 0-9 0zm-2 1v8.5A1.5 1.5 0 0 0 7 18h.5v2.5a1 1 0 0 0 2 0V18h5v2.5a1 1 0 0 0 2 0V18H17a1.5 1.5 0 0 0 1.5-1.5V8H5.5zm7.5-4.74a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.545l-4.049 4.049 4.049 4.05 4.049-4.05-4.049-4.049zM6.3 19.7L2.6 16l-2.3 2.3L6.3 24l4.049-4.049-3.7-3.7L6.3 19.7z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <circle cx="12" cy="12" r="2.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

export default function DigitalSolutionsSection() {
  return (
    <section className="fds-section">
      <div className="fds-container">

        {/* ── Header ── */}
        <div className="fds-header">
          <p className="fds-label">• SERVICES</p>
          <h2 className="fds-title">
            We Deliver the Best<br />
            <span className="fds-title-cyan">Digital Solutions</span>
            <span className="fds-bulb">
              <span>💡</span>
            </span>
          </h2>
          <p className="fds-subtitle">ISO-Certified Enterprise IT company</p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="fds-grid">

          {/* Card 1 — Custom Software (Blue + photo) */}
          <a href="/custom-software-development-company" className="fds-card fds-card-blue fds-card-photo">
            <div className="fds-card-topbar">
              <div className="fds-logo-badge">
                <img src="/images/Light.png" alt="mTouch Labs" />
                <span>mTouch Labs</span>
              </div>
              <div className="fds-chart-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
            </div>
            <div className="fds-photo-area">
              <img src="/images/we_deliver_the_best _digital_solutions/web_development.png" alt="Custom Software Development" />
            </div>
            <div className="fds-white-box">
              <h3 className="fds-white-box-title">Custom Software<br />Development</h3>
              <p className="fds-white-box-desc">Custom systems that simplify complex business operations</p>
            </div>
          </a>

          {/* Card 2 — SaaS Development (Light gray) */}
          <a href="/saas-development-services" className="fds-card fds-card-gray">
            <h3 className="fds-card-title-lg">SaaS<br />Development</h3>
            <div className="fds-avatars">
              <div className="fds-avatar fds-av1" />
              <div className="fds-avatar fds-av2" />
              <div className="fds-avatar fds-av3" />
              <div className="fds-avatar fds-av4" />
            </div>
            <p className="fds-card-desc">We develop cloud-native SaaS platforms built to scale.</p>
          </a>

          {/* Card 3 — Salesforce (Blue gradient + illustration) */}
          <a href="/salesforce-consulting-services-company" className="fds-card fds-card-blue-grad">
            <h3 className="fds-card-title-white fds-salesforce-title">Salesforce<br />Consulting &amp; CRM</h3>
            <p className="fds-card-desc-white">Enhancing CRM with Salesforce solutions and integrations.</p>
            <div className="fds-illustration">
              <img src="/images/we_deliver_the_best _digital_solutions/salesforce_development_consulting.png" alt="Salesforce CRM" />
            </div>
          </a>

          {/* Card 4 — Mobile App (Lime green) */}
          <a href="/mobile-app-development-company" className="fds-card fds-card-lime">
            <h3 className="fds-card-title-lime">Mobile App<br />Development</h3>
            <div className="fds-tech-icons">
              <div className="fds-tech-icon"><AppleIcon /></div>
              <div className="fds-tech-icon"><AndroidIcon /></div>
              <div className="fds-tech-icon"><FlutterIcon /></div>
              <div className="fds-tech-icon"><ReactIcon /></div>
            </div>
            <p className="fds-card-desc-lime">Custom high-performance mobile apps for iOS and Android.</p>
          </a>

          {/* Card 5 — Generative AI (White + AI image) */}
          <a href="/generative-ai-development-company" className="fds-card fds-card-white fds-card-ai">
            <div className="fds-ai-text">
              <h3 className="fds-card-title-lg">Generative AI<br />Solutions</h3>
              <div className="fds-avatars">
                <div className="fds-avatar fds-av1" />
                <div className="fds-avatar fds-av2" />
                <div className="fds-avatar fds-av3" />
                <div className="fds-avatar fds-av4" />
              </div>
              <p className="fds-card-desc">Automate tasks, create content, and engage users with intelligent AI solutions</p>
            </div>
            <div className="fds-ai-image">
              <img src="/images/we_deliver_the_best _digital_solutions/generative_ai_solutions.png" alt="Generative AI" />
            </div>
          </a>

          {/* Card 6 — Cloud & DevOps (Dark charcoal) */}
          <a href="/devops-services" className="fds-card fds-card-dark">
            <h3 className="fds-card-title-white">Cloud &amp; DevOps<br />Engineering</h3>
            <p className="fds-card-desc-white">Cloud-native infrastructure with CI/CD and automated deployments.</p>
          </a>

        </div>
      </div>
    </section>
  );
}




// /* ─────────────────────────────────────────
//    DigitalSolutionsSection — matches Figma
// ───────────────────────────────────────── */

// const AppleIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//   </svg>
// );

// const AndroidIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <path d="M17.523 15.341a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5.341a1 1 0 0 1-1 1zm-11.046 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5.341a1 1 0 0 1-1 1zM7.5 7h9a4.5 4.5 0 0 0-9 0zm-2 1v8.5A1.5 1.5 0 0 0 7 18h.5v2.5a1 1 0 0 0 2 0V18h5v2.5a1 1 0 0 0 2 0V18H17a1.5 1.5 0 0 0 1.5-1.5V8H5.5zm7.5-4.74a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
//   </svg>
// );

// const FlutterIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.545l-4.049 4.049 4.049 4.05 4.049-4.05-4.049-4.049zM6.3 19.7L2.6 16l-2.3 2.3L6.3 24l4.049-4.049-3.7-3.7L6.3 19.7z"/>
//   </svg>
// );

// const ReactIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <circle cx="12" cy="12" r="2.5"/>
//     <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//     <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
//     <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
//   </svg>
// );

// export default function DigitalSolutionsSection() {
//   return (
//     <section className="fds-section">
//       <div className="fds-container">

//         {/* ── Header ── */}
//         <div className="fds-header">
//           <p className="fds-label">• SERVICES</p>
//           <h2 className="fds-title">
//             We Deliver the Best<br />
//             <span className="fds-title-cyan">Digital Solutions</span>
//             <span className="fds-bulb">
//               <span>💡</span>
//             </span>
//           </h2>
//           <p className="fds-subtitle">ISO-Certified Enterprise IT company</p>
//         </div>

//         {/* ── Cards Grid ── */}
//         <div className="fds-grid">

//           {/* Card 1 — Custom Software (Blue + photo) */}
//           <a href="/custom-software-development-company" className="fds-card fds-card-blue fds-card-photo">
//             <div className="fds-card-topbar">
//               <div className="fds-logo-badge">
//                 <img src="/images/Light.png" alt="mTouch Labs" />
//                 <span>mTouch Labs</span>
//               </div>
//               <div className="fds-chart-icon">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                   <line x1="18" y1="20" x2="18" y2="10"/>
//                   <line x1="12" y1="20" x2="12" y2="4"/>
//                   <line x1="6" y1="20" x2="6" y2="14"/>
//                 </svg>
//               </div>
//             </div>
//             <div className="fds-photo-area">
//               <img src="/images/we_deliver_the_best _digital_solutions/web_development.png" alt="Custom Software Development" />
//             </div>
//             <div className="fds-white-box">
//               <h3 className="fds-white-box-title">Custom Software<br />Development</h3>
//               <p className="fds-white-box-desc">Custom systems that simplify complex business operations</p>
//             </div>
//           </a>

//           {/* Card 2 — SaaS Development (Light gray) */}
//           <a href="/saas-development-services" className="fds-card fds-card-gray">
//             <h3 className="fds-card-title-lg">SaaS<br />Development</h3>
//             <div className="fds-avatars">
//               <div className="fds-avatar fds-av1" />
//               <div className="fds-avatar fds-av2" />
//               <div className="fds-avatar fds-av3" />
//               <div className="fds-avatar fds-av4" />
//             </div>
//             <p className="fds-card-desc">We develop cloud-native SaaS platforms built to scale.</p>
//           </a>

//           {/* Card 3 — Salesforce (Blue gradient + illustration) */}
//           <a href="/salesforce-consulting-services-company" className="fds-card fds-card-blue-grad">
//             <h3 className="fds-card-title-white fds-salesforce-title">Salesforce<br />Consulting &amp; CRM</h3>
//             <p className="fds-card-desc-white">Enhancing CRM with Salesforce solutions and integrations.</p>
//             <div className="fds-illustration">
//               <img src="/images/we_deliver_the_best _digital_solutions/salesforce_development_consulting.png" alt="Salesforce CRM" />
//             </div>
//           </a>

//           {/* Card 4 — Mobile App (Lime green) */}
//           <a href="/mobile-app-development-company" className="fds-card fds-card-lime">
//             <h3 className="fds-card-title-lime">Mobile App<br />Development</h3>
//             <div className="fds-tech-icons">
//               <div className="fds-tech-icon"><AppleIcon /></div>
//               <div className="fds-tech-icon"><AndroidIcon /></div>
//               <div className="fds-tech-icon"><FlutterIcon /></div>
//               <div className="fds-tech-icon"><ReactIcon /></div>
//             </div>
//             <p className="fds-card-desc-lime">Custom high-performance mobile apps for iOS and Android.</p>
//           </a>

//           {/* Card 5 — Generative AI (White + AI image) */}
//           <a href="/generative-ai-development-company" className="fds-card fds-card-white fds-card-ai">
//             <div className="fds-ai-text">
//               <h3 className="fds-card-title-lg">Generative AI<br />Solutions</h3>
//               <div className="fds-avatars">
//                 <div className="fds-avatar fds-av1" />
//                 <div className="fds-avatar fds-av2" />
//                 <div className="fds-avatar fds-av3" />
//                 <div className="fds-avatar fds-av4" />
//               </div>
//               <p className="fds-card-desc">Automate tasks, create content, and engage users with intelligent AI solutions</p>
//             </div>
//             <div className="fds-ai-image">
//               <img src="/images/we_deliver_the_best _digital_solutions/generative_ai_solutions.png" alt="Generative AI" />
//             </div>
//           </a>

//           {/* Card 6 — Cloud & DevOps (Dark charcoal) */}
//           <a href="/devops-services" className="fds-card fds-card-dark">
//             <h3 className="fds-card-title-white">Cloud &amp; DevOps<br />Engineering</h3>
//             <p className="fds-card-desc-white">Cloud-native infrastructure with CI/CD and automated deployments.</p>
//           </a>

//         </div>
//       </div>
//     </section>
//   );
// }




/* ─────────────────────────────────────────
   DigitalSolutionsSection — matches Figma
───────────────────────────────────────── */

// const AppleIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//   </svg>
// );

// const AndroidIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <path d="M17.523 15.341a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5.341a1 1 0 0 1-1 1zm-11.046 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5.341a1 1 0 0 1-1 1zM7.5 7h9a4.5 4.5 0 0 0-9 0zm-2 1v8.5A1.5 1.5 0 0 0 7 18h.5v2.5a1 1 0 0 0 2 0V18h5v2.5a1 1 0 0 0 2 0V18H17a1.5 1.5 0 0 0 1.5-1.5V8H5.5zm7.5-4.74a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
//   </svg>
// );

// const FlutterIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.545l-4.049 4.049 4.049 4.05 4.049-4.05-4.049-4.049zM6.3 19.7L2.6 16l-2.3 2.3L6.3 24l4.049-4.049-3.7-3.7L6.3 19.7z"/>
//   </svg>
// );

// const ReactIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
//     <circle cx="12" cy="12" r="2.5"/>
//     <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//     <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
//     <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
//   </svg>
// );

// export default function DigitalSolutionsSection() {
//   return (
//     <section className="fds-section">
//       <div className="fds-container">

//         {/* ── Header ── */}
//         <div className="fds-header">
//           <p className="fds-label">• SERVICES</p>
//           <h2 className="fds-title">
//             We Deliver the Best<br />
//             <span className="fds-title-cyan">Digital Solutions</span>
//             <span className="fds-bulb"><span>💡</span></span>
//           </h2>
//           <p className="fds-subtitle">ISO-Certified Enterprise IT company</p>
//         </div>

//         {/* ── Cards Grid ── */}
//         <div className="fds-grid">

//           {/* ── Card 1: Custom Software — Blue + photo ── */}
//           <a href="/custom-software-development-company" className="fds-card fds-card-blue">
//             <div className="fds-card-topbar">
//               <div className="fds-logo-badge">
//                 <img src="/images/Light.png" alt="mTouch Labs" />
//                 <span>mTouch Labs</span>
//               </div>
//               <div className="fds-chart-icon">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                   <line x1="18" y1="20" x2="18" y2="10"/>
//                   <line x1="12" y1="20" x2="12" y2="4"/>
//                   <line x1="6" y1="20" x2="6" y2="14"/>
//                 </svg>
//               </div>
//             </div>
//             <div className="fds-photo-area">
//               <img src="/images/banner/boy.webp" alt="Custom Software Development" />
//             </div>
//             <div className="fds-white-box">
//               <h3 className="fds-white-box-title">Custom Software<br />Development</h3>
//               <p className="fds-white-box-desc">Custom systems that simplify complex business operations</p>
//             </div>
//           </a>

//           {/* ── Card 2: SaaS — Light gray ── */}
//           <a href="/saas-development-services" className="fds-card fds-card-gray">
//             <h3 className="fds-card-title-lg">SaaS<br />Development</h3>
//             <div className="fds-avatars">
//               <div className="fds-avatar fds-av1" />
//               <div className="fds-avatar fds-av2" />
//               <div className="fds-avatar fds-av3" />
//               <div className="fds-avatar fds-av4" />
//             </div>
//             <p className="fds-card-desc">We develop cloud-native SaaS platforms built to scale.</p>
//           </a>

//           {/* ── Card 3: Salesforce — Blue gradient + illustration ── */}
//           <a href="/salesforce-consulting-services-company" className="fds-card fds-card-blue-grad">
//             <h3 className="fds-card-title-white fds-salesforce-title">Salesforce<br />Consulting &amp; CRM</h3>
//             <p className="fds-card-desc-white">Enhancing CRM with Salesforce solutions and integrations.</p>
//             <div className="fds-illustration">
//               <img src="/images/we_deliver_the_best _digital_solutions/salesforce_development_consulting.png" alt="Salesforce CRM" />
//             </div>
//           </a>

//           {/* ── Card 4: Mobile App — Lime green ── */}
//           <a href="/mobile-app-development-company" className="fds-card fds-card-lime">
//             <h3 className="fds-card-title-lime">Mobile App<br />Development</h3>
//             <div className="fds-tech-icons">
//               <div className="fds-tech-icon"><AppleIcon /></div>
//               <div className="fds-tech-icon"><AndroidIcon /></div>
//               <div className="fds-tech-icon"><FlutterIcon /></div>
//               <div className="fds-tech-icon"><ReactIcon /></div>
//             </div>
//             <p className="fds-card-desc-lime">Custom high-performance mobile apps for iOS and Android.</p>
//           </a>

//           {/* ── Card 5: Generative AI — White + AI image ── */}
//           <a href="/generative-ai-development-company" className="fds-card fds-card-white fds-card-ai">
//             <div className="fds-ai-text">
//               <h3 className="fds-card-title-lg">Generative AI<br />Solutions</h3>
//               <div className="fds-avatars">
//                 <div className="fds-avatar fds-av1" />
//                 <div className="fds-avatar fds-av2" />
//                 <div className="fds-avatar fds-av3" />
//                 <div className="fds-avatar fds-av4" />
//               </div>
//               <p className="fds-card-desc">Automate tasks, create content, and engage users with intelligent AI solutions</p>
//             </div>
//             <div className="fds-ai-image">
//               <img src="/images/we_deliver_the_best _digital_solutions/generative_ai_solutions.png" alt="Generative AI" />
//             </div>
//           </a>

//           {/* ── Card 6: Cloud & DevOps — Dark charcoal ── */}
//           <a href="/devops-services" className="fds-card fds-card-dark">
//             <h3 className="fds-card-title-white">Cloud &amp; DevOps<br />Engineering</h3>
//             <p className="fds-card-desc-white">Cloud-native infrastructure with CI/CD and automated deployments.</p>
//           </a>

//         </div>
//       </div>
//     </section>
//   );
// }