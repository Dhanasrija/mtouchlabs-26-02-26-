'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  fallbackSrc?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
}

/**
 * Client-side <img> with graceful fallback when the source fails to load.
 * Fixes broken/corrupted case-study and gallery images that would otherwise
 * render as broken image placeholders with alt text.
 */
export default function ImageWithFallback({
  src,
  alt,
  className,
  style,
  fallbackSrc = '/images/case-study-banner.webp',
  width,
  height,
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [errored, setErrored] = useState<boolean>(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      width={width as number | undefined}
      height={height as number | undefined}
      loading={loading}
      onError={() => {
        if (!errored) {
          setErrored(true);
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
