// Function to load Google Tag Manager
function loadGTM() {
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace with your GTM ID
}

// Function to improve page load performance
function improvePage() {
  // Preload critical resources
  const resources = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ];
  
  resources.forEach(resource => {
    const link = document.createElement('link');
    Object.keys(resource).forEach(key => {
      if (resource[key]) {
        link.setAttribute(key, resource[key]);
      }
    });
    document.head.appendChild(link);
  });
}

// Function to add structured data
function addStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "windo.ch",
    "url": "https://windo.ch/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://windo.ch/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
  
  // Add organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "windo.ch",
    "url": "https://windo.ch",
    "logo": "https://windo.ch/logo.png",
    "sameAs": [
      "https://www.facebook.com/windoch",
      "https://www.linkedin.com/company/windo-ch",
      "https://twitter.com/windo_ch",
      "https://www.instagram.com/windo.ch"
    ]
  };
  
  const orgScript = document.createElement('script');
  orgScript.type = 'application/ld+json';
  orgScript.text = JSON.stringify(organizationData);
  document.head.appendChild(orgScript);
}

// Function to report Web Vitals
function reportWebVitals() {
  if (window.webVitals && window.dataLayer) {
    const { getFID, getLCP, getCLS } = window.webVitals;
    
    if (typeof getFID === 'function') {
      getFID(metric => {
        window.dataLayer.push({
          event: 'web-vitals',
          eventCategory: 'Web Vitals',
          eventAction: 'FID',
          eventValue: Math.round(metric.value),
          eventLabel: metric.id,
        });
      });
    }
    
    if (typeof getLCP === 'function') {
      getLCP(metric => {
        window.dataLayer.push({
          event: 'web-vitals',
          eventCategory: 'Web Vitals',
          eventAction: 'LCP',
          eventValue: Math.round(metric.value),
          eventLabel: metric.id,
        });
      });
    }
    
    if (typeof getCLS === 'function') {
      getCLS(metric => {
        window.dataLayer.push({
          event: 'web-vitals',
          eventCategory: 'Web Vitals',
          eventAction: 'CLS',
          eventValue: Math.round(metric.value * 1000),
          eventLabel: metric.id,
        });
      });
    }
  }
}

// Run all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadGTM();
  improvePage();
  addStructuredData();
});

// Add an event listener to improve Core Web Vitals
window.addEventListener('load', function() {
  setTimeout(function() {
    const lcpElement = document.querySelector('.hero-image');
    if (lcpElement) {
      lcpElement.classList.add('loaded');
    }
    
    // Report Web Vitals
    reportWebVitals();
  }, 1000);
}); 