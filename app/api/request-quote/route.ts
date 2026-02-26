// app/api/request-quote/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getRecipients(): string[] {
  return (process.env.NOTIFICATION_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean);
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
        subject: `💰 Quote Request: ${data.name} — ${data.service || 'Service'} [${data.budget || 'Budget TBD'}]`,
        replyTo: data.email,
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
  <div style="background:linear-gradient(135deg,#0C1C32,#1a2d4a);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
    <div style="font-size:36px;margin-bottom:8px;">💰</div>
    <h1 style="margin:0;font-size:22px;color:#fff;">New Quote Request</h1>
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

    // Always return success — email is fire-and-forget
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}