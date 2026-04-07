'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/90 backdrop-blur-md ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl text-bg-dark hover:text-glow-deep transition-colors">
          windo.ch
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/angebot" className="text-bg-dark hover:text-glow-deep transition-colors">
            Angebot
          </a>
          <a href="/ueber-mich" className="text-bg-dark hover:text-glow-deep transition-colors">
            Über mich
          </a>
        </nav>
        <a
          href="/check"
          className="inline-flex items-center gap-2 bg-glow-deep text-white font-semibold px-4 py-2 rounded-lg btn-glow text-sm"
        >
          Gratis Website-Check
        </a>
      </div>
    </header>
  );
}
