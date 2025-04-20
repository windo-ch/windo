import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when the route changes
    const trackPageView = () => {
      // This is where you would typically implement Google Analytics, Plausible, Fathom, etc.
      // For now we'll just log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Page viewed: ${location.pathname}${location.search}`);
      }
      
      // For actual implementation you would use code like:
      // if (typeof window.gtag === 'function') {
      //   window.gtag('config', 'YOUR-GA-MEASUREMENT-ID', {
      //     page_path: location.pathname + location.search
      //   });
      // }
    };

    trackPageView();
  }, [location]);

  // Return Vercel Analytics and SpeedInsights components
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
};

export default Analytics; 