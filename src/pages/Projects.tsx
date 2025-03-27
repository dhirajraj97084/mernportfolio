import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Elevate your wardrobe with our curated collection of trendsetting fashion for everyone.",
      image: "front/ecommerce.png",
      technologies: ["React", "Tailwindcss", "Redux", "MERN"],
      github: "https://github.com/dhirajraj97084/ecomwebsite",
      demo: "https://ecomwebsite-kappa.vercel.app/",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Teaching and Learning Platform",
      description: "Master programming through interactive tutorials, comprehensive courses, and detailed documentation.",
      image: "front/teaching.png",
      technologies: ["React", "Tailwindcss", "Redux", "Material UI"],
      github: "https://github.com/dhirajraj97084/client",
      demo: "https://blogwebsite-two-chi.vercel.app/",
      category: "frontend"
    },
    {
      id: 3,
      title: "Digital Marketing Website",
      description: "Welcome to DigiSwarm, your top digital marketing agency in Dehradun. We provide a full spectrum of digital marketing services",
      image: "front/digi.png",
      technologies: ["React", "Tailwindcss", "Redux", "Material UI"],
      github: "https://github.com/dhirajraj97084/DigitalMarketingAgency",
      demo: "https://digital-marketing-agency-e51s.vercel.app/",
      category: "frontend"
    },
    {
      id: 4,
      title: "N.P.Industries PVT. LTD.",
      description: "With National production Industries, you can attract, impress, and convert more leads online and get results",
      image: "front/np.png",
      technologies: ["React", "Tailwindcss", "Redux", "Material UI"],
      github: "https://github.com/dhirajraj97084/npi_companies",
      demo: "https://npi-companies.vercel.app/",
      category: "frontend"
    },
    {
      id: 5,
      title: "Wedding and Photography Website",
      description: "INDIAN WEDDING PHOTOGRAPHY",
      image: "front/graphi.png",
      technologies: ["React", "Tailwindcss", "Redux", "Material UI"],
      github: "https://github.com/dhirajraj97084/SILK",
      demo: "https://silk-self.vercel.app/",
      category: "frontend"
    },
    {
      id: 6,
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