"use client";

import { useEffect, useRef } from "react";

/**
 * Portal of Knowledge — DESIGN-SYSTEM.md §5.
 * Code ported as-is. Do not modify the spawning logic without
 * checking against DESIGN-SYSTEM.md.
 */
export function PortalBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const RUNES = [
      "ᛗᛁᛗᛁᚱ", "ᚦᚢᚱᛁᛊᚨᛉ", "ᚨᛚᚷᛁᛉ", "ᚱᛇᛞᛟ", "ᛟᚦᚨᛚᚨ",
      "ᛒᛖᚱᚲᚨᚾᚨ", "ᛞᚨᚷᚨᛉ", "ᚹᚢᚾᛃᛟ", "ᛇᚹᚨᛉ", "ᚺᚨᚷᚨᛚᚨᛉ",
      "ᚾᚨᚢᚦᛁᛉ", "ᛁᛊᚨ", "ᛃᛖᚱᚨ", "ᛈᛖᚱᚦᛟ", "ᛊᛟᚹᛁᛚᛟ",
      "ᛏᛁᚹᚨᛉ", "ᛖᚺᚹᚨᛉ", "ᚠᛖᚺᚢ", "ᚢᚱᚢᛉ", "ᚷᛖᛒᛟ",
    ];

    function makeBinaryWord() {
      let s = "";
      for (let i = 0; i < 8; i++) s += Math.random() < 0.5 ? "0" : "1";
      return s;
    }

    const PALETTE = [
      { weight: 55, type: "rune" as const },
      { weight: 35, type: "binary" as const },
      { weight: 10, type: "accent" as const },
    ];

    type ParticleType = (typeof PALETTE)[number]["type"];

    function weightedPick(arr: typeof PALETTE): ParticleType {
      const total = arr.reduce((s, o) => s + o.weight, 0);
      let r = Math.random() * total;
      for (const o of arr) {
        r -= o.weight;
        if (r <= 0) return o.type;
      }
      return arr[0].type;
    }
    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    function pick<T>(arr: T[]): T {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    let isVisible = !document.hidden;
    const onVis = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    let stopped = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function spawnParticle() {
      if (!isVisible || stopped || !root) return;
      const type = weightedPick(PALETTE);
      const el = document.createElement("span");
      el.className = "portal-particle";
      let text = "";
      if (type === "rune") {
        el.classList.add("rune");
        text = pick(RUNES);
      } else if (type === "accent") {
        el.classList.add("accent");
        text = Math.random() < 0.5 ? pick(RUNES) : makeBinaryWord();
        if (!/^[01]+$/.test(text)) el.classList.add("rune");
      } else {
        text = makeBinaryWord();
      }
      el.textContent = text;
      el.style.left = rand(3, 90) + "vw";
      el.style.top = rand(8, 90) + "vh";
      const duration = rand(0.7, 1.3);
      el.style.animationDuration = duration + "s";
      root.appendChild(el);
      timeouts.push(setTimeout(() => el.remove(), duration * 1000 + 60));
    }

    function tick() {
      if (stopped) return;
      if (isVisible && root && root.children.length < 18) spawnParticle();
      timeouts.push(setTimeout(tick, rand(120, 280)));
    }

    for (let i = 0; i < 8; i++) {
      timeouts.push(setTimeout(spawnParticle, i * 80));
    }
    tick();

    return () => {
      stopped = true;
      document.removeEventListener("visibilitychange", onVis);
      timeouts.forEach(clearTimeout);
      if (root) root.innerHTML = "";
    };
  }, []);

  return <div className="portal-bg" ref={ref} aria-hidden="true" />;
}
