'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

async function handleImageUpload(formData: FormData): Promise<string> {
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
  return items;
}

function collectListItems(formData: FormData, prefix: string): string[] {
  const items: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const val = formData.get(`${prefix}_${i}`) as string;
    if (val && val.trim()) items.push(val.trim());
  }
  // Fallback: try comma-separated or newline-separated single field
  if (items.length === 0) {
    const raw = formData.get(prefix) as string;
    if (raw && raw.trim()) {
      return raw.split(/[,\n]/).map(s => s.trim()).filter(Boolean);
    }
  }
  return items;
}

function collectTechnologies(formData: FormData): { name: string; purpose: string }[] {
  const items: { name: string; purpose: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const name = formData.get(`tech_name_${i}`) as string;
    const purpose = formData.get(`tech_purpose_${i}`) as string;
    if (name && name.trim()) {
      items.push({ name: name.trim(), purpose: (purpose || '').trim() });
    }
  }
  return items;
}

function collectDevProcess(formData: FormData): { step: string; desc: string }[] {
  const items: { step: string; desc: string }[] = [];
  for (let i = 1; i <= 10; i++) {
    const step = formData.get(`process_step_${i}`) as string;
    const desc = formData.get(`process_desc_${i}`) as string;
    if (step && step.trim()) {
      items.push({ step: step.trim(), desc: (desc || '').trim() });
    }
  }
  return items;
}

function collectInternalLinks(formData: FormData): { url: string; text: string }[] {
  const items: { url: string; text: string }[] = [];
  for (let i = 1; i <= 10; i++) {
    const url = formData.get(`link_url_${i}`) as string;
    const text = formData.get(`link_text_${i}`) as string;
    if (url && url.trim()) {
      items.push({ url: url.trim(), text: (text || url).trim() });
    }
  }
  return items;
}

// ── CREATE ──
export async function createCaseStudy(formData: FormData): Promise<void> {
  const slug = formData.get('slug') as string;
  const title = formData.get('title') as string;
  const industry = formData.get('industry') as string || '';
  const platform = formData.get('platform') as string || '';
  const icon = formData.get('icon') as string || '';
  const color = formData.get('color') as string || '#6366f1';
  const image = await handleImageUpload(formData);
  const image_alt = formData.get('image_alt') as string || '';

  const overview = formData.get('overview') as string || '';
  const challenge = formData.get('challenge') as string || '';
  const challenge_points = collectListItems(formData, 'challenge_point');
  const approach = formData.get('approach') as string || '';
  const solution = formData.get('solution') as string || '';
  const features = collectListItems(formData, 'feature');
  const technologies = collectTechnologies(formData);
  const dev_process = collectDevProcess(formData);
  const results = formData.get('results') as string || '';
  const result_points = collectListItems(formData, 'result_point');
  const conclusion = formData.get('conclusion') as string || '';

  const testimonial_quote = formData.get('testimonial_quote') as string || '';
  const testimonial_role = formData.get('testimonial_role') as string || '';
  const testimonial_initials = formData.get('testimonial_initials') as string || '';

  const internal_links = collectInternalLinks(formData);

  const meta_title = formData.get('meta_title') as string || title;
  const meta_description = formData.get('meta_description') as string || overview;
  const keywords = formData.get('keywords') as string || '';
  const canonical_url = formData.get('canonical_url') as string || '';
  const breadcrumb_title = formData.get('breadcrumb_title') as string || '';
  const og_title = formData.get('og_title') as string || '';
  const og_description = formData.get('og_description') as string || '';
  const og_image = formData.get('og_image') as string || '/images/Light.png';
  const schema_json_ld = formData.get('schema_json_ld') as string || '';
  const faq_schema = collectFaq(formData);

  const published_toggle = formData.get('published') === 'on';
  const publish_date = formData.get('publish_date') as string || '';

  let status = 'published';
  let published = true;
  if (!published_toggle) {
    status = 'draft';
    published = false;
  } else if (publish_date) {
    const scheduledTime = new Date(publish_date);
    if (scheduledTime > new Date()) {
      status = 'scheduled';
      published = false;
    }
  }

  if (!slug || !title) {
    redirect('/admin/case-studies/create?error=Title+and+slug+are+required');
  }

  try {
    await sql`
      INSERT INTO case_studies (
        slug, title, industry, platform, icon, color, image, image_alt,
        overview, challenge, challenge_points, approach, solution, features,
        technologies, dev_process, results, result_points, conclusion,
        testimonial_quote, testimonial_role, testimonial_initials, internal_links,
        meta_title, meta_description, keywords, canonical_url, breadcrumb_title,
        og_title, og_description, og_image, schema_json_ld, faq_schema,
        status, published, publish_date, created_at
      ) VALUES (
        ${slug}, ${title}, ${industry}, ${platform}, ${icon}, ${color}, ${image}, ${image_alt},
        ${overview}, ${challenge}, ${JSON.stringify(challenge_points)},
        ${approach}, ${solution}, ${JSON.stringify(features)},
        ${JSON.stringify(technologies)}, ${JSON.stringify(dev_process)},
        ${results}, ${JSON.stringify(result_points)}, ${conclusion},
        ${testimonial_quote}, ${testimonial_role}, ${testimonial_initials},
        ${JSON.stringify(internal_links)},
        ${meta_title}, ${meta_description}, ${keywords}, ${canonical_url}, ${breadcrumb_title},
        ${og_title}, ${og_description}, ${og_image}, ${schema_json_ld},
        ${JSON.stringify(faq_schema)},
        ${status}, ${published},
        ${publish_date ? new Date(publish_date) : new Date()},
        NOW()
      )
    `;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      redirect('/admin/case-studies/create?error=A+case+study+with+this+slug+already+exists');
    }
    redirect('/admin/case-studies/create?error=' + encodeURIComponent(message));
  }

  revalidatePath('/admin/case-studies');
  revalidatePath('/case-studies');
  redirect('/admin/case-studies');
}

