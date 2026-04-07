import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Coiffeure & Barbershops — windo.ch',
  description: 'Professionelle Websites für Coiffeure und Barbershops in der Schweiz.',
  alternates: { canonical: 'https://www.windo.ch/coiffeur' },
};

const content: IndustryPageProps = {
  slug: 'coiffeur',
  industry: 'Coiffeure & Barbershops',
  metaTitle: 'Websites für Coiffeure & Barbershops — windo.ch',
  metaDescription: 'Professionelle Websites für Coiffeure und Barbershops in der Schweiz.',
  headline: 'Ihr Salon verdient mehr Buchungen.',
  subline:
    'Kunden suchen einen Coiffeur — auf Google, auf Instagram, auf dem Handy. Wenn Ihre Website nicht überzeugt, buchen sie anderswo.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Salon-Website.',
  },
  heroCtaSecondary: { label: 'Website checken', href: '/check' },
  painPoints: [
    {
      emoji: '📱',
      title: 'Keine Online-Terminbuchung.',
      description:
        'Kunden wollen rund um die Uhr buchen — nicht während der Öffnungszeiten anrufen. Ohne Buchungssystem verlieren Sie Termine.',
    },
    {
      emoji: '📸',
      title: 'Ihre Arbeit wird nicht gezeigt.',
      description:
        'Ein Coiffeur lebt von seiner Arbeit. Wenn Ihre Frisuren nicht professionell präsentiert werden, buchen Kunden woanders.',
    },
    {
      emoji: '🔍',
      title: 'Bei Google unsichtbar.',
      description:
        'Wer nach "Coiffeur [Ihr Ort]" sucht, findet Ihre Konkurrenz — nicht Sie. Lokale Sichtbarkeit entscheidet.',
    },
  ],
  features: [
    'Mobiloptimierte Website mit professioneller Bildgalerie',
    'Online-Terminbuchung integriert (Treatwell, Calendly oder ähnlich)',
    'Google Business optimiert — mehr lokale Sichtbarkeit',
    'Preisliste klar und übersichtlich dargestellt',
    'Ihr Team vorgestellt — Vertrauen aufbauen',
    'Social-Media-Integration (Instagram-Feed)',
    'Direkt mit Henry — kein Ticketsystem',
    'Alles gehört Ihnen: Code, Domain, Inhalte',
  ],
  aiHook: {
    chatPrompt: 'Bester Coiffeur in Zürich',
    result: 'Ihr Salon wird nicht erwähnt.',
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
      'Keine Online-Buchung — Kunden rufen an',
      'Portfolio nicht sichtbar',
      'Bei Google nicht gefunden',
      'Veraltetes Design',
      'Keine Kontrolle über die eigene Website',
    ],
    after: [
      'Buchungen rund um die Uhr',
      'Professionelle Bildgalerie',
      'Lokal auf Google sichtbar',
      'Modernes, gepflegtes Design',
      'Alles Ihres — Code, Domain, Inhalte',
    ],
  },
  cta: {
    headline: 'Bereit für mehr Buchungen?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung — und dann entscheiden Sie.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Salon-Website.',
  },
};

export default function CoiffeurPage() {
  return <IndustryPage {...content} />;
}
