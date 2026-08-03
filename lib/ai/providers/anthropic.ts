/**
 * Anthropic Claude Provider
 * Direct Claude API integration for translation
 */

import type { TranslationRequest, TranslationResponse } from '../types';
import { BaseProvider } from './base';

interface AnthropicResponse {
  id: string;
  type: string;
  content: Array<{
    type: string;
    text: string;
  }>;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

export class AnthropicProvider extends BaseProvider {
  name = 'anthropic';
  private defaultModel = 'claude-3-5-sonnet-20240620';

  constructor(apiKey: string, model?: string) {
    super(apiKey, model);
    this.model = model || this.defaultModel;
  }

  getDefaultModel(): string {
    return 'claude-3-5-sonnet-20240620';
  }

  getDefaultBaseUrl(): string {
    return 'https://api.anthropic.com/v1';
  }

  async translate(request: TranslationRequest): Promise<TranslationResponse> {
    const sourceLang = this.mapLanguageCode(request.sourceLanguage, 'anthropic');
    const targetLang = this.mapLanguageCode(request.targetLanguage, 'anthropic');

    const systemPrompt = `You are a professional translator. Translate the following text from ${sourceLang} to ${targetLang} accurately and naturally. Only output the translated text.`;

    const response = await this.makeRequest<AnthropicResponse>('/messages', {
      model: this.model,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: request.text
      }]
    }, {
      method: 'POST',
      headers: {
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01'
      }
    });

    const translatedText = response.content?.[0]?.text?.trim();

    if (!translatedText) {
      throw new Error('Empty translation response from Anthropic');
    }

    return {
      translatedText,
      model: this.model,
      usage: {
        promptTokens: response.usage?.input_tokens,
        completionTokens: response.usage?.output_tokens,
        totalTokens: (response.usage?.input_tokens || 0) + (response.usage?.output_tokens || 0),
      },
    };
  }
}
