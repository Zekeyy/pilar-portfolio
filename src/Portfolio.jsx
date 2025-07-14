import React, { useState, useEffect } from 'react';
import "../src/styles/portfolio.css";
import Navigation from './components/Navigation.jsx';
import HeroSection from './components/HeroSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import Footer from './components/Footer.jsx';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReturnBtn, setShowReturnBtn] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const skillsTop = skillsSection.offsetTop;
        setShowReturnBtn(scrollY > skillsTop);
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

  const themeClasses = isDarkMode 
    ? 'bg-gradient-to-r from-black to-blue-900 text-white' 
    : 'bg-gradient-to-r from-blue-50 to-white text-gray-800';

  return (
    <div className={`min-h-screen ${themeClasses} overflow-x-hidden transition-colors duration-500`}>
      <Navigation 
        isScrolled={isScrolled}
        hideHeader={hideHeader}
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Return to Top Button */}
      {showReturnBtn && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 w-[60px] ${
            isDarkMode 
              ? 'bg-cyan-600 text-white' 
              : 'bg-black text-white'
          } text-2xl p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 z-50`}
        >
          ↑
        </button>
      )}

      <HeroSection isDarkMode={isDarkMode} />
      <ExperienceSection isDarkMode={isDarkMode} />
      <SkillsSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Portfolio;