import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/*
 * POST /api/chat-lead-notify
 *
 * This route does TWO things:
 *   1. Forwards the lead to xcrmapi.mtouchlabs.com/lead (server-side, no CORS issues)
 *   2. Sends email notification via Resend
 *
 * Place at: app/api/chat-lead-notify/route.ts
 *
 * ENV VARS (.env.local):
 *   RESEND_API_KEY=re_xxxxxxxxxxxx
 *   NOTIFY_EMAIL=team@mtouchlabs.com
 *
 * Install: npm install resend
 */

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { contactPerson, email, countryCode, phone, requirement } = body;

    if (!contactPerson || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    /* ── 1. Submit to CRM API (server-side = no CORS) ── */
    let crmOk = false;
    try {
      const crmRes = await fetch("https://xcrmapi.mtouchlabs.com/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactPerson, email, countryCode, phone, requirement }),
      });
      crmOk = crmRes.ok;
      if (!crmOk) {
        const errText = await crmRes.text().catch(() => "");
        console.error("CRM API error:", crmRes.status, errText);
      }
    } catch (crmErr) {
      console.error("CRM API network error:", crmErr);
    }

    /* ── 2. Send email via Resend ── */
    let emailOk = false;
    try {
      const { error } = await resend.emails.send({
        from: "mTouch AI <ai@mtouchlabs.com>",
        to: [process.env.NOTIFY_EMAIL || "team@mtouchlabs.com"],
        replyTo: email,
        subject: `🤖 New Chat Lead: ${contactPerson} — ${requirement || "General Inquiry"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h2 style="color: #fff; margin: 0; font-size: 22px;">🤖 New Chat Widget Lead</h2>
              <p style="color: #e0e7ff; margin: 8px 0 0; font-size: 14px;">A visitor submitted their details via the AI Chat Widget</p>
            </div>
            <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 140px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${contactPerson}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="tel:${countryCode}${phone}" style="color: #6366f1; text-decoration: none;">${countryCode} ${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #374151;">Requirement</td>
                  <td style="padding: 12px 0; color: #1f2937;">${requirement || "Not specified"}</td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; font-size: 13px; color: #6b7280;">
                  📌 <strong>Source:</strong> Chat Widget (AI Assistant)<br/>
                  🕐 <strong>Time:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST<br/>
                  ${crmOk ? "✅ CRM: Saved successfully" : "⚠️ CRM: Failed to save (check API)"}
                </p>
              </div>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
      } else {
        emailOk = true;
      }
    } catch (emailErr) {
      console.error("Resend network error:", emailErr);
    }

    /* At least one must succeed */
    if (crmOk || emailOk) {
      return NextResponse.json({ success: true, crm: crmOk, email: emailOk });
    }

    return NextResponse.json(
      { error: "Both CRM and email failed", crm: crmOk, email: emailOk },
      { status: 500 }
    );
  } catch (error) {
    console.error("Chat lead route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}