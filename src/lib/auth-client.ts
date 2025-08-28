import { createAuthClient } from "better-auth/react"

// Client Better Auth pour React - Configuration côté navigateur
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000" // URL de votre API
})

// Hooks React prêts à l'emploi exportés pour faciliter l'usage
export const { useSession, signIn, signOut, signUp } = authClient;

