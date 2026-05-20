import { ElementType, CSSProperties } from "react";

type Props = {
  as?: "h1" | "h2";
  /** Raw HTML — used because we frequently embed <em> and <br /> from the reference */
  html: string;
  className?: string;
  style?: CSSProperties;
};

export function SectionTitle({ as = "h2", html, className = "", style }: Props) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={`section-title ${className}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
