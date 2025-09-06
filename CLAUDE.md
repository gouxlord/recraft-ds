# 🎨 Design System – HR SaaS (React + shadcn + Phosphor Icons)

## 🎯 Objectif

Créer un **design system complet, structuré et professionnel** pour un SaaS de gestion des compétences et de développement de carrière.  
Le design system doit être **codé en React** avec **Tailwind CSS** pour le styling, **shadcn/ui** comme base de composants et **Phosphor Icons** pour l'iconographie.  
Une **page showcase** doit regrouper l'ensemble des composants (storybook-like).  
Des **pages exemples** doivent illustrer l'utilisation concrète dans différents cas RH.

---

## 👩‍💼 Contexte & Ton

- Acheteurs : principalement des **RH (80% femmes)**.  
- Utilisateurs : **salariés mixtes** et **managers**.  
- Les salariés ne sont pas obligés d'utiliser la plateforme → l'interface doit être **agréable, engageante et valorisante**.  
- Les managers jonglent entre l'opérationnel et le management → interface **pragmatique et efficace**.  
- Inspirations :  
  - **Lucca** → aéré, humain, agréable.  
  - **Alan** → sérieux, confiance, modernité (sans côté cartoon).  
- Éviter les excès "sirupeux" (Assessfirst, Teamtailor).  

---

## 🎨 Fondations

### Palette de couleurs

```js
primary: {
  '50': '#F3EFFD',
  '100': '#E7DFFB',
  '200': '#D0BFF6',
  '300': '#B99FF2',
  '400': '#B18AF9',
  '500': '#9B6FE8',
  '600': '#8556D6',
  '700': '#6E3DC4',
  '800': '#5728A3',
  '900': '#411C82',
  DEFAULT: 'hsl(var(--primary))',
  foreground: 'hsl(var(--primary-foreground))'
},
secondary: {
  '50': '#FFF3EF',
  '100': '#FFE7DE',
  '200': '#FFCFBD',
  '300': '#FFB79C',
  '400': '#FF9F7B',
  '500': '#FF6D33',
  '600': '#FF4500',
  '700': '#CC3700',
  '800': '#992900',
  '900': '#661B00',
  DEFAULT: 'hsl(var(--secondary))',
  foreground: 'hsl(var(--secondary-foreground))'
}
```

### Typographie

- Hiérarchie claire : titres (H1–H6), corps, labels, légendes.
- Polices modernes, lisibles, avec contrastes suffisants.

### Grille & Espacement

- Système responsive basé sur 4/8px.
- White space aéré pour éviter la lourdeur.

### Iconographie

- Utiliser Phosphor Icons.
- Taille par défaut 20–24px, cohérence stricte.

### Illustrations

- Subtiles, élégantes, pas enfantines.
- Utilisées seulement dans les empty states et onboarding.

### Modes

- Light & Dark mode supportés.
- Conformité WCAG pour l'accessibilité.

---

## 🧩 Composants

### Layout & Navigation

- Layout global (sidebar + header).
- Dashboard layout (cards, KPIs, quick actions).
- Split view (opérationnel vs humain).
- Sidebar (collapsible, icons + labels).
- Topbar (search, notifications, profil).
- Breadcrumbs.
- Tabs & segmented controls.

### Data Display

- Data tables (triables, filtrables, responsives).
- Cards : profil, métrique, action.
- Graphiques : barres, lignes, radar, donuts.
- Jauges de compétences (avatar + cible).
- Badges, tags, progress bars.
- Accordions, panels.

### Actions

- Boutons : primaire, secondaire, ghost, destructive, icon-only.
- Action cards (formations, mentoring, lectures).
- Modals (confirmations, formulaires).
- Toasts & bannières (succès, erreur, info).

### Formulaires

- Inputs : text, email, password, number, textarea.
- Select & multi-select avec recherche.
- Radios, checkboxes, switches.
- Date pickers, sliders.
- Upload fichier (drag & drop).
- Wizards / steppers (workflows RH).

### HR-Specific

- Profil salarié (infos, compétences, objectifs).
- Timeline de carrière.
- Radar de compétences.
- Recommandations (formations, mentoring).
- Dashboard manager (heatmap, risques, postes vacants).

### États & Feedback

- Empty states (illustrés, engageants).
- Loading states (skeletons, spinners).
- Success, error, confirmation.

---

## 📄 Pages Exemple

### Dashboard général
KPIs, quick actions, graphiques, notifications.

### Fiche salarié
Profil, compétences, objectifs, suggestions de développement.

### Pilotage manager
Vue d'équipe, heatmap des risques, postes ouverts.

### Carrière employé
Timeline, radar de compétences, actions recommandées.

### Admin RH
Gestion des référentiels, postes, missions, formations.

---

## 🚀 Livrable attendu

- Code React basé sur Tailwind CSS et shadcn/ui.
- Une page showcase listant tous les composants (style Storybook).
- Pages exemples pour mettre les composants en contexte.
- Documentation intégrée : tokens, variantes, bonnes pratiques.
- Responsive, accessible (WCAG), élégant, professionnel.