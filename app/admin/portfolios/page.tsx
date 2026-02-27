import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import { deletePortfolio } from '@/lib/portfolio-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Portfolios | Admin | mTouch Labs',
  robots: 'noindex, nofollow',

  openGraph: {
    title: "All Portfolios | Admin | mTouch Labs",
    description: "All Portfolios | Admin | mTouch Labs",
    url: "https://www.mtouchlabs.com/admin/portfolios",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "All Portfolios | Admin | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Portfolios | Admin | mTouch Labs",
    description: "All Portfolios | Admin | mTouch Labs",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

interface Portfolio {
  id: number; title: string; slug: string; category: string;
  image: string; published: boolean; created_at: string;
}

export default async function AllPortfoliosPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const search = searchParams.search || '';
  const status = searchParams.status || 'all';
  const category = searchParams.category || 'all';

  let portfolios: Portfolio[] = [];
  try {
    portfolios = await sql`
      SELECT id, title, slug, category, image, published, created_at
      FROM portfolios ORDER BY created_at DESC
    ` as Portfolio[];
  } catch { /* ignore */ }

  const categories = [...new Set(portfolios.map(p => p.category).filter(Boolean))];

  const filtered = portfolios.filter(p => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.slug.toLowerCase().includes(search.toLowerCase())) return false;
    if (status === 'published' && !p.published) return false;
    if (status === 'draft' && p.published) return false;
    if (category !== 'all' && p.category !== category) return false;
    return true;
  });

  const hasFilters = search || status !== 'all' || category !== 'all';

  return (
    <div id="admin-root" style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter',sans-serif", background: '#f9fafb', color: '#111827', lineHeight: 1.5 }}>
      <aside className="sidebar" style={{ width: 230, minWidth: 230, background: '#1a1a2e', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 1060, overflow: 'auto', visibility: 'visible', opacity: 1 }}>
        <div style={{ padding: '20px 20px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/images/logo-white.png" alt="mTouch Labs" style={{ maxWidth: 150, height: 'auto' }} />
        </div>
        <nav className="s-links">
          <Link href="/admin/dashboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            Dashboard
          </Link>
          <Link href="/admin/blogs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            All Blogs
          </Link>
          <Link href="/admin/blogs/create">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Create Blog
          </Link>
          <Link href="/admin/portfolios" className="act">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
            All Portfolios
          </Link>
          <div className="s-div" />
          <a href="/" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            View Site
          </a>
        </nav>
      </aside>

      <div className="main" style={{ marginLeft: 230, width: 'calc(100% - 230px)', display: 'flex', flexDirection: 'column', minHeight: '100vh', visibility: 'visible', opacity: 1 }}>
        <div className="topbar" style={{ height: 60, background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: '0 28px', gap: 16, flexShrink: 0, position: 'sticky', top: 0, zIndex: 1050 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#9ca3af', fontSize: 14, flex: 1 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            Search portfolios, categories...
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20, color: '#6b7280' }}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            <span style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, background: '#6366f1', borderRadius: '50%', border: '2px solid #fff' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, color: '#6b7280' }}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>Admin</span>
              <span style={{ fontSize: 11, color: '#9ca3af' }}>mTouch Labs</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '32px 32px', flex: 1, overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.2 }}>All Portfolios</h1>
              <p style={{ fontSize: 14, color: '#9ca3af', marginTop: 6 }}>{filtered.length} projects</p>
            </div>
            <Link href="/admin/portfolios/create" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 24px', background: '#6366f1', color: '#fff', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>+ New Project</Link>
          </div>

          {/* Filters */}
          <form method="GET" action="/admin/portfolios" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: 12, marginBottom: 24, alignItems: 'center', background: '#f4f5f7', padding: '16px 20px', borderRadius: 12 }}>
            <div style={{ flex: '2 1 0%', position: 'relative', minWidth: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, color: '#9ca3af', pointerEvents: 'none' }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input type="text" name="search" placeholder="Search portfolios..." defaultValue={search} style={{ width: '100%', padding: '12px 16px 12px 44px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 15, fontFamily: "'Inter',sans-serif", background: '#fff', color: '#111827', outline: 'none', boxSizing: 'border-box', height: 46 }} />
            </div>
            <select name="status" defaultValue={status} style={{ padding: '12px 34px 12px 14px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 14, fontFamily: "'Inter',sans-serif", background: '#fff', color: '#374151', cursor: 'pointer', appearance: 'none' as const, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 01.708 0L8 8.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', minWidth: 120, flexShrink: 0, whiteSpace: 'nowrap' as const, boxSizing: 'border-box' as const, height: 46 }}>
              <option value="all">Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <select name="category" defaultValue={category} style={{ padding: '12px 34px 12px 14px', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 14, fontFamily: "'Inter',sans-serif", background: '#fff', color: '#374151', cursor: 'pointer', appearance: 'none' as const, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 01.708 0L8 8.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', minWidth: 180, maxWidth: 220, flexShrink: 0, whiteSpace: 'nowrap' as const, overflow: 'hidden' as const, textOverflow: 'ellipsis' as const, boxSizing: 'border-box' as const, height: 46 }}>
              <option value="all">Category</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="submit" style={{ padding: '0 20px', borderRadius: 10, border: 'none', background: '#6366f1', color: '#fff', fontSize: 14, fontWeight: 500, cursor: 'pointer', flexShrink: 0, height: 46, fontFamily: "'Inter',sans-serif" }}>Filter</button>
            {hasFilters && (
              <Link href="/admin/portfolios" style={{ padding: '0 16px', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', fontSize: 13, fontWeight: 500, textDecoration: 'none', flexShrink: 0, height: 46, display: 'flex', alignItems: 'center', fontFamily: "'Inter',sans-serif" }}>Reset</Link>
            )}
          </form>

          {/* Table */}
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden', display: 'block', visibility: 'visible', opacity: 1 }}>
            <table className="ab-table" style={{ width: '100%', borderCollapse: 'collapse', display: 'table', visibility: 'visible' }}>
              <thead>
                <tr>
                  <th style={{ width: 40 }}><input type="checkbox" className="ab-cb" /></th>
                  <th>Title</th>
                  <th>Slug</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th style={{ width: 60 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => (
                  <tr key={p.id}>
                    <td style={{ padding: '14px 16px' }}><input type="checkbox" className="ab-cb" /></td>
                    <td className="ab-td-title">{p.title}</td>
                    <td className="ab-td-slug">/{p.slug}</td>
                    <td className="ab-td-cat">{p.category}</td>
                    <td><span className={`ab-badge ${p.published ? 'ab-badge-pub' : 'ab-badge-dft'}`}>{p.published ? 'Published' : 'Draft'}</span></td>
                    <td className="ab-td-date">{new Date(p.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    <td style={{ position: 'relative' }}>
                      <details className="ab-menu">
                        <summary className="ab-dots">⋯</summary>
                        <div className="ab-dropdown">
                          <Link href={`/admin/portfolios/${p.id}/edit`} className="ab-dd-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            Edit
                          </Link>
                          <a href={`/portfolio/${p.slug}`} target="_blank" className="ab-dd-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                            Preview
                          </a>
                          <div className="ab-dd-hr" />
                          <form action={deletePortfolio}>
                            <input type="hidden" name="id" value={p.id} />
                            <button type="submit" className="ab-dd-item ab-dd-danger">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                              Delete
                            </button>
                          </form>
                        </div>
                      </details>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={7} className="ab-empty">No portfolios found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}