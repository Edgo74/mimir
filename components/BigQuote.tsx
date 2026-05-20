import { ReactNode } from "react";

export function BigQuote({
  flourish = "NOMEN",
  children,
  cite,
}: {
  flourish?: string;
  children: ReactNode;
  cite?: string;
}) {
  return (
    <section className="py-[100px] pb-[110px] border-t border-ink-line text-center">
      <div className="shell">
        <span className="inline-flex items-center gap-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-mute">
          <span className="inline-block w-7 h-px bg-ink-line" />
          {flourish}
          <span className="inline-block w-7 h-px bg-ink-line" />
        </span>
        <blockquote
          className="font-display italic text-[clamp(34px,4.2vw,58px)] leading-[1.12] tracking-[-0.01em] mx-auto max-w-[26ch] text-ink mt-8"
          style={{ textWrap: "balance" }}
        >
          <span className="text-accent-deep">« </span>
          {children}
          <span className="text-accent-deep"> »</span>
        </blockquote>
        {cite && (
          <div className="mt-7 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-mute">
            {cite}
          </div>
        )}
      </div>
    </section>
  );
}
