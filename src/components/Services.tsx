import React, { useState } from 'react';
import { Code, Layout, PenTool, Search, Smartphone, Globe, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, iconBg, features, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
        <ul className="mt-2 space-y-2 mb-6 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="text-windo-orange mr-2 mt-1">•</div>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="ghost" 
          className="justify-start p-0 text-windo-orange hover:text-windo-deeporange hover:bg-transparent mt-auto dark:text-orange-400 dark:hover:text-orange-300"
        >
          Learn more <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </Button>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive designs that engage your visitors and reflect your brand identity.",
      icon: <Layout size={24} />,
      iconBg: "bg-yellow-400",
      features: [
        "Custom UI/UX design",
        "Responsive layouts",
        "Brand integration",
        "Conversion-focused design"
      ]
    },
    {
      title: "Web Development",
      description: "Custom-coded websites with clean, optimized code for maximum performance.",
      icon: <Code size={24} />,
      iconBg: "bg-orange-400",
      features: [
        "Modern frameworks",
        "Custom functionality",
        "Fast load times",
        "Secure code practices"
      ]
    },
    {
      title: "UX/UI Design",
      description: "User-focused interfaces that provide seamless navigation and exceptional user experience.",
      icon: <PenTool size={24} />,
      iconBg: "bg-amber-500",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Accessibility testing",
        "Iterative improvement"
      ]
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      icon: <Search size={24} />,
      iconBg: "bg-red-400",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audits",
        "Performance tracking"
      ]
    },
    {
      title: "Responsive Design",
      description: "Websites that look and work perfectly on all devices, from desktops to smartphones.",
      icon: <Smartphone size={24} />,
      iconBg: "bg-yellow-500",
      features: [
        "Mobile-first approach",
        "Cross-device testing",
        "Fluid layouts",
        "Touch-friendly interfaces"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores that drive sales with secure payment gateways and intuitive shopping experiences.",
      icon: <Globe size={24} />,
      iconBg: "bg-orange-500",
      features: [
        "Secure checkout process",
        "Inventory management",
        "Payment integration",
        "Order tracking"
      ]
    }
  ];

  return (
    <section id="services" className="bg-white dark:bg-gray-950 py-24 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-windo-light dark:bg-orange-950/20 opacity-40 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-windo-softOrange dark:bg-orange-950/20 opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in h-full" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconBg={service.iconBg}
                features={service.features}
                index={index}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center bg-orange-gradient hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
            Discuss Your Project <ChevronRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
