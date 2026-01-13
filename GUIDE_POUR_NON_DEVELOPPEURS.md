# 🎯 Guide ultra-simple pour déployer la CirculaRoulette

## 📌 Vous n'êtes pas développeur ? Pas de panique !

Ce guide est fait pour vous. Suivez les étapes une par une, tranquillement ☕

---

## 🚀 ÉTAPE 1 : Télécharger le projet

### Sur Figma Make :

1. **Cliquez sur le bouton "Export"** (en haut à droite de Figma Make)
2. **Choisissez "Download ZIP"**
3. Le fichier `.zip` se télécharge sur votre ordinateur
4. **Double-cliquez sur le fichier ZIP** pour le décompresser
5. Vous obtenez un dossier appelé quelque chose comme `circula-roulette` ou `project`

✅ **Résultat attendu** : Vous avez un dossier sur votre ordinateur avec plein de fichiers dedans

---

## 🌐 ÉTAPE 2 : Créer un compte Netlify (gratuit)

**Netlify** est un service gratuit qui va héberger votre quiz en ligne.

1. Allez sur **[netlify.com](https://netlify.com)**
2. Cliquez sur **"Sign up"** (s'inscrire) en haut à droite
3. **Choisissez "Sign up with GitHub"** (c'est le plus simple)
   - Si vous n'avez pas de compte GitHub, créez-en un (c'est gratuit et rapide)
   - Sinon, vous pouvez utiliser "Sign up with email"
4. Suivez les étapes d'inscription (email, mot de passe, etc.)

✅ **Résultat attendu** : Vous êtes connecté à Netlify et vous voyez un tableau de bord

---

## 📤 ÉTAPE 3 : Déployer votre quiz sur Netlify

### Option A : Déploiement par glisser-déposer (LE PLUS SIMPLE)

1. Une fois connecté à Netlify, vous voyez la page d'accueil
2. En bas de la page, il y a une zone qui dit **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**
3. **OUVREZ le dossier que vous avez décompressé** à l'étape 1
4. **CHERCHEZ le sous-dossier appelé `dist`**
   - ⚠️ IMPORTANT : C'est le dossier `dist` que vous devez glisser, PAS le dossier principal
   - Si vous ne voyez pas de dossier `dist`, passez à l'Option B ci-dessous
5. **GLISSEZ le dossier `dist`** dans la zone sur Netlify
6. **Attendez 10-30 secondes** ⏳
7. 🎉 C'est en ligne !

### Option B : Si vous n'avez pas de dossier `dist` (il faut "construire" le projet)

**Vous aurez besoin de demander à quelqu'un qui code de faire cette étape pour vous.**

Dites-leur simplement :
> "Peux-tu lancer `npm install` puis `npm run build` dans ce dossier ?"

Une fois que c'est fait, un dossier `dist` apparaîtra, et vous pourrez suivre l'Option A.

---

## 🔗 ÉTAPE 4 : Récupérer l'URL de votre quiz

1. Une fois le déploiement terminé, Netlify vous montre votre site
2. **En haut de la page, vous voyez une URL** qui ressemble à :
   ```
   https://random-name-123456.netlify.app
   ```
3. **COPIEZ cette URL** (sélectionnez-la et faites Ctrl+C ou Cmd+C)
4. ⭐ **IMPORTANT** : Vous pouvez personnaliser cette URL :
   - Cliquez sur **"Site settings"**
   - Cliquez sur **"Change site name"**
   - Tapez par exemple : `circula-roulette-mars2026`
   - Votre URL devient : `https://circula-roulette-mars2026.netlify.app`

✅ **Résultat attendu** : Vous avez une URL qui commence par `https://` et finit par `.netlify.app`

---

## 🧪 ÉTAPE 5 : Tester votre quiz

1. **Ouvrez un nouvel onglet** dans votre navigateur
2. **Collez l'URL** que vous avez copiée
3. Appuyez sur **Entrée**
4. **Vous voyez votre quiz !** 🎉
   - La roue doit s'afficher
   - Vous pouvez cliquer dessus pour la faire tourner
   - Répondre aux questions
   - Voir le jeu concours apparaître

Si ça fonctionne → Parfait ! Passez à l'étape suivante.
Si ça ne fonctionne pas → Contactez quelqu'un qui code pour vérifier.

---

## 📝 ÉTAPE 6 : Intégrer le quiz dans votre site Wagtail

### Vous avez besoin de 2 choses :
1. ✅ L'URL de votre quiz (que vous avez à l'étape 4)
2. ✅ Accès à l'admin de votre site Wagtail

### Dans Wagtail :

1. **Connectez-vous à l'admin de Wagtail**
   - L'URL ressemble à : `https://votre-site.com/admin`
2. **Allez sur la page** où vous voulez ajouter le quiz
3. **Cliquez sur "Edit"** (Modifier)
4. **Cherchez un bloc appelé "Iframe" ou "HTML" ou "Embed"**
   - Chaque site Wagtail est différent
   - Si vous ne trouvez pas, demandez à votre développeur Wagtail

### Si vous avez un bloc "Iframe" :

**Remplissez comme ceci :**

| Champ | Valeur à mettre |
|-------|-----------------|
| **Titre** | CirculaRoulette - Quiz économie circulaire |
| **URL** | `https://VOTRE-URL.netlify.app` (l'URL de l'étape 4) |
| **Largeur** | 100% |
| **Hauteur** | 700 |

### Si vous avez un bloc "HTML" ou "Raw HTML" :

**Copiez-collez ce code :**

```html
<div style="max-width: 900px; margin: 40px auto; padding: 0 20px;">
  <iframe 
    src="https://VOTRE-URL.netlify.app" 
    width="100%" 
    height="700" 
    frameborder="0"
    scrolling="no"
    title="CirculaRoulette - Quiz économie circulaire"
    style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  ></iframe>
</div>
```

⚠️ **N'oubliez pas de remplacer** `https://VOTRE-URL.netlify.app` par votre vraie URL !

5. **Enregistrez** (Save)
6. **Publiez** (Publish)
7. **Allez voir votre page publique** → Le quiz doit s'afficher ! 🎉

---

## 🎨 BONUS : Personnaliser l'apparence dans Wagtail

Si vous voulez que le quiz soit encore plus joli, ajoutez ce texte **AU-DESSUS** du bloc iframe :

```html
<div style="text-align: center; margin-bottom: 30px;">
  <h2 style="color: #2B8A99; font-size: 2rem; margin-bottom: 10px;">
    🌍 Quiz Économie Circulaire
  </h2>
  <p style="color: #F2793D; font-size: 1.2rem; font-weight: bold;">
    Journées Nationales du Recyclage 2026
  </p>
  <p style="color: #666; font-size: 1rem;">
    Tournez la roue et testez vos connaissances !
  </p>
</div>
```

---

## ✅ CHECKLIST FINALE

Cochez au fur et à mesure :

- [ ] J'ai téléchargé le projet depuis Figma Make
- [ ] J'ai créé un compte Netlify (gratuit)
- [ ] J'ai déployé le dossier `dist` sur Netlify
- [ ] J'ai récupéré l'URL de mon quiz (ex: https://circula-roulette.netlify.app)
- [ ] J'ai testé l'URL dans mon navigateur et ça fonctionne
- [ ] J'ai ajouté le bloc iframe dans Wagtail avec la bonne URL
- [ ] J'ai publié la page
- [ ] Le quiz s'affiche correctement sur mon site public

---

## 🆘 EN CAS DE PROBLÈME

### ❌ "Je n'ai pas de dossier `dist`"
➡️ Vous devez demander à un développeur de "builder" le projet avec `npm run build`

### ❌ "L'URL ne fonctionne pas"
➡️ Vérifiez que vous avez bien attendu que Netlify finisse le déploiement (il y a une barre de progression)

### ❌ "Le quiz ne s'affiche pas dans Wagtail"
➡️ Vérifiez que :
- L'URL commence bien par `https://`
- Vous avez bien sauvegardé ET publié la page
- Votre site Wagtail autorise les iframes (demandez à votre développeur)

### ❌ "Le quiz est coupé / trop petit"
➡️ Changez la hauteur dans le bloc iframe : essayez 800 ou 900 au lieu de 700

---

## 🎉 FÉLICITATIONS !

Si vous êtes arrivé ici et que tout fonctionne, bravo ! 👏

Votre quiz CirculaRoulette est maintenant en ligne et intégré à votre site Wagtail.

Les utilisateurs peuvent :
- ✅ Faire tourner la roue
- ✅ Répondre aux questions
- ✅ Voir les explications pédagogiques
- ✅ Participer au jeu concours après chaque bonne réponse

---

## 📞 BESOIN D'AIDE ?

Si vous êtes bloqué, voici ce que vous pouvez faire :

1. **Demandez à un collègue développeur** de vous aider pour les étapes techniques
2. **Montrez-lui ce guide** (c'est très simple pour eux)
3. **Montrez-lui les fichiers** dans le dossier du projet

Les étapes techniques qui peuvent nécessiter un développeur :
- Construire le projet (`npm run build`)
- Configurer des paramètres avancés dans Wagtail

Tout le reste, vous pouvez le faire vous-même en suivant ce guide ! 💪

---

**Bonne chance et bon recyclage ! ♻️🌱**
