
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative w-32 h-32 overflow-hidden">
            {/* Window frame */}
            <div className="absolute inset-0 bg-orange-gradient rounded-md shadow-lg animate-window-open"></div>
            
            {/* Window content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-window-reveal">
                <span className="text-white text-4xl font-bold">W</span>
                <div className="mt-1 text-white text-xs">creative</div>
              </div>
            </div>
            
            {/* Horizontal window bar */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/30 animate-window-reveal"></div>
            
            {/* Window dots */}
            <div className="absolute top-3 left-3 flex space-x-1.5 animate-window-reveal">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageTransition;
