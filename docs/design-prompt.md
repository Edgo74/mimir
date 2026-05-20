# Prompt design — Mimir (à coller dans Claude Design / v0.dev / Lovable)

> Ce prompt génère le design system + 3 pages (Landing, Diagnostic, Résultats) du MVP.
> Joindre en contexte les 2 fichiers : `interview.md` (verbatims) et `leprojet.md` (positionnement, persona, stats, pricing).

---

## CONTEXTE PRODUIT

Je conçois **Mimir**, une startup B2B qui vend une offre packagée
**Audit IA + Plan d'action IA + Formation IA** aux cabinets d'expertise
comptable français de 10 à 50 salariés. Un seul forfait, un seul
interlocuteur. Finançable OPCO Atlas jusqu'à 100 % (jusqu'à 6 500 € par
collaborateur et par an).

**Déclencheurs marché :**
- Facture électronique obligatoire pour les PME : **septembre 2026**
- AI Act : formation IA obligatoire pour le personnel utilisant des
  systèmes d'IA depuis février 2025
- 91 % des experts-comptables voient l'IA comme une opportunité
- 88 % sont freinés par le manque de méthode interne (Bpifrance / France Num)

**Nom : Mimir.** Référence à la mythologie nordique — Mimir est le gardien
de la sagesse et de la connaissance. Posture : sage, fiable, qui
transmet. Pas une promesse "magique" d'IA, mais un compagnon de
transformation.

---

## CIBLE

**Persona principal : Marc, expert-comptable**
- 40-55 ans, associé fondateur d'un cabinet régional de 12-35 collaborateurs
- CA cabinet : 1,5 à 5 M€
- Sous pression Pennylane / Indy / Dougs depuis 18 mois
- A testé ChatGPT en perso, n'a pas structuré le déploiement équipe
- Deux peurs : RGPD/secret professionnel + se faire dépasser par les confrères
- Conservateur sur les outils, pragmatique sur le ROI : signe vite si
  livrable tangible garanti
- Méfiant face aux formations CPF génériques qui n'ont rien changé

**Implication design :** il faut être **rassurant, crédible, dense
en preuves chiffrées**, pas startup-y bling-bling. Mais moderne — pas
de codes corporate vieillots.

---

## DIRECTION ARTISTIQUE

**Référence visuelle : Pennylane × Linear × Stripe**
- Sobre, beaucoup d'espace, typo soignée, gradients très subtils
- Sensation de "produit premium maîtrisé", pas de "landing page d'agence"

**Palette (à respecter strictement) :**
- Fond principal : `#FAFAF7` (warm off-white) ou `#F8FAFC` (cool)
- Surface cards : `#FFFFFF`
- Texte principal : `#0F172A` (slate-900) — **AAA contrast obligatoire**
- Texte secondaire : `#475569` (slate-600) — pour descriptions
- Texte tertiaire : `#64748B` (slate-500) — pour metadata, labels uppercase
- Bordures : `#E2E8F0` (slate-200)
- **Accent principal (brand) : `#4F46E5` (indigo-600)** — boutons secondaires, badges, focus
- **Accent CTA (action) : `#F97316` (orange-500)** — le CTA principal uniquement
- Success : `#10B981` (emerald-500)

**⚠️ Règle de contraste critique** : aucun texte ne doit avoir un
ratio < 4.5:1 sur son fond. Pas de gris clair sur fond clair. Pas
d'orange sur fond blanc pour du texte (ok pour boutons pleins).

**Typographie :**
- Famille : **Inter** (ou Geist Sans)
- Titres : `font-weight: 600`, tracking serré (`-0.02em`)
- Display H1 : 56-72px desktop, 40px mobile
- H2 sections : 36-44px
- Body : 16-18px, line-height 1.6
- Labels metadata : 12px, uppercase, tracking large (0.08em)

**Espace :**
- Sections : `padding: 96px 0` desktop, `64px 0` mobile
- Container : max-width `1152px`, padding latéral `24px`
- Radius : cards `16px`, boutons `8px`, badges `9999px`
- Ombres : très subtiles (`shadow-sm`), jamais lourdes

