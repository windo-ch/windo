import type { ScanResult } from './types'

// Client-side: uses btoa (browser)
export function encodeResults(result: ScanResult): string {
  const json = JSON.stringify(result)
  const bytes = new TextEncoder().encode(json)
  const binary = String.fromCharCode(...Array.from(bytes))
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

// Server-side: uses Node Buffer
export function decodeResults(encoded: string): ScanResult | null {
  try {
    const json = Buffer.from(encoded, 'base64url').toString('utf-8')
    return JSON.parse(json) as ScanResult
  } catch {
    return null
  }
}
