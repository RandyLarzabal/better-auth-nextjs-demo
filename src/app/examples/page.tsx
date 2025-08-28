"use client";

import { useState } from "react";
import Link from "next/link";

// Page d'exemples - Fonctionnalités Better Auth simples
export default function ExamplesPage() {
  const [email, setEmail] = useState("");

  // Simulation d'envoi de magic link (pour la démo)
  const handleMagicLink = () => {
    if (email) {
      alert(`Magic Link envoyé à ${email}!\nVérifiez la console (F12) pour voir le lien.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Retour à l'accueil
            </Link>
            <h1 className="text-xl font-semibold">Exemples Better Auth</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🧪 Exemples de plugins
          </h1>
          <p className="text-gray-600">
            Découvrez comment étendre Better Auth avec des plugins simples
          </p>
        </div>

        {/* Magic Link Demo */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">⚡ Magic Link</h2>
          <p className="text-gray-600 mb-4">
            Connexion sans mot de passe via email sécurisé
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Demo interactif */}
            <div>
              <h3 className="font-medium mb-3">Démo interactive</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleMagicLink}
                  disabled={!email}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50"
                >
                  Générer Magic Link
                </button>
              </div>
            </div>

            {/* Code */}
            <div>
              <h3 className="font-medium mb-3">Configuration</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto">
                <code>{`// lib/auth.ts
import { magicLink } from "better-auth/plugins"

export const auth = betterAuth({
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await sendEmail(email, url)
      }
    })
  ]
})`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Autres plugins disponibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-3">🛡️ Two-Factor Auth</h3>
            <p className="text-gray-600 text-sm mb-4">
              Authentification à deux facteurs avec QR codes
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs">
              <code>twoFactor()</code>
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-3">🏢 Organizations</h3>
            <p className="text-gray-600 text-sm mb-4">
              Gestion d'équipes et d'organisations
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs">
              <code>organization()</code>
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-3">🔑 Bearer Tokens</h3>
            <p className="text-gray-600 text-sm mb-4">
              Tokens d'authentification pour APIs
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs">
              <code>bearer()</code>
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-3">📱 Phone Number</h3>
            <p className="text-gray-600 text-sm mb-4">
              Authentification par numéro de téléphone
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs">
              <code>phoneNumber()</code>
            </pre>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            💡 Principe des plugins
          </h3>
          <p className="text-blue-800 text-sm">
            Better Auth utilise une architecture modulaire. Chaque plugin ajoute des fonctionnalités 
            spécifiques sans complexifier la configuration de base. Installez uniquement ce dont vous avez besoin !
          </p>
        </div>
      </main>
    </div>
  );
}