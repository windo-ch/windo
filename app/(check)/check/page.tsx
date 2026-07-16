import type { Metadata } from 'next'
import { decodeResults } from './lib/encode-results'
import { CheckPageContent } from './components/check-page-content'

interface Props {
  searchParams: Promise<{ r?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams
  const encoded = params.r

  if (encoded) {
    const result = decodeResults(encoded)
    if (result) {
      return {
        title: `Website-Check: ${result.domain} — ${result.overall}/100 — windo.ch`,
        description: `Detaillierte Website-Analyse für ${result.domain}. Gesamtscore: ${result.overall}/100. Kostenloser Check von windo.ch.`,
      }
    }
  }

  return {
    title: 'Website-Check — windo.ch',
    description: 'Analysieren Sie Ihre Website: SEO, Sicherheit, Struktur und KI-Sichtbarkeit — alles auf einen Blick. Google-Ladezeit-Analyse von Henry persönlich.',
  }
}

export default async function CheckPage({ searchParams }: Props) {
  const params = await searchParams
  const encoded = params.r
  const initialResult = encoded ? decodeResults(encoded) : null

  return <CheckPageContent initialResult={initialResult} />
}
