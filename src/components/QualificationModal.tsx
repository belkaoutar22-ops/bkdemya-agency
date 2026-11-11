import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  Loader2,
  Building2,
  User,
  Phone,
  Briefcase,
  Megaphone,
  Coins,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';
import { QualificationFormData } from '../types';
import { trackLead, trackCalendarClick } from '../utils/pixel';

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDUSTRY_OPTIONS = [
  'عيادة',
  'عقار',
  'خدمات',
  'تجارة إلكترونية',
  'تدريب',
  'أخرى',
];

const BUDGET_OPTIONS = [
  'أقل من 2,000 ريال',
  'من 2,000 إلى 5,000 ريال',
  'من 5,000 إلى 10,000 ريال',
  'أكثر من 10,000 ريال',
];

export default function QualificationModal({
  isOpen,
  onClose,
}: QualificationModalProps) {
  const [formData, setFormData] = useState<QualificationFormData>({
    fullName: '',
    whatsapp: '',
    companyName: '',
    industry: '',
    usesPaidAds: '',
    monthlyBudget: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when modal re-opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Phone validation: supports international & local formats (minimum 8 digits, only valid phone chars)
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+?\d{8,16}|0[5-7]\d{7,9})$/;
    return phoneRegex.test(cleaned);
  };

  const handleInputChange = (
    field: keyof QualificationFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى إدخال الاسم الكامل';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم يجب أن يتكون من 3 أحرف على الأقل';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'يرجى إدخال رقم WhatsApp للتواصل';
    } else if (!validatePhone(formData.whatsapp)) {
      newErrors.whatsapp = 'يرجى إدخال رقم هاتف صحيح (مثال: +966500000000 أو +212600000000)';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'يرجى إدخال اسم الشركة أو النشاط التجاري';
    }

    if (!formData.industry) {
      newErrors.industry = 'يرجى اختيار مجال نشاط الشركة';
    }

    if (!formData.usesPaidAds) {
      newErrors.usesPaidAds = 'يرجى تحديد ما إذا كنت تستخدم الإعلانات حالياً';
    }

    if (!formData.monthlyBudget) {
      newErrors.monthlyBudget = 'يرجى اختيار متوسط الميزانية الشهرية';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate safe async submission / qualification processing
      await new Promise((resolve) => setTimeout(resolve, 800));

      // 🎯 Track Meta Pixel LEAD event ONLY after successful submission
      trackLead({
        companyName: formData.companyName,
        industry: formData.industry,
        hasBudget: formData.monthlyBudget,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting qualification form', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendarClick = () => {
    // 🎯 Track custom CalendarClick event on click
    trackCalendarClick();
    window.open(BRAND_CONFIG.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    if (isSubmitting) return; // Prevent closing while submitting
    onClose();
    // Reset state after transition
    setTimeout(() => {
      setIsSubmitted(false);
      setErrors({});
    }, 300);
  };

  return (
    <div
      id="qualification-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) {
          handleClose();
        }
      }}
      dir="rtl"
    >
      <div
        id="qualification-modal-card"
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#DE632E]/10 text-[#DE632E] flex items-center justify-center font-black text-sm">
              B
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 block leading-tight">
                نموذج تأهيل الاستشارة المجانية
              </span>
              <span className="text-[11px] text-[#3D4B2C] font-bold">
                BKDEMYA Business Strategy Solutions
              </span>
            </div>
          </div>

          <button
            id="close-qualification-modal-btn"
            onClick={handleClose}
            disabled={isSubmitting}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {!isSubmitted ? (
            /* STEP 1: Qualification Form */
            <form onSubmit={handleSubmit} className="space-y-5 text-right">
              {/* Form Intro */}
              <div className="space-y-1 pb-2 border-b border-slate-100">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  احجز استشارتك المجانية (30 دقيقة)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  يرجى ملء البيانات التالية لمساعدتنا على تجهيز التحليل الأولي لنشاطك قبل الجلسة.
                </p>
              </div>

              {/* 1. الاسم الكامل */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#DE632E]" />
                  <span>الاسم الكامل <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="form-full-name"
                  type="text"
                  placeholder="مثال: عبد الله بن محمد"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all ${
                    errors.fullName
                      ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#DE632E] focus:ring-2 focus:ring-orange-100'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* 2. رقم الهاتف / WhatsApp */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#3D4B2C]" />
                  <span>رقم الهاتف للتواصل والمتابعة <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="form-whatsapp"
                  type="tel"
                  dir="ltr"
                  placeholder="+966 50 123 4567"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all text-right ${
                    errors.whatsapp
                      ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#DE632E] focus:ring-2 focus:ring-orange-100'
                  }`}
                />
                {errors.whatsapp ? (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.whatsapp}
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-1">
                    سنستخدم الرقم للتنسيق والتذكير بموعد الجلسة عبر Google Meet
                  </p>
                )}
              </div>

              {/* 3. اسم الشركة */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#DE632E]" />
                  <span>اسم الشركة أو النشاط التجاري <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="form-company-name"
                  type="text"
                  placeholder="مثال: شركة آفاق للتطوير"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all ${
                    errors.companyName
                      ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#DE632E] focus:ring-2 focus:ring-orange-100'
                  }`}
                />
                {errors.companyName && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* 4. مجال نشاط الشركة */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#DE632E]" />
                  <span>مجال نشاط الشركة <span className="text-red-500">*</span></span>
                </label>
                <select
                  id="form-industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-bold text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all ${
                    errors.industry
                      ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#DE632E] focus:ring-2 focus:ring-orange-100'
                  }`}
                >
                  <option value="">-- اختر مجال النشاط --</option>
                  {INDUSTRY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.industry}
                  </p>
                )}
              </div>

              {/* 5. هل تستخدم الإعلانات المدفوعة حاليًا؟ */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                  <Megaphone className="w-4 h-4 text-[#DE632E]" />
                  <span>هل تستخدم الإعلانات المدفوعة حاليًا؟ <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['نعم', 'لا'] as const).map((choice) => (
                    <label
                      key={choice}
                      className={`flex items-center justify-center gap-2.5 p-3 rounded-xl border cursor-pointer font-bold text-sm transition-all ${
                        formData.usesPaidAds === choice
                          ? 'border-[#DE632E] bg-orange-50/80 text-[#DE632E] ring-2 ring-orange-200'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="usesPaidAds"
                        value={choice}
                        checked={formData.usesPaidAds === choice}
                        onChange={() => handleInputChange('usesPaidAds', choice)}
                        className="accent-[#DE632E]"
                      />
                      <span>{choice}</span>
                    </label>
                  ))}
                </div>
                {errors.usesPaidAds && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.usesPaidAds}
                  </p>
                )}
              </div>

              {/* 6. ما متوسط ميزانية الإعلانات الشهرية؟ */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-[#3D4B2C]" />
                  <span>ما متوسط ميزانية الإعلانات الشهرية؟ <span className="text-red-500">*</span></span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BUDGET_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer font-bold text-xs sm:text-sm transition-all ${
                        formData.monthlyBudget === opt
                          ? 'border-[#3D4B2C] bg-emerald-50 text-[#3D4B2C] ring-2 ring-[#3D4B2C]/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="monthlyBudget"
                        value={opt}
                        checked={formData.monthlyBudget === opt}
                        onChange={() => handleInputChange('monthlyBudget', opt)}
                        className="accent-[#3D4B2C]"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.monthlyBudget && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.monthlyBudget}
                  </p>
                )}
              </div>

              {/* Submit Button with Loading State */}
              <div className="pt-3">
                <button
                  id="submit-qualification-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#DE632E] via-[#c85220] to-[#b34417] text-white text-base font-black shadow-lg shadow-[#DE632E]/25 hover:shadow-[#DE632E]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري إرسال النموذج وتجهيز المواعيد...</span>
                    </>
                  ) : (
                    <>
                      <span>متابعة اختيار الموعد عبر Google Calendar</span>
                      <ArrowLeft className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4 text-[#3D4B2C]" />
                <span>بياناتك سرية تماماً وتُستخدم فقط لتخصيص الاستشارة</span>
              </div>
            </form>
          ) : (
            /* STEP 2: Success Confirmation & Direct Calendar Launch */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Success Badge */}
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 text-[#3D4B2C] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              {/* Confirmation Message */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  تم تسجيل طلبك بنجاح ✅
                </h3>
                <p className="text-base sm:text-lg text-slate-700 font-bold max-w-md mx-auto leading-relaxed">
                  الخطوة الأخيرة: اختر الوقت المناسب لجلسة الاستشارة المجانية.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm mx-auto">
                  سنقوم بمراجعة بيانات شركتك ({formData.companyName}) وتجهيز الخطة قبل موعد الجلسة.
                </p>
              </div>

              {/* Open Google Calendar Button */}
              <div className="pt-2 max-w-md mx-auto">
                <button
                  id="final-open-calendar-cta-btn"
                  onClick={handleCalendarClick}
                  className="group w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#DE632E] via-[#c85220] to-[#b34417] text-white text-lg font-black shadow-xl shadow-[#DE632E]/30 hover:shadow-2xl hover:shadow-[#DE632E]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Calendar className="w-6 h-6 transition-transform group-hover:rotate-12" />
                  <span>اختر موعدك الآن عبر Google Calendar</span>
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>

              <div className="text-xs text-slate-500 font-semibold">
                سيتم فتح جدول المواعيد الرسمي المباشر في نافذة جديدة
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
