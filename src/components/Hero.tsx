import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Main Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-orange-gradient text-transparent bg-clip-text">{t('hero.title')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-windo-orange border border-windo-orange px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span>{t('hero.discover_services')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/questionnaire"
              className="inline-flex items-center space-x-2 bg-windo-orange text-white px-6 py-3 rounded-lg hover:bg-windo-deeporange transition-colors"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Business Categories Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { name: t('business.accounting'), path: '/industries/accounting-firms' },
              { name: t('business.architecture'), path: '/industries/architecture-firms' },
              { name: t('business.art'), path: '/industries/art-galleries' },
              { name: t('business.boutiques'), path: '/industries/boutiques' },
              { name: t('business.cafes'), path: '/industries/cafes' },
              { name: t('business.car'), path: '/industries/car-dealerships' },
              { name: t('business.consultants'), path: '/industries/consultants' },
              { name: t('business.coworking'), path: '/industries/coworking-spaces' },
              { name: t('business.brewery'), path: '/industries/craft-breweries' },
              { name: t('business.dental'), path: '/industries/dental-clinics' },
              { name: t('business.event'), path: '/industries/event-planners' },
              { name: t('business.fashion'), path: '/industries/fashion-brands' },
              { name: t('business.fitness'), path: '/industries/fitness-studios' },
              { name: t('business.hair'), path: '/industries/hair-salon' },
              { name: t('business.hotels'), path: '/industries/hotels' },
              { name: t('business.interior'), path: '/industries/interior-designers' },
              { name: t('business.jewelry'), path: '/industries/jewelry-stores' },
              { name: t('business.law'), path: '/industries/law-firms' },
              { name: t('business.marketing'), path: '/industries/marketing-agencies' },
              { name: t('business.medical'), path: '/industries/medical-practices' },
              { name: t('business.music'), path: '/industries/music-schools' },
              { name: t('business.pet'), path: '/industries/pet-services' },
              { name: t('business.photography'), path: '/industries/photography-studios' },
              { name: t('business.realestate'), path: '/industries/real-estate' },
              { name: t('business.restaurants'), path: '/industries/restaurants' },
              { name: t('business.retail'), path: '/industries/retail-stores' },
              { name: t('business.spas'), path: '/industries/spas' },
              { name: t('business.tech'), path: '/industries/tech-startups' },
              { name: t('business.travel'), path: '/industries/travel-agencies' },
              { name: t('business.wedding'), path: '/industries/wedding-planners' },
              { name: t('business.yoga'), path: '/industries/yoga-studios' },
              { name: t('business.your'), path: '/questionnaire', highlight: true }
            ].map((business) => (
              <Link
                key={business.name}
                to={business.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  business.highlight
                    ? 'bg-windo-orange text-white hover:bg-windo-deeporange'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-windo-orange hover:text-windo-orange'
                }`}
              >
                {business.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
