import type { Metadata } from 'next';
import Image from 'next/image';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Über mich — windo.ch',
  description:
    'Henry Barrows — Ich baue professionelle Websites für Schweizer KMU. Persönlich, direkt, ohne Agentur. Basiert in Zug.',
  alternates: { canonical: 'https://www.windo.ch/ueber-mich' },
};

const WA = 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20m%C3%B6chte%20meine%20Website%20besprechen.';

const REFERENCES = [
  {
    domain: 'zahnarzt-neumann.ch',
    type: 'Zahnarztpraxis',
    screenshot: '/images/ref-zahnarzt-neumann.png',
    href: 'https://zahnarzt-neumann.ch',
    note: 'PageSpeed 96/100',
  },
  {
    domain: 'schlafzahnmedizin.ch',
    type: 'Schlafmedizin',
    screenshot: '/images/ref-schlafzahnmedizin.png',
    href: 'https://schlafzahnmedizin.ch',
    note: 'Mobile-first, strukturiert',
  },
  {
    domain: 'topcutbarber.ch',
    type: 'Barbershop',
    screenshot: '/images/ref-topcutbarber.png',
    href: 'https://topcutbarber.ch',
    note: 'In 3 Arbeitstagen online',
  },
];

const PRINCIPLES = [
  {
    title: 'Sie reden mit mir — nicht mit einem Ticket-System.',
    body: 'Keine Agentur, kein Junior-Designer, kein Zwischenperson. Wenn Sie mir schreiben, antworte ich. Wenn etwas angepasst werden muss, erledige ich es. So einfach.',
  },
  {
    title: 'Schnell heisst hier wirklich schnell.',
    body: 'Zehn Arbeitstage vom Briefing bis zum Launch. Ich habe den Prozess so aufgebaut, dass er ohne Umwege funktioniert — für Sie und für mich.',
  },
  {
    title: 'Ihre Website gehört Ihnen. Immer.',
    body: 'Code, Texte, Domain — alles gehört Ihnen. Kein Lock-in, keine Plattformabhängigkeit. Wenn Sie irgendwann wechseln möchten, nehmen Sie alles mit.',
  },
];

export default function UeberMichPage() {
  return (
    <div className="pt-16 bg-bg">

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-10">
          Über mich
        </p>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-start">
          <div className="shrink-0">
            <Image
              src="/henry-2026-crop.jpg"
              alt="Henry Barrows"
              width={160}
              height={160}
              className="rounded-2xl object-cover ring-2 ring-glow-soft"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-bg-dark leading-tight mb-5">
              Ich bin Henry.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              Ich baue Websites für Schweizer KMU — individuell, schnell, und direkt.
              Keine Vorlage, kein Baukasten, kein Vertrag mit langer Laufzeit.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Ich bin in Zug und erreichbar per WhatsApp, Telefon oder E-Mail.
              Ich antworte selbst.
            </p>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="border-t border-gray-100 bg-bg-subtle">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-12">
            Wie ich arbeite
          </p>
          <div className="space-y-10">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="flex gap-6 sm:gap-10">
                <span className="text-2xl font-bold text-glow-soft shrink-0 leading-none mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-semibold text-bg-dark text-lg leading-snug mb-2">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What I do exactly */}
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
          Was genau ich mache
        </p>
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-6 text-sm text-gray-600 leading-relaxed">
          <div>
            <p className="font-semibold text-bg-dark mb-2">Design & Entwicklung</p>
            <p>
              Jede Website entwerfe ich von Grund auf — angepasst an Ihren Betrieb, Ihre Branche
              und Ihre Kunden. Kein Template, das ich einfach umfärbe.
            </p>
          </div>
          <div>
            <p className="font-semibold text-bg-dark mb-2">Texte</p>
            <p>
              Ich schreibe alle Texte selbst — auf Schweizerdeutsch gedacht, auf Hochdeutsch
              geschrieben. Sie lesen gegenseitig. Korrekturen inklusive.
            </p>
          </div>
          <div>
            <p className="font-semibold text-bg-dark mb-2">SEO & Google</p>
            <p>
              Strukturierte Daten, saubere Semantik, Google Business Optimierung und lokale SEO
              — damit Ihre Kunden Sie tatsächlich finden.
            </p>
          </div>
          <div>
            <p className="font-semibold text-bg-dark mb-2">Hosting & Support</p>
            <p>
              Ich hoste auf Schweizer Servern, kümmere mich um SSL, Updates und Sicherheit.
              Etwas soll geändert werden? Schreiben Sie mir per WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="bg-bg-subtle border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
          <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-8">
            Referenzen
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
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
                    alt={ref.domain}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-glow-deep font-medium mb-0.5">{ref.domain}</p>
                  <p className="text-xs text-gray-400">{ref.type} · {ref.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Direct contact */}
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-start">
          <div className="shrink-0">
            <Image
              src="/henry-2026-crop.jpg"
              alt="Henry Barrows"
              width={80}
              height={80}
              className="rounded-full object-cover ring-2 ring-glow-soft"
            />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-4">
              Direkt erreichbar
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Kein Formular, das ins Leere läuft. Kein Callcenter.
              Schreiben Sie mir — ich antworte persönlich.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-6 py-3 rounded-xl text-sm"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+41791752020"
                className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-6 py-3 rounded-xl btn-glow text-sm"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                079 175 20 20
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              <a href="mailto:henry@windo.ch" className="text-glow-deep hover:text-glow-hot transition-colors font-medium">
                henry@windo.ch
              </a>
              <a href="https://www.linkedin.com/in/henrybarrows/" target="_blank" rel="noopener noreferrer" className="text-glow-deep hover:text-glow-hot transition-colors font-medium">
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
