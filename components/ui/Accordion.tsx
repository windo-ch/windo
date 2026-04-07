'use client';

import { useState } from 'react';

type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  items: AccordionItem[];
};

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-glow-soft rounded-2xl overflow-hidden bg-bg-card card-warm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-bg-subtle transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-bg-dark pr-4">{item.question}</span>
            <span
              className="flex-shrink-0 text-glow-deep text-xl font-light transition-transform duration-200"
              style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
