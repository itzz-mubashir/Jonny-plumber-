import React from 'react';
import { Phone, AlertCircle, ShieldAlert, MapPin, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-[#151B19] text-white py-14 sm:py-18 relative overflow-hidden border-y border-[#2B3833]" id="emergency">
      {/* Subtle orange accent glow & mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E87524]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#70CDA5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1C2522] rounded-2xl p-8 sm:p-12 border border-[#2B3833] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E87524]/20 border border-[#E87524]/40 text-[#FFA05E] font-sans text-xs font-semibold uppercase tracking-[0.2em]">
                <AlertCircle className="w-4 h-4 text-[#E87524]" />
                <span>Urgent Plumbing Support</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                Plumbing Emergency?
              </h2>

              <p className="font-serif text-lg sm:text-xl text-[#E6E9E6]/85 max-w-2xl leading-relaxed">
                Need help with an urgent plumbing problem? Get in touch and we'll help you find the right solution promptly and safely.
              </p>

              <div className="flex flex-wrap items-center gap-4 font-sans text-xs text-zinc-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#E87524]" />
                  Burst pipes, severe leaks &amp; overflows
                </span>
                <span className="text-zinc-600">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#70CDA5]" />
                  Direct response in Derby &amp; surrounding areas
                </span>
              </div>
            </div>

            {/* Right Action Column: Direct Call CTA */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-sans inline-flex items-center justify-center gap-2.5 bg-[#E87524] hover:bg-[#d4661a] text-white px-7 py-4 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/20 transition-all duration-200 active:scale-[0.98] text-center"
                id="emergency-call-cta"
              >
                <Phone className="w-4 h-4 shrink-0 animate-bounce" />
                <span>CALL NOW: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="text-center font-sans">
                <span className="text-[11px] text-zinc-400 font-medium">
                  Direct engineer telephone line • No call centres
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
