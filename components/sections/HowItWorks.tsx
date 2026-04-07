'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '1',
    title: 'Website-Check',
    desc: 'Geben Sie Ihre URL ein. Das Tool analysiert Ihre Website in 60 Sekunden — kostenlos.',
  },
  {
    num: '2',
    title: 'Persönliche Auswertung',
    desc: 'Henry schaut sich die Resultate an und meldet sich direkt bei Ihnen.',
  },
  {
    num: '3',
    title: 'Angebot & Plan',
    desc: 'Sie erhalten ein konkretes, transparentes Angebot — ohne Agentur-Overhead.',
  },
  {
    num: '4',
    title: 'Live in 10 Tagen',
    desc: 'Ihre neue Website geht online. Hosting, Domain, Texte — alles inklusive.',
  },
];

export default function HowItWorks() {
  return (
    <section id="wie-es-funktioniert" className="bg-bg-subtle py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Ablauf
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-14">
          In vier Schritten online.
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-9 h-9 rounded-full bg-glow-deep text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-bg-dark mb-1.5">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
