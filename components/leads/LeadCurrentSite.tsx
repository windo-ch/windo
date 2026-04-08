import Image from "next/image";
import type { LeadContent } from "@/lib/types";

function ageText(year: number): string {
  const age = 2026 - year;
  return `${age} ${age === 1 ? 'Jahr' : 'Jahre'}`;
}

export default function LeadCurrentSite({ lead }: { lead: LeadContent }) {
  const issues: string[] = [];
  if (!lead.checks.mobileViewport && !lead.hasMobileScreenshot) issues.push('Nicht mobil-optimiert');
  if (!lead.checks.ssl) issues.push('Kein SSL-Zertifikat');
  if (lead.checks.slowLoad) issues.push('Langsame Ladezeit');

  return (
    <section className="bg-bg py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Ihre aktuelle Website
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-3">
          So sieht {lead.domain} heute aus
        </h2>
        <p className="text-gray-400 mb-6">
          Seit {ageText(lead.year)} online.{issues.length > 0 && (
            <> Es gibt Potenzial.</>
          )}
        </p>
        {issues.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {issues.map((issue) => (
              <span key={issue} className="text-xs font-medium bg-bg-subtle border border-glow-soft text-gray-500 px-3 py-1.5 rounded-full">
                {issue}
              </span>
            ))}
          </div>
        )}

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
