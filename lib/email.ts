// app/lib/email.ts
// Shared Resend instance + email templates for all forms

import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

// Get notification recipients from env
export function getRecipients(): string[] {
  const emails = process.env.NOTIFICATION_EMAILS || '';
  return emails.split(',').map(e => e.trim()).filter(Boolean);
}

// From address — use onboarding@resend.dev for testing
// After domain verification, switch to info@mtouchlabs.com
export const FROM_EMAIL = process.env.FROM_EMAIL || 'mTouch Labs <onboarding@resend.dev>';

// ─── Email Templates ────────────────────────────────

function baseTemplate(title: string, emoji: string, color: string, rows: { label: string; value: string }[], footerNote?: string) {
  const rowsHtml = rows.map(r => `
    <tr>
      <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;width:140px;vertical-align:top;border-bottom:1px solid #f3f4f6;">${r.label}</td>
      <td style="padding:12px 16px;font-size:15px;color:#1a1a2e;border-bottom:1px solid #f3f4f6;">${r.value || '<span style="color:#d1d5db">—</span>'}</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,${color},${color}dd);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <div style="font-size:36px;margin-bottom:8px;">${emoji}</div>
      <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">${title}</h1>
      <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,.7);">Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST</p>
    </div>

    <!-- Body -->
    <div style="background:#fff;border-radius:0 0 16px 16px;padding:0;box-shadow:0 4px 24px rgba(0,0,0,.06);">
      <table style="width:100%;border-collapse:collapse;">
        ${rowsHtml}
      </table>
      ${footerNote ? `<div style="padding:20px;background:#fafbfc;border-radius:0 0 16px 16px;"><p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">${footerNote}</p></div>` : ''}
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:24px 0 0;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">This email was sent from mtouchlabs.com form submission</p>
    </div>
  </div>
</body>
</html>`;
}

// ── Contact Form Email ──
export function contactEmailHtml(data: {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  interest: string;
  message: string;
}) {
  return baseTemplate('New Contact Inquiry', '📩', '#6366f1', [
    { label: 'Name', value: data.name },
    { label: 'Email', value: `<a href="mailto:${data.email}" style="color:#6366f1;text-decoration:none;">${data.email}</a>` },
    { label: 'Phone', value: `+${data.countryCode} ${data.mobile}` },
    { label: 'Interested In', value: `<span style="display:inline-block;background:#eef2ff;color:#6366f1;padding:4px 12px;border-radius:12px;font-size:13px;font-weight:500;">${data.interest}</span>` },
    { label: 'Message', value: `<div style="background:#f9fafb;padding:12px 16px;border-radius:8px;font-size:14px;line-height:1.7;color:#374151;">${data.message}</div>` },
  ], '💡 Respond within 2 hours for the best conversion rate.');
}

// ── Request Quote Email ──
export function quoteEmailHtml(data: {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  service: string;
  budget: string;
  message: string;
}) {
  return baseTemplate('New Quote Request', '💰', '#0C1C32', [
    { label: 'Name', value: data.name },
    { label: 'Email', value: `<a href="mailto:${data.email}" style="color:#3E8CFB;text-decoration:none;">${data.email}</a>` },
    { label: 'Phone', value: `+${data.countryCode} ${data.mobile}` },
    { label: 'Service', value: `<span style="display:inline-block;background:#e0f2fe;color:#0369a1;padding:4px 12px;border-radius:12px;font-size:13px;font-weight:500;">${data.service}</span>` },
    { label: 'Budget', value: `<span style="display:inline-block;background:#dcfce7;color:#166534;padding:4px 12px;border-radius:12px;font-size:13px;font-weight:600;">${data.budget}</span>` },
    { label: 'Message', value: `<div style="background:#f9fafb;padding:12px 16px;border-radius:8px;font-size:14px;line-height:1.7;color:#374151;">${data.message}</div>` },
  ], '🔥 High-intent lead — respond ASAP!');
}

// ── Career Application Email ──
export function careerEmailHtml(data: {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  role: string;
  message: string;
  resumeFilename?: string;
}) {
  return baseTemplate('New Job Application', '👤', '#7c3aed', [
    { label: 'Candidate', value: data.name },
    { label: 'Email', value: `<a href="mailto:${data.email}" style="color:#7c3aed;text-decoration:none;">${data.email}</a>` },
    { label: 'Phone', value: `+${data.countryCode} ${data.mobile}` },
    { label: 'Role', value: `<span style="display:inline-block;background:#f3e8ff;color:#7c3aed;padding:4px 12px;border-radius:12px;font-size:13px;font-weight:500;">${data.role}</span>` },
    { label: 'Resume', value: data.resumeFilename ? `📎 ${data.resumeFilename} (attached)` : '<span style="color:#d1d5db">Not uploaded</span>' },
    { label: 'Message', value: `<div style="background:#f9fafb;padding:12px 16px;border-radius:8px;font-size:14px;line-height:1.7;color:#374151;">${data.message}</div>` },
  ]);
}