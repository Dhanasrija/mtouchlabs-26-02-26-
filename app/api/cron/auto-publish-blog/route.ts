import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 60; // Allow up to 60s for Claude API call

// Vercel cron calls GET with CRON_SECRET in Authorization header
export async function GET(request: NextRequest) {
  try {
    // Verify Vercel cron secret
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Call the auto-publish API internally
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/blogs/auto-publish`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cronSecret}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Auto-publish cron failed:', data);
      return NextResponse.json(
        { success: false, error: data.error || 'Auto-publish failed' },
        { status: 500 }
      );
    }

    console.log('Auto-publish cron success:', data.blog?.title);

    return NextResponse.json({
      success: true,
      message: `Blog "${data.blog?.title}" published successfully`,
      blog: data.blog,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Auto-publish cron error:', message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
