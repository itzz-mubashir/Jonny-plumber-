import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import { COVERAGE_AREAS, BUSINESS_INFO } from '../data/businessData';

interface AreasCoveredProps {
  onSelectAreaForEnquiry?: (areaName: string) => void;
}

export const AreasCovered: React.FC<AreasCoveredProps> = ({ onSelectAreaForEnquiry }) => {
  return (
    <section className="py-20 bg-[#F7F8F5] border-b border-[#E6E9E6]" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7F1] text-[#256E4E] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#70CDA5]" />
            <span>Derbyshire Coverage</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#151B19] tracking-tight">
            Serving Your Local Area
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#151B19]/80 mt-3 leading-relaxed">
            Based on Lewis St, Derby (DE23 8BY), providing prompt plumbing, heating, and gas services across Derby and surrounding Derbyshire communities.
          </p>
        </div>

        {/* Location Pills Grid */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E6E9E6] shadow-xs max-w-5xl mx-auto">
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 font-sans">
            {COVERAGE_AREAS.map((area, idx) => (
              <div
                key={area.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F7F8F5] border border-[#E6E9E6] hover:border-[#70CDA5] hover:bg-white text-xs sm:text-sm font-semibold text-[#151B19] transition-all shadow-2xs group"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E87524] group-hover:scale-110 transition-transform" />
                <span>{area.name}</span>
                {area.postcode && (
                  <span className="text-[10px] text-zinc-500 font-mono bg-white px-1.5 py-0.5 rounded border border-[#E6E9E6]">
                    {area.postcode}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Simple Editorial Text Format as requested in prompt */}
          <div className="mt-8 pt-8 border-t border-[#E6E9E6] text-center">
            <p className="font-serif text-base sm:text-lg text-[#151B19]/80 leading-relaxed">
              <span className="font-semibold text-[#151B19]">Key service districts: </span>
              {COVERAGE_AREAS.map((a, i) => (
                <span key={a.name}>
                  "{a.name}"{i < COVERAGE_AREAS.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>

          {/* Quick confirmation */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-xs text-zinc-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#70CDA5]" />
              <span>Free, straightforward quotations for local residents</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-[#E87524]" />
              <span>Prompt attendance for heating &amp; plumbing issues</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
