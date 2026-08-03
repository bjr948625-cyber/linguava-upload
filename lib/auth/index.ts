/**
 * Authentication utilities
 * Provides JWT token management and user authentication
 */

import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || process.env.AUTH_SECRET || 'linguava-secret-key-change-in-production';
const TOKEN_EXPIRY = '7d';

export interface UserPayload {
  id: string;
  email: string;
  name?: string;
  role?: 'user' | 'admin';
}

export interface TokenData {
  token: string;
  expiresAt: Date;
}

/**
 * Generate a JWT token for a user
 */
export function generateToken(user: UserPayload): TokenData {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role || 'user',
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY }
  );

  return { token, expiresAt };
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): UserPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Extract token from request (cookie or header)
 */
export function extractToken(request: NextRequest): string | null {
  // Try cookie first
  const cookieToken = request.cookies.get('auth-token')?.value;
  if (cookieToken) return cookieToken;

  // Try Authorization header
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  return null;
}

/**
 * Get user from token in request
 */
export async function getUserFromToken(request: NextRequest): Promise<UserPayload | null> {
  const token = extractToken(request);
  if (!token) return null;

  return verifyToken(token);
}

/**
 * Create response with auth cookie
 */
export function createAuthResponse(
  data: object,
  token: string,
  expiresAt: Date
): Response {
  const response = new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

  response.cookies.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });

  return response;
}

/**
 * Clear auth cookie
 */
export function clearAuthCookie(): Response {
  const response = new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

  response.cookies.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(0),
    path: '/',
  });

  return response;
}
