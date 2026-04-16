import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const blogs = await sql`
      SELECT id, title, slug, category, published,
             COALESCE(author, 'Admin') as author,
             created_at,
             COALESCE(updated_at, created_at) as updated_at
      FROM blogs
      ORDER BY created_at DESC
    `;
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ blogs: [], error: String(error) });
  }
}