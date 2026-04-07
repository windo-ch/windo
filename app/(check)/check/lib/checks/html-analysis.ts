export interface HtmlAnalysisData {
  finalUrl: string
  isHttps: boolean
  statusCode: number
  responseHeaders: Record<string, string>
  redirectCount: number

  title: string | null
  metaDescription: string | null
  h1Count: number
  h1Text: string | null
  h2Texts: string[]
  imgCount: number
  imgWithAlt: number
  langAttr: string | null
  canonicalUrl: string | null
  hasRobotsTxt: boolean
  hasSitemapXml: boolean

  ogTitle: string | null
  ogDescription: string | null
  ogImage: string | null

  jsonLdBlocks: string[]

  wordCount: number
  hasFaqSection: boolean
}

function extractFirst(html: string, pattern: RegExp): string | null {
  const m = pattern.exec(html)
  return m ? m[1].trim() : null
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function extractTextContent(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export async function analyzeHtml(url: string): Promise<HtmlAnalysisData> {
  const origin = new URL(url).origin
  let redirectCount = 0
  let finalUrl = url

  const res = await fetch(url, {
    signal: AbortSignal.timeout(10000),
    headers: { 'User-Agent': 'windo-website-check/1.0 (+https://windo.ch)' },
    redirect: 'follow',
  })

  if (res.redirected && res.url !== url) {
    redirectCount = 1
    finalUrl = res.url
  }

  const statusCode = res.status
  const responseHeaders: Record<string, string> = {}
  res.headers.forEach((value, key) => {
    responseHeaders[key.toLowerCase()] = value
  })

  const isHttps = finalUrl.startsWith('https://')
  const html = await res.text()

  const title = extractFirst(html, /<title[^>]*>([^<]+)<\/title>/i)

  const metaDescription = extractFirst(
    html,
    /<meta\s+name=["']description["'][^>]*content=["']([^"']+)["']/i,
  ) ?? extractFirst(
    html,
    /<meta\s+content=["']([^"']+)["'][^>]*name=["']description["']/i,
  )

  const h1Matches = Array.from(html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi))
  const h1Count = h1Matches.length
  const h1Text = h1Count > 0 ? stripHtml(h1Matches[0][1]) : null

  const h2Matches = Array.from(html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi))
  const h2Texts = h2Matches.map(m => stripHtml(m[1])).slice(0, 10)

  const allImgs = html.match(/<img[^>]+>/gi) ?? []
  const imgCount = allImgs.length
  const imgsWithoutAlt = allImgs.filter(img => !/alt=["'][^"']+["']/i.test(img)).length
  const imgWithAlt = imgCount - imgsWithoutAlt

  const langAttr = extractFirst(html, /<html[^>]*\slang=["']([^"']+)["']/i)

  const canonicalUrl = extractFirst(
    html,
    /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
  ) ?? extractFirst(
    html,
    /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
  )

  const jsonLdBlocks: string[] = []
  const jsonLdRe = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let jMatch: RegExpExecArray | null
  while ((jMatch = jsonLdRe.exec(html)) !== null) {
    jsonLdBlocks.push(jMatch[1].trim())
  }

  let ogTitle: string | null = null
  let ogDescription: string | null = null
  let ogImage: string | null = null
  const ogRe = /<meta[^>]+property=["']og:([^"']+)["'][^>]*content=["']([^"']+)["']/gi
  let ogMatch: RegExpExecArray | null
  while ((ogMatch = ogRe.exec(html)) !== null) {
    const prop = ogMatch[1].toLowerCase()
    if (prop === 'title') ogTitle = ogMatch[2]
    else if (prop === 'description') ogDescription = ogMatch[2]
    else if (prop === 'image') ogImage = ogMatch[2]
  }

  const textContent = extractTextContent(html)
  const wordCount = textContent.split(/\s+/).filter(Boolean).length

  const allHeadings = Array.from(html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi))
    .map(m => stripHtml(m[1]))
    .join(' ')
  const hasFaqHeading = /(faq|häufige fragen|frequently asked)/i.test(allHeadings)
  const hasFaqSchema = jsonLdBlocks.some(b => b.includes('"FAQPage"'))
  const hasFaqSection = hasFaqHeading || hasFaqSchema

  let hasRobotsTxt = false
  let hasSitemapXml = false
  try {
    const robotsRes = await fetch(`${origin}/robots.txt`, {
      signal: AbortSignal.timeout(3000),
      headers: { 'User-Agent': 'windo-website-check/1.0' },
    })
    hasRobotsTxt = robotsRes.ok
    if (hasRobotsTxt) {
      const robotsText = await robotsRes.text()
      hasSitemapXml = /sitemap/i.test(robotsText)
    }
  } catch {
    // ignore
  }

  if (!hasSitemapXml) {
    try {
      const sitemapRes = await fetch(`${origin}/sitemap.xml`, {
        signal: AbortSignal.timeout(3000),
        headers: { 'User-Agent': 'windo-website-check/1.0' },
      })
      hasSitemapXml = sitemapRes.ok
    } catch {
      // ignore
    }
  }

  return {
    finalUrl,
    isHttps,
    statusCode,
    responseHeaders,
    redirectCount,
    title,
    metaDescription,
    h1Count,
    h1Text,
    h2Texts,
    imgCount,
    imgWithAlt,
    langAttr,
    canonicalUrl,
    hasRobotsTxt,
    hasSitemapXml,
    ogTitle,
    ogDescription,
    ogImage,
    jsonLdBlocks,
    wordCount,
    hasFaqSection,
  }
}
