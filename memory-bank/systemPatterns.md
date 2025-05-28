# Architecture et Modèles

## Structure des Composants
- **Header** : Composant partagé avec menu responsive
- **AuthProvider** : Gestion centralisée de l'authentification
- **Routing** : Hiérarchie BrowserRouter > AuthProvider > Routes

## Design Patterns
- **Context API** : Pour l'état d'authentification
- **Dynamic Import** : Chargement conditionnel de Supabase
- **Responsive First** : Mobile-first pour tous les composants

## Conventions
- Préfixes de classe Tailwind :
  - bg-primary: Couleurs principales
  - text-ui: Texte et interfaces
  - hover: États interactifs
