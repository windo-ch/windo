'use client';

import { motion } from 'framer-motion';

const pains = [
  {
    num: '01',
    title: 'Website von 2017',
    desc: 'Design, das in die Jahre gekommen ist — und Vertrauen kostet, bevor ein Wort gelesen wurde.',
  },
  {
    num: '02',
    title: 'Konkurrenz ist vor Ihnen',
    desc: 'Ihr Mitbewerber erscheint auf Seite 1. Sie auf Seite 3. Wer sucht schon weiter?',
  },
  {
    num: '03',
    title: 'Zahlen zu viel',
    desc: 'Eine Agentur mit monatlichem Retainer für eine Website, die sich kaum verändert.',
  },
  {
    num: '04',
    title: 'Keine Zeit',
    desc: 'Sie führen einen Betrieb. Keine Zeit für Technik, Updates und WordPress-Probleme.',
  },
];

export default function PainPoints() {
  return (
    <section className="bg-bg-subtle py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Kommt Ihnen das bekannt vor?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-14">
          Die vier häufigsten Probleme.
        </h2>
        <div className="divide-y divide-gray-200">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="py-7 flex gap-8 items-start"
            >
              <span className="text-xs font-mono text-gray-300 pt-1 shrink-0 w-6">{pain.num}</span>
              <div>
                <h3 className="font-semibold text-bg-dark mb-1.5">{pain.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pain.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
