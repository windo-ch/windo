import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Check, ArrowRight, Shield, RefreshCw, Settings } from 'lucide-react';
import SEO from '../../components/SEO';
import { useLanguage } from '../../contexts/LanguageContext';

const HostingWartung = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t('service.hosting-wartung.title') + ' - Windo'}
        description={t('service.hosting-wartung.description')}
        canonicalUrl="/services/hosting-wartung"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-16 md:py-24">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-windo-light dark:bg-orange-950/30 px-4 py-2 rounded-full text-windo-deeporange dark:text-orange-400 font-medium text-sm mb-4">
              {t('service.badge')}
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 w-16 h-16 flex items-center justify-center rounded-lg">
                <Server className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-windo-darkgray dark:text-white mb-6">
              {t('service.hosting-wartung.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('service.hosting-wartung.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-gradient hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
            >
              {t('service.cta.button')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-lg">
                  <Server className="w-6 h-6 text-windo-orange dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white">
                  {t('service.hosting-wartung.feature1.title')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('service.hosting-wartung.feature1.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-windo-orange dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white">
                  {t('service.hosting-wartung.feature2.title')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('service.hosting-wartung.feature2.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-windo-orange dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white">
                  {t('service.hosting-wartung.feature3.title')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('service.hosting-wartung.feature3.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-windo-light dark:bg-orange-950/30 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-windo-orange dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white">
                  {t('service.hosting-wartung.feature4.title')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('service.hosting-wartung.feature4.description')}
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-windo-light dark:bg-gray-800 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-windo-darkgray dark:text-white mb-8 text-center">
              {t('service.hosting-wartung.included.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-windo-orange dark:text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{t(`service.hosting-wartung.included.feature${index}`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-windo-darkgray dark:text-white mb-4">
              {t('service.hosting-wartung.cta.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('service.hosting-wartung.cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-gradient hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg text-lg"
            >
              {t('service.cta.button')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostingWartung;
