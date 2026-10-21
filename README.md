# HYROX Toulouse Coach

Application Web installable (PWA) pour préparer HYROX Toulouse 2027.

## Mise en ligne avec GitHub Pages

1. Crée un nouveau dépôt GitHub, par exemple :
   `hyrox-coach`

2. Décompresse `HYROX_Toulouse_Coach_GitHub_Pages.zip`.

3. Envoie TOUS les fichiers du dossier à la racine du dépôt :
   - index.html
   - manifest.webmanifest
   - sw.js
   - icon-180.png
   - icon-192.png
   - icon-512.png
   - .nojekyll
   - README.md

4. Dans GitHub :
   **Settings → Pages**

5. Dans **Build and deployment** :
   - Source : **Deploy from a branch**
   - Branch : **main**
   - Folder : **/(root)**
   - Save

6. GitHub publiera une adresse du type :
   `https://TON-PSEUDO.github.io/hyrox-coach/`

## Installation sur iPhone

1. Ouvre l'adresse GitHub Pages dans Safari.
2. Appuie sur **Partager**.
3. Choisis **Ajouter à l'écran d'accueil**.
4. Appuie sur **Ajouter**.

HYROX Coach apparaîtra avec son icône et s'ouvrira en mode application.

## Données

Le journal, la fatigue, les réglages et les progrès sont stockés localement
dans le navigateur de l'iPhone via localStorage.

Ils ne sont pas envoyés sur GitHub.

Pense à utiliser régulièrement **Réglages → Exporter mes données**.

## Limite actuelle

Cette PWA ne peut pas lire directement Apple Santé / HealthKit.
Pour cela, il faudrait une application iOS native.
