# CirculaRoulette en ligne - Quiz Economie Circulaire

Application React interactive de quiz sur l'economie circulaire, adaptee de la roue physique CirculaRoulette, dans le cadre des **Journees Nationales du Recyclage - Mars 2026**. Solution en marque blanche, personnalisable et integrable en iframe.

## Description

CirculaRoulette est une version numerique de la roue physique existante. Les utilisateurs font tourner une roue a 8 segments, puis repondent a des questions pedagogiques sur le tri, la reparation, le reemploi et la consommation responsable.

- Roue interactive a 8 segments avec animations fluides
- 31 questions reparties sur 5 categories actives
- Systeme de deck (melange Fisher-Yates) garantissant zero doublon
- Support du mode multi-reponses (questions id 32, 65, 53)
- Explications pedagogiques avec liens cliquables vers quefairedemesdechets.ademe.fr
- Integrable en iframe avec auto-resize via postMessage

## Categories

La roue comporte 8 segments :

| Segment | Comportement |
|---|---|
| **Ca va ou ?** | Questions sur le tri et la destination des dechets |
| **J'agis !!** | Actions concretes (reparation, don, reemploi) |
| **Challenge !!!** | Defis et questions chiffrees |
| **Bon plan** | Bonus reparation, seconde main, astuces |
| **Ma conso** | Consommation responsable et duree de vie des objets |
| **Et ca repart !** | Relance automatiquement la roue |
| **Mystere !!** | Tire une question au hasard dans une categorie aleatoire |
| *(8e segment)* | Reserve pour une future categorie |

## Palette de couleurs

| Usage | Couleurs |
|---|---|
| Claires | `#a4c8e1` `#a1d6ca` |
| Normales | `#0084d4` `#00b388` |
| Sombres | `#00205b` `#003865` `#154734` |
| Mauvaise reponse | `#f8c1b8` `#f2827f` `#651c32` |
| Typographie | Avenir |

## Installation

```bash
git clone https://github.com/LuluFreeDesign/circularoulette.git
cd circularoulette
npm install
npm run dev
```

## Build et deploiement

```bash
npm run build
```

Le dossier `dist/` contient les fichiers prets a deployer (Netlify, Vercel, ou tout hebergement statique).

## Integration iframe (Wagtail CMS)

L'application envoie sa hauteur au parent via `postMessage` pour un auto-resize fluide. Cote Wagtail, ajouter dans le template :

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px;">
  <iframe
    id="circularoulette"
    src="https://votre-url-deployee.com"
    width="100%"
    height="900"
    frameborder="0"
    scrolling="no"
    title="CirculaRoulette - Quiz economie circulaire"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  ></iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'resize') {
      document.getElementById('circularoulette').style.height = e.data.height + 'px';
    }
  });
</script>
```

## Structure du projet

```
circularoulette/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Composant principal + logique iframe postMessage
│   │   ├── components/
│   │   │   ├── Wheel.tsx           # Roue interactive (8 segments, etiquettes PNG)
│   │   │   └── Quiz.tsx            # Quiz, deck system, renderExplanation (liens markdown)
│   │   └── data/
│   │       └── quizData.ts         # 31 questions, interface Question (correctAnswer, hint)
│   ├── assets/                     # Images de la roue et etiquettes categories
│   ├── styles/
│   │   ├── fonts.css               # Import police Avenir
│   │   ├── index.css               # Point d'entree styles
│   │   ├── tailwind.css            # Configuration Tailwind v4
│   │   └── theme.css               # Tokens de theme
│   └── main.tsx                    # Point d'entree React
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Technologies

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Styles utilitaires
- **Motion** - Animations (roue, transitions quiz)
- **Lucide React** - Icones (check, croix)

## Points techniques notables

- **Systeme de deck** : chaque categorie maintient un paquet de questions melange (Fisher-Yates). Aucune question n'est reposee tant que toutes celles de la categorie n'ont pas ete vues.
- **Multi-reponses** : le champ `correctAnswer` accepte `number | number[]` pour les questions ou plusieurs reponses sont correctes.
- **Liens dans les explications** : la fonction `renderExplanation` dans `Quiz.tsx` parse les liens markdown `[texte](url)` en hyperliens cliquables.
- **UTM tracking** : tous les liens vers quefairedemesdechets.ademe.fr portent le parametre `?utm_campaign=circularoulette_enligne`.
- **Options prefixees** : les choix de reponse sont prefixes A), B), C), D).

## Licence

Projet developpe pour les Journees Nationales du Recyclage 2026.
