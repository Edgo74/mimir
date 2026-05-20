# MIMIR — Design System

Document technique compagnon de la charte graphique. À utiliser pour appliquer l'identité visuelle MIMIR à n'importe quel site, document HTML ou interface.

> **Deux usages possibles :**
> - **Dev manuel** : copier les tokens CSS, importer les composants, suivre les règles
> - **Via IA** : copier le prompt-modèle à la fin du document, joindre ce fichier + le HTML à transformer

---

## 0. Philosophie de marque

MIMIR puise son identité dans deux héritages : **Mímir**, le dieu nordique de la connaissance gardien du puits sous Yggdrasil, et **秘密** (mìmì), "secret" en chinois. Le système visuel relie le **savoir ancestral** à la **technologie contemporaine**.

**Quatre piliers à respecter dans toute interface :**

1. **Savoir ancestral** : présence subtile de runes futhark et de références mythologiques
2. **Technologie** : code, données binaires, terminologie data/IA
3. **Premium** : sobriété, respiration, hiérarchie typographique stricte
4. **Dynamique** : asymétrie, mouvement, animations légères ésotériques

**Métaphore visuelle directrice** : le portail de la connaissance. Particules de runes et de binaire qui apparaissent/disparaissent en filigrane comme des fragments de savoir traversant une interface.

---

## 1. Variables CSS — tokens

Copier le bloc suivant en début de feuille de style. Ces variables sont la source de vérité ; ne jamais hardcoder de hex dans le code.

```css
:root{
  /* — PALETTE MIMIR — */
  --encre:#0C0F1A;          /* fond principal sombre */
  --saphir-nuit:#1A3A6B;    /* fond secondaire, cartes saphir */
  --saphir:#2E5BA8;         /* couleur de marque */
  --ciel:#7BA3D8;           /* arcs, traits secondaires */
  --cyan-neon:#00D4FF;      /* accent, données, états actifs */
  --perle:#F4F4F6;          /* fond clair */
  --givre:#DCE6F5;          /* fond clair alternatif */
  --blanc:#FFFFFF;

  /* — TEXTE — */
  --text-on-dark:#FFFFFF;
  --text-on-dark-muted:rgba(255,255,255,.55);
  --text-on-dark-faint:rgba(255,255,255,.30);
  --text-on-light:#0C0F1A;
  --text-on-light-muted:#5A6478;

  /* — RULES — */
  --rule-dark:rgba(255,255,255,.10);
  --rule-light:#E3E8F1;

  /* — TYPO — */
  --font-display:'Syne', sans-serif;
  --font-body:'Inter', -apple-system, sans-serif;
  --font-mono:'JetBrains Mono', monospace;
}
```

**Règle de répartition** : ~60% Encre/fonds sombres · ~25% famille saphir · ~10% Cyan néon accent · ~5% surfaces claires.

---

## 2. Fonts à importer

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+Runic&family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
```

| Famille | Rôle | Quand l'utiliser |
|---|---|---|
| **Syne** | Display | Titres, wordmark MIMIR, headings principaux (h1, h2, h3) |
| **Inter** | Body | Texte courant, paragraphes, libellés UI, formulaires |
| **JetBrains Mono** | Mono | Données chiffrées, KPIs, kickers, métadonnées techniques, étiquettes |
| **Noto Sans Runic** | Décoratif | Particules ésotériques (portail) uniquement |
| **Noto Sans SC** | Décoratif | Caractères chinois 秘密 |

**Règle stricte** : aucune famille n'empiète sur le territoire d'une autre. Pas de Syne pour le texte courant, pas d'Inter pour les KPIs.

---

## 3. Logo MIMIR

### SVG de référence (à inclure tel quel)

```html
<svg viewBox="-10 -10 140 115" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet">
  <path d="M 10 80 A 50 50 0 1 1 110 30" stroke="#7BA3D8" stroke-width="1.8"/>
  <path d="M 25 80 A 32 32 0 1 0 92 50" stroke="#2E5BA8" stroke-width="2.2"/>
  <circle cx="10" cy="80" r="5" fill="#2E5BA8"/>
  <circle cx="10" cy="80" r="2.2" fill="#00D4FF"/>
  <circle cx="110" cy="30" r="3.5" fill="#00D4FF"/>
  <line x1="92" y1="40" x2="108" y2="22" stroke="#00D4FF" stroke-width="2.2"/>