// ── UPDATE ──
export async function updateCaseStudy(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  const slug = formData.get('slug') as string;
  const title = formData.get('title') as string;
  const industry = formData.get('industry') as string || '';
  const platform = formData.get('platform') as string || '';
  const icon = formData.get('icon') as string || '';
  const color = formData.get('color') as string || '#6366f1';
  let image = await handleImageUpload(formData);
  if (!image) image = (formData.get('existing_image') as string) || '';
  const image_alt = formData.get('image_alt') as string || '';

  const overview = formData.get('overview') as string || '';
  const challenge = formData.get('challenge') as string || '';
  const challenge_points = collectListItems(formData, 'challenge_point');
  const approach = formData.get('approach') as string || '';
  const solution = formData.get('solution') as string || '';
  const features = collectListItems(formData, 'feature');
  const technologies = collectTechnologies(formData);
  const dev_process = collectDevProcess(formData);
  const results = formData.get('results') as string || '';
  const result_points = collectListItems(formData, 'result_point');
  const conclusion = formData.get('conclusion') as string || '';

  const testimonial_quote = formData.get('testimonial_quote') as string || '';
  const testimonial_role = formData.get('testimonial_role') as string || '';
  const testimonial_initials = formData.get('testimonial_initials') as string || '';
  const internal_links = collectInternalLinks(formData);

  const meta_title = formData.get('meta_title') as string || title;
  const meta_description = formData.get('meta_description') as string || overview;
  const keywords = formData.get('keywords') as string || '';
  const canonical_url = formData.get('canonical_url') as string || '';
  const breadcrumb_title = formData.get('breadcrumb_title') as string || '';
  const og_title = formData.get('og_title') as string || '';
  const og_description = formData.get('og_description') as string || '';
  const og_image = formData.get('og_image') as string || '/images/Light.png';
  const schema_json_ld = formData.get('schema_json_ld') as string || '';
  const faq_schema = collectFaq(formData);

  const published_toggle = formData.get('published') === 'on';
  const publish_date = formData.get('publish_date') as string || '';

  let status = 'published';
  let published = true;
  if (!published_toggle) {
    status = 'draft';
    published = false;
  } else if (publish_date) {
    const scheduledTime = new Date(publish_date);
    if (scheduledTime > new Date()) {
      status = 'scheduled';
      published = false;
    }
  }

  if (!slug || !title) {
    redirect(`/admin/case-studies/${id}/edit?error=Title+and+slug+are+required`);
  }

  try {
    await sql`
      UPDATE case_studies SET
        slug = ${slug}, title = ${title}, industry = ${industry}, platform = ${platform},
        icon = ${icon}, color = ${color}, image = ${image}, image_alt = ${image_alt},
        overview = ${overview}, challenge = ${challenge},
        challenge_points = ${JSON.stringify(challenge_points)},
        approach = ${approach}, solution = ${solution},
        features = ${JSON.stringify(features)},
        technologies = ${JSON.stringify(technologies)},
        dev_process = ${JSON.stringify(dev_process)},
        results = ${results}, result_points = ${JSON.stringify(result_points)},
        conclusion = ${conclusion},
        testimonial_quote = ${testimonial_quote}, testimonial_role = ${testimonial_role},
        testimonial_initials = ${testimonial_initials},
        internal_links = ${JSON.stringify(internal_links)},
        meta_title = ${meta_title}, meta_description = ${meta_description},
        keywords = ${keywords}, canonical_url = ${canonical_url},
        breadcrumb_title = ${breadcrumb_title},
        og_title = ${og_title}, og_description = ${og_description}, og_image = ${og_image},
        schema_json_ld = ${schema_json_ld}, faq_schema = ${JSON.stringify(faq_schema)},
        status = ${status}, published = ${published},
        publish_date = ${publish_date ? new Date(publish_date) : null},
        updated_at = NOW()
      WHERE id = ${parseInt(id)}
    `;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    redirect(`/admin/case-studies/${id}/edit?error=` + encodeURIComponent(message));
  }

  revalidatePath('/admin/case-studies');
  revalidatePath('/case-studies');
  revalidatePath(`/case-studies/${slug}`);
  redirect('/admin/case-studies');
}

