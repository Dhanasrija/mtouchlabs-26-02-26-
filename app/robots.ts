import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/thank-you',
        '/blogs/create',
        '/blogs/edit/',
      ],
    },
    sitemap: 'https://www.mtouchlabs.com/sitemap.xml',
  }
}