</svg>
```

### Trois variantes autorisées

1. **Fond blanc** : Print, digital, documents → version par défaut
2. **Fond saphir** (`#1A3A6B`) : Slides, cartes, couvertures → arc moyen passe en cyan néon
3. **Icône seule** : App, favicon, avatar → sans wordmark

Le logo principal (avec wordmark) place l'icône à gauche et le mot "MIMIR" en Syne Bold à droite, avec "TRANSFORMATION IA" en Inter sous le wordmark (letter-spacing élevé, taille réduite).

---

## 4. Composants standards

### Section paysage

Structure de base d'une section plein écran :

```html
<section class="section dark">
  <div class="section-index">
    <span class="dot"></span>
    <span>01 — Titre de section</span>
    <span class="line"></span>
  </div>
  <h2 class="section-title">Titre</h2>
  <p class="section-sub">Description…</p>

  <!-- Contenu -->

  <div class="section-footer">
    <span>mimir · charte graphique v1.0</span>
    <div class="right">
      <span>Section 01 / 07</span>
      <span>Label</span>
    </div>
  </div>
</section>
```

CSS associé :

```css
.section{
  width:100%;
  min-height:100vh;
  padding:64px 80px;
  position:relative;
  display:flex;
  flex-direction:column;
  border-bottom:1px solid var(--rule-dark);
  z-index:2;
}
.section.dark{background:transparent}  /* laisse passer le portail */
.section.light{background:var(--perle);color:var(--text-on-light);border-bottom:1px solid var(--rule-light)}
.section.saphir{background:var(--saphir-nuit)}

.section-index{
  font-family:var(--font-mono);
  font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;
  color:var(--cyan-neon);
  display:flex;align-items:center;gap:14px;margin-bottom:8px;
}
.section.light .section-index{color:var(--saphir)}
.section-index .dot{width:6px;height:6px;border-radius:50%;background:var(--cyan-neon)}
.section-index .line{height:1px;width:60px;background:var(--cyan-neon);opacity:.4}

.section-title{
  font-family:var(--font-display);
  font-size:56px;font-weight:700;letter-spacing:-1.4px;line-height:1;
  margin-bottom:14px;
}
.section-sub{
  font-family:var(--font-body);
  font-size:15px;color:var(--text-on-dark-muted);
  max-width:640px;line-height:1.55;margin-bottom:48px;
}

.section-footer{
  margin-top:auto;padding-top:32px;
  border-top:1px solid var(--rule-dark);
  display:flex;justify-content:space-between;align-items:center;
  font-family:var(--font-mono);font-size:10px;font-weight:600;
  letter-spacing:.18em;text-transform:uppercase;color:var(--text-on-dark-faint);
}
.section-footer .right{display:flex;gap:24px}
```

### Kicker (étiquette mono cyan)

Préfixe court qui annonce un bloc de contenu. À utiliser systématiquement avant un titre majeur.

```html
<div class="kicker">
  <span class="dot"></span>
  <span>Audit · Étape 01</span>
  <span class="line"></span>
</div>
```

```css
.kicker{
  font-family:var(--font-mono);font-size:11px;font-weight:600;
  letter-spacing:.22em;text-transform:uppercase;color:var(--cyan-neon);
  display:flex;align-items:center;gap:14px;
}
.kicker .dot{width:6px;height:6px;border-radius:50%;background:var(--cyan-neon)}
.kicker .line{height:1px;width:60px;background:var(--cyan-neon);opacity:.4}
```

### Pill (chip)

