import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface MobileStickyCallProps {
  onMessageClick: () => void;
}

export const MobileStickyCall: React.FC<MobileStickyCallProps> = ({ onMessageClick }) => {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-lg border-t border-[#E6E9E6] shadow-2xl safe-area-bottom font-sans"
      id="mobile-sticky-bar"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Secondary Enquiry Button */}
        <button
          onClick={onMessageClick}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#F7F8F5] border border-[#D5DAD5] text-[#151B19] font-semibold text-xs uppercase tracking-wider active:scale-[0.98] transition-transform cursor-pointer"
          id="mobile-sticky-message-btn"
        >
          <MessageSquare className="w-4 h-4 text-[#70CDA5]" />
          <span>Enquire</span>
        </button>

        {/* Primary Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-[2] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E87524] text-white font-bold text-xs sm:text-sm tracking-tight shadow-md active:scale-[0.98] transition-transform"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span>Call Jonny Eagle ({BUSINESS_INFO.phoneDisplay})</span>
        </a>
      </div>
    </div>
  );
};
