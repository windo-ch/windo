'use client'

import { useState } from 'react'
import type { ScanResult } from '../lib/types'
import { scoreToColor, formatGermanDate } from '../lib/format'
import { ScoreGauge } from './score-gauge'
import { CategoryCard } from './category-card'
import { Recommendation } from './recommendation'

const CATEGORY_ORDER = [
  'speed',
  'mobile',
  'seo',
  'security',
  'structuredData',
  'aiFindability',
] as const

interface ScanResultsProps {
  result: ScanResult
  isShared: boolean
  onReset: () => void
}

function overallMessage(score: number): string {
  if (score >= 85) return 'Ihre Website ist in sehr gutem Zustand. Weiter so!'
  if (score >= 70) return 'Gute Basis. Ein paar Verbesserungen würden einen grossen Unterschied machen.'
  if (score >= 50) return 'Durchschnittliche Performance. Es gibt wichtige Optimierungspotenziale.'
  if (score >= 30) return 'Ihre Website hat erhebliche Mängel, die Besucher und Rankings kosten.'
  return 'Dringende Massnahmen nötig. Ihre Website verliert Besucher und Umsatz.'
}

export function ScanResults({ result, isShared, onReset }: ScanResultsProps) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  const scoreColor = scoreToColor(result.overall)
  const isLowScore = result.overall < 85

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {isShared && (
        <p className="text-sm text-gray-500 text-center">
          Ergebnis vom {formatGermanDate(result.scannedAt)}.{' '}
          <button
            onClick={onReset}
            className="text-glow-deep hover:text-glow-hot transition-colors underline underline-offset-2"
          >
            Erneut testen →
          </button>
        </p>
      )}

      <div className="rounded-2xl border border-glow-soft bg-bg-card card-warm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="shrink-0">
            <ScoreGauge score={result.overall} />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-sm mb-1">{result.domain}</p>
            <p className={`text-4xl font-bold tabular-nums ${scoreColor}`}>
              {result.overall}<span className="text-xl font-normal text-gray-400">/100</span>
            </p>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed max-w-xs">
              {overallMessage(result.overall)}
            </p>
            {!isShared && (
              <p className="text-gray-500 text-xs mt-2">
                Gescannt am {formatGermanDate(result.scannedAt)}
              </p>
            )}
          </div>
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

      {isLowScore ? (
        <div className="rounded-2xl border border-glow-soft bg-glow-ambient p-6 sm:p-8 text-center">
          <p className="text-glow-deep text-xs font-semibold uppercase tracking-wider mb-3">
            Kostenlose Beratung
          </p>
          <h2 className="text-xl font-bold text-bg-dark mb-3">
            Wir verbessern Ihre Website — garantiert.
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-sm mx-auto">
            Henry zeigt Ihnen in einem kostenlosen 15-Minuten-Gespräch,
            was konkret verbessert werden kann.
          </p>
          <a
            href="https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20habe%20meine%20Website%20gecheckt%20und%20würde%20gerne%20mehr%20erfahren."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-glow-deep hover:bg-glow-hot btn-glow text-white font-semibold px-8 py-3.5 transition-colors"
          >
            Kostenlose Beratung via WhatsApp
          </a>
          <p className="text-gray-500 text-xs mt-3">
            oder{' '}
            <a href="mailto:henry@windo.ch" className="text-glow-deep hover:text-glow-hot transition-colors underline underline-offset-2">
              henry@windo.ch
            </a>
            {' '}· Keine Verpflichtung
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <p className="text-emerald-600 font-semibold mb-2">Sehr gute Website! 🎉</p>
          <p className="text-gray-600 text-sm">
            Ihre Website ist gut aufgestellt. Für gezielte Feinoptimierung stehen wir gerne zur Verfügung.{' '}
            <a href="mailto:henry@windo.ch" className="text-glow-deep hover:text-glow-hot transition-colors">
              henry@windo.ch
            </a>
          </p>
        </div>
      )}

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50
            text-gray-600 text-sm px-4 py-2.5 transition-colors"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✓</span>
              Kopiert!
            </>
          ) : (
            <>
              <span>🔗</span>
              Ergebnis-Link kopieren
            </>
          )}
        </button>
        {!isShared && (
          <button
            onClick={onReset}
            className="text-sm text-gray-500 hover:text-bg-dark transition-colors"
          >
            Neue URL testen
          </button>
        )}
      </div>

      <Recommendation result={result} />
    </div>
  )
}
