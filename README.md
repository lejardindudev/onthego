# 📝 On the Go

**On the Go** est une application web responsive permettant de créer, organiser et consulter des notes rapidement.  
Elle met l’accent sur une expérience utilisateur fluide, un design soigné (pixel perfect) et une interface adaptable à tous les écrans.

---

## 🚀 Fonctionnalités

- ✍️ Création et édition de notes
- 🔍 Recherche et filtrage en temps réel
- 🎨 Personnalisation des notes (couleurs)
- 📌 Gestion de l’état des notes (ex : pin)
- 📱 Interface responsive optimisée mobile et desktop

---

## 🎯 Expérience utilisateur

### 📱 Responsive avancé

- Interface entièrement adaptée aux petits écrans
- Mise en place d’un **volet glissant (drawer)** pour accéder aux paramètres d’une note en version mobile

### 🧩 Affichage des notes

- **Vue mosaïque (résumé)** :
  - Limitation du texte via `line-clamp`
  - Affichage homogène et lisible des cartes

- **Vue détail** :
  - Affichage complet et formaté du contenu
  - Utilisation de la balise `<pre>` pour respecter les retours à la ligne et la mise en forme

---

## 🛠️ Stack technique

- ⚛️ React (Vite)
- 🔁 Redux (gestion d’état global)
- 🧭 React Router (navigation)
- 🎨 Sass (SCSS)
- 📐 Méthodologie BEM

---

## 📂 Structure (simplifiée)

```
src/
├── components/
├── pages/
├── store/
├── utils/
└── assets/
```

---

## 💡 Objectifs du projet

- Consolider les bases de React et Redux
- Travailler la gestion d’état globale
- Mettre en place une architecture front-end propre
- Améliorer la qualité UX/UI
- Appliquer des bonnes pratiques CSS

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

---

## 📌 Remarques

- Utilisation possible de localStorage ou JSON server
- Déployable facilement sur Vercel

---

## 🔮 Améliorations possibles

- Authentification
- Backend réel
- Tags / catégories
- Recherche avancée
- Mode offline

---

## 👨‍💻 Auteur

Le jardin du dev :: Projet réalisé dans le cadre d’un apprentissage avancé en développement front-end avec React.
