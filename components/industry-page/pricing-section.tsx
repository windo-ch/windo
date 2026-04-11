import { SectionLabel } from './section-label';

const TIERS = [
  {
    id: 'starter' as const,
    name: 'Starter',
    price: "1'490",
    note: 'Bis 5 Seiten',
    features: [
      'Modernes responsives Design',
      'Google Business Optimierung',
      'Lokale SEO-Grundlagen',
      'Hosting & Support inklusive',
      'Online in ~10 Arbeitstagen',
    ],
  },
  {
    id: 'business' as const,
    name: 'Business',
    price: "1'990",
    note: 'Bis 10 Seiten',
    features: [
      'Alles aus Starter',
      'Erweiterte Unterseiten & Leistungen',
      'Team-Vorstellung mit Fotos',
      'Kontaktformular oder Buchungssystem',
      'Online in ~10–15 Arbeitstagen',
    ],
  },
  {
    id: 'professional' as const,
    name: 'Professional',
    price: "2'490",
    note: 'Unbegrenzte Seiten',
    features: [
      'Alles aus Business',
      'Mehrsprachig (DE/FR/EN)',
      'Blog & Inhaltsseiten',
      'Erweiterte SEO-Strategie',
      'Premium Schema-Markup',
    ],
  },
];

interface PricingProps {
  pricing: {
    recommendedTier?: 'starter' | 'business' | 'professional';
  };
}

export function PricingSection({ pricing }: PricingProps) {
  const recommended = pricing.recommendedTier ?? 'business';

  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Investition" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Investition.
      </h2>
      <p className="mt-3 text-sm text-gray-500 max-w-lg">
        Was eine Agentur für CHF 8'000–15'000 verkauft — bei mir ab CHF 1'490. Gleiche Qualität, direkter Kontakt.
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
                  <p className="text-xs text-gray-400 mt-0.5">{tier.note}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xl font-bold text-bg-dark">CHF {tier.price}</p>
                  <p className="text-xs text-gray-400">+ CHF 59/Mt.</p>
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

      <p className="mt-5 text-xs text-gray-400">
        Frühlings-Aktion bis 30. April 2026. CHF 59/Monat für Hosting, Support & Wartung — monatlich kündbar. Keine versteckten Kosten.
      </p>
    </section>
  );
}
