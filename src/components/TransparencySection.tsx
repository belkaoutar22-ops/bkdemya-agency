import { ShieldAlert, HeartHandshake, CheckCheck, Eye, ArrowLeft } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';

interface TransparencySectionProps {
  onOpenBookingModal: () => void;
}

export default function TransparencySection({ onOpenBookingModal }: TransparencySectionProps) {
  return (
    <section
      id="transparency-section"
      className="py-20 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Wrapper */}
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-orange-50/40 p-8 sm:p-12 border border-slate-200 shadow-sm text-right space-y-8">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-[#3D4B2C]/30 text-[#3D4B2C] text-xs sm:text-sm font-extrabold">
              <HeartHandshake className="w-4 h-4 text-[#3D4B2C]" />
              <span>مبدأ الشفافية المطلقة</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              لماذا نبدأ{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE632E] to-[#c85220]">
                باستشارة مجانية؟
              </span>
            </h2>
          </div>

          {/* Copy Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p className="text-slate-900 font-bold text-lg sm:text-xl">
              لأننا نؤمن أن لكل نشاط احتياجات مختلفة.
            </p>
            <p>
              لهذا لا نقدم حلولاً جاهزة للجميع، بل نبدأ بفهم طبيعة نشاطك، ثم نقترح ما يناسبه.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-r-4 border-r-[#3D4B2C] border border-slate-200 shadow-xs">
              <p className="text-slate-900 font-bold">
                وإذا رأينا أن الإعلانات ليست الخيار المناسب في هذه المرحلة، سنخبرك بذلك بكل شفافية.
              </p>
            </div>
          </div>

          {/* 3 Core Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#3D4B2C] flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">وضوح كامل</h3>
                <p className="text-xs text-slate-500 mt-0.5">لا وعود غير واقعية أو أرقام وهمية</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#DE632E] flex items-center justify-center shrink-0">
                <CheckCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">ملاءمة مخصصة</h3>
                <p className="text-xs text-slate-500 mt-0.5">حل يناسب ميزانيتك ومرحلة نموك</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">صفر مخاطرة</h3>
                <p className="text-xs text-slate-500 mt-0.5">قرارك بيدك 100% بعد الجلسة</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80">
            <span className="text-xs sm:text-sm font-bold text-slate-600">
              هل أنت مستعد لنقاش صريح وشفاف حول نمو نشاطك؟
            </span>
            <button
              id="transparency-cta-btn"
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#DE632E] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>احجز استشارة مجانية عبر Google Calendar</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
