import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Arztpraxen — windo.ch',
  description: 'Professionelle Websites für Arztpraxen in der Schweiz.',
  alternates: { canonical: 'https://www.windo.ch/arztpraxis' },
};

const content: IndustryPageProps = {
  slug: 'arztpraxis',
  industry: 'Arztpraxen',
  metaTitle: 'Websites für Arztpraxen — windo.ch',
  metaDescription: 'Professionelle Websites für Arztpraxen in der Schweiz.',
  headline: 'Ihre Praxis verdient einen besseren ersten Eindruck.',
  subline:
    'Patienten suchen Ärzte online — auf Google, auf dem Handy. Wenn Ihre Website nicht überzeugt, gehen sie zur nächsten Praxis.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Praxis-Website.',
  },
  heroCtaSecondary: { label: 'Website checken', href: '/check' },
  painPoints: [
    {
      emoji: '📱',
      title: 'Die Website funktioniert nicht auf dem Handy.',
      description:
        'Über 70% der Patienten suchen auf dem Smartphone. Eine nicht-mobile Website kostet Sie Patienten.',
    },
    {
      emoji: '📅',
      title: 'Keine Online-Terminbuchung.',
      description:
        'Patienten wollen rund um die Uhr buchen. Ohne Buchungssystem verlieren Sie Termine.',
    },
    {
      emoji: '🔍',
      title: 'Bei Google kaum sichtbar.',
      description:
        'Wer nach "Arzt [Ihr Ort]" sucht, findet Ihre Kollegen. Ohne lokale SEO entgehen Ihnen neue Patienten.',
    },
  ],
  features: [
    'Mobiloptimierte Website — auf jedem Gerät perfekt',
    'Online-Terminbuchung integriert',
    'Google Business optimiert — mehr lokale Sichtbarkeit',
    'Ihre Fachgebiete klar kommuniziert',
    'Team und Praxis professionell vorgestellt',
    'Datenschutz und DSGVO-konform',
    'Direkt mit Henry — kein Ticketsystem',
    'Alles gehört Ihnen: Code, Domain, Inhalte',
  ],
  aiHook: {
    chatPrompt: 'Guter Hausarzt in Luzern',
    result: 'Ihre Praxis wird nicht erwähnt.',
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
      'Keine Online-Buchung',
      'Praxis nicht gut präsentiert',
      'Bei Google kaum sichtbar',
      'Veraltetes Design',
      'Keine eigene mobile Website',
    ],
    after: [
      'Terminbuchung rund um die Uhr',
      'Praxis und Team professionell vorgestellt',
      'Lokal auf Google sichtbar',
      'Modernes, vertrauenswürdiges Design',
      'Optimiert für alle Geräte',
    ],
  },
  cta: {
    headline: 'Bereit für eine Praxis-Website, die Patienten bringt?',
    subline: 'Kein Pitch, keine Präsentation. Kurzes Gespräch, ehrliche Einschätzung.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Praxis-Website.',
  },
};

export default function ArztpraxisPage() {
  return <IndustryPage {...content} />;
}
