import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import LoadingSpinner from './ui/LoadingSpinner';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisitedBefore, setHasVisitedBefore] = useLocalStorage('has-visited', false);
  
  useEffect(() => {
    // Only show longer animation if user hasn't visited before
    if (!hasVisitedBefore) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasVisitedBefore(true);
      }, 4000); // Increased from 3500ms to 4000ms (added 500ms)
      
      return () => clearTimeout(timer);
    } else {
      // Skip long animation for returning visitors
      setIsLoading(false);
    }
  }, [hasVisitedBefore, setHasVisitedBefore]);

  if (!isLoading && hasVisitedBefore) return <>{children}</>;
  
  return (
    <>
      {!hasVisitedBefore && isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
             style={{
               background: 'radial-gradient(circle at center, white 0%, #FEF7CD 100%)',
             }}>
          {/* Background animated particles */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-windo-orange"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* The main logo spinner */}
          <div className="relative transform scale-[2.5] z-10">
            <LoadingSpinner />
          </div>

          {/* Text that fades in */}
          <div className="absolute bottom-16 opacity-0 animate-[fade-in_0.8s_ease-out_1.5s_forwards] text-center z-10">
            <div className="text-windo-orange text-4xl font-bold tracking-wide">Windo</div>
            <div className="text-windo-deeporange text-lg mt-2 font-light tracking-wider">Your creative window to the web</div>
          </div>
          
          {/* Animated bottom bar - progress indicator - extended duration to match new timing */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-windo-orange to-windo-yellow"
               style={{
                 width: '0%',
                 animation: 'progressBar 3.7s ease-in-out forwards'
               }}>
          </div>
        </div>
      ) : (
        <div className="animate-fadeIn">
          {children}
        </div>
      )}

      {/* Add keyframes for the progress bar */}
      {typeof document !== 'undefined' && !document.getElementById('page-transition-styles') && (
        (() => {
          const style = document.createElement('style');
          style.id = 'page-transition-styles';
          style.innerHTML = `
            @keyframes progressBar {
              0% { width: 0%; }
              10% { width: 15%; }
              30% { width: 40%; }
              50% { width: 60%; }
              70% { width: 75%; }
              90% { width: 90%; }
              100% { width: 100%; }
            }
          `;
          document.head.appendChild(style);
          return null;
        })()
      )}
    </>
  );
};

export default PageTransition; 