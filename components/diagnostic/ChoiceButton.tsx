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
      className={`
        group relative w-full text-left transition-colors duration-150 cursor-pointer
        border ${selected ? "border-accent-deep" : "border-ink-line"}
        ${selected ? "bg-paper-2" : "bg-transparent hover:bg-paper-2/50"}
        ${large ? "px-6 py-8 flex flex-col items-center justify-center gap-3" : "px-5 py-4 flex items-center gap-4"}
      `}
    >
      {emoji && (
        <span className={`${large ? "text-4xl" : "text-2xl"} select-none`} aria-hidden>
          {emoji}
        </span>
      )}
      <span
        className={`flex-1 font-display ${large ? "text-[26px]" : "text-[19px]"} leading-tight ${
          selected ? "text-ink" : "text-ink"
        }`}
      >
        {children}
      </span>
      {!large && (
        <span
          className={`flex h-5 w-5 items-center justify-center shrink-0 transition-colors border ${
            multi ? "" : "rounded-full"
          } ${
            selected
              ? "bg-accent-deep border-accent-deep text-paper"
              : "border-ink-line text-transparent"
          }`}
        >
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
