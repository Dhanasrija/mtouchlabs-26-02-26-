import { Metadata } from 'next';
import Link from 'next/link';
import { createCaseStudy } from '@/lib/case-study-actions';

export const metadata: Metadata = {
  title: 'Create Case Study | Admin',
  robots: 'noindex, nofollow',
};

export default function CreateCaseStudyPage() {
  return (
    <div id="admin-root">
      <aside className="sidebar">
        <div className="s-brand"><img width={266} height={47} loading="lazy" decoding="async" src="/images/logo-white.webp" alt="mTouch Labs" className="s-logo-img" /></div>
        <nav className="s-links">
          <Link href="/admin/dashboard"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Dashboard</Link>
          <Link href="/admin/blogs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>All Blogs</Link>
          <Link href="/admin/case-studies"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>All Case Studies</Link>
          <Link href="/admin/case-studies/create" className="act"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>Create Case Study</Link>
          <Link href="/admin/portfolios"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>All Portfolios</Link>
          <div className="s-div"/>
          <a href="/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>View Site</a>
        </nav>
      </aside>
      <div className="main">
        <div className="topbar"><div className="t-spacer"/><div className="t-user"><div className="t-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div className="t-info"><span className="t-name">Admin</span><span className="t-role">mTouch Labs</span></div></div></div>
        <div className="body">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:24}}>
            <div>
              <h1 style={{fontSize:28,fontWeight:700,color:'#111827',margin:0}}>Create Case Study</h1>
              <p style={{fontSize:14,color:'#9ca3af',marginTop:4}}>Add a new case study to your portfolio</p>
            </div>
            <div style={{display:'flex',gap:10}}>
              <Link href="/admin/case-studies" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,background:'#fff',color:'#374151',border:'1px solid #d1d5db',textDecoration:'none'}}>Cancel</Link>
              <button type="submit" form="cs-form" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,background:'#6366f1',color:'#fff',border:'none',cursor:'pointer'}}>Publish</button>
            </div>
          </div>
          <form id="cs-form" action={createCaseStudy}>
            <input type="radio" name="active_tab" id="tab-basic" className="cb-radio" defaultChecked />
            <input type="radio" name="active_tab" id="tab-content" className="cb-radio" />
            <input type="radio" name="active_tab" id="tab-seo" className="cb-radio" />
            <input type="radio" name="active_tab" id="tab-aeo" className="cb-radio" />
            <input type="radio" name="active_tab" id="tab-advanced" className="cb-radio" />
            <div className="cb-tabs" style={{display:'flex',gap:0,marginBottom:24,borderBottom:'1px solid #e5e7eb'}}>
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
                    <div className="cb-field"><label className="cb-label" htmlFor="title">Title</label><input type="text" id="title" name="title" className="cb-input" placeholder="e.g. Healthcare Mobile App Development" required /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="slug">Slug</label><input type="text" id="slug" name="slug" className="cb-input cb-input--mono" placeholder="healthcare-mobile-app-development" required /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="overview">Overview</label><textarea id="overview" name="overview" className="cb-textarea cb-textarea--sm" placeholder="Brief overview of the case study..." /></div>
                    <div className="cb-field"><label className="cb-label">Featured Image</label><div className="cb-upload-zone"><p className="cb-upload-text">Click or drag to upload</p><p className="cb-upload-hint">PNG, JPG up to 5MB</p><input type="file" name="featured_image" className="cb-upload-input" accept="image/*" /></div></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="image_alt">Image Alt Text</label><input type="text" id="image_alt" name="image_alt" className="cb-input" placeholder="Descriptive alt text" /></div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <div className="cb-field"><label className="cb-label" htmlFor="industry">Industry</label><select id="industry" name="industry" className="cb-select"><option value="">Select industry</option><option value="Healthcare">Healthcare</option><option value="E-commerce">E-commerce</option><option value="Logistics">Logistics</option><option value="Fintech">Fintech</option><option value="Education">Education</option><option value="Real Estate">Real Estate</option><option value="SaaS">SaaS</option><option value="Social Media">Social Media</option></select></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="platform">Platform</label><input type="text" id="platform" name="platform" className="cb-input" placeholder="iOS & Android, Web, etc." /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="icon">Icon (emoji)</label><input type="text" id="icon" name="icon" className="cb-input" placeholder="🏥" maxLength={4} /></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="color">Accent Color</label><input type="color" id="color" name="color" defaultValue="#6366f1" style={{width:50,height:36,border:'none',cursor:'pointer'}} /></div>
                    <div className="cb-field"><label className="cb-label">Status</label><div className="cb-toggle-row"><input type="checkbox" id="published" name="published" className="cb-toggle" /><label htmlFor="published" className="cb-toggle-label"></label></div></div>
                    <div className="cb-field"><label className="cb-label" htmlFor="publish_date">Publish Date</label><input type="date" id="publish_date" name="publish_date" className="cb-input" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 2: CONTENT */}
            <div className="cb-panel cb-panel--content">
              <div className="cb-layout cb-layout--full">
                <div className="cb-main cb-main--full">
                  <div className="cb-card"><h3 className="cb-section-title">Client Challenge</h3><div className="cb-field"><label className="cb-label">Challenge Description</label><textarea name="challenge" className="cb-textarea cb-textarea--sm" placeholder="Describe the client challenge..." /></div><div className="cb-field"><label className="cb-label">Challenge Points (one per line)</label><textarea name="challenge_point" className="cb-textarea cb-textarea--sm" placeholder={"Manual scheduling\nLimited access\nInefficient communication"} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Our Approach</h3><div className="cb-field"><textarea name="approach" className="cb-textarea cb-textarea--sm" placeholder="Describe the development approach..." /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Solution Delivered</h3><div className="cb-field"><label className="cb-label">Solution Description</label><textarea name="solution" className="cb-textarea cb-textarea--sm" placeholder="Describe the solution..." /></div><div className="cb-field"><label className="cb-label">Key Features (one per line)</label><textarea name="feature" className="cb-textarea cb-textarea--sm" placeholder={"Appointment booking\nSecure messaging\nDigital records"} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Technologies Used</h3>{[1,2,3,4,5].map(i => (<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}><input type="text" name={`tech_name_${i}`} className="cb-input" placeholder={`Technology ${i}`} /><input type="text" name={`tech_purpose_${i}`} className="cb-input" placeholder="Purpose..." /></div>))}</div>
                  <div className="cb-card"><h3 className="cb-section-title">Development Process</h3>{[1,2,3,4,5].map(i => (<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:10,marginBottom:10}}><input type="text" name={`process_step_${i}`} className="cb-input" placeholder={`Step ${i} title`} /><input type="text" name={`process_desc_${i}`} className="cb-input" placeholder="Description..." /></div>))}</div>
                  <div className="cb-card"><h3 className="cb-section-title">Results &amp; Impact</h3><div className="cb-field"><label className="cb-label">Results Description</label><textarea name="results" className="cb-textarea cb-textarea--sm" placeholder="Describe the results..." /></div><div className="cb-field"><label className="cb-label">Result Points (one per line)</label><textarea name="result_point" className="cb-textarea cb-textarea--sm" placeholder={"Improved engagement\nFaster process\nReduced workload"} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Conclusion</h3><div className="cb-field"><textarea name="conclusion" className="cb-textarea cb-textarea--sm" placeholder="Concluding paragraph..." /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Client Testimonial</h3><div className="cb-field"><label className="cb-label">Quote</label><textarea name="testimonial_quote" className="cb-textarea cb-textarea--sm" placeholder="Client testimonial quote..." /></div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}><div className="cb-field"><label className="cb-label">Role</label><input type="text" name="testimonial_role" className="cb-input" placeholder="e.g. Startup Founder" /></div><div className="cb-field"><label className="cb-label">Initials</label><input type="text" name="testimonial_initials" className="cb-input" placeholder="e.g. SF" maxLength={4} /></div></div></div>
                </div>
              </div>
            </div>

            {/* TAB 3: SEO */}
            <div className="cb-panel cb-panel--seo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <div className="cb-field"><label className="cb-label">Meta Title</label><input type="text" name="meta_title" className="cb-input" placeholder="SEO title..." maxLength={60} /></div>
                    <div className="cb-field"><label className="cb-label">Meta Description</label><textarea name="meta_description" className="cb-textarea cb-textarea--sm" placeholder="SEO description..." maxLength={160} /></div>
                    <div className="cb-field"><label className="cb-label">Keywords</label><input type="text" name="keywords" className="cb-input" placeholder="healthcare app, mobile development" /></div>
                    <div className="cb-field"><label className="cb-label">Canonical URL</label><input type="text" name="canonical_url" className="cb-input" placeholder="https://www.mtouchlabs.com/case-studies/..." /></div>
                    <div className="cb-field"><label className="cb-label">Breadcrumb Title</label><input type="text" name="breadcrumb_title" className="cb-input" placeholder="Short breadcrumb title" /></div>
                  </div>
                  <div className="cb-card"><h3 className="cb-section-title">Open Graph</h3><div className="cb-field"><label className="cb-label">OG Title</label><input type="text" name="og_title" className="cb-input" placeholder="OG title..." /></div><div className="cb-field"><label className="cb-label">OG Description</label><textarea name="og_description" className="cb-textarea cb-textarea--sm" placeholder="OG description..." /></div><div className="cb-field"><label className="cb-label">OG Image URL</label><input type="text" name="og_image" className="cb-input" placeholder="/images/Light.png" defaultValue="/images/Light.png" /></div></div>
                </div>
              </div>
            </div>

            {/* TAB 4: AEO */}
            <div className="cb-panel cb-panel--aeo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card"><h3 className="cb-section-title">FAQ Structured Data</h3>{[1,2,3,4,5].map(i => (<div key={i} className="cb-faq-item"><input type="text" name={`faq_q_${i}`} className="cb-input cb-input--faq" placeholder={`Question ${i}...`} /><textarea name={`faq_a_${i}`} className="cb-textarea cb-textarea--faq" placeholder={`Answer ${i}...`} /></div>))}</div>
                </div>
              </div>
            </div>

            {/* TAB 5: ADVANCED */}
            <div className="cb-panel cb-panel--advanced">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card"><h3 className="cb-section-title">Internal Links</h3>{[1,2,3].map(i => (<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}><input type="text" name={`link_url_${i}`} className="cb-input" placeholder="/mobile-app-development-company" /><input type="text" name={`link_text_${i}`} className="cb-input" placeholder="Mobile App Development" /></div>))}</div>
                  <div className="cb-card"><div className="cb-field"><label className="cb-label">Custom JSON-LD</label><textarea name="schema_json_ld" className="cb-textarea cb-textarea--code" placeholder={'{"@context": "https://schema.org", ...}'} /></div></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
