import Image from "next/image";
import type { LeadContent } from "@/lib/types";

export default function LeadCurrentSite({ lead }: { lead: LeadContent }) {
  return (
    <section className="bg-bg py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Ihre aktuelle Website
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-8">
          So sieht {lead.domain} heute aus
        </h2>

        {lead.hasDesktopScreenshot ? (
          <Image
            src={`/images/leads/${lead.slug}-desktop.png`}
            alt={`Aktuelle Website von ${lead.name}`}
            width={1440}
            height={900}
            className="w-full rounded-2xl shadow-lg border border-gray-200 mb-4"
            priority
          />
        ) : (
          <div className="bg-bg-subtle border-2 border-dashed border-glow-soft rounded-2xl p-16 text-center text-gray-400 text-sm mb-4">
            {lead.domain}
          </div>
        )}

        {lead.hasMobileScreenshot && (
          <div className="flex justify-center mt-6">
            <Image
              src={`/images/leads/${lead.slug}-mobile.png`}
              alt={`Mobile Ansicht ${lead.name}`}
              width={390}
              height={844}
              className="w-[180px] rounded-xl shadow-lg border border-gray-200"
            />
          </div>
        )}
      </div>
    </section>
  );
}
