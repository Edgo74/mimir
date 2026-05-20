export function SectionFooter({
  index,
  label,
  total = "07",
}: {
  index: string;
  label: string;
  total?: string;
}) {
  return (
    <div className="section-footer">
      <span>mimir · landing v3 · 2026</span>
      <div className="right">
        <span>
          Section {index} / {total}
        </span>
        <span>{label}</span>
      </div>
    </div>
  );
}
