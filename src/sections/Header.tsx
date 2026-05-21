'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-link', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 });
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-3 z-10 flex w-full items-center justify-center">
        <nav className="hidden gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur-sm md:flex">
          <a
            href="#hero"
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

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-8 right-8 z-50 flex flex-col gap-1.5 md:hidden"
      >
        <span className={`h-0.5 w-6 bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`h-0.5 w-6 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/90 text-xl backdrop-blur-md transition-all duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <a onClick={() => setIsOpen(false)} href="#hero" className="mobile-link">
          Home
        </a>

        <a onClick={() => setIsOpen(false)} href="#about" className="mobile-link">
          About
        </a>

        <a onClick={() => setIsOpen(false)} href="#experience" className="mobile-link">
          Experience
        </a>

        <a onClick={() => setIsOpen(false)} href="#projects" className="mobile-link">
          Projects
        </a>

        <a onClick={() => setIsOpen(false)} href="#contact" className="mobile-link">
          Contact
        </a>
      </div>
    </>
  );
};

export default Header;
