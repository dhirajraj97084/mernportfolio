import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+Project",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics with real-time data visualization.",
      image: "https://via.placeholder.com/600x400?text=Dashboard+Project",
      technologies: ["React", "Firebase", "Chart.js", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com",
      category: "frontend"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management with authentication and authorization.",
      image: "https://via.placeholder.com/600x400?text=API+Project",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
      category: "backend"
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-24">
      <div className="container section">
        <h1 className="section-title text-center" data-aos="fade-up">My Projects</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12" data-aos="fade-up">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card" data-aos="fade-up">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 