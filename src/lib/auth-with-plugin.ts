import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins/magic-link";
import { db } from "./db/db";

// Configuration Better Auth AVEC plugin Magic Link
// Exemple simple d'extension de fonctionnalités
export const authWithPlugin = betterAuth({
  // Base de données (même config)
  database: drizzleAdapter(db, {
    provider: "pg"
  }),

  // Authentification classique
  emailAndPassword: {
    enabled: true,
  },
  
  // Plugin Magic Link - Connexion sans mot de passe
  plugins: [
    magicLink({
      // Fonction d'envoi du lien magique
      sendMagicLink: async ({ email, token, url }) => {
        // En développement : affichage dans la console
        console.log('📧 Magic Link généré:');
        console.log('📨 Email:', email);
        console.log('🔗 Lien:', url);
        
        // En production, intégrez votre service d'email :
        // await sendEmail({
        //   to: email,
        //   subject: "Votre lien de connexion",
        //   html: `<p>Cliquez <a href="${url}">ici</a> pour vous connecter</p>`
        // });
      }
    })
  ]
});