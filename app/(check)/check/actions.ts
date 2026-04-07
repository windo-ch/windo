'use server'

import { headers } from 'next/headers'
import type { ScanResult, ScanError } from './lib/types'
import { getDomainFromUrl } from './lib/format'
import { fetchPageSpeed } from './lib/checks/pagespeed'
import { analyzeHtml } from './lib/checks/html-analysis'
import { analyzeSecurityHeaders } from './lib/checks/security'
import {
  scoreSpeed,
  scoreMobile,
  scoreSeo,
  scoreSecurity,
  scoreStructuredData,
  scoreAiFindability,
} from './lib/checks/scoring'

const ipLimiter = new Map<string, { count: number; resetAt: number }>()
const domainLimiter = new Map<string, { count: number; resetAt: number }>()

const HOUR_MS = 60 * 60 * 1000

function checkRateLimit(map: Map<string, { count: number; resetAt: number }>, key: string, max: number): boolean {
  const now = Date.now()
  const entry = map.get(key)
  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + HOUR_MS })
    return true
  }
  if (entry.count >= max) return false
  entry.count++
  return true
}

function isIpAddress(hostname: string): boolean {
  return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname) ||
    hostname === 'localhost' ||
    hostname.endsWith('.local')
}

function normaliseUrl(raw: string): string {
  let url = raw.trim()
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`
  try {
    const parsed = new URL(url)
    return `https://${parsed.hostname}`
  } catch {
    return url
  }
}

export async function runScan(rawUrl: string): Promise<
  | { success: true; result: ScanResult }
  | { success: false; error: ScanError; message: string }
> {
  const normalised = normaliseUrl(rawUrl)
  let parsed: URL
  try {
    parsed = new URL(normalised)
  } catch {
    return { success: false, error: 'INVALID_URL', message: 'Die eingegebene URL ist ungültig.' }
  }

  if (!parsed.hostname.includes('.')) {
    return { success: false, error: 'INVALID_URL', message: 'Bitte geben Sie eine gültige Domain ein.' }
  }

  if (isIpAddress(parsed.hostname)) {
    return {
      success: false,
      error: 'IP_ADDRESS',
      message: 'IP-Adressen können nicht gescannt werden. Bitte geben Sie eine Domain ein.',
    }
  }

  const headersList = await headers()
  const forwardedFor = headersList.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown'
  const domain = parsed.hostname

  if (!checkRateLimit(ipLimiter, ip, 5)) {
    return {
      success: false,
      error: 'RATE_LIMITED',
      message: 'Zu viele Scans. Bitte warten Sie eine Stunde und versuchen Sie es erneut.',
    }
  }

  if (!checkRateLimit(domainLimiter, domain, 2)) {
    return {
      success: false,
      error: 'RATE_LIMITED',
      message: 'Diese Domain wurde bereits mehrfach gescannt. Bitte warten Sie eine Stunde.',
    }
  }

  const url = normalised
  const isWindoCh = domain === 'windo.ch'

  const [psiResult, htmlResult] = await Promise.allSettled([
    fetchPageSpeed(url),
    analyzeHtml(url),
  ])

  if (htmlResult.status === 'rejected') {
    const err = htmlResult.reason
    const msg = err instanceof Error ? err.message : String(err)

    if (msg.includes('401') || msg.includes('Unauthorized')) {
      return { success: false, error: 'AUTH_REQUIRED', message: 'Die Website erfordert eine Anmeldung.' }
    }
    if (msg.includes('403') || msg.includes('429')) {
      return { success: false, error: 'BLOCKED', message: 'Die Website blockiert automatische Anfragen.' }
    }
    if (msg.includes('timeout') || msg.includes('TimeoutError') || msg.includes('AbortError')) {
      return { success: false, error: 'TIMEOUT', message: 'Die Website hat nicht rechtzeitig geantwortet (Timeout).' }
    }

    return { success: false, error: 'UNREACHABLE', message: 'Die Website ist nicht erreichbar.' }
  }

  const html = htmlResult.value

  if (html.statusCode === 401) {
    return { success: false, error: 'AUTH_REQUIRED', message: 'Die Website erfordert eine Anmeldung.' }
  }
  if (html.statusCode === 403 || html.statusCode === 429) {
    return { success: false, error: 'BLOCKED', message: 'Die Website blockiert automatische Anfragen.' }
  }

  const secAnalysis = analyzeSecurityHeaders(html)

  const speedResult = psiResult.status === 'fulfilled'
    ? scoreSpeed(psiResult.value)
    : { score: 0, description: 'Ladegeschwindigkeit konnte nicht gemessen werden.', findings: [], available: false }

  const mobileResult = psiResult.status === 'fulfilled'
    ? scoreMobile(psiResult.value)
    : { score: 0, description: 'Mobile-Analyse konnte nicht durchgeführt werden.', findings: [], available: false }

  const seoResult = scoreSeo(html)
  const securityResult = scoreSecurity(secAnalysis)
  const structuredDataResult = scoreStructuredData(html)
  const aiFindabilityResult = scoreAiFindability(html, structuredDataResult.score)

  if (isWindoCh) {
    aiFindabilityResult.description =
      'Als Webdesign-Agentur sind wir natürlich bestens für KI-Suchen aufgestellt. 😄 ' +
      aiFindabilityResult.description
  }

  const WEIGHTS = {
    speed: 0.20,
    mobile: 0.20,
    seo: 0.20,
    security: 0.15,
    structuredData: 0.10,
    aiFindability: 0.15,
  }
  const categoryMap = {
    speed: speedResult,
    mobile: mobileResult,
    seo: seoResult,
    security: securityResult,
    structuredData: structuredDataResult,
    aiFindability: aiFindabilityResult,
  }
  let totalWeight = 0
  let weightedSum = 0
  for (const key of Object.keys(WEIGHTS) as (keyof typeof WEIGHTS)[]) {
    if (categoryMap[key].available) {
      totalWeight += WEIGHTS[key]
      weightedSum += categoryMap[key].score * WEIGHTS[key]
    }
  }
  const overall = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0

  const result: ScanResult = {
    url,
    domain: getDomainFromUrl(url),
    scannedAt: new Date().toISOString(),
    overall,
    categories: {
      speed: speedResult,
      mobile: mobileResult,
      seo: seoResult,
      security: securityResult,
      structuredData: structuredDataResult,
      aiFindability: aiFindabilityResult,
    },
  }

  return { success: true, result }
}
