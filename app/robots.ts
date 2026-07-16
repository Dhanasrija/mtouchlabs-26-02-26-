import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/admin/',
          '/admin',
          '/thank-you',
          '/thank-you/',
          '/request-free-quote',
          '/blogs/create',
          '/blogs/edit/',
          '/blog/create',
          '/blog/edit/',
          '/*.zip$',
          '/uploads/tmp/',
          // Tracking / deployment query-string URLs → keep duplicates out of the index
          '/*?trk=',
          '/*?dpl=',
          '/*&trk=',
          '/*&dpl=',
          // NOTE: /llms.txt and /manifest.json are intentionally NOT disallowed.
          // Blocking them here would stop AI crawlers from reading llms.txt
          // (defeating its purpose). Both already carry X-Robots-Tag: noindex
          // via next.config.js headers, which keeps them out of search results
          // while staying fetchable.
        ],
      },
      // Explicitly allow the major AI crawlers for AEO visibility
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: 'https://www.mtouchlabs.com/sitemap.xml',
    host: 'https://www.mtouchlabs.com',
  }
}