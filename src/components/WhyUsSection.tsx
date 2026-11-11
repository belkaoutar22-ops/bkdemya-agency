import { WHY_US_CARDS, BRAND_CONFIG } from '../data/content';
import {
  BarChart3,
  Target,
  TrendingUp,
  Coins,
  ArrowLeft,
  Calendar,
  Check,
} from 'lucide-react';

const iconMap = {
  BarChart3: BarChart3,
  Target: Target,
  TrendingUp: TrendingUp,
  Coins: Coins,
};

interface WhyUsSectionProps {
  onOpenBookingModal: () => void;
}

export default function WhyUsSection({ onOpenBookingModal }: WhyUsSectionProps) {
  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Decors */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-50/60 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-50/60 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#DE632E] text-xs sm:text-sm font-extrabold">
            <span>لماذا BKDEMYA؟</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            نجاح حملتك يبدأ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE632E] to-[#c85220]">
              قبل إطلاق الإعلان.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium pt-2">
            الكثير من الشركات تعتقد أن المشكلة في الميزانية أو في تصميم الإعلان، بينما السبب الحقيقي غالباً يكون في غياب استراتيجية واضحة.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto text-right">
            <span className="text-[#3D4B2C] font-bold ml-1">● في BKDEMYA:</span>
            نبدأ أولاً بفهم نشاطك التجاري، وتحليل جمهورك، ثم نبني استراتيجية تساعدك على الوصول إلى العملاء الأكثر اهتماماً بخدماتك.
          </div>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_CARDS.map((card, idx) => {
            const IconComponent = iconMap[card.iconName as keyof typeof iconMap] || BarChart3;
            return (
              <div
                key={card.id}
                id={`why-card-${idx + 1}`}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 text-[#DE632E] flex items-center justify-center group-hover:bg-[#DE632E] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {card.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-[#3D4B2C] border border-[#3D4B2C]/20">
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DE632E] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Active Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#3D4B2C]">
                  <span>نتائج قابلة للقياس</span>
                  <Check className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Mid-Section Mini CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#DE632E] hover:text-[#c85220] underline-offset-8 hover:underline transition-all cursor-pointer"
          >
            <span>اكتشف كيف نطبق هذه الاستراتيجية على نشاطك في 30 دقيقة مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
