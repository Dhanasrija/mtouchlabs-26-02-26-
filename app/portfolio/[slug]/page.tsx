import { neon } from "@neondatabase/serverless";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDY_CSS } from "./case-study-css";

// ISR: cache rendered pages for 5 min instead of SSR on every request.
// Faster TTFB for users and crawlers; new/edited portfolios appear within 5 min.
export const revalidate = 300;

// ─── DB — fresh connection per request (serverless-safe) ─────────────────────
function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

async function getProject(slug: string) {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT *, faq_schema::text as faq_schema_text
      FROM portfolios
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `;
    if (!rows[0]) return null;
    const project = { ...rows[0] };
    try {
      project.faq_schema = project.faq_schema_text
        ? JSON.parse(project.faq_schema_text)
        : [];
    } catch {
      project.faq_schema = [];
    }
    return project;
  } catch (err) {
    console.error("[portfolio] getProject error:", err);
    return null;
  }
}

async function getRelatedProjects(category: string, excludeId: number) {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, slug, title, subtitle, category, image, tech_stack, tags
      FROM portfolios
      WHERE category = ${category} AND id != ${excludeId} AND published = true
      ORDER BY created_at DESC
      LIMIT 3
    `;
    /* Always three cards. Matching on category alone leaves a one-card or
       empty row whenever a project is the only one of its kind, which
       reads as broken rather than as "nothing related". Top up with the
       newest other projects, skipping the ones already chosen. */
    if (rows.length < 3) {
      const have = [excludeId, ...rows.map((r: any) => r.id)];
      const fill = await sql`
        SELECT id, slug, title, subtitle, category, image, tech_stack, tags
        FROM portfolios
        WHERE published = true AND id != ALL(${have})
        ORDER BY created_at DESC
        LIMIT ${3 - rows.length}
      `;
      return [...rows, ...fill];
    }
    return rows;
  } catch (err) {
    console.error("[portfolio] getRelatedProjects error:", err);
    return [];
  }
}

// ─── HELPERS ─────────────────────────────────────────
function parseJSON(val: any, fb: any = []) {
  if (!val) return fb;
  if (Array.isArray(val)) return val;
  if (typeof val === "object") return val;
  try {
    return JSON.parse(val) || fb;
  } catch {
    return fb;
  }
}

