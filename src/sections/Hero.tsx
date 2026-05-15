const Hero = () => {
  return (
    <div className="py-24 md:py-40">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="bg-gray-950 flex items-center gap-3">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 animate-ping-large rounded-full"></div>
            </div>

            <div className="text-sm text-muted-foreground font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-2xl space-y-2 mt-3">
          <div className="space-y-0.5">
            <h1 className="text-3xl md:text-4xl tracking-tight">
              Halo, I&apos;m Vinula Senarathne
            </h1>

            <h1 className="text-3xl md:text-4xl tracking-tight">
              Software Engineer
            </h1>
          </div>

          <p className="text-muted-foreground md:text-lg tracking-tight">
            Transforming complex solutions into scalable and user-friendly
            applications.
          </p>
        </div>

        <div className="items-center mt-8 gap-4">
          <a href="mailto:vinula.senarathne@gmail.com">
            <button className="inline-flex items-center cursor-pointer gap-2 border border-white text-black bg-white px-6 h-12 rounded-lg">
              <span className="font-semibold">Contact Me</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
