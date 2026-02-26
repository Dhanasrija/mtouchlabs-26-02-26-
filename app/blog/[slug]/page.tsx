// import { sql } from '@/lib/db';
// import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';

// export const dynamic = 'force-dynamic';

// /* ── OLD BLOG DETAIL PAGE (commented out) ──
//  * The previous blogv2-* design is preserved in blog.css as commented CSS.
//  * The new design uses .blv3-* class prefix (Blog Layout V3).
//  * To revert, uncomment the old return() block at the bottom of this file
//  * and comment out the new one.
//  */

// interface Blog {
//   id: number;
//   slug: string;
//   title: string;
//   description: string;
//   content: string;
//   image: string;
//   author: string;
//   category: string;
//   meta_title: string;
//   meta_description: string;
//   published: boolean;
//   created_at: string;
//   updated_at: string;
//   tags: string;
//   reading_time: number;
//   status: string;
//   featured: boolean;
//   focus_keyword: string;
//   secondary_keywords: string;
//   canonical_url: string;
//   robots: string;
//   breadcrumb_title: string;
//   og_title: string;
//   og_description: string;
//   og_image: string;
//   twitter_card: string;
//   schema_type: string;
//   faq_schema: { question: string; answer: string }[];
// }

// const SITE_URL = 'https://www.mtouchlabs.com';

// // ── Metadata ──
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const blogs = await sql`SELECT * FROM blogs WHERE slug = ${slug} AND published = true` as Blog[];
//   if (blogs.length === 0) return { title: 'Blog Not Found | mTouch Labs' };

//   const blog = blogs[0];
//   const pageUrl = `${SITE_URL}/${blog.slug}`;

//   return {
//     title: blog.meta_title || blog.title + ' | mTouch Labs',
//     description: blog.meta_description || blog.description,
//     keywords: [blog.focus_keyword, blog.secondary_keywords].filter(Boolean).join(', ') || undefined,
//     alternates: { canonical: blog.canonical_url || pageUrl },
//     robots: blog.robots || 'index, follow',
//     openGraph: {
//       title: blog.og_title || blog.meta_title || blog.title,
//       description: blog.og_description || blog.meta_description || blog.description,
//       images: (blog.og_image || blog.image) ? [blog.og_image || blog.image] : [],
//       type: 'article',
//       url: pageUrl,
//       siteName: 'mTouch Labs',
//       publishedTime: blog.created_at,
//       authors: [blog.author || 'mTouch Labs'],
//       tags: blog.tags
//         ? typeof blog.tags === 'string'
//           ? blog.tags.split(',').map(t => t.trim())
//           : blog.tags
//         : [],
//     },
//     twitter: {
//       card: (blog.twitter_card as 'summary_large_image' | 'summary') || 'summary_large_image',
//       title: blog.og_title || blog.meta_title || blog.title,
//       description: blog.og_description || blog.meta_description || blog.description,
//       images: (blog.og_image || blog.image) ? [blog.og_image || blog.image] : [],
//     },
//   };
// }

// // ── Helpers ──
// function extractHeadings(html: string): { id: string; text: string; level: number }[] {
//   const headings: { id: string; text: string; level: number }[] = [];
//   const regex = /<(h[23])[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/\1>/gi;
//   let match;
//   while ((match = regex.exec(html)) !== null) {
//     headings.push({
//       id: match[2],
//       text: match[3].replace(/<[^>]+>/g, ''),
//       level: match[1] === 'h2' ? 2 : 3,
//     });
//   }
//   if (headings.length === 0) {
//     const regex2 = /<(h[23])[^>]*>(.*?)<\/\1>/gi;
//     let idx = 0;
//     while ((match = regex2.exec(html)) !== null) {
//       const text = match[2].replace(/<[^>]+>/g, '');
//       const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${idx}`;
//       headings.push({ id, text, level: match[1] === 'h2' ? 2 : 3 });
//       idx++;
//     }
//   }
//   return headings;
// }

