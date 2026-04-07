import { SectionLabel } from './section-label';

interface HeroProps {
  industry: string;
  headline: string;
  subline: string;
  heroCtaPrimary: { label: string; href: string };
  heroCtaSecondary: { label: string; href: string };
}

export function Hero({ industry, headline, subline, heroCtaPrimary, heroCtaSecondary }: HeroProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <SectionLabel text={`Websites für ${industry}`} />
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-bg-dark">
        {headline}
      </h1>
      <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
        {subline}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={heroCtaPrimary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-glow-deep hover:bg-glow-hot btn-glow text-white text-sm font-medium transition-colors"
        >
          {heroCtaPrimary.label}
        </a>
        <a
          href={heroCtaSecondary.href}
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-glow-deep text-glow-deep hover:bg-glow-deep hover:text-white text-sm font-medium transition-colors"
        >
          {heroCtaSecondary.label}
        </a>
      </div>
      <div className="mt-16 text-center">
        <span className="animate-bounce text-glow-soft text-xl inline-block">↓</span>
      </div>
    </section>
  );
}
