import React from 'react';

const Footer = ({ isDarkMode }) => {
  const footerBgClasses = isDarkMode 
    ? 'bg-gray-800' 
    : 'bg-gray-100';

  return (
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
            { icon: `${import.meta.env.BASE_URL}images/github.png`, link: 'https://github.com/Zekeyy' },
            { icon: `${import.meta.env.BASE_URL}images/facebook.png`, link: 'https://www.facebook.com/ezekiel.pilar.1/' },
            { icon: `${import.meta.env.BASE_URL}images/linkedin.png`, link: 'https://www.linkedin.com/in/ezekiel-pilar-6880062ba/' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 border-2 ${
                isDarkMode ? 'border-white' : 'border-gray-800'
              } rounded-full flex items-center justify-center ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              } hover:bg-blue-700 hover:text-white hover:scale-125 transition-all duration-300 text-xl`}
            >
              {social.icon.endsWith('.png') || social.icon.endsWith('.jpg') || social.icon.endsWith('.svg') ? (
                <img src={social.icon} alt="icon" className="w-11 h-11" />
              ) : (
                social.icon
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;