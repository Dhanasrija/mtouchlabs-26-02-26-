import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

/* ═══════════════════════════════════════════════════════════════════════
   /api/migrate-portfolio-v5
   ─────────────────────────────────────────────────────────────────────
   Adds the nine TEXT columns the portfolio detail page has always READ
   but which no migration ever CREATED.

   Because `getProject` does `SELECT *`, the missing columns came back as
   undefined and every one of those sections silently fell through to its
   hard-coded placeholder copy — which is why every portfolio read the
   same in nine places ("Our team followed an agile development
   methodology…", "End-to-end encryption for all data in transit using
   TLS 1.3…"). Nothing was wrong with the content that was entered; there
   was nowhere to enter it.

   Every statement is IF NOT EXISTS, so running this twice is harmless.
   Run once:  curl -X POST http://localhost:3000/api/migrate-portfolio-v5
   ═══════════════════════════════════════════════════════════════════ */

const COLUMNS = [
  "industry_background",   // About the Industry / Client Background — paragraphs
  "objectives",            // Project Objectives — one per line
  "strategy_approach",     // Our Solution / approach — paragraphs
  "solution_architecture", // Solution Architecture — paragraphs
  "ui_ux_highlights",      // UI/UX Design — one per line
  "development_process",   // Development & Implementation — "Title: description" per line
  "security_performance",  // Security & Performance — one per line, or paragraphs
  "future_scope",          // Future Scope — one per line
  "conclusion",            // Conclusion — paragraphs
] as const;

export async function POST() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    return NextResponse.json(
      { ok: false, error: "DATABASE_URL is not set" },
      { status: 500 }
    );
  }

  const sql = neon(url);
  const added: string[] = [];
  const failed: { column: string; error: string }[] = [];

  for (const col of COLUMNS) {
    try {
      /* `sql.query(text)`, not the tagged-template form.
         The value neon() returns is typed as a template-literal tag: its
         only call signature takes a TemplateStringsArray, so passing a
         plain string fails the type-check ("Argument of type 'string' is
         not assignable to parameter of type 'TemplateStringsArray'").
         `.query()` is the driver's own escape hatch for SQL built at
         runtime, which is what this is -- a column name cannot be a bound
         parameter, so the DDL has to be assembled as text.
         `col` comes only from the frozen COLUMNS list above, never from a
         request, so there is nothing here to inject. */
      await sql.query(
        `ALTER TABLE portfolios ADD COLUMN IF NOT EXISTS ${col} TEXT`
      );
      added.push(col);
    } catch (err: any) {
      failed.push({ column: col, error: String(err?.message || err) });
    }
  }

  // Report the table's real shape back, so the result is verifiable rather
  // than just "ok: true".
  let columns: string[] = [];
  try {
    const rows = await sql.query(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'portfolios' ORDER BY ordinal_position`
    );
    columns = (rows as any[]).map((r) => r.column_name);
  } catch {
    /* non-fatal — the ALTERs above are what matter */
  }

  return NextResponse.json({
    ok: failed.length === 0,
    ensured: added,
    failed,
    portfolios_columns: columns,
  });
}

export async function GET() {
  return NextResponse.json({
    message:
      "POST to this endpoint to add the nine missing portfolio content columns.",
    columns: COLUMNS,
  });
}