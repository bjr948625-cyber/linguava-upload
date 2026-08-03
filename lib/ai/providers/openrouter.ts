/**
 * OpenRouter Provider
 * Supports multiple AI models through OpenRouter API
 * 
 * OpenRouter provides access to 300+ models including:
 * - GPT-4, Claude, Gemini
 * - Open source models (Mistral, Llama, etc.)
 * - Specialized translation models
 */

import type { TranslationRequest, TranslationResponse } from '../types';
import { BaseProvider } from './base';

interface OpenRouterResponse {
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
  model: string;
}

export class OpenRouterProvider extends BaseProvider {
  name = 'openrouter';
  private defaultModel = 'anthropic/claude-3.5-sonnet';

  constructor(apiKey: string, model?: string) {
    super(apiKey, model);
    this.model = model || this.defaultModel;
  }

  getDefaultModel(): string {
    return 'anthropic/claude-3.5-sonnet';
  }

  getDefaultBaseUrl(): string {
    return 'https://openrouter.ai/api/v1';
  }

  getSupportedLanguages(): string[] {
    return [
      'en', 'ar', 'fr', 'es', 'de', 'zh', 'ja', 'ko',
      'pt', 'it', 'ru', 'nl', 'tr', 'pl', 'vi', 'th',
      'hi', 'id', 'ms', 'he', 'uk', 'cs', 'ro', 'hu',
      'sv', 'da', 'fi', 'no', 'el', 'bg', 'hr', 'sk', 'sl',
      'lt', 'lv', 'et',
    ];
  }

  async translate(request: TranslationRequest): Promise<TranslationResponse> {
    const sourceLang = this.mapLanguageCode(request.sourceLanguage, 'openrouter');
    const targetLang = this.mapLanguageCode(request.targetLanguage, 'openrouter');

    const systemPrompt = `You are a professional translator. Translate the following text from ${sourceLang} to ${targetLang} accurately and naturally. 
- Maintain the original tone and style
- Preserve technical terms when appropriate
- Keep the same formatting and line breaks
- Do not add any explanations or notes
- Only output the translated text`;

    const userPrompt = request.text;

    const response = await this.makeRequest<OpenRouterResponse>('/chat/completions', {
      model: this.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
      max_tokens: 4096,
    });

    const translatedText = response.choices[0]?.message?.content?.trim();

    if (!translatedText) {
      throw new Error('Empty translation response from OpenRouter');
    }

    return {
      translatedText,
      model: response.model,
      usage: {
        promptTokens: response.usage.prompt_tokens,
        completionTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      },
    };
  }

  static getAvailableModels(): Array<{ id: string; name: string; provider: string }> {
    return [
      { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
      { id: 'anthropic/claude-3-opus', name: 'Claude 3 Opus', provider: 'Anthropic' },
      { id: 'openai/gpt-4o', name: 'GPT-4o', provider: 'OpenAI' },
      { id: 'openai/gpt-4-turbo', name: 'GPT-4 Turbo', provider: 'OpenAI' },
      { id: 'google/gemini-pro-1.5', name: 'Gemini Pro 1.5', provider: 'Google' },
      { id: 'meta-llama/llama-3-70b-instruct', name: 'Llama 3 70B', provider: 'Meta' },
    ];
  }
}
