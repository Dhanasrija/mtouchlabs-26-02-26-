'use client';

/**
 * ObfuscatedEmail
 * ---------------------------------------------------------------------------
 * Renders an email address in a way that defeats naive scrapers and SEO
 * audit tools that flag plain-text addresses on a page.
 *
 *   - Server-rendered HTML output is the de-obfuscated fallback
 *     ("contact [at] mtouchlabs [dot] com") — never the literal address.
 *   - After hydration in the browser, the real "user@domain" is swapped in
 *     and the href becomes a working mailto: link.
 *
 * Usage:
 *   <ObfuscatedEmail user="contact" domain="mtouchlabs.com" />
 *   <ObfuscatedEmail user="contact" domain="mtouchlabs.com" className="my-link">
 *     <i className="fas fa-envelope" /> contact us
 *   </ObfuscatedEmail>
 * ---------------------------------------------------------------------------
 */

import { useState, useEffect, ReactNode } from 'react';

interface Props {
  user?: string;
  domain?: string;
  className?: string;
  ariaLabel?: string;
  /** If provided, used as the visible link content instead of the email itself. */
  children?: ReactNode;
}

export default function ObfuscatedEmail({
  user = 'contact',
  domain = 'mtouchlabs.com',
  className,
  ariaLabel = 'Email us',
  children,
}: Props) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const email = `${user}@${domain}`;
  const fallbackText = `${user} [at] ${domain.replace('.', ' [dot] ')}`;

  if (!hydrated) {
    // Pre-hydration: no real mailto, no literal address in HTML.
    return (
      <a
        href="#"
        className={className}
        aria-label={ariaLabel}
        onClick={(e) => e.preventDefault()}
      >
        {children ?? fallbackText}
      </a>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className} aria-label={ariaLabel}>
      {children ?? email}
    </a>
  );
}
