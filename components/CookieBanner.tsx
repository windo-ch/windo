'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('analytics-notice-dismissed')) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem('analytics-notice-dismissed', '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50">
      <div className="bg-bg-dark border border-white/10 rounded-2xl px-5 py-4 shadow-xl flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-300 leading-relaxed">
            Diese Website nutzt{' '}
            <a
              href="https://umami.is"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Umami Analytics
            </a>
            {' '}— anonym, ohne Cookies, DSGVO-konform.{' '}
            <a href="/datenschutz" className="underline underline-offset-2 hover:text-white transition-colors">
              Datenschutz
            </a>
          </p>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 text-gray-500 hover:text-white transition-colors text-lg leading-none mt-0.5"
          aria-label="Schliessen"
        >
          ×
        </button>
      </div>
    </div>
  );
}
