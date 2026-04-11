import type { ResultProfile } from "@/lib/analyse/types";
import { RESULT_COPY } from "@/lib/analyse/copy";
import ScanSection from "./ScanSection";
import FollowUpForm from "./FollowUpForm";

const TIER_LABELS: Record<ResultProfile["recommendedTier"], string> = {
  starter: "Starter — CHF 1'490 + CHF 59/Mt.",
  business: "Business — CHF 1'990 + CHF 79/Mt.",
  professional: "Professional — CHF 2'490 + CHF 99/Mt.",
};

interface Props {
  profile: ResultProfile;
  contactName: string;
  contactEmail?: string;
  domain?: string | null;
}

export default function ResultView({ profile, contactName, contactEmail, domain }: Props) {

  return (
    <>
      {/* Header */}
      <section className="bg-bg-dark py-16 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-glow/70 font-semibold mb-4">
          {RESULT_COPY.result_page_title}
        </p>
        {contactName && (
          <p className="text-gray-400 text-sm mb-6">Für {contactName}</p>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 max-w-xl mx-auto">
          {profile.headline}
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          {profile.subheadline}
        </p>
      </section>

      {/* Scan — runs client-side after page load */}
      {domain && <ScanSection domain={domain} />}

      {/* Bullets */}
      <section className="bg-bg py-12 px-6">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-bg-dark mb-6">
            Was ich für Sie tun würde:
          </h2>
          <ul className="space-y-4">
            {profile.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-glow-deep font-bold text-lg shrink-0">✓</span>
                <p className="text-gray-700 text-base leading-relaxed">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommendation */}
      <section className="bg-glow-ambient py-10 px-6">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-sm font-semibold text-glow-deep uppercase tracking-wide mb-2">
            {RESULT_COPY.result_recommendation_label}
          </p>
          <p className="text-2xl font-bold text-bg-dark">
            {TIER_LABELS[profile.recommendedTier]}
          </p>
          <p className="text-gray-600 text-base mt-4 max-w-sm mx-auto">
            {profile.urgencyNote}
          </p>
        </div>
      </section>

      {/* Closing + follow-up form */}
      <section className="bg-bg py-12 px-6 border-t border-gray-100">
        <div className="max-w-sm mx-auto">
          <p className="text-xl font-bold text-bg-dark mb-2">{RESULT_COPY.result_closing_heading}</p>
          <p className="text-gray-500 text-sm mb-1">{RESULT_COPY.result_closing_note}</p>
          <p className="text-gray-500 text-sm mb-8">
            {RESULT_COPY.result_closing_direct}{" "}
            <a href="tel:+41791752020" className="text-glow-deep hover:text-glow-hot transition-colors font-medium">
              079 175 20 20
            </a>
          </p>
          <FollowUpForm prefillName={contactName} prefillEmail={contactEmail} />
        </div>
      </section>
    </>
  );
}
