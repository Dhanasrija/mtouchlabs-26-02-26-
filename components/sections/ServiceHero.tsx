import Link from "next/link";
import { ReactNode } from "react";

/**
 * ServiceHero
 * --------------------------------------------------------------------
 * A reusable hero section for the homepage and every service /
 * "company" internal page.  Matches the visual treatment of the
 * /services page (itsc-* classes) — badge, gradient H1, sub-copy,
 * primary "Let's Discuss" + ghost "View Our Work" CTAs — but
 * intentionally OMITS the 4-card stats grid that lived on the
 * original /services hero.
 *
 * All styles are inlined so the component works on any page without
 * extra CSS imports.
 */

export interface ServiceHeroProps {
  /** Eyebrow / pill text shown above the H1 */
  badge: string;
  /** Optional image badge (e.g. NASSCOM Award logo) shown ABOVE the pill badge — homepage only */
  imageBadge?: { src: string; alt: string };
  /** Plain text shown before the gradient accent word(s) */
  titleLead?: string;
  /** Words rendered with the blue→navy gradient highlight */
  titleAccent: string;
  /** Optional plain text shown after the accent word(s) */
  titleTail?: string;
  /** Sub-headline / description copy under the H1 */
  description: ReactNode;
  /** Primary CTA */
  primaryHref?: string;
  primaryLabel?: string;
  /** Secondary CTA */
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function ServiceHero({
  badge,
  imageBadge,
  titleLead,
  titleAccent,
  titleTail,
  description,
  primaryHref = "/contact-us",
  primaryLabel = "Let's Discuss",
  secondaryHref = "/portfolio",
  secondaryLabel = "View Our Work",
}: ServiceHeroProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* ═════ ServiceHero (itsc-* hero, shared) ═════ */
.svc-hero-wrap {
  --brand: var(--color-signature-blue, #3E8CFB);
  --brand-dark: var(--color-heritage-navy, #011D80);
  --ink: var(--color-carbon-black, #0D1117);
  --muted: var(--color-slate-grey, #777777);
  --line: #E5E9F2;
  display: block;
  width: 100%;
  font-family: var(--font-primary, 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif);
}
.svc-hero-wrap *,
.svc-hero-wrap *::before,
.svc-hero-wrap *::after { box-sizing: border-box; }

.svc-hero {
  position: relative;
  padding: 130px 0 90px;
  background:
    radial-gradient(1200px 600px at 15% 10%, rgba(62, 140, 251, .10) 0%, transparent 55%),
    radial-gradient(900px 600px at 90% 20%, rgba(1, 29, 128, .08) 0%, transparent 55%),
    linear-gradient(180deg, #FBFDFF 0%, #FFFFFF 100%);
  overflow: hidden;
  isolation: isolate;
  display: block;
  width: 100%;
}
.svc-hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(15, 23, 42, .035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, .035) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at center, #000 40%, transparent 100%);
  mask-image: radial-gradient(ellipse 70% 60% at center, #000 40%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}
.svc-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: .45;
  pointer-events: none;
  z-index: 0;
}
.svc-blob-a {
  width: 420px; height: 420px;
  top: -100px; left: -80px;
  background: radial-gradient(circle, #3E8CFB, transparent 70%);
}
.svc-blob-b {
  width: 380px; height: 380px;
  top: 40px; right: -80px;
  background: radial-gradient(circle, #011D80, transparent 70%);
}
.svc-blob-c {
  width: 260px; height: 260px;
  bottom: -60px; left: 40%;
  background: radial-gradient(circle, #FAC759, transparent 70%);
  opacity: .22;
}
.svc-hero-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  width: 100%;
}
.svc-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 920px;
  margin: 0 auto;
}
.svc-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(62, 140, 251, .22);
  background: rgba(255, 255, 255, .7);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: var(--tag-size, 14px);
  line-height: var(--tag-line, 24px);
  font-weight: var(--tag-weight, 600);
  color: var(--brand);
  letter-spacing: .3px;
  margin-bottom: 28px;
}
.svc-hero-badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 4px rgba(62, 140, 251, .18);
}
.svc-hero-h1 {
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: var(--h1-size, 48px);
  line-height: var(--h1-line, 60px);
  font-weight: var(--h1-weight, 700);
  letter-spacing: var(--letter-spacing, 0);
  color: var(--ink);
  margin: 0 0 22px;
}
.svc-hero-h1-accent {
  background: linear-gradient(90deg, var(--brand) 0%, var(--brand-dark) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.svc-hero-sub {
  font-family: var(--font-primary, 'Poppins', sans-serif);
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: var(--muted);
  max-width: 720px;
  margin: 0 auto 36px;
  /* Clamp very long descriptions so the hero stays compact like the homepage hero */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.svc-hero-sub a,
.svc-hero-sub a:link,
.svc-hero-sub a:visited {
  color: var(--brand);
  text-decoration: none;
  font-weight: 600;
}
.svc-hero-sub a:hover { text-decoration: underline; }
/* Optional NASSCOM-style image badge above the H1 (homepage hero) */
.svc-hero-imgbadge {
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}
.svc-hero-imgbadge img {
  max-width: 220px;
  height: auto;
  display: block;
}
.svc-hero-wrap .svc-hero-ctas {
  display: flex !important;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0;
}
.svc-hero-wrap a.svc-hero-btn,
.svc-hero-wrap .svc-hero-btn {
  display: inline-flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding: 14px 26px !important;
  border-radius: 999px !important;
  font-family: var(--font-primary, 'Poppins', sans-serif) !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 1.2 !important;
  text-decoration: none !important;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease, border-color .25s ease !important;
  border: 1px solid transparent !important;
  cursor: pointer !important;
  white-space: nowrap !important;
  min-width: 0;
}
.svc-hero-wrap .svc-hero-btn i { font-size: 14px !important; line-height: 1 !important; }
.svc-hero-wrap a.svc-hero-btn-primary,
.svc-hero-wrap .svc-hero-btn-primary {
  background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%) !important;
  color: #fff !important;
  box-shadow: 0 12px 40px -12px rgba(62, 140, 251, .35) !important;
  border-color: transparent !important;
}
.svc-hero-wrap a.svc-hero-btn-primary:hover,
.svc-hero-wrap .svc-hero-btn-primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 30px 80px -20px rgba(62, 140, 251, .45) !important;
  color: #fff !important;
}
.svc-hero-wrap a.svc-hero-btn-ghost,
.svc-hero-wrap .svc-hero-btn-ghost {
  background: #ffffff !important;
  color: var(--ink) !important;
  border: 1px solid var(--line) !important;
}
.svc-hero-wrap a.svc-hero-btn-ghost:hover,
.svc-hero-wrap .svc-hero-btn-ghost:hover {
  transform: translateY(-2px) !important;
  border-color: var(--brand) !important;
  color: var(--brand) !important;
  background: #ffffff !important;
}
@media (max-width: 768px) {
  .svc-hero { padding: 90px 0 70px; }
  .svc-hero-h1 { font-size: 34px; line-height: 44px; }
  .svc-hero-sub { font-size: 16px; line-height: 26px; }
}
`,
        }}
      />

      <div className="svc-hero-wrap">
        <section className="svc-hero">
          <div className="svc-hero-grid" aria-hidden="true" />
          <div className="svc-blob svc-blob-a" aria-hidden="true" />
          <div className="svc-blob svc-blob-b" aria-hidden="true" />
          <div className="svc-blob svc-blob-c" aria-hidden="true" />

          <div className="svc-hero-container">
            <div className="svc-hero-content">
              {imageBadge ? (
                <div className="svc-hero-imgbadge">
                  <img src={imageBadge.src} alt={imageBadge.alt} loading="eager" />
                </div>
              ) : null}

              <div className="svc-hero-badge">
                <span className="svc-hero-badge-dot" />
                {badge}
              </div>

              <h1 className="svc-hero-h1">
                {titleLead ? <>{titleLead} </> : null}
                <span className="svc-hero-h1-accent">{titleAccent}</span>
                {titleTail ? <> {titleTail}</> : null}
              </h1>

              <p className="svc-hero-sub">{description}</p>

              <div className="svc-hero-ctas">
                <Link href={primaryHref} className="svc-hero-btn svc-hero-btn-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {primaryLabel}
                </Link>
                <Link href={secondaryHref} className="svc-hero-btn svc-hero-btn-ghost">
                  {secondaryLabel}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
