"use client";

import { motion } from "framer-motion";

export function ScoreGauge({ score }: { score: number }) {
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div style={{ position: "relative", width: "260px", height: "260px" }}>
      <svg
        viewBox="0 0 240 240"
        style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}
        aria-hidden
      >
        {/* Outer faint ring */}
        <circle cx="120" cy="120" r="112" fill="none" stroke="rgba(123,163,216,0.12)" strokeWidth="1" strokeDasharray="2 6" />
        {/* Track */}
        <circle cx="120" cy="120" r={radius} fill="none" stroke="var(--rule-dark)" strokeWidth="2" />
        {/* Progress */}
        <motion.circle
          cx="120"
          cy="120"
          r={radius}
          fill="none"
          stroke="var(--cyan-neon)"
          strokeWidth="3"
          strokeLinecap="butt"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "84px",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-3px",
            color: "#fff",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {score}
        </motion.div>
        <div
          style={{
            marginTop: "8px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "var(--cyan-neon)",
            fontWeight: 600,
          }}
        >
          / 100
        </div>
      </div>
    </div>
  );
}
