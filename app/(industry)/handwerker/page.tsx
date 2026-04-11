import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Handwerker — windo.ch',
  description: 'Professionelle Websites für Handwerksbetriebe in der Schweiz. Mehr Aufträge, mehr Sichtbarkeit. Direkt mit Henry — ab CHF 1\'490.',
  alternates: { canonical: 'https://www.windo.ch/handwerker' },
};

const content: IndustryPageProps = {
  slug: 'handwerker',
  industry: 'Handwerker',
  metaTitle: 'Websites für Handwerker — windo.ch',
  metaDescription: 'Professionelle Websites für Handwerksbetriebe in der Schweiz.',
  headline: 'Ihr Betrieb. Online so stark wie Ihre Arbeit.',
  subline:
    'Kunden suchen Handwerker zuerst online. Eine professionelle Website, die Ihre Referenzen zeigt und auf Google gefunden wird — das bringt Aufträge.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'tel:+41791752020',
  },
  heroCtaSecondary: { label: 'Kostenlose Analyse', href: '/analyse' },
  painPoints: [
    {
      emoji: '🔧',
      title: 'Kunden finden Sie online nicht.',
      description:
        'Wer nach "Elektriker [Ihr Ort]" sucht, findet Ihre Konkurrenz. Ohne lokale Online-Präsenz entgehen Ihnen Aufträge — jeden Tag.',
    },
    {
      emoji: '📸',
      title: 'Ihre Arbeit wird nicht gezeigt.',
      description:
        'Handwerker leben von Referenzen. Wenn Ihre Projekte nicht online sichtbar sind, fehlt das Vertrauen — und der Auftrag geht woanders hin.',
    },
    {
      emoji: '📱',
      title: 'Auf dem Handy kaum benutzbar.',
      description:
        'Kunden suchen oft direkt vor Ort oder in der Not auf dem Smartphone. Wenn Ihre Seite dort nicht funktioniert, rufen sie die Konkurrenz an.',
    },
  ],
  features: [
    'Professionelles Design, das Kompetenz und Vertrauen zeigt',
    'Ihre Leistungen und Referenzprojekte klar präsentiert',
    'Lokale SEO + Google Business — damit Kunden in Ihrer Region Sie finden',
    'Schnelle Ladezeiten (PageSpeed 90+)',
    'Strukturierte Daten für Google und KI-Suchen',
    'DSG-konform — Datenschutz ab Werk',
    'Alles gehört Ihnen: Code, Domain, Inhalte. Kein Knebelvertrag.',
    'Optional: Offertformular, Notfallnummer, WhatsApp-Button',
  ],
  pricing: {
    recommendedTier: 'starter',
  },
  cta: {
    headline: 'Bereit für mehr Aufträge?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung. Kostenlos.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Handwerker-Website.',
  },
};

export default function HandwerkerPage() {
  return <IndustryPage {...content} />;
}
