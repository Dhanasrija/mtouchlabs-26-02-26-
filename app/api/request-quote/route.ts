// app/api/request-quote/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { setFormSubmittedCookie } from '@/lib/formSubmissionGuard';

const resend = new Resend(process.env.RESEND_API_KEY);

const CRM_LEAD_URL = process.env.CRM_LEAD_API_URL || 'https://crmapi.mtouchlabs.com/lead';

function getRecipients(): string[] {
  return (process.env.NOTIFICATION_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean);
}

type CrmResult = { called: true; ok: boolean; status: number; message?: string } | { called: false; error: string };

/**
 * Push the lead into the mTouch CRM. Never throws / never blocks the email
 * notification or the user's redirect — it returns a small result object so
 * the API response can report whether the CRM was called (handy for testing).
 */
async function pushToCrm(data: any): Promise<CrmResult> {
  try {
    const rawCode = String(data.countryCode || '91').replace(/^\+/, '');
    // Tag the source so this lead is clearly identifiable in the CRM as
    // coming from the "Request a Free Quote" lead-gen page (distinct from the
    // contact form and the home Request-Quote wizard).
    const requirement = [
      'Source: Request a Free Quote (Lead Gen)',
      data.service ? `Service: ${data.service}` : '',
    ].filter(Boolean).join(' | ');

    const body = {
      contactPerson: data.name,
      email: data.email,
      countryCode: `+${rawCode}`,
      phone: String(data.mobile || '').replace(/\D/g, ''),
      requirement: requirement || 'Request a Free Quote (Lead Gen)',
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(CRM_LEAD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const text = await res.text().catch(() => '');
    let message = text;
    try { message = JSON.parse(text)?.Message ?? text; } catch { /* keep raw text */ }

    if (res.ok) {
      console.log('[CRM][request-quote] ✓ lead created — status', res.status);
    } else if (res.status === 400 && /already exists/i.test(text)) {
      // CRM dedupes by phone — an existing lead is expected, not an error.
      console.log('[CRM][request-quote] ℹ lead already exists in CRM (deduped by phone)');
    } else {
      console.error('[CRM][request-quote] ✗ push failed — status', res.status, text);
    }
    return { called: true, ok: res.ok, status: res.status, message };
  } catch (crmErr: any) {
    console.error('[CRM][request-quote] ✗ push error:', crmErr);
    return { called: false, error: crmErr?.message || String(crmErr) };
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recipients = getRecipients();
    if (recipients.length === 0) {
      return NextResponse.json({ error: 'No recipients configured' }, { status: 500 });
    }

    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'mTouch Labs <onboarding@resend.dev>',
        to: recipients,
        subject: `🟢 Lead Gen — Request a Free Quote: ${data.name} — ${data.service || 'Service'}`,
        replyTo: data.email,
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
  <div style="background:linear-gradient(135deg,#0C1C32,#1a2d4a);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
    <div style="font-size:36px;margin-bottom:8px;">💰</div>
    <h1 style="margin:0;font-size:22px;color:#fff;">New Lead — Request a Free Quote</h1>
    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,.7);">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
  </div>
  <div style="background:#fff;border-radius:0 0 16px 16px;box-shadow:0 4px 24px rgba(0,0,0,.06);">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Name</td><td style="padding:14px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">${data.name}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Email</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color:#3E8CFB;">${data.email}</a></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Phone</td><td style="padding:14px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">+${data.countryCode || '91'} ${data.mobile || ''}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Service</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><span style="background:#e0f2fe;color:#0369a1;padding:4px 12px;border-radius:12px;font-size:13px;">${data.service || '—'}</span></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Budget</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><span style="background:#dcfce7;color:#166534;padding:4px 12px;border-radius:12px;font-size:13px;font-weight:600;">${data.budget || '—'}</span></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;">Message</td><td style="padding:14px 16px;font-size:14px;color:#374151;line-height:1.7;">${data.message || '—'}</td></tr>
    </table>
    <div style="padding:16px;background:#fafbfc;border-radius:0 0 16px 16px;"><p style="margin:0;font-size:13px;color:#9ca3af;">🔥 High-intent lead — respond ASAP!</p></div>
  </div>
</div></body></html>`,
      });
    } catch (sendErr) {
      console.error('Resend send error:', sendErr);
    }

    // Push the lead into the CRM (server-to-server, avoids CORS). Awaited so
    // it completes within the request, but its own try/catch guarantees a
    // CRM outage never breaks the quote submission.
    const crm = await pushToCrm(data);

    // Always return success — email is fire-and-forget.
    // `crm` is included so the call can be verified directly in the browser
    // Network tab (Response of POST /api/request-quote). Safe to remove later.
    // Stamp the response with the one-time cookie that authorizes /thank-you.
    return setFormSubmittedCookie(NextResponse.json({ success: true, crm }));
  } catch (err) {
    console.error('Quote API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}