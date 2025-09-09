# Plan d'Évolution Design System - Alignement base.png

## 🎯 Objectif
Aligner notre Design System avec l'esthétique professionnelle et subtile de `base.png` pour atteindre un niveau d'élégance et de raffinement supérieur.

## 📊 État Actuel vs Cible

### Look & Feel Score: **65%**
- ✅ **Couleurs**: 90% - Variables CSS conformes
- ❌ **Typographie**: 40% - Trop agressive
- ❌ **Espacement**: 50% - Manque de respiration
- ❌ **Composants Métier**: 30% - Manque spécificités RH

---

## 🚀 Phase 1: Foundation Refinement (PRIORITÉ MAX)

### 1.1 Typographie Professionnelle
**Problème**: Hiérarchie trop agressive vs subtilité base.png

**Actions**:
```css
/* Réduction des tailles pour plus de raffinement */
h1: text-3xl → text-2xl (au lieu de 4xl)
h2: text-2xl → text-xl (au lieu de 3xl)  
h3: text-xl → text-lg (au lieu de 2xl)
h4: text-lg → text-base (au lieu de xl)

/* Ajout Lexend pour les headings */
font-heading: ['Lexend', 'Inter', 'system-ui']
```

### 1.2 Système d'Espacement Généreux
**Problème**: CardContent p-6 trop serré vs respiration base.png

**Actions**:
```css
/* Nouvelles variables d'espacement */
--spacing-card-sm: 1.5rem;  /* 24px */
--spacing-card-md: 2rem;    /* 32px */
--spacing-card-lg: 3rem;    /* 48px */

/* Application dans composants */
CardContent: p-6 → p-8 (défaut)
CardHeader: p-6 → p-8
Section gaps: space-y-6 → space-y-8
```

### 1.3 Border-radius Cohérent
**Problème**: Mélange rounded-lg/xl/2xl

**Actions**:
```css
/* Système unifié basé sur base.png */
--radius-card: 0.75rem;     /* 12px - principal */
--radius-element: 0.5rem;   /* 8px - éléments UI */
--radius-badge: 9999px;     /* full - badges uniquement */
```

---

## 🎨 Phase 2: Composants Métier RH

### 2.1 Score Component (NOUVEAU)
**Besoin**: Scores "4.0" avec fond coloré comme base.png

**Composant à créer**:
```tsx
<ScoreDisplay 
  value={4.0} 
  variant="skill" 
  size="md" 
/>
```

### 2.2 Progress Bars Subtiles
**Problème**: h-2 trop épais vs finesse base.png

**Actions**:
```tsx
// Progress par défaut plus fin
default: h-1 (au lieu de h-2)
sm: h-0.5
lg: h-1.5
```

### 2.3 Tableau Compétences Spécialisé
**Besoin**: Colonnes ÉCART/ANALYSE/ACTIONS avec badges intégrés

**Composant à créer**:
```tsx
<SkillsTable 
  data={competences}
  showAnalysis={true}
  showActions={true}
/>
```

---

## 🏗️ Phase 3: Layout & Navigation

### 3.1 Sidebar Navigation
**Besoin**: Navigation latérale comme base.png

**Structure**:
- Logo RECRAFT en haut
- Navigation hiérarchique avec badges
- Profil utilisateur intégré
- État actif/hover subtils

### 3.2 Header Profil
**Besoin**: Zone profil Sophie Durani style

**Éléments**:
- Avatar + nom + fonction
- Badges entités (Métier, Contrat, etc.)
- Actions contextuelles

---

## 🎪 Phase 4: Composants Avancés

### 4.1 Passeport de Compétences
**Besoin**: Grille 4x2 avec scores colorés

**Features**:
- Score numérique prominent (4.0)
- Couleurs sémantiques par niveau
- Icônes Phosphor intégrées
- Hover states élégants

### 4.2 Souhaits d'Évolution Cards
**Besoin**: Cards pourcentage avec metadata

**Structure**:
- Pourcentage central (60%)
- Titre formation
- Badge entité + durée
- Progress bar subtile

---

## 📈 Phase 5: Polish & Animations

### 5.1 Micro-interactions
- Hover states plus subtils
- Transitions fluides (300ms)
- Focus states accessibles

### 5.2 Système de Couleurs Finalisé
- Mode sombre optimisé
- Contraste WCAG AAA
- Variables sémantiques complètes

---

## 🎯 Métriques de Succès

### Look & Feel Target: **95%**
- **Typographie**: 95% (hiérarchie professionnelle)
- **Espacement**: 95% (respiration généreuse)  
- **Composants**: 95% (spécificités RH couvertes)
- **Cohérence**: 95% (système unifié)

### Timeline Estimée
- **Phase 1**: 2-3 jours (foundation)
- **Phase 2**: 3-4 jours (composants métier)  
- **Phase 3**: 2-3 jours (layout)
- **Phase 4**: 4-5 jours (composants avancés)
- **Phase 5**: 1-2 jours (polish)

**Total: 12-17 jours**

---

## 🚨 Points d'Attention

### Compatibilité
- Migration progressive des composants existants
- Backward compatibility maintenue
- Tests visuels sur tous les composants

### Accessibilité
- Contraste maintenu avec nouvelles tailles
- Navigation clavier optimisée
- Lecteurs d'écran compatibles

### Performance
- CSS variables pour éviter la duplication
- Tree-shaking des composants non utilisés
- Lazy loading des composants lourds

---

*Plan créé le: Janvier 2025*
*Basé sur: base.png + analyse DS existant*