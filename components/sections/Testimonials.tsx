'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="hero-gradient py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Referenzen
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-8">
          Dutzende KMU bereits begleitet.
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-bg-card border border-glow-soft rounded-2xl p-8 card-warm max-w-xl"
        >
          <p className="text-gray-600 leading-relaxed mb-6">
            Ich verbinde Sie gerne mit einem bestehenden Kunden — fragen Sie mich direkt.
            Kein Hochglanz-Zeugnis, sondern ein echtes Gespräch.
          </p>
          <a
            href="https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20m%C3%B6chte%20eine%20Referenz%20anfragen."
            className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-6 py-3 rounded-xl text-sm"
          >
            💬 Referenz anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
