/**
 * OpenAI Provider
 * Direct OpenAI API integration for translation
 */

import type { TranslationRequest, TranslationResponse } from '../types';
import { BaseProvider } from './base';

interface OpenAIResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class OpenAIProvider extends BaseProvider {
  name = 'openai';
  private defaultModel = 'gpt-4o';

  constructor(apiKey: string, model?: string) {
    super(apiKey, model);
    this.model = model || this.defaultModel;
  }

  getDefaultModel(): string {
    return 'gpt-4o';
  }

  getDefaultBaseUrl(): string {
    return 'https://api.openai.com/v1';
  }

  async translate(request: TranslationRequest): Promise<TranslationResponse> {
    const sourceLang = this.mapLanguageCode(request.sourceLanguage, 'openai');
    const targetLang = this.mapLanguageCode(request.targetLanguage, 'openai');

    const systemPrompt = `You are a professional translator. Translate the following text from ${sourceLang} to ${targetLang} accurately and naturally. Only output the translated text.`;

    const response = await this.makeRequest<OpenAIResponse>('/chat/completions', {
      model: this.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: request.text },
      ],
      temperature: 0.3,
      max_tokens: 4096,
    });

    const translatedText = response.choices[0]?.message?.content?.trim();

    if (!translatedText) {
      throw new Error('Empty translation response from OpenAI');
    }

    return {
      translatedText,
      model: this.model,
      usage: {
        promptTokens: response.usage.prompt_tokens,
        completionTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      },
    };
  }
}
