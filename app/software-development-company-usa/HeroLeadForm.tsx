"use client";

/* ════════════════════════════════════════════════════════════
   HeroLeadForm — the only client component on the page.
   ────────────────────────────────────────────────────────────
   Kept deliberately small: no form library, no validation
   library, no phone-input package, no animation library. It is
   ~2KB of JS on top of React, so it does not delay the hero.
   Everything else on this page stays a server component.

   Posts to the existing /api/contact route. That route requires
   name + email + interest for a full submission, which is why
   the service <select> is mandatory here.
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
  "Offshore Development Team",
  "Something else",
];

type State = "idle" | "sending" | "done" | "error";

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
      <div className="usa-form usa-form--done" role="status">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" /><path d="m8 12.3 2.7 2.7L16 9.7" />
        </svg>
        <h3 className="usa-formTitle">Thanks — that&apos;s with us.</h3>
        <p className="usa-formNote">A software engineer, not a sales rep, will read it and reply within one business day.</p>
      </div>
    );
  }

  return (
    <form className="usa-form" onSubmit={onSubmit} noValidate>
      <h2 className="usa-formTitle">Talk to a Software Expert</h2>
      <p className="usa-formSub">Tell us what you&apos;re building. We&apos;ll reply within one business day.</p>

      <div className="usa-field">
        <label htmlFor="lf-name">Name</label>
        <input id="lf-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </div>

      <div className="usa-field">
        <label htmlFor="lf-email">Work email</label>
        <input id="lf-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
      </div>

      <div className="usa-field usa-fieldPhone">
        <div>
          <label htmlFor="lf-cc">Code</label>
          <select id="lf-cc" name="countryCode" defaultValue="+1">
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+91">+91</option>
            <option value="+971">+971</option>
          </select>
        </div>
        <div>
          <label htmlFor="lf-mobile">Phone (optional)</label>
          <input id="lf-mobile" name="mobile" type="tel" autoComplete="tel" inputMode="tel" placeholder="555 000 0000" />
        </div>
      </div>

      <div className="usa-field">
        <label htmlFor="lf-interest">What do you need?</label>
        <select id="lf-interest" name="interest" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="usa-field">
        <label htmlFor="lf-message">Project details (optional)</label>
        <textarea id="lf-message" name="message" rows={3} placeholder="What are you trying to build, and by when?" />
      </div>

      {state === "error" && <p className="usa-formErr" role="alert">{err}</p>}

      <button type="submit" className="usa-formBtn" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Talk to a Software Expert"}
      </button>

      <p className="usa-formFine">
        We&apos;ll only use this to reply to your enquiry. No newsletter, no reselling — see our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}
