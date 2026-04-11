import type { Metadata } from 'next';
import IndustryPage, { type IndustryPageProps } from '@/components/industry-page';

export const metadata: Metadata = {
  title: 'Websites für Coiffeure & Barbershops — windo.ch',
  description: 'Professionelle Websites für Coiffeure und Barbershops in der Schweiz. Mehr Buchungen, mehr Sichtbarkeit. Direkt mit Henry — ab CHF 1\'490.',
  alternates: { canonical: 'https://www.windo.ch/coiffeur' },
};

const content: IndustryPageProps = {
  slug: 'coiffeur',
  industry: 'Coiffeure & Barbershops',
  metaTitle: 'Websites für Coiffeure & Barbershops — windo.ch',
  metaDescription: 'Professionelle Websites für Coiffeure und Barbershops in der Schweiz.',
  headline: 'Ihr Salon. Perfekt in Szene gesetzt.',
  subline:
    'Kunden entscheiden online, bevor sie buchen. Eine Website, die Ihre Arbeit zeigt und auf Google gefunden wird — das ist der Unterschied.',
  heroCtaPrimary: {
    label: 'Gespräch vereinbaren',
    href: 'tel:+41791752020',
  },
  heroCtaSecondary: { label: 'Kostenlose Analyse', href: '/analyse' },
  painPoints: [
    {
      emoji: '✂️',
      title: 'Ihre Arbeit wird nicht gezeigt.',
      description:
        'Ein Coiffeur lebt von seiner Arbeit. Wenn Ihre Schnitte und Styles nicht professionell präsentiert werden, buchen Kunden bei der Konkurrenz.',
    },
    {
      emoji: '📱',
      title: 'Auf dem Handy kaum benutzbar.',
      description:
        'Über 70% der Kunden suchen auf dem Smartphone. Wenn Ihre Seite dort nicht überzeugt, sind sie weg — in Sekunden.',
    },
    {
      emoji: '🔍',
      title: 'Google zeigt Ihre Konkurrenz — nicht Sie.',
      description:
        'Wer "Coiffeur [Ihr Ort]" sucht, findet Salons mit optimierten Einträgen. Ohne lokale SEO und Google Business sind Sie unsichtbar.',
    },
  ],
  references: [
    {
      name: 'Top Cut Barber',
      domain: 'topcutbarber.ch',
      screenshot: '/images/ref-topcutbarber.png',
      caption: 'Klares Design, Galerie, Online-Buchung. In 10 Arbeitstagen umgesetzt.',
      href: 'https://topcutbarber.ch',
    },
  ],
  features: [
    'Professionelles Design, das Ihre Arbeit in Szene setzt',
    'Bildgalerie für Schnitte, Styles und Ihr Team',
    'Lokale SEO + Google Business — mehr Sichtbarkeit in Ihrer Region',
    'Schnelle Ladezeiten (PageSpeed 90+)',
    'Strukturierte Daten für Google und KI-Suchen',
    'DSG-konform — Datenschutz ab Werk',
    'Alles gehört Ihnen: Code, Domain, Inhalte. Kein Knebelvertrag.',
    'Optional: Online-Terminbuchung, WhatsApp-Button, Preisliste',
  ],
  pricing: {
    recommendedTier: 'starter',
  },
  cta: {
    headline: 'Bereit für mehr Buchungen?',
    subline: 'Kurzes Gespräch, ehrliche Einschätzung. Kostenlos.',
    email: 'henry@windo.ch',
    phone: '+41 79 175 20 20',
    whatsapp: 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Salon-Website.',
  },
};

export default function CoiffeurPage() {
  return <IndustryPage {...content} />;
}
