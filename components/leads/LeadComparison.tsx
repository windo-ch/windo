import type { LeadContent } from "@/lib/types";
import { PRICING, formatChf } from "@/lib/types";

export default function LeadComparison({ lead }: { lead: LeadContent }) {
  const p = PRICING[lead.tier] ?? PRICING.basis;

  const rows: { label: string; ls: string; windo: string }[] = [
    { label: "Design", ls: `Vorlage von ${lead.year}`, windo: "Individuell" },
    { label: "Texte", ls: "Nicht inklusive", windo: "✓ Inklusive" },
    { label: "Google PageSpeed", ls: "~40–90/100", windo: "90+/100" },
    { label: "Ansprechpartner", ls: "Callcenter", windo: "✓ Direkt per WhatsApp" },
    { label: "Vertragslaufzeit", ls: "3 Jahre", windo: "Monatlich kündbar" },
    { label: "Website gehört Ihnen", ls: "✕", windo: "✓" },
  ];

  return (
    <section className="bg-bg py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Vergleich
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-8">
          Was Sie heute haben — und was möglich wäre
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-300 w-2/5" />
                <th className="text-left py-3 pr-4 font-semibold text-gray-400">localsearch</th>
                <th className="text-left py-3 font-semibold text-glow-deep">windo.ch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="py-3 pr-4 text-gray-500 font-medium">{row.label}</td>
                  <td className="py-3 pr-4 text-gray-400">{row.ls}</td>
                  <td className="py-3 font-medium text-bg-dark">{row.windo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          CHF {formatChf(p.yearOne)} erstes Jahr komplett · danach CHF 59/Mt. · exkl. MWSt 8.1%
        </p>
      </div>
    </section>
  );
}
