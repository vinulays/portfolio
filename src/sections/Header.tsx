'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-3 z-10 flex w-full items-center justify-center">
        <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur-sm">
          <a
            href="#"
            className={`nav-item ${
              activeSection === 'home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
            } `}
          >
            Home
          </a>

          <a
            href="#about"
            className={`nav-item ${
              activeSection === 'about' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
            } `}
          >
            About
          </a>

          <a
            href="#experience"
            className={`nav-item ${
              activeSection === 'experience' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
            } `}
          >
            Experience
          </a>

          <a
            href="#projects"
            className={`nav-item ${
              activeSection === 'projects' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
            } `}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={`nav-item ${
              activeSection === 'contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
            } `}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
