"use client";

import { motion } from "framer-motion";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2.5"
           style={{
             fontFamily: "var(--font-jetbrains-mono), monospace",
             fontSize: "11px",
             letterSpacing: "0.18em",
             textTransform: "uppercase",
             color: "var(--text-on-dark-mute)",
             fontWeight: 600,
           }}>
        <span style={{ color: "var(--text-on-dark-muted)" }}>
          Question {String(Math.min(current + 1, total)).padStart(2, "0")}
          <span style={{ color: "var(--text-on-dark-faint)" }}> / {String(total).padStart(2, "0")}</span>
        </span>
        <span style={{ color: "var(--cyan-neon)" }}>{pct} %</span>
      </div>
      <div style={{ height: "1px", width: "100%", background: "var(--rule-dark)", position: "relative" }}>
        <motion.div
          style={{ position: "absolute", inset: "0 auto 0 0", background: "var(--cyan-neon)" }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      </div>
    </div>
  );
}
