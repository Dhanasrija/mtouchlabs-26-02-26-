const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
(async () => {
  const cols = await sql`SELECT column_name, data_type FROM information_schema.columns WHERE table_name='blogs' ORDER BY ordinal_position`;
  console.log('=== COLUMNS ===');
  for (const c of cols) console.log(c.column_name, '|', c.data_type);
  const rows = await sql`SELECT * FROM blogs WHERE slug='genai-rag-ai-agents-ai-powered-solutions-mtouch-labs'`;
  console.log('\n=== MATCHING ROWS:', rows.length, '===');
  for (const r of rows) {
    for (const k of Object.keys(r)) {
      let v = r[k];
      if (typeof v === 'string' && v.length > 160) v = v.slice(0,160) + '...[' + v.length + ' chars]';
      console.log(k, '=>', JSON.stringify(v));
    }
  }
})().catch(e=>{console.error(e);process.exit(1)});
