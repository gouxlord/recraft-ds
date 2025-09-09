# Palette de Couleurs - Design System RH

## Vue d'ensemble
Palette de couleurs professionnelle et cohérente pour applications RH, avec une approche minimaliste privilégiant les nuances de bleu pour réduire la surcharge visuelle.

## 1. Couleurs Principales du Système

### Couleurs de Base
| Nom | Variable CSS | Valeur HSL | Hex | Usage |
|-----|-------------|------------|-----|--------|
| **Primary** | `--primary` | `hsl(262, 74%, 65%)` | #A78BFA | Actions principales, liens |
| **Secondary** | `--secondary` | `hsl(17, 100%, 60%)` | #FF7A33 | Actions secondaires |
| **Background** | `--background` | `hsl(0, 0%, 100%)` | #FFFFFF | Fond de page |
| **Foreground** | `--foreground` | `hsl(222.2, 84%, 4.9%)` | #020817 | Texte principal |
| **Border** | `--border` | `hsl(214.3, 31.8%, 91.4%)` | #E2E8F0 | Bordures, séparateurs |
| **Muted** | `--muted` | `hsl(210, 40%, 96.1%)` | #F1F5F9 | Fonds secondaires |

## 2. Entités Métier RH (Palette Bleue Unifiée)

### Nuances de Bleu
| Entité | Icône Phosphor | Couleur | Hex | Classes Tailwind |
|--------|---------------|---------|-----|------------------|
| **Employé** | UsersThree | Blue-600 | #3B82F6 | `bg-blue-50 text-blue-600` |
| **Métier/Job** | BriefcaseMetal | Blue-600 | #2563EB | `bg-blue-50 text-blue-600` |
| **Poste** | Chair | Blue-700 | #1D4ED8 | `bg-blue-50 text-blue-700` |

### Nuances d'Indigo
| Entité | Icône Phosphor | Couleur | Hex | Classes Tailwind |
|--------|---------------|---------|-----|------------------|
| **Contrat** | FileText | Indigo-600 | #4F46E5 | `bg-indigo-50 text-indigo-600` |
| **Formation** | GraduationCap | Indigo-500 | #6366F1 | `bg-indigo-50 text-indigo-500` |
| **Mission** | Notebook | Indigo-700 | #4338CA | `bg-indigo-50 text-indigo-700` |

### Nuances Sky/Cyan
| Entité | Icône Phosphor | Couleur | Hex | Classes Tailwind |
|--------|---------------|---------|-----|------------------|
| **Compétence** | Medal | Sky-500 | #0EA5E9 | `bg-sky-50 text-sky-500` |
| **Équipe** | Users | Cyan-500 | #06B6D4 | `bg-cyan-50 text-cyan-500` |

## 3. Statuts de Compétences (Heatmap)

| Statut | Icône | Couleur Principale | Hex | Fond | Bordure | Condition |
|--------|-------|-------------------|-----|------|---------|-----------|
| **Critique** | Warning ⚠️ | Red-700 | #B91C1C | `bg-red-50` | `border-red-200` | ≤ -1.0 |
| **À améliorer** | CircleDashed ⭕ | Orange-700 | #C2410C | `bg-orange-50` | `border-orange-200` | -0.9 à -0.1 |
| **Acquis** | CheckCircle ✅ | Green-700 | #15803D | `bg-green-50` | `border-green-200` | = 0.0 |
| **Expertise** | Crown 👑 | Yellow-500 | #EAB308 | `bg-green-50` | `border-green-200` | > 0.0 |

### Badge Compétence Clé
- **Fond**: #FEE2E2 (red-100)
- **Texte**: #991B1B (red-800)
- **Usage**: Identifier les compétences critiques du métier

## 4. Couleurs Sémantiques Standards

| État | Couleur | Hex | Fond Light | Usage |
|------|---------|-----|------------|--------|
| **Success** | Green-500 | #22C55E | #F0FDF4 | Validation, succès |
| **Warning** | Amber-500 | #F59E0B | #FEFCE8 | Alertes, attention |
| **Danger/Destructive** | Red-500 | #EF4444 | - | Erreurs, suppression |
| **Info** | Sky-500 | #0EA5E9 | #F0F9FF | Information |

## 5. Principes d'Application

### ✅ À faire
- **Utiliser les variables CSS** pour toutes les couleurs sémantiques
- **Privilégier la palette bleue** pour les entités métier
- **Réserver rouge/orange/vert** pour les statuts de compétences uniquement
- **Maintenir la cohérence** : même entité = même couleur partout
- **Utiliser les fonds clairs** (50) avec les textes foncés (600-700)

### ❌ À éviter
- Multiplier les couleurs différentes (« fête des couleurs »)
- Utiliser des couleurs hex directement dans le code
- Mélanger les couleurs métier et les couleurs de statut
- Créer de nouvelles nuances sans nécessité

## 6. Accessibilité

- **Contraste minimum** : WCAG AA (4.5:1 pour le texte normal)
- **Tous les textes sur fond clair** : utilisent des variantes 600-700
- **Tous les textes sur fond foncé** : utilisent du blanc
- **Les icônes** : toujours accompagnées de texte ou tooltip

## 7. Mode Sombre (Dark Mode)

Le système supporte un mode sombre avec inversion automatique :
- Les fonds clairs deviennent foncés
- Les textes foncés deviennent clairs
- Les couleurs sémantiques restent cohérentes

## 8. Implémentation Tailwind

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      // Utiliser via : bg-primary, text-primary-foreground
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      
      // Entités métier
      'hr-employee': 'hsl(217, 91%, 60%)',
      'hr-skill': 'hsl(199, 89%, 48%)',
      
      // Statuts compétences
      'skill-critical': 'hsl(0, 73%, 42%)',
      'skill-improve': 'hsl(22, 87%, 40%)',
      'skill-acquired': 'hsl(142, 68%, 28%)',
      'skill-expert': 'hsl(48, 89%, 48%)',
    }
  }
}
```

## 9. Exemples d'Usage

```jsx
// Entité métier
<div className="bg-blue-50 text-blue-600 border-blue-200">
  <UsersThree /> Employé
</div>

// Statut de compétence
<div className="bg-red-50 text-red-700 border-red-200">
  <Warning /> Critique
</div>

// Badge sémantique
<Badge className="bg-green-50 text-green-700">
  Actif
</Badge>
```

---

*Dernière mise à jour : Janvier 2025*