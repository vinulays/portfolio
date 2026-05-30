'use client';

import ProjectCarousel from '@/components/ProjectCarousel ';
import { portfolioProjects } from '@/constants/projects';
import { Project } from '@/types';
import { useParams } from 'next/navigation';

function ProjectDetails() {
  const params = useParams();

  const { slug } = params;

  const project = portfolioProjects.find((project: Project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectCarousel project={project} />
    </div>
  );
}

export default ProjectDetails;
