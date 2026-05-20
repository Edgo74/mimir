import { LinkCTA } from "./LinkCTA";

export function PriceColumn({
  tag,
  /** Raw HTML for the price name (supports <em>) */
  nameHtml,
  amount,
  unit,
  description,
  features,
  ctaHref,
  ctaLabel = "Choisir ce forfait",
  featured = false,
  featuredBadge,
  className = "",
}: {
  tag: string;
  nameHtml: string;
  amount: string;
  unit: string;
  description: string;
  features: string[];
  ctaHref: string;
  ctaLabel?: string;
  featured?: boolean;
  featuredBadge?: string;
  className?: string;
}) {
  if (featured) {
    return (
      <article
        className={`relative bg-ink text-paper px-8 py-10 flex flex-col gap-[18px] ${className}`}
      >
        {featuredBadge && (
          <span
            className="absolute font-mono text-[10px] tracking-[0.14em] uppercase text-accent border border-accent px-2.5 py-1"
            style={{ top: "24px", right: "28px" }}
          >
            {featuredBadge}
          </span>
        )}
        <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-paper/40">
          {tag}
        </span>
        <div
          className="font-display text-[38px] tracking-[-0.015em] leading-none"
          dangerouslySetInnerHTML={{
            __html: nameHtml.replace(
              /<em>(.*?)<\/em>/g,
              '<em style="font-style:italic;color:var(--accent)">$1</em>'
            ),
          }}
        />
        <div
          className="flex items-baseline gap-2 py-3.5 border-t border-b border-dashed"
          style={{ borderColor: "rgba(244,239,230,0.16)" }}
        >
          <span className="font-display text-[44px] leading-none tracking-[-0.02em]">
            {amount}
          </span>
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-paper/40">
            {unit}
          </span>
        </div>
        <p className="text-[14.5px] leading-[1.5] text-paper/62 m-0 max-w-[36ch]">{description}</p>
        <ul className="list-none p-0 m-0 mt-2 flex flex-col gap-2.5 flex-1">
          {features.map((f) => (
            <li
              key={f}
              className="text-[14.5px] text-paper/62 flex items-start gap-2.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-accent before:mt-[9px] before:flex-none"
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-3.5">
          <a
            href={ctaHref}
            className="group inline-flex items-baseline gap-2 text-[14.5px] font-medium text-paper border-b border-paper pb-1 transition-colors duration-150 hover:text-accent hover:border-accent"
          >
            <span>{ctaLabel}</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className={`relative px-8 py-10 flex flex-col gap-[18px] ${className}`}>
      <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-mute">
        {tag}
      </span>
      <div
        className="font-display text-[38px] tracking-[-0.015em] leading-none display"
        dangerouslySetInnerHTML={{ __html: nameHtml }}
      />
      <div className="flex items-baseline gap-2 py-3.5 border-t border-b border-dashed border-ink-line">
        <span className="font-display text-[44px] leading-none tracking-[-0.02em]">{amount}</span>
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-mute">
          {unit}
        </span>
      </div>
      <p className="text-[14.5px] leading-[1.5] text-ink-soft m-0 max-w-[36ch]">{description}</p>
      <ul className="list-none p-0 m-0 mt-2 flex flex-col gap-2.5 flex-1">
        {features.map((f) => (
          <li
            key={f}
            className="text-[14.5px] text-ink-soft flex items-start gap-2.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-accent before:mt-[9px] before:flex-none"
          >
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-3.5">
        <LinkCTA href={ctaHref} variant="inline" className="text-[14.5px]">
          {ctaLabel}
        </LinkCTA>
      </div>
    </article>
  );
}
