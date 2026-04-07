interface TestimonialProps {
  testimonial?: {
    quote: string;
    name: string;
    business: string;
  };
}

export function Testimonial({ testimonial }: TestimonialProps) {
  if (!testimonial) return null;

  return (
    <section className="py-16 md:py-20">
      <blockquote className="rounded-2xl border border-glow-soft bg-bg-card card-warm p-6 md:p-8">
        <p className="text-gray-700 text-base leading-relaxed italic before:content-['\u201e'] after:content-['\u201c']">
          {testimonial.quote}
        </p>
        <footer className="mt-4">
          <p className="text-sm font-semibold text-bg-dark">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.business}</p>
        </footer>
      </blockquote>
    </section>
  );
}
