import { TARGET_INDUSTRIES, BRAND_CONFIG } from '../data/content';
import {
  Stethoscope,
  Building2,
  Sparkles,
  Briefcase,
  ShoppingBag,
  Rocket,
  CheckCircle2,
  Calendar,
  ArrowLeft,
} from 'lucide-react';

const iconMap = {
  Stethoscope: Stethoscope,
  Building2: Building2,
  Sparkles: Sparkles,
  Briefcase: Briefcase,
  ShoppingBag: ShoppingBag,
  Rocket: Rocket,
};

interface TargetAudienceSectionProps {
  onOpenBookingModal: () => void;
}

export default function TargetAudienceSection({ onOpenBookingModal }: TargetAudienceSectionProps) {
  return (
    <section
      id="target-audience"
      className="py-20 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#DE632E] text-xs sm:text-sm font-extrabold">
            <span>القطاعات المستهدفة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            هل هذه الخدمة{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE632E] to-[#c85220]">
              مناسبة لك؟
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            إذا كنت تقدم خدمات أو منتجات وتبحث عن زيادة فرص الوصول إلى عملاء جدد، فقد تكون هذه الخدمة مناسبة لك.
          </p>
        </div>

        {/* 6 Target Industry Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_INDUSTRIES.map((ind, idx) => {
            const IconComponent = iconMap[ind.iconName as keyof typeof iconMap] || Rocket;
            return (
              <div
                key={ind.id}
                id={`target-industry-card-${idx + 1}`}
                className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-orange-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-orange-50 text-[#DE632E] border border-slate-200/90 group-hover:border-orange-200 flex items-center justify-center transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 group-hover:bg-emerald-50 group-hover:text-[#3D4B2C] group-hover:border-[#3D4B2C]/20 transition-colors">
                      {ind.leadsType}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DE632E] transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3D4B2C]" />
                  <span>حلول حملات Meta مخصصة لقطاعك</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#DE632E]/10 via-[#3D4B2C]/10 to-[#DE632E]/5 border border-orange-200/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              نشاطك ينتمي لقطاع آخر؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              احجز استشارتك المجانية لنناقش طبيعة جمهورك ونخبرك بصراحة إن كانت إعلانات Meta هي الخيار الأمثل لك.
            </p>
          </div>

          <button
            id="target-industry-cta"
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#DE632E] hover:bg-[#c85220] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>احجز استشارة مجانية (30 دقيقة)</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