// ── DELETE ──
export async function deleteCaseStudy(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  if (!id) return;

  try {
    await sql`DELETE FROM case_studies WHERE id = ${parseInt(id)}`;
  } catch { /* ignore */ }

  revalidatePath('/admin/case-studies');
  revalidatePath('/case-studies');
  redirect('/admin/case-studies');
}

// ── DUPLICATE ──
export async function duplicateCaseStudy(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  if (!id) return;

  try {
    const rows = await sql`SELECT * FROM case_studies WHERE id = ${parseInt(id)}`;
    if (rows.length === 0) return;
    const cs = rows[0];
    const newSlug = cs.slug + '-copy-' + Date.now();

    await sql`
      INSERT INTO case_studies (
        slug, title, industry, platform, icon, color, image, image_alt,
        overview, challenge, challenge_points, approach, solution, features,
        technologies, dev_process, results, result_points, conclusion,
        testimonial_quote, testimonial_role, testimonial_initials, internal_links,
        meta_title, meta_description, keywords, canonical_url, breadcrumb_title,
        og_title, og_description, og_image, schema_json_ld, faq_schema,
        status, published, created_at
      )
      SELECT
        ${newSlug}, title || ' (Copy)', industry, platform, icon, color, image, image_alt,
        overview, challenge, challenge_points, approach, solution, features,
        technologies, dev_process, results, result_points, conclusion,
        testimonial_quote, testimonial_role, testimonial_initials, internal_links,
        meta_title, meta_description, keywords, canonical_url, breadcrumb_title,
        og_title, og_description, og_image, schema_json_ld, faq_schema,
        'draft', false, NOW()
      FROM case_studies WHERE id = ${parseInt(id)}
    `;
  } catch { /* ignore */ }

  revalidatePath('/admin/case-studies');
  redirect('/admin/case-studies');
}