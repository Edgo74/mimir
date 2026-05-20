import { QUESTIONS } from "./questions";

export type Answers = Record<string, string | string[]>;

export type Reco = {
  title: string;
  desc: string;
  tag: string;
};

export function computeScore(answers: Answers): number {
  let score = 0;
  for (const q of QUESTIONS) {
    const ans = answers[q.id];
    if (!ans) continue;
    const ids = Array.isArray(ans) ? ans : [ans];
    for (const id of ids) {
      const choice = q.choices.find((c) => c.id === id);
      if (choice?.score) score += choice.score;
    }
  }
  return Math.min(100, Math.round(score));
}

export function quartile(score: number): { label: string; n: number } {
  if (score < 25) return { label: "1ᵉʳ quartile (en retard)", n: 1 };
  if (score < 50) return { label: "2ᵉ quartile (en démarrage)", n: 2 };
  if (score < 75) return { label: "3ᵉ quartile (en progression)", n: 3 };
  return { label: "4ᵉ quartile (mature)", n: 4 };
}

export function recos(answers: Answers): Reco[] {
  const list: Reco[] = [];
  const blocker = answers["blocker"];
  const chrono = (answers["chronophage"] as string[]) ?? [];
  const facture = answers["facture-elec"];
  const tested = answers["tested"];

  if (blocker === "rgpd") {
    list.push({
      tag: "RGPD",
      title: "Sécuriser l'usage de l'IA au regard du secret professionnel",
      desc: "Mise en place d'une charte d'usage IA + sélection d'outils conformes (hébergement EU, contrats DPA). Cadrage en 2 semaines.",
    });
  }
  if (chrono.includes("saisie") || chrono.includes("tva")) {
    list.push({
      tag: "Productivité",
      title: "Automatiser la collecte et le pré-traitement des pièces",
      desc: "Couplage Dext / Pennylane / Regate avec règles IA personnalisées. Gain mesuré : 40 à 60 % du temps de saisie sur les cabinets comparables.",
    });
  }
  if (chrono.includes("relances")) {
    list.push({
      tag: "Relation client",
      title: "Industrialiser les relances clients par agent IA",
      desc: "Séquences personnalisées par persona client, ton préservé, suivi dans votre outil actuel. Déploiement en 3 semaines.",
    });
  }
  if (facture === "no" || facture === "wip") {
    list.push({
      tag: "Conformité 2026",
      title: "Sprint de mise en conformité facture électronique",
      desc: "Diagnostic clients, choix de plateforme PDP, plan de bascule, formation interne. Calé sur l'échéance de septembre 2026.",
    });
  }
  if (tested === "no") {
    list.push({
      tag: "Acculturation",
      title: "Acculturation IA en 2 demi-journées",
      desc: "Formation Qualiopi, finançable OPCO, pour donner à toute l'équipe les bons réflexes (et les bons garde-fous).",
    });
  }
  if (blocker === "roi") {
    list.push({
      tag: "ROI",
      title: "Pilotage du ROI IA dès la première semaine",
      desc: "Tableau de bord des heures gagnées par collaborateur. Vous voyez le retour sur investissement en temps réel.",
    });
  }

  // Fallback / top up to 3 recos
  const defaults: Reco[] = [
    {
      tag: "Stratégie",
      title: "Cartographier vos opportunités IA prioritaires",
      desc: "Atelier dirigeant de 2h pour identifier les 3 chantiers à plus fort ROI dans VOTRE cabinet.",
    },
    {
      tag: "Formation",
      title: "Bibliothèque de prompts dédiée à votre métier",
      desc: "50+ prompts éprouvés sur la rédaction de notes, la synthèse de dossiers, les courriers fiscaux.",
    },
  ];
  for (const d of defaults) {
    if (list.length >= 3) break;
    list.push(d);
  }

  return list.slice(0, 3);
}

export function estimatedHoursSaved(answers: Answers): { hours: number; staff: number } {
  const size = answers["size"];
  const chrono = (answers["chronophage"] as string[]) ?? [];
  const staffMap: Record<string, number> = { xs: 5, s: 12, m: 30, l: 60 };
  const staff = staffMap[size as string] ?? 10;
  const hoursPerTask = 6;
  const hours = Math.round(chrono.length * hoursPerTask * (staff / 4));
  return { hours: Math.max(20, hours), staff };
}
