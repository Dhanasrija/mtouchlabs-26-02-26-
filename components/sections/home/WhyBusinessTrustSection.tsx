// export default function WhyBusinessTrustSection() {
//   return (
//     <div className="Why-business-trust-us">
//       <h2>Why Businesses Trust Us</h2>
//       <div className="why-trust-us-sub">
//         <div className="why-trust-us-left">
//           <div className="why-trust-us_icon_sub" data-aos="fade-right">
//             <img src="/images/new_home/icon1.png" alt="icon" />
//             <div>
//               <h3>ISO-Certified &amp; Compliance Ready</h3>
//               <p>Meeting global quality and security standards.</p>
//             </div>
//           </div>
//           <div className="why-trust-us_icon_sub" data-aos="fade-right">
//             <img src="/images/new_home/icno2.png" alt="icon" />
//             <div>
//               <h3>Secure, Scalable Architecture</h3>
//               <p>Built for long-term enterprise growth.</p>
//             </div>
//           </div>
//           <div className="why-trust-us_icon_sub" data-aos="fade-right">
//             <img src="/images/new_home/icon3.png" alt="icon" />
//             <div>
//               <h3>High Performance &amp; Reliability</h3>
//               <p>Delivering uptime, speed, and seamless user experiences.</p>
//             </div>
//           </div>
//           <div className="why-trust-us_icon_sub" data-aos="fade-right">
//             <img src="/images/new_home/icon4.png" alt="icon" />
//             <div>
//               <h3>End-to-End Digital Partner</h3>
//               <p>Meeting global quality and security standards.</p>
//             </div>
//           </div>
//         </div>
//         <img data-aos="fade-up-left" src="/images/new_home/whyBusinessTrustUs.png" alt="why trust us" />
//       </div>
//     </div>
//   );
// }



// No hook needed — animations are handled entirely by CSS (animation-timeline: view())

const steps = [
  {
    number: 1,
    title: "ISO-Certified & Compliance Ready",
    description: "Meeting global quality and security standards across every project we deliver.",
  },
  {
    number: 2,
    title: "Secure, Scalable Architecture",
    description: "Built for long-term enterprise growth with robust and future-proof infrastructure.",
  },
  {
    number: 3,
    title: "High Performance & Reliability",
    description: "Delivering uptime, speed, and seamless user experiences at every touchpoint.",
  },
  {
    number: 4,
    title: "End-to-End Digital Partner",
    description: "From strategy to execution, we support your entire digital transformation journey.",
  },
];

export default function WhyBusinessTrustSection() {
  return (
    <section className="why-trust-section">
      <div className="why-trust-container">

        {/* Left */}
        <div className="why-trust-left reveal-left">
          <span className="why-trust-label reveal-scale">WHY CHOOSE US</span>
          <h2 className="why-trust-heading reveal-clip">Why Businesses Trust Us</h2>
          <div className="why-trust-ctas">
            <a href="/contact-us" className="why-trust-btn-primary reveal-fade-up">Let's Talk</a>
            <a href="/about-us"   className="why-trust-btn-outline reveal-fade-up">Learn More</a>
          </div>
        </div>

        {/* Right */}
        <div className="why-trust-right">
          {steps.map((step) => (
            <div key={step.number} className="why-trust-card reveal-right">
              <div className="why-trust-number reveal-pop">{step.number}</div>
              <div className="why-trust-card-content">
                <h3 className="why-trust-card-title">{step.title}</h3>
                <p className="why-trust-card-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}