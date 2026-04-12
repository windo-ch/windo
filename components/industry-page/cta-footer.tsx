import { SectionLabel } from './section-label';

interface CtaFooterProps {
  cta: {
    headline: string;
    subline: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
  slug: string;
}

export function CtaFooter({ cta, slug }: CtaFooterProps) {
  const phoneHref = `tel:${cta.phone.replace(/[\s\-]/g, '')}`;
  const emailHref = `mailto:${cta.email}?subject=Anfrage über windo.ch/${slug}`;

  return (
    <section className="pt-28 md:pt-36 pb-20">
      <SectionLabel text="Loslegen" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug max-w-lg">
        {cta.headline}
      </h2>
      <p className="mt-3 text-sm text-gray-600 max-w-md">{cta.subline}</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={cta.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl btn-whatsapp text-sm font-medium transition-colors"
        >
          <span>WhatsApp</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          href={emailHref}
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white text-sm font-medium transition-colors"
        >
          E-Mail schreiben
        </a>
        <a
          href={phoneHref}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white text-sm font-medium transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Anrufen
        </a>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          Henry Barrows · windo.ch · Zug, Schweiz ·{' '}
          <a href="https://henry.marketing" className="hover:text-gray-600 transition-colors">
            henry.marketing
          </a>
        </p>
      </div>
    </section>
  );
}