Petite étiquette ronde pour catégories ou tags. Toujours en cyan néon sur bordure semi-transparente.

```html
<span class="pill">audit</span>
```

```css
.pill{
  font-family:var(--font-body);font-size:12px;font-weight:500;
  color:var(--cyan-neon);
  border:1px solid rgba(0,212,255,.35);
  padding:6px 14px;border-radius:30px;
  display:inline-block;
}
```

### Card sombre

Bloc de contenu sur fond sombre, bordure discrète, padding généreux.

```html
<div class="card">
  <span class="num">01</span>
  <h3 class="card-title">Titre</h3>
  <p class="card-desc">Description du contenu.</p>
</div>
```

```css
.card{
  background:rgba(46,91,168,.08);
  border:1px solid var(--rule-dark);
  border-radius:10px;
  padding:18px 20px;
}
.card .num{
  font-family:var(--font-mono);font-size:10px;font-weight:600;
  color:var(--cyan-neon);letter-spacing:.18em;
}
.card .card-title{
  font-family:var(--font-display);font-size:18px;font-weight:700;
  color:#fff;letter-spacing:-.3px;margin-top:4px;
}
.card .card-desc{
  font-family:var(--font-body);font-size:12.5px;font-weight:400;
  color:var(--text-on-dark-muted);line-height:1.5;margin-top:6px;
}
```

### KPI / chiffre clé

Donnée chiffrée mise en avant. Toujours en Syne, suffixe cyan en mono.

```html
<div class="stat">
  <span class="label">Métrique</span>
  <span class="value">42<span class="unit">%</span></span>
  <span class="desc">Précision du contexte.</span>
</div>
```

```css
.stat{display:flex;flex-direction:column;gap:6px}
.stat .label{
  font-family:var(--font-mono);font-size:10px;font-weight:600;
  letter-spacing:.18em;text-transform:uppercase;color:var(--text-on-light-muted);
}
.stat .value{
  font-family:var(--font-display);font-size:36px;font-weight:700;
  color:var(--saphir-nuit);letter-spacing:-1px;line-height:1;
}
.stat .unit{font-family:var(--font-mono);font-size:18px;font-weight:600;color:var(--cyan-neon);margin-left:4px}
.stat .desc{font-family:var(--font-body);font-size:13px;color:var(--text-on-light-muted);line-height:1.45;margin-top:4px}
```

### Topbar (header global)

Barre fixe en haut, signature MIMIR à gauche, navigation à droite.

```html
<div class="topbar">
  <div class="left">
    <span class="mark">MIMIR</span>
    <span class="sep"></span>
    <span>Sous-titre</span>
  </div>
  <nav class="nav">
    <a href="#s01">01 Page</a>
  </nav>
</div>
```

```css
.topbar{
  position:fixed;top:0;left:0;right:0;height:42px;
  background:rgba(12,15,26,.92);backdrop-filter:blur(10px);
  border-bottom:1px solid var(--rule-dark);
  display:flex;align-items:center;justify-content:space-between;
  padding:0 32px;
  font-family:var(--font-mono);font-size:10px;font-weight:600;
  letter-spacing:.18em;text-transform:uppercase;color:var(--text-on-dark-faint);
  z-index:100;
}
.topbar .left{display:flex;align-items:center;gap:14px}
.topbar .mark{font-family:var(--font-display);font-size:14px;font-weight:700;color:#fff;letter-spacing:-.2px}
.topbar .sep{width:1px;height:14px;background:var(--rule-dark)}
.topbar .nav{display:flex;gap:24px}
.topbar .nav a{color:var(--text-on-dark-muted);text-decoration:none;transition:.15s}
.topbar .nav a:hover{color:var(--cyan-neon)}
```

---

## 5. Portail de la connaissance (animation de fond)

Élément clé de l'identité MIMIR. Particules de runes et de mots binaires qui apparaissent/disparaissent en filigrane comme des fragments de savoir traversant un portail magique.

