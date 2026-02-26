import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { updateBlog } from '@/lib/blog-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Edit Blog | Admin | mTouch Labs',
  robots: 'noindex, nofollow',
};

interface Blog {
  id: number; slug: string; title: string; description: string;
  content: string; image: string; author: string; category: string;
  meta_title: string; meta_description: string; published: boolean;
  created_at: string; tags: string[] | string; reading_time: number;
  status: string; featured: boolean; allow_comments: boolean;
  focus_keyword: string; secondary_keywords: string; canonical_url: string;
  robots: string; breadcrumb_title: string; og_title: string;
  og_description: string; og_image: string; twitter_card: string;
  schema_type: string; faq_schema: object[];
  excerpt?: string; snippet_summary?: string; key_takeaways?: string;
  people_also_ask?: string; json_ld?: string; sticky?: boolean;
  redirect_url?: string; publish_date?: string;
}

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogs = await sql`SELECT * FROM blogs WHERE id = ${parseInt(id)}` as Blog[];
  if (blogs.length === 0) notFound();
  const blog = blogs[0];

  // Handle tags: could be Postgres array or comma string
  const tagsStr = Array.isArray(blog.tags) ? blog.tags.join(', ') : (blog.tags || '');

  return (
    <div id="admin-root">
      <aside className="sidebar">
        <div className="s-brand">
          <img src="/images/logo-white.png" alt="mTouch Labs" className="s-logo-img" />
        </div>
        <nav className="s-links">
          <Link href="/admin/dashboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="act">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            All Blogs
          </Link>
          <Link href="/admin/blogs/create">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Create Blog
          </Link>
          <Link href="/admin/portfolios">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
            All Portfolios
          </Link>
          <Link href="/admin/portfolios/create">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            Create Project
          </Link>
          <div className="s-div"/>
          <a href="/" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Site
          </a>
        </nav>
      </aside>

      <div className="main">
        <div className="topbar">
          <div className="t-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Search blogs, categories, tags...
          </div>
          <div className="t-spacer"/>
          <div className="t-bell">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <span className="t-dot"/>
          </div>
          <div className="t-user">
            <div className="t-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="t-info">
              <span className="t-name">Admin</span>
              <span className="t-role">mTouch Labs</span>
            </div>
          </div>
        </div>

        <div className="body">
          {/* Header */}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:24}}>
            <div>
              <h1 style={{fontSize:28,fontWeight:700,color:'#111827',margin:0,lineHeight:1.2}}>Edit Blog</h1>
              <p style={{fontSize:14,color:'#9ca3af',marginTop:4}}>Editing: {blog.title}</p>
            </div>
            <div style={{display:'flex',gap:10,alignItems:'center',flexShrink:0}}>
              <a href={`/blog/${blog.slug}`} target="_blank" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,fontFamily:"'Inter',sans-serif",background:'#fff',color:'#374151',border:'1px solid #d1d5db',textDecoration:'none'}}>Preview</a>
              <button type="submit" form="edit-blog-form" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,cursor:'pointer',fontFamily:"'Inter',sans-serif",background:'#6366f1',color:'#fff',border:'none'}}>Update Blog</button>
            </div>
          </div>

          <form id="edit-blog-form" action={updateBlog}>
            <input type="hidden" name="id" value={blog.id} />

            {/* Radio tabs */}
            <input type="radio" name="active_tab" id="tab-basic" className="cb-radio" defaultChecked />
            <input type="radio" name="active_tab" id="tab-content" className="cb-radio" />
            <input type="radio" name="active_tab" id="tab-seo" className="cb-radio" />
            <input type="radio" name="active_tab" id="tab-aeo" className="cb-radio" />
            <input type="radio" name="active_tab" id="tab-advanced" className="cb-radio" />

            <div className="cb-tabs" style={{display:'flex',gap:0,marginBottom:24,borderBottom:'1px solid #e5e7eb',padding:0}}>
              <label htmlFor="tab-basic" className="cb-tab-label">Basic Details</label>
              <label htmlFor="tab-content" className="cb-tab-label">Content</label>
              <label htmlFor="tab-seo" className="cb-tab-label">SEO</label>
              <label htmlFor="tab-aeo" className="cb-tab-label">AEO</label>
              <label htmlFor="tab-advanced" className="cb-tab-label">Advanced</label>
            </div>

            {/* TAB 1: BASIC */}
            <div className="cb-panel cb-panel--basic">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <div className="cb-field"><label className="cb-label" htmlFor="title">Blog Title</label><input type="text" id="title" name="title" className="cb-input" defaultValue={blog.title} required /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="slug">Slug</label><input type="text" id="slug" name="slug" className="cb-input cb-input--mono" defaultValue={blog.slug} required /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="description">Short Description</label><textarea id="description" name="description" className="cb-textarea cb-textarea--sm" defaultValue={blog.description || ''} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="excerpt">Excerpt</label><textarea id="excerpt" name="excerpt" className="cb-textarea cb-textarea--sm" defaultValue={(blog as any).excerpt || ''} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="image">Featured Image URL</label><input type="text" id="image" name="image" className="cb-input" defaultValue={blog.image || ''} /></div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <div className="cb-field">
                      <label className="cb-label" htmlFor="category">Category</label>
                      <select id="category" name="category" className="cb-select" defaultValue={blog.category}>
                        <option value="">Select categories</option>
                        <option value="AI & Automation">AI &amp; Automation</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Cloud & DevOps">Cloud &amp; DevOps</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                      </select>
                    </div>
                    <div className="cb-field"><label className="cb-label" htmlFor="tags">Tags</label><input type="text" name="tags" className="cb-input" defaultValue={tagsStr} placeholder="AI, Web Dev (comma separated)" /></div>
                    <div className="cb-field">
                      <label className="cb-label" htmlFor="author">Author</label>
                      <select id="author" name="author" className="cb-select" defaultValue={blog.author || 'mTouch Labs'}>
                        <option value="mTouch Labs">mTouch Labs</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div className="cb-field">
                      <label className="cb-label">Status</label>
                      <div className="cb-toggle-row"><input type="checkbox" id="published" name="published" className="cb-toggle" defaultChecked={blog.published} /><label htmlFor="published" className="cb-toggle-label"></label></div>
                    </div>
                    <div className="cb-field"><label className="cb-label" htmlFor="publish_date">Publish Date</label><input type="date" id="publish_date" name="publish_date" className="cb-input" defaultValue={(blog as any).publish_date || ''} /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 2: CONTENT */}
            <div className="cb-panel cb-panel--content">
              <div className="cb-layout cb-layout--full">
                <div className="cb-main cb-main--full">
                  <div className="cb-card cb-card--editor">
                    <div className="cb-editor-toolbar">
                      <div className="cb-toolbar-group">
                        <button type="button" className="cb-toolbar-btn"><strong>B</strong></button>
                        <button type="button" className="cb-toolbar-btn"><em>I</em></button>
                        <button type="button" className="cb-toolbar-btn"><u>U</u></button>
                      </div>
                      <div className="cb-toolbar-sep"/>
                      <div className="cb-toolbar-group">
                        <button type="button" className="cb-toolbar-btn">H1</button>
                        <button type="button" className="cb-toolbar-btn">H2</button>
                        <button type="button" className="cb-toolbar-btn">H3</button>
                      </div>
                      <div className="cb-toolbar-sep"/>
                      <div className="cb-toolbar-group">
                        <button type="button" className="cb-toolbar-btn" title="Link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></button>
                        <button type="button" className="cb-toolbar-btn" title="Code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></button>
                      </div>
                    </div>
                    <div className="cb-field"><textarea id="content" name="content" className="cb-textarea cb-textarea--editor" defaultValue={blog.content || ''} /></div>
                    <div className="cb-editor-footer">
                      <span className="cb-editor-hint">Supports HTML formatting</span>
                      <span className="cb-editor-mode">HTML Mode</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 3: SEO */}
            <div className="cb-panel cb-panel--seo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <div className="cb-field"><div className="cb-label-row"><label className="cb-label" htmlFor="meta_title">Meta Title</label><span className="cb-counter" id="mt-count">0/60</span></div><input type="text" id="meta_title" name="meta_title" className="cb-input" defaultValue={blog.meta_title || ''} maxLength={60} /></div>
                    <div className="cb-field"><div className="cb-label-row"><label className="cb-label" htmlFor="meta_description">Meta Description</label><span className="cb-counter" id="md-count">0/160</span></div><textarea id="meta_description" name="meta_description" className="cb-textarea cb-textarea--sm" defaultValue={blog.meta_description || ''} maxLength={160} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="focus_keyword">Focus Keyword</label><input type="text" id="focus_keyword" name="focus_keyword" className="cb-input" defaultValue={blog.focus_keyword || ''} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="canonical_url_field">Canonical URL</label><input type="text" id="canonical_url_field" name="canonical_url" className="cb-input" defaultValue={blog.canonical_url || ''} /></div>
                    <div className="cb-field"><div className="cb-toggle-field"><label className="cb-label">Robots Index</label><input type="checkbox" id="robots_index" name="robots_index" className="cb-toggle" defaultChecked={blog.robots !== 'noindex, nofollow'} /><label htmlFor="robots_index" className="cb-toggle-label"></label></div></div>
                  </div>
                  <div className="cb-card">
                    <h3 className="cb-section-title">Open Graph</h3>
                    <div className="cb-field"><label className="cb-label" htmlFor="og_title">OG Title</label><input type="text" id="og_title" name="og_title" className="cb-input" defaultValue={blog.og_title || ''} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="og_description">OG Description</label><textarea id="og_description" name="og_description" className="cb-textarea cb-textarea--sm" defaultValue={blog.og_description || ''} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="og_image">OG Image URL</label><input type="text" id="og_image" name="og_image" className="cb-input" defaultValue={blog.og_image || ''} /></div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <h3 className="cb-section-title">SEO Score</h3>
                    <div className="cb-seo-score"><svg className="cb-seo-ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8"/><circle id="seo-arc" cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeDasharray="314" strokeDashoffset="314" strokeLinecap="round" transform="rotate(-90 60 60)"/><text x="60" y="68" textAnchor="middle" className="cb-seo-number" id="seo-num">0</text></svg></div>
                    <ul className="cb-seo-checks">
                      <li className="cb-seo-check" id="chk-mt"><span className="cb-chk-icon" id="ico-mt">○</span> Meta title length</li>
                      <li className="cb-seo-check" id="chk-md"><span className="cb-chk-icon" id="ico-md">○</span> Meta description</li>
                      <li className="cb-seo-check" id="chk-fk"><span className="cb-chk-icon" id="ico-fk">○</span> Focus keyword in title</li>
                      <li className="cb-seo-check" id="chk-cn"><span className="cb-chk-icon" id="ico-cn">○</span> Canonical URL set</li>
                      <li className="cb-seo-check" id="chk-og"><span className="cb-chk-icon" id="ico-og">○</span> Open Graph configured</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 4: AEO */}
            <div className="cb-panel cb-panel--aeo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <h3 className="cb-section-title">FAQ Schema (JSON)</h3>
                    <div className="cb-field"><textarea name="faq_schema" className="cb-textarea cb-textarea--code" defaultValue={blog.faq_schema ? JSON.stringify(blog.faq_schema, null, 2) : '[]'} /></div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card"><div className="cb-field"><label className="cb-label" htmlFor="snippet_summary">Featured Snippet Summary</label><textarea id="snippet_summary" name="snippet_summary" className="cb-textarea cb-textarea--sm" defaultValue={(blog as any).snippet_summary || ''} /></div></div>
                  <div className="cb-card"><div className="cb-field"><label className="cb-label" htmlFor="key_takeaways">Key Takeaways</label><textarea id="key_takeaways" name="key_takeaways" className="cb-textarea cb-textarea--sm" defaultValue={(blog as any).key_takeaways || ''} /></div></div>
                  <div className="cb-card"><div className="cb-field"><label className="cb-label" htmlFor="schema_type">Schema Type</label><select id="schema_type" name="schema_type" className="cb-select" defaultValue={blog.schema_type || 'BlogPosting'}><option value="BlogPosting">BlogPosting</option><option value="Article">Article</option><option value="TechArticle">TechArticle</option><option value="HowTo">HowTo</option><option value="FAQPage">FAQPage</option></select></div></div>
                </div>
              </div>
            </div>

            {/* TAB 5: ADVANCED */}
            <div className="cb-panel cb-panel--advanced">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card"><div className="cb-field"><label className="cb-label" htmlFor="json_ld">Custom JSON-LD</label><textarea id="json_ld" name="json_ld" className="cb-textarea cb-textarea--code" defaultValue={(blog as any).json_ld || ''} /></div></div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <div className="cb-field"><div className="cb-toggle-field"><div><label className="cb-label">Sticky Post</label></div><input type="checkbox" id="sticky" name="sticky" className="cb-toggle" defaultChecked={(blog as any).sticky || false} /><label htmlFor="sticky" className="cb-toggle-label"></label></div></div>
                    <div className="cb-field"><div className="cb-toggle-field"><div><label className="cb-label">Enable Comments</label></div><input type="checkbox" id="comments" name="comments" className="cb-toggle" defaultChecked={blog.allow_comments !== false} /><label htmlFor="comments" className="cb-toggle-label"></label></div></div>
                  </div>
                  <div className="cb-card"><div className="cb-field"><label className="cb-label" htmlFor="redirect_url">Redirect URL</label><input type="text" id="redirect_url" name="redirect_url" className="cb-input" defaultValue={(blog as any).redirect_url || ''} /></div></div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      <Script src="/js/admin-blog-create.js" strategy="afterInteractive" />
    </div>
  );
}