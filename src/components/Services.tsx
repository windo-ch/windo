import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, PenTool, Search, Smartphone, Globe, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  features: string[];
  index: number;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, iconBg, features, index, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  
  return (
    <Card 
      className="border border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-900/30 hover:shadow-lg transition-all duration-500 overflow-hidden group relative h-full dark:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-orange-50 dark:to-orange-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6 relative z-10 flex flex-col h-full">
        <div className={`mb-5 ${iconBg} w-12 h-12 flex items-center justify-center rounded-lg text-white group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-windo-darkgray dark:text-white group-hover:text-windo-orange transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {/* Features list */}
        <ul className="mt-2 space-y-2 mb-6 flex-grow list-none">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-windo-orange mr-2 mt-0.5 flex-shrink-0">•</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to={link}>
          <Button 
            variant="ghost" 
            className="justify-start p-0 text-windo-orange hover:text-windo-deeporange hover:bg-transparent mt-auto dark:text-orange-400 dark:hover:text-orange-300 w-full"
          >
            {t('homepage.services.learn_more')} <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('service.moderne-website.title'),
      description: t('service.moderne-website.description'),
      icon: <Layout size={24} />,
      iconBg: "bg-yellow-400",
      link: "/services/moderne-website",
      features: [
        t('service.moderne-website.feature1'),
        t('service.moderne-website.feature2'),
        t('service.moderne-website.feature3'),
        t('service.moderne-website.feature4')
      ]
    },
    {
      title: t('service.personlicher-support.title'),
      description: t('service.personlicher-support.description'),
      icon: <Code size={24} />,
      iconBg: "bg-orange-400",
      link: "/services/personlicher-support",
      features: [
        t('service.personlicher-support.feature1'),
        t('service.personlicher-support.feature2'),
        t('service.personlicher-support.feature3'),
        t('service.personlicher-support.feature4')
      ]
    },
    {
      title: t('service.hosting-wartung.title'),
      description: t('service.hosting-wartung.description'),
      icon: <PenTool size={24} />,
      iconBg: "bg-amber-500",
      link: "/services/hosting-wartung",
      features: [
        t('service.hosting-wartung.feature1'),
        t('service.hosting-wartung.feature2'),
        t('service.hosting-wartung.feature3'),
        t('service.hosting-wartung.feature4')
      ]
    },
    {
      title: t('service.seo-optimierung.title'),
      description: t('service.seo-optimierung.description'),
      icon: <Search size={24} />,
      iconBg: "bg-red-400",
      link: "/services/seo-optimierung",
      features: [
        t('service.seo-optimierung.feature1'),
        t('service.seo-optimierung.feature2'),
        t('service.seo-optimierung.feature3'),
        t('service.seo-optimierung.feature4')
      ]
    }
  ];

  return (
    <section id="services" className="bg-white dark:bg-gray-950 py-24 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-windo-light dark:bg-orange-950/20 opacity-40 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-windo-softOrange dark:bg-orange-950/20 opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-windo-light dark:bg-orange-950/30 px-4 py-2 rounded-full text-windo-deeporange dark:text-orange-400 font-medium text-sm mb-2 animate-fade-in">
            {t('homepage.services.badge')}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-windo-darkgray dark:text-white mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            {t('homepage.services.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            {t('homepage.services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in h-full" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconBg={service.iconBg}
                features={service.features}
                link={service.link}
                index={index}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center bg-orange-gradient hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
            {t('homepage.services.cta')} <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
