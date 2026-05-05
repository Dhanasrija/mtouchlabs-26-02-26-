// app/api/careers/route.ts
//
// Forwards career applications to the xCRM HR API.
//
//   Inbound  : multipart/form-data POST from /careers apply form
//   Outbound : multipart/form-data POST to https://xcrmapi.mtouchlabs.com/hr/apply
//
// Cloudflare Turnstile is verified server-side BEFORE we forward, so the xCRM
// endpoint never sees bot traffic. The previous Resend email-notification flow
// has been retired in favor of this integration.

import { NextResponse } from 'next/server';
import { setFormSubmittedCookie } from '@/lib/formSubmissionGuard';

export const runtime = 'nodejs';

const XCRM_APPLY_URL =
  process.env.XCRM_APPLY_URL || 'https://xcrmapi.mtouchlabs.com/hr/apply';

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    // In dev environments without a secret, fail closed.
    console.warn('TURNSTILE_SECRET_KEY not set — rejecting submission.');
    return false;
  }
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error('Turnstile verification error:', err);
    return false;
  }
}

/**
 * Convert the country-code value used by the front-end select
 * (e.g. "91", "1", "1_CA") into the format expected by xCRM ("+91", "+1").
 */
function formatCountryCode(raw: string): string {
  const cleaned = (raw || '').replace(/_[A-Z]+$/, '').trim();
  if (!cleaned) return '+91';
  return cleaned.startsWith('+') ? cleaned : `+${cleaned}`;
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';

    // We need multipart so we can pass through the resume File. JSON would
    // strip the file — reject with a friendly message instead of crashing.
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'multipart/form-data required (resume upload)' },
        { status: 400 },
      );
    }

    const formData = await req.formData();

    const name = ((formData.get('name') as string) || '').trim();
    const email = ((formData.get('email') as string) || '').trim();
    const rawCountryCode = ((formData.get('countryCode') as string) || '91').trim();
    // Accept both 'phone' and the legacy 'mobile' field name.
    const phone = (
      (formData.get('phone') as string) ||
      (formData.get('mobile') as string) ||
      ''
    ).trim();
    const openingId = ((formData.get('openingId') as string) || '').trim();
    const experience = ((formData.get('experience') as string) || '').trim();
    const turnstileToken = ((formData.get('cf-turnstile-response') as string) || '').trim();
    const resumeFile = formData.get('resume') as File | null;

    // ── Captcha ──────────────────────────────────────────────────────────
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Captcha token missing' }, { status: 400 });
    }
    const captchaValid = await verifyTurnstile(turnstileToken);
    if (!captchaValid) {
      return NextResponse.json({ error: 'Captcha verification failed' }, { status: 403 });
    }

    // ── Required-field check ────────────────────────────────────────────
    const missing: string[] = [];
    if (!openingId) missing.push('openingId');
    if (!name) missing.push('name');
    if (!email) missing.push('email');
    if (!phone) missing.push('phone');
    if (!experience) missing.push('experience');
    if (
      !resumeFile ||
      typeof (resumeFile as File).size !== 'number' ||
      (resumeFile as File).size === 0
    ) {
      missing.push('resume');
    }
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 },
      );
    }

    // ── Forward to xCRM ─────────────────────────────────────────────────
    const formattedCC = formatCountryCode(rawCountryCode);
    const xcrmForm = new FormData();
    xcrmForm.append('openingId', openingId);
    xcrmForm.append('name', name);
    xcrmForm.append('email', email);
    xcrmForm.append('countryCode', formattedCC);
    xcrmForm.append('phone', phone);
    xcrmForm.append('experience', experience);

    // IMPORTANT: when re-emitting a File parsed by Next's req.formData(), Node 18+
    // fetch (undici) often loses the underlying stream and ends up sending an empty
    // body for that part — which xCRM then 500s on. Read into a Buffer and rebuild
    // a fresh Blob so the bytes definitely make it across the wire.
    let resumeMeta = { sent: false, name: '', size: 0, type: '' };
    if (resumeFile && typeof (resumeFile as File).size === 'number' && (resumeFile as File).size > 0) {
      const buf = Buffer.from(await (resumeFile as File).arrayBuffer());
      const blob = new Blob([buf], {
        type: (resumeFile as File).type || 'application/pdf',
      });
      const filename = (resumeFile as File).name || 'resume.pdf';
      xcrmForm.append('resume', blob, filename);
      resumeMeta = { sent: true, name: filename, size: buf.length, type: blob.type };
    }

    // Diagnostic log — does NOT include the raw resume bytes, only metadata.
    console.log('[careers] forwarding to xCRM', {
      url: XCRM_APPLY_URL,
      openingId,
      name,
      email,
      countryCode: formattedCC,
      phone,
      experience,
      resume: resumeMeta,
    });

    let xcrmRes: Response;
    try {
      xcrmRes = await fetch(XCRM_APPLY_URL, {
        method: 'POST',
        body: xcrmForm,
        // Let fetch generate the multipart boundary; do NOT set Content-Type manually.
      });
    } catch (apiErr) {
      console.error('xCRM apply network error:', apiErr);
      return NextResponse.json(
        { error: 'Could not reach the application service. Please try again.' },
        { status: 502 },
      );
    }

    let xcrmData: any = null;
    const xcrmCT = xcrmRes.headers.get('content-type') || '';
    try {
      if (xcrmCT.includes('application/json')) {
        xcrmData = await xcrmRes.json();
      } else {
        xcrmData = { raw: await xcrmRes.text() };
      }
    } catch {
      xcrmData = null;
    }

    if (!xcrmRes.ok) {
      console.error('xCRM apply non-OK response:', xcrmRes.status, xcrmData);
      return NextResponse.json(
        {
          error:
            xcrmData?.Message ||
            xcrmData?.message ||
            'Application submission failed. Please try again.',
        },
        { status: xcrmRes.status },
      );
    }

    // Stamp the response with the one-time cookie that authorizes /thank-you.
    return setFormSubmittedCookie(
      NextResponse.json({ success: true, data: xcrmData }),
    );
  } catch (err) {
    console.error('Careers API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
