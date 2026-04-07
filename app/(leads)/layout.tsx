import type { ReactNode } from 'react';

export default function LeadsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-white hover:text-glow transition-colors text-sm">
            windo.ch
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website."
              className="text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:+41791752020"
              className="text-xs font-semibold text-white bg-glow-deep hover:bg-glow-hot px-4 py-2 rounded-lg transition-colors btn-glow"
            >
              Anrufen
            </a>
          </div>
        </div>
      </header>
      <div className="pt-14 bg-bg-dark min-h-screen">
        {children}
      </div>
    </>
  );
}
