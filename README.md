# AfricaHub - Comparateur de produits pour l'Afrique

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📌 Description
Plateforme de comparaison intelligente de produits et services pour le marché africain, couvrant les 54 pays du continent avec des fonctionnalités adaptées à chaque région.

## ✨ Fonctionnalités principales
- Moteur de comparaison IA avec recommandations personnalisées
- Support multilingue (FR, EN, AR, PT, SW, AM)
- Intégration des moyens de paiement locaux (Mobile Money, etc.)
- Tableaux de bord avancés pour administrateurs et modérateurs
- Système de notation et d'avis vérifiés

## 🛠 Stack Technique

### Frontend
- React 18 + Vite
- Tailwind CSS + Headless UI
- Zustand (state management)
- React Query (data fetching)

### Backend  
- Node.js/Express
- Supabase (PostgreSQL + Auth)
- Redis (caching)
- Elasticsearch (recherche)

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+
- PostgreSQL
- Redis

### Instructions
1. Cloner le dépôt :
```bash
git clone https://github.com/votre-repo/africahub.git
cd africahub
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer l'environnement :
```bash
cp .env.example .env
# Remplir les variables dans .env
```

4. Lancer l'environnement de développement :
```bash
npm run dev
```

## 📚 Documentation
- [Cahier des charges](/reference/cachier_de_charge.txt)
- [Memory Bank](/memory-bank/) (documentation technique complète)
- [API Documentation](https://api.africahub.docs) (à venir)

## 🤝 Contribution
Les contributions sont les bienvenues ! Veuillez suivre notre [guide de contribution](CONTRIBUTING.md).

## 📝 License
Ce projet est sous licence [MIT](LICENSE).
