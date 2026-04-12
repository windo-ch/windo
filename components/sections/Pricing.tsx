'use client';

import { motion } from 'framer-motion';

const WA_TEXT = encodeURIComponent('Hallo Henry, ich interessiere mich für eine neue Website.');

export default function Pricing() {
  return (
    <section className="bg-bg-dark py-24 sm:py-32">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs tracking-widest uppercase text-glow font-semibold mb-5">
          Angebot
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14">
          Neue Website — in 10 Arbeitstagen.
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10 mb-14">
          <div>
            <p className="text-6xl font-bold text-white tracking-tight leading-none mb-2">
              1&apos;990.—
            </p>
            <p className="text-sm text-gray-500">ab CHF · erstes Jahr komplett · danach CHF 59/Mt.</p>
          </div>

          <ul className="space-y-3 self-center">
            {[
              'Individuelles Design',
              'Professionelle Texte inklusive',
              'Google PageSpeed: 100/100',
              'SEO & Schema-Markup',
              'Hosting & Betreuung inklusive',
              'Monatlich kündbar',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="text-glow mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+41791752020"
            className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Jetzt anrufen
          </a>
          <a
            href={`https://wa.me/41791752020?text=${WA_TEXT}`}
            className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
          >
            💬 WhatsApp
          </a>
          <a
            href="/angebot"
            className="text-gray-500 hover:text-white self-center text-sm underline underline-offset-4 transition-colors"
          >
            Alle Pakete →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
