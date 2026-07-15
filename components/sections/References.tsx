'use client';

import { motion } from 'framer-motion';

const REFERENCES = [
  { domain: 'zahnarzt-neumann.ch', type: 'Zahnarztpraxis', since: 2024 },
  { domain: 'schlafzahnmedizin.ch', type: 'Schlafmedizin / Zahnarzt', since: 2025 },
  { domain: 'topcutbarber.ch', type: 'Barbershop', since: 2025 },
];

function pagespeedUrl(domain: string) {
  return `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${domain}`;
}

export default function References() {
  return (
    <section className="bg-bg py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Referenzen
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-3">
          Schweizer KMU, die schon wechselten.
        </h2>
        <p className="text-gray-500 mb-14">Alle Websites: Google PageSpeed 100/100.</p>
        <div className="divide-y divide-gray-100">
          {REFERENCES.map((ref, i) => (
            <motion.div
              key={ref.domain}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="py-5 flex items-center justify-between gap-4"
            >
              <div>
                <a
                  href={`https://${ref.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-bg-dark hover:text-glow-deep transition-colors"
                >
                  {ref.domain}
                </a>
                <p className="text-xs text-gray-400 mt-0.5">{ref.type}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={pagespeedUrl(ref.domain)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-glow-deep/70 hover:text-glow-deep transition-colors"
                >
                  PageSpeed ↗
                </a>
                <span className="text-xs text-gray-400">Seit {ref.since}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
