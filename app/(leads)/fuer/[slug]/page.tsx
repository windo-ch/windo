import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllLeads, getLeadBySlug } from "@/lib/leads";
import LeadHero from "@/components/leads/LeadHero";
import LeadCurrentSite from "@/components/leads/LeadCurrentSite";
import LeadInsights from "@/components/leads/LeadInsights";
import LeadReferences from "@/components/leads/LeadReferences";
import LeadComparison from "@/components/leads/LeadComparison";
import LeadOffer from "@/components/leads/LeadOffer";
import LeadAbout from "@/components/leads/LeadAbout";
import LeadCTA from "@/components/leads/LeadCTA";
import LeadFooter from "@/components/leads/LeadFooter";
import StickyMobileCTA from "@/components/leads/StickyMobileCTA";
import BedarfsanalyseWizard from "@/components/analyse/BedarfsanalyseWizard";

export async function generateStaticParams() {
  return getAllLeads().map((l) => ({ slug: l.slug }));
}

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default async function LeadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lead = getLeadBySlug(slug);
  if (!lead) notFound();

  return (
    <>
      <LeadHero lead={lead} />
      <section className="bg-bg py-12 px-6">
        <div className="max-w-lg mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold text-bg-dark mb-2">
            Bevor wir weitermachen — was ist Ihnen wichtig?
          </h2>
          <p className="text-gray-500 text-base">
            5 kurze Fragen, damit ich Ihnen einen konkreten Vorschlag machen kann.
          </p>
        </div>
        <BedarfsanalyseWizard
          leadSlug={lead.slug}
          prefillDomain={lead.domain}
          prefillName={lead.name}
        />
      </section>
      <LeadInsights lead={lead} />
      <LeadCurrentSite lead={lead} />
      <LeadComparison lead={lead} />
      <LeadOffer lead={lead} />
      <LeadAbout lead={lead} />
      <LeadReferences />
      <LeadCTA lead={lead} />
      <LeadFooter lead={lead} />
      <StickyMobileCTA lead={lead} />
      <div className="h-16 md:hidden" />
    </>
  );
}
