'use client';

import { useProjectCarousel } from '@/hooks/useProjectCarousel';
import { Project } from '@/types';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectCarouselProps {
  project: Project;
}

function ProjectCarousel({ project }: ProjectCarouselProps) {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext, scrollTo } = useProjectCarousel();

  const galleryLength = project.gallery ? project.gallery.length : 0;

  if (!project.gallery || galleryLength === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="space-y-4">
      <div ref={emblaRef} className="relative overflow-hidden">
        <div className="flex">
          {project.gallery.map((image) => (
            <div key={image} className="relative h-[70vh] w-full shrink-0">
              <Image
                src={image}
                alt=""
                fill
                className="bg-white object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 max-w-3xl space-y-3">
          {project.company && (
            <span className="inline-block rounded-md bg-white/10 px-2 py-1 text-[10px] backdrop-blur">
              {project.company}
            </span>
          )}

          <h2 className="text-2xl font-semibold md:text-3xl">{project.title}</h2>

          <p className="text-sm text-white/70">{project.shortDescription}</p>

          {(project.liveUrl || project.gitHubUrl) && (
            <div className="flex items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="rounded-lg bg-white px-3 py-1.5 text-xs text-black transition hover:opacity-90"
                >
                  Live Demo
                </a>
              )}

              {project.gitHubUrl && (
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  className="rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>

        {galleryLength > 1 && (
          <>
            <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform items-center gap-2 md:flex">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ease-out ${
                    selectedIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <div className="absolute right-6 bottom-6 hidden items-center gap-3 md:flex">
              <button
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className="cursor-pointer rounded-full bg-white/20 p-4 backdrop-blur transition-colors hover:bg-white/30 disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white/20"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={scrollNext}
                disabled={selectedIndex === galleryLength - 1}
                className="cursor-pointer rounded-full bg-white/20 p-4 backdrop-blur transition-colors hover:bg-white/30 disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white/20"
              >
                <FaChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCarousel;
