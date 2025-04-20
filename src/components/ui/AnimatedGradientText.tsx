import React from 'react';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <span className={`bg-orange-gradient text-transparent bg-clip-text animated-gradient ${className}`}>
      {children}
    </span>
  );
};

export default AnimatedGradientText; 