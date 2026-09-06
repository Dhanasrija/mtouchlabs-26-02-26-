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

export default function HeroLeadForm({ location = "USA" }: { location?: string }) {
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
      /* Attribution follows the page. This was hardcoded to "USA"; with
         the form now on every location page, a Dubai or Canada enquiry
         would otherwise have landed tagged as a USA lead. */
      interest: `Software Development — ${location} page`,
      subject: `${location} page — hero enquiry`,
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
      <>
      <style dangerouslySetInnerHTML={{ __html: `
/* These styles travel WITH the component.
   They used to live in the USA page's USA_CSS string, so the moment this
   form was dropped onto another location page it rendered with no card,
   no rounded inputs and an unstyled button. The custom properties are
   declared on .uf for the same reason — they were defined on .usa-page,
   a class no other location page carries. */
.uf{
  --b:var(--color-signature-blue,#3E8CFB);
  --b-dark:var(--color-carbon-black,#0D1117);
  --b-soft:var(--color-signature-blue,#3E8CFB);
  --b-tint:rgba(62,140,251,.10);
  --b-line:rgba(62,140,251,.26);
  --ink:var(--color-carbon-black,#0D1117);
  --ink-2:var(--color-text,#222222);
  --ink-3:var(--color-slate-grey,#777777);
  font-family:var(--f-body),'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
}
.uf *,.uf *::before,.uf *::after{box-sizing:border-box}
.uf .uf-title{font-family:var(--f-display),'Sora',sans-serif}
.uf{background:#fff;border:1px solid var(--b-line);border-radius:20px;padding:1.75rem 1.7rem;box-shadow:0 4px 14px rgba(13,17,23,.05),0 22px 50px rgba(62,140,251,.12)}
.uf-head{display:flex;gap:.9rem;align-items:flex-start;margin-bottom:1.35rem}
.uf-badge{width:52px;height:52px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:14px;background:var(--b);color:#fff;box-shadow:0 8px 18px rgba(62,140,251,.28)}
.uf-title{font-size:1.28rem;font-weight:700;color:var(--ink);margin:0 0 .25rem;letter-spacing:-.02em;line-height:1.25}
.uf-sub{font-size:.86rem;color:var(--ink-3);margin:0;line-height:1.55}
.uf-field{margin-bottom:.9rem;min-width:0}
.uf-field label{display:block;font-size:.8rem;font-weight:700;color:var(--ink-2);margin-bottom:.35rem}
.uf-opt{font-weight:500;color:var(--ink-3)}
.uf-input{display:flex;align-items:center;gap:.5rem;border:1px solid rgba(62,140,251,.26);border-radius:11px;background:#fff;padding:0 .8rem;height:46px;transition:border-color .16s,box-shadow .16s}
.uf-input:focus-within{border-color:var(--b);box-shadow:0 0 0 3px rgba(62,140,251,.13)}
.uf-ic{display:flex;color:#777777;flex-shrink:0}
.uf-input:focus-within .uf-ic{color:var(--b)}
.uf-input input,.uf-input select,.uf-input textarea,.uf-input input:hover,.uf-input select:hover,.uf-input textarea:hover,.uf-input input:focus,.uf-input select:focus,.uf-input textarea:focus,.uf-input input:active,.uf-input select:active,.uf-input textarea:active{flex:1;min-width:0;width:100%;border:0!important;outline:0!important;box-shadow:none!important;background-color:transparent!important;font-family:inherit;font-size:.92rem;line-height:1.5;color:var(--ink);-webkit-appearance:none;appearance:none;border-radius:0;margin:0}
.uf-input:hover{border-color:var(--b-soft)}
.uf-input select{cursor:pointer;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%233E8CFB' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right center;padding-right:1.3rem;text-overflow:ellipsis}
.uf-input input::placeholder,.uf-input textarea::placeholder{color:#777777}
.uf-input--area{height:auto;padding:.7rem .8rem;align-items:flex-start}
.uf-input--area textarea{resize:vertical;min-height:74px}
.uf-input--code{padding-right:.55rem;flex:0 0 auto}
.uf-phone{display:grid;grid-template-columns:92px 1fr;gap:.5rem}
.uf-btn{width:100%;margin-top:.4rem;display:flex;align-items:center;justify-content:center;gap:.55rem;padding:.95rem 1.2rem;border:0;border-radius:12px;background:var(--b);color:#fff;font-family:inherit;font-size:.97rem;font-weight:700;cursor:pointer;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,background .2s}
.uf-btn:hover:not(:disabled){filter:brightness(.93);transform:translateY(-2px);box-shadow:0 12px 26px rgba(62,140,251,.32)}
.uf-btn:disabled{opacity:.65;cursor:progress}
.uf-err{margin:.55rem 0 0;font-size:.83rem;color:#B91C1C;font-weight:600}
.uf-consent{display:flex;gap:.6rem;align-items:flex-start;margin:.25rem 0 .2rem}
.uf-consent input[type="checkbox"]{flex-shrink:0;width:17px;height:17px;margin-top:.15rem;accent-color:var(--b);cursor:pointer}
.uf-consent label{font-size:.78rem;font-weight:400;color:var(--ink-3);line-height:1.6;margin:0;cursor:pointer}
.uf-consent a{color:var(--b);font-weight:600}
.uf-done{text-align:center;padding:2.4rem .5rem}
.uf-doneIcon{display:inline-flex;color:#059669;margin-bottom:.7rem}
` }} />
      <div className="uf" role="status">
        <div className="uf-done">
          <span className="uf-doneIcon"><Ico d={I.check} s={30} /></span>
          <h3 className="uf-title">Thanks — that&apos;s with us.</h3>
          <p className="uf-sub">A software engineer, not a sales rep, will read it and reply within one business day.</p>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
/* These styles travel WITH the component.
   They used to live in the USA page's USA_CSS string, so the moment this
   form was dropped onto another location page it rendered with no card,
   no rounded inputs and an unstyled button. The custom properties are
   declared on .uf for the same reason — they were defined on .usa-page,
   a class no other location page carries. */
.uf{
  --b:var(--color-signature-blue,#3E8CFB);
  --b-dark:var(--color-carbon-black,#0D1117);
  --b-soft:var(--color-signature-blue,#3E8CFB);
  --b-tint:rgba(62,140,251,.10);
  --b-line:rgba(62,140,251,.26);
  --ink:var(--color-carbon-black,#0D1117);
  --ink-2:var(--color-text,#222222);
  --ink-3:var(--color-slate-grey,#777777);
  font-family:var(--f-body),'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
}
.uf *,.uf *::before,.uf *::after{box-sizing:border-box}
.uf .uf-title{font-family:var(--f-display),'Sora',sans-serif}
.uf{background:#fff;border:1px solid var(--b-line);border-radius:20px;padding:1.75rem 1.7rem;box-shadow:0 4px 14px rgba(13,17,23,.05),0 22px 50px rgba(62,140,251,.12)}
.uf-head{display:flex;gap:.9rem;align-items:flex-start;margin-bottom:1.35rem}
.uf-badge{width:52px;height:52px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:14px;background:var(--b);color:#fff;box-shadow:0 8px 18px rgba(62,140,251,.28)}
.uf-title{font-size:1.28rem;font-weight:700;color:var(--ink);margin:0 0 .25rem;letter-spacing:-.02em;line-height:1.25}
.uf-sub{font-size:.86rem;color:var(--ink-3);margin:0;line-height:1.55}
.uf-field{margin-bottom:.9rem;min-width:0}
.uf-field label{display:block;font-size:.8rem;font-weight:700;color:var(--ink-2);margin-bottom:.35rem}
.uf-opt{font-weight:500;color:var(--ink-3)}
.uf-input{display:flex;align-items:center;gap:.5rem;border:1px solid rgba(62,140,251,.26);border-radius:11px;background:#fff;padding:0 .8rem;height:46px;transition:border-color .16s,box-shadow .16s}
.uf-input:focus-within{border-color:var(--b);box-shadow:0 0 0 3px rgba(62,140,251,.13)}
.uf-ic{display:flex;color:#777777;flex-shrink:0}
.uf-input:focus-within .uf-ic{color:var(--b)}
.uf-input input,.uf-input select,.uf-input textarea,.uf-input input:hover,.uf-input select:hover,.uf-input textarea:hover,.uf-input input:focus,.uf-input select:focus,.uf-input textarea:focus,.uf-input input:active,.uf-input select:active,.uf-input textarea:active{flex:1;min-width:0;width:100%;border:0!important;outline:0!important;box-shadow:none!important;background-color:transparent!important;font-family:inherit;font-size:.92rem;line-height:1.5;color:var(--ink);-webkit-appearance:none;appearance:none;border-radius:0;margin:0}
.uf-input:hover{border-color:var(--b-soft)}
.uf-input select{cursor:pointer;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%233E8CFB' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right center;padding-right:1.3rem;text-overflow:ellipsis}
.uf-input input::placeholder,.uf-input textarea::placeholder{color:#777777}
.uf-input--area{height:auto;padding:.7rem .8rem;align-items:flex-start}
.uf-input--area textarea{resize:vertical;min-height:74px}
.uf-input--code{padding-right:.55rem;flex:0 0 auto}
.uf-phone{display:grid;grid-template-columns:92px 1fr;gap:.5rem}
.uf-btn{width:100%;margin-top:.4rem;display:flex;align-items:center;justify-content:center;gap:.55rem;padding:.95rem 1.2rem;border:0;border-radius:12px;background:var(--b);color:#fff;font-family:inherit;font-size:.97rem;font-weight:700;cursor:pointer;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,background .2s}
.uf-btn:hover:not(:disabled){filter:brightness(.93);transform:translateY(-2px);box-shadow:0 12px 26px rgba(62,140,251,.32)}
.uf-btn:disabled{opacity:.65;cursor:progress}
.uf-err{margin:.55rem 0 0;font-size:.83rem;color:#B91C1C;font-weight:600}
.uf-consent{display:flex;gap:.6rem;align-items:flex-start;margin:.25rem 0 .2rem}
.uf-consent input[type="checkbox"]{flex-shrink:0;width:17px;height:17px;margin-top:.15rem;accent-color:var(--b);cursor:pointer}
.uf-consent label{font-size:.78rem;font-weight:400;color:var(--ink-3);line-height:1.6;margin:0;cursor:pointer}
.uf-consent a{color:var(--b);font-weight:600}
.uf-done{text-align:center;padding:2.4rem .5rem}
.uf-doneIcon{display:inline-flex;color:#059669;margin-bottom:.7rem}
` }} />
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
      </>
  );
}
