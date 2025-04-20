import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, BarChart, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { getProjectUrlWithIndustry } from '../../lib/industryUtils';

const AccountingGraphic = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
    <svg
      className="w-full h-full text-gray-400 dark:text-gray-600"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Grid Pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        
        {/* Gradient Definitions */}
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
        
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Filter for glow effect */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Elements */}
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#gradient1)" />

      {/* Animated Elements */}
      <g className="animate-pulse">
        {/* Floating Numbers */}
        {Array.from({ length: 8 }).map((_, i) => (
          <text
            key={i}
            x={Math.random() * 1200}
            y={Math.random() * 800}
            fontSize="24"
            fill="currentColor"
            opacity="0.1"
            filter="url(#glow)"
          >
            <animate
              attributeName="y"
              values={`${Math.random() * 800};${Math.random() * 800};${Math.random() * 800}`}
              dur={`${Math.random() * 10 + 10}s`}
              repeatCount="indefinite"
            />
            {Math.floor(Math.random() * 1000)}
          </text>
        ))}

        {/* Dynamic Bar Chart */}
        <g transform="translate(200, 400)">
          {Array.from({ length: 5 }).map((_, i) => (
            <rect
              key={i}
              x={i * 60}
              y={-Math.random() * 200}
              width="40"
              height={Math.random() * 200}
              fill="currentColor"
              opacity="0.2"
              rx="4"
            >
              <animate
                attributeName="height"
                values={`${Math.random() * 200};${Math.random() * 200};${Math.random() * 200}`}
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </g>

        {/* Animated Line Graph */}
        <g transform="translate(400, 300)">
          <path
            d="M 0 0 L 50 -50 L 100 -30 L 150 -80 L 200 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.2"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 0 0 L 50 -50 L 100 -30 L 150 -80 L 200 0;
                      M 0 20 L 50 -30 L 100 -10 L 150 -60 L 200 20;
                      M 0 0 L 50 -50 L 100 -30 L 150 -80 L 200 0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.3">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="0" r="4" fill="currentColor" opacity="0.3">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>

        {/* Calculator with Animated Buttons */}
        <g transform="translate(800, 300)">
          <rect x="0" y="0" width="200" height="300" rx="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          {Array.from({ length: 4 }).map((_, i) => (
            <circle
              key={i}
              cx={50 + (i % 2) * 100}
              cy={50 + Math.floor(i / 2) * 100}
              r="20"
              fill="currentColor"
              opacity="0.2"
              filter="url(#glow)"
            >
              <animate
                attributeName="r"
                values="20;25;20"
                dur={`${Math.random() * 2 + 1}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>
          ))}
        </g>

        {/* Animated Document with Scanning Lines */}
        <g transform="translate(1000, 400)">
          <rect x="0" y="0" width="150" height="200" rx="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1="20"
              y1={40 + i * 30}
              x2="130"
              y2={40 + i * 30}
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.2"
            >
              <animate
                attributeName="x2"
                values="130;20;130"
                dur={`${Math.random() * 2 + 2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              />
            </line>
          ))}
        </g>

        {/* Floating Currency Symbols */}
        {['$', '€', '£', '¥'].map((symbol, i) => (
          <text
            key={i}
            x={Math.random() * 1200}
            y={Math.random() * 800}
            fontSize="32"
            fill="currentColor"
            opacity="0.1"
            filter="url(#glow)"
          >
            <animate
              attributeName="y"
              values={`${Math.random() * 800};${Math.random() * 800};${Math.random() * 800}`}
              dur={`${Math.random() * 15 + 10}s`}
              repeatCount="indefinite"
            />
            {symbol}
          </text>
        ))}
      </g>

      {/* Overlay Gradient */}
      <rect width="100%" height="100%" fill="url(#gradient2)" />
    </svg>
  </div>
);

const AccountingFirms = () => {
  const { t } = useLanguage();
  const projectUrl = getProjectUrlWithIndustry('Accounting Firm');

  return (
    <>
      <Helmet>
        <title>Professional Website for Accounting Firms | Windo</title>
        <meta name="description" content="Elevate your accounting firm's digital presence with a professional website. Showcase your expertise in tax services, financial reporting, and business advisory." />
        <meta name="keywords" content="accounting firm website, tax services, financial reporting, business advisory, client portal, professional accounting" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <AccountingGraphic />
          <div className="container mx-auto px-6 py-24 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-orange-gradient text-transparent bg-clip-text">
                  {t('accounting.hero.title')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('accounting.hero.description')}
              </p>
              <Link
                to={projectUrl}
                className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
              >
                <span>{t('accounting.hero.cta')}</span>
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
                <Calculator className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('accounting.features.tax.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('accounting.features.tax.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
                <FileText className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('accounting.features.reporting.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('accounting.features.reporting.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
                <BarChart className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('accounting.features.advisory.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('accounting.features.advisory.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-3 bg-windo-light/10 dark:bg-windo-light/20 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-windo-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('accounting.features.portal.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('accounting.features.portal.description')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-windo-light/5 dark:bg-windo-light/10 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('accounting.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('accounting.cta.description')}
            </p>
            <Link
              to={projectUrl}
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-8 py-4 rounded-lg hover:bg-windo-deeporange transition-colors text-lg font-medium"
            >
              <span>{t('accounting.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountingFirms; 