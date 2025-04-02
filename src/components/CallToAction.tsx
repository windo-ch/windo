
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-windo-blue py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next project?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Let's work together to create a website that helps your business grow and succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-windo-blue px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300"
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
