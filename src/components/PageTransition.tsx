
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PageTransition: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisitedBefore, setHasVisitedBefore] = useLocalStorage('has-visited', false);
  
  useEffect(() => {
    // Only show animation if user hasn't visited before
    if (!hasVisitedBefore) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasVisitedBefore(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      // Skip animation for returning visitors
      setIsLoading(false);
    }
  }, [hasVisitedBefore, setHasVisitedBefore]);

  if (!isLoading && hasVisitedBefore) return null;
  
  return (
    <>
      {!hasVisitedBefore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-windo-light to-windo-softOrange">
          <div className="relative w-full max-w-3xl h-[60vh] mx-4">
            {/* Window frame */}
            <div className="absolute inset-0 bg-windo-darkgray rounded-lg overflow-hidden shadow-2xl border-8 border-windo-gray">
              {/* Window glass that swings open */}
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm origin-left animate-[window-swing_2s_ease-in-out_forwards]">
                {/* Window handle */}
                <div className="absolute top-1/2 right-6 w-5 h-12 bg-windo-amber rounded-full"></div>
                
                {/* Window reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
              </div>
              
              {/* Window interior/preview */}
              <div className="opacity-0 animate-[fade-in_0.5s_ease-out_1.5s_forwards]">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-6">
                    <span className="text-windo-orange text-6xl font-bold">W</span>
                    <div className="mt-2 text-windo-deeporange text-lg">creative window to the web</div>
                  </div>
                </div>
              </div>
              
              {/* Window cross bars */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-windo-gray -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-windo-gray -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageTransition;
