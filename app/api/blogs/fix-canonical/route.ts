import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

const SITE_URL = 'https://www.mtouchlabs.com';

// POST /api/blogs/fix-canonical — Update all blog canonical URLs to /blog/slug format
export async function POST() {
  try {
    // Get all blogs
    const blogs = await sql`SELECT id, slug, canonical_url FROM blogs`;

    let updated = 0;
    for (const blog of blogs) {
      const correctCanonical = `${SITE_URL}/blog/${blog.slug}`;

      // Only update if canonical is missing or doesn't match /blog/slug format
      if (!blog.canonical_url || !blog.canonical_url.includes('/blog/')) {
        await sql`
          UPDATE blogs
          SET canonical_url = ${correctCanonical}
          WHERE id = ${blog.id}
        `;
        updated++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Updated ${updated} blog canonical URLs out of ${blogs.length} total`,
      total: blogs.length,
      updated,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
