import { SectionLabel } from './section-label';

interface PricingProps {
  pricing: {
    range: string;
    context: string;
    maintenanceFrom: string;
    examples: { label: string; price: string }[];
  };
}

export function PricingSection({ pricing }: PricingProps) {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Investition" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Transparente Preise.
      </h2>

      <div className="mt-8">
        <div className="flex justify-between items-baseline border-b border-gray-200 py-3">
          <span className="text-bg-dark text-sm">Website (einmalig)</span>
          <span className="text-bg-dark font-medium">{pricing.range}</span>
        </div>
        {pricing.examples.map((example, index) => (
          <div key={index} className="flex justify-between items-baseline border-b border-gray-200 py-3">
            <span className="text-gray-500 text-sm">{example.label}</span>
            <span className="text-gray-600 text-sm">{example.price}</span>
          </div>
        ))}
        <div className="flex justify-between items-baseline border-b border-gray-200 py-3">
          <span className="text-gray-500 text-sm">Wartung & Hosting</span>
          <span className="text-gray-600 text-sm">ab {pricing.maintenanceFrom}/Mt.</span>
        </div>
        <p className="mt-4 text-sm text-gray-400">{pricing.context}</p>
      </div>
    </section>
  );
}
