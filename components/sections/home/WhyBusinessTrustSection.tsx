import Image from "next/image";
import { BlurText } from "@/components/sections/home/ui/BlurText";

const features = [
  {
    image: "/images/home/whybusineess/image5.png",
    title: "Proven expertise in software development & AI solutions",
  },
  {
    image: "/images/home/whybusineess/image8.png",
    title: "Trusted by startups, SMEs, and enterprises globally",
  },
  {
    image: "/images/home/whybusineess/image6.png",
    title: "Agile & scalable Development Approach",
  },
  {
    image: "/images/home/whybusineess/image7.png",
    title: "End-To-End IT Solutions Under One Roof",
  },
];

export default function WhyBusinessTrustSection() {
  return (
    <>
      <style>{`
        @keyframes wbtFadeUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to   { opacity: 1; transform: translateY(0);     filter: blur(0);    }
        }
        .wbt-section {
          padding: 80px 0;
          background-color: #F3F1FF;
        }
        .wbt-inner {
          max-width: 1210px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }
        .wbt-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .wbt-eyebrow {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 1.5px;
          color: #71717A;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .wbt-eyebrow-dot {
          width: 4px;
          height: 4px;
          background-color: #71717A;
          border-radius: 50%;
        }
        .wbt-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 1.1;
          letter-spacing: -2px;
          color: #1A1A1A;
          margin-bottom: 24px;
        }
        .wbt-heading-blue {
          color: #3E8CFB;
        }
        .wbt-desc {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #71717A;
          max-width: 700px;
          margin: 0 auto;
        }
        .wbt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 24px;
          margin-top: -50px;
        }
        .wbt-card {
          display: flex;
          align-items: center;
          gap: 24px;
          background: #FFFFFF;
          border-radius: 24px;
          padding: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.02);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .wbt-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          border-color: #3E8CFB33;
        }
        .wbt-card-image img {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wbt-card:hover .wbt-card-image img {
          transform: scale(1.1);
        }
        .wbt-card-image {
          width: 230px;
          height: 200px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .wbt-card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 34px;
          color: #000000;
          letter-spacing: 0;
        }

        @media (max-width: 1024px) {
          .wbt-heading { font-size: 38px; letter-spacing: -1px; }
          .wbt-card-image { width: 160px; height: 120px; }
        }
        @media (max-width: 768px) {
          .wbt-grid { grid-template-columns: 1fr; gap: 20px; }
          .wbt-heading { font-size: 28px; }
          .wbt-card { flex-direction: column; align-items: flex-start; padding: 16px; min-height: auto; }
          .wbt-card-image { width: 100%; height: 180px; }
          .wbt-card-title { font-size: 16px; }
        }
      `}</style>
      <section className="wm-apart-section">
        <div className="wbt-inner">
          <div className="wbt-header">
            <BlurText
              text="• RELIABILITY. EXPERTISE. RESULTS."
              delay={0.05}
              className="wbt-eyebrow"
            />

            <h2 className="wbt-heading">
              <BlurText text="Why Businesses Choose" delay={0.1} />
              <br />
              <BlurText text="mTouch Labs" delay={0.2} className="wbt-heading-blue" />
            </h2>

            <BlurText
              text="Trusted by enterprises to architect scalable systems, modernize legacy"
              delay={0.3}
              className="wbt-desc"
            />
            <br />
            <BlurText
              text="stacks, and ship with enterprise-grade quality."
              delay={0.35}
              className="wbt-desc"
            />
          </div>

          <div className="wbt-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className="wbt-card"
                style={{
                  animation: "wbtFadeUp 0.7s ease-out both",
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                <div className="wbt-card-image">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <BlurText
                  text={f.title}
                  delay={0.2 + i * 0.05}
                  className="wbt-card-title"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}