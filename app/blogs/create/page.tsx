import { Metadata } from 'next';
import Link from 'next/link';
import { createBlog } from '@/lib/blog-actions';

export const metadata: Metadata = {
  title: 'Create Blog | Admin | mTouch Labs',
  robots: 'noindex, nofollow',
};

export default function CreateBlogPage() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Blog Admin Panel</h1>
          <p className="admin-header-sub">Create new blog post</p>
        </div>
        <a href="/blog" target="_blank" className="admin-header-link">View Blog &rarr;</a>
      </div>

      <div className="admin-container">
        <div className="admin-form-header">
          <h2>+ Create New Blog</h2>
          <Link href="/admin/blogs" className="admin-btn admin-btn--secondary">&larr; Back to List</Link>
        </div>

        <form action={createBlog}>
          <div className="admin-form-card">
            <h3>Basic Information</h3>
            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="title">Blog Title *</label>
              <input type="text" id="title" name="title" className="admin-form-input"
                placeholder="Enter blog title..." required />
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="slug">URL Slug *</label>
                <input type="text" id="slug" name="slug" className="admin-form-input"
                  placeholder="url-friendly-slug" required />
                <span className="admin-form-hint">Example: my-blog-post</span>
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="category">Category</label>
                <select id="category" name="category" className="admin-form-input">
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
                placeholder="Brief description shown on blog cards..." />
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="image">Featured Image URL</label>
                <input type="text" id="image" name="image" className="admin-form-input"
                  placeholder="/images/blogs/your-image.png" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="author">Author</label>
                <input type="text" id="author" name="author" className="admin-form-input"
                  defaultValue="mTouch Labs" />
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
                placeholder={'<h2>Introduction</h2>\n<p>Your blog content goes here...</p>'} />
              <span className="admin-form-hint">Supports: h2, h3, p, ul, ol, li, strong, em, a, img, blockquote, code, pre</span>
            </div>
          </div>

          <div className="admin-form-card">
            <h3>SEO Settings</h3>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="meta_title">Meta Title</label>
                <input type="text" id="meta_title" name="meta_title" className="admin-form-input"
                  placeholder="SEO title (defaults to blog title)" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label" htmlFor="meta_description">Meta Description</label>
                <input type="text" id="meta_description" name="meta_description" className="admin-form-input"
                  placeholder="SEO description" />
              </div>
            </div>
          </div>

          <div className="admin-form-card">
            <div className="admin-form-footer">
              <label className="admin-checkbox">
                <input type="checkbox" name="published" defaultChecked />
                <span>Publish immediately</span>
              </label>
              <div className="admin-form-actions">
                <Link href="/admin/blogs" className="admin-btn admin-btn--secondary">Cancel</Link>
                <button type="submit" className="admin-btn admin-btn--primary">Create Blog</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
