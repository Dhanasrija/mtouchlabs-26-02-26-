import Link from "next/link";

export default function HeroSection() {
  const line1 = "Software Development Company Delivering".split(" ");
  const line2 = "Scalable IT Solutions & AI Innovation".split(" ");
  const subtitle =
    "We help startups and enterprises build powerful digital products with custom software development, AI solutions, mobile apps, and web platforms.".split(" ");

  const h1WordDelay = (i: number) => `${0.3 + i * 0.04}s`;
  const subDelay = (i: number) => `${0.65 + i * 0.03}s`;

  return (
    <>
      <div>
        

        <section className="mtl-new-hero">
          <div className="hero-inner">

            <div className="mtl-new-hero-badge">
              <img
                src="/images/brand-logo/nasscom.svg"
                alt="Nasscom Award Winner 2026"
              />
            </div>

            <h1 className="mtl-new-hero-h1">
              <span>
                {line1.map((word, i) => (
                  <span key={i} className="hero-word" style={{ animationDelay: h1WordDelay(i) }}>
                    {word}
                  </span>
                ))}
              </span>
              <br />
              <span>
                {line2.map((word, i) => (
                  <span key={i} className="hero-word" style={{ animationDelay: h1WordDelay(line1.length + i) }}>
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            <p className="mtl-new-hero-sub">
              {subtitle.map((word, i) => (
                <span key={i} className="hero-sub-word" style={{ animationDelay: subDelay(i) }}>
                  {word}
                </span>
              ))}
            </p>

            <div className="hero-btn-anim">
              <Link href="/contact-us" className="mtl-new-hero-btn">
                Get Started →
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}