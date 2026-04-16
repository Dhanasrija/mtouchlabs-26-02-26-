import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ✏️ Add your topics here — cron will pick one per run
const TOPICS = [
  "Why Next.js is the best framework for enterprise apps in 2026",
  "How AI is transforming mobile app development in 2026",
  "Top 10 benefits of hiring dedicated developers in India",
  "Flutter vs React Native: Which to choose in 2026",
  "How cloud DevOps reduces software delivery time by 60%",
];

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Pick a random topic
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];

    // Generate blog using Claude
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `You are a professional tech blog writer for mTouch Labs, a software development company.

Write a complete blog post about: "${topic}"

Return ONLY valid JSON (no markdown, no backticks):
{
  "title": "SEO optimized title",
  "slug": "url-friendly-slug",
  "description": "150 char meta description",
  "content": "<h2>...</h2><p>Full HTML blog content minimum 800 words</p>",
  "category": "One of: Web Development | Mobile App | AI & Automation | Digital Transformation | Cloud & DevOps",
  "tags": "comma,separated,tags",
  "author": "mTouch Labs",
  "reading_time": 6,
  "focus_keyword": "main seo keyword",
  "secondary_keywords": "keyword2, keyword3",
  "meta_title": "SEO meta title under 60 chars",
  "meta_description": "SEO meta description under 160 chars",
  "og_title": "Open graph title",
  "og_description": "Open graph description",
  "schema_type": "BlogPosting"
}`
      }]
    });

    const raw = response.content[0].type === "text" ? response.content[0].text : "";
    const clean = raw.replace(/```json|```/g, "").trim();
    const blog = JSON.parse(clean);
    blog.slug = blog.slug || toSlug(blog.title);

    // Insert into DB
    const result = await sql`
      INSERT INTO blogs (
        slug, title, description, content, category, tags,
        author, reading_time, focus_keyword, secondary_keywords,
        meta_title, meta_description, og_title, og_description,
        schema_type, published, status, created_at, updated_at
      ) VALUES (
        ${blog.slug}, ${blog.title}, ${blog.description}, ${blog.content},
        ${blog.category}, ${blog.tags}, ${blog.author}, ${blog.reading_time},
        ${blog.focus_keyword}, ${blog.secondary_keywords},
        ${blog.meta_title}, ${blog.meta_description},
        ${blog.og_title}, ${blog.og_description},
        ${blog.schema_type}, true, 'published', NOW(), NOW()
      )
      ON CONFLICT (slug) DO NOTHING
      RETURNING id, slug
    `;

    if (result.length > 0) {
      revalidatePath('/blog');
      revalidatePath(`/blog/${result[0].slug}`);
      return NextResponse.json({
        message: `Blog published: ${result[0].slug}`,
        url: `https://www.mtouchlabs.com/blog/${result[0].slug}`
      });
    }

    return NextResponse.json({ message: 'Slug already exists, skipped' });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Blog generation error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
