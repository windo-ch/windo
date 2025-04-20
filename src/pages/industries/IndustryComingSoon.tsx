import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

const IndustryComingSoon: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  // Extract industry name from URL
  const path = location.pathname.split('/').pop();
  let industryName = path ? path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  if (path === 'pet-services') industryName = 'Pet Services';
  if (path === 'travel-agencies') industryName = 'Travel Agencies';
  
  return (
    <>
      <SEO
        title={`${industryName} - Coming Soon`}
        description={`Our ${industryName} industry page is coming soon. Check back later for specialized website solutions for ${industryName}.`}
        canonicalUrl={location.pathname}
      />
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-windo-orange">{industryName}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t('comingSoon.message', { industry: industryName })}
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-windo-orange to-windo-yellow flex items-center justify-center mb-2">
              <span className="text-5xl text-white">
                {industryName.charAt(0)}
              </span>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              {t('comingSoon.checkBack')}
            </p>
            <Link to="/" className="inline-flex items-center text-windo-orange hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('comingSoon.backHome')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryComingSoon; 