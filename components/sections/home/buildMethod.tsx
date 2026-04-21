import { BuildMethodSteps } from "@/components/sections/home/ui/BuildMethodSteps";
import { BuildMethodWrapper } from "@/components/sections/home/ui/BuildMethodWrapper";

const steps = [
  {
    label: "Requirement\nAnalysis",
    img: "/images/home/build_method/Group 1597881107 (1).png",
  },
  {
    label: "UI/UX Design",
    img: "/images/home/build_method/Group 1597881108 (1).png",
  },
  {
    label: "Development &\nIntegration",
    img: "/images/home/build_method/Group 1597881109 (1).png",
  },
  {
    label: "Testing & QA",
    img: "/images/home/build_method/Group 1597881110 (1).png",
  },
  {
    label: "Deployment",
    img: "/images/home/build_method/Group 1597881111 (2).png",
  },
  {
    label: "Support &\nScaling",
    img: "/images/home/build_method/Group 1597881112 (1).png",
  },
];

export default function BuildMethod() {
  return (
    <>
      <style>{`
        @keyframes bmTitleBlur {
          from { opacity: 0; filter: blur(8px); }
          to   { opacity: 1; filter: blur(0);   }
        }
        .bm-title-item {
          opacity: 0;
        }
        .bm-in-view .bm-title-item {
          animation: bmTitleBlur 0.5s ease-out both;
        }
      `}</style>
      <section
        style={{ background: "#F3F1FF", padding: "80px 24px", textAlign: "center", overflowX: "hidden" }}
      >
        <BuildMethodWrapper>
          <p className="bm-title-item" style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "1.92px",
            color: "#1A1A1A",
            textTransform: "uppercase",
            marginBottom: "16px",
            animationDelay: "0.1s",
          }}>
            • Build Method
          </p>

          <div style={{ marginBottom: "56px" }}>
            <span className="bm-title-item" style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: "1.2",
              letterSpacing: "-0.04em",
              color: "#0F141E",
              marginRight: "12px",
              display: "inline-block",
              animationDelay: "0.3s",
            }}>
              Our
            </span>
            <span className="bm-title-item" style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: "1.2",
              letterSpacing: "-0.04em",
              color: "#3E8CFB",
              marginRight: "12px",
              display: "inline-block",
              animationDelay: "0.5s",
            }}>
              Software Development
            </span>
            <span className="bm-title-item" style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: "1.2",
              letterSpacing: "-0.04em",
              color: "#0F141E",
              display: "inline-block",
              animationDelay: "0.7s",
            }}>
              Process
            </span>
          </div>

          <BuildMethodSteps steps={steps} />
        </BuildMethodWrapper>
      </section>
    </>
  );
}