function cleanTitle(t: string, slug?: string) {
  if (slug) {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const words = t.split(" ");
  const half = Math.floor(words.length / 2);
  if (
    words.length >= 4 &&
    words.slice(0, half).join(" ") === words.slice(half).join(" ")
  )
    return words.slice(0, half).join(" ");
  const suffixes = [
    "Mobile App Development",
    "Web Development",
    "App Development",
  ];
  for (const s of suffixes) {
    if (t.endsWith(s + " " + s)) return t.replace(s + " " + s, s);
  }
  const cleaned = words.filter(
    (word, i) =>
      i === 0 || word.toLowerCase() !== words[i - 1].toLowerCase()
  );
  return cleaned.join(" ");
}

function splitTitle(
  t: string,
  slug?: string
): { highlight: string; rest: string } {
  const clean = cleanTitle(t, slug);
  const words = clean.split(" ");
  const genericWords = [
    "mobile","app","application","development","web","platform",
    "solution","solutions","system","service","services","software",
    "company","portal","website","online","digital","management",
  ];
  let brandEnd = words.length;
  for (let i = 0; i < words.length; i++) {
    if (genericWords.includes(words[i].toLowerCase())) {
      brandEnd = i;
      break;
    }
  }
  if (brandEnd === 0) brandEnd = 1;
  return {
    highlight: words.slice(0, brandEnd).join(" "),
    rest: words.slice(brandEnd).join(" "),
  };
}

function imgUrl(p: string | null | undefined): string {
  if (!p) return "";
  if (p.startsWith("http")) return p;
  if (p.startsWith("/")) return p;
  return `/${p}`;
}

// ─── SEO ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  /* Next 14, not 15: `params` is a plain object here, NOT a Promise.
     It was typed as a Promise and awaited, which happens to work --
     `await` on a non-thenable resolves to the value -- but it is the
     Next 15 signature on a Next 14.2 project (see package.json), so the
     types lied about the runtime and would break on any real upgrade. */
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { slug } = params;
    const p = await getProject(slug);
    if (!p) return { title: "Project Not Found" };

    const tags = p.tags
      ? p.tags.split(",").map((t: string) => t.trim().toLowerCase())
      : [];
    const fullImg =
      p.og_image || p.image
        ? (p.og_image || p.image).startsWith("http")
          ? p.og_image || p.image
          : `https://www.mtouchlabs.com${imgUrl(p.og_image || p.image)}`
        : "";

    const stripBrand = (s?: string) =>
      (s || "").replace(/\s*\|\s*mTouch\s*Labs\s*$/i, "").trim();
    const slugTitle = cleanTitle(p.title || "", slug);
    const dbMetaTitle = stripBrand(p.meta_title || "");
    const rawCleanTitle = stripBrand(p.title ? cleanTitle(p.title) : "");

    const dbWordCount = dbMetaTitle.split(" ").filter(Boolean).length;
    const rawWordCount = rawCleanTitle.split(" ").filter(Boolean).length;
    const slugWordCount = slugTitle.split(" ").filter(Boolean).length;

    let cleanMetaTitle: string;
    if (dbMetaTitle && dbWordCount >= 3) {
      cleanMetaTitle = dbMetaTitle;
    } else if (
      rawCleanTitle &&
      rawWordCount >= 3 &&
      rawWordCount >= slugWordCount
    ) {
      cleanMetaTitle = `${rawCleanTitle} | Portfolio`;
    } else {
      cleanMetaTitle = `${slugTitle} | Portfolio`;
    }

    const projectedFull = `${cleanMetaTitle} | mTouch Labs`;
    const titleField =
      projectedFull.length > 60
        ? ({ absolute: cleanMetaTitle } as const)
        : cleanMetaTitle;

    return {
      title: titleField,
      description:
        p.meta_description ||
        p.subtitle ||
        `${p.title} — a ${p.category} project by mTouch Labs.`,
      keywords: [
        `${p.category} app development`,
        ...tags,
        "mTouch Labs",
        "app development Hyderabad",
      ],
      openGraph: {
        title: p.og_title || p.title,
        description: p.og_description || p.subtitle,
        url: p.canonical_url || `/portfolio/${p.slug}`,
        siteName: "mTouch Labs",
        type: "article",
        images: fullImg ? [{ url: fullImg, width: 1200, height: 630 }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: p.og_title || p.title,
        description: p.og_description || p.subtitle,
      },
      alternates: { canonical: p.canonical_url || `/portfolio/${p.slug}` },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
        },
      },
    };
  } catch {
    return { title: "Portfolio | mTouch Labs" };
  }
}

// ─── STRUCTURED DATA ─────────────────────────────────
function buildSchemas(p: any) {
  const fullImg = p.image
    ? p.image.startsWith("http")
      ? p.image
      : `https://www.mtouchlabs.com${imgUrl(p.image)}`
    : "";
  const main: any = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.about || p.subtitle,
    url: `https://www.mtouchlabs.com/portfolio/${p.slug}`,
    image: fullImg,
    genre: p.category,
    keywords: p.tags,
    datePublished: p.created_at,
    creator: {
      "@type": "Organization",
      name: "mTouch Labs",
      url: "https://www.mtouchlabs.com",
    },
  };
  if (p.play_store_url)
    main.associatedMedia = {
      "@type": "SoftwareApplication",
      operatingSystem: "Android",
      installUrl: p.play_store_url,
    };
  const bc = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.mtouchlabs.com/portfolio" },
      { "@type": "ListItem", position: 3, name: p.title, item: `https://www.mtouchlabs.com/portfolio/${p.slug}` },
    ],
  };
  const faqs = Array.isArray(p.faq_schema)
    ? p.faq_schema
    : parseJSON(p.faq_schema);
  const faq =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f: any) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;
  return { main, bc, faq };
}

// ─── SVG ICONS ────────────────────────────────────────


function categorizeTech(stack: string[]) {
  const cats: Record<string, string[]> = {
    Frontend: [], Backend: [], Database: [], Infrastructure: [], "AI/ML": [], Other: [],
  };
  const fe = ["react","flutter","angular","vue","ios","android","swift","kotlin","html","css","javascript","typescript","dart","tailwind","bootstrap","next","nuxt","svelte","jquery"];
  const be = ["node","java","php","python","laravel",".net","spring","express","django","flask","ruby","rails","go","graphql","rest","api","nest","fastapi"];
  const db = ["mysql","mongo","firebase","sql","redis","postgresql","dynamodb","sqlite","supabase","neon","cassandra","oracle"];
  const infra = ["aws","azure","gcp","docker","kubernetes","nginx","vercel","heroku","cloudflare","jenkins","github","gitlab","ci/cd","terraform"];
  const ai = ["tensorflow","pytorch","openai","gpt","ml","ai","machine learning","deep learning","nlp","langchain"];
  stack.forEach((t) => {
    const l = t.toLowerCase();
    if (fe.some((k) => l.includes(k))) cats.Frontend.push(t);
    else if (be.some((k) => l.includes(k))) cats.Backend.push(t);
    else if (db.some((k) => l.includes(k))) cats.Database.push(t);
    else if (infra.some((k) => l.includes(k))) cats.Infrastructure.push(t);
    else if (ai.some((k) => l.includes(k))) cats["AI/ML"].push(t);
    else cats.Other.push(t);
  });
  return Object.entries(cats).filter(([, v]) => v.length > 0);
}


