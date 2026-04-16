import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS portfolios (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(500) NOT NULL,
        subtitle TEXT,
        category VARCHAR(100),
        image VARCHAR(500),
        about TEXT,
        tech_stack JSONB DEFAULT '[]',
        requirements TEXT,
        business_impact TEXT,
        features JSONB DEFAULT '[]',
        app_screens JSONB DEFAULT '[]',
        web_screens JSONB DEFAULT '[]',
        typography JSONB DEFAULT '{}',
        color_palette JSONB DEFAULT '[]',
        play_store_url VARCHAR(500),
        app_store_url VARCHAR(500),
        faq_schema JSONB DEFAULT '[]',
        tags VARCHAR(500),
        published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    return NextResponse.json({ success: true, message: 'portfolios table created successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}