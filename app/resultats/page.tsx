"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Kicker } from "@/components/Kicker";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionFooter } from "@/components/SectionFooter";
import { Button } from "@/components/Button";
import { ScoreGauge } from "@/components/resultats/ScoreGauge";
import { CalEmbed } from "@/components/resultats/CalEmbed";
import { computeScore, quartile, recos, estimatedHoursSaved, Answers } from "@/lib/scoring";

type StoredPayload = Answers & { _email?: string; _cabinet?: string };

export default function ResultatsPage() {
  const [data, setData] = useState<StoredPayload | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("mimir-diag");
    if (raw) {
      try {
        setData(JSON.parse(raw));
      } catch {
        /* ignore */
      }
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  if (!data) {
    return (
      <>
        <Topbar />
        <Section hero>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
            <Kicker>Aucun diagnostic</Kicker>
            <SectionTitle html="Pas encore de <em>diagnostic</em>." />
            <p className="section-sub" style={{ margin: "0 auto 32px" }}>
              Lancez le diagnostic en 2 minutes pour découvrir votre score IA cabinet.
            </p>
            <Button href="/diagnostic" variant="cyan">
              Démarrer le diagnostic
            </Button>
          </div>
        </Section>
        <Footer />
      </>
    );
  }

  const score = computeScore(data);
  const q = quartile(score);
  const recommendations = recos(data);
  const { hours, staff } = estimatedHoursSaved(data);

  return (
    <>
      <Topbar />

      {/* ─── Hero résultats ─── */}
      <Section hero id="top">
        <Kicker pulse index="01">Rapport généré · {data._cabinet || "votre cabinet"}</Kicker>

        <div className="res-hero">
          <div>
            <SectionTitle
              as="h1"
              html="Votre <em>score IA</em> cabinet."
              className="hero-h1"
              style={{ fontSize: "clamp(48px, 6.4vw, 88px)" }}
            />
            <p
              className="hero-lead"
              style={{ marginTop: "28px" }}
            >
              Vous êtes dans le{" "}
              <strong>{q.label}</strong> des cabinets d&apos;expertise comptable de votre taille.
              Voici ce qu&apos;on vous recommande.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="res-roi"
            >
              <span className="res-roi-icon" aria-hidden />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "10.5px",
                    fontWeight: 600,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    color: "var(--cyan-neon)",
                    marginBottom: "6px",
                  }}
                >
                  Potentiel estimé
                </div>
                <div className="res-roi-value">
                  {hours}
                  <span className="small">h/mois</span>
                </div>
                <div className="res-roi-lbl">
                  économisées en moyenne sur {staff} collaborateur{staff > 1 ? "s" : ""} équivalent
                  temps plein.
                </div>
              </div>
            </motion.div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ScoreGauge score={score} />
          </div>
        </div>

        <SectionFooter index="01" label="Score · ᛗᛁᛗᛁᚱ" total="03" />
      </Section>

      {/* ─── Plan d'action ─── */}
      <Section id="plan">
        <Kicker index="02">Plan d&apos;action personnalisé</Kicker>
        <SectionTitle html="Vos trois <em>chantiers</em> prioritaires." />
        <p className="section-sub">
          Priorisés selon vos réponses, vos outils actuels et la taille de votre cabinet. Un
          accompagnement MIMIR peut traiter les trois en 90 jours.
        </p>

        <div className="res-recos">
          {recommendations.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="reco-card"
            >
              <div className="reco-head">
                <span className="reco-tag">— {r.tag}</span>
                <span className="reco-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="reco-title">{r.title}</h3>
              <p className="reco-desc">{r.desc}</p>
            </motion.article>
          ))}
        </div>

        <SectionFooter index="02" label="3 chantiers · 90 jours" total="03" />
      </Section>

      {/* ─── Booking ─── */}
      <section className="final-section">
        <div className="final-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 56px" }}>
            <div style={{ display: "inline-block" }}>
              <Kicker pulse index="03">Prochaine étape · gratuit</Kicker>
            </div>
            <h2
              style={{ marginTop: "8px" }}
              dangerouslySetInnerHTML={{
                __html: "Bookez votre restitution<br />avec un <em>expert</em>.",
              }}
            />
            <p className="lead" style={{ margin: "24px auto 0" }}>
              45 minutes en visio. On vous explique chaque chantier en détail, on chiffre votre ROI
              et on cadre les prochaines étapes. Sans engagement.
            </p>
          </div>

          <CalEmbed />
        </div>
        <div
          style={{
            marginTop: "48px",
            textAlign: "center",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.42)",
          }}
        >
          Rapport détaillé envoyé à{" "}
          <Link
            href="#"
            style={{ color: "var(--cyan-neon)", textDecoration: "none" }}
          >
            {data._email || "votre adresse"}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