// function addIdsToHeadings(html: string): string {
//   let idx = 0;
//   return html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (full, tag, attrs, inner) => {
//     if (/id=["']/.test(attrs)) return full;
//     const text = inner.replace(/<[^>]+>/g, '');
//     const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${idx}`;
//     idx++;
//     return `<${tag}${attrs} id="${id}" style="scroll-margin-top:100px">${inner}</${tag}>`;
//   });
// }

// function removeInlineTOC(html: string): string {
//   let cleaned = html.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
//   cleaned = cleaned.replace(/<div[^>]*style[^>]*>[^]*?(?:📑\s*)?Table of Contents[^]*?<\/(?:ol|ul)>[^]*?<\/div>/gi, '');
//   return cleaned;
// }

// function highlightKeyword(title: string, keyword?: string): { before: string; highlight: string; after: string } {
//   if (!keyword) {
//     const words = title.split(' ');
//     if (words.length > 4) {
//       const start = Math.floor(words.length * 0.3);
//       const end = Math.min(start + 3, words.length);
//       return {
//         before: words.slice(0, start).join(' ') + ' ',
//         highlight: words.slice(start, end).join(' '),
//         after: ' ' + words.slice(end).join(' '),
//       };
//     }
//     return { before: title, highlight: '', after: '' };
//   }
//   const lower = title.toLowerCase();
//   const kwLower = keyword.toLowerCase();
//   const idx = lower.indexOf(kwLower);
//   if (idx === -1) return { before: title, highlight: '', after: '' };
//   return {
//     before: title.slice(0, idx),
//     highlight: title.slice(idx, idx + keyword.length),
//     after: title.slice(idx + keyword.length),
//   };
// }

// // ── Page ──
// export default async function BlogPostPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const blogs = await sql`SELECT * FROM blogs WHERE slug = ${slug} AND published = true` as Blog[];
//   if (blogs.length === 0) notFound();

//   const blog = blogs[0];
//   const pageUrl = `${SITE_URL}/${blog.slug}`;

//   const tagList: string[] = Array.isArray(blog.tags)
//     ? blog.tags
//     : typeof blog.tags === 'string'
//       ? blog.tags.split(',').map(t => t.trim()).filter(Boolean)
//       : [];

//   const publishedDate = blog.created_at
//     ? new Intl.DateTimeFormat('en-US', {
//         month: 'long',
//         day: 'numeric',
//         year: 'numeric',
//         timeZone: 'UTC',
//       }).format(new Date(blog.created_at))
//     : '';

//   const isoDate = blog.created_at ? new Date(blog.created_at).toISOString().split('T')[0] : '';
//   const readingTime = Number(blog.reading_time) || 0;
//   const faqItems: { question: string; answer: string }[] = Array.isArray(blog.faq_schema) ? blog.faq_schema : [];
//   const authorName = blog.author || 'mTouch Labs';

//   const processedContent = blog.content
//     ? removeInlineTOC(
//         addIdsToHeadings(blog.content)
//           .replace(/href="\/contact"/g, 'href="/contact-us"')
//       )
//     : '';

//   const tocExclude = ['table of contents', 'tl;dr', 'key takeaways'];
//   const headings = extractHeadings(processedContent).filter(h => {
//     const lower = h.text.replace(/[^\w\s;]/g, '').toLowerCase().trim();
//     return !tocExclude.some(ex => lower.includes(ex));
//   });

//   const titleParts = highlightKeyword(blog.title, blog.focus_keyword);

//   // ── JSON-LD ──
//   const articleJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': blog.schema_type || 'BlogPosting',
//     headline: blog.title,
//     description: blog.meta_description || blog.description,
//     image: blog.og_image || blog.image || '',
//     author: { '@type': 'Organization', name: authorName },
//     publisher: {
//       '@type': 'Organization',
//       name: 'mTouch Labs',
//       logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
//     },
//     datePublished: blog.created_at,
//     dateModified: blog.updated_at || blog.created_at,
//     mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
//     url: pageUrl,
//     ...(blog.focus_keyword && { keywords: blog.focus_keyword }),
//     ...(readingTime > 0 && { timeRequired: `PT${readingTime}M` }),
//   };

