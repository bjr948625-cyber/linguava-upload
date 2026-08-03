import metadata from '@/metadata.json';

const siteUrl = metadata.alternates.canonical.replace(/\/$/, '');

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Linguava',
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description: metadata.description,
    email: 'hello@linguava.ai',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '548 Market St',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@linguava.ai',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'French', 'Arabic'],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
       
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
