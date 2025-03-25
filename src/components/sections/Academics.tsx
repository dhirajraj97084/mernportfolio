import React from 'react';

interface Skill {
  name: string;
  proficiency: number;
}

interface Category {
  title: string;
  skills: Skill[];
}

const Academics: React.FC = () => {
  const categories: Category[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "HTML & CSS", proficiency: 95 },
        { name: "Python", proficiency: 70 },
        { name: "PHP", proficiency: 60 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", proficiency: 95 },
        { name: "Node.js", proficiency: 90 },
        { name: "Express.js", proficiency: 90 },
        { name: "Next.js", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", proficiency: 95 },
        { name: "MySQL", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 70 },
        { name: "Firebase", proficiency: 80 },
        { name: "Redis", proficiency: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", proficiency: 90 },
        { name: "Docker", proficiency: 70 },
        { name: "AWS", proficiency: 70 },
        { name: "CI/CD", proficiency: 80 },
        { name: "RESTful APIs", proficiency: 95 }
      ]
    }
  ];

  return (
    <div id="academics" className="py-20">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">Academic Proficiency</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          My technical skills and competency levels across various programming languages, frameworks, and tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="bg-white p-8 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={`${catIndex * 100}`}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics; 