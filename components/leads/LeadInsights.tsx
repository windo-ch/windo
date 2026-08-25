import type { LeadContent } from "@/lib/types";

const FALLBACK_INSIGHTS = [
  "Ein zeitgemässes, klares Design schafft sofort Vertrauen — bevor jemand auch nur eine Zeile gelesen hat.",
  "Mit Schema.org-Markup taucht Ihr Betrieb in Google AI Overviews und ChatGPT-Suchen auf — dort, wo immer mehr Kunden suchen.",
  "Telefon, E-Mail oder WhatsApp — der bevorzugte Kontaktweg, prominent platziert, damit Besucher sofort handeln können.",
  "Optimiertes lokales SEO und Google Business sorgen dafür, dass Kunden aus Ihrer Region Sie zuerst finden.",
];

export default function LeadInsights({ lead }: { lead: LeadContent }) {
  const insights =
    lead.insights && lead.insights.length > 0 ? lead.insights : FALLBACK_INSIGHTS;

  return (
    <section className="hero-gradient py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Was wir angehen
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-bg-dark mb-8">
          {lead.insights && lead.insights.length > 0
            ? `Was uns bei ${lead.domain} auffällt.`
            : "Vier Dinge, die den Unterschied machen."}
        </h2>
        <ul className="space-y-6">
          {insights.map((text, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-glow-deep mt-0.5 shrink-0 font-bold text-lg">→</span>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
