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
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#16140F" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  if (!isConfigured) {
    return (
      <div
        className="relative border mx-auto max-w-[640px]"
        style={{
          background: "color-mix(in oklab, var(--paper) 92%, var(--ink) 4%)",
          borderColor: "rgba(244, 239, 230, 0.3)",
          padding: "48px 40px",
        }}
      >
        {/* inner inset border */}
        <span
          aria-hidden
          className="pointer-events-none absolute"
          style={{ inset: "14px", border: "1px solid rgba(244, 239, 230, 0.12)" }}
        />
        <div className="relative z-10 flex flex-col gap-5 items-center text-center">
          <span
            className="font-mono uppercase"
            style={{
              fontSize: "10.5px",
              letterSpacing: "0.16em",
              color: "rgba(244, 239, 230, 0.42)",
            }}
          >
            Cal.com · Setup requis
          </span>
          <h3
            className="font-display italic m-0"
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
            }}
          >
            « Configurez votre embed Cal.com »
          </h3>
          <p
            className="m-0 max-w-[44ch]"
            style={{
              fontSize: "15px",
              lineHeight: 1.55,
              color: "var(--ink-soft)",
            }}
          >
            Définissez la variable <code style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent-deep)" }}>NEXT_PUBLIC_CAL_LINK</code> avec votre lien
            (ex. <code style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent-deep)" }}>monusername/restitution-45min</code>) dans
            <code style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent-deep)" }}> .env.local</code> en dev,
            ou dans <span style={{ fontStyle: "italic" }}>Vercel → Settings → Environment Variables</span> en prod.
          </p>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-2 mt-1 font-medium"
            style={{
              fontSize: "14px",
              color: "var(--ink)",
              borderBottom: "1px solid var(--ink)",
              paddingBottom: "3px",
            }}
          >
            <span>Créer un compte Cal.com gratuit</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      id="cal-inline"
      style={{ width: "100%", minHeight: "640px", overflow: "scroll", background: "#F4EFE6" }}
      className="border border-paper/30"
    />
  );
}
