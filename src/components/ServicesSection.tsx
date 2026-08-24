import React, { useState } from 'react';
import { 
  Wrench, 
  ShowerHead, 
  Droplets, 
  Bath, 
  Settings, 
  Sparkles, 
  AlertTriangle, 
  Flame, 
  Activity, 
  Gauge, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  Check
} from 'lucide-react';
import { PLUMBING_SERVICES, GAS_HEATING_SERVICES, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
  onOpenServiceModal?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForEnquiry,
  onOpenServiceModal
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'plumbing' | 'gas_heating'>('all');

  // Icon resolver map
  const getIcon = (iconName: string, isGasOrHeating: boolean) => {
    const props = {
      className: `w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
        isGasOrHeating ? 'text-[#E87524]' : 'text-[#70CDA5]'
      }`
    };

    switch (iconName) {
      case 'Wrench': return <Wrench {...props} />;
      case 'ShowerHead': return <ShowerHead {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'Bath': return <Bath {...props} />;
      case 'Settings': return <Settings {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'AlertTriangle': return <AlertTriangle {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Gauge': return <Gauge {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  const renderServiceRow = (service: ServiceItem, index: number) => {
    const isGasOrHeating = service.category === 'gas_heating';
    const isEmergency = service.isEmergency;

    return (
      <div
        key={service.id}
        onClick={() => onSelectServiceForEnquiry(service.name)}
        className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border transition-all duration-200 cursor-pointer bg-white ${
          isEmergency 
            ? 'border-[#E87524]/40 hover:border-[#E87524] hover:shadow-md bg-gradient-to-r from-white via-white to-[#FEF3EC]' 
            : 'border-[#E6E9E6] hover:border-[#70CDA5] hover:shadow-sm'
        }`}
        id={`service-row-${service.id}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onSelectServiceForEnquiry(service.name);
          }
        }}
      >
        {/* Left icon and service details */}
        <div className="flex items-start sm:items-center gap-4">
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
              isEmergency
                ? 'bg-[#FEF3EC] border border-[#E87524]/30'
                : isGasOrHeating
                ? 'bg-[#FEF3EC] border border-[#FCD8BE]'
                : 'bg-[#EAF7F1] border border-[#C5EBDA]'
            }`}
          >
            {getIcon(service.icon, isGasOrHeating)}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#151B19] group-hover:text-[#E87524] transition-colors">
                {service.name}
              </h3>
              {service.badge && (
                <span
                  className={`font-sans text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full ${
                    isEmergency
                      ? 'bg-[#E87524] text-white'
                      : isGasOrHeating
                      ? 'bg-[#151B19] text-[#70CDA5]'
                      : 'bg-[#EAF7F1] text-[#256E4E] border border-[#C5EBDA]'
                  }`}
                >
                  {service.badge}
                </span>
              )}
            </div>
            <p className="font-serif text-sm sm:text-base text-[#151B19]/75 mt-1 leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Right CTA / Arrow indicator */}
        <div className="mt-3 sm:mt-0 flex items-center justify-between sm:justify-end gap-3 pl-15 sm:pl-0 font-sans">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#151B19]/60 group-hover:text-[#E87524] transition-colors">
            Enquire &rarr;
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
              isGasOrHeating
                ? 'bg-[#F7F8F5] group-hover:bg-[#E87524] text-[#151B19] group-hover:text-white'
                : 'bg-[#F7F8F5] group-hover:bg-[#70CDA5] text-[#151B19] group-hover:text-[#151B19]'
            }`}
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#F7F8F5]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7F1] text-[#256E4E] font-sans text-xs font-medium uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#70CDA5]" />
            <span>Gas Safe &amp; Plumbing Services</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#151B19] tracking-tight">
            Our Services
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#151B19]/80 mt-3 leading-relaxed">
            From everyday plumbing repairs to boiler and heating services, Jonny Eagle provides professional solutions for your home or property.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-[#E6E9E6] shadow-2xs mt-6 font-sans">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#151B19] text-white shadow-xs'
                  : 'text-[#151B19]/70 hover:text-[#151B19]'
              }`}
            >
              All Services (11)
            </button>
            <button
              onClick={() => setActiveTab('plumbing')}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'plumbing'
                  ? 'bg-[#70CDA5] text-[#151B19] shadow-xs'
                  : 'text-[#151B19]/70 hover:text-[#151B19]'
              }`}
            >
              Plumbing (7)
            </button>
            <button
              onClick={() => setActiveTab('gas_heating')}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'gas_heating'
                  ? 'bg-[#E87524] text-white shadow-xs'
                  : 'text-[#151B19]/70 hover:text-[#151B19]'
              }`}
            >
              Gas &amp; Heating (4)
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Plumbing Services */}
          {(activeTab === 'all' || activeTab === 'plumbing') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6E9E6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#70CDA5]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#151B19]">Plumbing Services</h3>
                </div>
                <span className="font-sans text-xs text-zinc-500 font-medium tracking-wide">Domestic &amp; Commercial</span>
              </div>
              <div className="space-y-3">
                {PLUMBING_SERVICES.map((s, idx) => renderServiceRow(s, idx))}
              </div>
            </div>
          )}

          {/* Column 2: Gas & Heating Services */}
          {(activeTab === 'all' || activeTab === 'gas_heating') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6E9E6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E87524]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#151B19]">Gas &amp; Heating Services</h3>
                </div>
                <span className="font-sans text-xs font-semibold text-[#256E4E] bg-[#EAF7F1] px-2.5 py-0.5 rounded tracking-wide">
                  Gas Safe Certified
                </span>
              </div>
              <div className="space-y-3">
                {GAS_HEATING_SERVICES.map((s, idx) => renderServiceRow(s, idx))}
              </div>

              {/* Extra landlord advice card */}
              <div className="p-5 rounded-xl bg-white border border-[#D5DAD5] shadow-2xs mt-4">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="w-6 h-6 text-[#70CDA5] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#151B19]">Landlords &amp; Letting Agents in Derby</h4>
                    <p className="font-serif text-sm sm:text-base text-[#151B19]/75 mt-1 leading-relaxed">
                      We offer hassle-free annual Gas Safety CP12 inspections, direct tenant liaison, and rapid turnaround on official safety certificates.
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-sans inline-flex items-center gap-1.5 text-xs font-semibold text-[#E87524] uppercase tracking-wider mt-3 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Book a Landlord Certificate Check</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
