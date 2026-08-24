import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  HeartHandshake, 
  Sparkles,
  Award,
  ThumbsUp
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#70CDA5]' };
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#151B19] text-white relative overflow-hidden" id="why-us">
      {/* Background subtle geometry */}
      <div className="absolute inset-0 bg-[radial-gradient(#242E2B_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202A27] text-[#70CDA5] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3 border border-[#2B3833]">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>The Jonny Eagle Standard</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Why Choose Jonny Eagle?
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#E6E9E6]/80 mt-4 leading-relaxed font-normal">
            Trusted by homeowners and landlords across Derby for high quality plumbing, heating repairs, and Gas Safe compliance.
          </p>
        </div>

        {/* Grid of Verified Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#1C2522] p-7 rounded-2xl border border-[#2A3732] hover:border-[#70CDA5]/40 transition-all duration-300 group flex flex-col justify-between"
              id={`why-card-${index}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#24302C] border border-[#2E3D37] flex items-center justify-center mb-5 group-hover:bg-[#70CDA5]/10 group-hover:border-[#70CDA5]/30 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-[#70CDA5] transition-colors">
                  {item.title}
                </h3>
                <p className="font-serif text-base text-[#E6E9E6]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#24302C] flex items-center justify-between font-sans text-xs text-[#70CDA5]/80 font-medium tracking-wide">
                <span>Verified Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#70CDA5]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-12 p-6 rounded-xl bg-[#1C2522]/60 border border-[#2A3732] text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-xs text-zinc-300">
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#70CDA5]" />
            Official Gas Safe Register Certified
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#E87524]" />
            Based locally on Lewis St, Derby DE23
          </span>
        </div>

      </div>
    </section>
  );
};
