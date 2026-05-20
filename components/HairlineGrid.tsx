import { Children, ReactElement, cloneElement, isValidElement, ReactNode } from "react";

/**
 * 3-column grid with vertical hairlines between columns.
 * On mobile (< 860px), hairlines flip to horizontal.
 */
export function HairlineGrid({
  children,
  cols = 3,
  bordered = true,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  /** Whether to draw outer top + bottom hairlines */
  bordered?: boolean;
}) {
  const items = Children.toArray(children);
  const colsClass =
    cols === 2 ? "md:grid-cols-2" : cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <div
      className={`grid grid-cols-1 ${colsClass} ${
        bordered ? "border-t border-b border-ink-line" : ""
      }`}
    >
      {items.map((child, i) => {
        const isLast = i === items.length - 1;
        if (!isValidElement(child)) return child;
        const c = child as ReactElement<{ className?: string }>;
        return cloneElement(c, {
          key: i,
          className: `${c.props.className ?? ""} ${
            isLast ? "" : "max-md:border-b max-md:border-ink-line md:border-r md:border-ink-line"
          }`.trim(),
        });
      })}
    </div>
  );
}
