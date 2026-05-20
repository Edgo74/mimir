import Link from "next/link";

export function Brand({ size = 28, sub = true }: { size?: number; sub?: boolean }) {
  return (
    <Link
      href="/"
      className="font-display inline-flex items-baseline gap-2.5 font-normal leading-none tracking-[-0.01em]"
      style={{ fontSize: size }}
    >
      <em className="italic text-accent-deep">Mimir</em>
      {sub && (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute not-italic">
          — IA · Cabinets
        </span>
      )}
    </Link>
  );
}
