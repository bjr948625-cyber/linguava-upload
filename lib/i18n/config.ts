export const locales = ['en', 'ar', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; nativeLabel: string; dir: 'ltr' | 'rtl'; flag: string }> = {
  en: { label: 'English', nativeLabel: 'English', dir: 'ltr', flag: '🇺🇸' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl', flag: '🇸🇦' },
  fr: { label: 'French', nativeLabel: 'Français', dir: 'ltr', flag: '🇫🇷' },
};

export const isRtl = (locale: Locale) => localeMeta[locale].dir === 'rtl';
