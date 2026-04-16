import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
  const stats = await sql`SELECT COUNT(*) as total, COUNT(CASE WHEN content IS NOT NULL AND LENGTH(content) > 0 THEN 1 END) as with_content FROM blogs`;
  const sample = await sql`SELECT slug, LENGTH(content) as len, created_at FROM blogs ORDER BY created_at DESC LIMIT 5`;
  return NextResponse.json({ stats: stats[0], sample });
}
