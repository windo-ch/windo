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
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