const featureEmojis = ["📦","🔍","📄","🛒","📱","🛠️","🔔","📊","⚡","🌐","🛡️","🔄"];

/* Split a "Title — description" / "Title: description" line into its two
   halves. Every list section in the reference design shows a bold lead
   and a lighter body, and the em-dash / colon is how the copy carries
   that split. A line with no separator becomes a title with no body,
   which still renders correctly. */
function splitLine(line: string): { title: string; desc: string } {
  const t = line.replace(/^[•\-\d.]+\s*/, "").trim();
  /* Only look for the separator BEFORE the first tag. Without this a line
     like `... our <a href="https://x">link</a>` splits on the colon inside
     the href and the heading becomes half a URL. */
  const cut = t.indexOf("<");
  const head = cut === -1 ? t : t.slice(0, cut);
  const m = head.match(/^([^:—–]{3,60})[:—–]\s*/);
  if (!m) return { title: t, desc: "" };
  return { title: m[1].trim(), desc: t.slice(m[0].length).trim() };
}

function lines(v: any): string[] {
  if (!v || typeof v !== "string") return [];
  return v.split("\n").map((l) => l.trim()).filter(Boolean);
}

function paras(v: any): string[] {
  if (!v || typeof v !== "string") return [];
  return v.split("\n").map((p) => p.trim()).filter(Boolean);
}

