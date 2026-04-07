import type { CategoryResult } from '../types'
import type { PageSpeedData } from './pagespeed'
import type { HtmlAnalysisData } from './html-analysis'
import type { SecurityAnalysis } from './security'
import { scoreAiFindabilityRaw } from './ai-findability'

export function scoreSpeed(psi: PageSpeedData): CategoryResult {
  const score = psi.performanceScore
  const findings: string[] = []

  if (psi.lcp > 4) findings.push(`LCP: ${psi.lcp.toFixed(1)}s (Ziel: unter 2.5s)`)
  else if (psi.lcp > 2.5) findings.push(`LCP: ${psi.lcp.toFixed(1)}s (leicht über Ziel)`)

  if (psi.fcp > 3) findings.push(`FCP: ${psi.fcp.toFixed(1)}s (Ziel: unter 1.8s)`)

  for (const audit of psi.failedAudits.slice(0, 3)) {
    findings.push(audit.title)
  }

  let description: string
  if (score >= 80) {
    description = 'Ihre Website lädt schnell – ein echter Vorteil für Besucher und Suchmaschinen.'
  } else if (score >= 50) {
    description = 'Die Ladegeschwindigkeit ist durchschnittlich. Verbesserungen würden die Absprungrate senken.'
  } else {
    description = 'Die Website lädt deutlich zu langsam. Viele Besucher verlassen die Seite, bevor sie geladen ist.'
  }

  return { score, description, findings: findings.slice(0, 4), available: true }
}

export function scoreMobile(psi: PageSpeedData): CategoryResult {
  const findings: string[] = []
  let score = 80

  if (!psi.hasViewport) {
    score -= 40
    findings.push('Kein Viewport-Meta-Tag gesetzt')
  }
  if (!psi.tapTargetsOk) {
    score -= 20
    findings.push('Touch-Ziele (Buttons/Links) sind zu klein')
  }
  if (!psi.fontSizeOk) {
    score -= 15
    findings.push('Schrift ist zu klein für Mobilgeräte')
  }

  const mobilePerf = psi.performanceScore
  score = Math.round(score * 0.6 + mobilePerf * 0.4)
  score = Math.max(0, Math.min(100, score))

  let description: string
  if (score >= 80) {
    description = 'Die Website ist gut für Mobilgeräte optimiert.'
  } else if (score >= 50) {
    description = 'Auf Mobilgeräten gibt es Optimierungspotenzial – wichtig da über 60% der Besucher mobil surfen.'
  } else {
    description = 'Die mobile Darstellung ist mangelhaft. Das schadet sowohl Nutzern als auch dem Google-Ranking.'
  }

  return { score, description, findings: findings.slice(0, 4), available: true }
}

export function scoreSeo(html: HtmlAnalysisData): CategoryResult {
  const findings: string[] = []
  let score = 100

  if (!html.title) {
    score -= 20
    findings.push('Kein Seitentitel (title) vorhanden')
  } else if (html.title.length < 30 || html.title.length > 60) {
    score -= 8
    findings.push(`Titel-Länge: ${html.title.length} Zeichen (ideal: 30–60)`)
  }

  if (!html.metaDescription) {
    score -= 15
    findings.push('Keine Meta-Beschreibung vorhanden')
  } else if (html.metaDescription.length < 120 || html.metaDescription.length > 160) {
    score -= 5
    findings.push(`Meta-Description-Länge: ${html.metaDescription.length} Zeichen (ideal: 120–160)`)
  }

  if (html.h1Count === 0) {
    score -= 15
    findings.push('Kein H1-Überschrift vorhanden')
  } else if (html.h1Count > 1) {
    score -= 8
    findings.push(`Mehrere H1-Überschriften (${html.h1Count}) gefunden`)
  }

  if (!html.langAttr) {
    score -= 10
    findings.push('Kein lang-Attribut im HTML-Tag')
  }

  if (html.imgCount > 0) {
    const missingAlt = html.imgCount - html.imgWithAlt
    if (missingAlt > 0) {
      score -= Math.min(10, missingAlt * 3)
      findings.push(`${missingAlt} Bild(er) ohne Alt-Text`)
    }
  }

  if (!html.hasRobotsTxt) {
    score -= 5
    findings.push('Keine robots.txt vorhanden')
  }

  if (!html.hasSitemapXml) {
    score -= 5
    findings.push('Keine sitemap.xml gefunden')
  }

  score = Math.max(0, Math.min(100, score))

  let description: string
  if (score >= 80) {
    description = 'Die SEO-Grundlagen sind solide umgesetzt. Suchmaschinen können Ihre Seite gut verstehen.'
  } else if (score >= 50) {
    description = 'Einige SEO-Grundlagen fehlen. Mit gezielten Verbesserungen lässt sich die Sichtbarkeit steigern.'
  } else {
    description = 'Wesentliche SEO-Grundlagen fehlen. Suchmaschinen haben Schwierigkeiten, Ihre Seite zu verstehen.'
  }

  return { score, description, findings: findings.slice(0, 4), available: true }
}

