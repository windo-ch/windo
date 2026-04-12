import type { Metadata } from 'next';
import { AVAILABILITY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Angebot — windo.ch',
  description:
    "Professionelle Websites für Schweizer KMU. Basis ab CHF 1'990 — erstes Jahr komplett. Danach CHF 59/Mt. Monatlich kündbar.",
  alternates: { canonical: 'https://www.windo.ch/angebot' },
};

const WA = 'https://wa.me/41791752020?text=' + encodeURIComponent('Grüezi Henry, ich interessiere mich für eine neue Website. Hätten Sie Zeit für ein kurzes Gespräch?');

const TIERS = [
  {
    id: 'basis',
    name: 'Basis',
    tagline: 'Professionell online.',
    price: "1'990",
    description: 'Ihr Betrieb, professionell im Netz. Individuelles Design, alle nötigen Seiten, professionelle Texte.',
    features: [
      'Individuelles Design — kein Template, kein Baukasten',
      'Alle Seiten, die Ihr Betrieb braucht',
      'Professionelle Texte inklusive',
      'Mobile-first, PageSpeed 90+',
      'SEO-Grundlagen (Titel, Meta, saubere Struktur)',
      'Hosting, Betreuung & Support — 12 Monate inklusive',
      'Online in ~10 Arbeitstagen',
    ],
    highlight: false,
  },
  {
    id: 'sichtbar',
    name: 'Sichtbar',
    tagline: 'Gefunden werden.',
    price: "2'990",
    description: 'Alles aus Basis — plus Google-Optimierung, SEO-Texte und Schema-Markup. Damit Kunden in Ihrer Region Sie finden.',
    features: [
      'Alles aus Basis',
      'Google Unternehmensprofil: Einrichtung & Optimierung',
      'SEO-Texte — auf Ihre Region und Branche optimiert',
      'Schema-Markup für Google & KI-Suchen',
      'Eigene Seite pro Dienstleistung',
      'Kontaktformular oder Buchungssystem (nach Bedarf)',
      'Online in ~10–15 Arbeitstagen',
    ],
    highlight: true,
  },
  {
    id: 'dominant',
    name: 'Dominant',
    tagline: 'Die Referenz in Ihrer Branche.',
    price: "4'490",
    description: 'Alles aus Sichtbar — plus KI-Optimierung, Content-Strategie und Premium-Support. Für Betriebe, die den Standard setzen.',
    features: [
      'Alles aus Sichtbar',
      'Premium-Texte & Content-Strategie',
      'Optimiert für KI-Suchen (ChatGPT, Perplexity, Google AI)',
      'Vollständiges branchenspezifisches Schema-Markup',
      'Google Business: Vollständige Optimierung inkl. Beiträge',
      'Logo-Auffrischung inklusive',
      'Prioritäts-Support (Antwort am selben Tag)',
      'Online in ~15 Arbeitstagen',
    ],
    highlight: false,
  },
] as const;

const MONTHLY_INCLUDES = [
  'Hosting & SSL-Zertifikat (Schweizer Server)',
  'Technische Wartung, Updates & Sicherheit',
  'Kleine Anpassungen inklusive (Texte, Bilder, Öffnungszeiten)',
  'Support per Telefon, WhatsApp & E-Mail',
  'Ihre Website gehört Ihnen — jederzeit portierbar',
];

