/**
 * OpenAI Pixel (oaiq) — Lead conversion event.
 *
 * Verified against the live SDK at
 * https://bzrcdn.openai.com/sdk/oaiq.min.js:
 *
 *   • The call shape is  oaiq("track", eventName, eventProps?, eventOptions?)
 *   • eventName is validated against a fixed list. The Lead conversion is
 *     "lead_created" (mapped internally to type "customer_action").
 *     An undocumented name such as "Lead" is REJECTED — the SDK logs
 *     "[oaiq] validation failed; event dropped" and sends nothing.
 *   • oaiq("init", ...) must have run first; calls made before the SDK
 *     script finishes loading are queued by the stub and flushed later.
 *
 * ── Why the event fires on /thank-you and not before the redirect ──
 * The Request Quote form does a hard navigation to /thank-you the instant
 * the API returns OK. An event queued microseconds before that navigation
 * can be discarded before the SDK flushes it, and we would have no way to
 * know. So the form only records a one-time "pending" marker, and
 * /thank-you — which is reachable ONLY behind the one-time cookie set by
 * /api/request-quote, i.e. only after a genuinely successful submission —
 * consumes the marker and sends the event on a page that is not about to
 * unload.
 *
 * That gives exactly one Lead per successful submission: never on page
 * load of the form, never on button click, never on a validation failure,
 * and never twice if /thank-you is refreshed (the marker is consumed).
 * A second genuine submission in the same session writes a fresh marker
 * and is counted again, as it should be.
 */

const PENDING_KEY = "oai_lead_pending";

/** Guards against a double-send inside one document (e.g. StrictMode). */
let sentInThisDocument = false;

/** Send the verified Lead event. Returns true if the call was made. */
function trackLeadCreated(): boolean {
  if (typeof window === "undefined") return false;
  const oaiq = (window as any).oaiq;
  if (typeof oaiq !== "function") return false;
  oaiq("track", "lead_created");
  return true;
}

/**
 * Called from the Request Quote form AFTER the API has confirmed success.
 * Records that a Lead is owed; does not send anything itself.
 */
export function markQuoteLeadPending(): void {
  try {
    sessionStorage.setItem(PENDING_KEY, String(Date.now()));
  } catch {
    /* private mode / storage blocked — /thank-you falls back, see below */
  }
}

/**
 * Called from /thank-you?source=quote. Sends the Lead exactly once,
 * consuming the pending marker so a refresh cannot double-count.
 *
 * @param allowWithoutMarker Send even when no marker is readable. Used only
 *        when storage is unavailable, where /thank-you behind the one-time
 *        cookie is itself sufficient proof of a successful submission.
 */
export function fireQuoteLeadIfPending(allowWithoutMarker = false): boolean {
  if (sentInThisDocument) return false;

  let pending: string | null = null;
  let storageWorks = true;
  try {
    pending = sessionStorage.getItem(PENDING_KEY);
  } catch {
    storageWorks = false;
  }

  if (!pending && !(allowWithoutMarker && !storageWorks)) return false;

  const ok = trackLeadCreated();
  if (!ok) return false;

  sentInThisDocument = true;
  try {
    sessionStorage.removeItem(PENDING_KEY);
  } catch {
    /* ignore */
  }
  return true;
}
