'use client';

import { useState, useEffect } from 'react';

const CONSENT_KEY = 'analytics-consent';

export type ConsentState = 'accepted' | 'declined' | null;

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem(CONSENT_KEY) as ConsentState) ?? null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    // Fire GA if it's already loaded (page didn't reload)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    // Reload to initialise GA properly
    window.location.reload();
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50">
      <div className="bg-bg-dark border border-white/10 rounded-2xl px-5 py-5 shadow-xl">
        <p className="text-sm font-semibold text-white mb-1">Cookies & Analyse</p>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">
          Wir nutzen{' '}
          <a href="https://umami.is" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition-colors">
            Umami
          </a>{' '}
          (anonym, cookiefrei) und Google Analytics (mit Cookie) zur Verbesserung dieser Website.{' '}
          <a href="/datenschutz" className="underline underline-offset-2 hover:text-white transition-colors">
            Datenschutz
          </a>
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-glow-deep text-white text-xs font-semibold px-4 py-2.5 rounded-xl btn-glow transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}
