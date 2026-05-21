"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { Button } from "@/components/Button";
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
    <>
      <div className="diag-shell">
        <header className="diag-header">
          <div className="diag-header-inner">
            <Link
              href="/"
              aria-label="MIMIR · accueil"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <LogoMark size={22} />
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.2px",
                }}
              >
                MIMIR
              </span>
            </Link>
            <Link href="/" className="diag-quit">
              Quitter
            </Link>
          </div>
          <div className="diag-header-bar">
            <ProgressBar current={isEmailGate ? total : index} total={total} />
          </div>
        </header>

        <main className="diag-main">
          <div style={{ width: "100%", maxWidth: "720px" }}>
            <AnimatePresence mode="wait">
              {isEmailGate ? (
                <motion.div
                  key="email"
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25 }}
                >
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
                  <div style={{ marginBottom: "40px" }}>
                    <h2 className="diag-question">{q.title}</h2>
                    {q.subtitle && <p className="diag-sub">{q.subtitle}</p>}
                    {q.type === "multi" && (
                      <p className="diag-multi-hint">
                        {multiCount === 0
                          ? "Sélectionnez au moins une réponse"
                          : `${String(multiCount).padStart(2, "0")} réponse${multiCount > 1 ? "s" : ""} sélectionnée${multiCount > 1 ? "s" : ""}`}
                      </p>
                    )}
                  </div>

                  {q.type === "single" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
                    <>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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

                      {/* Free-text precision when "Autre" is selected on any multi question */}
                      {q.choices.some((c) => c.id === "other") &&
                        ((answers[q.id] as string[]) ?? []).includes("other") && (
                          <OtherInput
                            questionId={q.id}
                            label={
                              q.id === "tools"
                                ? "Précisez quel(s) autre(s) outil(s)"
                                : q.id === "chronophage"
                                ? "Précisez quelle(s) autre(s) tâche(s)"
                                : "Précisez"
                            }
                            placeholder={
                              q.id === "tools"
                                ? "ex. ACD, Compta.com, Excel + macros…"
                                : q.id === "chronophage"
                                ? "ex. clôtures mensuelles, gestion des notes de frais…"
                                : "Précisez ici…"
                            }
                            value={(answers[`${q.id}_other`] as string) ?? ""}
                            onChange={(v) =>
                              setAnswers((a) => ({ ...a, [`${q.id}_other`]: v }))
                            }
                          />
                        )}
                    </>
                  )}

                  {q.type === "scale" && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "12px",
                      }}
                    >
                      {q.choices.map((c, i) => (
                        <ChoiceButton
                          key={c.id}
                          index={i}
                          large
                          emoji={c.emoji}
                          description={c.description}
                          selected={answers[q.id] === c.id}
                          onClick={() => selectSingle(c.id)}
                        >
                          {c.label}
                        </ChoiceButton>
                      ))}
                    </div>
                  )}

                  <div
                    style={{
                      marginTop: "48px",
                      paddingTop: "24px",
                      borderTop: "1px solid var(--rule-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={back}
                      disabled={index === 0}
                      className="diag-back"
                    >
                      ← Précédent
                    </button>

                    {q.type === "multi" && (
                      <Button
                        variant="cyan"
                        onClick={next}
                        disabled={multiCount === 0}
                      >
                        Continuer
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}

function OtherInput({
  questionId,
  label,
  placeholder,
  value,
  onChange,
}: {
  questionId: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputId = `${questionId}-other`;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.25 }}
      style={{ marginTop: "12px", overflow: "hidden" }}
    >
      <label
        htmlFor={inputId}
        style={{
          display: "block",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "10.5px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--cyan-neon)",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "48px",
          padding: "0 16px",
          background: "rgba(46, 91, 168, 0.08)",
          border: "1px solid var(--rule-dark)",
          borderRadius: "8px",
          color: "#fff",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "15px",
          outline: "none",
          transition: "border-color 0.15s, background 0.15s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--cyan-neon)";
          e.currentTarget.style.background = "rgba(46, 91, 168, 0.14)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--rule-dark)";
          e.currentTarget.style.background = "rgba(46, 91, 168, 0.08)";
        }}
      />
    </motion.div>
  );
}
