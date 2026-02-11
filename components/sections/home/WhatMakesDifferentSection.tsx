const sections = [
  {
    title: "Amazon Web Services",
    text: "Scale your business effortlessly and accelerate innovation with intelligent cloud solutions from Amazon Web Services, designed to empower organizations with agility, reliability, and cutting-edge technology.",
    link: "amazon-web-services-company",
    image: "/images/about/endpoints.png",
    imageAlt: "Custom Web & Mobile Applications",
    imageClass: "whatmakes-image1",
    reverse: false,
    aos: "fade-left",
  },
  {
    title: "Advanced Cybersecurity & <br />Data Protection",
    text: "Scale your business effortlessly and accelerate innovation with intelligent cloud solutions from Amazon Web Services, designed to empower organizations with agility, reliability, and cutting-edge technology.",
    link: "cybersecurity-development-company",
    image: "/images/new_home/cloud.png",
    imageAlt: "AWS Cloud & Infrastructure Management",
    imageClass: "whatmakes-image",
    reverse: true,
    aos: "fade-right",
  },
  {
    title: "Enterprise UI/UX Design",
    text: "User-centric, accessible, and performance-driven designs that enhance engagement and deliver frictionless enterprise experiences.",
    link: "ui-ux-design-company",
    image: "/images/new_home/enterprise.png",
    imageAlt: "Enterprise UI/UX Design",
    imageClass: "whatmakes-image1 ux-entripse",
    reverse: false,
    aos: "fade-left",
  },
  {
    title: "Application Security & <br /> Optimization (ASO)",
    text: "Enterprise-grade security audits, performance optimization, and app store strategies to keep your applications safe and discoverable.",
    link: "app-store-optimization-services-company",
    image: "/images/new_home/Aso.png",
    imageAlt: "Application Security & Optimization",
    imageClass: "whatmakes-image",
    reverse: true,
    aos: "fade-right",
  },
  {
    title: "Data Science & <br /> AI-Driven Insights",
    text: "Unlock the power of your data with intelligent analytics and machine learning solutions. We leverage advanced data science techniques to uncover trends, optimize operations, and empower smarter, data-driven decision-making for sustainable business growth",
    link: "empowering-businesses-with-data-science",
    image: "/images/new_home/digitalmarkting.png",
    imageAlt: "Digital Marketing & Growth Solutions",
    imageClass: "whatmakes-image",
    reverse: false,
    aos: "fade-left",
  },
];

export default function WhatMakesDifferentSection() {
  return (
    <div style={{ backgroundColor: "rgba(243, 246, 253, 1)" }}>
      <section className="whatmakes-wrapper">
        <h3 className="whatmakes-wrapper-h3">What Makes Us Different</h3>

        {sections.map((item, i) => (
          <div className={`whatmakes-row${item.reverse ? " reverse" : ""}`} key={i}>
            <div className="whatmakes-text" data-aos="zoom-in">
              <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
              <p style={{ color: "rgba(88, 89, 90, 1)" }}>
                {item.text}
                <br />
                <br />
                <a
                  href={item.link}
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                    color: "rgba(255, 90, 90, 1)",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  Explore
                </a>
              </p>
            </div>
            <div className={item.imageClass} data-aos={item.aos}>
              <img src={item.image} alt={item.imageAlt} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
