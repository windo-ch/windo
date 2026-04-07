import type { ScanResult } from '../lib/types'

function buildRecommendations(r: ScanResult): string[] {
  const out: string[] = []
  const { speed, mobile, seo, aiFindability } = r.categories

  if (r.overall < 40 && mobile.score < 50)
    out.push('Website Remake (ab CHF 1\'490) — Design und Technik brauchen einen Neustart.')
  if (aiFindability.score < 40)
    out.push('AI-Sichtbarkeit — Ihr Unternehmen ist für ChatGPT & Co praktisch unsichtbar.')
  if (speed.score < 40)
    out.push('Performance-Optimierung — Langsame Ladezeiten kosten Sie Besucher.')
  if (seo.score < 50)
    out.push('SEO-Grundlagen — Grundlegende Optimierungen fehlen.')
  if (r.overall >= 40 && r.overall < 70 && out.length === 0)
    out.push('Website-Verbesserung — Gezielte Optimierung der schwächsten Bereiche.')

  return out.slice(0, 3)
}

interface RecommendationProps {
  result: ScanResult
}

export function Recommendation({ result }: RecommendationProps) {
  const recs = buildRecommendations(result)
  if (recs.length === 0) return null

  return (
    <div className="rounded-xl border border-glow-soft bg-glow-ambient p-6">
      <h3 className="font-semibold text-bg-dark mb-4 text-sm uppercase tracking-wider">
        Empfehlungen für {result.domain}
      </h3>
      <ul className="space-y-3">
        {recs.map((rec, i) => {
          const [title, ...rest] = rec.split(' — ')
          const body = rest.join(' — ')
          return (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 text-glow-deep font-bold shrink-0">→</span>
              <div>
                <a
                  href="mailto:henry@windo.ch"
                  className="text-glow-deep hover:text-glow-hot font-medium transition-colors"
                >
                  {title}
                </a>
                {body && <p className="text-sm text-gray-600 mt-0.5">{body}</p>}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
