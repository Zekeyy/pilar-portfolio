import React from 'react';

const ProjectsSection = ({ isDarkMode }) => {
  const projects = [
    { title: 'HRIS Project', image: `${import.meta.env.BASE_URL}images/Project1.jpg`, link: 'https://hris-virid-gamma.vercel.app/' },
    { title: 'Finance Monitoring', image: `${import.meta.env.BASE_URL}images/Project2.png`, link: 'https://zekeyy.github.io/Finance-Monitoring/' },
    { title: 'Project 3', image: `${import.meta.env.BASE_URL}images/Project1.jpg`, link: 'https://zekeyy.github.io/Finance-Monitoring/' },
  ];

  const cardBgClasses = isDarkMode 
    ? 'bg-gray-800' 
    : 'bg-white shadow-lg';

  return (
    <section id="projects" className="py-10 px-5">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold flex items-center justify-center gap-4`}>
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
          PROJECTS
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 h[200px] md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${cardBgClasses} rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-4/5 object-cover"
            />
            <div className="p-4 h-1/5 flex items-center justify-center">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;