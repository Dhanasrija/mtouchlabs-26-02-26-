import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET all blogs (including unpublished) for admin
export async function GET() {
  try {
    const blogs = await sql`
      SELECT id, slug, title, description, content, image, author, category, 
             meta_title, meta_description, published, created_at
      FROM blogs
      ORDER BY created_at DESC
    `;
    return NextResponse.json(blogs);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// POST - Create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, description, content, image, author, category, meta_title, meta_description, published } = body;

    if (!slug || !title) {
      return NextResponse.json({ error: 'Slug and title are required' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO blogs (slug, title, description, content, image, author, category, meta_title, meta_description, published, created_at)
      VALUES (
        ${slug}, ${title}, ${description || ''}, ${content || ''}, ${image || ''}, 
        ${author || 'mTouch Labs'}, ${category || 'General'}, 
        ${meta_title || title}, ${meta_description || description || ''}, 
        ${published !== false}, NOW()
      )
      RETURNING *
    `;

    return NextResponse.json({ success: true, blog: result[0] }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      return NextResponse.json({ error: 'A blog with this slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}