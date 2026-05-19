"use client";

import TechIcon from "@/components/TechIcon";
import gsap from "gsap";
import { useEffect, useRef } from "react";

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
} from "simple-icons";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container">
      <div className="pt-20 space-y-8">
        <div className="text-muted-foreground">TECHNOLOGY STACK</div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-background to-transparent z-10" />

          <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-background to-transparent z-10" />

          <div ref={marqueeRef} className="overflow-hidden w-full">
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
