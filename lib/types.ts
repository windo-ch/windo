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
  insights?: string[];
}

export interface PricingTier {
  name: string;
  pages: string;
  setup: number;
  monthly: number;
  annual: number;
  recommended?: true;
}

export const PRICING = {
  landingpage:  { name: 'Landingpage',  pages: '1 Seite',            setup: 790,  monthly: 59, annual: 590 },
  starter:      { name: 'Starter',      pages: 'Bis 5 Seiten',       setup: 1490, monthly: 59, annual: 590 },
  business:     { name: 'Business',     pages: 'Bis 10 Seiten',      setup: 2490, monthly: 59, annual: 590, recommended: true as const },
  professional: { name: 'Professional', pages: 'Unbegrenzte Seiten', setup: 3990, monthly: 59, annual: 590 },
} satisfies Record<string, PricingTier>;

export function formatChf(n: number): string {
  return n.toLocaleString("de-CH").replace(",", "'");
}
