import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angebot — windo.ch',
  description:
    "Professionelle Websites für Schweizer KMU. Einmalig ab CHF 1'490, danach CHF 59/Monat. Monatlich kündbar.",
  alternates: { canonical: 'https://www.windo.ch/angebot' },
};

const PACKAGES = [
  {
    name: 'Starter',
    regular: "2'900",
    price: "1'490",
    subtitle: 'Für Einzelunternehmer und kleine Betriebe',
    features: [
      'Individuelles Design',
      'Professionelle Basistexte inklusive',
      '5 Seiten (Start, Über uns, Angebot, Galerie, Kontakt)',
      'Mobile-First, responsive',
      'SEO-Grundlagen & Schema-Markup',
      'Google PageSpeed: 100/100',
      'Online in ~10 Arbeitstagen',
    ],
  },
  {
    name: 'Business',
    regular: "3'900",
    price: "1'990",
    subtitle: 'Für etablierte KMU mit mehreren Dienstleistungen',
    highlight: true,
    features: [
      'Alles aus Starter',
      '7+ Seiten inkl. einzelne Service-Unterseiten',
      'Ausführlichere SEO-Texte',
      'Google Unternehmensprofil: Optimierung',
      'Online in ~10–15 Arbeitstagen',
    ],
  },
  {
    name: 'Professional',
    regular: "4'900",
    price: "2'490",
    subtitle: 'Für Praxen, Kanzleien und anspruchsvolle Betriebe',
    features: [
      'Alles aus Business',
      '10+ Seiten',
      'Premium SEO-Texte',
      'Vollständiges Schema-Markup',
      'Google Unternehmensprofil: Vollständige Optimierung',
      'Optimiert für KI-Suchmaschinen (ChatGPT, Perplexity)',
      'Online in ~15 Arbeitstagen',
    ],
  },
];

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
    a: "Einmalig ab CHF 1'490 für die neue Website — danach CHF 59/Monat für Betreuung, Hosting und Support. Monatlich kündbar, keine Mindestlaufzeit.",
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

export default function AngebotPage() {
  return (
    <div className="pt-16 bg-bg min-h-screen">
      {/* Hero */}
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

      {/* Packages */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
          Einmalige Investition · Frühlings-Aktion gültig bis 30. April 2026
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 flex flex-col ${
                pkg.highlight
                  ? 'bg-bg-dark text-white ring-2 ring-glow-deep'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${pkg.highlight ? 'text-glow' : 'text-gray-400'}`}>
                {pkg.name}
              </p>
              <p className={`text-xs mb-5 leading-relaxed ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                {pkg.subtitle}
              </p>
              <div className="mb-5">
                <p className={`text-xs line-through mb-0.5 ${pkg.highlight ? 'text-gray-600' : 'text-gray-300'}`}>
                  CHF {pkg.regular}
                </p>
                <p className={`text-4xl font-bold tracking-tight ${pkg.highlight ? 'text-white' : 'text-bg-dark'}`}>
                  {pkg.price}
                </p>
                <p className="text-xs mt-0.5 text-gray-400">CHF, einmalig</p>
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-xs leading-relaxed ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`mt-0.5 shrink-0 ${pkg.highlight ? 'text-glow' : 'text-glow-deep'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                  pkg.highlight
                    ? 'bg-glow-deep text-white hover:bg-glow-hot btn-glow'
                    : 'border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white'
                }`}
              >
                Anfragen
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-5">Alle Preise in CHF, exkl. MWSt 8.1%.</p>
      </div>

      {/* Monthly */}
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

      {/* FAQ */}
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

      {/* CTA */}
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
              📞 Anrufen
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
