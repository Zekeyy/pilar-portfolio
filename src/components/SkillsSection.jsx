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
    <section id="skills" className="py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-8 md:mb-16">
        <h2 className={`text-2xl md:text-4xl font-bold flex items-center justify-center gap-2 md:gap-4`}>
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
          SKILLS
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
        </h2>
      </div>
      
      <div className="overflow-hidden max-w-7xl mx-auto">
        <div className="flex animate-scroll-mobile sm:animate-scroll-tablet md:animate-scroll-desktop gap-4 md:gap-8">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div
              key={`first-${index}`}
              className={`flex-shrink-0 flex items-center ${cardBgClasses} p-4 md:p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 min-w-[200px] sm:min-w-[250px] md:min-w-[300px]`}
            >
              <img 
                src={skill.image} 
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-3 md:mr-5"
              />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">{skill.name}</p>
            </div>
          ))}
          
          {/* Second set of skills for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`second-${index}`}
              className={`flex-shrink-0 flex items-center ${cardBgClasses} p-4 md:p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 min-w-[200px] sm:min-w-[250px] md:min-w-[300px]`}
            >
              <img 
                src={skill.image} 
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-3 md:mr-5"
              />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;