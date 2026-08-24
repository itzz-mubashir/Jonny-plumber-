import React, { useState } from 'react';
import { Camera, Eye, MapPin, Sparkles, Layers } from 'lucide-react';
import { PROJECTS_GALLERY } from '../data/businessData';
import { ProjectItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Bathrooms', 'Wet Rooms', 'Heating'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-[#F7F8F5] border-b border-[#E6E9E6]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7F1] text-[#256E4E] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Camera className="w-3.5 h-3.5 text-[#70CDA5]" />
              <span>Real Workmanship</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#151B19] tracking-tight">
              Recent Work
            </h2>
            <p className="font-serif text-lg sm:text-xl text-[#151B19]/80 mt-2 leading-relaxed">
              Explore completed bespoke bathroom transformations, walk-in wet rooms, modern tiling, and Gas Safe heating installations in Derby.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#151B19] text-white shadow-xs'
                    : 'bg-white text-[#151B19]/70 hover:text-[#151B19] border border-[#E6E9E6]'
                }`}
              >
                {cat === 'All' ? 'All Work' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with details underneath images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E6E9E6] shadow-2xs hover:shadow-xl hover:border-[#BFC6BE] transition-all duration-300 cursor-pointer"
                id={`gallery-item-${project.id}`}
              >
                {/* Image Container - Clean & Unobstructed */}
                <div className="overflow-hidden relative h-64 sm:h-72 w-full bg-[#151B19]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="bg-[#151B19]/85 backdrop-blur-md text-[#70CDA5] px-3 py-1 rounded-lg font-sans text-xs font-semibold border border-[#2B3833] shadow-xs">
                      {project.category}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-white/90 text-[#151B19] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Eye className="w-4 h-4 text-[#151B19]" />
                    </div>
                  </div>
                </div>

                {/* Details / Text Container Underneath the Image */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Location & Category Tag */}
                    <div className="flex items-center justify-between gap-2 mb-2 font-sans">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E87524]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#256E4E] bg-[#EAF7F1] px-2.5 py-0.5 rounded-full border border-[#C5EBDA]">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#151B19] group-hover:text-[#E87524] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="font-serif text-sm sm:text-base text-[#151B19]/75 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights tags */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="font-sans text-[11px] bg-[#F7F8F5] text-[#151B19]/80 border border-[#E6E9E6] px-2.5 py-1 rounded-md font-medium"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-4 mt-4 border-t border-[#F0F2EE] flex items-center justify-between font-sans text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#151B19]/60 group-hover:text-[#E87524] transition-colors">
                      View Full Details
                    </span>
                    <span className="text-[#E87524] font-bold group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
};
