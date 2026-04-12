import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "localsearch Alternative Schweiz — windo.ch",
  description:
    "Individuell statt Vorlage. Monatlich kündbar statt 3-Jahres-Vertrag. Direkte Betreuung statt Hotline. Der sachliche Vergleich für Schweizer KMU.",
  alternates: { canonical: "https://www.windo.ch/localsearch-vergleich" },
};

const REFERENCES = [
  { domain: "zahnarzt-neumann.ch", type: "Zahnarztpraxis", since: 2024 },
  { domain: "schlafzahnmedizin.ch", type: "Schlafmedizin / Zahnarzt", since: 2025 },
  { domain: "topcutbarber.ch", type: "Barbershop", since: 2025 },
];

// Leistungsvergleich: Grossanbieter (typische Vertragsbedingungen, Stand April 2026) vs. windo.ch
const LEISTUNG_ROWS = [
  {
    label: "Design",
    ls: "Vorlagenbasiert — gleiches Layout wie viele andere KMU",
    windo: "Individuell — Ihr Betrieb, Ihr Charakter",
  },
  {
    label: "Bilder",
    ls: "Typischerweise Stockfotos",
    windo: "Ihre echten Fotos (oder lizenzfreies Material)",
  },
  {
    label: "Texte",
    ls: "Nicht inklusive",
    windo: "✓ Professionelle Texte inklusive",
  },
  {
    label: "Google PageSpeed",
    ls: "Typisch 40–70 / 100 ¹",
    windo: "✓ 90+ / 100 (messbar auf pagespeed.web.dev)",
  },
  {
    label: "SEO (Schema, Sitemap, Meta)",
    ls: "Grundlegend",
    windo: "✓ Vollständig — inkl. lokale SEO & Schema-Markup",
  },
  {
    label: "KI-Suche (ChatGPT, Perplexity)",
    ls: "Nicht optimiert",
    windo: "✓ Optimiert (Paket Sichtbar / Dominant)",
  },
  {
    label: "Ansprechpartner",
    ls: "Zentrale Hotline / Ticketsystem",
    windo: "✓ Direkt mit Henry — Telefon & WhatsApp",
  },
  {
    label: "Änderungen",
    ls: "Im Rahmen des Vertrags",
    windo: "✓ Kleine Änderungen inklusive — per WhatsApp",
  },
  {
    label: "Mindestlaufzeit",
    ls: "Typisch 36 Monate ²",
    windo: "✓ Monatlich kündbar (ab Jahr 2)",
  },
  {
    label: "Website gehört Ihnen",
    ls: "Nein — an die Plattform gebunden",
    windo: "✓ Ja — Code, Domain, Inhalte: alles Ihres",
  },
];

