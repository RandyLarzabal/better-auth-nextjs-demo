"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";

// Page d'accueil - Better Auth Demo
export default function HomePage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Better Auth Demo</span>
            </div>
            
            {session ? (
              <div className="text-sm text-gray-600">
                Connecté en tant que <span className="font-medium">{session.user.name}</span>
              </div>
            ) : (
              <div className="space-x-4">
                <Link href="/auth/sign-in" className="text-blue-600 hover:text-blue-700 font-medium">
                  Connexion
                </Link>
                <Link href="/auth/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Inscription
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Better Auth
            <span className="text-blue-600"> Demo</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Authentification TypeScript moderne. Simple, sécurisée, et prête pour la production.
          </p>

          {session ? (
            <div className="space-y-4">
              <p className="text-lg text-green-600 font-medium">
                ✅ Vous êtes connecté !
              </p>
              <Link
                href="/dashboard"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Accéder au Dashboard
              </Link>
            </div>
          ) : (
            <div className="flex justify-center space-x-4">
              <Link
                href="/auth/sign-up"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Créer un compte
              </Link>
              <Link
                href="/auth/sign-in"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50"
              >
                Se connecter
              </Link>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              🔐
            </div>
            <h3 className="text-lg font-semibold mb-2">Sécurité intégrée</h3>
            <p className="text-gray-600 text-sm">
              CSRF, sessions sécurisées, et validation automatique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-semibold mb-2">Configuration rapide</h3>
            <p className="text-gray-600 text-sm">
              3 lignes de code pour un système d'auth complet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              🧩
            </div>
            <h3 className="text-lg font-semibold mb-2">Plugins modulaires</h3>
            <p className="text-gray-600 text-sm">
              Ajoutez uniquement les fonctionnalités nécessaires.
            </p>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Configuration Better Auth
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Serveur (lib/auth.ts)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { betterAuth } from "better-auth"

export const auth = betterAuth({
  database: drizzleAdapter(db),
  emailAndPassword: { 
    enabled: true 
  }
})`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Client (lib/auth-client.ts)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient()

export const { useSession } = authClient`}</code>
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
