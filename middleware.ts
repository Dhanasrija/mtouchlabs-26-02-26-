import { NextRequest, NextResponse } from 'next/server';

// Force Node.js runtime instead of Edge — avoids __dirname errors on Vercel
export const runtime = 'nodejs';

export async function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // 1. Explicitly skip API routes, Next.js internals, and static files
    if (
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next') || 
      pathname.includes('.') ||
      pathname === '/favicon.ico'
    ) {
      return NextResponse.next();
    }

    const host = request.headers.get('host') || '';
    const hostname = host.split(':')[0].toLowerCase();

    // 2. FORCE NON-WWW → WWW
    if (hostname === 'mtouchlabs.com') {
      const url = request.nextUrl.clone();
      url.hostname = 'www.mtouchlabs.com';
      return NextResponse.redirect(url, 301);
    }

    // 3. FORCE LOWERCASE URLs (skip admin)
    if (!pathname.startsWith('/admin') && pathname !== pathname.toLowerCase()) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.toLowerCase();
      return NextResponse.redirect(url, 301);
    }

    // 4. ADMIN AUTH
    if (pathname.startsWith('/admin') && pathname !== '/admin') {
      const userId = request.cookies.get('admin_user_id')?.value;
      const userRole = request.cookies.get('admin_user_role')?.value;

      // Check for logged-in session
      if (!userId || !userRole) {
        // Safe check for legacy/password auth
        const oldAuth = request.cookies.get('admin_auth')?.value;
        const adminPass = process.env.ADMIN_PASSWORD;
        if (adminPass && oldAuth === adminPass) {
          return NextResponse.next();
        }
        
        const loginUrl = new URL('/admin', request.url);
        return NextResponse.redirect(loginUrl);
      }

      // /admin/users → only super_admin
      if (pathname.startsWith('/admin/users') && userRole !== 'super_admin') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }

      // Role check for specific write operations
      const writeRoutes = ['/admin/blogs/create', '/admin/portfolios/create'];
      const isWriteRoute = writeRoutes.some(r => pathname.startsWith(r)) || pathname.includes('/edit');
      
      if (isWriteRoute && userRole === 'viewer') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }

    // 5. BLOG REDIRECT: /slug → /blog/slug for known blog slugs
    // Only for paths that could be blog slugs (single segment, no known static routes)
    if (!pathname.startsWith('/blog') &&
        !pathname.startsWith('/admin') &&
        !pathname.startsWith('/portfolio') &&
        !pathname.startsWith('/contact') &&
        !pathname.startsWith('/services') &&
        !pathname.startsWith('/careers') &&
        !pathname.startsWith('/case-studies') &&
        !pathname.startsWith('/thank-you') &&
        !pathname.startsWith('/privacy') &&
        !pathname.startsWith('/terms') &&
        !pathname.startsWith('/refund') &&
        !pathname.startsWith('/hire-') &&
        !pathname.startsWith('/on-demand') &&
        !pathname.startsWith('/sitemap') &&
        !pathname.startsWith('/robots') &&
        pathname.split('/').filter(Boolean).length === 1) {
      // Check if this slug exists as a blog via a lightweight fetch
      try {
        const { neon } = await import('@neondatabase/serverless');
        const sql = neon(process.env.DATABASE_URL!);
        const blogs = await sql`SELECT id FROM blogs WHERE slug = ${pathname.slice(1)} AND (published = true OR status = 'published') LIMIT 1`;
        if (blogs.length > 0) {
          const url = request.nextUrl.clone();
          url.pathname = `/blog${pathname}`;
          return NextResponse.redirect(url, 301);
        }
      } catch (e) {
        // DB check failed — fall through to normal routing
      }
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);
    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (err) {
    console.error('Middleware Critical Error:', err);
    return NextResponse.next(); // Fail safe: continue to route
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};