import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Handwerker — windo.ch',
  description: 'Professionelle Websites für Handwerksbetriebe in der Schweiz.',
  alternates: { canonical: 'https://www.windo.ch/handwerker' },
};

const content: IndustryPageProps = {
  slug: 'handwerker',
  industry: 'Handwerker',
  metaTitle: 'Websites für Handwerker — windo.ch',
  metaDescription: 'Professionelle Websites für Handwerksbetriebe in der Schweiz.',
  headline: 'Ihr Betrieb verdient mehr Aufträge.',
  subline:
    'Kunden suchen Handwerker online — auf Google, auf dem Handy. Wenn Ihre Website nicht überzeugt, rufen sie die Konkurrenz an.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Handwerker-Website.',
  },
  heroCtaSecondary: { label: 'Website checken', href: '/check' },
  painPoints: [
    {
      emoji: '📞',
      title: 'Kunden finden Sie nicht.',
      description:
        'Wer nach "Elektriker [Ihr Ort]" sucht, findet Ihre Konkurrenz. Ohne lokale Online-Präsenz entgehen Ihnen Aufträge.',
    },
    {
      emoji: '📸',
      title: 'Ihre Arbeit wird nicht gezeigt.',
      description:
        'Handwerker leben von Referenzen. Wenn Ihre Projekte nicht online sichtbar sind, fehlt das Vertrauen.',
    },
    {
      emoji: '📋',
      title: 'Kein Offertformular.',
      description:
        'Kunden wollen schnell anfragen. Ohne einfaches Kontaktformular verlieren Sie potenzielle Aufträge.',
    },
  ],
  features: [
    'Mobiloptimierte Website — perfekt für Kunden unterwegs',
    'Ihre Leistungen klar kommuniziert',
    'Referenzprojekte als Bildgalerie',
    'Google Business optimiert — mehr lokale Sichtbarkeit',
    'Schnelles Offertformular',
    'Notfallnummer prominent sichtbar',
    'Direkt mit Henry — kein Ticketsystem',
    'Alles gehört Ihnen: Code, Domain, Inhalte',
  ],
  aiHook: {
    chatPrompt: 'Guter Elektriker in Bern',
    result: 'Ihr Betrieb wird nicht erwähnt.',
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
      'Bei Google nicht gefunden',
      'Keine Referenzprojekte online',
      'Anfragen nur per Telefon',
      'Veraltetes Design',
      'Keine eigene Website',
    ],
    after: [
      'Lokal auf Google sichtbar',
      'Projekte professionell präsentiert',
      'Anfragen online rund um die Uhr',
      'Modernes, vertrauenswürdiges Design',
      'Eigene Website — alles unter Ihrer Kontrolle',
    ],
  },
  cta: {
    headline: 'Bereit für mehr Aufträge?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung — und dann entscheiden Sie.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Handwerker-Website.',
  },
};

export default function HandwerkerPage() {
  return <IndustryPage {...content} />;
}
