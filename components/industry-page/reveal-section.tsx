'use client';

import { useSectionReveal } from './use-section-reveal';

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function RevealSection({ children, delay = 0 }: RevealSectionProps) {
  const ref = useSectionReveal(delay);
  return (
    <div ref={ref} className="fade-in-target">
      {children}
    </div>
  );
}
