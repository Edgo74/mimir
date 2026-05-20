import { LogoMark } from "@/components/LogoMark";

/**
 * Static email mockup for the hackathon presentation.
 * Visit /demo/email and screenshot. No interactivity — pure visual.
 *
 * Scenario: "Marc Dupont" just completed the diagnostic. He receives this
 * email with his personalized IA report. Demonstrates the full lead-capture
 * + value loop in a single artifact.
 */
export default function EmailDemoPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--encre)",
        padding: "64px 24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          background: "#FFFFFF",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow:
            "0 30px 80px -20px rgba(0, 0, 0, 0.6), 0 10px 30px -10px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* ─── Email client chrome (Apple Mail / Gmail-ish) ─── */}
        <div
          style={{
            background: "#F4F4F6",
            borderBottom: "1px solid #E3E8F1",
            padding: "20px 28px",
            fontFamily: "var(--font-inter), -apple-system, sans-serif",
          }}
        >
          {/* Subject */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#0C0F1A",
              marginBottom: "14px",
              letterSpacing: "-0.2px",
            }}
          >
            Votre score IA cabinet — 64/100
          </div>

          <ClientRow label="De" value="MIMIR" sub="contact@mimir.ai" highlight />
          <ClientRow
            label="À"
            value="Marc Dupont"
            sub="marc.dupont@cabinet-dupont.fr"
          />
          <ClientRow label="Date" value="Aujourd'hui · 14:32" />
        </div>

        {/* ─── Email body ─── */}
        <div style={{ padding: "48px 48px 40px", background: "#FFFFFF" }}>
          {/* Brand header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingBottom: "32px",
              borderBottom: "1px solid #E3E8F1",
              marginBottom: "36px",
            }}
          >
            <LogoMark size={28} />
            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#0C0F1A",
                letterSpacing: "-0.4px",
              }}
            >
              MIMIR
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5A6478",
              }}
            >
              Rapport · sept. 2026
            </span>
          </div>

          {/* Salutation */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              color: "#0C0F1A",
              marginTop: 0,
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Bonjour Marc,
          </p>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              color: "#5A6478",
              marginBottom: "36px",
              lineHeight: 1.7,
            }}
          >
            Merci d&apos;avoir consacré deux minutes au diagnostic Mimir. Voici{" "}
            <strong style={{ color: "#0C0F1A", fontWeight: 600 }}>
              votre rapport personnalisé
            </strong>{" "}
            — calibré sur vos réponses, votre stack actuelle et la taille de votre cabinet.
          </p>

          {/* Score hero */}
          <div
            style={{
              background: "#0C0F1A",
              borderRadius: "14px",
              padding: "36px 32px",
              marginBottom: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#00D4FF",
              }}
            >
              ◉ Score IA cabinet
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "96px",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-3.5px",
                  color: "#FFFFFF",
                }}
              >
                64
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  color: "#00D4FF",
                  textTransform: "uppercase",
                }}
              >
                / 100
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: "16px 0 0",
                lineHeight: 1.55,
                maxWidth: "44ch",
              }}
            >
              Vous êtes dans le <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>3ᵉ quartile</strong>{" "}
              (en progression) des cabinets de 10-20 collaborateurs.
            </p>
          </div>

          {/* Recos block */}
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10.5px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2E5BA8",
              marginBottom: "18px",
            }}
          >
            ◉ Vos 3 chantiers prioritaires
          </div>

          <RecoLine
            num="01"
            tag="RGPD"
            title="Sécuriser l'usage de l'IA au regard du secret professionnel"
            desc="Charte d'usage IA + sélection d'outils hébergés UE. Cadrage en 2 semaines."
          />
          <RecoLine
            num="02"
            tag="Productivité"
            title="Automatiser la collecte et le pré-traitement des pièces"
            desc="Couplage Pennylane + règles IA personnalisées. Gain estimé : 40 à 60 % du temps de saisie."
          />
          <RecoLine
            num="03"
            tag="Conformité 2026"
            title="Sprint de mise en conformité facture électronique"
            desc="Diagnostic clients, choix de plateforme PDP, plan de bascule. Calé sur l'échéance de septembre 2026."
            last
          />

          {/* ROI estimate */}
          <div
            style={{
              marginTop: "32px",
              padding: "20px 24px",
              background: "#F4F4F6",
              borderLeft: "3px solid #00D4FF",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "#2E5BA8",
                marginBottom: "8px",
              }}
            >
              Potentiel estimé
            </div>
            <div
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "#0C0F1A",
                letterSpacing: "-0.6px",
                lineHeight: 1.15,
              }}
            >
              ~120 h/mois économisées
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#5A6478",
                  marginLeft: "8px",
                }}
              >
                sur 12 ETP
              </span>
            </div>
          </div>

          {/* CTA */}
          <div style={{ margin: "40px 0 32px" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "15px",
                color: "#5A6478",
                marginBottom: "20px",
                lineHeight: 1.6,
              }}
            >
              Pour aller plus loin, bookez une restitution de 45 min avec un expert. On vous explique
              chaque chantier, on chiffre votre ROI, et on cadre les prochaines étapes —{" "}
              <strong style={{ color: "#0C0F1A", fontWeight: 600 }}>sans engagement</strong>.
            </p>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#00D4FF",
                color: "#0C0F1A",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "16px 28px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Bookez votre restitution
              <span style={{ fontSize: "14px" }}>→</span>
            </a>
          </div>

          {/* Signature */}
          <div
            style={{
              paddingTop: "28px",
              borderTop: "1px solid #E3E8F1",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#5A6478",
              lineHeight: 1.6,
            }}
          >
            <div style={{ color: "#0C0F1A", fontWeight: 600, marginBottom: "4px" }}>
              Sarah Lefèvre
            </div>
            <div style={{ fontSize: "13px" }}>
              Lead consultant · Cabinets d&apos;expertise comptable
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                color: "#00D4FF",
                marginTop: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              sarah@mimir.ai · ᛗᛁᛗᛁᚱ · 秘密
            </div>
          </div>
        </div>

        {/* ─── Fine print footer ─── */}
        <div
          style={{
            background: "#F4F4F6",
            padding: "20px 48px",
            borderTop: "1px solid #E3E8F1",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5A6478",
            textAlign: "center",
            lineHeight: 1.7,
          }}
        >
          MIMIR · Transformation IA des cabinets d&apos;expertise comptable
          <br />
          Vous recevez cet email suite à votre diagnostic gratuit · se désabonner
        </div>
      </div>
    </div>
  );
}

function ClientRow({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontSize: "13px",
        marginBottom: "4px",
        color: "#5A6478",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#5A6478",
          width: "28px",
        }}
      >
        {label}
      </span>
      <span style={{ color: "#0C0F1A", fontWeight: highlight ? 600 : 400 }}>
        {value}
      </span>
      {sub && (
        <span style={{ color: "#5A6478", fontSize: "12px" }}>
          &lt;{sub}&gt;
        </span>
      )}
    </div>
  );
}

function RecoLine({
  num,
  tag,
  title,
  desc,
  last,
}: {
  num: string;
  tag: string;
  title: string;
  desc: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "20px",
        padding: "20px 0",
        borderBottom: last ? "none" : "1px solid #E3E8F1",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "32px",
          fontWeight: 700,
          color: "#DCE6F5",
          letterSpacing: "-1px",
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#00D4FF",
            marginBottom: "6px",
          }}
        >
          — {tag}
        </div>
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "17px",
            fontWeight: 700,
            color: "#0C0F1A",
            letterSpacing: "-0.3px",
            lineHeight: 1.25,
            marginBottom: "8px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            color: "#5A6478",
            lineHeight: 1.55,
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}
