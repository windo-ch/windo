import type { LeadContent } from "@/lib/types";

const INSIGHTS = [
  {
    title: "Modernes Design",
    text: "Ein zeitgemässes, klares Design schafft sofort Vertrauen — bevor jemand auch nur eine Zeile gelesen hat.",
  },
  {
    title: "Strukturierte Daten für KI-Suchen",
    text: "Mit Schema.org-Markup taucht Ihr Betrieb in Google AI Overviews und ChatGPT-Suchen auf — dort, wo immer mehr Kunden suchen.",
  },
  {
    title: "Klare Handlungsaufforderung",
    text: "Telefonnummer und WhatsApp prominent platziert, damit Besucher sofort wissen, wie sie Sie erreichen.",
  },
  {
    title: "Lokale Auffindbarkeit",
    text: "Optimiertes lokales SEO und Google Business sorgen dafür, dass Kunden aus Ihrer Region Sie zuerst finden.",
  },
];

export default function LeadInsights({ lead: _lead }: { lead: LeadContent }) {
  return (
    <section className="bg-bg-subtle py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Was wir angehen
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-bg-dark mb-8">
          Vier Dinge, die den Unterschied machen.
        </h2>
        <ul className="space-y-6">
          {INSIGHTS.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span className="text-glow-deep mt-0.5 shrink-0 font-bold text-lg">→</span>
              <div>
                <p className="font-semibold text-bg-dark mb-0.5">{item.title}</p>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
