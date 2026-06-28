import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { updateCaseStudy } from '@/lib/case-study-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Edit Case Study | Admin',
  robots: 'noindex, nofollow',
};

export default async function EditCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const rows = await sql`SELECT * FROM case_studies WHERE id = ${parseInt(id)}`;
  if (rows.length === 0) notFound();
  const cs = rows[0];

  const challengePoints: string[] = Array.isArray(cs.challenge_points) ? cs.challenge_points : [];
  const features: string[] = Array.isArray(cs.features) ? cs.features : [];
  const technologies: { name: string; purpose: string }[] = Array.isArray(cs.technologies) ? cs.technologies : [];
  const devProcess: { step: string; desc: string }[] = Array.isArray(cs.dev_process) ? cs.dev_process : [];
  const resultPoints: string[] = Array.isArray(cs.result_points) ? cs.result_points : [];
  const faqItems: { question: string; answer: string }[] = Array.isArray(cs.faq_schema) ? cs.faq_schema : [];
  const internalLinks: { url: string; text: string }[] = Array.isArray(cs.internal_links) ? cs.internal_links : [];

  return (
    <div id="admin-root">
      <aside className="sidebar">
        <div className="s-brand"><img width={266} height={47} loading="lazy" decoding="async" src="/images/logo-white.webp" alt="mTouch Labs" className="s-logo-img" /></div>
        <nav className="s-links">
          <Link href="/admin/dashboard"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Dashboard</Link>
          <Link href="/admin/blogs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>All Blogs</Link>
          <Link href="/admin/case-studies" className="act"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>All Case Studies</Link>
          <Link href="/admin/case-studies/create"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>Create Case Study</Link>
          <div className="s-div"/>
          <a href="/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>View Site</a>
        </nav>
      </aside>
      <div className="main">
        <div className="topbar"><div className="t-spacer"/><div className="t-user"><div className="t-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div className="t-info"><span className="t-name">Admin</span><span className="t-role">mTouch Labs</span></div></div></div>
        <div className="body">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:24}}>
            <div>
              <h1 style={{fontSize:28,fontWeight:700,color:'#111827',margin:0}}>Edit Case Study</h1>
              <p style={{fontSize:14,color:'#9ca3af',marginTop:4}}>Editing: {cs.title}</p>
            </div>
            <div style={{display:'flex',gap:10}}>
              <Link href="/admin/case-studies" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,background:'#fff',color:'#374151',border:'1px solid #d1d5db',textDecoration:'none'}}>Cancel</Link>
              <button type="submit" form="cs-form" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,background:'#6366f1',color:'#fff',border:'none',cursor:'pointer'}}>Update</button>
            </div>
          </div>
          <form id="cs-form" action={updateCaseStudy}>
            <input type="hidden" name="id" value={cs.id} />
            <input type="hidden" name="existing_image" value={cs.image || ''} />
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
                    <div className="cb-field"><label className="cb-label">Title</label><input type="text" name="title" className="cb-input" defaultValue={cs.title} required /></div>
                    <div className="cb-field"><label className="cb-label">Slug</label><input type="text" name="slug" className="cb-input cb-input--mono" defaultValue={cs.slug} required /></div>
                    <div className="cb-field"><label className="cb-label">Overview</label><textarea name="overview" className="cb-textarea cb-textarea--sm" defaultValue={cs.overview || ''} /></div>
                    <div className="cb-field"><label className="cb-label">Featured Image</label>{cs.image && <p style={{fontSize:12,color:'#6b7280',marginBottom:8}}>Current: {cs.image}</p>}<input type="file" name="featured_image" className="cb-upload-input" accept="image/*" /></div>
                    <div className="cb-field"><label className="cb-label">Image Alt Text</label><input type="text" name="image_alt" className="cb-input" defaultValue={cs.image_alt || ''} /></div>
                  </div>
                </div>
                <div className="cb-sidebar-panel">
                  <div className="cb-card">
                    <div className="cb-field"><label className="cb-label">Industry</label><select name="industry" className="cb-select" defaultValue={cs.industry || ''}><option value="">Select</option>{['Healthcare','E-commerce','Logistics','Fintech','Education','Real Estate','SaaS','Social Media'].map(ind => (<option key={ind} value={ind}>{ind}</option>))}</select></div>
                    <div className="cb-field"><label className="cb-label">Platform</label><input type="text" name="platform" className="cb-input" defaultValue={cs.platform || ''} /></div>
                    <div className="cb-field"><label className="cb-label">Icon</label><input type="text" name="icon" className="cb-input" defaultValue={cs.icon || ''} maxLength={4} /></div>
                    <div className="cb-field"><label className="cb-label">Accent Color</label><input type="color" name="color" defaultValue={cs.color || '#6366f1'} style={{width:50,height:36,border:'none'}} /></div>
                    <div className="cb-field"><label className="cb-label">Published</label><div className="cb-toggle-row"><input type="checkbox" id="published" name="published" className="cb-toggle" defaultChecked={cs.published} /><label htmlFor="published" className="cb-toggle-label"></label></div></div>
                    <div className="cb-field"><label className="cb-label">Publish Date</label><input type="date" name="publish_date" className="cb-input" defaultValue={cs.publish_date ? new Date(cs.publish_date).toISOString().split('T')[0] : ''} /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 2: CONTENT */}
            <div className="cb-panel cb-panel--content">
              <div className="cb-layout cb-layout--full">
                <div className="cb-main cb-main--full">
                  <div className="cb-card"><h3 className="cb-section-title">Client Challenge</h3><div className="cb-field"><textarea name="challenge" className="cb-textarea cb-textarea--sm" defaultValue={cs.challenge || ''} /></div><div className="cb-field"><label className="cb-label">Challenge Points</label><textarea name="challenge_point" className="cb-textarea cb-textarea--sm" defaultValue={challengePoints.join('\n')} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Our Approach</h3><div className="cb-field"><textarea name="approach" className="cb-textarea cb-textarea--sm" defaultValue={cs.approach || ''} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Solution Delivered</h3><div className="cb-field"><textarea name="solution" className="cb-textarea cb-textarea--sm" defaultValue={cs.solution || ''} /></div><div className="cb-field"><label className="cb-label">Key Features</label><textarea name="feature" className="cb-textarea cb-textarea--sm" defaultValue={features.join('\n')} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Technologies Used</h3>{Array.from({length:5}).map((_,i) => (<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}><input type="text" name={`tech_name_${i+1}`} className="cb-input" placeholder="Technology" defaultValue={technologies[i]?.name || ''} /><input type="text" name={`tech_purpose_${i+1}`} className="cb-input" placeholder="Purpose" defaultValue={technologies[i]?.purpose || ''} /></div>))}</div>
                  <div className="cb-card"><h3 className="cb-section-title">Development Process</h3>{Array.from({length:5}).map((_,i) => (<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:10,marginBottom:10}}><input type="text" name={`process_step_${i+1}`} className="cb-input" placeholder="Step title" defaultValue={devProcess[i]?.step || ''} /><input type="text" name={`process_desc_${i+1}`} className="cb-input" placeholder="Description" defaultValue={devProcess[i]?.desc || ''} /></div>))}</div>
                  <div className="cb-card"><h3 className="cb-section-title">Results &amp; Impact</h3><div className="cb-field"><textarea name="results" className="cb-textarea cb-textarea--sm" defaultValue={cs.results || ''} /></div><div className="cb-field"><label className="cb-label">Result Points</label><textarea name="result_point" className="cb-textarea cb-textarea--sm" defaultValue={resultPoints.join('\n')} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Conclusion</h3><div className="cb-field"><textarea name="conclusion" className="cb-textarea cb-textarea--sm" defaultValue={cs.conclusion || ''} /></div></div>
                  <div className="cb-card"><h3 className="cb-section-title">Client Testimonial</h3><div className="cb-field"><textarea name="testimonial_quote" className="cb-textarea cb-textarea--sm" defaultValue={cs.testimonial_quote || ''} /></div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}><div className="cb-field"><label className="cb-label">Role</label><input type="text" name="testimonial_role" className="cb-input" defaultValue={cs.testimonial_role || ''} /></div><div className="cb-field"><label className="cb-label">Initials</label><input type="text" name="testimonial_initials" className="cb-input" defaultValue={cs.testimonial_initials || ''} maxLength={4} /></div></div></div>
                </div>
              </div>
            </div>

            {/* TAB 3: SEO */}
            <div className="cb-panel cb-panel--seo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card">
                    <div className="cb-field"><label className="cb-label">Meta Title</label><input type="text" name="meta_title" className="cb-input" defaultValue={cs.meta_title || ''} maxLength={60} /></div>
                    <div className="cb-field"><label className="cb-label">Meta Description</label><textarea name="meta_description" className="cb-textarea cb-textarea--sm" defaultValue={cs.meta_description || ''} maxLength={160} /></div>
                    <div className="cb-field"><label className="cb-label">Keywords</label><input type="text" name="keywords" className="cb-input" defaultValue={cs.keywords || ''} /></div>
                    <div className="cb-field"><label className="cb-label">Canonical URL</label><input type="text" name="canonical_url" className="cb-input" defaultValue={cs.canonical_url || ''} /></div>
                    <div className="cb-field"><label className="cb-label">Breadcrumb Title</label><input type="text" name="breadcrumb_title" className="cb-input" defaultValue={cs.breadcrumb_title || ''} /></div>
                  </div>
                  <div className="cb-card"><h3 className="cb-section-title">Open Graph</h3><div className="cb-field"><label className="cb-label">OG Title</label><input type="text" name="og_title" className="cb-input" defaultValue={cs.og_title || ''} /></div><div className="cb-field"><label className="cb-label">OG Description</label><textarea name="og_description" className="cb-textarea cb-textarea--sm" defaultValue={cs.og_description || ''} /></div><div className="cb-field"><label className="cb-label">OG Image URL</label><input type="text" name="og_image" className="cb-input" defaultValue={cs.og_image || '/images/Light.png'} /></div></div>
                </div>
              </div>
            </div>

            {/* TAB 4: AEO */}
            <div className="cb-panel cb-panel--aeo">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card"><h3 className="cb-section-title">FAQ Structured Data</h3>{Array.from({length:5}).map((_,i) => (<div key={i} className="cb-faq-item"><input type="text" name={`faq_q_${i+1}`} className="cb-input cb-input--faq" placeholder={`Question ${i+1}`} defaultValue={faqItems[i]?.question || ''} /><textarea name={`faq_a_${i+1}`} className="cb-textarea cb-textarea--faq" placeholder={`Answer ${i+1}`} defaultValue={faqItems[i]?.answer || ''} /></div>))}</div>
                </div>
              </div>
            </div>

            {/* TAB 5: ADVANCED */}
            <div className="cb-panel cb-panel--advanced">
              <div className="cb-layout">
                <div className="cb-main">
                  <div className="cb-card"><h3 className="cb-section-title">Internal Links</h3>{Array.from({length:3}).map((_,i) => (<div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}><input type="text" name={`link_url_${i+1}`} className="cb-input" placeholder="/service-page" defaultValue={internalLinks[i]?.url || ''} /><input type="text" name={`link_text_${i+1}`} className="cb-input" placeholder="Link text" defaultValue={internalLinks[i]?.text || ''} /></div>))}</div>
                  <div className="cb-card"><div className="cb-field"><label className="cb-label">Custom JSON-LD</label><textarea name="schema_json_ld" className="cb-textarea cb-textarea--code" defaultValue={cs.schema_json_ld || ''} /></div></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
