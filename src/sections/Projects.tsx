import Link from 'next/link';
import { getFeaturedProjects } from '@/sanity/services/projectService';
import ProjectsGrid from '@/components/ProjectsGrid';

const Projects = async () => {
  const projects = await getFeaturedProjects();

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container space-y-8">
        <div className="flex items-center justify-between text-muted-foreground">
          <div>PROJECTS</div>

          <Link href="/projects" className="transition-colors hover:text-white">
            View All Projects
          </Link>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
