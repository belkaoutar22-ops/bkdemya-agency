import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ConsultationBenefitsSection from './components/ConsultationBenefitsSection';
import TransparencySection from './components/TransparencySection';
import FAQSection from './components/FAQSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import QualificationModal from './components/QualificationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-slate-900 font-['Cairo',sans-serif] selection:bg-[#ff6b00]/20 selection:text-[#ea580c] relative">
      {/* Top Navigation */}
      <Navbar onOpenBookingModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection onOpenBookingModal={handleOpenModal} />

        {/* Section 2: Why BKDEMYA? */}
        <WhyUsSection onOpenBookingModal={handleOpenModal} />

        {/* Section 3: How We Work */}
        <ProcessSection onOpenBookingModal={handleOpenModal} />

        {/* Section 4: Is this service for you? (Target Audience) */}
        <TargetAudienceSection onOpenBookingModal={handleOpenModal} />

        {/* Section 5: What you get in the 30-min consultation */}
        <ConsultationBenefitsSection onOpenBookingModal={handleOpenModal} />

        {/* Section 6: Why we start with a free consultation (Transparency) */}
        <TransparencySection onOpenBookingModal={handleOpenModal} />

        {/* FAQ Section */}
        <FAQSection />

        {/* Section 7: Final CTA */}
        <FinalCtaSection onOpenBookingModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenBookingModal={handleOpenModal} />

      {/* Sticky Mobile Quick Booking Bar */}
      <StickyMobileBar onOpenBookingModal={handleOpenModal} />

      {/* Qualification Modal Window */}
      <QualificationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
