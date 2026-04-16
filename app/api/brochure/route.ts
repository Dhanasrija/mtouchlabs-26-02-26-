// app/api/brochure/route.ts
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

    const ist = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'mTouch Labs <onboarding@resend.dev>',
        to: recipients,
        subject: `📄 Brochure Request: ${data.name} — +${data.countryCode || '91'} ${data.mobile || ''}`,
        replyTo: data.email,
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
  <div style="background:linear-gradient(135deg,#0C1C32,#1a2d4a);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
    <div style="font-size:36px;margin-bottom:8px;">📄</div>
    <h1 style="margin:0;font-size:22px;color:#fff;">New Brochure Request</h1>
    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,.7);">${ist} IST</p>
  </div>
  <div style="background:#fff;border-radius:0 0 16px 16px;box-shadow:0 4px 24px rgba(0,0,0,.06);">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:16px 20px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Name</td>
        <td style="padding:16px 20px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding:16px 20px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Email</td>
        <td style="padding:16px 20px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color:#3E8CFB;">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding:16px 20px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Phone</td>
        <td style="padding:16px 20px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">
          <a href="tel:+${data.countryCode || '91'}${data.mobile || ''}" style="color:#3E8CFB;">+${data.countryCode || '91'} ${data.mobile || ''}</a>
        </td>
      </tr>
    </table>
    <div style="padding:16px 20px;background:#fafbfc;border-radius:0 0 16px 16px;">
      <p style="margin:0;font-size:13px;color:#9ca3af;">📄 Brochure download requested from website footer</p>
    </div>
  </div>
</div></body></html>`,
      });
    } catch (sendErr) {
      console.error('Resend send error:', sendErr);
    }

    // Always return success — email is fire-and-forget
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Brochure API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}