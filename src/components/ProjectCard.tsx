import { Project } from '@/types';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="bg-card cursor-pointer space-y-4 rounded-xl border border-muted p-4 transition-colors hover:bg-muted/50"
      onClick={onClick}
    >
      <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-muted">
        {project.company && (
          <div className="absolute top-3 right-3 z-10 rounded-md bg-black/40 px-2 py-1 text-[10px] text-white backdrop-blur-md">
            {project.company}
          </div>
        )}

        {project.coverImage ? (
          <Image src={project.coverImage} alt={project.title} fill className="object-contain p-4" />
        ) : (
          <div className="h-full w-full" />
        )}
      </div>

      <div className="space-y-2">
        <div className="text-base font-medium">{project.title}</div>

        <div className="text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</div>
      </div>

      {project.technologies?.length ? (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech.key} className="rounded-md bg-muted px-2 py-1 text-[10px] text-muted-foreground">
              {tech.name}
            </span>
          ))}
        </div>
      ) : null}

      {(project.liveUrl || project.gitHubUrl) && (
        <div className="flex items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-xs text-muted transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Live Demo</span>

              <FiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}

          {project.gitHubUrl && (
            <a
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-white transition-colors hover:bg-muted hover:text-foreground"
            >
              <FaGithub className="h-3.5 w-3.5" />

              <span>GitHub</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
