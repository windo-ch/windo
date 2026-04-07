import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import StatsBar from '@/components/sections/StatsBar';
import Industries from '@/components/sections/Industries';
import HowItWorks from '@/components/sections/HowItWorks';
import HonestySection from '@/components/sections/HonestySection';
import Testimonials from '@/components/sections/Testimonials';
import References from '@/components/sections/References';
import Pricing from '@/components/sections/Pricing';
import About from '@/components/sections/About';
import Faq from '@/components/sections/Faq';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.windo.ch',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <StatsBar />
      <Industries />
      <HowItWorks />
      <HonestySection />
      <Testimonials />
      <References />
      <Pricing />
      <About />
      <Faq />
      <FinalCTA />
    </>
  );
}
