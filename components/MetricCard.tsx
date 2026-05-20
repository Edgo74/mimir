import { ReactNode } from "react";

type Metric = {
  /** Raw HTML allowed for <em> emphasis */
  numberHtml: string;
  label: string;
};

export function MetricCard({
  head,
  metrics,
  footer,
}: {
  head: { left: string; right: string };
  metrics: Metric[];
  footer: ReactNode;
}) {
  return (
    <aside
      className="relative border border-ink-line p-7 flex flex-col gap-5"
      style={{ background: "color-mix(in oklab, var(--paper) 92%, var(--ink) 4%)" }}
      aria-label="Repères"
    >
      {/* Inner inset border */}
      <span
        aria-hidden
        className="pointer-events-none absolute border border-ink-line-soft"
        style={{ inset: "14px" }}
      />

      <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute pb-3.5 border-b border-dashed border-ink-line relative z-10">
        <span>{head.left}</span>
        <span>{head.right}</span>
      </div>

      {metrics.map((m, i) => (
        <div
          key={i}
          className={`flex flex-col gap-1 relative z-10 ${
            i > 0 ? "pt-[18px] border-t border-dashed border-ink-line" : ""
          }`}
        >
          <div
            className="font-display text-[56px] leading-none tracking-[-0.02em] display"
            dangerouslySetInnerHTML={{ __html: m.numberHtml }}
          />
          <div className="text-[13.5px] text-ink-soft max-w-[32ch] leading-[1.45]">
            {m.label}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute mt-1 relative z-10">
        <span
          className="inline-block w-2 h-2 rounded-full bg-accent flex-none"
          style={{ boxShadow: "0 0 0 4px var(--accent-soft)" }}
        />
        {footer}
      </div>
    </aside>
  );
}
