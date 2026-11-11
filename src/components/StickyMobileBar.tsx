import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBookingModal: () => void;
}

export default function StickyMobileBar({ onOpenBookingModal }: StickyMobileBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="sticky-mobile-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="flex items-center">
        {/* Primary Booking Button */}
        <button
          id="sticky-booking-btn"
          onClick={onOpenBookingModal}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#DE632E] to-[#c85220] hover:from-[#c85220] hover:to-[#b34417] text-white font-extrabold text-sm shadow-md shadow-[#DE632E]/25 active:scale-98 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>احجز استشارة مجانية (30 دقيقة)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
