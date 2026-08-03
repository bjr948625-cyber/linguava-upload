/**
 * Google Gemini Provider
 * Direct Gemini API integration for translation
 */

import type { TranslationRequest, TranslationResponse } from '../types';
import { BaseProvider } from './base';

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
  usageMetadata?: {
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number;
  };
}

export class GeminiProvider extends BaseProvider {
  name = 'gemini';
  private defaultModel = 'gemini-1.5-pro';

  constructor(apiKey: string, model?: string) {
    super(apiKey, model);
    this.model = model || this.defaultModel;
  }

  getDefaultModel(): string {
    return 'gemini-1.5-pro';
  }

  getDefaultBaseUrl(): string {
    return 'https://generativelanguage.googleapis.com/v1beta/models';
  }

  async translate(request: TranslationRequest): Promise<TranslationResponse> {
    const sourceLang = this.mapLanguageCode(request.sourceLanguage, 'gemini');
    const targetLang = this.mapLanguageCode(request.targetLanguage, 'gemini');

    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}. Only output the translated text:\n\n${request.text}`;

    const url = `${this.baseUrl}/${this.model}:generateContent?key=${this.apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 4096,
        }
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Gemini API Error: ${response.status} - ${error}`);
    }

    const data: GeminiResponse = await response.json();
    const translatedText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!translatedText) {
      throw new Error('Empty translation response from Gemini');
    }

    return {
      translatedText,
      model: this.model,
      usage: {
        promptTokens: data.usageMetadata?.promptTokenCount,
        completionTokens: data.usageMetadata?.candidatesTokenCount,
        totalTokens: data.usageMetadata?.totalTokenCount,
      },
    };
  }
}
