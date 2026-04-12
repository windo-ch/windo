import { SectionLabel } from './section-label';
import { AVAILABILITY } from '@/lib/config';

const TIERS = [
  {
    id: 'basis' as const,
    name: 'Basis',
    tagline: 'Professionell online.',
    price: "1'990",
    features: [
      'Individuelles Design — kein Template, kein Baukasten',
      'Alle Seiten, die Ihr Betrieb braucht',
      'Professionelle Texte inklusive',
      'Mobile-first, PageSpeed 90+',
      'SEO-Grundlagen & Google Business',
      'Hosting & Betreuung — 12 Monate inklusive',
      'Online in ~10 Arbeitstagen',
    ],
  },
  {
    id: 'sichtbar' as const,
    name: 'Sichtbar',
    tagline: 'Gefunden werden.',
    price: "2'990",
    features: [
      'Alles aus Basis',
      'Google Unternehmensprofil: Einrichtung & Optimierung',
      'SEO-Texte — auf Ihre Region und Branche optimiert',
      'Schema-Markup für Google & KI-Suchen',
      'Eigene Seite pro Dienstleistung',
      'Kontaktformular oder Buchungssystem',
      'Online in ~10–15 Arbeitstagen',
    ],
  },
  {
    id: 'dominant' as const,
    name: 'Dominant',
    tagline: 'Die Referenz in Ihrer Branche.',
    price: "4'490",
    features: [
      'Alles aus Sichtbar',
      'Premium-Texte & Content-Strategie',
      'Optimiert für KI-Suchen (ChatGPT, Perplexity)',
      'Vollständiges branchenspezifisches Schema-Markup',
      'Google Business: Vollständige Optimierung',
      'Prioritäts-Support (Antwort am selben Tag)',
      'Online in ~15 Arbeitstagen',
    ],
  },
];

interface PricingProps {
  pricing: {
    recommendedTier?: 'basis' | 'sichtbar' | 'dominant';
  };
}

export function PricingSection({ pricing }: PricingProps) {
  const recommended = pricing.recommendedTier ?? 'sichtbar';

  return (
    <section className="py-16 md:py-20">
      {/* Availability banner */}
      <div className="mb-8 rounded-xl bg-glow-ambient border border-glow-soft px-4 py-3 text-sm text-glow-deep font-medium text-center">
        🗓️ {AVAILABILITY.month} {AVAILABILITY.year} — noch {AVAILABILITY.slotsRemaining} Plätze verfügbar ·{' '}
        <span className="font-normal text-gray-600">Zufriedenheitsgarantie inklusive</span>
      </div>

      <SectionLabel text="Investition" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Erstes Jahr komplett.
      </h2>
      <p className="mt-3 text-sm text-gray-500 max-w-lg">
        Website, Hosting, Betreuung und Support — ein Preis, ein Jahr. Ab Jahr 2: CHF 59/Mt.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {TIERS.map((tier) => {
          const isRecommended = tier.id === recommended;
          return (
            <div
              key={tier.id}
              className={`rounded-2xl border p-6 ${
                isRecommended
                  ? 'border-glow-deep bg-glow-ambient'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-bg-dark">{tier.name}</h3>
                    {isRecommended && (
                      <span className="text-xs font-semibold bg-glow-deep text-white px-2 py-0.5 rounded-full">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 italic">{tier.tagline}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xl font-bold text-bg-dark">CHF {tier.price}</p>
                  <p className="text-xs text-gray-400">erstes Jahr komplett</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Landingpage mention */}
      <div className="mt-6 rounded-xl bg-bg-subtle border border-gray-200 px-5 py-4 text-center">
        <p className="text-sm text-gray-600">
          Brauchen Sie erst mal nur eine Seite?{' '}
          <a href="/landingpage" className="text-glow-deep font-semibold hover:underline">
            Landingpage — CHF 990, erstes Jahr komplett →
          </a>
        </p>
      </div>

      <p className="mt-5 text-xs text-gray-400">
        Ab Jahr 2: CHF 59/Monat oder CHF 590/Jahr. Monatlich kündbar. Alle Preise exkl. MWSt 8.1%.
      </p>
    </section>
  );
}
