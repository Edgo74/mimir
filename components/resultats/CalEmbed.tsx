"use client";

import { useEffect } from "react";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "";
const isConfigured = !!CAL_LINK && !CAL_LINK.includes("REPLACE_ME");

export function CalEmbed() {
  useEffect(() => {
    if (!isConfigured) return;

    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...iargs: any[]) {
              p(api, iargs);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    (window as any).Cal("init", "restitution", { origin: "https://cal.com" });
    (window as any).Cal.ns.restitution("inline", {
      elementOrSelector: "#cal-inline",
      calLink: CAL_LINK,
      layout: "month_view",
    });
    (window as any).Cal.ns.restitution("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        dark: { "cal-brand": "#00D4FF" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

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

  return (
    <div
      id="cal-inline"
      style={{
        width: "100%",
        minHeight: "640px",
        overflow: "scroll",
        background: "var(--encre)",
        border: "1px solid var(--rule-dark)",
        borderRadius: "14px",
      }}
    />
  );
}
