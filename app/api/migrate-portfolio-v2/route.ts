import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const results: string[] = [];

  const cols: [string, string][] = [
    ['role', 'TEXT'],
    ['duration', 'VARCHAR(100)'],
    ['team_size', 'VARCHAR(50)'],
    ['challenges_solutions', 'TEXT'],
    ['key_features', 'TEXT'],
    ['live_url', 'VARCHAR(500)'],
    ['github_url', 'VARCHAR(500)'],
    ['gallery_images', "JSONB DEFAULT '[]'"],
    ['meta_title', 'VARCHAR(200)'],
    ['meta_description', 'TEXT'],
    ['canonical_url', 'VARCHAR(500)'],
    ['og_title', 'VARCHAR(200)'],
    ['og_description', 'TEXT'],
    ['og_image', 'VARCHAR(500)'],
    ['description', 'TEXT'],
  ];

  for (const [col, type] of cols) {
    try {
      await sql.unsafe(`SELECT ${col} FROM portfolios LIMIT 0`);
      results.push(`${col}: already exists`);
    } catch {
      try {
        await sql.unsafe(`ALTER TABLE portfolios ADD COLUMN ${col} ${type}`);
        results.push(`${col}: ADDED`);
      } catch (e) {
        results.push(`${col}: error - ${e}`);
      }
    }
  }

  return NextResponse.json({ success: true, results });
}