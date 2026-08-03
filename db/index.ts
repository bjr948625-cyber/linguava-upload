import 'server-only'
import { cache } from 'react'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users, subscriptions, translations, documents, apiKeys } from './schema/users'

// Create one postgres client PER REQUEST, scoped via React's `cache()`.
const getClient = cache(() => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
  }
  return postgres(process.env.DATABASE_URL, {
    prepare: false,
    max: 1,
    idle_timeout: 20,
  })
})

function getDb() {
  return drizzle(getClient())
}

// Lazy proxy for database access
export const db = new Proxy({} as ReturnType<typeof getDb>, {
  get(_target, prop: string | symbol) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

// Export schema tables
export { users, subscriptions, translations, documents, apiKeys }
