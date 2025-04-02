
import React, { useEffect, useState } from 'react';

const PageTransition: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate page loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-orange-gradient animate-window-open rounded-md"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-window-reveal">
              <span className="text-white text-3xl font-bold">W</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageTransition;
