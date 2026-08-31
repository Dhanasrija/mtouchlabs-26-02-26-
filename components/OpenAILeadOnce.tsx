"use client";

import { useEffect } from "react";
import { fireQuoteLeadIfPending } from "@/lib/openaiLead";

/**
 * Sends the OpenAI Pixel "lead_created" event on /thank-you, once, only when
 * the Request Quote form has left a pending marker behind (see
 * lib/openaiLead.ts for why the event lands here rather than pre-redirect).
 *
 * Retries briefly: the oaiq stub is installed by the head snippet and is
 * normally present immediately, but the retry covers a slow first paint.
 */
export default function OpenAILeadOnce() {
  useEffect(() => {
    if (fireQuoteLeadIfPending(true)) return;

    let tries = 0;
    const id = window.setInterval(() => {
      tries += 1;
      if (fireQuoteLeadIfPending(true) || tries >= 20) {
        window.clearInterval(id);
      }
    }, 250);

    return () => window.clearInterval(id);
  }, []);

  return null;
}
