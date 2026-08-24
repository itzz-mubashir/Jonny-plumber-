import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Plumbing', href: '#services' },
    { name: 'Gas & Heating', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Recent Work', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <>
      {/* Top micro bar for Gas Safe and location credentials */}
      <div className="bg-[#151B19] text-[#E6E9E6] font-sans text-xs py-1.5 px-4 hidden md:block border-b border-[#242E2B]" id="top-bar">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#70CDA5] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Gas Safe Registered Engineer
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#E87524]" />
              Derby &amp; Derbyshire Specialist (DE23 8BY)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-zinc-400">Emergency &amp; Routine Enquiries:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-[#E87524] hover:text-[#FFA05E] transition-colors font-bold flex items-center gap-1"
              id="topbar-phone-link"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E6E9E6] py-3'
            : 'bg-white border-b border-[#E6E9E6] py-4'
        }`}
        id="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#E87524]/40 rounded-lg"
            id="nav-logo-link"
            aria-label="Jonny Eagle Plumbing & Heating Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-sans" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-wider font-semibold text-[#151B19]/75 hover:text-[#E87524] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E87524] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Prominent Orange Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="font-sans inline-flex items-center gap-2 bg-[#E87524] hover:bg-[#d4661a] text-white px-5 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
              id="desktop-call-button"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
              <span className="text-white/80 font-normal text-xs ml-0.5 hidden xl:inline">({BUSINESS_INFO.phoneDisplay})</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#E87524] text-white shadow-sm"
              id="mobile-quick-call"
              aria-label="Call Jonny Eagle"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#151B19] hover:bg-[#F7F8F5] border border-[#E6E9E6] focus:outline-none focus:ring-2 focus:ring-[#E87524]"
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-[#E6E9E6] bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl font-sans"
            id="mobile-menu-drawer"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-md text-sm font-semibold text-[#151B19] hover:bg-[#F7F8F5] hover:text-[#E87524] transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E6E9E6] space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E87524] hover:bg-[#d4661a] text-white px-4 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-sm"
                id="mobile-drawer-call-btn"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#70CDA5]" />
                <span>Gas Safe Registered • Derby &amp; Surrounds</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
