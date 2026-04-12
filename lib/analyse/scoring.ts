import type { AnalyseFormState, ResultProfile, Priority } from "./types";
import { RESULT_COPY } from "./copy";

export function buildResultProfile(state: AnalyseFormState): ResultProfile {
  const { situation, priorities, industry, timeline } = state;

  // --- Recommended tier ---
  let recommendedTier: ResultProfile["recommendedTier"] = "basis";

  if (
    priorities.includes("google-visibility") &&
    priorities.includes("more-clients")
  ) {
    recommendedTier = "sichtbar";
  }
  if (situation === "has-agency-site") {
    recommendedTier = "sichtbar";
  }

  const complexIndustries = ["zahnarzt", "arztpraxis", "anwalt", "immobilien"];
  if (industry && complexIndustries.includes(industry)) {
    recommendedTier = "dominant";
  }

  // --- Bullets ---
  const priorityBulletMap: Record<Priority, string> = {
    "more-clients": RESULT_COPY.bullet_more_clients,
    "professional-look": RESULT_COPY.bullet_professional,
    "google-visibility": RESULT_COPY.bullet_google,
    independence: RESULT_COPY.bullet_independence,
    mobile: RESULT_COPY.bullet_mobile,
  };

  const bullets: string[] = [];
  for (const p of priorities) {
    bullets.push(priorityBulletMap[p]);
  }

  if (situation === "has-agency-site") {
    bullets.push(RESULT_COPY.bullet_agency_switch);
  } else if (situation === "no-site") {
    bullets.push(RESULT_COPY.bullet_new_site);
  } else if (situation === "has-bad-site") {
    bullets.push(RESULT_COPY.bullet_relaunch);
  }

  const finalBullets = bullets.slice(0, 4);

  // --- Headline ---
  let headline: string = RESULT_COPY.headline_default;
  if (situation === "has-agency-site") headline = RESULT_COPY.headline_agency;
  if (situation === "no-site") headline = RESULT_COPY.headline_new;
  if (situation === "unsure") headline = RESULT_COPY.headline_unsure;

  // --- Subheadline ---
  const industryLabel = industry
    ? RESULT_COPY.industryLabels[industry]
    : null;
  const subheadline: string = industryLabel
    ? RESULT_COPY.subheadline_with_industry.replace("{industry}", industryLabel)
    : RESULT_COPY.subheadline_generic;

  // --- Urgency ---
  let urgencyNote: string = RESULT_COPY.urgency_exploring;
  if (timeline === "asap") urgencyNote = RESULT_COPY.urgency_asap;
  if (timeline === "weeks") urgencyNote = RESULT_COPY.urgency_weeks;

  // --- CTA ---
  const ctaText: string =
    timeline === "exploring"
      ? RESULT_COPY.cta_exploring
      : RESULT_COPY.cta_ready;

  return {
    headline,
    subheadline,
    bullets: finalBullets,
    recommendedTier,
    urgencyNote,
    ctaText,
  };
}
