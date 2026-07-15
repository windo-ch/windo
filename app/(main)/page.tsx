import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import StatsBar from '@/components/sections/StatsBar';
import Industries from '@/components/sections/Industries';
import HowItWorks from '@/components/sections/HowItWorks';
import SchaufensterSection from '@/components/sections/SchaufensterSection';
import HonestySection from '@/components/sections/HonestySection';
import References from '@/components/sections/References';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Pricing from '@/components/sections/Pricing';
import About from '@/components/sections/About';
import Faq from '@/components/sections/Faq';
import FinalCTA from '@/components/sections/FinalCTA';
import { PrimaryCTA } from '@/components/ui/PrimaryCTA';

export const metadata: Metadata = {
  title: 'windo.ch — Professionelle Websites für Schweizer KMU',
  description: "Individuelle Website für Ihr KMU — fertig in 10 Arbeitstagen. Ab CHF 1'990, erstes Jahr komplett. Direkt mit Henry Barrows, ohne Agentur.",
  alternates: {
    canonical: 'https://www.windo.ch',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <div className="bg-bg">
        <PrimaryCTA />
      </div>
      <StatsBar />
      <Industries />
      <div className="bg-bg">
        <PrimaryCTA />
      </div>
      <SchaufensterSection />
      <HowItWorks />
      <HonestySection />
      <References />
      <BeforeAfter />
      <Pricing />
      <div className="bg-bg-dark">
        <PrimaryCTA />
      </div>
      <About />
      <Faq />
      <div className="bg-bg">
        <PrimaryCTA />
      </div>
      <FinalCTA />
    </>
  );
}
