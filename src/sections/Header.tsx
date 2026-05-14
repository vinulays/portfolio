"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Vinula Senarathne",
              url: "https://vinulasenarathne.vercel.app/",
              image: "",
              sameAs: [
                "https://www.linkedin.com/in/vinula-senarathne",
                "https://github.com/vinulays",
                "https://www.facebook.com/vinulasen",
              ],
              jobTitle: "Full Stack Developer",
            }),
          }}
        />
      </Head>

      <div className="flex justify-center items-center fixed top-3 w-full z-10">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
          <a
            href="#"
            className={`nav-item ${
              activeSection === "home"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            } `}
          >
            Home
          </a>

          <a
            href="#projects"
            className={`nav-item ${
              activeSection === "projects"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            } `}
          >
            Projects
          </a>

          <a
            href="#about"
            className={`nav-item ${
              activeSection === "about"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            } `}
          >
            About
          </a>

          <a
            href="#contact"
            className={`nav-item ${
              activeSection === "contact"
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
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
