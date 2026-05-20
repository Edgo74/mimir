"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/Brand";
import { ProgressBar } from "@/components/diagnostic/ProgressBar";
import { ChoiceButton } from "@/components/diagnostic/ChoiceButton";
import { EmailGate } from "@/components/diagnostic/EmailGate";
import { QUESTIONS } from "@/lib/questions";
import { Answers } from "@/lib/scoring";

export default function DiagnosticPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const total = QUESTIONS.length;
  const isEmailGate = index === total;
  const q = QUESTIONS[index];

  function next() {
    setIndex((i) => Math.min(total, i + 1));
  }
  function back() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function selectSingle(choiceId: string) {
    setAnswers((a) => ({ ...a, [q.id]: choiceId }));
    window.setTimeout(() => setIndex((i) => Math.min(total, i + 1)), 450);
  }
  function toggleMulti(choiceId: string) {
    setAnswers((a) => {
      const cur = (a[q.id] as string[] | undefined) ?? [];
      const updated = cur.includes(choiceId)
        ? cur.filter((c) => c !== choiceId)
        : [...cur, choiceId];
      return { ...a, [q.id]: updated };
    });
  }
  function onEmailSubmit(data: { email: string; cabinet: string }) {
    const payload = { ...answers, _email: data.email, _cabinet: data.cabinet };
    if (typeof window !== "undefined") {
      localStorage.setItem("mimir-diag", JSON.stringify(payload));
    }
    router.push("/resultats");
  }

  const multiCount = q && q.type === "multi" ? ((answers[q.id] as string[]) ?? []).length : 0;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header
        className="sticky top-0 z-40 border-b border-ink-line-soft backdrop-blur-[18px] backdrop-saturate-150"
        style={{ background: "color-mix(in oklab, var(--paper) 78%, transparent)" }}
      >
        <div
          className="flex items-center justify-between mx-auto"
          style={{ maxWidth: "var(--shell)", padding: "22px 36px" }}
        >
          <Brand />
          <a
            href="/"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-mute hover:text-ink transition-colors"
          >
            Quitter
          </a>
        </div>
        <div
          className="mx-auto pb-5"
          style={{ maxWidth: "var(--shell)", padding: "0 36px 18px" }}
        >
          <ProgressBar current={isEmailGate ? total : index} total={total} />
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-9 py-14 max-md:py-10">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {isEmailGate ? (
              <motion.div key="email" exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.25 }}>
                <EmailGate answers={answers} onSubmit={onEmailSubmit} />
              </motion.div>
            ) : (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-10">
                  <h2 className="font-display font-normal text-[clamp(34px,4.4vw,56px)] tracking-[-0.015em] leading-[1.05] text-ink display">
                    {q.title}
                  </h2>
                  {q.subtitle && (
                    <p className="mt-4 text-[17px] text-ink-soft leading-[1.5] max-w-[52ch]">
                      {q.subtitle}
                    </p>
                  )}
                  {q.type === "multi" && (
                    <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-accent-deep">
                      {multiCount === 0
                        ? "Sélectionnez au moins une réponse"
                        : `${String(multiCount).padStart(2, "0")} réponse${multiCount > 1 ? "s" : ""} sélectionnée${multiCount > 1 ? "s" : ""}`}
                    </p>
                  )}
                </div>

                {q.type === "single" && (
                  <div className="flex flex-col gap-2.5">
                    {q.choices.map((c, i) => (
                      <ChoiceButton
                        key={c.id}
                        index={i}
                        selected={answers[q.id] === c.id}
                        onClick={() => selectSingle(c.id)}
                      >
                        {c.label}
                      </ChoiceButton>
                    ))}
                  </div>
                )}

                {q.type === "multi" && (
                  <div className="flex flex-col gap-2.5">
                    {q.choices.map((c, i) => {
                      const sel = ((answers[q.id] as string[]) ?? []).includes(c.id);
                      return (
                        <ChoiceButton
                          key={c.id}
                          index={i}
                          multi
                          selected={sel}
                          onClick={() => toggleMulti(c.id)}
                        >
                          {c.label}
                        </ChoiceButton>
                      );
                    })}
                  </div>
                )}

                {q.type === "scale" && (
                  <div className="grid grid-cols-5 gap-2.5">
                    {q.choices.map((c, i) => (
                      <ChoiceButton
                        key={c.id}
                        index={i}
                        large
                        emoji={c.emoji}
                        selected={answers[q.id] === c.id}
                        onClick={() => selectSingle(c.id)}
                      >
                        {c.label}
                      </ChoiceButton>
                    ))}
                  </div>
                )}

                <div className="mt-12 flex items-center justify-between gap-4 pt-6 border-t border-ink-line">
                  <button
                    type="button"
                    onClick={back}
                    disabled={index === 0}
                    className="group inline-flex items-baseline gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-mute hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <span className="inline-block transition-transform duration-200 group-hover:-translate-x-[3px]">
                      ←
                    </span>
                    Précédent
                  </button>

                  {q.type === "multi" && (
                    <button
                      type="button"
                      onClick={next}
                      disabled={multiCount === 0}
                      className="group inline-flex items-center gap-2 font-medium text-[16px] bg-ink text-paper px-[22px] py-[14px] transition-colors duration-150 hover:bg-accent-deep disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continuer
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                        →
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
