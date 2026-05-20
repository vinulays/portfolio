import TechIcon from '@/components/TechIcon';
import { experiences } from '@/constants/experiences';

const Experience = () => {
  return (
    <div id="experience" className="container">
      <div className="space-y-8 pt-20">
        <div className="text-muted-foreground">EXPERIENCE</div>

        <div className="relative">
          <div className="absolute top-0 left-2 h-full w-px bg-white" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              return (
                <div key={index} className="relative flex items-start justify-between gap-8">
                  <div className="relative z-10">
                    <div className="border-border flex h-4 w-4 items-center justify-center rounded-full border bg-background"></div>
                  </div>

                  <div className="max-w-2xl space-y-8">
                    <div className="space-y-3">
                      <div className="text-muted-foreground">{exp.period}</div>

                      <div className="text-xl">
                        {exp.role} @ {exp.company}
                      </div>

                      <ul className="list-disc space-y-1 pl-5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-muted-foreground">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-x-10 gap-y-6">
                      {exp.techStack.map((tech, idx) => {
                        return (
                          <div key={idx} className="flex items-center gap-3">
                            <TechIcon icon={tech.icon} className="h-5 w-5" />

                            <span className="text-muted-foreground">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
