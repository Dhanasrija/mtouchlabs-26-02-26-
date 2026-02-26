'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

async function handleImageUpload(formData: FormData): Promise<string> {
  // 1. Check file upload (featured_image input)
  const file = formData.get('featured_image') as File | null;
  if (file && file.size > 0 && file.name && file.name !== 'undefined') {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });
    const ext = path.extname(file.name) || '.jpg';
    const safeName = file.name.replace(ext, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50);
    const uniqueName = safeName + '-' + Date.now() + ext;
    await writeFile(path.join(uploadsDir, uniqueName), buffer);
    return '/uploads/' + uniqueName;
  }
  // 2. Check URL string
  const imageUrl = formData.get('image') as string;
  if (imageUrl && imageUrl.trim()) return imageUrl.trim();
  return '';
}

function collectFaq(formData: FormData): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const q = formData.get('faq_q_' + i) as string;
    const a = formData.get('faq_a_' + i) as string;
    if (q && q.trim() && a && a.trim()) {
      items.push({ question: q.trim(), answer: a.trim() });
    }
  }
  if (items.length === 0) {
    try {
      const raw = formData.get('faq_schema') as string || '[]';
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) items.push(...parsed);
    } catch { /* ignore */ }
  }
  return items;
}

export async function createBlog(formData: FormData): Promise<void> {
  const slug = formData.get('slug') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const author = (formData.get('author') as string) || 'mTouch Labs';
  const category = (formData.get('category') as string) || 'General';
  const tagsRaw = formData.get('tags') as string || '';
  const tagsArray = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
  const status = formData.get('status') as string || 'published';
  const featured = formData.get('featured') === 'on';
  const allow_comments = formData.get('allow_comments') === 'on' || formData.get('comments') === 'on';
  const published_toggle = formData.get('published') === 'on';
  const image = await handleImageUpload(formData);
  const meta_title = (formData.get('meta_title') as string) || title;
  const meta_description = (formData.get('meta_description') as string) || description;
  const focus_keyword = formData.get('focus_keyword') as string || '';
  const secondary_keywords = formData.get('secondary_keywords') as string || '';
  const canonical_url = formData.get('canonical_url') as string || '';
  const robots = formData.get('robots') as string || 'index, follow';
  const breadcrumb_title = formData.get('breadcrumb_title') as string || '';
  const og_title = formData.get('og_title') as string || '';
  const og_description = formData.get('og_description') as string || '';
  const og_image = formData.get('og_image') as string || '';
  const twitter_card = formData.get('twitter_card') as string || 'summary_large_image';
  const schema_type = formData.get('schema_type') as string || 'BlogPosting';
  const faqItems = collectFaq(formData);
  const reading_time = calculateReadingTime(content || '');
  const published = published_toggle || status === 'published';

  if (!slug || !title) {
    redirect('/admin/blogs/create?error=Title+and+slug+are+required');
  }

  try {
    await sql`
      INSERT INTO blogs (slug, title, description, content, image, author, category,
        meta_title, meta_description, published, created_at,
        tags, reading_time, status, featured, allow_comments,
        focus_keyword, secondary_keywords, canonical_url, robots, breadcrumb_title,
        og_title, og_description, og_image, twitter_card,
        schema_type, faq_schema)
      VALUES (${slug}, ${title}, ${description || ''}, ${content || ''}, ${image},
              ${author}, ${category}, ${meta_title}, ${meta_description}, ${published}, NOW(),
              ${tagsArray}, ${reading_time}, ${status}, ${featured}, ${allow_comments},
              ${focus_keyword}, ${secondary_keywords}, ${canonical_url}, ${robots}, ${breadcrumb_title},
              ${og_title}, ${og_description}, ${og_image}, ${twitter_card},
              ${schema_type}, ${JSON.stringify(faqItems)})
    `;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      redirect('/admin/blogs/create?error=A+blog+with+this+slug+already+exists');
    }
    redirect('/admin/blogs/create?error=' + encodeURIComponent(message));
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  redirect('/admin/blogs');
}

