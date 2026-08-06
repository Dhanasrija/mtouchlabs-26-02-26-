"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
import Image from "next/image";
import { BlurText } from "@/components/sections/home/ui/BlurText";

const features = [
  {
    image: "/images/home/whybusineess/image5.webp",
    title: "Proven expertise in software development & AI solutions",
  },
  {
    image: "/images/home/whybusineess/image8.webp",
    title: "Trusted by startups, SMEs, and enterprises globally",
  },
  {
    image: "/images/home/whybusineess/image6.webp",
    title: "Agile & scalable Development Approach",
  },
  {
    image: "/images/home/whybusineess/image7.webp",
    title: "End-To-End IT Solutions Under One Roof",
  },
];

export default function WhyBusinessTrustSection() {
  return (
    <>
      
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