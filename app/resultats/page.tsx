"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brand } from "@/components/Brand";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { DisplayHeading } from "@/components/DisplayHeading";
import { LinkCTA } from "@/components/LinkCTA";
import { HairlineGrid } from "@/components/HairlineGrid";
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
      <div className="min-h-screen flex flex-col">
        <header
          className="sticky top-0 z-40 border-b border-ink-line-soft backdrop-blur-[18px]"
          style={{ background: "color-mix(in oklab, var(--paper) 78%, transparent)" }}
        >
          <div
            className="flex items-center justify-between mx-auto"
            style={{ maxWidth: "var(--shell)", padding: "22px 36px" }}
          >
            <Brand />
            <Link
              href="/"
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-mute hover:text-ink"
            >
              Accueil
            </Link>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center px-9 py-20">
          <div className="text-center max-w-md">
            <Eyebrow numero="—" centered>Aucun diagnostic</Eyebrow>
            <h1 className="font-display text-[clamp(34px,4.4vw,56px)] tracking-[-0.015em] leading-[1.05] text-ink mt-4 display">
              Pas encore de <em className="italic text-accent-deep">diagnostic</em>.
            </h1>
            <p className="mt-5 text-[17px] text-ink-soft leading-[1.55]">
              Lancez le diagnostic en 2 minutes pour découvrir votre score IA cabinet.
            </p>
            <div className="mt-9 flex justify-center">
              <LinkCTA href="/diagnostic" variant="primary">
                Démarrer le diagnostic
              </LinkCTA>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const score = computeScore(data);
  const q = quartile(score);
  const recommendations = recos(data);
  const { hours, staff } = estimatedHoursSaved(data);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className="sticky top-0 z-40 border-b border-ink-line-soft backdrop-blur-[18px]"
        style={{ background: "color-mix(in oklab, var(--paper) 78%, transparent)" }}
      >
        <div
          className="flex items-center justify-between mx-auto"
          style={{ maxWidth: "var(--shell)", padding: "22px 36px" }}
        >
          <Brand />
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-mute hover:text-ink"
          >
            Accueil
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero résultats ─── */}
        <section className="pt-[80px] pb-[100px]">
          <div className="shell">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-20 max-md:gap-14 items-center">
              <div>
                <Eyebrow pulse numero="001">
                  Rapport généré · {data._cabinet || "votre cabinet"}
                </Eyebrow>
                <DisplayHeading
                  as="h1"
                  className="mt-[26px]"
                  html={`Votre <em>score IA</em><br />cabinet.`}
                />
                <p className="mt-9 text-[19px] leading-[1.5] text-ink-soft max-w-[52ch]">
                  Vous êtes dans le{" "}
                  <span className="text-ink font-medium">{q.label}</span> des cabinets d&apos;expertise
                  comptable de votre taille. Voici ce qu&apos;on vous recommande.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="mt-10 inline-flex items-start gap-4 border border-ink-line p-6 max-w-[480px]"
                  style={{ background: "color-mix(in oklab, var(--paper) 92%, var(--ink) 4%)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full bg-accent flex-none mt-2"
                    style={{ boxShadow: "0 0 0 4px var(--accent-soft)" }}
                  />
                  <div>
                    <div className="font-display text-[28px] leading-tight tracking-[-0.015em] text-ink">
                      ~{hours} <span className="text-[0.55em] text-ink-mute">h/mois</span>
                    </div>
                    <div className="mt-1.5 text-[14.5px] text-ink-soft leading-[1.45]">
                      économisées en moyenne sur {staff} collaborateur{staff > 1 ? "s" : ""}{" "}
                      équivalent temps plein.
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-center">
                <ScoreGauge score={score} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Plan d'action ─── */}
        <section className="py-[110px] border-t border-ink-line">
          <div className="shell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-md:gap-7 items-end mb-16">
              <div>
                <Eyebrow numero="002">Plan d&apos;action personnalisé</Eyebrow>
                <DisplayHeading
                  as="h2"
                  className="mt-4"
                  html={`Vos trois<br /><em>chantiers</em> prioritaires.`}
                />
              </div>
              <p className="text-[17px] text-ink-soft m-0 max-w-[48ch]">
                Priorisés selon vos réponses, vos outils actuels et la taille de votre cabinet. Un
                accompagnement Mimir peut traiter les trois en 90 jours.
              </p>
            </div>

            <HairlineGrid cols={3}>
              {recommendations.map((r, i) => (
                <RecoCard
                  key={r.title}
                  numero={String(i + 1).padStart(2, "0")}
                  tag={r.tag}
                  title={r.title}
                  desc={r.desc}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </HairlineGrid>
          </div>
        </section>

        {/* ─── Booking ─── */}
        <section
          className="dark-section py-[120px]"
          style={{
            background: "#16140F",
            color: "#F4EFE6",
            ["--color-ink" as string]: "#F4EFE6",
            ["--color-ink-soft" as string]: "rgba(244, 239, 230, 0.62)",
            ["--color-ink-mute" as string]: "rgba(244, 239, 230, 0.42)",
            ["--color-ink-line" as string]: "rgba(244, 239, 230, 0.16)",
          }}
        >
          <div className="shell">
            <div className="text-center max-w-[640px] mx-auto mb-14">
              <Eyebrow numero="003" pulse centered className="[&_.text-accent-deep]:text-accent">
                Prochaine étape · gratuit
              </Eyebrow>
              <h2
                className="font-display font-normal text-[clamp(40px,5vw,72px)] tracking-[-0.02em] leading-[1.02] mt-4"
                style={{ color: "#F4EFE6", textWrap: "balance" as const }}
              >
                Bookez votre restitution<br />
                avec un{" "}
                <em className="italic" style={{ color: "var(--accent)" }}>
                  expert
                </em>
                .
              </h2>
              <p
                className="mt-6 text-[17px] leading-[1.55]"
                style={{ color: "rgba(244,239,230,0.7)" }}
              >
                45 minutes en visio. On vous explique chaque chantier en détail, on chiffre votre
                ROI et on cadre les prochaines étapes. Sans engagement.
              </p>
            </div>

            <CalEmbed />
          </div>
        </section>

        <div className="py-10 text-center font-mono text-[11px] tracking-[0.12em] uppercase text-ink-mute">
          Un rapport détaillé a été envoyé à {data._email || "votre adresse"}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function RecoCard({
  numero,
  tag,
  title,
  desc,
  delay,
}: {
  numero: string;
  tag: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="px-8 max-md:px-0 pt-9 pb-10 max-md:py-7 flex flex-col gap-5"
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-accent-deep">
          — {tag}
        </span>
        <span className="font-display text-[44px] leading-none tracking-[-0.02em] text-ink-line">
          {numero}
        </span>
      </div>
      <h3 className="font-display text-[28px] tracking-[-0.015em] leading-[1.1] text-ink m-0">
        {title}
      </h3>
      <p className="text-[14.5px] text-ink-soft leading-[1.55] m-0 mt-1 pt-4 border-t border-dashed border-ink-line">
        {desc}
      </p>
    </motion.article>
  );
}
