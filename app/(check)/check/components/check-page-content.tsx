'use client'

import { useEffect, useState } from 'react'
import type { ScanResult } from '../lib/types'
import { encodeResults } from '../lib/encode-results'
import { runScan } from '../actions'
import { ScanForm } from './scan-form'
import { ScanLoading } from './scan-loading'
import { ScanResults } from './scan-results'

type Phase =
  | { name: 'idle' }
  | { name: 'loading'; url: string }
  | { name: 'results'; result: ScanResult; isShared: boolean }
  | { name: 'error'; error: string }

interface CheckPageContentProps {
  initialResult: ScanResult | null
}

export function CheckPageContent({ initialResult }: CheckPageContentProps) {
  const [phase, setPhase] = useState<Phase>(() =>
    initialResult
      ? { name: 'results', result: initialResult, isShared: true }
      : { name: 'idle' }
  )

  useEffect(() => {
    if (initialResult && phase.name === 'idle') {
      setPhase({ name: 'results', result: initialResult, isShared: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleScan(url: string) {
    setPhase({ name: 'loading', url })

    try {
      const response = await runScan(url)
      if (response.success) {
        const encoded = encodeResults(response.result)
        window.history.pushState({}, '', `/check?r=${encoded}`)
        setPhase({ name: 'results', result: response.result, isShared: false })
      } else {
        setPhase({ name: 'error', error: response.message })
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.'
      setPhase({ name: 'error', error: message })
    }
  }

  function handleReset() {
    window.history.pushState({}, '', '/check')
    setPhase({ name: 'idle' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 py-4 sm:px-8 border-b border-glow-soft bg-bg">
        <a
          href="/"
          className="text-sm text-bg-dark hover:text-glow-deep transition-colors font-medium inline-flex items-center gap-1.5"
        >
          windo.ch
          <span className="text-[10px] font-semibold bg-glow-ambient text-glow-deep px-1.5 py-0.5 rounded-full leading-none">beta</span>
        </a>
        {phase.name === 'results' && (
          <button
            onClick={handleReset}
            className="text-sm text-gray-500 hover:text-bg-dark transition-colors"
          >
            Neue URL testen
          </button>
        )}
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16">
        {phase.name === 'idle' && (
          <ScanForm onSubmit={handleScan} />
        )}

        {phase.name === 'loading' && (
          <ScanLoading url={phase.url} />
        )}

        {phase.name === 'results' && (
          <ScanResults
            result={phase.result}
            isShared={phase.isShared}
            onReset={handleReset}
          />
        )}

        {phase.name === 'error' && (
          <div className="text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-400 text-xl">✕</span>
            </div>
            <h2 className="text-lg font-semibold text-bg-dark mb-2">Scan fehlgeschlagen</h2>
            <p className="text-gray-500 text-sm mb-6">{phase.error}</p>
            <button
              onClick={handleReset}
              className="rounded-xl bg-gray-100 hover:bg-gray-200 text-bg-dark text-sm font-medium px-6 py-3 transition-colors"
            >
              Erneut versuchen
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
