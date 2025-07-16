import React, { useState, useEffect } from 'react';

const HeroSection = ({ isDarkMode }) => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center space-y-8">
        <div className="mb-8">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile2.png`}
            alt="Profile" 
            className="w-70 h-70 rounded-full object-cover mx-auto border-4 border-white shadow-2xl"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hey I'm <span className={`drop-shadow-lg ${
                isDarkMode 
                  ? 'text-cyan-500' 
                  : 'text-gray-700'
              }`}>Ezekiel B. Pilar</span>
          </h1>
          
          <div className="text-3xl md:text-6xl font-semibold">
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
              href={`${import.meta.env.BASE_URL}files/PILAR_EZEKIEL_WEB_DEV_RESUME.pdf`} 
              download
              className="inline-block bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:scale-110 hover:shadow-xl transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
