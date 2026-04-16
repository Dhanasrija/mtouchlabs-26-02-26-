import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const results: string[] = [];

  const columns = [
    { name: 'description', type: 'TEXT' },
    { name: 'role', type: 'VARCHAR(200)' },
    { name: 'duration', type: 'VARCHAR(100)' },
    { name: 'team_size', type: 'VARCHAR(100)' },
    { name: 'challenges_solutions', type: 'TEXT' },
    { name: 'key_features', type: 'TEXT' },
    { name: 'live_url', type: 'VARCHAR(500)' },
    { name: 'github_url', type: 'VARCHAR(500)' },
    { name: 'gallery_images', type: 'JSONB DEFAULT \'[]\'' },
    { name: 'meta_title', type: 'VARCHAR(200)' },
    { name: 'meta_description', type: 'TEXT' },
    { name: 'canonical_url', type: 'VARCHAR(500)' },
    { name: 'og_title', type: 'VARCHAR(200)' },
    { name: 'og_description', type: 'TEXT' },
    { name: 'og_image', type: 'VARCHAR(500)' },
  ];

  for (const col of columns) {
    try {
      await sql.unsafe(`ALTER TABLE portfolios ADD COLUMN ${col.name} ${col.type}`);
      results.push(`${col.name}: ADDED ✅`);
    } catch (e: any) {
      const msg = String(e);
      if (msg.includes('already exists') || msg.includes('duplicate column')) {
        results.push(`${col.name}: already exists`);
      } else {
        results.push(`${col.name}: ERROR - ${msg}`);
      }
    }
  }

  return NextResponse.json({ success: true, results });
}