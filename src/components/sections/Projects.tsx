import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+Project",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics with real-time data visualization.",
      image: "https://via.placeholder.com/600x400?text=Dashboard+Project",
      technologies: ["React", "Firebase", "Chart.js", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management with authentication and authorization.",
      image: "https://via.placeholder.com/600x400?text=API+Project",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <div id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Here are some of my recent projects. Each project showcases different skills and technologies from my stack.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={`${(project.id % 3) * 100}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="flex justify-between items-center w-full p-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent bg-dark/50 p-2 rounded-full"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent bg-dark/50 p-2 rounded-full"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
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
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects; 