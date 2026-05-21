"use client";

import { useEffect, useRef } from "react";

/**
 * Well of Knowledge — pure SVG, anneaux concentriques en rotation.
 * Variant "hero" = version riche du hero. Variant "genese" = version genese.
 *
 * Interactive: parallax tilt suivant le curseur quand on survole le visuel.
 * Effet hologramme — GPU-only (transform 3D), respecte prefers-reduced-motion.
 */
export function WellVisual({
  variant = "hero",
  maxWidth = 560,
}: {
  variant?: "hero" | "genese";
  maxWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's reduced motion preference
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let rafId = 0;
    let targetRx = 0;
    let targetRy = 0;
    let targetTx = 0;
    let targetTy = 0;
    let currentRx = 0;
    let currentRy = 0;
    let currentTx = 0;
    let currentTy = 0;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2); // -1..1
      const dy = (e.clientY - cy) / (rect.height / 2); // -1..1
      // Max tilt 12deg, slight translation for parallax
      targetRy = dx * 12;
      targetRx = -dy * 12;
      targetTx = dx * 6;
      targetTy = dy * 6;
    };

    const onLeave = () => {
      targetRx = 0;
      targetRy = 0;
      targetTx = 0;
      targetTy = 0;
    };

    const tick = () => {
      // Smooth lerp toward target
      currentRx += (targetRx - currentRx) * 0.12;
      currentRy += (targetRy - currentRy) * 0.12;
      currentTx += (targetTx - currentTx) * 0.12;
      currentTy += (targetTy - currentTy) * 0.12;
      el.style.transform = `perspective(900px) rotateX(${currentRx.toFixed(2)}deg) rotateY(${currentRy.toFixed(2)}deg) translate3d(${currentTx.toFixed(2)}px, ${currentTy.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    // Listen on the section parent so the tilt reacts to a wider hover zone
    const parent = el.parentElement ?? el;
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(rafId);
      el.style.transform = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-visual"
      aria-hidden="true"
      style={{
        maxWidth,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" fill="none">
        {/* Halo extérieur */}
        <circle
          cx="250"
          cy="250"
          r="240"
          stroke="rgba(123,163,216,0.12)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* Anneaux concentriques en rotation lente avec runes orbitales */}
        <g className="rot-slow" style={{ transformOrigin: "250px 250px" }}>
          <circle
            cx="250"
            cy="250"
            r="210"
            stroke="#7BA3D8"
            strokeWidth="1"
            opacity="0.35"
            strokeDasharray={variant === "hero" ? "4 12" : "6 14"}
          />
          {variant === "hero" ? (
            <>
              <text x="250" y="55" fontFamily="var(--font-runic), sans-serif" fontSize="18" fill="#7BA3D8" textAnchor="middle" opacity="0.7">ᛗ</text>
              <text x="445" y="255" fontFamily="var(--font-runic), sans-serif" fontSize="18" fill="#7BA3D8" textAnchor="middle" opacity="0.7">ᛁ</text>
              <text x="250" y="465" fontFamily="var(--font-runic), sans-serif" fontSize="18" fill="#7BA3D8" textAnchor="middle" opacity="0.7">ᛗ</text>
              <text x="55" y="255" fontFamily="var(--font-runic), sans-serif" fontSize="18" fill="#7BA3D8" textAnchor="middle" opacity="0.7">ᛁ</text>
              <text x="395" y="105" fontFamily="var(--font-runic), sans-serif" fontSize="14" fill="#00D4FF" textAnchor="middle" opacity="0.85">ᚱ</text>
            </>
          ) : (
            <>
              <text x="395" y="105" fontFamily="var(--font-runic), sans-serif" fontSize="22" fill="#00D4FF" textAnchor="middle" opacity="0.85">ᚱ</text>
              <text x="105" y="395" fontFamily="var(--font-runic), sans-serif" fontSize="22" fill="#00D4FF" textAnchor="middle" opacity="0.85">ᚦ</text>
            </>
          )}
        </g>

        {/* Anneaux principaux */}
        <circle cx="250" cy="250" r="170" stroke="#7BA3D8" strokeWidth="1.2" opacity="0.55" />
        <circle cx="250" cy="250" r="130" stroke="#2E5BA8" strokeWidth="1.5" opacity="0.75" />
        <circle cx="250" cy="250" r="90" stroke="#2E5BA8" strokeWidth="1.8" />

        {/* Anneaux internes contre-rotation */}
        <g className="rot-rev" style={{ transformOrigin: "250px 250px" }}>
          <circle cx="250" cy="250" r="55" stroke="#00D4FF" strokeWidth="2" strokeDasharray="80 30" />
          <circle cx="250" cy="250" r="25" stroke="#00D4FF" strokeWidth="2" strokeDasharray="40 18" />
        </g>

        {/* Source centrale (cyan pulsing) */}
        <circle cx="250" cy="250" r="6" fill="#00D4FF" />
        <circle cx="250" cy="250" r="14" fill="none" stroke="#00D4FF" strokeWidth="0.8" opacity="0.5">
          <animate attributeName="r" values="14;26;14" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Rai de lumière diagonal */}
        <line x1="80" y1="80" x2="240" y2="240" stroke="#00D4FF" strokeWidth="1.5" opacity="0.7" />
        <circle cx="80" cy="80" r="4" fill="#00D4FF" />

        {/* Idéogrammes chinois */}
        {variant === "hero" ? (
          <text x="110" y="410" fontFamily="var(--font-sc), sans-serif" fontSize="22" fontWeight="700" fill="rgba(0,212,255,0.45)" letterSpacing="2">秘密</text>
        ) : (
          <text x="380" y="400" fontFamily="var(--font-sc), sans-serif" fontSize="28" fontWeight="700" fill="rgba(0,212,255,0.55)" letterSpacing="2">秘密</text>
        )}

        {/* Tirets latéraux */}
        {variant === "hero" && (
          <>
            <line x1="10" y1="250" x2="28" y2="250" stroke="#7BA3D8" strokeWidth="1.5" />
            <line x1="472" y1="250" x2="490" y2="250" stroke="#7BA3D8" strokeWidth="1.5" />
            <line x1="250" y1="10" x2="250" y2="28" stroke="#7BA3D8" strokeWidth="1.5" />
            <line x1="250" y1="472" x2="250" y2="490" stroke="#7BA3D8" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </div>
  );
}
