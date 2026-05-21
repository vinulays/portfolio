'use client';

import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon, CheckCircleIcon } from 'lucide-react';
import { portfolioProjects } from '@/constants/projects';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="py-16 pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold tracking-widest text-transparent uppercase">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">{project.title}</h3>

                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />

                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex items-center gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link !== '' ? project.link : undefined}>
                    <button
                      className={`mt-8 -mb-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:mb-0 md:w-auto ${
                        !project.link && 'disabled cursor-not-allowed'
                      }`}
                    >
                      <span>
                        {project.type === 'web'
                          ? 'Visit Live Site'
                          : project.link !== ''
                            ? 'Visit GitHub Repository'
                            : 'No link found'}
                      </span>

                      {project.link && <ArrowUpRightIcon className="size-4" />}
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={isMobile && project.mobileImage ? project.mobileImage : project.image}
                    alt={project.title}
                    className={`lg:absolute lg:mb-0 lg:max-w-none ${
                      project.type === 'web'
                        ? 'mt-8 mb-8 lg:mt-6 lg:h-full lg:w-auto lg:scale-105'
                        : 'mt-1 mb-0 lg:mt-12 lg:h-auto lg:w-full lg:scale-125'
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
