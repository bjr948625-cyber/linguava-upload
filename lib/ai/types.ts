/**
 * Types for AI Translation Provider
 */

export interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export interface TranslationResponse {
  translatedText: string;
  model: string;
  usage?: {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
  };
}

export interface AIProvider {
  name: string;
  translate(request: TranslationRequest): Promise<TranslationResponse>;
  getSupportedLanguages(): string[];
}

export type ProviderType = 'openrouter' | 'openai' | 'gemini' | 'anthropic';

export interface AIConfig {
  provider: ProviderType;
  apiKey?: string;
  model?: string;
  baseUrl?: string;
}

// Language code mappings for different providers
export const LANGUAGE_MAPPING: Record<string, Record<string, string>> = {
  openrouter: {
    en: 'English',
    ar: 'Arabic',
    fr: 'French',
    es: 'Spanish',
    de: 'German',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    pt: 'Portuguese',
    it: 'Italian',
    ru: 'Russian',
    nl: 'Dutch',
    tr: 'Turkish',
    pl: 'Polish',
    vi: 'Vietnamese',
    th: 'Thai',
    hi: 'Hindi',
    id: 'Indonesian',
    ms: 'Malay',
    he: 'Hebrew',
    uk: 'Ukrainian',
    cs: 'Czech',
    ro: 'Romanian',
    hu: 'Hungarian',
    sv: 'Swedish',
    da: 'Danish',
    fi: 'Finnish',
    no: 'Norwegian',
    el: 'Greek',
    bg: 'Bulgarian',
    hr: 'Croatian',
    sk: 'Slovak',
    sl: 'Slovenian',
    lt: 'Lithuanian',
    lv: 'Latvian',
    et: 'Estonian',
  },
  openai: {
    en: 'English',
    ar: 'Arabic',
    fr: 'French',
    es: 'Spanish',
    de: 'German',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    pt: 'Portuguese',
    it: 'Italian',
    ru: 'Russian',
    nl: 'Dutch',
  },
  gemini: {
    en: 'en',
    ar: 'ar',
    fr: 'fr',
    es: 'es',
    de: 'de',
    zh: 'zh',
    ja: 'ja',
    ko: 'ko',
    pt: 'pt',
    it: 'it',
    ru: 'ru',
    nl: 'nl',
  },
  anthropic: {
    en: 'English',
    ar: 'Arabic',
    fr: 'French',
    es: 'Spanish',
    de: 'German',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    pt: 'Portuguese',
    it: 'Italian',
    ru: 'Russian',
    nl: 'Dutch',
  },
};
