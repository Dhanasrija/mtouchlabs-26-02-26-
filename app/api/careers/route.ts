// app/api/careers/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getRecipients(): string[] {
  return (process.env.NOTIFICATION_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean);
}

export async function POST(req: Request) {
  try {
    let name = '', email = '', countryCode = '91', mobile = '', role = '', message = '';
    let resumeFilename = '';
    const attachments: { filename: string; content: Buffer }[] = [];

    // Detect content type — handle both JSON and FormData
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      // JSON submission
      const data = await req.json();
      name = data.name || '';
      email = data.email || '';
      countryCode = data.countryCode || '91';
      mobile = data.mobile || '';
      role = data.role || '';
      message = data.message || '';
    } else {
      // FormData submission (with file upload)
      const formData = await req.formData();
      name = (formData.get('name') as string) || '';
      email = (formData.get('email') as string) || '';
      countryCode = (formData.get('countryCode') as string) || '91';
      mobile = (formData.get('mobile') as string) || '';
      role = (formData.get('role') as string) || '';
      message = (formData.get('message') as string) || '';

      const resumeFile = formData.get('resume') as File | null;
      if (resumeFile && resumeFile.size > 0) {
        const arrayBuffer = await resumeFile.arrayBuffer();
        resumeFilename = resumeFile.name;
        attachments.push({
          filename: resumeFile.name,
          content: Buffer.from(arrayBuffer),
        });
      }
    }

    if (!name || !email) {
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
        subject: `👤 Job Application: ${name} — ${role || 'General'}`,
        replyTo: email,
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 20px;">
  <div style="background:linear-gradient(135deg,#7c3aed,#a855f7);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
    <div style="font-size:36px;margin-bottom:8px;">👤</div>
    <h1 style="margin:0;font-size:22px;color:#fff;">New Job Application</h1>
    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,.7);">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
  </div>
  <div style="background:#fff;border-radius:0 0 16px 16px;box-shadow:0 4px 24px rgba(0,0,0,.06);">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Candidate</td><td style="padding:14px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">${name}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Email</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Phone</td><td style="padding:14px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">+${countryCode} ${mobile}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Role</td><td style="padding:14px 16px;border-bottom:1px solid #f3f4f6;"><span style="background:#f3e8ff;color:#7c3aed;padding:4px 12px;border-radius:12px;font-size:13px;">${role || '—'}</span></td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;border-bottom:1px solid #f3f4f6;">Resume</td><td style="padding:14px 16px;font-size:14px;border-bottom:1px solid #f3f4f6;">${resumeFilename ? '📎 ' + resumeFilename + ' (attached)' : '<span style="color:#d1d5db">Not uploaded</span>'}</td></tr>
      <tr><td style="padding:14px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;width:130px;">Message</td><td style="padding:14px 16px;font-size:14px;color:#374151;line-height:1.7;">${message || '—'}</td></tr>
    </table>
  </div>
</div></body></html>`,
        attachments: attachments.length > 0 ? attachments : undefined,
      });
    } catch (sendErr) {
      console.error('Resend send error:', sendErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Careers API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}