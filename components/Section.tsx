import { ReactNode } from "react";

type Variant = "dark" | "light" | "saphir";

export function Section({
  variant = "dark",
  hero = false,
  id,
  children,
  className = "",
}: {
  variant?: Variant;
  hero?: boolean;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  // section-light class is also applied at section level so descendant CSS
  // (.section-light .kicker etc.) can flip colors.
  const variantClass = variant === "light" ? "light section-light" : variant;
  return (
    <section id={id} className={`mimir-section ${variantClass} ${hero ? "hero" : ""} ${className}`}>
      <div className="mimir-shell">{children}</div>
    </section>
  );
}
