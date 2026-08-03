import type { MetadataRoute } from 'next';
import metadata from '../metadata.json';

const siteUrl = metadata.alternates.canonical.replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
