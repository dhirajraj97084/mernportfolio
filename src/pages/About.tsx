import React from 'react';
import { FaCode, FaDatabase, FaServer, FaLaptop, FaMobile, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { icon: <FaCode />, name: 'Frontend', items: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux'] },
    { icon: <FaServer />, name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Authentication'] },
    { icon: <FaDatabase />, name: 'Database', items: ['MongoDB', 'Mongoose', 'SQL', 'Firebase', 'Data Modeling'] },
    { icon: <FaLaptop />, name: 'Tools', items: ['Git', 'Webpack', 'npm/yarn', 'Docker', 'CI/CD'] },
    { icon: <FaMobile />, name: 'Mobile', items: ['React Native', 'Responsive Design', 'PWA', 'App Optimization'] }
  ];

  const qualifications = [
    { 
      type: 'education',
      icon: <FaGraduationCap />, 
      title: 'Master of Computer Science', 
      organization: 'Technical University',
      period: '2019 - 2021',
      description: 'Specialized in Web Development and Advanced Algorithms' 
    },
    { 
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Senior MERN Stack Developer', 
      organization: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Leading development of enterprise web applications' 
    },
    { 
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Full Stack Developer', 
      organization: 'Web Dev Agency',
      period: '2019 - 2021',
      description: 'Built scalable web applications for various clients' 
    }
  ];

  const academics = [
    {
      icon: <FaAward />,
      title: 'Academic Achievements',
      items: [
        'Graduated with First Class Honours',
        'Best Final Year Project Award',
        'Dean\'s List for 3 consecutive years',
        'Published research paper on Web Development'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Certifications',
      items: [
        'AWS Certified Developer',
        'MongoDB Certified Developer',
        'React Certified Developer',
        'Node.js Certified Developer'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* About Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" data-aos="fade-up">About Me</h1>
            <p className="text-lg text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              I am a passionate MERN Stack Developer with a strong foundation in web development and a keen eye for creating elegant solutions to complex problems.
            </p>
            <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
              With several years of experience in the industry, I specialize in building scalable, responsive, and user-friendly web applications using modern technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800" data-aos="fade-up">Technical Skills</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              I have expertise in all aspects of the MERN stack and related technologies, 
              allowing me to build complete web solutions from front to back.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="text-blue-600 mb-4 text-4xl">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name} Development</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800" data-aos="fade-up">Qualifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              My professional journey and educational background that has shaped my career as a developer.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {qualifications.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="md:w-1/2 flex">
                    <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${item.type === 'education' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-blue-600 font-medium">{item.organization}</p>
                      <p className="text-gray-500 text-sm mb-2">{item.period}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800" data-aos="fade-up">Academic Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              My academic achievements and certifications that demonstrate my commitment to continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academics.map((academic, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-blue-600 mb-4 text-4xl">
                  {academic.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{academic.title}</h3>
                <ul className="space-y-3">
                  {academic.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 