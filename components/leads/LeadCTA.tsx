import type { LeadContent } from "@/lib/types";

export default function LeadCTA({ lead }: { lead: LeadContent }) {
  const waText = encodeURIComponent(
    `Hallo, ich bin ${lead.name} und interessiere mich für eine neue Website.`
  );
  return (
    <section className="bg-bg-dark py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="w-full h-px bg-white/10 mb-12" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Bereit loszulegen?
        </h2>
        <p className="text-gray-400 mb-10">
          Schreiben Sie uns — wir antworten innert 24 Stunden.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:henry@windo.ch?subject=Website%20${encodeURIComponent(lead.name)}`}
            className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
          >
            ✉️ henry@windo.ch
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
            href="tel:+41791752020"
            className="text-gray-400 hover:text-white self-center text-sm underline underline-offset-4 transition-colors"
          >
            079 175 20 20
          </a>
        </div>
      </div>
    </section>
  );
}
