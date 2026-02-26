import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(500) NOT NULL,
        description TEXT,
        content TEXT,
        image VARCHAR(500),
        author VARCHAR(255) DEFAULT 'mTouch Labs',
        category VARCHAR(255),
        tags TEXT[],
        meta_title VARCHAR(500),
        meta_description TEXT,
        og_image VARCHAR(500),
        published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Create index on slug for fast lookups
    await sql`
      CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug)
    `;

    // Create index on published + created_at for listing
    await sql`
      CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published, created_at DESC)
    `;

    return NextResponse.json({ 
      success: true, 
      message: 'Blogs table created successfully' 
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}