export default async function PortfolioDetailPage({
  params,
}: {
  /* Next 14, not 15: `params` is a plain object here, NOT a Promise.
     It was typed as a Promise and awaited, which happens to work --
     `await` on a non-thenable resolves to the value -- but it is the
     Next 15 signature on a Next 14.2 project (see package.json), so the
     types lied about the runtime and would break on any real upgrade. */
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await getProject(slug);
  if (!project) notFound();

  const techStack = parseJSON(project.tech_stack);
  const features = parseJSON(project.features);
  const appScreens = parseJSON(project.app_screens).filter((s: string) => s);
  const webScreens = parseJSON(project.web_screens).filter((s: string) => s);
  const faqs = Array.isArray(project.faq_schema)
    ? project.faq_schema
    : parseJSON(project.faq_schema);
  const techCategories = categorizeTech(techStack);
  const { main, bc, faq } = buildSchemas(project);

  const name = cleanTitle(project.title, slug);
  const shortName = name.split(/[—–-]/)[0].trim();
  const related = await getRelatedProjects(project.category, project.id);

  /* ── Tech grouped by tier ──────────────────────────────────────────
     The reference design's Solution cards and Architecture diagram are
     both "web client / mobile client / shared backend / database", so
     both are built from the same categorisation rather than from any
     hand-written copy. That keeps them true per project: a project with
     no mobile stack simply renders no mobile card and no mobile flow. */
  const byCat = (k: string): string[] =>
    (techCategories.find(([c]) => c === k)?.[1] as string[]) || [];
  const mobileKeys = ["flutter", "react native", "swift", "kotlin", "ios", "android", "dart"];
  const frontAll = byCat("Frontend");
  const mobileTech = frontAll.filter((t) => mobileKeys.some((k) => t.toLowerCase().includes(k)));
  const webTech = frontAll.filter((t) => !mobileTech.includes(t));
  const backTech = byCat("Backend");
  const dbTech = byCat("Database");
  const infraTech = byCat("Infrastructure");

  const listOr = (arr: string[], fb: string) => (arr.length ? arr.join(", ") : fb);

  /* ── Hero meta strip ───────────────────────────────────────────────
     Four facts, each dropped when its column is empty, so the strip is
     never padded out with "N/A". */
  /* Each cell holds a SHORT keyword, never a trimmed sentence.
     The previous helper split on any dash, which turned "4-6 Months" into
     "4", and ellipsised anything long, which is where the "…" came from.
     This one takes the first sentence and, if that is still too long,
     returns nothing -- so the caller falls back to a real keyword rather
     than showing a chopped-off phrase. */
  const shortLabel = (v: any, max = 34): string => {
    const t = String(v || "").trim();
    if (!t) return "";
    const first = t.split(". ")[0].trim().replace(/[.,;:]$/, "");
    return first.length <= max ? first : "";
  };

  /* Solution: a keyword built from the stack tiers -- "Web + Mobile
     Platform" -- unless `description` is short enough to BE a label.
     `subtitle` is never used here: it is the hero's lead paragraph, and
     a 40-word sentence in a 160px cell is what broke this strip. */
  const stackLabel =
    [webTech.length && "Web", mobileTech.length && "Mobile"].filter(Boolean).join(" + ");
  const solutionLabel =
    shortLabel(project.description) ||
    (stackLabel ? `${stackLabel} Platform` : project.category || "Custom Software");

  const heroMeta = [
    { label: "Industry", value: shortLabel(project.category, 28) },
    { label: "Solution", value: solutionLabel },
    { label: "Role", value: shortLabel(project.role) },
    { label: "Duration", value: shortLabel(project.duration, 24) },
    { label: "Team Size", value: shortLabel(project.team_size, 24) },
  ].filter((m) => m.value).slice(0, 4);

  const snapshotRows: { label: string; value: string; href?: string }[] = [
    { label: "Project Name", value: name },
    { label: "Industry", value: project.category },
    { label: "Solution", value: project.description || solutionLabel },
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Team Size", value: project.team_size },
    { label: "Technologies", value: techStack.slice(0, 6).join(", ") },
    { label: "Development Partner", value: "mTouch Labs" },
  ].filter((r) => r.value && String(r.value).trim());
  if (project.live_url) {
    snapshotRows.push({
      label: "Official Website",
      value: String(project.live_url).replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: String(project.live_url),
    });
  }

  const aboutParas = paras(project.about);
  const aboutLead = aboutParas[0] || project.subtitle;
  const aboutRest = aboutParas.slice(1);
  const contextParas = paras(project.industry_background);

  const challenges = lines(project.requirements).map(splitLine);
  const objectives = lines(project.objectives).map(splitLine);

  /* Solution pillars — only the ones this project's stack supports. */
  const pillars = [
    webTech.length && {
      icon: "🌐",
      title: "Web Application",
      desc: `The primary browser experience, built with ${webTech.join(", ")}. Users explore ${shortName}, view detailed information and complete their journey through a clear, organised interface.`,
    },
    mobileTech.length && {
      icon: "📱",
      title: "Mobile Application",
      desc: `Extends the experience to mobile users, built with ${mobileTech.join(", ")}. A convenient channel to access the platform and interact with it from any device.`,
    },
    (backTech.length || dbTech.length) && {
      icon: "⚙️",
      title: "Backend & Administration",
      desc: `Supporting services built on ${listOr(backTech, "a REST API")}${dbTech.length ? `, with data held in ${dbTech.join(", ")}` : ""} — managing content, coordinating functionality and keeping every client in step.`,
    },
  ].filter(Boolean) as { icon: string; title: string; desc: string }[];

  const strategyParas = paras(project.strategy_approach);
  const archParas = paras(project.solution_architecture);
  const uiuxItems = lines(project.ui_ux_highlights).map(splitLine);
  const devItems = lines(project.development_process).map(splitLine);
  const securityItems = lines(project.security_performance).map(splitLine);
  const impactItems = lines(project.business_impact).map(splitLine);
  const futureItems = lines(project.future_scope).map(splitLine);
  const conclusionParas = paras(project.conclusion);
  const serviceTags: string[] = (project.tags || "")
    .split(",").map((t: string) => t.trim()).filter(Boolean).slice(0, 6);

  /* Architecture flows: client → backend → database, one row per client. */
  const backendNode = listOr(backTech, "Backend API");
  const dbNode = listOr(dbTech, "Database");
  const flows = [
    webTech.length && { client: `${webTech[0]} Web App` },
    mobileTech.length && { client: `${mobileTech[0]} Mobile App` },
  ].filter(Boolean) as { client: string }[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(main) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}

      {/* The stylesheet travels with the page rather than as a <link> to
          /public -- see the note at the top of ./case-study-css.ts for why.
          Rendered before the markup so there is never an unstyled flash. */}
      <style dangerouslySetInnerHTML={{ __html: CASE_STUDY_CSS }} />

      <div className="cs">
        {/* ═══════════ HERO ═══════════ */}
        <section className="cs-hero">
          <div className="cs-wrap">
            <nav className="cs-crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/portfolio">Portfolio</Link><span>/</span>
              <span className="cs-crumb__now">{shortName}</span>
            </nav>

            {serviceTags.length > 0 && (
              <div className="cs-tags">
                {serviceTags.slice(0, 4).map((t, i) => (
                  <span key={i} className="cs-tag">{t}</span>
                ))}
              </div>
            )}

            {/* Flat black, whole line. The two-tone split highlighted a word
                that is often just the brand name, which made short titles
                read as half-broken. */}
            <h1 className="cs-h1">{name}</h1>
            <p className="cs-lead" dangerouslySetInnerHTML={{ __html: String(project.subtitle || "") }} />

            <div className="cs-acts">
              {/* Primary: flat Signature Blue, white label, tilted arrow.
                  The arrow is an inline SVG, not a glyph, so it can never
                  be recoloured into invisibility by an inherited hover
                  rule and never depends on a Font Awesome build. */}
              <a
                href={project.live_url || "/contact-us"}
                {...(project.live_url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="cs-btn cs-btn--primary"
              >
                {project.live_url ? "View Live Project" : "Start a Project"}
                <svg className="cs-btn__ar" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {/* Secondary: white plate, Signature Blue border, ink label. */}
              <a href="#solution" className="cs-btn cs-btn--secondary">Explore Solution</a>
            </div>

            {heroMeta.length > 0 && (
              <div className="cs-meta">
                {heroMeta.map((m, i) => (
                  <div key={i} className="cs-meta__item">
                    <span className="cs-meta__k">{m.label}</span>
                    <span className="cs-meta__v">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ═══════════ ABOUT THE PROJECT ═══════════ */}
        <section className="cs-sec" id="about">
          <div className="cs-wrap">
            {/* The heading, the lead and the body all sit in the LEFT
                column so Business Context starts level with the eyebrow
                instead of below the lead paragraph. */}
            <div className={contextParas.length ? "cs-2col cs-2col--top" : ""}>
              <div>
                <div className="cs-head">
                  <span className="cs-eyebrow">About the Project</span>
                  <h2 className="cs-h2">Inside {shortName}</h2>
                </div>
                <div className="cs-prose">
                  {/* dangerouslySetInnerHTML, not {aboutLead}: the `about`
                      column contains real internal links. Rendered as a JSX
                      child, React escapes the markup and the reader sees the
                      raw <a href="..."> tag as text. */}
                  {aboutLead && (
                    <p className="cs-prose__lead" dangerouslySetInnerHTML={{ __html: aboutLead }} />
                  )}
                  {aboutRest.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
              {contextParas.length > 0 && (
                <div className="cs-note">
                  <h3>Business Context</h3>
                  {contextParas.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════ PROJECT SNAPSHOT ═══════════ */}
        <section className="cs-sec cs-sec--white">
          <div className="cs-wrap">
            <div className="cs-head">
              <span className="cs-eyebrow">Project Snapshot</span>
              <h2 className="cs-h2">Key project details at a glance</h2>
            </div>
            <table className="cs-table">
              <tbody>
                {snapshotRows.map((r, i) => (
                  <tr key={i}>
                    <th scope="row">{r.label}</th>
                    <td>{r.href
                      ? <a href={r.href} target="_blank" rel="noopener noreferrer">{r.value}</a>
                      : r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════ CHALLENGES & OBJECTIVES ═══════════ */}
        {(challenges.length > 0 || objectives.length > 0) && (
          <section className="cs-sec">
            <div className="cs-wrap">
              <div className="cs-2col cs-2col--top">
                {challenges.length > 0 && (
                  <div>
                    <div className="cs-head">
                      <span className="cs-eyebrow">Business Challenges</span>
                      <h2 className="cs-h2">What we set out to solve</h2>
                    </div>
                    <ul className="cs-checks">
                      {challenges.map((c, i) => (
                        <li key={i}>
                          <span className="cs-checks__n">{i + 1}</span>
                          <div>
                            {c.desc ? (
                              <>
                                <strong dangerouslySetInnerHTML={{ __html: c.title }} />
                                <span dangerouslySetInnerHTML={{ __html: c.desc }} />
                              </>
                            ) : (
                              <span dangerouslySetInnerHTML={{ __html: c.title }} />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {objectives.length > 0 && (
                  <div>
                    <div className="cs-head">
                      <span className="cs-eyebrow">Project Objectives</span>
                      <h2 className="cs-h2">What success looked like</h2>
                    </div>
                    <ul className="cs-checks">
                      {objectives.map((o, i) => (
                        <li key={i}>
                          {/* Drawn, not the ✓ character: the glyph is missing
                              from some system fonts and renders as a box. */}
                          <span className="cs-checks__n cs-checks__n--tick" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                              <path d="M3.5 8.5l3 3 6-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <div>
                            {o.desc ? (
                              <>
                                <strong dangerouslySetInnerHTML={{ __html: o.title }} />
                                <span dangerouslySetInnerHTML={{ __html: o.desc }} />
                              </>
                            ) : (
                              <span dangerouslySetInnerHTML={{ __html: o.title }} />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ OUR SOLUTION ═══════════ */}
        {pillars.length > 0 && (
          <section className="cs-sec cs-sec--white" id="solution">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Our Solution</span>
                <h2 className="cs-h2">A connected digital platform</h2>
                <p className="cs-desc">
                  mTouch Labs built {shortName} as one connected system, bringing the
                  customer-facing experience and the supporting platform capabilities together.
                </p>
              </div>
              <div className="cs-grid cs-grid--3">
                {pillars.map((p, i) => (
                  <div key={i} className="cs-card">
                    <span className="cs-card__ico" aria-hidden="true">{p.icon}</span>
                    <h3>{p.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                ))}
              </div>
              {strategyParas.length > 0 && (
                <div className="cs-note cs-note--wide">
                  <h3>Our Approach</h3>
                  {strategyParas.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════ PROJECT SCREENS ═══════════ */}
        {(webScreens.length > 0 || appScreens.length > 0) && (
          <section className="cs-sec" id="screens">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Project Screens</span>
                <h2 className="cs-h2">Selected interfaces from the platform</h2>
                <p className="cs-desc">
                  Key screens from {shortName} across its web and mobile experiences.
                </p>
              </div>

              {webScreens.length > 0 && (
                <>
                  <h3 className="cs-subh">Website Screens</h3>
                  <div className="cs-shots cs-shots--web">
                    {webScreens.map((s: string, i: number) => (
                      <figure key={i} className="cs-shot">
                        <img src={imgUrl(s)} alt={`${name} — web screen ${i + 1}`} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </>
              )}

              {appScreens.length > 0 && (
                <>
                  <h3 className="cs-subh">Mobile App Screens</h3>
                  <div className="cs-shots cs-shots--app">
                    {appScreens.map((s: string, i: number) => (
                      <figure key={i} className="cs-shot cs-shot--app">
                        <img src={imgUrl(s)} alt={`${name} — app screen ${i + 1}`} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* ═══════════ KEY FEATURES ═══════════ */}
        {features.length > 0 && (
          <section className="cs-sec cs-sec--white" id="features">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Key Features</span>
                <h2 className="cs-h2">Essential {String(project.category || "platform").toLowerCase()} capabilities</h2>
                <p className="cs-desc">
                  The platform brings its core features together into one coherent experience
                  across web and mobile.
                </p>
              </div>
              <div className="cs-grid cs-grid--3">
                {features.map((f: any, i: number) => (
                  <div key={i} className="cs-card">
                    <span className="cs-card__ico" aria-hidden="true">{featureEmojis[i % featureEmojis.length]}</span>
                    <h3 dangerouslySetInnerHTML={{ __html: String(f.title || f) }} />
                    {f.description && <p dangerouslySetInnerHTML={{ __html: String(f.description) }} />}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ TECHNOLOGY STACK ═══════════ */}
        {techStack.length > 0 && (
          <section className="cs-sec" id="tech">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Technology Stack</span>
                <h2 className="cs-h2">Modern foundation for web, mobile &amp; backend</h2>
                <p className="cs-desc">
                  The platform was built on a modern stack chosen to support its web, mobile and
                  backend requirements.
                </p>
              </div>
              <div className="cs-grid cs-grid--4">
                {techStack.slice(0, 8).map((t: string, i: number) => {
                  const role =
                    mobileTech.includes(t) ? "Mobile application — the experience on phones and tablets."
                    : webTech.includes(t)  ? "Web application — the browser-based storefront and interface."
                    : backTech.includes(t) ? "Backend layer — powers communication between the clients and platform services."
                    : dbTech.includes(t)   ? "Database — stores and manages structured data for the platform."
                    : infraTech.includes(t)? "Infrastructure — hosting, delivery and deployment."
                    : "Supporting technology used across the platform.";
                  return (
                    <div key={i} className="cs-tech">
                      <span className="cs-tech__mark">{t.split(/[\s.]/)[0]}</span>
                      <h4>{t}</h4>
                      <p>{role}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ SOLUTION ARCHITECTURE ═══════════ */}
        {(flows.length > 0 || archParas.length > 0) && (
          <section className="cs-sec cs-sec--white">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Solution Architecture</span>
                <h2 className="cs-h2">Shared backend, independent clients</h2>
              </div>
              <div className="cs-arch">
                {flows.map((f, i) => (
                  <div key={i} className="cs-arch__row">
                    <span className="cs-node">{f.client}</span>
                    <span className="cs-arrow" aria-hidden="true">→</span>
                    <span className="cs-node cs-node--api">{backendNode}</span>
                    <span className="cs-arrow" aria-hidden="true">→</span>
                    <span className="cs-node cs-node--db">{dbNode}</span>
                  </div>
                ))}
                <div className="cs-arch__note">
                  {archParas.length > 0
                    ? archParas.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)
                    : <p>
                        Each client talks to one shared {backendNode} service, which handles
                        requests and connects the customer-facing experience with platform data
                        held in {dbNode}. That gives a common data foundation while keeping the
                        presentation layers independent and separately releasable.
                      </p>}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ UI/UX + DEVELOPMENT ═══════════ */}
        {(uiuxItems.length > 0 || devItems.length > 0) && (
          <section className="cs-sec">
            <div className="cs-wrap">
              <div className="cs-2col cs-2col--top">
                {uiuxItems.length > 0 && (
                  <div>
                    <div className="cs-head">
                      <span className="cs-eyebrow">UI / UX Design</span>
                      <h2 className="cs-h2">Consistent visual identity across platforms</h2>
                    </div>
                    {/* Same rows as "From design to production", with no
                        marker -- `--plain` drops the blue dot. A line with no
                        "Title: description" split is one sentence, so it
                        stays grey body copy instead of being promoted to a
                        bold black heading. */}
                    <ul className="cs-dots cs-dots--plain">
                      {uiuxItems.map((u, i) => (
                        <li key={i}>
                          <div>
                            {u.desc ? (
                              <>
                                <strong dangerouslySetInnerHTML={{ __html: u.title }} />
                                <span dangerouslySetInnerHTML={{ __html: u.desc }} />
                              </>
                            ) : (
                              <span dangerouslySetInnerHTML={{ __html: u.title }} />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {devItems.length > 0 && (
                  <div>
                    <div className="cs-head">
                      <span className="cs-eyebrow">Development &amp; Implementation</span>
                      <h2 className="cs-h2">From design to production</h2>
                    </div>
                    <ul className="cs-dots">
                      {devItems.map((d, i) => (
                        <li key={i}>
                          <span className="cs-dot" aria-hidden="true"></span>
                          <div>
                            {d.desc ? (
                              <>
                                <strong dangerouslySetInnerHTML={{ __html: d.title }} />
                                <span dangerouslySetInnerHTML={{ __html: d.desc }} />
                              </>
                            ) : (
                              <span dangerouslySetInnerHTML={{ __html: d.title }} />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ SECURITY & PERFORMANCE ═══════════ */}
        {securityItems.length > 0 && (
          <section className="cs-sec cs-sec--white">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Security &amp; Performance</span>
                <h2 className="cs-h2">Reliable operation across web and mobile</h2>
              </div>
              {/* Blue-dot rows -- the same component as "From design to
                  production". */}
              <ul className="cs-dots">
                {securityItems.map((it, i) => (
                  <li key={i}>
                    <span className="cs-dot" aria-hidden="true"></span>
                    <div>
                      {it.desc ? (
                        <>
                          <strong dangerouslySetInnerHTML={{ __html: it.title }} />
                          <span dangerouslySetInnerHTML={{ __html: it.desc }} />
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: it.title }} />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ═══════════ RESULTS & BUSINESS IMPACT ═══════════ */}
        {impactItems.length > 0 && (
          <section className="cs-sec" id="results">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Results &amp; Business Impact</span>
                <h2 className="cs-h2">What the completed platform delivers</h2>
              </div>
              <div className="cs-grid cs-grid--4">
                {impactItems.map((r, i) => (
                  <div key={i} className="cs-res">
                    <span className="cs-res__n">{i + 1}</span>
                    <div>
                      {r.desc ? (
                        <>
                          <strong dangerouslySetInnerHTML={{ __html: r.title }} />
                          <p dangerouslySetInnerHTML={{ __html: r.desc }} />
                        </>
                      ) : (
                        <p dangerouslySetInnerHTML={{ __html: r.title }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {conclusionParas.length > 0 && (
                <div className="cs-note cs-note--wide cs-note--plain">
                  {conclusionParas.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════ FUTURE SCOPE ═══════════ */}
        {futureItems.length > 0 && (
          <section className="cs-sec cs-sec--white">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Future Scope</span>
                <h2 className="cs-h2">Where the platform goes next</h2>
              </div>
              <ul className="cs-dots">
                {futureItems.map((f, i) => (
                  <li key={i}>
                    <span className="cs-dot" aria-hidden="true"></span>
                    <div>
                      {f.desc ? (
                        <>
                          <strong dangerouslySetInnerHTML={{ __html: f.title }} />
                          <span dangerouslySetInnerHTML={{ __html: f.desc }} />
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: f.title }} />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ═══════════ MTOUCH LABS' ROLE ═══════════ */}
        <section className="cs-sec">
          <div className="cs-wrap">
            <div className="cs-head">
              <span className="cs-eyebrow">mTouch Labs&rsquo; Role</span>
              <h2 className="cs-h2">How we contributed</h2>
            </div>
            <p className="cs-prose cs-prose--single">
              mTouch Labs delivered the {shortName} platform end to end. Our work covered
              {webTech.length ? ` the ${webTech.join(", ")} web application,` : ""}
              {mobileTech.length ? ` the ${mobileTech.join(", ")} mobile application,` : ""}
              {backTech.length ? ` the ${backTech.join(", ")} backend,` : ""}
              {dbTech.length ? ` and ${dbTech.join(", ")} data integration` : " and the supporting services"}
              {" "}— translating the approved UI/UX designs into working software connected to the
              underlying services and data layer.
            </p>
            {serviceTags.length > 0 && (
              <>
                <h3 className="cs-subh">Related Services</h3>
                <div className="cs-pills">
                  {serviceTags.map((t, i) => (
                    <span key={i} className="cs-pill">{t}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ═══════════ RELATED PROJECTS ═══════════ */}
        {related.length > 0 && (
          <section className="cs-sec cs-sec--white">
            <div className="cs-wrap">
              <div className="cs-head">
                <span className="cs-eyebrow">Related Projects</span>
                <h2 className="cs-h2">More {String(project.category || "").toLowerCase()} solutions</h2>
              </div>
              <div className="cs-rels">
                {related.map((rp: any) => (
                  <Link key={rp.id} href={`/portfolio/${rp.slug}`} className="cs-rel">
                    <h4>{cleanTitle(rp.title, rp.slug)}</h4>
                    {rp.subtitle && <p dangerouslySetInnerHTML={{ __html: String(rp.subtitle) }} />}
                    <span className="cs-rel__go">View project <span aria-hidden="true">→</span></span>
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
              {/* Centred head and a centred 880px column of ruled rows --
                  the same shape as the homepage FAQ. */}
              <div className="cs-head cs-head--center">
                <span className="cs-eyebrow">Frequently Asked Questions</span>
                <h2 className="cs-h2">Questions about {shortName}</h2>
                <p className="cs-desc">
                  What businesses ask us most often about this project and how we built it.
                </p>
              </div>
              <div className="cs-faqs">
                {faqs.map((f: any, i: number) => (
                  /* <details>, not a button + JS: the accordion works with
                     no script at all, and the first one opens by default
                     exactly as the reference design shows. */
                  /* `name` makes these an exclusive accordion natively --
                     opening one closes the others, with no JavaScript.
                     Exactly what the homepage FAQ does. */
                  <details
                    key={i}
                    className="cs-faq"
                    name="cs-faq"
                    {...(i === 0 ? { open: true } : {})}
                  >
                    <summary>
                      <span dangerouslySetInnerHTML={{ __html: String(f.question) }} />
                      <span className="cs-faq__ico" aria-hidden="true"></span>
                    </summary>
                    <p className="cs-faq__a" dangerouslySetInnerHTML={{ __html: String(f.answer) }} />
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ CTA ═══════════ */}
        <section className="cs-cta">
          <div className="cs-wrap">
            <h2>Have a project like this in mind?</h2>
            <p>We brought {shortName} to life. Tell us what you want to build.</p>
            <div className="cs-cta__btns">
              <Link href="/contact-us" className="cs-btn cs-btn--white">
                Start a Project
                <svg className="cs-btn__ar" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/portfolio" className="cs-btn cs-btn--ghost">Explore Portfolio</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}