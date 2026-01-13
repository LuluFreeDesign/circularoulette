# 🚀 Guide d'intégration iframe - CirculaRoulette

## ✅ Ce qui a été fait

Votre application CirculaRoulette est maintenant **100% prête pour l'intégration en iframe** dans votre site Wagtail !

### Modifications appliquées :

✅ **Header supprimé** (logo et compteur)
✅ **Footer supprimé** (texte informatif)
✅ **Texte de bienvenue supprimé**
✅ **Badge eco-score retiré**
✅ **Fond blanc** (au lieu du dégradé)
✅ **Optimisation iframe** (dimensions flexibles, pas de scroll inutile)
✅ **Interface minimaliste** : uniquement la roue et le quiz

---

## 🧪 Comment tester localement ?

### Étape 1 : Lancer l'application

```bash
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

### Étape 2 : Tester l'iframe

Ouvrez le fichier `iframe-test.html` dans votre navigateur. Ce fichier simule l'intégration de votre quiz dans une page web.

Vous pouvez aussi créer une page HTML simple :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test iframe</title>
</head>
<body>
    <h1>Test d'intégration</h1>
    <iframe 
        src="http://localhost:5173" 
        width="100%" 
        height="700"
        frameborder="0"
    ></iframe>
</body>
</html>
```

---

## 📦 Déploiement

### Option 1 : Netlify (recommandé)

1. Connectez votre repository GitHub à Netlify
2. Configuration du build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Déployez !

### Option 2 : Vercel

1. Connectez votre repository à Vercel
2. Vercel détectera automatiquement la configuration
3. Déployez !

### Option 3 : Serveur personnel

1. Build de production :
   ```bash
   npm run build
   ```
2. Le dossier `dist/` contient tous les fichiers
3. Uploadez le contenu de `dist/` sur votre serveur

---

## 🔗 Intégration dans Wagtail

### Configuration du bloc iframe dans Wagtail

Une fois déployé, dans votre CMS Wagtail :

1. **Créer un bloc "Iframe"** dans votre page
2. **Titre** : "CirculaRoulette - Quiz économie circulaire"
3. **URL de l'iframe** : `https://votre-url-deployee.com`
4. **Hauteur** : `700` (en pixels)
5. **Paramètres** (optionnel) : `allow='accelerometer; autoplay'`

### Code HTML généré (exemple)

```html
<iframe 
  src="https://votre-circula-roulette.netlify.app" 
  width="100%" 
  height="700" 
  frameborder="0"
  scrolling="no"
  title="CirculaRoulette - Quiz économie circulaire"
  allow="accelerometer; autoplay; clipboard-write"
  style="border: none; max-width: 100%; display: block; margin: 0 auto;"
></iframe>
```

---

## 📐 Recommandations de dimensions

### Desktop
- **Largeur** : 100% (ou max 900px)
- **Hauteur** : 700px

### Mobile
- **Largeur** : 100%
- **Hauteur** : 650px

### Exemple CSS responsive

Si vous voulez un style encore plus professionnel :

```html
<div class="circula-container">
  <iframe 
    src="https://votre-url.com" 
    title="CirculaRoulette"
  ></iframe>
</div>

<style>
.circula-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

.circula-container iframe {
  width: 100%;
  height: 700px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .circula-container iframe {
    height: 650px;
  }
}
</style>
```

---

## 🎨 Personnalisation du contexte

### Ajouter un titre au-dessus de l'iframe

```html
<div style="max-width: 900px; margin: 0 auto; padding: 20px;">
  <h2 style="text-align: center; color: #2B8A99; margin-bottom: 20px;">
    🌍 Testez vos connaissances sur l'économie circulaire
  </h2>
  <p style="text-align: center; color: #666; margin-bottom: 30px;">
    Tournez la roue et découvrez les bonnes pratiques du recyclage et du réemploi
  </p>
  
  <iframe 
    src="https://votre-url.com" 
    width="100%" 
    height="700"
    frameborder="0"
    title="CirculaRoulette"
  ></iframe>
  
  <p style="text-align: center; color: #999; margin-top: 20px; font-size: 14px;">
    Journées Nationales du Recyclage 2026
  </p>
</div>
```

---

## 🛡️ Sécurité et performances

### Headers HTTP recommandés

Si vous contrôlez le serveur qui héberge l'iframe, ajoutez ces headers :

```
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self' https://votre-site-wagtail.com
```

### Performance

L'application est déjà optimisée :
- ✅ Code minifié
- ✅ Images optimisées
- ✅ Lazy loading
- ✅ Pas de dépendances lourdes

---

## 🐛 Dépannage

### L'iframe ne s'affiche pas
1. Vérifiez que l'URL est correcte et accessible
2. Vérifiez les CORS (Cross-Origin Resource Sharing)
3. Vérifiez les CSP (Content Security Policy) de votre site

### L'iframe a du scroll
1. Augmentez la hauteur (`height="750"` ou plus)
2. Vérifiez que `scrolling="no"` est bien présent

### L'iframe ne s'adapte pas au mobile
1. Assurez-vous que `width="100%"` est défini
2. Ajoutez le CSS responsive ci-dessus

---

## 📞 Support

### Fichiers utiles

- `/INTEGRATION_IFRAME.md` : Instructions détaillées
- `/iframe-test.html` : Page de test locale
- `/GUIDE_INTEGRATION.md` : Ce guide complet

### Checklist avant déploiement

- [ ] L'application fonctionne en local
- [ ] Le build de production réussit (`npm run build`)
- [ ] L'iframe-test.html affiche correctement l'application
- [ ] Les dimensions sont appropriées (700px de hauteur)
- [ ] Le fond est bien blanc
- [ ] Pas de header/footer/badge visible

---

## 🎉 C'est prêt !

Votre CirculaRoulette est maintenant prête à être intégrée dans votre site Wagtail. 

**Prochaines étapes :**
1. Déployez l'application (Netlify/Vercel/autre)
2. Récupérez l'URL de déploiement
3. Créez un bloc iframe dans Wagtail avec cette URL
4. Profitez ! 🌱♻️

---

**Besoin d'aide ?** Consultez les fichiers de documentation inclus ou testez avec `iframe-test.html` ! 🚀
