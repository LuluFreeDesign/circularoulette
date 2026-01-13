# Intégration de la CirculaRoulette en iframe

## 📋 Instructions pour Wagtail

### Code iframe à intégrer dans votre CMS Wagtail

```html
<iframe 
  src="https://votre-url-de-deploiement.com" 
  width="100%" 
  height="700" 
  frameborder="0"
  scrolling="no"
  title="CirculaRoulette - Quiz économie circulaire"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  style="border: none; max-width: 100%; display: block; margin: 0 auto;"
></iframe>
```

### Paramètres recommandés

- **Hauteur (height)** : 
  - Mobile : 650px minimum
  - Desktop : 700px recommandé
  - Vous pouvez ajuster selon vos besoins

- **Largeur (width)** : 
  - 100% pour s'adapter à votre conteneur
  - Ou une valeur fixe comme 800px

### Exemple d'intégration responsive

```html
<div style="max-width: 900px; margin: 0 auto; padding: 20px;">
  <iframe 
    src="https://votre-url-de-deploiement.com" 
    width="100%" 
    height="700" 
    frameborder="0"
    scrolling="no"
    title="CirculaRoulette - Quiz économie circulaire"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
  ></iframe>
</div>
```

### Configuration Wagtail

Dans votre bloc Wagtail "Iframe", utilisez ces paramètres :

1. **URL de l'iframe** : `https://votre-url-de-deploiement.com`
2. **Hauteur (en pixels)** : `700`
3. **Paramètres** (optionnel) : `allow='accelerometer; autoplay'`

## ✅ Optimisations appliquées

- ✅ Fond blanc pour intégration transparente
- ✅ Header retiré
- ✅ Footer retiré
- ✅ Badge eco-score retiré
- ✅ Dimensions flexibles et responsive
- ✅ Pas de scroll inutile
- ✅ Focus sur la roue et le quiz uniquement

## 🚀 Déploiement

Une fois l'application déployée, remplacez `https://votre-url-de-deploiement.com` par l'URL réelle de votre application.

## 📱 Responsive

L'application s'adapte automatiquement aux différentes tailles d'écran :
- Mobile : Roue de 340px
- Desktop : Roue de 500px

## 🎨 Personnalisation CSS (optionnel)

Si vous souhaitez ajouter un style supplémentaire autour de l'iframe :

```css
.circula-roulette-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.circula-roulette-container iframe {
  width: 100%;
  height: 700px;
  border: none;
  display: block;
}

@media (max-width: 768px) {
  .circula-roulette-container iframe {
    height: 650px;
  }
}
```

## 🔒 Sécurité

L'iframe est configurée avec les attributs de sécurité standards. Si vous avez des politiques CSP (Content Security Policy) strictes, assurez-vous d'autoriser l'URL de l'iframe.

## 💡 Support

Pour toute question ou problème d'intégration, vérifiez que :
1. L'URL de l'iframe est correcte et accessible
2. La hauteur de l'iframe est suffisante (700px recommandé)
3. Votre CMS n'a pas de restrictions sur les iframes
