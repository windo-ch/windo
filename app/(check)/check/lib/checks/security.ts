import type { HtmlAnalysisData } from './html-analysis'

export interface SecurityAnalysis {
  isHttps: boolean
  hsts: boolean
  xContentType: boolean
  frameProtection: boolean
  score: number
}

export function analyzeSecurityHeaders(data: HtmlAnalysisData): SecurityAnalysis {
  const h = data.responseHeaders
  const isHttps = data.isHttps
  const hsts = !!(h['strict-transport-security'])
  const xContentType = !!(h['x-content-type-options'])
  const frameProtection = !!(h['x-frame-options'] || h['content-security-policy'])

  let score = 0
  if (isHttps) score += 60
  if (hsts) score += 15
  if (xContentType) score += 12
  if (frameProtection) score += 13

  return { isHttps, hsts, xContentType, frameProtection, score }
}
