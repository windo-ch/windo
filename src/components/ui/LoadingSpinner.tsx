import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Outer rounded square with gradient border that pulses and rotates */}
        <div className="absolute inset-0 rounded-2xl border-4 border-transparent"
          style={{
            background: 'linear-gradient(45deg, #FF5800, #FF8A00, #F97316, #FACC15, #F59E0B, #FF5800)',
            backgroundSize: '400% 400%',
            animation: 'squareRotate 4s linear infinite, gradientFlow 6s ease infinite',
            opacity: 0.9,
          }}>
        </div>
        
        {/* Inner square with inverted gradient */}
        <div className="absolute inset-4 rounded-xl bg-white">
        </div>
        
        {/* Horizontal line - same thickness as vertical line (6px) */}
        <div className="absolute top-1/2 left-4 right-4 h-[6px] -translate-y-1/2 z-10"
          style={{
            background: 'linear-gradient(90deg, #FF5800, #FF8A00, #FF5800)',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 2.5s ease infinite'
          }}>
        </div>
        
        {/* Vertical line - same thickness (6px) */}
        <div className="absolute left-1/2 top-4 bottom-4 w-[6px] -translate-x-1/2 z-10"
          style={{
            background: 'linear-gradient(180deg, #FF8A00, #FF5800, #FF8A00)',
            backgroundSize: '100% 200%',
            animation: 'gradientShiftVertical 2.5s ease infinite'
          }}>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute -inset-2 rounded-3xl opacity-30 blur-md"
          style={{
            background: 'radial-gradient(circle, #FF8A00, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite'
          }}>
        </div>

        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-30 mix-blend-overlay z-20">
          <div className="w-[200%] h-full"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
              transform: 'translateX(-100%)',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add global styles for the animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes gradientShiftVertical {
      0% { background-position: 50% 0%; }
      50% { background-position: 50% 100%; }
      100% { background-position: 50% 0%; }
    }
    
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes squareRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `;
  document.head.appendChild(style);
}

export default LoadingSpinner; 