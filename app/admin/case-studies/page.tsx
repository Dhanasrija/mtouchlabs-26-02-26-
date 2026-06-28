import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import { deleteCaseStudy, duplicateCaseStudy } from '@/lib/case-study-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Case Studies | Admin',
  robots: 'noindex, nofollow',
};

interface CaseStudy {
  id: number; title: string; slug: string; industry: string;
  published: boolean; status: string; created_at: string;
}

export default async function AllCaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const search = params.search || '';
  const status = params.status || 'all';
  const industry = params.industry || 'all';

  let caseStudies: CaseStudy[] = [];
  try {
    caseStudies = await sql`
      SELECT id, title, slug, industry, published, status, created_at
      FROM case_studies ORDER BY created_at DESC
    ` as CaseStudy[];
  } catch { /* ignore */ }

  const industries = [...new Set(caseStudies.map(cs => cs.industry).filter(Boolean))];

  const filtered = caseStudies.filter(cs => {
    if (search && !cs.title.toLowerCase().includes(search.toLowerCase()) && !cs.slug.toLowerCase().includes(search.toLowerCase())) return false;
    if (status === 'published' && !cs.published) return false;
    if (status === 'draft' && cs.published) return false;
    if (industry !== 'all' && cs.industry !== industry) return false;
    return true;
  });

  return (
    <div id="admin-root" style={{display:'flex',minHeight:'100vh',fontFamily:"'Inter',sans-serif",background:'#f9fafb',color:'#111827',lineHeight:1.5}}>
      <aside className="sidebar" style={{width:230,minWidth:230,background:'#1a1a2e',display:'flex',flexDirection:'column',position:'fixed',top:0,left:0,bottom:0,zIndex:1060,overflow:'auto'}}>
        <div style={{padding:'20px 20px 18px',display:'flex',alignItems:'center',gap:10}}>
          <img width={266} height={47} loading="lazy" decoding="async" src="/images/logo-white.webp" alt="mTouch Labs" style={{maxWidth:150,height:'auto'}} />
        </div>
        <nav className="s-links">
          <Link href="/admin/dashboard"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Dashboard</Link>
          <Link href="/admin/blogs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>All Blogs</Link>
          <Link href="/admin/blogs/create"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Create Blog</Link>
          <Link href="/admin/case-studies" className="act"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>All Case Studies</Link>
          <Link href="/admin/case-studies/create"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>Create Case Study</Link>
          <Link href="/admin/portfolios"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>All Portfolios</Link>
          <div className="s-div"/>
          <a href="/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>View Site</a>
        </nav>
      </aside>

      <div className="main" style={{marginLeft:230,flex:1,display:'flex',flexDirection:'column'}}>
        <div className="topbar" style={{height:60,background:'#fff',borderBottom:'1px solid #e5e7eb',display:'flex',alignItems:'center',padding:'0 24px',gap:16}}>
          <div style={{flex:1}}/>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:32,height:32,borderRadius:'50%',background:'#6366f1',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:600}}>A</div>
            <span style={{fontSize:14,fontWeight:500}}>Admin</span>
          </div>
        </div>

        <div className="body" style={{padding:24}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
            <div>
              <h1 style={{fontSize:28,fontWeight:700,margin:0}}>Case Studies</h1>
              <p style={{fontSize:14,color:'#9ca3af',marginTop:4}}>{caseStudies.length} total &bull; {caseStudies.filter(cs => cs.published).length} published</p>
            </div>
            <Link href="/admin/case-studies/create" style={{padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:600,background:'#6366f1',color:'#fff',textDecoration:'none',border:'none'}}>+ New Case Study</Link>
          </div>

          <form method="GET" style={{display:'flex',gap:10,marginBottom:20,flexWrap:'wrap'}}>
            <input type="text" name="search" defaultValue={search} placeholder="Search case studies..." style={{padding:'8px 14px',borderRadius:8,border:'1px solid #d1d5db',fontSize:14,flex:1,minWidth:200}} />
            <select name="status" defaultValue={status} style={{padding:'8px 14px',borderRadius:8,border:'1px solid #d1d5db',fontSize:14}}>
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <select name="industry" defaultValue={industry} style={{padding:'8px 14px',borderRadius:8,border:'1px solid #d1d5db',fontSize:14}}>
              <option value="all">All Industries</option>
              {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
            </select>
            <button type="submit" style={{padding:'8px 18px',borderRadius:8,fontSize:14,fontWeight:600,background:'#374151',color:'#fff',border:'none',cursor:'pointer'}}>Filter</button>
          </form>

          <div style={{background:'#fff',borderRadius:12,border:'1px solid #e5e7eb',overflow:'hidden'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
              <thead>
                <tr style={{borderBottom:'1px solid #e5e7eb',background:'#f9fafb'}}>
                  <th style={{padding:'12px 16px',textAlign:'left',fontWeight:600,color:'#6b7280'}}>Title</th>
                  <th style={{padding:'12px 16px',textAlign:'left',fontWeight:600,color:'#6b7280'}}>Industry</th>
                  <th style={{padding:'12px 16px',textAlign:'left',fontWeight:600,color:'#6b7280'}}>Status</th>
                  <th style={{padding:'12px 16px',textAlign:'left',fontWeight:600,color:'#6b7280'}}>Date</th>
                  <th style={{padding:'12px 16px',textAlign:'right',fontWeight:600,color:'#6b7280'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr><td colSpan={5} style={{padding:40,textAlign:'center',color:'#9ca3af'}}>No case studies found.</td></tr>
                )}
                {filtered.map((cs) => (
                  <tr key={cs.id} style={{borderBottom:'1px solid #f3f4f6'}}>
                    <td style={{padding:'14px 16px'}}>
                      <Link href={`/admin/case-studies/${cs.id}/edit`} style={{fontWeight:600,color:'#111827',textDecoration:'none'}}>{cs.title}</Link>
                      <div style={{fontSize:12,color:'#9ca3af',marginTop:2}}>/{cs.slug}</div>
                    </td>
                    <td style={{padding:'14px 16px',color:'#6b7280'}}>{cs.industry || '\u2014'}</td>
                    <td style={{padding:'14px 16px'}}>
                      <span style={{display:'inline-block',padding:'3px 10px',borderRadius:20,fontSize:12,fontWeight:600,background:cs.published?'#d1fae5':cs.status==='scheduled'?'#fef3c7':'#f3f4f6',color:cs.published?'#059669':cs.status==='scheduled'?'#d97706':'#6b7280'}}>
                        {cs.published ? '\u2705 Published' : cs.status === 'scheduled' ? '\u23F0 Scheduled' : '\uD83D\uDCDD Draft'}
                      </span>
                    </td>
                    <td style={{padding:'14px 16px',color:'#6b7280',fontSize:13}}>
                      {new Date(cs.created_at).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
                    </td>
                    <td style={{padding:'14px 16px',textAlign:'right'}}>
                      <div style={{display:'flex',gap:6,justifyContent:'flex-end'}}>
                        <Link href={`/case-studies/${cs.slug}`} target="_blank" rel="noopener noreferrer" style={{padding:'6px 12px',borderRadius:6,fontSize:12,background:'#f3f4f6',color:'#374151',textDecoration:'none',border:'1px solid #e5e7eb'}}>View</Link>
                        <Link href={`/admin/case-studies/${cs.id}/edit`} style={{padding:'6px 12px',borderRadius:6,fontSize:12,background:'#eef2ff',color:'#4338ca',textDecoration:'none',border:'1px solid #c7d2fe'}}>Edit</Link>
                        <form action={duplicateCaseStudy} style={{display:'inline'}}><input type="hidden" name="id" value={cs.id} /><button type="submit" style={{padding:'6px 12px',borderRadius:6,fontSize:12,background:'#fefce8',color:'#a16207',border:'1px solid #fde68a',cursor:'pointer'}}>Duplicate</button></form>
                        <form action={deleteCaseStudy} style={{display:'inline'}}><input type="hidden" name="id" value={cs.id} /><button type="submit" style={{padding:'6px 12px',borderRadius:6,fontSize:12,background:'#fef2f2',color:'#dc2626',border:'1px solid #fecaca',cursor:'pointer'}}>Delete</button></form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
