import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dashboard | mTouch Labs Admin',
  robots: 'noindex, nofollow',
};

interface BlogRow {
  id: number; title: string; slug: string; category: string;
  published: boolean; content: string | null; created_at: string;
}

export default async function AdminDashboardPage() {
  let blogs: BlogRow[] = [];
  let portfolioCount = 0;
  try { blogs = (await sql`SELECT id,title,slug,category,published,content,created_at FROM blogs ORDER BY created_at DESC`) as BlogRow[]; } catch {}
  try { const p = await sql`SELECT COUNT(*) as count FROM portfolios`; portfolioCount = Number(p[0]?.count) || 0; } catch {}

  const total = blogs.length;
  const pub = blogs.filter(b => b.published).length;
  const dft = blogs.filter(b => !b.published).length;
  const wc = blogs.filter(b => b.content && String(b.content).trim().length > 0).length;
  const top5 = blogs.filter(b => b.published).slice(0, 5);

  const now = new Date();
  const moNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const mc: {m:string;c:number}[] = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const c = blogs.filter(b => { const x = new Date(b.created_at); return x.getMonth()===d.getMonth()&&x.getFullYear()===d.getFullYear(); }).length;
    mc.push({ m: moNames[d.getMonth()], c });
  }
  const mx = Math.max(...mc.map(x => x.c), 1);

  // Y-axis labels for bar chart
  const yMax = Math.ceil(mx / 5) * 5 || 5;
  const yLabels = [yMax, Math.round(yMax*0.75), Math.round(yMax*0.5), Math.round(yMax*0.25), 0];

  return (
    <div id="admin-root">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <div className="s-brand">
          <img src="/images/logo-white.png" alt="mTouch Labs" className="s-logo-img" />
        </div>
        <nav className="s-links">
          <Link href="/admin/dashboard" className="act">
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
          <div className="s-div"/>
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
        <div className="s-collapse">
          <button type="button">‹</button>
        </div>
      </aside>

      {/* ===== MAIN ===== */}
      <div className="main">
        {/* Top Bar */}
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

        {/* Body */}
        <div className="body">
          <div className="hdr">
            <div>
              <h1>Dashboard</h1>
              <p>Overview of your blog performance</p>
            </div>
          </div>

          {/* Stat Cards */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'16px',marginBottom:'24px',visibility:'visible',opacity:1}}>
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, bg:'#eff6ff', fg:'#3b82f6', val:total, lbl:'Total Blogs', trend:'+12%', up:true },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>, bg:'#ecfdf5', fg:'#10b981', val:pub, lbl:'Published', trend:'+8%', up:true },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, bg:'#fefce8', fg:'#eab308', val:dft, lbl:'Drafts', trend:'-3%', up:false },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, bg:'#f0fdf4', fg:'#22c55e', val:wc, lbl:'With Content', trend:'+5%', up:true },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>, bg:'#fef2f2', fg:'#ef4444', val:portfolioCount, lbl:'Portfolio Projects', trend:'+18%', up:true },
            ].map((s,i) => (
              <div key={i} style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'14px',padding:'20px',display:'block',visibility:'visible',opacity:1}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'16px'}}>
                  <div style={{width:'44px',height:'44px',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',background:s.bg,color:s.fg}}>
                    <span style={{width:'22px',height:'22px',display:'flex'}}>{s.icon}</span>
                  </div>
                  <span style={{fontSize:'12px',fontWeight:600,color:s.up?'#10b981':'#ef4444'}}>↗ {s.trend}</span>
                </div>
                <div style={{fontSize:'30px',fontWeight:700,color:'#111827',lineHeight:1}}>{s.val}</div>
                <span style={{fontSize:'14px',color:'#6b7280',marginTop:'6px',display:'block'}}>{s.lbl}</span>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="chart-row">
            {/* Bar Chart (large) */}
            <div className="card">
              <div className="c-title">Blogs Published Per Month</div>
              <div className="bar-chart">
                <div className="y-axis">
                  {yLabels.map((v, i) => <span key={i}>{v}</span>)}
                </div>
                {mc.map((x, i) => (
                  <div key={i} className="bar-col">
                    <div className="bar-fill" data-count={`${x.c} blog${x.c !== 1 ? 's' : ''}`} style={{ height: `${Math.max((x.c / yMax) * 200, 3)}px` }} />
                    <span className="bar-lbl">{x.m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Overview (small) */}
            <div className="card">
              <div className="c-title">Content Overview</div>
              <div className="ov-list">
                <div className="ov-item">
                  <div className="ov-hdr">
                    <span className="ov-lbl">Published</span>
                    <span className="ov-val" style={{ color: '#10b981' }}>{pub}</span>
                  </div>
                  <div className="ov-bar">
                    <div className="ov-fill" style={{ width: `${total > 0 ? (pub / total) * 100 : 0}%`, background: 'linear-gradient(90deg, #10b981, #059669)' }} />
                  </div>
                </div>
                <div className="ov-item">
                  <div className="ov-hdr">
                    <span className="ov-lbl">Drafts</span>
                    <span className="ov-val" style={{ color: '#f59e0b' }}>{dft}</span>
                  </div>
                  <div className="ov-bar">
                    <div className="ov-fill" style={{ width: `${total > 0 ? (dft / total) * 100 : 0}%`, background: 'linear-gradient(90deg, #f59e0b, #d97706)' }} />
                  </div>
                </div>
                <div className="ov-item">
                  <div className="ov-hdr">
                    <span className="ov-lbl">With Content</span>
                    <span className="ov-val" style={{ color: '#3b82f6' }}>{wc}</span>
                  </div>
                  <div className="ov-bar">
                    <div className="ov-fill" style={{ width: `${total > 0 ? (wc / total) * 100 : 0}%`, background: 'linear-gradient(90deg, #3b82f6, #2563eb)' }} />
                  </div>
                </div>
                <div className="ov-item">
                  <div className="ov-hdr">
                    <span className="ov-lbl">Portfolio</span>
                    <span className="ov-val" style={{ color: '#f43f5e' }}>{portfolioCount}</span>
                  </div>
                  <div className="ov-bar">
                    <div className="ov-fill" style={{ width: `${portfolioCount > 0 ? Math.min((portfolioCount / (total || 1)) * 100, 100) : 0}%`, background: 'linear-gradient(90deg, #f43f5e, #e11d48)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="tbl-card">
            <div className="tbl-top">
              <div className="c-title">Top Performing Blogs</div>
              <Link href="/admin/blogs">View All →</Link>
            </div>
            <table className="t">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Content</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {top5.map(b => (
                  <tr key={b.id}>
                    <td style={{ fontWeight: 500, color: '#111827' }}>
                      {b.title.length > 45 ? b.title.substring(0, 45) + '...' : b.title}
                    </td>
                    <td style={{ color: '#6b7280' }}>{b.category}</td>
                    <td style={{ fontSize: '13px', color: b.content && String(b.content).trim().length > 0 ? '#10b981' : '#ef4444' }}>
                      {b.content && String(b.content).trim().length > 0 ? '✓ Has Content' : '✗ Empty'}
                    </td>
                    <td>
                      <span className={`badge ${b.published ? 'pub' : 'dft'}`}>
                        {b.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ fontSize: '13px', color: '#9ca3af' }}>
                      {new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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