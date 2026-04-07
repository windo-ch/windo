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
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white text-sm font-medium transition-colors"
        >
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
