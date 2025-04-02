
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, company }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow hover-shadow-effect">
      <Quote className="text-windo-blue mb-4 opacity-50" size={32} />
      <p className="text-gray-600 italic mb-6">{content}</p>
      <div>
        <h4 className="font-semibold text-windo-darkgray">{author}</h4>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Working with windo.ch was a game-changer for our business. They understood our needs perfectly and delivered a website that truly represents our brand.",
      author: "Sarah Johnson",
      company: "Alpine Ventures"
    },
    {
      content: "The team at windo.ch exceeded our expectations. Their attention to detail and creative approach helped us launch a website that stands out from our competitors.",
      author: "Michael Berg",
      company: "Tech Solutions GmbH"
    },
    {
      content: "Professional, responsive, and incredibly talented. windo.ch transformed our outdated website into a modern, user-friendly platform that our customers love.",
      author: "Lisa Meyer",
      company: "Swiss Health Co."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
