import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    const blogs = await sql`SELECT * FROM blogs WHERE id = ${id}`;
    if (!blogs.length) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    const blog = blogs[0];
    const newSlug = `${blog.slug}-copy-${Date.now()}`;
    const newTitle = `${blog.title} (Copy)`;

    await sql`
      INSERT INTO blogs (title, slug, category, content, published, author, views)
      VALUES (${newTitle}, ${newSlug}, ${blog.category}, ${blog.content}, false, ${blog.author || 'Admin'}, 0)
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}