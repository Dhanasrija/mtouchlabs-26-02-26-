import { sql } from '@/lib/db';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { updatePortfolio } from '@/lib/portfolio-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Edit Portfolio | mTouch Labs Admin',
  robots: 'noindex, nofollow',
};

interface Portfolio {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  about: string;
  tech_stack: string[];
  requirements: string;
  business_impact: string;
  features: { title: string; description: string }[];
  app_screens: string[];
  web_screens: string[];
  typography: { font: string; style_description: string };
  color_palette: { name: string; hex: string }[];
  play_store_url: string;
  app_store_url: string;
  faq_schema: { question: string; answer: string }[];
  tags: string;
  published: boolean;
}

export default async function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const portfolios = await sql`SELECT * FROM portfolios WHERE id = ${id}` as Portfolio[];

  if (portfolios.length === 0) notFound();
  const p = portfolios[0];

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Edit: {p.title.substring(0, 40)}...</h1>
          <p className="admin-header-sub">Update portfolio project</p>
        </div>
        <Link href="/admin/portfolios" className="admin-header-link">&larr; Back to Portfolio</Link>
      </div>
      <div className="admin-container">
        <form action={updatePortfolio} className="admin-form">
          <input type="hidden" name="id" value={p.id} />

          {/* Tab 1: Basic Info */}
          <div className="admin-form-section">
            <h2 className="admin-tab-title">📋 Basic Info</h2>
            <div className="admin-form-group">
              <label className="admin-form-label">Title *</label>
              <input type="text" name="title" className="admin-form-input" required defaultValue={p.title} />
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Slug</label>
                <input type="text" name="slug" className="admin-form-input" defaultValue={p.slug} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Category</label>
                <select name="category" className="admin-form-input" defaultValue={p.category}>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="CRM">CRM</option>
                  <option value="Online Services">Online Services</option>
                  <option value="Ed-tech">Ed-tech</option>
                  <option value="Retail Management">Retail Management</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Transport Management">Transport Management</option>
                  <option value="Legal">Legal</option>
                  <option value="Health Care">Health Care</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Utility">Utility</option>
                  <option value="SaaS">SaaS</option>
                </select>
              </div>
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Subtitle / Tagline</label>
              <input type="text" name="subtitle" className="admin-form-input" defaultValue={p.subtitle || ''} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Featured Image URL</label>
              <input type="text" name="image" className="admin-form-input" defaultValue={p.image || ''} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Tags (comma-separated)</label>
              <input type="text" name="tags" className="admin-form-input" defaultValue={p.tags || ''} />
            </div>
          </div>

          {/* Tab 2: Content */}
          <div className="admin-form-section">
            <h2 className="admin-tab-title">📝 Content</h2>
            <div className="admin-form-group">
              <label className="admin-form-label">About the Project</label>
              <textarea name="about" className="admin-form-textarea" rows={5} defaultValue={p.about || ''} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Project Requirements</label>
              <textarea name="requirements" className="admin-form-textarea" rows={4} defaultValue={p.requirements || ''} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Business Impact</label>
              <textarea name="business_impact" className="admin-form-textarea" rows={4} defaultValue={p.business_impact || ''} />
            </div>
          </div>

          {/* Tab 3: Tech & Design */}
          <div className="admin-form-section">
            <h2 className="admin-tab-title">⚙️ Tech & Design</h2>
            <div className="admin-form-group">
              <label className="admin-form-label">Tech Stack (JSON array)</label>
              <textarea name="tech_stack" className="admin-form-textarea" rows={2} defaultValue={JSON.stringify(p.tech_stack || [], null, 2)} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Features (JSON array of objects)</label>
              <textarea name="features" className="admin-form-textarea" rows={6} defaultValue={JSON.stringify(p.features || [], null, 2)} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Typography (JSON)</label>
              <textarea name="typography" className="admin-form-textarea" rows={2} defaultValue={JSON.stringify(p.typography || {}, null, 2)} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Color Palette (JSON array)</label>
              <textarea name="color_palette" className="admin-form-textarea" rows={4} defaultValue={JSON.stringify(p.color_palette || [], null, 2)} />
            </div>
          </div>

          {/* Tab 4: Screenshots & Links */}
          <div className="admin-form-section">
            <h2 className="admin-tab-title">📱 Screenshots & Links</h2>
            <div className="admin-form-group">
              <label className="admin-form-label">App Screenshots (JSON array)</label>
              <textarea name="app_screens" className="admin-form-textarea" rows={3} defaultValue={JSON.stringify(p.app_screens || [], null, 2)} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Web Screenshots (JSON array)</label>
              <textarea name="web_screens" className="admin-form-textarea" rows={3} defaultValue={JSON.stringify(p.web_screens || [], null, 2)} />
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Play Store URL</label>
                <input type="text" name="play_store_url" className="admin-form-input" defaultValue={p.play_store_url || ''} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">App Store URL</label>
                <input type="text" name="app_store_url" className="admin-form-input" defaultValue={p.app_store_url || ''} />
              </div>
            </div>
          </div>

          {/* Tab 5: FAQ & Settings */}
          <div className="admin-form-section">
            <h2 className="admin-tab-title">❓ FAQ & Settings</h2>
            <div className="admin-form-group">
              <label className="admin-form-label">FAQ Schema (JSON array)</label>
              <textarea name="faq_schema" className="admin-form-textarea" rows={6} defaultValue={JSON.stringify(p.faq_schema || [], null, 2)} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">
                <input type="hidden" name="published" value="false" />
                <input type="checkbox" name="published" value="true" defaultChecked={p.published} /> Published
              </label>
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="admin-btn admin-btn--primary">Update Project</button>
            <Link href="/admin/portfolios" className="admin-btn admin-btn--secondary">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}