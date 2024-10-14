"use client";

import liveDocsPage from "@/assets/images/live-docs.png";
import convertifyPage from "@/assets/images/convertify.png";
import ecommerceApp from "@/assets/images/ecommerce.png";
import ecommerceAppMobile from "@/assets/images/ecommerce_mobile.png";
import coworkingSpaceApp from "@/assets/images/coworking_space.png";
import coworkingSpaceAppMobile from "@/assets/images/coworking_space._mobile.png";
import recyChampApp from "@/assets/images/recychamp.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
const portfolioProjects = [
  {
    id: 1,
    company: "Flutter",
    year: "2024",
    title: "Environment based mobile application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/vinulays/recychamp",
    image: recyChampApp,
    type: "mobile",
  },
  {
    id: 2,
    company: "Flutter",
    year: "2024",
    title: "E-commerce mobile application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/vinulays/flutter-ecommerce",
    image: ecommerceApp,
    mobileImage: ecommerceAppMobile,
    type: "mobile",
  },
  {
    id: 3,
    company: "Flutter",
    year: "2024",
    title: "Co-working space booking mobile application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: coworkingSpaceApp,
    mobileImage: coworkingSpaceAppMobile,
    type: "mobile",
  },
  {
    id: 4,
    company: "Next.js",
    year: "2024",
    title: "Realtime Collaborative Document Editing Platform",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://live-docs-vinula.vercel.app",
    image: liveDocsPage,
    type: "web",
  },
  {
    id: 5,
    company: "Next.js",
    year: "2024",
    title: "Client side video converter application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://convertify-vinulays.vercel.app",
    image: convertifyPage,
    type: "web",
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 items-center text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link !== "" ? project.link : undefined}>
                    <button
                      className={`bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 -mb-4 md:-mb-0 ${
                        !project.link && "cursor-not-allowed disabled"
                      }`}
                    >
                      <span>
                        {project.type === "web"
                          ? "Visit Live Site"
                          : project.link !== ""
                          ? "Visit GitHub Repository"
                          : "No link found :("}
                      </span>
                      {project.link && <ArrowUpRightIcon className="size-4" />}
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={
                      isMobile && project.mobileImage
                        ? project.mobileImage
                        : project.image
                    }
                    alt={project.title}
                    className={`lg:mb-0 lg:absolute lg:max-w-none ${
                      project.type === "web"
                        ? "lg:scale-105 mt-8 mb-8 lg:mt-6 lg:h-full lg:w-auto"
                        : "lg:scale-125 mt-1 mb-0 lg:mt-12 lg:h-auto lg:w-full"
                    }`}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
