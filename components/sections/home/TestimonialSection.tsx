const Stars = () => (
  <div className="testimonial-stars">
    <span className="star">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
  </div>
);

const testimonials = [
  {
    flag: "/images/testimonial/testimonial_ind.png",
    flagAlt: "India flag",
    text: "Have partnered with mTouch Labs for the development of the Sacchi application, and I'm pleased to share that the project went exceptionally well from start to finish.",
    name: "Pavan HK",
    role: "General Manager",
    logo: "/images/testimonial/testimonial_saachi.png",
    logoAlt: "Sacchi logo",
    aos: "zoom-out-right",
  },
  {
    flag: "/images/testimonial/testimonial_abudabhi.png",
    flagAlt: "UAE flag",
    text: "mTouch Labs transformed our parking operations with the Rahayel System. It's efficient, reliable, and perfectly suited to our needs. The team was professional and proactive.",
    name: "Kezad Groups",
    role: "CEO",
    logo: "/images/testimonial/testimonial_rahayel.png",
    logoAlt: "Rahayel logo",
    aos: "zoom-out",
  },
  {
    flag: "/images/testimonial/testimonial_ind.png",
    flagAlt: "India flag",
    text: "mTouch Labs made the Dr.Pick App development seamless. They understood our healthcare vision and delivered an intuitive, and patient-friendly platform with great commitment and timely execution.",
    name: "Dr.Vishnu",
    role: "Managing Director",
    logo: "/images/testimonial/drpick.png",
    logoAlt: "Dr Pick logo",
    aos: "zoom-out-left",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <p className="testimonial-label">TESTIMONIAL</p>
          <h2 className="testimonial-title" data-aos="fade-right">What people think about us</h2>
          <p className="testimonial-subtitle" data-aos="fade-left">
            Their professionalism and commitment to our success were evident throughout the entire process.
          </p>
        </div>

        <div className="testimonial-cards owl-carousel">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" data-aos={t.aos} key={i}>
              <div className="testimonial-flag">
                <img src={t.flag} alt={t.flagAlt} />
              </div>
              <div className="testimonial-content">
                <Stars />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-left">
                    <p className="author-name">{t.name}</p>
                    <p className="author-company">{t.role}</p>
                  </div>
                  <div className="author-logo">
                    <img src={t.logo} alt={t.logoAlt} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-stat">
          <span className="stat-number">1500+</span>
          <span className="stat-text">Successful Projects</span>
        </div>
      </div>
    </section>
  );
}
