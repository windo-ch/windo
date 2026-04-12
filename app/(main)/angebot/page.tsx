import type { Metadata } from 'next';
import { PRICING, formatChf } from '@/lib/types';
import { AVAILABILITY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Angebot — windo.ch',
  description:
    "Professionelle Websites für Schweizer KMU. Einmalig ab CHF 790, danach CHF 59/Monat. Monatlich kündbar.",
  alternates: { canonical: 'https://www.windo.ch/angebot' },
};

const TIER_FEATURES: Record<string, string[]> = {
  landingpage: [
    'Professionelle Einzelseite',
    'Klarer Fokus auf Ihre Kernleistung',
    'Mobile-First, responsive',
    'Google Business Optimierung',
    'Online in ~5 Arbeitstagen',
  ],
  starter: [
    'Individuelles Design',
    'Professionelle Basistexte inklusive',
    'Bis 5 Seiten (Start, Über uns, Angebot, Galerie, Kontakt)',
    'Mobile-First, responsive',
    'SEO-Grundlagen & Schema-Markup',
    'Google PageSpeed: 100/100',
    'Online in ~10 Arbeitstagen',
  ],
  business: [
    'Alles aus Starter',
    'Bis 10 Seiten inkl. einzelne Service-Unterseiten',
    'Ausführlichere SEO-Texte',
    'Google Unternehmensprofil: Optimierung',
    'Online in ~10–15 Arbeitstagen',
  ],
  professional: [
    'Alles aus Business',
    'Unbegrenzte Seiten',
    'Premium SEO-Texte',
    'Vollständiges Schema-Markup',
    'Google Unternehmensprofil: Vollständige Optimierung',
    'Optimiert für KI-Suchmaschinen (ChatGPT, Perplexity)',
    'Online in ~15 Arbeitstagen',
  ],
};

const MONTHLY_INCLUDES = [
  'Hosting & SSL-Zertifikat (Schweizer Server)',
  'Technische Wartung & Sicherheit',
  'Kleine Änderungen inklusive',
  'Support per Telefon, E-Mail & WhatsApp',
  'Ihre Website gehört Ihnen — jederzeit portierbar',
];

const FAQ = [
  {
    q: 'Was kostet es insgesamt?',
    a: "Einmalig ab CHF 790 (Landingpage) oder CHF 1'490 (Starter) für die neue Website — danach CHF 59/Monat für Betreuung, Hosting und Support. Monatlich kündbar, keine Mindestlaufzeit.",
  },
  {
    q: 'Was ist der Unterschied zwischen Landingpage und Starter?',
    a: "Die Landingpage ist eine einzelne, fokussierte Seite — ideal für ein konkretes Angebot, eine Kampagne oder einen Soloauftritt. Der Starter umfasst bis zu 5 Seiten und deckt die klassische KMU-Website ab: Start, Über uns, Leistungen, Galerie, Kontakt.",
  },
  {
    q: 'Gibt es ein Jahresabo?',
    a: "Ja. Anstatt CHF 59/Monat können Sie CHF 590/Jahr zahlen — das spart CHF 118 pro Jahr. Beides ist monatlich bzw. jährlich kündbar.",
  },
  {
    q: 'Warum CHF 59/Monat, wenn die Website mir gehört?',
    a: 'Die Website gehört Ihnen — das stimmt. Die CHF 59 sind für alles, was danach kommt: Hosting, SSL, Updates, Sicherheit. Und wenn etwas geändert werden soll, schreiben Sie mir — ich erledige es.',
  },
  {
    q: 'Bin ich an einen Vertrag gebunden?',
    a: 'Nein. Monatlich kündbar. Die Website und alle Inhalte gehören Ihnen. Kein Lock-in.',
  },
  {
    q: 'Was passiert mit meiner Domain und meinen E-Mails?',
    a: 'Beides bleibt bei Ihnen und wird nicht verändert. Ich kümmere mich um die technische Umstellung.',
  },
  {
    q: 'Muss ich Texte liefern?',
    a: 'Nein. Ich schreibe alle Texte für Sie — Basistexte sind immer inklusive. Sie lesen gegen und geben Feedback.',
  },
  {
    q: 'Wie läuft der Wechsel von einem anderen Anbieter?',
    a: 'Ich baue die neue Website unabhängig auf. Sobald sie fertig ist und Ihnen gefällt, stellen wir um. Den gesamten Prozess übernehme ich.',
  },
];

const WA = 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website.';

const tiers = Object.entries(PRICING) as [keyof typeof PRICING, (typeof PRICING)[keyof typeof PRICING]][];

