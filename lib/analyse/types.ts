export type Situation =
  | "has-bad-site"
  | "has-agency-site"
  | "no-site"
  | "unsure";

export type Priority =
  | "more-clients"
  | "professional-look"
  | "google-visibility"
  | "independence"
  | "mobile";

export type Industry =
  | "zahnarzt"
  | "coiffeur"
  | "restaurant"
  | "handwerker"
  | "arztpraxis"
  | "anwalt"
  | "immobilien"
  | "fitness"
  | "andere";

export type Timeline =
  | "asap"
  | "weeks"
  | "exploring";

export type ContactPreference = "phone" | "whatsapp" | "email";

export interface AnalyseFormState {
  situation: Situation | null;
  priorities: Priority[];
  industry: Industry | null;
  timeline: Timeline | null;
  contact: {
    name: string;
    phone: string;
    email: string;
    domain: string;
    preference: ContactPreference | null;
  };
}

export interface AnalyseSubmission extends AnalyseFormState {
  submittedAt: string;
  source: "standalone" | "lead-page";
  leadSlug?: string;
  utm?: string;
}

export type ResultProfile = {
  headline: string;
  subheadline: string;
  bullets: string[];
  recommendedTier: "starter" | "business" | "professional";
  urgencyNote: string;
  ctaText: string;
};
