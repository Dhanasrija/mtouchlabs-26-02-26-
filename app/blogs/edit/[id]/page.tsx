import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { updateBlog } from '@/lib/blog-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Edit Blog | Admin | mTouch Labs',
  robots: 'noindex, nofollow',
};

interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  category: string;
  meta_title: string;
  meta_description: string;
  published: boolean;
  created_at: string;
}

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blogs = await sql`SELECT * FROM blogs WHERE id = ${parseInt(id)}` as Blog[];

  if (blogs.length === 0) {
    notFound();
  }

  const blog = blogs[0];

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Blog Admin Panel</h1>
          <p className="admin-header-sub">Editing: {blog.title}</p>
        </div>
        <a href="/blog" target="_blank" className="admin-header-link">View Blog &rarr;</a>
      </div>

      <div className="admin-container">
        <div className="admin-form-header">
          <h2>Edit Blog</h2>
          <Link href="/admin/blogs" className="admin-btn admin-btn--secondary">&larr; Back to List</Link>
        </div>

        <form action={updateBlog}>
          <input type="hidden" name="id" value={blog.id} />

          <div className="admin-form-card">
            <h3>Basic Information</h3>
            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="title">Blog Title *</label>
              <input type="text" id="title" name="title" className="admin-form-input"
                defaultValue={blog.title} required />
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="slug">URL Slug *</label>
                <input type="text" id="slug" name="slug" className="admin-form-input"
                  defaultValue={blog.slug} required />
                <span className="admin-form-hint">URL: /{blog.slug}</span>
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="category">Category</label>
                <select id="category" name="category" className="admin-form-input" defaultValue={blog.category}>
                  <option value="AI &amp; Automation">AI &amp; Automation</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Cloud &amp; DevOps">Cloud &amp; DevOps</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                </select>
              </div>
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="description">Short Description</label>
              <textarea id="description" name="description" className="admin-form-textarea admin-form-textarea--short"
                defaultValue={blog.description || ''} />
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="image">Featured Image URL</label>
                <input type="text" id="image" name="image" className="admin-form-input"
                  defaultValue={blog.image || ''} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="author">Author</label>
                <input type="text" id="author" name="author" className="admin-form-input"
                  defaultValue={blog.author || 'mTouch Labs'} />
              </div>
            </div>
          </div>

          <div className="admin-form-card">
            <h3>Blog Content (HTML)</h3>
            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="content">
                Content Body &mdash; <span>Paste HTML content here</span>
              </label>
              <textarea id="content" name="content" className="admin-form-textarea admin-form-textarea--code"
                defaultValue={blog.content || ''} />
              <span className="admin-form-hint">Supports: h2, h3, p, ul, ol, li, strong, em, a, img, blockquote, code, pre</span>
            </div>
          </div>

          <div className="admin-form-card">
            <h3>SEO Settings</h3>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="meta_title">Meta Title</label>
                <input type="text" id="meta_title" name="meta_title" className="admin-form-input"
                  defaultValue={blog.meta_title || ''} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="meta_description">Meta Description</label>
                <input type="text" id="meta_description" name="meta_description" className="admin-form-input"
                  defaultValue={blog.meta_description || ''} />
              </div>
            </div>
          </div>

          <div className="admin-form-card">
            <div className="admin-form-footer">
              <label className="admin-checkbox">
                <input type="checkbox" name="published" defaultChecked={blog.published} />
                <span>Published</span>
              </label>
              <div className="admin-form-actions">
                <Link href="/admin/blogs" className="admin-btn admin-btn--secondary">Cancel</Link>
                <button type="submit" className="admin-btn admin-btn--primary">Update Blog</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
