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

/**
 * Transform raw answers (choice IDs) into a human-readable payload for
 * Formspree / email notifications. Each key becomes a numbered question
 * label, each value becomes the human label of the chosen option(s).
 * Includes free-text precisions from "_other" fields and a final summary.
 */
export function humanizeAnswers(
  answers: Answers,
  meta?: { cabinet?: string; email?: string }
): Record<string, string | number> {
  const out: Record<string, string | number> = {};

  if (meta?.cabinet) out["Cabinet"] = meta.cabinet;
  if (meta?.email) out["Email"] = meta.email;
  out["Score IA cabinet"] = `${computeScore(answers)} / 100`;
  out["Quartile"] = quartile(computeScore(answers)).label;
  const roi = estimatedHoursSaved(answers);
  out["Potentiel estimé"] = `${roi.hours} h/mois sur ${roi.staff} ETP`;

  QUESTIONS.forEach((q, i) => {
    const raw = answers[q.id];
    const num = String(i + 1).padStart(2, "0");
    const key = `Q${num} — ${q.title}`;

    if (raw == null || (Array.isArray(raw) && raw.length === 0)) {
      out[key] = "(sans réponse)";
      return;
    }

    // Resolve a human-readable label for a choice id.
    // Falls back to description, then to "Niveau {id}", then to the raw id.
    const resolveLabel = (id: string): string => {
      const choice = q.choices.find((c) => c.id === id);
      if (!choice) return id;
      const lbl = choice.label?.trim();
      if (lbl) {
        return choice.description ? `${lbl} — ${choice.description}` : lbl;
      }
      if (choice.description) return `Niveau ${id} — ${choice.description}`;
      return `Niveau ${id}`;
    };

    let value: string;
    if (Array.isArray(raw)) {
      value = raw.map(resolveLabel).join(" · ");
    } else {
      value = resolveLabel(String(raw));
    }

    // Append free-text precision (e.g. tools_other, chronophage_other)
    const other = answers[`${q.id}_other`];
    if (typeof other === "string" && other.trim()) {
      value += ` — autre : "${other.trim()}"`;
    }

    out[key] = value;
  });

  return out;
}
