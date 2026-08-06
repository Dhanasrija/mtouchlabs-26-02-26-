import Image from "next/image";
import { minifyCss } from "@/lib/inline-css";

const logos = [
  { src: "/images/home/tech/kezad-logo.webp", alt: "Kezad Group" },
  { src: "/images/home/tech/kohere.webp", alt: "Kohere" },
  { src: "/images/home/tech/aduri.webp", alt: "Aburi Group" },
  { src: "/images/home/tech/image1.webp", alt: "ADJD" },
  { src: "/images/home/tech/image3.webp", alt: "Government of Telangana" },
  { src: "/images/home/tech/zefsci.webp", alt: "ZetSci" },
  { src: "/images/home/tech/uptick.webp", alt: "UaTiK" },
  { src: "/images/home/tech/saachi.webp", alt: "Sacchi" },
  { src: "/images/home/tech/drpicklogo.webp", alt: "Dr.Pick" },
  { src: "/images/home/tech/image2.webp", alt: "ZuppiBuy" },
];

export default function DigitalProductSection() {
  const doubledLogos = [...logos, ...logos];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: minifyCss(`
        @keyframes dpFadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes dpFadeRight {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes dpMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .dp-logo-item {
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .dp-logo-item:hover {
          opacity: 1;
        }
        .dp-cta-btn {
          transition: transform 0.2s ease;
        }
        .dp-cta-btn:hover {
          transform: scale(1.04);
        }
        .dp-cta-btn:active {
          transform: scale(0.97);
        }
        @media (max-width: 768px) {
          .dp-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 0 16px !important;
          }
          .dp-section {
            padding: 50px 0 !important;
          }
          .dp-right {
            max-width: 100% !important;
            aspect-ratio: auto !important;
            max-height: none !important;
            width: 100% !important;
            height: auto !important;
          }
        }
      `)}} />
      <section className="dp-section" style={{ backgroundColor: "#FFFFFF", padding: "80px 0", overflow: "hidden" }}>
        <div className="dp-grid" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "48px",
        }}>

          {/* Left column */}
          <div
            className="dp-left"
            style={{
              overflow: "hidden",
              animation: "dpFadeLeft 0.7s ease-out both",
              animationDelay: "0.1s",
            }}
          >
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#111",
              margin: "0 0 20px",
            }}>
              Let&apos;s Build Your Next{" "}
              <span style={{ color: "#3E8CFB" }}>Digital Product</span>
            </h2>

            <p style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4b5563",
              margin: "0 0 32px",
              maxWidth: "480px",
            }}>
              Looking for a reliable software development company or AI
              development partner? Get in touch with mTouch Labs today and turn
              your ideas into scalable digital solutions.
            </p>

            <a
              href="/contact-us"
              className="dp-cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                backgroundColor: "#3E8CFB",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 600,
                padding: "10px 10px 10px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 12px 24px rgba(62, 140, 251, 0.3)",
              }}
            >
              Get Started
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                color: "#3E8CFB",
                fontSize: "18px",
                lineHeight: 1,
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>

            {/* Client logos marquee */}
            <div style={{
              marginTop: "60px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}>
              <div style={{
                display: "flex",
                width: "max-content",
                gap: "40px",
                alignItems: "center",
                padding: "10px 0",
                animation: "dpMarquee 35s linear infinite",
              }}>
                {doubledLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="dp-logo-item"
                    style={{
                      position: "relative",
                      width: "100px",
                      height: "45px",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — image */}
          <div
            className="dp-right"
            style={{
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              aspectRatio: "4/5",
              width: "100%",
              maxWidth: "520px",
              maxHeight: "650px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
              justifySelf: "center",
              animation: "dpFadeRight 0.8s ease-out both",
              animationDelay: "0.2s",
            }}
          >
            <Image
              src="/images/home/Digitalproduct_img.webp"
              alt="Two professionals collaborating on a tablet"
              fill
              style={{ objectFit: "contain", objectPosition: "center center" }}
              priority
            />
          </div>

        </div>
      </section>
    </>
  );
}