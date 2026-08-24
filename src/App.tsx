import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AreasCovered } from './components/AreasCovered';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCall } from './components/MobileStickyCall';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#151B19] selection:bg-[#70CDA5]/20 selection:text-[#151B19] pb-16 lg:pb-0 font-sans">
      
      {/* Header & Sticky Nav */}
      <Navbar onNavigate={(section) => console.log('Navigated to', section)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Split Hero */}
        <Hero onContactClick={() => scrollToContact()} />

        {/* Services List (7 Plumbing + 4 Gas & Heating) */}
        <ServicesSection onSelectServiceForEnquiry={(svc) => scrollToContact(svc)} />

        {/* Emergency Call Section */}
        <EmergencyBanner />

        {/* Why Choose Us (Dark Section) */}
        <WhyChooseUs />

        {/* About Jonny Eagle */}
        <AboutSection onContactClick={() => scrollToContact()} />

        {/* Recent Work / Asymmetric Gallery */}
        <GallerySection />

        {/* Testimonials & Verified Reviews */}
        <ReviewsSection />

        {/* Local Areas Covered (Derby & Surrounds) */}
        <AreasCovered onSelectAreaForEnquiry={(area) => scrollToContact(`Enquiry for ${area}`)} />

        {/* Conversion Contact Section with Functional Form */}
        <ContactSection prefilledService={selectedService} />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call-To-Action */}
      <MobileStickyCall onMessageClick={() => scrollToContact()} />

    </div>
  );
}
