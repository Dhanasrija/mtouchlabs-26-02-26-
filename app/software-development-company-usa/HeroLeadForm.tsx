"use client";

/* ════════════════════════════════════════════════════════════
   HeroLeadForm — the only client component on the page.
   ────────────────────────────────────────────────────────────
   No form library, no validation library, no phone-input
   package, no animation library — roughly 2KB on top of React,
   so it never delays the hero paint.

   Posts to the existing /api/contact route, which requires
   name + email + interest for a full submission. That is why
   the service <select> is mandatory.
   ════════════════════════════════════════════════════════════ */

import { useState } from "react";

const SERVICES = [
  "Custom Software Development",
  "Enterprise Software Development",
  "AI Software Development",
  "SaaS Product Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud Software Development",
  "Software Modernization",
  "UI/UX & Product Design",
  "Offshore Development Team",
  "Something else",
];

const CODES = ["+1", "+44", "+61", "+91", "+971", "+65", "+49"];

type State = "idle" | "sending" | "done" | "error";

/* ── inline icons: one stroke weight, sized to the field row ── */
const I = {
  user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.4" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  phone: <><path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.4 19.4 0 0 1-8.5-3A19.1 19.1 0 0 1 4.4 13a19.4 19.4 0 0 1-3-8.5A2 2 0 0 1 3.4 2.3H6a2 2 0 0 1 2 1.7 12.5 12.5 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L7.1 10a15.7 15.7 0 0 0 5.9 5.9l1.1-1.1a2 2 0 0 1 2.1-.5 12.5 12.5 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" /></>,
  whatsapp: <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /></>,
  message: <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /><path d="M8.5 10h7M8.5 13.5h4" /></>,
  shield: <><path d="M12 21.5s7.5-3.6 7.5-9.4V5.6L12 2.6 4.5 5.6v6.5c0 5.8 7.5 9.4 7.5 9.4Z" /><path d="m9 12 2 2 4-4" /></>,
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  check: <><circle cx="12" cy="12" r="9.5" /><path d="m8 12.3 2.7 2.7L16 9.7" /></>,
};
const Ico = ({ d, s = 18, cls = "" }: { d: React.ReactNode; s?: number; cls?: string }) => (
  <svg className={cls} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{d}</svg>
);

export default function HeroLeadForm() {
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      countryCode: String(fd.get("countryCode") || "+1"),
      mobile: String(fd.get("mobile") || "").trim(),
      whatsappCode: String(fd.get("whatsappCode") || ""),
      interest: String(fd.get("interest") || ""),
      message: String(fd.get("message") || "").trim(),
      subject: "USA page — hero enquiry",
    };
    if (!payload.name || !payload.email || !payload.interest) {
      setErr("Name, email and a service are required.");
      setState("error");
      return;
    }
    setState("sending");
    setErr("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Something went wrong.");
      setState("done");
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="uf" role="status">
        <div className="uf-done">
          <span className="uf-doneIcon"><Ico d={I.check} s={30} /></span>
          <h3 className="uf-title">Thanks — that&apos;s with us.</h3>
          <p className="uf-sub">A software engineer, not a sales rep, will read it and reply within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="uf" onSubmit={onSubmit} noValidate>
      <div className="uf-head">
        <span className="uf-badge"><Ico d={I.message} s={22} /></span>
        <div>
          <h2 className="uf-title">Talk to a Software Expert</h2>
          <p className="uf-sub">Tell us what you&apos;re building. We&apos;ll reply within one business day.</p>
        </div>
      </div>

      <div className="uf-field">
        <label htmlFor="uf-name">Full Name</label>
        <div className="uf-input"><span className="uf-ic"><Ico d={I.user} /></span>
          <input id="uf-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </div>
      </div>

      <div className="uf-field">
        <label htmlFor="uf-email">Email</label>
        <div className="uf-input"><span className="uf-ic"><Ico d={I.mail} /></span>
          <input id="uf-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </div>
      </div>

      <div className="uf-row">
        <div className="uf-field">
          <label htmlFor="uf-mobile">Phone Number <span className="uf-opt">(optional)</span></label>
          <div className="uf-phone">
            <div className="uf-input uf-input--code"><span className="uf-ic"><Ico d={I.phone} s={16} /></span>
              <select id="uf-cc" name="countryCode" defaultValue="+1" aria-label="Country code">
                {CODES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="uf-input">
              <input id="uf-mobile" name="mobile" type="tel" autoComplete="tel" inputMode="tel" placeholder="555 000 0000" />
            </div>
          </div>
        </div>
        <div className="uf-field uf-field--wa">
          <label htmlFor="uf-wa">WhatsApp <span className="uf-opt">(optional)</span></label>
          <div className="uf-input uf-input--code uf-input--wa"><span className="uf-ic uf-ic--wa"><Ico d={I.whatsapp} s={16} /></span>
            <select id="uf-wa" name="whatsappCode" defaultValue="" aria-label="WhatsApp country code">
              <option value="">—</option>
              {CODES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="uf-field">
        <label htmlFor="uf-interest">What do you need?</label>
        <div className="uf-input">
          <select id="uf-interest" name="interest" required defaultValue="">
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="uf-field">
        <label htmlFor="uf-message">Project Details <span className="uf-opt">(optional)</span></label>
        <div className="uf-input uf-input--area">
          <textarea id="uf-message" name="message" rows={3} placeholder="What are you trying to build, and by when?" />
        </div>
      </div>

      {state === "error" && <p className="uf-err" role="alert">{err}</p>}

      <button type="submit" className="uf-btn" disabled={state === "sending"}>
        <Ico d={I.arrow} s={19} />
        {state === "sending" ? "Sending…" : "Talk to a Software Expert"}
      </button>

      <p className="uf-fine">
        <span className="uf-fineIc"><Ico d={I.shield} s={15} /></span>
        <span>We&apos;ll only use this to reply to your enquiry. No newsletter, no reselling — see our{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span>
      </p>
    </form>
  );
}
