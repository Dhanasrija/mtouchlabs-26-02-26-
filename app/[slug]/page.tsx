import { sql } from '@/lib/db';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';


export const dynamic = 'force-dynamic';

async function getSlugType(slug: string): Promise<'blog' | 'portfolio' | null> {
  const blogs = await sql`SELECT id FROM blogs WHERE slug = ${slug} AND (published = true OR status = 'published')`;
  if (blogs.length > 0) return 'blog';
  const portfolios = await sql`SELECT id FROM portfolios WHERE slug = ${slug} AND published = true`;
  if (portfolios.length > 0) return 'portfolio';
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
}

export default async function CatchAllSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
}
