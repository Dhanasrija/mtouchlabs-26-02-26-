// import { sql } from '@/lib/db';
// import { NextRequest, NextResponse } from 'next/server';

// // GET /api/blogs — list all published blogs
// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const category = searchParams.get('category');
//     const page = parseInt(searchParams.get('page') || '1');
//     const limit = parseInt(searchParams.get('limit') || '12');
//     const offset = (page - 1) * limit;

//     let blogs;
//     let countResult;

//     if (category) {
//       blogs = await sql`
//         SELECT id, slug, title, description, image, author, category, tags, created_at
//         FROM blogs
//         WHERE published = true AND category = ${category}
//         ORDER BY created_at DESC
//         LIMIT ${limit} OFFSET ${offset}
//       `;
//       countResult = await sql`
//         SELECT COUNT(*) as total FROM blogs WHERE published = true AND category = ${category}
//       `;
//     } else {
//       blogs = await sql`
//         SELECT id, slug, title, description, image, author, category, tags, created_at
//         FROM blogs
//         WHERE published = true
//         ORDER BY created_at DESC
//         LIMIT ${limit} OFFSET ${offset}
//       `;
//       countResult = await sql`
//         SELECT COUNT(*) as total FROM blogs WHERE published = true
//       `;
//     }

//     const total = parseInt(countResult[0].total);

//     return NextResponse.json({
//       blogs,
//       pagination: {
//         page,
//         limit,
//         total,
//         totalPages: Math.ceil(total / limit),
//       },
//     });
//   } catch (error: unknown) {
//     const message = error instanceof Error ? error.message : 'Unknown error';
//     return NextResponse.json({ success: false, error: message }, { status: 500 });
//   }
// }

// // POST /api/blogs — create a new blog
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { slug, title, description, content, image, author, category, tags, meta_title, meta_description, og_image } = body;

//     if (!slug || !title || !content) {
//       return NextResponse.json(
//         { success: false, error: 'slug, title, and content are required' },
//         { status: 400 }
//       );
//     }

//     const result = await sql`
//       INSERT INTO blogs (slug, title, description, content, image, author, category, tags, meta_title, meta_description, og_image, published)
//       VALUES (${slug}, ${title}, ${description || null}, ${content}, ${image || null}, ${author || 'mTouch Labs'}, ${category || null}, ${tags || null}, ${meta_title || title}, ${meta_description || description}, ${og_image || null}, true)
//       RETURNING id, slug, title, created_at
//     `;

//     return NextResponse.json({ success: true, blog: result[0] }, { status: 201 });
//   } catch (error: unknown) {
//     const message = error instanceof Error ? error.message : 'Unknown error';
//     if (message.includes('unique constraint')) {
//       return NextResponse.json({ success: false, error: 'Blog with this slug already exists' }, { status: 409 });
//     }
//     return NextResponse.json({ success: false, error: message }, { status: 500 });
//   }
// }


import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/blogs — list all published blogs (newest first by publish_date)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const offset = (page - 1) * limit;

    let blogs;
    let countResult;

    // ⭐ Updated: supports both old `published` column AND new `status` column
    // ⭐ Order by updated_at first (so refreshed posts rise), then publish_date, then created_at.
    if (category) {
      blogs = await sql`
        SELECT id, slug, title, description, image, author, category, tags,
               publish_date, created_at, updated_at
        FROM blogs
        WHERE (published = true OR status = 'published')
          AND category = ${category}
        ORDER BY GREATEST(updated_at, publish_date, created_at) DESC NULLS LAST
        LIMIT ${limit} OFFSET ${offset}
      `;
      countResult = await sql`
        SELECT COUNT(*) as total FROM blogs
        WHERE (published = true OR status = 'published')
          AND category = ${category}
      `;
    } else {
      blogs = await sql`
        SELECT id, slug, title, description, image, author, category, tags,
               publish_date, created_at, updated_at
        FROM blogs
        WHERE (published = true OR status = 'published')
        ORDER BY GREATEST(updated_at, publish_date, created_at) DESC NULLS LAST
        LIMIT ${limit} OFFSET ${offset}
      `;
      countResult = await sql`
        SELECT COUNT(*) as total FROM blogs 
        WHERE (published = true OR status = 'published')
      `;
    }

    const total = parseInt(countResult[0].total);

    return NextResponse.json({
      blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// POST /api/blogs — create a new blog (with scheduler support)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      slug, title, description, content, image, author, category, tags,
      meta_title, meta_description, og_image, og_title, og_description,
      focus_keyword, canonical_url, schema_type, faq_schema,
      snippet_summary, key_takeaways, people_also_ask, json_ld,
      publish_date, // ⭐ scheduler field
    } = body;

    if (!slug || !title || !content) {
      return NextResponse.json(
        { success: false, error: 'slug, title, and content are required' },
        { status: 400 }
      );
    }

    // ⭐ Determine status based on publish_date
    let status = 'published';
    let published = true;

    if (publish_date) {
      const scheduledTime = new Date(publish_date);
      const now = new Date();
      if (scheduledTime > now) {
        status = 'scheduled';
        published = false; // don't show until cron flips it
      }
    }

    const result = await sql`
      INSERT INTO blogs (
        slug, title, description, content, image, author, category, tags,
        meta_title, meta_description, og_image, og_title, og_description,
        focus_keyword, canonical_url, schema_type, faq_schema,
        snippet_summary, key_takeaways, people_also_ask, json_ld,
        publish_date, status, published
      )
      VALUES (
        ${slug}, ${title}, ${description || null}, ${content},
        ${image || null}, ${author || 'mTouch Labs'}, ${category || null},
        ${tags || null}, ${meta_title || title}, ${meta_description || description},
        ${og_image || '/images/Light.png'}, ${og_title || title}, ${og_description || description},
        ${focus_keyword || null}, ${canonical_url || null}, ${schema_type || 'BlogPosting'},
        ${faq_schema ? JSON.stringify(faq_schema) : null},
        ${snippet_summary || null}, ${key_takeaways || null},
        ${people_also_ask || null}, ${json_ld || null},
        ${publish_date ? new Date(publish_date) : new Date()},
        ${status}, ${published}
      )
      RETURNING id, slug, title, status, publish_date, created_at
    `;

    return NextResponse.json({ success: true, blog: result[0] }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (message.includes('unique constraint')) {
      return NextResponse.json({ success: false, error: 'Blog with this slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}