const Hero = () => {
  return (
    <div id="hero" className="pt-24 md:pt-40">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 bg-gray-950">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="absolute inset-0 animate-ping-large rounded-full bg-green-500"></div>
            </div>

            <div className="text-sm font-medium text-muted-foreground">Available for new projects</div>
          </div>
        </div>

        <div className="mt-3 max-w-2xl space-y-2">
          <div className="space-y-0.5">
            <h1 className="text-3xl tracking-tight md:text-4xl">Hello, I&apos;m Vinula Senarathne</h1>

            <h1 className="text-3xl tracking-tight md:text-4xl">Software Engineer</h1>
          </div>

          <p className="tracking-tight text-muted-foreground md:text-lg">
            Transforming complex solutions into scalable and user-friendly applications.
          </p>
        </div>

        <div className="mt-8 items-center gap-4">
          <a href="mailto:vinula.senarathne@gmail.com">
            <button className="h-12 cursor-pointer items-center gap-2 rounded-lg border border-white bg-white px-4 text-black">
              <span className="font-semibold">Contact Me</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
