import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "inline";

type Props = {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

export function LinkCTA({
  href,
  variant = "inline",
  arrow = true,
  children,
  className = "",
}: Props) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-2 font-medium text-[16px] bg-ink text-paper px-[22px] py-[14px] rounded-none transition-colors duration-150 hover:bg-ink-2 ${className}`}
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
        className={`group inline-flex items-baseline gap-2 text-[16px] font-medium text-ink border-b border-ink-line pb-1 transition-colors duration-150 hover:border-ink ${className}`}
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
      className={`group inline-flex items-baseline gap-2 text-[16px] font-medium text-ink border-b border-ink pb-1 transition-colors duration-150 hover:text-accent-deep hover:border-accent-deep ${className}`}
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
