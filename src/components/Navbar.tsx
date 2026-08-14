import { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../data/content';
import { Calendar, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { trackContact } from '../utils/pixel';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackContact('whatsapp_navbar');
  };

  const navLinks = [
    { label: 'لماذا BKDEMYA؟', href: '#why-us' },
    { label: 'كيف نعمل؟', href: '#how-it-works' },
    { label: 'القطاعات المناسبة', href: '#target-audience' },
    { label: 'تفاصيل الاستشارة', href: '#consultation-details' },
    { label: 'الأسئلة الشائعة', href: '#faqs' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center transition-transform active:scale-95"
            aria-label="BKDEMYA الصفحة الرئيسية"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#ff6b00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#ff6b00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Fast Link */}
            <a
              id="nav-whatsapp-btn"
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 bg-slate-100/90 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/80 hover:border-emerald-300 text-sm font-semibold transition-all hover:shadow-sm"
              title="تواصل مباشر عبر واتساب"
            >
              <MessageCircle className="w-4 h-4 text-[#10b981] fill-[#10b981]/20" />
              <span>واتساب</span>
            </a>

            {/* Free Consultation Qualification Modal Trigger */}
            <button
              id="nav-calendar-btn"
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white text-sm font-bold shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز استشارة</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="px-3 py-1.5 rounded-lg bg-[#ff6b00] text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              احجز الآن
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-4 px-2 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-3 animate-in fade-in duration-200">
            <div className="space-y-1 divide-y divide-slate-100">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-slate-800 font-semibold text-sm hover:text-[#ff6b00] hover:bg-orange-50/60 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff6b00] text-white font-bold text-sm shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز استشارة مجانية (30 دقيقة)</span>
              </button>
              <a
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#10b981] fill-[#10b981]/20" />
                <span>محادثة فورية عبر واتساب</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

