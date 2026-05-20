"use client";

import { motion } from "framer-motion";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-ink-mute mb-2.5">
        <span>
          Question {String(Math.min(current + 1, total)).padStart(2, "0")}
          <span className="text-ink-mute"> / {String(total).padStart(2, "0")}</span>
        </span>
        <span>{pct} %</span>
      </div>
      <div className="h-px w-full bg-ink-line relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-accent-deep"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      </div>
    </div>
  );
}
