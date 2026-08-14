export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  tag: string;
}

export interface TargetIndustry {
  id: string;
  title: string;
  description: string;
  iconName: string;
  leadsType: string;
}

export interface ConsultationBenefit {
  id: string;
  title: string;
  details: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QualificationFormData {
  fullName: string;
  whatsapp: string;
  companyName: string;
  industry: string;
  usesPaidAds: 'نعم' | 'لا' | '';
  monthlyBudget: string;
}
