const API_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

const AUDIT_LABELS: Record<string, string> = {
  'uses-optimized-images': 'Bilder sind nicht optimiert',
  'uses-text-compression': 'Textkomprimierung fehlt',
  'render-blocking-resources': 'Seitenblockierende Ressourcen',
  'unused-javascript': 'Ungenutztes JavaScript',
  'unused-css-rules': 'Ungenutztes CSS',
  'uses-long-cache-ttl': 'Kein Browser-Caching',
  'largest-contentful-paint': 'Ladezeit zu hoch (LCP)',
  'total-blocking-time': 'Seite reagiert zu langsam',
  'cumulative-layout-shift': 'Layout-Verschiebungen',
  'viewport': 'Kein Viewport-Meta-Tag',
  'tap-targets': 'Touch-Ziele zu klein',
  'font-size': 'Schrift zu klein für Mobilgeräte',
}

export interface PageSpeedData {
  performanceScore: number
  lcp: number
  fcp: number
  failedAudits: { id: string; title: string }[]
  hasViewport: boolean
  tapTargetsOk: boolean
  fontSizeOk: boolean
}

export async function fetchPageSpeed(url: string): Promise<PageSpeedData> {
  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY
  const params = new URLSearchParams({ url, strategy: 'mobile' })
  params.set('category', 'performance')
  params.append('category', 'accessibility')
  params.append('category', 'seo')
  if (apiKey) params.set('key', apiKey)

  const res = await fetch(`${API_BASE}?${params}`, {
    signal: AbortSignal.timeout(15000),
  })

  if (!res.ok) {
    throw new Error(`PageSpeed API returned ${res.status}`)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await res.json()
  const lr = data.lighthouseResult
  const audits = lr?.audits ?? {}
  const categories = lr?.categories ?? {}

  const performanceScore = Math.round((categories.performance?.score ?? 0) * 100)
  const lcp = (audits['largest-contentful-paint']?.numericValue ?? 0) / 1000
  const fcp = (audits['first-contentful-paint']?.numericValue ?? 0) / 1000

  const failedAudits: { id: string; title: string }[] = []
  for (const [id, audit] of Object.entries(audits)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const a = audit as any
    if (typeof a.score === 'number' && a.score < 0.5 && id in AUDIT_LABELS) {
      failedAudits.push({ id, title: AUDIT_LABELS[id] })
    }
  }

  const hasViewport = (audits['viewport']?.score ?? 0) >= 0.9
  const tapTargetsOk = (audits['tap-targets']?.score ?? 1) >= 0.9
  const fontSizeOk = (audits['font-size']?.score ?? 1) >= 0.9

  return { performanceScore, lcp, fcp, failedAudits, hasViewport, tapTargetsOk, fontSizeOk }
}
