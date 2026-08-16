import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const blogsToPublish = await sql`
      SELECT id, slug FROM blogs WHERE status = 'scheduled' AND publish_date <= NOW()
    `;

    if (blogsToPublish.length > 0) {
      const blogIds = blogsToPublish.map((b) => b.id);
      await sql`UPDATE blogs SET status = 'published', published = true, updated_at = NOW() WHERE id = ANY(${blogIds})`;
      revalidatePath('/blog');
      // Keep the public RSS feed in step with the listing the moment a
      // scheduled post goes live, so LinkedIn's RSS reader can pick it up
      // without waiting for the feed's own 5-minute revalidation window.
      revalidatePath('/blog/rss.xml');
      for (const blog of blogsToPublish) { revalidatePath(`/blog/${blog.slug}`); }
    }

    const csToPublish = await sql`
      SELECT id, slug FROM case_studies WHERE status = 'scheduled' AND publish_date <= NOW()
    `;

    if (csToPublish.length > 0) {
      const csIds = csToPublish.map((cs) => cs.id);
      await sql`UPDATE case_studies SET status = 'published', published = true, updated_at = NOW() WHERE id = ANY(${csIds})`;
      revalidatePath('/case-studies');
      for (const cs of csToPublish) { revalidatePath(`/case-studies/${cs.slug}`); }
    }

    return NextResponse.json({
      message: `Published ${blogsToPublish.length} blog(s) and ${csToPublish.length} case study(ies)`,
      blogs: blogsToPublish.length,
      caseStudies: csToPublish.length,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Cron publish error:', message);
    return NextResponse.json({ error: 'Failed to publish' }, { status: 500 });
  }
}
