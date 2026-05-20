export function PhaseCard({
  rune,
  numLabel,
  /** Raw HTML for title — supports <em> for cyan emphasis */
  titleHtml,
  when,
  description,
  livrables,
}: {
  rune: string;
  numLabel: string;
  titleHtml: string;
  when: string;
  description: string;
  livrables: string[];
}) {
  return (
    <article className="phase">
      <span className="phase-rune" aria-hidden>{rune}</span>
      <span className="phase-num">
        <span className="arc" />
        {numLabel}
      </span>
      <h3 dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <span className="phase-when">{when}</span>
      <p className="phase-desc">{description}</p>
      <div className="phase-livrables">
        <span className="k">Livrables</span>
        <ul>
          {livrables.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
