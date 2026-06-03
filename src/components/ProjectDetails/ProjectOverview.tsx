import { Project } from '@/types';
import SectionHeader from './SectionHeader';
import { PortableText } from 'next-sanity';

interface ProjectOverviewProps {
  project: Project;
}

function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="project-container">
      <SectionHeader title="Project Overview" />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="prose max-w-none text-base leading-relaxed text-muted-foreground prose-invert md:text-lg lg:col-span-2">
          <PortableText value={project.fullDescription} />
        </div>

        <div className="self-start rounded-2xl border border-muted-foreground/10 bg-muted/20 p-6">
          <SectionHeader title="Project Info" />

          <div className="space-y-4">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Role</span>
              <span>{project.role}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Duration</span>
              <span>{project.duration}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Company</span>
              <span>{project.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
