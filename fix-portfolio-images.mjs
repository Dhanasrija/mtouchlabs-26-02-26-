/**
 * Portfolio images — report and repair
 * ═══════════════════════════════════════════════════════════════
 *   node fix-portfolio-images.mjs          # report only
 *   node fix-portfolio-images.mjs --apply  # write the mapping below
 *
 * These three portfolio pages render with no image:
 *   online-grocery-delivery-android-app-development
 *   hyper-local-delivery-mobile-app-development
 *   fractional-property-ownership-web-development
 *
 * The image path lives in the `portfolios` table, not in the code, so
 * this has to be fixed in the database — there is nothing to edit in a
 * .tsx file. It runs as a report first BECAUSE the correct image cannot
 * be inferred with certainty from a slug: `public/images/portfolio/`
 * holds several grocery and delivery projects, and picking the wrong one
 * silently mislabels a client's work.
 *
 * So: run it plain, read what it prints, correct MAPPING if any of my
 * guesses are wrong, then run it with --apply.
 * ═══════════════════════════════════════════════════════════════
 */
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  console.error('\n  DATABASE_URL is not set. Run this the same way you run the app.\n');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);
const APPLY = process.argv.includes('--apply');

/* My best guesses, from the filenames in public/images/portfolio.
   CHECK THESE before applying — especially the first two. */
const MAPPING = {
  /* BrickBerry is a fractional-property-ownership platform, so this one
     I am confident about. */
  'fractional-property-ownership-web-development': '/images/portfolio/BrickBerry.webp',
  /* Grocery: Pragathimart is a grocery mart build. Alternatives in the
     folder: Desicart.webp, yourDesiCart.webp, Favmall.webp. */
  'online-grocery-delivery-android-app-development': '/images/portfolio/Pragathimart.webp',
  /* Hyperlocal: GullyShop is the hyperlocal neighbourhood marketplace.
     Alternative: Meal-Village.webp. */
  'hyper-local-delivery-mobile-app-development': '/images/portfolio/GullyShop.webp',
};

const cols = await sql`
  SELECT column_name FROM information_schema.columns WHERE table_name = 'portfolios'`;
const names = cols.map((c) => c.column_name);
/* The column is not necessarily called `image`. */
const imageCol = ['image', 'image_url', 'thumbnail', 'featured_image', 'banner']
  .find((c) => names.includes(c));

console.log('\n  portfolios columns:', names.join(', '));
console.log('  image column detected:', imageCol ?? 'NONE FOUND — stop here and tell me the column list above');
if (!imageCol) process.exit(1);

console.log('\n  ── the three reported slugs ──');
for (const slug of Object.keys(MAPPING)) {
  const rows = await sql`SELECT slug FROM portfolios WHERE slug = ${slug}`;
  if (rows.length === 0) { console.log(`  ✗ ${slug}\n      NO ROW with this slug`); continue; }
  const cur = await sql`SELECT ${sql.unsafe(`"${imageCol}"`)} AS img FROM portfolios WHERE slug = ${slug}`;
  console.log(`  • ${slug}\n      current: ${cur[0].img || '(empty)'}\n      will set: ${MAPPING[slug]}`);
}

console.log('\n  ── every other row with no image ──');
const empties = await sql`
  SELECT slug FROM portfolios
   WHERE ${sql.unsafe(`"${imageCol}"`)} IS NULL OR ${sql.unsafe(`"${imageCol}"`)} = ''
   ORDER BY slug`;
console.log(empties.length ? empties.map((r) => '  · ' + r.slug).join('\n') : '  none');

if (!APPLY) {
  console.log('\n  Report only. Re-run with --apply once the mapping looks right.\n');
  process.exit(0);
}

for (const [slug, img] of Object.entries(MAPPING)) {
  await sql`UPDATE portfolios SET ${sql.unsafe(`"${imageCol}"`)} = ${img} WHERE slug = ${slug}`;
  console.log(`  ✓ set ${slug} -> ${img}`);
}
console.log('\n  Done. The portfolio pages revalidate on their own interval.\n');
