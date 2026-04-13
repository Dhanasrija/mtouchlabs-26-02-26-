import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const SITE_URL = 'https://www.mtouchlabs.com';

// Content calendar topics — auto-publisher picks from these
const TOPICS = [
  'How to Build a SaaS Product from Scratch in 2026',
  'Ecommerce App Development Cost in India 2026',
  'Next.js Latest Version 2026: Features, Updates and Migration Guide',
  'Cross-Platform App Development Frameworks Comparison 2026',
  'Custom Software Development for Startups: Complete Guide',
  'Cloud Migration Strategy for Enterprises 2026',
  'React Native vs Flutter: Which to Choose in 2026',
  'Salesforce CRM Implementation Best Practices',
  'UI/UX Design Trends for Mobile Apps 2026',
  'Digital Transformation Roadmap for SMEs',
  'Cybersecurity Best Practices for SaaS Applications',
  'Enterprise Application Modernization Guide',
  'API Development and Integration Best Practices',
  'Healthcare App Development: Compliance and Features Guide',
  'Fintech App Development: Security and Scalability',
  'IoT Application Development for Business Automation',
  'Data Science Solutions for Business Intelligence',
  'Progressive Web App Development Guide 2026',
  'DevOps Best Practices for Faster Software Delivery',
  'Machine Learning in Business: Practical Applications 2026',
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

export async function POST(request: NextRequest) {
  try {
    // Auth check — use a simple secret or skip in dev
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET || 'mtouch-auto-blog';
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Pick a random topic
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    const currentYear = new Date().getFullYear();

    // Step 1: Generate blog content with Claude
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: `You are a senior content writer for mTouch Labs, a leading software development company.

Write a comprehensive, SEO-optimized blog post about: "${topic}" for ${currentYear}.

Return ONLY valid JSON (no markdown, no code blocks) with this exact structure:
{
  "title": "SEO-optimized title (60-70 chars)",
  "slug": "url-friendly-slug",
  "description": "Meta description (150-160 chars)",
  "meta_title": "SEO title with keyword (60-70 chars)",
  "meta_description": "Compelling meta description (150-160 chars)",
  "focus_keyword": "primary keyword phrase",
  "category": "one of: Technology, Development, AI, Cloud, Design, Business",
  "tags": "comma-separated tags",
  "og_title": "Open Graph title",
  "og_description": "Open Graph description",
  "content": "Full HTML blog content with h2, h3 headings, paragraphs, lists. Minimum 1500 words. Use proper HTML tags. Include practical tips and examples. Reference mTouch Labs naturally.",
  "faq_schema": [
    {"question": "FAQ question 1?", "answer": "Detailed answer 1"},
    {"question": "FAQ question 2?", "answer": "Detailed answer 2"},
    {"question": "FAQ question 3?", "answer": "Detailed answer 3"}
  ]
}

Requirements:
- Content must be original, informative, and actionable
- Include at least 5 H2 sections with H3 subsections
- Naturally mention mTouch Labs as experts in the field
- Include a conclusion section
- FAQ should have 3-5 relevant questions
- All content should be ${currentYear} relevant`,
        },
      ],
    });

    // Extract the text content
    const textBlock = response.content.find((b) => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No text response from Claude' }, { status: 500 });
    }

    // Parse JSON from response — handle potential markdown wrapping
    let rawText = textBlock.text.trim();
    // Remove markdown code block if present
    if (rawText.startsWith('```')) {
      rawText = rawText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    let blogData;
    try {
      blogData = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: 'Failed to parse Claude response as JSON', raw: rawText.slice(0, 500) },
        { status: 500 }
      );
    }

    // Generate slug and canonical
    const slug = slugify(blogData.slug || blogData.title);
    const canonicalUrl = `${SITE_URL}/blog/${slug}`;

    // Pick a category-relevant image
    const categoryImages: Record<string, string> = {
      'Technology': '/images/blog/technology-blog.png',
      'Development': '/images/blog/development-blog.png',
      'AI': '/images/blog/ai-app-development-guide.png',
      'Cloud': '/images/blog/cloud-devops-blog.png',
      'Design': '/images/blog/design-blog.png',
      'Business': '/images/blog/business-blog.png',
      'Mobile': '/images/blog/mobile-app-development-cost-india.png',
      'Web': '/images/blog/custom-web-application-development.png',
      'SaaS': '/images/blog/saas-blog.png',
      'Ecommerce': '/images/blog/ecommerce-blog.png',
    };
    const blogImage = categoryImages[blogData.category] || '/images/Light.png';

    // Check if slug already exists
    const existing = await sql`SELECT id FROM blogs WHERE slug = ${slug}`;
    if (existing.length > 0) {
      // Append date to make unique
      const dateStr = new Date().toISOString().split('T')[0];
      const uniqueSlug = `${slug}-${dateStr}`;
      const uniqueCanonical = `${SITE_URL}/blog/${uniqueSlug}`;

      const result = await sql`
        INSERT INTO blogs (
          slug, title, description, content, image, author, category, tags,
          meta_title, meta_description, og_title, og_description, og_image,
          focus_keyword, canonical_url, schema_type, faq_schema,
          publish_date, status, published
        )
        VALUES (
          ${uniqueSlug}, ${blogData.title}, ${blogData.description}, ${blogData.content},
          ${blogImage}, ${'mTouch Labs'}, ${blogData.category || 'Technology'},
          ${blogData.tags ? `{${blogData.tags}}` : null}, ${blogData.meta_title || blogData.title},
          ${blogData.meta_description || blogData.description},
          ${blogData.og_title || blogData.title}, ${blogData.og_description || blogData.description},
          ${'/images/Light.png'}, ${blogData.focus_keyword || null},
          ${uniqueCanonical}, ${'BlogPosting'},
          ${blogData.faq_schema ? JSON.stringify(blogData.faq_schema) : null},
          ${new Date()}, ${'published'}, ${true}
        )
        RETURNING id, slug, title, status, created_at
      `;

      return NextResponse.json({
        success: true,
        message: 'Blog auto-published successfully (with date suffix)',
        blog: result[0],
        topic,
      });
    }

    // Insert the blog
    const result = await sql`
      INSERT INTO blogs (
        slug, title, description, content, image, author, category, tags,
        meta_title, meta_description, og_title, og_description, og_image,
        focus_keyword, canonical_url, schema_type, faq_schema,
        publish_date, status, published
      )
      VALUES (
        ${slug}, ${blogData.title}, ${blogData.description}, ${blogData.content},
        ${blogImage}, ${'mTouch Labs'}, ${blogData.category || 'Technology'},
        ${blogData.tags ? `{${blogData.tags}}` : null}, ${blogData.meta_title || blogData.title},
        ${blogData.meta_description || blogData.description},
        ${blogData.og_title || blogData.title}, ${blogData.og_description || blogData.description},
        ${'/images/Light.png'}, ${blogData.focus_keyword || null},
        ${canonicalUrl}, ${'BlogPosting'},
        ${blogData.faq_schema ? JSON.stringify(blogData.faq_schema) : null},
        ${new Date()}, ${'published'}, ${true}
      )
      RETURNING id, slug, title, status, created_at
    `;

    return NextResponse.json({
      success: true,
      message: 'Blog auto-published successfully',
      blog: result[0],
      topic,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Auto-publish error:', message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
