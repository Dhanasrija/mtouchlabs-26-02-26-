import { sql } from "@/lib/db";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

// ─── DB ──────────────────────────────────────────────
async function getProject(slug: string) {
  const rows = await sql`SELECT *, faq_schema::text as faq_schema_text FROM portfolios WHERE slug = ${slug} AND published = true`;
  if (!rows[0]) return null;
  const project = rows[0];
  project.faq_schema = project.faq_schema_text ? JSON.parse(project.faq_schema_text) : [];
  return project;
}
async function getRelatedProjects(category: string, excludeId: number) {
  const rows = await sql`
    SELECT id, slug, title, subtitle, category, image, tech_stack, tags
    FROM portfolios WHERE category = ${category} AND id != ${excludeId} AND published = true
    ORDER BY created_at DESC LIMIT 3`;
  return rows;
}

// ─── HELPERS ─────────────────────────────────────────
function parseJSON(val: any, fb: any = []) { if (!val) return fb; if (Array.isArray(val)) return val; if (typeof val === 'object') return val; try { return JSON.parse(val) || fb; } catch { return fb; } }
function cleanTitle(t: string, slug?: string) {
  if (slug) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  const words = t.split(" ");
  const half = Math.floor(words.length / 2);
  if (words.length >= 4 && words.slice(0, half).join(" ") === words.slice(half).join(" "))
    return words.slice(0, half).join(" ");
  const suffixes = ["Mobile App Development", "Web Development", "App Development"];
  for (const s of suffixes) {
    if (t.endsWith(s + " " + s)) return t.replace(s + " " + s, s);
  }
  const cleaned = words.filter((word, i) => i === 0 || word.toLowerCase() !== words[i - 1].toLowerCase());
  return cleaned.join(" ");
}

function splitTitle(t: string, slug?: string): { highlight: string; rest: string } {
  const clean = cleanTitle(t, slug);
  const words = clean.split(" ");

  // Common generic suffixes to NOT highlight
  const genericWords = [
    "mobile", "app", "application", "development", "web", "platform",
    "solution", "solutions", "system", "service", "services", "software",
    "company", "portal", "website", "online", "digital", "management",
  ];

  // Find where the brand name ends and generic words begin
  let brandEnd = words.length;
  for (let i = 0; i < words.length; i++) {
    if (genericWords.includes(words[i].toLowerCase())) {
      brandEnd = i;
      break;
    }
  }

  // If no brand found (all generic), highlight first word
  if (brandEnd === 0) brandEnd = 1;

  return {
    highlight: words.slice(0, brandEnd).join(" "),
    rest: words.slice(brandEnd).join(" "),
  };
}

function imgUrl(p: string | null | undefined): string {
  if (!p) return '';
  if (p.startsWith('http')) return p;
  if (p.startsWith('/')) return p;
  return `/${p}`;
}

// ─── SEO ─────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) return { title: 'Project Not Found | mTouch Labs' };
  const tags = p.tags ? p.tags.split(',').map((t: string) => t.trim().toLowerCase()) : [];
  const fullImg = p.og_image || p.image ? (p.og_image || p.image).startsWith('http') ? (p.og_image || p.image) : `https://www.mtouchlabs.com${imgUrl(p.og_image || p.image)}` : '';
  return {
    title: p.meta_title || `${cleanTitle(p.title)} | mTouch Labs Portfolio`,
    description: p.meta_description || p.subtitle || `${p.title} — a ${p.category} project by mTouch Labs.`,
    keywords: [`${p.category} app development`, ...tags, 'mTouch Labs', 'app development Hyderabad'],
    openGraph: { title: p.og_title || p.title, description: p.og_description || p.subtitle, url: p.canonical_url || `/portfolio/${p.slug}`, siteName: 'mTouch Labs', type: 'article', images: fullImg ? [{ url: fullImg, width: 1200, height: 630 }] : [] },
    twitter: { card: 'summary_large_image', title: p.og_title || p.title, description: p.og_description || p.subtitle },
    alternates: { canonical: p.canonical_url || `/portfolio/${p.slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1 } },
  };
}

// ─── STRUCTURED DATA ─────────────────────────────────
function buildSchemas(p: any) {
  const fullImg = p.image ? (p.image.startsWith('http') ? p.image : `https://www.mtouchlabs.com${imgUrl(p.image)}`) : '';
  const main: any = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, description: p.about || p.subtitle, url: `https://www.mtouchlabs.com/portfolio/${p.slug}`, image: fullImg, genre: p.category, keywords: p.tags, datePublished: p.created_at, creator: { '@type': 'Organization', name: 'mTouch Labs', url: 'https://www.mtouchlabs.com' } };
  if (p.play_store_url) main.associatedMedia = { '@type': 'SoftwareApplication', operatingSystem: 'Android', installUrl: p.play_store_url };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mtouchlabs.com' }, { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.mtouchlabs.com/portfolio' }, { '@type': 'ListItem', position: 3, name: p.title, item: `https://www.mtouchlabs.com/portfolio/${p.slug}` }] };
  const faqs = Array.isArray(p.faq_schema) ? p.faq_schema : parseJSON(p.faq_schema);
  const faq = faqs.length > 0 ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f: any) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) } : null;
  return { main, bc, faq };
}

