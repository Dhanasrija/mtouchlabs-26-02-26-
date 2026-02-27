import { sql } from "@/lib/db";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";

export const dynamic = "force-dynamic";

// ─── DB ──────────────────────────────────────────────
async function getProject(slug: string) {
  const rows = await sql`SELECT *, faq_schema::text as faq_schema_text FROM portfolios WHERE slug = ${slug} AND published = true`;
  if (!rows[0]) return null;
  const project = rows[0];
  project.faq_schema = project.faq_schema_text ? JSON.parse(project.faq_schema_text) : [];
  return project;
}
// async function getRelatedProjects(category: string, excludeId: number) {
//   const rows = await sql`
//     SELECT id, slug, title, subtitle, category, image, tech_stack, tags
//     FROM portfolios WHERE category = ${category} AND id != ${excludeId} AND published = true
//     ORDER BY created_at DESC LIMIT 3`;
//   return rows;
// }

// // ─── HELPERS ─────────────────────────────────────────
// function parseJSON(val: string | null, fb: any = []) { if (!val) return fb; try { return JSON.parse(val) || fb; } catch { return fb; } }
// function cleanTitle(t: string) { const words = t.split(" "); const half = Math.floor(words.length / 2); if (words.length >= 4 && words.slice(0, half).join(" ") === words.slice(half).join(" ")) return words.slice(0, half).join(" "); const suffixes = ["Mobile App Development", "Web Development", "App Development"]; for (const s of suffixes) { if (t.endsWith(s + " " + s)) return t.replace(s + " " + s, s); } return t; }
// function slash(p: string) { return !p ? '' : p.startsWith('/') ? p : `/${p}`; }
// function full(p: string) { return !p ? '' : p.startsWith('http') ? p : `https://www.mtouchlabs.com${slash(p)}`; }

// // ─── SEO ─────────────────────────────────────────────
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params;
//   const p = await getProject(slug);
//   if (!p) return { title: 'Project Not Found | mTouch Labs' };
//   const tags = p.tags ? p.tags.split(',').map((t: string) => t.trim().toLowerCase()) : [];
//   return {
//     title: p.meta_title || `${p.title.replace(/(Mobile App Development|Web Development|App Development) \1/g, '$1')} | mTouch Labs Portfolio`,
//     description: p.meta_description || p.subtitle || `${p.title} — a ${p.category} project by mTouch Labs.`,
//     keywords: [`${p.category} app development`, ...tags, 'mTouch Labs', 'app development Hyderabad'],
//     openGraph: { title: p.og_title || p.title, description: p.og_description || p.subtitle, url: p.canonical_url || `/portfolio/${p.slug}`, siteName: 'mTouch Labs', type: 'article', images: [{ url: full(p.og_image || p.image), width: 1200, height: 630 }] },
//     twitter: { card: 'summary_large_image', title: p.og_title || p.title, description: p.og_description || p.subtitle },
//     alternates: { canonical: p.canonical_url || `/portfolio/${p.slug}` },
//     robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1 } },
//   };
// }
async function getRelatedProjects(category: string, excludeId: number) {
  const rows = await sql`
    SELECT id, slug, title, subtitle, category, image, tech_stack, tags
    FROM portfolios WHERE category = ${category} AND id != ${excludeId} AND published = true
    ORDER BY created_at DESC LIMIT 3`;
  return rows;
}

// ─── HELPERS ─────────────────────────────────────────
function parseJSON(val: string | null, fb: any = []) { if (!val) return fb; try { return JSON.parse(val) || fb; } catch { return fb; } }
function cleanTitle(t: string) { const words = t.split(" "); const half = Math.floor(words.length / 2); if (words.length >= 4 && words.slice(0, half).join(" ") === words.slice(half).join(" ")) return words.slice(0, half).join(" "); const suffixes = ["Mobile App Development", "Web Development", "App Development"]; for (const s of suffixes) { if (t.endsWith(s + " " + s)) return t.replace(s + " " + s, s); } return t; }
function slash(p: string) { return !p ? '' : p.startsWith('/') ? p : `/${p}`; }
function full(p: string) { return !p ? '' : p.startsWith('http') ? p : `https://www.mtouchlabs.com${slash(p)}`; }

