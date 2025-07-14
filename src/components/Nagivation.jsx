import React from 'react';

const Navigation = ({ 
  isScrolled, 
  hideHeader, 
  isDarkMode, 
  isMenuOpen, 
  toggleMenu, 
  toggleDarkMode, 
  scrollToSection 
}) => {
  const headerBgClasses = isDarkMode 
    ? 'bg-black/20' 
    : 'bg-white/20';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-xl ${
      isScrolled ? `${headerBgClasses} backdrop-blur-sm` : 'bg-transparent'
    } ${hideHeader ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-9xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo or brand can go here */}
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
  );
};

export default Navigation;