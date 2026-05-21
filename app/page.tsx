import { PortalBg } from "@/components/PortalBg";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Kicker } from "@/components/Kicker";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionFooter } from "@/components/SectionFooter";
import { Button } from "@/components/Button";
import { Pill } from "@/components/Pill";
import { KpiCell } from "@/components/KpiCell";
import { PhaseCard } from "@/components/PhaseCard";
import { PriceCard } from "@/components/PriceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WellVisual } from "@/components/WellVisual";

export default function Home() {
  return (
    <>
      <PortalBg />
      <Topbar />

      {/* ─── 01 · HERO ─── */}
      <Section id="top" hero>
        <Kicker pulse index="01">Facture électronique · sept. 2026</Kicker>

        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-tagline">
              <span>Audit</span>
              <span className="sep" />
              <span>Implémentation</span>
              <span className="sep" />
              <span>Formation</span>
            </div>

            <h1
              className="hero-h1"
              dangerouslySetInnerHTML={{
                __html: "L'IA des cabinets, <em>à la source</em>.",
              }}
            />

            <p className="hero-lead">
              MIMIR accompagne les cabinets d&apos;expertise comptable dans leur transformation IA.{" "}
              <strong>Audit, plan d&apos;action, formation </strong> packagés en 90 jours,
              finançables OPCO jusqu&apos;à 100 %.
            </p>

            <div className="hero-pills">
              <Pill>Audit</Pill>
              <Pill>Implémentation</Pill>
              <Pill>Formation</Pill>
            </div>

            <div className="hero-cta">
              <Button href="/diagnostic" variant="primary">
                Démarrer mon diagnostic
              </Button>
              <Button href="#methode" variant="ghost" arrow={false}>
                Voir la méthode
              </Button>
            </div>

            <div className="hero-meta">
              <span className="ok">●</span>
              <span>2 minutes · sans engagement · sans CB</span>
            </div>
          </div>

          <WellVisual variant="hero" />
        </div>

        <SectionFooter index="01" label="Hero · ᛗᛁᛗᛁᚱ" />
      </Section>

      {/* ─── 02 · URGENCE ─── */}
      <Section id="urgence">
        <Kicker index="02">L&apos;urgence est documentée</Kicker>
        <SectionTitle
          html="Le marché ne demande qu'à être <em>servi</em>."
        />
        <p className="section-sub">
          Trois chiffres officiels. Une fenêtre de décision qui se referme pour vous comme pour
          vos clients qui devront tous facturer électroniquement à partir de septembre 2026.
        </p>

        <div className="stats-grid">
          <KpiCell
            ix="— 01 · Opportunité"
            valueHtml={`91<span class="unit">%</span>`}
            label="des experts-comptables voient l'IA comme une opportunité pour leur métier."
            source="France Num · 2025"
          />
          <KpiCell
            ix="— 02 · Frein"
            valueHtml={`88<span class="unit">%</span>`}
            label="sont freinés par un manque de méthode interne pour structurer le déploiement."
            source="Bpifrance · Le Lab"
          />
          <KpiCell
            ix="— 03 · Échéance"
            valueHtml={`09/26<span class="unit">— FE</span>`}
            label="facture électronique obligatoire pour toutes les PME zéro cabinet pleinement prêt."
            source="DGFiP"
          />
        </div>

        <SectionFooter index="02" label="3 chiffres" />
      </Section>

      {/* ─── 03 · MÉTHODE ─── */}
      <Section id="methode">
        <Kicker index="03">Notre méthode</Kicker>
        <SectionTitle html="Trois phases. Un seul <em>interlocuteur</em>." />
        <p className="section-sub">
          90 jours pour passer d&apos;une initiative individuelle à une fonction IA structurée dans
          tout le cabinet. Un seul forfait, un seul chef de projet, une transmission progressive.
        </p>

        <div className="phase-grid">
          <PhaseCard
            rune="ᚨ"
            numLabel="Phase 01 · Audit"
            titleHtml={`Audit <em>360°</em>`}
            when="Semaines 1 à 2"
            description="Cartographie des process, des outils déjà en place, des points de friction RGPD et secret professionnel. Nous comprenons votre cabinet avant de proposer quoi que ce soit."
            livrables={[
              "Rapport diagnostic 360°",
              "Matrice opportunités / risques",
              "Score de maturité IA",
            ]}
          />
          <PhaseCard
            rune="ᛈ"
            numLabel="Phase 02 · Plan IA"
            titleHtml={`Plan d'<em>action</em>`}
            when="Semaines 3 à 4"
            description="Roadmap 90 jours priorisée par impact, sélection d'outils éprouvés sur votre stack, gouvernance et cadre opérationnel conformes à l'AI Act."
            livrables={[
              "Roadmap 90 jours priorisée",
              "Sélection d'outils & intégrations",
              "Cadre RGPD opérationnel",
            ]}
          />
          <PhaseCard
            rune="ᚠ"
            numLabel="Phase 03 · Formation"
            titleHtml={`Formation <em>& transmission</em>`}
            when="Mois 2 à 3"
            description="Acculturation de l'équipe, bibliothèque de prompts métier prêts à l'emploi, coach IA dédié pendant 3 mois. À la fin, vous opérez seuls c'est la promesse."
            livrables={[
              "Formation Qualiopi équipe",
              "Bibliothèque prompts métier",
              "Coach IA dédié 90 jours",
            ]}
          />
        </div>

        <SectionFooter index="03" label="3 phases · 90 jours" />
      </Section>

      {/* ─── 04 · GENÈSE ─── */}
      <Section id="genese">
        <Kicker index="04">Genèse &amp; symbolique</Kicker>

        <div className="genese">
          <div className="genese-story">
            <SectionTitle
              html="Le puits<br />de la <em>connaissance</em>."
              style={{ fontSize: "clamp(36px,4.4vw,52px)" }}
            />

            <div className="brand-block">
              <span className="label">Origine 01 · Nordique</span>
              <div className="word">Mímir</div>
              <p className="definition">
                Dans la mythologie nordique,{" "}
                <em>Mímir</em>{" "}
                est le dieu de la connaissance, gardien du puits sous les racines
                d&apos;Yggdrasil dont l&apos;eau confère sagesse et clairvoyance.{" "}
                <em>Odin lui-même sacrifia un œil pour boire à sa source.</em>
              </p>
            </div>

            <div className="brand-block">
              <span className="label">Origine 02 · Chinois</span>
              <div className="word">
                <span className="chinese">秘密</span>
                <span className="pinyin">mìmì</span>
              </div>
              <p className="definition">
                En chinois,{" "}
                <em>秘密</em>{" "}
                signifie{" "}
                <em>secret</em>. Le mot évoque le savoir caché, la connaissance qui se
                transmet à ceux qui savent regarder.
              </p>
            </div>

            <div className="brand-block">
              <span className="label">Symbole</span>
              <p className="definition" style={{ fontSize: "14.5px" }}>
                Notre logo représente un <em>puits de la connaissance vu en plongée</em>. Les arcs
                concentriques figurent les anneaux d&apos;eau, le trait cyan néon est le rai de
                lumière qui pénètre la profondeur, le point central est la source.
              </p>
            </div>
          </div>

          <WellVisual variant="genese" maxWidth={480} />
        </div>

        <SectionFooter index="04" label="Mímir · 秘密" />
      </Section>

      {/* ─── 05 · TÉMOIGNAGES (light) ─── */}
      <Section id="voix" variant="light">
        <Kicker index="05">La voix des associés</Kicker>
        <SectionTitle
          html="Issu de <em>7 entretiens</em> avec des dirigeants de cabinets."
        />
        <p className="section-sub">
          Les bruits du terrain pourquoi MIMIR a été construit comme un accompagnement humain, pas
          comme un énième outil à déployer.
        </p>

        <div className="testi-grid">
          <TestimonialCard
            quote="On manque surtout d'accompagnement, de coaching. Les outils existent déjà."
            who="Nathalie F."
            what="Associée · 10 collab. · Paris"
          />
          <TestimonialCard
            quote="Ce qui m'empêche de déployer l'IA, c'est la connaissance. Il me manque la veille, la méthode."
            who="Jacob L."
            what="Président · 15 collab."
          />
          <TestimonialCard
            quote="Le comptable classique est voué à disparaître. L'IA est déjà bonne — il faut former, vite."
            who="Tino M."
            what="Grand groupe · 2 000 collab."
          />
        </div>

        <SectionFooter index="05" label="7 entretiens" />
      </Section>

      {/* ─── 06 · OFFRES ─── */}
      <Section id="tarifs">
        <Kicker index="06">Nos offres</Kicker>
        <SectionTitle html="Trois forfaits. Un seul <em>interlocuteur</em>." />
        <p className="section-sub">
          Trois niveaux d&apos;accompagnement, du diagnostic seul au partenariat sur six mois.
          Tous nos forfaits sont éligibles au financement OPCO nous gérons le dossier pour vous.
        </p>

        <div className="price-grid">
          <PriceCard
            tag="Forfait 01"
            name="Diagnostic"
            description="Pour les cabinets qui veulent savoir où ils en sont avant d'engager une transformation."
            features={[
              "Audit 360° des process actuels",
              "Score de maturité IA",
              "Restitution stratégique 2 h",
              "Rapport livré sous 15 jours",
            ]}
            ctaHref="/diagnostic"
            ctaLabel="Faire mon diagnostic gratuit"
          />
          <PriceCard
            tag="Forfait 02"
            name="Déploiement"
            description="L'offre complète Audit + Plan IA + Formation. Le forfait le plus choisi."
            features={[
              "Tout le forfait Diagnostic",
              "Plan IA personnalisé 90 jours",
              "Formation Qualiopi équipe",
              "Bibliothèque prompts métier",
              "Coach IA dédié 90 jours",
            ]}
            ctaHref="/diagnostic"
            ctaLabel="Démarrer mon diagnostic"
            featured
            featuredBadge="Recommandé"
          />
          <PriceCard
            tag="Forfait 03"
            name="Transformation"
            description="Pour les cabinets qui veulent un partenaire stratégique au long cours."
            features={[
              "Tout le forfait Déploiement",
              "Accompagnement 6 mois",
              "Comité de pilotage mensuel",
              "Veille IA personnalisée",
              "Onboarding nouveaux entrants",
            ]}
            ctaHref="/diagnostic"
            ctaLabel="Faire mon diagnostic gratuit"
          />
        </div>

        <SectionFooter index="06" label="3 offres · OPCO" />
      </Section>

      {/* ─── 07 · FINAL CTA (saphir-nuit) ─── */}
      <section id="diag" className="final-section">
        <div className="final-grid">
          <div>
            <Kicker pulse index="07">Première étape · gratuit</Kicker>
            <h2
              dangerouslySetInnerHTML={{
                __html:
                  "Découvrez votre <em>score IA cabinet</em><br />en 2 minutes.",
              }}
            />
            <p className="lead">
              Un questionnaire court, un rapport personnalisé, un plan d&apos;action concret. Sans
              engagement, sans carte bancaire juste votre email professionnel.
            </p>
            <div className="cta-row">
              <Button href="/diagnostic" variant="cyan">
                Démarrer mon diagnostic
              </Button>
              <Button href="#tarifs" variant="ghost" arrow={false}>
                Voir les offres
              </Button>
            </div>
          </div>

          <aside
            style={{
              background: "rgba(12, 15, 26, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "14px",
              padding: "32px 32px 28px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "var(--cyan-neon)",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--cyan-neon)",
                }}
              />
              Ce que vous obtenez
            </div>

            <Deliverable
              num="01"
              title="Score IA cabinet"
              detail="Une note sur 100, calibrée sur la taille et la maturité de votre cabinet."
            />
            <Deliverable
              num="02"
              title="Plan d'action 90 jours"
              detail="Trois chantiers prioritaires personnalisés sur vos réponses."
            />
            <Deliverable
              num="03"
              title="Restitution dédiée"
              detail="45 minutes en visio avec un expert, sans engagement."
              last
            />

            <div
              style={{
                marginTop: "8px",
                paddingTop: "20px",
                borderTop: "1px dashed rgba(255, 255, 255, 0.14)",
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                justifyContent: "space-between",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10.5px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.55)",
              }}
            >
              <span>10 questions</span>
              <span>· 2 minutes</span>
              <span style={{ color: "var(--cyan-neon)" }}>· 100 % gratuit</span>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Deliverable({
  num,
  title,
  detail,
  last,
}: {
  num: string;
  title: string;
  detail: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr",
        gap: "16px",
        padding: "14px 0",
        borderBottom: last ? "none" : "1px dashed rgba(255, 255, 255, 0.10)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "26px",
          fontWeight: 700,
          color: "var(--cyan-neon)",
          letterSpacing: "-0.6px",
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "17px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.3px",
            lineHeight: 1.2,
            marginBottom: "4px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13.5px",
            color: "rgba(255, 255, 255, 0.62)",
            lineHeight: 1.5,
          }}
        >
          {detail}
        </div>
      </div>
    </div>
  );
}
