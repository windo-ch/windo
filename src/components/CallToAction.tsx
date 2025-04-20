
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-orange-gradient py-16 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-yellow-300 opacity-20 mix-blend-multiply blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-red-300 opacity-20 mix-blend-multiply blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next project?</h2>
          <p className="text-amber-50 mb-8 text-lg">
            Let's work together to create a website that helps your business grow and succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-windo-orange px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              Get in touch <ArrowRight size={20} className="ml-1" />
            </a>
            <a 
              href="#services" 
              className="bg-transparent text-white border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              Our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
