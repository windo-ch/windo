import Image from 'next/image';
import { SectionLabel } from './section-label';

export interface Reference {
  name: string;
  domain: string;
  screenshot: string;
  caption: string;
  href: string;
}

export function VisualProof({ references }: { references: Reference[] }) {
  return (
    <section className="py-16 md:py-20">
      <SectionLabel text="Referenzen" />
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-bg-dark leading-snug">
        So könnte Ihre Website aussehen.
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {references.map((ref) => (
          <a
            key={ref.domain}
            href={ref.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-glow-deep transition-colors"
          >
            <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
              <Image
                src={ref.screenshot}
                alt={`Screenshot ${ref.name}`}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="font-medium text-bg-dark text-sm">{ref.name}</p>
              <p className="text-xs text-glow-deep mb-2">{ref.domain}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{ref.caption}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
