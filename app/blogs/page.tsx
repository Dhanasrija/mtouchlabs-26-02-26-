import { sql } from '@/lib/db';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

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
  const pageUrl = `${SITE_URL}/blog/${blog.slug}`;

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
function extractHeadings(html: string): { id: string; text: string }[] {
  const headings: { id: string; text: string }[] = [];
  const regex = /<h2[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    headings.push({ id: match[1], text: match[2].replace(/<[^>]+>/g, '') });
  }
  // Also catch h2 without id — generate one
  if (headings.length === 0) {
    const regex2 = /<h2[^>]*>(.*?)<\/h2>/gi;
    let idx = 0;
    while ((match = regex2.exec(html)) !== null) {
      const text = match[1].replace(/<[^>]+>/g, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${idx}`;
      headings.push({ id, text });
      idx++;
    }
  }
  return headings;
}

function addIdsToHeadings(html: string): string {
  let idx = 0;
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (full, attrs, inner) => {
    if (/id=["']/.test(attrs)) return full;
    const text = inner.replace(/<[^>]+>/g, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${idx}`;
    idx++;
    return `<h2${attrs} id="${id}" style="scroll-margin-top:100px">${inner}</h2>`;
  });
}

function highlightKeyword(title: string, keyword?: string): { before: string; highlight: string; after: string } {
  if (!keyword) {
    // Try to find a 2-3 word phrase to highlight (after first few words)
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
  const pageUrl = `${SITE_URL}/blog/${blog.slug}`;

  // Parse tags
  const tagList = blog.tags
    ? typeof blog.tags === 'string'
      ? blog.tags.split(',').map(t => t.trim()).filter(Boolean)
      : Array.isArray(blog.tags)
        ? blog.tags
        : []
    : [];

  // Process content — add ids to h2s
  const processedContent = blog.content ? addIdsToHeadings(blog.content) : '';
  const headings = blog.content ? extractHeadings(processedContent) : [];

  // FAQ
  const faqItems = Array.isArray(blog.faq_schema) ? blog.faq_schema : [];

  // Title highlight
  const titleParts = highlightKeyword(blog.title, blog.focus_keyword);

  // JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': blog.schema_type || 'BlogPosting',
    headline: blog.title,
    description: blog.meta_description || blog.description,
    image: blog.og_image || blog.image || '',
    author: { '@type': 'Organization', name: blog.author || 'mTouch Labs' },
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
    ...(blog.reading_time && { timeRequired: `PT${blog.reading_time}M` }),
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
    <div className="blogid-page" suppressHydrationWarning={true}>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Breadcrumb */}
      <div className="blogid-breadcrumb-bar">
        <nav className="blogid-breadcrumb">
          <Link href="/">Home</Link>
          <span className="blogid-breadcrumb-sep">›</span>
          <Link href="/blog">Blog</Link>
          <span className="blogid-breadcrumb-sep">›</span>
          <span className="blogid-breadcrumb-current">{blog.breadcrumb_title || blog.category || 'Article'}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="blogid-hero" suppressHydrationWarning={true}>
        <div className="container">
          <div className="blogid-hero-inner">
            {/* Tags */}
            {tagList.length > 0 && (
              <div className="blogid-tags">
                {tagList.map((tag) => (
                  <span key={tag} className="blogid-tag">{tag}</span>
                ))}
              </div>
            )}

            {/* Title with highlight */}
            <h1 className="blogid-title">
              {titleParts.highlight ? (
                <>
                  {titleParts.before}
                  <span className="blogid-title-highlight">{titleParts.highlight}</span>
                  {titleParts.after}
                </>
              ) : (
                blog.title
              )}
            </h1>

            {/* Meta */}
            <div className="blogid-meta">
              <svg className="blogid-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              <span className="blogid-meta-author">{blog.author || 'mTouch Labs'}</span>
              <span className="blogid-meta-sep">·</span>
              <svg className="blogid-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="blogid-meta-date">
                {new Date(blog.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              {blog.reading_time > 0 && (
                <>
                  <span className="blogid-meta-sep">·</span>
                  <span className="blogid-meta-read">
                    <svg className="blogid-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                    {blog.reading_time} min read
                  </span>
                </>
              )}
            </div>

            {/* Accent line */}
            <div className="blogid-accent-line" />
          </div>

          {/* Hero Image */}
          {blog.image && (
            <div className="blogid-hero-image">
              <img src={blog.image} alt={blog.title} />
            </div>
          )}
        </div>
      </section>

      {/* Content with sidebar */}
      <section className="blogid-content-section" suppressHydrationWarning={true}>
        <div className="container">
          <div className="blogid-layout">
            {/* TOC Sidebar */}
            {headings.length > 0 ? (
              <aside className="blogid-toc">
                <div className="blogid-toc-title">Contents</div>
                <ul className="blogid-toc-list">
                  {headings.map((h) => (
                    <li key={h.id} className="blogid-toc-item">
                      <a href={`#${h.id}`} className="blogid-toc-link">{h.text}</a>
                    </li>
                  ))}
                </ul>
              </aside>
            ) : (
              <div />
            )}

            {/* Main content */}
            <div className="blogid-content-wrap">
              {processedContent ? (
                <div className="blogid-content" suppressHydrationWarning={true}>
                  <div
                    suppressHydrationWarning={true}
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                  />
                </div>
              ) : (
                <div className="blogid-no-content">
                  <p>This blog post is coming soon. Check back later!</p>
                </div>
              )}

              {/* FAQ Accordion */}
              {faqItems.length > 0 && (
                <div className="blogid-faq-section">
                  <h2 id="faq" style={{ scrollMarginTop: 100 }}>Frequently Asked Questions</h2>
                  <div className="blogid-faq-list">
                    {faqItems.map((faq, i) => (
                      <details key={i} className="blogid-faq-item">
                        <summary className="blogid-faq-summary">{faq.question}</summary>
                        <div className="blogid-faq-answer">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Published by */}
              <div className="blogid-published-by">
                Published by <strong>{blog.author || 'mTouch Labs'}</strong> — Building the future of custom software development.{' '}
                <Link href="/contact-us">Contact us</Link> to discuss your project.
              </div>

              {/* Footer CTA */}
              <div className="blogid-footer-cta">
                <div className="blogid-footer-cta-left">
                  <div className="blogid-footer-cta-avatar">mT</div>
                  <div className="blogid-footer-cta-text">
                    <h4>Have a project in mind?</h4>
                    <p>Let&apos;s discuss how we can help bring your ideas to life.</p>
                  </div>
                </div>
                <Link href="/contact-us" className="blogid-footer-cta-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOC scroll highlight script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var links = document.querySelectorAll('.blogid-toc-link');
              if (!links.length) return;
              
              var headingEls = [];
              links.forEach(function(link) {
                var id = link.getAttribute('href').replace('#', '');
                var el = document.getElementById(id);
                if (el) headingEls.push({ el: el, link: link });
              });
              
              function onScroll() {
                var scrollY = window.scrollY + 120;
                var active = null;
                for (var i = headingEls.length - 1; i >= 0; i--) {
                  if (headingEls[i].el.offsetTop <= scrollY) {
                    active = headingEls[i];
                    break;
                  }
                }
                links.forEach(function(l) { l.classList.remove('active'); });
                if (active) active.link.classList.add('active');
              }
              
              window.addEventListener('scroll', onScroll, { passive: true });
              onScroll();
              
              // Smooth scroll for TOC links
              links.forEach(function(link) {
                link.addEventListener('click', function(e) {
                  e.preventDefault();
                  var id = this.getAttribute('href').replace('#', '');
                  var target = document.getElementById(id);
                  if (target) {
                    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
                  }
                });
              });
            })();
          `,
        }}
      />
    </div>
  );
}