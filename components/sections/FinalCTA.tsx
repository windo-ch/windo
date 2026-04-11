'use client';

import { motion } from 'framer-motion';

const WA_URL =
  'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20m%C3%B6chte%20meine%20neue%20Website%20besprechen.';

export default function FinalCTA() {
  return (
    <>
      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10">
        <a
          href={WA_URL}
          className="flex-1 py-4 text-center text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
        >
          WhatsApp
        </a>
        <a
          href="tel:+41791752020"
          className="flex-1 py-4 text-center text-sm font-semibold text-white bg-glow-deep hover:bg-glow-hot transition-colors"
        >
          Anrufen
        </a>
      </div>
      <div className="h-16 md:hidden bg-bg-dark" />

      <section className="bg-bg-dark py-24 sm:py-32">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Bereit?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md">
            Kostenloses Gespräch — 15 Minuten.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/analyse"
              className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
            >
              Gratis Analyse →
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
            >
              💬 WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
            <a href="tel:+41791752020" className="hover:text-white transition-colors">
              +41 79 175 20 20
            </a>
            <a href="mailto:henry@windo.ch" className="hover:text-white transition-colors">
              henry@windo.ch
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
