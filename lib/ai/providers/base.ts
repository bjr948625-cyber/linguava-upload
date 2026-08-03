/**
 * Base Provider Interface
 * All AI providers must implement this interface
 */

import type { AIProvider, TranslationRequest, TranslationResponse } from '../types';

export abstract class BaseProvider implements AIProvider {
  abstract name: string;
  protected apiKey: string;
  protected model: string;
  protected baseUrl: string;

  constructor(apiKey: string, model?: string, baseUrl?: string) {
    this.apiKey = apiKey;
    this.model = model || this.getDefaultModel();
    this.baseUrl = baseUrl || this.getDefaultBaseUrl();
  }

  abstract getDefaultModel(): string;
  abstract getDefaultBaseUrl(): string;

  abstract translate(request: TranslationRequest): Promise<TranslationResponse>;

  getSupportedLanguages(): string[] {
    return [
      'en', 'ar', 'fr', 'es', 'de', 'zh', 'ja', 'ko', 
      'pt', 'it', 'ru', 'nl', 'tr', 'pl', 'vi', 'th',
      'hi', 'id', 'ms', 'he', 'uk', 'cs', 'ro', 'hu',
      'sv', 'da', 'fi', 'no', 'el', 'bg', 'hr', 'sk', 'sl'
    ];
  }

  protected mapLanguageCode(code: string, provider: string): string {
    const mapping: Record<string, Record<string, string>> = {
      openrouter: {
        en: 'English', ar: 'Arabic', fr: 'French', es: 'Spanish',
        de: 'German', zh: 'Chinese', ja: 'Japanese', ko: 'Korean',
        pt: 'Portuguese', it: 'Italian', ru: 'Russian', nl: 'Dutch',
      },
      openai: {
        en: 'English', ar: 'Arabic', fr: 'French', es: 'Spanish',
        de: 'German', zh: 'Chinese', ja: 'Japanese', ko: 'Korean',
        pt: 'Portuguese', it: 'Italian', ru: 'Russian', nl: 'Dutch',
      },
      anthropic: {
        en: 'English', ar: 'Arabic', fr: 'French', es: 'Spanish',
        de: 'German', zh: 'Chinese', ja: 'Japanese', ko: 'Korean',
        pt: 'Portuguese', it: 'Italian', ru: 'Russian', nl: 'Dutch',
      },
    };
    return mapping[provider]?.[code] || code;
  }

  protected async makeRequest<T>(
    endpoint: string,
    body: Record<string, unknown>,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      method: options?.method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`AI Provider Error: ${response.status} - ${error}`);
    }

    return response.json();
  }
}
