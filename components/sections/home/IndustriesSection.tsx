"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/

import { BlurText } from "@/components/sections/home/ui/BlurText";
import { IndustriesPills } from "@/components/sections/home/ui/IndustriesPills";

export default function IndustriesSection() {
  return (
    <>
      

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
