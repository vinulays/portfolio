'use client';

import Signature from '@/components/Signature';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 pt-20 text-muted-foreground lg:flex-row lg:gap-0">
          <div>ABOUT ME</div>

          <div className="flex max-w-full flex-col gap-3 lg:max-w-xl">
            <div>
              I&apos;m a software engineer passionate about building modern, scalable, and user-focused applications. My
              experience mainly revolves around full-stack web and mobile development using technologies such as
              Next.js, React, Tailwind CSS, Flutter, NestJS, and PostgreSQL. I enjoy transforming complex business
              requirements into clean, efficient, and intuitive digital solutions with strong attention to performance
              and user experience.
            </div>

            <div>
              Over time, I&apos;ve worked on real-world client and enterprise projects, gaining hands-on experience in
              frontend architecture, backend API development, authentication systems, database design, and responsive UI
              implementation. I&apos;m especially interested in building impactful software products, exploring cloud
              and AI technologies, and continuously improving my skills through practical development, collaboration,
              and problem-solving.
            </div>

            <div className="mt-3 space-y-2.5">
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
