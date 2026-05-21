import { Project } from '@/types';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card cursor-pointer space-y-4 rounded-xl border border-muted p-4 transition-colors hover:bg-muted/50">
      <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-muted">
        {project.coverImage ? (
          <Image src={project.coverImage} alt={project.title} fill className="object-contain p-4" />
        ) : (
          <div className="h-full w-full" />
        )}
      </div>

      <div className="space-y-2">
        <div>{project.title}</div>

        <div className="text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
