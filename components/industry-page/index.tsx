import { IndustryNav } from './industry-nav';
import { RevealSection } from './reveal-section';
import { Hero } from './hero';
import { PainPoints } from './pain-points';
import { Features } from './features';
import { AiHook } from './ai-hook';
import { PricingSection } from './pricing-section';
import { Comparison } from './comparison';
import { Testimonial } from './testimonial';
import { CtaFooter } from './cta-footer';

export interface IndustryPageProps {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subline: string;
  heroCtaPrimary: { label: string; href: string };
  heroCtaSecondary: { label: string; href: string };
  painPoints: [
    { emoji: string; title: string; description: string },
    { emoji: string; title: string; description: string },
    { emoji: string; title: string; description: string },
  ];
  features: string[];
  aiHook: {
    chatPrompt: string;
    result: string;
    punchline: string;
  };
  pricing: {
    range: string;
    context: string;
    maintenanceFrom: string;
    examples: { label: string; price: string }[];
  };
  comparison: {
    before: string[];
    after: string[];
  };
  testimonial?: {
    quote: string;
    name: string;
    business: string;
  };
  cta: {
    headline: string;
    subline: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
}

export default function IndustryPage(props: IndustryPageProps) {
  return (
    <div>
      <IndustryNav />
      <main className="max-w-3xl mx-auto px-5 md:px-0">
        <RevealSection delay={0}>
          <Hero
            industry={props.industry}
            headline={props.headline}
            subline={props.subline}
            heroCtaPrimary={props.heroCtaPrimary}
            heroCtaSecondary={props.heroCtaSecondary}
          />
        </RevealSection>

        <RevealSection delay={100}>
          <PainPoints painPoints={props.painPoints} />
        </RevealSection>

        <RevealSection delay={100}>
          <Features features={props.features} />
        </RevealSection>

        <RevealSection delay={100}>
          <AiHook aiHook={props.aiHook} />
        </RevealSection>

        <RevealSection delay={100}>
          <PricingSection pricing={props.pricing} />
        </RevealSection>

        <RevealSection delay={100}>
          <Comparison comparison={props.comparison} />
        </RevealSection>

        {props.testimonial && (
          <RevealSection delay={100}>
            <Testimonial testimonial={props.testimonial} />
          </RevealSection>
        )}

        <RevealSection delay={100}>
          <CtaFooter cta={props.cta} slug={props.slug} />
        </RevealSection>
      </main>
    </div>
  );
}
