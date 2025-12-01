
import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
  website?: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, company, website, index }) => {
  const gradientClasses = [
    "from-orange-50 to-amber-50 border-l-windo-orange",
    "from-yellow-50 to-orange-50 border-l-amber-500",
    "from-amber-50 to-yellow-50 border-l-yellow-500"
  ];
  
  const currentGradient = gradientClasses[index % gradientClasses.length];
  
  return (
      <div className={`bg-gradient-to-br ${currentGradient} p-8 rounded-lg shadow-md hover-shadow-effect border-l-4`}>
        <Quote className="text-windo-orange mb-4 opacity-70" size={32} />
        <p className="text-gray-600 dark:text-gray-300 italic mb-6">{content}</p>
        <div>
          <h4 className="font-semibold text-windo-darkgray dark:text-white">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
          {website && (
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-windo-orange hover:underline mt-1 inline-block"
            >
              {website} →
            </a>
          )}
        </div>
      </div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      content: t('testimonials.neumann.content'),
      author: t('testimonials.neumann.author'),
      company: t('testimonials.neumann.company'),
      website: "zahnarzt-neumann.ch"
    },
    {
      content: t('testimonials.topcut.content'),
      author: t('testimonials.topcut.author'),
      company: t('testimonials.topcut.company'),
      website: "topcutbarber.ch"
    }
  ];

  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-windo-light opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-windo-softOrange opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-windo-light px-4 py-2 rounded-full text-windo-deeporange font-medium text-sm mb-2 animate-fade-in">{t('homepage.testimonials.badge')}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4 animate-fade-in" style={{animationDelay: "0.1s"}} dangerouslySetInnerHTML={{ __html: t('homepage.testimonials.title') }} />
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            {t('homepage.testimonials.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const companyName = typeof testimonial.company === 'string' ? testimonial.company : testimonial.company;
            const website = testimonial.website || '';
            return (
            <div key={index} className="animate-fade-in flex-1 min-w-[300px] max-w-md" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
              <TestimonialCard
                content={testimonial.content}
                author={testimonial.author}
                company={testimonial.company}
                website={website}
                index={index}
              />
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
