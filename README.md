# Better Auth + Next.js Demo

Démonstration complète de **Better Auth** avec Next.js 15, TypeScript, et Drizzle ORM.

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Configuration de la base de données

```bash
# Créer .env.local avec DATABASE_URL
cp .env.example .env.local

# Générer et migrer le schéma
npm run auth:generate
npm run auth:migrate
```

### 3. Générer une clé secrète
```bash
npm run auth:secret
```

### 4. Lancer l'application
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## ✨ Fonctionnalités

- ✅ **Authentification email/password**
- ✅ **Sessions sécurisées** avec Better Auth
- ✅ **Pages d'inscription/connexion** complètes
- ✅ **Dashboard protégé** avec gestion de session
- ✅ **Exemples de plugins** (Magic Link, 2FA, etc.)
- ✅ **Schémas BDD générés automatiquement**

## 🛠️ Scripts disponibles

### Better Auth CLI
```bash
npm run auth:generate    # Génère le schéma Better Auth
npm run auth:migrate     # Migre la base de données
npm run auth:secret      # Génère une clé secrète
npm run auth:info        # Infos de diagnostic
```

### Drizzle ORM
```bash
npm run db:generate      # Génère les migrations Drizzle
npm run db:migrate       # Applique les migrations
```

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Auth**: Better Auth 1.3.7
- **Database**: PostgreSQL + Drizzle ORM
- **Styling**: Tailwind CSS 4
- **Type Safety**: TypeScript 5

## 📁 Structure

```
src/
├── lib/
│   ├── auth.ts          # Configuration Better Auth
│   ├── auth-client.ts   # Client Better Auth React
│   └── db/              # Schémas Drizzle
├── app/
│   ├── auth/            # Pages d'authentification
│   ├── dashboard/       # Zone protégée
│   ├── examples/        # Démo plugins
│   └── page.tsx         # Page d'accueil
```

## 🎯 Points clés Better Auth

**Le moment "wow" :** 
```bash
npm run auth:migrate
```
→ **Toutes vos tables d'authentification se créent automatiquement !**

Plus jamais de schéma SQL manuel. Better Auth génère :
- `user` - Utilisateurs
- `session` - Sessions actives  
- `account` - Comptes OAuth
- `verification` - Tokens de vérification

## 🔗 Liens utiles

- [Better Auth Documentation](https://better-auth.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM](https://orm.drizzle.team)
