"use client";

import Signature from "@/components/Signature";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="flex justify-between pt-20 text-muted-foreground">
          <div>ABOUT ME</div>

          <div className="flex flex-col gap-3 max-w-xl">
            <div>
              I&apos;m a software engineer passionate about building modern,
              scalable, and user-focused applications. My experience mainly
              revolves around full-stack web and mobile development using
              technologies such as Next.js, React, Tailwind CSS, Flutter,
              NestJS, and PostgreSQL. I enjoy transforming complex business
              requirements into clean, efficient, and intuitive digital
              solutions with strong attention to performance and user
              experience.
            </div>

            <div>
              Over time, I&apos;ve worked on real-world client and enterprise
              projects, gaining hands-on experience in frontend architecture,
              backend API development, authentication systems, database design,
              and responsive UI implementation. I&apos;m especially interested
              in building impactful software products, exploring cloud and AI
              technologies, and continuously improving my skills through
              practical development, collaboration, and problem-solving.
            </div>

            <div className="space-y-2.5 mt-3">
              <Signature />

              <div>Vinula Senarathne</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