### Setup

**1. Conteneur** (à placer juste après `<body>`) :

```html
<div class="portal-bg" id="portal-bg" aria-hidden="true"></div>
```

**2. CSS** :

```css
.portal-bg{
  position:fixed;inset:0;
  pointer-events:none;
  z-index:1;
  overflow:hidden;
}
.portal-particle{
  position:absolute;
  font-family:var(--font-mono);
  font-size:13px;font-weight:500;
  color:rgba(123,163,216,0.32);
  letter-spacing:.10em;white-space:nowrap;
  opacity:0;
  animation:portalFade ease-in-out forwards;
  text-shadow:0 0 10px rgba(0,212,255,0.18), 0 0 22px rgba(46,91,168,0.10);
}
.portal-particle.rune{
  font-family:'Noto Sans Runic','Segoe UI Symbol',sans-serif;
  font-size:20px;color:rgba(0,212,255,0.32);letter-spacing:.22em;
  text-shadow:0 0 12px rgba(0,212,255,0.28), 0 0 28px rgba(0,212,255,0.10);
}
.portal-particle.accent{
  color:rgba(0,212,255,0.42);
  text-shadow:0 0 14px rgba(0,212,255,0.35), 0 0 32px rgba(0,212,255,0.15);
}
@keyframes portalFade{
  0%   { opacity:0; transform:scale(0.92); filter:blur(2px); }
  30%  { opacity:1; transform:scale(1); filter:blur(0); }
  70%  { opacity:1; transform:scale(1); filter:blur(0); }
  100% { opacity:0; transform:scale(1.08); filter:blur(2px); }
}
@media (prefers-reduced-motion: reduce){
  .portal-particle{ animation-duration:0.01ms !important; opacity:.25 !important; }
}
```

**3. JavaScript** (à placer juste avant `</body>`) :

```html
<script>
(function(){
  const root = document.getElementById('portal-bg');
  if(!root) return;

  const RUNES = [
    'ᛗᛁᛗᛁᚱ','ᚦᚢᚱᛁᛊᚨᛉ','ᚨᛚᚷᛁᛉ','ᚱᛇᛞᛟ','ᛟᚦᚨᛚᚨ',
    'ᛒᛖᚱᚲᚨᚾᚨ','ᛞᚨᚷᚨᛉ','ᚹᚢᚾᛃᛟ','ᛇᚹᚨᛉ','ᚺᚨᚷᚨᛚᚨᛉ',
    'ᚾᚨᚢᚦᛁᛉ','ᛁᛊᚨ','ᛃᛖᚱᚨ','ᛈᛖᚱᚦᛟ','ᛊᛟᚹᛁᛚᛟ',
    'ᛏᛁᚹᚨᛉ','ᛖᚺᚹᚨᛉ','ᚠᛖᚺᚢ','ᚢᚱᚢᛉ','ᚷᛖᛒᛟ'
  ];

  function makeBinaryWord(){
    let s = '';
    for(let i=0; i<8; i++) s += Math.random() < 0.5 ? '0' : '1';
    return s;
  }

  const PALETTE = [
    {weight:55, type:'rune'},
    {weight:35, type:'binary'},
    {weight:10, type:'accent'}
  ];

  function weightedPick(arr){
    const total = arr.reduce((s,o)=>s+o.weight,0);
    let r = Math.random()*total;
    for(const o of arr){ r -= o.weight; if(r<=0) return o.type; }
    return arr[0].type;
  }
  function rand(min,max){ return Math.random()*(max-min)+min; }
  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  let isVisible = !document.hidden;
  document.addEventListener('visibilitychange', ()=>{ isVisible = !document.hidden; });

  function spawnParticle(){
    if(!isVisible) return;
    const type = weightedPick(PALETTE);
    const el = document.createElement('span');
    el.className = 'portal-particle';
    let text = '';
    if(type === 'rune'){ el.classList.add('rune'); text = pick(RUNES); }
    else if(type === 'accent'){
      el.classList.add('accent');
      text = Math.random() < 0.5 ? pick(RUNES) : makeBinaryWord();
      if(!(/^[01]+$/.test(text))) el.classList.add('rune');
    } else { text = makeBinaryWord(); }
    el.textContent = text;
    el.style.left = rand(3, 90) + 'vw';
    el.style.top  = rand(8, 90) + 'vh';
    const duration = rand(0.7, 1.3);
    el.style.animationDuration = duration + 's';
    root.appendChild(el);
    setTimeout(()=> el.remove(), duration * 1000 + 60);
  }

  function tick(){
    if(isVisible && root.children.length < 18) spawnParticle();
    setTimeout(tick, rand(120, 280));
  }

  for(let i=0; i<8; i++){ setTimeout(spawnParticle, i*80); }
  tick();
})();
</script>
```

