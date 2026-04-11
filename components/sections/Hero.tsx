'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-6">
            Websites für Schweizer KMU
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bg-dark leading-[1.05] tracking-tight mb-7">
            Eine Website,<br />
            die für Sie<br />
            <span className="text-glow-deep">arbeitet.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
            Professionell, schnell und direkt von Henry —
            fertig in 10 Arbeitstagen. Keine Agentur, kein Ticketsystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/analyse"
              className="inline-flex items-center justify-center gap-2 bg-glow-deep text-white font-semibold px-8 py-4 rounded-xl btn-glow text-base"
            >
              Gratis Analyse →
            </a>
            <a
              href="#wie-es-funktioniert"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-bg-dark font-semibold px-8 py-4 rounded-xl hover:border-bg-dark transition-colors text-base"
            >
              So funktioniert&apos;s
            </a>
          </div>
          <p className="mt-5 text-xs text-gray-400 tracking-wide">
            Kostenlos · Keine Anmeldung · 60 Sekunden
          </p>
        </motion.div>
      </div>
    </section>
  );
}
