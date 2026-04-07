import { SectionLabel } from './section-label';

interface PainPoint {
  emoji: string;
  title: string;
  description: string;
}

interface PainPointsProps {
  painPoints: [PainPoint, PainPoint, PainPoint];
}

export function PainPoints({ painPoints }: PainPointsProps) {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Das kennen Sie" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Die häufigsten Probleme.
      </h2>
      <div className="mt-8 space-y-4">
        {painPoints.map((point, index) => (
          <div
            key={index}
            className="animate-card-in rounded-2xl border border-glow-soft bg-bg-card card-warm p-6 md:p-8"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0">{point.emoji}</span>
              <div>
                <h3 className="font-semibold text-bg-dark mb-1">{point.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
