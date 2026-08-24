import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, ALL_SERVICES } from '../data/businessData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: prefilledService || '',
    message: '',
    urgency: 'routine'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please provide a contact telephone number.');
      return;
    }
    if (!formData.service) {
      setError('Please select the service required.');
      return;
    }

    setLoading(true);
    // Simulate instantaneous clean local dispatch with feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
      urgency: 'routine'
    });
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3EC] text-[#E87524] font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3 border border-[#FCD8BE]">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#151B19] tracking-tight">
            Need a Plumber or Gas Engineer?
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#151B19]/80 mt-3 leading-relaxed">
            Get in touch with Jonny Eagle Plumbing &amp; Heating to discuss your plumbing, heating or gas service needs.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Functional Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-[#F7F8F5] p-6 rounded-2xl border border-[#E6E9E6] shadow-2xs hover:border-[#E87524] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FEF3EC] border border-[#FCD8BE] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#E87524]" />
                </div>
                <div>
                  <h3 className="font-sans text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Direct Telephone</h3>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-sans text-xl sm:text-2xl font-bold text-[#151B19] hover:text-[#E87524] transition-colors block mt-1 tracking-tight"
                    id="contact-tel-link"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="font-serif text-sm text-[#151B19]/70 mt-1">
                    Call or text directly for rapid queries and quotes.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#F7F8F5] p-6 rounded-2xl border border-[#E6E9E6] shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F1] border border-[#C5EBDA] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#70CDA5]" />
                </div>
                <div>
                  <h3 className="font-sans text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Registered Base</h3>
                  <p className="font-serif text-lg font-semibold text-[#151B19] mt-1">
                    {BUSINESS_INFO.address.street}
                  </p>
                  <p className="font-serif text-base text-[#151B19]/75">
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postcode}, UK
                  </p>
                  <p className="font-sans text-xs text-[#256E4E] font-medium mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#70CDA5]" />
                    Serving all surrounding Derbyshire areas
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#F7F8F5] p-6 rounded-2xl border border-[#E6E9E6] shadow-2xs hover:border-[#70CDA5] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E9E6] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#151B19]" />
                </div>
                <div>
                  <h3 className="font-sans text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Email Enquiries</h3>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-sans text-base font-semibold text-[#151B19] hover:text-[#E87524] transition-colors block mt-1 break-all"
                    id="contact-email-link"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="font-serif text-sm text-[#151B19]/70 mt-1">
                    Send photos of your current setup for an initial estimate.
                  </p>
                </div>
              </div>
            </div>

            {/* Gas Safe Banner */}
            <div className="bg-[#151B19] p-5 rounded-2xl border border-[#2B3833] text-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#70CDA5]/20 flex items-center justify-center shrink-0 border border-[#70CDA5]/40">
                <ShieldCheck className="w-5 h-5 text-[#70CDA5]" />
              </div>
              <div className="text-xs font-sans">
                <span className="font-semibold text-[#70CDA5] block">Gas Safe Registered</span>
                <span className="text-zinc-300 font-normal">Compliant domestic gas certificates and boiler work.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Functional Enquiry Form */}
          <div className="lg:col-span-7 font-sans">
            <div className="bg-[#F7F8F5] p-8 sm:p-10 rounded-3xl border border-[#D5DAD5] shadow-sm">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#151B19] tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="font-serif text-base text-[#151B19]/75 mt-1">
                  Fill in your details below and we will respond promptly to arrange an inspection or quote.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white p-8 rounded-2xl border border-[#70CDA5] text-center space-y-4 shadow-sm animate-in fade-in duration-300" id="form-success-state">
                  <div className="w-14 h-14 bg-[#EAF7F1] text-[#256E4E] rounded-full flex items-center justify-center mx-auto border border-[#C5EBDA]">
                    <CheckCircle2 className="w-8 h-8 text-[#70CDA5]" />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-[#151B19]">Thank You, {formData.name}!</h4>
                  <p className="font-serif text-base text-[#151B19]/80 max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <span className="font-semibold text-[#E87524]">{formData.service || 'your plumbing & heating service'}</span> has been received. Jonny will be in touch with you at <span className="font-sans font-semibold text-[#151B19]">{formData.phone}</span> shortly.
                  </p>
                  <div className="pt-2 font-sans">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#151B19] underline hover:text-[#E87524] cursor-pointer"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans" id="enquiry-form">
                  
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#151B19] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DAD5] text-[#151B19] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524] focus:border-transparent transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#151B19] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07123 456789"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DAD5] text-[#151B19] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524] focus:border-transparent transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#151B19] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.co.uk"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DAD5] text-[#151B19] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524] focus:border-transparent transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-[#151B19] uppercase tracking-wider mb-1.5">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DAD5] text-[#151B19] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524] focus:border-transparent transition-all"
                      >
                        <option value="">-- Please Select Service --</option>
                        <optgroup label="Plumbing Services">
                          <option value="Plumbing Pipe Repair">Plumbing Pipe Repair</option>
                          <option value="Shower Installation">Shower Installation</option>
                          <option value="Tap Installation">Tap Installation</option>
                          <option value="Toilet Installation">Toilet Installation</option>
                          <option value="Plumbing & Heating Repairs & Maintenance">Plumbing & Heating Repairs & Maintenance</option>
                          <option value="Bathroom Installation">Bathroom Installation</option>
                          <option value="Emergency Plumbing">Emergency Plumbing</option>
                        </optgroup>
                        <optgroup label="Gas & Heating Services">
                          <option value="Boiler Servicing">Boiler Servicing</option>
                          <option value="Boiler Breakdowns">Boiler Breakdowns</option>
                          <option value="Boiler Installation">Boiler Installation</option>
                          <option value="Landlords Safety Certificates">Landlords Safety Certificates (CP12)</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#151B19] uppercase tracking-wider mb-1.5">
                      Job Details / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you need assistance with, your location in Derby, or preferred timing..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DAD5] text-[#151B19] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524] focus:border-transparent transition-all placeholder:text-zinc-400 font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E87524] hover:bg-[#d4661a] text-white px-8 py-4 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                      id="submit-enquiry-button"
                    >
                      {loading ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <span>SEND ENQUIRY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-zinc-500 mt-2.5">
                      Your details are kept strictly confidential and used solely to respond to your enquiry.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
