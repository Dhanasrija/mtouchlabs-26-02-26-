import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await sql`SELECT app_screens, web_screens, tech_stack, features, color_palette, typography FROM portfolios WHERE slug = 'otloffers-mobile-app-development'`;
  const row = rows[0];
  
  function parseJSON(val: any, fb: any = []) { if (!val) return fb; if (Array.isArray(val)) return val; if (typeof val === 'object') return val; try { return JSON.parse(val) || fb; } catch { return fb; } }
  
  return NextResponse.json({
    raw_types: {
      app_screens: typeof row.app_screens,
      web_screens: typeof row.web_screens,
      tech_stack: typeof row.tech_stack,
      features: typeof row.features,
    },
    raw_values: {
      app_screens: row.app_screens,
      web_screens: row.web_screens,
      tech_stack: row.tech_stack,
    },
    parsed: {
      app_screens: parseJSON(row.app_screens),
      web_screens: parseJSON(row.web_screens),
      tech_stack: parseJSON(row.tech_stack),
    },
    filtered: {
      app_screens: parseJSON(row.app_screens).filter((s: string) => s),
      web_screens: parseJSON(row.web_screens).filter((s: string) => s),
    }
  });
}
