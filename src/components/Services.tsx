
import React from 'react';
import { Code, Layout, PenTool, Search, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="border border-gray-100 hover-shadow-effect group">
      <CardContent className="p-6">
        <div className="mb-4 text-windo-blue group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-windo-darkgray">{title}</h3>
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
      icon: <Layout size={32} />
    },
    {
      title: "Web Development",
      description: "Custom-coded websites with clean, optimized code for maximum performance.",
      icon: <Code size={32} />
    },
    {
      title: "UX/UI Design",
      description: "User-focused interfaces that provide seamless navigation and exceptional user experience.",
      icon: <PenTool size={32} />
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      icon: <Search size={32} />
    },
    {
      title: "Responsive Design",
      description: "Websites that look and work perfectly on all devices, from desktops to smartphones.",
      icon: <Smartphone size={32} />
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores that drive sales with secure payment gateways and intuitive shopping experiences.",
      icon: <Globe size={32} />
    }
  ];

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of web design and development services to help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
