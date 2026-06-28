const services = [
  "Web Development",
  "Android App Development",
  "iOS App Development",
  "Flutter App Development",
  "UI/UX Designing",
  "on-demand app development",
  "Taxi Booking App",
  "E-Commerce App Development",
  "E-Learning App Development",
  "Healthcare App Development",
  "Telemedicine apps",
  "Home services app development",
  "Grocery delivery app development",
  "Food delivery app development",
  "HR management Apps",
  "Hotel Booking app development",
  "Real estate App development",
  "Sports and Fitness Apps",
  "CRM (Customer Relationship Management) Apps",
  "ERP (Enterprise Resource Planning) Apps",
  "Project management Apps",
  "Retail inventory management Apps",
  "Travel and Tourism App Development",
  "Retail App Development",
  "Logistics and Transportation App Development",
  "Entertainment and Media App Development",
  "Social Networking App Development",
  "Finance and Banking App Development",
  "AWS Cloud Computing",
  "Mobile App Development Hyderabad",
  "Bangalore",
  "Chennai",
  "USA",
  "UK",
  "Dubai",
  "Kuwait",
  "Australia",
  "Qatar",
];

export default function TopServicesSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}} />
      <section className="ts-section" style={{
        backgroundColor: "#fff",
        padding: "20px 0",
        borderTop: "1px solid #fff",
        borderBottom: "1px solid #fff",
      }}>
        <div className="ts-inner" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          animation: "tsFadeUp 0.6s ease-out both",
          animationDelay: "0.1s",
        }}>
          <span className="ts-label" style={{
            fontWeight: 700,
            fontSize: "14px",
            color: "#111",
            whiteSpace: "nowrap",
            paddingTop: "2px",
            minWidth: "fit-content",
          }}>
            Top Services:
          </span>

          <p style={{
            margin: 0,
            fontSize: "13px",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify",
          }}>
            {services.map((service, i) => (
              <span key={i}>
                <span style={{
                  display: "inline-block",
                  animation: "tsFadeUp 0.4s ease-out both",
                  animationDelay: `${0.1 + i * 0.02}s`,
                }}>
                  {service}
                </span>
                {i < services.length - 1 && (
                  <span style={{ color: "#555", margin: "0 6px" }}>|</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
