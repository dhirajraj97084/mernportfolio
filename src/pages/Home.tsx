import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaDatabase, FaServer, FaLaptop, FaMobile, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { FcTreeStructure } from "react-icons/fc";

const Home: React.FC = () => {
  const skills = [
        { icon: <FaCode />, name: 'Frontend Development', items: ['React.js', 'JavaScript', 'Tailwindcss', 'HTML/CSS', 'Redux'] },
        { icon: <FaServer />, name: 'Backend Development', items: ['Node.js', 'Express.js', 'REST APIs','Authentication'] },
        { icon: <FaDatabase />, name: 'Database Development', items: ['MongoDB', 'Mongoose', 'SQL', 'Firebase','Data Modeling'] },
        { icon: <FaLaptop />, name: 'Tools Development', items: ['Git','npm/yarn','GitHub','Vercel'] },
        { icon: <FcTreeStructure />, name: 'Data Structure', items: ['C++', 'Opps','STL', 'Problem  solving'] },
        
      ];

  const qualifications = [
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Bachelor of Computer Science',
      organization: 'Uttaranchal University Dehradun =>( 9.11 cgpa )',
      period: '2022 - 2026',
      description: 'Graduated with honors, focus on software engineering'
    },
    // { 
    //   type: 'work',
    //   icon: <FaBriefcase />,
    //   title: 'Junior MERN Stack Developer', 
    //   organization: 'digiswarm company Dehradun',
    //   period: '2025 - Present',
    //   description: 'Leading development of enterprise web applications' 
    // },
    // { 
    //   type: 'work',
    //   icon: <FaBriefcase />,
    //   title: 'Frontend Developer', 
    //   organization: 'digiswarm company',
    //   period: '2024 - 2025',
    //   description: 'Built scalable web applications for various clients' 
    // },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Higher Secondary School(12th)',
      organization: 'M.S. College Motihari(Bihar)=>( 81.4 % Marks )',
      period: '2020 - 2022',
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Secondary School(10th)',
      organization: 'Zila School Motihari(Bihar)=>( 79.4 % Marks )',
      period: '2018 - 2019',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-20 md:pt-0">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-blue-900/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-xl md:text-2xl font-medium mb-2 text-blue-300">Hello, I'm a</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block mb-2 text-white">MERN Stack</span>
                <span className="text-blue-400">Developer</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-200">
                I build scalable, responsive and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
                <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors shadow-lg hover:shadow-blue-500/25">
                  View My Work
                </a>
                <Link to="/contact" className="px-6 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 rounded-md font-medium transition-colors">
                  Contact Me
                </Link>
              </div>

              <div className="flex space-x-6 justify-center lg:justify-start">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <FaGithub className="h-7 w-7" />
                </a>
                <a href="https://www.linkedin.com/in/dhiraj-kumar-tiwari-4443362a9/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <FaLinkedin className="h-7 w-7" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <FaTwitter className="h-7 w-7" />
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-md lg:max-w-lg" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500 rounded-full blur-xl opacity-20"></div>
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-blue-400/50"></div>
                      <img
                        src="/images/dh.jpg"
                        alt="Profile"
                        className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#skills" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-300 animate-bounce">
          <FaArrowDown className="h-6 w-6" />
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
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
                <h3 className="text-xl font-bold mb-4">{skill.name} </h3>
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
      <section id="qualifications" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800" data-aos="fade-up">Qualifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              My educational background and professional journey that has shaped my career as a developer.
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

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800" data-aos="fade-up">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Check out some of my recent work. Each project represents my dedication to quality and attention to detail.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={item * 100}
              >
                <img
                  src={`/front/teaching.png${item}`}
                  alt={`Project ${item}`}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this project. Features include responsive design, API integration, and modern UI/UX.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
              data-aos="fade-up"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Ready to start your project?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Let's collaborate to bring your ideas to life with cutting-edge web technologies.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-800 hover:bg-blue-100 rounded-md font-bold transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 