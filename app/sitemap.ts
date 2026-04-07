import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.windo.ch";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/angebot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ueber-mich`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/localsearch-vergleich`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
