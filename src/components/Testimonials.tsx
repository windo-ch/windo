
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, company, index }) => {
  const gradientClasses = [
    "from-orange-50 to-amber-50 border-l-windo-orange",
    "from-yellow-50 to-orange-50 border-l-amber-500",
    "from-amber-50 to-yellow-50 border-l-yellow-500"
  ];
  
  const currentGradient = gradientClasses[index % gradientClasses.length];
  
  return (
    <div className={`bg-gradient-to-br ${currentGradient} p-8 rounded-lg shadow-md hover-shadow-effect border-l-4`}>
      <Quote className="text-windo-orange mb-4 opacity-70" size={32} />
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
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-windo-light opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-windo-softOrange opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-windo-light px-4 py-2 rounded-full text-windo-deeporange font-medium text-sm mb-2 animate-fade-in">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            What Our <span className="text-transparent bg-clip-text bg-orange-gradient">Clients</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
              <TestimonialCard
                content={testimonial.content}
                author={testimonial.author}
                company={testimonial.company}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
