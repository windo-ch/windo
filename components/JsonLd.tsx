export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'windo',
    url: 'https://www.windo.ch',
    logo: 'https://www.windo.ch/windo-logo-2026-transparent.png',
    image: 'https://www.windo.ch/windo-og-1.png',
    email: 'henry@windo.ch',
    telephone: '+41791752020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zug',
      addressRegion: 'ZG',
      addressCountry: 'CH',
    },
    description:
      'Professionelle Websites für Schweizer KMU. Fixpreis, 2 Wochen Umsetzungszeit, persönliche Betreuung.',
    priceRange: 'CHF 790–3990',
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    founder: {
      '@type': 'Person',
      name: 'Henry Barrows',
      url: 'https://henry.marketing',
      sameAs: 'https://www.linkedin.com/in/henrybarrows/',
    },
    sameAs: [
      'https://www.linkedin.com/in/henrybarrows/',
      'https://henry.marketing',
    ],
  };

  const safeJson = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