export default function AngebotPage() {
  return (
    <div className="pt-16 bg-bg min-h-screen">

      {/* 1. Hero */}
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Angebot
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-bg-dark leading-tight mb-6">
          Eine Website, die Ihrem<br />Betrieb gerecht wird.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Einmalig erstellt. Monatlich betreut. Immer direkt mit Henry.
          Keine Agentur, kein Ticketsystem, kein Lock-in.
        </p>
      </div>

      {/* 2. Availability banner */}
      <div className="max-w-3xl mx-auto px-6 pb-6">
        <div className="rounded-xl bg-glow-ambient border border-glow-soft px-5 py-3.5 text-sm text-glow-deep font-medium text-center">
          Noch {AVAILABILITY.slotsRemaining} Plätze frei im {AVAILABILITY.month} {AVAILABILITY.year}
        </div>
      </div>

      {/* 3. Tier cards */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
          Einmalige Investition
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {tiers.map(([key, tier]) => {
            const isRecommended = 'recommended' in tier && tier.recommended;
            const features = TIER_FEATURES[key] ?? [];
            return (
              <div
                key={key}
                className={`rounded-2xl p-6 flex flex-col ${
                  isRecommended
                    ? 'bg-bg-dark text-white ring-2 ring-glow-deep'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${isRecommended ? 'text-glow' : 'text-gray-400'}`}>
                    {tier.name}
                  </p>
                  {isRecommended && (
                    <span className="text-xs font-semibold bg-glow-deep text-white px-2 py-0.5 rounded-full">
                      Empfohlen
                    </span>
                  )}
                </div>
                <p className={`text-xs mb-5 leading-relaxed ${isRecommended ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.pages}
                </p>
                <div className="mb-5">
                  <p className={`text-4xl font-bold tracking-tight ${isRecommended ? 'text-white' : 'text-bg-dark'}`}>
                    {formatChf(tier.setup)}.—
                  </p>
                  <p className="text-xs mt-0.5 text-gray-400">CHF einmalig + CHF 59/Mt.</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-xs leading-relaxed ${isRecommended ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`mt-0.5 shrink-0 ${isRecommended ? 'text-glow' : 'text-glow-deep'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                    isRecommended
                      ? 'bg-glow-deep text-white hover:bg-glow-hot btn-glow'
                      : 'border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white'
                  }`}
                >
                  Anfragen
                </a>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-400 mt-5">Alle Preise in CHF, exkl. MWSt 8.1%.</p>
      </div>

      {/* 5. Monthly / hosting */}
      <div className="bg-bg-subtle">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
          <div className="w-full h-px bg-gray-200 mb-12" />
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
            Monatlich · Betreuung & Hosting
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-10">
            <div>
              <p className="text-7xl font-bold text-bg-dark tracking-tight leading-none mb-2">59.—</p>
              <p className="text-gray-500 text-sm">CHF / Monat · monatlich kündbar · keine Mindestlaufzeit</p>
              <p className="text-gray-400 text-sm mt-2">
                Oder <span className="font-semibold text-bg-dark">CHF 590/Jahr</span> — spart CHF 118
              </p>
            </div>
            <ul className="space-y-2.5 flex-1">
              {MONTHLY_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-glow-deep mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 6. Year-1 calculator */}
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
          Gesamtkosten Jahr 1
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-400">Paket</th>
                <th className="text-right py-3 pr-4 font-semibold text-gray-400">Einmalig</th>
                <th className="text-right py-3 pr-4 font-semibold text-gray-400">12 × CHF 59</th>
                <th className="text-right py-3 font-semibold text-bg-dark">Gesamt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tiers.map(([key, tier]) => (
                <tr key={key} className={'recommended' in tier && tier.recommended ? 'bg-glow-ambient' : ''}>
                  <td className="py-3 pr-4 font-medium text-bg-dark">{tier.name}</td>
                  <td className="py-3 pr-4 text-right text-gray-600">CHF {formatChf(tier.setup)}</td>
                  <td className="py-3 pr-4 text-right text-gray-600">CHF {formatChf(12 * 59)}</td>
                  <td className="py-3 text-right font-semibold text-bg-dark">
                    CHF {formatChf(tier.setup + 12 * 59)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4">Alle Preise exkl. MWSt 8.1%.</p>
      </div>

      {/* 7. FAQ */}
      <div className="bg-bg-subtle">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
          <div className="w-full h-px bg-gray-200 mb-12" />
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-10">
            Häufige Fragen
          </p>
          <dl className="divide-y divide-gray-100">
            {FAQ.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-semibold text-bg-dark mb-2">{item.q}</dt>
                <dd className="text-gray-500 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* 8. Final CTA */}
      <div className="bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24 text-white">
          <div className="w-full h-px bg-white/10 mb-12" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bereit loszulegen?</h2>
          <p className="text-gray-400 mb-10">
            Kurzes Gespräch, ehrliche Einschätzung — dann entscheiden Sie.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+41791752020"
              className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Anrufen
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:henry@windo.ch"
              className="text-gray-400 hover:text-white self-center text-sm underline underline-offset-4 transition-colors"
            >
              henry@windo.ch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
