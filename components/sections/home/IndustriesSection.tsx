const industries = [
  { img: "realstate.png", label: "Real Estate", aos: "fade-up" },
  { img: "tours.png", label: "Tour & Travel", aos: "fade-down" },
  { img: "education.png", label: "Education", aos: "fade-up" },
  { img: "taxi.png", label: "Transport", aos: "fade-down" },
  { img: "retail.png", label: "e Commerce", aos: "fade-up" },
  { img: "media.png", label: "Game", aos: "fade-down" },
  { img: "sports.png", label: "Sports & Fitness", aos: "fade-up" },
  { img: "fintech.png", label: "Fintech", aos: "fade-down" },
  { img: "food.png", label: "Food and Grocery Delivery", aos: "fade-up" },
  { img: "hotel.png", label: "Hotel Booking Apps", aos: "fade-down" },
  { img: "goverment.png", label: "Government Apps", aos: "fade-up" },
  { img: "sector.png", label: "Manufacturing Sector", aos: "fade-down" },
  { img: "healthcare.png", label: "Health Care", aos: "fade-up" },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <h3 className="industries-title">Industries We Serve</h3>

      <div className="industries-carousel-container">
        <button className="industries-carousel-nav industries-carousel-prev" aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="industries-carousel-wrapper">
          <div className="industries-grid">
            {industries.map((item, i) => (
              <div className="industry-item" data-aos={item.aos} key={i}>
                <img src={`/images/home/${item.img}`} alt={item.label} />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="industries-carousel-nav industries-carousel-next" aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
