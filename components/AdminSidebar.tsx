import Link from 'next/link';
import { cookies } from 'next/headers';
import { logoutUser } from '@/lib/user-actions';

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

interface AdminSidebarProps {
  active?: 'dashboard' | 'blogs' | 'create-blog' | 'portfolios' | 'users';
}

export default async function AdminSidebar({ active }: AdminSidebarProps) {
  const cookieStore = await cookies();
  const userName = cookieStore.get('admin_user_name')?.value || 'Admin';
  const userRole = cookieStore.get('admin_user_role')?.value || 'admin';
  const isSuperAdmin = userRole === 'super_admin';

  return (
    <aside className="sidebar">
      <div className="s-brand">
        <img src="/images/logo-white.png" alt="mTouch Labs" className="s-logo-img" />
      </div>
      <nav className="s-links">
        <Link href="/admin/dashboard" className={active === 'dashboard' ? 'act' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          Dashboard
        </Link>
        <Link href="/admin/blogs" className={active === 'blogs' ? 'act' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          All Blogs
        </Link>
        <Link href="/admin/blogs/create" className={active === 'create-blog' ? 'act' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Create Blog
        </Link>
        <Link href="/admin/portfolios" className={active === 'portfolios' ? 'act' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
          All Portfolios
        </Link>
        <div className="s-div"/>
        <a href="/" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          View Site
        </a>
      </nav>

      {/* Bottom section: User info + Manage Users + Logout */}
      <div className="s-bottom">
        <div className="s-user-info">
          <div className="s-user-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div className="s-user-details">
            <span className="s-user-name">{userName}</span>
            <span className="s-user-role" style={{ color: ROLE_COLORS[userRole] || '#6b7280' }}>
              {ROLE_LABELS[userRole] || userRole}
            </span>
          </div>
        </div>
        {isSuperAdmin && (
          <Link href="/admin/users" className={`s-bottom-link ${active === 'users' ? 's-bottom-link--active' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            Manage Users
          </Link>
        )}
        <form action={logoutUser}>
          <button type="submit" className="s-bottom-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}