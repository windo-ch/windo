import type { CategoryResult } from '../lib/types'
import { scoreToColor, scoreToBg } from '../lib/format'

const CATEGORY_LABELS: Record<string, string> = {
  speed: 'Ladegeschwindigkeit',
  mobile: 'Mobile',
  seo: 'SEO',
  security: 'Sicherheit',
  structuredData: 'Strukturierte Daten',
  aiFindability: 'KI-Sichtbarkeit',
}

const CATEGORY_ICONS: Record<string, string> = {
  speed: '⚡',
  mobile: '📱',
  seo: '🔍',
  security: '🔒',
  structuredData: '🗂️',
  aiFindability: '🤖',
}

interface CategoryCardProps {
  category: string
  result: CategoryResult
  index: number
}

export function CategoryCard({ category, result, index }: CategoryCardProps) {
  const label = CATEGORY_LABELS[category] ?? category
  const icon = CATEGORY_ICONS[category] ?? '●'

  if (!result.available) {
    return (
      <div
        className="animate-card-in rounded-xl border border-gray-200 bg-gray-50 p-5 opacity-60"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{icon}</span>
          <h3 className="font-semibold text-gray-400">{label}</h3>
        </div>
        <p className="text-sm text-gray-400">Konnte nicht geprüft werden</p>
      </div>
    )
  }

  const scoreColor = scoreToColor(result.score)
  const bgClasses = scoreToBg(result.score)

  return (
    <div
      className={`animate-card-in rounded-xl border p-5 ${bgClasses}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <h3 className="font-semibold text-bg-dark">{label}</h3>
        </div>
        <span className={`text-2xl font-bold tabular-nums ${scoreColor}`}>
          {result.score}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-3 leading-relaxed">{result.description}</p>

      {result.findings.length > 0 && (
        <ul className="space-y-1">
          {result.findings.map((finding, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="mt-0.5 shrink-0 text-gray-400">›</span>
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
