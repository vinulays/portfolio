import { techIcons } from '@/constants/technologies';
import SectionHeader from './SectionHeader';
import { ProjectTechnology } from '@/types';

interface ProjectTechStackProps {
  technologies: ProjectTechnology[];
}

function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  return (
    <div className="project-container">
      <SectionHeader title="Technologies" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((tech) => (
          <div key={tech.key} className="group flex items-center gap-3">
            <span className="text-lg text-white/70 group-hover:text-white">{techIcons[tech.key] ?? ''}</span>

            <span className="text-sm text-muted-foreground group-hover:text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTechStack;
