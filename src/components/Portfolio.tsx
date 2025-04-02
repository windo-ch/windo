
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link: string;
  tagColor: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      title: "E-commerce Website",
      category: "development",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Custom e-commerce platform with integrated payment systems and inventory management.",
      link: "#",
      tagColor: "bg-orange-100 text-orange-600"
    },
    {
      title: "Corporate Rebrand",
      category: "design",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Complete redesign of company's digital presence with focus on modern aesthetics.",
      link: "#",
      tagColor: "bg-amber-100 text-amber-600"
    },
    {
      title: "Mobile App Interface",
      category: "ui",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Intuitive mobile interface design for a health tracking application.",
      link: "#",
      tagColor: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "SaaS Dashboard",
      category: "development",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Comprehensive analytics dashboard for a SaaS platform with real-time data visualization.",
      link: "#",
      tagColor: "bg-orange-100 text-orange-600"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'development': return 'Development';
      case 'design': return 'Design';
      case 'ui': return 'UI/UX';
      default: return category;
    }
  };

  return (
    <section id="portfolio" className="bg-windo-gray section-padding relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-white opacity-70 -z-10"></div>
      <div className="absolute -bottom-20 left-0 w-64 h-64 rounded-full bg-windo-softOrange opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-full text-windo-deeporange font-medium text-sm mb-2 animate-fade-in">Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Our <span className="text-transparent bg-clip-text bg-orange-gradient">Work</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Browse our recent projects and see how we've helped businesses transform their online presence.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <button 
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-orange-gradient text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('design')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'design' 
                  ? 'bg-orange-gradient text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Design
            </button>
            <button 
              onClick={() => setFilter('development')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'development' 
                  ? 'bg-orange-gradient text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Development
            </button>
            <button 
              onClick={() => setFilter('ui')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'ui' 
                  ? 'bg-orange-gradient text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              UI/UX
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover-shadow-effect group animate-fade-in"
              style={{animationDelay: `${0.1 * (index + 5)}s`}}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.link} 
                    className="bg-white text-windo-orange p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform hover:bg-gray-100"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${project.tagColor}`}>
                  {getCategoryLabel(project.category)}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-3 text-windo-darkgray">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
