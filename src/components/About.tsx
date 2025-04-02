
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-windo-softOrange rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-windo-light rounded-full opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Our workspace" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-windo-softOrange rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-windo-amber rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <span>W</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-windo-light px-4 py-2 rounded-full text-windo-deeporange font-medium text-sm mb-2">About Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray">We build digital <span className="text-transparent bg-clip-text bg-orange-gradient">experiences</span></h2>
            <p className="text-gray-600">
              We are a Swiss web design studio focused on creating exceptional digital experiences that help businesses succeed online. With over 10 years of industry experience, we combine technical expertise with creative design to deliver websites that stand out.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-windo-light p-1 rounded-full mr-3">
                  <Check className="text-windo-orange" size={18} />
                </div>
                <span className="text-gray-700">Tailored solutions for each client's unique needs</span>
              </div>
              <div className="flex items-center">
                <div className="bg-windo-light p-1 rounded-full mr-3">
                  <Check className="text-windo-orange" size={18} />
                </div>
                <span className="text-gray-700">Focus on performance, accessibility and user experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-windo-light p-1 rounded-full mr-3">
                  <Check className="text-windo-orange" size={18} />
                </div>
                <span className="text-gray-700">Clear communication and transparent process</span>
              </div>
              <div className="flex items-center">
                <div className="bg-windo-light p-1 rounded-full mr-3">
                  <Check className="text-windo-orange" size={18} />
                </div>
                <span className="text-gray-700">Ongoing support and maintenance</span>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="bg-orange-gradient text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
