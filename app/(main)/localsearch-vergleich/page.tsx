import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "localsearch Alternative für KMU — windo.ch",
  description:
    "Moderne KMU-Website mit perfekten Google-Scores, persönlichem Service und fairen Preisen. Der direkte Vergleich.",
  alternates: { canonical: "https://www.windo.ch/localsearch-vergleich" },
};

const REFERENCES = [
  { domain: "zahnarzt-neumann.ch", type: "Zahnarztpraxis", since: 2024 },
  { domain: "schlafzahnmedizin.ch", type: "Schlafmedizin / Zahnarzt", since: 2025 },
  { domain: "topcutbarber.ch", type: "Barbershop", since: 2025 },
];

const LEISTUNG_ROWS = [
  { label: "Design", ls: "Vorlage — identisch mit hunderten KMU", windo: "Individuell — Ihr Betrieb, Ihr Charakter" },
  { label: "Bilder", ls: "Stockfotos", windo: "Ihre echten Fotos" },
  { label: "Texte", ls: "Nicht inklusive", windo: "✓ Professionelle Texte inklusive" },
  { label: "Google PageSpeed", ls: "40–70/100", windo: "✓ 100/100" },
  { label: "SEO (Schema, Sitemap, Meta)", ls: "Minimal", windo: "✓ Vollständig" },
  { label: "KI-Suche (ChatGPT, Perplexity)", ls: "✕", windo: "✓ Optimiert" },
  { label: "Persönlicher Ansprechpartner", ls: "Callcenter / Ticket", windo: "✓ Direkt per Telefon & WhatsApp" },
  { label: "Änderungen inklusive", ls: "Limitiert", windo: "✓ Per WhatsApp — ich erledige es" },
  { label: "Vertragslaufzeit", ls: "3 Jahre", windo: "✓ Monatlich kündbar" },
  { label: "Website gehört Ihnen", ls: "✕ Plattform-gebunden", windo: "✓ Alles gehört Ihnen" },
];

const PACKAGES = [
  {
    name: "Starter",
    regular: "2'900",
    aktion: "1'490",
    subtitle: "Für Einzelunternehmer und kleine Betriebe",
    features: [
      "Individuelles Design",
      "Professionelle Basistexte inklusive",
      "5 Seiten (Start, Über uns, Angebot, Galerie, Kontakt)",
      "Mobile-First, responsive",
      "SEO-Grundlagen & Schema-Markup",
      "Google PageSpeed: 100/100",
      "Online in ~10 Arbeitstagen",
    ],
  },
  {
    name: "Business",
    regular: "3'900",
    aktion: "1'990",
    subtitle: "Für etablierte KMU mit mehreren Dienstleistungen",
    features: [
      "Alles aus Starter",
      "7+ Seiten inkl. Service-Unterseiten",
      "Ausführlichere SEO-Texte",
      "Google Unternehmensprofil: Optimierung",
      "Online in ~10–15 Arbeitstagen",
    ],
    highlight: true,
  },
  {
    name: "Professional",
    regular: "4'900",
    aktion: "2'490",
    subtitle: "Für Praxen, Kanzleien und anspruchsvolle Betriebe",
    features: [
      "Alles aus Business",
      "10+ Seiten",
      "Premium SEO-Texte",
      "Vollständiges Schema-Markup",
      "Optimiert für KI-Suchmaschinen",
      "Online in ~15 Arbeitstagen",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Was kostet es insgesamt?",
    a: "Einmalig ab CHF 1'490 (Frühlings-Aktion) für die neue Website. Danach CHF 59 im Monat für Betreuung, Hosting und Support — alles inklusive. Monatlich kündbar.",
  },
  {
    q: "Warum CHF 59 im Monat, wenn die Website mir gehört?",
    a: "Die Website gehört Ihnen — das ist richtig. Die CHF 59 sind dafür, dass Sie sich um nichts kümmern müssen: Hosting, SSL, Sicherheit, technische Wartung, und wenn sich etwas ändern soll, schreiben Sie mir und ich erledige es.",
  },
  {
    q: "Ich habe meine Website bei localsearch. Wie läuft der Wechsel?",
    a: "Ich baue Ihre neue Website unabhängig auf. Sobald sie fertig ist und Ihnen gefällt, stellen wir um. Sie können danach den alten Vertrag kündigen. Den gesamten Prozess übernehme ich.",
  },
  {
    q: "Was passiert mit meiner Domain und meinen E-Mails?",
    a: "Beides bleibt bei Ihnen und wird nicht verändert.",
  },
  {
    q: "Muss ich Texte liefern?",
    a: "Nein. Ich schreibe alle Texte für Sie. Sie lesen gegen und geben Feedback.",
  },
  {
    q: "Bin ich an einen Vertrag gebunden?",
    a: "Nein. Monatlich kündbar. Die Website gehört Ihnen — inklusive aller Daten und Inhalte.",
  },
  {
    q: 'Was bedeutet "PageSpeed 100/100"?',
    a: "Google bewertet jede Website mit einem Score von 0–100. Die meisten Vorlagen-Websites erreichen 40–70. Meine Websites erreichen 100/100 — messbar auf pagespeed.web.dev. Besserer Score = besseres Ranking = mehr Kunden.",
  },
];

const waText = encodeURIComponent(
  "Hallo Henry, ich interessiere mich für eine neue Website und hätte ein paar Fragen."
);

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase font-semibold text-glow-deep/70 mb-4">
      {children}
    </p>
  );
}

function CTAButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      <a href="tel:+41791752020" className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow text-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        079 175 20 20
      </a>
      <a href={`https://wa.me/41791752020?text=${waText}`} className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl text-sm">
        💬 WhatsApp
      </a>
    </div>
  );
}

export default function VergleichPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-bg-dark min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 text-white">
        <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-6">
          Für Schweizer KMU
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6 tracking-tight">
          Ist Ihre Website noch zeitgemäss?
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
          Moderne Website. Persönlicher Service. Faire Preise.
          <br />
          Der direkte Vergleich für Schweizer KMU.
        </p>
        <CTAButtons />
        <p className="mt-4 text-xs text-gray-600">Kostenlos · Kein Auftrag nötig · 15 Minuten</p>
      </section>

      {/* SECTION 1: Das Problem */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Das Problem</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-8">
            Was viele KMU nicht wissen
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Viele Schweizer KMU haben ihre Website zwischen 2018 und 2021 bei einem grossen
            Anbieter erstellen lassen. Die Seite funktioniert — sie lädt, sie hat SSL, sie ist online.
          </p>
          <p className="font-semibold text-bg-dark mb-4">Aber:</p>
          <ul className="space-y-4 mb-8">
            {[
              "Jede Seite sieht gleich aus. Dieselbe Vorlage, dasselbe Layout. Ein Gipser in Domat/Ems sieht gleich aus wie ein Maler in Bern.",
              "Stockfotos statt echte Arbeit. Ihre Kunden sehen generische Bilder statt Ihrer echten Projekte, Ihrem Team, Ihrem Betrieb.",
              "Kein Charakter. 35 Jahre Erfahrung, 30 Mitarbeiter — und die Website sieht aus wie ein Startup, das letzte Woche gegründet wurde.",
              "Erster Eindruck zählt. Ein potenzieller Kunde entscheidet in 3 Sekunden: Vertraue ich diesem Betrieb?",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-gray-600">
                <span className="text-glow-deep flex-shrink-0 mt-0.5 font-bold">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-glow-soft pl-5 text-gray-500 italic">
            Ihre Website ist oft der erste Kontakt mit neuen Kunden. Die Frage ist nicht, ob
            sie funktioniert — sondern ob sie Ihrem Betrieb gerecht wird.
          </blockquote>
        </div>
      </section>

      {/* SECTION 2: Preisvergleich — tables hidden on mobile */}
      <section className="py-20 px-6 bg-bg-subtle hidden sm:block">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Preisvergleich</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-10">
            Grosser Anbieter vs. persönlicher Service
          </h2>

          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">
            Einmalige Kosten
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse bg-bg-card rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-glow-soft">
                  <th className="text-left py-3 px-4 font-semibold text-gray-400" />
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls S</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls M</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls L</th>
                  <th className="text-left py-3 px-4 font-semibold text-glow-deep">Windo S</th>
                  <th className="text-left py-3 px-4 font-semibold text-glow-deep">Windo B</th>
                  <th className="text-left py-3 px-4 font-semibold text-glow-deep">Windo P</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Regulär</td>
                  <td className="py-3 px-4 text-gray-400">CHF 790</td>
                  <td className="py-3 px-4 text-gray-400">CHF 2&apos;490</td>
                  <td className="py-3 px-4 text-gray-400">CHF 5&apos;090</td>
                  <td className="py-3 px-4 font-medium">CHF 2&apos;900</td>
                  <td className="py-3 px-4 font-medium">CHF 3&apos;900</td>
                  <td className="py-3 px-4 font-medium">CHF 4&apos;900</td>
                </tr>
                <tr className="bg-glow-ambient">
                  <td className="py-3 px-4 text-glow-deep font-semibold">Frühlings-Aktion</td>
                  <td className="py-3 px-4 text-gray-300">—</td>
                  <td className="py-3 px-4 text-gray-300">—</td>
                  <td className="py-3 px-4 text-gray-300">—</td>
                  <td className="py-3 px-4 font-bold text-glow-deep">CHF 1&apos;490</td>
                  <td className="py-3 px-4 font-bold text-glow-deep">CHF 1&apos;990</td>
                  <td className="py-3 px-4 font-bold text-glow-deep">CHF 2&apos;490</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">
            Monatliche Kosten
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse bg-bg-card rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-glow-soft">
                  <th className="text-left py-3 px-4 font-semibold text-gray-400" />
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls S</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls M</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls L</th>
                  <th className="text-left py-3 px-4 font-semibold text-glow-deep" colSpan={3}>
                    Windo (alle Pakete)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Pro Monat</td>
                  <td className="py-3 px-4 text-gray-400">CHF 29</td>
                  <td className="py-3 px-4 text-gray-400">CHF 49</td>
                  <td className="py-3 px-4 text-gray-400">CHF 99</td>
                  <td className="py-3 px-4 font-bold text-glow-deep" colSpan={3}>CHF 59</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Mindestlaufzeit</td>
                  <td className="py-3 px-4 text-gray-400">3 Jahre</td>
                  <td className="py-3 px-4 text-gray-400">3 Jahre</td>
                  <td className="py-3 px-4 text-gray-400">3 Jahre</td>
                  <td className="py-3 px-4 font-bold text-glow-deep" colSpan={3}>Keine</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">
            Gesamtkosten über 5 Jahre
          </h3>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-sm border-collapse bg-bg-card rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-glow-soft">
                  <th className="text-left py-3 px-4 font-semibold text-gray-400" />
                  <th className="text-left py-3 px-4 font-semibold text-gray-400">ls M</th>
                  <th className="text-left py-3 px-4 font-semibold text-glow-deep">Windo Starter</th>
                  <th className="text-left py-3 px-4 font-semibold text-glow-deep">Windo Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Setup</td>
                  <td className="py-3 px-4 text-gray-400">CHF 2&apos;490</td>
                  <td className="py-3 px-4">CHF 1&apos;490</td>
                  <td className="py-3 px-4">CHF 1&apos;990</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">60 × Monatlich</td>
                  <td className="py-3 px-4 text-gray-400">CHF 2&apos;940</td>
                  <td className="py-3 px-4">CHF 3&apos;540</td>
                  <td className="py-3 px-4">CHF 3&apos;540</td>
                </tr>
                <tr className="bg-glow-ambient font-semibold">
                  <td className="py-3 px-4 text-bg-dark">Total</td>
                  <td className="py-3 px-4 text-gray-500">CHF 5&apos;430</td>
                  <td className="py-3 px-4 text-glow-deep">CHF 5&apos;030</td>
                  <td className="py-3 px-4 text-glow-deep">CHF 5&apos;530</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Vertragsbindung</td>
                  <td className="py-3 px-4 text-gray-400">3 Jahre</td>
                  <td className="py-3 px-4 text-glow-deep font-medium">Keine</td>
                  <td className="py-3 px-4 text-glow-deep font-medium">Keine</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-500 font-medium">Website gehört Ihnen</td>
                  <td className="py-3 px-4 text-gray-400">✕</td>
                  <td className="py-3 px-4 text-glow-deep font-medium">✓</td>
                  <td className="py-3 px-4 text-glow-deep font-medium">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Alle Angaben zu Drittanbietern basieren auf öffentlich verfügbaren Informationen (Stand: April 2026).
          </p>
        </div>
      </section>

      {/* SECTION 3: Leistungsvergleich */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Leistungsvergleich</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-8">
            Was Sie für Ihr Geld bekommen
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-400 w-1/3" />
                  <th className="text-left py-3 pr-4 font-semibold text-gray-400">
                    Typischer Grossanbieter
                  </th>
                  <th className="text-left py-3 font-semibold text-glow-deep">windo.ch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {LEISTUNG_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 text-gray-500 font-medium">{row.label}</td>
                    <td className="py-3 pr-4 text-gray-400">{row.ls}</td>
                    <td className="py-3 font-medium text-bg-dark">{row.windo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: Referenzen */}
      <section className="py-20 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Referenzen</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-8">
            So sehen meine Websites aus
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {REFERENCES.map((ref) => (
              <div
                key={ref.domain}
                className="bg-bg-card rounded-2xl border border-glow-soft card-warm p-5"
              >
                <p className="font-semibold text-sm text-bg-dark mb-1">{ref.domain}</p>
                <p className="text-xs text-gray-500 mb-2">{ref.type}</p>
                <p className="text-xs text-glow-deep font-medium">✓ Seit {ref.since}</p>
                <span className="inline-block mt-2 bg-glow-ambient text-glow-deep text-xs font-semibold px-2 py-0.5 rounded-full">
                  PageSpeed 100/100
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic">
            Jede Website ist individuell. Keine Vorlagen, keine Baukästen. Perfekte
            Google-Scores — messbar auf pagespeed.web.dev.
          </p>
        </div>
      </section>

      {/* SECTION 5: Pakete */}
      <section className="py-20 px-6 bg-bg-dark">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-glow font-semibold mb-4">
            Frühlings-Aktion 2026 · bis 30. April
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Ihre neue Website — einmalig
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 mb-12">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-6 ${
                  pkg.highlight
                    ? "border-glow-deep bg-white/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="font-bold text-white mb-1">{pkg.name}</p>
                <p className="text-xs text-gray-400 mb-4">{pkg.subtitle}</p>
                <p className="text-gray-500 line-through text-sm mb-1">CHF {pkg.regular}</p>
                <p className="text-4xl font-bold text-white tracking-tight leading-none mb-1">
                  {pkg.aktion}.—
                </p>
                <p className="text-xs text-gray-500 mb-5">CHF einmalig*</p>
                <ul className="space-y-1.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-glow mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              Monatlich · Betreuung & Hosting
            </p>
            <p className="text-5xl font-bold text-white tracking-tight leading-none mb-1">59.—</p>
            <p className="text-xs text-white/40 mb-6">CHF / Monat · monatlich kündbar</p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-4">
              {[
                "Hosting & SSL-Zertifikat",
                "Technische Wartung & Sicherheit",
                "Kleine Änderungen inklusive",
                "Support per Telefon & WhatsApp",
                "Ihre Website gehört Ihnen",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-glow mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-600 mt-4">*Frühlings-Aktion gültig bis 30. April 2026. Alle Preise exkl. MWSt 8.1%.</p>
        </div>
      </section>

      {/* SECTION 6: Ablauf */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Ablauf</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-10">
            In 3 Schritten zur neuen Website
          </h2>
          <ol className="space-y-8">
            {[
              {
                n: "1",
                title: "Kurzes Telefonat (10 Min.)",
                desc: "Wir besprechen, was Sie brauchen. Unverbindlich, kein Verkaufsgespräch.",
              },
              {
                n: "2",
                title: "Ich übernehme alles",
                desc: "Design, Texte, Technik, SEO. Sie erhalten einen Link zur Vorschau und geben Feedback. 2 Korrekturrunden inklusive.",
              },
              {
                n: "3",
                title: "In 10 Arbeitstagen online",
                desc: "Ich kümmere mich um die Umstellung. Ihre Domain und E-Mail-Adressen bleiben unverändert. Danach: CHF 59 im Monat, monatlich kündbar.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-glow-deep text-white flex items-center justify-center font-bold text-sm">
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-bg-dark">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <blockquote className="mt-10 border-l-4 border-glow-soft pl-5 italic text-gray-500">
            Sie müssen sich um nichts kümmern. Das ist der ganze Punkt.
          </blockquote>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-20 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-10">
            Häufige Fragen
          </h2>
          <dl className="divide-y divide-gray-200">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-semibold text-bg-dark mb-2">{item.q}</dt>
                <dd className="text-gray-500 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-20 px-6 bg-bg-dark text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für eine Website, die Ihrem Betrieb gerecht wird?
          </h2>
          <p className="text-gray-400 mb-6">10 Minuten am Telefon reichen. Unverbindlich.</p>
          <div className="mb-8">
            <p className="font-semibold text-white">Henry Barrows</p>
            <p className="text-gray-500 text-sm">079 175 20 20 · henry@windo.ch</p>
          </div>
          <CTAButtons className="justify-center" />
          <p className="mt-4 text-xs text-gray-600">Kostenlos · Kein Auftrag nötig · 15 Minuten</p>
        </div>
      </section>
    </>
  );
}
