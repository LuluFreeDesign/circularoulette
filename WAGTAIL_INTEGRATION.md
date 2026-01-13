# 🎯 Intégration Wagtail - CirculaRoulette

## Configuration dans Wagtail CMS

### Méthode 1 : Bloc StreamField "Iframe" (Recommandé)

Si votre site Wagtail a déjà un bloc Iframe configuré, utilisez ces paramètres :

#### Dans l'interface admin Wagtail :

**Champ "Titre"** :
```
CirculaRoulette - Quiz économie circulaire
```

**Champ "URL de l'iframe"** :
```
https://votre-circula-roulette.netlify.app
```

**Champ "Hauteur (en pixels)"** :
```
700
```

**Champ "Paramètres"** (optionnel) :
```
allow='accelerometer; autoplay; clipboard-write'
```

---

### Méthode 2 : Bloc RawHTML personnalisé

Si vous voulez un contrôle total, utilisez un bloc RawHTML :

```html
<div class="circula-roulette-wrapper">
  <iframe 
    src="https://votre-circula-roulette.netlify.app" 
    width="100%" 
    height="700" 
    frameborder="0"
    scrolling="no"
    title="CirculaRoulette - Quiz économie circulaire"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media"
    loading="lazy"
    style="border: none; max-width: 100%; display: block; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  ></iframe>
</div>

<style>
.circula-roulette-wrapper {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .circula-roulette-wrapper iframe {
    height: 650px !important;
  }
}
</style>
```

---

### Méthode 3 : Créer un bloc StreamField personnalisé (pour développeurs)

Si vous voulez créer un bloc dédié pour la CirculaRoulette :

#### 1. Dans votre fichier `blocks.py` :

```python
from wagtail import blocks

class CirculaRouletteBlock(blocks.StructBlock):
    """Bloc pour intégrer la CirculaRoulette"""
    
    height = blocks.IntegerBlock(
        default=700,
        help_text="Hauteur de l'iframe en pixels (700 recommandé pour desktop, 650 pour mobile)"
    )
    
    class Meta:
        template = 'blocks/circula_roulette.html'
        icon = 'cog'
        label = 'CirculaRoulette Quiz'
```

#### 2. Créer le template `templates/blocks/circula_roulette.html` :

```django
{% load static %}

<div class="circula-roulette-container">
  <iframe 
    src="https://votre-circula-roulette.netlify.app" 
    width="100%" 
    height="{{ self.height }}" 
    frameborder="0"
    scrolling="no"
    title="CirculaRoulette - Quiz économie circulaire"
    allow="accelerometer; autoplay; clipboard-write"
    loading="lazy"
    class="circula-iframe"
  ></iframe>
</div>

<style>
.circula-roulette-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

.circula-iframe {
  border: none;
  width: 100%;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .circula-iframe {
    height: 650px !important;
  }
}
</style>
```

#### 3. Ajouter le bloc à votre StreamField :

```python
# Dans votre models.py
from wagtail.fields import StreamField
from .blocks import CirculaRouletteBlock

class ArticlePage(Page):
    body = StreamField([
        ('heading', blocks.CharBlock()),
        ('paragraph', blocks.RichTextBlock()),
        ('circula_roulette', CirculaRouletteBlock()),  # ← Nouveau bloc
        # ... autres blocs
    ])
```

---

### Méthode 4 : Intégration dans un template Wagtail existant

Si vous voulez l'intégrer directement dans un template :

```django
{% extends "base.html" %}

{% block content %}
<div class="container">
  <h1>{{ page.title }}</h1>
  
  <div class="content">
    {{ page.intro|richtext }}
  </div>
  
  <!-- CirculaRoulette Quiz -->
  <section class="circula-section">
    <h2>Testez vos connaissances</h2>
    <p class="intro-text">
      Tournez la roue et découvrez tout sur l'économie circulaire !
    </p>
    
    <div class="circula-wrapper">
      <iframe 
        src="https://votre-circula-roulette.netlify.app" 
        width="100%" 
        height="700" 
        frameborder="0"
        scrolling="no"
        title="CirculaRoulette - Quiz économie circulaire"
        allow="accelerometer; autoplay"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</div>
{% endblock %}
```

