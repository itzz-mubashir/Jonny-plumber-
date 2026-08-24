import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Sparkles, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const trustPoints = [
    { title: 'Reliable Local Service', desc: 'Derby & Derbyshire' },
    { title: 'Quality Workmanship', desc: 'Neat & built to last' },
    { title: 'Professional Service', desc: 'Clear communication' },
    { title: 'Emergency Plumbing', desc: 'Prompt fault diagnosis' },
  ];

  return (
    <section
      className="relative min-h-[580px] lg:min-h-[640px] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden flex items-center bg-[#151B19]"
      id="hero"
    >
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85"
          alt="Jonny Eagle Luxury Plumbing and Heating"
          className="w-full h-full object-cover object-[70%_center] sm:object-[center_center] md:object-[right_center] filter brightness-100"
          loading="eager"
          fetchPriority="high"
        />

        {/* High-Contrast Directional Overlays: tailored for both mobile and desktop screen proportions */}
        {/* Desktop horizontal gradient (keeps right half of image bright & vibrant) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#151B19]/95 via-[#151B19]/85 to-[#151B19]/30" />
        
        {/* Mobile vertical gradient (allows luxury plumbing fixture to show clearly across mobile header) */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#151B19]/70 via-[#151B19]/85 to-[#151B19]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151B19] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2B3833_1px,transparent_1px),linear-gradient(to_bottom,#2B3833_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col items-start text-left space-y-6">
          
          {/* Eyebrow badge & Gas Safe credentials */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2522]/90 backdrop-blur-md text-[#70CDA5] font-sans text-xs font-semibold tracking-[0.22em] uppercase border border-[#2B3833] shadow-md"
              id="hero-eyebrow-badge"
            >
              <span className="w-2 h-2 rounded-full bg-[#70CDA5] animate-pulse" />
              <span>{BUSINESS_INFO.heroEyebrow}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E87524]/20 backdrop-blur-md text-[#FFA05E] border border-[#E87524]/40 text-xs font-sans font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E87524]" />
              <span>Gas Safe Certified</span>
            </div>
          </div>

          {/* Main Headline - Cormorant Garamond SemiBold & Italic */}
          <h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.08]"
            id="hero-main-heading"
          >
            Keep Your Home <br className="hidden sm:inline" />
            <span className="italic">
              <span className="text-[#70CDA5]">Flowing</span>{' '}
              <span className="text-white/90 font-normal">&amp;</span>{' '}
              <span className="text-[#E87524]">Warm</span>
            </span>
          </h1>

          {/* Supporting Copy - Editorial Cormorant Garamond */}
          <p className="font-serif text-xl sm:text-2xl text-[#E6E9E6]/90 max-w-2xl leading-relaxed font-normal">
            {BUSINESS_INFO.heroSupportingCopy}
          </p>

          {/* Primary & Secondary CTAs - Modern Manrope UI */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="font-sans inline-flex items-center justify-center gap-2.5 bg-[#E87524] hover:bg-[#d4661a] text-white px-7 py-4 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-[0.98]"
              id="hero-primary-call-cta"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>CALL NOW: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onContactClick}
              className="font-sans inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-7 py-4 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider border border-white/25 shadow-sm transition-all duration-200 cursor-pointer"
              id="hero-secondary-enquiry-cta"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 text-[#70CDA5]" />
            </button>
          </div>

          {/* Verified Trust Points Bar */}
          <div className="pt-6 border-t border-[#2B3833]/90 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex flex-col bg-[#151B19]/80 backdrop-blur-md p-3.5 rounded-xl border border-[#2B3833] shadow-md hover:border-[#70CDA5]/40 transition-colors"
                >
                  <div className="flex items-center gap-1.5 font-serif text-sm sm:text-base font-semibold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#70CDA5] shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <span className="font-sans text-[11px] text-[#E6E9E6]/75 mt-0.5 pl-5">{point.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
