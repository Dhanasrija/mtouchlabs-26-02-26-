import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getCurrentUser, addUser, updateUserRole, deleteUser, logoutUser } from '@/lib/user-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Manage Users | Admin | mTouch Labs',
  robots: 'noindex, nofollow',

  openGraph: {
    title: "Manage Users | Admin | mTouch Labs",
    description: "Manage Users | Admin | mTouch Labs",
    url: "https://www.mtouchlabs.com/admin/users",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Manage Users | Admin | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manage Users | Admin | mTouch Labs",
    description: "Manage Users | Admin | mTouch Labs",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

const ROLE_LABELS: Record<string, string> = {
  super_admin: 'Super Admin',
  admin: 'Admin',
  editor: 'Editor',
  viewer: 'Viewer',
};

const ROLE_COLORS: Record<string, string> = {
  super_admin: '#ef4444',
  admin: '#6366f1',
  editor: '#2563eb',
  viewer: '#6b7280',
};

const ROLE_DESCRIPTIONS: Record<string, string> = {
  super_admin: 'Full access + manage users & roles',
  admin: 'Add, edit & delete projects',
  editor: 'Add & edit projects',
  viewer: 'View only',
};

export default async function ManageUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error || '';

  const currentUser = await getCurrentUser();
  if (!currentUser) redirect('/admin');
  if (currentUser.role !== 'super_admin') redirect('/admin/dashboard');

  let users: any[] = [];
  try {
    users = await sql`SELECT id, name, email, role, created_at FROM admin_users ORDER BY created_at ASC`;
  } catch { /* table may not exist */ }

  return (
    <div id="admin-root">
      <aside className="sidebar">
        <div className="s-brand"><img src="/images/logo-white.png" alt="mTouch Labs" className="s-logo-img" /></div>
        <nav className="s-links">
          <Link href="/admin/dashboard"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Dashboard</Link>
          <Link href="/admin/blogs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>All Blogs</Link>
          <Link href="/admin/blogs/create"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Create Blog</Link>
          <Link href="/admin/portfolios"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>All Portfolios</Link>
          <div className="s-div"/>
          <a href="/" target="_blank"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>View Site</a>
        </nav>
        {/* Bottom user info */}
        <div className="s-bottom">
          <div className="s-user-info">
            <div className="s-user-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div className="s-user-details">
              <span className="s-user-name">{currentUser.name}</span>
              <span className="s-user-role" style={{color: ROLE_COLORS[currentUser.role]}}>{ROLE_LABELS[currentUser.role]}</span>
            </div>
          </div>
          <Link href="/admin/users" className="s-bottom-link s-bottom-link--active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>Manage Users</Link>
          <form action={logoutUser}><button type="submit" className="s-bottom-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Logout</button></form>
        </div>
      </aside>

      <div className="main">
        <div className="topbar">
          <div className="t-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Manage Users &amp; Roles</div>
          <div className="t-spacer"/>
          <div className="t-user"><div className="t-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div className="t-info"><span className="t-name">{currentUser.name}</span><span className="t-role">{ROLE_LABELS[currentUser.role]}</span></div></div>
        </div>

        <div className="body">
          <div style={{maxWidth:800,margin:'0 auto'}}>
            <h1 style={{fontSize:28,fontWeight:700,color:'#111827',marginBottom:8}}>Manage Users &amp; Roles</h1>

            {/* Role Legend */}
            <div style={{display:'flex',flexWrap:'wrap',gap:16,marginBottom:32,fontSize:13,color:'#6b7280'}}>
              {Object.entries(ROLE_LABELS).map(([key, label]) => (
                <div key={key} style={{display:'flex',alignItems:'center',gap:8}}>
                  <span style={{padding:'3px 10px',borderRadius:12,fontSize:11,fontWeight:700,color:'#fff',background:ROLE_COLORS[key]}}>{label}</span>
                  <span>{ROLE_DESCRIPTIONS[key]}</span>
                </div>
              ))}
            </div>

            {error && (
              <div style={{background:'#fef2f2',border:'1px solid #fecaca',borderRadius:10,padding:'12px 16px',marginBottom:20,fontSize:13,color:'#dc2626'}}>
                {decodeURIComponent(error)}
              </div>
            )}

            {/* Users List */}
            <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:14,overflow:'hidden',marginBottom:32}}>
              {users.map(u => (
                <div key={u.id} style={{display:'flex',alignItems:'center',gap:16,padding:'16px 24px',borderBottom:'1px solid #f3f4f6'}}>
                  <div style={{width:40,height:40,borderRadius:'50%',background:'#f3f4f6',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" width="20" height="20"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:15,fontWeight:600,color:'#111827'}}>
                      {u.name}
                      {u.id === currentUser.id && <span style={{fontSize:12,fontWeight:400,color:'#9ca3af',marginLeft:6}}>(you)</span>}
                    </div>
                    <div style={{fontSize:13,color:'#9ca3af'}}>{u.email}</div>
                  </div>

                  {/* Role changer */}
                  {u.id === currentUser.id ? (
                    <span style={{padding:'6px 16px',borderRadius:8,fontSize:13,fontWeight:600,color:'#fff',background:ROLE_COLORS[u.role]}}>{ROLE_LABELS[u.role]}</span>
                  ) : (
                    <form action={updateUserRole} style={{display:'flex',alignItems:'center',gap:8}}>
                      <input type="hidden" name="user_id" value={u.id} />
                      <select name="role" defaultValue={u.role} style={{padding:'8px 32px 8px 12px',border:'1px solid #e5e7eb',borderRadius:8,fontSize:13,fontFamily:"'Inter',sans-serif",background:'#fff',cursor:'pointer',appearance:'none' as const,backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 01.708 0L8 8.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z'/%3E%3C/svg%3E\")",backgroundRepeat:'no-repeat',backgroundPosition:'right 8px center'}}>
                        <option value="super_admin">Super Admin</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                      </select>
                      <button type="submit" style={{padding:'6px 12px',background:'#6366f1',color:'#fff',border:'none',borderRadius:6,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:"'Inter',sans-serif"}}>Save</button>
                    </form>
                  )}

                  {/* Delete */}
                  {u.id !== currentUser.id && (
                    <form action={deleteUser}>
                      <input type="hidden" name="user_id" value={u.id} />
                      <button type="submit" style={{padding:6,background:'none',border:'none',cursor:'pointer',color:'#ef4444',display:'flex',alignItems:'center'}}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                      </button>
                    </form>
                  )}
                </div>
              ))}
            </div>

            {/* Add New User Form */}
            <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:14,padding:28}}>
              <h3 style={{fontSize:18,fontWeight:700,color:'#111827',marginBottom:20,display:'flex',alignItems:'center',gap:8}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                Add New User
              </h3>
              <form action={addUser}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
                  <div>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:'#374151',marginBottom:6}}>Name</label>
                    <input type="text" name="name" required placeholder="John Doe" style={{width:'100%',padding:'10px 14px',border:'1px solid #e5e7eb',borderRadius:8,fontSize:14,fontFamily:"'Inter',sans-serif",boxSizing:'border-box'}} />
                  </div>
                  <div>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:'#374151',marginBottom:6}}>Email</label>
                    <input type="email" name="email" required placeholder="john@example.com" style={{width:'100%',padding:'10px 14px',border:'1px solid #e5e7eb',borderRadius:8,fontSize:14,fontFamily:"'Inter',sans-serif",boxSizing:'border-box'}} />
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20}}>
                  <div>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:'#374151',marginBottom:6}}>Password</label>
                    <input type="text" name="password" required placeholder="Set a password" style={{width:'100%',padding:'10px 14px',border:'1px solid #e5e7eb',borderRadius:8,fontSize:14,fontFamily:"'Inter',sans-serif",boxSizing:'border-box'}} />
                  </div>
                  <div>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:'#374151',marginBottom:6}}>Role</label>
                    <select name="role" defaultValue="viewer" style={{width:'100%',padding:'10px 14px',border:'1px solid #e5e7eb',borderRadius:8,fontSize:14,fontFamily:"'Inter',sans-serif",background:'#fff',cursor:'pointer',boxSizing:'border-box'}}>
                      <option value="super_admin">Super Admin</option>
                      <option value="admin">Admin</option>
                      <option value="editor">Editor</option>
                      <option value="viewer">Viewer</option>
                    </select>
                  </div>
                </div>
                <div style={{display:'flex',gap:10}}>
                  <button type="submit" style={{padding:'10px 24px',background:'#6366f1',color:'#fff',border:'none',borderRadius:8,fontSize:14,fontWeight:600,cursor:'pointer',fontFamily:"'Inter',sans-serif"}}>Add User</button>
                  <Link href="/admin/dashboard" style={{padding:'10px 24px',background:'#fff',color:'#6b7280',border:'1px solid #e5e7eb',borderRadius:8,fontSize:14,fontWeight:500,textDecoration:'none',fontFamily:"'Inter',sans-serif"}}>Cancel</Link>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}