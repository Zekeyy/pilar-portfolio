import React from 'react';

const AboutSection = ({ isDarkMode }) => {
  return (
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
          src={`${import.meta.env.BASE_URL}images/profile3.jpg`}
          alt="Profile"
          className="w-80 h-85 object-cover border-4 border-white shadow-2xl"
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
  );
};

export default AboutSection;