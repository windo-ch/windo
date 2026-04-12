import type { LeadContent } from "@/lib/types";
import { PRICING, formatChf } from "@/lib/types";
import { AVAILABILITY } from "@/lib/config";

const YEAR_ONE_FEATURES = [
  "Individuelles Design — keine Vorlage",
  "Professionelle Texte inklusive",
  "Responsive — perfekt auf jedem Gerät",
  "Auffindbar auf Google & KI-Suchen",
  "In 10 Arbeitstagen online",
];

const AFTER_FEATURES = [
  "Hosting & SSL-Zertifikat (Schweizer Server)",
  "Technische Wartung & Sicherheit",
  "Kleine Änderungen inklusive",
  "Support per WhatsApp & E-Mail",
  "Ihre Website gehört Ihnen",
];

export default function LeadOffer({ lead }: { lead: LeadContent }) {
  const p = PRICING[lead.tier] ?? PRICING.basis;
  return (
    <section className="bg-bg-dark py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow font-semibold mb-5">
          Angebot
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Neue Website in 10 Arbeitstagen.
        </h2>

        {/* Availability banner */}
        <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-center mb-10">
          <p className="text-white font-semibold text-sm mb-0.5">
            🗓️ {AVAILABILITY.month} {AVAILABILITY.year} — noch {AVAILABILITY.slotsRemaining} Plätze verfügbar.
          </p>
          <p className="text-gray-400 text-xs">
            Zufriedenheitsgarantie: Gefällt Ihnen der Entwurf nicht, zahlen Sie nichts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Year 1 */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              {p.name} · Erstes Jahr komplett
            </p>
            <p className="text-5xl font-bold text-white tracking-tight leading-none mb-1">
              {formatChf(p.yearOne)}.—
            </p>
            <p className="text-xs text-white/40 mb-6">CHF · exkl. MWSt 8.1%</p>
            <ul className="space-y-2">
              {YEAR_ONE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-glow mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* After Year 1 */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              Ab Jahr 2 · Betreuung & Hosting
            </p>
            <p className="text-5xl font-bold text-white tracking-tight leading-none mb-1">
              59.—
            </p>
            <p className="text-xs text-white/40 mb-1">
              CHF / Monat · monatlich kündbar · exkl. MWSt 8.1%
            </p>
            <p className="text-xs text-white/30 mb-6">
              oder CHF 590/Jahr (2 Monate geschenkt)
            </p>
            <ul className="space-y-2">
              {AFTER_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-glow mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+41791752020"
            className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            079 175 20 20
          </a>
          <a
            href={`https://wa.me/41791752020?text=${encodeURIComponent(`Hallo Henry, ich bin ${lead.name} und interessiere mich für eine neue Website.`)}`}
            className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
