import SectionHeader from './SectionHeader';

interface ProjectResponsibilitiesProps {
  responsibilities: string[];
}

function ProjectResponsibilities({ responsibilities }: ProjectResponsibilitiesProps) {
  return (
    <div className="project-container">
      <SectionHeader title="Responsibilities" />

      <ul className="space-y-4">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />

            <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectResponsibilities;
