import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-dark/90 z-10"></div>
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl text-white" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-accent">MERN Stack Developer</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-200">
            I create modern, responsive web applications with MongoDB, Express.js, React.js, and Node.js.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/contact" className="btn btn-primary">
              Hire Me
            </Link>
            <a href="#projects" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              View My Work
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/dhirajraj97084"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhiraj-kumar-tiwari-4443362a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#skills" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <FaArrowDown className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Hero; 