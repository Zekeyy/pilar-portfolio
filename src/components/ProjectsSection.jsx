import React from 'react';

const ProjectsSection = ({ isDarkMode }) => {
  const projects = [
    { 
      title: 'HRIS Project', 
      link: 'https://hris-virid-gamma.vercel.app/',
      technologies: ['React', 'Laravel', 'MySQL']
    },
    { 
      title: 'Finance Monitoring', 
      link: 'https://zekeyy.github.io/Finance-Monitoring/',
      technologies: ['React', 'Laravel', 'MySQL']
    },
    { 
      title: 'Project 3', 
      link: 'https://zekeyy.github.io/Finance-Monitoring/',
      technologies: ['React', 'Laravel', 'MySQL']
    },
  ];

  const cardBgClasses = isDarkMode 
    ? 'bg-gray-800 hover:bg-gray-700' 
    : 'bg-white shadow-lg hover:shadow-xl';

  const textClasses = isDarkMode 
    ? 'text-white' 
    : 'text-gray-800';

  const techBadgeClasses = isDarkMode
    ? 'bg-blue-600 text-white'
    : 'bg-blue-100 text-blue-800';

  return (
    <section id="projects" className="py-10 px-5">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold flex items-center justify-center gap-4`}>
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
          PROJECTS
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardBgClasses} rounded-lg p-6 transition-all duration-300 hover:scale-105 cursor-pointer block`}
          >
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${textClasses}`}>
                {project.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${techBadgeClasses}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;