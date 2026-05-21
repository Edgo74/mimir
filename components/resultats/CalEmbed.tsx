"use client";

/**
 * Booking CTA — replaces the broken iframe approach.
 *
 * Google Calendar Appointments (calendar.app.google) sends X-Frame-Options:
 * DENY on all booking pages, so iframes are impossible. Cal.com free plans
 * also blank-render in inline mode. The safe + on-brand pattern is a large
 * editorial CTA that opens the booking page in a new tab.
 *
 * Reads NEXT_PUBLIC_BOOKING_URL first, falls back to constructing a cal.com
 * URL from NEXT_PUBLIC_CAL_LINK for back-compat.
 */
const BOOKING_URL = (() => {
  const direct = process.env.NEXT_PUBLIC_BOOKING_URL;
  if (direct && !direct.includes("REPLACE_ME")) return direct;
  const legacy = process.env.NEXT_PUBLIC_CAL_LINK;
  if (legacy && !legacy.includes("REPLACE_ME")) return `https://cal.com/${legacy}`;
  return "";
})();

const isConfigured = !!BOOKING_URL;

function providerLabel(url: string) {
  if (url.includes("calendar.app.google")) return "Google Agenda";
  if (url.includes("calendly.com")) return "Calendly";
  if (url.includes("cal.com")) return "Cal.com";
  return "votre agenda";
}

export function CalEmbed() {
  if (!isConfigured) {
    return (
      <div className="res-cal-fallback">
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10.5px",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--cyan-neon)",
          }}
        >
          Booking · Setup requis
        </span>
        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(28px, 3.4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.8px",
            color: "#fff",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Définissez votre URL de réservation
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "15px",
            lineHeight: 1.55,
            color: "var(--text-on-dark-muted)",
            margin: 0,
            maxWidth: "44ch",
          }}
        >
          Renseignez{" "}
          <code style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--cyan-neon)" }}>
            NEXT_PUBLIC_BOOKING_URL
          </code>{" "}
          dans <code style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--cyan-neon)" }}>.env.local</code> (Google Agenda, Calendly, Cal.com…)
        </p>
      </div>
    );
  }

  const provider = providerLabel(BOOKING_URL);

  return (
    <div
      style={{
        position: "relative",
        background: "rgba(12, 15, 26, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "16px",
        padding: "56px 48px",
        overflow: "hidden",
        textAlign: "center",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      {/* Subtle radial accent in background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Mini icon — concentric rings echo the WellVisual */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          aria-hidden
          style={{ margin: "0 auto 24px" }}
        >
          <circle cx="28" cy="28" r="26" stroke="rgba(123,163,216,0.3)" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="28" cy="28" r="18" stroke="#7BA3D8" strokeWidth="1.2" opacity="0.6" />
          <circle cx="28" cy="28" r="10" stroke="#00D4FF" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="3" fill="#00D4FF" />
          <line x1="14" y1="14" x2="24" y2="24" stroke="#00D4FF" strokeWidth="1.2" opacity="0.8" />
        </svg>

        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10.5px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--cyan-neon)",
            marginBottom: "16px",
          }}
        >
          ● Disponibilités en direct
        </span>

        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(32px, 4.2vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1.2px",
            color: "#fff",
            lineHeight: 1.05,
            margin: "0 0 16px",
            textWrap: "balance",
          }}
        >
          Choisissez votre créneau
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.72)",
            margin: "0 auto 32px",
            maxWidth: "44ch",
          }}
        >
          45 minutes en visio avec un expert MIMIR. Sans engagement, sans carte bancaire — juste un
          créneau qui vous arrange.
        </p>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-cyan"
          style={{ fontSize: "12px", padding: "16px 28px" }}
        >
          Voir les disponibilités
          <span className="arrow">→</span>
        </a>

        <div
          style={{
            marginTop: "20px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10.5px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.42)",
          }}
        >
          S&apos;ouvre dans {provider} · Nouvel onglet
        </div>
      </div>
    </div>
  );
}
