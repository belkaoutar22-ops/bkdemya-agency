import { BRAND_CONFIG } from '../data/content';
import {
  Calendar,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBookingModal: () => void;
}

export default function FinalCtaSection({ onOpenBookingModal }: FinalCtaSectionProps) {

  return (
    <section
      id="final-cta"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl border border-slate-800 overflow-hidden">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-300 text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-[#ff6b00]" />
              <span>ابدأ رحلة النمو اليوم</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {BRAND_CONFIG.finalCtaTitle}
            </h2>

            {/* Subtitle / Description */}
            <div className="space-y-3 text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              <p className="text-white font-bold text-lg sm:text-xl">
                ابدأ بخطوة بسيطة قد تُحدث فرقاً في طريقة حصولك على العملاء.
              </p>
              <p className="text-slate-300">
                احجز استشارة مجانية لمدة 30 دقيقة، ودعنا نناقش أهدافك، ونستعرض الفرص المتاحة، ونقترح عليك أفضل نقطة انطلاق.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              {/* Giant Primary Calendar Button */}
              <button
                id="final-cta-booking-btn"
                onClick={onOpenBookingModal}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#DE632E] via-[#c85220] to-[#b34417] text-white text-lg sm:text-xl font-extrabold shadow-xl shadow-[#DE632E]/30 hover:shadow-2xl hover:shadow-[#DE632E]/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-6 h-6 transition-transform group-hover:rotate-12" />
                <span>{BRAND_CONFIG.finalCtaButton}</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>

            </div>

            {/* Bottom trust badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#DE632E]" />
                مدة الجلسة 30 دقيقة
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#3D4B2C]" />
                بدون أي التزام شراء
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#3D4B2C]" />
                مباشرة عبر Google Calendar
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
