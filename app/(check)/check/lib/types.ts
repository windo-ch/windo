export interface CategoryResult {
  score: number
  description: string
  findings: string[]
  available: boolean
}

export interface ScanResult {
  url: string
  domain: string
  scannedAt: string
  overall: number
  categories: {
    speed: CategoryResult
    mobile: CategoryResult
    seo: CategoryResult
    security: CategoryResult
    structuredData: CategoryResult
    aiFindability: CategoryResult
  }
}

export type ScanError =
  | 'UNREACHABLE'
  | 'TIMEOUT'
  | 'AUTH_REQUIRED'
  | 'BLOCKED'
  | 'RATE_LIMITED'
  | 'INVALID_URL'
  | 'IP_ADDRESS'
  | 'UNKNOWN'
