import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllLeads, getLeadBySlug } from "@/lib/leads";
import LeadHero from "@/components/leads/LeadHero";
import LeadCurrentSite from "@/components/leads/LeadCurrentSite";
import LeadReferences from "@/components/leads/LeadReferences";
import LeadComparison from "@/components/leads/LeadComparison";
import LeadOffer from "@/components/leads/LeadOffer";
import LeadAbout from "@/components/leads/LeadAbout";
import LeadCTA from "@/components/leads/LeadCTA";
import LeadFooter from "@/components/leads/LeadFooter";
import StickyMobileCTA from "@/components/leads/StickyMobileCTA";

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
      <LeadCurrentSite lead={lead} />
      <LeadReferences />
      <LeadComparison lead={lead} />
      <LeadOffer lead={lead} />
      <LeadAbout lead={lead} />
      <LeadCTA lead={lead} />
      <LeadFooter lead={lead} />
      <StickyMobileCTA lead={lead} />
      <div className="h-16 md:hidden" />
    </>
  );
}
