import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { translateText, getAIConfig } from '@/lib/ai';

const translateSchema = z.object({
  text: z.string().min(1, 'Text is required').max(50000, 'Text too long'),
  sourceLanguage: z.string().min(2).max(10),
  targetLanguage: z.string().min(2).max(10),
});

export async function POST(request: NextRequest) {
  try {
    // Get auth token from cookie or header
    const token = request.cookies.get('auth-token')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');
    
    // For now, allow unauthenticated access (you can add auth check later)
    // if (!token) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();
    const validation = translateSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { text, sourceLanguage, targetLanguage } = validation.data;

    // Check if AI is configured
    const aiConfig = getAIConfig();
    if (!aiConfig.hasApiKey) {
      return NextResponse.json(
        { error: 'AI provider not configured. Please set OPENROUTER_API_KEY or another AI provider key.' },
        { status: 503 }
      );
    }

    // Perform translation
    const result = await translateText({
      text,
      sourceLanguage,
      targetLanguage,
    });

    return NextResponse.json({
      success: true,
      translatedText: result.translatedText,
      model: result.model,
      usage: result.usage,
      sourceLanguage,
      targetLanguage,
    });

  } catch (error) {
    console.error('Translation error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'AI provider configuration error', message: error.message },
          { status: 503 }
        );
      }
      return NextResponse.json(
        { error: 'Translation failed', message: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const aiConfig = getAIConfig();
  
  return NextResponse.json({
    provider: aiConfig.provider,
    configured: aiConfig.hasApiKey,
    model: aiConfig.model,
    availableProviders: aiConfig.availableProviders,
  });
}
