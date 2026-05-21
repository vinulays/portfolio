'use client';

import TechIcon from '@/components/TechIcon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import {
  siDocker,
  siFlutter,
  siGooglecloud,
  siGrafana,
  siJavascript,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrometheus,
  siReact,
  siReactquery,
  siRedux,
  siShadcnui,
  siSpring,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

const icons = [
  siReact,
  siNextdotjs,
  siTailwindcss,
  siShadcnui,
  siJavascript,
  siTypescript,
  siFlutter,
  siNodedotjs,
  siNestjs,
  siSpring,
  siPostgresql,
  siMongodb,
  siMysql,
  siSupabase,
  siGrafana,
  siPrometheus,
  siReactquery,
  siRedux,
  siDocker,
  siGooglecloud,
];

const TechStack = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: false,
      });
    },
    { scope: marqueeRef },
  );

  return (
    <div className="container">
      <div className="space-y-8 pt-20">
        <div className="text-muted-foreground">TECHNOLOGY STACK</div>

        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 z-10 h-full w-20 bg-linear-to-r from-background to-transparent" />

          <div className="absolute top-0 right-0 z-10 h-full w-20 bg-linear-to-l from-background to-transparent" />

          <div ref={marqueeRef} className="w-full overflow-hidden">
            <div className="marquee-track flex w-max gap-10 will-change-transform">
              {[...icons, ...icons].map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
