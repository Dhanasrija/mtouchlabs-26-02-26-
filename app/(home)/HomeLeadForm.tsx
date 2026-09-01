"use client";

/**
 * HomeLeadForm — the "Start Your Software Development Project" form in the
 * closing CTA band of the homepage.
 *
 * This is the ONLY client component on the new homepage. Everything else is
 * server-rendered HTML, so the JS this route ships is limited to this file
 * plus React's own runtime — the hero, services, case studies, awards,
 * testimonials, locations and FAQ all render without hydration.
 *
 * It posts to the existing /api/contact route, which pushes the lead to the
 * CRM and emails the notification list. That route requires `interest` on a
 * full (non-partial) submission, so a fixed value is sent with every
 * homepage lead — see app/api/contact/route.ts.
 *
 * On success the browser is sent to /thank-you, which is where the OpenAI
 * Lead conversion fires (components/OpenAILeadOnce.tsx).
 */

import { useState } from "react";

type Status = "idle" | "sending" | "error";

export default function HomeLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email) {
      setStatus("error");
      setError("Please add your name and work email so we can reply.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          subject: "Homepage — Start Your Project",
          interest: "Software Development",
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      window.location.href = "/thank-you";
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again, or email info@mtouchlabs.com.");
    }
  }

  return (
    <div className="hmx-form-wrap hmx-reveal">
      <h3>Tell Us About Your Project</h3>

      <form onSubmit={onSubmit} noValidate>
        <div className="hmx-field">
          <label htmlFor="hmx-name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="hmx-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="hmx-field">
          <label htmlFor="hmx-email">
            Work Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="hmx-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
          />
        </div>

        <div className="hmx-field">
          <label htmlFor="hmx-message">Tell Us About Your Project</label>
          <textarea
            id="hmx-message"
            name="message"
            rows={4}
            placeholder="What are you looking to build, improve, or scale?"
          />
        </div>

        <div className="hmx-form-actions">
          <button type="submit" className="hmx-btn hmx-btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Start Your Project"}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>

        <p className="hmx-form-msg hmx-form-msg--err" role="alert" aria-live="polite">
          {status === "error" ? error : ""}
        </p>

        <p className="hmx-form-note">
          We reply within one business day. Your details are used only to respond to
          this enquiry.
        </p>
      </form>
    </div>
  );
}