const PACKAGES = [
  {
    name: "Basis",
    price: "1\u2019990",
    subtitle: "Professionell online.",
    features: [
      "Individuelles Design — kein Template, kein Baukasten",
      "Alle Seiten, die Ihr Betrieb braucht",
      "Professionelle Texte inklusive",
      "Mobile-First, PageSpeed 90+",
      "SEO-Grundlagen & Google Business",
      "Hosting & Betreuung — 12 Monate inklusive",
      "Online in ~10 Arbeitstagen",
    ],
  },
  {
    name: "Sichtbar",
    price: "2\u2019990",
    subtitle: "Gefunden werden.",
    features: [
      "Alles aus Basis",
      "SEO-Texte — auf Ihre Region und Branche optimiert",
      "Google Unternehmensprofil: Einrichtung & Optimierung",
      "Schema-Markup für Google & KI-Suchen",
      "Eigene Seite pro Dienstleistung",
      "Online in ~10–15 Arbeitstagen",
    ],
    highlight: true,
  },
  {
    name: "Dominant",
    price: "4\u2019490",
    subtitle: "Die Referenz in Ihrer Branche.",
    features: [
      "Alles aus Sichtbar",
      "Premium-Texte & Content-Strategie",
      "Optimiert für KI-Suchen (ChatGPT, Perplexity)",
      "Vollständiges branchenspezifisches Schema-Markup",
      "Prioritäts-Support (Antwort am selben Tag)",
      "Online in ~15 Arbeitstagen",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Ich habe noch einen laufenden Vertrag bei localsearch. Was jetzt?",
    a: "Ich baue Ihre neue Website unabhängig auf — Ihr bisheriger Vertrag läuft untangiert weiter. Sobald die neue Seite fertig ist und Ihnen gefällt, stellen wir die Domain um. Den alten Vertrag können Sie dann zum nächstmöglichen Termin kündigen. Sie zahlen kurze Zeit parallel, haben danach aber eine deutlich bessere Website.",
  },
  {
    q: "Was passiert mit meiner Domain und meinen E-Mails?",
    a: "Beides bleibt bei Ihnen und wird nicht verändert. Die Domain zeigt nach der Umstellung auf Ihre neue Website — der Prozess dauert meist wenige Minuten.",
  },
  {
    q: "Was kostet es insgesamt?",
    a: "Ab CHF 1\u2019990 — erstes Jahr komplett: Website, Hosting, Betreuung und Support. Ab Jahr 2: CHF 59/Mt. oder CHF 590/Jahr. Monatlich kündbar, keine Mindestlaufzeit.",
  },
  {
    q: "Warum CHF 59 im Monat, wenn die Website mir gehört?",
    a: "Die Website gehört Ihnen — das ist richtig. Die CHF 59 decken Hosting, SSL, technische Wartung und Support. Wenn sich etwas ändern soll, schreiben Sie mir auf WhatsApp und ich erledige es. Das ist kein Callcenter — ich bin es.",
  },
  {
    q: "Muss ich Texte oder Bilder liefern?",
    a: "Nein. Ich schreibe alle Texte für Sie — auf Ihren Betrieb, Ihre Branche, Ihre Region abgestimmt. Fotos können Sie liefern, müssen Sie aber nicht.",
  },
  {
    q: "Bin ich an einen Vertrag gebunden?",
    a: "Nicht nach dem ersten Jahr. Das erste Jahr ist komplett: Sie zahlen einmal, sind zwölf Monate abgedeckt. Danach monatlich kündbar — Sie können jederzeit gehen und nehmen alles mit.",
  },
  {
    q: 'Was bedeutet "PageSpeed 90+/100"?',
    a: 'Google bewertet jede Website auf einer Skala von 0–100. Vorlagen-basierte Websites erreichen typisch 40–70. Meine Websites erreichen 90–100 — messbar und öffentlich überprüfbar auf pagespeed.web.dev. Besserer Score = schnellere Seite = besseres Google-Ranking.',
  },
  {
    q: "Kann ich die Website später selbst verwalten?",
    a: "Ja. Sie erhalten alle Zugänge und können jederzeit Inhalte selbst anpassen. Für alles, was über einfache Textänderungen hinausgeht, bin ich per WhatsApp erreichbar — das ist bei mir inklusive.",
  },
];

const waText = encodeURIComponent(
  "Hallo Henry, ich schaue gerade die Alternative zu meinem bisherigen Website-Anbieter an und hätte ein paar Fragen."
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
      <a
        href="tel:+41791752020"
        className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow text-sm"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        079 175 20 20
      </a>
      <a
        href={`https://wa.me/41791752020?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl text-sm"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}

export default function VergleichPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-bg-dark min-h-[65vh] flex flex-col items-center justify-center text-center px-6 py-24 text-white">
        <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-6">
          Für Schweizer KMU
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mb-6 tracking-tight">
          Individuell. Persönlich.<br />Monatlich kündbar.
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mb-4 leading-relaxed">
          Sie prüfen einen Grossanbieter — oder wollen weg.
          Lesen Sie das zuerst.
        </p>
        <p className="text-sm text-gray-500 max-w-md mb-10">
          Kein Template. Keine 3-Jahres-Bindung. Direkter Kontakt zu einer Person — nicht zu einer Hotline.
        </p>
        <CTAButtons />
        <p className="mt-4 text-xs text-gray-600">Kostenlos · 15 Minuten</p>
      </section>

      {/* SECTION 1: Was beim Grossanbieter-Modell gilt */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Was Sie wissen sollten</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-8">
            Was beim Grossanbieter-Modell typischerweise gilt
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Grossanbieter liefern schnell eine Website — das ist ihr Vorteil.
            Was dabei typischerweise passiert:
          </p>
          <ul className="space-y-5 mb-10">
            {[
              {
                title: "Ihre Website sieht aus wie hunderte andere.",
                desc: "Vorlagen sind für jeden. Ein Schreiner in Luzern und ein Coiffeur in Zürich können identische Layouts haben — andere Farben, gleiche Struktur. Kein eigener Charakter.",
              },
              {
                title: "Texte müssen Sie selbst schreiben oder bezahlen.",
                desc: "Das Erstellen professioneller Texte ist meistens nicht inklusive. Sie schreiben selbst — oder beauftragen einen Texter separat.",
              },
              {
                title: "Die Website gehört der Plattform, nicht Ihnen.",
                desc: "Wenn Sie wechseln, verlieren Sie alles: Design, Inhalte, Struktur. Sie fangen von vorne an. Bei mir gehört Ihnen der Code — von Anfang an.",
              },
              {
                title: "3 Jahre Mindestlaufzeit binden Sie fest.",
                desc: "Typische Grossanbieter-Verträge laufen 36 Monate. In dieser Zeit ändern sich Betriebe — Preise, Angebote, Teams. Änderungen am Vertrag sind meist aufwendig.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="text-glow-deep flex-shrink-0 mt-1 font-bold text-lg leading-none">—</span>
                <div>
                  <p className="font-semibold text-bg-dark mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-glow-soft pl-5 text-gray-500 italic text-sm leading-relaxed">
            Die Frage ist nicht, ob die Website funktioniert. Die Frage ist, ob sie Ihrem
            Betrieb wirklich gerecht wird — und ob Sie die Kontrolle behalten.
          </blockquote>
        </div>
      </section>

      {/* SECTION 2: Leistungsvergleich */}
      <section className="py-20 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Leistungsvergleich</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-8">
            Was Sie für Ihr Geld bekommen
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-400 w-1/4" />
                  <th className="text-left py-3 pr-4 font-semibold text-gray-400 w-5/12">
                    Grossanbieter (typisch)
                  </th>
                  <th className="text-left py-3 font-semibold text-glow-deep w-5/12">windo.ch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {LEISTUNG_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 text-gray-500 font-medium align-top">{row.label}</td>
                    <td className="py-3 pr-4 text-gray-400 align-top">{row.ls}</td>
                    <td className="py-3 font-medium text-bg-dark align-top">{row.windo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            ¹ PageSpeed-Angaben für Vorlagen-Websites sind Richtwerte; messbar auf pagespeed.web.dev.<br />
            ² Vertragslaufzeiten und Konditionen von Drittanbietern können abweichen.
            Prüfen Sie die aktuellen AGB des jeweiligen Anbieters.
            Angaben basieren auf öffentlich verfügbaren Produktinformationen (Stand April 2026).
          </p>
        </div>
      </section>

      {/* SECTION 3: Preisvergleich — hidden on mobile */}
      <section className="py-20 px-6 bg-bg hidden sm:block">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Preisvergleich</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-3">
            Was es wirklich kostet
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            Inklusive aller Kosten über 5 Jahre — zum Vergleich mit dem
            mittleren Paket eines typischen Grossanbieters.
          </p>

          {/* 5-year total — the key comparison */}
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-bg-subtle">
                  <th className="text-left py-3 px-5 font-semibold text-gray-400" />
                  <th className="text-left py-3 px-5 font-semibold text-gray-400">
                    Grossanbieter M
                  </th>
                  <th className="text-left py-3 px-5 font-semibold text-glow-deep">
                    Windo Basis
                  </th>
                  <th className="text-left py-3 px-5 font-semibold text-glow-deep">
                    Windo Sichtbar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-5 text-gray-500 font-medium">Jahr 1 (komplett)</td>
                  <td className="py-3 px-5 text-gray-400">
                    CHF 3&apos;078
                    <span className="block text-xs text-gray-300">Setup 2&apos;490 + 12 × 49</span>
                  </td>
                  <td className="py-3 px-5 font-semibold text-glow-deep">
                    CHF 1&apos;990
                    <span className="block text-xs text-glow-deep/60">alles inklusive</span>
                  </td>
                  <td className="py-3 px-5 font-semibold text-glow-deep">
                    CHF 2&apos;990
                    <span className="block text-xs text-glow-deep/60">alles inklusive</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-5 text-gray-500 font-medium">Jahre 2–5 (48 Mt.)</td>
                  <td className="py-3 px-5 text-gray-400">CHF 2&apos;352 <span className="text-xs text-gray-300">(48 × 49)</span></td>
                  <td className="py-3 px-5">CHF 2&apos;832 <span className="text-xs text-gray-400">(48 × 59)</span></td>
                  <td className="py-3 px-5">CHF 2&apos;832 <span className="text-xs text-gray-400">(48 × 59)</span></td>
                </tr>
                <tr className="bg-glow-ambient font-semibold">
                  <td className="py-3 px-5 text-bg-dark">Total 5 Jahre</td>
                  <td className="py-3 px-5 text-gray-600">CHF 5&apos;430</td>
                  <td className="py-3 px-5 text-glow-deep">CHF 4&apos;822</td>
                  <td className="py-3 px-5 text-glow-deep">CHF 5&apos;822</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 text-gray-500 font-medium">Mindestlaufzeit</td>
                  <td className="py-3 px-5 text-gray-400">Typisch 3 Jahre</td>
                  <td className="py-3 px-5 text-glow-deep font-medium">Keine</td>
                  <td className="py-3 px-5 text-glow-deep font-medium">Keine</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 text-gray-500 font-medium">Website gehört Ihnen</td>
                  <td className="py-3 px-5 text-gray-400">Nein</td>
                  <td className="py-3 px-5 text-glow-deep font-medium">✓ Ja</td>
                  <td className="py-3 px-5 text-glow-deep font-medium">✓ Ja</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 text-gray-500 font-medium">Texte inklusive</td>
                  <td className="py-3 px-5 text-gray-400">Nein</td>
                  <td className="py-3 px-5 text-glow-deep font-medium">✓ Ja</td>
                  <td className="py-3 px-5 text-glow-deep font-medium">✓ Ja</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Drittanbieter-Preise basieren auf öffentlich verfügbaren Informationen (Stand April 2026).
            Aktuelle Konditionen beim jeweiligen Anbieter prüfen.
            Windo Basis über 5 Jahre günstiger als Grossanbieter M — mit individuellem Design, professionellen
            Texten und voller Eigentümerschaft an der Website.
          </p>
        </div>
      </section>

      {/* SECTION 4: Persönlich — the emotional core */}
      <section className="py-20 px-6 bg-bg-dark text-white">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Der Unterschied</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Eine Person. Nicht ein Ticket.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Bei einem Grossanbieter gibt es eine Vertriebs-Hotline, ein Support-Team und
            einen Prozess. Ich bin Henry — ich baue Ihre Website, ich schreibe Ihre Texte,
            ich bin erreichbar.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Sie schreiben auf WhatsApp.",
                desc: "Ich antworte — nicht ein Support-Mitarbeiter, der Ihren Fall erst aufnehmen muss.",
              },
              {
                title: "Ich kenne Ihre Website.",
                desc: "Ich habe sie gebaut. Wenn Sie etwas ändern wollen, muss ich nicht von vorne anfangen.",
              },
              {
                title: "Keine Vertretung, keine Übergaben.",
                desc: "Kein \"Ihr zuständiger Berater hat gewechselt\". Ein Kontakt, von Anfang bis Ende.",
              },
              {
                title: "Ehrliche Einschätzung statt Upsell.",
                desc: "Wenn Ihr Betrieb eine einfache Lösung braucht, sage ich das. Ich habe kein Vertriebsziel.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="font-semibold text-white mb-2">{item.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Referenzen */}
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
                className="bg-white rounded-2xl border border-glow-soft p-5"
              >
                <p className="font-semibold text-sm text-bg-dark mb-1">{ref.domain}</p>
                <p className="text-xs text-gray-500 mb-2">{ref.type}</p>
                <p className="text-xs text-glow-deep font-medium">✓ Seit {ref.since}</p>
                <span className="inline-block mt-2 bg-glow-ambient text-glow-deep text-xs font-semibold px-2 py-0.5 rounded-full">
                  PageSpeed 90+/100
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Jede Website ist individuell — kein Template, kein Baukasten.
            Google-Scores sind öffentlich messbar auf pagespeed.web.dev.
          </p>
        </div>
      </section>

      {/* SECTION 6: Pakete */}
      <section className="py-20 px-6 bg-bg-dark">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-glow font-semibold mb-4">
            Angebot
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ihre neue Website — erstes Jahr komplett
          </h2>
          <p className="text-gray-400 text-sm mb-10">
            Website, Hosting, Betreuung & Support in einem Preis. Danach CHF 59/Mt. — monatlich kündbar.
          </p>
          <div className="grid gap-6 sm:grid-cols-3 mb-10">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-6 ${
                  pkg.highlight
                    ? "border-glow-deep bg-white/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block bg-glow-deep text-white text-xs font-semibold px-3 py-0.5 rounded-full mb-3">
                    Beliebteste Wahl
                  </span>
                )}
                <p className="font-bold text-white mb-0.5">{pkg.name}</p>
                <p className="text-xs text-gray-400 italic mb-4">{pkg.subtitle}</p>
                <p className="text-4xl font-bold text-white tracking-tight leading-none mb-1">
                  {pkg.price}.—
                </p>
                <p className="text-xs text-gray-500 mb-5">CHF · erstes Jahr komplett</p>
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
              Ab Jahr 2 · Hosting & Betreuung
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-12 mb-6">
              <div>
                <p className="text-4xl font-bold text-white tracking-tight leading-none mb-1">
                  59.—
                </p>
                <p className="text-xs text-white/40">CHF / Monat · monatlich kündbar</p>
              </div>
              <div className="text-sm text-gray-400">
                oder CHF 590/Jahr{" "}
                <span className="text-glow font-semibold">(2 Monate geschenkt)</span>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Hosting & SSL (Schweizer Server)",
                "Technische Wartung & Sicherheit",
                "Kleine Änderungen inklusive",
                "Support direkt per WhatsApp & Telefon",
                "Ihre Website bleibt Ihnen — jederzeit portierbar",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-glow mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-600 mt-4">Alle Preise exkl. MWSt 8.1%.</p>
        </div>
      </section>

      {/* SECTION 7: Ablauf */}
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
                title: "Kurzes Telefonat (ca. 10–15 Min.)",
                desc: "Wir besprechen, was Sie brauchen und was ich Ihnen anbieten kann. Unverbindlich, kein Verkaufsgespräch. Ich sage Ihnen ehrlich, ob es passt.",
              },
              {
                n: "2",
                title: "Ich übernehme alles",
                desc: "Design, Texte, Technik, SEO. Sie erhalten einen Link zur Vorschau — zwei Feedbackrunden sind inklusive. Sie müssen nichts selbst schreiben.",
              },
              {
                n: "3",
                title: "In ~10 Arbeitstagen online",
                desc: "Ich stelle die Domain um. Ihre E-Mail-Adressen bleiben unverändert. Laufende Verträge bei anderen Anbietern können Sie danach kündigen — ich helfe dabei wenn nötig.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-glow-deep text-white flex items-center justify-center font-bold text-sm">
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-bg-dark">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <blockquote className="mt-10 border-l-4 border-glow-soft pl-5 italic text-gray-500 text-sm leading-relaxed">
            Sie müssen sich um nichts kümmern — das ist der ganze Punkt.
          </blockquote>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Häufige Fragen</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-10">
            Was Kunden meistens fragen
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

      {/* SECTION 9: CTA */}
      <section className="py-24 px-6 bg-bg-dark">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sprechen Sie mit Henry.
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Nicht mit einer Hotline. Nicht mit einem Verkaufsteam.
            Ein kurzes Gespräch — ich sage Ihnen ehrlich, ob und was ich für Sie tun kann.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Kostenlos · Unverbindlich · Kein Verkaufsdruck
          </p>
          <div className="mb-8">
            <p className="font-semibold text-white text-lg">Henry Barrows</p>
            <p className="text-gray-500 text-sm">079 175 20 20 · henry@windo.ch</p>
          </div>
          <CTAButtons className="justify-center" />
          <p className="mt-6 text-xs text-gray-600">
            windo.ch ist nicht mit localsearch AG assoziiert. Alle Angaben zu Drittanbietern
            basieren auf öffentlich verfügbaren Informationen (Stand April 2026).
          </p>
        </div>
      </section>
    </>
  );
}
