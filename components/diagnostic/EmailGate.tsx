"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Answers } from "@/lib/scoring";
import { Kicker } from "@/components/Kicker";
import { Button } from "@/components/Button";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/REPLACE_ME";

export function EmailGate({
  answers,
  onSubmit,
}: {
  answers: Answers;
  onSubmit: (data: { email: string; cabinet: string }) => void;
}) {
  const [email, setEmail] = useState("");
  const [cabinet, setCabinet] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handle(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      try {
        await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ email, cabinet, ...answers }),
        });
      } catch {
        /* swallow during demo */
      }
      await new Promise((r) => setTimeout(r, 1200));
      onSubmit({ email, cabinet });
    } catch {
      setError("Une erreur est survenue. Réessayez.");
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}
    >
      <Kicker pulse index="08">Dernière étape</Kicker>
      <h2
        className="section-title"
        style={{ marginTop: "14px", fontSize: "clamp(40px, 5vw, 64px)" }}
        dangerouslySetInnerHTML={{ __html: "Votre rapport est <em>prêt</em>." }}
      />
      <p className="section-sub" style={{ marginBottom: "40px" }}>
        Indiquez votre email professionnel pour découvrir votre score IA cabinet et recevoir votre
        plan d&apos;action personnalisé.
      </p>

      <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Field
          id="cabinet"
          label="Nom du cabinet"
          value={cabinet}
          onChange={setCabinet}
          placeholder="Cabinet Dupont & Associés"
        />
        <Field
          id="email"
          label="Email professionnel"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="prenom.nom@cabinet.fr"
        />

        {error && (
          <p style={{ color: "#ff6b6b", fontFamily: "var(--font-inter)", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <Button variant="cyan" block type="submit" disabled={loading} arrow={!loading}>
          {loading ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg
                style={{ animation: "spin 1s linear infinite" }}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Analyse de votre cabinet…
            </span>
          ) : (
            "Découvrir mon score"
          )}
        </Button>

        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10.5px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-on-dark-faint)",
            paddingTop: "8px",
            margin: 0,
          }}
        >
          Vos données restent chez nous · Aucun spam · Conforme RGPD
        </p>
      </form>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </motion.div>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
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
        id={id}
        type={type}
        required
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
    </div>
  );
}
