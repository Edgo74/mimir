import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Topbar() {
  return (
    <header className="mimir-topbar">
      <div className="left">
        <Link href="/" className="brand" aria-label="MIMIR · accueil">
          <LogoMark size={22} />
          <span className="mark">MIMIR</span>
        </Link>
        <span className="sep" />
        <span>Transformation IA · Cabinets</span>
      </div>
      <nav className="nav">
        <a href="/#urgence">Marché</a>
        <a href="/#methode">Méthode</a>
        <a href="/#genese">Genèse</a>
        <a href="/#tarifs">Tarifs</a>
        <Link href="/diagnostic" className="cta">
          Diagnostic <span className="arrow">→</span>
        </Link>
      </nav>
    </header>
  );
}
