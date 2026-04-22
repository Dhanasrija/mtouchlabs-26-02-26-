// lib/formSubmissionGuard.ts
//
// Server-side guard that prevents direct access to /thank-you.
//
// How it works:
//   1. A successful form-submission API response calls `setFormSubmittedCookie(res)`,
//      which writes a short-lived, HttpOnly cookie on the browser.
//   2. The Next.js middleware (middleware.ts) intercepts /thank-you* requests:
//        - cookie missing  -> redirect to /contact-us
//        - cookie present  -> allow the request AND delete the cookie
//          (so a page refresh / back-button revisit redirects away too).
//
// This replaces the old `?success=true` query-string check, which anyone could
// fake by typing the URL directly.

import type { NextResponse } from 'next/server';

export const FORM_SUBMITTED_COOKIE = 'mtl_form_submitted';

// Short TTL — the cookie only needs to survive the redirect from the form
// submission to /thank-you. 5 minutes is generous and accounts for slow networks.
const TTL_SECONDS = 60 * 5;

/**
 * Stamp a successful form-submission response with the one-time
 * "you may view /thank-you" cookie. Returns the same response for chaining.
 */
export function setFormSubmittedCookie<T extends NextResponse>(res: T): T {
  res.cookies.set({
    name: FORM_SUBMITTED_COOKIE,
    value: '1',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: TTL_SECONDS,
  });
  return res;
}