**Paramètres ajustables :**
- `RUNES` : vocabulaire futhark, ne pas modifier sauf raison forte
- `PALETTE` : poids relatifs des types de particules (somme = 100)
- Plafond `18` : nombre max de particules simultanées
- `rand(0.7, 1.3)` : durée d'une particule en secondes (apparition → disparition)
- `rand(120, 280)` : intervalle entre deux spawns en ms

**Architecture z-index essentielle :**
- `body` (background `--encre` opaque) : z-index auto
- `.portal-bg` (particules) : z-index 1
- `.section.dark` : z-index 2, **background transparent** (laisse voir les particules)
- `.section.light` : z-index 2, **background opaque** (couvre les particules dans ces zones)
- `.topbar` : z-index 100

---

## 6. Règles de mise en page

### Espacement

- Padding section : `64px 80px`
- Gap entre éléments majeurs : `48px`
- Gap entre cards : `18px` à `24px`
- Margin-bottom section-title : `14px`
- Margin-bottom section-sub : `48px`

### Typographie — tailles indicatives

| Élément | Famille | Taille | Poids | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| h1 cover | Syne | 128px | 700 | -4px | 0.92 |
| Section title | Syne | 56px | 700 | -1.4px | 1 |
| h3 card | Syne | 18-32px | 700 | -.3 à -.8px | 1 à 1.1 |
| Body paragraphe | Inter | 15px | 400 | normal | 1.55 |
| Kicker / index | JetBrains Mono | 11px | 600 | .22em | normal |
| Footer signature | JetBrains Mono | 10px | 600 | .18em | normal |
| KPI value | Syne | 36-64px | 700 | -1 à -2px | 1 |

### Bordures et coins

- `border-radius` cards : `10-14px`
- `border-radius` pills : `30px`
- `border-radius` boutons : `8-10px`
- `border` standard : `1px solid var(--rule-dark)` (sombre) ou `var(--rule-light)` (clair)

---

## 7. Do / Don't

