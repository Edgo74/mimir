import { ReactNode } from "react";

export function Kicker({
  index,
  pulse = false,
  children,
}: {
  index?: string;
  pulse?: boolean;
  children: ReactNode;
}) {
  return (
    <span className="kicker">
      <span className={`dot ${pulse ? "dot-pulse" : ""}`} />
      <span>
        {index && <>{index} — </>}
        {children}
      </span>
      <span className="line" />
    </span>
  );
}
