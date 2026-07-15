'use client';

import { useState } from 'react';
import Image from 'next/image';

function Slider() {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative select-none overflow-hidden rounded-2xl aspect-video bg-gray-100">
      {/* After — full base */}
      <Image
        src="/images/drobrenovic-after.png"
        alt="drobrenovic.ch nachher"
        fill
        className="object-cover object-top"
      />
      {/* Before — clipped to left portion */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src="/images/drobrenovic-before.png"
          alt="drobrenovic.ch vorher"
          fill
          className="object-cover object-top"
        />
      </div>
      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 text-sm font-bold">
          ⇔
        </div>
      </div>
      {/* Drag target */}
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Vorher / Nachher Vergleich"
      />
      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        Vorher
      </span>
      <span className="absolute top-3 right-3 bg-glow-deep text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        Nachher
      </span>
    </div>
  );
}

const SCORES = [
  { label: 'Performance Desktop', before: 79,  after: 100 },
  { label: 'Performance Mobile',  before: 63,  after: 74  },
  { label: 'SEO',                 before: 92,  after: 100 },
  { label: 'Accessibility',       before: 85,  after: 100 },
];

function ScoreBar({ before, after }: { before: number; after: number }) {
  const improved = after > before;
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-right text-sm text-gray-400 tabular-nums">{before}</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${improved ? 'bg-glow-deep' : 'bg-gray-400'}`}
          style={{ width: `${after}%` }}
        />
      </div>
      <span className={`w-8 text-sm font-bold tabular-nums ${after === 100 ? 'text-glow-deep' : 'text-bg-dark'}`}>
        {after}
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-bg-subtle py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-glow-deep/70 font-semibold mb-5">
          Vorher / Nachher
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-2">
          Dr. Obrenovic, Zahnarzt.
        </h2>
        <p className="text-gray-500 mb-3">
          Eigengebaut, veraltet — neue Website in 10 Arbeitstagen.
        </p>
        <a
          href="https://drobrenovic.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-glow-deep font-semibold hover:underline mb-10 inline-block"
        >
          drobrenovic.ch ↗
        </a>

        {/* Slider */}
        <div className="mt-6 mb-14">
          <Slider />
          <p className="text-xs text-gray-400 text-center mt-2">Schieben zum Vergleichen</p>
        </div>

        {/* PageSpeed scores */}
        <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-6">
          Google PageSpeed — Vorher → Nachher
        </p>
        <div className="space-y-4">
          {SCORES.map(({ label, before, after }) => (
            <div key={label} className="grid grid-cols-[140px_1fr] items-center gap-4">
              <p className="text-sm text-gray-500">{label}</p>
              <ScoreBar before={before} after={after} />
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Quelle: Google PageSpeed Insights, 15. Juli 2026.
        </p>
      </div>
    </section>
  );
}
