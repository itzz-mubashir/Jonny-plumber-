import React from 'react';
import { ShieldCheck, Check, Phone, ArrowRight, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const genuineQualities = [
    'Gas Safe Registered engineer carrying out all work to strict UK safety standards',
    'Personal service directly with the engineer from initial enquiry to project finish',
    'Clean, respectful working practice with floor protection used in every home',
    'Transparent advice and straightforward communication on plumbing and heating jobs',
    'Specialist expertise in modern bathroom suites, walk-in wet rooms, and boiler maintenance',
  ];

  return (
    <section
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-[#151B19] border-b border-[#242E2B]"
      id="about"
    >
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=85"
          alt="Jonny Eagle Luxury Bathroom and Plumbing Workmanship"
          className="w-full h-full object-cover object-[75%_center] sm:object-[center_center] md:object-[right_center] filter brightness-95"
          loading="lazy"
        />

        {/* Responsive Scrim: preserves right-side image clarity while providing text contrast on the left */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#151B19]/95 via-[#151B19]/80 to-transparent" />
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#151B19]/85 via-[#151B19]/75 to-[#151B19]/90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2B3833_1px,transparent_1px),linear-gradient(to_bottom,#2B3833_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Eyebrow Badges directly on background */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2522]/90 backdrop-blur-md text-[#70CDA5] font-sans text-xs font-semibold uppercase tracking-[0.2em] border border-[#2B3833] shadow-md">
              <UserCheck className="w-3.5 h-3.5 text-[#E87524]" />
              <span>About Jonny Eagle</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2522]/90 backdrop-blur-md text-white font-sans text-xs font-semibold border border-[#2B3833] shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#70CDA5]" />
              <span>Gas Safe Registered</span>
            </div>
          </div>

          {/* Main Section Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.12] drop-shadow-xs">
            Professional Plumbing, Heating &amp; Gas Engineering in Derby
          </h2>

          {/* Editorial Paragraphs directly on the background */}
          <p className="font-serif text-lg sm:text-xl text-zinc-100 leading-relaxed font-normal drop-shadow-xs">
            Jonny Eagle Plumbing &amp; Heating provides dependable, high-quality plumbing, heating, and gas engineering services for homeowners and landlords in Derby and the surrounding communities.
          </p>

          <p className="font-serif text-base sm:text-lg text-zinc-200/90 leading-relaxed font-normal drop-shadow-xs">
            Whether you require a complete luxury bathroom or wet room renovation, prompt emergency pipe repair, annual Gas Safe boiler servicing, or a landlord CP12 safety inspection, every job is approached with the same high standard of precision, neatness, and clear communication.
          </p>

          {/* List of Genuine Qualities rendered directly without cards */}
          <div className="space-y-3 pt-2">
            {genuineQualities.map((quality, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#70CDA5]/25 flex items-center justify-center shrink-0 mt-0.5 border border-[#70CDA5]/50">
                  <Check className="w-3.5 h-3.5 text-[#70CDA5]" />
                </div>
                <span className="font-serif text-base sm:text-lg text-white/95 leading-snug drop-shadow-xs">
                  {quality}
                </span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 font-sans">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E87524] hover:bg-[#d4661a] text-white px-7 py-4 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-[0.98]"
              id="about-call-cta"
            >
              <Phone className="w-4 h-4" />
              <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-7 py-4 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider border border-white/25 shadow-sm transition-all duration-200 cursor-pointer"
              id="about-contact-cta"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 text-[#70CDA5]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
