'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '97%', label: 'der Kunden googeln vor dem Kauf' },
  { value: '53%', label: 'verlassen eine langsame Website sofort' },
  { value: '30+', label: 'Betriebe bereits begleitet' },
  { value: 'CHF 0', label: 'Erstberatung — immer' },
];

export default function StatsBar() {
  return (
    <section className="bg-bg-dark py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-glow leading-none mb-3">{stat.value}</p>
              <p className="text-xs text-gray-500 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
