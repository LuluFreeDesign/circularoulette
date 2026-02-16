# Intégration iframe auto-resize dans Wagtail

## Configuration de l'iframe dans Wagtail

### 1. Code HTML de l'iframe

Dans votre template Wagtail, ajoutez l'iframe avec une hauteur initiale de **900px** :

```html
<iframe 
  id="circula-roulette-iframe"
  src="https://votre-url-circula-roulette.com"
  width="100%"
  height="900"
  frameborder="0"
  style="border: none; overflow: hidden;"
  title="CirculaRoulette SNCF"
></iframe>
```

### 2. Script JavaScript d'auto-resize

Ajoutez ce script **après** l'iframe dans votre template Wagtail :

```html
<script>
(function() {
  // Écouter les messages de l'iframe
  window.addEventListener('message', function(event) {
    // Vérifier que le message provient bien de l'iframe
    if (event.data && event.data.type === 'iframe-resize') {
      var iframe = document.getElementById('circula-roulette-iframe');
      if (iframe) {
        // Ajuster la hauteur avec une petite marge de sécurité
        var newHeight = event.data.height + 20;
        iframe.style.height = newHeight + 'px';
      }
    }
  });
})();
</script>
```

### 3. Alternative : Code complet pour Wagtail StreamField

Si vous utilisez un StreamField avec du HTML brut :

```html
<div class="circula-roulette-container">
  <iframe 
    id="circula-roulette-iframe"
    src="https://votre-url-circula-roulette.com"
    width="100%"
    height="900"
    frameborder="0"
    style="border: none; overflow: hidden; display: block;"
    title="CirculaRoulette SNCF"
  ></iframe>
</div>

<script>
(function() {
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'iframe-resize') {
      var iframe = document.getElementById('circula-roulette-iframe');
      if (iframe) {
        iframe.style.height = (event.data.height + 20) + 'px';
      }
    }
  });
})();
</script>
```

## Configuration recommandée

### Hauteurs initiales recommandées selon l'affichage

- **Desktop** : `900px` (recommandé)
- **Mobile** : `1100px` (si vous voulez une valeur différente pour mobile)

### CSS optionnel pour responsive

```css
.circula-roulette-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  #circula-roulette-iframe {
    height: 1100px !important; /* Hauteur initiale plus grande sur mobile */
  }
}
```

## Comment ça fonctionne

1. **L'iframe démarre avec 900px de hauteur** (valeur fixe dans Wagtail)
2. **L'application React détecte qu'elle est dans une iframe** (`window.parent !== window`) et désactive `min-h-screen` pour éviter toute boucle de feedback entre la hauteur de l'iframe et `100vh`
3. **Un `ref` mesure la hauteur réelle du contenu** (`contentRef.scrollHeight`) au lieu de `document.documentElement.scrollHeight`, ce qui garantit que seule la hauteur du contenu est transmise
4. **Trois mécanismes complémentaires** détectent les changements de taille :
   - `ResizeObserver` sur le wrapper de contenu (redimensionnements)
   - `MutationObserver` sur le contenu (changements DOM : affichage d'explication, bloc jeu concours, etc.)
   - Polling de secours toutes les 1 seconde
5. **Le script JavaScript dans Wagtail reçoit la hauteur** et ajuste dynamiquement l'iframe
6. **L'iframe s'adapte automatiquement** quand on passe de la roue au quiz ou vice-versa, sans barre de scroll interne

## Sécurité

Le code utilise `postMessage` avec `'*'` comme origine, ce qui est acceptable pour ce cas d'usage. Si vous voulez restreindre pour plus de sécurité :

**Côté React (App.tsx)** - remplacez `'*'` par l'URL de votre site Wagtail :
```javascript
window.parent.postMessage({ type: 'iframe-resize', height: height }, 'https://votre-site-wagtail.com');
```

**Côté Wagtail (script)** - vérifiez l'origine :
```javascript
if (event.origin !== 'https://votre-url-circula-roulette.com') return;
```

## Test

Pour tester que ça fonctionne bien :
1. Intégrez l'iframe avec le script dans Wagtail
2. Ouvrez la page dans votre navigateur
3. Faites tourner la roue et répondez à des questions
4. L'iframe devrait s'ajuster automatiquement sans barre de scroll

**Valeur à saisir dans Wagtail : 900**
