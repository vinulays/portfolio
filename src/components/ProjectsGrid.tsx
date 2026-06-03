'use client';

import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Project } from '@/types';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const navigateToProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  useGSAP(
    () => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,

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
    <div ref={sectionRef} className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <div key={project._id} className="project-card">
          <ProjectCard project={project} onClick={() => navigateToProject(project.slug.current)} />
        </div>
      ))}
    </div>
  );
}
