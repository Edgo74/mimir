"use client";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "";
const isConfigured = !!CAL_LINK && !CAL_LINK.includes("REPLACE_ME");

/**
 * Cal.com embed via plain <iframe> on https://cal.com (not app.cal.com).
 * The official SDK has known issues with personal free accounts where its
 * iframe loads from app.cal.com and 404s — pointing the iframe directly at
 * cal.com/{slug}/embed sidesteps the entire SDK problem.
 */
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
          Cal.com · Setup requis
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
          Configurez votre embed Cal.com
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
          Définissez{" "}
          <code style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--cyan-neon)" }}>
            NEXT_PUBLIC_CAL_LINK
          </code>{" "}
          (format <code style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--cyan-neon)" }}>username/event-slug</code>) dans
          <code style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--cyan-neon)" }}> .env.local</code> en dev,
          ou Vercel → Environment Variables en prod.
        </p>
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ marginTop: "8px" }}
        >
          <span>Créer un compte Cal.com</span>
          <span className="arrow">→</span>
        </a>
      </div>
    );
  }

  const src = `https://cal.com/${CAL_LINK}/embed?layout=month_view&theme=dark`;
  const directLink = `https://cal.com/${CAL_LINK}`;

  return (
    <div style={{ width: "100%" }}>
      <iframe
        src={src}
        title="Cal.com — réservez votre restitution"
        loading="lazy"
        style={{
          width: "100%",
          minHeight: "720px",
          border: "1px solid var(--rule-dark)",
          borderRadius: "14px",
          background: "var(--encre)",
          colorScheme: "dark",
        }}
        allow="payment; camera; microphone"
      />
      <p
        style={{
          marginTop: "16px",
          textAlign: "center",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--text-on-dark-faint)",
        }}
      >
        Souci d&apos;affichage ?{" "}
        <a
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--cyan-neon)", textDecoration: "none" }}
        >
          Ouvrir le calendrier dans un nouvel onglet →
        </a>
      </p>
    </div>
  );
}