const FAQ = [
  {
    q: 'Was kostet es insgesamt?',
    a: "Im ersten Jahr ab CHF 990 (Landingpage) oder ab CHF 1'990 (Basis) — komplett, mit Website, Hosting und Betreuung. Ab dem zweiten Jahr CHF 59/Mt. oder CHF 590/Jahr. Keine versteckten Kosten.",
  },
  {
    q: 'Was ist alles im ersten Jahr inklusive?',
    a: 'Alles. Website-Erstellung, professionelle Texte, Design, Hosting, SSL, technische Wartung, kleine Anpassungen und Support per Telefon, WhatsApp und E-Mail. Sie zahlen einmal und sind ein Jahr lang komplett abgedeckt.',
  },
  {
    q: 'Was passiert nach dem ersten Jahr?',
    a: 'Die Website gehört Ihnen und läuft weiter. Für Hosting, Wartung und Support zahlen Sie CHF 59/Mt. oder CHF 590/Jahr. Monatlich kündbar, keine Mindestlaufzeit.',
  },
  {
    q: "Was zählt als 'kleine Änderung'?",
    a: 'Texte anpassen, Bilder tauschen, Öffnungszeiten aktualisieren, einen Mitarbeiter hinzufügen — solche Dinge sind inklusive. Wenn Sie eine komplett neue Seite oder grössere Erweiterung brauchen, besprechen wir das vorher und Sie erhalten einen klaren Preis.',
  },
  {
    q: 'Bin ich an einen Vertrag gebunden?',
    a: 'Nein. Nach dem ersten Jahr monatlich kündbar. Ihre Website und alle Inhalte gehören Ihnen. Wenn Sie gehen wollen, übergebe ich Ihnen alles.',
  },
  {
    q: 'Muss ich Texte oder Bilder liefern?',
    a: 'Nein. Ich schreibe alle Texte für Sie — professionell und auf Ihre Branche abgestimmt. Fotos können Sie liefern, müssen Sie aber nicht. Wir finden eine Lösung.',
  },
  {
    q: 'Wie läuft der Wechsel von einem anderen Anbieter?',
    a: 'Ich baue Ihre neue Website komplett unabhängig auf. Sobald sie fertig ist und Ihnen gefällt, stellen wir um. Domain und E-Mails bleiben bei Ihnen. Den gesamten Prozess übernehme ich.',
  },
  {
    q: 'Was ist die Zufriedenheitsgarantie?',
    a: 'Ich arbeite am Entwurf, bis er Ihnen gefällt. Wenn Sie nach dem ersten Entwurf nicht überzeugt sind, zahlen Sie nichts.',
  },
  {
    q: 'Wie viele Seiten bekomme ich?',
    a: 'So viele, wie Ihr Betrieb braucht. Ich arbeite nicht mit künstlichen Seiten-Limiten. Der Unterschied zwischen den Paketen ist nicht die Anzahl Seiten — sondern die Tiefe der Arbeit: SEO, Google-Optimierung, Content-Strategie.',
  },
];

