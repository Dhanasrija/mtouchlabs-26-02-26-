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
              <Image src="/images/who_we_work_with/Enterprises & Corporations.png" alt="Enterprises & Corporations" width={100} height={100} />
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
              <Image src="/images/who_we_work_with/Startups & Scale-Ups.png" alt="Startups & Scale-Ups" width={100} height={100} />
            </div>
          </div>

          <div className="target-audience-icon target-audience-logo_one" data-aos="zoom-in-down" style={{ height: "100%" }}>
            <Image src="/images/who_we_work_with/center_logo.png" alt="mTouchLabs" className="target-audience-logo" width={100} height={100} />
          </div>

          <div className="target-audience-card target-audience-card--bottom-left" data-aos="zoom-in-left">
            <div className="target-audience-content">
              <h3 className="target-audience-title">Customer-Centric Brands</h3>
              <p className="target-audience-description">Brands looking to enhance customer experiences or modernize legacy systems for future scalability.</p>
            </div>
            <div className="target-audience-image">
              <Image src="/images/who_we_work_with/Customer-Centric Brands.png" alt="Customer-Centric Brands" width={100} height={100} />
            </div>
          </div>
          <div className="target-audience-card target-audience-card--bottom-right" data-aos="zoom-in-right">

            <div className="target-audience-image">
              <Image src="/images/who_we_work_with/Businesses Migrating to the Cloud.png"
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