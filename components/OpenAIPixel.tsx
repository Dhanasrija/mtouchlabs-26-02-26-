/**
 * DEPRECATED — not used.
 *
 * The OpenAI Pixel setup code now lives directly in the <head> of
 * app/layout.tsx, verbatim and exactly once, as the client requested.
 * This file is a leftover scaffold and is safe to delete.
 *
 * Do NOT re-mount a pixel component: a second copy of the setup code would
 * double-count page views. The base snippet guards with `if (w.oaiq) return`,
 * but a second oaiq("init", ...) call would still run.
 */
export {};
