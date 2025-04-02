
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      title: "E-commerce Website",
      category: "development",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Custom e-commerce platform with integrated payment systems and inventory management.",
      link: "#"
    },
    {
      title: "Corporate Rebrand",
      category: "design",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Complete redesign of company's digital presence with focus on modern aesthetics.",
      link: "#"
    },
    {
      title: "Mobile App Interface",
      category: "ui",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Intuitive mobile interface design for a health tracking application.",
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      category: "development",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Comprehensive analytics dashboard for a SaaS platform with real-time data visualization.",
      link: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="bg-windo-gray section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-windo-darkgray mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our recent projects and see how we've helped businesses transform their online presence.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-windo-blue text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('design')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'design' ? 'bg-windo-blue text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Design
            </button>
            <button 
              onClick={() => setFilter('development')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'development' ? 'bg-windo-blue text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Development
            </button>
            <button 
              onClick={() => setFilter('ui')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ui' ? 'bg-windo-blue text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
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
              className="bg-white rounded-lg overflow-hidden shadow hover-shadow-effect group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-windo-blue bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <a 
                    href={project.link} 
                    className="bg-white text-windo-blue p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-windo-blue">
                  {project.category === 'development' ? 'Development' : 
                   project.category === 'design' ? 'Design' : 'UI/UX'}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-windo-darkgray">{project.title}</h3>
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
