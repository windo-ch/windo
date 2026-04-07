import Image from "next/image";
import type { LeadContent } from "@/lib/types";

export default function LeadAbout({ lead }: { lead: LeadContent }) {
  return (
    <section className="bg-bg-subtle py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Über mich
        </p>
        <div className="flex gap-8 sm:gap-12 items-start">
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
              Ich erstelle und betreue Websites für Schweizer KMU. Kein Büro, keine Agentur,
              kein Ticket-System — Sie schreiben mir direkt per WhatsApp oder E-Mail,
              und ich kümmere mich darum. Ich kenne die Bedürfnisse von{" "}
              {lead.businessType !== "Sonstige"
                ? `${lead.businessType}-Betrieben`
                : "kleinen Betrieben"}{" "}
              und weiss, was Ihre Kunden online erwarten.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="tel:+41791752020" className="text-glow-deep font-medium hover:text-glow-hot transition-colors">
                079 175 20 20
              </a>
              <a href="mailto:henry@windo.ch" className="text-glow-deep font-medium hover:text-glow-hot transition-colors">
                henry@windo.ch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
