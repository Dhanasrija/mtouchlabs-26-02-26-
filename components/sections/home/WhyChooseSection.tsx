import Link from 'next/link';
import Image from 'next/image';
import { BlurText } from "@/components/sections/home/ui/BlurText";
import StatCounter from "./StatCounter";

function BlurRevealWords({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="wcs-blur-word"
          style={{ animationDelay: `${baseDelay + i * 0.07}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="wcs2-section">
      
      <div className="wcs2-container">

        <div className="wcs2-grid">

          {/* LEFT CONTENT */}
          <div>
            <div className="wcs2-badge wcs-badge-anim">
              • WHY mTouch Labs
            </div>

            <h2 className="wcs2-heading">
              <BlurText text="Your Trusted" delay={0.8} />
              {" "}
              <BlurText text="Enterprise" delay={0.8} style={{ color: "#3E8CFB" }} />
              {" "}
              <br />
              <BlurText text="Digital Solutions Partner" delay={0.8} />
            </h2>

            <p className="wcs2-desc">
              <BlurText
                text="mTouch Labs delivers scalable, high-performance digital solutions for startups and enterprises, combining technology, strategy, and user-centric design to drive growth. ISO-certified."
                delay={1.4}
              />
            </p>

            <div className="wcs-btn-anim">
              <Link href="/contact-us" className="wcs2-btn">
                Get Started
                <span className="wcs2-btn-circle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="wcs2-image-wrap wcs-image-anim">
            <Image
              src="/images/home/TrustImage.png"
              alt="mTouch Labs"
              fill
              className="wcs2-image active"
            />
          </div>

        </div>

        {/* STATS */}
        <div className="wcs2-stats wcs-stats-anim">
          <StatCounter value="1500+" label="Apps Developed" />
          <div className="wcs2-divider" />
          <StatCounter value="100%" label="Commitment to Excellence" />
          <div className="wcs2-divider" />
          <StatCounter value="20+" label="Global Reach" />
          <div className="wcs2-divider" />
          <StatCounter value="14+" label="Years of Experience" />
        </div>

      </div>
    </section>
  );
}