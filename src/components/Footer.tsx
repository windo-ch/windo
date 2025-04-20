import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-orange-gradient text-transparent bg-clip-text animated-gradient">
                windo
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Crafting digital experiences with Swiss precision and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/questionnaire" 
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Launch Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@windo.ch" 
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  hello@windo.ch
                </a>
              </li>
              <li>
                <a
                  href="tel:+41791752020"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+41 79 175 20 20</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} windo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-windo-orange dark:hover:text-windo-orange transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
