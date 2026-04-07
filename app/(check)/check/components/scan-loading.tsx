'use client'

import { useEffect, useRef } from 'react'

const LOADING_ITEMS = [
  'Ladegeschwindigkeit wird gemessen...',
  'SSL-Sicherheit wird überprüft...',
  'Mobile Darstellung wird getestet...',
  'SEO-Grundlagen werden analysiert...',
  'Strukturierte Daten werden gesucht...',
  'AI-Sichtbarkeit wird bewertet...',
]

interface ScanLoadingProps {
  url: string
  complete?: boolean
}

export function ScanLoading({ url, complete }: ScanLoadingProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    requestAnimationFrame(() => {
      bar.style.transition = 'width 8s ease-out'
      bar.style.width = '90%'
    })
  }, [])

  useEffect(() => {
    const bar = barRef.current
    if (!bar || !complete) return
    bar.style.transition = 'width 0.3s ease-in'
    bar.style.width = '100%'
  }, [complete])

  let displayDomain = url
  try {
    displayDomain = new URL(url).hostname
  } catch { /* ignore */ }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-100">
        <div
          ref={barRef}
          className="h-full bg-glow-deep"
          style={{ width: '0%' }}
        />
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm mb-1">Analysiere</p>
        <p className="font-semibold text-bg-dark">{displayDomain}</p>
      </div>

      <div className="space-y-3">
        {LOADING_ITEMS.map((item, index) => (
          <div
            key={item}
            className="animate-loading-item flex items-center gap-3 text-sm text-gray-600"
            style={{ animationDelay: `${index * 400}ms` }}
          >
            <svg
              className="animate-spin shrink-0 text-glow-deep"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
              <path
                d="M8 2a6 6 0 0 1 6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
