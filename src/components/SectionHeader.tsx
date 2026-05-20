const SectionHeader = ({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold tracking-widest text-transparent uppercase">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">{title}</h2>

      <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">{description}</p>
    </>
  );
};

export default SectionHeader;
