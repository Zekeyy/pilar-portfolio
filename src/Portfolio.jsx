import React, { useState, useEffect } from 'react';
import "../src/styles/portfolio.css"

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReturnBtn, setShowReturnBtn] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fixed Typewriter effect
  useEffect(() => {
    const text = "Web Developer";
    const typingSpeed = isDeleting ? 100 : 200;
    const pauseTime = isDeleting ? 500 : 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setTypingText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setTypingText(text.slice(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const skillsTop = skillsSection.offsetTop;
        setShowReturnBtn(scrollY > skillsTop);
        // Hide header when reaching skills section
        setHideHeader(scrollY >= skillsTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'Python', image: `${import.meta.env.BASE_URL}images/pythonLogo.jpg` },
    { name: 'PHP', image: `${import.meta.env.BASE_URL}images/phpLogo.png` },
    { name: 'Java', image: `${import.meta.env.BASE_URL}images/JavaLogo.png` },
    { name: 'JavaScript', image: `${import.meta.env.BASE_URL}images/JavaScript-logo.png` },
    { name: 'SQL', image: `${import.meta.env.BASE_URL}images/SQLLogo.png` },
  ];

  const projects = [
    { title: 'HRIS Project', image: `${import.meta.env.BASE_URL}images/Project1.jpg`, link: 'https://hris-virid-gamma.vercel.app/' },
    { title: 'Finance Monitoring', image: `${import.meta.env.BASE_URL}images/Project2.png`, link: 'https://zekeyy.github.io/Finance-Monitoring/' },
    { title: 'Project 3', image: `${import.meta.env.BASE_URL}images/Project1.jpg`, link: 'https://zekeyy.github.io/Finance-Monitoring/' },
  ];

  const themeClasses = isDarkMode 
    ? 'bg-gradient-to-r from-black to-blue-900 text-white' 
    : 'bg-gradient-to-r from-blue-50 to-white text-gray-800';

  const headerBgClasses = isDarkMode 
    ? 'bg-black/20' 
    : 'bg-white/20';

  const cardBgClasses = isDarkMode 
    ? 'bg-gray-800' 
    : 'bg-white shadow-lg';

  const footerBgClasses = isDarkMode 
    ? 'bg-gray-800' 
    : 'bg-gray-100';

  return (
    <div className={`min-h-screen ${themeClasses} overflow-x-hidden transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-2xl ${
        isScrolled ? `${headerBgClasses} backdrop-blur-sm` : 'bg-transparent'
      } ${hideHeader ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-9xl mx-auto px-5 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
             
            </div>
           
            
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'skills', 'projects', 'footer'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${isDarkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300 font-medium capitalize`}
                >
                  {section === 'footer' ? 'Contact' : section}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/100 text-black hover:bg-gray-200' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
            
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                     ? 'bg-white/100 text-black hover:bg-gray-200' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              <button
                onClick={toggleMenu}
                className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-2xl`}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full right-5 w-48 ${
            isDarkMode ? 'bg-black/90' : 'bg-white/95'
          } backdrop-blur-sm rounded-lg shadow-xl p-4`}>
            {['home', 'about', 'skills', 'projects', 'footer'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-2 px-3 ${
                  isDarkMode ? 'text-white hover:bg-blue-900' : 'text-gray-800 hover:bg-blue-100'
                } rounded transition-colors duration-300 capitalize`}
              >
                {section === 'footer' ? 'Contact' : section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Return to Top Button */}
      {showReturnBtn && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 w-[60px] ${
                  isDarkMode 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-black text-white'
                }  text-2xl p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 z-50`}
        >
          ↑
        </button>
      )}

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-8">
          <div className="mb-8">
            <img 
              src={`${import.meta.env.BASE_URL}images/profile.jpg`}
              alt="Profile" 
              className="w-70 h-70 rounded-full object-cover mx-auto border-4 border-white shadow-2xl"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-7xl md:text-7xl font-bold">
              Hey I'm <span className={`drop-shadow-lg ${
                  isDarkMode 
                    ? 'text-cyan-500' 
                    : 'text-gray-700'
                }`}>Ezekiel B. Pilar</span>
            </h1>
            
            <div className="text-5xl md:text-6xl font-semibold">
              I'm a <span className={`drop-shadow-lg ${
                  isDarkMode 
                    ? 'text-cyan-500' 
                    : 'text-gray-700'
                }`}>{typingText}</span>
              <span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              As an Information Technology Fresh Graduate, I would like to seek an opportunity to expand my knowledge and utilize my skills and gain further experience.
            </p>
            
            <div className="pt-8">
              <a 
                href={`${import.meta.env.BASE_URL}/files/PILAR_EZEKIEL_WEB_DEV_RESUME.pdf`} 
                download
                className="inline-block bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

     

{/* Skills Section */}
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
          className={`flex-shrink-0 flex items-center h-43 ${cardBgClasses} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 min-w-[300px]`}
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

      {/* Projects Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-5">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold flex items-center justify-center gap-4`}>
            <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
            ABOUT ME
            <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Profile"
            className="w-70 h-70 rounded-full object-cover border-4 border-white shadow-2xl"
          />
          
          <div className="flex-1 text-2xl leading-relaxed">
            <p>
              Hi, I'm Ezekiel B. Pilar! I'm an Information Technology Fresh Graduate with a passion for web development and photography. I love the process of building websites—from writing clean, functional code to designing user-friendly interfaces. Seeing an idea come to life on the screen is something that excites me.
            </p>
            <br />
            <p>
              Aside from coding, I have a creative side that comes out through photography. Capturing moments, playing with lighting, and telling stories through images is something I truly enjoy. Whether it's behind a camera or in front of a screen, I love creating and bringing ideas to life.
            </p>
            <br />
            <p>
              I'm always eager to learn, improve my skills, and explore new opportunities in both web development and photography.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className={`${footerBgClasses} py-12 px-5`}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Contact Me</h2>
          
          <div className="space-y-2 text-2xl">
            <p><strong>Address:</strong> Pangarap Village Caloocan City</p>
            <p><strong>Mobile Number:</strong> 09994111811</p>
            <p><strong>Email:</strong> <a href="mailto:ezekielpilar27@gmail.com" className="text-blue-400 hover:text-blue-300">ezekielpilar27@gmail.com</a></p>
          </div>
          
        <div className="flex justify-center space-x-6 pt-6">
  {[
    { icon: `${import.meta.env.BASE_URL}images/gitbhub.png`, link: 'https://github.com/Zekeyy' },
    { icon: `${import.meta.env.BASE_URL}images/facebook.png`, link: 'https://www.facebook.com/ezekiel.pilar.1/' },
    { icon: `${import.meta.env.BASE_URL}images/linkedin.png`, link: 'https://www.linkedin.com/in/ezekiel-pilar-6880062ba/' },
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-15 h-15 border-2 ${
        isDarkMode ? 'border-white' : 'border-gray-800'
      } rounded-full flex items-center justify-center ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      } hover:bg-blue-700 hover:text-white hover:scale-125 transition-all duration-300 text-xl`}
    >
      {social.icon.endsWith('.png') || social.icon.endsWith('.jpg') || social.icon.endsWith('.svg') ? (
        <img src={social.icon} alt="icon" className="w-10 h-10" />
      ) : (
        social.icon
      )}
    </a>
  ))}
</div>

        </div>
      </footer>
    </div>
  );
};

export default Portfolio;