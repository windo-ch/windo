import { IndustryNav } from './industry-nav';
import { RevealSection } from './reveal-section';
import { Hero } from './hero';
import { PainPoints } from './pain-points';
import { VisualProof, type Reference } from './visual-proof';
import { Features } from './features';
import { HowItWorks } from './how-it-works';
import { PricingSection } from './pricing-section';
import { AboutHenry } from './about-henry';
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
  references?: Reference[];
  features: string[];
  pricing: {
    recommendedTier?: 'basis' | 'sichtbar' | 'dominant';
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

        {props.references && props.references.length > 0 && (
          <RevealSection delay={100}>
            <VisualProof references={props.references} />
          </RevealSection>
        )}

        <RevealSection delay={100}>
          <Features features={props.features} />
        </RevealSection>

        <RevealSection delay={100}>
          <HowItWorks />
        </RevealSection>

        <RevealSection delay={100}>
          <PricingSection pricing={props.pricing} />
        </RevealSection>

        <RevealSection delay={100}>
          <AboutHenry />
        </RevealSection>

        <RevealSection delay={100}>
          <CtaFooter cta={props.cta} slug={props.slug} />
        </RevealSection>
      </main>
    </div>
  );
}
