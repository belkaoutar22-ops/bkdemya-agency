import { useState, useEffect } from 'react';
import { Calendar, MessageCircle, ArrowLeft } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';
import { trackContact } from '../utils/pixel';

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

  const handleWhatsAppClick = () => {
    trackContact('whatsapp_sticky_bar');
  };

  if (!visible) return null;

  return (
    <div
      id="sticky-mobile-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="flex items-center gap-3">
        {/* Fast WhatsApp Icon Button */}
        <a
          id="sticky-whatsapp-btn"
          href={BRAND_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10b981] border border-emerald-300 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
          aria-label="محادثة واتساب"
        >
          <MessageCircle className="w-6 h-6 fill-[#10b981]/20" />
        </a>

        {/* Primary Booking Button */}
        <button
          id="sticky-booking-btn"
          onClick={onOpenBookingModal}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-extrabold text-sm shadow-md shadow-orange-500/25 active:scale-98 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>احجز استشارة مجانية (30 دقيقة)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
