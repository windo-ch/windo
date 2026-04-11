import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Zahnarztpraxen — windo.ch',
  description: 'Professionelle Websites für Zahnarztpraxen in der Schweiz. Mehr Patienten durch bessere Online-Sichtbarkeit. Direkt mit Henry — ab CHF 1\'490.',
  alternates: { canonical: 'https://www.windo.ch/zahnarzt' },
};

const content: IndustryPageProps = {
  slug: 'zahnarzt',
  industry: 'Zahnarztpraxen',
  metaTitle: 'Websites für Zahnarztpraxen — windo.ch',
  metaDescription: 'Professionelle Websites für Zahnarztpraxen in der Schweiz.',
  headline: 'Ihre Praxis. Ihr bester erster Eindruck.',
  subline:
    'Patienten entscheiden in Sekunden, ob sie Ihnen vertrauen — noch bevor sie anrufen. Eine moderne Website macht den Unterschied.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'tel:+41791752020',
  },
  heroCtaSecondary: { label: 'Kostenlose Analyse', href: '/analyse' },
  painPoints: [
    {
      emoji: '🦷',
      title: 'Die Website sieht aus wie 2016.',
      description:
        'Ihre Praxis hat sich weiterentwickelt — neue Geräte, neues Team, neues Angebot. Ihre Website zeigt das nicht. Patienten sehen die alte Version und gehen zur Konkurrenz.',
    },
    {
      emoji: '📱',
      title: 'Auf dem Handy kaum benutzbar.',
      description:
        'Über 70% der Patienten suchen auf dem Smartphone. Wenn Ihre Seite dort nicht funktioniert, finden sie eine Praxis, deren Seite es tut.',
    },
    {
      emoji: '🔍',
      title: 'Google zeigt Ihre Kollegen — nicht Sie.',
      description:
        'Wer "Zahnarzt [Ihr Ort]" googelt, findet Praxen mit optimierten Einträgen und modernen Websites. Ohne lokale SEO und Google Business sind Sie unsichtbar.',
    },
  ],
  references: [
    {
      name: 'Zahnarzt Neumann',
      domain: 'zahnarzt-neumann.ch',
      screenshot: '/images/ref-zahnarzt-neumann.png',
      caption: 'Modernes Design. PageSpeed 96/100. In 10 Arbeitstagen umgesetzt.',
      href: 'https://zahnarzt-neumann.ch',
    },
    {
      name: 'Schlafzahnmedizin',
      domain: 'schlafzahnmedizin.ch',
      screenshot: '/images/ref-schlafzahnmedizin.png',
      caption: 'Klare Struktur. Alle Behandlungen sofort auffindbar. Mobile-first.',
      href: 'https://schlafzahnmedizin.ch',
    },
  ],
  features: [
    'Professionelles Design, das Vertrauen schafft — auf jedem Gerät',
    'Ihre Behandlungen, Ihr Team und Ihre Praxis optimal präsentiert',
    'Lokale SEO + Google Business — damit Patienten in Ihrer Region Sie finden',
    'Schnelle Ladezeiten (PageSpeed 90+)',
    'Strukturierte Daten für Google und KI-Suchen',
    'DSGVO/DSG-konform — Datenschutz ab Werk',
    'Alles gehört Ihnen: Code, Domain, Inhalte. Kein Knebelvertrag.',
    'Optional: Online-Terminbuchung, Kontaktformular, WhatsApp-Button',
  ],
  pricing: {
    recommendedTier: 'business',
  },
  cta: {
    headline: 'Bereit für einen besseren ersten Eindruck?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung. Kostenlos.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Praxis-Website.',
  },
};

export default function ZahnarztPage() {
  return <IndustryPage {...content} />;
}
