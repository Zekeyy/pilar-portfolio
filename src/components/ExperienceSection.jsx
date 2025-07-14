import React, { useState, useEffect } from 'react';

const ExperienceSection = ({ isDarkMode }) => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = startX - currentX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If dragged more than 50px, change slide
    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentExperience < 1) {
        setCurrentExperience(currentExperience + 1);
      } else if (translateX < 0 && currentExperience > 0) {
        setCurrentExperience(currentExperience - 1);
      }
    }
    
    setTranslateX(0);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If dragged more than 50px, change slide
    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentExperience < 1) {
        setCurrentExperience(currentExperience + 1);
      } else if (translateX < 0 && currentExperience > 0) {
        setCurrentExperience(currentExperience - 1);
      }
    }
    
    setTranslateX(0);
  };

  // Auto-sliding functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExperience((prev) => (prev === 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="py-20 px-5">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold flex items-center justify-center gap-4`}>
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
          EXPERIENCE
          <span className={`flex-1 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></span>
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Experience Slider Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
            style={{ transform: `translateX(-${currentExperience * 100}%)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Experience 1 */}
            <div className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-2xl leading-relaxed">
                <div className="mb-6">
                  <strong className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    GammCare Medical Services Inc. - INTERSHIP
                  </strong>
                  <p className={`text-xl mt-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                    Web Developer
                  </p>
                  <p className={`text-lg mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Febraury 20, 2025 - May 31, 2025
                  </p>
                </div>
                
                <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    Currently working as a Web Developer at GammCare Medical Services Inc., where I develop 
                    web applications. I've built two main projects: a finance monitoring 
                    system to track financial data and an inventory management system for efficient stock control.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        Key Technologies
                      </h4>
                      <p className="text-lg">React, Laravel, & MySQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-2xl leading-relaxed">
                <div className="mb-6">
                  <strong className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Freelance Photography Assistant
                  </strong>
                  <p className={`text-lg mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    2 MONTHS IN 2018
                  </p>
                </div>
                
                <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    Assisted a friend with photography projects over a 2-month period, helping with various 
                    photo shoots and learning fundamental photography techniques. 
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                        Key Equipment & Skills
                      </h4>
                      <p className="text-lg">Canon DSLR, & Photoshop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentExperience(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentExperience === index
                  ? isDarkMode 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-800 scale-125'
                  : isDarkMode 
                    ? 'bg-gray-600 hover:bg-gray-500' 
                    : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;