export function scoreSecurity(sec: SecurityAnalysis): CategoryResult {
  const score = sec.score
  const findings: string[] = []

  if (!sec.isHttps) findings.push('Keine HTTPS-Verschlüsselung aktiv')
  if (!sec.hsts) findings.push('HSTS-Header fehlt (Strict-Transport-Security)')
  if (!sec.xContentType) findings.push('X-Content-Type-Options-Header fehlt')
  if (!sec.frameProtection) findings.push('Kein Schutz gegen Clickjacking (X-Frame-Options / CSP)')

  let description: string
  if (score >= 80) {
    description = 'Sehr gute Sicherheitskonfiguration. Wichtige HTTP-Sicherheits-Header sind gesetzt.'
  } else if (score >= 60) {
    description = 'HTTPS ist aktiv, aber einige Sicherheits-Header fehlen noch.'
  } else if (sec.isHttps) {
    description = 'HTTPS ist vorhanden, aber mehrere Sicherheits-Header fehlen.'
  } else {
    description = 'Die Website ist nicht verschlüsselt (kein HTTPS). Das ist kritisch für Vertrauen und Ranking.'
  }

  return { score, description, findings: findings.slice(0, 4), available: true }
}

export function scoreStructuredData(html: HtmlAnalysisData): CategoryResult {
  const findings: string[] = []
  let score = 0

  if (html.jsonLdBlocks.length > 0) {
    score += 50

    const allJson = html.jsonLdBlocks.join(' ')
    const types = new Set<string>()

    const typeRe = /"@type"\s*:\s*"([^"]+)"/g
    let m: RegExpExecArray | null
    while ((m = typeRe.exec(allJson)) !== null) {
      types.add(m[1])
    }

    if (types.has('LocalBusiness') || types.has('Organization')) score += 20
    if (types.has('FAQPage')) score += 15
    if (types.has('BreadcrumbList')) score += 10
    if (types.has('WebPage') || types.has('WebSite')) score += 5

    const typeList = Array.from(types).join(', ')
    if (typeList) findings.push(`Gefundene Schema-Typen: ${typeList}`)
  } else {
    findings.push('Keine strukturierten Daten (JSON-LD) gefunden')
    findings.push('Strukturierte Daten helfen Google und KI-Systemen Ihre Seite zu verstehen')
  }

  if (html.ogTitle && html.ogDescription && html.ogImage) {
    score += 20
  } else if (html.ogTitle || html.ogDescription) {
    score += 10
    if (!html.ogImage) findings.push('Open-Graph-Bild (og:image) fehlt')
  } else {
    findings.push('Open-Graph-Tags fehlen vollständig')
  }

  score = Math.min(100, score)

  let description: string
  if (score >= 80) {
    description = 'Sehr gute strukturierte Daten – Ihre Seite ist für Google und KI-Systeme optimal aufbereitet.'
  } else if (score >= 50) {
    description = 'Grundlegende strukturierte Daten sind vorhanden, aber es gibt noch Verbesserungspotenzial.'
  } else if (score > 0) {
    description = 'Strukturierte Daten sind unvollständig. Erweiterungen würden die Sichtbarkeit deutlich verbessern.'
  } else {
    description = 'Keine strukturierten Daten vorhanden. Damit verschenken Sie Potenzial bei Google und KI-Suchen.'
  }

  return { score, description, findings: findings.slice(0, 4), available: true }
}

export function scoreAiFindability(html: HtmlAnalysisData, structuredScore: number): CategoryResult {
  const score = scoreAiFindabilityRaw(html, structuredScore)
  const findings: string[] = []

  if (!html.metaDescription) {
    findings.push('Keine Meta-Beschreibung – wichtig für KI-Antworten')
  } else if (html.metaDescription.length < 100) {
    findings.push('Meta-Beschreibung zu kurz für optimale KI-Sichtbarkeit')
  }

  if (!html.hasFaqSection) {
    findings.push('Keine FAQ-Sektion – hilft KI-Systemen Fragen direkt zu beantworten')
  }

  const hasQuestionHeadings = html.h2Texts.some(h =>
    /\b(wer|was|wie|wo|wann|warum|welche|welcher|welches|how|what|where|when|why|who|which)\b/i.test(h)
  )
  if (!hasQuestionHeadings) {
    findings.push('Keine fragenorientierten Überschriften (Wie/Was/Warum…)')
  }

  if (!(html.ogTitle && html.ogDescription && html.ogImage)) {
    findings.push('Open-Graph-Tags unvollständig')
  }

  let description: string
  if (score >= 80) {
    description = 'Ihre Website ist gut für KI-Suchsysteme wie ChatGPT und Perplexity aufgestellt.'
  } else if (score >= 50) {
    description = 'Moderate KI-Sichtbarkeit. Gezielte Inhaltsverbesserungen würden die KI-Auffindbarkeit steigern.'
  } else {
    description = 'Ihr Unternehmen ist für KI-Suchsysteme kaum auffindbar. Das wird zunehmend wichtiger.'
  }

  return { score, description, findings: findings.slice(0, 4), available: true }
}
