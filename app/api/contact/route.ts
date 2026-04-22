// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getRecipients(): string[] {
  return (process.env.NOTIFICATION_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean);
}

// Normalize country code for CRM — accept "91", "+91", " 91 " etc. and always return "+91"
function normalizeCountryCode(raw: string | undefined | null): string {
  if (!raw) return '+91';
  const t = String(raw).trim();
  if (!t) return '+91';
  return t.startsWith('+') ? t : `+${t.replace(/\D/g, '') || '91'}`;
}

// Push lead to CRM — fire-and-forget, never blocks main response
async function pushToCrm(data: {
  name: string;
  email: string;
  countryCode?: string;
  mobile?: string;
  company?: string;
  subject?: string;
  interest?: string;
  message?: string;
}) {
  try {
    const countryCode = normalizeCountryCode(data.countryCode);
    const phone = (data.mobile || '').replace(/\D/g, '');

    const requirement = [
      data.subject ? `Subject: ${data.subject}` : '',
      data.interest ? `Service: ${data.interest}` : '',
      data.company ? `Company: ${data.company}` : '',
      data.message ? `Message: ${data.message}` : '',
    ].filter(Boolean).join(' | ') || 'Contact form submission from website';

    const crmPayload = {
      contactPerson: data.name,
      email: data.email || '',
      countryCode,
      phone,
      requirement,
    };

    console.log('CRM payload (contact):', JSON.stringify(crmPayload));

    const crmRes = await fetch('https://crmapi.mtouchlabs.com/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(crmPayload),
    });

    const crmText = await crmRes.text();
    console.log('CRM response status (contact):', crmRes.status);
    console.log('CRM response body (contact):', crmText);

    if (!crmRes.ok) {
      console.error('CRM submission failed (contact):', crmRes.status, crmText);
    }
  } catch (crmErr) {
    console.error('CRM submission error (contact):', crmErr);
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const isPartial = !!data.partial;

    // Partial leads only need name + (email OR phone) — full submissions require
    // name, email, AND a selected service (`interest`). Service is mandatory on
    // the full form so every lead carries a clear intent for the sales team.
    if (isPartial) {
      if (!data.name || (!data.email && !data.mobile)) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
    } else if (!data.name || !data.email || !data.interest || !String(data.interest).trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ═══ Push lead to CRM (fire-and-forget, same pattern as /api/estimate) ═══
    // Runs for both partial and full submissions so we never miss a lead.
    pushToCrm({
      name: data.name,
      email: data.email,
      countryCode: data.countryCode,
      mobile: data.mobile,
      company: data.company,
      subject: data.subject,
      interest: data.interest,
      message: data.message,
    });

    // For partial leads, stop here — skip the notification email so we don't
    // spam the inbox every time someone types in a field.
    if (isPartial) {
      return NextResponse.json({ success: true, partial: true });
    }

    const recipients = getRecipients();
    if (recipients.length === 0) {
      return NextResponse.json({ error: 'No recipients configured' }, { status: 500 });
    }

    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'mTouch Labs <onboarding@resend.dev>',
        to: recipients,
        subject: `📩 New Contact: ${data.name} — ${data.interest || 'General Inquiry'}`,
        replyTo: data.email,
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
  <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
    <div style="font-size:36px;margin-bottom:8px;">📩</div>
    <h1 style="margin:0;font-size:22px;color:#fff;">New Contact Inquiry</h1>
    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,.7);">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
  </div>
  <div style="background:#fff;border-radius:0 0 16px 16px;box-shadow:0 4px 24px rgba(0,0,0,.06);">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Name</td><td style="padding:14px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">${data.name}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Email</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color:#6366f1;">${data.email}</a></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Phone</td><td style="padding:14px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">+${data.countryCode || '91'} ${data.mobile || ''}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Interested In</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><span style="background:#eef2ff;color:#6366f1;padding:4px 12px;border-radius:12px;font-size:13px;">${data.interest || '—'}</span></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;">Message</td><td style="padding:14px 16px;font-size:14px;color:#374151;line-height:1.7;">${data.message || '—'}</td></tr>
    </table>
    <div style="padding:16px;background:#fafbfc;border-radius:0 0 16px 16px;"><p style="margin:0;font-size:13px;color:#9ca3af;">💡 Respond within 2 hours for best conversion rate.</p></div>
  </div>
</div></body></html>`,
      });
    } catch (sendErr) {
      console.error('Resend send error:', sendErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}