import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "inline";

type Props = {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  /** Render on a dark section background — flips primary to paper-on-ink */
  invert?: boolean;
};

export function LinkCTA({
  href,
  variant = "inline",
  arrow = true,
  children,
  className = "",
  invert = false,
}: Props) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`cta-primary${invert ? "-invert" : ""} group inline-flex items-center gap-2 font-medium text-[16px] px-[22px] py-[14px] ${className}`}
      >
        <span>{children}</span>
        {arrow && (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
            →
          </span>
        )}
      </Link>
    );
  }
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`cta-ghost${invert ? "-invert" : ""} group inline-flex items-baseline gap-2 text-[16px] font-medium pb-1 ${className}`}
      >
        <span>{children}</span>
        {arrow && (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
            →
          </span>
        )}
      </Link>
    );
  }
  // inline
  return (
    <Link
      href={href}
      className={`cta-inline group inline-flex items-baseline gap-2 text-[16px] font-medium pb-1 ${className}`}
    >
      <span>{children}</span>
      {arrow && (
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
          →
        </span>
      )}
    </Link>
  );
}
