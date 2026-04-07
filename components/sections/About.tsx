'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="ueber-mich" className="bg-bg-subtle py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Über mich
        </p>
        <motion.div
          className="flex gap-8 sm:gap-12 items-start"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/henry-2026-crop.jpg"
            alt="Henry Barrows"
            width={100}
            height={100}
            className="rounded-full object-cover shrink-0 ring-2 ring-glow-soft"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-bg-dark mb-4">
              Ich bin Henry.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Ich erstelle und betreue Websites für Schweizer KMU. Keine Agentur, kein Ticket-System.
              Sie schreiben mir direkt per WhatsApp oder E-Mail, und ich kümmere mich darum.
            </p>
            <div className="mt-6 text-sm">
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-2">
                <a href="tel:+41791752020" className="text-glow-deep font-medium hover:text-glow-hot transition-colors">
                  079 175 20 20
                </a>
                <a href="mailto:henry@windo.ch" className="text-glow-deep font-medium hover:text-glow-hot transition-colors">
                  henry@windo.ch
                </a>
              </div>
              <a href="https://www.linkedin.com/in/henrybarrows/" target="_blank" rel="noopener noreferrer" className="text-glow-deep font-medium hover:text-glow-hot transition-colors">
                LinkedIn →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
