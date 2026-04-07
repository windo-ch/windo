export interface LeadContent {
  slug: string;
  name: string;
  domain: string;
  businessType: string;
  year: number;
  email: string;
  phone: string;
  tier: "starter" | "business" | "professional";
  floppy: boolean;
  checks: {
    ssl: boolean;
    mobileViewport: boolean;
    loadMs: number;
    slowLoad: boolean;
  };
  hasDesktopScreenshot: boolean;
  hasMobileScreenshot: boolean;
}

export interface PricingTier {
  name: string;
  setupRegular: number;
  setupAktion: number;
  monthly: number;
}

export const PRICING: Record<string, PricingTier> = {
  starter: {
    name: "Starter",
    setupRegular: 2900,
    setupAktion: 1490,
    monthly: 59,
  },
  business: {
    name: "Business",
    setupRegular: 3900,
    setupAktion: 1990,
    monthly: 59,
  },
  professional: {
    name: "Professional",
    setupRegular: 4900,
    setupAktion: 2490,
    monthly: 59,
  },
};

export function formatChf(n: number): string {
  return n.toLocaleString("de-CH").replace(",", "'");
}
