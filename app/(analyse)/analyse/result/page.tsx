import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildResultProfile } from "@/lib/analyse/scoring";
import type { AnalyseSubmission } from "@/lib/analyse/types";
import ResultView from "@/components/analyse/ResultView";

export const metadata: Metadata = {
  title: "Ihre Analyse — windo.ch",
  robots: "noindex, nofollow",
};

export default async function AnalyseResultPage({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}) {
  const { d } = await searchParams;
  if (!d) redirect("/analyse");

  let submission: AnalyseSubmission;
  try {
    submission = JSON.parse(decodeURIComponent(atob(d)));
  } catch {
    redirect("/analyse");
  }

  const profile = buildResultProfile(submission);
  const domain =
    submission.contact.domain && submission.situation !== "no-site"
      ? submission.contact.domain
      : null;

  return (
    <main className="min-h-screen bg-bg">
      <ResultView
        profile={profile}
        contactName={submission.contact.name}
        contactEmail={submission.contact.email}
        domain={domain}
      />
    </main>
  );
}
