# @recraft/design-system

Design system React professionnel pour applications RH/Employés, avec tokens sémantiques et composants TypeScript.

## 🚀 Installation (Monorepo Yarn)

```bash
# Dans votre workspace
yarn add @recraft/design-system
```

## 📦 Usage

```typescript
// Import components
import { 
  Button, 
  Card, 
  CompetenceMiniCard, 
  JobMetricCard 
} from '@recraft/design-system';

// Import styles (required)
import '@recraft/design-system/styles';

// Or just tokens for custom styling
import '@recraft/design-system/tokens';
```

## 🎨 Composants disponibles

### Core UI
- **Button** - 6 variants, 4 sizes
- **Card** - Avec header/content/footer
- **Badge** - 7 variants sémantiques
- **Input, Select, Checkbox, Radio, Switch**
- **Progress, Skeleton, Spinner**

### Navigation  
- **PageHeader** - Headers avec avatar/icônes
- **Breadcrumb** - Navigation fil d'Ariane
- **SidebarMenu, NavigationBar**

### HR Spécifiques
- **CompetenceMiniCard** - Mini-cards compétences
- **JobMetricCard** - Métriques métier
- **EvolutionWishCard** - Souhaits d'évolution  
- **BusinessEntityBadge** - Entités métier RH

### Data & Feedback
- **DataTable** - Tableaux avec tri/filtre
- **Modal, Toast** - Notifications
- **EmptyState** - États vides

## 🎯 Tokens sémantiques

```css
/* Entités RH */
--hr-employee: 217 91% 60%;
--hr-skill: 210 100% 45%;
--hr-training: 239 66% 69%;

/* Status */
--status-success: 120 100% 30%;
--status-warning: 45 100% 50%;
--destructive: 0 100% 50%;
```

## 📚 Documentation

- **Storybook** : http://localhost:6006
- **TypeScript** : Types complets inclus
- **WCAG AA** : Accessibilité garantie

## 🏗️ Monorepo Setup

```json
// Dans apps/mon-app/package.json
{
  "dependencies": {
    "@recraft/design-system": "workspace:*"
  }
}
```

```typescript
// apps/mon-app/src/App.tsx
import { Button, Card } from '@recraft/design-system';
import '@recraft/design-system/styles';

export default function App() {
  return (
    <Card>
      <Button>Hello World</Button>
    </Card>
  );
}
```

---

**Design System v1.0** - Prêt pour production ! 🎉