import ProjectCarousel from '@/components/ProjectCarousel';
import ProjectFeatures from '@/components/ProjectDetails/ProjectFeatures';
import ProjectOverview from '@/components/ProjectDetails/ProjectOverview';
import ProjectResponsibilities from '@/components/ProjectDetails/ProjectResponsibilities';
import ProjectTechStack from '@/components/ProjectDetails/ProjectTechStack';
import { getAllProjects, getProjectBySlug } from '@/sanity/services/projectService';
import { Project } from '@/types';
import { notFound } from 'next/navigation';

interface ProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project: Project) => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata({ params }: ProjectDetailsProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Vinula Senarathne`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
    },
  };
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