**Effets autorisés :**
- Gradients très doux dans le hero (radial blur indigo/orange à 5-10 % d'opacité)
- Animations d'apparition à l'arrivée (fade-up 16px, durée 400ms)
- Hover sur cards : border-color shift + élévation très légère
- **Pas** de dégradé sur le texte principal (juste sur 1 mot du H1 hero max)

---

## PAGE 1 — LANDING

URL : `/`

### Structure (verticale, dans cet ordre)

**1. Header sticky (h-16)**
- Logo "Mimir" (icône carré 28×28 fond noir lettre M blanche) + wordmark
- Nav : Méthode · Témoignages · Tarifs
- CTA droite : "Diagnostic gratuit" (bouton orange small)

**2. Hero (min-h 80vh)**
- Badge en haut : dot pulse indigo + "Facture électronique obligatoire — sept. 2026"
- H1 : "L'IA dans votre cabinet, **en 90 jours.**"
  - "en 90 jours." en gradient indigo→orange (le seul gradient texte de la page)
- Sous-titre (18px, slate-600) : "Audit, plan d'action et formation packagés pour les cabinets d'expertise comptable de 10 à 50 salariés. Finançable OPCO Atlas jusqu'à 100 %."
- CTA primaire orange : "Démarrer mon diagnostic gratuit →"
- Mention petite : "2 minutes — sans engagement"
- Bandeau réassurance en bas : "Conforme AI Act · RGPD & secret professionnel · Indépendant des éditeurs"
- Fond : très subtil gradient radial indigo en haut, blur

**3. Section "Le marché ne demande qu'à être servi" (3 stats)**
- Eyebrow indigo uppercase : "L'urgence est documentée"
- H2 + sous-titre
- 3 cards côte à côte, fond blanc, séparées par bordure fine :
  - **91 %** — des experts-comptables voient l'IA comme une opportunité — *France Num, 2025*
  - **88 %** — sont freinés par un manque de méthode interne — *Bpifrance Le Lab*
  - **Sept. 2026** — facture électronique obligatoire — 0 cabinet pleinement prêt — *DGFiP*
- Chiffres en 48-56px font-semibold, label en 16px slate-600, source en 11px uppercase

**4. Section "Notre méthode" (id=methode)**
- Eyebrow + H2 "Trois phases. Un seul interlocuteur."
- 3 cards horizontales avec flèche entre chacune :
  - **01 — Audit** (Semaine 1-2) — Cartographie process, outils, RGPD. Livrables : rapport diagnostic 360°, matrice opportunités/risques, score maturité
  - **02 — Plan IA** (Semaine 3-4) — Roadmap 90 jours, outils, gouvernance. Livrables : roadmap, sélection outils, cadre RGPD opérationnel
  - **03 — Formation** (Mois 2-3) — Acculturation équipe, prompts métier. Livrables : formation Qualiopi, bibliothèque prompts, coach IA dédié
- Numéro 01/02/03 en gros indigo très clair en arrière-plan de chaque card

**5. Section "Témoignages" (id=temoignages)**
- Fond légèrement différent (blanc pur ou gris très clair) pour rythmer
- Eyebrow "Ce que disent les associés"
- H2 "Issu de 7 entretiens avec des dirigeants de cabinets."
- 3 cards verbatims :
  - "On manque surtout d'accompagnement, de coaching. Les outils existent déjà." — Nathalie F., Associée, cabinet 10 collab., Paris
  - "Ce qui m'empêche de déployer l'IA, c'est la connaissance. Il me manque la veille, la méthode." — Jacob L., Président, cabinet 15 collab.
  - "Le comptable classique est voué à disparaître. L'IA est déjà bonne sur les tâches générales — il faut former, vite." — Tino M., grand groupe, 2 000 collab.
- Icône guillemets indigo discrète en haut de chaque card

**6. Section "Tarifs" (id=tarifs)**
- Eyebrow centré + H2 "Trois forfaits. Aucun coût caché."
- Sous-titre : mention OPCO Atlas
- 3 cards de pricing :
  - **Diagnostic** — 2 500 € HT — Forfait unique
  - **Déploiement** — 6 500 € HT — **CARD MISE EN AVANT** (fond noir slate-900, texte blanc, légèrement scale 1.05, badge orange flottant "Finançable 100 % OPCO Atlas")
  - **Transformation** — 14 900 € HT — Accompagnement 6 mois
- Chacune avec liste de features avec checkmarks verts

**7. CTA final (bandeau)**
- Card rounded-3xl pleine largeur fond slate-900, padding 80px
- Avec blur radial indigo + orange en arrière-plan
- H2 blanc : "Découvrez votre score IA cabinet en 2 minutes."
- Sous-titre blanc 70% opacity
- 2 CTA : "Démarrer mon diagnostic" (orange) + "Voir les tarifs" (ghost blanc)

**8. Footer minimal (h-32)**
- Logo + tagline · mentions légales · RGPD

---

## PAGE 2 — DIAGNOSTIC (questionnaire)

URL : `/diagnostic`

**Principe : une question par écran, plein centré, transitions fluides.**

**Header simplifié (h-16) :**
- Logo Mimir à gauche, lien "Quitter" à droite
- En dessous : barre de progression fine (1.5px haut), gradient indigo→orange, animée
- Indicateur texte : "Question 3 / 8" — "37 %"

**Zone question (centrée verticalement) :**
- Max-width 640px
- H2 28-32px font-semibold slate-900 (la question)
- Sous-titre 16-18px slate-600 (contexte / instruction)
- Si multi : ligne en dessous "X réponses sélectionnées" en indigo

**Choix (boutons) :**
- Type **single choice** : liste verticale, gros boutons rounded-xl bordure 2px slate-200, hover bordure slate-400. Sélectionné : fond indigo-50, bordure indigo-600, checkmark à droite (rond rempli indigo + check blanc). Texte slate-900 medium. Auto-advance 450ms après sélection.
- Type **multi choice** : pareil mais checkmark en carré (rounded-md), reste sélectionnable, bouton "Continuer" orange en bas droite.
- Type **scale 1-5** : 5 boutons côte à côte en grid, gros emoji au-dessus (3xl), chiffre en dessous. Sélectionné : fond indigo-50 + bordure indigo-600.

**Bas de page :**
- Bouton "Précédent" ghost à gauche (uniquement si index > 0)
- Si multi : bouton "Continuer →" orange à droite (disabled si 0 sélection)

**Écran final (EmailGate) — 9ème écran :**
- Badge en haut "Dernière étape" pulse
- H2 "Votre rapport est prêt."
- Sous-titre : indiquez email pro pour découvrir score + plan
- Form : input "Nom du cabinet" + input "Email professionnel" (h-12, border-2 slate-200, focus indigo)
- Bouton orange pleine largeur "Découvrir mon score" → loading "Analyse de votre cabinet…" 1.2s
- Petit print RGPD en bas

---

## PAGE 3 — RÉSULTATS

URL : `/resultats`

**Header :** comme pages précédentes (logo + lien Accueil)

**Section Hero (grid 2 colonnes) :**
- Colonne gauche :
  - Badge vert "Rapport généré pour {Cabinet}"
  - H1 "Votre score IA cabinet"
  - Sous-titre : "Vous êtes dans le 2ᵉ quartile (en démarrage) des cabinets d'expertise comptable de votre taille."
  - Card orange-soft avec icône soleil : "Potentiel : ~120 h/mois économisées sur 12 collaborateurs équivalent temps plein"
- Colonne droite : **jauge circulaire animée** 224×224
  - Anneau gris clair en fond, arc gradient indigo→orange qui se remplit en 1.6s
  - Au centre : score 60-72px font-semibold + "/ 100" petit uppercase

**Section "Plan d'action personnalisé" :**
- Eyebrow + H2 "Vos 3 chantiers prioritaires"
- 3 cards (grid-cols-3 desktop, stacked mobile) :
  - Tag uppercase indigo en haut gauche, numéro 01/02/03 en gros gris très clair à droite
  - Titre chantier (18px font-semibold)
  - Description (14px slate-600)
  - Apparition fade-up séquencée (200ms, 300ms, 400ms)

**Section Booking :**
- Badge indigo "Prochaine étape — gratuit"
- H2 centré "Bookez votre restitution avec un expert."
- Sous-titre centré
- **Embed Cal.com** dans une card rounded-2xl border, min-height 640px

**Bas :** "Un rapport détaillé a été envoyé à {email}." (texte slate-500 centré)

---

## LIVRABLES ATTENDUS

1. Le **design system** d'abord (palette, typo, composants clés) sur 1 page pour validation
2. Les **3 pages mockupées** en HTML + Tailwind v4
3. Composants factorisés réutilisables : `Button`, `Badge`, `Card`, `ChoiceButton`, `ProgressBar`, `ScoreGauge`
4. Animations gérées avec **framer-motion** (déjà installé dans le projet)
5. **100 % responsive** mobile-first

**Code propre :** TypeScript, composants React, pas d'inline style, classes Tailwind uniquement.
