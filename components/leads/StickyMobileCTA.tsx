import type { LeadContent } from "@/lib/types";

export default function StickyMobileCTA({ lead }: { lead: LeadContent }) {
  const waText = encodeURIComponent(
    `Hallo Henry, ich bin ${lead.name} und interessiere mich für eine neue Website.`
  );
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/10">
      <a
        href={`https://wa.me/41791752020?text=${waText}`}
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
  );
}