//   const breadcrumbJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
//       { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
//       { '@type': 'ListItem', position: 3, name: blog.breadcrumb_title || blog.title, item: pageUrl },
//     ],
//   };

//   const faqJsonLd = faqItems.length > 0 ? {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: faqItems.map((faq) => ({
//       '@type': 'Question',
//       name: faq.question,
//       acceptedAnswer: { '@type': 'Answer', text: faq.answer },
//     })),
//   } : null;

//   return (
//     <div className="blv3-page">
//       {/* Structured Data */}
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
//       {faqJsonLd && (
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
//       )}

//       {/* Breadcrumb */}
//       <nav className="blv3-breadcrumb" aria-label="Breadcrumb">
//         <div className="blv3-container">
//           <Link href="/">Home</Link>
//           <span className="blv3-breadcrumb-sep">/</span>
//           <Link href="/blog">Blog</Link>
//           <span className="blv3-breadcrumb-sep">/</span>
//           <span className="blv3-breadcrumb-current">{blog.breadcrumb_title || blog.category || 'Article'}</span>
//         </div>
//       </nav>

//       {/* Hero */}
//       <header className="blv3-hero">
//         <div className="blv3-container">
//           {/* Tags */}
//           {tagList.length > 0 && (
//             <div className="blv3-tags">
//               {tagList.map((tag) => (
//                 <span key={tag} className="blv3-tag">{tag}</span>
//               ))}
//             </div>
//           )}

//           {/* Title */}
//           <h1 className="blv3-title">
//             {titleParts.highlight ? (
//               <>
//                 {titleParts.before}
//                 <span className="blv3-title-gradient">{titleParts.highlight}</span>
//                 {titleParts.after}
//               </>
//             ) : (
//               blog.title
//             )}
//           </h1>

//           {/* Meta */}
//           <div className="blv3-meta">
//             {publishedDate && (
//               <span className="blv3-meta-item">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//                 <time dateTime={isoDate}>{publishedDate}</time>
//               </span>
//             )}
//             {readingTime > 0 && (
//               <span className="blv3-meta-item">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
//                 {readingTime} min read
//               </span>
//             )}
//           </div>

//           {/* Gradient accent line */}
//           <div className="blv3-accent-bar" />

//           {/* Hero Image */}
//           {blog.image && (
//             <div className="blv3-hero-img">
//               <img src={blog.image} alt={blog.title} />
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Content Grid */}
//       <section className="blv3-body">
//         <div className="blv3-container">
//           <div className="blv3-grid">
//             {/* Sticky TOC */}
//             <aside className="blv3-toc">
//               <nav>
//                 <p className="blv3-toc-heading">Contents</p>
//                 <ul className="blv3-toc-list">
//                   {headings.map((h) => (
//                     <li key={h.id} className={h.level === 3 ? 'blv3-toc-sub' : ''}>
//                       <a href={`#${h.id}`} className="blv3-toc-link">{h.text}</a>
//                     </li>
//                   ))}
//                   {faqItems.length > 0 && (
//                     <li><a href="#faq" className="blv3-toc-link">FAQ</a></li>
//                   )}
//                 </ul>
//               </nav>
//             </aside>

//             {/* Article */}
//             <article className="blv3-article">
//               {/* TL;DR if description exists */}
//               {blog.description && (
//                 <div className="blv3-tldr">
//                   <div className="blv3-tldr-icon">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
//                   </div>
//                   <div>
//                     <h2 className="blv3-tldr-title">TL;DR — What You&apos;ll Learn</h2>
//                     <p className="blv3-tldr-text">{blog.description}</p>
//                   </div>
//                 </div>
//               )}

