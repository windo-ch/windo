'use client';

import { useState, useEffect } from 'react';
import { nextSlotMonth } from '@/lib/availability';

export function AvailabilityBadge({ className }: { className?: string }) {
  const [label, setLabel] = useState('');
  useEffect(() => {
    setLabel(nextSlotMonth());
  }, []);
  if (!label) return null;
  return (
    <span className={className}>
      Nächster freier Projektstart: {label}
    </span>
  );
}
