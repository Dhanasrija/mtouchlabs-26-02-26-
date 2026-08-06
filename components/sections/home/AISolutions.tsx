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

const cards = [
  {
    title: "Generative AI applications",
    desc: "AI-powered applications that generate content, automate workflows, and enhance user experiences.",
    img: "/images/home/aiSolutions/Rectangle 34624212.png",
    alt: "Generative AI applications",
  },
  {
    title: "AI chatbots & automation",
    desc: "AI-powered chatbots that automate workflows and deliver instant customer assistance.",
    img: "/images/home/aiSolutions/Rectangle 34624212 (1).png",
    alt: "AI chatbots and automation",
  },
  {
    title: "Predictive analytics solutions",
    desc: "AI-driven analytics that predict trends, optimize decisions, and improve business outcomes.",
    img: "/images/home/aiSolutions/Rectangle 34624212 (2).png",
    alt: "Predictive analytics solutions",
  },
  {
    title: "AI-powered business tools",
    desc: "Intelligent business solutions powered by AI to streamline workflows and decision-making.",
    img: "/images/home/aiSolutions/Rectangle 34624212 (3).png",
    alt: "AI-powered business tools",
  },
];

export default function AISolutionsSection() {
  return (
    <section className="ais-section">
      {/* Eyebrow */}
      <BlurText
        text="AI Solutions"
        delay={0.05}
        className="ais-badge"
      />

      {/* Heading */}
      <div className="ais-heading-container">
        <div className="ais-heading-row">
          <BlurText text="Leading" delay={0.1} className="ais-heading-text" />
          <BlurText
            text="AI Development"
            delay={0.15}
            className="ais-heading-text"
            style={{ color: "#3E8CFB" }}
          />
          <BlurText text="Company" delay={0.2} className="ais-heading-text" />
        </div>
        <BlurText
          text="for Next-Gen Solutions"
          delay={0.25}
          className="ais-heading-text"
        />
      </div>

      <BlurText
        text="At mTouch Labs, we build intelligent systems using cutting-edge AI technologies"
        delay={0.3}
        className="ais-subtext"
      />

      {/* Section Background Wrapper */}
      <div className="ais-wrapper">
        <div className="ais-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className="ais-card ais-card-enter"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image at Top */}
              <div className="ais-card-image-box">
                <div className="ais-card-image-zoom">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={600}
                    height={350}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* Title and Description Below Image */}
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: "block" }}>
                  <BlurText
                    text={card.title}
                    delay={0.1 + i * 0.08}
                    className="ais-card-title"
                  />
                </div>
                <div style={{ display: "block", marginTop: "8px" }}>
                  <BlurText
                    text={card.desc}
                    delay={0.15 + i * 0.08}
                    className="ais-card-desc"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped CSS animations */}
      
    </section>
  );
}