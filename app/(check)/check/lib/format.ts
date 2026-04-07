const GERMAN_MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
]

export function scoreToColor(score: number): string {
  if (score >= 80) return 'text-emerald-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

export function scoreToBg(score: number): string {
  if (score >= 80) return 'bg-emerald-50 border border-emerald-200'
  if (score >= 50) return 'bg-amber-50 border border-amber-200'
  return 'bg-red-50 border border-red-200'
}

export function scoreToHex(score: number): string {
  if (score >= 80) return '#34d399'
  if (score >= 50) return '#fbbf24'
  return '#f87171'
}

export function formatGermanDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getDate()}. ${GERMAN_MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

export function getDomainFromUrl(url: string): string {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

export function normaliseUrl(raw: string): string {
  let url = raw.trim()
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`
  try {
    const parsed = new URL(url)
    return `https://${parsed.hostname}`
  } catch {
    return url
  }
}
