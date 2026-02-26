import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip the login page itself
  if (pathname === '/admin') {
    return NextResponse.next();
  }

  // All /admin/* routes need auth
  if (pathname.startsWith('/admin')) {
    const userId = request.cookies.get('admin_user_id')?.value;
    const userRole = request.cookies.get('admin_user_role')?.value;

    // Not logged in → redirect to login
    if (!userId || !userRole) {
      // Backward compat: check old cookie
      const oldAuth = request.cookies.get('admin_auth')?.value;
      const adminPassword = process.env.ADMIN_PASSWORD;
      if (oldAuth && oldAuth === adminPassword) {
        return NextResponse.next();
      }
      const loginUrl = new URL('/admin', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Role-based route protection
    // /admin/users → only super_admin
    if (pathname.startsWith('/admin/users') && userRole !== 'super_admin') {
      const dashUrl = new URL('/admin/dashboard', request.url);
      return NextResponse.redirect(dashUrl);
    }

    // Create/edit/delete actions → super_admin, admin, editor
    const writeRoutes = ['/admin/blogs/create', '/admin/portfolios/create'];
    const isWriteRoute = writeRoutes.some(r => pathname.startsWith(r)) ||
      pathname.includes('/edit');
    if (isWriteRoute && userRole === 'viewer') {
      const dashUrl = new URL('/admin/dashboard', request.url);
      return NextResponse.redirect(dashUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};