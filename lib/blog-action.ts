'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// CREATE blog
export async function createBlog(formData: FormData) {
  const slug = formData.get('slug') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as string;
  const author = (formData.get('author') as string) || 'mTouch Labs';
  const category = (formData.get('category') as string) || 'General';
  const meta_title = (formData.get('meta_title') as string) || title;
  const meta_description = (formData.get('meta_description') as string) || description;
  const published = formData.get('published') === 'on';

  if (!slug || !title) {
    return { error: 'Title and slug are required' };
  }

  try {
    await sql`
      INSERT INTO blogs (slug, title, description, content, image, author, category, meta_title, meta_description, published, created_at)
      VALUES (${slug}, ${title}, ${description || ''}, ${content || ''}, ${image || ''},
              ${author}, ${category}, ${meta_title}, ${meta_description}, ${published}, NOW())
    `;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      return { error: 'A blog with this slug already exists' };
    }
    return { error: message };
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  redirect('/admin/blogs');
}

// UPDATE blog
export async function updateBlog(formData: FormData) {
  const id = formData.get('id') as string;
  const slug = formData.get('slug') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as string;
  const author = (formData.get('author') as string) || 'mTouch Labs';
  const category = (formData.get('category') as string) || 'General';
  const meta_title = (formData.get('meta_title') as string) || title;
  const meta_description = (formData.get('meta_description') as string) || description;
  const published = formData.get('published') === 'on';

  try {
    await sql`
      UPDATE blogs SET
        slug = ${slug}, title = ${title}, description = ${description || ''},
        content = ${content || ''}, image = ${image || ''}, author = ${author},
        category = ${category}, meta_title = ${meta_title},
        meta_description = ${meta_description}, published = ${published}
      WHERE id = ${parseInt(id)}
    `;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { error: message };
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  redirect('/admin/blogs');
}

// DELETE blog
export async function deleteBlog(formData: FormData) {
  const id = formData.get('id') as string;

  try {
    await sql`DELETE FROM blogs WHERE id = ${parseInt(id)}`;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { error: message };
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  redirect('/admin/blogs');
}

// TOGGLE publish
export async function togglePublish(formData: FormData) {
  const id = formData.get('id') as string;
  const currentlyPublished = formData.get('published') === 'true';

  try {
    await sql`UPDATE blogs SET published = ${!currentlyPublished} WHERE id = ${parseInt(id)}`;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { error: message };
  }

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
}