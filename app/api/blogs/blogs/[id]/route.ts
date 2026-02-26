import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET single blog by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = await sql`SELECT * FROM blogs WHERE id = ${parseInt(id)}`;
    
    if (blogs.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    return NextResponse.json(blogs[0]);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// PUT - Update blog by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { slug, title, description, content, image, author, category, meta_title, meta_description, published } = body;

    const result = await sql`
      UPDATE blogs SET
        slug = COALESCE(${slug}, slug),
        title = COALESCE(${title}, title),
        description = COALESCE(${description}, description),
        content = COALESCE(${content}, content),
        image = COALESCE(${image}, image),
        author = COALESCE(${author}, author),
        category = COALESCE(${category}, category),
        meta_title = COALESCE(${meta_title}, meta_title),
        meta_description = COALESCE(${meta_description}, meta_description),
        published = COALESCE(${published}, published)
      WHERE id = ${parseInt(id)}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog: result[0] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE blog by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await sql`DELETE FROM blogs WHERE id = ${parseInt(id)} RETURNING id, title`;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, deleted: result[0] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}