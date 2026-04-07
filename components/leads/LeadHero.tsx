import type { LeadContent } from "@/lib/types";

function ageText(year: number): string {
  const age = 2026 - year;
  return `${age} ${age === 1 ? "Jahr" : "Jahre"}`;
}

export default function LeadHero({ lead }: { lead: LeadContent }) {
  const age = ageText(lead.year);
  const issues: string[] = [];
  if (!lead.checks.mobileViewport && !lead.hasMobileScreenshot) issues.push("Nicht mobil-optimiert");
  if (!lead.checks.ssl) issues.push("Kein SSL-Zertifikat");
  if (lead.checks.slowLoad) issues.push("Langsame Ladezeit");

  return (
    <section className="bg-bg-dark min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-6">
        Persönliche Nachricht für {lead.name}
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-2xl">
        Ihre Website ist <span className="text-glow-deep">{age} alt</span> —{" "}
        Zeit für einen Neustart.
      </h1>
      <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
        {lead.domain} — ich habe Ihr Angebot analysiert
        und würde Ihnen gerne zeigen, was möglich ist.
      </p>
      {issues.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {issues.map((issue) => (
            <span
              key={issue}
              className="text-xs font-medium bg-white/5 border border-white/10 text-gray-400 px-3 py-1.5 rounded-full"
            >
              {issue}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:+41791752020"
          className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-7 py-3.5 rounded-xl btn-glow"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.38a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          079 175 20 20
        </a>
        <a
          href={`https://wa.me/41791752020?text=${encodeURIComponent(`Hallo Henry, ich bin ${lead.name} und interessiere mich für eine neue Website.`)}`}
          className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-7 py-3.5 rounded-xl"
        >
          💬 WhatsApp
        </a>
      </div>
      <p className="mt-4 text-xs text-gray-600">Kostenlos · 15 Minuten</p>
    </section>
  );
}
