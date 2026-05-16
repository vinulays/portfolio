"use client";

type TechIconProps = {
  icon: { path: string; hex: string };
};

const TechIcon = ({ icon }: TechIconProps) => {
  return (
    <div className="fill-muted-foreground items-center">
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-12 h-12 transition duration-300"
      >
        <path d={icon.path} />
      </svg>
    </div>
  );
};

export default TechIcon;
