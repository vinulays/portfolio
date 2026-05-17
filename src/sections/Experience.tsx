import TechIcon from "@/components/TechIcon";
import { experiences } from "@/constants/experiences";

const Experience = () => {
  return (
    <div id="experience" className="container">
      <div className="pt-20 space-y-8">
        <div className="text-muted-foreground">EXPERIENCE</div>

        <div className="relative">
          <div className="absolute left-2 top-0 h-full w-px bg-white" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-start gap-8 justify-between"
                >
                  <div className="relative z-10">
                    <div className="h-4 w-4 rounded-full border border-border bg-background flex items-center justify-center"></div>
                  </div>

                  <div className="space-y-8 max-w-2xl">
                    <div className="space-y-3">
                      <div className="text-muted-foreground">{exp.period}</div>

                      <div className=" text-xl">
                        {exp.role} @ {exp.company}
                      </div>

                      <ul className="list-disc pl-5 space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className=" text-muted-foreground">
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

                            <span className="text-muted-foreground">
                              {tech.name}
                            </span>
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