//               {/* Main Content */}
//               {processedContent ? (
//                 <div className="blv3-content" dangerouslySetInnerHTML={{ __html: processedContent }} />
//               ) : (
//                 <div className="blv3-empty">
//                   <p>This blog post is coming soon. Check back later!</p>
//                 </div>
//               )}

//               {/* CTA Banner */}
//               <div className="blv3-cta-banner">
//                 <h3 className="blv3-cta-banner-title">Ready to Transform Your Development Process?</h3>
//                 <p className="blv3-cta-banner-text">mTouch Labs combines AI-powered development with deep industry expertise to deliver solutions 3x faster.</p>
//                 <Link href="/contact-us" className="blv3-cta-banner-btn">
//                   Get a Free Consultation
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//                 </Link>
//               </div>

//               {/* FAQ */}
//               {faqItems.length > 0 && (
//                 <div className="blv3-faq" id="faq" style={{ scrollMarginTop: 100 }}>
//                   <h2 className="blv3-faq-heading">Frequently Asked Questions</h2>
//                   <div className="blv3-faq-list">
//                     {faqItems.map((faq, i) => (
//                       <details key={i} className="blv3-faq-item">
//                         <summary className="blv3-faq-q">{faq.question}</summary>
//                         <div className="blv3-faq-a">{faq.answer}</div>
//                       </details>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Key Takeaways */}
//               {blog.description && (
//                 <div className="blv3-takeaways">
//                   <h2 className="blv3-takeaways-title">🎯 Key Takeaways</h2>
//                   <p className="blv3-takeaways-text">{blog.description}</p>
//                 </div>
//               )}

//               {/* Author Footer */}
//               <footer className="blv3-author-footer">
//                 <p className="blv3-published-line">
//                   Published by <strong>{authorName}</strong> — Building the future of custom software development.{' '}
//                   <Link href="/contact-us">Contact us</Link> to discuss your project.
//                 </p>
//                 <div className="blv3-author-card">
//                   <img src="/images/logo_on.png" alt="mTouch Labs" className="blv3-author-logo" />
//                   <div className="blv3-author-info">
//                     <p className="blv3-author-title">Have a project in mind?</p>
//                     <p className="blv3-author-sub">Let&apos;s discuss how we can help bring your ideas to life.</p>
//                   </div>
//                   <Link href="/contact-us" className="blv3-author-btn">Contact Us</Link>
//                 </div>
//               </footer>
//             </article>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { sql } from '@/lib/db';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

/* Force dynamic rendering — no caching */
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  category: string;
  meta_title: string;
  meta_description: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  tags: string;
  reading_time: number;
  status: string;
  featured: boolean;
  focus_keyword: string;
  secondary_keywords: string;
  canonical_url: string;
  robots: string;
  breadcrumb_title: string;
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_card: string;
  schema_type: string;
  faq_schema: { question: string; answer: string }[];
}

const SITE_URL = 'https://www.mtouchlabs.com';

// ── Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await sql`SELECT * FROM blogs WHERE slug = ${slug} AND published = true` as Blog[];
  if (blogs.length === 0) return { title: 'Blog Not Found | mTouch Labs' };

  const blog = blogs[0];
  const pageUrl = `${SITE_URL}/${blog.slug}`;

  return {
    title: blog.meta_title || blog.title + ' | mTouch Labs',
    description: blog.meta_description || blog.description,
    keywords: [blog.focus_keyword, blog.secondary_keywords].filter(Boolean).join(', ') || undefined,
    alternates: { canonical: blog.canonical_url || pageUrl },
    robots: blog.robots || 'index, follow',
    openGraph: {
      title: blog.og_title || blog.meta_title || blog.title,
      description: blog.og_description || blog.meta_description || blog.description,
      images: (blog.og_image || blog.image) ? [blog.og_image || blog.image] : [],
      type: 'article',
      url: pageUrl,
      siteName: 'mTouch Labs',
      publishedTime: blog.created_at,
      authors: [blog.author || 'mTouch Labs'],
      tags: blog.tags
        ? typeof blog.tags === 'string'
          ? blog.tags.split(',').map(t => t.trim())
          : blog.tags
        : [],
    },
    twitter: {
      card: (blog.twitter_card as 'summary_large_image' | 'summary') || 'summary_large_image',
      title: blog.og_title || blog.meta_title || blog.title,
      description: blog.og_description || blog.meta_description || blog.description,
      images: (blog.og_image || blog.image) ? [blog.og_image || blog.image] : [],
    },
  };
}

