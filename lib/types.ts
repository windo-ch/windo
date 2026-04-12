export interface LeadContent {
  slug: string;
  name: string;
  domain: string;
  businessType: string;
  year: number;
  email: string;
  phone: string;
  tier: "basis" | "sichtbar" | "dominant";
  floppy: boolean;
  checks: {
    ssl: boolean;
    mobileViewport: boolean;
    loadMs: number;
    slowLoad: boolean;
  };
  hasDesktopScreenshot: boolean;
  hasMobileScreenshot: boolean;
  insights?: string[];
}

export interface PricingTier {
  name: string;
  tagline: string;
  yearOne: number;
  monthlyAfter: number;
  annualAfter: number;
  recommended?: true;
  product?: true;
}

export const PRICING = {
  landingpage: { name: "Landingpage", tagline: "Eine Seite. Alles drauf.",      yearOne: 990,  monthlyAfter: 59, annualAfter: 590, product: true as const },
  basis:       { name: "Basis",       tagline: "Professionell online.",          yearOne: 1990, monthlyAfter: 59, annualAfter: 590 },
  sichtbar:    { name: "Sichtbar",    tagline: "Gefunden werden.",               yearOne: 2990, monthlyAfter: 59, annualAfter: 590, recommended: true as const },
  dominant:    { name: "Dominant",    tagline: "Die Referenz in Ihrer Branche.", yearOne: 4490, monthlyAfter: 59, annualAfter: 590 },
} satisfies Record<string, PricingTier>;

export type TierKey = "basis" | "sichtbar" | "dominant";
export type ProductKey = "landingpage";
export type PricingKey = TierKey | ProductKey;

export function formatChf(n: number): string {
  return n.toLocaleString("de-CH").replace(",", "'");
}
