import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Restaurants & Cafés — windo.ch',
  description: 'Professionelle Websites für Restaurants und Cafés in der Schweiz.',
  alternates: { canonical: 'https://www.windo.ch/restaurant' },
};

const content: IndustryPageProps = {
  slug: 'restaurant',
  industry: 'Restaurants & Cafés',
  metaTitle: 'Websites für Restaurants & Cafés — windo.ch',
  metaDescription: 'Professionelle Websites für Restaurants und Cafés in der Schweiz.',
  headline: 'Ihr Restaurant verdient mehr Reservierungen.',
  subline:
    'Gäste suchen online nach einem Tisch — auf Google Maps, auf dem Handy. Wenn Ihre Website nicht überzeugt, buchen sie woanders.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Restaurant-Website.',
  },
  heroCtaSecondary: { label: 'Website checken', href: '/check' },
  painPoints: [
    {
      emoji: '📋',
      title: 'Speisekarte nicht online.',
      description:
        'Gäste wollen die Karte sehen, bevor sie kommen. Ohne Online-Menü verlieren Sie potenzielle Gäste.',
    },
    {
      emoji: '📅',
      title: 'Keine Online-Reservierung.',
      description:
        'Reservierungen per Telefon — nur während der Öffnungszeiten. Ohne Online-Buchung entgehen Ihnen Gäste.',
    },
    {
      emoji: '📸',
      title: 'Schlechte Fotos.',
      description:
        'Professionelle Bilder entscheiden, ob ein Gast kommt. Blasse Fotos kosten Sie Buchungen.',
    },
  ],
  features: [
    'Mobiloptimierte Website mit Ihrer Speisekarte',
    'Online-Reservierungssystem integriert',
    'Google Maps und Google Business optimiert',
    'Professionelle Bildgalerie — Ihr Ambiente in Szene gesetzt',
    'Öffnungszeiten, Lage und Kontakt klar sichtbar',
    'Eventseite für besondere Anlässe',
    'Direkt mit Henry — kein Ticketsystem',
    'Alles gehört Ihnen: Code, Domain, Inhalte',
  ],
  aiHook: {
    chatPrompt: 'Gutes Restaurant in Basel',
    result: 'Ihr Restaurant wird nicht erwähnt.',
    punchline: 'Das können wir ändern.',
  },
  pricing: {
    range: "CHF 1'490 – 2'490",
    context: "Frühlings-Aktion bis 30. April 2026. Kein Abo — monatlich kündbar ab CHF 59/Monat.",
    maintenanceFrom: "CHF 59",
    examples: [
      { label: 'Starter (bis 5 Seiten)', price: "CHF 1'490" },
      { label: 'Business (bis 10 Seiten)', price: "CHF 1'990" },
      { label: 'Professional (unbegrenzt)', price: "CHF 2'490" },
    ],
  },
  comparison: {
    before: [
      'Speisekarte nur auf PDF',
      'Reservierungen nur telefonisch',
      'Bei Google Maps unvollständig',
      'Veraltetes Design',
      'Keine eigene Website',
    ],
    after: [
      'Digitale Speisekarte, immer aktuell',
      'Online-Reservierung rund um die Uhr',
      'Google Business vollständig optimiert',
      'Modernes Design, das Appetit macht',
      'Eigene Website — unter Ihrer Kontrolle',
    ],
  },
  cta: {
    headline: 'Bereit für mehr Gäste?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung — und dann entscheiden Sie.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Restaurant-Website.',
  },
};

export default function RestaurantPage() {
  return <IndustryPage {...content} />;
}
