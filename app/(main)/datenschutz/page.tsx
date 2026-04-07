import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — windo.ch',
  description: 'Datenschutzerklärung von windo.ch gemäss Schweizer Datenschutzgesetz (DSG).',
  robots: 'noindex',
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 sm:py-32">
      <h1 className="text-3xl sm:text-4xl font-bold text-bg-dark mb-3">Datenschutzerklärung</h1>
      <p className="text-sm text-gray-400 mb-12">Stand: April 2026</p>

      <div className="prose-like space-y-10 text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">1. Verantwortlicher</h2>
          <p>
            Henry Barrows<br />
            windo.ch<br />
            Zug, Schweiz<br />
            <a href="mailto:henry@windo.ch" className="text-glow-deep hover:text-glow-hot transition-colors">henry@windo.ch</a><br />
            +41 79 175 20 20
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">2. Grundsatz</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Ich verarbeite Personendaten
            ausschliesslich im Einklang mit dem Schweizer Datenschutzgesetz (DSG) sowie, soweit
            anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">3. Erhobene Daten und Zweck</h2>

          <h3 className="font-medium text-bg-dark mt-5 mb-2">Website-Analyse (Umami)</h3>
          <p>
            Diese Website verwendet <strong>Umami Analytics</strong> — ein datenschutzfreundliches,
            cookiefreies Analyse-Tool. Es werden keine personenbezogenen Daten gespeichert, keine
            Cookies gesetzt und keine IP-Adressen erfasst. Die gesammelten Nutzungsdaten sind
            vollständig anonym und dienen ausschliesslich der Verbesserung des Webangebots.
            Umami ist DSGVO-konform und speichert keine Daten auf Drittservern ausserhalb der EU.
          </p>

          <h3 className="font-medium text-bg-dark mt-5 mb-2">Kontaktaufnahme</h3>
          <p>
            Wenn Sie mich per E-Mail, Telefon oder WhatsApp kontaktieren, speichere ich Ihre
            Angaben (Name, E-Mail-Adresse, Nachrichteninhalt) ausschliesslich zur Bearbeitung
            Ihrer Anfrage. Diese Daten werden nicht an Dritte weitergegeben und nach Abschluss
            der Kommunikation gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
          </p>

          <h3 className="font-medium text-bg-dark mt-5 mb-2">Geschäftliche E-Mail-Kommunikation</h3>
          <p>
            Im Rahmen meiner Geschäftstätigkeit kontaktiere ich Unternehmen per E-Mail, um auf
            meine Dienstleistungen hinzuweisen. Diese Kontaktaufnahme erfolgt auf Basis meines
            berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO / Art. 31 DSG) und richtet sich
            ausschliesslich an Unternehmen und Gewerbetreibende — nicht an Privatpersonen. Jede
            E-Mail enthält einen Hinweis, wie Sie der weiteren Kontaktaufnahme widersprechen können.
            Nach einem Widerspruch werden Ihre Daten umgehend aus meinem System entfernt.
          </p>
          <p className="mt-2">
            Für den E-Mail-Versand nutze ich <strong>Resend</strong> (Resend Inc., USA). Resend
            verarbeitet dabei E-Mail-Adressen und Versandmetadaten. Es gelten die{' '}
            <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer"
              className="text-glow-deep hover:text-glow-hot transition-colors">
              Datenschutzbestimmungen von Resend
            </a>.
          </p>

          <h3 className="font-medium text-bg-dark mt-5 mb-2">Hosting (Netlify)</h3>
          <p>
            Diese Website wird über <strong>Netlify</strong> (Netlify Inc., USA) gehostet.
            Beim Aufruf der Website werden technische Daten (IP-Adresse, Browser, Zeitstempel)
            in Server-Logs erfasst. Diese Daten werden ausschliesslich für den Betrieb und die
            Sicherheit des Servers genutzt. Es gelten die{' '}
            <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer"
              className="text-glow-deep hover:text-glow-hot transition-colors">
              Datenschutzbestimmungen von Netlify
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">4. Weitergabe an Dritte</h2>
          <p>
            Ich verkaufe, vermiete oder übertrage Ihre Daten nicht an Dritte. Eine Weitergabe
            erfolgt nur, soweit dies zur Erbringung meiner Dienstleistungen notwendig ist
            (z. B. E-Mail-Versand über Resend) oder gesetzlich vorgeschrieben ist.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul className="mt-3 space-y-1.5 list-none">
            {[
              'Auskunft über die zu Ihrer Person gespeicherten Daten',
              'Berichtigung unrichtiger Daten',
              'Löschung Ihrer Daten',
              'Widerspruch gegen die Verarbeitung',
              'Einschränkung der Verarbeitung',
              'Datenübertragbarkeit',
            ].map((right) => (
              <li key={right} className="flex items-start gap-2">
                <span className="text-glow-deep shrink-0 mt-0.5">→</span>
                {right}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
            <a href="mailto:henry@windo.ch" className="text-glow-deep hover:text-glow-hot transition-colors">
              henry@windo.ch
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">6. Datensicherheit</h2>
          <p>
            Ich treffe angemessene technische und organisatorische Massnahmen zum Schutz Ihrer
            Daten vor unbefugtem Zugriff, Verlust oder Missbrauch. Die Übertragung dieser Website
            erfolgt verschlüsselt via HTTPS/TLS.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-bg-dark mb-3">7. Änderungen</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils
            aktuelle Version ist auf dieser Seite abrufbar.
          </p>
        </section>

        <section className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            Bei Fragen zum Datenschutz:{' '}
            <a href="mailto:henry@windo.ch" className="text-glow-deep hover:text-glow-hot transition-colors">
              henry@windo.ch
            </a>
            {' '}· +41 79 175 20 20
          </p>
        </section>

      </div>
    </div>
  );
}
