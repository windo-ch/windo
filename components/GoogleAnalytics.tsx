'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getConsent } from './CookieBanner';

const GA_ID = 'G-JYQ9R2VDL6';
const AW_ID = 'AW-18070202530';

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(getConsent() === 'accepted');
  }, []);

  if (!consent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          gtag('config', '${AW_ID}');
        `}
      </Script>
    </>
  );
}
