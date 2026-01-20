# 🌍 CirculaRoulette - Quiz Économie Circulaire

Application React interactive de quiz sur l'économie circulaire pour les **Journées Nationales du Recyclage 2026**.

## 📋 Description

CirculaRoulette est une version numérique interactive de la roue physique CirculaRoulette. Elle permet aux utilisateurs de :
- 🎡 Faire tourner une roue à 8 catégories
- 📝 Répondre à des questions sur l'économie circulaire
- 📚 Découvrir des explications pédagogiques après chaque réponse
- 🎁 Participer à un jeu concours pour gagner des lots éco-responsables

## ✨ Fonctionnalités

- ✅ 73 questions réparties sur 8 catégories
- ✅ Interface responsive (mobile & desktop)
- ✅ Animations fluides avec Motion (Framer Motion)
- ✅ Design accessible avec couleurs contrastées
- ✅ Éco-conception et optimisation des performances
- ✅ Intégrable en iframe dans un site Wagtail

## 🎨 Couleurs officielles

- **Orange** : #F2793D
- **Bleu-vert** : #2B8A99

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/LuluFreeDesign/circularoulette.git

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 📦 Build

```bash
# Créer un build de production
npm run build
```

Le dossier `dist/` contiendra tous les fichiers prêts à être déployés.

## 🌐 Déploiement

### Sur Netlify (recommandé)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre repository GitHub
3. Configuration du build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
4. Déployez !

### Sur Vercel

1. Connectez votre repository à [Vercel](https://vercel.com)
2. Vercel détectera automatiquement la configuration
3. Déployez !

## 🔗 Intégration iframe dans Wagtail

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px;">
  <iframe 
    src="https://votre-url-deployee.com" 
    width="100%" 
    height="700" 
    frameborder="0"
    scrolling="no"
    title="CirculaRoulette - Quiz économie circulaire"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  ></iframe>
</div>
```

Consultez [WAGTAIL_INTEGRATION.md](./WAGTAIL_INTEGRATION.md) pour plus de détails.

## 📚 Documentation

- [Guide de déploiement simple](./GUIDE_DEPLOIEMENT_SIMPLE.md) - Pour les non-développeurs
- [Guide pour non-développeurs](./GUIDE_POUR_NON_DEVELOPPEURS.md) - Tutoriel pas à pas
- [Intégration Wagtail](./WAGTAIL_INTEGRATION.md) - Configuration détaillée
- [Guide d'intégration](./GUIDE_INTEGRATION.md) - Instructions techniques
- [Intégration iframe](./INTEGRATION_IFRAME.md) - Code iframe simple

## 🏗️ Structure du projet

```
circularoulette/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Composant principal
│   │   ├── components/
│   │   │   ├── Wheel.tsx              # Roue interactive
│   │   │   ├── Quiz.tsx               # Composant de quiz
│   │   │   └── ui/                    # Composants UI (shadcn/ui)
│   │   └── data/
│   │       └── quizData.ts            # Toutes les 73 questions
│   ├── styles/
│   │   ├── index.css                  # Import des styles
│   │   ├── tailwind.css               # Configuration Tailwind v4
│   │   └── theme.css                  # Thème personnalisé
│   └── ...
├── package.json
├── vite.config.ts
└── README.md
```

## 🛠️ Technologies utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Motion** (Framer Motion) - Animations fluides
- **Lucide React** - Icônes
- **shadcn/ui** - Composants UI accessibles

## 🎯 Catégories de questions

1. **Ma conso** - Questions sur la consommation responsable
2. **Bon plan** - Astuces et bons plans économie circulaire
3. **Et ça repart !** - Relance la roue automatiquement
4. **J'agis !!** - Actions concrètes à mettre en place
5. **On en parle !?** - Sujets de discussion et débat
6. **Ça va où ?** - Tri et destination des déchets
7. **Mystère ???** - Question aléatoire surprise
8. **Challenge !!!** - Défis et challenges écologiques

## 🌱 Éco-conception

Ce projet applique les principes de l'éco-conception :
- Code optimisé et minifié
- Images compressées
- Lazy loading des ressources
- Animations performantes
- Accessibilité (WCAG AA)

## 🎁 Jeu concours

Après chaque bonne réponse, les utilisateurs peuvent participer à un jeu concours pour gagner des lots issus de l'économie circulaire (produits réparés, upcyclés, ou de seconde main).

Le formulaire de participation est hébergé sur Tally : [https://tally.so/r/EklWLq](https://tally.so/r/EklWLq)

## 📝 Licence

Ce projet utilise :
- Des composants de [shadcn/ui](https://ui.shadcn.com/) sous [licence MIT](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- Des photos d'[Unsplash](https://unsplash.com) sous [licence Unsplash](https://unsplash.com/license)

## 👥 Contribution

Ce projet a été développé pour les Journées Nationales du Recyclage 2026.

---

**Bon recyclage ! ♻️🌱**