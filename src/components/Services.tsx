
import React from 'react';
import { Code, Layout, PenTool, Search, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, iconBg }) => {
  return (
    <Card className="border border-gray-100 hover-shadow-effect overflow-hidden group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="p-6 relative z-10">
        <div className={`mb-5 ${iconBg} w-12 h-12 flex items-center justify-center rounded-lg text-white group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-windo-darkgray group-hover:text-windo-orange transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
      iconBg: "bg-yellow-400"
    },
    {
      title: "Web Development",
      description: "Custom-coded websites with clean, optimized code for maximum performance.",
      icon: <Code size={24} />,
      iconBg: "bg-orange-400"
    },
    {
      title: "UX/UI Design",
      description: "User-focused interfaces that provide seamless navigation and exceptional user experience.",
      icon: <PenTool size={24} />,
      iconBg: "bg-amber-500"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      icon: <Search size={24} />,
      iconBg: "bg-red-400"
    },
    {
      title: "Responsive Design",
      description: "Websites that look and work perfectly on all devices, from desktops to smartphones.",
      icon: <Smartphone size={24} />,
      iconBg: "bg-yellow-500"
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores that drive sales with secure payment gateways and intuitive shopping experiences.",
      icon: <Globe size={24} />,
      iconBg: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="bg-white section-padding relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-windo-light opacity-40 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-windo-softOrange opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-windo-light px-4 py-2 rounded-full text-windo-deeporange font-medium text-sm mb-2 animate-fade-in">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            What We <span className="text-transparent bg-clip-text bg-orange-gradient">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            We offer a comprehensive range of web design and development services to help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * (index + 3)}s`}}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconBg={service.iconBg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
