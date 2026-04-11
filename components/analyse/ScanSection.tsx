"use client";

import { useEffect, useState } from "react";
import { runScan } from "@/app/(check)/check/actions";
import type { ScanResult } from "@/app/(check)/check/lib/types";
import { ScoreGauge } from "@/app/(check)/check/components/score-gauge";
import { CategoryCard } from "@/app/(check)/check/components/category-card";
import { scoreToColor } from "@/app/(check)/check/lib/format";

const CATEGORY_ORDER = [
  "speed",
  "mobile",
  "seo",
  "security",
  "structuredData",
  "aiFindability",
] as const;

export default function ScanSection({ domain }: { domain: string }) {
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    runScan(domain)
      .then((res) => {
        if (res.success) setResult(res.result);
        else setError(res.message);
      })
      .catch(() => setError("Analyse nicht verfügbar."))
      .finally(() => setLoading(false));
  }, [domain]);

  return (
    <section className="bg-bg py-12 px-6 border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold text-bg-dark">Website-Analyse</h2>
          <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
            Beta
          </span>
          <span className="text-sm text-gray-400">{domain}</span>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-glow-deep border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-500 text-sm">{domain} wird analysiert...</p>
          </div>
        )}

        {error && !loading && (
          <p className="text-gray-400 text-sm">{error}</p>
        )}

        {result && !loading && (
          <>
            <div className="rounded-2xl border border-glow-soft bg-bg-card p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <ScoreGauge score={result.overall} />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-gray-500 text-sm mb-1">{result.domain}</p>
                <p className={`text-4xl font-bold tabular-nums ${scoreToColor(result.overall)}`}>
                  {result.overall}
                  <span className="text-xl font-normal text-gray-400">/100</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CATEGORY_ORDER.map((cat, index) => (
                <CategoryCard
                  key={cat}
                  category={cat}
                  result={result.categories[cat]}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