// ─── SVG ICON COMPONENTS ────────────────────────────
const tocIconsSvg: Record<string, string> = {
  'project-overview': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  'industry-background': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'business-challenges': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  'objectives-requirements': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  'strategy-approach': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/></svg>',
  'technology-stack': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  'solution-architecture': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  'key-features': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'ui-ux-highlights': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  'screens': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
  'color-palette': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>',
  'typography': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  'development-process': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  'security-performance': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  'results-impact': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  'future-scope': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  'conclusion': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  'faq': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
};

const featureEmojis = ['📊','🤖','💼','🎨','🔔','📤','⚡','🛡️','🔄','📈','🌐','🔍'];

function categorizeTech(stack: string[]) {
  const cats: Record<string, string[]> = { Frontend: [], Backend: [], Database: [], Infrastructure: [], 'AI/ML': [], Other: [] };
  const fe = ['react','flutter','angular','vue','ios','android','swift','kotlin','html','css','javascript','typescript','dart','tailwind','bootstrap','next','nuxt','svelte','jquery'];
  const be = ['node','java','php','python','laravel','.net','spring','express','django','flask','ruby','rails','go','graphql','rest','api','nest','fastapi'];
  const db = ['mysql','mongo','firebase','sql','redis','postgresql','dynamodb','sqlite','supabase','neon','cassandra','oracle'];
  const infra = ['aws','azure','gcp','docker','kubernetes','nginx','vercel','heroku','cloudflare','jenkins','github','gitlab','ci/cd','terraform'];
  const ai = ['tensorflow','pytorch','openai','gpt','ml','ai','machine learning','deep learning','nlp','langchain'];
  stack.forEach(t => {
    const l = t.toLowerCase();
    if (fe.some(k => l.includes(k))) cats.Frontend.push(t);
    else if (be.some(k => l.includes(k))) cats.Backend.push(t);
    else if (db.some(k => l.includes(k))) cats.Database.push(t);
    else if (infra.some(k => l.includes(k))) cats.Infrastructure.push(t);
    else if (ai.some(k => l.includes(k))) cats['AI/ML'].push(t);
    else cats.Other.push(t);
  });
  return Object.entries(cats).filter(([, v]) => v.length > 0);
}

