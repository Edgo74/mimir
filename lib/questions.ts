export type QuestionType = "single" | "multi" | "scale";

export type Choice = {
  id: string;
  label: string;
  emoji?: string;
  score?: number;
};

export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  subtitle?: string;
  choices: Choice[];
};

export const QUESTIONS: Question[] = [
  {
    id: "size",
    type: "single",
    title: "Quelle est la taille de votre cabinet ?",
    subtitle: "Pour calibrer votre roadmap au bon niveau.",
    choices: [
      { id: "xs", label: "Moins de 10 collaborateurs", score: 5 },
      { id: "s", label: "10 à 20 collaborateurs", score: 15 },
      { id: "m", label: "20 à 50 collaborateurs", score: 20 },
      { id: "l", label: "Plus de 50 collaborateurs", score: 15 },
    ],
  },
  {
    id: "tools",
    type: "multi",
    title: "Quels outils utilisez-vous aujourd'hui ?",
    subtitle: "Plusieurs réponses possibles.",
    choices: [
      { id: "pennylane", label: "Pennylane", score: 4 },
      { id: "sage", label: "Sage", score: 3 },
      { id: "cegid", label: "Cegid", score: 3 },
      { id: "quadratus", label: "Quadratus / ACD", score: 2 },
      { id: "dext", label: "Dext / Regate", score: 4 },
      { id: "other", label: "Autre / interne", score: 1 },
    ],
  },
  {
    id: "maturity",
    type: "scale",
    title: "Quelle est la maturité IA de votre équipe ?",
    subtitle: "De 1 (jamais entendu parler) à 5 (utilisée au quotidien).",
    choices: [
      { id: "1", label: "1", emoji: "😶", score: 2 },
      { id: "2", label: "2", emoji: "🤔", score: 6 },
      { id: "3", label: "3", emoji: "🙂", score: 10 },
      { id: "4", label: "4", emoji: "😎", score: 14 },
      { id: "5", label: "5", emoji: "🚀", score: 18 },
    ],
  },
  {
    id: "chronophage",
    type: "multi",
    title: "Quelles tâches sont les plus chronophages ?",
    subtitle: "Cochez tout ce qui s'applique — on s'en servira pour vos recommandations.",
    choices: [
      { id: "saisie", label: "Saisie / collecte des pièces", score: 3 },
      { id: "tva", label: "Déclarations TVA", score: 3 },
      { id: "relances", label: "Relances clients", score: 3 },
      { id: "lettres", label: "Lettres de mission", score: 2 },
      { id: "paie", label: "Gestion de la paie", score: 2 },
      { id: "mails", label: "Gestion des mails", score: 2 },
    ],
  },
  {
    id: "facture-elec",
    type: "single",
    title: "Où en êtes-vous sur la facture électronique 2026 ?",
    choices: [
      { id: "no", label: "Pas encore commencé", score: 3 },
      { id: "wip", label: "En cours de préparation", score: 8 },
      { id: "yes", label: "Prêt — clients déjà inscrits", score: 14 },
    ],
  },
  {
    id: "tested",
    type: "single",
    title: "Avez-vous déjà testé ChatGPT, Copilot ou similaire ?",
    choices: [
      { id: "no", label: "Non, jamais", score: 2 },
      { id: "perso", label: "Oui, à titre personnel", score: 8 },
      { id: "team", label: "Oui, déployé dans l'équipe", score: 16 },
    ],
  },
  {
    id: "budget",
    type: "single",
    title: "Quel budget formation par collaborateur et par an ?",
    subtitle: "OPCO Atlas finance jusqu'à 6 500 € — bon à savoir.",
    choices: [
      { id: "low", label: "Moins de 1 000 €", score: 4 },
      { id: "mid", label: "1 000 € — 2 500 €", score: 10 },
      { id: "high", label: "Plus de 2 500 €", score: 14 },
    ],
  },
  {
    id: "blocker",
    type: "single",
    title: "Quel est votre principal frein au déploiement IA ?",
    subtitle: "Une seule réponse — la plus déterminante.",
    choices: [
      { id: "rgpd", label: "RGPD et secret professionnel", score: 5 },
      { id: "skills", label: "Manque de compétences internes", score: 5 },
      { id: "time", label: "Pas le temps de m'y mettre", score: 5 },
      { id: "roi", label: "ROI flou, pas convaincu", score: 5 },
    ],
  },
];

export const MAX_SCORE = 100;
