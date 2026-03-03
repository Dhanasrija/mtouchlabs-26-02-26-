import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO: string = process.env.CONTACT_EMAIL || "venky@mtouchlabs.com";

function buildHtml(d: {
  phone: string; email: string; name: string; companyType: string;
  projectType: string; platform: string; features: string[];
  budget: string; timeline: string; partial: boolean;
}) {
  const ts = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const pills = d.features.length > 0
    ? d.features.map(f => `<span style="display:inline-block;background:hsl(190 90% 55%/0.1);border:1px solid hsl(190 90% 55%/0.2);color:hsl(190 90% 55%);padding:5px 14px;border-radius:20px;font-size:12px;font-weight:600;margin:3px;">${f}</span>`).join("")
    : '<span style="color:#777;font-size:12px;font-style:italic;">Not yet selected</span>';
  const emailRow = d.email ? `<div style="margin-top:6px;"><a href="mailto:${d.email}" style="color:#888;font-size:13px;text-decoration:none;">${d.email}</a></div>` : "";
  const rows = [["Name", d.name], ["Company", d.companyType], ["Service", d.projectType], ["Platform", d.platform], ["Budget", d.budget], ["Timeline", d.timeline]]
    .map(([l, v]) => `<tr><td style="padding:12px 0;color:#888;width:120px;border-bottom:1px solid rgba(255,255,255,0.05);font-size:13px;font-weight:500;">${l}</td><td style="padding:12px 0;font-weight:700;border-bottom:1px solid rgba(255,255,255,0.05);font-size:14px;color:#e8e8e8;">${v}</td></tr>`).join("");
  const banner = d.partial
    ? '<div style="background:linear-gradient(135deg,rgba(234,179,8,0.08),rgba(234,140,8,0.08));border:1px solid rgba(234,179,8,0.2);border-radius:12px;padding:14px;text-align:center;margin-bottom:20px;"><span style="color:#eab308;font-weight:700;font-size:13px;">Partial Lead \u2014 Contact captured, wizard not completed</span></div>'
    : "";

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head><body style="margin:0;padding:20px;background:#111;font-family:Segoe UI,Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#0f1219;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
<div style="background:linear-gradient(135deg,hsl(190 90% 55%),hsl(270 80% 65%));padding:32px 36px;">
<h1 style="margin:0;font-size:22px;color:#0a0e14;font-weight:800;">${d.partial ? "New Partial Lead" : "New Quote Request"}</h1>
<p style="margin:10px 0 0;color:rgba(10,14,20,0.7);font-size:14px;">mTouchLabs \u2014 Request Quote Wizard</p></div>
<div style="padding:32px 36px;">${banner}
<div style="background:linear-gradient(135deg,rgba(34,211,238,0.06),rgba(139,92,246,0.06));border:1px solid rgba(34,211,238,0.15);border-radius:16px;padding:24px;text-align:center;margin-bottom:28px;">
<div style="font-size:11px;color:hsl(190 90% 55%);text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;font-weight:700;">Contact</div>
<div style="font-size:20px;font-weight:800;color:#e8e8e8;margin-bottom:8px;">${d.name}</div>
<a href="tel:${d.phone}" style="font-size:22px;font-weight:800;color:hsl(190 90% 55%);text-decoration:none;">${d.phone}</a>${emailRow}</div>
<table style="width:100%;border-collapse:collapse;">${rows}</table>
<div style="margin-top:20px;"><div style="color:#888;margin-bottom:10px;font-size:13px;font-weight:500;">Features (${d.features.length}):</div><div>${pills}</div></div>
<hr style="border:none;border-top:1px solid rgba(255,255,255,0.05);margin:28px 0;">
<div style="text-align:center;">
<a href="tel:${d.phone}" style="background:linear-gradient(135deg,hsl(190 90% 55%),hsl(270 80% 65%));color:#0a0e14;padding:16px 40px;border-radius:14px;text-decoration:none;font-weight:700;display:inline-block;font-size:14px;">Call ${d.name}</a></div>
<p style="font-size:11px;color:#666;text-align:center;margin-top:24px;">${ts} IST</p></div></div>
</body></html>`;
}

function buildText(d: any) {
  return `${d.partial ? "PARTIAL LEAD" : "NEW QUOTE REQUEST"} - mTouchLabs\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "Not provided"}\nCompany: ${d.companyType}\nService: ${d.projectType}\nPlatform: ${d.platform}\nFeatures: ${(d.features || []).join(", ") || "Not selected"}\nBudget: ${d.budget}\nTimeline: ${d.timeline}\n\nSubmitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ═══ Cloudflare Turnstile verification ═══
    const turnstileToken = body['cf-turnstile-response'];
    if (turnstileToken) {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
      }
    }

    const { phone, email, name, companyType, projectType, platform, features, budget, timeline, partial } = body;
    const data = { phone, email, name: name || "Unknown", companyType: companyType || "Not specified", projectType: projectType || "Not yet selected", platform: platform || "Not yet selected", features: features || [], budget: budget || "Not yet selected", timeline: timeline || "Not yet selected", partial: !!partial };
    const pre = partial ? "Lead: " : "Quote: ";
    const subject = `${pre}${data.name} | ${data.phone}${!partial ? " | " + (data.projectType || "Project") : ""}`;
    await resend.emails.send({ from: "mTouch Labs <onboarding@resend.dev>", replyTo: email || undefined, to: TO, subject, html: buildHtml(data), text: buildText(data) });

    // Send to CRM
    try {
      const crmRes = await fetch("https://xcrmapi.mtouchlabs.com/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactPerson: data.name,
          email: data.email || "",
          countryCode: data.phone?.startsWith("+") ? data.phone.split(" ")[0] : "+91",
          phone: data.phone?.replace(/^\+\d+\s*/, "") || "",
          requirement: data.projectType || "",
        }),
      });
      const crmData = await crmRes.json();
      console.log("CRM response status:", crmRes.status);
      console.log("CRM response body:", crmData);
    } catch (crmErr) {
      console.error("CRM submission error:", crmErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}