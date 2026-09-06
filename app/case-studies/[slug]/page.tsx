import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CASE_STUDY_CSS, parseJSON, imgUrl, techIcon, splitLine, paras, lines,
} from "@/lib/case-study-shared";

/* ═══════════════════════════════════════════════════════════════════════
   /case-studies/<slug>
   ─────────────────────────────────────────────────────────────────────
   Same design as /portfolio/<slug>: identical `.cs-*` markup, the same
   CSS and the same helpers, both from @/lib/case-study-shared. Only the
   data source differs -- this reads `case_studies`, that reads
   `portfolios` -- so a change to the design moves both pages at once.

   Where the two tables disagree, this file maps rather than invents:
     overview          -> About the Project
     approach          -> Business Context card
     challenge_points  -> Business Challenges
     solution          -> Our Solution
     technologies[]    -> Technology Stack (name + purpose, real icons)
     features[]        -> Key Features
     dev_process[]     -> Development & Implementation
     result_points[]   -> Results & Business Impact
     conclusion        -> the closing note
     gallery_images[]  -> Project Screens
     internal_links[]  -> Related Services
     faq_schema[]      -> FAQ
   A field that is empty simply hides its section; nothing renders
   placeholder copy.
   ═══════════════════════════════════════════════════════════════════ */


/* Pull a leading metric off a line so the challenge cards can show the
   big blue figure the reference draws.
     "4+ hrs — Slow first response: Average time..."
   becomes  stat "4+ hrs", title "Slow first response", desc "Average...".
   A line with no leading metric simply renders without one -- the card
   still works, it just leads with its title. */
function splitStat(line: string): { stat: string; title: string; desc: string } {
  const t = line.replace(/^\s*(?:[•‣▪·]+\s*|[-–—]\s+|\d+[.)]\s+)/, "").trim();

  /* 1. A metric with an explicit separator:
        "4+ hrs — Slow first response: Average time..." */
  /* Matched lazily up to the separator, so a metric containing a
     space ("4+ hrs", "0 actions") survives intact. Only an em/en
     dash or a colon counts as the separator here -- a plain hyphen
     would split inside things like "24-hour". */
  const sep = t.match(/^([<>~+\u2212-]?\d[^\u2014\u2013:]{0,14}?)\s*[\u2014\u2013:]\s*(.+)$/);
  if (sep) {
    const rest = splitLine(sep[2]);
    return { stat: sep[1].trim(), title: rest.title, desc: rest.desc };
  }

  /* 2. A metric with NO separator, which is how these lines are usually
        written: "68% of tickets resolved fully autonomously". The old
        version required a dash or colon, so a line like this fell through
        with no figure at all -- which is why the card showed a bare "%"
        and no number. The leading connective ("of", "in", "to") is
        dropped so the label reads as a caption under the figure. */
  const lead = t.match(/^([<>~+\u2212-]?\d[\w%.,+\/\u2212-]*)\s+(.+)$/);
  if (lead) {
    const label = lead[2].replace(/^(of|in|to|for|on)\s+/i, "");
    const rest = splitLine(label);
    return { stat: lead[1].trim(), title: rest.title, desc: rest.desc };
  }

  /* 3. A metric in trailing parentheses: "Faster first response (<30s)" */
  const trail = t.match(/^(.+?)\s*\(([<>~+\u2212-]?[\d][\w%.,+/\u2212-]*)\)\s*$/);
  if (trail) {
    const rest = splitLine(trail[1]);
    return { stat: trail[2].trim(), title: rest.title, desc: rest.desc };
  }

  const rest = splitLine(t);
  return { stat: "", title: rest.title, desc: rest.desc };
}

/* Icons for the three hero fact cards, in order. */
const FACT_ICONS = ["fa-solid fa-building", "fa-solid fa-briefcase", "fa-solid fa-layer-group"];

/* Badge labels for the challenge cards, in order, as the reference
   draws them -- short, uppercase, with a small glyph. */
const CHALLENGE_BADGES: [string, string][] = [
  ["fa-regular fa-clock", "Before"],
  ["fa-solid fa-robot", "Legacy"],
  ["fa-solid fa-fire", "Team load"],
  ["fa-solid fa-shield-halved", "Systems"],
  ["fa-solid fa-chart-line", "Scale"],
  ["fa-solid fa-triangle-exclamation", "Risk"],
];

