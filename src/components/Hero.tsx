
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-windo-lightblue min-h-screen flex items-center">
      <div className="container mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-windo-darkgray leading-tight animate-fade-in">
              Web design <span className="text-windo-blue">reimagined</span> for your business
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We create beautiful, functional websites that help your business stand out and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a 
                href="#contact" 
                className="bg-windo-blue text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300"
              >
                Start a project <ArrowRight size={20} className="ml-1" />
              </a>
              <a 
                href="#portfolio" 
                className="bg-white text-windo-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
              >
                View our work
              </a>
            </div>
          </div>
          <div className="relative hidden md:block animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-2 hover-shadow-effect">
              <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Website Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-windo-blue rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-xl">
                <span>W</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-windo-lightblue rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
