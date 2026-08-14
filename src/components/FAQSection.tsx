import { useState } from 'react';
import { FAQS, BRAND_CONFIG } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { trackContact } from '../utils/pixel';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsAppClick = () => {
    trackContact('whatsapp_faq');
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ea580c] text-xs sm:text-sm font-extrabold">
            <HelpCircle className="w-4 h-4" />
            <span>الأسئلة الشائعة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            كل ما تود معرفته حول{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ea580c]">
              الاستشارة والخدمة
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            إجابات واضحة ومباشرة لأبرز الاستفسارات قبل حجز موعدك
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx + 1}`}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#ff6b00]/50 shadow-md ring-2 ring-orange-500/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-hidden"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-orange-50 text-[#ff6b00] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Card */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-base font-bold text-slate-900">لديك سؤال آخر لم تجد إجابته هنا؟</h4>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">تواصل معنا مباشرة عبر واتساب وسنجيبك في أقرب وقت.</p>
          </div>
          <a
            id="faq-whatsapp-btn"
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-sm font-bold transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#10b981] fill-[#10b981]/20" />
            <span>اسألنا على واتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
}