// ═════════════════════════════════════════════════════
export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const related = await getRelatedProjects(project.category, project.id);

  const techStack = parseJSON(project.tech_stack);
  const features = parseJSON(project.features);
  const appScreens = parseJSON(project.app_screens).filter((s: string) => s);
  const webScreens = parseJSON(project.web_screens).filter((s: string) => s);
  const colorPalette = parseJSON(project.color_palette);
  const typography = parseJSON(project.typography, {});
  const faqs = Array.isArray(project.faq_schema) ? project.faq_schema : parseJSON(project.faq_schema);
  const allScreens = [...appScreens, ...webScreens];
  const techCategories = categorizeTech(techStack);

  const { main, bc, faq } = buildSchemas(project);
  const hasAbout = project.about?.trim() && !['nodeJS', 'Node JS'].includes(project.about.trim());
  const hasReq = project.requirements?.trim();
  const hasImpact = project.business_impact?.trim();

  const tocItems = [
    { id: 'project-overview', label: 'Project Overview', show: true },
    { id: 'industry-background', label: 'Industry Background', show: true },
    { id: 'business-challenges', label: 'Business Challenges', show: !!hasReq },
    { id: 'objectives-requirements', label: 'Objectives & Requirements', show: !!hasReq },
    { id: 'strategy-approach', label: 'Strategy & Approach', show: true },
    { id: 'technology-stack', label: 'Technology Stack', show: techStack.length > 0 },
    { id: 'solution-architecture', label: 'Solution Architecture', show: true },
    { id: 'key-features', label: 'Key Features', show: features.length > 0 },
    { id: 'ui-ux-highlights', label: 'UI/UX Highlights', show: allScreens.length > 0 },
    { id: 'screens', label: 'Screens', show: allScreens.length > 0 },
    { id: 'color-palette', label: 'Color Palette', show: colorPalette.length > 0 },
    { id: 'typography', label: 'Typography', show: !!typography?.font },
    { id: 'development-process', label: 'Development Process', show: true },
    { id: 'security-performance', label: 'Security & Performance', show: true },
    { id: 'results-impact', label: 'Results & Impact', show: !!hasImpact },
    { id: 'future-scope', label: 'Future Scope', show: true },
    { id: 'conclusion', label: 'Conclusion', show: true },
    { id: 'faq', label: 'FAQ', show: faqs.length > 0 },
  ];
  const visibleToc = tocItems.filter(t => t.show);

  const devSteps = [
    { title: 'Discovery & Research', desc: 'User interviews, competitive analysis, and technical feasibility assessment' },
    { title: 'Design & Prototyping', desc: 'Creating wireframes, design system, and interactive prototypes in Figma' },
    { title: 'Core Development', desc: `Building the application with ${techStack.slice(0,3).join(', ') || 'modern technologies'}` },
    { title: 'Integration & APIs', desc: 'Connecting services, third-party integrations, and data pipelines' },
    { title: 'Testing & QA', desc: 'Automated testing, performance optimization, and user acceptance testing' },
    { title: 'Deployment & Launch', desc: 'Production deployment, monitoring setup, and post-launch support' },
  ];

const titleParts = splitTitle(project.title, slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(main) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}

<div className="cs" style={{ backgroundColor: 'var(--ma-dark)' }}>
        {/* ═══ HERO — Full-width blue gradient ═══ */}
        <section className="cs-hero">
          <div className="cs-hero__inner">
            {/* Breadcrumb */}
            <nav className="cs-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/portfolio">Portfolio</Link>
              <span>/</span>
              <span className="cs-hero__breadcrumb-current">{cleanTitle(project.title)}</span>
            </nav>

            {/* Tech stack pills */}
            {techStack.length > 0 && (
              <div className="cs-hero__pills">
                {techStack.slice(0, 5).map((t: string, i: number) => (
                  <span key={i} className="cs-hero__pill">{t}</span>
                ))}
              </div>
            )}

