/**
 * AI Translation Provider Factory
 * Creates and manages AI translation providers
 * 
 * Usage:
 *   const ai = createAIProvider();
 *   const result = await ai.translate({ text: 'Hello', sourceLanguage: 'en', targetLanguage: 'ar' });
 */

import type { AIProvider, ProviderType, TranslationRequest, TranslationResponse } from './types';
import { OpenRouterProvider } from './providers/openrouter';
import { OpenAIProvider } from './providers/openai';
import { GeminiProvider } from './providers/gemini';
import { AnthropicProvider } from './providers/anthropic';

// Environment variable names
const ENV_KEYS: Record<ProviderType, string> = {
  openrouter: 'OPENROUTER_API_KEY',
  openai: 'OPENAI_API_KEY',
  gemini: 'GEMINI_API_KEY',
  anthropic: 'ANTHROPIC_API_KEY',
};

// Default provider order
const DEFAULT_PROVIDER_ORDER: ProviderType[] = ['openrouter', 'openai', 'gemini', 'anthropic'];

/**
 * Get API key from environment variables
 */
function getApiKey(provider: ProviderType): string | undefined {
  return process.env[ENV_KEYS[provider]];
}

/**
 * Get configured provider from environment
 */
export function getConfiguredProvider(): ProviderType {
  const configuredProvider = process.env.AI_PROVIDER as ProviderType;
  
  if (configuredProvider && getApiKey(configuredProvider)) {
    return configuredProvider;
  }
  
  for (const provider of DEFAULT_PROVIDER_ORDER) {
    if (getApiKey(provider)) {
      return provider;
    }
  }
  
  return 'openrouter';
}

/**
 * Create an AI provider instance based on environment configuration
 */
export function createAIProvider(): AIProvider {
  const providerType = getConfiguredProvider();
  const apiKey = getApiKey(providerType);
  
  if (!apiKey) {
    throw new Error(
      `No API key found for provider "${providerType}". ` +
      `Please set the ${ENV_KEYS[providerType]} environment variable.`
    );
  }
  
  const model = process.env[`${providerType.toUpperCase()}_MODEL`];
  
  switch (providerType) {
    case 'openrouter':
      return new OpenRouterProvider(apiKey, model);
    case 'openai':
      return new OpenAIProvider(apiKey, model);
    case 'gemini':
      return new GeminiProvider(apiKey, model);
    case 'anthropic':
      return new AnthropicProvider(apiKey, model);
    default:
      throw new Error(`Unknown AI provider: ${providerType}`);
  }
}

/**
 * Translate text using configured AI provider
 */
export async function translateText(
  request: TranslationRequest
): Promise<TranslationResponse> {
  const provider = createAIProvider();
  return provider.translate(request);
}

/**
 * Get information about the current AI configuration
 */
export function getAIConfig() {
  const providerType = getConfiguredProvider();
  const apiKey = getApiKey(providerType);
  
  return {
    provider: providerType,
    hasApiKey: !!apiKey,
    model: process.env[`${providerType.toUpperCase()}_MODEL`] || 'default',
    availableProviders: DEFAULT_PROVIDER_ORDER.filter(p => getApiKey(p)),
  };
}

/**
 * Create a provider for a specific type
 */
export function createProvider(
  type: ProviderType,
  apiKey?: string,
  model?: string
): AIProvider {
  const key = apiKey || getApiKey(type);
  
  if (!key) {
    throw new Error(`No API key provided for ${type}`);
  }
  
  switch (type) {
    case 'openrouter':
      return new OpenRouterProvider(key, model);
    case 'openai':
      return new OpenAIProvider(key, model);
    case 'gemini':
      return new GeminiProvider(key, model);
    case 'anthropic':
      return new AnthropicProvider(key, model);
    default:
      throw new Error(`Unknown AI provider: ${type}`);
  }
}

// Re-export types and providers
export * from './types';
export { OpenRouterProvider } from './providers/openrouter';
export { OpenAIProvider } from './providers/openai';
export { GeminiProvider } from './providers/gemini';
export { AnthropicProvider } from './providers/anthropic';
