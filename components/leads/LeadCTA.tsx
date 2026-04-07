import type { LeadContent } from "@/lib/types";

export default function LeadCTA({ lead }: { lead: LeadContent }) {
  const waText = encodeURIComponent(
    `Hallo Henry, ich bin ${lead.name} und interessiere mich für eine neue Website.`
  );
  return (
    <section className="bg-bg-dark py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="w-full h-px bg-white/10 mb-12" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Bereit loszulegen?
        </h2>
        <p className="text-gray-400 mb-10">
          Kostenloses Gespräch — 15 Minuten. Kein Auftrag nötig.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+41791752020"
            className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Anrufen
          </a>
          <a
            href={`https://wa.me/41791752020?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
          >
            💬 WhatsApp
          </a>
          <a
            href={`mailto:henry@windo.ch?subject=Website%20${encodeURIComponent(lead.name)}`}
            className="text-gray-400 hover:text-white self-center text-sm underline underline-offset-4 transition-colors"
          >
            henry@windo.ch
          </a>
        </div>
      </div>
    </section>
  );
}
