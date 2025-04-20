import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, Clock, Users, ShoppingBag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { getProjectUrlWithIndustry } from '../../lib/industryUtils';

const BreweryGraphic = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
    <svg
      className="w-full h-full text-amber-400 dark:text-amber-600"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient Definitions */}
        <linearGradient id="foam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>

        {/* Filter for glow effect */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Foam Wave Pattern */}
        <pattern id="foam-wave" width="200" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M0 25 Q 50 0, 100 25 T 200 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />
        </pattern>
      </defs>

      {/* Main Foam Container */}
      <g transform="translate(0, 400)">
        {/* Base Foam Layer */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="200"
          fill="url(#foam-gradient)"
          filter="url(#glow)"
        >
          <animate
            attributeName="y"
            values="0;-10;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Animated Foam Waves */}
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 300}, 0)`}>
            <rect
              width="300"
              height="100"
              fill="url(#foam-wave)"
              opacity="0.5"
            >
              <animate
                attributeName="y"
                values="0;-20;0"
                dur={`${Math.random() * 1 + 1}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}

        {/* Overflowing Foam */}
        <g transform="translate(0, 0)">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M ${i * 200} 0 Q ${i * 200 + 100} -50, ${(i + 1) * 200} 0`}
              fill="currentColor"
              opacity="0.4"
              filter="url(#glow)"
            >
              <animate
                attributeName="d"
                values={`
                  M ${i * 200} 0 Q ${i * 200 + 100} -50, ${(i + 1) * 200} 0;
                  M ${i * 200} 0 Q ${i * 200 + 100} -80, ${(i + 1) * 200} 0;
                  M ${i * 200} 0 Q ${i * 200 + 100} -50, ${(i + 1) * 200} 0
                `}
                dur={`${Math.random() * 1 + 1}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>

        {/* Foam Bubbles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 100}
            r={Math.random() * 8 + 4}
            fill="currentColor"
            opacity="0.5"
            filter="url(#glow)"
          >
            <animate
              attributeName="cy"
              values={`${Math.random() * 100};${-30 + Math.random() * 30};${Math.random() * 100}`}
              dur={`${Math.random() * 2 + 1}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0.8;0.5"
              dur={`${Math.random() * 1 + 1}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  </div>
);

const CraftBreweries = () => {
  const { t } = useLanguage();
  const projectUrl = getProjectUrlWithIndustry('Craft Brewery');

  return (
    <>
      <Helmet>
        <title>Professional Websites for Craft Breweries | Windo</title>
        <meta name="description" content="Create an engaging online presence that showcases your unique brews and brewery experience to beer enthusiasts." />
        <meta name="keywords" content="craft brewery website, brewery online presence, beer showcase, taproom experience" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/brewery-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-5" />
          <div className="container mx-auto px-6 py-24 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-orange-gradient text-transparent bg-clip-text">
                  {t('craftBrewery.hero.title')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('craftBrewery.hero.description')}
              </p>
              <Link
                to={projectUrl}
                className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
              >
                <span>{t('craftBrewery.hero.cta')}</span>
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
                <Beer className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('craftBrewery.features.beers.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('craftBrewery.features.beers.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
                <Clock className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('craftBrewery.features.taproom.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('craftBrewery.features.taproom.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('craftBrewery.features.tours.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('craftBrewery.features.tours.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
                <ShoppingBag className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('craftBrewery.features.shop.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('craftBrewery.features.shop.description')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-windo-light/5 dark:bg-windo-light/10 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('craftBrewery.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('craftBrewery.cta.description')}
            </p>
            <Link
              to={projectUrl}
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
            >
              <span>{t('craftBrewery.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftBreweries; 