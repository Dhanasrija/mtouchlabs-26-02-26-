import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const results: string[] = [];

  // 1. Create admin_users table
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'viewer',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;
    results.push('admin_users table: created/exists');
  } catch (e) {
    results.push('admin_users table error: ' + String(e));
  }

  // 2. Seed Super Admin if no users exist
  try {
    const existing = await sql`SELECT COUNT(*) as count FROM admin_users`;
    const count = Number(existing[0].count);
    if (count === 0) {
      await sql`
        INSERT INTO admin_users (name, email, password, role) VALUES
        ('Super Admin', 'admin@mtouchlabs.com', 'mtouch@2025', 'super_admin')
      `;
      results.push('Seeded Super Admin: admin@mtouchlabs.com / mtouch@2025');
    } else {
      results.push(`${count} users already exist, no seed needed`);
    }
  } catch (e) {
    results.push('Seed error: ' + String(e));
  }

  return NextResponse.json({ success: true, results });
}