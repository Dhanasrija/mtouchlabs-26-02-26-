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



import Image from "next/image";

const row1 = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Product-First Engineering Approach",
    description: "More than code — scalable products built for your business goals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Start strong. Scale without limits.",
    description: "We build secure, scalable cloud-native systems powered by DevOps.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "End-to-End Ownership",
    description: "From discovery to deployment, we handle your product's full lifecycle end-to-end.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
];

const row2 = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Dedicated Global Delivery Model",
    description: "We offer flexible models — dedicated teams and long-term partnerships for global clients.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <line x1="12" y1="8" x2="5" y2="16" />
        <line x1="12" y1="8" x2="19" y2="16" />
      </svg>
    ),
    title: "Multi-Domain Expertise Under One Roof",
    description: "Unified SaaS, cloud, and DevOps solutions for faster business outcomes.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Business Impact Over Feature Delivery",
    description: "We deliver measurable value — boosting efficiency, engagement, and revenue through technology.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

type CardData = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

function ApartCard({ card }: { card: CardData }) {
  return (
    <div className="wm-apart-card">

      {/* Image — inset with its own border-radius, slides in from right */}
      <div className="wm-apart-img-panel">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="280px"
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      {/* Content: icon top, text bottom */}
      <div className="wm-apart-card-content">
        <div className="wm-apart-icon-box">{card.icon}</div>
        <div className="wm-apart-card-text">
          <h3 className="wm-apart-card-title">{card.title}</h3>
          <p className="wm-apart-card-desc">{card.description}</p>
        </div>
      </div>

    </div>
  );
}

export default function WhatMakesDifferentSection() {
  return (
    <section className="wm-apart-section">
      <div className="wm-apart-container">

        <p className="wm-apart-eyebrow">
          <span className="wm-apart-dot" />
          INNOVATION. SCALABILITY. PERFORMANCE.
          <span className="wm-apart-dot" />
        </p>

        <h2 className="wm-apart-heading">
          What Sets <span className="wm-apart-highlight">mTouch Labs</span> Apart
        </h2>

        <p className="wm-apart-subheading">
          Whether you&apos;re optimizing today or building for tomorrow, we help you move
          faster with confidence.
        </p>

        <div className="wm-apart-grid">
          <div className="wm-apart-row">
            {row1.map((card, i) => (
              <ApartCard key={i} card={card} />
            ))}
          </div>
          <div className="wm-apart-row">
            {row2.map((card, i) => (
              <ApartCard key={i} card={card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}