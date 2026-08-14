/**
 * Meta Pixel Tracking Utility for BKDEMYA
 * Pixel ID: 1027818870154222
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const META_PIXEL_ID = '1027818870154222';

// Flag to prevent duplicate PageView in React StrictMode/re-renders
let pageViewTracked = false;

/**
 * Track PageView safely once per page session
 */
export function trackPageView(): void {
  if (pageViewTracked) return;
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
    pageViewTracked = true;
  }
}

/**
 * Track Lead - ONLY triggered after successful validation and submission of the qualification form
 */
export function trackLead(details?: {
  companyName?: string;
  industry?: string;
  hasBudget?: string;
}): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: 'BKDEMYA Free Consultation Qualification Form',
      content_category: details?.industry || 'Business Consultation',
      company_name: details?.companyName,
      status: 'submitted_successfully',
    });
  }
}

/**
 * Track Contact - Triggered when visitor clicks WhatsApp button
 */
export function trackContact(channel: string = 'whatsapp'): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      channel,
      destination: 'BKDEMYA WhatsApp Direct',
    });
  }
}

/**
 * Track CalendarClick - Custom event triggered when visitor clicks "اختر موعدك الآن"
 */
export function trackCalendarClick(): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'CalendarClick', {
      content_name: 'Google Calendar Schedule Link Clicked',
      step: 'post_qualification_booking',
    });
  }
}

/**
 * Track Schedule - Prepared infrastructure for confirmed calendar appointment
 * Note: Not triggered on mere calendar clicks to prevent fake conversion tracking.
 * Will be called once confirmed via thank-you callback or redirect webhook.
 */
export function trackSchedule(appointmentDetails?: {
  date?: string;
  time?: string;
  source?: string;
}): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Schedule', {
      content_name: 'BKDEMYA 30-min Consultation Scheduled',
      date: appointmentDetails?.date,
      time: appointmentDetails?.time,
      source: appointmentDetails?.source || 'google_calendar',
    });
  }
}
