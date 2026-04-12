// const sections = [
//   {
//     title: "Amazon Web Services",
//     text: "Scale your business effortlessly and accelerate innovation with intelligent cloud solutions from Amazon Web Services, designed to empower organizations with agility, reliability, and cutting-edge technology.",
//     link: "amazon-web-services-company",
//     image: "/images/about/endpoints.png",
//     imageAlt: "Custom Web & Mobile Applications",
//     imageClass: "whatmakes-image1",
//     reverse: false,
//     aos: "fade-left",
//   },
//   {
//     title: "Advanced Cybersecurity & <br />Data Protection",
//     text: "Scale your business effortlessly and accelerate innovation with intelligent cloud solutions from Amazon Web Services, designed to empower organizations with agility, reliability, and cutting-edge technology.",
//     link: "cybersecurity-development-company",
//     image: "/images/new_home/cloud.png",
//     imageAlt: "AWS Cloud & Infrastructure Management",
//     imageClass: "whatmakes-image",
//     reverse: true,
//     aos: "fade-right",
//   },
//   {
//     title: "Enterprise UI/UX Design",
//     text: "User-centric, accessible, and performance-driven designs that enhance engagement and deliver frictionless enterprise experiences.",
//     link: "ui-ux-design-company",
//     image: "/images/new_home/enterprise.png",
//     imageAlt: "Enterprise UI/UX Design",
//     imageClass: "whatmakes-image1 ux-entripse",
//     reverse: false,
//     aos: "fade-left",
//   },
//   {
//     title: "Application Security & <br /> Optimization (ASO)",
//     text: "Enterprise-grade security audits, performance optimization, and app store strategies to keep your applications safe and discoverable.",
//     link: "app-store-optimization-services-company",
//     image: "/images/new_home/Aso.png",
//     imageAlt: "Application Security & Optimization",
//     imageClass: "whatmakes-image",
//     reverse: true,
//     aos: "fade-right",
//   },
//   {
//     title: "Data Science & <br /> AI-Driven Insights",
//     text: "Unlock the power of your data with intelligent analytics and machine learning solutions. We leverage advanced data science techniques to uncover trends, optimize operations, and empower smarter, data-driven decision-making for sustainable business growth",
//     link: "empowering-businesses-with-data-science",
//     image: "/images/new_home/digitalmarkting.png",
//     imageAlt: "Digital Marketing & Growth Solutions",
//     imageClass: "whatmakes-image",
//     reverse: false,
//     aos: "fade-left",
//   },
// ];

// export default function WhatMakesDifferentSection() {
//   return (
//     <div className="whatmakes-bg">
//       <section className="whatmakes-wrapper">
//         <h3 className="whatmakes-wrapper-h3">What Makes Us Different</h3>

//         {sections.map((item, i) => (
//           <div className={`whatmakes-row${item.reverse ? " reverse" : ""}`} key={i}>
//             <div className="whatmakes-text" data-aos="zoom-in">
//               <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
//               <p className="whatmakes-desc">
//                 {item.text}
//                 <br />
//                 <br />
//                 <a
//                   href={`/${item.link}`}
//                   target="_blank"
//                   className="whatmakes-explore-link"
//                 >
//                   Explore
//                 </a>
//               </p>
//             </div>
//             <div className={item.imageClass} data-aos={item.aos}>
//               <img src={item.image} alt={item.imageAlt} />
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }




const cards = [
  {
    num: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Product-First Engineering Approach",
    description:
      "We don't just write code — we engineer digital products aligned with business objectives. Every solution is designed with scalability, performance, and long-term growth in mind.",
  },
  {
    num: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Enterprise-Grade Architecture from Day One",
    description:
      "As a global software development company, we build secure, scalable systems using modern cloud-native architecture and DevOps practices to support enterprise growth.",
  },
  {
    num: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "End-to-End Ownership",
    description:
      "From discovery and architecture design to development, integration, deployment, and optimization — we take full lifecycle responsibility for your product.",
  },
  {
    num: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Dedicated Global Delivery Model",
    description:
      "We provide flexible engagement models including dedicated development teams and long-term strategic partnerships for international clients.",
  },
  {
    num: "05",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <line x1="12" y1="8" x2="5" y2="16" />
        <line x1="12" y1="8" x2="19" y2="16" />
      </svg>
    ),
    title: "Multi-Domain Expertise Under One Roof",
    description:
      "SaaS development, enterprise software, Salesforce consulting, cloud engineering, DevOps automation — all integrated seamlessly for faster execution and better outcomes.",
  },
  {
    num: "06",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Business Impact Over Feature Delivery",
    description:
      "We focus on measurable business value — improving operational efficiency, customer engagement, and revenue growth through technology.",
  },
];

export default function WhatMakesDifferentSection() {
  return (
    <section className="wm-apart-section">
      <div className="wm-apart-container">
        <h2 className="wm-apart-heading">
          What Sets <span className="wm-apart-highlight">mTouch Labs</span> Apart
        </h2>

        <div className="wm-apart-grid">
          {cards.map((card, i) => (
            <div className="wm-apart-card" key={i}>
              <div className="wm-apart-card-top">
                <div className="wm-apart-icon-box">{card.icon}</div>
                <span className="wm-apart-num">{card.num}</span>
              </div>
              <h3 className="wm-apart-card-title">{card.title}</h3>
              <p className="wm-apart-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}