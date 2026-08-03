import { NextResponse } from 'next/server'
import { getAIConfig } from '@/lib/ai'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function GET() {
  const aiConfig = getAIConfig();
  
  return NextResponse.json(
    { 
      success: true, 
      message: 'ok',
      status: 'healthy',
      timestamp: new Date().toISOString(),
      ai: {
        configured: aiConfig.hasApiKey,
        provider: aiConfig.provider,
        model: aiConfig.model,
      },
      environment: process.env.NODE_ENV || 'development',
    },
    {
      status: 200,
      headers: corsHeaders,
    }
  )
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}
