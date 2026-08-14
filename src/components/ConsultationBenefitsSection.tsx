import { CONSULTATION_BENEFITS, BRAND_CONFIG } from '../data/content';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Video,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface ConsultationBenefitsSectionProps {
  onOpenBookingModal: () => void;
}

export default function ConsultationBenefitsSection({ onOpenBookingModal }: ConsultationBenefitsSectionProps) {
  return (
    <section
      id="consultation-details"
      className="py-20 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-400/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span>جلسة تشخيصية مباشرة (30 دقيقة)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            ماذا ستحصل خلال{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#10b981] to-[#059669]">
              الاستشارة المجانية؟
            </span>
          </h2>

          <div className="pt-2">
            <p className="text-lg sm:text-xl font-bold text-[#ea580c]">
              ليست جلسة بيع...
            </p>
            <p className="text-base sm:text-lg text-slate-700 font-semibold mt-1">
              بل جلسة عملية تساعدك على رؤية الصورة بشكل أوضح.
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Primary Benefits List (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {CONSULTATION_BENEFITS.map((benefit, idx) => (
              <div
                key={benefit.id}
                id={`consultation-benefit-${idx + 1}`}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4 text-right"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-50 text-[#10b981] border border-emerald-100 flex items-center justify-center group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-200 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {benefit.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right / Session Information Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-700 flex flex-col justify-between relative overflow-hidden">
              
              {/* Card ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-2xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />

              <div className="relative space-y-6">
                
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#ff6b00] tracking-wider uppercase">
                      جلسة استراتيجية فردية
                    </span>
                    <h4 className="text-xl font-black text-white">
                      BKDEMYA Discovery Call
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-[#ff6b00] flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                {/* Session Attributes */}
                <div className="space-y-4 text-sm font-medium">
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#10b981]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>المدة: <strong>30 دقيقة مركزة</strong></span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#10b981]">
                      <Video className="w-4 h-4" />
                    </div>
                    <span>المنصة: <strong>Google Meet مباشر</strong></span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#10b981]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span>التكلفة: <strong>مجانية 100% وبدون التزام</strong></span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                  💡 نحدد معاً خلال الجلسة ما إذا كانت حملات Meta هي الحل الأسرع لزيادة مبيعاتك وتخفيض تكلفة الحصول على العميل.
                </div>
              </div>

              {/* Direct Booking Button */}
              <div className="relative pt-6 mt-6 border-t border-slate-700/80">
                <button
                  id="consultation-card-booking-btn"
                  onClick={onOpenBookingModal}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d9480f] text-white text-base font-black shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>اختر موعدك عبر Google Calendar</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
