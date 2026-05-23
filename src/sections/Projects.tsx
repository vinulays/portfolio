'use client';

import { portfolioProjects } from '@/constants/projects';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="projects" className="py-16 lg:py-24" ref={sectionRef}>
      <div className="container space-y-8">
        <div className="flex items-center justify-between text-muted-foreground">
          <div>PROJECTS</div>

          <Link href="/projects" className="transition-colors hover:text-white">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects
            .filter((project: Project) => project.isFeatured)
            .map((project: Project) => (
              <div key={project.slug} className="project-card">
                <ProjectCard project={project} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
