import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('experience');

  const experiences: Experience[] = [
    {
      title: "Senior MERN Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      description: "Leading development of enterprise web applications using the MERN stack. Architecting scalable solutions and mentoring junior developers."
    },
    {
      title: "Full Stack Developer",
      company: "WebDev Agency",
      duration: "2019 - 2021",
      description: "Developed responsive web applications and e-commerce platforms using React, Node.js, and MongoDB. Collaborated with UI/UX designers and backend developers."
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      duration: "2017 - 2019",
      description: "Created user interfaces for web applications using React.js, HTML5, CSS3, and JavaScript. Implemented responsive designs and optimized web performance."
    }
  ];

  const education: Education[] = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      duration: "2016 - 2017",
      description: "Specialized in web technologies and software engineering with a focus on modern JavaScript frameworks and database design."
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Science College",
      duration: "2012 - 2016",
      description: "Studied software development fundamentals, algorithms, data structures, and web development. Graduated with honors."
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Coding Academy",
      duration: "2015",
      description: "Intensive 3-month program covering full-stack web development with JavaScript, HTML, CSS, and related frameworks."
    }
  ];

  return (
    <div id="qualifications" className="bg-light py-20">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">Qualifications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          My professional journey and educational background that has shaped my career as a MERN stack developer.
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <button
            className={`flex items-center px-6 py-3 border-b-2 ${
              activeTab === 'experience' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-primary'
            } transition-colors duration-300 mr-8`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase className="mr-2" /> Experience
          </button>
          <button
            className={`flex items-center px-6 py-3 border-b-2 ${
              activeTab === 'education' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-primary'
            } transition-colors duration-300`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap className="mr-2" /> Education
          </button>
        </div>
        
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'experience' ? (
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 bg-gray-300"></div>
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <h4 className="text-lg text-gray-700 mb-2">{exp.company}</h4>
                      <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-5 bg-primary rounded-full w-4 h-4 border-4 border-white"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 bg-gray-300"></div>
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                      <h4 className="text-lg text-gray-700 mb-2">{edu.institution}</h4>
                      <p className="text-sm text-gray-500 mb-4">{edu.duration}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-5 bg-primary rounded-full w-4 h-4 border-4 border-white"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qualifications; 