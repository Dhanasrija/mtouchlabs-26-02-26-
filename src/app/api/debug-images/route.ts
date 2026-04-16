import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await sql`
    SELECT 
      id, slug, title,
      image,
      app_screens::text as app_screens,
      web_screens::text as web_screens
    FROM portfolios
    WHERE published = true
    ORDER BY id
  `;
  return NextResponse.json(rows);
}
