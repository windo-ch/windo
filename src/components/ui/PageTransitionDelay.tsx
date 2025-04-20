import React from 'react';

interface PageTransitionDelayProps {
  children: React.ReactNode;
  delay?: number; // delay in milliseconds (unused now)
}

const PageTransitionDelay: React.FC<PageTransitionDelayProps> = ({ 
  children
}) => {
  // Skip any delay and immediately show content
  return (
    <div className="min-h-screen">
      <div className="animate-fadeIn">
        {children}
      </div>
    </div>
  );
};

export default PageTransitionDelay; 