// ── Helpers ──
function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /<(h[23])[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/\1>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    headings.push({
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ''),
      level: match[1] === 'h2' ? 2 : 3,
    });
  }
  if (headings.length === 0) {
    const regex2 = /<(h[23])[^>]*>(.*?)<\/\1>/gi;
    let idx = 0;
    while ((match = regex2.exec(html)) !== null) {
      const text = match[2].replace(/<[^>]+>/g, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${idx}`;
      headings.push({ id, text, level: match[1] === 'h2' ? 2 : 3 });
      idx++;
    }
  }
  return headings;
}

function addIdsToHeadings(html: string): string {
  let idx = 0;
  return html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (full, tag, attrs, inner) => {
    if (/id=["']/.test(attrs)) return full;
    const text = inner.replace(/<[^>]+>/g, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${idx}`;
    idx++;
    return `<${tag}${attrs} id="${id}" style="scroll-margin-top:100px">${inner}</${tag}>`;
  });
}

function removeInlineTOC(html: string): string {
  let cleaned = html.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
  cleaned = cleaned.replace(/<div[^>]*style[^>]*>[^]*?(?:📑\s*)?Table of Contents[^]*?<\/(?:ol|ul)>[^]*?<\/div>/gi, '');
  return cleaned;
}

function highlightKeyword(title: string, keyword?: string): { before: string; highlight: string; after: string } {
  if (!keyword) {
    const words = title.split(' ');
    if (words.length > 4) {
      const start = Math.floor(words.length * 0.3);
      const end = Math.min(start + 3, words.length);
      return {
        before: words.slice(0, start).join(' ') + ' ',
        highlight: words.slice(start, end).join(' '),
        after: ' ' + words.slice(end).join(' '),
      };
    }
    return { before: title, highlight: '', after: '' };
  }
  const lower = title.toLowerCase();
  const kwLower = keyword.toLowerCase();
  const idx = lower.indexOf(kwLower);
  if (idx === -1) return { before: title, highlight: '', after: '' };
  return {
    before: title.slice(0, idx),
    highlight: title.slice(idx, idx + keyword.length),
    after: title.slice(idx + keyword.length),
  };
}

