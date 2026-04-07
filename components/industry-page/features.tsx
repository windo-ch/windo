import { SectionLabel } from './section-label';

interface FeaturesProps {
  features: string[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Was Sie bekommen" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Eine Website, die arbeitet.
      </h2>
      <ul className="mt-8 space-y-3 max-w-lg">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-glow-deep text-sm mt-1 shrink-0">✓</span>
            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
