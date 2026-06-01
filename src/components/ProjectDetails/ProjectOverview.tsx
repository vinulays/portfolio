import { Project } from '@/types';
import SectionHeader from './SectionHeader';

interface ProjectOverviewProps {
  project: Project;
}

function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="project-container">
      <SectionHeader title="Project Overview" />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{project.fullDescription}</p>
        </div>

        <div className="self-center rounded-2xl border border-muted-foreground/10 bg-muted/20 p-6">
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
