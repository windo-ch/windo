import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaCookieBite } from 'react-icons/fa';

interface CookieConsentProps {
  className?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className={`fixed bottom-4 right-4 md:max-w-md max-w-[calc(100%-2rem)] bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 overflow-hidden ${className}`}
        >
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <FaCookieBite className="text-windo-orange text-xl" />
                <h3 className="font-semibold text-lg leading-6">Cookie Settings</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Close cookie consent"
              >
                <IoClose size={20} />
              </button>
            </div>
            
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-windo-orange text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-windo-deeporange transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Reject Non-Essential
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 