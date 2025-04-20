import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold bg-orange-gradient text-transparent bg-clip-text animated-gradient">
              windo
            </span>
          </Link>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`px-3 py-1.5 rounded-lg text-base font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-windo-orange text-white'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 text-gray-600" />
              ) : (
                <Sun className="w-6 h-6 text-gray-300" />
              )}
            </button>

            {/* Launch Project Button */}
            <Link
              to="/questionnaire"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-windo-orange text-white hover:bg-windo-orange/90 transition-colors text-base font-medium"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Project
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-6 pb-6">
            {/* Language Selector */}
            <div className="flex items-center space-x-3 pt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-windo-orange text-white'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Launch Project Button */}
            <div className="pt-4">
              <Link
                to="/questionnaire"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-windo-orange text-white hover:bg-windo-orange/90 transition-colors text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Rocket className="w-6 h-6 mr-2" />
                Launch Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
