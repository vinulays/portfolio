'use client';

import ProjectCard from '@/components/ProjectCard';
import { portfolioProjects } from '@/constants/projects';
import { Project } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

function ProjectsPage() {
  const router = useRouter();

  const navigateToProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <main className="relative py-14 lg:py-16">
      <Link
        href="/"
        className="absolute top-6 left-6 hidden items-center gap-2 text-muted-foreground transition-colors hover:text-white lg:flex"
      >
        <FaChevronLeft className="h-3 w-3" /> Back Home
      </Link>

      <div className="container space-y-12">
        <div className="space-y-4">
          <p className="text-sm tracking-widest text-muted-foreground">PROJECTS</p>

          <h1 className="text-4xl font-semibold lg:text-6xl">All Projects</h1>

          <p className="max-w-2xl text-muted-foreground">
            A collection of client projects, personal projects, and experiments I&apos;ve built using modern
            technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project: Project) => (
            <ProjectCard key={project.slug} project={project} onClick={() => navigateToProject(project.slug)} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
