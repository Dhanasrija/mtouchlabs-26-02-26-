"use client";

/* ════════════════════════════════════════════════════════════
   HeroLeadForm — the only client component on the page.
   ────────────────────────────────────────────────────────────
   Fields, per brief: Name · Email · Phone (+ country code) ·
   Message · Consent. Nothing else.

   No form library, no validation library, no phone-input
   package — ~2KB on top of React, so it never delays the hero.

   ⚠️ /api/contact rejects a non-partial submission that has no
   `interest`. Since the service picker was removed from this
   form, we send a fixed interest so the lead still reaches the
   sales inbox with its origin attached, instead of 400-ing.
   ════════════════════════════════════════════════════════════ */

import { useState } from "react";

const CODES = ["+1", "+44", "+61", "+91", "+971", "+65", "+49"];

type State = "idle" | "sending" | "done" | "error";

const I = {
  user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.4" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  phone: <><path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.4 19.4 0 0 1-8.5-3A19.1 19.1 0 0 1 4.4 13a19.4 19.4 0 0 1-3-8.5A2 2 0 0 1 3.4 2.3H6a2 2 0 0 1 2 1.7 12.5 12.5 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L7.1 10a15.7 15.7 0 0 0 5.9 5.9l1.1-1.1a2 2 0 0 1 2.1-.5 12.5 12.5 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" /></>,
  chat: <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /><path d="M8.5 10h7M8.5 13.5h4" /></>,
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  check: <><circle cx="12" cy="12" r="9.5" /><path d="m8 12.3 2.7 2.7L16 9.7" /></>,
};
const Ico = ({ d, s = 18 }: { d: React.ReactNode; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{d}</svg>
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
      message: String(fd.get("message") || "").trim(),
      interest: "Software Development — USA page",
      subject: "USA page — hero enquiry",
    };

    if (!payload.name || !payload.email) {
      setErr("Please add your name and email.");
      setState("error");
      return;
    }
    if (!fd.get("consent")) {
      setErr("Please agree to the terms so we can reply to you.");
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
        <span className="uf-badge"><Ico d={I.chat} s={22} /></span>
        <div>
          <h2 className="uf-title">Book a Free Consultation</h2>
          <p className="uf-sub">Fill in the form below to get started on your project.</p>
        </div>
      </div>

      <div className="uf-field">
        <label htmlFor="uf-name">Name</label>
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

      <div className="uf-field">
        <label htmlFor="uf-mobile">Phone</label>
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

      <div className="uf-field">
        <label htmlFor="uf-message">Message</label>
        <div className="uf-input uf-input--area">
          <textarea id="uf-message" name="message" rows={3} placeholder="Tell us about your project" />
        </div>
      </div>

      <div className="uf-consent">
        <input id="uf-consent" name="consent" type="checkbox" required />
        <label htmlFor="uf-consent">
          I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener">Terms and Conditions</a> and{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>, and consent to being contacted
          about my enquiry.
        </label>
      </div>

      {state === "error" && <p className="uf-err" role="alert">{err}</p>}

      <button type="submit" className="uf-btn" disabled={state === "sending"}>
        <Ico d={I.arrow} s={19} />
        {state === "sending" ? "Sending…" : "Submit Now"}
      </button>
    </form>
  );
}
