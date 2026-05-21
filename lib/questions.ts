export type QuestionType = "single" | "multi" | "scale";

export type Choice = {
  id: string;
  label: string;
  emoji?: string;
  description?: string;
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
    subtitle: "De 1 (jamais utilisé) à 5 (au quotidien).",
    choices: [
      { id: "1", label: "", emoji: "😶", description: "On n'a jamais utilisé l'IA", score: 2 },
      { id: "2", label: "", emoji: "🤔", description: "On en a entendu parler, on a testé une ou deux fois", score: 6 },
      { id: "3", label: "", emoji: "🙂", description: "On l'utilise de temps en temps, sans vraie méthode", score: 10 },
      { id: "4", label: "", emoji: "😎", description: "On l'intègre régulièrement dans notre travail", score: 14 },
      { id: "5", label: "", emoji: "🚀", description: "L'IA fait partie de notre quotidien professionnel", score: 18 },
    ],
  },
  {
    id: "chronophage",
    type: "multi",
    title: "Quelles tâches sont les plus chronophages ?",
    subtitle: "Cochez tout ce qui s'applique on s'en servira pour vos recommandations.",
    choices: [
      { id: "saisie", label: "Saisie / collecte des pièces", score: 3 },
      { id: "tva", label: "Déclarations TVA", score: 3 },
      { id: "relances", label: "Relances clients", score: 3 },
      { id: "lettres", label: "Lettres de mission", score: 2 },
      { id: "paie", label: "Gestion de la paie", score: 2 },
      { id: "mails", label: "Gestion des mails", score: 2 },
      { id: "other", label: "Autre", score: 1 },
    ],
  },
  {
    id: "use-cases",
    type: "single",
    title:
      "Avez-vous identifié des cas d'usage concrets où l'IA pourrait résoudre un problème ou créer de la valeur ?",
    subtitle: "Au-delà de l'intuition — des cas précis pour votre cabinet.",
    choices: [
      { id: "no", label: "Non, pas encore", score: 2 },
      { id: "some", label: "Quelques idées, mais rien de formalisé", score: 6 },
      { id: "list", label: "Oui, une liste claire de cas prioritaires", score: 12 },
      { id: "tested", label: "Oui, déjà testés sur le terrain", score: 16 },
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
    id: "agents",
    type: "single",
    title: "Utilisez-vous des bots ou des agents IA ?",
    subtitle: "Au-delà d'un simple chat des assistants qui exécutent des tâches.",
    choices: [
      { id: "no", label: "Non, pas du tout", score: 2 },
      { id: "explore", label: "On explore, sans déploiement", score: 6 },
      { id: "pilot", label: "Pilote en cours sur 1 ou 2 cas d'usage", score: 12 },
      { id: "prod", label: "Oui, intégrés dans nos workflows", score: 18 },
    ],
  },
  {
    id: "workflow",
    type: "single",
    title: "Avez-vous un système d'autorisation ou de workflow ?",
    subtitle: "Pour cadrer qui peut utiliser quoi, sur quelles données, avec quelle validation.",
    choices: [
      { id: "no", label: "Non, chacun fait à sa manière", score: 2 },
      { id: "informal", label: "Règles orales, pas formalisées", score: 5 },
      { id: "written", label: "Procédures écrites mais manuelles", score: 10 },
      { id: "tooled", label: "Outils de workflow / gouvernance en place", score: 16 },
    ],
  },
  {
    id: "capacity",
    type: "single",
    title:
      "Disposez-vous de compétences internes ou de partenaires externes pour accompagner une démarche IA ?",
    subtitle: "Pour exécuter, pas seulement décider.",
    choices: [
      { id: "none", label: "Ni interne, ni partenaire", score: 2 },
      { id: "internal-partial", label: "Une personne en interne, mais pas dédiée", score: 6 },
      { id: "external", label: "Un partenaire externe identifié", score: 10 },
      { id: "both", label: "Compétences internes + partenaires externes", score: 16 },
    ],
  },
  {
    id: "budget",
    type: "single",
    title: "Quel budget formation par collaborateur et par an ?",
    subtitle: "Pour calibrer vos options de financement OPCO.",
    choices: [
      { id: "none", label: "Pas de budget alloué", score: 0 },
      { id: "low", label: "Entre 2 500 € et 5 000 €", score: 6 },
      { id: "mid", label: "Entre 5 000 € et 10 000 €", score: 12 },
      { id: "high", label: "Plus de 10 000 €", score: 16 },
    ],
  },
  {
    id: "blocker",
    type: "single",
    title: "Quel est votre principal frein au déploiement IA ?",
    subtitle: "Une seule réponse la plus déterminante.",
    choices: [
      { id: "rgpd", label: "RGPD et secret professionnel", score: 5 },
      { id: "skills", label: "Manque de compétences internes", score: 5 },
      { id: "time", label: "Pas le temps de m'y mettre", score: 5 },
      { id: "roi", label: "ROI flou, pas convaincu", score: 5 },
    ],
  },
];

export const MAX_SCORE = 100;
