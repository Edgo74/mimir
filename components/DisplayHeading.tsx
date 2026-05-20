import { ElementType, ReactNode } from "react";

type Props = {
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
  className?: string;
  /** Pass raw HTML (e.g. with <em> tags) — used because the reference HTML embeds <em> inside headings */
  html?: string;
  /** Override max font-size scale (rare) */
  style?: React.CSSProperties;
};

const baseScales: Record<NonNullable<Props["as"]>, string> = {
  h1: "text-[clamp(56px,7.6vw,116px)] leading-[0.98]",
  h2: "text-[clamp(40px,5vw,72px)] leading-[1.02]",
  h3: "text-[clamp(34px,3.4vw,50px)] leading-[1.05]",
};

export function DisplayHeading({
  as = "h2",
  children,
  className = "",
  html,
  style,
}: Props) {
  const Tag = as as ElementType;
  const cls = `display font-display font-normal tracking-[-0.015em] text-ink ${baseScales[as]} ${className}`;
  if (html) {
    return <Tag className={cls} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return (
    <Tag className={cls} style={style}>
      {children}
    </Tag>
  );
}