---

## 🎨 CSS personnalisé pour Wagtail

Ajoutez ce CSS dans votre fichier principal CSS de Wagtail :

```css
/* CirculaRoulette Integration */
.circula-roulette-container {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
}

.circula-roulette-container iframe {
  width: 100%;
  height: 700px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(43, 138, 153, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.circula-roulette-container iframe:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 50px rgba(43, 138, 153, 0.2);
}

/* Section de contexte */
.circula-section {
  background: linear-gradient(135deg, #F2793D10 0%, #2B8A9910 100%);
  padding: 60px 20px;
  border-radius: 20px;
  margin: 40px 0;
}

.circula-section h2 {
  text-align: center;
  color: #2B8A99;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.circula-section .intro-text {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .circula-roulette-container iframe {
    height: 650px;
  }
  
  .circula-section {
    padding: 40px 15px;
  }
  
  .circula-section h2 {
    font-size: 1.8rem;
  }
  
  .circula-section .intro-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .circula-roulette-container iframe {
    height: 600px;
    border-radius: 12px;
  }
}
```

---

## 🔒 Configuration de sécurité Wagtail

### Settings.py

Assurez-vous que votre configuration Wagtail permet les iframes :

```python
# settings/base.py

# Permettre l'iframe de votre domaine
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'SAMEORIGIN'

# CSP (Content Security Policy)
CSP_FRAME_SRC = [
    "'self'",
    'https://votre-circula-roulette.netlify.app',
]
```

---

## 📱 Exemple complet responsive

Voici un exemple complet qui fonctionne parfaitement sur tous les appareils :

```html
<section class="quiz-circula">
  <div class="quiz-header">
    <h2>🌍 Quiz Économie Circulaire</h2>
    <p>Journées Nationales du Recyclage 2026</p>
  </div>
  
  <div class="quiz-container">
    <iframe 
      src="https://votre-circula-roulette.netlify.app" 
      width="100%" 
      height="700" 
      frameborder="0"
      scrolling="no"
      title="CirculaRoulette - Quiz économie circulaire"
      allow="accelerometer; autoplay; clipboard-write"
      loading="lazy"
      class="quiz-iframe"
    ></iframe>
  </div>
  
  <div class="quiz-footer">
    <p>
      <small>
        Un outil pédagogique de sensibilisation à l'économie circulaire<br>
        Inspiré de la CirculaRoulette - La Fresque de l'Économie Circulaire
      </small>
    </p>
  </div>
</section>

<style>
.quiz-circula {
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
}

.quiz-header {
  text-align: center;
  margin-bottom: 40px;
}

.quiz-header h2 {
  color: #2B8A99;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.quiz-header p {
  color: #F2793D;
  font-size: 1.1rem;
  font-weight: 600;
}

.quiz-container {
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
}

.quiz-iframe {
  border: none;
  width: 100%;
  height: 700px;
  display: block;
  border-radius: 12px;
}

.quiz-footer {
  text-align: center;
  margin-top: 30px;
  color: #666;
}

@media (max-width: 768px) {
  .quiz-header h2 {
    font-size: 1.8rem;
  }
  
  .quiz-container {
    padding: 10px;
  }
  
  .quiz-iframe {
    height: 650px;
  }
}
</style>
```

---

## ✅ Checklist d'intégration Wagtail

Avant de publier, vérifiez :

- [ ] L'URL de l'iframe pointe vers votre app déployée
- [ ] La hauteur est de 700px (desktop) ou 650px (mobile)
- [ ] `scrolling="no"` est défini
- [ ] `loading="lazy"` est présent (performance)
- [ ] Le CSS responsive est en place
- [ ] Les CSP permettent l'iframe
- [ ] Le titre est descriptif pour l'accessibilité
- [ ] Testé sur mobile, tablette et desktop

---

## 🚀 Prêt à publier !

Votre CirculaRoulette est maintenant prête à être intégrée dans votre site Wagtail. Choisissez la méthode qui vous convient le mieux et lancez-vous ! 🎉🌱♻️
