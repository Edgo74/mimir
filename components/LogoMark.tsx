type Variant = "default" | "saphir" | "white";

/**
 * Asymmetric Mimir logo — the "puits de la connaissance" seen from above.
 * Two concentric arcs + 3 dots + diagonal light ray.
 *
 * Variants:
 * - default : ciel outer arc + saphir inner arc + cyan accents (use on dark or light bg)
 * - saphir  : on a saphir-nuit background, inner arc passes to cyan
 * - white   : all strokes white (for icon-on-color usage)
 */
export function LogoMark({
  size = 28,
  variant = "default",
  className = "",
}: {
  size?: number;
  variant?: Variant;
  className?: string;
}) {
  const aspect = 140 / 115;
  const width = size * aspect;

  const palette =
    variant === "saphir"
      ? { outer: "#7BA3D8", inner: "#00D4FF", dot1: "#7BA3D8", dot2: "#00D4FF", ray: "#00D4FF" }
      : variant === "white"
      ? { outer: "#FFFFFF", inner: "#FFFFFF", dot1: "#FFFFFF", dot2: "#FFFFFF", ray: "#FFFFFF" }
      : { outer: "#7BA3D8", inner: "#2E5BA8", dot1: "#2E5BA8", dot2: "#00D4FF", ray: "#00D4FF" };

  // For default, the inner cyan dot is layered on top of dot1 (saphir).
  return (
    <svg
      className={className}
      width={width}
      height={size}
      viewBox="-10 -10 140 115"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path d="M 10 80 A 50 50 0 1 1 110 30" stroke={palette.outer} strokeWidth="3" />
      <path d="M 25 80 A 32 32 0 1 0 92 50" stroke={palette.inner} strokeWidth="3.5" />
      <circle cx="10" cy="80" r="6" fill={palette.dot1} />
      <circle cx="10" cy="80" r="3" fill={palette.dot2} />
      <circle cx="110" cy="30" r="4" fill={palette.dot2} />
      <line x1="92" y1="40" x2="108" y2="22" stroke={palette.ray} strokeWidth="3" />
    </svg>
  );
}
