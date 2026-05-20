"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ChoiceButton({
  children,
  selected,
  onClick,
  index = 0,
  emoji,
  large,
  multi,
}: {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  index?: number;
  emoji?: string;
  large?: boolean;
  multi?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.04 * index, duration: 0.2 }}
      whileTap={{ scale: 0.99 }}
      className={`choice-btn ${selected ? "is-selected" : ""} ${large ? "is-large" : ""}`}
    >
      {emoji && (
        <span className={`choice-emoji ${large ? "large" : ""}`} aria-hidden>
          {emoji}
        </span>
      )}
      <span className={`choice-label ${large ? "large" : ""}`}>{children}</span>
      {!large && (
        <span className={`choice-tick ${multi ? "square" : "round"}`}>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6.5l2.5 2.5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </motion.button>
  );
}