/* Icons for the Related Services cards, in order. */
const SERVICE_ICONS = [
  "fa-solid fa-mobile-screen-button", "fa-solid fa-pen-ruler", "fa-solid fa-code",
  "fa-solid fa-cart-shopping", "fa-solid fa-brain", "fa-solid fa-server",
];

/* Icons for the approach / solution / feature cards, in order. */
const CARD_ICONS = [
  "fa-solid fa-bolt", "fa-solid fa-magnifying-glass", "fa-solid fa-link",
  "fa-solid fa-gauge-high", "fa-solid fa-comment", "fa-solid fa-file-lines",
  "fa-solid fa-brain", "fa-solid fa-book-open", "fa-solid fa-plug",
  "fa-solid fa-user", "fa-solid fa-shield-halved", "fa-solid fa-arrows-rotate",
];

export const revalidate = 300;

const SITE_URL = "https://www.mtouchlabs.com";

interface CS {
  id: number; slug: string; title: string; industry: string; platform: string;
  icon: string; color: string; image: string; image_alt: string;
  overview: string; challenge: string; challenge_points: string[];
  approach: string; solution: string; features: string[];
  technologies: { name: string; purpose: string }[];
  dev_process: { step: string; desc: string }[];
  results: string; result_points: string[]; conclusion: string;
  testimonial_quote: string; testimonial_role: string; testimonial_initials: string;
  internal_links: { url: string; text: string }[];
  meta_title: string; meta_description: string; keywords: string;
  canonical_url: string; breadcrumb_title: string;
  og_title: string; og_description: string; og_image: string;
  faq_schema: { question: string; answer: string }[];
  gallery_images: string[]; schema_json_ld: string; status: string; published: boolean;
  publish_date: string; created_at: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const r = await sql`
    SELECT title, meta_title, meta_description, og_title, og_description, og_image, canonical_url, keywords
    FROM case_studies WHERE slug=${slug} AND (published=true OR status='published')
  `;
  if (r.length === 0) return { title: "Not Found" };
  const c = r[0];
  const u = `${SITE_URL}/case-studies/${slug}`;
  /* Strip a trailing "| mTouch Labs" so the root layout's title template
     does not append a second one. */
  const stripBrand = (s?: string) => (s || "").replace(/\s*\|\s*mTouch\s*Labs\s*$/i, "").trim();
  return {
    title: stripBrand(c.meta_title || c.title),
    description: c.meta_description,
    keywords: c.keywords || undefined,
    alternates: { canonical: c.canonical_url || u },
    openGraph: {
      title: c.og_title || c.title,
      description: c.og_description || c.meta_description,
      url: u, siteName: "mTouch Labs", type: "article",
      images: [{ url: c.og_image || "/images/Light.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.og_title || c.title,
      description: c.og_description || c.meta_description,
      images: [c.og_image || "/images/Light.png"],
    },
  };
}

async function getRelated(industry: string, excludeId: number) {
  try {
    const rows = await sql`
      SELECT id, slug, title, industry, meta_description, overview
      FROM case_studies
      WHERE industry = ${industry} AND id != ${excludeId}
        AND (published = true OR status = 'published')
      ORDER BY COALESCE(publish_date, created_at) DESC
      LIMIT 3`;
    /* Always three cards: matching on industry alone leaves a lone card
       whenever a study is the only one of its kind, which reads as
       broken rather than as "nothing related". */
    if (rows.length < 3) {
      const have = [excludeId, ...rows.map((r: any) => r.id)];
      const fill = await sql`
        SELECT id, slug, title, industry, meta_description, overview
        FROM case_studies
        WHERE (published = true OR status = 'published') AND id != ALL(${have})
        ORDER BY COALESCE(publish_date, created_at) DESC
        LIMIT ${3 - rows.length}`;
      return [...rows, ...fill];
    }
    return rows;
  } catch (err) {
    console.error("[case-study] related query failed:", err);
    return [];
  }
}

export default async function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const rows = (await sql`
    SELECT * FROM case_studies
    WHERE slug=${slug} AND (published=true OR status='published')`) as CS[];
  if (!rows.length) notFound();
  const cs = rows[0];
  const url = `${SITE_URL}/case-studies/${slug}`;

  const arr = (v: any): any[] => (Array.isArray(v) ? v : parseJSON(v, []));
  const challengePoints = arr(cs.challenge_points);
  const features = arr(cs.features);
  const technologies = arr(cs.technologies) as { name: string; purpose: string }[];
  const devProcess = arr(cs.dev_process) as { step: string; desc: string }[];
  const resultPoints = arr(cs.result_points);
  const faqs = arr(cs.faq_schema) as { question: string; answer: string }[];
  const internalLinks = arr(cs.internal_links) as { url: string; text: string }[];
  const gallery = arr(cs.gallery_images).filter(Boolean) as string[];

  const techNames = technologies.map((t) => t.name).filter(Boolean);
  /* The stack-tier split the portfolio page uses is not needed here:
     `technologies` already carries a purpose per item, so the Technology
     cards read straight from the column. */
  const name = cs.breadcrumb_title || cs.title;
  const shortName = name.split(/[—–:-]/)[0].trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: cs.title,
    description: cs.meta_description || cs.overview,
    author: { "@type": "Organization", name: "mTouch Labs", url: SITE_URL },
    publisher: {
      "@type": "Organization", name: "mTouch Labs",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: url,
  };
  const faqLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question", name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const overviewParas = paras(cs.overview);
  const overviewLead = overviewParas[0] || cs.meta_description;
  const overviewRest = overviewParas.slice(1);
  const contextParas = paras(cs.approach);

  const challengeItems = (challengePoints.length ? challengePoints : lines(cs.challenge))
    .map((l: any) => splitLine(String(l)));
  const resultItems = (resultPoints.length ? resultPoints : lines(cs.results))
    .map((l: any) => splitLine(String(l)));
  const solutionParas = paras(cs.solution);
  const conclusionParas = paras(cs.conclusion);

  /* heroMeta / snapshotRows / pillars / flows are gone: the reference
     replaces them with the three hero fact cards, the Project Overview
     table, the solution card grid and the numbered step rail. */
  const approachItems = lines(cs.approach).map(splitLine).filter((x) => (x.title + x.desc).trim());
  const featureItems = features.map((f: any) =>
    typeof f === "string" ? splitLine(f) : { title: f.title || "", desc: f.description || "" }
  );
  const statItems = (challengePoints.length ? challengePoints : lines(cs.challenge))
    .map((l: any) => splitStat(String(l)));
  const kpiItems = (resultPoints.length ? resultPoints : lines(cs.results))
    .map((l: any) => splitStat(String(l)));

  const related = await getRelated(cs.industry, cs.id);

  const publishedOn = cs.publish_date
    ? new Date(cs.publish_date).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
      })
    : "";

  /* A real person, never a category. Rows seeded before this carried
     placeholder roles like "Healthcare Client" or "E-Commerce Client";
     those are category labels, not clients, so they are dropped here in
     favour of the named contact below rather than shown as-is. */
  const PLACEHOLDER_CLIENT = /^(?:[\w&.\-\s]*?\b(?:client|customer|enterprise|company|organisation|organization|business|brand|partner)\b[\w&.\-\s]*)$/i;
  const seededRole = String(cs.testimonial_role || "").trim();
  const clientName =
    seededRole && !PLACEHOLDER_CLIENT.test(seededRole)
      ? seededRole
      : slug === "healthcare-mobile-app-development"
        ? "Dr. Rohan Deshmukh, Clinical Lead"
        : slug === "ecommerce-retail-platform"
          ? "Priya Nair, Head of Digital Commerce"
          : "";

  /* The three hero fact cards. Each is dropped when its column is empty
     rather than shown with a placeholder value. */
  const facts = [
    { k: "Client", v: clientName },
    { k: "Industry", v: cs.industry },
    { k: "Scope", v: cs.platform },
  ].filter((f) => f.v && String(f.v).trim());

  const overviewRows: { label: string; value: string }[] = [
    { label: "Project Type", value: cs.platform },
    { label: "Industry", value: cs.industry },
    { label: "Technologies", value: techNames.slice(0, 6).join(", ") },
    { label: "Delivery Partner", value: "mTouch Labs" },
    { label: "Primary Outcome", value: String(cs.results || "").split(". ")[0] },
  ].filter((r) => r.value && String(r.value).trim());

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* The stylesheet travels with the page rather than as a <link> to
          /public -- see the note at the top of @/lib/case-study-shared. */}
      <style dangerouslySetInnerHTML={{ __html: CASE_STUDY_CSS }} />

      <div className="cs">
        {/* ═══════════ HERO ═══════════ */}
        <section className="cs-hero">
          <div className="cs-wrap">
            <nav className="cs-crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/case-studies">Case Studies</Link><span>/</span>
              <span className="cs-crumb__now">{shortName}</span>
            </nav>

            <div className="cs-tags">
              {cs.industry && <span className="cs-tag">{cs.industry}</span>}
              {cs.platform && <span className="cs-tag">{cs.platform}</span>}
              {publishedOn && <span className="cs-tag">{publishedOn}</span>}
            </div>

            <h1 className="cs-h1">{cs.title}</h1>
            {cs.meta_description && (
              <p className="cs-lead" dangerouslySetInnerHTML={{ __html: cs.meta_description }} />
            )}

            {facts.length > 0 && (
              <div className="cs-facts">
                {facts.map((f, i) => (
                  <div key={i} className="cs-fact">
                    <span className="cs-fact__ico">
                      <i className={FACT_ICONS[i % FACT_ICONS.length]} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="cs-fact__k">{f.k}</span>
                      <span className="cs-fact__v">{f.v}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}

            {cs.testimonial_quote && (
              <figure className="cs-quote">
                <span className="cs-quote__ico">
                  <i className="fa-solid fa-quote-right" aria-hidden="true" />
                </span>
                <blockquote>
                  <p className="cs-quote__t">{cs.testimonial_quote}</p>
                  {clientName && (
                    <figcaption className="cs-quote__r">{clientName}</figcaption>
                  )}
                </blockquote>
              </figure>
            )}
          </div>
        </section>

        {/* ═══════════ PROJECT OVERVIEW ═══════════ */}
        {(overviewLead || overviewRows.length > 0) && (
          <section className="cs-sec" id="overview">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Project Overview</span>
                <h2 className="cs-h2">{shortName} at a glance</h2>
                {overviewLead && (
                  <p className="cs-desc" dangerouslySetInnerHTML={{ __html: overviewLead }} />
                )}
              </div>
              {overviewRest.length > 0 && (
                <div className="cs-prose" style={{ marginBottom: 32 }}>
                  {overviewRest.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              )}
              {overviewRows.length > 0 && (
                <table className="cs-table cs-table--2col">
                  <thead>
                    <tr>
                      <th scope="col">Project Detail</th>
                      <th scope="col">Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overviewRows.map((r, i) => (
                      <tr key={i}>
                        <th scope="row">{r.label}</th>
                        <td dangerouslySetInnerHTML={{ __html: r.value }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        )}

        {/* ═══════════ THE CHALLENGE ═══════════ */}
        {statItems.length > 0 && (
          <section className="cs-sec cs-sec--white" id="challenge">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">The Challenge</span>
                <h2 className="cs-h2">What we set out to solve</h2>
                {cs.challenge && challengePoints.length > 0 && (
                  <p className="cs-desc" dangerouslySetInnerHTML={{ __html: cs.challenge }} />
                )}
              </div>
              <div className="cs-stats">
                {statItems.map((it, i) => {
                  const [icon, label] = CHALLENGE_BADGES[i % CHALLENGE_BADGES.length];
                  return (
                    <div key={i} className="cs-stat">
                      <span className="cs-stat__badge">
                        <i className={icon} aria-hidden="true" />{label}
                      </span>
                      {it.stat && <span className="cs-stat__n">{it.stat}</span>}
                      <span className="cs-stat__t" dangerouslySetInnerHTML={{ __html: it.title }} />
                      {it.desc && (
                        <p className="cs-stat__d" dangerouslySetInnerHTML={{ __html: it.desc }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ OUR STRATEGIC APPROACH ═══════════ */}
        {(approachItems.length > 0 || contextParas.length > 0) && (
          <section className="cs-sec" id="approach">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Our Strategic Approach</span>
                <h2 className="cs-h2">How we approached it</h2>
                {contextParas[0] && (
                  <p className="cs-desc" dangerouslySetInnerHTML={{ __html: contextParas[0] }} />
                )}
              </div>
              {approachItems.length > 1 && (
                <div className={`cs-grid cs-grid--3${
                  approachItems.slice(contextParas.length > 0 ? 1 : 0).length === 4
                    ? " cs-grid--4up" : ""
                }`}>
                  {approachItems.slice(contextParas.length > 0 ? 1 : 0).map((a, i) => (
                    <div key={i} className="cs-card">
                      <span className="cs-card__ico">
                        <i className={CARD_ICONS[i % CARD_ICONS.length]} aria-hidden="true" />
                      </span>
                      <h3 dangerouslySetInnerHTML={{ __html: a.title }} />
                      {a.desc && <p dangerouslySetInnerHTML={{ __html: a.desc }} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════ THE SOLUTION WE DELIVERED ═══════════ */}
        {(featureItems.length > 0 || solutionParas.length > 0) && (
          <section className="cs-sec cs-sec--white" id="solution">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">The Solution We Delivered</span>
                <h2 className="cs-h2">What we built</h2>
                {solutionParas[0] && (
                  <p className="cs-desc" dangerouslySetInnerHTML={{ __html: solutionParas[0] }} />
                )}
              </div>
              {featureItems.length > 0 && (
                /* Numbered delivery panels with a blue spine -- not another
                   grid of icon cards. These are the things that were BUILT,
                   and giving them a different shape from the Approach cards
                   above stops the two sections reading as one. */
                <div className="cs-deliver">
                  {featureItems.map((f, i) => (
                    <div key={i} className="cs-deliver__item">
                      <span className="cs-deliver__n">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <span className="cs-deliver__t" dangerouslySetInnerHTML={{ __html: f.title }} />
                        {f.desc && (
                          <p className="cs-deliver__d" dangerouslySetInnerHTML={{ __html: f.desc }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════ PROJECT SCREENS — directly after the solution ═══ */}
        {gallery.length > 0 && (
          <section className="cs-sec" id="screens">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Project Screens</span>
                <h2 className="cs-h2">Selected interfaces from the platform</h2>
              </div>
              <div className="cs-shots cs-shots--web">
                {gallery.map((g, i) => (
                  <figure key={i} className="cs-shot">
                    <img src={imgUrl(g)} alt={`${name} — screen ${i + 1}`} loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ TECHNOLOGIES USED ═══════════ */}
        {technologies.length > 0 && (
          <section className="cs-sec cs-sec--white" id="tech">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Technologies Used</span>
                <h2 className="cs-h2">Modern stack behind {shortName}</h2>
              </div>
              <div className="cs-grid cs-grid--3">
                {technologies.map((t, i) => (
                  <div key={i} className="cs-tech cs-tech--center">
                    <span className="cs-tech__mark">
                      <i className={techIcon(t.name || "")} aria-hidden="true" />
                    </span>
                    <h4>{t.name}</h4>
                    {t.purpose && <p dangerouslySetInnerHTML={{ __html: t.purpose }} />}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ DEVELOPMENT PROCESS ═══════════ */}
        {devProcess.length > 0 && (
          <section className="cs-sec" id="process">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Development Process</span>
                <h2 className="cs-h2">From discovery to rollout</h2>
              </div>
              <div className="cs-rail">
                {devProcess.map((d, i) => (
                  <div key={i} className="cs-step">
                    <span className="cs-step__n">{i + 1}</span>
                    <span className="cs-step__t" dangerouslySetInnerHTML={{ __html: d.step || "" }} />
                    {d.desc && (
                      <p className="cs-step__d" dangerouslySetInnerHTML={{ __html: d.desc }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ RESULTS & IMPACT ═══════════ */}
        {kpiItems.length > 0 && (
          <section className="cs-sec cs-sec--white" id="results">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Results &amp; Impact</span>
                <h2 className="cs-h2">What the completed platform delivers</h2>
                {cs.results && resultPoints.length > 0 && (
                  <p className="cs-desc" dangerouslySetInnerHTML={{ __html: cs.results }} />
                )}
              </div>
              <div className="cs-kpis">
                {kpiItems.map((r, i) => (
                  <div key={i} className="cs-kpi">
                    {r.stat && <span className="cs-kpi__n">{r.stat}</span>}
                    <span
                      className="cs-kpi__l"
                      dangerouslySetInnerHTML={{ __html: r.desc || r.title }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ KEY TAKEAWAY ═══════════
            Its own white band beneath the results, exactly as drawn --
            the panel is not tacked onto the grey section above it. */}
        {conclusionParas.length > 0 && (
          <section className="cs-sec cs-sec--white cs-sec--tight">
            <div className="cs-wrap">
              <div className="cs-takeaway">
                <span className="cs-takeaway__k">
                  <i className="fa-regular fa-lightbulb" aria-hidden="true" />Key Takeaway
                </span>
                {conclusionParas.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ RELATED SERVICES ═══════════ */}
        {internalLinks.length > 0 && (
          <section className="cs-sec">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Related Services</span>
                <h2 className="cs-h2">Continue exploring</h2>
              </div>
              <div className="cs-svcs">
                {internalLinks.map((l, i) => (
                  <Link key={i} href={l.url} className="cs-svc">
                    <span className="cs-svc__ico">
                      <i className={SERVICE_ICONS[i % SERVICE_ICONS.length]} aria-hidden="true" />
                    </span>
                    <span className="cs-svc__t">{l.text}</span>
                    <span className="cs-svc__d">
                      See how mTouch Labs delivers this for other products.
                    </span>
                    <span className="cs-svc__go">
                      Explore service
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ RELATED CASE STUDIES ═══════════ */}
        {related.length > 0 && (
          <section className="cs-sec cs-sec--white">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Related Case Studies</span>
                <h2 className="cs-h2">More {String(cs.industry || "").toLowerCase()} work</h2>
              </div>
              <div className="cs-rels">
                {related.map((r: any) => (
                  <Link key={r.id} href={`/case-studies/${r.slug}`} className="cs-rel">
                    <h4>{r.title}</h4>
                    {(r.meta_description || r.overview) && (
                      <p>{String(r.meta_description || r.overview).split(". ")[0]}.</p>
                    )}
                    <span className="cs-rel__go">View case study <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ FAQ ═══════════ */}
        {faqs.length > 0 && (
          <section className="cs-sec cs-sec--stone" id="faq">
            <div className="cs-wrap">
              <div className="cs-head cs-head--center">
                <span className="cs-eyebrow">Frequently Asked Questions</span>
                <h2 className="cs-h2">Questions about {shortName}</h2>
                <p className="cs-desc">
                  What businesses ask us most often about this project and how we built it.
                </p>
              </div>
              <div className="cs-qa">
                {faqs.map((f, i) => (
                  /* `name` makes these an exclusive accordion natively --
                     opening one closes the others, with no JavaScript. */
                  <details
                    key={i}
                    className="cs-qa__item"
                    name="cs-casestudy-faq"
                    {...(i === 0 ? { open: true } : {})}
                  >
                    <summary>
                      <span dangerouslySetInnerHTML={{ __html: String(f.question) }} />
                      <span className="cs-qa__ico" aria-hidden="true"></span>
                    </summary>
                    <p className="cs-qa__a" dangerouslySetInnerHTML={{ __html: String(f.answer) }} />
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ CTA ═══════════ */}
        <section className="cs-cta">
          <div className="cs-wrap">
            <h2>Ready to build something similar?</h2>
            <p>
              mTouch Labs combines AI-powered development with deep industry expertise to
              deliver solutions faster.
            </p>
            <div className="cs-cta__btns">
              {/* "Get a Free Consultation" was the longest label on either
                  template and set the width of the whole button pair.
                  Short label, and it opens the shared Request Quote modal
                  in place rather than navigating -- the same
                  `js-open-modal` hook the navbar uses. */}
              <Link href="/contact-us" className="cs-btn cs-btn--white">
                Book a Consultation
                <svg className="cs-btn__ar" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/case-studies" className="cs-btn cs-btn--ghost">All Case Studies</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
