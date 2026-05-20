import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "cyan";

type CommonProps = {
  variant?: Variant;
  arrow?: boolean;
  block?: boolean;
  children: ReactNode;
  className?: string;
};

type AsLink = CommonProps & { href: string; type?: never } & Omit<
  ComponentProps<"a">,
  "ref" | "href" | "className" | "children"
>;
type AsButton = CommonProps & { href?: undefined } & Omit<
  ComponentProps<"button">,
  "ref" | "className" | "children"
>;

type Props = AsLink | AsButton;

export function Button({
  variant = "primary",
  arrow = true,
  block = false,
  children,
  className = "",
  ...rest
}: Props) {
  const cls = `btn btn-${variant} ${block ? "btn-block" : ""} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <span className="arrow">→</span>}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    return (
      <Link href={href} className={cls} {...anchorRest}>
        {inner}
      </Link>
    );
  }
  const buttonRest = rest as Omit<ComponentProps<"button">, "ref" | "className" | "children">;
  return (
    <button className={cls} {...buttonRest}>
      {inner}
    </button>
  );
}
