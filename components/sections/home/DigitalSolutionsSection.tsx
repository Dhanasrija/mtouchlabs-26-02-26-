// const ArrowSVG = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// export default function DigitalSolutionsSection() {
//   return (
//     <section className="digital-solutions-section">
//       <div className="digital-solutions-container">
//         {/* Header */}
//         <div className="digital-solutions-header">
//           <div className="digital-solutions-header-left">
//             <p className="digital-solutions-label">SERVICES</p>
//             <h2 className="digital-solutions-title">We Deliver the Best Digital Solutions</h2>
//           </div>
//           <div className="digital-solutions-header-right">
//             <p className="digital-solutions-subtitle">
//               mTouch Labs is an ISO-certified enterprise IT solutions company
//             </p>
//             <a href="/services" target="_blank" className="digital-solutions-view-btn">
//               View All
//               <span style={{ transform: "rotate(315deg)" }}>
//                 <i className="fa-solid fa-arrow-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* Service Cards Grid */}
//         <div className="digital-solutions-grid">
//           {/* Card 1: Web Development */}
//           <div className="ds-card ds-card-horizontal ds-grid-item-0" data-aos="fade-right" data-aos-offset="150">
//             <div className="ds-card-image-side">
//               <img src="/images/we_deliver_the_best _digital_solutions/web_development.png" alt="Web Development" />
//             </div>
//             <div className="ds-card-content-side">
//               <h3 className="ds-card-title">Web Development</h3>
//               <p className="ds-card-description">
//                 Automate tasks, create content, and engage users with AI-driven innovation.
//               </p>
//             </div>
//             <a href="/web-development-company" target="_blank" className="ds-card-arrow-btn" hrefLang="services">
//               <ArrowSVG />
//             </a>
//           </div>

//           {/* Card 2: Mobile app Development */}
//           <div className="ds-card ds-card-vertical-tall ds-grid-item-1" data-aos="fade-down" data-aos-offset="150">
//             <div className="ds-card-content-top">
//               <h3 className="ds-card-title">Mobile app Development</h3>
//               <p className="ds-card-description">Build custom ML models to boost accuracy and automate decisions.</p>
//             </div>
//             <img
//               src="/images/we_deliver_the_best _digital_solutions/mobile_app_development.png"
//               alt="Mobile app Development"
//             />
//             <a href="/mobile-app-development-company" target="_blank" className="ds-card-arrow-btn">
//               <ArrowSVG />
//             </a>
//           </div>

//           {/* Card 3: Digital Marketing Solutions */}
//           <div className="ds-card ds-card-horizontal ds-grid-item-2" data-aos="fade-left" data-aos-offset="150">
//             <div className="ds-card-image-side">
//               <img
//                 src="/images/we_deliver_the_best _digital_solutions/digital_marketing.png"
//                 alt="Digital Marketing Solutions"
//               />
//             </div>
//             <div className="ds-card-content-side">
//               <h3 className="ds-card-title">Digital Marketing Solutions</h3>
//               <p className="ds-card-description">
//                 Elevate your brand through SEO, social media, and data-led campaigns.
//               </p>
//             </div>
//             <a href="/digital-marketing-services" target="_blank" className="ds-card-arrow-btn">
//               <ArrowSVG />
//             </a>
//           </div>

//           {/* Card 4: Cloud Infrastructure Management */}
//           <div className="ds-card ds-card-vertical ds-grid-item-3">
//             <div className="ds-card-content-top">
//               <h3 className="ds-card-title">Cloud Infrastructure Management</h3>
//               <p className="ds-card-description">
//                 Optimize and scale your infrastructure with seamless cloud integration.
//               </p>
//             </div>
//             <img src="/images/cloud_infra.png" alt="Machine Learning Solutions" />
//             <a href="/aws-cloud-services" target="_blank" className="ds-card-arrow-btn">
//               <ArrowSVG />
//             </a>
//           </div>

//           {/* Card 5: Generative AI Solutions */}
//           <div className="ds-card ds-card-horizontal ds-grid-item-4">
//             <div className="ds-card-image-side">
//               <img
//                 src="/images/we_deliver_the_best _digital_solutions/generative_ai_solutions.png"
//                 alt="Generative AI Solutions"
//               />
//             </div>
//             <div className="ds-card-content-side">
//               <h3 className="ds-card-title">Generative AI Solutions</h3>
//               <p className="ds-card-description">
//                 Automate tasks, create content, and engage users with AI-driven innovation.
//               </p>
//             </div>
//             <a href="/generative-ai-development-company" target="_blank" className="ds-card-arrow-btn">
//               <ArrowSVG />
//             </a>
//           </div>

