const WA_URL =
  'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website.';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-bold text-xl mb-2">windo.ch</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professionelle Websites für Schweizer KMU. Schnell, modern und auf Erfolg ausgerichtet.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-gray-300">Kontakt</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-wa transition-colors"
                >
                  WhatsApp: +41 79 175 20 20
                </a>
              </li>
              <li>
                <a href="tel:+41791752020" className="hover:text-white transition-colors">
                  Tel: +41 79 175 20 20
                </a>
              </li>
              <li>
                <a href="mailto:henry@windo.ch" className="hover:text-white transition-colors">
                  henry@windo.ch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3 text-gray-300">Branchen</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/zahnarzt" className="hover:text-white transition-colors">Zahnarzt</a></li>
              <li><a href="/coiffeur" className="hover:text-white transition-colors">Coiffeur</a></li>
              <li><a href="/restaurant" className="hover:text-white transition-colors">Restaurant</a></li>
              <li><a href="/handwerker" className="hover:text-white transition-colors">Handwerker</a></li>
              <li><a href="/arztpraxis" className="hover:text-white transition-colors">Arztpraxis</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} windo.ch · Zug, Schweiz ·{' '}
            <a href="https://henry.marketing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              henry.marketing
            </a>
          </span>
          <a
            href="/localsearch-vergleich"
            className="hover:text-gray-400 transition-colors underline underline-offset-2 mt-1 sm:mt-0"
          >
            Vergleich mit localsearch
          </a>
        </div>
      </div>
    </footer>
  );
}
