import ProjectCarousel from '@/components/ProjectCarousel';
import ProjectFeatures from '@/components/ProjectDetails/ProjectFeatures';
import ProjectOverview from '@/components/ProjectDetails/ProjectOverview';
import ProjectResponsibilities from '@/components/ProjectDetails/ProjectResponsibilities';
import ProjectTechStack from '@/components/ProjectDetails/ProjectTechStack';
import { getProjectBySlug } from '@/sanity/services/projectService';
import { notFound } from 'next/navigation';

interface ProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
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
