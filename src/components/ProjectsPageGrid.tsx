'use client';

import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import { useRouter } from 'next/navigation';

interface ProjectsPageGridProps {
  projects: Project[];
}

export default function ProjectsPageGrid({ projects }: ProjectsPageGridProps) {
  const router = useRouter();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onClick={() => router.push(`/projects/${project.slug.current}`)}
        />
      ))}
    </div>
  );
}
