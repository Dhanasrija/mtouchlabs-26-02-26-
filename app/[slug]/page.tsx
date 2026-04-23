// import { sql } from '@/lib/db';
// import { Metadata } from 'next';
// import { notFound, redirect } from 'next/navigation';


// export const dynamic = 'force-dynamic';

// async function getSlugType(slug: string): Promise<'blog' | 'portfolio' | null> {
//   const blogs = await sql`SELECT id FROM blogs WHERE slug = ${slug} AND (published = true OR status = 'published')`;
//   if (blogs.length > 0) return 'blog';
//   const portfolios = await sql`SELECT id FROM portfolios WHERE slug = ${slug} AND published = true`;
//   if (portfolios.length > 0) return 'portfolio';
//   return null;
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const resolvedParams = await params;
//   const type = await getSlugType(resolvedParams.slug);

//   // Blog will redirect — skip metadata
//   if (type === 'blog') return {};

//   if (type === 'portfolio') {
//     const childParams = Promise.resolve(resolvedParams);
//     const { generateMetadata: portfolioMeta } = await import('../portfolio/[slug]/page');
//     return portfolioMeta({ params: childParams });
//   }

//   return { title: 'Page Not Found' };
// }

// export default async function CatchAllSlugPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const resolvedParams = await params;
//   const type = await getSlugType(resolvedParams.slug);

//   // 301 redirect: /slug → /blog/slug
//   if (type === 'blog') {
//     redirect(`/blog/${resolvedParams.slug}`);
//   }

//   if (type === 'portfolio') {
//     const childParams = Promise.resolve(resolvedParams);
//     const PortfolioPage = (await import('../portfolio/[slug]/page')).default;
//     return <PortfolioPage params={childParams} />;
//   }

//   notFound();
// }


import { neon } from '@neondatabase/serverless';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return neon(url);
}

async function getSlugType(slug: string): Promise<'blog' | 'portfolio' | null> {
  try {
    const sql = getDb();
    const blogs = await sql`
      SELECT id FROM blogs
      WHERE slug = ${slug} AND (published = true OR status = 'published')
      LIMIT 1
    `;
    if (blogs.length > 0) return 'blog';

    const portfolios = await sql`
      SELECT id FROM portfolios
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `;
    if (portfolios.length > 0) return 'portfolio';

    return null;
  } catch (err) {
    console.error('[slug] getSlugType error for slug:', slug, err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const type = await getSlugType(resolvedParams.slug);

    // Blog will redirect — skip metadata
    if (type === 'blog') return {};

    if (type === 'portfolio') {
      const childParams = Promise.resolve(resolvedParams);
      const { generateMetadata: portfolioMeta } = await import('../portfolio/[slug]/page');
      return portfolioMeta({ params: childParams });
    }

    return { title: 'Page Not Found' };
  } catch (err) {
    console.error('[slug] generateMetadata error:', err);
    return { title: 'mTouch Labs' };
  }
}

export default async function CatchAllSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const resolvedParams = await params;
    const type = await getSlugType(resolvedParams.slug);

    // 301 redirect: /slug → /blog/slug
    if (type === 'blog') {
      redirect(`/blog/${resolvedParams.slug}`);
    }

    if (type === 'portfolio') {
      const childParams = Promise.resolve(resolvedParams);
      const PortfolioPage = (await import('../portfolio/[slug]/page')).default;
      return <PortfolioPage params={childParams} />;
    }

    notFound();
  } catch (err: any) {
    // redirect() throws internally — let Next.js handle it
    if (err?.digest?.startsWith('NEXT_REDIRECT')) throw err;
    // notFound() also throws — let Next.js handle it
    if (err?.digest?.startsWith('NEXT_NOT_FOUND')) throw err;
    console.error('[slug] page error:', err);
    notFound();
  }
}