import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

// For Next.js, we need to handle global singleton pattern carefully
// to prevent multiple connections and ensure env vars are accessible

// Check if we're in a production environment
const isProd = process.env.NODE_ENV === 'production';

// Use a more reliable way to access Next.js environment variables
const connectionUrl = process.env.TURSO_CONNECTION_URL || process.env.NEXT_PUBLIC_TURSO_CONNECTION_URL;
const authToken = process.env.TURSO_AUTH_TOKEN || process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN;

// Log the environment variables for debugging (will only show in server logs)
console.log("Environment check:", {
  NODE_ENV: process.env.NODE_ENV,
  connectionUrlExists: !!connectionUrl,
  authTokenExists: !!authToken
});

// Create the client with hard error if credentials are missing
if (!connectionUrl || !authToken) {
  throw new Error("Turso database credentials missing. Make sure TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN are set in your .env.local file.");
}

// Create a global singleton to prevent multiple connections
let globalWithDb = global as typeof global & {
  db: any;
};

export const db = globalWithDb.db || drizzle(
  createClient({
    url: connectionUrl,
    authToken: authToken,
  }),
  { schema }
);

// In development, save the db instance to avoid creating new
// connections during hot reloads
if (!isProd) {
  globalWithDb.db = db;
}
