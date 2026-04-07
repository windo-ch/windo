import type { Metadata } from 'next';
import About from '@/components/sections/About';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Über mich — windo.ch',
  description: 'Henry Barrows — Ich erstelle und betreue Websites für Schweizer KMU. Persönlich, direkt, ohne Agentur.',
  alternates: { canonical: 'https://www.windo.ch/ueber-mich' },
};

export default function UeberMichPage() {
  return (
    <>
      <div className="pt-16" />
      <About />
      <FinalCTA />
    </>
  );
}
