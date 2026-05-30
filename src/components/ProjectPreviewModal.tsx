import { Project } from '@/types';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { XIcon } from 'lucide-react';
import { useGSAP } from '@gsap/react';

interface ProjectPreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectPreviewModal({ project, isOpen, onClose }: ProjectPreviewModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [activeImage, setActiveImage] = useState(0);

  useGSAP(() => {
    if (!isOpen) {
      return;
    }

    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
      },
    );

    gsap.fromTo(
      modalRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: 'power3.out',
      },
    );
  }, [isOpen]);

  if (!isOpen || !project) {
    return null;
  }

  const gallery = project.gallery || [];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-card relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 cursor-pointer rounded-full bg-black/50 p-2 text-white transition hover:bg-black"
        >
          <XIcon className="h-4 w-4" />
        </button>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr]">
          {/* LEFT SIDE */}
          <div className="space-y-4 p-4">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
              {gallery[activeImage] && (
                <Image src={gallery[activeImage]} alt={project.title} fill className="object-contain" />
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border transition ${
                    activeImage === index ? 'border-white' : 'border-border opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={image} alt={`${project.title}-${project.slug}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col border-t border-border p-6 lg:border-t-0 lg:border-l">
            {project.company && (
              <div className="mb-3 w-fit rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                {project.company}
              </div>
            )}

            <h2 className="text-2xl font-semibold">{project.title}</h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.fullDescription}</p>

            {project.technologies?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-auto flex items-center gap-3 pt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-black transition hover:opacity-90"
                >
                  <span>Live Demo</span>
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              )}

              {project.gitHubUrl && (
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-muted"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreviewModal;
