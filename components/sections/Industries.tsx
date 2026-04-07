'use client';

import { motion } from 'framer-motion';

const industries = [
  { emoji: '🦷', label: 'Zahnärzte', href: '/zahnarzt' },
  { emoji: '✂️', label: 'Coiffeure', href: '/coiffeur' },
  { emoji: '🍽️', label: 'Restaurants', href: '/restaurant' },
  { emoji: '🔧', label: 'Handwerker', href: '/handwerker' },
  { emoji: '🩺', label: 'Arztpraxen', href: '/arztpraxis' },
  { emoji: '🏢', label: 'Mehr KMU', href: '/check' },
];

export default function Industries() {
  return (
    <section className="bg-bg py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Branchen
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-14">
          Für Betriebe, die etwas leisten.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
          {industries.map((ind, i) => (
            <motion.a
              key={ind.label}
              href={ind.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-bg flex items-center gap-3 px-5 py-5 hover:bg-bg-subtle transition-colors group"
            >
              <span className="text-2xl">{ind.emoji}</span>
              <span className="text-sm font-semibold text-bg-dark group-hover:text-glow-deep transition-colors">
                {ind.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
