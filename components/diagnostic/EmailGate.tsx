"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Answers } from "@/lib/scoring";
import { Eyebrow } from "@/components/Eyebrow";

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
      className="w-full max-w-xl mx-auto"
    >
      <Eyebrow pulse numero="008" className="mb-6">
        Dernière étape
      </Eyebrow>
      <h2 className="font-display font-normal text-[clamp(40px,5vw,64px)] tracking-[-0.015em] leading-[1.02] text-ink display">
        Votre rapport est <em className="italic text-accent-deep">prêt</em>.
      </h2>
      <p className="mt-5 text-[17px] text-ink-soft leading-[1.55] max-w-[52ch]">
        Indiquez votre email professionnel pour découvrir votre score IA cabinet et recevoir votre
        plan d&apos;action personnalisé.
      </p>

      <form onSubmit={handle} className="mt-10 space-y-5">
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

        {error && <p className="text-sm text-red-700">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-2 font-medium text-[16px] bg-ink text-paper px-[22px] py-[14px] transition-colors duration-150 hover:bg-accent-deep disabled:opacity-50 disabled:cursor-wait"
        >
          {loading ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Analyse de votre cabinet…
            </>
          ) : (
            <>
              Découvrir mon score
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </>
          )}
        </button>

        <p className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-ink-mute pt-2">
          Vos données restent chez nous · Aucun spam · Conforme RGPD
        </p>
      </form>
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
        className="block font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-mute mb-2"
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
        className="w-full h-12 px-4 bg-transparent border border-ink-line text-ink placeholder:text-ink-mute focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
