import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  website: string;
  image?: string;
  highlights: string[];
}

const CaseStudies = () => {
  const { t } = useLanguage();
  
  const caseStudies: CaseStudy[] = [
    {
      title: t('case_studies.topcut.title'),
      description: t('case_studies.topcut.description'),
      industry: t('case_studies.topcut.industry'),
      website: "topcutbarber.ch",
      highlights: [
        t('case_studies.topcut.highlight1'),
        t('case_studies.topcut.highlight2'),
        t('case_studies.topcut.highlight3')
      ]
    },
    {
      title: t('case_studies.neumann.title'),
      description: t('case_studies.neumann.description'),
      industry: t('case_studies.neumann.industry'),
      website: "zahnarzt-neumann.ch",
      highlights: [
        t('case_studies.neumann.highlight1'),
        t('case_studies.neumann.highlight2'),
        t('case_studies.neumann.highlight3')
      ]
    },
    {
      title: t('case_studies.storeofvalue.title'),
      description: t('case_studies.storeofvalue.description'),
      industry: t('case_studies.storeofvalue.industry'),
      website: "storeofvalue.ch",
      highlights: [
        t('case_studies.storeofvalue.highlight1'),
        t('case_studies.storeofvalue.highlight2'),
        t('case_studies.storeofvalue.highlight3')
      ]
    }
  ];

  return (
    <section id="portfolio" className="bg-windo-gray dark:bg-gray-950 section-padding relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-white dark:bg-orange-950/20 opacity-70 -z-10"></div>
      <div className="absolute -bottom-20 left-0 w-64 h-64 rounded-full bg-windo-softOrange dark:bg-orange-950/20 opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-windo-deeporange dark:text-orange-400 font-medium text-sm mb-2 animate-fade-in">
            {t('homepage.case_studies.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray dark:text-white mb-4 animate-fade-in" style={{animationDelay: "0.1s"}} dangerouslySetInnerHTML={{ __html: t('homepage.case_studies.title') }} />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            {t('homepage.case_studies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover-shadow-effect group animate-fade-in"
              style={{animationDelay: `${0.1 * (index + 3)}s`}}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400">
                    {study.industry}
                  </span>
                  <a
                    href={`https://${study.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-windo-orange hover:text-windo-deeporange transition-colors opacity-0 group-hover:opacity-100"
                    aria-label={`Visit ${study.website}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold text-windo-darkgray dark:text-white mb-3 group-hover:text-windo-orange transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.description}
                </p>
                
                <ul className="space-y-2 mb-4 list-none">
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-windo-orange mr-2 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`https://${study.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-windo-orange hover:text-windo-deeporange text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  {t('homepage.case_studies.visit')} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{animationDelay: "0.5s"}}>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-orange-gradient hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
          >
            {t('homepage.case_studies.cta')} <ArrowRight size={18} className="ml-2" />
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            {t('homepage.case_studies.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

