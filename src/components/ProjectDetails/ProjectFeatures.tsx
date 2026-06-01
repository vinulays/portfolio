import { ProjectFeature } from '@/types';
import SectionHeader from './SectionHeader';

interface ProjectFeaturesProps {
  features: ProjectFeature[];
}

function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <div className="project-container">
      <SectionHeader title="Key Features" />

      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 p-6 transition-all duration-300 hover:border-white/20 hover:bg-muted/40"
          >
            <div className="absolute -right-2.5 -bottom-4 text-8xl text-muted-foreground/20">
              {String(index + 1).padStart(2, '0')}
            </div>

            <h3 className="mb-3 font-medium">{feature.title}</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectFeatures;
