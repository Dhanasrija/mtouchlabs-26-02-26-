'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// CREATE portfolio
export async function createPortfolio(formData: FormData): Promise<void> {
  const title = formData.get('title') as string;
  const slug = (formData.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const description = formData.get('description') as string || '';
  const category = formData.get('category') as string || '';
  const image = formData.get('image') as string || '';
  const tags = formData.get('tags') as string || '';
  const published = formData.get('published') === 'on';

  // Technical tab
  const tech_stack_raw = formData.get('tech_stack') as string || '';
  // Convert tech_stack to JSON array if it's a comma-separated string
  let tech_stack;
  try {
    tech_stack = JSON.parse(tech_stack_raw);
  } catch {
    // If it's not valid JSON, convert comma-separated string to array
    tech_stack = tech_stack_raw ? tech_stack_raw.split(',').map(s => s.trim()).filter(Boolean) : [];
  }
  const role = formData.get('role') as string || '';
  const duration = formData.get('duration') as string || '';
  const team_size = formData.get('team_size') as string || '';
  const key_features = formData.get('key_features') as string || '';
  const challenges_solutions = formData.get('challenges_solutions') as string || '';

  // Links & Media tab
  const live_url = formData.get('live_url') as string || '';
  const github_url = formData.get('github_url') as string || '';
  const gallery_raw = formData.get('gallery_images') as string || '[]';
  let gallery_images;
  try { gallery_images = JSON.parse(gallery_raw); } catch { gallery_images = []; }

  // SEO tab
  const meta_title = formData.get('meta_title') as string || title;
  const meta_description = formData.get('meta_description') as string || description;
  const canonical_url = formData.get('canonical_url') as string || '';
  const og_title = formData.get('og_title') as string || '';
  const og_description = formData.get('og_description') as string || '';
  const og_image = formData.get('og_image') as string || '';

  if (!slug || !title) {
    redirect('/admin/portfolios/create?error=Title+is+required');
  }

  try {
    await sql`
      INSERT INTO portfolios (slug, title, description, category, image, tags, published, created_at,
        tech_stack, role, duration, team_size, key_features, challenges_solutions,
        live_url, github_url, gallery_images,
        meta_title, meta_description, canonical_url, og_title, og_description, og_image)
      VALUES (${slug}, ${title}, ${description}, ${category}, ${image}, ${tags}, ${published}, NOW(),
        ${JSON.stringify(tech_stack)}, ${role}, ${duration}, ${team_size}, ${key_features}, ${challenges_solutions},
        ${live_url}, ${github_url}, ${JSON.stringify(gallery_images)},
        ${meta_title}, ${meta_description}, ${canonical_url}, ${og_title}, ${og_description}, ${og_image})
    `;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      redirect('/admin/portfolios/create?error=A+portfolio+with+this+slug+already+exists');
    }
    redirect('/admin/portfolios/create?error=' + encodeURIComponent(message));
  }

  revalidatePath('/admin/portfolios');
  revalidatePath('/portfolio');
  redirect('/admin/portfolios');
}

// UPDATE portfolio
export async function updatePortfolio(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const slug = (formData.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const description = formData.get('description') as string || '';
  const category = formData.get('category') as string || '';
  const image = formData.get('image') as string || '';
  const tags = formData.get('tags') as string || '';
  const published = formData.get('published') === 'on';

  const tech_stack_raw = formData.get('tech_stack') as string || '';
  // Convert tech_stack to JSON array if it's a comma-separated string
  let tech_stack;
  try {
    tech_stack = JSON.parse(tech_stack_raw);
  } catch {
    // If it's not valid JSON, convert comma-separated string to array
    tech_stack = tech_stack_raw ? tech_stack_raw.split(',').map(s => s.trim()).filter(Boolean) : [];
  }
  const role = formData.get('role') as string || '';
  const duration = formData.get('duration') as string || '';
  const team_size = formData.get('team_size') as string || '';
  const key_features = formData.get('key_features') as string || '';
  const challenges_solutions = formData.get('challenges_solutions') as string || '';

  const live_url = formData.get('live_url') as string || '';
  const github_url = formData.get('github_url') as string || '';
  const gallery_raw = formData.get('gallery_images') as string || '[]';
  let gallery_images;
  try { gallery_images = JSON.parse(gallery_raw); } catch { gallery_images = []; }

  const meta_title = formData.get('meta_title') as string || title;
  const meta_description = formData.get('meta_description') as string || description;
  const canonical_url = formData.get('canonical_url') as string || '';
  const og_title = formData.get('og_title') as string || '';
  const og_description = formData.get('og_description') as string || '';
  const og_image = formData.get('og_image') as string || '';

  try {
    await sql`
      UPDATE portfolios SET
        slug = ${slug}, title = ${title}, description = ${description},
        category = ${category}, image = ${image}, tags = ${tags}, published = ${published}
      WHERE id = ${parseInt(id)}
    `;
    try {
      await sql`
        UPDATE portfolios SET
          tech_stack = ${JSON.stringify(tech_stack)}, role = ${role}, duration = ${duration},
          team_size = ${team_size}, key_features = ${key_features},
          challenges_solutions = ${challenges_solutions},
          live_url = ${live_url}, github_url = ${github_url},
          gallery_images = ${JSON.stringify(gallery_images)},
          meta_title = ${meta_title}, meta_description = ${meta_description},
          canonical_url = ${canonical_url}, og_title = ${og_title},
          og_description = ${og_description}, og_image = ${og_image}
        WHERE id = ${parseInt(id)}
      `;
    } catch { console.log('Some portfolio columns may not exist yet.'); }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    redirect('/admin/portfolios/' + id + '/edit?error=' + encodeURIComponent(message));
  }

  revalidatePath('/admin/portfolios');
  revalidatePath('/portfolio');
  revalidatePath(`/portfolio/${slug}`);
  redirect('/admin/portfolios');
}

// DELETE portfolio
export async function deletePortfolio(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  try {
    await sql`DELETE FROM portfolios WHERE id = ${parseInt(id)}`;
  } catch {
    redirect('/admin/portfolios?error=Failed+to+delete');
  }
  revalidatePath('/admin/portfolios');
  revalidatePath('/portfolio');
  redirect('/admin/portfolios');
}

// TOGGLE publish
export async function togglePortfolioPublish(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  const published = formData.get('published') === 'true';
  try {
    await sql`UPDATE portfolios SET published = ${!published} WHERE id = ${parseInt(id)}`;
  } catch {
    redirect('/admin/portfolios?error=Failed+to+toggle');
  }
  revalidatePath('/admin/portfolios');
  revalidatePath('/portfolio');
}