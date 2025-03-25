import React from 'react';
import { FaCode, FaDatabase, FaServer, FaMobile, FaDesktop, FaTasks } from 'react-icons/fa';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      icon: <FaCode className="h-10 w-10 text-primary" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React.js, Redux, HTML5, CSS3, and JavaScript/TypeScript.'
    },
    {
      icon: <FaServer className="h-10 w-10 text-primary" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express.js, and RESTful API design principles.'
    },
    {
      icon: <FaDatabase className="h-10 w-10 text-primary" />,
      title: 'Database Design',
      description: 'Designing and implementing database schemas with MongoDB, managing data relationships and optimizing queries.'
    },
    {
      icon: <FaDesktop className="h-10 w-10 text-primary" />,
      title: 'Responsive Design',
      description: 'Crafting websites that look great on all devices using modern CSS frameworks like Tailwind CSS and responsive design techniques.'
    },
    {
      icon: <FaTasks className="h-10 w-10 text-primary" />,
      title: 'DevOps & Deployment',
      description: 'Deploying applications using cloud platforms like AWS, Heroku, and Vercel with CI/CD pipelines for automated testing and deployment.'
    },
    {
      icon: <FaMobile className="h-10 w-10 text-primary" />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native for iOS and Android platforms.'
    }
  ];

  return (
    <div id="skills" className="bg-light py-20">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">My Skills</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          I specialize in the MERN stack with a focus on creating scalable and performant web applications.
          Here are my core technical skills and areas of expertise:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 