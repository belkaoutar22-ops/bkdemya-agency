import { BRAND_CONFIG } from '../data/content';
import { Calendar, MessageCircle, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { trackContact } from '../utils/pixel';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export default function Footer({ onOpenBookingModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    trackContact('whatsapp_footer');
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-medium">
              وكالة تسويق رقمي متخصصة في استراتيجيات إعلانات Meta، نساعد الشركات على بناء تدفق مستدام من العملاء المؤهلين وخفض تكلفة الاكتساب.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                id="footer-book-cal"
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#ff6b00] text-white text-xs font-bold hover:bg-[#ea580c] transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>حجز استشارة Google Calendar</span>
              </button>
              <a
                id="footer-whatsapp"
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 text-emerald-400 hover:text-emerald-300 text-xs font-bold border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold">أقسام الصفحة</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  لماذا BKDEMYA؟
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  منهجية العمل
                </a>
              </li>
              <li>
                <a href="#target-audience" className="hover:text-white transition-colors">
                  القطاعات المناسبة
                </a>
              </li>
              <li>
                <a href="#consultation-details" className="hover:text-white transition-colors">
                  تفاصيل الاستشارة المجانية
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold">التواصل المباشر</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="text-slate-300">
                واتساب:{' '}
                <a
                  href={BRAND_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="text-emerald-400 hover:underline dir-ltr inline-block font-mono"
                >
                  {BRAND_CONFIG.whatsappPhone}
                </a>
              </li>
              <li className="text-slate-300">
                الاستشارة: جلسة 30 دقيقة عبر Google Meet
              </li>
              <li className="text-emerald-400 font-bold">
                ✓ استشارة مجانية 100%
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} BKDEMYA. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span>وكالة تسويق رقمي وإعلانات Meta</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="العودة لأعلى الصفحة"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
