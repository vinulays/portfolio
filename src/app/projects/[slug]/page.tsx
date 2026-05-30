'use client';

import Carousel from '@/components/Carousel ';
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
      <Carousel project={project} />
    </div>
  );
}

export default ProjectDetails;
