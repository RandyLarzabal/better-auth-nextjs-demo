import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/db";

// Configuration Better Auth - Simple et moderne
export const auth = betterAuth({
  // Connexion à la base de données via Drizzle
  database: drizzleAdapter(db, {
    provider: "pg" // PostgreSQL
  }),

  // Authentification par email/password
  emailAndPassword: {
    enabled: true,
    //requireEmailVerification: true // Email obligatoire pour activer le compte
  },
  
  // Sessions sécurisées (configuration par défaut optimale)
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 jours
  }
}); 