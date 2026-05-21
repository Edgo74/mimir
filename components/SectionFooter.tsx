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
      <div className="right" style={{ marginLeft: "auto" }}>
        <span>
          Section {index} / {total}
        </span>
        <span>{label}</span>
      </div>
    </div>
  );
}
