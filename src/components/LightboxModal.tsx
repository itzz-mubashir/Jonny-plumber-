import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface LightboxModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(projects[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      id="gallery-lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20"
        aria-label="Close Lightbox"
        id="lightbox-close-button"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20"
        aria-label="Previous image"
        id="lightbox-prev-button"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20"
        aria-label="Next image"
        id="lightbox-next-button"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal Card */}
      <div
        className="max-w-4xl w-full bg-[#151B19] rounded-2xl overflow-hidden border border-[#2B3833] shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Display */}
        <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px] md:min-h-[460px]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover max-h-[55vh] md:max-h-[80vh]"
          />
          <div className="absolute top-3 left-3 bg-[#151B19]/80 backdrop-blur-md px-3 py-1 rounded-md font-sans text-[11px] font-semibold text-[#70CDA5] border border-[#2B3833]">
            {project.category}
          </div>
        </div>

        {/* Project Details Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#1C2522] text-white">
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 font-sans text-xs text-[#E87524] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-white tracking-tight leading-snug" id="lightbox-title">
              {project.title}
            </h3>

            <p className="font-serif text-base text-[#E6E9E6]/85 leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="pt-2">
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#70CDA5] mb-2">
                Project Key Features
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-serif text-sm text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#70CDA5] shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#2B3833] flex items-center justify-between font-sans text-xs text-zinc-400">
            <span>Image {currentIndex + 1} of {projects.length}</span>
            <span className="text-[#70CDA5] font-medium">Jonny Eagle Workmanship</span>
          </div>
        </div>
      </div>
    </div>
  );
};
