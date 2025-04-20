import React from 'react';
import { FileText, Layout, Image, Building, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Packages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      title: 'Window Display',
      description: 'A simple, elegant one-page website perfect for showcasing your business.',
      price: 'CHF 960',
      originalPrice: 'CHF 1,200',
      discount: '20%',
      features: [
        'Single page design',
        'Contact form',
        'Mobile-friendly',
        'SEO optimized',
        '1 month of support',
      ],
      icon: FileText,
      link: '/workmanship/window-display',
    },
    {
      title: 'Wide View',
      description: 'A small website package with multiple pages to tell your story.',
      price: 'CHF 2,100',
      originalPrice: 'CHF 2,700',
      discount: '22%',
      features: [
        'Up to 5 pages',
        'Contact form',
        'Photo gallery',
        'Mobile-friendly',
        'Advanced SEO',
        '3 months of support',
      ],
      icon: Layout,
      link: '/workmanship/wide-view',
    },
    {
      title: 'Wrap-Around Gallery',
      description: 'A medium website package with advanced features for growing businesses.',
      price: 'CHF 3,750',
      originalPrice: 'CHF 5,000',
      discount: '25%',
      features: [
        'Up to 10 pages',
        'Premium design',
        'Photo/video gallery',
        'Blog setup',
        'Premium SEO',
        '6 months of support',
      ],
      icon: Image,
      link: '/workmanship/wrap-around-gallery',
    },
    {
      title: 'Custom Solution',
      description: 'A complete website package with all the features your business needs.',
      price: 'CHF 8,000+',
      features: [
        'Unlimited pages',
        'Custom design',
        'E-commerce setup',
        'Booking system',
        'Blog & news',
        'Custom SEO solutions',
        '12 months of support',
      ],
      icon: Building,
      link: 'https://henry.marketing',
      isExternal: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.pricing.title')} | Windo</title>
        <meta name="description" content={t('seo.pricing.description')} />
        <meta name="keywords" content="website packages, web design packages, business websites, digital solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-orange-gradient text-transparent bg-clip-text">
                {t('section.workmanship.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('section.workmanship.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-windo-orange/50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-windo-light/10 dark:bg-windo-light/20 rounded-full">
                      <pkg.icon className="w-8 h-8 text-windo-orange" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {pkg.description}
                  </p>

                  <div className="mt-auto">
                    <div className="mb-6">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          {pkg.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          exkl. MWSt.
                        </span>
                        {pkg.originalPrice && (
                          <span className="bg-windo-orange text-white text-sm font-medium px-2 py-0.5 rounded-full">
                            -{pkg.discount}
                          </span>
                        )}
                      </div>
                      {pkg.originalPrice && (
                        <span className="text-gray-500 dark:text-gray-400 text-sm line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                          <Check className="w-5 h-5 text-windo-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.isExternal ? (
                      <a
                        href={pkg.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-windo-orange hover:text-windo-deeporange transition-colors"
                      >
                        Contact for Custom Project
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/questionnaire"
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-6 py-3 rounded-lg hover:bg-windo-deeporange transition-colors"
            >
              <span>Choose Your Package</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages; 