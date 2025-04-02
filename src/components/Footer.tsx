
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-windo-amber to-windo-deeporange text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-yellow-300 opacity-20 mix-blend-multiply blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-red-300 opacity-20 mix-blend-multiply blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <span className="text-windo-orange font-bold">W</span>
              </span>
              windo<span className="text-gray-200">.ch</span>
            </h3>
            <p className="text-white/80">
              We create beautiful, functional websites that help your business stand out and succeed online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> UX/UI Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors inline-flex items-center hover:translate-x-1 duration-300">
                  <ChevronRight size={16} className="mr-1" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <span className="bg-white/10 p-1.5 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span>Bahnhofstrasse 42<br />8001 Zürich, Switzerland</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white/10 p-1.5 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span>+41 44 123 45 67</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white/10 p-1.5 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </span>
                <span>hello@windo.ch</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">© {currentYear} windo.ch. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-windo-orange to-red-400"></div>
    </footer>
  );
};

export default Footer;
