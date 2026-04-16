import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const results: string[] = [];

  async function addCol(name: string, query: Promise<any>) {
    try { await query; results.push(`${name}: ADDED ✅`); }
    catch (e: any) {
      const msg = String(e);
      if (msg.includes('already exists') || msg.includes('duplicate')) results.push(`${name}: already exists`);
      else results.push(`${name}: ERROR - ${msg}`);
    }
  }

  await addCol('description', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS description TEXT`);
  await addCol('role', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS role VARCHAR(200)`);
  await addCol('duration', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS duration VARCHAR(100)`);
  await addCol('team_size', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS team_size VARCHAR(100)`);
  await addCol('challenges_solutions', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS challenges_solutions TEXT`);
  await addCol('key_features', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS key_features TEXT`);
  await addCol('live_url', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS live_url VARCHAR(500)`);
  await addCol('github_url', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS github_url VARCHAR(500)`);
  await addCol('gallery_images', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS gallery_images TEXT`);
  await addCol('meta_title', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS meta_title VARCHAR(200)`);
  await addCol('meta_description', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS meta_description TEXT`);
  await addCol('canonical_url', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS canonical_url VARCHAR(500)`);
  await addCol('og_title', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS og_title VARCHAR(200)`);
  await addCol('og_description', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS og_description TEXT`);
  await addCol('og_image', sql`ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS og_image VARCHAR(500)`);

  // Verify
  const check = await sql`SELECT column_name FROM information_schema.columns WHERE table_name = 'portfolios' ORDER BY ordinal_position`;
  const colNames = check.map((c: any) => c.column_name);

  return NextResponse.json({ success: true, results, all_columns: colNames });
}