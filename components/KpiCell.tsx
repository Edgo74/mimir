export function KpiCell({
  ix,
  /** Raw HTML for the value (supports <span class="unit">…</span>) */
  valueHtml,
  label,
  source,
}: {
  ix: string;
  valueHtml: string;
  label: string;
  source: string;
}) {
  return (
    <div className="stat-cell">
      <span className="ix">{ix}</span>
      <div className="value" dangerouslySetInnerHTML={{ __html: valueHtml }} />
      <p className="lbl">{label}</p>
      <span className="src">{source}</span>
    </div>
  );
}
