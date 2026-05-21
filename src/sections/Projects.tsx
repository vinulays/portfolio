'use client';

import { portfolioProjects } from '@/constants/projects';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24">
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
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
