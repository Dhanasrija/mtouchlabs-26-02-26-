import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const industry = searchParams.get('industry');

    let caseStudies;
    if (industry) {
      caseStudies = await sql`
        SELECT id, slug, title, industry, platform, icon, color, image,
               overview, challenge, solution, result_points, technologies,
               publish_date, created_at
        FROM case_studies
        WHERE (published = true OR status = 'published') AND industry = ${industry}
        ORDER BY COALESCE(publish_date, created_at) DESC
      `;
    } else {
      caseStudies = await sql`
        SELECT id, slug, title, industry, platform, icon, color, image,
               overview, challenge, solution, result_points, technologies,
               publish_date, created_at
        FROM case_studies
        WHERE (published = true OR status = 'published')
        ORDER BY COALESCE(publish_date, created_at) DESC
      `;
    }

    return NextResponse.json({ caseStudies });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title } = body;

    if (!slug || !title) {
      return NextResponse.json({ success: false, error: 'slug and title are required' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO case_studies (slug, title, status, published, created_at)
      VALUES (${slug}, ${title}, 'draft', false, NOW())
      RETURNING id, slug, title, status, created_at
    `;

    return NextResponse.json({ success: true, caseStudy: result[0] }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique constraint')) {
      return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
