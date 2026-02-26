import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/blogs/[slug] — get a single blog by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const result = await sql`
      SELECT * FROM blogs WHERE slug = ${slug} AND published = true
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog: result[0] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}