// ─── SEO ─────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) return { title: 'Project Not Found | mTouch Labs' };
  const tags = p.tags ? p.tags.split(',').map((t: string) => t.trim().toLowerCase()) : [];
  return {
    title: p.meta_title || `${p.title.replace(/(Mobile App Development|Web Development|App Development) \1/g, '$1')} | mTouch Labs Portfolio`,
    description: p.meta_description || p.subtitle || `${p.title} — a ${p.category} project by mTouch Labs.`,
    keywords: [`${p.category} app development`, ...tags, 'mTouch Labs', 'app development Hyderabad'],
    openGraph: { title: p.og_title || p.title, description: p.og_description || p.subtitle, url: p.canonical_url || `/portfolio/${p.slug}`, siteName: 'mTouch Labs', type: 'article', images: [{ url: full(p.og_image || p.image), width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: p.og_title || p.title, description: p.og_description || p.subtitle },
    alternates: { canonical: p.canonical_url || `/portfolio/${p.slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1 } },
  };
}

// ─── STRUCTURED DATA ─────────────────────────────────
function buildSchemas(p: any) {
  const main: any = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, description: p.about || p.subtitle, url: `https://www.mtouchlabs.com/portfolio/${p.slug}`, image: full(p.image), genre: p.category, keywords: p.tags, datePublished: p.created_at, creator: { '@type': 'Organization', name: 'mTouch Labs', url: 'https://www.mtouchlabs.com' } };
  if (p.play_store_url) main.associatedMedia = { '@type': 'SoftwareApplication', operatingSystem: 'Android', installUrl: p.play_store_url };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mtouchlabs.com' }, { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.mtouchlabs.com/portfolio' }, { '@type': 'ListItem', position: 3, name: p.title, item: `https://www.mtouchlabs.com/portfolio/${p.slug}` }] };
  const faqs = Array.isArray(p.faq_schema) ? p.faq_schema : parseJSON(p.faq_schema);
  const faq = faqs.length > 0 ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f: any) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) } : null;
  return { main, bc, faq };
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

  const imgSrc = slash(project.image);
  const { main, bc, faq } = buildSchemas(project);
  const hasAbout = project.about?.trim() && !['nodeJS', 'Node JS'].includes(project.about.trim());
  const hasReq = project.requirements?.trim();
  const hasImpact = project.business_impact?.trim();

  // Build TOC — conditional on data
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(main) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}

      <div className="cs">

        {/* ═══ HERO ═══ */}
        <section className="cs-hero">
          <div className="cs-hero__bg">
            <img src={imgSrc} alt={`${project.title} showcase`} className="cs-hero__bg-img" loading="eager" />
            <div className="cs-hero__overlay"></div>
          </div>
          <div className="cs-hero__content">
            <nav className="cs-crumb" aria-label="Breadcrumb">
              <ol itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><Link href="/" itemProp="item"><span itemProp="name">Home</span></Link><meta itemProp="position" content="1" /></li>
                <li className="cs-crumb__sep">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><Link href="/portfolio" itemProp="item"><span itemProp="name">Portfolio</span></Link><meta itemProp="position" content="2" /></li>
                <li className="cs-crumb__sep">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><span itemProp="name" className="cs-crumb__current">{project.category}</span><meta itemProp="position" content="3" /></li>
              </ol>
            </nav>
            <span className="cs-hero__badge">{project.category}</span>
            <h1 className="cs-hero__title">{cleanTitle(project.title)}</h1>
            <p className="cs-hero__sub">{project.subtitle}</p>
            <div className="cs-hero__pills">{techStack.map((t: string, i: number) => <span key={i} className="cs-hero__pill">{t}</span>)}</div>
            {(project.play_store_url || project.app_store_url) && (
              <div className="cs-hero__stores">
                {project.play_store_url && <a href={project.play_store_url} target="_blank" rel="noopener noreferrer" className="cs-store"><i className="fab fa-google-play"></i><div><small>GET IT ON</small><strong>Google Play</strong></div></a>}
                {project.app_store_url && <a href={project.app_store_url} target="_blank" rel="noopener noreferrer" className="cs-store"><i className="fab fa-apple"></i><div><small>Download on</small><strong>App Store</strong></div></a>}
              </div>
            )}
          </div>
        </section>

        {/* ═══ SHOWCASE IMAGE ═══ */}
        {allScreens.length > 0 && (
          <section className="cs-showcase">
            <div className="cs-container">
              <div className="cs-showcase__frame">
                <div className="cs-browser-bar"><span className="cs-dot cs-dot--r"></span><span className="cs-dot cs-dot--y"></span><span className="cs-dot cs-dot--g"></span><span className="cs-browser-url">{project.title.toLowerCase().replace(/\s+/g,'')}.com</span></div>
                <img src={slash(webScreens[0] || appScreens[0])} alt={`${project.title} interface`} className="cs-showcase__img" loading="eager" />
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════
            GRID LAYOUT: Sticky TOC + Content (blog-style)
            TOC stays inside grid so it stops at grid boundary
        ═══════════════════════════════════════════════════ */}
        <div className="cs-grid-wrap">
          <div className="cs-grid">

            {/* ── STICKY TOC SIDEBAR ── */}
            <aside className="cs-toc" aria-label="Table of Contents">
              <nav>
                <p className="cs-toc__title">Contents</p>
                <ul className="cs-toc__list">
                  {visibleToc.map((item) => (
                    <li key={item.id}><a href={`#${item.id}`} className="cs-toc__link">{item.label}</a></li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── CONTENT COLUMN ── */}
            <div className="cs-content">

          {/* 1. PROJECT OVERVIEW */}
          <section id="project-overview" className="cs-sec">
            <h2 className="cs-sec__h">Project <span className="cs-accent">Overview</span></h2>
            <div className="cs-sec__text">
              {hasAbout ? project.about.split('\n').filter((p: string) => p.trim()).map((para: string, i: number) => (
                <p key={i}>{para.trim()}</p>
              )) : <p>{project.subtitle}</p>}
            </div>
            <div className="cs-sec__img-box">
              <img src={imgSrc} alt={`${project.title} overview`} loading="lazy" />
            </div>
          </section>

          {/* 2. INDUSTRY BACKGROUND */}
          <section id="industry-background" className="cs-sec">
            <h2 className="cs-sec__h">Industry <span className="cs-accent">Background</span></h2>
            <div className="cs-sec__text">
              <p>The <strong>{project.category}</strong> industry is rapidly evolving with digital transformation at its core. Businesses in this space face increasing demand for seamless digital experiences and scalable platforms.</p>
              <p>{project.title} was envisioned to address these market needs by delivering a modern, intuitive platform built with {techStack.slice(0, 3).join(', ')}.</p>
            </div>
            {appScreens.length > 0 && <div className="cs-sec__img-box"><img src={slash(appScreens[0])} alt={`${project.title} in ${project.category}`} loading="lazy" /></div>}
          </section>

          {/* 3. BUSINESS CHALLENGES */}
          {hasReq && (
            <section id="business-challenges" className="cs-sec">
              <h2 className="cs-sec__h">Business <span className="cs-accent">Challenges</span></h2>
              <div className="cs-sec__text"><p>Every great product starts with a real problem. Here are the key challenges:</p></div>
              <div className="cs-challenges">
                {project.requirements.split('\n').map((line: string, i: number) => {
                  const t = line.trim(); if (!t) return null;
                  return <div key={i} className="cs-challenge-item"><div className="cs-challenge-num">{String(i+1).padStart(2,'0')}</div><p>{t.replace('•','').trim()}</p></div>;
                })}
              </div>
            </section>
          )}

          {/* 4. OBJECTIVES & REQUIREMENTS */}
          {hasReq && (
            <section id="objectives-requirements" className="cs-sec">
              <h2 className="cs-sec__h">Objectives &amp; <span className="cs-accent">Requirements</span></h2>
              <div className="cs-sec__text"><p>Based on the business challenges, the project was designed with these core objectives:</p></div>
              <div className="cs-obj-grid">
                <div className="cs-obj-card"><i className="fas fa-bullseye"></i><h3>User-Centric Design</h3><p>Build an intuitive interface with minimal learning curve.</p></div>
                <div className="cs-obj-card"><i className="fas fa-expand-arrows-alt"></i><h3>Scalable Architecture</h3><p>Design a system that grows with data and user load.</p></div>
                <div className="cs-obj-card"><i className="fas fa-bolt"></i><h3>High Performance</h3><p>Fast load times and smooth interactions across devices.</p></div>
                <div className="cs-obj-card"><i className="fas fa-shield-alt"></i><h3>Security First</h3><p>Robust security to protect sensitive user data.</p></div>
              </div>
              {webScreens.length > 0 && <div className="cs-sec__img-box"><img src={slash(webScreens[0])} alt={`${project.title} objectives`} loading="lazy" /></div>}
            </section>
          )}

          {/* 5. STRATEGY & APPROACH */}
          <section id="strategy-approach" className="cs-sec">
            <h2 className="cs-sec__h">Strategy &amp; <span className="cs-accent">Approach</span></h2>
            <div className="cs-sec__text"><p>Our team followed an agile development methodology with continuous feedback loops:</p></div>
            <div className="cs-timeline">
              {['Discovery & Research', 'UI/UX Design', 'Development Sprints', 'Testing & QA', 'Launch & Iteration'].map((step, i) => (
                <div key={i} className="cs-timeline__item">
                  <div className="cs-timeline__dot"></div>
                  <div className="cs-timeline__content"><h3>{step}</h3></div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. TECHNOLOGY STACK */}
          {techStack.length > 0 && (
            <section id="technology-stack" className="cs-sec">
              <h2 className="cs-sec__h">Technology <span className="cs-accent">Stack</span></h2>
              <div className="cs-sec__text"><p>Each technology was selected for performance, scalability, and developer efficiency.</p></div>
              <div className="cs-tech-grid">
                {techStack.map((tech: string, i: number) => (
                  <div key={i} className="cs-tech-card">
                    <div className="cs-tech-icon"><i className={`fas ${tech.toLowerCase().includes('android')?'fa-mobile-alt':tech.toLowerCase().includes('ios')||tech.toLowerCase().includes('swift')?'fa-apple-alt':tech.toLowerCase().includes('flutter')?'fa-feather-alt':tech.toLowerCase().includes('react')?'fa-atom':tech.toLowerCase().includes('node')?'fa-server':tech.toLowerCase().includes('aws')?'fa-cloud':tech.toLowerCase().includes('sql')||tech.toLowerCase().includes('mongo')||tech.toLowerCase().includes('firebase')?'fa-database':tech.toLowerCase().includes('java')?'fa-coffee':'fa-cog'}`}></i></div>
                    <span className="cs-tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. SOLUTION ARCHITECTURE */}
          <section id="solution-architecture" className="cs-sec">
            <h2 className="cs-sec__h">Solution <span className="cs-accent">Architecture</span></h2>
            <div className="cs-sec__text"><p>The application follows a modern architecture with clear separation of concerns:</p></div>
            <div className="cs-arch">
              <div className="cs-arch__layer cs-arch__layer--fe"><span>Frontend</span><p>{techStack.filter((t: string) => ['React','Flutter','Angular','Vue','iOS','Android','Swift','Kotlin'].some(k => t.toLowerCase().includes(k.toLowerCase()))).join(', ') || 'Mobile & Web UI'}</p></div>
              <div className="cs-arch__arrow">↓</div>
              <div className="cs-arch__layer cs-arch__layer--be"><span>Backend / API</span><p>{techStack.filter((t: string) => ['Node','Java','PHP','Python','Laravel','.NET','Spring'].some(k => t.toLowerCase().includes(k.toLowerCase()))).join(', ') || 'REST APIs'}</p></div>
              <div className="cs-arch__arrow">↓</div>
              <div className="cs-arch__layer cs-arch__layer--db"><span>Database & Cloud</span><p>{techStack.filter((t: string) => ['MySQL','Mongo','Firebase','AWS','SQL','Redis'].some(k => t.toLowerCase().includes(k.toLowerCase()))).join(', ') || 'Data & Cloud'}</p></div>
            </div>
            {appScreens.length > 1 && <div className="cs-sec__img-box"><img src={slash(appScreens[1])} alt={`${project.title} architecture`} loading="lazy" /></div>}
          </section>

          {/* 8. KEY FEATURES */}
          {features.length > 0 && (
            <section id="key-features" className="cs-sec">
              <h2 className="cs-sec__h">Key <span className="cs-accent">Features</span></h2>
              <div className="cs-feat-grid">
                {features.map((f: any, i: number) => (
                  <div key={i} className="cs-feat-card"><span className="cs-feat-num">{String(i+1).padStart(2,'0')}</span><h3>{f.title || f}</h3>{f.description && <p>{f.description}</p>}</div>
                ))}
              </div>
              {appScreens.length > 2 && <div className="cs-sec__img-box"><img src={slash(appScreens[2])} alt={`${project.title} features`} loading="lazy" /></div>}
            </section>
          )}

          {/* 9. UI/UX HIGHLIGHTS */}
          {allScreens.length > 0 && (
            <section id="ui-ux-highlights" className="cs-sec">
              <h2 className="cs-sec__h">UI/UX <span className="cs-accent">Highlights</span></h2>
              <div className="cs-sec__text"><p>Every pixel crafted with purpose — clean layouts, intuitive navigation, and delightful interactions.</p></div>
              {appScreens.length >= 3 && (
                <div className="cs-trio">
                  <div className="cs-trio__phone cs-trio__phone--left"><img src={slash(appScreens[0])} alt="UI screen 1" loading="lazy" /></div>
                  <div className="cs-trio__phone cs-trio__phone--center"><img src={slash(appScreens[1])} alt="UI screen 2" loading="lazy" /></div>
                  <div className="cs-trio__phone cs-trio__phone--right"><img src={slash(appScreens[2])} alt="UI screen 3" loading="lazy" /></div>
                </div>
              )}
            </section>
          )}

          {/* 10. SCREENS — ALL app + web screens */}
          {allScreens.length > 0 && (
            <section id="screens" className="cs-sec cs-sec--dark">
              <h2 className="cs-sec__h cs-sec__h--light">App &amp; Web <span className="cs-accent">Screens</span></h2>

              {appScreens.length > 0 && (
                <>
                  <h3 className="cs-screens-label">Mobile App Screens</h3>
                  <div className="cs-phones-scroll">
                    {appScreens.map((screen: string, i: number) => (
                      <div key={i} className="cs-phone-item">
                        <div className="cs-phone-frame">
                          <div className="cs-phone-notch"></div>
                          <img src={slash(screen)} alt={`App screen ${i+1}`} loading="lazy" className="cs-phone-img" />
                        </div>
                        <span className="cs-phone-label">Screen {i+1}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {webScreens.length > 0 && (
                <>
                  <h3 className="cs-screens-label" style={{marginTop: '40px'}}>Web Screens</h3>
                  <div className="cs-web-gallery">
                    {webScreens.map((screen: string, i: number) => (
                      <div key={i} className="cs-web-frame">
                        <div className="cs-browser-bar"><span className="cs-dot cs-dot--r"></span><span className="cs-dot cs-dot--y"></span><span className="cs-dot cs-dot--g"></span><span className="cs-browser-url">{project.title.toLowerCase().replace(/\s+/g,'')}.com</span></div>
                        <img src={slash(screen)} alt={`Web screen ${i+1}`} loading="lazy" className="cs-web-img" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* 11. COLOR PALETTE */}
          {colorPalette.length > 0 && (
            <section id="color-palette" className="cs-sec">
              <h2 className="cs-sec__h">Color <span className="cs-accent">Palette</span></h2>
              <div className="cs-colorbar">{colorPalette.map((c: {hex:string;name:string}, i: number) => <div key={i} style={{backgroundColor:c.hex,flex:1}}></div>)}</div>
              <div className="cs-color-chips">{colorPalette.map((c: {hex:string;name:string}, i: number) => (
                <div key={i} className="cs-color-chip"><div className="cs-chip-swatch" style={{backgroundColor:c.hex}}></div><div><span className="cs-chip-name">{c.name}</span><span className="cs-chip-hex">{c.hex}</span></div></div>
              ))}</div>
            </section>
          )}

          {/* 12. TYPOGRAPHY */}
          {typography?.font && (
            <section id="typography" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-accent">Typography</span></h2>
              <div className="cs-typo-block">
                <span className="cs-typo-big">Aa</span>
                <div><h3 className="cs-typo-name">{typography.font}</h3><p className="cs-typo-alpha">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p><p className="cs-typo-alpha">abcdefghijklmnopqrstuvwxyz</p><p className="cs-typo-nums">0123456789 !@#$%&amp;</p></div>
              </div>
            </section>
          )}

          {/* 13. DEVELOPMENT PROCESS */}
          <section id="development-process" className="cs-sec">
            <h2 className="cs-sec__h">Development <span className="cs-accent">Process</span></h2>
            <div className="cs-process-grid">
              {['Planning & Wireframes','UI/UX Design','Frontend Dev','Backend & API','Testing & QA','Deployment'].map((s,i)=> (
                <div key={i} className="cs-process-step"><div className="cs-process-num">{String(i+1).padStart(2,'0')}</div><span>{s}</span></div>
              ))}
            </div>
            {appScreens.length > 3 && <div className="cs-sec__img-box"><img src={slash(appScreens[3])} alt="Development result" loading="lazy" /></div>}
          </section>

          {/* 14. SECURITY & PERFORMANCE */}
          <section id="security-performance" className="cs-sec">
            <h2 className="cs-sec__h">Security &amp; <span className="cs-accent">Performance</span></h2>
            <div className="cs-sp-grid">
              <div className="cs-sp-card"><i className="fas fa-lock"></i><h3>Data Encryption</h3><p>End-to-end encryption for data in transit and at rest.</p></div>
              <div className="cs-sp-card"><i className="fas fa-user-shield"></i><h3>Authentication</h3><p>Secure auth with JWT tokens and session management.</p></div>
              <div className="cs-sp-card"><i className="fas fa-tachometer-alt"></i><h3>Fast Load Times</h3><p>Optimized assets and CDN for sub-2s page loads.</p></div>
              <div className="cs-sp-card"><i className="fas fa-server"></i><h3>Scalable Infra</h3><p>Cloud-hosted with auto-scaling for traffic spikes.</p></div>
            </div>
          </section>

          {/* 15. RESULTS & IMPACT */}
          {hasImpact && (
            <section id="results-impact" className="cs-sec cs-sec--highlight">
              <h2 className="cs-sec__h">Results &amp; <span className="cs-accent">Impact</span></h2>
              <div className="cs-sec__text">
                {project.business_impact.split('\n').map((line: string, i: number) => {
                  const t = line.trim(); if (!t) return null;
                  return t.startsWith('•') ? <div key={i} className="cs-impact-item"><i className="fas fa-chart-line"></i><p>{t.replace('•','').trim()}</p></div> : <p key={i}>{t}</p>;
                })}
              </div>
              {webScreens.length > 1 && <div className="cs-sec__img-box"><img src={slash(webScreens[1])} alt="Results" loading="lazy" /></div>}
            </section>
          )}

          {/* 16. FUTURE SCOPE */}
          <section id="future-scope" className="cs-sec">
            <h2 className="cs-sec__h">Future <span className="cs-accent">Scope</span></h2>
            <div className="cs-future-list">
              <div className="cs-future-item"><i className="fas fa-brain"></i><p>AI-powered personalization and recommendations</p></div>
              <div className="cs-future-item"><i className="fas fa-chart-bar"></i><p>Advanced analytics dashboard for business insights</p></div>
              <div className="cs-future-item"><i className="fas fa-globe"></i><p>Multi-language support and internationalization</p></div>
              <div className="cs-future-item"><i className="fas fa-plug"></i><p>Third-party integrations and API marketplace</p></div>
            </div>
          </section>

          {/* 17. CONCLUSION */}
          <section id="conclusion" className="cs-sec">
            <h2 className="cs-sec__h"><span className="cs-accent">Conclusion</span></h2>
            <div className="cs-sec__text">
              <p>{project.title} stands as a testament to what&apos;s possible when thoughtful design meets robust engineering. Built with {techStack.slice(0,3).join(', ')}, the project successfully addresses core challenges in the {project.category} space.</p>
              <p>At mTouch Labs, we&apos;re proud to have delivered a solution that exceeds expectations in quality, performance, and user satisfaction.</p>
            </div>
            {allScreens.length > 0 && <div className="cs-sec__img-box"><img src={slash(allScreens[allScreens.length-1])} alt="Final showcase" loading="lazy" /></div>}
          </section>

          {/* 18. FAQ */}
          {faqs.length > 0 && (
            <section id="faq" className="cs-sec">
              <h2 className="cs-sec__h"><span className="cs-accent">FAQ</span></h2>
              <div className="cs-faq-list">
                {faqs.map((f: any, i: number) => (
                  <div key={i} className="cs-faq-item">
                    <button className="cs-faq-q" aria-expanded="false"><span>{f.question}</span><i className="fas fa-chevron-down"></i></button>
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
                {appScreens.length > 0 && <div className="cs-download__phone"><img src={slash(appScreens[0])} alt="App preview" loading="lazy" /></div>}
                <div className="cs-download__text">
                  <h2>Try {project.title.split(' ').slice(0,2).join(' ')} Yourself</h2>
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
              <h2 className="cs-sec__h">More <span className="cs-accent">{project.category}</span> Projects</h2>
              <div className="cs-related__grid">
                {related.map((rp) => {
                  const rpTech = parseJSON(rp.tech_stack);
                  return (
                    <article key={rp.id} className="cs-related__card">
                      <Link href={`/portfolio/${rp.slug}`} className="cs-related__link">
                        <div className="cs-related__img-wrap">
                          <img src={slash(rp.image)} alt={rp.title} loading="lazy" className="cs-related__img" />
                          <div className="cs-related__hover"><span>View Project →</span></div>
                        </div>
                        <div className="cs-related__body">
                          <span className="cs-related__cat">{rp.category}</span>
                          <h3 className="cs-related__title">{rp.title}</h3>
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
          </div>{/* end cs-grid */}
        </div>{/* end cs-grid-wrap */}

        {/* ═══ CTA — Full width, outside the grid ═══ */}
        <section className="cs-cta">
          <div className="cs-cta__glow"></div>
          <div className="cs-container">
            <div className="cs-cta__inner">
              <span className="cs-tag cs-tag--light">Let&apos;s Work Together</span>
              <h2 className="cs-cta__title">Have an idea? Let&apos;s build<br/><span className="cs-accent">something amazing.</span></h2>
              <p className="cs-cta__desc">We brought {project.title.split(' ')[0]}&apos;s vision to life. Now it&apos;s your turn.</p>
              <div className="cs-cta__btns">
                <Link href="/contact-us" className="cs-cta__primary">Start Your Project →</Link>
                <Link href="/portfolio" className="cs-cta__ghost">Explore Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ═══ SCRIPTS ═══ */}
      <Script id="cs-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
        (function() {
          var NAV_H = 150;
          var tocLinks = document.querySelectorAll('.cs-toc__link');
          var sectionIds = [];
          var clickLock = false;
          var clickTimer = null;

          tocLinks.forEach(function(l) {
            sectionIds.push(l.getAttribute('href').substring(1));
          });

          // Set ONE active link
          function setActive(id) {
            tocLinks.forEach(function(l) { l.classList.remove('active'); });
            for (var i = 0; i < tocLinks.length; i++) {
              if (tocLinks[i].getAttribute('href') === '#' + id) {
                tocLinks[i].classList.add('active');
                // Auto-scroll TOC sidebar
                var tocEl = document.querySelector('.cs-toc');
                if (tocEl && window.innerWidth > 900) {
                  var linkTop = tocLinks[i].offsetTop - tocEl.offsetTop;
                  tocEl.scrollTo({ top: Math.max(0, linkTop - tocEl.clientHeight / 3), behavior: 'smooth' });
                }
                break;
              }
            }
          }

          // 1. Click TOC -> scroll + LOCK scroll listener
          tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
              e.preventDefault();
              var id = this.getAttribute('href').substring(1);
              var el = document.getElementById(id);
              if (!el) return;

              // Lock scroll listener during smooth scroll
              clickLock = true;
              if (clickTimer) clearTimeout(clickTimer);

              // Activate clicked item immediately
              setActive(id);

              // Scroll to section
              var top = el.getBoundingClientRect().top + window.pageYOffset - NAV_H;
              window.scrollTo({ top: top, behavior: 'smooth' });
              history.pushState(null, '', '#' + id);

              // Unlock after smooth scroll finishes (~800ms)
              clickTimer = setTimeout(function() { clickLock = false; }, 800);
            });
          });

          // 2. Scroll -> highlight active (skipped during click lock)
          var ticking = false;
          function onScroll() {
            if (clickLock) { ticking = false; return; }
            var scrollPos = window.scrollY + NAV_H + 40;
            var current = '';
            for (var i = sectionIds.length - 1; i >= 0; i--) {
              var sec = document.getElementById(sectionIds[i]);
              if (sec && sec.offsetTop <= scrollPos) { current = sectionIds[i]; break; }
            }
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
              current = sectionIds[sectionIds.length - 1];
            }
            if (current) setActive(current);
            ticking = false;
          }
          window.addEventListener('scroll', function() {
            if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
          });
          onScroll();

          // 3. Handle hash on page load
          if (window.location.hash) {
            var hashEl = document.getElementById(window.location.hash.substring(1));
            if (hashEl) {
              setTimeout(function() {
                window.scrollTo({ top: hashEl.getBoundingClientRect().top + window.pageYOffset - NAV_H, behavior: 'smooth' });
              }, 300);
            }
          }

          // 4. Drag scroll for phone carousel
          document.querySelectorAll('.cs-phones-scroll').forEach(function(el) {
            var d=false,sx,sl;
            el.addEventListener('mousedown',function(e){d=true;el.style.cursor='grabbing';sx=e.pageX-el.offsetLeft;sl=el.scrollLeft});
            el.addEventListener('mouseleave',function(){d=false;el.style.cursor='grab'});
            el.addEventListener('mouseup',function(){d=false;el.style.cursor='grab'});
            el.addEventListener('mousemove',function(e){if(!d)return;e.preventDefault();el.scrollLeft=sl-((e.pageX-el.offsetLeft)-sx)*1.5});
          });

          // 5. FAQ accordion
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