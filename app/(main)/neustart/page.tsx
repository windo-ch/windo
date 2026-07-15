import type { Metadata } from 'next';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';

export const metadata: Metadata = {
  title: 'Website-Session — 1 Stunde, CHF 250 | windo.ch',
  description:
    'In einer Stunde bauen wir gemeinsam die erste Version Ihrer neuen Website — live, auf Ihrem Domain. CHF 250, kein Abo, keine Verpflichtung.',
  alternates: { canonical: 'https://www.windo.ch/neustart' },
  keywords: [
    'website erstellen lassen schweiz',
    'website session schweiz',
    'neue website schnell schweiz',
    'website für kleinunternehmen schweiz',
    'website in einer stunde',
  ],
};

const WA =
  'https://wa.me/41791752020?text=' +
  encodeURIComponent('Grüezi Henry, ich interessiere mich für eine Website-Session.');

const WHAT_HAPPENS = [
  {
    n: '1',
    title: 'Kurzes Gespräch vorher.',
    body: 'Sie schicken mir Domain, Logo und ein paar Zeilen zu Ihrem Betrieb. Ich bereite alles vor — damit wir die Stunde nicht mit Setup verschwenden.',
  },
  {
    n: '2',
    title: 'Eine Stunde zusammen.',
    body: 'Wir bauen live: Design, Texte, Struktur. Sie sehen, wie es entsteht — und entscheiden sofort, was Ihnen gefällt und was nicht.',
  },
  {
    n: '3',
    title: 'V1 ist online.',
    body: 'Am Ende der Stunde steht eine erste Version Ihrer neuen Website — auf Ihrer Domain, mobiloptimiert, sichtbar auf Google.',
  },
];

const YOU_GET = [
  'Fertige V1 — auf Ihrer Domain, in 1 Stunde online',
  'Individuelles Design — kein Baukasten, kein Template',
  'Professionelle Texte für Ihre Branche',
  'Mobile-first, Google PageSpeed 90+',
  'SEO-Grundlagen: Titel, Meta, Google Business',
  'Sie sehen live, wie Ihre Website entsteht',
];

const FAQ = [
  {
    q: 'Was genau entsteht in der Stunde?',
    a: 'Eine vollständige erste Version Ihrer Website — mit Ihrem Angebot, Ihren Kontaktdaten, Ihren Farben. Nicht ein Entwurf. Eine echte Website, die läuft.',
  },
  {
    q: 'Was, wenn ich danach noch mehr will?',
    a: 'Die Session zählt als Anzahlung — die CHF 250 werden vom Preis des nächsten Pakets abgezogen, falls Sie weitermachen wollen. Kein Muss.',
  },
  {
    q: 'Muss ich selbst etwas vorbereiten?',
    a: 'Nur wenig: Ihr Logo, Ihre Domain (falls vorhanden) und ein paar Sätze zu Ihrem Betrieb. Den Rest machen wir gemeinsam.',
  },
  {
    q: 'Wie läuft die Session ab — Telefon, Video, vor Ort?',
    a: 'Video-Call. Sie sehen meinen Bildschirm live — ich erkläre, was ich tue, und Sie geben sofort Feedback.',
  },
  {
    q: 'Was kostet die Website danach?',
    a: 'Die V1 aus der Session bleibt Ihre. Hosting, Betreuung und Support kosten ab Jahr 2 CHF 59/Monat. Für mehr Seiten, SEO-Texte oder ein vollständiges Redesign gibt es die Pakete ab CHF 1\'990 — die CHF 250 werden angerechnet.',
  },
];

export default function NeustartPage() {
  return (
    <div className="pt-16 bg-bg min-h-screen">

      {/* HERO */}
      <div className="bg-bg-dark py-20 sm:py-28 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-6">
          Website-Session
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-2xl mx-auto">
          Ihre neue Website.{' '}
          <span className="text-glow-deep">In einer Stunde.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed mb-4">
          Wir bauen gemeinsam — live, auf Ihrer Domain. Am Ende der Stunde
          steht eine echte Website, keine Präsentation.
        </p>
        <p className="text-white text-2xl font-bold mb-10">CHF 250</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
          >
            💬 Session buchen via WhatsApp
          </a>
          <a
            href="tel:+41791752020"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/5 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Lieber anrufen
          </a>
        </div>
      </div>

      {/* AVAILABILITY */}
      <div className="bg-bg-dark pb-12 px-6">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-xl py-5 px-8 text-center">
          <p className="text-white font-semibold text-lg mb-1">
            🗓️ <AvailabilityBadge className="inline" />
          </p>
          <p className="text-gray-400 text-sm">
            Maximal 5 Sessions pro Monat.
          </p>
        </div>
      </div>

      {/* WAS SIE BEKOMMEN */}
      <div className="hero-gradient py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Was Sie bekommen
          </p>
          <p className="text-2xl font-bold text-bg-dark text-center mb-10">
            Keine Präsentation. Eine fertige Website.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {YOU_GET.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white border border-glow-soft rounded-xl p-4">
                <span className="text-glow-deep shrink-0 font-bold mt-0.5">✓</span>
                <p className="text-sm text-gray-700 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SO LÄUFT'S AB */}
      <div className="bg-bg py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Ablauf
          </p>
          <p className="text-2xl font-bold text-bg-dark text-center mb-12">
            Drei Schritte. Eine Stunde.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHAT_HAPPENS.map((step) => (
              <div key={step.n} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-glow-deep text-white flex items-center justify-center font-bold">
                    {step.n}
                  </span>
                </div>
                <p className="font-bold text-bg-dark text-lg mb-2">{step.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PREIS */}
      <div className="bg-bg-dark py-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-glow font-semibold mb-6">
            Investition
          </p>
          <p className="text-6xl font-bold text-white tracking-tight leading-none mb-2">
            250.—
          </p>
          <p className="text-gray-400 text-sm mb-2">CHF · exkl. MWSt 8.1%</p>
          <p className="text-gray-500 text-sm mb-10">
            Die CHF 250 werden angerechnet, falls Sie danach ein Paket buchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
            >
              💬 Session buchen
            </a>
            <a
              href="tel:+41791752020"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              079 175 20 20
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="hero-gradient py-16 px-6">
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

    </div>
  );
}
