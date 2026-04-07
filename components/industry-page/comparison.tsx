import { SectionLabel } from './section-label';

interface ComparisonProps {
  comparison: {
    before: string[];
    after: string[];
  };
}

export function Comparison({ comparison }: ComparisonProps) {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Warum windo.ch" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Grosser Anbieter vs. windo.ch.
      </h2>

      <div className="mt-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border-2 border-glow-deep bg-bg-card card-warm p-6 md:p-8 md:order-2">
          <p className="text-xs font-semibold text-glow-deep uppercase tracking-wider mb-4">windo.ch</p>
          <ul className="space-y-3">
            {comparison.after.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 md:order-1">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">Grosser Anbieter</p>
          <ul className="space-y-3">
            {comparison.before.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-gray-300 shrink-0 mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
