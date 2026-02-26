import { sql } from '@/lib/db';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function getSlugType(slug: string): Promise<'blog' | 'portfolio' | null> {
  const blogs = await sql`SELECT id FROM blogs WHERE slug = ${slug} AND published = true`;
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

  // Wrap resolved params back into a Promise for child pages
  const childParams = Promise.resolve(resolvedParams);

  if (type === 'blog') {
    const { generateMetadata: blogMeta } = await import('../blog/[slug]/page');
    return blogMeta({ params: childParams });
  }
  if (type === 'portfolio') {
    const { generateMetadata: portfolioMeta } = await import('../portfolio/[slug]/page');
    return portfolioMeta({ params: childParams });
  }

  return { title: 'Page Not Found | mTouch Labs' };
}

export default async function CatchAllSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const type = await getSlugType(resolvedParams.slug);

  // Wrap resolved params back into a Promise for child pages
  const childParams = Promise.resolve(resolvedParams);

  if (type === 'blog') {
    const BlogPage = (await import('../blog/[slug]/page')).default;
    return <BlogPage params={childParams} />;
  }

  if (type === 'portfolio') {
    const PortfolioPage = (await import('../portfolio/[slug]/page')).default;
    return <PortfolioPage params={childParams} />;
  }

  notFound();
}