export default function AngebotPage() {
  return (
    <div className="pt-16">

      {/* 1. Hero */}
      <div className="bg-bg-dark py-20 sm:py-28 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-6">
          Angebot
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-2xl mx-auto">
          Professionelle Website. Fairer Preis.{' '}
          <span className="text-glow-deep">Direkt mit Henry.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
          Kein Baukasten. Kein Grossanbieter. Keine 3-Jahres-Bindung.<br />
          Individuell gemacht — ab CHF 990, erstes Jahr komplett.
        </p>
      </div>

      {/* 2. Availability banner */}
      <div className="bg-bg-dark pb-10 px-6">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-xl py-5 px-8 text-center">
          {AVAILABILITY.slotsRemaining > 0 ? (
            <>
              <p className="text-white font-semibold text-lg mb-1">
                🗓️ {AVAILABILITY.month} {AVAILABILITY.year} — noch {AVAILABILITY.slotsRemaining} Plätze verfügbar.
              </p>
              <p className="text-gray-400 text-sm">
                Zufriedenheitsgarantie: Gefällt Ihnen der Entwurf nicht, zahlen Sie nichts.
              </p>
            </>
          ) : (
            <>
              <p className="text-white font-semibold text-lg mb-1">
                {AVAILABILITY.month} {AVAILABILITY.year} komplett ausgebucht.
              </p>
              <p className="text-gray-400 text-sm">
                Nächster freier Slot: Jetzt reservieren.
              </p>
            </>
          )}
        </div>
      </div>

      {/* 3. How it works */}
      <div className="bg-glow-ambient py-8 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-bg-dark text-base leading-relaxed">
            <strong>So einfach:</strong> Sie zahlen einmal — und das erste Jahr ist komplett abgedeckt.
            Website, Hosting, Betreuung, Support. Alles.
            Ab dem zweiten Jahr: CHF 59/Mt. oder CHF 590/Jahr.
          </p>
        </div>
      </div>

      {/* 4. Tier cards */}
      <div className="bg-bg py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Einmalige Investition
          </p>
          <p className="text-2xl font-bold text-bg-dark text-center mb-10">
            Drei Pakete. Ein Ziel: Ihr Betrieb online — richtig.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  tier.highlight
                    ? 'border-glow-deep ring-2 ring-glow-deep/20 shadow-lg md:scale-[1.03]'
                    : 'border-glow-soft'
                } bg-white`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-glow-deep text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  {tier.name}
                </p>
                <p className="text-sm text-gray-500 italic mb-5">{tier.tagline}</p>
                <div className="mb-2">
                  <p className="text-4xl font-bold text-bg-dark tracking-tight leading-none">
                    CHF {tier.price}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">erstes Jahr komplett</p>
                </div>
                <p className="text-xs text-gray-500 mb-5 leading-relaxed">{tier.description}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+41791752020"
                  className={`inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl transition-colors ${
                    tier.highlight
                      ? 'bg-glow-deep text-white hover:bg-glow-hot btn-glow'
                      : 'border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white'
                  }`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Gespräch vereinbaren
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 text-center mt-6">
            Alle Preise in CHF, exkl. MwSt. 8.1%. Erstes Jahr inkl. Hosting & Betreuung.
          </p>

          {/* Landingpage mention */}
          <div className="max-w-xl mx-auto mt-10 bg-bg-subtle border border-glow-soft rounded-xl py-5 px-8 text-center">
            <p className="text-bg-dark font-medium text-base">
              Brauchen Sie erst mal nur eine Seite?
            </p>
            <p className="text-gray-500 text-sm mt-1 mb-4">
              Landingpage — CHF 990 im ersten Jahr. Professionell, schnell, sofort online.
            </p>
            <a href="/landingpage" className="inline-flex items-center gap-2 text-glow-deep font-semibold text-sm hover:underline">
              Mehr erfahren →
            </a>
          </div>
        </div>
      </div>

      {/* 5. After Year 1 */}
      <div className="bg-bg-subtle py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Nach dem ersten Jahr
          </p>
          <p className="text-2xl font-bold text-bg-dark text-center mb-10">
            Hosting, Betreuung und Support — in einem einfachen Preis.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Monthly */}
            <div className="bg-white border-2 border-glow-soft rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">
                Monatlich
              </p>
              <p className="text-5xl font-bold text-bg-dark tracking-tight leading-none mb-1">
                59.—
              </p>
              <p className="text-xs text-gray-400 mb-6">CHF pro Monat · monatlich kündbar</p>
              <ul className="space-y-2">
                {MONTHLY_INCLUDES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Annual */}
            <div className="relative bg-white border-2 border-glow-deep ring-2 ring-glow-deep/20 rounded-2xl p-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-glow-deep text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap">
                  2 Monate geschenkt
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">
                Jährlich
              </p>
              <p className="text-5xl font-bold text-bg-dark tracking-tight leading-none mb-1">
                590.—
              </p>
              <p className="text-xs text-gray-400 mb-6">CHF pro Jahr · entspricht CHF 49/Mt.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                  Alles aus Monatlich
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                  CHF 118 pro Jahr gespart
                </li>
              </ul>
            </div>
          </div>

          {/* Inklusive / Gegen Aufpreis */}
          <div className="bg-white border border-glow-soft rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-bg-dark mb-3">Inklusive ✓</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    'Texte ändern, Bilder austauschen',
                    'Öffnungszeiten, Telefonnummer anpassen',
                    'Neuen Mitarbeiter hinzufügen',
                    'Kleine gestalterische Anpassungen',
                    'Technische Wartung & Sicherheit',
                    'Hosting & SSL',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-glow-deep shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-bg-dark mb-3">Gegen Aufpreis</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    'Komplett neue Seiten oder Sektionen',
                    'Umfangreiche Redesigns',
                    'Anbindung neuer Systeme (Buchung, Shop)',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-gray-300 shrink-0 mt-0.5">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs mt-3">
                  Immer mit klarem Preis vorab — keine Überraschungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Cost comparison */}
      <div className="bg-bg py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Was kostet es wirklich?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Basis',     price: "1'990", highlight: false },
              { name: 'Sichtbar', price: "2'990", highlight: true  },
              { name: 'Dominant', price: "4'490", highlight: false },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  tier.highlight ? 'border-glow-deep bg-glow-ambient' : 'border-gray-200 bg-white'
                }`}
              >
                <p className="font-semibold text-bg-dark mb-4">{tier.name}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jahr 1 (komplett)</span>
                    <span className="font-bold text-bg-dark">CHF {tier.price}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="text-gray-500">Ab Jahr 2</span>
                    <span className="text-gray-500">CHF 590/Jahr</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm text-center max-w-lg mx-auto">
            Grossanbieter binden Sie 3 Jahre — CHF 29–99/Mt. für eine Vorlage wie tausende andere.
            Kein eigenes Design, keine eigenen Texte, keine echte Kontrolle.{' '}
            <a href="/localsearch-vergleich" className="text-glow-deep hover:underline">
              Detaillierter Vergleich →
            </a>
          </p>
        </div>
      </div>

      {/* 7. FAQ */}
      <div className="bg-bg-subtle py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-10 text-center">
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
      <div className="bg-bg-dark py-16 px-6 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Bereit?</h2>
          <p className="text-gray-400 text-base mb-8">
            15 Minuten am Telefon. Ehrliche Einschätzung. Sie entscheiden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="tel:+41791752020"
              className="inline-flex items-center justify-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Anrufen
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
            >
              💬 WhatsApp
            </a>
          </div>
          <a href="mailto:henry@windo.ch" className="text-gray-500 hover:text-white transition-colors text-sm">
            henry@windo.ch
          </a>
        </div>
      </div>
    </div>
  );
}