<h1 className="cs-hero__title"><span className="cs-hero__highlight">{titleParts.highlight}</span> {titleParts.rest}</h1>
            <p className="cs-hero__sub">{project.subtitle}</p>

            {/* Store buttons in hero */}
            {(project.play_store_url || project.app_store_url) && (
              <div className="cs-hero__stores">
                {project.play_store_url && <a href={project.play_store_url} target="_blank" rel="noopener noreferrer" className="cs-store"><i className="fab fa-google-play"></i><div><small>GET IT ON</small><strong>Google Play</strong></div></a>}
                {project.app_store_url && <a href={project.app_store_url} target="_blank" rel="noopener noreferrer" className="cs-store"><i className="fab fa-apple"></i><div><small>Download on</small><strong>App Store</strong></div></a>}
              </div>
            )}

            {/* Info cards row */}
            <div className="cs-hero__cards">
              {project.role && (
                <div className="cs-hero__card">
                  <span className="cs-hero__card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                  <span className="cs-hero__card-label">Role</span>
                  <span className="cs-hero__card-value">{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div className="cs-hero__card">
                  <span className="cs-hero__card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                  <span className="cs-hero__card-label">Duration</span>
                  <span className="cs-hero__card-value">{project.duration}</span>
                </div>
              )}
              {project.team_size && (
                <div className="cs-hero__card">
                  <span className="cs-hero__card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                  <span className="cs-hero__card-label">Team</span>
                  <span className="cs-hero__card-value">{project.team_size}</span>
                </div>
              )}
              <div className="cs-hero__card">
                <span className="cs-hero__card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
                <span className="cs-hero__card-label">Category</span>
                <span className="cs-hero__card-value">{project.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MOBILE TOC — Horizontal scrollable bar ═══ */}
        <nav className="cs-toc-mobile" aria-label="Table of Contents Mobile">
          <div className="cs-toc-mobile__scroll">
            {visibleToc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="cs-toc-mobile__link" data-section={item.id}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ═══ MAIN LAYOUT: TOC LEFT + CONTENT RIGHT ═══ */}
        <div className="cs-layout">

          {/* ── STICKY TOC SIDEBAR (Desktop) ── */}
          <aside className="cs-toc" aria-label="Table of Contents">
            <nav>
              <p className="cs-toc__heading">TABLE OF CONTENTS</p>
              <ul className="cs-toc__list">
                {visibleToc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="cs-toc__link" data-section={item.id}>
                      <span className="cs-toc__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg[item.id] || '' }} />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* ── CONTENT COLUMN ── */}
          <div className="cs-content">

            {/* 1. PROJECT OVERVIEW */}
            <section id="project-overview" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['project-overview'] }} /> Project Overview</h2>
              <div className="cs-sec__text">
                {hasAbout ? project.about.split('\n').filter((p: string) => p.trim()).map((para: string, i: number) => (
                  <p key={i}>{para.trim()}</p>
                )) : <p>{project.subtitle}</p>}
              </div>
            </section>

            {/* 2. INDUSTRY BACKGROUND */}
            <section id="industry-background" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['industry-background'] }} /> About the Industry / Client Background</h2>
              <div className="cs-sec__text">
                <p>The <strong>{project.category}</strong> industry is rapidly evolving with digital transformation at its core. Businesses in this space face increasing demand for seamless digital experiences and scalable platforms that simplify complex decision-making processes.</p>
                <p>{cleanTitle(project.title)} was envisioned to address these market needs by delivering a modern, intuitive platform built with {techStack.slice(0, 3).join(', ')}.</p>
              </div>
            </section>

            {/* 3. BUSINESS CHALLENGES */}
            {hasReq && (
              <section id="business-challenges" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['business-challenges'] }} /> Business Challenges</h2>
                <div className="cs-challenge-list">
                  {project.requirements.split('\n').map((line: string, i: number) => {
                    const t = line.trim(); if (!t) return null;
                    return (
                      <div key={i} className="cs-challenge-card">
                        <span className="cs-challenge-num">{i+1}</span>
                        <p>{t.replace('•','').trim()}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 4. OBJECTIVES & REQUIREMENTS */}
            {hasReq && (
              <section id="objectives-requirements" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['objectives-requirements'] }} /> Objectives &amp; Requirements</h2>
                <div className="cs-obj-list">
                  <div className="cs-obj-card"><span className="cs-obj-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span><p>Build a scalable platform with high performance and reliability</p></div>
                  <div className="cs-obj-card"><span className="cs-obj-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span><p>Create an intuitive, customizable interface with minimal learning curve</p></div>
                  <div className="cs-obj-card"><span className="cs-obj-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span><p>Integrate intelligent features for proactive insights and automation</p></div>
                  <div className="cs-obj-card"><span className="cs-obj-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span><p>Ensure sub-2-second load times across all devices with responsive design</p></div>
                </div>
              </section>
            )}

            {/* 5. STRATEGY & APPROACH */}
            <section id="strategy-approach" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['strategy-approach'] }} /> Our Strategy &amp; Approach</h2>
              <div className="cs-card-blue">
                <p>Our team followed an agile development methodology with continuous feedback loops. The project was broken into iterative sprints focusing on discovery &amp; research, UI/UX design, development, testing, and deployment. We prioritized the most impactful features first — then layered on advanced capabilities in subsequent iterations.</p>
              </div>
            </section>

            {/* 6. TECHNOLOGY STACK */}
            {techStack.length > 0 && (
              <section id="technology-stack" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['technology-stack'] }} /> Technology Stack</h2>
                <div className="cs-tech-grid">
                  {techCategories.map(([cat, items]) => (
                    <div key={cat} className="cs-tech-card">
                      <span className="cs-tech-card__label">{cat.toUpperCase()}</span>
                      <div className="cs-tech-pills">
                        {items.map((t: string, j: number) => <span key={j} className="cs-tech-pill">{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. SOLUTION ARCHITECTURE */}
            <section id="solution-architecture" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['solution-architecture'] }} /> Solution Architecture</h2>
              <div className="cs-card-light">
                <p>The application follows a modern architecture with clear separation of concerns — a {techStack.filter((t: string) => ['React','Flutter','Angular','Vue','iOS','Android','Swift','Kotlin'].some(k => t.toLowerCase().includes(k.toLowerCase()))).join(', ') || 'modern UI'} frontend communicating with {techStack.filter((t: string) => ['Node','Java','PHP','Python','Laravel','.NET','Spring'].some(k => t.toLowerCase().includes(k.toLowerCase()))).join(', ') || 'REST APIs'} backend, powered by {techStack.filter((t: string) => ['MySQL','Mongo','Firebase','AWS','SQL','Redis','PostgreSQL'].some(k => t.toLowerCase().includes(k.toLowerCase()))).join(', ') || 'cloud databases'}.</p>
              </div>
            </section>

            {/* 8. KEY FEATURES */}
            {features.length > 0 && (
              <section id="key-features" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['key-features'] }} /> Key Features &amp; Functionalities</h2>
                <div className="cs-feat-grid">
                  {features.map((f: any, i: number) => (
                    <div key={i} className="cs-feat-card">
                      <span className="cs-feat-emoji">{featureEmojis[i % featureEmojis.length]}</span>
                      <h3>{f.title || f}</h3>
                      {f.description && <p>{f.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 9. UI/UX HIGHLIGHTS */}
            {allScreens.length > 0 && (
              <section id="ui-ux-highlights" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['ui-ux-highlights'] }} /> UI/UX Design Highlights</h2>
                <div className="cs-uiux-list">
                  <div className="cs-uiux-item"><span className="cs-uiux-dot"></span><span>Drag-and-drop builder with customizable widget types</span></div>
                  <div className="cs-uiux-item"><span className="cs-uiux-dot"></span><span>Dark/light theme toggle with system preference detection</span></div>
                  <div className="cs-uiux-item"><span className="cs-uiux-dot"></span><span>Fluid animations on transitions using modern motion libraries</span></div>
                  <div className="cs-uiux-item"><span className="cs-uiux-dot"></span><span>Responsive layouts with virtual scrolling for large datasets</span></div>
                  <div className="cs-uiux-item"><span className="cs-uiux-dot"></span><span>Accessibility-first design meeting WCAG 2.1 AA standards</span></div>
                </div>
              </section>
            )}

            {/* 10. SCREENS */}
            {allScreens.length > 0 && (
              <section id="screens" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['screens'] }} /> Screens</h2>
                {appScreens.length > 0 && (
                  <div className="cs-screens-block">
                    <h3 className="cs-screens-block__title">App Screens</h3>
                    <div className="cs-app-screens-scroll">
                      {appScreens.map((screen: string, i: number) => (
                        <div key={i} className="cs-app-screen-card">
                          <img src={imgUrl(screen)} alt={`${cleanTitle(project.title)} - Screen ${i+1}`} loading="lazy" className="cs-app-screen-img" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {webScreens.length > 0 && (
                  <div className="cs-screens-block" style={{marginTop: '40px'}}>
                    <h3 className="cs-screens-block__title">Web Screens</h3>
                    <div className="cs-web-screens-grid">
                      {webScreens.map((screen: string, i: number) => (
                        <div key={i} className="cs-web-screen-card">
                          <img src={imgUrl(screen)} alt={`${cleanTitle(project.title)} - Web ${i+1}`} loading="lazy" className="cs-web-screen-img" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* 11. COLOR PALETTE */}
            {colorPalette.length > 0 && (
              <section id="color-palette" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['color-palette'] }} /> Color Palette</h2>
                <div className="cs-color-row">
                  {colorPalette.map((c: {hex:string;name:string}, i: number) => (
                    <div key={i} className="cs-color-card">
                      <div className="cs-color-swatch" style={{backgroundColor: c.hex}}></div>
                      <span className="cs-color-name">{c.name}</span>
                      <span className="cs-color-hex">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 12. TYPOGRAPHY */}
            {typography?.font && (
              <section id="typography" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['typography'] }} /> Typography</h2>
                <div className="cs-typo-stack">
                  <div className="cs-typo-row">
                    <div className="cs-typo-meta">
                      <h3 className="cs-typo-font-name">{typography.font}</h3>
                      <span className="cs-typo-weight">Headings — Bold 700</span>
                    </div>
                    <p className="cs-typo-sample cs-typo-sample--heading">The quick brown fox jumps</p>
                  </div>
                  <div className="cs-typo-row">
                    <div className="cs-typo-meta">
                      <h3 className="cs-typo-font-name">{typography.font}</h3>
                      <span className="cs-typo-weight">Body — Regular 400</span>
                    </div>
                    <p className="cs-typo-sample cs-typo-sample--body">Over the lazy dog near the bank</p>
                  </div>
                </div>
              </section>
            )}

            {/* 13. DEVELOPMENT PROCESS */}
            <section id="development-process" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['development-process'] }} /> Development Process</h2>
              <div className="cs-timeline">
                {devSteps.map((step, i) => (
                  <div key={i} className="cs-timeline__item">
                    <span className="cs-timeline__num">{i+1}</span>
                    <div className="cs-timeline__content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 14. SECURITY & PERFORMANCE */}
            <section id="security-performance" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['security-performance'] }} /> Security &amp; Performance Optimization</h2>
              <div className="cs-sp-grid">
                <div className="cs-sp-card"><span className="cs-sp-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><p>End-to-end encryption for all data in transit using TLS 1.3</p></div>
                <div className="cs-sp-card"><span className="cs-sp-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><p>AES-256 encryption for sensitive data at rest</p></div>
                <div className="cs-sp-card"><span className="cs-sp-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><p>OAuth 2.0 + MFA authentication with session management</p></div>
                <div className="cs-sp-card"><span className="cs-sp-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><p>Role-based access control (RBAC) with granular permissions</p></div>
                <div className="cs-sp-card"><span className="cs-sp-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><p>Regular security audits and penetration testing by third-party firms</p></div>
                <div className="cs-sp-card"><span className="cs-sp-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><p>SOC 2 Type II compliance for enterprise clients</p></div>
              </div>
            </section>

            {/* 15. RESULTS & IMPACT */}
            {hasImpact && (
              <section id="results-impact" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['results-impact'] }} /> Results &amp; Business Impact</h2>
                <div className="cs-impact-grid">
                  {project.business_impact.split('\n').map((line: string, i: number) => {
                    const t = line.trim(); if (!t) return null;
                    const text = t.replace(/^[•\-\d.]+\s*/, '').trim();
                    if (!text) return null;
                    const sepMatch = text.match(/^([^:—–\n]{3,50})[:\u2014\u2013]\s*(.+)/);
                    const title = sepMatch ? sepMatch[1].trim() : null;
                    const desc = sepMatch ? sepMatch[2].trim() : text;
                    const icons = ['🚀','📈','💡','🎯','⚡','🔍','🛡️','🤖','📊','🌐','✨','🔔'];
                    return (
                      <div key={i} className="cs-impact-card">
                        <div className="cs-impact-card__icon-wrap">
                          <span className="cs-impact-card__icon">{icons[i % icons.length]}</span>
                          <span className="cs-impact-card__num">{String(i+1).padStart(2,'0')}</span>
                        </div>
                        {title && <h3 className="cs-impact-card__title">{title}</h3>}
                        <p className="cs-impact-card__desc">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 16. FUTURE SCOPE */}
            <section id="future-scope" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['future-scope'] }} /> Future Scope &amp; Scalability</h2>
              <div className="cs-future-list">
                <div className="cs-future-item"><span className="cs-future-arrow">→</span><p>AI-Powered Personalization — Smart recommendations and personalized experiences</p></div>
                <div className="cs-future-item"><span className="cs-future-arrow">→</span><p>Advanced Analytics — Comprehensive dashboards for business insights</p></div>
                <div className="cs-future-item"><span className="cs-future-arrow">→</span><p>Multi-Language Support — Internationalization for global reach</p></div>
                <div className="cs-future-item"><span className="cs-future-arrow">→</span><p>Third-Party Integrations — API marketplace and ecosystem expansion</p></div>
                <div className="cs-future-item"><span className="cs-future-arrow">→</span><p>Mobile companion app with cross-platform support</p></div>
              </div>
            </section>

            {/* 17. CONCLUSION */}
            <section id="conclusion" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['conclusion'] }} /> Conclusion</h2>
              <div className="cs-conclusion-card">
                <p>{cleanTitle(project.title)} stands as a testament to what&apos;s possible when thoughtful design meets robust engineering. Built with {techStack.slice(0,3).join(', ')}, the project successfully addresses core challenges in the {project.category} space.</p>
                <p>At mTouch Labs, we&apos;re proud to have delivered a solution that not only met but exceeded performance targets. The modular architecture ensures the platform can evolve with market demands.</p>
              </div>
            </section>

            {/* 18. FAQ */}
            {faqs.length > 0 && (
              <section id="faq" className="cs-sec">
                <h2 className="cs-sec__h"><span className="cs-sec__icon" dangerouslySetInnerHTML={{ __html: tocIconsSvg['faq'] }} /> Frequently Asked Questions</h2>
                <div className="cs-faq-list">
                  {faqs.map((f: any, i: number) => (
                    <div key={i} className="cs-faq-item">
                      <button className="cs-faq-q" aria-expanded="false"><span>{f.question}</span><svg className="cs-faq-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                      <div className="cs-faq-a"><p>{f.answer}</p></div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ═══ DOWNLOAD APP ═══ */}
            {(project.play_store_url || project.app_store_url) && (
              <section className="cs-download">
                <div className="cs-download__inner">
                  {appScreens.length > 0 && <div className="cs-download__phone"><img src={imgUrl(appScreens[0])} alt="App preview" loading="lazy" /></div>}
                  <div className="cs-download__text">
                    <h2>Try {cleanTitle(project.title).split(' ').slice(0,2).join(' ')} Yourself</h2>
                    <p>Download the app and experience it firsthand.</p>
                    <div className="cs-download__btns">
                      {project.play_store_url && <a href={project.play_store_url} target="_blank" rel="noopener noreferrer" className="cs-store cs-store--solid"><i className="fab fa-google-play"></i><div><small>GET IT ON</small><strong>Google Play</strong></div></a>}
                      {project.app_store_url && <a href={project.app_store_url} target="_blank" rel="noopener noreferrer" className="cs-store cs-store--solid"><i className="fab fa-apple"></i><div><small>Download on</small><strong>App Store</strong></div></a>}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ═══ RELATED PROJECTS ═══ */}
            {related.length > 0 && (
              <section className="cs-related">
                <span className="cs-tag">Explore More</span>
                <h2 style={{fontSize: '24px', fontWeight: 800, color: 'var(--color-deep-indigo)', margin: '12px 0 24px'}}>More {project.category} Projects</h2>
                <div className="cs-related__grid">
                  {related.map((rp) => {
                    const rpTech = parseJSON(rp.tech_stack);
                    return (
                      <article key={rp.id} className="cs-related__card">
                        <Link href={`/portfolio/${rp.slug}`} className="cs-related__link">
                          <div className="cs-related__img-wrap">
                            <img src={imgUrl(rp.image)} alt={rp.title} loading="lazy" className="cs-related__img" />
                            <div className="cs-related__hover"><span>View Project →</span></div>
                          </div>
                          <div className="cs-related__body">
                            <span className="cs-related__cat">{rp.category}</span>
                            <h3 className="cs-related__title">{cleanTitle(rp.title)}</h3>
                            <div className="cs-related__tags">{rpTech.slice(0,3).map((t:string,j:number)=><span key={j} className="cs-related__tag">{t}</span>)}</div>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

          </div>{/* end cs-content */}
        </div>{/* end cs-layout */}

        {/* ═══ CTA ═══ */}
        <section className="cs-cta">
          <div className="cs-cta__glow"></div>
          <div className="cs-container">
            <div className="cs-cta__inner">
              <span className="cs-tag cs-tag--light">Let&apos;s Work Together</span>
              <h2 className="cs-cta__title">Have an idea? Let&apos;s build<br/>something amazing.</h2>
              <p className="cs-cta__desc">We brought {cleanTitle(project.title).split(' ')[0]}&apos;s vision to life. Now it&apos;s your turn.</p>
              <div className="cs-cta__btns">
                <Link href="/contact-us" className="cs-cta__primary">Start Your Project →</Link>
                <Link href="/portfolio" className="cs-cta__ghost">Explore Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ═══ SCRIPTS — IntersectionObserver scroll spy ═══ */}
      <script dangerouslySetInnerHTML={{ __html: `
(function initCsToc() {
  var desktopLinks = document.querySelectorAll('.cs-toc__link');
  var mobileLinks = document.querySelectorAll('.cs-toc-mobile__link');
  var allLinks = [].slice.call(desktopLinks).concat([].slice.call(mobileLinks));
  if (!allLinks.length) { setTimeout(initCsToc, 200); return; }

  var HEADER_OFFSET = 80;

  var sectionIds = [];
  var linkMap = {};
  desktopLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var id = href.slice(1);
      if (!linkMap[id]) linkMap[id] = [];
      linkMap[id].push(link);
      if (sectionIds.indexOf(id) === -1) sectionIds.push(id);
    }
  });
  mobileLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var id = href.slice(1);
      if (!linkMap[id]) linkMap[id] = [];
      linkMap[id].push(link);
      if (sectionIds.indexOf(id) === -1) sectionIds.push(id);
    }
  });

  var sectionEls = [];
  sectionIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) sectionEls.push(el);
  });

  var currentActive = null;

  function setActive(id) {
    if (id === currentActive) return;
    allLinks.forEach(function(l) {
      l.classList.remove('cs-toc__link--active');
      l.classList.remove('cs-toc-mobile__link--active');
    });
    if (linkMap[id]) {
      linkMap[id].forEach(function(l) {
        if (l.classList.contains('cs-toc__link')) l.classList.add('cs-toc__link--active');
        if (l.classList.contains('cs-toc-mobile__link')) l.classList.add('cs-toc-mobile__link--active');
      });
      var mobileBar = document.querySelector('.cs-toc-mobile__scroll');
      if (mobileBar && linkMap[id]) {
        linkMap[id].forEach(function(l) {
          if (l.classList.contains('cs-toc-mobile__link')) {
            l.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
      }
    }
    currentActive = id;
  }

  var observerOptions = {
    root: null,
    rootMargin: '-' + (HEADER_OFFSET + 40) + 'px 0px -60% 0px',
    threshold: 0
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, observerOptions);

  sectionEls.forEach(function(el) { observer.observe(el); });

  allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var id = this.getAttribute('href').substring(1);
      var el = document.getElementById(id);
      if (!el) return;
      setActive(id);
      var top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 20;
      window.scrollTo({ top: top, behavior: 'smooth' });
      history.pushState(null, '', '#' + id);
    });
  });

  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      var lastId = sectionIds[sectionIds.length - 1];
      if (lastId) setActive(lastId);
    }
  });

  setTimeout(function() {
    var triggerLine = window.scrollY + HEADER_OFFSET + 60;
    for (var i = sectionEls.length - 1; i >= 0; i--) {
      if (sectionEls[i].offsetTop <= triggerLine) {
        setActive(sectionEls[i].id);
        break;
      }
    }
  }, 300);

  if (window.location.hash) {
    var hashEl = document.getElementById(window.location.hash.substring(1));
    if (hashEl) {
      setTimeout(function() {
        var top = hashEl.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }, 400);
    }
  }

  document.querySelectorAll('.cs-app-screens-scroll').forEach(function(el) {
    var d=false,sx,sl;
    el.addEventListener('mousedown',function(e){d=true;el.style.cursor='grabbing';sx=e.pageX-el.offsetLeft;sl=el.scrollLeft});
    el.addEventListener('mouseleave',function(){d=false;el.style.cursor='grab'});
    el.addEventListener('mouseup',function(){d=false;el.style.cursor='grab'});
    el.addEventListener('mousemove',function(e){if(!d)return;e.preventDefault();el.scrollLeft=sl-((e.pageX-el.offsetLeft)-sx)*1.5});
  });

  document.querySelectorAll('.cs-faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var exp = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!exp));
      this.parentElement.classList.toggle('open');
    });
  });
})();
      `}} />
    </>
  );
}