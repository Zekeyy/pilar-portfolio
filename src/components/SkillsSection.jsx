import React from 'react';

const SkillsSection = ({ isDarkMode }) => {
  const skills = [
    { name: 'Python', image: `${import.meta.env.BASE_URL}images/pythonLogo.jpg` },
    { name: 'PHP', image: `${import.meta.env.BASE_URL}images/phpLogo.png` },
    { name: 'Java', image: `${import.meta.env.BASE_URL}images/JavaLogo.png` },
    { name: 'JavaScript', image: `${import.meta.env.BASE_URL}images/JavaScript-logo.png` },
    { name: 'SQL', image: `${import.meta.env.BASE_URL}images/SQLLogo.png` },
  ];

  const cardBgClasses = isDarkMode 
    ? 'bg-gray-800' 
    : 'bg-white shadow-lg';

  return (
    <section id="skills" className="py-10 px-20">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold flex items-center justify-center gap-4`}>
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
          SKILLS
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
        </h2>
      </div>
      
      <div className="overflow-hidden max-w-7xl mx-auto">
        <div className="flex animate-scroll-with-pause gap-8">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div
              key={`first-${index}`}
              className={`flex-shrink-0 flex items-center h-10 ${cardBgClasses} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-600 min-w-[300px]`}
            >
              <img 
                src={skill.image} 
                alt={skill.name}
                className="w-24 h-20 mr-5"
              />
              <p className="text-2xl font-semibold">{skill.name}</p>
            </div>
          ))}
          
          {/* Second set of skills for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`second-${index}`}
              className={`flex-shrink-0 flex items-center ${cardBgClasses} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 min-w-[400px]`}
            >
              <img 
                src={skill.image} 
                alt={skill.name}
                className="w-12 h-12 mr-5"
              />
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;