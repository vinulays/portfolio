"use client";

import { twMerge } from "tailwind-merge";

type TechIconProps = {
  icon: { path: string; hex: string; viewBox?: string };
  className?: string;
};

const TechIcon = ({ icon, className }: TechIconProps) => {
  return (
    <div className="fill-muted-foreground items-center">
      <svg
        role="img"
        viewBox={icon.viewBox ?? "0 0 24 24"}
        className={twMerge("w-12 h-12 transition duration-300", className)}
      >
        <path d={icon.path} />
      </svg>
    </div>
  );
};

export default TechIcon;
