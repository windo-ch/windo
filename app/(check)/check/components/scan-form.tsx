'use client'

import { useState, type FormEvent } from 'react'

interface ScanFormProps {
  onSubmit: (url: string) => void
  isLoading?: boolean
}

function normaliseInput(val: string): string {
  let url = val.trim()
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`
  try {
    const parsed = new URL(url)
    return `https://${parsed.hostname}`
  } catch {
    return url
  }
}

function validateUrl(raw: string): string | null {
  const normalised = normaliseInput(raw)
  try {
    const parsed = new URL(normalised)
    if (!parsed.hostname.includes('.')) {
      return 'Bitte geben Sie eine vollständige Domain ein (z.B. meinefirma.ch)'
    }
    return null
  } catch {
    return 'Bitte geben Sie eine gültige Website-Adresse ein'
  }
}

export function ScanForm({ onSubmit, isLoading }: ScanFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationError = validateUrl(value)
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    onSubmit(normaliseInput(value))
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-glow-deep bg-glow-ambient border border-glow-soft rounded-full px-3 py-1 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-glow-deep animate-pulse" />
          Kostenloser Website-Check
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-4 leading-tight">
          Wie gut ist Ihre Website<br className="hidden sm:block" /> wirklich?
        </h1>
        <p className="text-gray-600 text-lg max-w-lg mx-auto">
          Geben Sie Ihre Website-Adresse ein und erhalten Sie in 15 Sekunden
          eine detaillierte Analyse mit Handlungsempfehlungen.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={value}
              onChange={e => { setValue(e.target.value); setError(null) }}
              placeholder="meinefirma.ch"
              className={`w-full rounded-xl border px-4 py-3.5 bg-white text-bg-dark placeholder-gray-400
                focus:outline-none focus:ring-2 transition-colors
                ${error
                  ? 'border-red-400 focus:ring-red-400/30'
                  : 'border-gray-300 focus:border-glow-deep focus:ring-glow-deep/20'
                }`}
              disabled={isLoading}
              autoComplete="url"
              spellCheck={false}
            />
            {error && (
              <p className="text-red-400 text-sm mt-1.5">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading || !value.trim()}
            className="rounded-xl bg-glow-deep hover:bg-glow-hot btn-glow disabled:opacity-50 disabled:cursor-not-allowed
              text-white font-semibold px-6 py-3.5 transition-colors shrink-0 whitespace-nowrap"
          >
            Website analysieren
          </button>
        </div>
      </form>

      <p className="text-center text-xs text-gray-400 mt-4">
        Kostenlos · Kein Konto nötig · Ergebnis in ~15 Sekunden
      </p>
    </div>
  )
}
