import type { HtmlAnalysisData } from './html-analysis'

const W_QUESTIONS = /\b(wer|was|wie|wo|wann|warum|welche|welcher|welches|how|what|where|when|why|who|which)\b/i

export function scoreAiFindabilityRaw(html: HtmlAnalysisData, structuredDataScore: number): number {
  let score = 0

  score += structuredDataScore * 0.40

  if (html.metaDescription) {
    const len = html.metaDescription.length
    if (len >= 120 && len <= 160) score += 15
    else if (len > 50) score += 8
    else score += 3
  }

  const headingText = html.h2Texts.join(' ')
  if (W_QUESTIONS.test(headingText)) score += 15

  if (html.hasFaqSection) score += 15

  if (html.ogTitle && html.ogDescription && html.ogImage) score += 10

  if (html.wordCount > 500) score += 5

  return Math.min(100, Math.round(score))
}
