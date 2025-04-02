
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-windo-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">windo.ch</h3>
            <p className="text-gray-300">
              We create beautiful, functional websites that help your business stand out and succeed online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> UX/UI Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Bahnhofstrasse 42</li>
              <li>8001 Zürich, Switzerland</li>
              <li>hello@windo.ch</li>
              <li>+41 44 123 45 67</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} windo.ch. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