// ── Page ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await sql`SELECT * FROM blogs WHERE slug = ${slug} AND published = true` as Blog[];
  if (blogs.length === 0) notFound();

  const blog = blogs[0];
  const pageUrl = `${SITE_URL}/${blog.slug}`;

  const tagList: string[] = Array.isArray(blog.tags)
    ? blog.tags
    : typeof blog.tags === 'string'
      ? blog.tags.split(',').map(t => t.trim()).filter(Boolean)
      : [];

  const publishedDate = blog.created_at
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(blog.created_at))
    : '';

  const isoDate = blog.created_at ? new Date(blog.created_at).toISOString().split('T')[0] : '';
  const readingTime = Number(blog.reading_time) || 0;
  const faqItems: { question: string; answer: string }[] = Array.isArray(blog.faq_schema) ? blog.faq_schema : [];
  const authorName = blog.author || 'mTouch Labs';

  const processedContent = blog.content
    ? removeInlineTOC(
        addIdsToHeadings(blog.content)
          .replace(/href="\/contact"/g, 'href="/contact-us"')
      )
    : '';

  const tocExclude = ['table of contents', 'tl;dr', 'key takeaways'];
  const headings = extractHeadings(processedContent).filter(h => {
    const lower = h.text.replace(/[^\w\s;]/g, '').toLowerCase().trim();
    return !tocExclude.some(ex => lower.includes(ex));
  });

  const titleParts = highlightKeyword(blog.title, blog.focus_keyword);

  // ── JSON-LD ──
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': blog.schema_type || 'BlogPosting',
    headline: blog.title,
    description: blog.meta_description || blog.description,
    image: blog.og_image || blog.image || '',
    author: { '@type': 'Organization', name: authorName },
    publisher: {
      '@type': 'Organization',
      name: 'mTouch Labs',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    url: pageUrl,
    ...(blog.focus_keyword && { keywords: blog.focus_keyword }),
    ...(readingTime > 0 && { timeRequired: `PT${readingTime}M` }),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: blog.breadcrumb_title || blog.title, item: pageUrl },
    ],
  };

  const faqJsonLd = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <div className="blv3-page">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* Breadcrumb */}
      <nav className="blv3-breadcrumb" aria-label="Breadcrumb">
        <div className="blv3-container">
          <Link href="/">Home</Link>
          <span className="blv3-breadcrumb-sep">/</span>
          <Link href="/blog">Blog</Link>
          <span className="blv3-breadcrumb-sep">/</span>
          <span className="blv3-breadcrumb-current">{blog.breadcrumb_title || blog.category || 'Article'}</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="blv3-hero">
        <div className="blv3-container">
          {/* Tags */}
          {tagList.length > 0 && (
            <div className="blv3-tags">
              {tagList.map((tag) => (
                <span key={tag} className="blv3-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="blv3-title">
            {titleParts.highlight ? (
              <>
                {titleParts.before}
                <span className="blv3-title-gradient">{titleParts.highlight}</span>
                {titleParts.after}
              </>
            ) : (
              blog.title
            )}
          </h1>

          {/* Meta */}
          <div className="blv3-meta">
            {publishedDate && (
              <span className="blv3-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <time dateTime={isoDate}>{publishedDate}</time>
              </span>
            )}
            {readingTime > 0 && (
              <span className="blv3-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                {readingTime} min read
              </span>
            )}
          </div>

          {/* Gradient accent line */}
          <div className="blv3-accent-bar" />

          {/* Hero Image */}
          {blog.image && (
            <div className="blv3-hero-img">
              <img src={blog.image} alt={blog.title} />
            </div>
          )}
        </div>
      </header>

      {/* Content Grid */}
      <section className="blv3-body">
        <div className="blv3-container">
          <div className="blv3-grid">
            {/* Sticky TOC */}
            <aside className="blv3-toc">
              <nav>
                <p className="blv3-toc-heading">Contents</p>
                <ul className="blv3-toc-list">
                  {headings.map((h) => (
                    <li key={h.id} className={h.level === 3 ? 'blv3-toc-sub' : ''}>
                      <a href={`#${h.id}`} className="blv3-toc-link">{h.text}</a>
                    </li>
                  ))}
                  {faqItems.length > 0 && (
                    <li><a href="#faq" className="blv3-toc-link">FAQ</a></li>
                  )}
                </ul>
              </nav>
            </aside>

            {/* Article */}
            <article className="blv3-article">
              {/* TL;DR */}
              {blog.description && (
                <div className="blv3-tldr">
                  <div className="blv3-tldr-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div>
                    <h2 className="blv3-tldr-title">TL;DR — What You&apos;ll Learn</h2>
                    <p className="blv3-tldr-text">{blog.description}</p>
                  </div>
                </div>
              )}

              {/* Main Content */}
              {processedContent ? (
                <div className="blv3-content" dangerouslySetInnerHTML={{ __html: processedContent }} />
              ) : (
                <div className="blv3-empty">
                  <p>This blog post is coming soon. Check back later!</p>
                </div>
              )}

              {/* CTA Banner */}
              <div className="blv3-cta-banner">
                <h3 className="blv3-cta-banner-title">Ready to Transform Your Development Process?</h3>
                <p className="blv3-cta-banner-text">mTouch Labs combines AI-powered development with deep industry expertise to deliver solutions 3x faster.</p>
                <Link href="/contact-us" className="blv3-cta-banner-btn">
                  Get a Free Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>

              {/* FAQ */}
              {faqItems.length > 0 && (
                <div className="blv3-faq" id="faq" style={{ scrollMarginTop: 100 }}>
                  <h2 className="blv3-faq-heading">Frequently Asked Questions</h2>
                  <div className="blv3-faq-list">
                    {faqItems.map((faq, i) => (
                      <details key={i} className="blv3-faq-item">
                        <summary className="blv3-faq-q">{faq.question}</summary>
                        <div className="blv3-faq-a">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Takeaways */}
              {blog.description && (
                <div className="blv3-takeaways">
                  <h2 className="blv3-takeaways-title">🎯 Key Takeaways</h2>
                  <p className="blv3-takeaways-text">{blog.description}</p>
                </div>
              )}

              {/* Author Footer */}
              <footer className="blv3-author-footer">
                <p className="blv3-published-line">
                  Published by <strong>{authorName}</strong> — Building the future of custom software development.{' '}
                  <Link href="/contact-us">Contact us</Link> to discuss your project.
                </p>
                <div className="blv3-author-card">
                  <img src="/images/logo_on.png" alt="mTouch Labs" className="blv3-author-logo" />
                  <div className="blv3-author-info">
                    <p className="blv3-author-title">Have a project in mind?</p>
                    <p className="blv3-author-sub">Let&apos;s discuss how we can help bring your ideas to life.</p>
                  </div>
                  <Link href="/contact-us" className="blv3-author-btn">Contact Us</Link>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>

      {/* TOC Active Highlight on Scroll */}
      <script dangerouslySetInnerHTML={{ __html: `
(function initTocHighlight() {
  var tocLinks = document.querySelectorAll('.blv3-toc-link');
  if (!tocLinks.length) { setTimeout(initTocHighlight, 200); return; }

  var linkMap = {};
  tocLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      linkMap[href.slice(1)] = link;
    }
  });

  var headingIds = Object.keys(linkMap);
  if (!headingIds.length) return;

  var currentActive = null;

  /* Collect heading elements in document order */
  var allHeadings = [];
  headingIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) allHeadings.push({ id: id, el: el });
  });

  /* IntersectionObserver for detection */
  var visibleSet = {};
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        visibleSet[entry.target.id] = true;
      } else {
        delete visibleSet[entry.target.id];
      }
    });
    /* Find first visible in document order */
    var topId = null;
    for (var i = 0; i < headingIds.length; i++) {
      if (visibleSet[headingIds[i]]) { topId = headingIds[i]; break; }
    }
    if (topId) setActive(topId);
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });

  allHeadings.forEach(function(h) { observer.observe(h.el); });

  function setActive(id) {
    if (id === currentActive) return;
    tocLinks.forEach(function(l) { l.classList.remove('blv3-toc-active'); });
    if (linkMap[id]) {
      linkMap[id].classList.add('blv3-toc-active');
      currentActive = id;
    }
  }

  /* Scroll fallback — find last heading above viewport */
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var scrollTop = window.scrollY + 120;
      var activeId = null;
      for (var i = allHeadings.length - 1; i >= 0; i--) {
        if (allHeadings[i].el.offsetTop <= scrollTop) {
          activeId = allHeadings[i].id;
          break;
        }
      }
      if (activeId) setActive(activeId);
      ticking = false;
    });
  });

  /* Highlight first heading initially if page loaded scrolled */
  setTimeout(function() {
    var scrollTop = window.scrollY + 120;
    for (var i = allHeadings.length - 1; i >= 0; i--) {
      if (allHeadings[i].el.offsetTop <= scrollTop) {
        setActive(allHeadings[i].id);
        break;
      }
    }
  }, 500);
})();
      `}} />
    </div>
  );
}