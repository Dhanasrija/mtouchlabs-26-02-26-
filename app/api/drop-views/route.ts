import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await sql`ALTER TABLE blogs DROP COLUMN IF EXISTS views`;
    return NextResponse.json({ success: true, message: 'Dropped views column from blogs table' });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}