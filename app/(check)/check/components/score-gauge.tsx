'use client'

import { useEffect, useState } from 'react'
import { scoreToHex, scoreToColor } from '../lib/format'

const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

interface ScoreGaugeProps {
  score: number
}

export function ScoreGauge({ score }: ScoreGaugeProps) {
  const [offset, setOffset] = useState(CIRCUMFERENCE)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOffset(CIRCUMFERENCE * (1 - score / 100))
    })
    return () => cancelAnimationFrame(id)
  }, [score])

  const color = scoreToHex(score)
  const textColor = scoreToColor(score)

  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" viewBox="0 0 120 120" aria-label={`Score: ${score}/100`}>
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
        <text
          x="60"
          y="56"
          textAnchor="middle"
          dominantBaseline="middle"
          className={`text-3xl font-bold fill-current ${textColor}`}
          fill={color}
          fontSize="28"
          fontWeight="700"
        >
          {score}
        </text>
        <text
          x="60"
          y="76"
          textAnchor="middle"
          fill="#737373"
          fontSize="12"
        >
          /100
        </text>
      </svg>
    </div>
  )
}
