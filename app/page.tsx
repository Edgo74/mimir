import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { DisplayHeading } from "@/components/DisplayHeading";
import { LinkCTA } from "@/components/LinkCTA";
import { MetricCard } from "@/components/MetricCard";
import { HairlineGrid } from "@/components/HairlineGrid";
import { PhaseRow } from "@/components/PhaseRow";
import { PriceColumn } from "@/components/PriceColumn";
import { BigQuote } from "@/components/BigQuote";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <section id="top" className="relative pt-[100px] pb-20 overflow-hidden">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] gap-20 max-md:gap-14 items-end">
            <div>
              <Eyebrow pulse numero="001">
                Facture électronique obligatoire · sept. 2026
              </Eyebrow>
              <DisplayHeading
                as="h1"
                className="mt-[26px]"
                html={`<span class="block">L'IA dans</span><span class="block"><em>votre cabinet</em>,</span><span class="block">en 90 jours.</span>`}
              />
              <p className="mt-9 text-[19px] leading-[1.5] text-ink-soft max-w-[52ch]">
                Audit, plan d&apos;action et formation packagés pour les cabinets d&apos;expertise
                comptable de 10 à 50 salariés. Finançable OPCO Atlas jusqu&apos;à 100 %.
              </p>
              <div className="mt-10 flex items-center gap-7 flex-wrap">
                <LinkCTA href="/diagnostic" variant="primary">
                  Démarrer mon diagnostic gratuit
                </LinkCTA>
                <LinkCTA href="#methode" variant="ghost">
                  Voir la méthode
                </LinkCTA>
              </div>
              <div className="mt-[18px] font-mono text-[11px] tracking-[0.1em] uppercase text-ink-mute">
                2 minutes · sans engagement · sans CB
              </div>
            </div>

            <MetricCard
              head={{ left: "Repères · Q2 2026", right: "MIMIR · 04" }}
              metrics={[
                {
                  numberHtml: `<em>91</em><span class="text-[0.45em] text-ink-mute not-italic tracking-normal"> %</span>`,
                  label:
                    "des experts-comptables voient l'IA comme une opportunité pour leur métier.",
                },
                {
                  numberHtml: `~120<span class="text-[0.45em] text-ink-mute not-italic tracking-normal"> h/mois</span>`,
                  label:
                    "économisées en moyenne après déploiement, sur un cabinet de 12 ETP.",
                },
              ]}
              footer="Conforme AI Act · RGPD · Indépendant"
            />
          </div>

          <div className="mt-[72px] flex items-center gap-[18px] text-ink-mute font-mono text-[11px] tracking-[0.16em] uppercase">
            <span>Mimir — gardien de la sagesse · mythologie nordique</span>
            <span className="flex-1 h-px bg-ink-line" />
            <span>EST. MMXXVI</span>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section id="urgence" className="border-t border-ink-line py-[110px] pb-[120px]">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-md:gap-7 items-end mb-16">
            <div>
              <Eyebrow numero="002">L&apos;urgence est documentée</Eyebrow>
              <DisplayHeading
                as="h2"
                className="mt-4"
                html={`Le marché<br />ne demande qu'à<br />être <em>servi</em>.`}
              />
            </div>
            <p className="text-[17px] text-ink-soft m-0 max-w-[48ch]">
              Trois chiffres officiels. Une fenêtre de décision qui se referme — pour vous comme
              pour vos clients qui devront tous facturer électroniquement à partir de septembre
              2026.
            </p>
          </div>

          <HairlineGrid cols={3}>
            <Stat
              ix="— 01"
              numberHtml={`<em>91</em><span class="text-[0.5em] align-super text-ink-mute">%</span>`}
              label="des experts-comptables voient l'IA comme une opportunité pour leur métier."
              source="France Num · 2025"
            />
            <Stat
              ix="— 02"
              numberHtml={`<em>88</em><span class="text-[0.5em] align-super text-ink-mute">%</span>`}
              label="sont freinés par un manque de méthode interne pour structurer le déploiement."
              source="Bpifrance · Le Lab"
            />
            <Stat
              ix="— 03"
              numberHtml={`Sept. <em>26</em>`}
              label="facture électronique obligatoire pour toutes les PME — zéro cabinet pleinement prêt."
              source="DGFiP"
            />
          </HairlineGrid>
        </div>
      </section>

      {/* ─── METHODE (DARK) ─── */}
      <section
        id="methode"
        className="dark-section py-[130px] pb-[140px]"
        style={{
          background: "#16140F",
          color: "#F4EFE6",
          ["--color-ink" as string]: "#F4EFE6",
          ["--color-ink-soft" as string]: "rgba(244, 239, 230, 0.62)",
          ["--color-ink-mute" as string]: "rgba(244, 239, 230, 0.42)",
          ["--color-ink-line" as string]: "rgba(244, 239, 230, 0.16)",
          ["--color-ink-line-soft" as string]: "rgba(244, 239, 230, 0.08)",
        }}
      >
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-md:gap-7 items-end mb-16">
            <div>
              <Eyebrow numero="003" className="[&_.text-accent-deep]:text-accent">
                Notre méthode
              </Eyebrow>
              <DisplayHeading
                as="h2"
                className="mt-4"
                style={{ color: "#F4EFE6" }}
                html={`Trois phases.<br />Un seul <em>interlocuteur</em>.`}
              />
            </div>
            <p className="text-[17px] m-0 max-w-[48ch]" style={{ color: "rgba(244,239,230,0.62)" }}>
              90 jours pour passer d&apos;une initiative individuelle à une fonction IA structurée
              dans tout le cabinet. Un seul forfait, un seul chef de projet, une transmission
              progressive.
            </p>
          </div>

          <div className="flex flex-col border-t border-ink-line">
            <PhaseRow
              dark
              numero="PHASE 01"
              phaseLabel="Semaine 1 → 2"
              titleHtml={`Audit<br /><em>cabinet</em>`}
              description="Cartographie des process, des outils déjà en place, des points de friction RGPD et secret professionnel. Nous comprenons votre cabinet avant de proposer quoi que ce soit."
              livrables={[
                "Rapport diagnostic 360°",
                "Matrice opportunités / risques",
                "Score de maturité IA cabinet",
              ]}
            />
            <PhaseRow
              dark
              numero="PHASE 02"
              phaseLabel="Semaine 3 → 4"
              titleHtml={`Plan<br /><em>IA</em>`}
              description="Roadmap 90 jours priorisée par impact, sélection d'outils éprouvés sur votre stack, gouvernance et cadre opérationnel conformes à l'AI Act."
              livrables={[
                "Roadmap 90 jours priorisée",
                "Sélection d'outils et intégrations",
                "Cadre RGPD opérationnel",
              ]}
            />
            <PhaseRow
              dark
              numero="PHASE 03"
              phaseLabel="Mois 2 → 3"
              titleHtml={`Formation<br /><em>& transmission</em>`}
              description="Acculturation de l'équipe, bibliothèque de prompts métier prêts à l'emploi, coach IA dédié pendant 3 mois. À la fin, vous opérez seuls — c'est la promesse."
              livrables={[
                "Formation Qualiopi équipe",
                "Bibliothèque de prompts métier",
                "Coach IA dédié — 90 jours",
              ]}
              isLast
            />
          </div>
        </div>
      </section>

      {/* ─── BIG QUOTE ─── */}
      <BigQuote
        flourish="NOMEN"
        cite="Mythologie nordique · gardien du puits de la connaissance"
      >
        Mimir — la sagesse, la vision, la stratégie.
      </BigQuote>

      {/* ─── TESTIMONIALS ─── */}
      <section id="voix" className="py-[110px] border-t border-ink-line">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-md:gap-7 items-end mb-16">
            <div>
              <Eyebrow numero="005">La voix des associés</Eyebrow>
              <DisplayHeading
                as="h2"
                className="mt-4"
                html={`Issu de <em>7 entretiens</em><br />avec des dirigeants<br />de cabinets.`}
              />
            </div>
            <p className="text-[17px] text-ink-soft m-0 max-w-[48ch]">
              Les bruits du terrain — pourquoi Mimir a été construit comme un accompagnement
              humain, pas comme un énième outil de plus à déployer.
            </p>
          </div>

          <HairlineGrid cols={3}>
            <Testi
              quote="On manque surtout d'accompagnement, de coaching. Les outils existent déjà."
              who="Nathalie F."
              what="Associée · 10 collab. · Paris"
            />
            <Testi
              quote="Ce qui m'empêche de déployer l'IA, c'est la connaissance. Il me manque la veille, la méthode."
              who="Jacob L."
              what="Président · 15 collab."
            />
            <Testi
              quote="Le comptable classique est voué à disparaître. L'IA est déjà bonne — il faut former, vite."
              who="Tino M."
              what="Grand groupe · 2 000 collab."
            />
          </HairlineGrid>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="tarifs" className="py-[130px] border-t border-ink-line">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-md:gap-7 items-end mb-16">
            <div>
              <Eyebrow numero="006">Tarifs</Eyebrow>
              <DisplayHeading
                as="h2"
                className="mt-4"
                html={`Trois forfaits.<br />Aucun <em>coût caché</em>.`}
              />
            </div>
            <p className="text-[17px] text-ink-soft m-0 max-w-[48ch]">
              Tous les forfaits sont éligibles au financement OPCO Atlas — jusqu&apos;à 6 500 € par
              collaborateur et par an. Nous gérons le dossier pour vous.
            </p>
          </div>

          <HairlineGrid cols={3}>
            <PriceColumn
              tag="— Forfait 01"
              nameHtml="Diagnostic"
              amount="2 500 €"
              unit="HT · forfait unique"
              description="Pour les cabinets qui veulent savoir où ils en sont avant d'engager une transformation."
              features={[
                "Audit 360° des process actuels",
                "Score de maturité IA",
                "Restitution stratégique 2 h",
                "Rapport livré sous 15 jours",
              ]}
              ctaHref="/diagnostic"
            />
            <PriceColumn
              tag="— Forfait 02"
              nameHtml="<em>Déploiement</em>"
              amount="6 500 €"
              unit="HT · 90 jours"
              description="L'offre complète Audit + Plan IA + Formation. Le forfait le plus choisi."
              features={[
                "Tout le forfait Diagnostic",
                "Plan IA personnalisé 90 jours",
                "Formation Qualiopi équipe",
                "Bibliothèque prompts métier",
                "Coach IA dédié 90 jours",
              ]}
              ctaHref="/diagnostic"
              featured
              featuredBadge="Finançable 100 %"
            />
            <PriceColumn
              tag="— Forfait 03"
              nameHtml="Transformation"
              amount="14 900 €"
              unit="HT · 6 mois"
              description="Pour les cabinets qui veulent un partenaire stratégique au long cours."
              features={[
                "Tout le forfait Déploiement",
                "Accompagnement 6 mois",
                "Comité de pilotage mensuel",
                "Veille IA personnalisée",
                "Onboarding nouveaux entrants",
              ]}
              ctaHref="/diagnostic"
            />
          </HairlineGrid>
        </div>
      </section>

      {/* ─── FINAL CTA (DARK) ─── */}
      <section
        id="diag"
        className="dark-section py-[130px] text-center"
        style={{
          background: "#16140F",
          color: "#F4EFE6",
          ["--color-ink" as string]: "#F4EFE6",
          ["--color-ink-soft" as string]: "rgba(244, 239, 230, 0.68)",
          ["--color-ink-mute" as string]: "rgba(244, 239, 230, 0.42)",
          ["--color-ink-line" as string]: "rgba(244, 239, 230, 0.16)",
        }}
      >
        <div className="shell">
          <Eyebrow
            centered
            numero="007"
            className="[&_.text-accent-deep]:text-accent justify-center flex"
          >
            <span style={{ color: "rgba(244,239,230,0.55)" }}>Première étape · gratuit</span>
          </Eyebrow>
          <h2
            className="font-display font-normal text-[clamp(40px,5.4vw,76px)] tracking-[-0.02em] leading-none mt-[18px] mx-auto max-w-[18ch]"
            style={{ color: "#F4EFE6", textWrap: "balance" as const }}
          >
            Découvrez votre{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              score IA cabinet
            </em>
            <br />
            en 2 minutes.
          </h2>
          <p
            className="mt-7 mx-auto max-w-[56ch] text-[17px] leading-[1.55]"
            style={{ color: "rgba(244,239,230,0.7)" }}
          >
            Un questionnaire court, un rapport personnalisé, un plan d&apos;action concret. Sans
            engagement, sans carte bancaire — juste votre email professionnel.
          </p>
          <div className="mt-11 flex items-center justify-center gap-7 flex-wrap">
            <LinkCTA href="/diagnostic" variant="primary" invert>
              Démarrer mon diagnostic
            </LinkCTA>
            <LinkCTA href="#tarifs" variant="ghost" invert>
              Voir les tarifs
            </LinkCTA>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ─── Local cell components (only used here, kept local to avoid file bloat) ───

function Stat({
  ix,
  numberHtml,
  label,
  source,
}: {
  ix: string;
  numberHtml: string;
  label: string;
  source: string;
}) {
  return (
    <div className="px-8 max-md:px-0 pt-9 pb-10 max-md:py-7 flex flex-col gap-4">
      <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-accent-deep">
        {ix}
      </div>
      <div
        className="font-display text-[88px] leading-none tracking-[-0.025em] display"
        dangerouslySetInnerHTML={{ __html: numberHtml }}
      />
      <div className="text-[15.5px] text-ink-soft max-w-[32ch] leading-[1.45]">{label}</div>
      <div className="mt-auto pt-4 font-mono text-[10.5px] tracking-[0.12em] uppercase text-ink-mute border-t border-dashed border-ink-line">
        {source}
      </div>
    </div>
  );
}

function Testi({
  quote,
  who,
  what,
}: {
  quote: string;
  who: string;
  what: string;
}) {
  return (
    <article className="px-7 max-md:px-0 pt-9 pb-8 max-md:py-7 flex flex-col gap-6">
      <span className="font-display text-[64px] italic leading-[0.6] text-accent-deep -mb-4">
        &ldquo;
      </span>
      <blockquote
        className="m-0 font-display text-[22px] leading-[1.3] text-ink tracking-[-0.005em]"
        style={{ textWrap: "balance" }}
      >
        {quote}
      </blockquote>
      <div className="mt-auto pt-[18px] border-t border-dashed border-ink-line flex flex-col gap-1">
        <span className="font-semibold text-[14px]">{who}</span>
        <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-mute">
          {what}
        </span>
      </div>
    </article>
  );
}
