// scripts/fix-blog-categories.mjs
// Corrects the category labels on two blogs so they sit under the proper
// categories ("Web Development" / "Mobile App Development") instead of the
// short "Web" / "Mobile" labels.
//
// Run:  node scripts/fix-blog-categories.mjs

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env.local");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

// slug → desired category (must match the existing filter labels exactly so
// the blog filter bar groups them correctly).
const FIXES = [
  { slug: "headless-cms-vs-traditional-cms", category: "Web Development" },
  { slug: "mobile-app-security-best-practices", category: "Mobile App" },
];

async function main() {
  for (const { slug, category } of FIXES) {
    const rows = await sql`
      UPDATE blogs SET category = ${category}, updated_at = updated_at
      WHERE slug = ${slug}
      RETURNING id, slug, category
    `;
    if (rows.length === 0) {
      console.warn(`⚠ No blog found with slug "${slug}" — skipped.`);
    } else {
      console.log(`✓ ${rows[0].slug} → category set to "${rows[0].category}"`);
    }
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error("✗ Failed:", err.message);
  process.exit(1);
});
