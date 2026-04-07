export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'windo',
    url: 'https://www.windo.ch',
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
    priceRange: 'CHF 1750',
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
  };

  const safeJson = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
