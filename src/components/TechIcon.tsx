'use client';

import { twMerge } from 'tailwind-merge';

type TechIconProps = {
  icon: { path: string; hex: string; viewBox?: string };
  className?: string;
};

const TechIcon = ({ icon, className }: TechIconProps) => {
  return (
    <div className="items-center fill-muted-foreground">
      <svg
        role="img"
        viewBox={icon.viewBox ?? '0 0 24 24'}
        className={twMerge('h-12 w-12 transition duration-300', className)}
      >
        <path d={icon.path} />
      </svg>
    </div>
  );
};

export default TechIcon;
