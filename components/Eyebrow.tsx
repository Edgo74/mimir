import { ReactNode } from "react";

export function Eyebrow({
  numero,
  pulse,
  children,
  className = "",
  centered = false,
}: {
  numero?: string;
  pulse?: boolean;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft inline-flex items-center gap-2.5 ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      {pulse && (
        <span className="relative inline-block flex-none w-1.5 h-1.5 rounded-full bg-accent dot-pulse" />
      )}
      {numero && <span className="text-accent-deep">{numero}</span>}
      <span>{children}</span>
    </span>
  );
}
