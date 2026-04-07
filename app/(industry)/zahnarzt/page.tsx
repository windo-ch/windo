import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Zahnarztpraxen — windo.ch',
  description:
    'Professionelle Websites für Zahnarztpraxen in der Schweiz. Mehr Patienten durch bessere Online-Sichtbarkeit — auch auf ChatGPT. Kein Baukastensystem.',
  alternates: { canonical: 'https://www.windo.ch/zahnarzt' },
};

const content: IndustryPageProps = {
  slug: 'zahnarzt',
  industry: 'Zahnarztpraxen',
  metaTitle: 'Websites für Zahnarztpraxen — windo.ch',
  metaDescription: 'Professionelle Websites für Zahnarztpraxen in der Schweiz.',
  headline: 'Ihre Praxis verdient eine bessere Website.',
  subline:
    'Patienten suchen online — auf Google, auf ChatGPT, auf dem Handy. Wenn Ihre Website nicht überzeugt, buchen sie woanders.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Praxis-Website.',
  },
  heroCtaSecondary: { label: 'Ihre Website checken', href: '/check' },
  painPoints: [
    {
      emoji: '📱',
      title: 'Die Website funktioniert nicht auf dem Handy.',
      description:
        'Über 70 % der Patienten suchen auf dem Smartphone. Wenn Ihre Seite da nicht stimmt, sind sie weg — in Sekunden.',
    },
    {
      emoji: '📅',
      title: 'Keine Online-Terminbuchung.',
      description:
        'Patienten wollen rund um die Uhr buchen, nicht während der Sprechzeiten anrufen. Ohne Buchungssystem verlieren Sie Termine.',
    },
    {
      emoji: '🤖',
      title: 'ChatGPT empfiehlt Ihre Praxis nicht.',
      description:
        'KI-Assistenten empfehlen nur Praxen, die online gut aufgestellt sind. Wer fehlt, verliert — ohne es zu merken.',
    },
  ],
  features: [
    'Mobiloptimierte Website, die auf jedem Gerät überzeugt',
    'Online-Terminbuchung integriert (Calendly, Cal.com oder ähnlich)',
    'Google Business optimiert — mehr lokale Sichtbarkeit',
    'Strukturierte Daten für bessere KI-Empfehlungen',
    'Schnell, sicher, DSGVO-konform',
    'Ihre Leistungen klar kommuniziert',
    'Direkt mit Henry — kein Ticketsystem, kein Callcenter',
    'Alles gehört Ihnen: Code, Domain, Inhalte',
  ],
  aiHook: {
    chatPrompt: 'Bester Zahnarzt in Zug',
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
      '3–6 Monate Projektlaufzeit',
      'Stundensatz unbekannt, Nachträge teuer',
      'Account-Manager wechselt alle 6 Monate',
      'Ihre Daten bleiben beim Anbieter',
      'Support über Ticketsystem',
    ],
    after: [
      '1–2 Wochen, fertig',
      'Fixpreis — transparent von Anfang an',
      'Immer direkt mit Henry',
      'Ihr Code, Ihre Domain, alles Ihres',
      'Support per Telefon & WhatsApp',
    ],
  },
  cta: {
    headline: 'Bereit für eine Website, die Patienten bringt?',
    subline: 'Kein Pitch, keine Präsentation. Kurzes Gespräch, ehrliche Einschätzung.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Praxis-Website.',
  },
};

export default function ZahnarztPage() {
  return <IndustryPage {...content} />;
}
