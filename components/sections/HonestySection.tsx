'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Keine Agentur',
    desc: 'Sie arbeiten direkt mit mir — Henry. Kein Account-Manager, kein Ticketsystem.',
  },
  {
    title: 'Kein Lock-in',
    desc: 'Kein Abo-Zwang. Ihre Website gehört Ihnen. Sie können jederzeit wechseln.',
  },
  {
    title: 'Schweizer Hosting',
    desc: 'Ihre Daten liegen in der Schweiz. Datenschutzkonform, schnell, zuverlässig.',
  },
  {
    title: 'Ehrlich',
    desc: 'Wenn Ihr Projekt nicht zu mir passt, sage ich das. Kein Upselling.',
  },
];

export default function HonestySection() {
  return (
    <section className="bg-bg py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          So arbeite ich
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-14">
          Direkt. Transparent. Ohne Umwege.
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="py-7 border-b border-gray-100"
            >
              <h3 className="font-semibold text-bg-dark mb-1.5">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
