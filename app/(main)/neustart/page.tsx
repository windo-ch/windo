import type { Metadata } from 'next';
import { NEUSTART_AVAILABILITY } from '@/lib/config';
import NeustartForm from './NeustartForm';

export const metadata: Metadata = {
  title: 'Website Neustart — kostenloser Entwurf | windo.ch',
  description:
    'Ich baue den ersten Entwurf Ihrer neuen Website — kostenlos, ohne Verpflichtung. Sehen Sie selbst, wie Ihr Betrieb online aussehen könnte.',
  alternates: { canonical: 'https://www.windo.ch/neustart' },
  keywords: [
    'website neugestalten lassen schweiz',
    'website neu machen lassen',
    'kostenloser website entwurf',
    'website redesign schweiz',
    'alte website erneuern',
    'website modernisieren lassen',
    'neue website für kmu',
  ],
};

const WA =
  'https://wa.me/41791752020?text=' +
  encodeURIComponent(
    'Grüezi Henry, ich interessiere mich für einen Website-Neustart.'
  );

const FOR_WHO = [
  {
    title: 'Ihr Betrieb existiert und hat Kunden.',
    body: 'Sie sind kein Startup mit einer Idee — Sie haben einen laufenden Betrieb, der besser sichtbar sein sollte.',
  },
  {
    title: 'Ihre Website ist veraltet oder fehlt ganz.',
    body: 'Ihre aktuelle Seite ist älter als 3 Jahre, funktioniert nicht auf dem Handy, oder Sie haben noch gar keine.',
  },
  {
    title: 'Sie wollen jetzt handeln — nicht irgendwann.',
    body: 'Wenn der Entwurf überzeugt, sind Sie bereit loszulegen. Nicht nächstes Jahr. Jetzt.',
  },
];

const STEPS = [
  {
    n: '1',
    label: 'Sie melden sich',
    title: '30 Sekunden.',
    body: 'Firmenname, Website-URL und Telefonnummer — mehr brauche ich nicht. Kein Fragebogen, kein Termin.',
  },
  {
    n: '2',
    label: 'Ich baue',
    title: 'Ihr Entwurf in 48 Stunden.',
    body: 'Ich gestalte den ersten Eindruck Ihrer neuen Website — mit Ihrem Namen, Ihren Farben, Ihrem Angebot. Auf dem Handy und auf dem Desktop.',
  },
  {
    n: '3',
    label: 'Sie entscheiden',
    title: 'Kein Druck.',
    body: 'Sie sehen den Entwurf und entscheiden: weitermachen oder nicht. Wenn ja, baue ich den Rest. Wenn nicht — kein Problem, der Entwurf war kostenlos.',
  },
];

const FAQ = [
  {
    q: 'Ist das wirklich kostenlos?',
    a: 'Ja. Ich baue einen Entwurf — den ersten Eindruck Ihrer neuen Website. Dafür zahlen Sie nichts. Wenn er Ihnen gefällt und Sie weitermachen wollen, besprechen wir den Rest. Wenn nicht, war es das. Kein Haken.',
  },
  {
    q: 'Was genau bekomme ich?',
    a: 'Einen visuellen Entwurf der oberen Hälfte Ihrer neuen Website — mit Ihrem Firmennamen, Ihren Farben und Ihrem Angebot. Mobiloptimiert, auf einer Live-URL, die Sie sofort auf dem Handy testen können.',
  },
  {
    q: 'Was passiert, wenn mir der Entwurf gefällt?',
    a: 'Dann baue ich den Rest. Eine komplette Website kostet ab CHF 990 im ersten Jahr — komplett mit Hosting, Betreuung und Support. Was für Ihren Betrieb passt, besprechen wir im Gespräch.',
  },
  {
    q: 'Was passiert, wenn mir der Entwurf nicht gefällt?',
    a: 'Nichts. Kein Gespräch, keine Nachfass-Mails, kein schlechtes Gewissen. Ich lösche den Entwurf und wir gehen getrennte Wege.',
  },
  {
    q: 'Wie lange dauert es?',
    a: 'Sie füllen das Formular aus — ich melde mich innerhalb von 24 Stunden. Der Entwurf steht in der Regel nach 48 Stunden.',
  },
  {
    q: 'Warum machen Sie das kostenlos?',
    a: 'Weil ein Entwurf mehr sagt als jede Preisliste. Wenn Sie sehen, wie Ihr Betrieb online aussehen könnte, ist die Entscheidung einfach. Und wenn nicht — habe ich etwas Neues gelernt.',
  },
];

