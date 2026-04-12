import type { Metadata } from 'next';
import Image from 'next/image';
import { AVAILABILITY } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Professionelle Landingpage — CHF 990 | windo.ch',
  description:
    "Landingpage erstellen lassen Schweiz ab CHF 990. One-Page-Website für Kleinunternehmen — individuelles Design, professionelle Texte, in 2–3 Arbeitstagen online. Erstes Jahr komplett.",
  alternates: { canonical: 'https://www.windo.ch/landingpage' },
  keywords: [
    'website erstellen lassen günstig schweiz',
    'one page website kosten',
    'landingpage erstellen lassen',
    'einfache website für kleinunternehmen',
    'günstige website schweiz',
  ],
};

const WA = 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Landingpage.';

const FEATURES = [
  'Individuelles Design — kein Baukasten, kein Template',
  'Mobile-first, Google PageSpeed 90+',
  'Ihr Angebot, Kontakt und Standort — alles auf einer Seite',
  'Professionelle Texte inklusive',
  'In 2–3 Arbeitstagen online',
  'Erstes Jahr komplett: Hosting, Betreuung & Support inklusive',
];

const FOR_WHO = [
  {
    emoji: '🚀',
    title: 'Sie starten gerade',
    desc: 'Und brauchen schnell etwas Professionelles — ohne monatelange Agenturprojekte.',
  },
  {
    emoji: '🔄',
    title: 'Ihre Website ist veraltet',
    desc: 'Sie wollen sofort einen sauberen Ersatz, bevor Kunden abspringen.',
  },
  {
    emoji: '🎯',
    title: 'Sie testen ein neues Angebot',
    desc: 'Eine fokussierte Landingpage für eine Kampagne, einen Launch oder eine neue Dienstleistung.',
  },
];

const REFERENCES = [
  {
    name: 'Top Cut Barber',
    domain: 'topcutbarber.ch',
    screenshot: '/images/ref-topcutbarber.png',
    caption: 'Klares Design, Galerie, Kontakt. In 3 Arbeitstagen online.',
    href: 'https://topcutbarber.ch',
  },
];

export default function LandingpagePage() {
  return (
    <div className="pt-16 bg-bg min-h-screen">

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Landingpage · CHF 990
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-bg-dark leading-tight mb-6">
          Eine Seite. Alles drauf.<br />CHF 990 im ersten Jahr.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
          Nicht jeder Betrieb braucht 10 Seiten. Manchmal reicht eine —
          wenn sie richtig gemacht ist.
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
        </div>
      </div>

      {/* Availability banner */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="rounded-xl bg-glow-ambient border border-glow-soft px-5 py-3.5 text-sm text-glow-deep font-medium text-center">
          Noch {AVAILABILITY.slotsRemaining} Plätze frei im {AVAILABILITY.month} {AVAILABILITY.year}
        </div>
      </div>

      {/* What you get */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
          Was Sie bekommen
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <span className="text-glow-deep mt-0.5 shrink-0 text-lg">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{f}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Year 1 total */}
      <div className="bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20 text-white">
          <p className="text-xs tracking-widest uppercase text-glow font-semibold mb-6">
            Jahr 1 — komplett
          </p>
          <p className="text-5xl sm:text-6xl font-bold tracking-tight leading-none mb-3">
            990.—
          </p>
          <p className="text-gray-400 text-sm mb-2">CHF — Website, Hosting, Betreuung & Support. Alles inklusive.</p>
          <p className="text-gray-500 text-sm">Ab Jahr 2: CHF 59/Mt. oder CHF 590/Jahr. Monatlich kündbar.</p>
          <p className="text-xs text-gray-600 mt-4">Alle Preise exkl. MWSt 8.1%.</p>
        </div>
      </div>

      {/* Who it's for */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
          Für wen
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {FOR_WHO.map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-2xl mb-3">{item.emoji}</p>
              <p className="font-semibold text-bg-dark mb-2">{item.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="bg-bg-subtle">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="w-full h-px bg-gray-200 mb-12" />
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
            Referenzen
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {REFERENCES.map((ref) => (
              <a
                key={ref.domain}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-glow-soft transition-colors"
              >
                <div className="aspect-video relative bg-gray-50 overflow-hidden">
                  <Image
                    src={ref.screenshot}
                    alt={ref.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-bg-dark text-sm mb-0.5">{ref.name}</p>
                  <p className="text-xs text-glow-deep mb-2">{ref.domain}</p>
                  <p className="text-xs text-gray-500">{ref.caption}</p>
                </div>
              </a>
            ))}
            {/* Mobile screenshot fill when fewer than 2 references */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="aspect-video relative bg-gray-50 overflow-hidden">
                <Image
                  src="/images/windo-old-vs-new-phone.png"
                  alt="Mobile-first Design"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-bg-dark text-sm mb-0.5">Mobile-first</p>
                <p className="text-xs text-gray-500">
                  Jede Landingpage ist auf dem Smartphone perfekt — dort, wo Ihre Kunden suchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade path */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-5">
          Wenn Sie wachsen
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-bg-dark mb-4">
          Ihre Website wächst mit.
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
          Wenn Ihr Betrieb grösser wird, können Sie jederzeit auf Basis oder Sichtbar upgraden.
          Der Aufpreis ist die Differenz. Kein Neustart, kein Verlust.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { name: 'Landingpage', price: '990', note: 'Eine Seite. Alles drauf.', current: true },
            { name: 'Basis', price: "1\u2019990", note: 'Professionell online.' },
            { name: 'Sichtbar', price: "2\u2019990", note: 'Gefunden werden.' },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-4 text-center ${
                tier.current
                  ? 'border-glow-deep bg-glow-ambient'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {tier.current && (
                <p className="text-xs font-semibold text-glow-deep mb-2">← Sie sind hier</p>
              )}
              <p className="font-semibold text-bg-dark text-sm">{tier.name}</p>
              <p className="text-xs text-gray-400 mb-1">{tier.note}</p>
              <p className={`text-xl font-bold ${tier.current ? 'text-glow-deep' : 'text-bg-dark'}`}>
                CHF {tier.price}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Upgrade jederzeit möglich. Sie zahlen nur die Differenz.
        </p>
      </div>

      {/* Final CTA */}
      <div className="bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24 text-white">
          <div className="w-full h-px bg-white/10 mb-12" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            In 2–3 Tagen online.
          </h2>
          <p className="text-gray-400 mb-10">
            Kurzes Gespräch, dann lege ich los. CHF 990 — erstes Jahr komplett.
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
