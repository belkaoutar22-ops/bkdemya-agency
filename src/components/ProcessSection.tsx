import { PROCESS_STEPS, BRAND_CONFIG } from '../data/content';
import {
  Search,
  FileSpreadsheet,
  Rocket,
  LineChart,
  ArrowLeft,
  Calendar,
  Sparkles,
} from 'lucide-react';

const stepIcons = [Search, FileSpreadsheet, Rocket, LineChart];

interface ProcessSectionProps {
  onOpenBookingModal: () => void;
}

export default function ProcessSection({ onOpenBookingModal }: ProcessSectionProps) {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-[#3D4B2C]/20 text-[#3D4B2C] text-xs sm:text-sm font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#3D4B2C]" />
            <span>منهجية عمل BKDEMYA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            خطوات واضحة...{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#3D4B2C] to-[#252f1b]">
              ونتائج قابلة للقياس.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            نعمل بأسلوب منهجي شفاف يضمن عدم إهدار الميزانية، وتحويل كل درهم أو ريال مستثمر إلى عملاء محتملين جادين.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx] || Rocket;
            return (
              <div
                key={step.stepNumber}
                id={`process-step-${idx + 1}`}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-[#DE632E] transition-colors font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#3D4B2C] border border-emerald-100 flex items-center justify-center group-hover:bg-[#3D4B2C] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-2.5">
                  <div className="inline-block text-[11px] font-bold text-[#DE632E] bg-orange-50 px-2 py-0.5 rounded-md">
                    {step.tag}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-950 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Bottom step progress line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#DE632E] to-[#3D4B2C] rounded-full transition-all duration-500"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-600">
                    مرحلة {idx + 1}/4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900">
              تبدأ أول خطوة بمحادثة تشخيصية مجانية لمدة 30 دقيقة
            </h4>
            <p className="text-sm text-slate-600 font-medium">
              نناقش وضعك الحالي ونقترح خطة واضحة قبل أن تدفع أي مبلغ مالي.
            </p>
          </div>

          <button
            id="process-cta-btn"
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-[#DE632E] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#DE632E]" />
            <span>احجز استشارة مجانية عبر Google Calendar</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
