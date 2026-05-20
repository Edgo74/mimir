import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="bg-paper border-t border-ink-line pt-14 pb-10">
      <div className="shell">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="flex flex-col gap-2 max-w-[32ch]">
            <Brand size={26} sub={false} />
            <p className="m-0 font-display italic text-[13.5px] text-ink-soft">
              La sagesse opérationnelle de l&apos;IA pour les experts-comptables.
            </p>
          </div>
          <div className="flex gap-9 font-mono text-[11px] uppercase tracking-[0.12em]">
            <a href="/#methode" className="text-ink-mute hover:text-ink transition-colors">
              Méthode
            </a>
            <a href="/#tarifs" className="text-ink-mute hover:text-ink transition-colors">
              Tarifs
            </a>
            <a href="/#voix" className="text-ink-mute hover:text-ink transition-colors">
              Témoignages
            </a>
            <a href="/diagnostic" className="text-ink-mute hover:text-ink transition-colors">
              Diagnostic
            </a>
            <a href="#" className="text-ink-mute hover:text-ink transition-colors">
              Mentions
            </a>
          </div>
        </div>
        <div className="mt-9 pt-[18px] border-t border-ink-line flex justify-between items-center gap-4 flex-wrap font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-mute">
          <span>© Mimir · MMXXVI · Tous droits réservés</span>
          <span className="font-display italic text-[13.5px] tracking-[0.02em] text-ink-soft normal-case">
            — sagesse, vision, stratégie
          </span>
        </div>
      </div>
    </footer>
  );
}