export default function NeustartPage() {
  return (
    <div className="pt-16 bg-bg min-h-screen">

      {/* 1. HERO */}
      <div className="bg-bg-dark py-20 sm:py-28 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-6">
          Neustart
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-2xl mx-auto">
          Ihre Website.{' '}
          <span className="text-glow-deep">Neu gedacht. Kostenlos.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed mb-10">
          Ich baue den ersten Entwurf Ihrer neuen Website — bevor Sie sich
          entscheiden. Ohne Kosten, ohne Verpflichtung. Sie sehen das Ergebnis
          und entscheiden dann.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#formular"
            className="inline-flex items-center justify-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
          >
            Neustart anfragen
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

      {/* 2. AVAILABILITY BANNER */}
      <div className="bg-bg-dark pb-12 px-6">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-xl py-5 px-8 text-center">
          <p className="text-white font-semibold text-lg mb-1">
            🗓️ {NEUSTART_AVAILABILITY.month} {NEUSTART_AVAILABILITY.year} — noch {NEUSTART_AVAILABILITY.slotsRemaining} Neustart-Plätze frei.
          </p>
          <p className="text-gray-400 text-sm">
            Ich nehme pro Monat maximal 5 Neustart-Projekte an.
          </p>
        </div>
      </div>

      {/* 3. FÜR WEN */}
      <div className="bg-bg-subtle py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Ist das etwas für Sie?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {FOR_WHO.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-glow-soft rounded-2xl p-6"
              >
                <span className="text-glow-deep text-2xl font-bold block mb-3">✓</span>
                <p className="font-semibold text-bg-dark mb-2">{card.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center max-w-md mx-auto mt-8">
            Kein Pitch, keine Präsentation, kein Verkaufsgespräch.
            Sie sehen den Entwurf und entscheiden selbst.
          </p>
        </div>
      </div>

      {/* 5. SO LÄUFT'S AB */}
      <div className="bg-bg py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            So läuft's ab.
          </p>
          <p className="text-2xl font-bold text-bg-dark text-center mb-12">
            Drei Schritte. Kein Risiko.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Dotted connector — desktop only */}
            <div className="hidden md:block absolute top-5 left-1/3 right-1/3 border-t-2 border-dashed border-glow-soft/30 pointer-events-none" />

            {STEPS.map((step) => (
              <div key={step.n} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-glow-deep text-white flex items-center justify-center font-bold">
                    {step.n}
                  </span>
                  <span className="text-xs tracking-widest uppercase font-semibold text-gray-400">
                    {step.label}
                  </span>
                </div>
                <p className="font-bold text-bg-dark text-lg mb-2">{step.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. QUICK STATS */}
      <div className="bg-glow-ambient py-10 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-bg-dark">97+</p>
            <p className="text-gray-500 text-sm mt-1">Google PageSpeed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-bg-dark">10</p>
            <p className="text-gray-500 text-sm mt-1">Arbeitstage bis online</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-bg-dark">100%</p>
            <p className="text-gray-500 text-sm mt-1">Ihres — Code, Domain, Inhalte</p>
          </div>
        </div>
      </div>

      {/* 7. FORM */}
      <div id="formular" className="bg-bg py-16 px-6">
        <div className="max-w-lg mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-3 text-center">
            Neustart anfragen
          </p>
          <p className="text-2xl font-bold text-bg-dark text-center mb-2">
            30 Sekunden reichen.
          </p>
          <p className="text-gray-500 text-sm text-center mb-10">
            Ich melde mich innerhalb von 24 Stunden.
          </p>
          <NeustartForm />
        </div>
      </div>

      {/* 8. FAQ */}
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

      {/* 9. FINAL CTA */}
      <div className="bg-bg-dark py-16 px-6 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Neugierig?</h2>
          <p className="text-gray-400 text-base max-w-sm mx-auto mb-10">
            30 Sekunden. Kein Risiko. Ihr Entwurf in 48 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="#formular"
              className="inline-flex items-center justify-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
            >
              Neustart anfragen
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
          <p className="text-gray-500 text-sm">
            Oder anrufen:{' '}
            <a href="tel:+41791752020" className="hover:text-white transition-colors">
              079 175 20 20
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
