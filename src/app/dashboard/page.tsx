"use client";

import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Dashboard protégé - Accessible uniquement aux utilisateurs connectés
export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  // Redirection si non connecté
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/sign-in");
    }
  }, [session, isPending, router]);

  // Loading state
  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Pas de session = redirection
  if (!session) {
    return null;
  }

  // Déconnexion
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm">
              ← Accueil
            </Link>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button
              onClick={handleSignOut}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Carte de bienvenue */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            👋 Bonjour {session.user.name} !
          </h2>
          <p className="text-gray-600">
            Bienvenue dans votre dashboard Better Auth. Votre session est sécurisée.
          </p>
        </div>

        {/* Informations utilisateur */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              📋 Informations du compte
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Nom :</span> {session.user.name}</p>
              <p><span className="font-medium">Email :</span> {session.user.email}</p>
              <p><span className="font-medium">ID :</span> {session.user.id}</p>
              <p>
                <span className="font-medium">Email vérifié :</span>{" "}
                {session.user.emailVerified ? (
                  <span className="text-green-600">✅ Oui</span>
                ) : (
                  <span className="text-red-600">❌ Non</span>
                )}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              🔐 Session active
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Session ID :</span> {session.session.id.substring(0, 12)}...</p>
              <p><span className="font-medium">Expire le :</span> {new Date(session.session.expiresAt).toLocaleDateString('fr-FR')}</p>
              <p className="text-green-600 font-medium">🟢 Authentifié</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🚀 Fonctionnalités Better Auth
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">🔑</div>
              <h4 className="font-medium">Auth Simple</h4>
              <p className="text-xs text-gray-600 mt-1">Email + Password</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-medium">Magic Links</h4>
              <p className="text-xs text-gray-600 mt-1">Sans mot de passe</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-medium">Sécurité</h4>
              <p className="text-xs text-gray-600 mt-1">Built-in protection</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}