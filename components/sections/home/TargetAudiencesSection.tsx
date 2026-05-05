import Image from "next/image";
import { BlurText } from "@/components/sections/home/ui/BlurText";

/**
 * Inline helper to split text into individually animated characters.
 * Uses a mutable counter ref for cumulative delay across multiple SplitText calls.
 */
function SplitTextInline({
  text,
  counter,
  delayPerChar = 0.02,
}: {
  text: string;
  counter: { value: number };
  delayPerChar?: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => {
        const delay = counter.value * delayPerChar;
        counter.value++;
        return (
          <span
            key={i}
            className="wwww-char"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              animationDelay: `${delay}s`,
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}

export default function WhoWeWorkWithSection() {

  return (
    <>
      <style>{`
        @keyframes wwwwFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes wwwwCharReveal {
          from {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
          }
        }

        @keyframes wwwwCardSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wwww-container--animated {
          animation: wwwwFadeIn 0.5s ease-out both;
        }

        .wwww-char {
          opacity: 0;
          animation: wwwwCharReveal 0.4s ease-out both;
        }

        .wwww-card--animated {
          opacity: 0;
          animation: wwwwCardSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .wwww-container--animated,
          .wwww-char,
          .wwww-card--animated {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        .target-audiences-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #1A1A1A;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 22.4px;
          letter-spacing: 1.92px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .target-audiences-eyebrow-dot {
          width: 5px;
          height: 5px;
          background-color: #1A1A1A;
          border-radius: 50%;
        }

        .target-audiences-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          text-align: center;
          color: #1A1A1A;
          margin: 0 auto 16px;
          max-width: 900px;
        }

        @media (min-width: 1024px) {
          .target-audiences-title {
            font-size: 48px;
            letter-spacing: -2.88px;
            line-height: 57.6px;
          }
        }

        .target-audiences-title-highlight {
          color: #3E8CFB;
        }

        .target-audience-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 30px;
          line-height: 41.97px;
          letter-spacing: -0.96px;
          color: #1C1C1C;
          margin-bottom: 12px;
        }

        .target-audience-description {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          color: #3B3B3B;
          margin: 0;
        }
          .target-audiences-section {
  background-color: #F5F5F5;
}
      `}</style>

      <section className="target-audiences-section">
        <div className="target-audiences-header">
          <div className="target-audiences-eyebrow">
            {/* <span className="target-audiences-eyebrow-dot" /> */}
            <BlurText text="• EXPERTISE" delay={0.1} />
          </div>

          <h2 className="target-audiences-title" style={{ display: 'block' }}>
            <BlurText text="Who We" delay={0.3} />
            {" "}
            <BlurText text="Work With" delay={0.5} className="target-audiences-title-highlight" />
          </h2>
          <BlurText
            text="At mTouch Labs, we partner with startups, enterprises, and global brands across industries to create transformative digital solutions that inspire innovation and fuel business growth."
            delay={0.8}
            className="target-audiences-description"
          />
        </div>

        <div className="target-audiences-container">

          <div className="target-audience-card target-audience-card--top-left" data-aos="zoom-in">

            <div className="target-audience-image">
              <Image src="images/who_we_work_with/Enterprises & Corporations.png" alt="Enterprises & Corporations" width={100} height={100} />
            </div>

            <div className="target-audience-content">
              <h3 className="target-audience-title">Enterprises & <br />Corporations</h3>
              <p className="target-audience-description">needing secure, enterprise-grade IT infrastructure and digital platforms.</p>
            </div>
          </div>
          <div className="target-audience-card target-audience-card--top-right" data-aos="zoom-in-up">
            <div className="target-audience-content">
              <h3 className="target-audience-title">Startups & Scale-Ups</h3>
              <p className="target-audience-description">seeking high-quality software with enterprise-level engineering standards.
              </p>
            </div>
            <div className="target-audience-image">
              <Image src="images/who_we_work_with/Startups & Scale-Ups.png" alt="Startups & Scale-Ups" width={100} height={100} />
            </div>
          </div>

          <div className="target-audience-icon target-audience-logo_one" data-aos="zoom-in-down" style={{ height: "100%" }}>
            <Image src="images/who_we_work_with/center_logo.png" alt="mTouchLabs" className="target-audience-logo" width={100} height={100} />
          </div>

          <div className="target-audience-card target-audience-card--bottom-left" data-aos="zoom-in-left">
            <div className="target-audience-content">
              <h3 className="target-audience-title">Customer-Centric Brands</h3>
              <p className="target-audience-description">Brands looking to enhance customer experiences or modernize legacy systems for future scalability.</p>
            </div>
            <div className="target-audience-image">
              <Image src="images/who_we_work_with/Customer-Centric Brands.png" alt="Customer-Centric Brands" width={100} height={100} />
            </div>
          </div>
          <div className="target-audience-card target-audience-card--bottom-right" data-aos="zoom-in-right">

            <div className="target-audience-image">
              <Image src="images/who_we_work_with/Businesses Migrating to the Cloud.png"
                alt="Businesses Migrating to the Cloud" width={100} height={100} />
            </div>

            <div className="target-audience-content">
              <h3 className="target-audience-title">Businesses <br /> Migrating to the Cloud</h3>
              <p className="target-audience-description">Companies moving workloads to AWS, Azure, or GCP and seeking secure, scalable cloud architecture.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}