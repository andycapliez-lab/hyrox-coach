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


## Mise à jour V2

- modification d'une séance enregistrée ;
- suppression d'une séance enregistrée ;
- recalcul du plan après modification/suppression ;
- bilan hebdomadaire (HYROX, courses, kilomètres, RPE moyen) ;
- adaptation du mercredi ET du dimanche selon les 7 derniers jours ;
- statut « enregistrée » dans la semaine.

Pour mettre à jour un dépôt existant, remplace surtout `index.html` et `sw.js`.
Les données déjà enregistrées dans l'application restent conservées car la clé de stockage locale n'a pas changé.


## Version Coach Expert v3

Nouveautés :
- Coach du jour : prêt / ajuster / récupérer / prudence
- score de récupération enrichi : fatigue, jambes, sommeil, stress, courbatures, motivation
- charge d'entraînement = durée × RPE
- comparaison de la charge actuelle avec les semaines récentes
- analyse du limiteur : course/souffle, jambes, ateliers, technique ou fatigue générale
- prescription de récupération
- adaptation du mercredi ET du dimanche
- semaine allégée périodique
- journal enrichi : durée, FC, limiteur, qualité, notes
- analyse automatique après chaque séance
- graphique de charge par séance
- compatibilité avec les données déjà enregistrées en V1/V2

L'application donne des recommandations sportives générales et ne remplace pas un professionnel de santé.


## v4 — Alertes Apple Calendar

Chaque séance exportée via « Ajouter au Calendrier Apple » contient :
- une alerte 2 heures avant ;
- une alerte 1 heure avant.

Les alertes utilisent le standard iCalendar VALARM.


## V5 — Nutrition, hydratation et rappels

Ajouts :
- onglet Nutrition ;
- écran Aujourd’hui enrichi : entraînement + carburant + récupération ;
- plan nutrition du jour selon repos / course facile / HYROX / séance qualité ;
- repères avant / pendant / après séance ;
- poids facultatif pour afficher des repères en g/kg ;
- préférence standard / végétarienne ;
- mode digestion sensible avant effort ;
- plan nutrition compétition Toulouse 2027 ;
- 4 horaires d’hydratation configurables ;
- export Apple Calendar des rappels d’hydratation sur 7 jours ;
- export des séances avec :
  - notification 2 h avant (nutrition/hydratation),
  - notification 1 h avant (préparation),
  - rappel récupération 20 min après la fin ;
- conservation du même localStorage que les versions précédentes.

Important : le module donne des repères généraux de nutrition sportive. Il ne remplace pas un diététicien du sport ou un professionnel de santé.


## V5.1 — finition PWA
- cache réseau prioritaire pour recevoir les mises à jour plus vite ;
- navigation mémorisée ;
- animations légères et contrôles tactiles 44 px ;
- champs iPhone à 16 px pour éviter le zoom automatique ;
- UIDs calendrier stables pour limiter les doublons ;
- fichiers ICS normalisés CRLF ;
- historique trié ;
- douleur récente calculée par date ;
- écran Aujourd’hui tient compte des séances réellement enregistrées ;
- export/import de sauvegarde JSON.


## V5.2 — Progression course sur 8 répétitions

Séance course clé :
- 8 × 400 m
- 8 × 600 m
- 8 × 800 m
- 8 × 1000 m

Chaque palier dure environ trois semaines. Le nombre de répétitions ne baisse pas
pendant la progression normale : c'est la distance de chaque répétition qui augmente.

Le travail est volontairement orienté seuil contrôlé afin que les 8 répétitions restent
régulières et compatibles avec les quatre séances HYROX hebdomadaires.

Exceptions intelligentes :
- récupération mauvaise / charge élevée : remplacement temporaire par footing très facile ;
- dernière séance qualité très mal tolérée : recul temporaire d'un palier ;
- semaine allégée : même nombre de répétitions, allure plus facile / récupération plus longue ;
- dernière semaine avant Toulouse : 8 × 400 m pour l'affûtage, sans fatigue résiduelle.

Toutes les fonctions V5.1 sont conservées.


## V5.3 — Dimanche progression fixe / Mercredi assimilation

Règle principale :
- Dimanche : toujours la séance de progression en 8 répétitions.
  8×400 → 8×600 → 8×800 → 8×1000 m.
  La fatigue ne supprime plus la séance : elle modifie l'allure et les temps de récupération.
- Mercredi : séance d'assimilation.
  Si la récupération est bonne : footing facile.
  Si la fatigue est élevée : séance récupération en 8 répétitions, avec environ la moitié
  de la distance du palier du dimanche :
    - dimanche 8×400 → mercredi 8×200 facile
    - dimanche 8×600 → mercredi 8×300 facile
    - dimanche 8×800 → mercredi 8×400 facile
    - dimanche 8×1000 → mercredi 8×500 facile

Sécurité :
- une douleur récente déclenche toujours un avertissement ; la séance du dimanche reste
  visible dans le plan mais ne doit pas être exécutée si la douleur persiste ou modifie la foulée.


## V5.4 — Nouveau logo

Le nouveau logo HYROX Toulouse Coach est intégré partout :
- icône iPhone / écran d’accueil ;
- icône PWA 180×180 ;
- icône PWA 192×192 ;
- icône PWA 512×512 ;
- icône affichée dans l’en-tête ;
- favicon du site.

Toutes les fonctions de la V5.3 sont conservées.
