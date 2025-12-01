import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if popup has been shown before (stored in localStorage)
    const hasShownBefore = localStorage.getItem('exit-popup-shown') === 'true';
    if (hasShownBefore) return;

    // Exit intent detection - when mouse leaves the viewport at the top
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exit-popup-shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover-shadow-effect border border-gray-200 dark:border-gray-700 p-6 max-w-md mx-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-4 pr-8">
          <div className="bg-windo-light dark:bg-orange-950/30 p-2 rounded-full">
            <MessageCircle className="w-5 h-5 text-windo-orange dark:text-orange-400" />
          </div>
          <div>
            <p className="font-semibold text-sm text-windo-darkgray dark:text-white">
              {t('homepage.exit_popup.title')}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {t('homepage.exit_popup.subtitle')}
            </p>
          </div>
        </div>
        <Link
          to="/contact"
          onClick={() => setIsVisible(false)}
          className="block w-full bg-orange-gradient hover:bg-orange-500 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-all hover:shadow-md text-sm"
        >
          {t('homepage.services.cta')}
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          {t('homepage.exit_popup.footer')}
        </p>
      </div>
    </div>
  );
};

export default FloatingCTA;