**À faire :**
- Toujours laisser le portail actif sur les fonds sombres
- Réserver le cyan néon (#00D4FF) aux **accents**, KPIs, états actifs ne pas en faire un fond
- Utiliser Syne uniquement pour les titres et le wordmark
- Utiliser JetBrains Mono pour toute donnée chiffrée ou étiquette technique
- Garder beaucoup de respiration (padding généreux, gaps marqués)

**À ne pas faire :**
- Mettre du texte courant en Syne ou en cyan néon
- Saturer une interface de cyan, ça doit rester un éclat ponctuel
- Mettre du noir pur (#000) : utiliser toujours #0C0F1A (Encre)
- Mettre des dégradés colorés (la marque est plate, sobre, ponctuée d'accents)
- Couvrir le portail derrière des fonds opaques inutiles
- Multiplier les runes en gros à l'écran (réservé au portail discret en filigrane)

---

## 8. Prompt-modèle pour application via IA

Copier-coller le bloc ci-dessous, et joindre **ce document** + **le HTML à transformer** :

```
Tu es un designer front-end expert. Je te fournis deux fichiers :

1. Un document "design system" décrivant l'identité visuelle MIMIR
   (tokens CSS, composants, règles typographiques, portail de connaissance)
2. Un fichier HTML existant dont je veux uniformiser l'apparence

Objectif : appliquer intégralement la charte MIMIR au fichier HTML, sans
toucher au contenu (textes, images, structure logique, liens, ID, classes
métier). Seuls le styling visuel, les composants graphiques et les classes
de présentation doivent être adaptés.

Contraintes strictes :

1. PRÉSERVER LE CONTENU
   - Aucune modification du texte (sauf si manifestement incohérent avec
     le ton MIMIR : alors me le signaler à la fin, sans modifier)
   - Aucune suppression de section, lien ou information
   - Les ID techniques et classes liées à la logique métier (form,
     data-*, etc.) restent intacts

2. APPLIQUER LA CHARTE MIMIR
   - Importer Google Fonts (Syne, Inter, JetBrains Mono, Noto Sans Runic,
     Noto Sans SC) si pas déjà présent
   - Injecter les variables CSS :root du design system
   - Remplacer toutes les couleurs hardcodées par les variables MIMIR
     (Encre, Saphir nuit, Saphir, Ciel, Cyan néon, Perle, Givre, Blanc)
   - Mapper les titres sur Syne, le body sur Inter, les chiffres/codes
     sur JetBrains Mono
   - Adapter les composants existants (boutons, cards, sections, headers)
     vers les patterns MIMIR (pill, card sombre, kicker mono cyan, etc.)
   - Garder une respiration généreuse (padding 64px 80px sur sections,
     gaps marqués)

3. AJOUTER LE PORTAIL DE LA CONNAISSANCE
   - Inclure le conteneur div.portal-bg, le CSS et le script JS du
     portail (voir section 5 du design system)
   - Respecter l'architecture z-index : sections sombres transparentes
     (background: transparent), body en --encre, sections claires
     opaques

4. RESPECTER LES DO/DON'T
   - Pas de noir pur, pas de dégradés colorés
   - Cyan néon réservé aux accents (10% max de l'interface)
   - Pas de Syne pour le corps de texte
   - Pas de Mono pour les titres

5. LIVRABLE
   - Un seul fichier HTML self-contained
   - Tout le CSS dans <style>, scripts dans <script>
   - Ne pas dépendre de fichiers externes (sauf Google Fonts via CDN)
   - Commentaires CSS pour repérer les sections clés

Procède en silence, ne demande pas de clarification sauf blocage majeur.
Rends-moi le fichier complet à la fin. Liste à part toute incohérence
détectée que tu n'as pas modifiée.
```

---

## 9. Checklist de conformité

Avant de valider un livrable MIMIR, vérifier :

- [ ] Les 3 polices (Syne / Inter / JetBrains Mono) sont chargées et utilisées dans leurs rôles respectifs
- [ ] Les couleurs proviennent toutes des variables `:root` (aucun hex hardcodé hors `:root`)
- [ ] Le fond principal est `--encre` (#0C0F1A), pas `#000`
- [ ] Le cyan néon est utilisé en accent uniquement (KPIs, kickers, états actifs, hover)
- [ ] Le portail de la connaissance est actif (au moins sur les sections sombres)
- [ ] Les sections sombres ont `background: transparent` pour laisser passer le portail
- [ ] La topbar est en position fixed avec backdrop-filter
- [ ] Tous les kickers et étiquettes techniques sont en JetBrains Mono uppercase letter-spacing élevé
- [ ] Les titres principaux sont en Syne 700 avec letter-spacing négatif
- [ ] Les paragraphes sont en Inter 400, line-height 1.5+
- [ ] Le logo officiel est intégré (SVG vectoriel, pas de PNG)
- [ ] `prefers-reduced-motion` est respecté pour le portail

---

*MIMIR · Design System v1.0 · 2026*
*Document compagnon de la charte graphique visuelle.*
