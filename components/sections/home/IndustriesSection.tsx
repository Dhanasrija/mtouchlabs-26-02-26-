
import { BlurText } from "@/components/sections/home/ui/BlurText";
import { IndustriesPills } from "@/components/sections/home/ui/IndustriesPills";
import { minifyCss } from "@/lib/inline-css";

export default function IndustriesSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: minifyCss(`
        /* Mobile: drop absolute layout, show pills in a flex wrap */
        @media (max-width: 768px) {
          .ind-heading {
            margin: 0 0 32px !important;
            font-size: 28px !important;
            line-height: 1.3 !important;
            text-align: center;
          }
          .ind-eyebrow {
            justify-content: center;
            margin-bottom: 24px;
          }
        }
      `)}} />

      <section className="ind-section" style={{ overflow: "hidden" }}>
        <div className="ind-container">

          {/* Eyebrow */}
          <div className="ind-eyebrow">
            <BlurText text="• INDUSTRIES WE SERVE" />
          </div>

          {/* Heading */}
          <h2 className="ind-heading">
            <BlurText text="Industry" />
            <span className="ind-heading-highlight">
              <BlurText text="-Specific Expertise" delay={0.3} />
            </span>
            <BlurText text=" to" delay={0.6} />
            <br />
            <BlurText text="Drive Your Success" delay={0.9} />
          </h2>

          {/* Interactive Pills (Client Component) */}
          <IndustriesPills />

        </div>
      </section>
    </>
  );
}