//           {/* Card 6: Salesforce Development & Consulting */}
//           <div className="ds-card ds-card-vertical ds-grid-item-5" data-aos="fade-up-right">
//             <div className="ds-card-content-top">
//               <h3 className="ds-card-title">Salesforce Development &amp; Consulting</h3>
//               <p className="ds-card-description">
//                 Streamline operations with tailored CRM apps and automation.
//               </p>
//             </div>
//             <img
//               src="/images/we_deliver_the_best _digital_solutions/salesforce_development_consulting.png"
//               alt="Salesforce Development"
//             />
//             <a href="/salesforce-consulting-services" target="_blank" className="ds-card-arrow-btn">
//               <ArrowSVG />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const ArrowSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function DigitalSolutionsSection() {
  return (
    <section className="digital-solutions-section">
      <div className="digital-solutions-container">
        {/* Header - Centered */}
        <div className="digital-solutions-header" style={{ textAlign: "center" }}>
          <p className="digital-solutions-label">SERVICES</p>
          <h2 className="digital-solutions-title">We Deliver the Best Digital Solutions</h2>
        </div>

        {/* Service Cards Grid */}
        <div className="digital-solutions-grid">
          {/* Card 1: Custom Software Development */}
          <div className="ds-card ds-card-horizontal ds-grid-item-0" data-aos="fade-right" data-aos-offset="150">
            <div className="ds-card-image-side">
              <img src="/images/we_deliver_the_best _digital_solutions/web_development.png" alt="Custom Software Development" />
            </div>
            <div className="ds-card-content-side">
              <h2 className="ds-card-title">Custom Software Development</h2>
              <p className="ds-card-description">
                We build tailored software systems designed to solve complex business challenges and improve operational efficiency.
              </p>
            </div>
            <a href="/custom-software-development-company" className="ds-card-arrow-btn" hrefLang="services">
              <ArrowSVG />
            </a>
          </div>

          {/* Card 2: SaaS Development */}
          <div className="ds-card ds-card-vertical-tall ds-grid-item-1" data-aos="fade-down" data-aos-offset="150">
            <div className="ds-card-content-top">
              <h2 className="ds-card-title">SaaS Development</h2>
              <p className="ds-card-description">
                We design and develop scalable SaaS platforms with multi-tenant architecture, subscription systems, and cloud-native infrastructure.
              </p>
            </div>
            <img
              src="/images/we_deliver_the_best _digital_solutions/mobile_app_development.png"
              alt="SaaS Development"
            />
            <a href="/saas-development-services" className="ds-card-arrow-btn">
              <ArrowSVG />
            </a>
          </div>

          {/* Card 3: Salesforce Consulting & CRM Solutions */}
          <div className="ds-card ds-card-horizontal ds-grid-item-2" data-aos="fade-left" data-aos-offset="150">
            <div className="ds-card-image-side">
              <img
                src="/images/we_deliver_the_best _digital_solutions/salesforce_development_consulting.png"
                alt="Salesforce Consulting & CRM Solutions"
              />
            </div>
            <div className="ds-card-content-side">
              <h2 className="ds-card-title">Salesforce Consulting &amp; CRM Solutions</h2>
              <p className="ds-card-description">
                We help organizations optimize customer relationship management with Salesforce implementation, customization, and CRM integrations.
              </p>
            </div>
            <a href="/salesforce-consulting-services-company" className="ds-card-arrow-btn">
              <ArrowSVG />
            </a>
          </div>

          {/* Card 4: Cloud & DevOps Engineering */}
          <div className="ds-card ds-card-vertical ds-grid-item-3">
            <div className="ds-card-content-top">
              <h2 className="ds-card-title">Cloud &amp; DevOps Engineering</h2>
              <p className="ds-card-description">
                We implement cloud-native environments, CI/CD pipelines, infrastructure automation, and scalable deployment solutions.
              </p>
            </div>
            <img src="/images/cloud_infra.png" alt="Cloud & DevOps Engineering" />
            <a href="/devops-services" className="ds-card-arrow-btn">
              <ArrowSVG />
            </a>
          </div>

          {/* Card 5: Generative AI Solutions */}
          <div className="ds-card ds-card-horizontal ds-grid-item-4">
            <div className="ds-card-image-side">
              <img
                src="/images/we_deliver_the_best _digital_solutions/generative_ai_solutions.png"
                alt="Generative AI Solutions"
              />
            </div>
            <div className="ds-card-content-side">
              <h2 className="ds-card-title">Generative AI Solutions</h2>
              <p className="ds-card-description">
                Automate tasks, create content, and engage users with AI-driven innovation and intelligent automation.
              </p>
            </div>
            <a href="/generative-ai-development-company" className="ds-card-arrow-btn">
              <ArrowSVG />
            </a>
          </div>

          {/* Card 6: Mobile App Development */}
          <div className="ds-card ds-card-vertical ds-grid-item-5" data-aos="fade-up-right">
            <div className="ds-card-content-top">
              <h2 className="ds-card-title">Mobile App Development</h2>
              <p className="ds-card-description">
                Build custom, high-performance mobile applications for iOS and Android with scalable architecture.
              </p>
            </div>
            <img
              src="/images/we_deliver_the_best _digital_solutions/mobile_app_development.png"
              alt="Mobile App Development"
            />
            <a href="/mobile-app-development-company" className="ds-card-arrow-btn">
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}