import type { LeadContent } from "@/lib/types";

export default function LeadInsights({ lead }: { lead: LeadContent }) {
  if (!lead.insights || lead.insights.length === 0) return null;

  return (
    <section className="bg-bg-subtle py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Analyse
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-bg-dark mb-8">
          Was wir verbessern würden.
        </h2>
        <ul className="space-y-4">
          {lead.insights.map((insight, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-glow-deep mt-0.5 shrink-0 font-bold">→</span>
              <span className="text-gray-600 leading-relaxed">{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
