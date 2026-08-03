import type { MetadataRoute } from 'next';
import metadata from '../metadata.json';

const siteUrl = metadata.alternates.canonical.replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
