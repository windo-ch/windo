import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Image, Users, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { getProjectUrlWithIndustry } from '../../lib/industryUtils';
import AnimatedGradientText from '../../components/ui/AnimatedGradientText';

const PhotographyStudios = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/photography-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-5" />
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <AnimatedGradientText>
                {t('photography.hero.title')}
              </AnimatedGradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {t('photography.hero.description')}
            </p>
            <Link
              to="/questionnaire"
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
            >
              <span>{t('photography.hero.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <Camera className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('photography.features.portfolio.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('photography.features.portfolio.description')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <Image className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('photography.features.services.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('photography.features.services.description')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <Users className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('photography.features.stories.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('photography.features.stories.description')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
              <MapPin className="w-6 h-6 text-windo-orange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('photography.features.studio.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('photography.features.studio.description')}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-windo-light/5 dark:bg-windo-light/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('photography.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('photography.cta.description')}
          </p>
          <Link
            to="/questionnaire"
            className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
          >
            <span>{t('photography.cta.button')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotographyStudios; 