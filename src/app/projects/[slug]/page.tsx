'use client';

import ProjectCarousel from '@/components/ProjectCarousel';
import ProjectFeatures from '@/components/ProjectDetails/ProjectFeatures';
import ProjectOverview from '@/components/ProjectDetails/ProjectOverview';
import ProjectResponsibilities from '@/components/ProjectDetails/ProjectResponsibilities';
import ProjectTechStack from '@/components/ProjectDetails/ProjectTechStack';
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
    <div className="space-y-14 pb-8">
      <ProjectCarousel project={project} />

      <ProjectOverview project={project} />

      {project.features && project.features.length > 0 && <ProjectFeatures features={project.features} />}

      {project.responsibilities && project.responsibilities.length > 0 && (
        <ProjectResponsibilities responsibilities={project.responsibilities} />
      )}

      {project.technologies && project.technologies.length > 0 && (
        <ProjectTechStack technologies={project.technologies} />
      )}
    </div>
  );
}

export default ProjectDetails;
