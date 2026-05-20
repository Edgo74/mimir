export function PhaseRow({
  numero,
  phaseLabel,
  /** Raw HTML for the H3 title (supports <em> + <br />) */
  titleHtml,
  description,
  livrables,
  isLast = false,
  dark = false,
}: {
  numero: string;
  phaseLabel: string;
  titleHtml: string;
  description: string;
  livrables: string[];
  isLast?: boolean;
  dark?: boolean;
}) {
  // Explicit colors (bulletproof — does not rely on inherited CSS var overrides)
  const colors = dark
    ? {
        accent: "var(--accent)",
        title: "#F4EFE6",
        body: "rgba(244, 239, 230, 0.62)",
        mute: "rgba(244, 239, 230, 0.42)",
        line: "rgba(244, 239, 230, 0.16)",
        bulletBg: "var(--accent)",
      }
    : {
        accent: "var(--accent-deep)",
        title: "var(--ink)",
        body: "var(--ink-soft)",
        mute: "var(--ink-mute)",
        line: "var(--ink-line)",
        bulletBg: "var(--accent)",
      };

  return (
    <article
      className="grid grid-cols-1 md:grid-cols-[100px_minmax(0,1.1fr)_minmax(0,1.8fr)] gap-10 max-md:gap-4 py-11 max-md:py-8 items-start transition-colors duration-[250ms]"
      style={{
        borderBottom: isLast ? "none" : `1px solid ${colors.line}`,
      }}
    >
      <div
        className="font-mono text-[12px] tracking-[0.16em] uppercase pt-3"
        style={{ color: colors.accent }}
      >
        {numero}
        <small
          className="block mt-1.5 normal-case tracking-[0.08em]"
          style={{ color: colors.mute }}
        >
          {phaseLabel}
        </small>
      </div>

      <h3
        className="font-display font-normal text-[clamp(34px,3.4vw,50px)] tracking-[-0.015em] leading-[1.05] m-0"
        style={{ color: colors.title }}
        dangerouslySetInnerHTML={{
          __html: titleHtml.replace(
            /<em>(.*?)<\/em>/g,
            `<em style="font-style:italic;color:${colors.accent}">$1</em>`
          ),
        }}
      />

      <div>
        <p
          className="text-[16px] leading-[1.55] m-0 mb-[18px] max-w-[56ch]"
          style={{ color: colors.body }}
        >
          {description}
        </p>
        <div
          className="mt-1 pt-4"
          style={{ borderTop: `1px dashed ${colors.line}` }}
        >
          <div
            className="font-mono text-[10.5px] tracking-[0.14em] uppercase mb-3"
            style={{ color: colors.mute }}
          >
            Livrables
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
            {livrables.map((l) => (
              <li
                key={l}
                className="text-[14.5px] flex items-start gap-2.5"
                style={{ color: colors.body }}
              >
                <span
                  className="inline-block w-1 h-1 rounded-full mt-2 flex-none"
                  style={{ background: colors.bulletBg }}
                  aria-hidden
                />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
