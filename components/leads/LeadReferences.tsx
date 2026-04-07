import Image from "next/image";

const REFERENCES = [
  {
    domain: "zahnarzt-neumann.ch",
    type: "Zahnarztpraxis",
    since: 2024,
    img: "/images/ref-zahnarzt-neumann.png",
  },
  {
    domain: "schlafzahnmedizin.ch",
    type: "Schlafmedizin / Zahnarzt",
    since: 2025,
    img: "/images/ref-schlafzahnmedizin.png",
  },
  {
    domain: "topcutbarber.ch",
    type: "Barbershop",
    since: 2025,
    img: "/images/ref-topcutbarber.png",
  },
];

export default function LeadReferences() {
  return (
    <section className="bg-bg-subtle py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="w-full h-px bg-gray-200 mb-12" />
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Referenzen
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-8">
          Schweizer KMU, die schon wechselten
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {REFERENCES.map((ref) => (
            <a
              key={ref.domain}
              href={`https://${ref.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-card rounded-2xl border border-glow-soft card-warm overflow-hidden hover:border-glow-deep transition-colors block"
            >
              <Image
                src={ref.img}
                alt={ref.domain}
                width={480}
                height={300}
                className="w-full h-32 object-cover object-top"
              />
              <div className="p-4">
                <p className="font-semibold text-bg-dark text-sm mb-0.5">{ref.domain}</p>
                <p className="text-xs text-gray-500 mb-2">{ref.type}</p>
                <p className="text-xs text-glow-deep font-medium">✓ Seit {ref.since}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
