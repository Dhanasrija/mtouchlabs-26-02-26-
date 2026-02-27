import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { cookies } from 'next/headers';
import { createPortfolio } from '@/lib/portfolio-actions';
import { logoutUser } from '@/lib/user-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Create Project | Admin | mTouch Labs',
  robots: 'noindex, nofollow',

  openGraph: {
    title: "Create Project | Admin | mTouch Labs",
    description: "Create Project | Admin | mTouch Labs",
    url: "https://www.mtouchlabs.com/admin/portfolios/create",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Create Project | Admin | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Project | Admin | mTouch Labs",
    description: "Create Project | Admin | mTouch Labs",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

const ROLE_LABELS: Record<string, string> = { super_admin:'Super Admin', admin:'Admin', editor:'Editor', viewer:'Viewer' };
const ROLE_COLORS: Record<string, string> = { super_admin:'#ef4444', admin:'#6366f1', editor:'#2563eb', viewer:'#6b7280' };

export default async function CreatePortfolioPage() {
  const cookieStore = await cookies();
  const userName = cookieStore.get('admin_user_name')?.value || 'Admin';
  const userRole = cookieStore.get('admin_user_role')?.value || 'admin';

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
          <Link href="/admin/blogs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            All Blogs
          </Link>
          <Link href="/admin/blogs/create">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Create Blog
          </Link>
          <Link href="/admin/portfolios" className="act">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
            All Portfolios
          </Link>
          <div className="s-div"/>
          <a href="/" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Site
          </a>
        </nav>
        <div className="s-bottom">
          <div className="s-user-info">
            <div className="s-user-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div className="s-user-details">
              <span className="s-user-name">{userName}</span>
              <span className="s-user-role" style={{color:ROLE_COLORS[userRole]}}>{ROLE_LABELS[userRole] || userRole}</span>
            </div>
          </div>
          {userRole === 'super_admin' && <Link href="/admin/users" className="s-bottom-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>Manage Users</Link>}
          <form action={logoutUser}><button type="submit" className="s-bottom-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Logout</button></form>
        </div>
      </aside>

      <div className="main">
        <div className="topbar">
          <div className="t-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Search portfolios, categories...
          </div>
          <div className="t-spacer"/>
          <div className="t-bell">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <span className="t-dot"/>
          </div>
          <div className="t-user">
            <div className="t-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div className="t-info"><span className="t-name">{userName}</span><span className="t-role">mTouch Labs</span></div>
          </div>
        </div>

        <div className="body">
          {/* Header */}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:24}}>
            <div>
              <h1 style={{fontSize:28,fontWeight:700,color:'#111827',margin:0,lineHeight:1.2}}>Create Project</h1>
              <p style={{fontSize:14,color:'#9ca3af',marginTop:4}}>Add a new project to your portfolio</p>
            </div>
            <div style={{display:'flex',gap:10,alignItems:'center',flexShrink:0}}>
              <span id="p-publish-btns"></span>
            </div>
          </div>

          <form id="portfolio-form" action={createPortfolio}>
            {/* Buttons at top of form */}
            <div style={{display:'flex',justifyContent:'flex-end',gap:10,marginBottom:24}}>
              <button type="submit" name="status" value="draft" className="cb-btn cb-btn--secondary">Save Draft</button>
              <button type="submit" className="cb-btn cb-btn--primary">Publish</button>
            </div>

            {/* Radio tabs */}
            <input type="radio" name="active_tab" id="ptab-basic" className="cb-radio" defaultChecked />
            <input type="radio" name="active_tab" id="ptab-technical" className="cb-radio" />
            <input type="radio" name="active_tab" id="ptab-links" className="cb-radio" />
            <input type="radio" name="active_tab" id="ptab-seo" className="cb-radio" />

            <div className="cb-tabs" style={{display:'flex',gap:0,marginBottom:24,borderBottom:'1px solid #e5e7eb'}}>
              <label htmlFor="ptab-basic" className="cb-tab-label">Basic Details</label>
              <label htmlFor="ptab-technical" className="cb-tab-label">Technical</label>
              <label htmlFor="ptab-links" className="cb-tab-label">Links &amp; Media</label>
              <label htmlFor="ptab-seo" className="cb-tab-label">SEO</label>
            </div>

            {/* ===== TAB 1: BASIC DETAILS ===== */}
            <div className="cp-panel cp-panel--basic">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <div className="cb-field">
                      <label className="cb-label" htmlFor="p-title">Project Title *</label>
                      <input type="text" id="p-title" name="title" className="cb-input" placeholder="My Awesome Project" required />
                    </div>
                    <div className="cb-field">
                      <label className="cb-label" htmlFor="p-slug">Slug</label>
                      <input type="text" id="p-slug" name="slug" className="cb-input cb-input--mono" placeholder="my-awesome-project" />
                    </div>
                    <div className="cb-field">
                      <label className="cb-label">Short Description</label>
                      <textarea name="description" className="cb-textarea cb-textarea--sm" placeholder="Brief description of the project..." />
                    </div>
                    <div className="cb-field">
                      <label className="cb-label">Featured Image</label>
                      <div id="p-featured-drop" className="cb-drop-zone">
                        <div className="cb-drop-zone-inner">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40" style={{margin:'0 auto 8px',display:'block',opacity:0.4}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                          <div style={{fontSize:13,marginBottom:4,color:'#6b7280'}}>Click to upload or drag and drop</div>
                          <div style={{fontSize:12,color:'#d1d5db'}}>PNG, JPG up to 5MB</div>
                        </div>
                        <div id="p-featured-preview" style={{marginTop:8}}></div>
                        <input type="text" name="image" className="cb-input" placeholder="Or paste image URL here..." style={{marginTop:12}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <div className="cb-field">
                      <label className="cb-label">Category</label>
                      <select name="category" className="cb-select cb-select--full">
                        <option value="">Select category</option>
                        <option value="Web App">Web App</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="SaaS">SaaS</option>
                        <option value="CRM">CRM</option>
                        <option value="Ed-tech">Ed-tech</option>
                        <option value="Health Care">Health Care</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Utility">Utility</option>
                        <option value="Online Services">Online Services</option>
                        <option value="Transport Management">Transport Management</option>
                      </select>
                    </div>
                    <div className="cb-field">
                      <label className="cb-label">Tags</label>
                      <input type="text" id="p-tags" name="tags" className="cb-input" placeholder="React, Node.js, AWS" />
                    </div>
                    <div className="cb-field">
                      <label className="cb-label">Publish immediately</label>
                      <div className="cb-toggle-row">
                        <input type="checkbox" id="p-published" name="published" className="cb-toggle" />
                        <label htmlFor="p-published" className="cb-toggle-label"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== TAB 2: TECHNICAL ===== */}
            <div className="cp-panel cp-panel--technical">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <h3 className="cb-section-title">Project Details</h3>
                    <div className="cb-field"><label className="cb-label">Tech Stack</label><textarea name="tech_stack" className="cb-textarea cb-textarea--sm" placeholder="React, TypeScript, Node.js, PostgreSQL..." /></div>
                    <div className="cb-field"><label className="cb-label">Your Role</label><input type="text" name="role" className="cb-input" placeholder="Full-Stack Developer, Lead Engineer..." /></div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                      <div className="cb-field"><label className="cb-label">Duration</label><input type="text" name="duration" className="cb-input" placeholder="3 months" /></div>
                      <div className="cb-field"><label className="cb-label">Team Size</label><input type="text" name="team_size" className="cb-input" placeholder="4 members" /></div>
                    </div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card"><h3 className="cb-section-title">Key Features</h3><textarea name="key_features" className="cb-textarea" placeholder={"• Real-time collaboration\n• Payment integration\n• Custom analytics dashboard"} style={{minHeight:150}} /></div>
                  <div className="cb-card"><h3 className="cb-section-title">Challenges &amp; Solutions</h3><textarea name="challenges_solutions" className="cb-textarea" placeholder="Describe challenges faced and how you solved them..." style={{minHeight:120}} /></div>
                </div>
              </div>
            </div>

            {/* ===== TAB 3: LINKS & MEDIA ===== */}
            <div className="cp-panel cp-panel--links">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <h3 className="cb-section-title">Project Links</h3>
                    <div className="cb-field"><label className="cb-label">Live Demo URL</label><input type="text" name="live_url" className="cb-input" placeholder="https://myproject.com" /></div>
                    <div className="cb-field"><label className="cb-label">GitHub Repository</label><input type="text" name="github_url" className="cb-input" placeholder="https://github.com/user/repo" /></div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <h3 className="cb-section-title">Gallery Images</h3>
                    <div id="p-gallery-drop" className="cb-drop-zone" style={{padding:20}}>
                      <div className="cb-drop-zone-inner">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" style={{margin:'0 auto 6px',display:'block',opacity:0.4}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        <div style={{fontSize:12,color:'#9ca3af'}}>Click or drag images here</div>
                      </div>
                      <div id="p-gallery-preview" style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:10}}></div>
                    </div>
                    <textarea name="gallery_images" className="cb-textarea cb-textarea--sm" defaultValue="[]" style={{fontSize:12,fontFamily:'monospace',marginTop:8}} />
                  </div>
                </div>
              </div>
            </div>

            {/* ===== TAB 4: SEO ===== */}
            <div className="cp-panel cp-panel--seo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <div className="cb-field">
                      <div className="cb-label-row"><label className="cb-label">Meta Title</label><span className="cb-counter" id="pmt-count">0/60</span></div>
                      <input type="text" id="p-meta-title" name="meta_title" className="cb-input" placeholder="SEO optimized title..." maxLength={60} />
                    </div>
                    <div className="cb-field">
                      <div className="cb-label-row"><label className="cb-label">Meta Description</label><span className="cb-counter" id="pmd-count">0/160</span></div>
                      <textarea id="p-meta-desc" name="meta_description" className="cb-textarea cb-textarea--sm" placeholder="Brief description for search results..." maxLength={160} />
                    </div>
                    <div className="cb-field">
                      <label className="cb-label">Canonical URL</label>
                      <input type="text" id="p-canonical" name="canonical_url" className="cb-input cb-input--mono" placeholder="Auto-generated from slug..." />
                    </div>
                  </div>
                  <div className="cb-card">
                    <h3 className="cb-section-title">Open Graph</h3>
                    <div className="cb-field"><label className="cb-label">OG Title</label><input type="text" name="og_title" className="cb-input" placeholder="Open Graph title..." /></div>
                    <div className="cb-field"><label className="cb-label">OG Description</label><textarea name="og_description" className="cb-textarea cb-textarea--sm" placeholder="Open Graph description..." /></div>
                    <div className="cb-field">
                      <label className="cb-label">OG Image URL</label>
                      <div id="p-og-image-drop" className="cb-drop-zone" style={{padding:16}}>
                        <div className="cb-drop-zone-inner"><div style={{fontSize:12,color:'#9ca3af'}}>Click or drag OG image here</div></div>
                        <div id="p-og-preview" style={{marginTop:8}}></div>
                        <input type="text" name="og_image" className="cb-input" placeholder="Or paste URL..." style={{marginTop:8}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <h3 className="cb-section-title">SEO Score</h3>
                    <div className="cb-seo-score">
                      <svg className="cb-seo-ring" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                        <circle id="p-seo-arc" cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeDasharray="314" strokeDashoffset="314" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                        <text x="60" y="68" textAnchor="middle" className="cb-seo-number" id="p-seo-num">0</text>
                      </svg>
                    </div>
                    <ul className="cb-seo-checks">
                      <li className="cb-seo-check"><span className="cb-chk-icon" id="pico-mt">&#9675;</span> Meta title length</li>
                      <li className="cb-seo-check"><span className="cb-chk-icon" id="pico-md">&#9675;</span> Meta description</li>
                      <li className="cb-seo-check"><span className="cb-chk-icon" id="pico-sl">&#9675;</span> Project slug set</li>
                      <li className="cb-seo-check"><span className="cb-chk-icon" id="pico-img">&#9675;</span> Featured image</li>
                      <li className="cb-seo-check"><span className="cb-chk-icon" id="pico-tags">&#9675;</span> Tags added</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      <Script src="/js/admin-portfolio-create.js" strategy="afterInteractive" />
    </div>
  );
}