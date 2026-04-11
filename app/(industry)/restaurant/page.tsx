import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Restaurants & Cafés — windo.ch',
  description: 'Professionelle Websites für Restaurants und Cafés in der Schweiz. Mehr Gäste, mehr Sichtbarkeit. Direkt mit Henry — ab CHF 1\'490.',
  alternates: { canonical: 'https://www.windo.ch/restaurant' },
};

const content: IndustryPageProps = {
  slug: 'restaurant',
  industry: 'Restaurants & Cafés',
  metaTitle: 'Websites für Restaurants & Cafés — windo.ch',
  metaDescription: 'Professionelle Websites für Restaurants und Cafés in der Schweiz.',
  headline: 'Ihr Restaurant. Appetit gemacht, bevor der Gast kommt.',
  subline:
    'Gäste entscheiden online, wo sie essen. Eine Website, die Ihr Ambiente zeigt und auf Google gefunden wird — das füllt Tische.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'tel:+41791752020',
  },
  heroCtaSecondary: { label: 'Kostenlose Analyse', href: '/analyse' },
  painPoints: [
    {
      emoji: '🍽️',
      title: 'Ihr Ambiente kommt online nicht rüber.',
      description:
        'Gäste wollen wissen, was sie erwartet — Atmosphäre, Menü, Stil. Eine schwache Website lässt sie woanders reservieren.',
    },
    {
      emoji: '📱',
      title: 'Auf dem Handy kaum benutzbar.',
      description:
        'Über 70% der Gäste suchen auf dem Smartphone. Wenn Ihre Seite dort nicht überzeugt, buchen sie ein anderes Restaurant.',
    },
    {
      emoji: '🔍',
      title: 'Google zeigt andere Restaurants — nicht Sie.',
      description:
        'Wer "Restaurant [Ihr Ort]" sucht, findet Betriebe mit optimierten Einträgen. Ohne Google Business und lokale SEO entgehen Ihnen Gäste.',
    },
  ],
  features: [
    'Professionelles Design, das Ihr Ambiente und Ihre Küche zeigt',
    'Speisekarte, Öffnungszeiten und Lage klar sichtbar',
    'Lokale SEO + Google Business — mehr Sichtbarkeit in Ihrer Region',
    'Schnelle Ladezeiten (PageSpeed 90+)',
    'Strukturierte Daten für Google und KI-Suchen',
    'DSG-konform — Datenschutz ab Werk',
    'Alles gehört Ihnen: Code, Domain, Inhalte. Kein Knebelvertrag.',
    'Optional: Online-Reservierung, Eventseite, WhatsApp-Button',
  ],
  pricing: {
    recommendedTier: 'starter',
  },
  cta: {
    headline: 'Bereit für mehr Gäste?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung. Kostenlos.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Restaurant-Website.',
  },
};

export default function RestaurantPage() {
  return <IndustryPage {...content} />;
}
