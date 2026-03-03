import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, topic, message, turnstileToken } = body;

    /* ---- Validate required fields ---- */
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    /* ---- Verify Cloudflare Turnstile ---- */
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY not set");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken || "",
      }),
    });

    const turnstileData = await turnstileRes.json();
    if (!turnstileData.success) {
      return NextResponse.json({ error: "CAPTCHA verification failed. Please try again." }, { status: 403 });
    }

    /* ---- Send email via Resend ---- */
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

const toEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 28px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">💬 New Chat Widget Inquiry</h1>
          <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Received from mtouchlabs.com</p>
        </div>
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; width: 100px; vertical-align: top;">Topic</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">
                <span style="background: #eff6ff; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">${topic || "General"}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${message}</td>
            </tr>
          </table>
        </div>
        <div style="background: #f8fafc; padding: 16px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="color: #94a3b8; font-size: 11px; margin: 0;">This message was sent from the mTouch Labs website chat widget</p>
        </div>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `💬 Chat Widget: ${topic || "General Inquiry"} — ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chat widget API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}