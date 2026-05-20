"use client";

import { motion } from "framer-motion";

export function ScoreGauge({ score }: { score: number }) {
  const radius = 92;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-60 h-60">
      <svg viewBox="0 0 220 220" className="w-full h-full -rotate-90">
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="var(--ink-line)"
          strokeWidth="1.5"
        />
        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="var(--accent-deep)"
          strokeWidth="2"
          strokeLinecap="butt"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="font-display text-[88px] leading-none tracking-[-0.03em] text-ink tabular-nums"
        >
          {score}
        </motion.div>
        <div className="mt-1 font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-mute">
          / 100
        </div>
      </div>
    </div>
  );
}
