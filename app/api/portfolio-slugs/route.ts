import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// Lightweight endpoint that returns the set of published portfolio slugs.
// Used by the client-side NavActiveSync component to correctly highlight the
// Portfolio tab on root-level portfolio URLs (e.g. /otloffers-mobile-app-development)
// which would otherwise be mis-classified as Services by pattern matching.
//
// Cached on the CDN for 5 minutes — slug list changes are fine to propagate slowly.

export const runtime = 'nodejs';
export const revalidate = 300;

export async function GET() {
  try {
    const url = process.env.DATABASE_URL;
    if (!url) return NextResponse.json({ slugs: [] }, { status: 200 });
    const sql = neon(url);
    const rows = (await sql`SELECT slug FROM portfolios WHERE published = true`) as { slug: string }[];
    const slugs = rows.map(r => r.slug).filter(Boolean);
    return NextResponse.json(
      { slugs },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (err) {
    console.error('[api/portfolio-slugs] error:', err);
    return NextResponse.json({ slugs: [] }, { status: 200 });
  }
}
