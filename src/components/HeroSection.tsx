import { BRAND_CONFIG, HERO_HIGHLIGHTS } from '../data/content';
import {
  Calendar,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  SearchCheck,
  Compass,
  CalendarClock,
  CheckCircle2,
  Users,
} from 'lucide-react';
import heroImg from '../assets/images/bkdemya_marketing_hero_1786700247217.jpg';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
}

const iconMap = {
  SearchCheck: SearchCheck,
  Compass: Compass,
  CalendarClock: CalendarClock,
};

export default function HeroSection({ onOpenBookingModal }: HeroSectionProps) {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/30 via-white to-slate-50/50"
    >
      {/* Background Subtle Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#DE632E]/10 via-[#3D4B2C]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-0 w-80 h-80 bg-orange-400/5 blur-2xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 text-right space-y-6 sm:space-y-7">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-sm text-slate-800 text-xs sm:text-sm font-bold">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D4B2C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3D4B2C]"></span>
              </span>
              <span className="text-slate-900">{BRAND_CONFIG.heroBadge}</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#DE632E] font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#DE632E]" />
                متاح الآن للحجز
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-slate-950 tracking-tight leading-[1.28] sm:leading-[1.25]"
            >
              هل تستثمر في الإعلانات...
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#c85220] via-[#DE632E] to-[#f97316]">
                ولكن لا تحصل على العملاء
              </span>{' '}
              الذين تبحث عنهم؟
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-medium">
              في <strong className="text-slate-900 font-bold">BKDEMYA</strong> نساعد الشركات على جذب عملاء محتملين مؤهلين من خلال استراتيجيات إعلانية مدروسة على منصات Meta.
              <br className="hidden sm:inline" />
              <span className="block mt-2 text-slate-600">
                لا نعتمد على زيادة الميزانية بشكل عشوائي، بل نركز على تحسين جودة العملاء، وخفض تكلفة الحصول عليهم، وتحقيق نتائج قابلة للقياس تساعد نشاطك على النمو بثقة.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              {/* Primary CTA (Booking Calendar Trigger) */}
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenBookingModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#DE632E] via-[#c85220] to-[#b34417] text-white text-base sm:text-lg font-extrabold shadow-lg shadow-[#DE632E]/30 hover:shadow-xl hover:shadow-[#DE632E]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{BRAND_CONFIG.primaryCtaText}</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>

            {/* Trust Line */}
            <div className="pt-1 flex items-center gap-4 text-xs sm:text-sm text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#3D4B2C]" />
                استشارة فردية 30 دقيقة عبر Google Calendar
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#3D4B2C]" />
                مجانية وبدون أي التزام مالي
              </span>
            </div>

          </div>

          {/* Visual Showcase Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#ff6b00]/30 to-[#10b981]/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-2xl">
                <img
                  src={heroImg}
                  alt="BKDEMYA - استراتيجيات إعلانات Meta والتسويق الرقمي"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Floating Metric Badge 1: Quality Leads */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#3D4B2C] flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold text-slate-500 leading-none">معدل تحويل العملاء</p>
                    <p className="text-sm font-black text-slate-900 mt-0.5">+185% عملاء جادين</p>
                  </div>
                </div>

                {/* Floating Metric Badge 2: Meta Ads Certified Strategy */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#DE632E] flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold text-slate-500 leading-none">استهداف دقيق</p>
                    <p className="text-sm font-black text-slate-900 mt-0.5">خفض تكلفة الاكتساب</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 3 Mini Cards Section Under Hero */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {HERO_HIGHLIGHTS.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={item.id}
                id={`hero-highlight-card-${idx + 1}`}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 flex items-start gap-4 text-right"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-50 text-[#DE632E] border border-orange-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DE632E] group-hover:text-white transition-all duration-200 shadow-xs">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#DE632E] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
