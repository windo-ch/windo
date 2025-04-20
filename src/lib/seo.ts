interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

/**
 * Updates document title and meta tags for SEO
 */
export function updateSEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://windo.app/og-image.jpg',
  twitterCard = 'summary_large_image'
}: SEOProps): void {
  // Set document title
  document.title = `${title} | Windo`;
  
  // Set meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
  
  // Set canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }
  
  // Set Open Graph meta tags
  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  updateMetaTag('og:type', ogType);
  if (canonical) {
    updateMetaTag('og:url', canonical);
  }
  updateMetaTag('og:image', ogImage);
  
  // Set Twitter meta tags
  updateMetaTag('twitter:card', twitterCard);
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', ogImage);
}

/**
 * Helper function to update or create meta tags
 */
function updateMetaTag(property: string, content: string): void {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', content);
}

/**
 * Logs page view for analytics
 */
export function logPageView(pageTitle?: string, url?: string): void {
  const title = pageTitle || document.title;
  const path = url || window.location.pathname;
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Page view: ${title} (${path})`);
  }
  
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', 'page_view', {
      page_title: title,
      page_path: path,
    });
  }
} 