export async function updateBlog(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  const slug = formData.get('slug') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const author = (formData.get('author') as string) || 'mTouch Labs';
  const category = (formData.get('category') as string) || 'General';
  const tagsRaw = formData.get('tags') as string || '';
  const tagsArray = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
  const status = formData.get('status') as string || 'published';
  const featured = formData.get('featured') === 'on';
  const allow_comments = formData.get('allow_comments') === 'on' || formData.get('comments') === 'on';
  const published_toggle = formData.get('published') === 'on';
  let image = await handleImageUpload(formData);
  if (!image) image = (formData.get('existing_image') as string) || '';
  const meta_title = (formData.get('meta_title') as string) || title;
  const meta_description = (formData.get('meta_description') as string) || description;
  const focus_keyword = formData.get('focus_keyword') as string || '';
  const secondary_keywords = formData.get('secondary_keywords') as string || '';
  const canonical_url = formData.get('canonical_url') as string || '';
  const robots_index = formData.get('robots_index') === 'on';
  const robots = robots_index ? 'index, follow' : 'noindex, nofollow';
  const breadcrumb_title = formData.get('breadcrumb_title') as string || '';
  const og_title = formData.get('og_title') as string || '';
  const og_description = formData.get('og_description') as string || '';
  const og_image = formData.get('og_image') as string || '';
  const twitter_card = formData.get('twitter_card') as string || 'summary_large_image';
  const schema_type = formData.get('schema_type') as string || 'BlogPosting';
  const faqItems = collectFaq(formData);
  const reading_time = calculateReadingTime(content || '');
  const published = published_toggle || status === 'published';

  if (!slug || !title) {
    redirect('/admin/blogs/' + id + '/edit?error=Title+and+slug+are+required');
  }

  try {
    await sql`
      UPDATE blogs SET
        slug = ${slug}, title = ${title}, description = ${description || ''},
        content = ${content || ''}, image = ${image}, author = ${author},
        category = ${category}, meta_title = ${meta_title},
        meta_description = ${meta_description}, published = ${published},
        tags = ${tagsArray}, reading_time = ${reading_time}, status = ${status},
        featured = ${featured}, allow_comments = ${allow_comments}
      WHERE id = ${parseInt(id)}
    `;
    try {
      await sql`
        UPDATE blogs SET
          focus_keyword = ${focus_keyword}, secondary_keywords = ${secondary_keywords},
          canonical_url = ${canonical_url}, robots = ${robots}, breadcrumb_title = ${breadcrumb_title},
          og_title = ${og_title}, og_description = ${og_description}, og_image = ${og_image},
          twitter_card = ${twitter_card},
          schema_type = ${schema_type}, faq_schema = ${JSON.stringify(faqItems)}
        WHERE id = ${parseInt(id)}
      `;
    } catch {
      console.log('Note: Some SEO columns may not exist yet.');
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    redirect('/admin/blogs/' + id + '/edit?error=' + encodeURIComponent(message));
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  revalidatePath('/blog/' + slug);
  redirect('/admin/blogs');
}

export async function duplicateBlog(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  try {
    await sql`
      INSERT INTO blogs (slug, title, description, content, image, author, category,
        meta_title, meta_description, published, created_at,
        tags, reading_time, status, featured, allow_comments,
        focus_keyword, secondary_keywords, canonical_url, robots, breadcrumb_title,
        og_title, og_description, og_image, twitter_card,
        schema_type, faq_schema)
      SELECT
        CONCAT(slug, '-copy-', FLOOR(RANDOM() * 9999)::TEXT),
        CONCAT('(Copy) ', title), description, content, image, author, category,
        meta_title, meta_description, false, NOW(),
        tags, reading_time, 'draft', false, allow_comments,
        focus_keyword, secondary_keywords, '', robots, breadcrumb_title,
        og_title, og_description, og_image, twitter_card,
        schema_type, faq_schema
      FROM blogs WHERE id = ${parseInt(id)}
    `;
  } catch {
    redirect('/admin/blogs?error=Failed+to+duplicate+blog');
  }
  revalidatePath('/admin/blogs');
  redirect('/admin/blogs');
}

export async function deleteBlog(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  try {
    await sql`DELETE FROM blogs WHERE id = ${parseInt(id)}`;
  } catch {
    redirect('/admin/blogs?error=Failed+to+delete+blog');
  }
  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  redirect('/admin/blogs');
}

export async function togglePublish(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  const currentlyPublished = formData.get('published') === 'true';
  const newStatus = currentlyPublished ? 'draft' : 'published';
  try {
    await sql`UPDATE blogs SET published = ${!currentlyPublished}, status = ${newStatus} WHERE id = ${parseInt(id)}`;
  } catch {
    redirect('/admin/blogs?error=Failed+to+toggle+publish');
  }
  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
}