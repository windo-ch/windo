import { HTMLAttributes } from 'react';

type BgVariant = 'bg' | 'bg-subtle' | 'bg-dark';

type Props = HTMLAttributes<HTMLElement> & {
  bg?: BgVariant;
  py?: string;
};

const bgClasses: Record<BgVariant, string> = {
  bg: 'bg-bg',
  'bg-subtle': 'bg-bg-subtle',
  'bg-dark': 'bg-bg-dark',
};

export default function SectionWrapper({ bg = 'bg', py = 'py-20 sm:py-28', className = '', children, ...props }: Props) {
  return (
    <section className={`${bgClasses[bg]} ${py} ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
