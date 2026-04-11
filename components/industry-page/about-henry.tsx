import Image from 'next/image';
import { SectionLabel } from './section-label';

export function AboutHenry() {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Direkt mit Henry" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        Kein Callcenter.
      </h2>
      <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0">
          <Image
            src="/henry-2026-crop.jpg"
            alt="Henry Barrows"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-lg pt-1">
          Ich bin Henry Barrows, Webentwickler in Zug. Ich arbeite direkt mit Schweizer KMU — ohne Agentur, ohne Zwischenhändler. Sie erreichen mich per Telefon, WhatsApp oder E-Mail. Immer.
        </p>
      </div>
    </section>
  );
}
