import { Brand } from "./Brand";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-ink-line-soft backdrop-blur-[18px] backdrop-saturate-150"
      style={{ background: "color-mix(in oklab, var(--paper) 78%, transparent)" }}
    >
      <div
        className="flex items-center justify-between mx-auto"
        style={{ maxWidth: "var(--shell)", padding: "22px 36px" }}
      >
        <Brand />
        <nav className="flex items-center gap-8">
          <a
            href="/#urgence"
            className="hidden md:inline text-[14px] text-ink-soft transition-colors hover:text-ink"
          >
            Marché
          </a>
          <a
            href="/#methode"
            className="hidden md:inline text-[14px] text-ink-soft transition-colors hover:text-ink"
          >
            Méthode
          </a>
          <a
            href="/#voix"
            className="hidden md:inline text-[14px] text-ink-soft transition-colors hover:text-ink"
          >
            Témoignages
          </a>
          <a
            href="/#tarifs"
            className="hidden md:inline text-[14px] text-ink-soft transition-colors hover:text-ink"
          >
            Tarifs
          </a>
          <a
            href="/diagnostic"
            className="group inline-flex items-center gap-2 font-medium text-[14px] text-ink border-b border-ink pb-0.5"
          >
            Diagnostic gratuit
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
