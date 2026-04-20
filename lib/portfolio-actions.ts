'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Helper: safely parse JSON with fallback
function parseJSONField<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// CREATE portfolio
export async function createPortfolio(formData: FormData): Promise<void> {
  const title = formData.get('title') as string;
  const slug = (formData.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const description = formData.get('description') as string || '';
  const subtitle = formData.get('subtitle') as string || '';
  const category = formData.get('category') as string || '';
  const image = formData.get('image') as string || '';
  const tags = formData.get('tags') as string || '';
  const published = formData.get('published') === 'true' || formData.get('published') === 'on';

  // Content tab
  const about = formData.get('about') as string || '';
  const requirements = formData.get('requirements') as string || '';
  const business_impact = formData.get('business_impact') as string || '';

  // Technical tab
  const tech_stack_raw = formData.get('tech_stack') as string || '';
  let tech_stack;
  try {
    tech_stack = JSON.parse(tech_stack_raw);
  } catch {
    tech_stack = tech_stack_raw ? tech_stack_raw.split(',').map(s => s.trim()).filter(Boolean) : [];
  }
  const role = formData.get('role') as string || '';
  const duration = formData.get('duration') as string || '';
  const team_size = formData.get('team_size') as string || '';
  const key_features = formData.get('key_features') as string || '';
  const challenges_solutions = formData.get('challenges_solutions') as string || '';

  // Tech & Design tab
  const features = parseJSONField(formData.get('features') as string, []);
  const typography = parseJSONField(formData.get('typography') as string, {});
  const color_palette = parseJSONField(formData.get('color_palette') as string, []);

  // Screenshots & Links tab
  const app_screens = parseJSONField(formData.get('app_screens') as string, []);
  const web_screens = parseJSONField(formData.get('web_screens') as string, []);
  const play_store_url = formData.get('play_store_url') as string || '';
  const app_store_url = formData.get('app_store_url') as string || '';

  // FAQ
  const faq_schema = parseJSONField(formData.get('faq_schema') as string, []);

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

    // Persist extended fields in a separate UPDATE so missing columns don't break INSERT
    try {
      await sql`
        UPDATE portfolios SET
          subtitle = ${subtitle},
          about = ${about},
          requirements = ${requirements},
          business_impact = ${business_impact},
          features = ${JSON.stringify(features)},
          typography = ${JSON.stringify(typography)},
          color_palette = ${JSON.stringify(color_palette)},
          app_screens = ${JSON.stringify(app_screens)},
          web_screens = ${JSON.stringify(web_screens)},
          play_store_url = ${play_store_url},
          app_store_url = ${app_store_url},
          faq_schema = ${JSON.stringify(faq_schema)}
        WHERE slug = ${slug}
      `;
    } catch (e) {
      console.log('Some extended portfolio columns may not exist yet:', e);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      redirect('/admin/portfolios/create?error=A+portfolio+with+this+slug+already+exists');
    }
    redirect('/admin/portfolios/create?error=' + encodeURIComponent(message));
  }

  revalidatePath('/admin/portfolios');
  revalidatePath('/portfolio');
  revalidatePath(`/portfolio/${slug}`);
  redirect('/admin/portfolios');
}

// UPDATE portfolio
export async function updatePortfolio(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const slug = (formData.get('slug') as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const description = formData.get('description') as string || '';
  const subtitle = formData.get('subtitle') as string || '';
  const category = formData.get('category') as string || '';
  const image = formData.get('image') as string || '';
  const tags = formData.get('tags') as string || '';
  // Checkbox sends 'true' (checked) or 'false' (hidden fallback). Accept both.
  const publishedRaw = formData.getAll('published');
  const published = publishedRaw.includes('true') || publishedRaw.includes('on');

  // Content tab
  const about = formData.get('about') as string || '';
  const requirements = formData.get('requirements') as string || '';
  const business_impact = formData.get('business_impact') as string || '';

  const tech_stack_raw = formData.get('tech_stack') as string || '';
  let tech_stack;
  try {
    tech_stack = JSON.parse(tech_stack_raw);
  } catch {
    tech_stack = tech_stack_raw ? tech_stack_raw.split(',').map(s => s.trim()).filter(Boolean) : [];
  }
  const role = formData.get('role') as string || '';
  const duration = formData.get('duration') as string || '';
  const team_size = formData.get('team_size') as string || '';
  const key_features = formData.get('key_features') as string || '';
  const challenges_solutions = formData.get('challenges_solutions') as string || '';

  // Tech & Design tab
  const features = parseJSONField(formData.get('features') as string, []);
  const typography = parseJSONField(formData.get('typography') as string, {});
  const color_palette = parseJSONField(formData.get('color_palette') as string, []);

  // Screenshots & Links tab
  const app_screens = parseJSONField(formData.get('app_screens') as string, []);
  const web_screens = parseJSONField(formData.get('web_screens') as string, []);
  const play_store_url = formData.get('play_store_url') as string || '';
  const app_store_url = formData.get('app_store_url') as string || '';

  // FAQ
  const faq_schema = parseJSONField(formData.get('faq_schema') as string, []);

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

    // Persist extended fields (content, screenshots, features, etc.)
    try {
      await sql`
        UPDATE portfolios SET
          subtitle = ${subtitle},
          about = ${about},
          requirements = ${requirements},
          business_impact = ${business_impact},
          features = ${JSON.stringify(features)},
          typography = ${JSON.stringify(typography)},
          color_palette = ${JSON.stringify(color_palette)},
          app_screens = ${JSON.stringify(app_screens)},
          web_screens = ${JSON.stringify(web_screens)},
          play_store_url = ${play_store_url},
          app_store_url = ${app_store_url},
          faq_schema = ${JSON.stringify(faq_schema)}
        WHERE id = ${parseInt(id)}
      `;
    } catch (e) {
      console.log('Some extended portfolio columns may not exist yet:', e);
    }
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
