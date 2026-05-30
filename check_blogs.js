const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
(async () => {
  const rows = await sql`
    SELECT id, slug, title, category,
           COALESCE(publish_date, created_at) AS pub_date,
           created_at, published, status
    FROM blogs
    ORDER BY COALESCE(publish_date, created_at) ASC
  `;
  console.log('TOTAL BLOGS:', rows.length);
  for (const r of rows) {
    const d = new Date(r.pub_date);
    console.log(d.toISOString().slice(0,10), '|', r.status, '|', r.category, '|', r.slug);
  }
})();
