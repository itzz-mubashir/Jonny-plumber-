import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151B19] text-[#E6E9E6] pt-16 pb-12 border-t border-[#242E2B] font-sans" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#242E2B]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="font-serif text-base text-zinc-300 leading-relaxed max-w-sm">
              Professional, Gas Safe registered plumbing, heating and gas engineering services based on Lewis St, Derby (DE23 8BY). Dedicated to quality workmanship and honest local service.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1C2522] border border-[#2B3833] text-xs text-[#70CDA5] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#70CDA5]" />
              <span>Gas Safe Registered Engineer</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li><a href="#hero" className="hover:text-[#E87524] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#E87524] transition-colors">Plumbing</a></li>
              <li><a href="#services" className="hover:text-[#E87524] transition-colors">Gas &amp; Heating</a></li>
              <li><a href="#why-us" className="hover:text-[#E87524] transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-[#E87524] transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-[#E87524] transition-colors">Recent Work</a></li>
              <li><a href="#reviews" className="hover:text-[#E87524] transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#E87524] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li><a href="#services" className="hover:text-[#70CDA5] transition-colors">Bathroom Installation</a></li>
              <li><a href="#services" className="hover:text-[#70CDA5] transition-colors">Shower &amp; Tap Installation</a></li>
              <li><a href="#services" className="hover:text-[#70CDA5] transition-colors">Boiler Servicing &amp; Maintenance</a></li>
              <li><a href="#services" className="hover:text-[#70CDA5] transition-colors">Boiler Breakdowns &amp; Repairs</a></li>
              <li><a href="#services" className="hover:text-[#70CDA5] transition-colors">Landlord Safety Certificates (CP12)</a></li>
              <li><a href="#emergency" className="hover:text-[#E87524] transition-colors font-medium text-[#E87524]">Emergency Plumbing</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E87524] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#70CDA5] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-bold text-sm text-[#E87524]">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-sans">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Derby &amp; Derbyshire Gas &amp; Plumbing Specialist</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C2522] text-zinc-300 hover:text-white hover:bg-[#24302C] transition-colors border border-[#2B3833] cursor-pointer"
              aria-label="Scroll to top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
